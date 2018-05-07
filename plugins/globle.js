import Vue from 'vue'

Vue.mixin({
  methods: {
    /* 设置标题描述 */
    $setSeo(title, content) {
      return { title: title, meta: [{ hid: 'description', name: 'description', content: content }] }
    },
  }
});