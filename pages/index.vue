<template>
  <box>
    <Filters @applyFilters="navigateToNextPage" />
    <Written />
    <div class="button-list">
      <Button @click="onCheckResults">
        {{ $t('check_results') | capitalize }}
      </Button>
      <Button v-if="!showResults" @click="toggleShowResults">
        {{ $t('reveal_results') | capitalize }}
      </Button>
      <Button v-if="showResults" @click="toggleShowResults">
        {{ $t('hide_results') | capitalize }}
      </Button>
    </div>
  </box>
</template>

<script>
import { mapState } from 'vuex'
import { removeSpaces } from '@/utils/functions'

export default {
  name: 'Main',
  computed: {
    ...mapState('numbers', ['max', 'list'])
  },
  methods: {
    navigateToNextPage () {
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

<style scoped>
.button-list {
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>