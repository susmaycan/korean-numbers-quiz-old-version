<template>
  <container>
    <Header />
    <Filters @applyFilters="restartQuizz" />
    <Results :show-results="showResults" />
    <Button @click="onCheckResults">
      {{ $t('check_results') | capitalize }}
    </Button>
    <Button v-if="!showResults" @click="toggleShowResults">
      {{ $t('reveal_results') | capitalize }}
    </Button>
    <Button v-if="showResults" @click="toggleShowResults">
      {{ $t('hide_results') | capitalize }}
    </Button>
  </container>
</template>

<script>
import { mapState } from 'vuex'
import { removeSpaces } from '@/utils/functions'

export default {
  name: 'Main',
  data () {
    return {
      showResults: false
    }
  },
  computed: {
    ...mapState('numbers', ['type', 'list', 'max'])
  },
  mounted () {
    this.generateRandomNumbers()
  },
  methods: {
    toggleShowResults () {
      this.showResults = !this.showResults
    },
    generateRandomNumbers () {
      for (let i = 0; i < 10; i++) {
        const randomNumber = Math.floor(Math.random() * (this.max + 1))
        if (randomNumber > 0 && this.list.findIndex(element => element.number === randomNumber) === -1) {
          this.$store.commit('numbers/addNumber', randomNumber)
        }
      }
    },
    onCheckResults () {
      let allSuccess = true
      this.list.forEach((element) => {
        const isCorrect = element.userInput ? removeSpaces(element.userInput) === removeSpaces(element.result) : false
        if (!isCorrect) {
          allSuccess = false
        }
        this.$store.commit('numbers/update', { ...element, error: !isCorrect, success: isCorrect })
      })

      if (allSuccess) {
        this.$buefy.dialog.confirm({
          message: 'You got all the answers correct. Congrats!',
          cancelText: 'Close window',
          confirmText: 'Restart quizz',
          onConfirm: () => this.restartQuizz()
        })
      }
    },
    restartQuizz () {
      this.$store.commit('numbers/reset')
      this.generateRandomNumbers()
    }
  }
}
</script>

<style>
:root {
  --primary-color: #20A599 ;
  --primary-color-light: #2ad6c8;
  --primary-color-dark: #136962;
  --disabled-color: #adadad ;
  --danger-color: #fa3434be ;
  --success-color: #63ff4fbe ;
  --text-color-dark: #333;
  --text-color-white: #fff;
  --font-size-text: 15px;
  --font-size-title: 32px;
  --font-family-text: Arial, Helvetica, sans-serif;
  --font-family-title: Arial, Helvetica, sans-serif;
}

html {
  font-family: var(--font-family-text);
  color: var(--text-color-dark);
  font-size: var(--font-size-text);
}
</style>
