<template>
  <container>
    <div class="filter-container">
      <div class="filter-element">
        <label class="filter-label" for="number_quiz_type">{{ $t('quiz_type') | capitalize }}:</label>
        <radio-input-group
          id="number_quiz_type"
          :group="skillTypes"
          :value="quizSkillType"
          @input="onQuizSkillTypeChanges"
        />
      </div>
      <div v-if="isNumberQuizType">
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
          <max-input @generate-quiz="generateNewQuiz()" />
        </div>
      </div>
      <div v-else-if="isDateQuizType">
        <div class="filter-element">
          <label class="filter-label" for="date_quiz_type">{{ $t('date_quiz_type') | capitalize }}:</label>
          <radio-input-group
            id="date_quiz_type"
            :group="dateQuizTypes"
            :value="dateQuizType"
            @input="onDateQuizTypeChanges"
          />
        </div>
      </div>
      <div class="filter-element">
        <element-count-input @generate-quiz="generateNewQuiz()" />
      </div>
      <custom-button @click="generateNewQuiz">
        {{ $t('generate_quiz') | capitalize }}  <fa icon="bolt" />
      </custom-button>
    </div>
  </container>
</template>

<script>
import { NUMBER_TYPES, QUIZ_SKILL_TYPE, DATE_QUIZ_TYPES } from '@/utils/constants'

export default {
  data () {
    return {
      numberTypes: NUMBER_TYPES,
      skillTypes: QUIZ_SKILL_TYPE,
      dateQuizTypes: DATE_QUIZ_TYPES
    }
  },
  methods: {
    generateNewQuiz () {
      this.$emit('applyFilters')
    },
    onNumberTypeChanges (newValue) {
      if (newValue) {
        this.setNumberType(newValue)
        if (!this.errorMessage) {
          this.generateNewQuiz()
        }
      }
    },
    onQuizSkillTypeChanges (newValue) {
      this.setQuizSkillType(newValue)
      if (!this.errorMessage) {
        this.generateNewQuiz()
      }
    },
    onDateQuizTypeChanges (newValue) {
      if (newValue) {
        this.setDateQuizType(newValue)
        if (!this.errorMessage) {
          this.generateNewQuiz()
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
