export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxt-waveui',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // '@wave-ui/nuxt' // Simple config.
    [
      '@wave-ui/nuxt', {
        colors: {
          primary: '#9ac332',
          secondary: '#5d9a26',
        },
        useScss: '~/scss/_variables.scss'
      }
    ]
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Also possible to define the Wave UI config here outside of the buildModules.
  // WaveUI: {
  //   colors: {
  //     primary: '#9ac332',
  //     secondary: '#5d9a26',
  //   },
  //   // useScss: '~/scss/_variables.scss'
  // },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ['wave-ui'] // Needed when using the `useScss` option.
  },

  router: {
    base: '/nuxt-waveui/dist'
  }
}
