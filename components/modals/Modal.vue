<!-- eslint-disable -->
<template>
    <div class="modal slide-up" role="dialog">
    <div class="modal-background" @click.stop.prevent="hide()"></div>
      <v-scrollbar class="modal-content" :style="sizeStyle">
        <div v-if="modalHasTitle" class="modal-card-head">
          <button type="button" class="modal-close" 
            @click.stop.prevent="hide()">
            <i class="ti ti-close"></i>
          </button>
          <h4 class="modal-card-title">
            <slot name="modal-title"></slot>
          </h4>
        </div>
        <div class="modal-card-body">
          <button v-if="!modalHasTitle" type="button" class="modal-close" @click.prevent="hide">
            <i class="ti ti-close"></i>
          </button>
          <slot name="modal-image"></slot>
          <slot></slot>
        </div>
        <div v-if="$slots['modal-footer']" class="modal-card-foot">
          <slot name="modal-footer">
           </slot>
        </div>
      </v-scrollbar>
    </div>
</template>

<script>
  import vScrollbar from 'vue-perfect-scrollbar'

  export default {
    name: 'Modal',
    components: {vScrollbar},
    props: ['show', 'showHeader', 'size'],
    computed: {
      modalHasTitle() { 
        return !!this.$slots['modal-title'] 
      },
      sizeStyle() {
        const {size} = this.$props
        return {
          width: (size === 'sm' ? '300px' : ''),
        }
      }
    },
    watch : {
       show() {
          !this.$props.show || this.showSelf() 
       }
    },
    methods: {
      showSelf () {
          $(this.$el).addClass('is-active').delay(3000)
          setTimeout(() => $(this.$el).find('.modal-content').addClass('reveal'), 0)
          $('body, html').addClass('is-clipped')
      },
      toggle() {
        (this.show) ? this.hide() : this.showSelf()
      },
      hide() {
        $(this.$el).find('.modal-content').removeClass('reveal')
        setTimeout(() => {
          $(this.$el).removeClass('is-active')
          $('body, html').removeClass('is-clipped')
          this.$emit('closed')
        }, 300)
      }
    }
  }
</script>
