webpackJsonp([561],{AOCL:function(t,n,e){var i=e("SmZX");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("bb17ab24",i,!0,{})},SmZX:function(t,n,e){(t.exports=e("FZ+f")(!1)).push([t.i,"\n#notices_detail[data-v-174ba252] {\n  background: #fff;\n  padding-top: 40px;\n}\n#notices_detail #content[data-v-174ba252] {\n    min-height: 37.5rem;\n}\n#notices_detail #content .detail[data-v-174ba252] {\n      padding: 0 0.875rem;\n}\n#notices_detail #content .detail h1[data-v-174ba252] {\n        font-size: 18px;\n        text-align: left;\n        padding: 0.625rem 0;\n}\n#notices_detail #content .detail li[data-v-174ba252]:nth-child(2) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        color: #8c8c8c;\n        font-size: 14px;\n        line-height: 1.875rem;\n}\n#notices_detail #content .detail p[data-v-174ba252] {\n        margin-top: 0.625rem;\n        text-align: left;\n}\n",""])},dnO6:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("Pexp"),a=e("Tg7E"),c={data:function(){return{notice:{},id:"",type:"",lang:{}}},activated:function(){this.id=this.$route.params.notice_id,this.getLang(),this.getData()},methods:{getLang:function(){var t=this;$http.get("plugin.asset.Frontend.Controllers.Lang.index",{},"加载中").then(function(n){1===n.result?(t.lang=n.data,t.checkTitle(t.$route.query.name)):Object(a.Toast)(n.msg)}).catch(function(t){console.log(t)})},checkTitle:function(t){switch(t){case"notice":this.type=this.lang.capital_name+"数字化公告",this.fun.setWXTitle(this.lang.capital_name+"数字化公告");break;default:this.type=this.lang.capital_name+"公告",this.fun.setWXTitle(this.lang.capital_name+"公告")}},getData:function(){var t=this;$http.get("plugin.asset.Frontend.Modules.Notice.Controllers.detail.index",{notice_id:this.id},"加载中...").then(function(n){1===n.result?t.notice=n.data.notice:Object(a.Toast)(n.msg)}).catch(function(t){document.write(t)})}},components:{cTitle:i.a}},s={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"notices_detail"}},[e("c-title",{attrs:{hide:!1,text:t.type}}),t._v(" "),e("div",{attrs:{id:"content"}},[e("ul",{staticClass:"detail"},[e("li",[e("h1",[t._v(t._s(t.notice.title))])]),t._v(" "),e("li",[e("span",[t._v("作者："+t._s(t.notice.author))]),t._v(" "),e("span",[t._v(t._s(t.notice.created_at))])]),t._v(" "),e("p",[t._v("\n        "+t._s(t.notice.content)+"\n      ")])])])],1)},staticRenderFns:[]};var o=e("VU/8")(c,s,!1,function(t){e("AOCL")},"data-v-174ba252",null);n.default=o.exports}});