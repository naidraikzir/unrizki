<script lang="ts">
	let hidden = $state(true);

	$effect(() => {
		addEventListener('scroll', () => {
			hidden = window.scrollY < 1080;
		});
	});

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<button type="button" class:hidden onclick={scrollToTop}>▲</button>

<style>
	button {
		align-items: center;
		background: rgba(var(--color-background-rgb), 0.5);
		border-radius: 0.25em;
		bottom: 2em;
		color: var(--color-text-default);
		display: flex;
		font-size: 1.25em;
		height: 2em;
		justify-content: center;
		margin: 0;
		position: fixed;
		right: 0.75em;
		transition: 0.2s;
		width: 2em;

		&.hidden {
			opacity: 0;
			visibility: hidden;
		}

		@media screen and (min-width: 64em) {
			right: 1.25em;
		}

		@media screen and (min-width: 72em) {
			right: 2em;
		}
	}
</style>
