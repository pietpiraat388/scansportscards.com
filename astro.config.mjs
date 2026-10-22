// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://scansportscards.com',
  trailingSlash: 'never',
  redirects: {
    '/sitemap.xml': '/sitemap-index.xml',
  },
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'always',
  },
});
