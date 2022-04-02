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
  max-width: 80%;
  margin: 2em auto;
}

.shadow {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

@media (max-width: 756px) {
  .box-container {
    max-width: 95%;
  }
}
</style>
