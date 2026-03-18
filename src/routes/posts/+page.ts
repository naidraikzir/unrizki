import { postListLoader } from '$lib/post-list-loader'

import type { PageLoad } from './$types'

export const load: PageLoad = () => {
  const posts = postListLoader()
  return { posts }
}
