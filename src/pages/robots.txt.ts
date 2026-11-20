import { site } from '../site.mjs';

export function GET() {
  return new Response(`User-agent: *\nAllow: /\nSitemap: ${site.origin}/sitemap-index.xml\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
