webpackJsonp([418],{Bwgb:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=t("Pexp"),s=t("Tg7E"),o=document.documentElement,a={data:function(){return{commission:{},commissionList:[],activeName:"-1",WXtitle:""}},activated:function(){this.initData(),this.getIndex(),this.getData()},methods:{getTab:function(n){this.commissionList=[],o.scrollTop=0,this.getData()},initData:function(){this.commission={},this.commissionList=[],this.activeName="-1"},getIndex:function(){var n=this;$http.get("plugin.sales-commission.api.sale.index",{},"").then(function(e){1===e.result?(n.WXtitle=e.data.name,n.fun.setWXTitle(n.WXtitle),n.commission=e.data):Object(s.Toast)(e.msg)},function(n){console.log(n)})},getData:function(){var n=this,e={};n.activeName>=0&&(e={status:n.activeName}),$http.get("plugin.sales-commission.api.sale.record",e,"").then(function(e){1===e.result?n.commissionList=e.data.data:Object(s.Toast)(e.msg)},function(n){console.log(n)})}},components:{cTitle:i.a}},l={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"new_sale_commission"}},[t("c-title",{attrs:{hide:!1,text:n.WXtitle}}),n._v(" "),t("div",{attrs:{id:"content"}},[t("div",{staticClass:"info_box"},[t("div",{staticClass:"text"},[t("ul",[t("li",[n._v(n._s(n.WXtitle)+"比例："+n._s(n.commission.commission_rate)+"%")])])]),n._v(" "),t("div",{staticClass:"info"},[t("ul",[t("li",[n._v(n._s(n.commission.today))]),n._v(" "),t("li",[n._v("今日")])]),n._v(" "),t("ul",[t("li",[n._v(n._s(n.commission.yesterday))]),n._v(" "),t("li",[n._v("昨日")])]),n._v(" "),t("ul",[t("li",[n._v(n._s(n.commission.this_week))]),n._v(" "),t("li",[n._v("本周")])]),n._v(" "),t("ul",[t("li",[n._v(n._s(n.commission.this_month))]),n._v(" "),t("li",[n._v("本月累计分红")])])]),n._v(" "),n._m(0)]),n._v(" "),t("div",{staticClass:"sale_box"},[t("mt-navbar",{model:{value:n.activeName,callback:function(e){n.activeName=e},expression:"activeName"}},[t("mt-tab-item",{attrs:{id:"-1"},nativeOn:{click:function(e){return n.getTab(e)}}},[n._v("全部")]),n._v(" "),t("mt-tab-item",{attrs:{id:"1"},nativeOn:{click:function(e){return n.getTab(e)}}},[n._v("已结算")]),n._v(" "),t("mt-tab-item",{attrs:{id:"0"},nativeOn:{click:function(e){return n.getTab(e)}}},[n._v("未结算")])],1),n._v(" "),t("mt-tab-container",{model:{value:n.activeName,callback:function(e){n.activeName=e},expression:"activeName"}},[t("mt-tab-container-item",{attrs:{id:"-1"}},["-1"===n.activeName?t("div",{staticClass:"list_box"},n._l(n.commissionList,function(e,i){return t("div",{key:i,staticClass:"box"},[t("h1",[n._v(n._s(e.create_month))]),n._v(" "),n._l(e.has_many_sell,function(e,i){return t("div",{key:i,staticClass:"order"},[t("h2",[n._v("销售ID:"+n._s(e.id))]),n._v(" "),t("ul",[t("li",[t("span",[n._v("订单号："+n._s(e.order_sn))]),n._v(" "),t("span",[n._v("+"+n._s(e.royalties))])]),n._v(" "),t("li",[t("span",[n._v(n._s(e.created_at))]),n._v(" "),t("span",[n._v(n._s(e.status))])])])])})],2)}),0):n._e()]),n._v(" "),t("mt-tab-container-item",{attrs:{id:"1"}},["1"===n.activeName?t("div",{staticClass:"list_box"},n._l(n.commissionList,function(e,i){return t("div",{key:i,staticClass:"box"},[t("h1",[n._v(n._s(e.create_month))]),n._v(" "),n._l(e.has_many_sell,function(e,i){return t("div",{key:i,staticClass:"order"},[t("h2",[n._v("销售ID:"+n._s(e.id))]),n._v(" "),t("ul",[t("li",[t("span",[n._v("订单号："+n._s(e.order_sn))]),n._v(" "),t("span",[n._v("+"+n._s(e.royalties))])]),n._v(" "),t("li",[t("span",[n._v(n._s(e.created_at))]),n._v(" "),t("span",[n._v(n._s(e.status))])])])])})],2)}),0):n._e()]),n._v(" "),t("mt-tab-container-item",{attrs:{id:"0"}},["0"===n.activeName?t("div",{staticClass:"list_box"},n._l(n.commissionList,function(e,i){return t("div",{key:i,staticClass:"box"},[t("h1",[n._v(n._s(e.create_month))]),n._v(" "),n._l(e.has_many_sell,function(e,i){return t("div",{key:i,staticClass:"order"},[t("h2",[n._v("销售ID:"+n._s(e.id))]),n._v(" "),t("ul",[t("li",[t("span",[n._v("订单号："+n._s(e.order_sn))]),n._v(" "),t("span",[n._v("+"+n._s(e.royalties))])]),n._v(" "),t("li",[t("span",[n._v(n._s(e.created_at))]),n._v(" "),t("span",[n._v(n._s(e.status))])])])])})],2)}),0):n._e()])],1)],1)])],1)},staticRenderFns:[function(){var n=this.$createElement,e=this._self._c||n;return e("div",{staticClass:"img"},[e("img",{attrs:{src:t("b/Eg")}})])}]};var c=t("VU/8")(a,l,!1,function(n){t("HQ4g")},"data-v-4e32ee02",null);e.default=c.exports},HQ4g:function(n,e,t){var i=t("dWe5");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);t("rjj0")("8d3a6d9e",i,!0,{})},dWe5:function(n,e,t){(n.exports=t("FZ+f")(!1)).push([n.i,"\n#new_sale_commission[data-v-4e32ee02] {\n  padding-top: 40px;\n}\n#new_sale_commission #content .info_box[data-v-4e32ee02] {\n    position: relative;\n}\n#new_sale_commission #content .info_box .text[data-v-4e32ee02] {\n      background-color: #f15353;\n      padding: 0.625rem 0.875rem;\n}\n#new_sale_commission #content .info_box .text ul li[data-v-4e32ee02] {\n        color: #fff;\n        line-height: 2.25rem;\n        font-size: 16px;\n        text-align: left;\n}\n#new_sale_commission #content .info_box .info[data-v-4e32ee02] {\n      background-color: #fff;\n      padding: 0.75rem 0;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n}\n#new_sale_commission #content .info_box .info ul[data-v-4e32ee02]:first-child,\n      #new_sale_commission #content .info_box .info ul[data-v-4e32ee02]:nth-child(2),\n      #new_sale_commission #content .info_box .info ul[data-v-4e32ee02]:nth-child(3) {\n        width: 5.125rem;\n}\n#new_sale_commission #content .info_box .info ul:first-child li[data-v-4e32ee02],\n        #new_sale_commission #content .info_box .info ul:nth-child(2) li[data-v-4e32ee02],\n        #new_sale_commission #content .info_box .info ul:nth-child(3) li[data-v-4e32ee02] {\n          line-height: 1.875rem;\n}\n#new_sale_commission #content .info_box .info ul:first-child li[data-v-4e32ee02]:first-child,\n        #new_sale_commission #content .info_box .info ul:nth-child(2) li[data-v-4e32ee02]:first-child,\n        #new_sale_commission #content .info_box .info ul:nth-child(3) li[data-v-4e32ee02]:first-child {\n          font-size: 20px;\n          color: #ffa800;\n}\n#new_sale_commission #content .info_box .info ul:first-child li[data-v-4e32ee02]:last-child,\n        #new_sale_commission #content .info_box .info ul:nth-child(2) li[data-v-4e32ee02]:last-child,\n        #new_sale_commission #content .info_box .info ul:nth-child(3) li[data-v-4e32ee02]:last-child {\n          font-size: 13px;\n          font-weight: bold;\n}\n#new_sale_commission #content .info_box .info ul[data-v-4e32ee02]:last-child {\n        width: 8.0625rem;\n}\n#new_sale_commission #content .info_box .info ul:last-child li[data-v-4e32ee02] {\n          line-height: 1.875rem;\n}\n#new_sale_commission #content .info_box .info ul:last-child li[data-v-4e32ee02]:first-child {\n          font-size: 20px;\n          color: #ffa800;\n}\n#new_sale_commission #content .info_box .info ul:last-child li[data-v-4e32ee02]:last-child {\n          font-size: 13px;\n          font-weight: bold;\n}\n#new_sale_commission #content .info_box .img[data-v-4e32ee02] {\n      position: absolute;\n      bottom: 0.625rem;\n      right: 7.625rem;\n      height: 3.75rem;\n}\n#new_sale_commission #content .info_box .img img[data-v-4e32ee02] {\n        height: 100%;\n}\n#new_sale_commission #content .sale_box[data-v-4e32ee02] {\n    margin-top: 0.625rem;\n}\n#new_sale_commission #content .sale_box .list_box .box h1[data-v-4e32ee02] {\n      font-size: 16px;\n      line-height: 2.5rem;\n      padding: 0 0.875rem;\n      text-align: left;\n      background-color: #fafafa;\n}\n#new_sale_commission #content .sale_box .list_box .box .order[data-v-4e32ee02] {\n      margin-bottom: 0.375rem;\n      background-color: #fff;\n}\n#new_sale_commission #content .sale_box .list_box .box .order h2[data-v-4e32ee02] {\n        margin: 0 0.875rem;\n        line-height: 2.25rem;\n        font-size: 15px;\n        text-align: left;\n        border-bottom: solid 0.0625rem #ebebeb;\n}\n#new_sale_commission #content .sale_box .list_box .box .order ul[data-v-4e32ee02] {\n        padding: 0.625rem 0.875rem;\n}\n#new_sale_commission #content .sale_box .list_box .box .order ul li[data-v-4e32ee02] {\n          line-height: 1.5rem;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-pack: justify;\n              -ms-flex-pack: justify;\n                  justify-content: space-between;\n          font-size: 14px;\n}\n#new_sale_commission #content .sale_box .list_box .box .order ul li:last-child span[data-v-4e32ee02]:first-child {\n          color: #8c8c8c;\n          font-size: 13px;\n}\n#new_sale_commission #content .sale_box .list_box .box .order ul li:last-child span[data-v-4e32ee02]:last-child {\n          color: #f15353;\n}\n",""])}});