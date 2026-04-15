<script lang="ts">
	let modal: HTMLElement, img: HTMLImageElement;

	function openModal(event: MouseEvent): void {
		if (modal) {
			modal.style.visibility = 'visible';
			modal.style.opacity = '1';
			img.src = `/assets/gallery/sitio-${(event.target as HTMLElement)?.id}.jpg`;
		}
	}

	function closeModal(): void {
		if (modal) {
			modal.style.visibility = 'hidden';
			modal.style.opacity = '0';
			img.src = '';
		}
	}

	function handleKeyDownOpen(event: KeyboardEvent): void {
		if (event.key === 'Enter') {
			closeModal();
		}
	}

	function handleKeyDownClose(event: KeyboardEvent): void {
		if (event.key === 'Escape') {
			closeModal();
		}
	}
</script>

<section id="gallery" class="gallery">
	<ul>
		{#each Array(72) as _, i}
			<li>
				<img
					src={`/assets/gallery/thumb-${i}.jpg`}
					alt={`Foto ${i + 1} do Sítio Itaguaçú - Espaço para eventos em Embu-Guaçu`}
					id={i.toString()}
					loading="lazy"
					on:click={openModal}
					on:keydown={handleKeyDownOpen}
				/>
			</li>
		{/each}
	</ul>
</section>
<div
	id="modal"
	class="overlay"
	bind:this={modal}
	on:click={closeModal}
	on:keydown={handleKeyDownClose}
>
	<img src="" alt="Sítio Itaguaçú" bind:this={img} />
</div>

<style>
	.gallery {
		margin-top: 60px;
	}

	.gallery ul {
		align-items: center;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.gallery ul li {
		cursor: pointer;
		margin: 1rem;
	}

	.gallery ul li img {
		background-color: white;
		box-shadow: 0 0 3px #888;
		padding: 1em;
		transition-duration: 0.3s;
	}

	.gallery ul li img:hover {
		filter: brightness(0.5);
	}

	.overlay {
		align-items: center;
		background-color: rgba(0, 0, 0, 0.75);
		bottom: 0;
		display: flex;
		justify-content: center;
		left: 0;
		position: fixed;
		right: 0;
		top: 0;
		transition-duration: 0.3s;
		opacity: 0;
		visibility: hidden;
	}

	@media (max-width: 56em) {
		.gallery {
			margin: 0;
		}

		.overlay {
			z-index: 15;
		}

		.overlay img {
			max-width: 80%;
			max-height: 80%;
		}
	}
</style>
