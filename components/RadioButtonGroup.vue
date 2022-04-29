<template>
  <div class="radio-input-group">
    <hr class="radio-separator">
    <div class="button-group">
      <button
        v-for="element in group"
        :key="element"
        :class="radioButtonClass(element)"
        @click="onClick(element)"
      >
        {{ $t(element) | capitalize }}
      </button>
    </div>
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
  margin: 1em 0;
}

.button-group {
   display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}
.radio-button {
  margin: 1em 0;
  padding: .5em 1em;
  border-radius: 0%;
  border: 2px solid var(--primary-color-light);
  color: var(--primary-color-light);
  font-family: var(--font-family-text);
  font-size: var(--font-size-text);
  font-weight: var(--font-weight-bold);
}

.radio-button:hover {
  background-color: var(--primary-color-light);
  color: var(--text-color-white);
}

.radio-button-active {
  background-color: var(--primary-color-light);
  color: var(--text-color-white);
}

.radio-separator {
  color: var(--primary-color-light);
  height: 1px;
  background-color: var(--primary-color-light);
  border: none;
  width: 40%;
}

.radio-button:first-child {
  border-top-left-radius: 1em;
  border-bottom-left-radius: 1em;
}

.radio-button:last-child {
  border-top-right-radius: 1em;
  border-bottom-right-radius: 1em;
}

</style>
