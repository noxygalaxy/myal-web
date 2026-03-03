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

## Data source

Upstream README content used for generation is stored in:

- `data/upstream-README.md`

The root `README.md` is intentionally website-focused for GitHub.
