import { NUMBER_TYPES, NUMBER_FUNCTIONS, MAX_NUMBERS } from '@/utils/constants'

export const state = () => ({
  list: [],
  max: MAX_NUMBERS[NUMBER_TYPES.CHINESE],
  type: NUMBER_TYPES.CHINESE
})

export const mutations = {
  addNumber (state, number) {
    state.list.push({
      number,
      userInput: null,
      result: NUMBER_FUNCTIONS[state.type](number),
      error: false,
      success: false
    })
  },
  update (state, payload) {
    const index = state.list.findIndex(item => item.number === payload.number)
    if (index !== -1) {
      state.list.splice(index, 1, payload)
    }
  },
  reset (state) {
    state.list = []
  },
  setType (state, type) {
    state.type = type
    state.max = MAX_NUMBERS[type]
  },
  setMax (state, max) {
    state.max = max
  }
}
