<template>
	<HoverRevealButton @click="$emit('click')">
      <i
        slot="icon"
        :class="active_class"
        class="ti"/>
      <span slot="text">{{ text }}</span>
    </HoverRevealButton>
</template>

<script>
import HoverRevealButton from './HoverRevealButton.vue'

export default {
	components: {HoverRevealButton},
	props: {
		active: {
			type: Boolean, 
			required: true
		},
		icons: {
			type: Array, 
			default: () => ['fa-plus:Add', 'fa-minus:Close']
		}
	},
	computed: {
		active_class() {
			const { doConversion, $props: {active}} = this
			return doConversion().map(e => e.icon)[active?1:0]
		},
		text() {
			const { doConversion, $props: {active}} = this
			return doConversion().map(e => e.text)[(active ? 1 : 0)] 
		}
	},
	methods: {
		convertIconsMapToObject([icon, text]) {
			return {icon, text}
		},
		doConversion() {
			return this.$props.icons.map(e => this.convertIconsMapToObject(e.split(':')))
		}
	}
}
</script>