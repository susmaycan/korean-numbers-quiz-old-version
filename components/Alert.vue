<template>
  <v-snackbar
    v-model="showAlert"
    :timeout="timeout"
    color="warning"
  >
    <slot />
    <template #action="{ attrs }">
      <v-btn
        color="black"
        text
        v-bind="attrs"
        @click="showAlert = false"
      >
        {{ $t('close') | capitalize }}
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: 'Alert',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      showAlert: this.show,
      timeout: 50000
    }
  },
  watch: {
    show (newValue) {
      this.showAlert = newValue
    }
  }
}
</script>
