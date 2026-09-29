// Everything search engines and AI assistants read about the site, derived from the same
// render values the page shows, so the structured data can never drift from the copy.
import Logic from './logic.js';

export const SITE = 'https://wpcodie.com';
export const NAME = 'WPCodie';
export const EMAIL = 'service@wpcodie.com';
export { ADDRESS, ADDRESS_LINES, PHONE, PHONE_DISPLAY } from './business.js';
import { ADDRESS, OFFICES, PHONE } from './business.js';
export const TITLE = 'AI & Custom Software Development | WPCodie';
export const DESCRIPTION =
  'WPCodie is an AI and custom software development company in Kalispell, MT, building AI apps, web and mobile apps, and technology roadmaps for clients worldwide.';
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
        telephone: PHONE,
        address: {
          '@type': 'PostalAddress',
          streetAddress: ADDRESS.street,
          addressLocality: ADDRESS.locality,
          addressRegion: ADDRESS.region,
          postalCode: ADDRESS.postalCode,
          addressCountry: ADDRESS.country,
        },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'sales',
          telephone: PHONE,
          email: EMAIL,
          availableLanguage: ['English'],
          areaServed: 'Worldwide',
        },
        areaServed: 'Worldwide',
        department: OFFICES.slice(1).map((o) => ({ '@id': `${SITE}/#office-${o.key}` })),
        logo: `${SITE}/icon-512.png`,
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
      // The other offices, each its own local business under the main one.
      ...OFFICES.slice(1).map((o) => ({
        '@type': 'ProfessionalService',
        '@id': `${SITE}/#office-${o.key}`,
        name: NAME,
        url: `${SITE}/`,
        email: EMAIL,
        telephone: o.phone,
        address: {
          '@type': 'PostalAddress',
          streetAddress: o.address.street,
          addressLocality: o.address.locality,
          ...(o.address.region ? { addressRegion: o.address.region } : {}),
          postalCode: o.address.postalCode,
          addressCountry: o.address.country,
        },
        parentOrganization: { '@id': org },
        image: `${SITE}/og.png`,
      })),
      {
        '@type': 'WebSite',
        '@id': `${SITE}/#website`,
        url: `${SITE}/`,
        name: NAME,
        alternateName: ['WPCodie Technologies', 'wpcodie.com'],
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
