<script>
	import { Whatsapp } from '@components';
</script>

<svelte:head>
	<title>Casamento no Campo com Cachoeira - Sítio Itaguaçú | Embu-Guaçu SP</title>
	<meta name="description" content="Realize seu casamento dos sonhos no Sítio Itaguaçú. Cachoeira privativa, capacidade para 400 convidados, 6 suítes para noivos e padrinhos. A 47km de São Paulo." />

	<!-- Open Graph -->
	<meta property="og:title" content="Casamento no Campo com Cachoeira - Sítio Itaguaçú" />
	<meta property="og:description" content="Casamento rústico com cachoeira privativa em Embu-Guaçu. Até 400 convidados, hospedagem inclusa." />
	<meta property="og:image" content="https://sitioitaguacu.com.br/assets/background_sitio_1080.webp" />
	<meta property="og:url" content="https://sitioitaguacu.com.br/casamento" />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="pt_BR" />

	<!-- Twitter Cards -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Casamento no Campo com Cachoeira - Sítio Itaguaçú" />
	<meta name="twitter:description" content="Casamento rústico com cachoeira privativa em Embu-Guaçu, SP." />
	<meta name="twitter:image" content="https://sitioitaguacu.com.br/assets/background_sitio_1080.webp" />

	<link rel="canonical" href="https://sitioitaguacu.com.br/casamento" />

	{@html `<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "EventVenue",
		"name": "Sítio Itaguaçú - Casamentos",
		"description": "Espaço para casamento no campo com cachoeira privativa em Embu-Guaçu, SP",
		"url": "https://sitioitaguacu.com.br/casamento",
		"image": "https://sitioitaguacu.com.br/assets/background_sitio_1080.webp",
		"address": {
			"@type": "PostalAddress",
			"streetAddress": "Estrada Municipal do Baygton, 155 - Vale Tranquilo",
			"addressLocality": "Embu-Guaçu",
			"addressRegion": "SP",
			"postalCode": "06900-000",
			"addressCountry": "BR"
		},
		"maximumAttendeeCapacity": 400,
		"amenityFeature": [
			{"@type": "LocationFeatureSpecification", "name": "Cachoeira privativa"},
			{"@type": "LocationFeatureSpecification", "name": "Suíte da noiva"},
			{"@type": "LocationFeatureSpecification", "name": "Estacionamento amplo"},
			{"@type": "LocationFeatureSpecification", "name": "Espaço para cerimônia ao ar livre"},
			{"@type": "LocationFeatureSpecification", "name": "Salão para recepção"}
		]
	}
	</script>`}
</svelte:head>

