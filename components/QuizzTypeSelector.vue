<template>
  <div>
    <radio-button-group :value="quizzType" :group="quizzTypes" @change="onChange" />
    <voice-speed-slider />
  </div>
</template>

<script>
export default {
  name: 'QuizzTypeSelector',
  methods: {
    onChange (newValue) {
      this.selectedType = newValue
      this.setQuizzType(newValue)
    }
  }
}
</script>
