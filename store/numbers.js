import { NUMBER_TYPES, MAX_NUMBERS } from '@/utils/constants'

export const state = () => ({
  max: MAX_NUMBERS[NUMBER_TYPES.CHINESE],
  numberType: NUMBER_TYPES.CHINESE
})

export const mutations = {
  setNumberType (state, type) {
    state.numberType = type
    if (state.max > MAX_NUMBERS[state.numberType]) {
      state.max = MAX_NUMBERS[state.numberType]
    }
  },
  setMax (state, max) {
    let maximum = max
    if (maximum > MAX_NUMBERS[state.numberType]) {
      maximum = MAX_NUMBERS[state.numberType]
    }
    state.max = maximum
  }
}
