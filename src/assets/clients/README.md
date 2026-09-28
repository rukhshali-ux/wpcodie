# Client logos

The "Clients who worked with us" ticker under the hero. These are the originals as supplied.
The site uses the trimmed, resized WebP copies in `public/clients/`. The list, the links, each
logo's display height and its card colour are in `clients` in `src/site/logic.js`.

| File | Client | Link |
|---|---|---|
| `findhealthcare-usa.png` | Find Healthcare USA | https://findhealthcare.com |
| `silver-streak-senior-services.png` | Silver Streak Senior Services | https://silverstreakhelp.com/ |
| `wellapy.png` | Wellapy | https://wellapy.gr |
| `shield-funding.png` | Shield Funding | https://shieldfunding.com |
| `resource-roadmap.png` | re:source Roadmap | https://resourceroadmap.com/ |
| `wagit.png` | WagIt | https://wagit.uk |
| `sme-blue-pages.png` | SME Blue Pages | https://smebluepages.com |
| `seattle-pro-contractors.png` | Seattle Pro Contractors (the logo reads "Seatle") | https://seattleprocontractors.com |
| `premier-fl-magazine.png` | Premier FL Magazine | https://premiereflmagazine.com |

All were supplied as small RGB PNGs without transparency, so each sits on a card of its own
background colour. The Seattle Pro file is a screenshot of a site header over a photo; it is
cropped to the logo, and its card uses a matching grey gradient.

To add a logo: put the original here, make a WebP copy in `public/clients/` (trimmed, at most
96px tall), and add a row to `clients` in `logic.js`.
