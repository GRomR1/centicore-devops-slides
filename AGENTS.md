# AGENTS.md

## What this repo is

This repository contains presentations and reports built using **Slidev**, a web-based slides maker built on Vite, Vue, and Markdown. It includes developer documentation, slides definitions, templates, and automated tools for generating and exporting PDF reports.

## Available CLI Scripts

- `pnpm run dev` - Start Slidev dev server.
- `pnpm run build` - Build the presentation into a static SPA (`documents/dist/`).
- `pnpm run build:pages` - Build production SPA for GitHub Pages (`--base / --without-notes`).
- `pnpm run preview` - Local preview of the production build in `documents/dist/` via Vite.
- `pnpm run export` - Export the presentation to PDF format (uses Playwright Chromium).

## Guidelines for Agents

- **Creating Slides**: Use the standard Slidev markdown format. Frontmatter at the top of the file regulates global settings, while subsequent sections delimited by `---` represent individual slides.
- **Custom Components**: Feel free to use built-in Vue components or standard HTML tags.
- **Dependencies**: Keep Slidev and Playwright dependencies up-to-date. Use `pnpm` exclusively.
