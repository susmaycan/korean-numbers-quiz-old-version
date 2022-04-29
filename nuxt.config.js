export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Korean Numbers Quiz',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/filters.plugin.js',
    '~plugins/modal.plugin.js',
    '~plugins/mixin.plugin.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-fonts',
    '@nuxtjs/fontawesome',
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  i18n: {
    locales: [
      { code: 'es', name: 'Español', file: 'es.js' },
      { code: 'en', name: 'English', file: 'en.js' }
    ],
    defaultLocale: 'en',
    langDir: '~/locales/',
    skipSettingLocaleOnNavigate: true,
    strategy: 'no_prefix'
  },

  googleFonts: {
    families: {
      'Nanum+Pen+Script': [400, 700],
      'Nanum+Gothic': [400, 700],
      Raleway: [100, 400, 700]
    }
  },

  fontawesome: {
    component: 'fa',
    icons: {
      solid: [
        'faCircleCheck',
        'faCircleXmark',
        'faTimes',
        'faBook',
        'faBolt',
        'faEye',
        'faEyeSlash',
        'faCheck',
        'faBroom',
        'faPenClip',
        'faXmark',
        'faVolumeHigh',
        'faCopyright',
        'faArrowUpRightFromSquare',
        'faLanguage'
      ]
    }
  }

}
