webpackJsonp([352],{"0KpO":function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e={components:{cTitle:a("Pexp").a},data:function(){return{id:"",all_amount:"",order_price:"",ratio:"",star:"",amount:"",amount_surplus:"",created_at:""}},methods:{previousPage:function(){this.$router.push(this.fun.getUrl("ExtensionPage"))},getData:function(){var t=this;$http.get("plugin.member-return.frontend.log.index",{log_id:this.id},"...").then(function(n){if(1==n.result){if(t.fun.isTextEmpty(n.data.log.has_one_queue))t.star="";else{for(var a="",e=0;e<n.data.log.has_one_queue.star;e++)a+="<i  class='iconfont icon-extension-stars icon-custom-undefined' style='font-size: 1rem; color: rgb(241, 83, 83);'></i>";t.star=a}t.all_amount=n.data.log.has_one_queue.amount,t.order_price=n.data.log.order_price,t.ratio=n.data.log.ratio,t.amount=n.data.log.amount,t.amount_surplus=n.data.log.has_one_queue.amount_surplus,t.created_at=n.data.log.created_at}}).catch(function(t){console.log(t)})}},activated:function(){this.id=this.$route.params.id,this.getData()}},i={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("section",{attrs:{id:"detail"}},[a("c-title",{attrs:{hide:!1,text:"奖励详情"}}),t._v(" "),a("section",{attrs:{id:"info"}},[a("div",{staticClass:"top"},[a("font",[t._v("奖励积分")]),t._v(" "),a("h1",[t._v(t._s(t.amount))])],1),t._v(" "),a("ul",[a("li",[a("span",[t._v("奖励积分")]),t._v(" "),a("span",[t._v(t._s(t.order_price))])]),t._v(" "),a("li",[a("span",[t._v("奖励比例")]),t._v(" "),a("span",[t._v(t._s(t.ratio)+"%")])]),t._v(" "),a("li",[a("span",[t._v("星级会员")]),t._v(" "),a("span",{staticStyle:{"word-wrap":"break-word","word-break":"normal"},domProps:{innerHTML:t._s(t.star)}})]),t._v(" "),a("li",[a("span",[t._v("奖励总额")]),t._v(" "),a("span",[t._v(t._s(t.all_amount))])]),t._v(" "),a("li",[a("span",[t._v("剩余奖励金额")]),t._v(" "),a("span",[t._v(t._s(t.amount_surplus))])]),t._v(" "),a("li",[a("span",[t._v("奖励时间")]),t._v(" "),a("span",[t._v(t._s(t.created_at))])])])])],1)},staticRenderFns:[]};var o=a("VU/8")(e,i,!1,function(t){a("RMVD")},"data-v-68414978",null);n.default=o.exports},"1I2V":function(t,n,a){(t.exports=a("FZ+f")(!1)).push([t.i,"\n#detail[data-v-68414978] {\n  padding-top: 40px;\n  background-color: #fff;\n  font-size: 14px;\n}\n#detail #info font[data-v-68414978] {\n    line-height: 3rem;\n}\n#detail #info h1[data-v-68414978] {\n    font-size: 28px;\n}\n#detail #info ul[data-v-68414978] {\n    margin-top: 1.25rem;\n    padding-bottom: 0.625rem;\n}\n#detail #info ul li[data-v-68414978] {\n      height: 1.875rem;\n      line-height: 1.875rem;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      padding: 0 0.875rem;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n}\n#detail #info ul li span[data-v-68414978]:first-child {\n        color: #8c8c8c;\n}\n",""])},RMVD:function(t,n,a){var e=a("1I2V");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);a("rjj0")("3d053d3e",e,!0,{})}});