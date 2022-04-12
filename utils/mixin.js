import { mapState, mapMutations } from 'vuex'
import { DATE_QUIZZ_TYPES, QUIZZ_SKILL_TYPE, QUIZZ_TYPE } from '@/utils/constants'

export default {
  data () {
    return {
      isMobileScreenSize: false,
      quizzTypes: QUIZZ_TYPE
    }
  },
  mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
  },
  methods: {
    ...mapMutations(['setLoading', 'setQuizzType', 'setVoiceSpeed', 'toggleShowResults', 'addNumber', 'resetQuizz', 'updateResult', 'toggleShowResults', 'clearUserResults', 'setQuizzSkillType', 'setElementCount']),
    ...mapMutations('dates', ['setDateQuizzType']),
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
      return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
    }
  },
  computed: {
    ...mapState('dates', ['dateQuizzType']),
    ...mapState('numbers', ['numberType']),
    ...mapState(['loadingResults', 'quizzType', 'voiceSpeed', 'list', 'userResults', 'showResults', 'quizzSkillType', 'elementCount']),
    isWrittenQuizzType () {
      return this.quizzSkillType === QUIZZ_SKILL_TYPE.WRITTEN
    },
    isListeningQuizzType () {
      return this.quizzSkillType === QUIZZ_SKILL_TYPE.LISTENING
    },
    isNumberQuizzType () {
      return this.quizzType === QUIZZ_TYPE.NUMBERS
    },
    isDateQuizzType () {
      return this.quizzType === QUIZZ_TYPE.DATES
    },
    isTimeDateQuizzType () {
      return this.dateQuizzType === DATE_QUIZZ_TYPES.TIME
    },
    isDateDateQuizzType () {
      return this.dateQuizzType === DATE_QUIZZ_TYPES.TIME
    }
  }
}
