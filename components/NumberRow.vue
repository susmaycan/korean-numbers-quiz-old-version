<template>
  <div class="number-row-container">
    <div class="number-row-content">
      <span v-if="quizzType === quizzTypes.WRITTEN" class="number-row-label">
        {{ number.number }}
      </span>
      <fa :class="quizzType === quizzTypes.WRITTEN ? 'icon icon-written' : 'icon'" icon="volume-high" @click="speak" />
      <custom-input
        :value="inputData"
        :type="isWrittenQuizzType ? 'text' : 'number'"
        :placeholder="placeholder"
        :error="userResult.error"
        :success="userResult.success"
        @change="onChangeNumber"
        @focus="onFocus"
      />
    </div>
    <p v-if="showResults && !userResult.success" class="result-message">
      <fa icon="pen-clip" /> {{ messageInfo }}
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
      numberSpeech: new window.SpeechSynthesisUtterance(),
      quizzTypes: QUIZZ_TYPE
    }
  },
  computed: {
    ...mapState('numbers', ['userResults', 'showResults', 'quizzType']),
    userResult () {
      return this.userResults.find(item => item.number === this.number.number)
    },
    placeholder () {
      return this.isWrittenQuizzType ? '하나/일...' : '1543...'
    },
    messageInfo () {
      return this.isWrittenQuizzType ? this.number.result : this.number.number.toString()
    }
  },
  updated () {
    this.inputData = this.userResult?.userInput
  },
  methods: {
    ...mapMutations('numbers', ['updateResult']),
    onChangeNumber (value) {
      this.inputData = this.isWrittenQuizzType ? value : parseInt(value)
      this.updateResult({ ...this.userResult, userInput: this.inputData })
    },
    speak () {
      this.synth.cancel()
      this.numberSpeech.text = `${this.number.result}`
      const koreanVoice = this.synth.getVoices().find(voice => voice.lang === 'ko-KR')
      this.numberSpeech.voice = koreanVoice
      this.numberSpeech.rate = this.voiceSpeed
      this.synth.speak(this.numberSpeech)
    },
    onFocus () {
      if (this.isListeningQuizzType) {
        this.speak()
      }
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
  justify-content: flex-end;
  align-items: center;
}
.number-row-label {
  font-weight: var(--font-weight-bold);
  margin-right: .2em;
  font-size: var(--font-size-label);
}

.icon {
  cursor: pointer;
  margin-right: 1em;
}

.icon-written {
  color: var(--disabled-color);
}

.result-message {
  padding: 0;
  margin: 0;
  color: var(--disabled-color);
  font-size: var(--font-size-small);
}

@media (max-width: 756px) {
  .number-row-content {
    justify-content: center;
  }
  .number-row-container {
    text-align: center;
  }
}
</style>
