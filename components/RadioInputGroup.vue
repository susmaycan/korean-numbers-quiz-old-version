<template>
  <div class="radio-input-group">
    <label
      v-for="element in group"
      :key="element"
      class="radio-input-label"
    >
      <input
        v-model="dataValue"
        type="radio"
        :value="element"
        class="custom-input"
        @input="onInput"
      >
      {{ element | capitalize }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    group: {
      type: Object,
      required: true
    },
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      dataValue: this.value
    }
  },
  methods: {
    onInput (event) {
      this.dataValue = event.target.value
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style scoped>
.custom-input {
  font-family: var(--font-family-text);
  color: var(--text-color-dark);
  font-size: var(--font-size-text);
  padding: 1em;
  margin: .5em 0;
}
.radio-input-group {
  margin: .5em 0;
  max-width: 100%;
  margin: 0 auto;
}

.radio-input-label {
  margin: 0 .5em;
}

</style>
