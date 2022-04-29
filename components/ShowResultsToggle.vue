<template>
  <v-switch
    v-model="showResults"
    inset
    :label="!showResults ? $t('reveal_results') : $t('hide_results') | capitalize"
    @change="toggleShowResults"
  />
</template>

<script>
export default {
  name: 'ShowResultsToggle'
}
</script>
