<template>
  <box :shadow="false">
    <div class="radio-container">
      <radio-input-group
        :group="numberTypes"
        :value="selectedType"
        @input="onTypeChanges"
      />
    </div>
    <Input
      v-model.number="selectedMax"
      type="number"
      :label="$t('max_number_placeholder')"
      :state="inputState"
      :placeholder="placeholder"
      :message-error="errorMessage"
      @input="onMaxChanges"
    />
    <Button :disabled="!isDataValid" @click="onClickFilter">
      {{ $t('apply') | capitalize }}
    </Button>
  </box>
</template>

<script>
import { NUMBER_TYPES, MAX_NUMBERS } from '@/utils/constants'

export default {
  data () {
    return {
      numberTypes: NUMBER_TYPES,
      selectedType: this.$store.state.numbers.type,
      selectedMax: this.$store.state.numbers.max
    }
  },
  computed: {
    isChineseMaxInvalid () {
      return this.selectedType === NUMBER_TYPES.CHINESE && (this.selectedMax > MAX_NUMBERS[NUMBER_TYPES.CHINESE] || this.selectedMax < 1)
    },
    isKoreanMaxInvalid () {
      return this.selectedType === NUMBER_TYPES.KOREAN && this.selectedMax > MAX_NUMBERS[NUMBER_TYPES.KOREAN]
    },
    isDataValid () {
      if (!this.selectedMax || this.isChineseMaxInvalid || this.isKoreanMaxInvalid) {
        return false
      }
      return true
    },
    placeholder () {
      return MAX_NUMBERS[this.selectedType]
    },
    inputState () {
      if (!this.isDataValid) {
        return 'danger'
      }
      return ''
    },
    errorMessage () {
      if (this.isChineseMaxInvalid) {
        return 'Chinese maximum number must be between 1 and ' + MAX_NUMBERS[NUMBER_TYPES.CHINESE]
      }

      if (this.isKoreanMaxInvalid) {
        return 'Korean maximum number must be between 1 and ' + MAX_NUMBERS[NUMBER_TYPES.KOREAN]
      }

      if (!this.selectedMax) {
        return 'Maximum value is required'
      }

      return null
    }
  },
  methods: {
    onClickFilter () {
      this.$store.commit('numbers/setType', this.selectedType)
      this.$store.commit('numbers/setMax', this.selectedMax)
      this.$emit('applyFilters')
    },
    onMaxChanges (newValue) {
      this.selectedMax = parseInt(newValue)
    },
    onTypeChanges (newValue) {
      this.selectedType = newValue
    }
  }
}
</script>
<style scoped>
.radio-container {
  display: flex;
  flex-direction: row;
}

.filter-container {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 2em;
  border-radius: 1em;
}
</style>
