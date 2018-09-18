<template>
  <div>
	<header>
	    <div class="secTitMain redSquare"><a href="/" class="prev" id="forword"></a>
	        <h1 class="LogoName"><span>选择城市</span></h1>
	    </div>
	</header>
	<!-- 顶部 end -->

	<section id="GPS">
	    <div class="hotCity cityItems">
	        <h3>热门城市</h3>
	        <ul class="clearfix">
	            <li v-for="m in hot_list" v-bind:key="m.cityId"><a v-bind:href="`//m.daoxila.com/${m.shortName}/`" v-bind:dataCityId="m.cityId">{{m.nameCn}}</a></li>
	        </ul>
	    </div>
	    <div class="allCity cityItems">
	        <ul>
							<div v-for="k in zm_list" v-bind:key="k" v-if="all_list[k]">
								<h3 v-bind:id="k">{{k}}</h3>
							<li v-for="m in all_list[k]" v-bind:key="m.cityId"><a v-bind:href="`//m.daoxila.com/${m.shortName}/`" v-bind:dataCityId="m.cityId">{{m.nameCn}}</a></li>
							</div>
	        </ul>
	    </div>
	</section>
<!-- 底部 -->
  </div>
</template>

<script>
let dxl_conf = require("~/config");
export default {
  head: {
    title: "到喜啦",
    titleTemplate: "%s - 婚宴酒店预订知名品牌 - 移动版", //我们使用 titleTemplate 字段 title 变量指定文章题目，在渲染之前用title变量值替换掉%s这个占位，填充到titleTemplate 。
    meta: [
      { charset: "utf-8" },
      {
        hid: "viewport",
        name: "viewport",
        content:
          "width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=no"
      },
      {
        hid: "description",
        name: "description",
        content:
          "到喜啦移动版婚宴预订，一对一贴心服务. 为您找到最满意的婚宴酒店。全国免费热线: 400-820-1709"
      },
      {
        hid: "keywords",
        name: "keywords",
        content: "手机订婚宴,婚宴酒店,婚宴预订,订婚宴"
      },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-touch-fullscreen", content: "yes" },
      { name: "full-screen", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
      { name: "format-detection", content: "telephone=no" },
      {
        name: "apple-touch-icon",
        content: "//s4.dxlfile.com/public/img/logo/wap/256_hotel.png"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/nuxt-study/favicon.ico" },
      { rel: "stylesheet", href: "//s5.dxlfile.com/css/cityAll-w.css" }
    ],
    script: [{ src: "//s5.dxlfile.com/js/cityAll-w.js", ssr: false }]
  },
  asyncData(context) {
    let hot_list = [];
    let all_list = {};
    dxl_conf.city
      .sort(function(a, b) {
        var s = a.short_name.toLowerCase();
        var t = b.short_name.toLowerCase();
        if (s < t) return -1;
        if (s > t) return 1;
      })
      .forEach(function(m, i) {
        if (m.type == "hot") {
          //热门城市
          hot_list.push({
            cityId: m.id,
            nameCn: m.name,
            shortName: m.short_name
          });
        }

        if (all_list[m.short_name.substr(0, 1).toUpperCase()]) {
          all_list[m.short_name.substr(0, 1).toUpperCase()].push({
            cityId: m.id,
            nameCn: m.name,
            shortName: m.short_name
          });
        } else {
          all_list[m.short_name.substr(0, 1).toUpperCase()] = [];
          all_list[m.short_name.substr(0, 1).toUpperCase()].push({
            cityId: m.id,
            nameCn: m.name,
            shortName: m.short_name
          });
        }
      });
    let zm_list = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z"
    ];
    return { hot_list, all_list, zm_list };
  }
};
</script>
