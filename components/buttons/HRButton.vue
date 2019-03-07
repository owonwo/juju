<!-- HOVER REVEAL BUTTON -->
<template>
    <button class="wg-hrb" 
        @focus="mouseover" 
        @blur="mouseleave" 
        @mouseover="mouseover"
        @mouseout="mouseleave" 
        @click="$emit('click', isOpen)" :style="{width: `${width}px`}">
        <span class="hrb__wrap">
            <span class="hrb__icon">
                <slot name="icon">
                    <i :class="$props.icon"/>
                </slot>
            </span>
            <span class="hrb__label">
                <slot name="text">{{ $props.label }}</slot>
            </span>
        </span>
    </button>
</template>

<style lang="scss">
    .wg-hrb {
        height: 40px;
        width: 40px;
        overflow: hidden;
        padding: 0;
        white-space: nowrap;
        line-height: 40px;
        background: #ddd;
        border-radius: 30px;
        border: none;
        cursor: pointer;
    }
    
    .hrb__wrap {
        display: inline-flex;
        align-items: center;
    }
    
    * {
        transition: all .3s cubic-bezier(0.01, 0.78, 0.49, 0.96);
    }
    
    .wg-hrb:hover .hrb__label,
    .wg-hrb:focus .hrb__label {
        opacity: 1;
        transform: translateX(0);
    }

    /* ICON selector */
    .wg-hrb .hrb__icon {
        width: 30px;
        height: 30px;
        margin-left: 5px;
        margin-right: 5px;
        line-height: 30px;
        text-align: center;
        border-radius: 30px;
        display: inline-block;
        background-color: white;
    }
    .wg-hrb .hrb__label {
        opacity: 0;
        height: 40px;
        padding-right: 10px;
        display: inline-block;
        white-space: nowrap;
        font-size: 1.2em;
        transform: translateX(50%);
        font-family: 'Avenir', 'Segoe UI', 'Helvetica Neue', 'Tahoma', sans-serif;
    }
</style>

<script>
export default {
    name: 'HoverRevealButton',
    /**
     * @type <Array['string', toggleIcons: {open, close}]>
     */
    props: {
        label: { type: String, required: true },
        disabled: { type: [Boolean, String], default: false},
        icon: { type: String, default: 'ti ti-plus' }
    },
    data() {return {
        isOpen: false,
        width: 40,
    }},
    methods: {
        isDisabled() {
            return [true, 'disabled'].includes(this.$props.disabled);
        },
        mouseover() {
            const {elm: button} = this.$vnode;
            const { offsetWidth } = button.querySelector('.hrb__wrap');
            
            this.$set(this, 'width', this.isDisabled() ? 40 : offsetWidth);
        },
        mouseleave() {
            const {elm: button} = this.$vnode;            
            this.width = 40;
        }
    },
    computed: {
        show() { 
            const {toggleIcons} = this.$props;
            this.isOpen ? toggleIcons.open : toggleIcons.close ;
        }
    } 
}
</script>

