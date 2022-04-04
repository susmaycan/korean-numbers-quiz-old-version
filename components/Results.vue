<template>
  <container>
    <form v-if="list.length > 0" class="number-list">
      <number-row
        v-for="(number, index) in list"
        :key="`${number.number}-${index}-${Date.now()}`"
        :number="number"
      />
    </form>
    <div v-else class="empty-list-container">
      {{ $t('empty_list') | capitalize }}
    </div>
  </container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Results',
  computed: {
    ...mapState('numbers', ['list'])
  }
}
</script>

<style scoped>
.number-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(100px, auto);
}

@media (max-width: 756px) {
  .number-list {
    grid-template-columns: repeat(1, 1fr);
  }

  .empty-list-container {
    margin: 1em;
  }
}
</style>
