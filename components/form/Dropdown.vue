<template>
  <section 
    :class="{'is-active': active}"
    :disabled="$props.disabled" 
    @mouseleave="hToggle('leave')()"
    class="dropdown">
    <div 
      class="dropdown-trigger" 
      @click.stop="toggle"
      @mouseenter="hToggle('enter')()">
      <slot name="button">
        <button 
          class="button is-small" 
          aria-haspopup="true" 
          aria-controls="dropdown-button">
          <span>{{ dvalue || $props.placholder }}</span>
          <span class="icon is-small">
            <slot name="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="10.877" height="7.346" viewBox="0 0 10.877 7.346">
                <path d="M437.277,5739.966l5.221,6.23,4.879-6.23" transform="translate(-436.894 -5739.645)" fill="none" stroke="#707070" stroke-width="1"/>
              </svg>
            </slot>
          </span>
        </button>
      </slot>
    </div>
    <div 
      role="menu"
      id="dropdown-menu" 
      class="dropdown-menu" >
      <div      
        :style="{height: contentHeight+'px' }" 
        :class="classNames" class="dropdown-content">
        <div ref="content" @click="handleValue($event)">
        <slot></slot>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export const Mixin = {
  props: {
    placholder: { type: String, default: 'Pick Option' },
    autoCollapse: { type: Boolean, default: true },
    onHover: { type: Boolean, default: false }, //on hover the options are revealed
    disabled: { type: Boolean, default: false },
    value: { type: String }
  },
};

export default {
  name: 'Dropdown',
  model: {
    prop: 'value',
    event: 'change'
  },
  mixins: [Mixin],
  data() {
    return {
      active: false,
      dvalue: "",
    }
  },
  computed: {
    contentHeight() {
      return (this.active ? this.$refs.content.offsetHeight : 30 )
    },
    classNames() {
      const {contentHeight} = this;
      const offsetTop = this.active && (this.$el.offsetTop || 0);
      return {
        higher: (this.contentHeight >= 90) && (offsetTop >= (contentHeight / 2)),
      }
    }
  },
  created() {
    if (!this.$root.wgDropdown)
      this.$root.wgDropdown = [];
  },
  mounted() {
    this.$root.wgDropdown.push(this);
    document.body.addEventListener('click', this.closeAll.bind(this), false)
    this.setValue(this.$el.querySelector('li').textContent)
  },
  destroy() {
    document.body.removeEventListener('click', this.closeAll.bind(this), false);
  },
  methods: {
    handleValue(event) {
      let currentElem = event.target;
      while (currentElem) {
        if (currentElem.tagName === 'LI') {
          Array.from(currentElem.parentElement.children)
            .forEach(el => el.classList.remove('active'))
          this.setValue(currentElem.textContent);
          currentElem.classList.add('active');
          currentElem = false;
        } else {
          currentElem = currentElem.parentElement;          
        }
      }
      this.active = !this.active
    },
    setValue(value) {
      this.dvalue = value;
      this.$emit('change', value);
    },
    hToggle(action) {
      const { onHover, active, toggle } = this;
      return () => {
        action === 'leave'
          ? onHover && (this.active = false)
          : onHover && toggle();
      }
    },
    toggle() {
      if (this.$props.disabled) return;

      this.closeAll();
      console.log(this.active)
      this.active = !this.active
      console.log(this.active)
    },
    closeAll() {
      this.$root.wgDropdown.map(dd => {
        if (dd.active && dd.$props.autoCollapse) {
          dd.active = false;
        }
      });
    }
  }
};
</script>

<style lang="scss">
  .dropdown {
    position: relative;
    max-width: 200px;
    margin-bottom: 1.2rem;

    &[disabled] {
      opacity: 0.5;
    }

    button {
      width: 100%;
      text-align: left;
      padding: 0 15px;
      display: flex; 
      justify-content: space-between;
      font-size: 1rem;
      line-height: 40px;
      border: none;
    }

    &.is-rounded button, &.is-rounded &-content {
      border-radius: 8px;
    }

    &.is-active {
      .dropdown-content {   
        opacity: 1;
        visibility: visible;

        &.higher {
          transform: translateY(-35px);
        }
      }
    }
    
    .dropdown-content {
      top: 0;
      left: 0; 
      right: 0;
      opacity:0;
      height: 35px;
      visibility: hidden;
      max-width: 100%;
      position: absolute;
      overflow-y: scroll;
      max-height: 250px;
      background-color: white;
      transition: .3s ease-out;
      transition-property: height, transform, opacity, visibility;
      box-shadow: 0 3px 7px rgba(black,.27);
      z-index: 10;

      li {
        display: block;
        padding: 5px 15px;
        cursor: pointer;
        
        &.active, &.active:hover {
          background: rgba(blue, 0.1);
        }

        &:hover {
          color: #333;
          background-color: #eee;
        }
      }
    }
  }
</style>