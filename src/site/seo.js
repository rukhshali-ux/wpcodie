// Everything search engines and AI assistants read about the site, derived from the same
// render values the page shows, so the structured data can never drift from the copy.
import Logic from './logic.js';

export const SITE = 'https://wpcodie.com';
export const NAME = 'WPCodie';
export const EMAIL = 'service@wpcodie.com';
export const TITLE = 'WPCodie — Technology consulting, AI & software';
export const DESCRIPTION =
  'WPCodie helps teams choose the right technology direction, then designs and ships AI products and custom software.';
export const TAGLINE = 'Clear direction first. Working software next.';

export function pageContent() {
  return new Logic({ motion: true, intro: true }).renderVals();
}

export function jsonLd() {
  const v = pageContent();
  const org = `${SITE}/#organization`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': org,
        name: NAME,
        url: `${SITE}/`,
        email: EMAIL,
        logo: `${SITE}/apple-touch-icon.png`,
        image: `${SITE}/og.png`,
        description: DESCRIPTION,
        slogan: TAGLINE,
        knowsAbout: [...new Set(v.caps.flatMap((c) => [c.title, ...c.tags]))],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Services',
          itemListElement: v.caps.map((c) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: c.title, description: c.body, provider: { '@id': org } },
          })),
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE}/#website`,
        url: `${SITE}/`,
        name: NAME,
        publisher: { '@id': org },
      },
      {
        '@type': 'WebPage',
        '@id': `${SITE}/#webpage`,
        url: `${SITE}/`,
        name: TITLE,
        description: DESCRIPTION,
        isPartOf: { '@id': `${SITE}/#website` },
        about: { '@id': org },
      },
    ],
  };
}
