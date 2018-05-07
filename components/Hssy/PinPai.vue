<template>
  <div class="pinpai">
       <div class="hssy-tab">
        <nuxt-link class="hssy-tab-1" to="/HunShaSheYing/PinPai">品牌商家</nuxt-link> |
        <nuxt-link class="hssy-tab-2" to="/city/sh/hunche?price=1002">热门套餐</nuxt-link><br/>
      </div>
      <div class="choice">
          <div class="choice-type" v-for="m in choice_list" v-bind:key="m.name">
              <span v-html="m.title"></span>
              <div class="choice-list">
                  <ul>
                      <li v-for="n in m.list" v-bind:key="n.d">
                          <!-- <nuxt-link class="choice-a" v-bind:to="{path:'/HunShaSheYing/PinPai',params:{choice:'Less4999-XuHui'}}">{{n.d}}</nuxt-link> -->
                          <!-- <nuxt-link class="choice-a" to="n|transUrl">{{n.d}}</nuxt-link> -->
                          <nuxt-link class="choice-a" :to="{path:'/HunShaSheYing/PinPai/Less4999-XuHui'}">{{n.d}}</nuxt-link>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <div class="result">
          <ul>
              <li v-for="m in 10" v-bind:key="m">1111111111111111</li>
          </ul>
      </div>
  </div>
</template>
<script>
let req_params = {};
let req_query = {};
let choice_list = [
  {
    title: "价格",
    name: "price",
    list: [
      { d: "不限", v: "" },
      { d: "4999以下", v: "Less4999" },
      { d: "5000-7999", v: "5000to7999" }
    ]
  },
  {
    title: "区域",
    name: "area",
    list: [
      { d: "不限", v: "" },
      { d: "徐汇区", v: "XuHui" },
      { d: "虹口区", v: "HongKou" },
      { d: "静安区", v: "JingAn" }
    ]
  },
  {
    title: "风格",
    name: "style",
    list: [
      { d: "不限", v: "" },
      { d: "欧式", v: "OuShi" },
      { d: "韩式", v: "HanShi" },
      { d: "个性", v: "GeXing" },
      { d: "旅拍", v: "LvPai" }
    ]
  }
];

var getChoiceParams = function(choice) {
  let list = choice.split("-");
};

export default {
  validate({ params, query }) {
    let choice = params.choice; //条件
    //将条件进行解析
    console.log(choice.split("-"));
    return true;
  },
  data: () => {
    return {
      choice_list
    };
  },
  methods: {
    transUrl: n => {
      return "/HunShaSheYing/PinPai/" + "Less4999-XuHui";
    }
  }
};
</script>
<style>
.pinpai {
  text-align: center;
}
.result {
  margin-top: 35%;
}

.choice-type {
  border: 1px solid red;
  width: 100%;
  float: left;
  margin-top: 5px;
}

.choice-list {
  clear: both;
}
.choice-list ul li {
  float: left;
  width: 100px;
}
</style>
