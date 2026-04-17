# Sítio Itaguaçú

Institutional website for [Sítio Itaguaçú](https://sitioitaguacu.com.br), a venue in Embu-Guaçu, SP for weddings, corporate events, weekends and vacation stays.

## Tech Stack

- [SvelteKit](https://kit.svelte.dev/) 2 + Svelte 5 (runes)
- TypeScript
- Vite
- [Netlify adapter](https://kit.svelte.dev/docs/adapter-netlify) for deploy
- Playwright for e2e tests
- pnpm as package manager

## Requirements

- Node.js >= 24
- pnpm

## Getting started

```bash
pnpm install
pnpm dev
```

The dev server runs at `http://localhost:5173`.

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start dev server |
| `pnpm build` | Production build |
| `pnpm preview` | Preview the production build locally |
| `pnpm test` | Run Playwright tests |
| `pnpm check` | Type-check with `svelte-check` |
| `pnpm lint` | Prettier + ESLint check |
| `pnpm format` | Format with Prettier |

## Project structure

```
src/
  app.html          # HTML shell (SEO meta, JSON-LD, GTM)
  routes/           # SvelteKit pages
    +layout.svelte  # Nav + Footer + Whatsapp
    +page.svelte    # Home
    casamento/      # Weddings
    eventos-corporativos/
    fim-de-semana/
    cachoeira/
    gallery/
    blog/           # SEO blog posts
  components/       # Shared components (aliased as @components)
static/             # Public assets, robots.txt, sitemap.xml
tests/              # Playwright tests
```

## Deploy

Deployed on Netlify via `@sveltejs/adapter-netlify`. Build config in [netlify.toml](netlify.toml).
