import { defineConfig } from 'vite'

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./.vitepress/theme/styles/variables";
          @import "./.vitepress/theme/styles/mixins";
          @import "./.vitepress/theme/styles/typography";
        `
      }
    }
  }
})
