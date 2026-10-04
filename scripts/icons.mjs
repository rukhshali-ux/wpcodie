// Draws the browser-tab icons, app icons and the link-preview image (og.png) into public/ from
// the logo mark in src/site/LogoMark.jsx. Run after changing the logo or the hero:
//   npm run build && node scripts/icons.mjs
// Needs Chromium: `npx playwright install chromium` once.
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { chromium } from 'playwright';

const ROOT = path.resolve(import.meta.dirname, '..');
const PUBLIC = path.join(ROOT, 'public');
const DIST = path.join(ROOT, 'dist');

// Same drawing as LogoMark.jsx. `rx` 22 is the rounded tile (browser tabs); 0 is a full square
// for app icons, which phones and Google crop to their own shape.
const mark = (rx) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><rect width="96" height="96" rx="${rx}" fill="#2451B8"/><path d="M20 38 L35 68 L48 47 L61 68 L76 38" fill="none" stroke="#F5F4F0" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/><circle cx="48" cy="25" r="6.5" fill="#F2C94C"/></svg>`;

const browser = await chromium.launch(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {});

async function png(svg, size) {
  const page = await browser.newPage({ viewport: { width: size, height: size } });
  await page.setContent(`<html><body style="margin:0;background:transparent">${svg.replace('<svg ', `<svg width="${size}" height="${size}" `)}</body></html>`);
  const buf = await page.screenshot({ omitBackground: true, clip: { x: 0, y: 0, width: size, height: size } });
  await page.close();
  return buf;
}

// An .ico holding PNG images: a 6-byte header, a 16-byte entry per image, then the images.
function ico(images) {
  const header = Buffer.alloc(6 + 16 * images.length);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);
  let offset = header.length;
  images.forEach(([size, data], i) => {
    const e = 6 + 16 * i;
    header.writeUInt8(size % 256, e);
    header.writeUInt8(size % 256, e + 1);
    header.writeUInt16LE(1, e + 4);
    header.writeUInt16LE(32, e + 6);
    header.writeUInt32LE(data.length, e + 8);
    header.writeUInt32LE(offset, e + 12);
    offset += data.length;
  });
  return Buffer.concat([header, ...images.map(([, data]) => data)]);
}

fs.writeFileSync(path.join(PUBLIC, 'favicon.svg'), mark(22) + '\n');
fs.writeFileSync(path.join(PUBLIC, 'favicon.ico'), ico(await Promise.all([16, 32, 48].map(async (s) => [s, await png(mark(22), s)]))));
fs.writeFileSync(path.join(PUBLIC, 'icon-192.png'), await png(mark(0), 192));
fs.writeFileSync(path.join(PUBLIC, 'icon-512.png'), await png(mark(0), 512));
fs.writeFileSync(path.join(PUBLIC, 'apple-touch-icon.png'), await png(mark(0), 180));

// og.png: the top of the built homepage at 1200x630, the size link previews use.
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.woff2': 'font/woff2', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp' };
const server = await new Promise((resolve) => {
  const s = http.createServer((req, res) => {
    let file = path.join(DIST, decodeURIComponent(new URL(req.url, 'http://x').pathname));
    if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
    if (!fs.existsSync(file)) { res.writeHead(404); return res.end(); }
    res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream' });
    fs.createReadStream(file).pipe(res);
  }).listen(0, () => resolve(s));
});
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.goto(`http://localhost:${server.address().port}/?intro=0`, { waitUntil: 'networkidle' });
await page.addStyleTag({ content: '*,*::before,*::after{animation:none!important;transition:none!important}' });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(800);
await page.screenshot({ path: path.join(PUBLIC, 'og.png') });

await browser.close();
server.close();
console.log('icons: favicon.svg, favicon.ico, icon-192.png, icon-512.png, apple-touch-icon.png, og.png');
