<template>
  <!-- <div class="input-container">
    <input v-bind="$attrs" :class="inputClass" @input="onInput" @change="onChange">
    <span v-if="messageInfo" class="input-info-message">
      {{ messageInfo }}
    </span>
    <span v-if="messageError" class="input-error-message">
      {{ messageError }}
    </span>
  </div> -->
  <input v-bind="$attrs" :class="inputClass" @input="onInput" @change="onChange">
</template>

<script>

export default {
  name: 'Input',
  props: {
    messageInfo: {
      type: String,
      default: ''
    },
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
.input-error {
  color: var(--danger-color);
  border: 1px solid var(--danger-color)
}

.input-success {
  color: var(--success-color);
  border: 1px solid var(--success-color)
}

.input-error-message {
  padding-top: .25em;
  margin-top: 0;
  color: var(--danger-color);
  }

  .input-info-message {
  padding-top: .25em;
  margin-top: 0;
  /* color: var(--danger-color); */
  }
</style>
