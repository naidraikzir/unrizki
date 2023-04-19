import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Unrizki",
  description: "Unrizki's Blog",
  cleanUrls: true,
  head: [
    ['meta', { name: 'keywords', content: 'unrizki, developer' }],
    ['meta', { name: 'author', content: 'unrizki' }],
    ['meta', { name: 'google-site-verification', content: 'C6PUpooLizJmY5GMc5givDPgKhx9wQo_RBfWuC0PFtc' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap' }],
    ['link', { rel: 'stylesheet', href: 'https://api.fontshare.com/css?f[]=satoshi@400,700&display=swap' }],
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }]
  ]
})
