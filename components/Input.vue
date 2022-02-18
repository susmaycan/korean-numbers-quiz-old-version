<template>
  <b-field
    :label="label"
    :type="type"
  >
    <b-input v-model="result" :placeholder="placeholder" />
  </b-field>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: 'search'
    },
    value: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      result: ''
    }
  },
  watch: {
    result (newValue) {
      this.$emit('on-change', newValue)
    }
  },
  mounted () {
    this.data = this.value
  }
}
</script>
