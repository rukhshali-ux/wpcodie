import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://wpcodie.com',
  integrations: [preact(), sitemap()],
  build: {
    // One page: inlining the CSS removes a render-blocking request.
    inlineStylesheets: 'always',
  },
});
