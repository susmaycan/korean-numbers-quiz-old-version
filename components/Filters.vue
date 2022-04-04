<template>
  <container>
    <div class="filter-container">
      <h2>{{ $t('number_type') | capitalize }}:</h2>
      <div class="radio-container">
        <radio-input-group
          :group="numberTypes"
          :value="selectedType"
          @input="onTypeChanges"
        />
      </div>
      <h2>{{ $t('quizz_type') | capitalize }}:</h2>
      <div class="radio-container">
        <radio-input-group
          :group="quizzTypes"
          :value="selectedQuizz"
          @input="onQuizzTypeChanges"
        />
      </div>
      <h2>{{ $t('max_value') | capitalize }}:</h2>
      <custom-input
        v-model.number="selectedMax"
        type="number"
        :label="$t('max_number_placeholder')"
        :state="inputState"
        :placeholder="placeholder"
        :message-error="errorMessage"
        @input="onMaxChanges"
      />
      <custom-button :disabled="!isDataValid" @click="onClickFilter">
        {{ $t('generate_quizz') | capitalize }}  <fa icon="bolt" />
      </custom-button>
    </div>
  </container>
</template>

<script>
import { NUMBER_TYPES, MAX_NUMBERS, QUIZZ_TYPE } from '@/utils/constants'

export default {
  data () {
    return {
      numberTypes: NUMBER_TYPES,
      quizzTypes: QUIZZ_TYPE,
      selectedType: this.$store.state.numbers.type,
      selectedMax: this.$store.state.numbers.max,
      selectedQuizz: QUIZZ_TYPE.WRITTEN
    }
  },
  computed: {
    isChineseMaxInvalid () {
      return this.selectedType === NUMBER_TYPES.CHINESE && (this.selectedMax > MAX_NUMBERS[NUMBER_TYPES.CHINESE] || this.selectedMax < 1)
    },
    isKoreanMaxInvalid () {
      return this.selectedType === NUMBER_TYPES.KOREAN && this.selectedMax > MAX_NUMBERS[NUMBER_TYPES.KOREAN]
    },
    isDataValid () {
      if (!this.selectedMax || this.isChineseMaxInvalid || this.isKoreanMaxInvalid) {
        return false
      }
      return true
    },
    placeholder () {
      return MAX_NUMBERS[this.selectedType]
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
  methods: {
    onClickFilter () {
      this.$store.commit('numbers/setType', this.selectedType)
      this.$store.commit('numbers/setMax', this.selectedMax)
      this.$store.commit('numbers/setQuizzType', this.selectedQuizz)
      this.$emit('applyFilters')
    },
    onMaxChanges (newValue) {
      this.selectedMax = parseInt(newValue)
    },
    onTypeChanges (newValue) {
      this.selectedType = newValue
    },
    onQuizzTypeChanges (newValue) {
      this.selectedQuizz = newValue
    }
  }
}
</script>
<style scoped>
.radio-container {
  display: flex;
  flex-direction: row;
}

.filter-container {
  display: flex;
  flex-direction: column;
}
</style>
