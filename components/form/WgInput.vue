<script>
export default {
	name: 'WgInput',
	model: {
		prop: 'value',
		event: 'input'
	},
	props: ['type', 'placeholder', 'rows', 'col', 'label', 'required', 'value'],
	watch: {
		value(a) {
			const {input} = this.$refs
			if (input.type !== 'file') {
				input.value = (a || '')
			} 
		}
	},
	render(h) {
		const {type: input_type} = this.$props
		const isTextarea = () => input_type === 'textarea'
		const { 
			$slots: {help, default: default_slot}, 
			$props, $attrs
		} = this

		const props = {
			class: isTextarea() ? ['textarea'] : ['input'],
			attrs: {...$props,...$attrs},	
			on: {
				keyup: (event) => this.$emit('input', event.target.value),
				change: (event) => {
					this.$emit('input', event.target.value)
					this.$emit('change', event)
				}
			},
			ref: 'input',
		}

		const textarea_props = {
			domProps: {
				innerText: this.$props.value || ' '
			}
		}
		const label = h('label', {domProps: {innerHTML: this.$props.label }})
		const inputElement = isTextarea() 
			? h('textarea', {...props, ...textarea_props})
			: h('input', props)

		return h(
						'div', 
						{class: 'field'}, 
						[label, inputElement, help, default_slot ]
					)
	},
}
</script>