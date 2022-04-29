<template>
  <div>
    <radio-button-group :value="quizType" :group="quizTypes" @change="onChange" />
    <voice-speed-slider />
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
