// The site header for pages other than the homepage (the homepage's own header is in Home.jsx).
// Same markup, styles and small-screen menu (.hdr* rules in page.css); links point back to the
// homepage sections. `current` is the href to highlight.
import { useState } from 'preact/hooks';
import { Button } from './ds.jsx';
import LogoMark from './LogoMark.jsx';

export const LINKS = [
  ['/#capabilities', 'Capabilities'],
  ['/portfolio/', 'Work'],
  ['/#ai', 'AI'],
  ['/#applications', 'Applications'],
  ['/#consulting', 'Consulting'],
  ['/#contact', 'Contact'],
];

export default function SiteHeader({ current = '' }) {
  const [open, setOpen] = useState(false);
  const color = (href) => (href === current ? '#2451B8' : '#2B2F3A');
  return (
    <header style="position:sticky;top:0;z-index:30;background:rgba(245,244,240,0.92);backdrop-filter:blur(8px);border-bottom:1px solid #E2DFD7">
      <div class="hdr" style="max-width:1280px;margin:0 auto;padding:14px 32px;display:flex;align-items:center;justify-content:space-between;gap:24px;flex-wrap:wrap">
        <a href="/" style="display:flex;align-items:center;gap:10px;color:#15181F">
          <LogoMark size={30} />
          <span style="font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:19px;letter-spacing:-0.01em">WPCodie</span>
        </a>
        <nav class="hdr-nav" style="display:flex;gap:4px;flex-wrap:wrap">
          {LINKS.map(([href, label]) => (
            <a key={href} href={href} aria-current={href === current ? 'page' : undefined}
              style={`padding:8px 14px;border-radius:8px;font-size:14px;font-weight:500;color:${color(href)};background:${href === current ? '#E3E8F4' : 'transparent'};transition:all 200ms cubic-bezier(0.4,0,0.2,1)`}>{label}</a>
          ))}
        </nav>
        <a class="hdr-cta" href="/#contact" style="display:inline-flex;--color-midnight:#F5F4F0">
          <Button>Start a project →</Button>
        </a>
        <button type="button" class="hdr-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open ? 'true' : 'false'} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true">
            {open ? <path d="M5 5 L15 15 M15 5 L5 15" /> : <path d="M3 6 H17 M3 10 H17 M3 14 H17" />}
          </svg>
        </button>
      </div>
      {open ? (
        <div id="mobile-menu" class="hdr-panel">
          {LINKS.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} style={`color:${color(href)}`}>{label}</a>
          ))}
          <a href="/#contact" onClick={() => setOpen(false)} class="hdr-panel-cta" style="display:flex;--color-midnight:#F5F4F0">
            <Button size="lg">Start a project →</Button>
          </a>
        </div>
      ) : null}
    </header>
  );
}
