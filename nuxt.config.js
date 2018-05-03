module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-study',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=0' },
      { hid: 'description', name: 'description', content: 'dxl-nuxt demo' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.bootcss.com/weui/1.1.2/style/weui.min.css' },
    ],
    script: [
      { src: 'https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js', ssr: false },
      { src: 'https://res.wx.qq.com/open/libs/weuijs/1.0.0/weui.min.js', ssr: false },
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
    vendor: ['axios', 'moment'],//避免重复打包多长
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
