import type { PageLoad } from "./$types";
import { postListLoader } from "$lib/post-list-loader";

export const load: PageLoad = () => {
  const posts = postListLoader();
  return { posts };
};
