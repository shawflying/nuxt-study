import Vuex from 'vuex'

//todo list
const todos = {
  namespaced: true,//通过命名空间的方式调用
  state: {
    list: []
  },
  mutations: {
    add(state, { text }) {
      state.list.push({
        id: new Date().getTime(),
        text,
        done: false,//状态
        create_time: Math.round(new Date().getTime() / 1000)
      })
    },
    remove(state, { todo }) {
      state.list.splice(state.list.indexOf(todo), 1)
    },
    toggle(state, todo) {
      console.log(todo)
      todo.done = !todo.done
      todo.update = Math.round(new Date().getTime() / 1000)
    }
  }
}

const createStore = () => {
  return new Vuex.Store({
    state: {
      counter: 0
    },
    mutations: {
      increment(state) {
        state.counter++
      }
    },
    modules: {
      todos
    }
  })
}

export default createStore