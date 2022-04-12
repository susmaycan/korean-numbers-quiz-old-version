import { DATE_QUIZZ_TYPES } from '@/utils/constants'

export const state = () => ({
  dateQuizzType: DATE_QUIZZ_TYPES.DATE
})

export const mutations = {
  setDateQuizzType (state, quizzType) {
    state.dateQuizzType = quizzType
  }
}
