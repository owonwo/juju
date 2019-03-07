<template>
	<section :class="'va-'+align" id="page-holder" style="overflow: hidden;width: 100%;">
		<div id="page-slider" :class="[transitionClass]" :style="{width: slideWidth, left: slideLeft}">
			<v-scrollbar class="page" :key="index" :style="{width:`${100 / pageCount}%`}" v-for="(p, index) in pages">
				<div class="wg-slider-page px-15">
					<slot :name="`p${index+1}`"></slot>					
				</div>
			</v-scrollbar>
		</div>
	</section>
</template>

<script>
	export default {
		name: 'Pager',
		props: {
			'transitionClass': {type: String, default: 'wg--hr_bounce', required: false},
			'current': {type: Number, default: 0, required: true}, 
			'align': {type: String, default: 'top'},
		},
		created() { this.$parent.page = 0 },
		data() {return {
			cp: 0,
			parentStyle: {}
		}},
		computed: {
			slideLeft() { return `-${(100 * this.cp)}%` },
			slideWidth() { return Math.abs(this.pageCount * 100) + '%' },
			pageCount() { return Object.keys(this.$slots).length },
			pages() { return Array(this.pageCount).fill("") },
		},
		watch: {
			current () {
				let {pageCount, current} = this;
				const isWithIn = () => current < pageCount && current >= 0;
				this.cp = typeof(current) === "boolean" 
					? (current ? 1 : 0)
					: !isWithIn() ? this.cp : current;
			}
		}
	}
</script>

<style scoped lang="scss">
	.wg--hr_bounce {
		transition-timing-function: cubic-bezier(.78,.05,.41,.92);
	}

	#page-holder {
		height: 100%;

		&.is-absolute {
			width: 100%;
			position: absolute;
		}

		#page-slider {
			margin:0;
			display: block;
			height: 100%;
			position: relative;
			transition-property: all;
			transition-duration: .3s;
		}

		.page {
			display: inline-block;
			margin-left: 0px;
			height: 100%;
			&:first-child {
				margin-left: 0;
			}
		}

		@each $align in ('middle','top','bottom','baseline') {
			&.va-#{$align} {
				.page {
					vertical-align: #{$align};
				}
			}
		}
	}
</style>
