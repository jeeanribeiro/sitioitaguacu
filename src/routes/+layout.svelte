<script lang="ts">
	import { Footer, Nav, Whatsapp } from '@components';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<Nav />

<main>
	{@render children()}
</main>

<Whatsapp />
<Footer />

<style>
	main {
		background-color: white;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: 0 auto;
		position: relative;
	}
</style>
