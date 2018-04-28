<template>
  <section class="container">
    <div>
      <h1 class="title">
        admin---
      </h1>
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
  validate({ params, query }) {
    console.log("params:", params);
    console.log("query:", query);
    this.city_id = params.id;
    return /^\d+$/.test(params.id);
  },
};
</script>

<style>
.container {
  min-height: 25vh;
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

.subtitle {
  font-weight: 30;
  font-size: 15px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
