import { QUIZZ_TYPE, QUIZZ_SKILL_TYPE } from '@/utils/constants'

export const state = () => ({
  loadingResults: false,
  quizzType: QUIZZ_TYPE.NUMBERS,
  quizzSkillType: QUIZZ_SKILL_TYPE.WRITTEN,
  voiceSpeed: 0.7,
  list: [],
  userResults: [],
  showResults: false,
  elementCount: 10
})

export const mutations = {
  setLoading (state, loading) {
    state.loadingResults = loading
  },
  setQuizzType (state, quizzType) {
    state.quizzType = quizzType
  },
  setVoiceSpeed (state, voiceSpeed) {
    state.voiceSpeed = voiceSpeed
  },
  addNumber (state, element) {
    state.list.push(element)
    state.userResults.push({
      number: element.number,
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
  resetQuizz (state) {
    state.list = []
    state.userResults = []
    state.showResults = false
  },
  toggleShowResults (state) {
    state.showResults = !state.showResults
  },
  clearUserResults (state) {
    state.showResults = false
    state.userResults = state.userResults.map(number => ({ ...number, userInput: null, error: false, success: false }))
  },
  setQuizzSkillType (state, quizzSkillType) {
    state.quizzSkillType = quizzSkillType
  },
  setElementCount (state, count) {
    state.elementCount = count
  }
}
