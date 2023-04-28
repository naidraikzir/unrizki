import { createContentLoader } from 'vitepress'

export default createContentLoader('posts/*.md', {
  transform(raw) {
    return raw
      .filter((r) => !r.frontmatter.list_exclude)
      .sort(
        (a, b) => +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date)
      )
  }
})
