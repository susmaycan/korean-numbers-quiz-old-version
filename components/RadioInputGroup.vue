<template>
  <div class="radio-input-group">
    <v-radio-group
      v-model="dataValue"
      row
    >
      <v-radio
        v-for="element in group"
        :key="element"
        :label="element | capitalize"
        :value="element"
        :color="color"
        class="radio-input-label"
      />
    </v-radio-group>
  </div>
</template>

<script>
export default {
  name: 'RadioInputGroup',
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
      dataValue: null,
      color: 'var(--primary-color-light)',
      trackColor: 'var(--text-color-dark)',
      thumbColor: 'var(--primary-color-light)'
    }
  },
  watch: {
    dataValue (newValue) {
      this.$emit('input', newValue)
    },
    value (newValue) {
      this.dataValue = newValue
    }
  },
  mounted () {
    this.dataValue = this.value
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
