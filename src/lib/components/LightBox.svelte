<script lang="ts">
	import { getLightbox } from '$lib/store.svelte';

	const lightbox = getLightbox();
</script>

<div class="lightbox" class:active={lightbox.open} on:click={() => lightbox.hide()} on:keydown={() => lightbox.hide()} role="button" tabindex="0">
	{#if lightbox.src}
		<img src={lightbox.src} alt="" />
	{/if}
</div>

<style>
	.lightbox {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.85);
		transition: 0.3s;
		opacity: 0;
		visibility: hidden;
		z-index: 1;

		&.active {
			opacity: 1;
			visibility: visible;
		}

		img {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			max-width: 90vw;
			max-height: 90vh;
			object-fit: contain;
		}
	}
</style>
