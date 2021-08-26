import axios from 'axios'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'アマゾンタイムセール情報ツウ！',
    titleTemplate: '%s | アマゾンタイムセール情報ツウ！',
    htmlAttrs: {
      lang: 'ja'
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
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    'nuxt-webfontloader',
    '@nuxtjs/gtm',
  ],

  sitemap: {
    hostname: 'https://amazon-time-sale.ipon.biz'
  },

  webfontloader: {
    google: {
      families: ['Kaisei+Decol:wght@700'],
      display: 'swap',
      text: 'アマゾンタイムセール情報ツウ！'
    }
  },

  gtm: {
    id: 'GTM-58MW2NL'
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  generate: {
    routes () {
      const targetUrl = 'https://tokka2.github.io/tokka_amazon_timesale'
      return Promise.all([
        axios.get(`${targetUrl}/updated.json`)
      ]).then(([updated]) => {
        return updated.data.map((datetime) => {
          return { route: `posts/${datetime}`, payload: datetime }
        })
      })
    }
  }
}