<main class="page-content">
	<section class="hero">
		<div class="hero-overlay">
			<h1>Casamento no Campo em Embu-Guaçu</h1>
			<p class="subtitle">Com cachoeira privativa a 47km de São Paulo</p>
		</div>
	</section>

	<section class="intro container">
		<h2>Seu Casamento dos Sonhos na Natureza</h2>
		<p>
			Imagine trocar alianças ao pôr do sol, com o som da cachoeira ao fundo e a Mata Atlântica como cenário.
			No Sítio Itaguaçú, seu casamento no campo se torna uma experiência inesquecível para você e seus convidados.
		</p>
		<p>
			Localizado em Embu-Guaçu, a apenas 47km de São Paulo, oferecemos a combinação perfeita entre
			a tranquilidade do campo e a praticidade de estar perto da capital.
		</p>
	</section>

	<section class="features">
		<div class="container">
			<h2>Por que Casar no Sítio Itaguaçú?</h2>

			<div class="features-grid">
				<div class="feature-card">
					<h3>Cachoeira Privativa</h3>
					<p>
						Nosso maior diferencial: uma cachoeira exclusiva dentro da propriedade.
						Perfeita para fotos únicas e um cenário que seus convidados nunca esquecerão.
					</p>
				</div>

				<div class="feature-card">
					<h3>Capacidade para 400 Pessoas</h3>
					<p>
						Amplo espaço para cerimônias e recepções de todos os tamanhos.
						Desde casamentos intimistas até grandes celebrações.
					</p>
				</div>

				<div class="feature-card">
					<h3>Hospedagem no Local</h3>
					<p>
						6 suítes confortáveis que acomodam até 34 pessoas.
						Ideal para noivos, padrinhos e familiares passarem a noite sem preocupação.
					</p>
				</div>

				<div class="feature-card">
					<h3>Estrutura Completa</h3>
					<p>
						Espaço Gourmet com churrasqueira, cozinha industrial,
						piscina, salão de jogos e amplo estacionamento.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section class="ceremony-spaces container">
		<h2>Espaços para Cerimônia e Recepção</h2>

		<div class="space-item">
			<h3>Cerimônia ao Ar Livre</h3>
			<p>
				Jardim amplo com vista para a mata, perfeito para cerimônias ao pôr do sol.
				A cachoeira pode servir como altar natural para fotos espetaculares.
			</p>
		</div>

		<div class="space-item">
			<h3>Espaço Gourmet</h3>
			<p>
				Área coberta ideal para recepções, com churrasqueira, bar rústico,
				mesas bistrô inclusas e espaço para DJ ou banda.
			</p>
		</div>

		<div class="space-item">
			<h3>Área da Piscina</h3>
			<p>
				Para casamentos mais descontraídos no estilo pool party,
				com área kids para os pequenos convidados.
			</p>
		</div>
	</section>

	<section class="includes">
		<div class="container">
			<h2>O que Está Incluído</h2>
			<ul class="includes-list">
				<li>Uso exclusivo da propriedade por 24 horas ou mais</li>
				<li>6 suítes com capacidade para 34 pessoas</li>
				<li>Espaço Gourmet completo com churrasqueira</li>
				<li>Cozinha industrial equipada</li>
				<li>Mesas e cadeiras para até 100 pessoas (adicional sob consulta)</li>
				<li>Estacionamento para aproximadamente 80 veículos</li>
				<li>Acesso à cachoeira e áreas naturais</li>
				<li>Piscina e área de lazer</li>
				<li>Salão de jogos</li>
			</ul>
		</div>
	</section>

	<section class="faq container">
		<h2>Perguntas Frequentes sobre Casamentos</h2>

		<div class="faq-item">
			<h3>Posso levar meu próprio buffet?</h3>
			<p>
				Sim! Você tem total liberdade para contratar o buffet, decoração e
				fornecedores de sua preferência. Nossa cozinha industrial está
				preparada para receber qualquer equipe.
			</p>
		</div>

		<div class="faq-item">
			<h3>Qual o horário de entrada e saída?</h3>
			<p>
				O check-in é às 14h e o check-out às 12h do dia seguinte.
				Para casamentos, recomendamos reservar ao menos 2 diárias
				para montagem, evento e desmontagem com tranquilidade.
			</p>
		</div>

		<div class="faq-item">
			<h3>Vocês oferecem pacotes para casamento?</h3>
			<p>
				Trabalhamos com locação do espaço. Cada casal personaliza seu evento
				contratando os fornecedores que preferir. Podemos indicar parceiros
				de confiança da região.
			</p>
		</div>

		<div class="faq-item">
			<h3>É possível fazer a cerimônia religiosa no local?</h3>
			<p>
				Sim! Muitos casais realizam cerimônias ecumênicas ou religiosas
				em nosso jardim. O espaço é versátil e se adapta a diferentes
				estilos de celebração.
			</p>
		</div>

		<div class="faq-item">
			<h3>Como funciona em caso de chuva?</h3>
			<p>
				O Espaço Gourmet é coberto e comporta confortavelmente a cerimônia
				e recepção em caso de chuva. Recomendamos sempre ter um plano B
				para eventos ao ar livre.
			</p>
		</div>
	</section>

	<section class="cta">
		<div class="container">
			<h2>Agende sua Visita</h2>
			<p>
				Venha conhecer pessoalmente o espaço e se apaixonar.
				Agende uma visita sem compromisso pelo WhatsApp.
			</p>
			<a href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma visita para conhecer o espaço para casamento." class="cta-button">
				Falar no WhatsApp
			</a>
		</div>
	</section>

	<section class="location container">
		<h2>Localização</h2>
		<p>
			<strong>Endereço:</strong> Estrada Municipal do Baygton, 155 - Vale Tranquilo, Embu-Guaçu - SP
		</p>
		<p>
			<strong>Distância de São Paulo:</strong> 47km (aproximadamente 1 hora de carro)
		</p>
		<p>
			<a href="/#location">Ver no mapa</a>
		</p>
	</section>
