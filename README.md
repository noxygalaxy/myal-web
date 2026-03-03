# Material You App List (Web)

VitePress website for the Material You App List.

## Live Site

- https://nyas1.github.io/myal-web/

## What this repo does

- Mirrors app data from `nyas1/Material-You-app-list`
- Generates website pages from synced upstream content
- Deploys automatically to GitHub Pages

## Commands

- `npm run docs:dev` — start local dev server
- `npm run docs:prepare` — regenerate docs from upstream data
- `npm run docs:build` — build static site
- `npm run docs:sync` — fetch upstream + regenerate docs + changelog

## Deploy on Vercel

This project is configured for Vercel via `vercel.json`:

- Build Command: `npm run docs:build`
- Output Directory: `docs/.vitepress/dist`
- Install Command: `npm ci`

### Dashboard setup

- Import this GitHub repository into Vercel.
- Vercel will auto-detect `vercel.json` settings.
- Deploy.

### CLI (optional)

- `npm i -g vercel`
- `vercel`
- `vercel --prod`

## Data source

Upstream README content used for generation is stored in:

- `data/upstream-README.md`

The root `README.md` is intentionally website-focused for GitHub.
