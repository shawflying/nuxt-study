//授权校验

export default function (context) {
  console.log("---------------------")
  context.userAgent = context.isServer ? context.req.headers['user-agent'] : navigator.userAgent
}