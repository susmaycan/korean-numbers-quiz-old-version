import { mapState, mapMutations } from 'vuex'
import { DATE_QUIZ_TYPES, QUIZ_SKILL_TYPE, QUIZ_TYPE } from '@/utils/constants'

export default {
  data () {
    return {
      isMobileScreenSize: false,
      quizTypes: QUIZ_TYPE
    }
  },
  mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
  },
  methods: {
    ...mapMutations(['setLoading', 'setQuizType', 'setVoiceSpeed', 'toggleShowResults', 'addNumber', 'resetQuiz', 'updateResult', 'toggleShowResults', 'clearUserResults', 'setQuizSkillType', 'setElementCount']),
    ...mapMutations('dates', ['setDateQuizType']),
    ...mapMutations('numbers', ['setNumberType']),
    onResize () {
      this.isMobileScreenSize = window.innerWidth < 1200
    },
    removeSpaces (str) {
      return str.replace(/ /g, '')
    },
    generateRandomNumber (maxVal, minVal = 1) {
      return Math.floor(Math.random() * (maxVal - minVal) + minVal)
    },
    generateRandomDate (start, end) {
      const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
      const noTimeDate = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate()
      )
      return noTimeDate
    }
  },
  computed: {
    ...mapState('dates', ['dateQuizType']),
    ...mapState('numbers', ['numberType']),
    ...mapState(['loadingResults', 'quizType', 'voiceSpeed', 'list', 'userResults', 'showResults', 'quizSkillType', 'elementCount']),
    isWrittenQuizType () {
      return this.quizSkillType === QUIZ_SKILL_TYPE.WRITTEN
    },
    isListeningQuizType () {
      return this.quizSkillType === QUIZ_SKILL_TYPE.LISTENING
    },
    isNumberQuizType () {
      return this.quizType === QUIZ_TYPE.NUMBERS
    },
    isDateQuizType () {
      return this.quizType === QUIZ_TYPE.DATES
    },
    isTimeDateQuizType () {
      return this.dateQuizType === DATE_QUIZ_TYPES.TIME
    },
    isDateDateQuizType () {
      return this.dateQuizType === DATE_QUIZ_TYPES.DATE
    }
  }
}
