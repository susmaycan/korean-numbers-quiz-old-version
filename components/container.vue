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

@media (max-width: 756px) {
  .container {
    padding: .5em;
    margin: .5em;
  }
}
</style>
