<script>
	import { About, Calendar, Header, Location, Structure } from '@components';
</script>

<svelte:head>
	<title>Sítio Itaguaçú - Casamentos e Eventos com Cachoeira em Embu-Guaçu SP</title>

	<!-- Open Graph -->
	<meta property="og:title" content="Sítio Itaguaçú - Casamentos e Eventos com Cachoeira em Embu-Guaçu SP" />
	<meta property="og:description" content="Sítio com cachoeira privativa para casamentos, eventos e fim de semana. 34 pessoas hospedadas, até 400 em eventos. A 47km de SP." />
	<meta property="og:image" content="https://sitioitaguacu.com.br/assets/background_sitio_1080.webp" />
	<meta property="og:url" content="https://sitioitaguacu.com.br" />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="pt_BR" />
	<meta property="og:site_name" content="Sítio Itaguaçú" />

	<!-- Twitter Cards -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Sítio Itaguaçú - Casamentos e Eventos com Cachoeira" />
	<meta name="twitter:description" content="Sítio com cachoeira privativa para casamentos, eventos e fim de semana. A 47km de SP." />
	<meta name="twitter:image" content="https://sitioitaguacu.com.br/assets/background_sitio_1080.webp" />

	<!-- Schema.org JSON-LD -->
	{@html `<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": ["LocalBusiness", "LodgingBusiness", "EventVenue"],
		"name": "Sítio Itaguaçú",
		"description": "Sítio com cachoeira privativa para casamentos, eventos, fim de semana e temporada em Embu-Guaçu, SP. Acomoda 34 pessoas para pernoite e até 400 para eventos.",
		"url": "https://sitioitaguacu.com.br",
		"image": "https://sitioitaguacu.com.br/assets/background_sitio_1080.webp",
		"address": {
			"@type": "PostalAddress",
			"streetAddress": "Estrada Municipal do Baygton, 155 - Vale Tranquilo",
			"addressLocality": "Embu-Guaçu",
			"addressRegion": "SP",
			"postalCode": "06900-000",
			"addressCountry": "BR"
		},
		"geo": {
			"@type": "GeoCoordinates",
			"latitude": -23.8833,
			"longitude": -46.8167
		},
		"priceRange": "$$",
		"amenityFeature": [
			{"@type": "LocationFeatureSpecification", "name": "Cachoeira privativa", "value": true},
			{"@type": "LocationFeatureSpecification", "name": "Piscina", "value": true},
			{"@type": "LocationFeatureSpecification", "name": "Churrasqueira", "value": true},
			{"@type": "LocationFeatureSpecification", "name": "Salão de jogos", "value": true},
			{"@type": "LocationFeatureSpecification", "name": "Espaço Gourmet", "value": true},
			{"@type": "LocationFeatureSpecification", "name": "Lagos de pesca", "value": true},
			{"@type": "LocationFeatureSpecification", "name": "Área para camping", "value": true},
			{"@type": "LocationFeatureSpecification", "name": "Playground", "value": true}
		],
		"maximumAttendeeCapacity": 400,
		"numberOfRooms": 7,
		"petsAllowed": false,
		"checkinTime": "14:00",
		"checkoutTime": "12:00",
		"areaServed": {
			"@type": "GeoCircle",
			"geoMidpoint": {
				"@type": "GeoCoordinates",
				"latitude": -23.5505,
				"longitude": -46.6333
			},
			"geoRadius": "100000"
		}
	}
	</script>`}
</svelte:head>

<Header />
<Calendar />
<Structure />
<Location />
<About />

<style>
</style>
