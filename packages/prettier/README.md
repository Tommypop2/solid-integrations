<p>
  <img width="100%" src="https://assets.solidjs.com/banner?type=Primitives&background=tiles&project=prettier" alt="Solid Primitives prettier">
</p>

# @solid-integrations/prettier

[![turborepo](https://img.shields.io/badge/built%20with-turborepo-cc00ff.svg?style=for-the-badge&logo=turborepo)](https://turborepo.org/)
[![size](https://img.shields.io/bundlephobia/minzip/@solid-integrations/prettier?style=for-the-badge&label=size)](https://bundlephobia.com/package/@solid-integrations/prettier)
[![version](https://img.shields.io/npm/v/@solid-integrations/prettier?style=for-the-badge)](https://www.npmjs.com/package/@solid-integrations/prettier)
[![stage](https://img.shields.io/endpoint?style=for-the-badge&url=https%3A%2F%2Fraw.githubusercontent.com%2Fsolidjs-community%2Fsolid-primitives%2Fmain%2Fassets%2Fbadges%2Fstage-0.json)](https://github.com/solidjs-community/solid-primitives#contribution-process)

A sample primitive that is made up for templating with the following options:

`createFormatted` - Provides a reactive resource - giving the prettier formatted version of the code provided.

## Installation

```bash
npm install @solid-integrations/prettier
# or
yarn add @solid-integrations/prettier
# or
pnpm add @solid-integrations/prettier
```

## How to use it

```ts
const [code, setCode] = createSignal(
  `function terriblyFormatted(     ){      console.log("This code is terribly formatted")}`,
);
const formattedCode = createFormatted(code);
```

## Changelog

See [CHANGELOG.md](./CHANGELOG.md)
