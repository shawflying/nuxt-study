<template>
  <section class="container">
    <div>
      <h1 class="title">
        城市页面
      </h1>
      <div>
        {{JSON.stringify(list)}}
      </div>
      <button @click="show()">登录</button>
      <div class="links">
        <nuxt-link class="button--green" to="/">首页</nuxt-link>
        <nuxt-link class="button--grey" to="/about">关于</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";
import axios from "axios";
export default {
  //加载时，同步获资源渲染页面
  asyncData({ params }) {
    return axios.get(`https://httpbin.org/get`).then(res => {
      return { list: res.data };
    });
  },
  data: () => {
    return { title: "美好的事情，总是让人期待！" };
  },
  components: {
    AppLogo
  },
  methods: {
    show: () => {
      // console.log(this.list);
      // alert(1);
    }
  }
};
</script>

<style>
.container {
  min-height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 30;
  font-size: 20px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
