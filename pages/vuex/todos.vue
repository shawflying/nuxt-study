<template>
<div class="todo_body">
  <ul>
    <li class="todo_sum">
        <span>今日任务：{{todos.length}} </span>
        <span>已完成任务：{{alreadys.length}} </span>
    </li>
    <li v-for="m in todos" v-bind:key="m.text" class="todo_list">
      <input type="checkbox" :checked="m.done" @change="toggle(m)">
      <span :class="{ done: m.done }">&nbsp;&nbsp; {{ m.text }}</span>
    </li>
    <li class="todo_mind"><input class="todo_input_mind" placeholder="输入您今日计划！" @keyup.enter="addTodo"></li>
  </ul>
</div>

</template>

<script>
import { mapMutations } from "vuex";

export default {
  layout: "page",
  computed: {
    todos() {//所有的任务清单
      return this.$store.state.todos.list;
    },
    alreadys() {//已经完成任务数量
      return this.$store.state.todos.list.filter(a => {
        return a.done == true;
      });
    }
  },
  methods: {
    addTodo(e) {
      let item = { text: e.target.value };
      this.$store.commit("todos/add", item);
      e.target.value = "";
    },
    ...mapMutations({
      toggle: "todos/toggle"
    })
  }
};
</script>

<style>
.todo_body {
  width: 80%;
  height: 100%;
  margin-left: 10%;
  display: block;
  padding-top: 20px;
}
.todo_body li {
  list-style: none;
}

.todo_list {
  margin-top: 5px;
}
.done {
  text-decoration: line-through;
}
.todo_mind {
  margin-top: 20px;
}
.todo_input_mind {
  width: 100%;
  height: 30px;
}
.todo_sum{
    border-bottom: 1px solid red;
    margin-bottom: 20px;
}
.todo_sum span{
    margin-right: 15px;
}
</style>