<p>
  <img width="100%" src="https://assets.solidjs.com/banner?type=Primitives&background=tiles&project=html2canvas" alt="Solid Primitives html2canvas">
</p>

# @solid-integrations/html2canvas

[![turborepo](https://img.shields.io/badge/built%20with-turborepo-cc00ff.svg?style=for-the-badge&logo=turborepo)](https://turborepo.org/)
[![size](https://img.shields.io/bundlephobia/minzip/@solid-integrations/html2canvas?style=for-the-badge&label=size)](https://bundlephobia.com/package/@solid-integrations/html2canvas)
[![version](https://img.shields.io/npm/v/@solid-integrations/html2canvas?style=for-the-badge)](https://www.npmjs.com/package/@solid-integrations/html2canvas)
[![stage](https://img.shields.io/endpoint?style=for-the-badge&url=https%3A%2F%2Fraw.githubusercontent.com%2Fsolidjs-community%2Fsolid-primitives%2Fmain%2Fassets%2Fbadges%2Fstage-0.json)](https://github.com/solidjs-community/solid-primitives#contribution-process)

An integration for html2canvas, which contains the following functions:

- [`makeScreenshotURL`](#makescreenshoturl) - Makes an object URL to an image of the given html element.
- [`createScreenshotURL`](#createscreenshoturl) - Creates a resource

## Installation

```bash
npm install @solid-integrations/html2canvas
# or
yarn add @solid-integrations/html2canvas
# or
pnpm add @solid-integrations/html2canvas
```

## How to use it

## `makeScreenshotURL`

```ts
const imgURL: string = makeScreenshotURL(document.getElementById("root"));
```

## `createScreenshotURL`

```ts
const imgURL: Resource<string> = createScreenshotURL(document.getElementById("root"));
```

## Changelog

See [CHANGELOG.md](./CHANGELOG.md)