</main>

<style>
	.page-content {
		margin-top: 60px;
	}

	.hero {
		background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
			url('/assets/background_sitio_1080.webp');
		background-size: cover;
		background-position: center;
		height: 60vh;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		color: white;
	}

	.hero h1 {
		font-size: 2.5rem;
		margin-bottom: 0.5rem;
	}

	.hero .subtitle {
		font-size: 1.25rem;
		opacity: 0.9;
	}

	.container {
		max-width: 900px;
		margin: 0 auto;
		padding: 3rem 1.5rem;
	}

	h2 {
		color: #353;
		text-align: center;
		margin-bottom: 1.5rem;
	}

	h3 {
		color: #353;
	}

	p {
		line-height: 1.7;
		color: #444;
	}

	.intro {
		text-align: center;
	}

	.intro p {
		font-size: 1.1rem;
		max-width: 700px;
		margin: 0 auto 1rem;
	}

	.features {
		background-color: #f5f5f5;
	}

	.features-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1.5rem;
		margin-top: 2rem;
	}

	.feature-card {
		background: white;
		padding: 1.5rem;
		border-radius: 8px;
		box-shadow: 0 2px 8px rgba(0,0,0,0.1);
	}

	.feature-card h3 {
		margin-bottom: 0.75rem;
		font-size: 1.1rem;
	}

	.feature-card p {
		font-size: 0.95rem;
		margin: 0;
	}

	.space-item {
		margin-bottom: 2rem;
		padding-bottom: 1.5rem;
		border-bottom: 1px solid #eee;
	}

	.space-item:last-child {
		border-bottom: none;
	}

	.includes {
		background-color: #353;
		color: white;
	}

	.includes h2 {
		color: white;
	}

	.includes-list {
		columns: 2;
		column-gap: 2rem;
		list-style: none;
		padding: 0;
	}

	.includes-list li {
		padding: 0.5rem 0;
		padding-left: 1.5rem;
		position: relative;
	}

	.includes-list li::before {
		content: "✓";
		position: absolute;
		left: 0;
		color: #8f8;
	}

	.faq-item {
		margin-bottom: 1.5rem;
		padding-bottom: 1.5rem;
		border-bottom: 1px solid #eee;
	}

	.faq-item h3 {
		font-size: 1.1rem;
		margin-bottom: 0.5rem;
	}

	.faq-item p {
		margin: 0;
	}

	.cta {
		background-color: #353;
		color: white;
		text-align: center;
	}

	.cta h2 {
		color: white;
	}

	.cta p {
		color: rgba(255,255,255,0.9);
		margin-bottom: 1.5rem;
	}

	.cta-button {
		display: inline-block;
		background-color: #25D366;
		color: white;
		padding: 1rem 2rem;
		border-radius: 50px;
		text-decoration: none;
		font-weight: bold;
		transition: transform 0.2s, box-shadow 0.2s;
	}

	.cta-button:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
	}

	.location {
		text-align: center;
	}

	.location a {
		color: #353;
	}

	@media (max-width: 768px) {
		.hero h1 {
			font-size: 1.75rem;
		}

		.includes-list {
			columns: 1;
		}

		.container {
			padding: 2rem 1rem;
		}
	}
</style>
