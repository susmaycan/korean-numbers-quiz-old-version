<template>
  <container>
    <div class="filter-container">
      <div class="filter-element">
        <label class="filter-label" for="number_quizz_type">{{ $t('quizz_type') | capitalize }}:</label>
        <radio-input-group
          id="number_quizz_type"
          :group="skillTypes"
          :value="quizzSkillType"
          @input="onQuizzSkillTypeChanges"
        />
      </div>
      <div v-if="isNumberQuizzType">
        <div class="filter-element">
          <label class="filter-label" for="number_type">{{ $t('number_type') | capitalize }}:</label>
          <radio-input-group
            id="number_type"
            :group="numberTypes"
            :value="numberType"
            @input="onNumberTypeChanges"
          />
        </div>
        <div class="filter-element">
          <max-input @generate-quizz="generateNewQuizz()" />
        </div>
      </div>
      <div v-else-if="isDateQuizzType">
        <div class="filter-element">
          <label class="filter-label" for="date_quizz_type">{{ $t('date_quizz_type') | capitalize }}:</label>
          <radio-input-group
            id="date_quizz_type"
            :group="dateQuizzTypes"
            :value="dateQuizzType"
            @input="onDateQuizzTypeChanges"
          />
        </div>
      </div>
      <div class="filter-element">
        <element-count-input @generate-quizz="generateNewQuizz()" />
      </div>
      <custom-button @click="generateNewQuizz">
        {{ $t('generate_quizz') | capitalize }}  <fa icon="bolt" />
      </custom-button>
    </div>
  </container>
</template>

<script>
import { NUMBER_TYPES, QUIZZ_SKILL_TYPE, DATE_QUIZZ_TYPES } from '@/utils/constants'

export default {
  data () {
    return {
      numberTypes: NUMBER_TYPES,
      skillTypes: QUIZZ_SKILL_TYPE,
      dateQuizzTypes: DATE_QUIZZ_TYPES
    }
  },
  methods: {
    generateNewQuizz () {
      this.$emit('applyFilters')
    },
    onNumberTypeChanges (newValue) {
      if (newValue) {
        this.setNumberType(newValue)
        if (!this.errorMessage) {
          this.generateNewQuizz()
        }
      }
    },
    onQuizzSkillTypeChanges (newValue) {
      this.setQuizzSkillType(newValue)
      if (!this.errorMessage) {
        this.generateNewQuizz()
      }
    },
    onDateQuizzTypeChanges (newValue) {
      if (newValue) {
        this.setDateQuizzType(newValue)
        if (!this.errorMessage) {
          this.generateNewQuizz()
        }
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
