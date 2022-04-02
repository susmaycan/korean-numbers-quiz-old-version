<template>
  <modal
    :name="modalName"
    :adaptive="true"
    :height="height"
    :width="width"
  >
    <div slot="top-right">
      <button @click="onClose">
        <fa icon="xmark" />
      </button>
    </div>
    <div class="modal-container">
      <div class="modal-title">
        <h2>{{ title }}</h2>
      </div>
      <div class="modal-content">
        <slot />
      </div>
      <div v-if="displayButtonActions" class="modal-button-list">
        <custom-button @click="onClose">
          {{ $t('cancel') | capitalize }}
        </custom-button>
        <custom-button @click="onAccept">
          {{ $t('accept') | capitalize }}
        </custom-button>
      </div>
      <div v-else class="modal-button-list">
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
.modal-container {
  padding: 2em;
  text-align: center;
}
.modal-button-list {
  margin-top: .5em;
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>
