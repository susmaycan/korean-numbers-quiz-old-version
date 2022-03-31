<template>
  <div :class="boxClass">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Box',
  props: {
    shadow: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    boxClass () {
      let baseClass = 'center box-container'
      if (this.shadow) {
        baseClass += ' shadow'
      }
      return baseClass
    }
  }
}
</script>

<style scoped>
.box-container {
  padding: 2em;
  border-radius: 1em;
}
.shadow {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
</style>
