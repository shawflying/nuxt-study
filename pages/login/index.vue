<template>
  <div class="container">
    <div>
      <h1>
        登录页面
      </h1>
      <div class="txtInput">
        <input type="text" class="name" v-model="name" placeholder="请求输入用户名！">
        <input type="text" class="pwd" v-model="pwd" placeholder="请求输入密码！">
         <button @click="login()" class="weui-btn weui-btn_default">登录</button>
         <div class="result">
           用户名：{{name}}
           密码：{{pwd}}<br/>
           中间件执行流程顺序：<br/>
            1. nuxt.config.js<br/>
            2. 匹配布局<br/>
            3. 匹配页面<br/>
          时间：{{time}}
         </div>
      </div>
      <weui-alert></weui-alert>
    </div>
  </div>
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";
import WeuiAlert from "~/components/WeuiAlert.vue";//公用弹出框
import axios from "axios";
import moment from "moment";
export default {
  head() {
    //设置头部信息
    return {
      title: "登录页面",
      meta: [
        {
          hid: "keywords", //唯一编号，head_id，有重复则覆盖
          name: "keywords",
          content:
            "结婚,结婚网,婚博会,婚庆网,上海结婚,上海结婚网,上海婚博会,上海婚庆网"
        },
        {
          hid: "description",
          name: "description",
          content:
            "到喜啦(Daoxila.com)是国内领先的结婚预订平台,15年结婚预订经验,免费为新人提供上海婚宴酒店预订、婚庆等服务,是新人必上的结婚网! 免费咨询热线:400-820-1709"
        },
        {
          hid: "mobile-agent",
          name: "mobile-agent",
          content: "format=xhtml; url=//m.daoxila.com/sh/"
        }
      ]
    };
  },
  middleware: "login", //页面中定义中间件
  // middleware(obj) {
  //   console.log("------", obj);
  // }, //页面中定义中间件
  components: {
    AppLogo,WeuiAlert
  },
  data() {
    //等同于 data:()=>{}
    return {
      name: "",
      pwd: "",
      desc: `中间件执行流程顺序：
1. nuxt.config.js
2. 匹配布局
3. 匹配页面`,
      time: moment().format("YYYY-MM-DD HH:mm:ss")
    };
  },
  methods: {
    login: () => {
      $("#loadingToast").fadeIn(10);//数据加载中
      //TODO 如何使用vue.js 获取页面参数
      let name = $(".name").val();
      let pwd = $(".pwd").val();
      axios
        .post(`https://httpbin.org/post`, {
          name,
          pwd,
          v: 12
        })
        .then(d => {
          $("#loadingToast").fadeOut(100);
          localStorage.setItem("name", name);
          $("#toast").fadeIn(10);
          setTimeout(() => {
            $("#toast").fadeOut(200);
          }, 2000);
          //TODO 如何进行页面跳转
          location.href = "/admin"; //前后端代码虽然是一致的，但是有些内容是后端渲染的作用域，有些事前端渲染的作用域，不在同一个空间。
          //在js中控制跳转页面，就使用原生的href就好了，vue-router也是基于此拓展的。
        });
    }
  }
};
</script>

<style>
.container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  margin-top: 60%;
}

.txtInput {
  margin-top: 10%;
}

.txtInput input {
  width: 80%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid;
  margin-top: 20px;
}

.txtInput button {
  width: 60%;
  height: 40px;
  border-radius: 10px;
  border: 1px solid;
  margin-top: 40px;
  background-color: cadetblue;
  color: white;
}

.result{
  text-align: left;
  margin-top: 20px;
}
</style>
