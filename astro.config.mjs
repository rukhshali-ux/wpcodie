import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://wpcodie.com',
  // The /preview/ page is for the owner only: keep it out of the sitemap.
  integrations: [preact(), sitemap({ filter: (page) => !page.includes('/preview'), lastmod: new Date() })],
  build: {
    // One page: inlining the CSS removes a render-blocking request.
    inlineStylesheets: 'always',
  },
});
