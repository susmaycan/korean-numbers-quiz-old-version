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
  margin: 2em;
  border-radius: 1em;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}

.shadow {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

@media (max-width: 756px) {
  .box-container {
    padding: 0;
    padding-top: 2em;
    margin: .5em;
  }
}
</style>
