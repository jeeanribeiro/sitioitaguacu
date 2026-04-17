<script lang="ts">
	import FullCalendar from 'svelte-fullcalendar/src/FullCalendar.svelte';
	import type { CalendarOptions } from '@fullcalendar/core';
	import daygridPlugin from '@fullcalendar/daygrid';
	import '@fullcalendar/core/locales/pt-br';
	import googleCalendarPlugin from '@fullcalendar/google-calendar';

	const options: CalendarOptions = {
		initialView: 'dayGridMonth',
		plugins: [daygridPlugin, googleCalendarPlugin],
		locale: 'pt-br',
		googleCalendarApiKey: 'AIzaSyDHCWvLYTDdKOne_hT2DPmey37O9lp4_7Q',
		events: {
			googleCalendarId: 'i8d1fph0lmoogopcosjhvl98hg@group.calendar.google.com'
		},
		eventColor: '#ee6b6e',
		height: 'auto',
		buttonText: {
			today: 'hoje',
			month: 'mês',
			week: 'semana',
			day: 'dia',
			list: 'lista'
		}
	};
</script>

<section id="calendar" class="calendar">
	<div class="content container">
		<h2>Calendário</h2>
		<full-calendar>
			<FullCalendar {options} />
		</full-calendar>
	</div>
	<div id="calendarContainer"></div>
</section>

<style>
	.calendar {
		background-color: #353;
	}

	.calendar h2 {
		background-color: #353;
		color: white;
	}

	.calendar .content {
		background-color: white;
		padding: 1rem;
		flex-direction: column;
		width: 100%;
	}

	.calendar .content h2 {
		text-align: center;
		text-transform: uppercase;
	}

	full-calendar {
		background-color: white;
	}

	:global(.fc-event-title, .fc-event-time) {
		display: none !important;
	}

	:global(.fc-event-title-container::after) {
		color: white;
		content: 'ocupado';
		display: inline-block;
		margin-left: 0.5rem;
	}

	@media (max-width: 768px) {
		:global(.fc-toolbar-title) {
			font-size: 1.3rem !important;
		}
	}

	@media (max-width: 320px) {
		:global(.fc-toolbar-title) {
			font-size: 0.9rem !important;
		}
	}
</style>
