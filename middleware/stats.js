import axios from 'axios'

export default function (context) {
  console.log("------------ middleware stats -----------")

  for (let m in context) {
    console.log(m)
  }
  // console.log(context.req.headers)
  // console.log(context.res)
  // console.log(context.query)
  // console.log(context.params)
  console.log(context.base)
  // return axios.post('https://httpbin.org/post', {
  //   url: route.fullPath
  // })
}