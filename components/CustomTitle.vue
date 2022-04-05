<template>
  <h1 class="title">
    <slot />
  </h1>
</template>

<script>
export default {
  name: 'CustomTitle'
}
</script>

<style scoped>
.title {
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-title) !important;
}
</style>
