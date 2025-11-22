import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex, escapeSvelte } from 'mdsvex';
import { createHighlighter } from 'shiki';
import { addCopyButton } from 'shiki-transformer-copy-button'
import readingTime from 'mdsvex-reading-time'

const theme = 'houston';
const highlighter = await createHighlighter({
	themes: [theme],
	langs: [
		'apache',
		'css',
		'go',
		'html',
		'javascript',
		'json',
		'jsx',
		'kotlin',
		'lua',
		'makefile',
		'markdown',
		'nginx',
		'php',
		'python',
		'shellscript',
		'svelte',
		'tsx',
		'typescript',
		'vue',
		'yaml',
		'zig'
	]
});

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			highlight: {
				highlighter: async (code, lang = 'text') => {
					const html = escapeSvelte(highlighter.codeToHtml(code, {
					  lang,
						theme,
						transformers: [addCopyButton(code)]
					}));
					return `{@html \`${html}\` }`;
				}
			},
			remarkPlugins: [readingTime]
		})
	],

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter()
	},

	extensions: ['.svelte', '.md']
};

export default config;
