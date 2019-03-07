<template>
	<div 
		@click="toggle()"
		class="switch" 
		:class="styles">
	</div>
</template>

<style lang="scss">
	@import '../generic.scss';

	.switch {
		width: 60px;
		height: 30px;
		cursor: pointer;
		background: #ddd;
		margin-left: 10px;
		margin-right: 10px;
		position: relative;
		display: inline-block;
		vertical-align: middle;
		transition: background .3s cubic-bezier(0.8, 0, 0.2, 0.98) .15s;
		
		&:first-child {
			margin-left: 0;
		}

		&:last-child {
			margin-right: 0;
		}

		&.animate {
			&::after {
				animation: morph-slide .3s cubic-bezier(0.8, 0, 0.2, 0.98);
			}
		}

		&::after {
			content: "";
			background: white;
			position: absolute;
			transition: all .3s cubic-bezier(0.5, 0, 0.3, 0.9);
		}

		&.rounded {
			border-radius: 30px;

			&::after {
				border-radius: 50%;
			}
		}

		&.curved {
			border-radius: 12px;

			&::after {
				border-radius: 8px;
			}
		}
		
		/*small size*/
		&.sm {
			height: 30px;
			width: 60px;
		}

		&.sm::after {
			width: 26px;
			height: 26px;
			box-shadow: 0 0 ;
			background: white;
			border: none !important;
			transform: translate(2px, 2px);
			background-clip: padding-box;
			box-sizing: border-box;
		}

		&.sm.on {
			background: $accent-color;

			&::after {
				transform: translate(calc(100% + 6px), 2px);
			}
		}

		/* medium size */
		&.md::after {
			top: 0;
			left: 0;
			right: 0;
			width: 34px;
			height: 34px;
			border: solid 2px #ddd;
			transform: translate(0, -4px);
			// box-shadow: 0 0 3px rgba(0,0,0, .3);
		}

		&.md.on {
			background: $accent-color;

			&::after {
				border: solid 2px $accent-color;
				left: 30px;
			}
		}
	}
</style>

<script>
	export default {
		name: 'ToggleSwitch',
		props: {
			size: {type: String, default: "md" },
			switchStyle: { type: String, default: 'rounded' },
			value: {type: Boolean },
		},
		mounted() { this.state = this.$props.value },
		data() {return {
			state: false,
			animate: false,
		}},
		model: {
			prop: 'value',
			event: 'change',
		},
		computed: {
			styles() {
				const { switchStyle, size } = this.$props;
				return [
					size,
					switchStyle,
					this.state ? 'on' : 'off',
					this.animate ? 'animate' : ''
				];
			}
		},
		methods: {
			toggle() {
				this.state = !this.state
				this.animate = true;
				this.$emit('change', this.state);
				setTimeout(() => this.animate = false, 300);
			}
		}
	};
</script>
