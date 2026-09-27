// Screenshot-compares the site as it is in your working tree against a git revision
// (default: HEAD), so an edit can be checked for changes you did not intend.
//
//   npm run visual-diff              # working tree vs HEAD
//   npm run visual-diff -- main~3    # working tree vs any revision
//
// Both versions are built, served locally and captured at desktop (1440), tablet (820)
// and mobile (390) widths, top to bottom plus the intro screen, with animations and timers frozen so the
// screenshots are repeatable. Screens that differ are written to .visual-diff/ as
// before / after / diff images. Needs Chromium: `npx playwright install chromium` once.
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import http from 'node:http';
import os from 'node:os';
import path from 'node:path';
import { chromium } from 'playwright';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';

const ROOT = path.resolve(import.meta.dirname, '..');
const OUT = path.join(ROOT, '.visual-diff');
const rev = process.argv[2] || 'HEAD';
const VIEWPORTS = [[1440, 900, 'desktop'], [820, 1180, 'tablet'], [390, 844, 'mobile']];
const FREEZE = '*,*::before,*::after{animation:none!important;transition:none!important;caret-color:transparent!important}';

const run = (cmd, cwd) => execSync(cmd, { cwd, stdio: ['ignore', 'ignore', 'inherit'] });

// 1. Build both versions.
const before = fs.mkdtempSync(path.join(os.tmpdir(), 'wpcodie-before-'));
run(`git worktree add --detach "${before}" ${rev}`, ROOT);
try {
  fs.symlinkSync(path.join(ROOT, 'node_modules'), path.join(before, 'node_modules'), 'dir');
  console.log(`Building ${rev} and the working tree...`);
  run('npx astro build', before);
  run('npx astro build', ROOT);

  // 2. Serve and capture.
  const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.woff2': 'font/woff2', '.svg': 'image/svg+xml', '.png': 'image/png', '.txt': 'text/plain', '.xml': 'application/xml' };
  const serve = (dir) => new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      let file = path.join(dir, decodeURIComponent(new URL(req.url, 'http://x').pathname));
      if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
      if (!fs.existsSync(file)) { res.writeHead(404); return res.end(); }
      res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream' });
      fs.createReadStream(file).pipe(res);
    }).listen(0, () => resolve(server));
  });
  const servers = [await serve(path.join(before, 'dist')), await serve(path.join(ROOT, 'dist'))];
  const browser = await chromium.launch();

  async function capture(port) {
    const shots = {};
    for (const [w, h, name] of VIEWPORTS) {
      const page = await browser.newPage({ viewport: { width: w, height: h } });
      await page.clock.install({ time: new Date('2026-01-01T00:00:00Z') });
      await page.clock.pauseAt(new Date('2026-01-01T00:00:01Z'));
      await page.goto(`http://localhost:${port}/?intro=0`, { waitUntil: 'networkidle' });
      await page.addStyleTag({ content: FREEZE });
      await page.evaluate(() => document.fonts.ready);
      await page.waitForTimeout(500);
      const height = await page.evaluate(() => document.documentElement.scrollHeight);
      let i = 0;
      for (let y = 0; y < height; y += Math.round(h * 0.85)) {
        await page.evaluate((top) => window.scrollTo({ top, behavior: 'instant' }), y);
        await page.waitForTimeout(250);
        shots[`${name}-${String(i++).padStart(2, '0')}`] = await page.screenshot();
      }
      await page.close();
      // The intro screen, as a first-time visitor sees it (laptop closed).
      const intro = await browser.newPage({ viewport: { width: w, height: h } });
      await intro.clock.install({ time: new Date('2026-01-01T00:00:00Z') });
      await intro.clock.pauseAt(new Date('2026-01-01T00:00:01Z'));
      await intro.goto(`http://localhost:${port}/`, { waitUntil: 'networkidle' });
      await intro.addStyleTag({ content: FREEZE + ' iframe{visibility:hidden!important}' });
      await intro.evaluate(() => document.fonts.ready);
      await intro.waitForTimeout(500);
      shots[`${name}-intro`] = await intro.screenshot();
      await intro.close();
    }
    return shots;
  }
  const [a, b] = [await capture(servers[0].address().port), await capture(servers[1].address().port)];
  await browser.close();
  servers.forEach((s) => s.close());

  // 3. Compare.
  fs.rmSync(OUT, { recursive: true, force: true });
  fs.mkdirSync(OUT, { recursive: true });
  const changed = [];
  for (const key of new Set([...Object.keys(a), ...Object.keys(b)])) {
    if (!a[key] || !b[key]) { changed.push(`${key}: page length changed`); if (b[key]) fs.writeFileSync(path.join(OUT, `${key}-after.png`), b[key]); continue; }
    const A = PNG.sync.read(a[key]); const B = PNG.sync.read(b[key]);
    const diff = new PNG({ width: A.width, height: A.height });
    const n = pixelmatch(A.data, B.data, diff.data, A.width, A.height, { threshold: 0.1 });
    if (n) {
      changed.push(`${key}: ${n} pixels`);
      fs.writeFileSync(path.join(OUT, `${key}-before.png`), a[key]);
      fs.writeFileSync(path.join(OUT, `${key}-after.png`), b[key]);
      fs.writeFileSync(path.join(OUT, `${key}-diff.png`), PNG.sync.write(diff));
    }
  }
  console.log(changed.length ? `${changed.length} screen(s) differ from ${rev}:\n  ${changed.join('\n  ')}\nImages in .visual-diff/` : `No visual difference from ${rev}.`);
} finally {
  run(`git worktree remove --force "${before}"`, ROOT);
}
