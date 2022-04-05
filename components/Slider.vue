<template>
  <v-slider
    v-model="sliderModel"
    v-bind="$attrs"
    class="align-center"
    hide-details
    :thumb-color="thumbColor"
    :color="color"
    :track-color="trackColor"
  >
    <template #append>
      <v-text-field
        v-model="sliderModel"
        class="mt-0 pt-0"
        hide-details
        single-line
        style="width: 60px"
      />
    </template>
  </v-slider>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      sliderModel: 1,
      color: 'var(--primary-color-light)',
      trackColor: 'var(--text-color-dark)',
      thumbColor: 'var(--primary-color-light)'
    }
  },
  watch: {
    sliderModel () {
      this.$emit('change', this.sliderModel)
    }
  },
  mounted () {
    this.sliderModel = this.value
  }
}
</script>
<style scoped>
.filter-element {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: .5em 0;
}

.filter-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.filter-label {
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-label);
}
</style>
