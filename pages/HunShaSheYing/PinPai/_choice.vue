<template>
  <section class="container">
    <div>
      <h1 class="title">
        到喜啦 > 上海婚纱摄影:<br/>
      </h1>
      <div>
          <pin-pai></pin-pai>
      </div>

    </div>
  </section>
</template>

<script>
import PinPai from "~/components/Hssy/PinPai.vue"; //品牌模板
import pinpai_js from "~/pages/HunShaSheYing/PinPai/pinpai.js"; //品牌模板
import pinpai_css from "~/pages/HunShaSheYing/PinPai/pinpai.css"; //样式

let req_data = {};
export default {
  validate({ params, query }) {
    console.log("params:", params);
    console.log("query:", query);
    return true;
  },
  head: pinpai_js.head,
  data: () => {
    return { title: "", data: req_data };
  },
  components: {
    PinPai
  },
  methods: {
    show: () => {}
  }
};
</script>
