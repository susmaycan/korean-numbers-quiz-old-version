import { NUMBER_TYPES, NUMBER_FUNCTIONS, MAX_NUMBERS, QUIZZ_TYPE } from '@/utils/constants'

export const state = () => ({
  list: [],
  userResults: [],
  max: MAX_NUMBERS[NUMBER_TYPES.CHINESE],
  type: NUMBER_TYPES.CHINESE,
  quizzType: QUIZZ_TYPE.WRITTEN,
  showResults: false
})

export const mutations = {
  addNumber (state, number) {
    state.list.push({
      number,
      result: NUMBER_FUNCTIONS[state.type](number)
    })
    state.userResults.push({
      number,
      userInput: null,
      error: false,
      success: false
    })
  },
  updateResult (state, payload) {
    const index = state.userResults.findIndex(item => item.number === payload.number)
    if (index !== -1) {
      state.userResults.splice(index, 1, payload)
    }
  },
  reset (state) {
    state.list = []
    state.userResults = []
    state.showResults = false
  },
  setType (state, type) {
    state.type = type
    if (state.max > MAX_NUMBERS[state.type]) {
      state.max = MAX_NUMBERS[state.type]
    }
  },
  setQuizzType (state, quizzType) {
    state.quizzType = quizzType
  },
  toggleShowResults (state) {
    state.showResults = !state.showResults
  },
  setMax (state, max) {
    let maximum = max
    if (maximum > MAX_NUMBERS[state.type]) {
      maximum = MAX_NUMBERS[state.type]
    }
    state.max = maximum
  },
  clearUserResults (state) {
    state.showResults = false
    state.userResults = state.userResults.map(number => ({ ...number, userInput: null, error: false, success: false }))
  }
}
