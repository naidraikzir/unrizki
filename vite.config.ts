import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite-plus'

export default defineConfig({
  lint: { options: { typeAware: true, typeCheck: true } },
  fmt: {
    singleQuote: true,
    semi: false,
    trailingComma: 'none',
    printWidth: 100,
    sortPackageJson: false,
    ignorePatterns: ['package-lock.json', 'pnpm-lock.yaml', 'yarn.lock']
  },
  staged: {
    '*.{ts,svelte}': ['vp lint --type-aware', 'vp fmt --no-error-on-unmatched-pattern']
  },
  plugins: [sveltekit()]
})
