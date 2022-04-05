<template>
  <container>
    <div class="filter-container">
      <div class="filter-element">
        <label class="filter-label" for="number_type">{{ $t('number_type') | capitalize }}:</label>
        <radio-input-group
          id="number_type"
          :group="numberTypes"
          :value="type"
          @input="onTypeChanges"
        />
      </div>
      <div class="filter-element">
        <label class="filter-label" for="quizz_type">{{ $t('quizz_type') | capitalize }}:</label>
        <radio-input-group
          id="quizz_type"
          :group="quizzTypes"
          :value="quizzType"
          @input="onQuizzTypeChanges"
        />
      </div>
      <div class="filter-element">
        <label class="filter-label" for="max_value">{{ $t('max_value') | capitalize }}:</label>
        <custom-input
          id="max_value"
          v-model.number="selectedMax"
          type="number"
          :label="$t('max_number_placeholder')"
          :state="inputState"
          :placeholder="placeholder"
          :message-error="errorMessage"
          @change="onMaxChanges"
        />
      </div>
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
        this.generateNewQuizz()
      }
    },
    voiceSpeed () {
      this.setVoiceSpeed(this.voiceSpeed)
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
.filter-element {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: .5em 0;
}

.filter-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.filter-label {
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-label);
}
</style>
