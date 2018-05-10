const resolve = require('path').resolve
var routes_list = [
  {
    name: 'aa',
    path: '/aa',
    component: resolve(__dirname, 'pages/about.vue')
  },
  {
    name: 'show',
    path: '/show/:id/:name-Info',//http://127.0.0.1:3000/nuxt-study/show/123/java-Info
    component: resolve(__dirname, 'pages/about.vue')
  },
  {
    name: 'bb',
    path: '/bb',
    component: resolve(__dirname, 'pages/about.vue')
  },
  {
    name: 'home-taoxi-choice',
    path: '/home/TaoXi/:choice',//http://127.0.0.1:3000/nuxt-study/home/TaoXi/5000to7999
    component: resolve(__dirname, 'pages/HunShaSheYing/TaoXi/_choice.vue')
  },
  {
    name: 'home-taoxi',
    path: '/home/TaoXi',//http://127.0.0.1:3000/nuxt-study/home/TaoXi
    component: resolve(__dirname, 'pages/HunShaSheYing/TaoXi/index.vue')
  },
  {
    name: 'HunShaSheYing',
    path: '/HunShaSheYing',//http://127.0.0.1:3000/nuxt-study/HunShaSheYing  HunShaSheYing 目录下有 _detail
    component: resolve(__dirname, 'pages/HunShaSheYing/TaoXi/index.vue'),
    level: 'high'
  },
  {
    name: 'HunShaSheYing-home',
    path: '/HunShaSheYing/home',//http://127.0.0.1:3000/nuxt-study/HunShaSheYing/home  HunShaSheYing 目录下有 _detail
    component: resolve(__dirname, 'pages/HunShaSheYing/TaoXi/index.vue')
  },
  {
    name: 'login1',
    path: '/login/admin',//http://127.0.0.1:3000/nuxt-study/login/admin login 目录下没有 _相关的文件
    component: resolve(__dirname, 'pages/HunShaSheYing/index.vue')
  },
  {
    name: 'login',
    path: '/login',//http://127.0.0.1:3000/nuxt-study/login/admin login 目录下没有 _相关的文件
    component: resolve(__dirname, 'pages/HunShaSheYing/index.vue'),
    // level:'high'
  }
]

module.exports = { routes_list }