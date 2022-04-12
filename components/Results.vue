<template>
  <container>
    <v-skeleton-loader
      v-if="loadingResults"
      type="table-heading, list-item-two-line, list-item-two-line, list-item-two-line, list-item-two-line"
      max-width="1000"
    />
    <div v-else class="number-list-container">
      <div class="number-list">
        <number-row
          v-for="(number, index) in list"
          :key="`${number.number}-${index}-${Date.now()}`"
          :number="number"
        />
      </div>
    </div>
  </container>
</template>

<script>
export default {
  name: 'Results'
}
</script>

<style scoped>
.number-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
}
.number-list-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media (max-width: 1000px) {
  .number-list {
    grid-template-columns: repeat(2, 1fr);
  }
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
