<script>
	import { Footer, Nav, Whatsapp } from '@components';
</script>

<svelte:window on:wheel|passive on:touchstart|passive />

<Nav />

<main>
	<slot />
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
