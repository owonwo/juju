<style lang="scss" scoped>
@import '../generic';

.accord {
  border: solid 2px $border-color;

  .collapser {
    width: 35px;
    height: 35px;
    padding: 0;
    display: flex;
    cursor: pointer;
    margin-left: 15px;
    border-radius: 5px;
    align-items: center;
    border: none !important;
    transform: rotate(0deg);
    justify-content: center;
    background-color: transparent;

    &.rotate {
      transform: rotate(180deg);
    }
  }

  .accord-heading {
    margin: 0;
    padding: 2px 15px;
    box-sizing: border-box;
    z-index: 3;
    color: #333;
    height: 50px;
    display: flex;
    cursor: pointer;
    position: relative;
    align-items: center;
    background-color: #fff;
    -webkit-user-select: none;
    justify-content: space-between;
    border-bottom: solid 1px fade-out(black, .92);
    transition: all .3s ease-out .3s, background-color .3s ease-out;

		&:hover {
			background-color: #f8f8f8;
		}

    &.active {
      color: $accent-color;
      border-bottom-width: 0px;
      background-color: #fff;
      box-shadow: 0 3px 5px -2px rgba(black, .4);
    }
  }

	&-options {
		display: flex;
		align-items: center;
	}

  article.see {
    background: rgba(0, 255, 0, 0.27);
  }

  article.content {
    color: #333;
    padding: 0;
    display: block;
    overflow: hidden;
    background-color: #f8f8f8;
    transition: height .3s cubic-bezier(0.25, 1.02, 0.78, 0.99);


    .inner-content {
      padding: 15px 15px;
    }
  }
}
</style>
<template>
  <section @dragenter.prevent="dragOpen" class="accord">
    <h4 :class="{active:!hideContent}" class="accord-heading container-fluid" @click="toggleContent">
      <slot name="heading">{{ $props.title || 'Add a Title' }}</slot>
      <div class="accord-options">
	      <div class="accord-options" @click.stop>
	      	<slot name="options"></slot>
	      </div>
	      <button class="collapser" :class="{rotate: !hideContent}">
	        <slot name="icon">
	        	<svg xmlns="http://www.w3.org/2000/svg" width="10.877" height="7.346" viewBox="0 0 10.877 7.346"><path d="M437.277,5739.966l5.221,6.23,4.879-6.23" transform="translate(-436.894 -5739.645)" 
	        		fill="none" stroke="#707070" 
	        		stroke-width="1"/></svg>
	        </slot>
	      </button>
      </div>
    </h4>
    <article v-height.when="!hideContent" class="content">
      <div name="content" class="inner-content">
      	<slot></slot>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
    	type: String,
    	required: true,
    }
  },
  mounted() {
    this.hideContent = this.$props.show;
    this.toggleContent()
  },
  data() {
    return {
      hideContent: true,
      holdDuration: 1000, //dragover open duration
    }
  },
  directives: {
    height: {
      bind(el, binding, vnode) {
        if ('undefined' == vnode.children || vnode.children.length > 1) {
          console.info('v-height requires a root node.');
        }
      },
      componentUpdated(el, binding, vnode) {
      	// debugger;
        let child = vnode.elm.children[0],
          { when } = binding.modifiers;
        if (binding.value) {
        	const {marginTop, marginBottom} = getComputedStyle(child);
        	const height = [marginBottom, marginTop, child.clientHeight]
        		.reduce((e,i) => parseInt(e) + parseInt(i));

          el.style.height = when ? height + 'px' : '0px';
        } else {
          if (when) {
            el.style.height = '0px';
          }
        }
      },
    }
  },
  methods: {
    dragOpen() {
      setTimeout(e => {
        this.hideContent = false;
      }, this.holdDuration);
    },
    hasContent() {
      return Object.keys(this.$slots).length > 0;
    },
    toggleContent() {
      this.hideContent = this.hasContent() ? !this.hideContent : true;
    }
  }
}
</script>