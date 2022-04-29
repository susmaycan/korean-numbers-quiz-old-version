<template>
  <div>
    <label class="filter-label" for="max_value">{{ $t('max_value') | capitalize }}:</label>
    <custom-input
      id="max_value"
      v-model.number="selectedMax"
      type="number"
      :label="$t('max_number_placeholder')"
      :placeholder="placeholder"
      :state="inputState"
      :message-error="errorMessage"
      @change="onMaxChanges"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { NUMBER_TYPES, MAX_NUMBERS } from '@/utils/constants'

export default {
  name: 'MaxInput',
  data () {
    return {
      selectedMax: this.$store.state.numbers.max
    }
  },
  computed: {
    ...mapState('numbers', ['max']),
    isChineseMaxInvalid () {
      return this.numberType === NUMBER_TYPES.CHINESE && (this.selectedMax > MAX_NUMBERS[NUMBER_TYPES.CHINESE] || this.selectedMax < 1)
    },
    isKoreanMaxInvalid () {
      return this.numberType === NUMBER_TYPES.KOREAN && this.selectedMax > MAX_NUMBERS[NUMBER_TYPES.KOREAN]
    },
    isDataValid () {
      if (!this.selectedMax || this.isChineseMaxInvalid || this.isKoreanMaxInvalid) {
        return false
      }
      return true
    },
    placeholder () {
      return MAX_NUMBERS[this.numberType]
    },
    inputState () {
      if (!this.isDataValid) {
        return 'danger'
      }
      return ''
    },
    errorMessage () {
      if (this.isChineseMaxInvalid) {
        return this.$t('chinese_max_number_out_range') + MAX_NUMBERS[NUMBER_TYPES.CHINESE]
      }

      if (this.isKoreanMaxInvalid) {
        return this.$t('korean_max_number_out_range') + MAX_NUMBERS[NUMBER_TYPES.KOREAN]
      }

      if (!this.selectedMax) {
        return this.$t('max_number_required')
      }

      return null
    }
  },
  watch: {
    max (newValue) {
      if (this.selectedMax !== newValue) {
        this.selectedMax = newValue
        this.generateNewQuiz()
      }
    }
  },
  methods: {
    generateNewQuiz () {
      this.$emit('generate-quiz')
    },
    onMaxChanges (newValue) {
      this.selectedMax = parseInt(newValue)
      if (!this.errorMessage) {
        this.$store.commit('numbers/setMax', this.selectedMax)
        this.generateNewQuiz()
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
