# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

- `npm run dev` — Start Vite dev server
- `npm run build` — TypeScript compile + Vite production build
- `npm run lint` — Run ESLint
- `npm run linter` — Format with Prettier (`npx prettier . --write`)
- `npm run preview` — Preview production build locally

No test framework is configured.

## Architecture

Single-page personal portfolio site built with React 18, TypeScript, Vite (SWC), and a Tailwind CSS + SCSS hybrid styling approach. No routing library — uses hash-based anchors with `scrollIntoView()` for smooth section navigation via `useRef`.

**Entry flow:** `index.html` → `main.tsx` → `App.tsx` → `Home` (main content) + `Footer`

**Component structure** (`src/components/`):
- **Home/** — Main landing page; contains hero, experience timeline, and about-me sections. Experience data is hardcoded in this component. Manages refs for scroll navigation.
- **Header/** — Fixed top navigation bar with hash-link scroll targets
- **BackgroundHome/** — Animated grid background with blur lights and 3D perspective transform (hidden on mobile via Tailwind)
- **ExperienceItem/** — Reusable timeline entry (nested under Home/components/)
- **AboutMe/** — Bio section with photo
- **SocialNetworks/** — FontAwesome icon links (GitHub, LinkedIn, Instagram, X)
- **Footer/** — Copyright with dynamic year

## Styling Conventions

- **Tailwind utilities** for layout, spacing, responsive breakpoints, and simple styling directly in JSX
- **SCSS files** (one per component) for complex animations, gradients, and effects (e.g., rotating conic-gradient border, moving grid background)
- Global styles in `src/assets/scss/main.scss` — imports Tailwind directives, sets CSS custom properties, and configures the Onest Variable font
- Dark theme with blue (#2a8af6), pink (#e92a67), and purple (#a853ba) accents against near-black backgrounds
- Path alias: `@/*` maps to `src/*`

## CI/CD

GitHub Actions workflow auto-merges `main` → `staging` on push to main.
