<template>
  <section class="container">
    <div>
      <h1 class="title">
        关于页面
      </h1>
       <hello class="hello_top"/>
       <project-list class="hello_top"/>
       <img src="~static/header.jpg">
    </div>
  </section>
</template>

<script>
import Hello from '~/components/Hello.vue'
import ProjectList from '~/components/ProjectList.vue'

export default {
  components: {
    Hello,
    ProjectList
  }
}
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
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 30;
  font-size: 20px;
  color: #35495e;
  letter-spacing: 1px;
}
.hello_top{
  padding-top: 30px;
  color: red;
}
</style>
