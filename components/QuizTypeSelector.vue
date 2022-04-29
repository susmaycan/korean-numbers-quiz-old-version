<template>
  <div>
    <radio-button-group :value="quizType" :group="quizTypes" @change="onChange" />
  </div>
</template>

<script>
export default {
  name: 'QuizTypeSelector',
  methods: {
    onChange (newValue) {
      this.selectedType = newValue
      this.setQuizType(newValue)
    }
  }
}
</script>
