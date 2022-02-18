import { NUMBER_TYPES, NUMBER_FUNCTIONS } from '@/utils/constants'

export const state = () => ({
  list: [],
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
  }
}
