<template>
	<li class="wg-list-item">
		<slot></slot>
	</li>
</template>
<style lang="scss">
	@import '../generic';
	
	.wg-list-item {
		display: block;
		padding: 15px 15px;
		border-bottom: solid 2px $border-color;

		&::before {
			content: "";
			display: inline-block;
		}
	}
</style>
<script>
	export default {

	};
</script>