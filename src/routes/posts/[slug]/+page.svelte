<script lang="ts">
	import { format, getYear } from 'date-fns';
	import Head from '$lib/components/Head.svelte';
	import { getLightbox } from '$lib/store.svelte';

	const lightbox = getLightbox();
	let { data } = $props();
	const Content = data?.content;
	const meta = data?.meta;

	$effect(() => {
		document.querySelectorAll('.post img').forEach((img) => {
			img.addEventListener('click', (e) => {
				const src = (e.target as HTMLImageElement)?.src;
				lightbox.show(src);
			})
		})
	})

	function formatDate(date = new Date()) {
		return format(
			new Date(date),
			`MMMM d${getYear(new Date()) > getYear(new Date(date)) ? ', yyyy' : ''}`
		);
	}
</script>

<Head title={meta?.title} description={meta?.description} />

<div class="head">
	<h2>{meta?.title}</h2>
	<div>{formatDate(meta?.date)} · {meta?.readingTime?.text}</div>
</div>

<div class="post">
	<Content />
</div>

<style>
	.head {
		margin-bottom: 1.5em;

		h2 {
			margin-top: 0;
			margin-bottom: 0.25em;
		}

		div {
			font-size: 0.9em;

 			&::before {
				content: '⏤';
				font-weight: 700;
				margin-right: 0.5em;
 			}
		}
	}

	.post > :global(p:first-child img) {
		object-fit: contain;
		height: 10em;

		@media screen and (min-width: 52em) {
			height: 15em;
		}
	}
</style>
