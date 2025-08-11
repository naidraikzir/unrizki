<script lang="ts">
    import { onMount } from 'svelte';

    export let images: string[] = [];

    let collage: HTMLDivElement;
    let items: HTMLDivElement[] = [];
    let highestZIndex: number = 1;

    const getRandom = (min: number, max: number): number => Math.random() * (max - min) + min;

    const applyRandomTransforms = (): void => {
        if (collage && items.length === 0) {
            items = Array.from(collage.querySelectorAll('.item')) as HTMLDivElement[];
        }

        items.forEach((item: HTMLDivElement) => {
            const scale: number = getRandom(0.95, 1.05);
            const rotation: number = getRandom(-5, 5);

            item.style.transform = `scale(${scale}) rotate(${rotation}deg)`;
            item.style.zIndex = (highestZIndex++).toString();
        });
    };

    onMount(() => {
        items = Array.from(collage.querySelectorAll('.item')) as HTMLDivElement[];
        applyRandomTransforms();

        let resizeTimer: number;
        const handleResize = (): void => {
            clearTimeout(resizeTimer);
            resizeTimer = window.setTimeout(applyRandomTransforms, 100);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });
</script>

<div bind:this={collage} class="collage">
    {#each images as imageUrl, i (i)}
        <div class="item" data-image-url={imageUrl}>
            <img src={imageUrl} alt="Image {i + 1}">
        </div>
    {/each}
</div>

<style>
    .collage {
        display: grid;
        /* grid-auto-rows: repeat(auto-fill, minmax(20vh, 1fr)); */
        grid-template-columns: repeat(auto-fill, minmax(33%, 50%));
        grid-auto-flow: dense;
    }

    .item {
        position: relative;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        transform-origin: center center;
    }

    img {
        object-fit: cover;
        display: block;
        transition: 0.2s ease-out;

        &:hover {
            transform: scale(1.05);
            z-index: 2;
        }
    }
</style>
