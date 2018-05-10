let pinpai_list = [
  {
    title: "圣拉维环球旅拍婚纱摄影",
    name: "ShengLaWei",
    address: "虹口区虹口足球场东江湾路167号2楼",
    link: ""
  },
  {
    title: "韩国MOONBABY儿童摄影",
    name: "Moonbaby",
    address: "杨浦区翔殷路178号",
    link: ""
  },
  {
    title: "90摄影工坊",
    name: "JiuLing",
    address: "浦东新区浙桥路289弄2号楼1604",
    link: ""
  },
  {
    title: "韩国艺匠ARTIZ STUDIO",
    name: "YiJiangArtizStudio",
    address: "长宁区江苏路40号",
    link: ""
  }
];

let choice_list = [
  {
    title: "价格",
    name: "price",
    list: [
      { d: "不限", v: "", path: "" },
      { d: "4999以下", v: "Less4999", path: "Less4999" },
      { d: "5000-7999", v: "5000to7999", path: "5000to7999" }
    ]
  },
  {
    title: "区域",
    name: "area",
    list: [
      { d: "不限", v: "", path: "" },
      { d: "徐汇区", v: "XuHui", path: "XuHui" },
      { d: "虹口区", v: "HongKou", path: "HongKou" },
      { d: "静安区", v: "JingAn", path: "JingAn" }
    ]
  },
  {
    title: "风格",
    name: "style",
    list: [
      { d: "不限", v: "", path: "" },
      { d: "欧式", v: "OuShi", path: "OuShi" },
      { d: "韩式", v: "HanShi", path: "HanShi" },
      { d: "个性", v: "GeXing", path: "GeXing" },
      { d: "旅拍", v: "LvPai", path: "LvPai" }
    ]
  }
];

Array.prototype.unique3 = function () {
  var res = [];
  var json = {};
  for (var i = 0; i < this.length; i++) {
    if (!json[this[i]]) {
      res.push(this[i]);
      json[this[i]] = 1;
    }
  }
  return res;
};

var getChoiceParams = function (choice, choice_list, msg_type) {
  let list = choice.split("-").unique3(); //获取数组并去重
  for (let k = 0; k < choice_list.length; k++) {
    let item = choice_list[k];
    item.list.forEach(function (m, b) {
      item.list[b].path = item.list[b].v; //path 还原为最初值,设置最初值,该值不变，入参改变
      //name 值相同 和初始值name 值相同则排除掉
      list.forEach(n => {
        //进行判断
        let name = "";
        for (let a = 0; a < choice_list.length; a++) {
          choice_list[a].list.forEach(function (b) {
            if (b.v == n) {
              name = choice_list[a].name;
            }
          });
        }
        //判断及设置访问路径
        if (name != item.name) {
          item.list[b].path +=
            (list == "" ? "" : item.list[b].path == "" ? "" : "-") + n;
        }
      });
    });
    choice_list[k] = item;
  }
  if (msg_type == "TaoXi") {
    return [choice_list[0]];
  } else {
    return choice_list;
  }
};

export default {
  getChoiceParams,
  choice_list,
  pinpai_list
};