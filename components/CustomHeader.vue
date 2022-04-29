<template>
  <div class="header-container">
    <custom-title>
      {{ $t('app_title') }} <fa icon="language" />
    </custom-title>
  </div>
</template>

<script>
export default {
  name: 'CustomHeader'
}
</script>

<style scoped>
.header-container {
  text-align: center;
}
</style>
