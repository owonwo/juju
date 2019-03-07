<template>
  <div 
    :class="{'is-loading': isLoading}" 
    class="select">
    <select 
      v-model="selected"
      name="selected"
      @change="$emit('change', selected)">
      <option 
        disabled="" 
        value="0" 
        selected="">Select City...</option>
      <option 
        v-for="(entry, index) in entries" 
        :key="index">{{ entry }}</option>
    </select>
  </div>
</template>

<script>
import LocationAPI from '@/Mixins/LocationAPI'

export default {
	name: 'SelectCity',
	mixins: [LocationAPI],
	model: {
		value: 'value',
		event: 'change'
	},
	props: {
		state: {
			required: true
		}
	},
	watch: {
		state (a) {
			this.getLgas(a)
		},
	}
}
</script>