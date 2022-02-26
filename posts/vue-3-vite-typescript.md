---
title: My Vue 3 Vite Typescript Setup
date: 2021-09-03
lang: en-US
description: vue, vite, typescript
---

<img src="./vue-3-vite-typescript.svg" alt="vue 3 vite typescript" style="max-height: 400px">

Vue 3 has been out for almost a year. It supports Typescript out of the box because actually it is written in Typescript. I never used Typescript before. But here is my minimal setup for starting a Vue 3 project using Typescript which I hope I can learn Typescript by using it in a Vue project.

#### Scaffold using Vite

To start, we can initialize a project using vite

```bash
$ npm init vite
```

The setup will ask to install `create-vite`

```bash
Need to install the following packages:
  create-vite
Ok to proceed? (y)
```

just press _Enter_ to confirm.

After that it will ask the project name, just _Enter_ or you can name it whatever you want.

```bash
? Project name: › vite-project
```

Then it will ask to select a framework. You know what to choose 😁.

```bash
? Select a framework: › - Use arrow-keys. Return to submit.
    vanilla
❯   vue
    react
    preact
    lit-element
    svelte
```

And finally last question, variant. Choose `vue-ts`.

```bash
? Select a variant: › - Use arrow-keys. Return to submit.
    vue
❯   vue-ts
```

It will just download all required files into that `vite-project` folder in a few seconds.

When finished, go into that folder

```bash
$ cd vite-project
```

Now, we will install some dependencies to make our work easier and stricter.

```bash
$ npm install --save-dev \
    vue-global-api \
    vue-tsc@latest \
    eslint \
    eslint-plugin-vue \
    @typescript-eslint/eslint-plugin \
    @typescript-eslint/parser
```

After that import `vue-global-api` in __src/main.ts__ file at the first line.

```typescript
import 'vue-global-api'
```

Add import alias in __vite.config.ts__ file, so we don't have to write this confusing `import a from '../../../../a'`

```typescript
import path from 'path'

export default defineConfig({
  plugins: [vue()],

  // add this
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src')
    }
  }
})
```

Inside __tsconfig.json__ file, add `baseUrl` and `paths` inside `compilerOptions` for autocompletion.

```json
"compilerOptions": {
  ...,
  "baseUrl": ".",
  "paths": {
    "@/*": ["src/*"]
  }
}
```

Create __.eslintrc.js__ file with this config:

```javascript
module.exports = {
  env: {
    node: true,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  plugins: [
    '@typescript-eslint'
  ],
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'vue-global-api',
  ],
  rules: {
    'vue/component-name-in-template-casing': ['error', 'PascalCase', {
      "registeredComponentsOnly": false,
    }],
    'comma-dangle': ['error', 'always-multiline'],
  },
}
```

You can just empty the `rules` or use whatever eslint rules you want.

We use this setup to work using __vscode__, so we need to install __vite__ and __volar__ extensions for __vscode__. After both extensions installed, make sure __vue-ts-plugin__ at the bottom of the __vscode__ is enabled.

And finally don't forget to install __vue-devtools__ >= 6.0.0 which support vue 3. Search chrome webstore for "vue devtools" if you use chrome or edge. For firefox, you can download the _.xpi_ file from [https://github.com/vuejs/devtools/releases](https://github.com/vuejs/devtools/releases)

Happy building 😋.