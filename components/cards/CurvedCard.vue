<template>
  <div class="card">
    <div class="card-header">
      <slot name="card-header">
        <div class="card-title">
          <span>{{ $props.title }}</span>
          <div v-if="$props.subtitle.length > 0" class="card-subtitle">{{ $props.subtitle }}</div>
        </div>
      </slot>
      <slot name="card-actions"></slot>
    </div>
    <div class="card-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      default: ''
    }
  },
  data: () => ({})
};
</script>

<style lang="scss">
@import '../generic.scss';

.card {
  flex: 1;
  padding: 0;
  min-width: 300px;
  display: block;
  background: white;
  overflow: visible;
  border-radius: 12px;
  box-sizing: border-box;
  border: solid 2px $border-color;
  font-family: 'Avenir', 'Segoe UI', 'Tahoma', sans-serif;

  &.pointed,
  &.cursored {
    cursor: pointer;
  }

  .card-image {
    margin: {
      top: -30px;
      left: -15px;
      right: -15px;
    }

    overflow: auto;
    padding: 0;

    img {
      width: 100%;
    }

    .img-thumbnail {
      padding: 0;
      object-fit: cover;
    }
  }

  .card-header {
    height: 50px;
    display: flex;
    padding: 0 15px;
    align-items: center;
    justify-content: space-between;
    border-bottom: solid 2px $border-color;

    .card-title {
      font-size: 16px;
      color: $black;
      flex: 2;
    }
    
    .card-subtitle {
      font-size: smaller;
    }
  }

  .card-content,
  .card-body {
    padding: 1em;

    &.sm {
      font-size: .8em;
    }
  }
}
</style>