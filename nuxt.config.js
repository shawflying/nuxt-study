module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-study',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'dxl-nuxt demo' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.bootcss.com/weui/1.1.2/style/weui.min.css' }
    ],
    script: [
      { src: 'https://cdn.bootcss.com/moment.js/2.22.1/moment.min.js' }
    ],
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: 'red' },
  //router 属性让你可以个性化配置 Nuxt.js 应用的路由（vue-router）。
  // router:{
  //   base: '/nuxt/'
  // },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios'],//避免重复打包多长
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  router: {
    middleware: 'stats'
  },
  plugins: ['~/plugins/vue-notifications']
}
