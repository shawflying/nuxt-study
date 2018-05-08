<template>

<section class="container">
    <div>
      <h1 class="title">
        到喜啦 > 上海婚纱摄影 > {{msg_detail.title}} > {{msg_from.split("-info")[0]}}><br/>
      </h1>
      <div>
        <div class="pinpai">
          <div class="hssy-tab">
            <nuxt-link class="hssy-tab-1" to="/HunShaSheYing/PinPai">返回筛选页</nuxt-link>
          </div>
          <div>
            名称：{{msg_detail.title}} <br/>
            所在地址：{{msg_detail.address}}
          </div>
      </div>
      </div>
    </div>
  </section>
</template>
<script>
import pinpai_js from "~/pages/HunShaSheYing/PinPai/pinpai.js"; //品牌模板
import pinpai_css from "~/pages/HunShaSheYing/PinPai/pinpai.css"; //样式
export default {
  head: pinpai_js.head,
  props: {
    msg_detail: {},
    msg_from: ""
  },
  data() {
    console.log(this.msg_detail);
    return {
      desc_title: this.msg_detail.title.split("-info")[0] //活动标题获取参数
    };
  }
};
</script>
