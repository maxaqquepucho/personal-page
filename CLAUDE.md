# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

- `pnpm dev` — Start Astro dev server
- `pnpm build` — Astro production build
- `pnpm preview` — Preview production build locally
- `pnpm linter` — Format with Prettier (`npx prettier . --write`)

No test framework is configured.

## Architecture

Single-page personal portfolio site built with Astro 6, React 19 (for shadcn/ui components), TypeScript, Tailwind CSS v4, and SCSS for complex animations. Zero client-side JavaScript — all components are static Astro components.

**Entry flow:** `src/layouts/Layout.astro` → `src/pages/index.astro` → Components

**Component structure** (`src/components/`):
- **Header.astro** — Fixed top navigation bar with native anchor links (smooth scroll via CSS)
- **BackgroundHome.astro** — Animated grid background with blur lights and 3D perspective transform (hidden on mobile)
- **ExperienceItem.astro** — Reusable timeline entry for work experience
- **AboutMe.astro** — Bio section with photo
- **SocialNetworks.astro** — Social icon links using shadcn buttonVariants (GitHub, LinkedIn, Instagram, X)
- **Footer.astro** — Copyright with dynamic year (build-time)
- **ui/button.tsx** — shadcn/ui Button component (used via `buttonVariants()` for zero-JS styling)

**Data files** (`src/data/`):
- `experience.ts` — Work experience entries
- `social.ts` — Social network links with inline SVGs

**Utilities** (`src/lib/`):
- `utils.ts` — shadcn `cn()` utility (clsx + tailwind-merge)

## Styling Conventions

- **Tailwind CSS v4** (CSS-first config via `@tailwindcss/vite`) for layout, spacing, responsive breakpoints
- **SCSS** (`<style lang="scss" is:global>`) for complex animations (rotating conic-gradient border, moving grid background, blur lights)
- **Scoped Astro styles** (`<style>`) for simple component-specific CSS
- Global styles in `src/styles/global.css` — imports Tailwind, sets CSS custom properties, configures Onest Variable font
- Dark theme with blue (#2a8af6), pink (#e92a67), and purple (#a853ba) accents against near-black backgrounds
- Path alias: `@/*` maps to `src/*`
- shadcn/ui configured via `components.json` with `rsc: false`

## CI/CD

GitHub Actions workflow auto-merges `main` → `staging` on push to main.
