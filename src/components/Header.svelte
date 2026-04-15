<header>
	<img
		src="assets/background_sitio_2048.webp"
		srcset="assets/background_sitio_360.webp 360w,
			assets/background_sitio_480.webp 480w,
			assets/background_sitio_720.webp 720w,
			assets/background_sitio_1080.webp 1080w,
			assets/background_sitio_2048.webp 2048w"
		class="main-image"
		alt="Vista aérea do Sítio Itaguaçú com casa principal, piscina e churrasqueira em Embu-Guaçu"
	/>
	<div class="logo-container">
		<img
			src="assets/logo_sitio_504.webp"
			srcset="assets/logo_sitio_504.webp 504w,
				assets/logo_sitio_252.webp 252w"
			class="logo"
			alt="Sítio Itaguaçú - Eventos e Temporada em Embu-Guaçu"
		/>
		<h1 class="sr-only">Sítio Itaguaçú - Casamentos, Eventos e Temporada com Cachoeira em Embu-Guaçu SP</h1>
	</div>
</header>

<style>
	header {
		align-items: center;
		display: flex;
		justify-content: center;
	}

	header .main-image {
		max-width: 100%;
		filter: brightness(0.5);
	}

	.logo-container {
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.logo {
		width: 40vmin;
	}

	/* Screen reader only - hidden visually but accessible to search engines and assistive tech */
	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}
</style>
