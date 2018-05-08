<template>
  <section class="container">
    <div>
      <h1 class="title">
        到喜啦 > 上海婚纱摄影 > {{msg_type=='TaoXi'?'热门套餐':'品牌商家'}} > {{msg_choice}}<br/>
      </h1>
      <div>
        <div class="pinpai">
          <div class="hssy-tab">
            <nuxt-link class="hssy-tab-1" to="/HunShaSheYing/PinPai">品牌商家</nuxt-link> |
            <nuxt-link class="hssy-tab-2" to="/HunShaSheYing/TaoXi">热门套餐</nuxt-link><br/>
          </div>
          <div class="choice">
              <div class="choice-type" v-for="m in choice_list" v-bind:key="m.name">
                  <span v-html="m.title"></span>
                  <div class="choice-list">
                      <ul>
                          <li v-for="n in m.list" v-bind:key="n.d">
                              <nuxt-link class="choice-a" :to="`/HunShaSheYing/${msg_type}/${n.path}`">{{n.d}}</nuxt-link>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
          <div class="result">
              <ul>
                  <li v-for="m in pinpai_list" v-bind:key="m.name">
                    <nuxt-link class="choice-a" :to="{path:`/HunShaSheYing/${m.name}-info`,query:m}">{{m.title}}</nuxt-link>
                  </li>
              </ul>
          </div>
      </div>
         
      </div>

    </div>
  </section>

</template>
<script>
import pinpai_js from "~/pages/HunShaSheYing/PinPai/pinpai.js"; //品牌模板
import pinpai_css from "~/pages/HunShaSheYing/PinPai/pinpai.css"; //样式
import hssy from "~/components/Hssy/hssy.js"; //样式

export default {
  head: pinpai_js.head,
  props: {
    msg_choice: "",
    msg_type: "" //类型 PinPai  TaoXi 等 默认为PinPai
  },
  data() {
    console.log("msg_choice:", this.msg_choice);
    console.log("msg_type:", this.msg_type);
    this.msg_type = this.msg_type || "PinPai";

    return {
      choice_list: hssy.getChoiceParams(this.msg_choice, hssy.choice_list,this.msg_type), //设置选择
      pinpai_list: hssy.pinpai_list
    };
  }
};
</script>
