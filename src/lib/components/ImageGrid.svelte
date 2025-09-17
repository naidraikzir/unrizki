<script lang="ts">
	import type { Attachment } from "svelte/attachments";

	type Props = {
		images: string[];
	};
	let { images }: Props = $props();

	const getImgSize: Attachment = (element: Element) => {
		const wrapper = element as HTMLElement;
		const img = wrapper.querySelector("img")
		const i = wrapper.querySelector("i")

		img?.addEventListener("load", (e) => {
			if (!i) return;

			const imgElement = e.target as HTMLImageElement;
			wrapper.style.width = `${imgElement.naturalWidth * 200 / imgElement.naturalHeight}px`
			wrapper.style.flexGrow = `${imgElement.naturalWidth * 200 / imgElement.naturalHeight}`
			i.style.paddingBottom = `${imgElement.naturalHeight / imgElement.naturalWidth * 100}%`
		})

		return () => {}
	}
</script>

<div class="image-grid">
	{#each images as image, i (i)}
		<div class="image-item" {@attach getImgSize}>
			<i></i>
			<img src={image} alt="" />
		</div>
	{/each}
</div>

<style>
	.image-grid {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5em;

		&::after {
			content: '';
			flex-grow: 999999999;
		}
	}

	.image-item {
		position: relative;
	}

	i {
		display: block;
	}

	img {
		position: absolute;
		top: 0;
		width: 100%;
		vertical-align: bottom;
	}
</style>
