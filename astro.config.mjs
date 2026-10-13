// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Deployment target is configured entirely through env vars, so the same repo builds for
// the custom domain or a sub-path host.
//   SITE_URL   e.g. https://investforassets.com  (set as a Cloudflare build variable)
//   BASE_PATH  e.g. /  (or /repo/ when served from a sub-path)
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
