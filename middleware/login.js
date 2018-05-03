import axios from 'axios'

// export default function ({ route, redirect }) {
//   console.log("经过登录页面")
//   redirect("/admin")//可以进行跳转
//   // return axios.post('https://httpbin.org/post', {
//   //   url: route.fullPath
//   // })
// }

export default function (obj) {
  console.log("经过登录页面")
  console.log()
  for (let m in obj) {
    console.log(m)
  }
  obj.store.commit('increment')
  console.log("count======", obj.store.state.count)
}