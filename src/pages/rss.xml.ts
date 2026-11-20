import rss from '@astrojs/rss';
import { articlePath, getWriting } from '../lib/writing';
import { site } from '../site.mjs';

export async function GET() {
  return rss({
    title: `${site.name} | Writing`,
    description: `Writing by ${site.name}.`,
    site: site.origin,
    trailingSlash: true,
    items: (await getWriting()).map(({ id, data }) => ({
      title: data.title,
      description: data.description,
      pubDate: data.pubDate,
      link: articlePath(id),
      categories: data.category ? [data.category] : undefined,
    })),
  });
}
