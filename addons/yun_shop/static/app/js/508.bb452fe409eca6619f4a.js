webpackJsonp([508],{ESWY:function(t,o,n){(t.exports=n("FZ+f")(!1)).push([t.i,"\n#card_footprint[data-v-2a769f7e] {\n  padding-top: 40px;\n}\n#card_footprint .content .box_a h1[data-v-2a769f7e] {\n    font-size: 15px;\n    font-weight: normal;\n    line-height: 2.5rem;\n    text-align: left;\n    padding: 0 0.875rem;\n    color: #666;\n}\n#card_footprint .content .box_a .goods_list[data-v-2a769f7e] {\n    background: #fff;\n    padding: 0.9375rem;\n}\n#card_footprint .content .box_a .goods_list .goods_box[data-v-2a769f7e] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      background: #fafafa;\n      padding: 0.625rem;\n      margin-bottom: 0.625rem;\n}\n#card_footprint .content .box_a .goods_list .goods_box .goods_left[data-v-2a769f7e] {\n        width: 15.6875rem;\n        margin-right: 0.625rem;\n}\n#card_footprint .content .box_a .goods_list .goods_box .goods_left .header[data-v-2a769f7e] {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          height: 2rem;\n          line-height: 2rem;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          position: relative;\n}\n#card_footprint .content .box_a .goods_list .goods_box .goods_left .header .img[data-v-2a769f7e] {\n            background: #f2f2f2;\n            width: 2rem;\n            height: 2rem;\n            border-radius: 1.875rem;\n            overflow: hidden;\n            margin-right: 0.625rem;\n}\n#card_footprint .content .box_a .goods_list .goods_box .goods_left .header .img img[data-v-2a769f7e] {\n              width: 100%;\n              height: 100%;\n}\n#card_footprint .content .box_a .goods_list .goods_box .goods_left .header .name[data-v-2a769f7e] {\n            max-width: 6rem;\n            overflow: hidden;\n            text-overflow: ellipsis;\n            white-space: nowrap;\n            font-size: 15px;\n}\n#card_footprint .content .box_a .goods_list .goods_box .goods_left .header .time[data-v-2a769f7e] {\n            position: absolute;\n            right: 0;\n            color: #8c8c8c;\n            font-size: 12px;\n}\n#card_footprint .content .box_a .goods_list .goods_box .goods_left .look_number[data-v-2a769f7e] {\n          line-height: 1.5rem;\n          text-align: left;\n          font-size: 13px;\n          margin-top: 0.375rem;\n          overflow: hidden;\n          text-overflow: ellipsis;\n          white-space: nowrap;\n}\n#card_footprint .content .box_a .goods_list .goods_box .goods_left .look_number span[data-v-2a769f7e] {\n            color: #8c8c8c;\n}\n#card_footprint .content .box_a .goods_list .goods_box .goods_img[data-v-2a769f7e] {\n        width: 4rem;\n        height: 4rem;\n        background: #f2f2f2;\n        overflow: hidden;\n}\n#card_footprint .content .box_a .goods_list .goods_box .goods_img img[data-v-2a769f7e] {\n          width: 100%;\n}\n",""])},"N+Rd":function(t,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var a=n("Pexp"),e=n("Tg7E"),i={mixins:[n("vsZy").a],data:function(){return{list:[],isLoadMore:!0,page:1,total_page:0}},activated:function(){this.card_id=this.$route.params.card_id,this.getDate()},methods:{toGood:function(t){this.$router.push(this.fun.getUrl("goods",{id:t}))},initData:function(){this.isLoadMore=!0,this.page=1,this.total_page=0},getDate:function(){var t=this;$http.get("plugin.business-card.frontend.controllers.trace.trace-history.index",{card_id:this.card_id,page:1}," ").then(function(o){1===o.result&&1===o.result?(t.isLoadMore=!0,t.total_page=o.data.last_page,t.total_page||(t.total_page=0),t.list=o.data.data):Object(e.Toast)(o.msg)},function(t){console.log(t)})},getMoreData:function(){var t=this;t.isLoadMore=!1,this.page>=this.total_page||(this.page=this.page+1,$http.get("plugin.business-card.frontend.controllers.trace.trace-history.index",{card_id:t.card_id,page:t.page}," ").then(function(o){if(t.isLoadMore=!0,1===o.result){var n=o.data.data;t.list=t.list.concat(n)}else t.page=t.page-1,t.isLoadMore=!1},function(t){console.log(t)}))}},components:{cTitle:a.a}},s={render:function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{attrs:{id:"card_footprint"}},[n("c-title",{attrs:{hide:!1,text:"名片足迹"}}),t._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"box_a"},[n("div",{staticClass:"goods_list"},t._l(t.list,function(o,a){return n("div",{key:a,staticClass:"goods_box"},[n("ul",{staticClass:"goods_left"},[n("li",{staticClass:"header"},[n("div",{staticClass:"img"},[o.card?n("img",{attrs:{src:o.card.card_avatar}}):t._e(),t._v(" "),o.card?t._e():n("img",{attrs:{src:o.member.avatar_image}})]),t._v(" "),o.card?n("span",{staticClass:"name"},[t._v("\n                "+t._s(o.card.card_name))]):t._e(),t._v(" "),o.card?t._e():n("span",{staticClass:"name"},[t._v("\n                "+t._s(o.member.nickname))]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(o.created_at))])]),t._v(" "),n("li",{staticClass:"look_number"},[n("span",[t._v("第"+t._s(o.num)+"次查看")]),t._v("\n              "+t._s(o.goods.title)+"\n            ")])]),t._v(" "),n("div",{staticClass:"goods_img",on:{click:function(n){return t.toGood(o.goods_id)}}},[n("img",{attrs:{src:o.goods.goods_thumb}})])])}),0)])])],1)},staticRenderFns:[]};var d=n("VU/8")(i,s,!1,function(t){n("nC12")},"data-v-2a769f7e",null);o.default=d.exports},nC12:function(t,o,n){var a=n("ESWY");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("dbe6f4dc",a,!0,{})}});