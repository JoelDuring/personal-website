# joelduring.com

Joël During’s static Astro site. The canonical origin and social links are defined in [src/site.mjs](src/site.mjs).

## Development

Use Node.js as specified in [package.json](package.json).

```sh
npm ci
npm run dev -- --background
npm run dev -- status
npm run dev -- logs
npm run dev -- stop
```

Build with `ASTRO_TELEMETRY_DISABLED=1 npm run build`. The static hosting output is `dist/`, including `rss.xml`, `robots.txt`, and the sitemap.

## Add a post

Create a Markdown file in `src/content/writing/` with a lowercase, hyphenated filename. Add `title`, `description`, and `pubDate` (as `YYYY-MM-DD`) to its frontmatter. Optionally set `category` to `Engineering`, `Leadership`, or `Reflections`. The next build publishes the article at `/writing/<filename>/` and adds it to the archive and RSS feed.
