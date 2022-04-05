<template>
  <div>
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
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Main',
  computed: {
    ...mapState('numbers', ['max', 'list', 'userResults', 'showResults', 'quizzType'])
  },
  mounted () {
    this.restartQuizz()
  },
  methods: {
    ...mapMutations('numbers', ['toggleShowResults', 'addNumber', 'reset', 'updateResult', 'toggleShowResults', 'clearUserResults']),
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
      this.reset()
      this.generateRandomNumbers()
    },
    clearResults () {
      this.clearUserResults()
    },
    generateRandomNumbers () {
      for (let i = 0; i < 12; i++) {
        const randomNumber = Math.floor(Math.random() * (this.max + 1))
        if (randomNumber > 0 && this.list.findIndex(element => element.number === randomNumber) === -1) {
          this.addNumber(randomNumber)
        }
      }
      setTimeout(() => this.setLoading(false), 400)
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
  padding: 1em;
}
.filters {
  width: 25%;
}
.results {
  width: 75%;
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
