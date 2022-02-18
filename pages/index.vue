<template>
  <div class="container main-page">
    <div class="level">
      <h1 class="title">
        한구어 quiz
      </h1>
      <b-button
        type="is-primary"
        outlined
        size="is-big"
        icon-left="information"
        @click="toggleInfoModal"
      >
        Sheet
      </b-button>
    </div>
    <div class="block box">
      <b-radio
        v-for="numberType in numberTypes"
        :key="numberType"
        v-model="selectedType"
        :name="numberType"
        :native-value="numberType"
      >
        {{ numberType }}
      </b-radio>
      <b-field label="Enter max number:">
        <b-numberinput v-model="max" placeholder="99" :min="1" :max="selectedType === numberTypes.CHINESE ? 999999 : 99" />
      </b-field>
      <Button :on-click="restartQuizz" title="Apply" />
    </div>
    <div class="box block">
      <div class="columns is-mobile is-multiline">
        <NumberRow
          v-for="(number, index) in list"
          :key="number.number+index"
          :number="number"
          :show-results="showResults"
        />
      </div>
      <Button :on-click="onCheckResults" title="Check Results" />
      <Button v-if="!showResults" :on-click="toggleShowResults" title="Reveal results" />
      <Button v-if="showResults" :on-click="toggleShowResults" title="Hide results" />
    </div>
    <Sheet
      :show="isSheetModalOpen"
      @close="toggleInfoModal"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { NUMBER_TYPES } from '@/utils/constants'
import { removeSpaces } from '@/utils/functions'

export default {
  data () {
    return {
      showResults: false,
      numberTypes: NUMBER_TYPES,
      selectedType: this.$store.state.numbers.type,
      max: this.setMax(),
      isSheetModalOpen: false
    }
  },
  computed: {
    ...mapState('numbers', ['type']),
    ...mapState('numbers', ['list'])
  },
  watch: {
    selectedType () {
      this.$store.commit('numbers/setType', this.selectedType)
      this.max = this.setMax()
    }
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
    },
    setMax () {
      return this.$store.state.numbers.type === NUMBER_TYPES.CHINESE ? 1000 : 99
    },
    toggleInfoModal () {
      this.isSheetModalOpen = !this.isSheetModalOpen
    }
  }
}
</script>
<style scoped>
.main-page {
  margin: 2em;
}
</style>
