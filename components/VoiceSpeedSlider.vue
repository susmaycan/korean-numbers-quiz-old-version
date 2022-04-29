<template>
  <div class="ma-1 voice-speed-slider">
    <div class="voice-speed-content">
      <label class="filter-label" for="voice_speed">{{ $t('listening_speed') | capitalize }}:</label>
      <slider
        id="voice_speed"
        :value="voiceSpeed"
        :max="2"
        :min="0.5"
        :step="0.1"
        @change="onVoiceSpeedChanges"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'VoiceSpeedSlider',
  methods: {
    onVoiceSpeedChanges (newValue) {
      this.setVoiceSpeed(newValue)
    }
  }
}
</script>

<style scoped>
.voice-speed-slider {
  min-width: 300px;
  display: flex;
  justify-content: center;
}
.voice-speed-content {
  width: 100%;
}

@media (min-width: 600px) {
  .voice-speed-slider {
    min-width: 500px;
  }
}
</style>
