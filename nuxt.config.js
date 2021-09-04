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
    '@nuxtjs/feed'
  ],

  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://ats.ipon.biz'
  },

  webfontloader: {
    google: {
      families: ['Kaisei+Decol:wght@700'],
      display: 'swap',
      text: 'アマゾンタイムセール情報ツウ！'
    }
  },

  gtm: {
    id: 'GTM-58MW2NL',
    pageTracking: true,
    enabled: true
  },

  feed: [
    // A default feed configuration object
    {
      path: '/feed.xml', // The route to your feed.
      async create(feed) {
        feed.options = {
          title: 'アマゾンタイムセール情報ツウ！',
          link: 'https://ats.ipon.biz/feed.xml',
          description: 'アマゾンタイムセール情報を掲載中！PC・PC周辺機器・デジカメ・家電など'
        }

        await axios.get('https://tokka2.github.io/tokka_amazon_timesale/updated.json').then((updated) => {
          updated.data.forEach(datetime => {
            feed.addItem({
              title: `${datetime} | アマゾンタイムセール情報ツウ！`,
              id: `https://ats.ipon.biz/posts/${datetime}`,
              link: `https://ats.ipon.biz/posts/${datetime}`,
              description: `${datetime} | アマゾンタイムセール情報を掲載中！PC・PC周辺機器・デジカメ・家電など`,
              content: `${datetime} | アマゾンタイムセール情報を掲載中！PC・PC周辺機器・デジカメ・家電など`
            })
          })
        })
      }, // The create function (see below)
      cacheTime: 1000 * 60 * 15, // How long should the feed be cached
      type: 'rss2' // Can be: rss2, atom1, json1
    }
  ],

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
