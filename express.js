const { Nuxt, Builder }  = require('nuxt')
const app = require('express')()
const isProd = (process.env.NODE_ENV === 'production')
const port = process.env.PORT || 3000
const host = process.env.HOST || '127.0.0.1'

// 用指定的配置对象实例化 Nuxt.js
let config = require('./nuxt.config.js')
config.dev = !isProd

const nuxt = new Nuxt(config)

// Start build process in dev mode
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

// Give nuxt middleware to express
app.use(nuxt.render)

// Start express server
app.listen(port, host)
console.log('Server listening on localhost:' + port)