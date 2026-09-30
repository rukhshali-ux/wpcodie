# WPCodie website

The marketing site for WPCodie (https://wpcodie.com), a technology advisory and engineering
studio. One page today, built with Astro + Preact as a static site and hosted on Hostinger.

## The rule that matters most: the design is frozen

The page reproduces a finished design **pixel for pixel**. Change what was asked, and nothing
else:

- Never change inline styles, CSS files, spacing, colours, fonts or animations unless the
  request is explicitly about how something looks.
- Never "tidy" the markup: the `{" "}` whitespace nodes, wrapper elements, `sc-interp`
  spans, `scpN` classes and the `#dc-root > .sc-host` wrapper are all load-bearing. Removing
  one can move text by a pixel.
- Deliberate departures from the export, mostly for small screens: below 960px the header
  collapses into a menu button (`.hdr*` classes, rules at the end of `page.css`), and the
  intro's laptop screen stays hidden until the lid opens (`screenVis`, for iPhone Safari).
  Also added: the doodle stands in full on the lid on narrow screens (`doodleVals`), and a
  floating "Back to top" button (`.to-top`, shown after the first screen via `showTop`;
  an ↑ icon on phones), and on phones a floating, gently bobbing "Start a project" (`.m-cta`, `showCta`:
  shown past the hero, hidden once the contact section is on screen).
  On phones Capabilities is a swipe carousel instead of a pinned scroll (`.cap-*` rules in
  `page.css`; `capCarousel`, `capSwipe`, `capMove` in `logic.js`), and "01 What we do" uses an Advise | Engineer switch (`.what-tabs`, `whatTab`) and a
  swipeable row of steps (`.what-*` rules in `page.css`).
  The hero's "Scroll" hint moved to the Capabilities counter (`.scroll-hint`, `.cap-meta`).
  On every screen size: a "Clients we've worked with" logo ticker sits under the hero
  (`#clients`, `.client*` rules at the end of `page.css`; the list is `clients` in `logic.js`,
  the logos are in `public/clients/`, originals and notes in `src/assets/clients/`). The
  sections were reordered so proof comes early: 01 What we do, 02 Selected work, 03 AI,
  04 Applications, 05 Consulting, 06 Ideas into systems, 07 How we operate, 08 Contact.
  "Work" in the nav and footer goes to the portfolio page (`/portfolio/`), and Selected work
  ends with a "See all case studies" button (`.work-all`) linking there.
  Case study 01 (LegalFlow CRM) has a "Watch the demo" button (`.demo-btn`) that opens the
  Storylane demo in a pop-up (`.demo-modal`; `openDemo`/`closeDemo` and the demo address,
  `DEMO_SHARE`/`DEMO_EMBED`, at the top of `logic.js`). The iframe loads only when opened.
  On phones the pop-up fills the screen with a big "View full screen" button that turns the
  demo sideways (real full screen plus a landscape lock where the browser allows it; on iPhone,
  which has neither, the frame is rotated with CSS, `.demo-full`). Beside the button, Idea Guy
  from the intro points at it (`DemoDoodle.jsx`, `.demo-doodle` / `.dd-*` rules).
  The pop-up tells visitors how to use the Storylane demo (click, or tap on touch screens, the
  pulsing dots): `.demo-hint` under the demo, `.demo-hint-float` over it when it fills the screen.
  On phones the Contact section starts from its title right under the header, goes straight
  into the form, and hides the Email / Response / Include block (`.contact-wrap`,
  `.contact-info`).
  Spacing is one rhythm for every section: 88px above and below on desktop, 60px on phones (rules at the end of `page.css`), 28-40px between blocks on phones
  (Selected work and Consulting are brought into line by `#work>div` / `#consulting>div`
  rules), and menu links land each title 18px under the header (`scroll-margin-top:16px`).
  On phones "02 AI & intelligent applications", "03 Application development" and "06 How
  we operate" use swipe rows: the AI pipeline steps follow the active step (`aiFollow`), and
  the AI examples, the applications and the principles have a counter and previous / next
  buttons (`.ai-*`, `.app-*`, `.ops-*`, `.sw-*`
  rules in `page.css`; `swipeTo`, `swipeMove` in `logic.js`). Each application shows its
  details list there, since phones cannot hover.
  Below 960px the pinned "05 Ideas into systems" section sits under the header with compact
  step cards (`.flow-*` rules in `page.css`); the floating buttons hide while it is pinned.
- Never add a CSS framework (Tailwind etc.), a UI library or a web font.
- Copy changes are fine and expected. So are new pages and sections, when asked for, built
  from the same styles.

**Verify every change with `npm run visual-diff`** (see below). Only the screens you meant
to change may differ. Look at the images it writes before calling the change done.
  The copy is US English (centralized, center, inquiry); keep new copy in US spelling.

## Where things are

| What | Where |
|---|---|
| Page markup and one-off copy (headings, paragraphs, buttons) | `src/site/Home.jsx` |
| Copy for every repeated block: nav, capabilities, AI cards, applications, process steps, principles, case studies, form options | `src/site/logic.js`, in `renderVals()` / `workVals()` / `appsRaw()` |
| Page behaviour: intro, scroll effects, form | `src/site/logic.js` |
| Title, description, structured data (JSON-LD), llms.txt | `src/site/seo.js`, `src/pages/llms.txt.js` |
| Offices: address and phone of each (footer, Contact, JSON-LD, llms.txt). Each must match its Google Business Profile exactly | `src/site/business.js` (`OFFICES`; the first is the main one) |
| `<head>`: meta tags, preloads, CSS order | `src/pages/index.astro` |
| Design styles and fonts | `src/assets/css/`, `src/assets/fonts/` |
| Contact form email sender | `public/contact.php` |
| Server settings (HTTPS, caching, 404) | `public/.htaccess` |
| robots.txt, icons (`favicon.ico`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png`, `site.webmanifest`; drawn from the "W" logo, linked in every page's `<head>`), social image | `public/` |
| Old WordPress demo pages that Google still listed: answered 410 Gone (`/contact/` redirects to `/#contact`) | `public/.htaccess` |
| 404 page | `src/pages/404.astro` |
| Portfolio page (wpcodie.com/portfolio/): case studies, stats, filters | content `src/site/portfolio.js`, page `src/pages/portfolio.astro`, styles `src/assets/css/portfolio.css`; header for non-home pages `src/site/SiteHeader.jsx` |

Structured data and `llms.txt` are generated from the same content the page renders, so a
copy change in `logic.js` updates them automatically.

## How the page works

`Home.jsx` exports `template(v)`, the markup. `logic.js` exports the `Component` class; its
`renderVals()` returns the object `v` the template renders from. `dc.js` joins the two into
a Preact component (`Page.jsx`). Astro renders it to HTML at build time, so crawlers and AI
assistants read the full page without running JavaScript, then hydrates it in the browser
for the intro, scroll effects and form.

In `Home.jsx`: styles are strings passed through `css("...")`; a value shown inside text is
`{txt(v.thing)}`; lists are `{each(v.items).map(...)}`. Keep to those patterns.

## Commands

```bash
npm install
npm run dev            # http://localhost:4321
npm run build          # must pass before every commit
npm run visual-diff    # screenshots the working tree vs HEAD at desktop, tablet and mobile
npm run visual-diff -- main~1   # ...or vs any git revision
```

`visual-diff` writes `before`, `after` and `diff` images for each changed screen to
`.visual-diff/`. It needs Chromium once: `npx playwright install chromium` (already present
in Claude Code on the web).

## Deploying

A push to `main` builds the site and uploads `dist/` to Hostinger over FTP
(`.github/workflows/deploy.yml`), into `/domains/wpcodie.com/public_html/`. That folder
also holds an old WordPress install that is no longer served (`DirectoryIndex` in
`.htaccess` puts `index.html` first); the deploy never deletes files it did not upload.
The **Diagnose hosting** workflow (run it by hand) shows what the live site serves and
what is in that folder. It is live about a minute later. Undo a bad deploy with
`git revert <commit>` and push. The FTP credentials are GitHub repository secrets; never
put them in the repository.

## Contact form

The form posts JSON to `/contact.php`, which first saves the enquiry to
`/domains/wpcodie.com/enquiries/enquiries.csv` (outside the web root, so private; open it
from hPanel File Manager), then emails `service@wpcodie.com` with the enquirer's address as
Reply-To. The visitor sees success if it was saved or emailed. The **Test contact form**
workflow sends one labelled test enquiry end to end. It has a hidden spam-trap field (`website`) and allows five
messages an hour per IP address. `FROM` in `contact.php` must be a real mailbox on the
domain in Hostinger, or the mail will be marked as spam. Test it after any change to the
form: `npm run build`, then `php -S localhost:8000 -t dist` and submit the form.

## Adding a page

Create `src/pages/<name>.astro`. Import `../assets/css/styles.css` and
`../assets/css/page.css`, and reuse the header, footer and section styles from `Home.jsx`
so the new page matches the design. It is added to the sitemap automatically. Give it its
own `<title>`, meta description and canonical URL.

## Design previews

`wpcodie.com/preview/` (`src/pages/preview.astro`; noindex, not in the sitemap) is the
homepage with `pv-mobile` always on, so the owner can review a preview as its own page.
`wpcodie.com/?preview=mobile` does the same on the homepage itself: it adds the class
`pv-mobile` to `<html>` (inline script in `src/pages/index.astro`). Rules under `html.pv-mobile` at the end of `page.css` are proposals
the owner can try on a phone before they go live; the normal site ignores them. To make a
proposal live, drop the `html.pv-mobile` prefix. To discard it, delete the rules.
Nothing is being previewed right now, so `/preview/` shows the same page as the homepage. Live from earlier previews: an even section rhythm (88px above and below each section on desktop, 60px below 960px; the rules near the end of `page.css`), Idea Guy at the intro's size beside the demo button from 1200px, the Manchester office beside Kalispell in Contact and the footers, and, from 1200px, the demo button and Idea Guy above the LegalFlow illustration (`.demo-side`; `.demo-row-main` below 1200px). (The
"01 What we do" layout, the Capabilities carousel, the swipe rows in sections 02, 03 and 06,
the clients ticker, the section order and the LegalFlow demo pop-up went live from earlier previews.) A new preview also
needs the orange badge rule back: `html.pv-mobile body::after{content:'Preview';...}` in
`page.css`.
