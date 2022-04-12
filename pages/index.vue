<template>
  <div>
    <quizz-type-selector />
    <div class="main-content">
      <separator v-if="isMobileScreenSize" />
      <div class="filters">
        <filters @applyFilters="restartQuizz" />
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
    <custom-modal
      modal-name="win"
      :title="$t('win_title') | capitalize"
      :width="500"
      :height="isMobileScreenSize ? 220 : 200"
      @on-accept="restartQuizz"
    >
      {{ $t('win_message') }}
    </custom-modal>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { NUMBER_FUNCTIONS, NUMBER_TYPES } from '@/utils/constants'

export default {
  name: 'Main',
  computed: {
    ...mapState('numbers', ['max'])
  },
  watch: {
    quizzType () {
      this.restartQuizz()
    }
  },
  mounted () {
    this.restartQuizz()
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
          if (this.isWrittenQuizzType) {
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
      }
    },
    restartQuizz () {
      this.setLoading(true)
      this.resetQuizz()
      this.generateQuizz()
    },
    clearResults () {
      this.clearUserResults()
    },
    generateQuizz () {
      if (this.isNumberQuizzType) {
        this.generateNumberQuizz()
      } else if (this.isDateQuizzType) {
        this.generateDateQuizz()
      }
      setTimeout(() => this.setLoading(false), 400)
    },
    generateNumberQuizz () {
      for (let i = 0; i < this.elementCount; i++) {
        const randomNumber = this.generateRandomNumber(this.max)
        if (randomNumber > 0 && this.list.findIndex(element => element.number === randomNumber) === -1) {
          this.addNumber({ number: randomNumber, result: NUMBER_FUNCTIONS[this.numberType](randomNumber) })
        }
      }
    },
    generateDateQuizz () {
      if (this.isTimeDateQuizzType) {
        this.generateTimeDateQuizz()
      } else {
        this.generateDateDateQuizz()
      }
    },
    generateTimeDateQuizz () {
      for (let i = 0; i < this.elementCount; i++) {
        let hour = this.generateRandomNumber(12)
        let minute = this.generateRandomNumber(60)
        const resultHour = `${NUMBER_FUNCTIONS[NUMBER_TYPES.KOREAN](hour)}시`
        const resultMinute = minute > 0 ? ` ${NUMBER_FUNCTIONS[NUMBER_TYPES.CHINESE](minute)}분` : ''
        const resultTime = resultHour + resultMinute
        if (hour < 10) {
          hour = '0' + hour
        }
        if (minute < 10) {
          minute = '0' + minute
        }
        const time = `${hour}:${minute}`
        this.addNumber({ number: time, result: resultTime })
      }
    },
    generateDateDateQuizz () {
      for (let i = 0; i < this.elementCount; i++) {
        const date = this.generateRandomDate(new Date(2012, 0, 1), new Date())
        const year = date.getUTCFullYear()
        const month = date.getMonth() + 1
        const day = date.getUTCDate()
        const resultDate = `${NUMBER_FUNCTIONS[NUMBER_TYPES.CHINESE](year)}년 ${NUMBER_FUNCTIONS[NUMBER_TYPES.CHINESE](month)}월 ${NUMBER_FUNCTIONS[NUMBER_TYPES.CHINESE](day)}일`
        this.addNumber({ number: date.toLocaleDateString(), result: resultDate })
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
