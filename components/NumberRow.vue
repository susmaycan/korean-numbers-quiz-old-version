<template>
  <div class="number-row-container">
    <div class="number-row-content">
      <span v-if="quizzType === quizzTypes.WRITTEN" class="number-row-label">
        {{ number.number }}
      </span>
      <fa class="icon" icon="volume-high" @click="speak" />
      <custom-input
        :value="inputData"
        :placeholder="$t('enter_number')"
        :error="userResult.error"
        :success="userResult.success"
        :message-info="showResults ? number.result : null"
        @change="onChangeNumber"
      />
    </div>
    <p v-if="showResults && !userResult.success" class="result-message">
      <fa icon="pen-clip" /> {{ number.result }}
    </p>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { QUIZZ_TYPE } from '@/utils/constants'

export default {
  props: {
    number: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      inputData: '',
      synth: window.speechSynthesis,
      greetingSpeech: new window.SpeechSynthesisUtterance(),
      quizzTypes: QUIZZ_TYPE
    }
  },
  computed: {
    ...mapState('numbers', ['userResults', 'showResults', 'quizzType']),
    userResult () {
      return this.userResults.find(item => item.number === this.number.number)
    }
  },
  updated () {
    this.inputData = this.userResult?.userInput
  },
  methods: {
    ...mapMutations('numbers', ['updateResult']),
    onChangeNumber (value) {
      this.inputData = value
      this.updateResult({ ...this.userResult, userInput: this.inputData })
    },
    speak () {
      this.greetingSpeech.text = `${this.number.result}`
      const koreanVoice = this.synth.getVoices().find(voice => voice.voiceURI === 'Yuna')
      this.greetingSpeech.voice = koreanVoice
      this.synth.speak(this.greetingSpeech)
    }
  }
}
</script>

<style scoped>
.number-row-container {
  margin: 1em;
  text-align: right;
}
.number-row-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.number-row-label {
  font-weight: bold;
  margin-right: .2em;
}

.icon {
  color: var(--disabled-color);
  cursor: pointer;
  margin-right: 1em;
}

.result-message {
  padding: 0;
  margin: 0;
  color: var(--disabled-color);
  align-self: flex-end;
}
</style>
