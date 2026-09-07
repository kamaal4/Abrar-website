// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Deployment target is configured entirely through env vars so the same repo can
// serve from a GitHub Pages project URL today and a custom domain later.
//   SITE_URL   e.g. https://user.github.io  or  https://investinrealestatehyd.com
//   BASE_PATH  e.g. /Abrar-website/         or  /
const site = process.env.SITE_URL || 'http://localhost:4321';
const base = process.env.BASE_PATH || '/';

// https://astro.build/config
export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
