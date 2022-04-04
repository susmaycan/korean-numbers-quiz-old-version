<template>
  <div class="input-container">
    <input
      :disabled="success"
      v-bind="$attrs"
      :class="inputClass"
      @input="onInput"
      @change="onChange"
      @focus="onFocus"
    >
    <fa v-if="error || messageError" class="input-icon input-icon-error" icon="circle-xmark" />
    <fa v-if="success" class="input-icon input-icon-success" icon="circle-check" />
    <p v-if="messageError" class="input-error-message">
      {{ messageError }}
    </p>
  </div>
</template>

<script>

export default {
  name: 'Input',
  props: {
    messageError: {
      type: String,
      default: ''
    },
    error: {
      type: Boolean,
      default: false
    },
    success: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    inputClass () {
      let baseClass = 'input-custom'
      if (this.messageError || this.error) {
        baseClass += ' input-error'
      }

      if (this.success) {
        baseClass += ' input-success'
      }
      return baseClass
    },
    iconClass () {
      let baseClass = 'input-icon'
      if (this.messageError || this.error) {
        baseClass += ' input-icon-error'
      }

      if (this.success) {
        baseClass += ' input-icon-success'
      }
      return baseClass
    }
  },
  methods: {
    onInput (event) {
      event.preventDefault()
      this.$emit('input', event.target.value)
    },
    onChange (event) {
      event.preventDefault()
      this.$emit('change', event.target.value)
    },
    onFocus (event) {
      event.preventDefault()
      this.$emit('focus', event.target.value)
    }
  }
}
</script>

<style scoped>
.input-container {
  margin: .5em 0;
}
.input-custom {
  font-family: var(--font-family-text);
  color: var(--text-color-dark);
  font-size: var(--font-size-text);
  padding: 1em;
  border: 1px solid rgb(211, 211, 211);
  border-radius: 10px;
}

.input-custom:focus {
  outline: none;
  border: 3px solid var(--primary-color-dark)
}

.input-error {
  color: var(--danger-color);
  border: 1px solid var(--danger-color)
}

.input-error:focus {
  outline: none;
  border: 3px solid var(--danger-color)
}

.input-success {
  color: var(--success-color);
  border: 1px solid var(--success-color)
}

.input-success:focus {
  outline: none;
  border: 3px solid var(--success-color)
}

.input-error-message {
  padding-top: .25em;
  margin-top: 0;
  color: var(--danger-color);
}

.input-icon {
  margin-left: -2em;
}

.input-icon-error {
  color: var(--danger-color);
}

.input-icon-success {
  color: var(--success-color);
}

</style>
