<template>
  <div class="header-container">
    <h1 class="title">
      {{ $t('app_title') }}
    </h1>
    <custom-button
      @click="showSheets"
    >
      <fa icon="book" /> {{ $t('sheet') | capitalize }}
    </custom-button>
    <custom-modal modal-name="sheets" :title="$t('numbers_sheet') | capitalize" :width="500" :height="700" :display-button-actions="false">
      <sheet />
    </custom-modal>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    showSheets () {
      this.$modal.show('sheets')
    }
  }
}
</script>

<style scoped>
.title {
  margin-right: 1em;
}
.header-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
