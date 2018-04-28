<template>
  <div class="project_about">
    <ul>
        <li v-for="m in list" v-bind:key="m.k">
            {{m.k}}:{{m.v}}
        </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    //查看项目列表
    //https://api.github.com/users/shawflying/repos
    axios.get(`https://httpbin.org/get`).then(d => {
      console.log(d.data);
      let list = [];
      for (let m in d.data.headers) {
        list.push({ k: m, v: d.data.headers[m] });
      }
      console.log(list);
      this.list = list;
    });
  }
};
</script>
<style>
.project_about {
  color: black;
  list-style: none;
}
.project_about li {
  list-style: none;
  margin-top: 5px;
}
</style>
