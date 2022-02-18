<template>
  <b-button @click="onClick">
    {{ title }}
  </b-button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Button'
    },
    onClick: {
      type: Function,
      default () {}
    }
  }
}
</script>
