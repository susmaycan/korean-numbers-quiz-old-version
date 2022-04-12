<template>
  <div class="radio-input-group">
    <hr class="radio-separator">
    <button
      v-for="element in group"
      :key="element"
      :class="radioButtonClass(element)"
      @click="onClick(element)"
    >
      {{ element | capitalize }}
    </button>
    <hr class="radio-separator">
  </div>
</template>

<script>
export default {
  name: 'RadioButtonGroup',
  props: {
    group: {
      type: Object,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      selectedValue: this.value
    }
  },
  watch: {
    value (newValue) {
      this.selectedValue = newValue
    }
  },
  methods: {
    isActive (element) {
      return element === this.selectedValue
    },
    radioButtonClass (element) {
      let baseClass = 'radio-button'
      if (this.isActive(element)) {
        baseClass += ' radio-button-active'
      }
      return baseClass
    },
    onClick (element) {
      this.$emit('change', element)
    }
  }
}
</script>

<style scoped>
.radio-input-group {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.radio-button {
  margin: 1em 0;
  padding: .5em 1em;
  border-radius: 0%;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  font-family: var(--font-family-text);
  font-size: var(--font-size-text);
  font-weight: var(--font-weight-bold);
}

.radio-button:hover {
  background-color: var(--primary-color);
  color: var(--text-color-white);
}

.radio-button-active {
  background-color: var(--primary-color);
  color: var(--text-color-white);
}

.radio-separator {
  color: var(--primary-color);
  height: 1px;
  background-color: var(--primary-color);
  border: none;
  width: 40%;
}

</style>
