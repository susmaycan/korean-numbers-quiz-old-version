<template>
  <div>
    <label class="filter-label" for="elements_count">{{ $t('elements_count') | capitalize }}:</label>
    <custom-input
      id="elements_count"
      v-model.number="selectedElementCount"
      type="number"
      :label="$t('elements_count_placeholder')"
      :placeholder="placeholder"
      :state="inputState"
      :message-error="errorMessage"
      @change="onElementCountChanges"
    />
  </div>
</template>

<script>

export default {
  name: 'ElementCountInput',
  data () {
    return {
      selectedElementCount: this.$store.state.elementCount
    }
  },
  computed: {
    isLengthValid () {
      return this.selectedElementCount > 1 && this.selectedElementCount <= 20
    },
    isDataValid () {
      if (!this.selectedElementCount || !this.isLengthValid) {
        return false
      }
      return true
    },
    placeholder () {
      return 10
    },
    inputState () {
      if (!this.isDataValid) {
        return 'danger'
      }
      return ''
    },
    errorMessage () {
      if (!this.selectedElementCount) {
        return this.$t('element_count_required')
      }

      if (!this.isLengthValid) {
        return this.$t('element_count_max')
      }

      return null
    }
  },
  watch: {
    elementCount (newValue) {
      if (this.selectedElementCount !== newValue) {
        this.selectedElementCount = newValue
        this.generateNewQuizz()
      }
    }
  },
  methods: {
    generateNewQuizz () {
      this.$emit('generate-quizz')
    },
    onElementCountChanges (newValue) {
      this.selectedElementCount = parseInt(newValue)
      if (!this.errorMessage) {
        this.setElementCount(this.selectedElementCount)
        this.generateNewQuizz()
      }
    }
  }
}
</script>
<style scoped>
.filter-label {
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-label);
}
</style>
