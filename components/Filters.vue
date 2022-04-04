<template>
  <container>
    <div class="filter-container">
      <h2>{{ $t('number_type') | capitalize }}:</h2>
      <div class="radio-container">
        <radio-input-group
          :group="numberTypes"
          :value="type"
          @input="onTypeChanges"
        />
      </div>
      <h2>{{ $t('quizz_type') | capitalize }}:</h2>
      <div class="radio-container">
        <radio-input-group
          :group="quizzTypes"
          :value="quizzType"
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
        @change="onMaxChanges"
      />
      <custom-button :disabled="!isDataValid" @click="generateNewQuizz">
        {{ $t('generate_quizz') | capitalize }}  <fa icon="bolt" />
      </custom-button>
    </div>
  </container>
</template>

<script>
import { mapState } from 'vuex'
import { NUMBER_TYPES, MAX_NUMBERS, QUIZZ_TYPE } from '@/utils/constants'

export default {
  data () {
    return {
      numberTypes: NUMBER_TYPES,
      quizzTypes: QUIZZ_TYPE,
      selectedMax: this.$store.state.numbers.max
    }
  },
  computed: {
    ...mapState('numbers', ['max', 'type', 'quizzType']),
    isChineseMaxInvalid () {
      return this.type === NUMBER_TYPES.CHINESE && (this.selectedMax > MAX_NUMBERS[NUMBER_TYPES.CHINESE] || this.selectedMax < 1)
    },
    isKoreanMaxInvalid () {
      return this.type === NUMBER_TYPES.KOREAN && this.selectedMax > MAX_NUMBERS[NUMBER_TYPES.KOREAN]
    },
    isDataValid () {
      if (!this.selectedMax || this.isChineseMaxInvalid || this.isKoreanMaxInvalid) {
        return false
      }
      return true
    },
    placeholder () {
      return MAX_NUMBERS[this.type]
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
      }
    }
  },
  methods: {
    generateNewQuizz () {
      this.$emit('applyFilters')
    },
    onMaxChanges (newValue) {
      this.selectedMax = parseInt(newValue)
      if (!this.errorMessage) {
        this.$store.commit('numbers/setMax', this.selectedMax)
        this.generateNewQuizz()
      }
    },
    onTypeChanges (newValue) {
      this.$store.commit('numbers/setType', newValue)
      if (!this.errorMessage) {
        this.generateNewQuizz()
      }
    },
    onQuizzTypeChanges (newValue) {
      this.$store.commit('numbers/setQuizzType', newValue)
      if (!this.errorMessage) {
        this.generateNewQuizz()
      }
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
