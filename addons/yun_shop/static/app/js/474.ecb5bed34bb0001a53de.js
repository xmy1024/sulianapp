webpackJsonp([474],{C7Au:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"\n#rebate #box .order-box .list[data-v-35fb2384] {\n  border-bottom: solid 0.0625rem #ebebeb;\n  background-color: #fff;\n  padding: 0.625rem 0.875rem;\n}\n#rebate #box .order-box .list li[data-v-35fb2384] {\n    font-size: 14px;\n    line-height: 1.875rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n}\n#rebate #box .order-box .list .two .left[data-v-35fb2384] {\n    color: #8c8c8c;\n}\n#rebate #box .order-box .list .two .right[data-v-35fb2384] {\n    color: #f15353;\n}\n#rebate #box .order-box .list[data-v-35fb2384]:last-child {\n  border: none;\n}\n",""])},Lfvd:function(t,e,a){var s=a("C7Au");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("6c0d699c",s,!0,{})},VoMP:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("Tg7E"),i=a("Pexp"),n=document.documentElement,o=document.body,r={data:function(){return{list:[],status:"",activeName:"-1",isLoadMore:!0,page:1,total_page:0}},activated:function(){this.initData(),window.addEventListener("scroll",this.handleScroll)},deactivated:function(){this.activeName="-1",window.removeEventListener("scroll",this.handleScroll)},created:function(){},methods:{initData:function(){this.activeName="-1",this.page=1,this.total_page=0,this.isLoadMore=!0,this.list=[],this.type=this.$route.query.name,"replenish"===this.type?(this.api="plugin.kingtimes.frontend.providerRebate.manage.manage",this.getData(-1)):"delivery"===this.type?(this.api="plugin.kingtimes.frontend.distributorRebate.manage.manage",this.getData(-1)):this.$router.push(this.fun.getUrl("home"))},getRebate:function(t){var e=this.activeName;this.list=[],n.scrollTop=0,this.getData(e)},getData:function(t){var e={status:t},a=this;a.isLoadMore=!1,a.status=t,a.page=1,$http.get(a.api,e,"加载中...").then(function(t){1===t.result?(a.isLoadMore=!0,a.total_page=t.data.last_page,a.total_page||(a.total_page=0),a.list=t.data.data):(Object(s.Toast)(t.msg),a.$router.push(a.fun.getUrl("ReplenishmentApply",{})))},function(t){console.log(t)})},getMoreData:function(){var t=this;t.isLoadMore=!1,this.page>=this.total_page||(this.page=this.page+1,$http.post(t.api,{page:t.page,status:t.status},"加载中...").then(function(e){if(t.isLoadMore=!0,1!==e.result)return t.page=t.page-1,void(t.isLoadMore=!1);var a=e.data.data;t.list=t.list.concat(a)},function(t){}))},getScrollTop:function(){var t=0;return n&&n.scrollTop?t=n.scrollTop:o&&(t=o.scrollTop),t},getClientHeight:function(){return o.clientHeight&&n.clientHeight?Math.min(o.clientHeight,n.clientHeight):Math.max(o.clientHeight,n.clientHeight)},getScrollHeight:function(){return Math.max(o.scrollHeight,n.scrollHeight)},handleScroll:function(){this.getScrollTop()+this.getClientHeight()+5>this.getScrollHeight()&&(this.isLoadMore?this.getMoreData():console.log("没有更多数据"))}},components:{cTitle:i.a}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"rebate"}},[a("c-title",{attrs:{hide:!1,text:"返利记录"}}),t._v(" "),a("div",{staticStyle:{height:"40px"}}),t._v(" "),a("div",{attrs:{id:"box"}},[a("mt-navbar",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("mt-tab-item",{attrs:{id:"-1"},nativeOn:{click:function(e){return t.getRebate(e)}}},[t._v("全部")]),t._v(" "),a("mt-tab-item",{attrs:{id:"0"},nativeOn:{click:function(e){return t.getRebate(e)}}},[t._v("待返利")]),t._v(" "),a("mt-tab-item",{attrs:{id:"1"},nativeOn:{click:function(e){return t.getRebate(e)}}},[t._v("已返利")])],1),t._v(" "),a("mt-tab-container",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("mt-tab-container-item",{attrs:{name:"-1"}},[a("div",{staticClass:"order-box"},t._l(t.list,function(e,s){return a("div",{key:s},[a("ul",{staticClass:"list"},[a("li",{staticClass:"one"},[a("span",{staticClass:"left"},[t._v(t._s("replenish"===t.type?"铺货单号":"订单号")+" ："+t._s("replenish"===t.type?e.has_one_distributor_order.order_sn:e.has_one_order.order_sn))]),t._v(" "),a("span",{staticClass:"right"},[t._v("+"+t._s(e.amount))])]),t._v(" "),a("li",{staticClass:"two"},[a("span",{staticClass:"left"},[t._v(t._s(e.created_at))]),t._v(" "),a("span",{staticClass:"right"},[t._v(t._s(e.status_name))])])])])}),0)]),t._v(" "),a("mt-tab-container-item",{attrs:{name:"0"}},[a("div",{staticClass:"order-box"},t._l(t.list,function(e,s){return a("div",{key:s},[a("ul",{staticClass:"list"},[a("li",{staticClass:"one"},[a("span",{staticClass:"left"},[t._v(t._s("replenish"===t.type?"铺货单号":"订单号")+" ："+t._s("replenish"===t.type?e.has_one_distributor_order.order_sn:e.has_one_order.order_sn)+" ")]),t._v(" "),a("span",{staticClass:"right"},[t._v("+"+t._s(e.amount))])]),t._v(" "),a("li",{staticClass:"two"},[a("span",{staticClass:"left"},[t._v(t._s(e.created_at))]),t._v(" "),a("span",{staticClass:"right"},[t._v(t._s(e.status_name))])])])])}),0)]),t._v(" "),a("mt-tab-container-item",{attrs:{name:"1"}},[a("div",{staticClass:"order-box"},t._l(t.list,function(e,s){return a("div",{key:s},[a("ul",{staticClass:"list"},[a("li",{staticClass:"one"},[a("span",{staticClass:"left"},[t._v(t._s("replenish"===t.type?"铺货单号":"订单号")+" ："+t._s("replenish"===t.type?e.has_one_distributor_order.order_sn:e.has_one_order.order_sn))]),t._v(" "),a("span",{staticClass:"right"},[t._v("+"+t._s(e.amount))])]),t._v(" "),a("li",{staticClass:"two"},[a("span",{staticClass:"left"},[t._v(t._s(e.created_at))]),t._v(" "),a("span",{staticClass:"right"},[t._v(t._s(e.status_name))])])])])}),0)])],1)],1)],1)},staticRenderFns:[]};var c=a("VU/8")(r,l,!1,function(t){a("Lfvd")},"data-v-35fb2384",null);e.default=c.exports}});