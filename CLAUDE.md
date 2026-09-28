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

## Where things are

| What | Where |
|---|---|
| Page markup and one-off copy (headings, paragraphs, buttons) | `src/site/Home.jsx` |
| Copy for every repeated block: nav, capabilities, AI cards, applications, process steps, principles, case studies, form options | `src/site/logic.js`, in `renderVals()` / `workVals()` / `appsRaw()` |
| Page behaviour: intro, scroll effects, form | `src/site/logic.js` |
| Title, description, structured data (JSON-LD), llms.txt | `src/site/seo.js`, `src/pages/llms.txt.js` |
| `<head>`: meta tags, preloads, CSS order | `src/pages/index.astro` |
| Design styles and fonts | `src/assets/css/`, `src/assets/fonts/` |
| Contact form email sender | `public/contact.php` |
| Server settings (HTTPS, caching, 404) | `public/.htaccess` |
| robots.txt, favicon, social image | `public/` |
| 404 page | `src/pages/404.astro` |

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
Previewing now, on every screen size: a "Clients who worked with us" logo ticker under the
hero (`#clients`, `.client*` rules; logos in `public/clients/`, the list in `clients` in
`logic.js`), and a new section order (Selected work moves up to 02, after What we do) done with
CSS `order` and `data-pv` numbers. The last block of `page.css` says how to make it live.
(The "01 What we do" layout, the Capabilities carousel and the swipe rows in sections 02, 03
and 06 went live from earlier previews.)
