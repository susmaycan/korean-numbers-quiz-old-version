<template>
  <v-btn
    :loading="loadingResults"
    class="custom-button"
    elevation="5"
    @click="onClick"
  >
    <slot />
  </v-btn>
</template>

<script>
export default {
  name: 'CustomButton',
  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
  .custom-button {
  background-image: linear-gradient(to right, var(--primary-color-light) 0%, var(--primary-color)  51%, var(--primary-color-dark)  100%)
  }
  .custom-button {
    border: none;
    padding: 1em 1em;
    margin: .5em .5em;
    text-align: center;
    transition: 0.5s;
    background-size: 200% auto;
    color: var(--text-color-white);
    box-shadow: 0 0 20px #eee;
    border-radius: 10px;
    display: block;
    cursor: pointer;
    /* font-size: var(--font-size-text); */
    font-family: var(--font-family-text);
  }

  .custom-button:hover {
    background-position: right center;
    color: var(--text-color-white);
    text-decoration: none;
  }

  .custom-button:disabled {
    cursor: not-allowed;
    background: var(--disabled-color);
  }

</style>
