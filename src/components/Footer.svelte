<footer>
	<p>© 2022 Sítio Itaguaçú</p>
	<div class="social-media">
		<a href="https://instagram.com/sitioitaguacu">
			<img src="assets/instagram-icon.svg" alt="Instagram">
		</a>
		<a href="https://facebook.com/sitioitaguacubr">
			<img src="assets/facebook-icon.svg" alt="Facebook">
		</a>
	</div>
</footer>

<style>
	footer {
		align-items: center;
		background-color: #333;
		color: white;
		display: flex;
		justify-content: center;
		padding: 1rem 0;
	}

	footer a {
		height: auto;
		margin-left: 15px;
		width: auto;
	}

	footer img {
		height: 32px;
		opacity: 0.5;
		transition-duration: 0.3s;
	}

	footer img:hover {
		opacity: 1;
	}

	@media (max-width: 56em) {
		footer {
			flex-direction: column;
		}

		footer img {
			height: 48px;
		}
	}
</style>
