<template>
  <section class="container">
    <div>
      <h1 class="title">
        城市页面
      </h1>
        城市简称:{{params.city}}<br/>
        当前模块:{{params.id}}<br/>
        价格信息：{{query.price}}元

    </div>
  </section>
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";
var req_params = {};
var req_query = {};
export default {
  //校验页面入参，链接中的参数使用params.id
  //?后的参数如何取出
  validate({ params, query }) {
    // Must be a number
    console.log("params:", params);
    console.log("query:", query);
    req_params = params;
    req_query = query;
    // return /^\d+$/.test(params.id);
    return true;
  },
  data: () => {
    return { query: req_query, params: req_params };
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
