<template>
  <box :shadow="false">
    <form v-if="list.length > 0" class="number-list">
      <NumberRow
        v-for="(number, index) in list"
        :key="`${number.number}-${index}-${Date.now()}`"
        :number="number"
        :show-results="showResults"
        :index="index + 1"
      />
    </form>
    <div v-else>
      {{ $t('empty_list') | capitalize }}
    </div>
  </box>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Written',
  props: {
    showResults: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapState('numbers', ['type', 'list', 'max'])
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
