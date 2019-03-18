<template>
	<div class="wg-timeline-item">
		<div>User Downloaded the Retrospect plugin.</div>
		<span class="wg-timeline-time">20:00</span>
	</div>
</template>

<style lang="scss">
	.wg-timeline {
		&-time {
			font-size: smaller;
			display: block;
			letter-spacing: 3px;
		}
		&-item {
			cursor: default;
		}
	}
</style>

<script>
	export default {
		name: 'TimelineItem',
		props: ['name', 'timestamp', 'avatar']
	};
</script>