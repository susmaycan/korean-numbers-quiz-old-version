<template>
  <v-chip
    class="ma-2"
    :color="color"
    :text-color="textColor"
  >
    <slot />
  </v-chip>
</template>

<script>
export default {
  name: 'Tag',
  data () {
    return {
      color: 'var(--primary-color-light)',
      textColor: 'var(--text-color-white)'
    }
  }
}
</script>
