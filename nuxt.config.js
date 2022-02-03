export default {
  mode: 'universal',
  target: 'static',

  router: {
    base: '/portfolio/'
  },

  loadingIndicator: {
    name: 'cube-grid',
    color: '#d35400',
    background: '#000'
  },

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Theofilos Katsakoulis - Frontend Developer',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'I am Theofilos Katsakoulis, a Front-End Developer located in Berlin. I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences.' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/portfolio/logo.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/styles/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-particles.js', 
    '~/plugins/vue-typer.js', 
    '~/plugins/vue-scrollactive.js', 
    '~/plugins/vue-sog_tag_cloud.js',  
    '~/plugins/vue-scrollreveal.js', 
    '~/plugins/vue-axios.js',
    '~/plugins/vue-quickmenu.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    'nuxt-material-design-icons-iconfont',
    'nuxt-lazy-load'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  render: {
    // Setting up cache for 'static' directory - a year in milliseconds
    // https://web.dev/uses-long-cache-ttl
    static: {
      maxAge: 60 * 60 * 24 * 365 * 1000,
    },
  }
}