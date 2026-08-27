import type { APIRoute } from 'astro';
import { productionOrigin } from '../data/site';

export const GET: APIRoute = () => {
  const body = ['User-agent: *', 'Allow: /', '', `Sitemap: ${productionOrigin}/sitemap.xml`, ''].join(
    '\n'
  );

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8'
    }
  });
};
