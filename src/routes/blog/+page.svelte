<script>
	const posts = [
		{
			slug: 'quanto-custa-casar-no-campo',
			title: 'Quanto Custa Casar no Campo em 2026?',
			excerpt: 'Guia completo de custos para seu casamento no campo: locação, buffet, decoração e dicas para economizar.',
			date: '2026-01-15',
			category: 'Casamentos'
		},
		{
			slug: 'melhores-sitios-cachoeira-sp',
			title: 'Os 7 Melhores Sítios com Cachoeira perto de São Paulo',
			excerpt: 'Seleção dos melhores sítios com cachoeira para aluguel de temporada, eventos e casamentos na região de SP.',
			date: '2026-01-10',
			category: 'Dicas'
		},
		{
			slug: 'o-que-levar-fim-de-semana-sitio',
			title: 'O que Levar para um Fim de Semana no Sítio: Checklist Completo',
			excerpt: 'Lista completa do que não pode faltar na sua mala para aproveitar ao máximo o fim de semana na natureza.',
			date: '2026-01-05',
			category: 'Dicas'
		}
	];

	function formatDate(dateStr) {
		const date = new Date(dateStr);
		return date.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' });
	}
</script>

<svelte:head>
	<title>Blog - Sítio Itaguaçú | Dicas de Casamento, Eventos e Lazer</title>
	<meta name="description" content="Dicas e inspirações para casamentos no campo, eventos corporativos e fim de semana na natureza. Conteúdo do Sítio Itaguaçú em Embu-Guaçu." />

	<!-- Open Graph -->
	<meta property="og:title" content="Blog - Sítio Itaguaçú" />
	<meta property="og:description" content="Dicas para casamentos no campo, eventos e lazer na natureza." />
	<meta property="og:image" content="https://sitioitaguacu.com.br/assets/background_sitio_1080.webp" />
	<meta property="og:url" content="https://sitioitaguacu.com.br/blog" />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="pt_BR" />

	<link rel="canonical" href="https://sitioitaguacu.com.br/blog" />
</svelte:head>

<main class="page-content">
	<section class="hero">
		<div class="hero-overlay">
			<h1>Blog do Sítio Itaguaçú</h1>
			<p class="subtitle">Dicas, inspirações e guias para seus momentos especiais</p>
		</div>
	</section>

	<section class="posts container">
		<div class="posts-grid">
			{#each posts as post}
				<article class="post-card">
					<span class="post-category">{post.category}</span>
					<h2><a href="/blog/{post.slug}">{post.title}</a></h2>
					<p class="post-excerpt">{post.excerpt}</p>
					<time datetime={post.date}>{formatDate(post.date)}</time>
					<a href="/blog/{post.slug}" class="read-more">Ler mais →</a>
				</article>
			{/each}
		</div>
	</section>

	<section class="newsletter">
		<div class="container">
			<h2>Receba Nossas Dicas</h2>
			<p>
				Cadastre-se para receber conteúdos exclusivos sobre casamentos,
				eventos e dicas para aproveitar a natureza.
			</p>
			<a href="https://wa.me/5511999999999?text=Olá! Gostaria de receber novidades do Sítio Itaguaçú." class="newsletter-button">
				Receber pelo WhatsApp
			</a>
		</div>
	</section>
</main>

<style>
	.page-content {
		margin-top: 60px;
	}

	.hero {
		background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
			url('/assets/background_sitio_1080.webp');
		background-size: cover;
		background-position: center;
		height: 40vh;
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
		font-size: 1.1rem;
		opacity: 0.9;
	}

	.container {
		max-width: 900px;
		margin: 0 auto;
		padding: 3rem 1.5rem;
	}

	.posts-grid {
		display: grid;
		gap: 2rem;
	}

	.post-card {
		background: white;
		padding: 2rem;
		border-radius: 8px;
		box-shadow: 0 2px 8px rgba(0,0,0,0.1);
		position: relative;
	}

	.post-category {
		display: inline-block;
		background: #353;
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: 20px;
		font-size: 0.8rem;
		margin-bottom: 1rem;
	}

	.post-card h2 {
		margin: 0 0 0.75rem;
		font-size: 1.5rem;
	}

	.post-card h2 a {
		color: #353;
		text-decoration: none;
	}

	.post-card h2 a:hover {
		color: #464;
	}

	.post-excerpt {
		color: #666;
		line-height: 1.6;
		margin-bottom: 1rem;
	}

	.post-card time {
		color: #888;
		font-size: 0.9rem;
	}

	.read-more {
		display: inline-block;
		margin-top: 1rem;
		color: #353;
		text-decoration: none;
		font-weight: 600;
	}

	.read-more:hover {
		color: #25D366;
	}

	.newsletter {
		background-color: #353;
		color: white;
		text-align: center;
	}

	.newsletter h2 {
		color: white;
		margin-bottom: 1rem;
	}

	.newsletter p {
		color: rgba(255,255,255,0.9);
		margin-bottom: 1.5rem;
		max-width: 500px;
		margin-left: auto;
		margin-right: auto;
	}

	.newsletter-button {
		display: inline-block;
		background-color: #25D366;
		color: white;
		padding: 1rem 2rem;
		border-radius: 50px;
		text-decoration: none;
		font-weight: bold;
		transition: transform 0.2s;
	}

	.newsletter-button:hover {
		transform: translateY(-2px);
	}

	@media (max-width: 768px) {
		.hero h1 {
			font-size: 1.75rem;
		}

		.container {
			padding: 2rem 1rem;
		}

		.post-card {
			padding: 1.5rem;
		}
	}
</style>
