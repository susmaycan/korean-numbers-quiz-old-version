<template>
  <v-footer padless>
    <div
      class="footer text-center"
    >
      <language-selector />
      <div>
        <fa icon="copyright" /> {{ new Date().getFullYear() }} - {{ $t('footer_text') }}
        <a target="_blank" href="https://susmaycan.dev"><fa icon="arrow-up-right-from-square" /></a>
      </div>
    </div>
  </v-footer>
</template>

<script>
export default {
  name: 'CustomFooter',
  methods: {
    showSheets () {
      this.$modal.show('sheets')
    }
  }
}
</script>

<style scoped>
.footer {
  /* background-color: var(--primary-color); */
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2em;
  width: 100%;
}

.footer-top {
  /* display: flex;
  justify-content: space-between;
  align-items: flex-start; */
}
</style>
