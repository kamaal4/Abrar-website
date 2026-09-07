import type { APIRoute } from 'astro';

/**
 * Generated rather than static so the sitemap line always carries the real
 * deployed origin, whatever SITE_URL is set to at build time.
 */
export const GET: APIRoute = ({ site }) => {
  // `site` is the origin and `BASE_URL` the sub-path, so both are needed for a
  // project-page deployment served from https://user.github.io/repo/.
  const base = import.meta.env.BASE_URL;
  const path = `${base.endsWith('/') ? base : `${base}/`}sitemap-index.xml`;
  const sitemap = site ? new URL(path, site).href : path;
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
