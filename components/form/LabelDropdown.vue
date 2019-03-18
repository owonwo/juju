<template>
  <section :disabled="$props.disabled" class="lb-drop">
    <label>{{ $props.label || 'PICK AN OPTION' }}</label>
    <dropdown :on-hover="$props.onHover" :disabled="$props.disabled" :text="$props.text">
      <slot></slot>
    </dropdown>
  </section>
</template>

<script>
  import Dropdown, { Mixin as DropdownMixin } from './Dropdown.vue';

  export default {
    name: 'LabelDropdown',
    mixins: [DropdownMixin],
    components: { Dropdown },
    mounted() {
      console.log(this.$props.onHover)
    },
    props: {
      label: { type: String, default: 'Label' },
    }
  };
</script>

<style lang="scss">
.lb-drop {
  width: 100%;
  flex: 0 0 230px;
  min-width: 230px;
  box-sizing: border-box;
  margin: 5px 5px 1.5rem;
  padding: 5px 15px;

  label {
    height: 20px;
    display: block;
    letter-spacing: 2px;
    font-size: 0.8rem;
    opacity: .5;
  }

  .dropdown {
    margin-bottom: 0;

  }
  
  &:not([disabled]) {
    &.classic {
      .dropdown button {
        padding-left: 0;
        background-color: transparent;
      }
    }

    &.legacy {
      background-color: transparent;
      &:hover {
        background-color: rgba(orange, .38);
      }
    }

    &.modern {
      border-radius: 8px;
      background-color: transparent;

      &:hover {
        background-color: rgba(dodgerblue, .38);
      }
    }
  }
} 
</style>