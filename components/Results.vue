<template>
  <box :shadow="false">
    <div class="number-list">
      <NumberRow
        v-for="(number, index) in list"
        :key="`${number.number}-${index}-${Date.now()}`"
        :number="number"
        :show-results="showResults"
      />
    </div>
  </box>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Results',
  props: {
    showResults: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapState('numbers', ['list'])
  }
}
</script>

<style scoped>
.number-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* grid-gap: 10px; */
  grid-auto-rows: minmax(100px, auto);
}
</style>
