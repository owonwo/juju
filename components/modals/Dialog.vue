<template>
  <modal 
    ref="modal" 
    :show="show" 
    size="sm"
    @close="action('rej')">
    <h1 class="title is-5 mb-10">{{ message }}</h1>
    <p v-if="text.length > 0"><i>{{ text }}</i></p>

    <div class="buttons is-right mt-20">
      <button 
        class="button is-primary"
        @click.prevent="action('res')">Confirm</button>
      <button 
        class="button is-outlined" 
        @click.prevent="action('rej')">Cancel</button>
    </div>
  </modal>
</template>

<script>
  import Modal from '@/components/Modal.vue'

  export default {
    name: 'WgDialog',
    components: { Modal },
    data: () => ({
      show: false,
      message: '',
      text: '',
      actions: {rej: Function, res: Function}
    }),
    mounted() {
      console.log('Mouting Dialog Box')
    },
    methods: {
      action(action) {
        if (['res','rej'].includes(action)) {
          this.actions[action]()
          this.$refs.modal.hide()
          this.message = ''
        }
      },
      confirm(message = 'Are you Sure?', text = '') {
        return new Promise((res, rej) => {
          this.message = message || 'Are you sure?'
          this.text = text || ''
          this.$refs.modal.showSelf()

          this.actions.res = res
          this.actions.rej = rej
        })
      }
    },
  }  
</script>