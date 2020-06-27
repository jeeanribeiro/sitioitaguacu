<script>
	import Banner from '../components/Banner.svelte';
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';
	import Whatsapp from '../components/Whatsapp.svelte';
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

<Nav />

<main>
	<slot></slot>
</main>

<Whatsapp />
<Footer />
