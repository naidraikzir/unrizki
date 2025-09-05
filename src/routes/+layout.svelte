<script lang="ts">
	import type { Snippet } from 'svelte';
	import '$lib/index.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import ToTop from '$lib/components/ToTop.svelte';

	type Props = {
		children: Snippet;
	};

	let { children }: Props = $props();
</script>

<div class="wrapper">
	<Header />
	<div class="content">
		{@render children()}
	</div>
	<Footer />
	<ToTop />
</div>

<style>
	.wrapper {
		margin: 0 auto;
		max-width: 36em;
	}

	.content {
		min-height: calc(
			100dvh - (/* header */ 1 * 1.5rem + 1rem + 2rem) - (/* footer */ 1.5 * 0.75rem + 2rem + 2rem)
				/* line-height * font-size + y-margins + y-paddings */
		);
		padding: 1em;
	}
</style>
