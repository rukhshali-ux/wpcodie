import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://wpcodie.com',
  // /preview/ is for the owner only, and /portfolio/ waits for approval: keep them out of the sitemap.
  integrations: [preact(), sitemap({ filter: (page) => !page.includes('/preview') && !page.includes('/portfolio') })],
  build: {
    // One page: inlining the CSS removes a render-blocking request.
    inlineStylesheets: 'always',
  },
});
