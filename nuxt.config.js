const axios = require('axios')
const routes = require('./routes')//展示未找到合适使用方式
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s | 到喜啦官方网站',//我们使用 titleTemplate 字段 title 变量指定文章题目，在渲染之前用title变量值替换掉%s这个占位，填充到titleTemplate 。
    // title: 'nuxt-study',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=0' },
      { hid: 'description', name: 'description', content: 'dxl-nuxt demo' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/nuxt-study/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.bootcss.com/weui/1.1.2/style/weui.min.css' },
    ],
    script: [
      { src: 'https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js', ssr: false },
      { src: 'https://res.wx.qq.com/open/libs/weuijs/1.0.0/weui.min.js', ssr: false },
    ],
  },
  /*
  ** Build configuration
  */
  build: {
    // publicPath: "http://127.0.0.1/nuxt-study/",//需要将nuxt-study/斜杠必写
    publicPath: "/static/",//需要将nuxt-study/斜杠必写 指向的是物理路径
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
  /*
** Customize the progress bar color
*/
  loading: { color: 'red' },
  //Nuxt.js 让你可以配置在客户端和服务端共享的环境变量。 
  env: {
    url: "http://127.0.0.1",
    base_dir: '/nuxt-study'
  },
  router: {
    middleware: 'routes',
    base: '/nuxt-study/',//router 属性让你可以个性化配置 Nuxt.js 应用的路由（vue-router）。
    routes: routes
  },
  plugins: ['~/plugins/vue-notifications'],//, '~/plugins/filters.js'
  //静态生成文件生成器配置
  //获取配置信息中数据，生成静态页面
  generate: {
    routes: function () {
      return axios.get('http://127.0.0.1:8089/list')
        .then((res) => {
          return res.data.data.map((m) => {
            return '/city/' + m
          })
        })
    }
  }
}
