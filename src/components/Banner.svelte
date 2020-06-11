<style>
	.banner-container {
		align-items: center;
		background-color: rgba(255, 255, 255, 0.9);
		color: black;
		display: flex;
		height: 4rem;
		justify-content: center;
		position: fixed;
		text-transform: uppercase;
		top: 0;
		width: 100%;
		z-index: 9;
	}

	.banner-space {
		margin-bottom: 4rem;
	}

	.banner-container .slide1 {
		animation-duration: 8s;
		animation-iteration-count: infinite;
		animation-name: slide1Fade;
		margin: 0;
		font-weight: 700;
	}

	.banner-container .slide2 {
		animation-duration: 8s;
		animation-iteration-count: infinite;
		animation-name: slide2Fade;
		align-items: center;
		display: flex;
		position: absolute;
	}

	.banner-container .slide2 h2 {
		font-weight: 700;
		margin: 0;
		margin-left: 20px;
	}

	@keyframes slide1Fade {
		0% {opacity: 1};
		37.5% {opacity: 1};
		50% {opacity: 0};
		87.5% {opacity: 0};
		100% {opacity: 1};
	}

	@keyframes slide2Fade {
		0% {opacity: 0};
		37.5% {opacity: 0};
		50% {opacity: 1};
		87.5% {opacity: 1};
		100% {opacity: 0};
	}
</style>

<div class="banner-container">
	<h1 class="slide1">Pacote fim de ano</h1>
	<div class="slide2">
		<p>31/dez a 02/jan</p>
		<h2>R$ 6.990</h2>
	</div>
</div>
<div class="banner-space"></div>
