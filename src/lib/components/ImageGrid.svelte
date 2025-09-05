<script lang="ts">
	type Props = {
		images: string[];
	};
	let { images }: Props = $props();
</script>

<div class="image-grid">
	{#each images as image}
		<img src={image} alt="" />
	{/each}
</div>

<style>
	.image-grid {
		align-items: flex-start;
		display: flex;
		flex-wrap: wrap;
		gap: 1em;
		justify-content: center;
	}

	img {
		width: auto;
	}

	@media screen and (min-width: 32em) {
		img {
			max-height: 15em;
		}
	}
</style>
