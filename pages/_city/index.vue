<template>
  <section class="container">
    <div>
      <h1 class="title">
        城市页面首页:<br/>{{title}}<br/>
        {{data.url}}<br/>
        {{a}}
      </h1>
      <div class="city-list">
        <nuxt-link class="mycity" to="/bj/about?name=abc">关于北京</nuxt-link><br/>
        <nuxt-link class="mycity" to="/sh/about?name=abc">关于上海</nuxt-link><br/>
        <nuxt-link class="mycity" to="/sh/jiudian?price=998">上海酒店</nuxt-link><br/>
        <nuxt-link class="mycity" to="/sh/hunche?price=1002">上海婚车模块</nuxt-link><br/>
      </div>
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
let req_data = {};
export default {
  //使得我们可以在设置组件的数据之前能异步获取或处理数据
  async asyncData({ params, query }) {
    console.log("params:", params);
    console.log("query:", query);
    let { data } = await axios.get(`https://httpbin.org/get`);
    req_data = data;
    return { a: "ssss" }; //asyncData 方法返回的数据在融合 data 方法返回的数据后，一并返回给模板进行展示，如：
  },
  data: () => {
    return { title: "美好的事情，总是让人期待！", data: req_data };
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
  display: block;
  font-weight: 30;
  font-size: 20px;
  color: #35495e;
  letter-spacing: 1px;
}
.city-list {
  width: 100%;
  /* background-color: burlywood; */
  margin-top: 20px;
  margin-bottom: 20px;
  color: red;
}
.mycity {
  display: block;
  width: 100%;
  margin-top: 10px;
}
</style>
