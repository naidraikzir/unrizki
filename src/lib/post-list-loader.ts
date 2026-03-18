import type { SvelteComponent } from 'svelte'

export function postListLoader() {
  const glob_import = import.meta.glob<{
    default: SvelteComponent
    metadata: Record<string, string>
  }>('/src/posts/*.md', {
    eager: true,
  })

  return Object.entries(glob_import)
    .sort((a, b) => {
      return (
        new Date(b[1].metadata.date).getTime() -
        new Date(a[1].metadata.date).getTime()
      )
    })
    .map((post) => ({
      path: post[0].split('/').pop()?.replace('.md', '') as string,
      metadata: post[1].metadata,
    }))
}
