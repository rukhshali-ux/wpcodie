// Content-Security-Policy, run after `astro build` (package.json "build").
//
// The policy tells browsers to run scripts, load styles, fonts and images, and open frames only
// from wpcodie.com (plus the Storylane demo), so a script injected into a page could not run or
// send anything anywhere. Inline <script>s are allowed by their SHA-256 hash, worked out here
// from the built pages on every build: editing an inline script can never silently break it.
//
// Rollout: for now the policy is a <meta> tag in /preview/ only. Going live means moving
// it to a Content-Security-Policy header in dist/.htaccess for every page, which also adds
// frame-ancestors (a <meta> policy cannot carry it).
import { createHash } from 'node:crypto';
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const DIST = fileURLToPath(new URL('../dist/', import.meta.url));
const PREVIEW_PAGE = join(DIST, 'preview/index.html');

// Script types a browser executes; anything else (application/ld+json) is data and needs no hash.
const RUNS = /^(|text\/javascript|application\/javascript|module)$/i;

function htmlFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = join(dir, e.name);
    if (e.isDirectory()) return htmlFiles(p);
    return e.name.endsWith('.html') ? [p] : [];
  });
}

function inlineScriptHashes(html) {
  const hashes = [];
  for (const [, attrs, body] of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
    if (/\bsrc\s*=/i.test(attrs)) continue;
    const type = /\btype\s*=\s*["']?([^"'\s>]*)/i.exec(attrs)?.[1] ?? '';
    if (!RUNS.test(type)) continue;
    hashes.push(`'sha256-${createHash('sha256').update(body, 'utf8').digest('base64')}'`);
  }
  return hashes;
}

const pages = htmlFiles(DIST);
const hashes = [...new Set(pages.flatMap((p) => inlineScriptHashes(readFileSync(p, 'utf8'))))].sort();

const directives = [
  "default-src 'self'",
  `script-src 'self' ${hashes.join(' ')}`,
  // Inline style attributes are how the pages are laid out (over a thousand of them); styles
  // cannot run code, so allowing them inline costs little.
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  // 'self': the laptop on the intro screen shows the site itself. Storylane: the LegalFlow demo.
  "frame-src 'self' https://demo.storylane.com https://app.storylane.io",
  "manifest-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
];
const policy = directives.join('; ');

const html = readFileSync(PREVIEW_PAGE, 'utf8');
const meta = `<meta http-equiv="Content-Security-Policy" content="${policy}">`;
// Must come before the first script, or the browser has already run it unchecked.
const out = html.replace(/<meta charset="[^"]*">/i, (m) => `${m}${meta}`);
if (out === html) throw new Error('csp.mjs: no <meta charset> in the preview page to anchor the policy');
writeFileSync(PREVIEW_PAGE, out);

console.log(`csp: ${hashes.length} inline script hash(es) from ${pages.length} page(s); policy added to /preview/`);
