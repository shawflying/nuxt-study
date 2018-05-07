import Vue from 'vue'
import moment from 'moment'

// 过滤器的使用配置 plugins/filter.js
//使用{{string | trim}}
//在nuxt.config.js 配置 plugins: [ '~/plugins/filters.js' ]
export function trim(str) {
  return str.replace(/(^\s*)(\s*$)/g, '')
}
export function format_unit(str) {
  console.log(str)
  if (typeof str == 'number') str = str + ''
  if (str.length == 10) {
    return moment(str * 1000).format("YYYY-MM-DD HH:mm:ss")
  } else if (str.length == 13) {
    return moment(str).format("YYYY-MM-DD HH:mm:ss")
  } else {
    return new Error("time is lose!")
  }
}
const filters = {
  trim,
  format_unit
}
export default filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})