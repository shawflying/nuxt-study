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
      </div>
    </div>
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";
import { mapMutations } from "vuex";
import store from "~/store";

export default {
  name: "home",
  head() {
    //设置head 头部信息
    return {
      title: "nuxt-首页"
    };
  },
  layout: "blog", //切换布局，默认是/layouts/default.vue
  components: {
    AppLogo
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
