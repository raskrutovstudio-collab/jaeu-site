import type { APIRoute } from 'astro';
import { canonicalUrl, indexablePaths } from '../data/site';

export const GET: APIRoute = () => {
  const urls = indexablePaths
    .map((path) => `  <url>\n    <loc>${canonicalUrl(path)}</loc>\n  </url>`)
    .join('\n');

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    '</urlset>',
    ''
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
};
