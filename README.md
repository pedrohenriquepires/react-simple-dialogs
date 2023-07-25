<div align="center">
  <a href="https://pedrohenriquepires.github.io/react-simple-dialogs-docs/docs/getting-started/Introduction" target="_blank"><img src="./docs/logo.svg" width="100%" /></a><br /><br />
  <a href="https://github.com/pedrohenriquepires/react-simple-dialogs/actions/workflows/build.yml" target="_blank"><img alt="Build" src="https://github.com/pedrohenriquepires/react-simple-dialogs/actions/workflows/build.yml/badge.svg"></a>
  <a href="https://github.com/pedrohenriquepires/react-simple-dialogs/actions/workflows/test.yml" target="_blank"><img alt="Test" src="https://github.com/pedrohenriquepires/react-simple-dialogs/actions/workflows/test.yml/badge.svg"></a>
  <img alt="License MIT" src="https://img.shields.io/badge/license-MIT-blue">
  <img alt="NPM Downloads" src="https://img.shields.io/npm/dt/react-simple-dialogs">
  <img alt="NPM Version" src="https://img.shields.io/npm/v/react-simple-dialogs">
</div>

# React Simple Dialogs

Beautiful dialogs with a simple usage. No unnecessary settings, native-like usage, **simple**.<br />
You can make it work in less than 10 seconds!

### [📖 Documentation](https://pedrohenriquepires.github.io/react-simple-dialogs-docs/docs/getting-started/Introduction)

### [✨ Examples](https://pedrohenriquepires.github.io/react-simple-dialogs-docs/docs/getting-started/Simple%20Usage)

# 🏗️ Instalation

```bash
# npm
npm install react-simple-dialogs
# yarn
yarn add react-simple-dialogs
# pnpm
pnpm add react-simple-dialogs
```

## Container

In order to correctly render the dialogs, you must place the `SimpleDialogContainer` near to your root component.

## Example

```tsx
import React from 'react'

import { SimpleDialogContainer, simpleAlert } from 'react-simple-dialogs'

function App() {
  const alert = () => simpleAlert('Easy peasy lemon squeezy!')

  return (
    <div>
      <button onClick={alert}>Alert!</button>
      <SimpleDialogContainer />
    </div>
  )
}
```

# 💡 Simple Usage

Use the dialogs is almost like use the dialogs native function (`alert`, `confirm` and `prompt`).

> All dialog function will return an `Promise` that only resolves when the user interacts with the dialog, so you can wait for the user interaction to continue your code execution.

## Alert Dialog

```tsx
import { simpleAlert } from 'react-simple-dialogs'

const showAlert = async () => {
  await simpleAlert("You can't do this right now.")

  console.log('Alert closed')
}
```

## Confirm Dialog

```tsx
import { simpleConfirm } from 'react-simple-dialogs'

const showConfirmation = async () => {
  if (await simpleConfirm('Please confirm something')) {
    console.log('Confirmed! 😄')
  } else {
    console.log('Not confirmed. 🥲')
  }
}
```

## Prompt Dialog

```tsx
import { simplePrompt } from 'react-simple-dialogs'

const showPrompt = async () => {
  const name = await simplePrompt('Please inform your name')

  console.log(`User name is ${name || 'a mistery'}`)
}
```
