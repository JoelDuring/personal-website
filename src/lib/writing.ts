import { getCollection } from 'astro:content';

export async function getWriting() {
  const posts = await getCollection('writing');
  return posts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime()
    || a.id.localeCompare(b.id));
}

export function articlePath(id: string) {
  return `/writing/${encodeURIComponent(id)}/`;
}

export function readingMinutes(body = '') {
  const words = body.match(/[\p{L}\p{N}]+(?:[’'-][\p{L}\p{N}]+)*/gu) ?? [];
  return Math.max(1, Math.ceil(words.length / 220));
}

export const formatDate = new Intl.DateTimeFormat('en', {
  day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC',
}).format;
