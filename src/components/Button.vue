<template>
  <div>
    <button
      type="button"
      class="btn text-uppercase"
      :class="className"
    >
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    className: {
      type: String,
      default: 'btn-primary'
    }
  }
}
</script>

<style>

</style>