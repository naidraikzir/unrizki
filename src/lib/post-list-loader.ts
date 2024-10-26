import type { SvelteComponent } from "svelte";

export function postListLoader() {
  const glob_import = import.meta.glob<{
    default: SvelteComponent;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    metadata: Record<string, any>;
  }>(
    '/src/posts/*.md',
    {
      eager: true
    }
  );

  const posts = Object
    .entries(glob_import)
    .sort((a, b) => {
      return new Date(b[1].metadata.date).getTime() - new Date(a[1].metadata.date).getTime();
    })
    .map(post =>( {
      path: post[0].split('/').pop()?.replace('.md', '') as string,
      metadata: post[1].metadata
    }));

  return posts;
}
