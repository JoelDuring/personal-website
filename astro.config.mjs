// @ts-check
import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import sitemap from '@astrojs/sitemap';
import { markdownGutter } from './src/lib/markdown-gutter.mjs';
import { site } from './src/site.mjs';

export default defineConfig({
  site: site.origin,
  trailingSlash: 'always',
  integrations: [sitemap()],
  markdown: {
    processor: satteri({ hastPlugins: markdownGutter }),
    shikiConfig: { theme: 'github-light', wrap: false },
  },
});
