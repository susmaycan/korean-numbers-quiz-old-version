<template>
  <div class="header-container">
    <h1>
      {{ $t('app_title') }}
    </h1>
    <Button
      @click="toggleInfoModal"
    >
      {{ $t('sheet') }}
    </button>
  </div>
  <!-- <Sheet
      :show="isSheetModalOpen"
      @close="toggleInfoModal"
    /> -->
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      isSheetModalOpen: false
    }
  },
  methods: {
    toggleInfoModal () {
      this.isSheetModalOpen = !this.isSheetModalOpen
    }
  }
}
</script>

<style scoped>
.header-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
