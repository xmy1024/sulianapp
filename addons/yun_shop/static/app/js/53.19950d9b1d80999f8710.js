webpackJsonp([53],{DmEU:function(n,t){n.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTIwOTIwODY4ODg1IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjUwNzIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM3OC44OCA4NDQuOCAyNS42IDQ5MS41MiA5Ny4yOCA0MTcuMjggMzc4Ljg4IDY5OC44OCA5MjYuNzIgMTUzLjYgOTk4LjQgMjI1LjI4WiIgcC1pZD0iNTA3MyIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjwvc3ZnPg=="},LQ0t:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e("Pexp"),a={props:["signlog"],data:function(){return{year:"",month:"",m:"",w:""}},methods:{test:function(n){return this.signlog.indexOf(n)+1},getnewDate:function(){var n=this,t=new Date(this.year,this.month,0);this.m=t.getDate();var e=new Date(this.year,this.month-1,1).getDay();this.w=14.27*e;var i={month:this.month,year:this.year};$http.post("plugin.sign.Frontend.Modules.Sign.Controllers.sign-log.index",i,"loading").then(function(t){n.signlog=t.data.sign_log})},put:function(){this.month<=1?(this.year--,this.month=12):this.month--,this.getnewDate()},add:function(){this.month>=12?(this.year++,this.month=1):this.month++,this.getnewDate()},getData:function(n){var t=new Date,e=t.getFullYear();this.year=e;var i=t.getMonth()+n;this.month=i;var a=new Date(e,i,0);this.m=a.getDate();var s=new Date(e,i-1,1).getDay();this.w=14.27*s}},created:function(){this.getData(1)}},s={render:function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{attrs:{id:"date"}},[i("h1",[i("i",{staticClass:"fa fa-angle-left",on:{click:n.put}}),n._v(" "),i("span",[n._v(n._s(n.year)+"年"+n._s(n.month)+"月")]),n._v(" "),i("i",{staticClass:"fa fa-angle-right",on:{click:n.add}})]),n._v(" "),n._m(0),n._v(" "),i("div",{staticStyle:{height:"19rem",background:"#fff"}},[i("ul",[i("div",{style:{width:n.w+"%"}}),n._v(" "),n._l(n.m,function(t,a){return i("li",{key:a},[i("span",[n._v(n._s(t))]),n._v(" "),n.test(a)?i("img",{attrs:{src:e("DmEU")}}):n._e()])})],2)])])},staticRenderFns:[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ol",[e("li",[n._v("日")]),n._v(" "),e("li",[n._v("一")]),n._v(" "),e("li",[n._v("二")]),n._v(" "),e("li",[n._v("三")]),n._v(" "),e("li",[n._v("四")]),n._v(" "),e("li",[n._v("五")]),n._v(" "),e("li",[n._v("六")])])}]};var o=e("VU/8")(a,s,!1,function(n){e("l8s5")},"data-v-4009ca5c",null).exports,r=e("Tg7E"),l={data:function(){return{sign_status:"",sign_total:"",continue_days:"",cumulative:"",sign_log:"",sign_name:"",sharedata:{},signnowBol:!1}},methods:{signnow:function(){var n=this;if(this.signnowBol)return!1;this.signnowBol=!0,$http.get("plugin.sign.Frontend.Modules.Sign.Controllers.sign.sign",{}," ").then(function(t){if(1===t.result){var e=t.data.success_url;r.MessageBox.alert(t.msg).then(function(t){n.getSign()}).then(function(){window.location.href=e})}else Object(r.Toast)(t.msg)})},getData:function(){var n=this;$http.get("plugin.sign.Frontend.Controllers.share.index",{}," ").then(function(t){1===t.result&&(n.sharedata=t.data.share,n.initShare())})},initShare:function(){var n=this,t=document.location.href;$http.post("member.member.wxJsSdkConfig",{url:t}).then(function(t){1===t.result&&t.data.config&&n.share(t.data)},function(n){console.log(n)})},share:function(n){var t=this;wx.config(n.config);var e=n;wx.ready(function(){var i=t.sharedata.share_title?t.sharedata.share_title:e.shop.name,a=document.location.href+"&share_tag=2";a=t.fun.isMid(a,n.info.uid);var s=t.sharedata.share_icon?t.sharedata.share_icon:e.shop.logo,o=t.sharedata.share_desc?t.sharedata.share_desc:e.shop.copyright;wx.showOptionMenu(),wx.onMenuShareTimeline({title:i,link:a,imgUrl:s,success:function(){Object(r.Toast)("分享成功")},cancel:function(){Object(r.Toast)("取消分享")}}),wx.onMenuShareAppMessage({title:i,desc:o,link:a,imgUrl:s,type:"link",dataUrl:"",success:function(){Object(r.Toast)("分享成功")},cancel:function(){Object(r.Toast)("取消分享")}})})},getSign:function(){var n=this;$http.get("plugin.sign.Frontend.Modules.Sign.Controllers.sign-log.index",{},"loading").then(function(t){n.sign_status=t.data.sign_status,n.sign_total=t.data.sign_total,n.continue_days=t.data.continue_days,n.cumulative=window.localStorage.integral+t.data.cumulative.substr(2),n.sign_log=t.data.sign_log,n.sign_name=t.data.sign_name})}},created:function(){this.getSign(),this.getData(),this.fun.setWXTitle(this.sign_name)},components:{cTitle:i.a,date:o}},d={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"sign"}},[e("c-title",{attrs:{hide:!1,text:n.sign_name,tolink:"signrules",totext:n.sign_name+"说明"}}),n._v(" "),e("div",{staticStyle:{height:"40px"}}),n._v(" "),e("div",{staticClass:"sign-header custom_color"},[e("ul",{staticClass:"sign_a"},[e("li",{staticClass:"date"},[n._v(n._s(n.continue_days))]),n._v(" "),e("li",{staticClass:"total"},[n._v("连续"+n._s(n.sign_name))])]),n._v(" "),e("ul",{staticClass:"sign_b"},[e("li",{staticClass:"date"},[n._v(n._s(n.sign_total))]),n._v(" "),e("li",{staticClass:"total"},[n._v("累计"+n._s(n.sign_name))])]),n._v(" "),e("div",{staticClass:"btn",on:{click:n.signnow}},[n._v("\n      "+n._s(n.sign_status?"已"+n.sign_name:"未"+n.sign_name)+"\n    ")])]),n._v(" "),e("router-link",{attrs:{to:n.fun.getUrl("signrecord")}},[e("div",{staticClass:"record"},[e("span",[n._v("累计"+n._s(n.sign_name)+"奖励记录")]),n._v(" "),e("i",{staticClass:"fa fa-angle-right"})])]),n._v(" "),e("date",{attrs:{signlog:n.sign_log}})],1)},staticRenderFns:[]};var g=e("VU/8")(l,d,!1,function(n){e("a9tV")},"data-v-507bf78e",null);t.default=g.exports},a9tV:function(n,t,e){var i=e("jEHw");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e("rjj0")("4ea9ca94",i,!0,{})},jEHw:function(n,t,e){(n.exports=e("FZ+f")(!1)).push([n.i,"\n#sign .sign-header[data-v-507bf78e] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  background: #f15353;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 1.25rem 0;\n  line-height: 3rem;\n  position: relative;\n}\n#sign .sign-header .sign_a[data-v-507bf78e],\n  #sign .sign-header .sign_b[data-v-507bf78e] {\n    width: 8.5rem;\n}\n#sign .sign-header .sign_a li[data-v-507bf78e],\n    #sign .sign-header .sign_b li[data-v-507bf78e] {\n      line-height: 2rem;\n      padding-left: 1.25rem;\n      text-align: left;\n      color: #fff;\n}\n#sign .sign-header .sign_a .date[data-v-507bf78e],\n    #sign .sign-header .sign_b .date[data-v-507bf78e] {\n      font-size: 20px;\n}\n#sign .sign-header .sign_a .total[data-v-507bf78e],\n    #sign .sign-header .sign_b .total[data-v-507bf78e] {\n      font-size: 14px;\n      opacity: 0.8;\n}\n#sign .sign-header .yicon[data-v-507bf78e] {\n    position: absolute;\n    z-index: 100;\n    right: 0.7rem;\n    top: -0.7rem;\n}\n#sign .sign-header span[data-v-507bf78e] {\n    color: #fff;\n}\n#sign .sign-header .btn[data-v-507bf78e] {\n    width: 3.75rem;\n    height: 3.75rem;\n    background: #fff;\n    border: solid 0.375rem #f9baba;\n    border-radius: 50%;\n}\n#sign .record[data-v-507bf78e] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  height: 2.875rem;\n  line-height: 2.875rem;\n  background: #fff;\n  text-align: left;\n  color: #333;\n  font-size: 14px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 0 0.875rem;\n  margin-bottom: 0.625rem;\n}\n#sign .record i[data-v-507bf78e] {\n    line-height: 2.5rem;\n    font-size: 1.5rem;\n    color: #c9c9c9;\n}\n#sign .record .icon[data-v-507bf78e] {\n    display: inline-block;\n    width: 0.55rem;\n    height: 0.55rem;\n    border: solid 0.0625rem #000;\n    border-left: transparent;\n    border-bottom: transparent;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n    float: right;\n    margin-top: 0.3rem;\n}\n",""])},l8s5:function(n,t,e){var i=e("xnsA");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e("rjj0")("7b1309b4",i,!0,{})},xnsA:function(n,t,e){(n.exports=e("FZ+f")(!1)).push([n.i,'\n#date[data-v-4009ca5c] {\n  width: 21.5625rem;\n  border-radius: 0.375rem;\n  overflow: hidden;\n  margin: 0 auto;\n}\n#date h1[data-v-4009ca5c] {\n    background: #fff;\n    font-size: 16px;\n    color: #333;\n    line-height: 2.5rem;\n    text-align: center;\n    text-indent: 1rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n#date h1 i[data-v-4009ca5c] {\n      font-size: 1.5rem;\n      color: #ccc;\n      line-height: 2.5rem;\n}\n#date h1 span[data-v-4009ca5c] {\n      margin: 0 0.625rem;\n}\n#date ol[data-v-4009ca5c] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    background: #fafafa;\n}\n#date h1[data-v-4009ca5c] {\n    background: #fff;\n    font-size: 16px;\n    color: #f15353;\n    font-weight: normal;\n    line-height: 2.5rem;\n    text-align: left;\n    text-indent: 1rem;\n}\n#date ol[data-v-4009ca5c] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    background: #fff;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    padding: 0 0.3rem;\n}\n#date ol > li[data-v-4009ca5c] {\n      display: inline-block;\n      width: 14.27%;\n      float: left;\n      line-height: 2rem;\n      border-bottom: solid 0.0625rem #e5e5e5;\n}\n#date ul[data-v-4009ca5c] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    position: relative;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    padding: 0 0.3rem;\n}\n#date ul div[data-v-4009ca5c] {\n      border-bottom: solid 0.0625rem #e5e5e5;\n}\n#date ul > li[data-v-4009ca5c] {\n      list-style: none;\n      width: 14.27%;\n      height: 3rem;\n      border-bottom: solid 0.0625rem #e5e5e5;\n}\n#date ul > li span[data-v-4009ca5c] {\n        display: block;\n        margin: 0.55rem 0 0.4rem 0;\n}\n#date ul > li img[data-v-4009ca5c] {\n        background: #f15353;\n        border-radius: 50%;\n        width: 0.85rem;\n        height: 0.85rem;\n        display: block;\n}\n#date ul[data-v-4009ca5c]:after {\n      content: "";\n      width: 100%;\n      height: 0.0625rem;\n      z-index: 1;\n      background: #fff;\n      position: relative;\n      left: 0;\n      bottom: 0.0625rem;\n}\n',""])}});