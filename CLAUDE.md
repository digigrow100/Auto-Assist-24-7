# CLAUDE.md

Guidance for making content changes to this Astro site.

## Where content changes go

| Content change            | Exact file path                          |
| -------------------------- | ----------------------------------------- |
| Home page                  | `src/pages/index.astro`                   |
| Other pages                | `src/pages/<page-name>.astro`             |
| Header                     | `src/components/Header.astro`             |
| Footer                     | `src/components/Footer.astro`             |
| Shared layout / page shell | `src/layouts/Layout.astro`                |
| Global CSS                 | `src/styles/global.css`                   |
| Site config (site URL etc) | `astro.config.mjs`                        |
| Optimized content images   | `src/assets/images/`                      |
| Static / public files      | `public/`                                 |

## Image rules

- ALL content images go in `src/assets/images/` — never in `public/`.
- Images must be imported and rendered with Astro's `<Image />` component
  (`astro:assets`) for automatic optimization. Do not use plain `<img>` tags
  for content images.
- Prefer `.webp` for image files.
- Every `<Image />` must always include `alt`, `width`, and `height`.

## Editing rules

- Only edit the specific file/component identified for a request. Never
  crawl through or "clean up" unrelated files.
- Never add dependencies unless explicitly asked to.
- If a request is ambiguous about which page or component it targets, ask
  before making changes.

## Commands

| Command           | Action                                     |
| ------------------ | ------------------------------------------- |
| `npm install`       | Install dependencies                        |
| `npm run dev`       | Start local dev server                      |
| `npm run build`     | Build the production site                   |
| `npm run preview`   | Preview the production build locally        |
