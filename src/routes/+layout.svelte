<script>
	import { Footer, Nav, Whatsapp } from '@components';
</script>

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

<svelte:window on:scroll|passive on:touchstart|passive />

<Nav />

<main>
	<slot></slot>
</main>

<Whatsapp />
<Footer />
