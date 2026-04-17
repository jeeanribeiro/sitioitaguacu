# CLAUDE.md

Guidance for Claude Code when working in this repo.

## Project

SvelteKit 2 + Svelte 5 site for Sítio Itaguaçú (wedding/event venue in Embu-Guaçu, SP). Content is in **Portuguese (pt-BR)**; code, identifiers, and commits are in **English**. Deployed on Cloudflare Pages.

## Stack

- Svelte 5 with **runes** (`$props`, `$state`, `$derived`, `$effect`) — do not use legacy `export let` or reactive `$:` in new code.
- TypeScript + `svelte-check`.
- Vite.
- `@sveltejs/adapter-cloudflare`.
- Playwright for e2e (`pnpm test` builds + previews before running).
- pnpm (see `pnpm-lock.yaml`). Do not use npm or yarn.

## Commands

- `pnpm dev` — dev server.
- `pnpm build` — production build to `build/`.
- `pnpm check` — type-check; run before declaring work done on `.svelte`/`.ts` files.
- `pnpm lint` — Prettier + ESLint.
- `pnpm format` — auto-format.
- `pnpm test` — Playwright (slow; builds first).

## Conventions

- Components live in [src/components/](src/components/) and are re-exported from [src/components/index.ts](src/components/index.ts). Import via the `@components` alias: `import { Header } from '@components'`.
- When adding a new component, register it in the index barrel.
- Routes follow SvelteKit filesystem routing under [src/routes/](src/routes/).
- Page-level SEO (title, OG, JSON-LD) is declared in each route's `+page.svelte` inside `<svelte:head>`. See [src/routes/+page.svelte](src/routes/+page.svelte) for the pattern.
- Global `<head>` (charset, fonts, GTM, canonical, manifest) is in [src/app.html](src/app.html).
- Indentation is **tabs** (see Prettier config and existing files).

## SEO & content

- Every page should ship proper `<title>`, meta description, OG tags, and (where appropriate) `schema.org` JSON-LD.
- `sitemap.xml` and `robots.txt` are in [static/](static/) and are maintained by hand — update them when adding public routes.
- Canonical URL is `https://sitioitaguacu.com.br`.

## Deploy

Cloudflare Pages builds with `pnpm run build` and publishes `.svelte-kit/cloudflare`. Build settings are configured in the Cloudflare dashboard; there is no in-repo deploy config. No environment variables required at build time.

## Don't

- Don't add `package-lock.json` or `yarn.lock` — pnpm only.
- Don't remove SEO blocks from existing routes without an explicit ask.
- Don't change `lang="pt-BR"` in [src/app.html](src/app.html).
