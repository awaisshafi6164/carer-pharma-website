# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start development server
npm run build        # Production build (for Hostinger)
npm run build:gh     # Production build for GitHub Pages (sets VITE_BASE=gh)
npm run lint         # Run ESLint
npm run typecheck    # TypeScript type checking (tsc --noEmit)
npm run preview      # Preview production build locally
npm run deploy       # Build for GitHub Pages and deploy via gh-pages package
```

## Architecture

**Stack:** React 18 + TypeScript + Vite, React Router v7, Material-UI + Tailwind CSS (both used together), Emotion for CSS-in-JS.

**Entry point chain:** `index.html` → `main.tsx` → `App.tsx` → `<BrowserRouter>` with `<Layout>` wrapping all routes → page components.

**Routing:** All routes are defined in `App.tsx` and nested under `Layout.tsx`, which provides the persistent Header and Footer. The router basename is derived from `import.meta.env.BASE_URL` to handle different deployment paths.

**Data:** Company info, certifications, gallery images, and leadership data live in `src/data/company.ts`. Product catalog is split across `src/data/products.ts` and `src/data/productsComplete.ts`.

## Deployment

Two deployment targets with different base paths:

1. **Hostinger (primary):** GitHub Actions workflow (`.github/workflows/deploy.yml`) — manually triggered via `workflow_dispatch`. Builds with `npm run build` (base `/`), then FTP-deploys `dist/` to `/public_html/` using secrets `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`.

2. **GitHub Pages:** `npm run deploy` — sets `VITE_BASE=gh` so Vite uses `/carer-pharma-website/` as the base path. The `index.html` contains a redirect script that handles SPA routing on GitHub Pages (converts 404s to query params for client-side routing).

The base path logic is in `vite.config.ts`: `base: process.env.VITE_BASE === 'gh' ? '/carer-pharma-website/' : '/'`.
