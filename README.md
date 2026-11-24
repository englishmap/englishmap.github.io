<p align="center">
  <img src="docs/brand/logo.webp" alt="englishmap" width="480">
</p>

<p align="center">
  Resources for learning English online as an immersion, by level and cost.<br>
  <a href="https://englishmap.github.io/"><strong>englishmap.github.io</strong></a>
</p>

---

englishmap is a directory of resources for learning English online the way you would by living abroad: what to listen to, watch, read, speak and write in English every day, sorted by CEFR level (A1 to C2) and cost. It is inspired by [NewsMapp](https://github.com/newsmapp/newsmapp.github.io).

The site itself is written in Brazilian Portuguese, for Portuguese speakers learning English. It is free and non-commercial, with no ads, affiliate links or tracking.

## Features

- **49 resources in 10 categories:** setting up your surroundings, listening, watching, reading, speaking, writing, pronunciation, vocabulary, guided study and level tests.
- **What you need before clicking:** format, CEFR level range and whether it is free, freemium or paid.
- **Filters** by level, cost and text, kept in the URL so a filtered view can be shared.
- **An immersion guide:** why comprehensible input works, how to switch your devices and media to English, what to use at each stage, and a sample day with about two hours of English.
- **Light and dark themes**, no third-party requests at runtime.

## How it works

The catalog lives in [`data/catalog.json`](data/catalog.json) and is validated by a [Zod](https://zod.dev/) schema at build time, so a malformed entry fails the build. [Astro](https://astro.build/) turns it into a fully static site, and GitHub Actions checks, builds and publishes it to GitHub Pages on every push to `main`.

## Getting started

Requirements: Node.js 24 and pnpm 10 (or `mise install`).

```sh
pnpm install
pnpm dev          # http://localhost:4321
pnpm check        # formatting, types, catalog schema and tests
pnpm build        # outputs dist/
```

## Project structure

```
data/catalog.json   Catalog: categories and resources
src/schemas/        Catalog schema
src/lib/            Pure logic: catalog, filters, labels, paths
src/components/     UI components
src/pages/          Routes: / (resources), /como-montar/ (guide), 404
docs/               Design brief, decisions (ADRs) and brand files
```

## Adding a resource

Add an object to `data/catalog.json` with `id`, `name`, `url` (https), `category`, `format`, `summary` (up to 200 characters, in Portuguese), `from` and `to` (CEFR levels) and `cost` (`free`, `freemium` or `paid`), then run `pnpm check`.

A resource is listed when it is useful to someone studying alone at home, is online, and has its level and cost checked on its own site. No sponsored entries.
