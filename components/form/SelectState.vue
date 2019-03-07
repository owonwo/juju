<template>
  <div class="select">
    <select 
      v-model="selected" 
      name="selected" 
      @change="$emit('change', $event.target.value)">
      <option 
        value="0"
        disabled=""
        selected="">Select State...</option>
      <option 
        v-for="(state, index) in entries" 
        :key="index">{{ state.name }}</option>
    </select>
  </div>
</template>

<script>
import LocationAPI from '@/Mixins/LocationAPI'

export default {
	name: 'SelectState',
	mixins: [LocationAPI],
  model: {
    value: 'value',
    event: 'change'
  },
	mounted () {
		this.getStates()
	}
}
</script>