<template>
  <div class="header-container">
    <div class="sheet-button-container">
      <custom-button
        @click="showSheets"
      >
        <fa icon="book" /> {{ $t('sheet') | capitalize }}
      </custom-button>
    </div>
    <custom-title>
      {{ $t('app_title') }} <fa icon="language" />
    </custom-title>
    <custom-modal modal-name="sheets" :title="$t('numbers_sheet') | capitalize" :width="500" :height="700" :display-button-actions="false">
      <sheet />
    </custom-modal>
  </div>
</template>

<script>
export default {
  name: 'CustomHeader',
  methods: {
    showSheets () {
      this.$modal.show('sheets')
    }
  }
}
</script>

<style scoped>
.title {
  /* margin-right: 1em; */
}
.header-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.sheet-button-container {
  align-self: flex-end;
}
</style>
