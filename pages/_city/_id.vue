<template>
  <section class="container">
    <div>
      <h1 class="title">
        城市编号：{{city_id}}
      </h1>
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
export default {
  //校验页面入参，链接中的参数使用params.id
  //?后的参数如何取出
  validate({ params, query }) {
    // Must be a number
    console.log("params:", params);
    console.log("query:", query);
    this.data().city_id = params.id;
    return /^\d+$/.test(params.id);
  },
  data() {
    return {
      city_id: ""
    };
  },
  components: {
    AppLogo
  },
  methods: {
    show: () => {
      alert("alert");
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
