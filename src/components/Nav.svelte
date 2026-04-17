<script lang="ts">
	let burger: HTMLElement, nav: HTMLElement, navList: HTMLElement;

	function handleClick(event: MouseEvent): void {
		if (event?.target === burger) {
			if (nav.style.width !== '100%') {
				nav.style.width = '100%';
				navList.style.display = 'flex';
			} else {
				nav.style.width = '3rem';
				navList.style.display = 'none';
			}
		} else {
			if (nav.style.width === '100%') {
				nav.style.width = '3rem';
				navList.style.display = 'none';
			}
		}
	}
</script>

<svelte:window onclick={handleClick} />

<nav bind:this={nav}>
	<div class="burger-container" bind:this={burger}>
		<div class="burger"></div>
	</div>
	<ul bind:this={navList}>
		<li><a href="/">Home</a></li>
		<li><a href="/casamento">Casamento</a></li>
		<li><a href="/fim-de-semana">Fim de Semana</a></li>
		<li><a href="/eventos-corporativos">Corporativo</a></li>
		<li><a href="/cachoeira">Cachoeira</a></li>
		<li><a href="/gallery">Galeria</a></li>
		<li><a href="/blog">Blog</a></li>
	</ul>
</nav>

<style>
	nav {
		align-items: center;
		background-color: rgba(0, 0, 0, 0.75);
		color: white;
		display: flex;
		font-weight: 400;
		height: 4rem;
		justify-content: center;
		position: fixed;
		top: 0;
		transition-duration: 0.3s;
		width: 100%;
		z-index: 10;
	}

	ul {
		display: flex;
		justify-content: space-between;
		margin: 0;
		padding: 0;
		min-width: 48em;
		gap: 0.5em;
	}

	li {
		display: block;
		float: left;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
		transition-duration: 0.3s;
	}

	a:hover {
		color: #797;
	}

	@media (max-width: 52em) {
		nav {
			background-color: rgba(0, 0, 0, 0.75);
			flex-direction: column;
			height: fit-content;
			justify-content: initial;
			right: 0;
			width: 3rem;
		}

		nav ul {
			display: none;
			flex-direction: column;
			text-align: center;
		}

		.burger-container {
			align-items: center;
			display: flex;
			justify-content: center;
			height: 3rem;
			width: 100%;
		}

		.burger {
			background-color: white;
			height: 0.25rem;
			width: 2rem;
		}

		.burger::before {
			background-color: white;
			content: '';
			display: block;
			height: 0.25rem;
			margin-top: -0.5rem;
			position: absolute;
			width: 2rem;
		}

		.burger::after {
			background-color: white;
			content: '';
			display: block;
			height: 0.25rem;
			margin-top: 0.5rem;
			position: absolute;
			width: 2rem;
		}
	}
</style>
