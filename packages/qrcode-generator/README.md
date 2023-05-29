<p>
  <img width="100%" src="https://assets.solidjs.com/banner?type=Primitives&background=tiles&project=qrcode-generator" alt="Solid Primitives qrcode-generator">
</p>

# @solid-integrations/qrcode-generator

[![turborepo](https://img.shields.io/badge/built%20with-turborepo-cc00ff.svg?style=for-the-badge&logo=turborepo)](https://turborepo.org/)
[![size](https://img.shields.io/bundlephobia/minzip/@solid-integrations/qrcode-generator?style=for-the-badge&label=size)](https://bundlephobia.com/package/@solid-integrations/qrcode-generator)
[![version](https://img.shields.io/npm/v/@solid-integrations/qrcode-generator?style=for-the-badge)](https://www.npmjs.com/package/@solid-integrations/qrcode-generator)
[![stage](https://img.shields.io/endpoint?style=for-the-badge&url=https%3A%2F%2Fraw.githubusercontent.com%2Fsolidjs-community%2Fsolid-primitives%2Fmain%2Fassets%2Fbadges%2Fstage-0.json)](https://github.com/solidjs-community/solid-primitives#contribution-process)

An integration with [`qrcode-generator`](https://www.npmjs.com/package/qrcode-generator) for generating qr code data URLs:

- [`makeQRCode`](#makeqrcode) - Generates a QR Code Data URL.
- [`createQRCode`](#createqrcode) - Generates a memo containing the Data URL.

## Installation

```bash
npm install @solid-integrations/qrcode-generator
# or
yarn add @solid-integrations/qrcode-generator
# or
pnpm add @solid-integrations/qrcode-generator
```

## How to use it

## `makeQRCode`

Synchronously generates a data URL for a QR Code containing the given string

```ts
const qrCode = makeQRCode("Hello World");
```

## `createQRCode`

Returns a memo with the data URL for a QR Code

```ts
const [str, setStr] = createSignal("");
const qrCode = createQRCode(str); //The value of qrCode will reactively update when `str` changes.
```

## Changelog

See [CHANGELOG.md](./CHANGELOG.md)
