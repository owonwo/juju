<template>
	<section class="wg-timeline-flat">
		<section class="timeline-header">TIMELINES</section>
		<ul class="timeline-list">
			<slot></slot>
		</ul>
	</section>
</template>

<style lang="scss">
	.timeline-header {
		letter-spacing: 3px;
		// border: solid ;
		margin-left: -12px;
		// margin: 0;
		font-size: smaller;
	}
	
	.wg-timeline-flat {
		padding-left: 12px;
		padding-right: 50px;
		box-sizing: border-box;
		flex: 1;
		max-width: 500px;
		// font-family: sans-serif;

		> ul {
			position: relative;
			margin-top: 10px;
			padding-left: 35px;

			&:after {
				content: "";
				border-radius: 50px;
				background-color: royalblue;
				position: absolute;
				width: 5px;
				top: 0; 
				left: 0;
				bottom: 0;
			}
		}

		.wg-timeline-item {
			background: #eee;
			padding: 15px;
			position: relative;
			margin: 15px 0;
			display: flex;
			flex-flow: column;
			box-shadow: 0 3px 6px rgba(black, .28);

			&:hover {
				transform: translateX(-15px);
			}

			&::after {
				content:"";
				width: 20px;
				height: 20px;
				background: #eee;
				display: block;
				position:absolute;
				transform-origin: center;
				transform:  rotate(45deg);
				transition: 1s;
				left: -10px;
				top: calc(50% - 10px);
			}
		}
	}
</style>

<script>
	export default {

	};
</script>