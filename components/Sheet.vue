<template>
  <!-- <div :class="show ? 'modal is-active' : 'modal'">
    <div class="modal-background" />
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">
          Numbers sheet
        </p>
        <button class="delete" aria-label="close" @click="closeModal" />
      </header>
      <section class="modal-card-body">
        <div class="columns">
          <div class="column is-half is-full-mobile">
            <h2 class="subtitle">
              Chinese
            </h2>
            <b-table :data="dataChinese" :columns="columns" />
          </div>
          <div class="column is-half is-full-mobile">
            <h2 class="subtitle">
              Korean
            </h2>
            <b-table :data="dataKorean" :columns="columns" />
          </div>
        </div>
      </section>
      <footer class="modal-card-foot">
        <button class="button" @click="closeModal">
          Close
        </button>
      </footer>
    </div>
  </div> -->
  <div>
    Empty table
  </div>
</template>

<script>
import { KOREAN_NUMBERS_DISPLAYED, CHINESE_NUMBERS_DISPLAYED } from '@/utils/constants'

const koreanNumbersMapped = Object.entries(KOREAN_NUMBERS_DISPLAYED).map(([key, value]) => ({ number: key, text: value }))

const chineseNumbersMapped = Object.entries(CHINESE_NUMBERS_DISPLAYED).map(([key, value]) => ({ number: key, text: value }))

export default {
  props: {
    show: {
      default: false,
      type: Boolean
    }
  },
  data () {
    return {
      columns: [
        {
          field: 'number',
          label: 'Number',
          numeric: true,
          width: 5
        },
        {
          field: 'text',
          label: 'Text'
        }
      ],
      dataKorean: koreanNumbersMapped,
      dataChinese: chineseNumbersMapped
    }
  },
  methods: {
    closeModal () {
      this.$emit('close')
    }
  }
}
</script>
