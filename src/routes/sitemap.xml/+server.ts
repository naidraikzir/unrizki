// /src/routes/sitemap.xml/+server.ts
import * as sitemap from 'super-sitemap';
import * as env from '$env/static/public';
import type { RequestHandler } from '@sveltejs/kit';
import { postListLoader } from '$lib/post-list-loader';

export const prerender = true;

export const GET: RequestHandler = async () => {
  return await sitemap.response({
    origin: env.PUBLIC_ORIGIN,
    paramValues: {
      '/posts/[slug]': postListLoader().map(p => p.path)
    },
    additionalPaths: [
      '/resume.pdf'
    ],
  });
};
