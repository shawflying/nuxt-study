# nuxt-study

> Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

## config

### 模板
定制化默认的 html 模板，只需要在应用根目录下创建一个 app.html 的文件。
使用npm run generate 生成静态文件时，需要


## nginx 静态资源部署
curl http://127.0.0.1/nuxt-study/
nginx 

```
location /nuxt-study{
    alias /Users/yanxiaoxiao/data/code/nuxt-demo/dist/nuxt-study;
}
```

nuxt.config.js

```
{
    head:{
        link:{
             { rel: 'icon', type: 'image/x-icon', href: '/nuxt-study/favicon.ico' },
        }
    },
    build:{
        publicPath: "/nuxt-study/static/",//结尾必须是/，设置js,css 脚本存放位置
    }
}
```

pages
创建nuxt-study 文件夹，在该文件夹下进行工作

## nginx 静态资源部署配置2—这种方式更简单

```
build: {
    publicPath: "/static/",//需要将nuxt-study/斜杠必写 指向的是物理路径
  },
  //Nuxt.js 让你可以配置在客户端和服务端共享的环境变量。 
  env: {
    url: "http://127.0.0.1",
    base_dir: '/nuxt-study'
  },
  router: {
    middleware: 'stats',
    base: '/nuxt-study/',//router 属性让你可以个性化配置 Nuxt.js 应用的路由（vue-router）。
  },
```

index.vue

```
 <div class="page__bd page__bd_spacing">
        <nuxt-link class="weui-btn weui-btn_primary" to="/login">登录</nuxt-link>
        <nuxt-link class="weui-btn weui-btn_primary" to="/admin">管理页面</nuxt-link>
        <nuxt-link class="weui-btn weui-btn_primary" to="/about">关于</nuxt-link>
        <nuxt-link class="weui-btn weui-btn_primary" to="/city/index?type=home">寻找城市</nuxt-link>
      </div>
```

打包后结果：

```html
<div class="page__bd page__bd_spacing">
<a class="weui-btn weui-btn_primary" href="/nuxt-study/login">登录</a>
<a class="weui-btn weui-btn_primary" href="/nuxt-study/admin">管理页面</a>
<a class="weui-btn weui-btn_primary" href="/nuxt-study/about">关于</a>
<a class="weui-btn weui-btn_primary" href="/nuxt-study/city/index?type=home">寻找城市</a>
</div>
 <script src="/nuxt-study/static/manifest.79789d1478c3c065a49e.js" defer></script>
```
