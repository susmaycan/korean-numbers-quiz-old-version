<template>
  <div>
    <quiz-type-selector />
    <div class="main-content">
      <separator v-if="isMobileScreenSize" />
      <div class="filters">
        <filters @applyFilters="restartQuiz" />
      </div>
      <separator v-if="isMobileScreenSize" />
      <div class="results">
        <results />
      </div>
    </div>
    <div v-if="list.length > 0" class="button-list">
      <custom-button :disabled="showResults" @click="onCheckResults">
        {{ $t('check_results') | capitalize }} <fa icon="check" />
      </custom-button>
      <custom-button @click="clearResults">
        {{ $t('clear_results') | capitalize }} <fa icon="broom" />
      </custom-button>
      <custom-button v-if="!showResults" @click="toggleShowResults">
        {{ $t('reveal_results') | capitalize }} <fa icon="eye" />
      </custom-button>
      <custom-button v-if="showResults" @click="toggleShowResults">
        {{ $t('hide_results') | capitalize }} <fa icon="eye-slash" />
      </custom-button>
    </div>
    <alert :show="displayWarningMessage">
      <p v-if="isDateDateQuizType">
        {{ $t('date_warning') | capitalize }}
      </p>
      <p v-if="isTimeDateQuizType">
        {{ $t('hour_warning') | capitalize }}
      </p>
    </alert>
    <custom-modal
      modal-name="win"
      :title="$t('win_title') | capitalize"
      :width="500"
      :height="isMobileScreenSize ? 220 : 200"
      @on-accept="restartQuiz"
    >
      {{ $t('win_message') }}
    </custom-modal>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { NUMBER_FUNCTIONS, NUMBER_TYPES, TIME_PERIOD, TIME_PERIOD_KOREAN } from '@/utils/constants'

export default {
  name: 'Main',
  data () {
    return {
      displayWarningMessage: false
    }
  },
  computed: {
    ...mapState('numbers', ['max'])
  },
  watch: {
    quizType () {
      this.restartQuiz()
    }
  },
  mounted () {
    this.restartQuiz()
  },
  methods: {
    onCheckResults () {
      let allSuccess = true
      let isCorrect = true
      this.list.forEach((element, index) => {
        const userResult = this.userResults[index]
        if (!userResult.userInput) {
          allSuccess = false
          isCorrect = false
        } else {
          if (this.isWrittenQuizType) {
            isCorrect = this.removeSpaces(element.result) === this.removeSpaces(userResult.userInput)
          } else {
            isCorrect = element.number === userResult.userInput
          }
          if (!isCorrect) {
            allSuccess = false
          }
        }
        this.updateResult({ ...userResult, error: !isCorrect, success: isCorrect })
        this.updateResult({ ...userResult, error: !isCorrect, success: isCorrect })
      })

      if (allSuccess) {
        this.$modal.show('win')
        this.displayWarningMessage = false
      } else if (!allSuccess && this.isDateQuizType && this.isListeningQuizType) {
        this.displayWarningMessage = true
      }
    },
    restartQuiz () {
      this.setLoading(true)
      this.resetQuiz()
      this.generateQuiz()
      this.displayWarningMessage = false
    },
    clearResults () {
      this.clearUserResults()
    },
    generateQuiz () {
      if (this.isNumberQuizType) {
        this.generateNumberQuiz()
      } else if (this.isDateQuizType) {
        this.generateDateQuiz()
      }
      setTimeout(() => this.setLoading(false), 400)
    },
    generateNumberQuiz () {
      for (let i = 0; i < this.elementCount; i++) {
        const randomNumber = this.generateRandomNumber(this.max)
        if (randomNumber > 0 && this.list.findIndex(element => element.number === randomNumber) === -1) {
          this.addNumber({ number: randomNumber, result: NUMBER_FUNCTIONS[this.numberType](randomNumber) })
        }
      }
    },
    generateDateQuiz () {
      if (this.isTimeDateQuizType) {
        this.generateTimeDateQuiz()
      } else {
        this.generateDateDateQuiz()
      }
    },
    generateTimeDateQuiz () {
      for (let i = 0; i < this.elementCount; i++) {
        let hour = this.generateRandomNumber(12)
        let minute = this.generateRandomNumber(60)
        const period = this.generateRandomNumber(3)
        const resultHour = `${NUMBER_FUNCTIONS[NUMBER_TYPES.KOREAN](hour, true)}시`
        const resultMinute = minute > 0 ? ` ${NUMBER_FUNCTIONS[NUMBER_TYPES.CHINESE](minute)}분` : ''
        const resultTime = `${TIME_PERIOD_KOREAN[period]} ${resultHour}${resultMinute}`
        if (hour < 10) {
          hour = '0' + hour
        }
        if (minute < 10) {
          minute = '0' + minute
        }
        const time = `${hour}:${minute} ${TIME_PERIOD[period]}`
        this.addNumber({ number: time, result: resultTime })
      }
    },
    generateDateDateQuiz () {
      for (let i = 0; i < this.elementCount; i++) {
        const date = this.generateRandomDate(new Date(2012, 0, 1, 3), new Date())
        const year = date.getUTCFullYear()
        let month = date.getMonth() + 1
        let day = date.getUTCDate()
        const resultDate = `${NUMBER_FUNCTIONS[NUMBER_TYPES.CHINESE](year)}년 ${NUMBER_FUNCTIONS[NUMBER_TYPES.CHINESE](month)}월 ${NUMBER_FUNCTIONS[NUMBER_TYPES.CHINESE](day)}일`

        if (month < 10) {
          month = '0' + month
        }

        if (day < 10) {
          day = '0' + day
        }
        const displayedDate = `${day}/${month}/${year}`
        this.addNumber({ number: displayedDate, result: resultDate })
      }
    }

  }
}
</script>

<style scoped>
.button-list {
  display: flex;
  justify-content: center;
  align-content: center;
}
.main-content {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-evenly;
}
.filters {
  width: 30%;
}
.results {
  width: 70%;
}
@media (max-width: 1200px) {
  .main-content {
    flex-direction: column;
  }
  .button-list {
    flex-direction: column;
  }
  .filters {
    width: 100%;
    padding: .5em 1em;
  }
  .results {
    width: 100%;
  }
}
</style>
