import { DATE_QUIZ_TYPES } from '@/utils/constants'

export const state = () => ({
  dateQuizType: DATE_QUIZ_TYPES.DATE
})

export const mutations = {
  setDateQuizType (state, quizType) {
    state.dateQuizType = quizType
  }
}
