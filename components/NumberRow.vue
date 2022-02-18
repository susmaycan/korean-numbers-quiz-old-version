<template>
  <div class="column is-half-desktop is-full-mobile">
    <div class="columns is-vcentered is-mobile">
      <div class="column is-2-desktop is-3-mobile">
        <b-tag type="is-primary" size="is-medium">
          {{ number.number }}
        </b-tag>
      </div>
      <div class="column is-4-mobile is-5-mobile">
        <Input :value="inputData" placeholder="enter number" :type="type" @on-change="onChangeNumber" />
      </div>
      <div class="column is-6-desktop is-4-mobile">
        <span v-if="showResults">{{ number.result }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    number: Object,
    showResults: Boolean
  },
  data () {
    return {
      inputData: ''
    }
  },
  computed: {
    type () {
      if (this.number.error) {
        return 'is-danger'
      }
      if (this.number.success) {
        return 'is-success'
      }
      return ''
    }
  },
  watch: {
    number: {
      handler () {
        console.log('number changes')
      },
      deep: true
    }
  },
  mounted () {
    this.inputData = this.number.userInput
  },
  methods: {
    onChangeNumber (value) {
      this.inputData = value
      this.$store.commit('numbers/update', { ...this.number, userInput: this.inputData })
    }
  }
}
</script>
