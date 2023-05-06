import { createContentLoader, defineConfig } from 'vitepress'
import { SitemapStream } from 'sitemap'
import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Unrizki',
  description: 'When life gives you lemons, return them',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['meta', { name: 'keywords', content: 'unrizki, developer' }],
    ['meta', { name: 'author', content: 'unrizki' }],
    [
      'meta',
      {
        name: 'google-site-verification',
        content: 'C6PUpooLizJmY5GMc5givDPgKhx9wQo_RBfWuC0PFtc'
      }
    ],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    [
      'link',
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true
      }
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap'
      }
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://api.fontshare.com/css?f[]=satoshi@400,700&display=swap'
      }
    ],
    ['link', { rel: 'shortcut icon', href: '/favicon.png' }]
  ],
  transformHead: ({ page, siteData, pageData }) => {
    const title =
      page === '404.md'
        ? 'Not Found'
        : pageData.frontmatter.title || siteData.title
    const description =
      page === '404.md'
        ? 'Not Found'
        : pageData.frontmatter.description || siteData.description
    const head = []
    head.push(['meta', { property: 'og:title', content: title }])
    head.push(['meta', { property: 'og:description', content: description }])
    return head
  },
  buildEnd: async ({ outDir }) => {
    const sitemap = new SitemapStream({ hostname: 'https://unrizki.id' })
    const pages = await createContentLoader('*.md').load()
    const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))

    sitemap.pipe(writeStream)
    pages.forEach((page) =>
      sitemap.write(
        page.url
          // Strip `index.html` from URL
          .replace(/index$/g, '')
          // Optional: if Markdown files are located in a subfolder
          .replace(/^\/posts/, '')
      )
    )
    sitemap.end()

    await new Promise((r) => writeStream.on('finish', r))
  }
})
