<style>
	.location .content {
		flex-direction: column;
		width: 100%;
	}

	.location .content h1 {
		text-transform: uppercase;
		text-align: center;
	}

	.location .content .map {
		height: 30rem;
		margin-top: 16px;
		width: 100%;
	}

	.location .content p {
		text-align: center;
		font-weight: 700;
	}
</style>

<section id="location" class="location">
	<div class="content container">
		<h1>Localização</h1>
		<iframe
			title="map"
			class="map"
			id="gmap_canvas"
			src="https://maps.google.com/maps?q=S%C3%ADtio%20Itagua%C3%A7%C3%BA&t=k&z=13&ie=UTF8&iwloc=&output=embed"
			frameborder="0"
			scrolling="no"
			marginheight="0"
			marginwidth="0" 
		/>
		<p>Estrada Municipal do Baygton, 155 - Vale Tranquilo, Embu-Guaçu - SP, 06900-000</p>
	</div>
</section>
