<template>
  <v-app>
    <v-main>
      <box>
        <custom-header />
        <Nuxt />
      </box>
    </v-main>
    <custom-footer />
  </v-app>
</template>

<script>
export default {
  name: 'Default'
}
</script>

<style>
:root {
  --primary-color: #c13659 ;
  --primary-color-light: #a546b8;
  --primary-color-dark: #603579;
  --disabled-color: #adadad ;
  --danger-color: #fa3434be ;
  --success-color: #338828be ;
  --text-color-dark: #333;
  --text-color-white: #fff;
  --font-size-text: 15px;
  --font-size-label: 17px;
  --font-size-small: 12px;
  --font-size-title: 32px;
  --font-family-text: 'Nanum Gothic', Helvetica, sans-serif;
  --font-family-title: 'Nanum Gothic', Helvetica, sans-serif;
  --font-weight-normal: 500;
  --font-weight-bold: 700;
}
html {
  font-family: var(--font-family-text);
  color: var(--text-color-dark);
  font-size: var(--font-size-text);
  font-weight: var(--font-weight-normal);
  overflow-x: none;
}

a {
  color: var(--primary-color-dark) !important;
}

a:visited {
  color: var(--primary-color-dark) !important;
}
</style>
