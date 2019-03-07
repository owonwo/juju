<template>
	<section class="accordion-list">
		<!-- slots should be the Accordion component only -->
		<slot></slot>
	</section>
</template>

<style lang="scss">
	.accordion-list {
		// padding: 20px;
		// background: blue;

		> .accord:not(:last-child) {
			border-bottom-width: 0;
		}
		
		.accord:first-child:not(:last-child) {
			overflow: hidden;
			border-radius: 12px 12px 0 0;
		}

		.accord:last-child:not(:first-child) {
			overflow: hidden;
			border-radius:  0 0 12px 12px;
		}
	}
</style>