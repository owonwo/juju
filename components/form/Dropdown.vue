<template>
  <section 
    :class="{'is-active': active}" 
    class="dropdown is-right">
    <div 
      class="dropdown-trigger" 
      @click="toggle">
      <slot name="button">
        <button 
          class="button is-small" 
          aria-haspopup="true" 
          aria-controls="dropdown-menu">
          <slot name="content"/>
          <span class="icon is-small">
            <slot name="icon">
              <i 
                class="ti ti-more-alt" 
                aria-hidden="true"/>
            </slot>
          </span>
        </button>
      </slot>
    </div>
    <div 
      id="dropdown-menu" 
      class="dropdown-menu" 
      role="menu" 
      @click="active = !active">
      <div class="dropdown-content">
        <slot name="list"/>
      </div>
    </div>
  </section>
</template>
<style type="text/css">
  .dropdown-content > li:hover {
    color: #333;
    background-color: #eee;
  }
</style>
<script>
export default {
	name: 'Dropdown',
	data() {
		return {
			active: false,
		}
	},
  mounted() {
    this.$root.$on('clicked-other', (uid) => console.log('another was clicked', uid))
  },
  methods: {
    toggle() {
      this.active = !this.active
    }
  }
}
</script>