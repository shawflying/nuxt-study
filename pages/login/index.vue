<template>
  <div class="container">
    <div>
      <h1>
        登录页面
      </h1>
      <div class="txtInput">
        <input type="text" placeholder="请求输入用户名！">
        <input type="text" placeholder="请求输入密码！">
         <button @click="show()">登录</button>
      </div>

      <div class="links">
        <nuxt-link class="button--green" to="/">首页</nuxt-link>
        <nuxt-link class="button--grey" to="/admin">管理中心</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";
export default {
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

.txtInput{
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
</style>
