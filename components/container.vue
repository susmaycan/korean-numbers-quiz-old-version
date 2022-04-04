<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Container'
}
</script>

<style scoped>
  .container {
    padding: 0 2em;
    margin: 0 2em;
  }
</style>
