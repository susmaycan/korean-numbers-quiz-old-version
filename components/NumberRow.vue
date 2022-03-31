<template>
  <!-- <div class="number-row-container">
    <span class="number-row-label">
      {{ number.number }}
    </span> -->
  <Input
    :tabindex="index"
    :value="inputData"
    placeholder="enter number"
    :error="number.error"
    :success="number.success"
    :message-info="showResults ? number.result : null"
    @change="onChangeNumber"
  />
  <!-- </div> -->
</template>

<script>
export default {
  props: {
    number: Object,
    showResults: Boolean,
    index: Number
  },
  data () {
    return {
      inputData: ''
    }
  },
  mounted () {
    this.inputData = this.number.userInput
  },
  methods: {
    onChangeNumber (value) {
      this.inputData = value
      this.$store.commit('numbers/update', { ...this.number, userInput: this.inputData })
    }
  }
}
</script>

<style scoped>
.number-row-container {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
}
.number-row-label {
  font-weight: bold;
  margin-right: 1em;
}
</style>
