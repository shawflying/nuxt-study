export default function ({route, redirect, req }) {
  let system = {
    windows: false,
    macOS: false,
    linux: false
  };
  let userAgent, isPC;
  if (process.server) {
    userAgent = req.headers['user-agent'].toLowerCase();
  } else {
    userAgent = window.navigator.userAgent.toLowerCase();
  }
  system.windows = (/win/g).test(userAgent);
  system.macOS = (/macintosh/g).test(userAgent);
  system.linux = (/x11/g).test(userAgent) || ((/linux/g).test(userAgent) && !(/android/g).test(userAgent));
  isPC = system.windows || system.macOS || system.linux;

  // for (let m in arguments) {
  //   console.log("11111", m)
  // }

  if (route.fullPath == '/HunShaSheYing/') {
    console.log(route.fullPath)
    // redirect(route.fullPath + "/PinPai");//这种方式是跳转，而不是渲染
  }

}