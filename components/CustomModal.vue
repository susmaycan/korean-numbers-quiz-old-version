<template>
  <modal
    :name="modalName"
    :adaptive="true"
    height="auto"
    :max-width="width"
    :scrollable="true"
  >
    <div slot="top-right">
      <button @click="onClose">
        <fa icon="xmark" />
      </button>
    </div>
    <div class="custom-modal-container">
      <div class="custom-modal-title">
        <h2>{{ title }}</h2>
      </div>
      <div class="custom-modal-content">
        <slot />
      </div>
      <div v-if="displayButtonActions" class="custom-modal-button-list">
        <custom-button @click="onClose">
          {{ $t('cancel') | capitalize }}
        </custom-button>
        <custom-button @click="onAccept">
          {{ $t('accept') | capitalize }}
        </custom-button>
      </div>
      <div v-else class="custom-modal-button-list">
        <custom-button @click="onClose">
          {{ $t('close') | capitalize }}
        </custom-button>
      </div>
    </div>
  </modal>
</template>

<script>
export default {
  name: 'CustomModal',
  props: {
    modalName: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    width: {
      type: Number,
      default: 500
    },
    height: {
      type: Number,
      default: 500
    },
    displayButtonActions: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onAccept () {
      this.$emit('on-accept')
      this.onClose()
    },
    onClose () {
      this.$modal.hide(this.modalName)
    }
  }
}
</script>

<style scoped>
.custom-modal-container {
  padding: 2em;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.custom-modal-button-list {
  margin-top: .5em;
  display: flex;
  justify-content: center;
  align-content: center;
}
.custom-modal-content {
  font-weight: 300;
}
.custom-modal-title {
  padding: 1em;
}

@media (max-width: 756px) {
.custom-modal-container {
  padding: 1em;
}
}
</style>
