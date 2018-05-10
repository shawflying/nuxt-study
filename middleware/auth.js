//授权校验

export default function (context) {
  console.log("---------------------")
  context.userAgent = process.server ? context.req.headers['user-agent'] : navigator.userAgent
}