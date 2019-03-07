<template>
	<ul class="wg-list-group default">
		<slot></slot>
	</ul>
</template>

<style lang="scss">
	// @import '../generic';
	.card-content .wg-list-group.default {
		margin: -15px;
		width: auto;
	}

	.wg-list-group {
		margin: 0;
		padding: 0;
		
		&.default {
			> .wg-list-item:last-child {
				border-bottom-width: 0;
			}
		}

		&.flat {
			padding: 1px 15px;
			background-image: linear-gradient(135deg, #f7f7f7, #f7f7f7 50%, rgba(orchid, .27) 100%);

			.wg-list-item {
				border: none;
				margin: 10px 0;
				border-radius: 12px;
				background-color: white;
				box-shadow: 0 6px 12px 0 rgba(black, .28);
			}
		}
	}
</style>