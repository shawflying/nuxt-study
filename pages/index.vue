<template>
   <div class="content">
      <app-logo/>
      <h1>
        nuxt
      </h1>
      <h2>
       项目首页
      </h2>
       <div class="page__bd page__bd_spacing">
        <nuxt-link class="weui-btn weui-btn_primary" to="/HunShaSheYing/">婚纱摄影</nuxt-link>
        <nuxt-link class="weui-btn weui-btn_primary" to="/login">登录</nuxt-link>
        <nuxt-link class="weui-btn weui-btn_primary" to="/admin">管理页面</nuxt-link>
        <nuxt-link class="weui-btn weui-btn_primary" to="/about">关于</nuxt-link>
        <nuxt-link class="weui-btn weui-btn_primary" to="/city/index?type=home">寻找城市</nuxt-link>
        <button class="weui-btn weui-btn_primary" @click="turnUrl()">点击跳转</button>
        <a href="http://127.0.0.1:3000/nuxt-study/login" class="weui-btn weui-btn_primary">login ...</a>
      </div>
    </div>
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";
import { mapMutations } from "vuex";
import store from "~/store";
import config from "~/config";
console.log("---->", config.name);

export default {
  name: "home",
  head() {
    //设置head 头部信息
    return {
      title: config.name + "_nuxt-首页"
    };
  },
  layout: "blog", //切换布局，默认是/layouts/default.vue
  components: {
    AppLogo
  },
  methods: {
    turnUrl() {
      console.log("111111111111");
      console.log(this.$router);
      this.$router.push({ path: "/about" }); //跳转
    }
  }
};
</script>

<style>
.content {
  text-align: center;
}
.page__bd {
  margin-top: 15%;
}
</style>
