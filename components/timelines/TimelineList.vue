<template>
	<div class="wg-timeline-list">
		<section class="timelin-header">TIMELINES</section>
		<ul>
			<slot></slot>
		</ul>
	</div>
</template>

<style lang="scss">
	.wg-timeline-list {
		ul {
			padding: 0;
			position: relative;

			&:after {
				left: 0;
				bottom: 0;
				top: 0;
				position: absolute;
				width: 3px;
				content: "";
				background: dodgerblue;
			}

			.wg-timeline-item {
				// border-radius: 30px;
				// background: blue;
				// background: orange;
				z-index: 4;
				position: relative;
				padding: 15px 40px;
				// transform: scale(1);

				&:after {
					left: 0;
					top: 0;
					content: "";
					width: 25px;
					height: 25px;
					position: absolute;
					border-radius: 25px;
					border: solid 0 transparent;
					box-sizing: border-box;
					transform: translate(-45%, 50%);
					background-color: dodgerblue;
					transition: .5s;
				}

				&:hover:after {
					transition: all .3s ease-in-out;
					box-shadow: 0 0 3px rgba(black, .3);
					border: solid 2px dodgerblue;
					background-color: white;
					transform: translate(-45%, 50%) scale(1.3);
				}
			}
		}
	}
</style>
<script>
	export default {

	};
</script>