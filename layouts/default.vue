<template>
  <container>
    <Header />
    <Nuxt />
  </container>
</template>

<script>
export default {
  name: 'Default'
}
</script>

<style>
:root {
  --primary-color: #20A599 ;
  --primary-color-light: #2ad6c8;
  --primary-color-dark: #136962;
  --disabled-color: #adadad ;
  --danger-color: #fa3434be ;
  --success-color: #338828be ;
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
