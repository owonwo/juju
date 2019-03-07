<template>
  <div class="osq-search-field control has-icons-left has-icons-right">
    <span class="icon osf osf-search is-small is-left"/>
    <span 
      v-if="searchString.length > 1"
      class="icon ti ti-close is-right"
      style="pointer-events: unset" 
      @click="$emit('keyup', (searchString = ''))" />
    <input 
      v-model="searchString" 
      :class="$props.shape" 
      :placeholder="$props.placeholder" 
      class="input" 
      type="text" 
      @keyup.prevent="$emit('keyup', searchString)">
  </div>
</template>

<script>
  export default {
    name: 'SearchBox',
    model: {
      event: 'keyup',
      value: 'value'
    },
    props: ['placeholder', 'list', 'value','shape'],
    data () {
      return {
        searchString: '',
      }
    },
    methods: {}
  }
</script>
