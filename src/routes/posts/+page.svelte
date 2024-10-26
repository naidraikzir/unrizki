<script lang="ts">
	import Head from '$lib/components/Head.svelte';
	import PostList from '$lib/components/PostList.svelte';

	let { data } = $props();
	const { posts } = data;
</script>

<Head description="When life gives you lemons, return them" />

<PostList {posts} />
