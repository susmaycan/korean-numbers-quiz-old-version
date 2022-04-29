
<template>
  <div class="language-selector">
    <v-select
      v-model="selectedLanguage"
      :items="languages"
      :label="$t('language') | capitalize"
      outlined
      item-text="name"
      item-value="code"
    />
  </div>
</template>

<script>
export default {
  name: 'LanguageSelector',
  data () {
    return {
      selectedLanguage: this.$i18n.localeProperties?.code || 'en'
    }
  },
  computed: {
    languages () {
      return this.$i18n.locales
    }
  },
  watch: {
    selectedLanguage () {
      this.$i18n.setLocale(this.selectedLanguage)
    }
  },
  methods: {
    onClickLanguage (event) {
      this.selectedLanguage = event.target.value
      this.$i18n.setLocale(this.selectedLanguage)
    }
  }
}
</script>

<style scoped>
.language-selector {
  display: flex;
  justify-content: center;
  max-width: 100%;
  margin: 0 auto;
}
</style>
