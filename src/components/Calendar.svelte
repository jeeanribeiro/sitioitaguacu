<section id="calendar" class="calendar">
	<div class="content container">
		<h1>Calendário</h1>
		<iframe
			title="calendar"
			id="calendarFrame"
			name="calendarFrame"
			src="https://calendar.google.com/calendar/b/1/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FSao_Paulo&amp;src=aThkMWZwaDBsbW9vZ29wY29zamh2bDk4aGdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23D81B60&amp;showTitle=0&amp;showNav=1&amp;showPrint=0&amp;showDate=1&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0"
			style="border: 0"
			frameborder="0"
			scrolling="no" 
		/>
	</div>
	<div id="calendarContainer"></div>
</section>

<style>
	.calendar {
		background-color: #353;
		color: white;
	}

	.calendar .content {
		flex-direction: column;
		width: 100%;
	}

	.calendar .content h1 {
		text-align: center;
		text-transform: uppercase;
	}

	.calendar .content iframe {
		background-color: white;
		border-radius: 20px;
		filter: grayscale(1);
		font-size: 1px;
		height: 600px;
		margin-top: 16px;
		padding-top: 20px;
	}

	@media (max-width: 56em) {
		.calendar .content iframe {
			height: 300px;
		}
	}
</style>
