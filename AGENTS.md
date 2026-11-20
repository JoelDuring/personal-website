# joelduring.com

This is Joël During’s static Astro site. Use **Joël During** for the display name and `joelduring.com` for the domain. The site uses a white header, an off-white canvas, and monospace headings and navigation.

## Site structure

- Keep Home and About brief. The shared layout and navigation live in `src/layouts/Layout.astro`. The canonical origin and social URLs live in `src/site.mjs`.
- Keep the Writing page and RSS feed available when there are no articles. Add real posts as Markdown files in `src/content/writing/` using the frontmatter documented in the README. The archive, article routes, and RSS feed share the collection query in `src/lib/writing.ts`.
- The site builds to `dist/`. Keep the output static.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Use `npm run dev -- --background` to invoke the repository’s installed Astro CLI. Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`, or pass those subcommands through `npm run dev --`.

Before committing site changes, run `ASTRO_TELEMETRY_DISABLED=1 npm run build`. Astro may warn about the empty Writing collection until the first article is added.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
