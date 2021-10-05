export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Zlatibor - Turisticka Agencija Strom',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Turisticka Agencija Strom - Zlatibor, bavi se organizovanje izleta, izdavanjem apartmana i prodajom nekretnina',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Agencija Strom - Zlatibor',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Agencija Strom - Zlatibor. Organizovanje izleta. Izdavanje apartmana. Prodaja nekretnina',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'www.zlatiborstrom.com',
      },
      {
        hid: 'og:owner',
        property: 'og:owner',
        content: 'Slaven Tucic',
      },
      {
        hid: 'og:owner_rs',
        property: 'og:owner_rs',
        content: 'Slaven Tučić',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://www.zlatiborstrom.com/landscapes/landscape1.jpg',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~layouts/global.css'],
  styleResources: {
    scss: [],
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/imports.client.js', '~/plugins/dragElements.client.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-fontawesome',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas'],
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab'],
      },
    ],
  },
}
