webpackJsonp([512],{"26du":function(e,t,n){var a=n("RzRO");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("7f4e274e",a,!0,{})},EdQ5:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("Pexp"),u=n("Tg7E"),o={mixins:[n("vsZy").a],data:function(){return{active:0,rewardsData:{},recordsList:[],MemberData:{},url:"",amount_id:"",currentTabIndex:1,isLoadMore:!0,page:1,total_page:0,titleInfo:""}},created:function(){this.getInfoTitle()},activated:function(){this.initData(),this.getIndex(),this.getMember(),this.handleClick(0)},methods:{getInfoTitle:function(){var e=this;$http.get("plugin.diy-queue.frontend.get-plugin-name.index").then(function(t){1==t.result?(e.titleInfo=t.data.plugin_name,e.fun.setWXTitle(e.titleInfo)):u.MessageBox.alert(t.msg)})},initData:function(){this.rewardsData={},this.recordsList=[],this.active=0,this.page=1,this.currentTabIndex=1,this.total_page=0,this.amount_id="",this.isLoadMore=!0},handleClick:function(e,t){this.amount_id="",this.recordsList=[],this.currentTabIndex!==e&&(this.currentTabIndex=e,this.url=1===e?"plugin.diy-queue.frontend.diy-queue.get-logs":"plugin.diy-queue.frontend.diy-queue.get-queues",this.getData())},showMore:function(e){e.show&&this.amount_id===e.id?e.show=!1:(this.amount_id=e.id,this.$set(e,"show",!0))},getIndex:function(){var e=this;$http.get("plugin.diy-queue.frontend.diy-queue.get-statistics",{},"加载中").then(function(t){1===t.result?e.rewardsData=t.data:Object(u.Toast)(t.msg)},function(e){console.log(e)})},getMember:function(){var e=this;$http.get("plugin.diy-queue.frontend.diy-queue.get-member").then(function(t){1===t.result?e.MemberData=t.data.member:Object(u.Toast)(t.msg)},function(e){console.log(e)})},getData:function(){var e=this;this.isLoadMore=!1,this.page=1,$http.get(this.url,{page:1},"加载中").then(function(t){1===t.result?(e.isLoadMore=!0,1===e.currentTabIndex?(e.total_page=t.data.logs.last_page,e.recordsList=t.data.logs.data):(e.total_page=t.data.queues.last_page,e.recordsList=t.data.queues.data),e.total_page||(e.total_page=0)):Object(u.Toast)(t.msg)},function(e){console.log(e)}).catch(function(e){console.error(e)})},getMoreData:function(){var e=this;this.isLoadMore=!1,this.page>=this.total_page||(this.page=this.page+1,$http.get(this.url,{page:this.page},"加载中").then(function(t){e.isLoadMore=!0;var n=[];1===t.result?(n=1===e.currentTabIndex?t.data.logs.data:t.data.queues.data,e.recordsList=e.recordsList.concat(n)):(e.page=e.page-1,e.isLoadMore=!1)},function(e){Object(u.Toast)(e.msg)}).catch(function(e){console.error(e)}))}},components:{cTitle:a.a}},s={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"custom_queue"}},[n("c-title",{attrs:{hide:!1,text:e.titleInfo}}),e._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"header_box"},[n("div",{staticClass:"img"},[n("img",{attrs:{src:e.MemberData.avatar_image}})]),e._v(" "),n("div",{staticClass:"head_name"},[n("span",[e._v(e._s(e.MemberData.nickname))])])]),e._v(" "),n("div",{staticClass:"reward_box"},[n("ul",{staticClass:"reward_a"},[n("li",[n("span",[e._v("¥")]),e._v(e._s(e.rewardsData.amountTotal||0))]),e._v(" "),n("li",[e._v("累计奖励")])]),e._v(" "),n("ul",{staticClass:"reward_b"},[n("li",[n("span",[e._v("¥")]),e._v(e._s(e.rewardsData.amountSurplusTotal||0))]),e._v(" "),n("li",[e._v("待奖励")])])]),e._v(" "),n("van-tabs",{on:{click:e.handleClick},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[n("van-tab",{attrs:{title:"权益队列"}},e._l(e.recordsList,function(t,a){return n("div",{key:a,staticClass:"queue_box"},[n("div",{staticClass:"queue_a"},[n("span",[e._v("权益排序："+e._s(t.sort))])]),e._v(" "),n("div",{staticClass:"queue_b"},[n("div",{staticClass:"queue_center"},[n("ul",{staticClass:"reward_queue_a"},[n("li",[n("span",[e._v("¥")]),e._v(e._s(t.amount))]),e._v(" "),n("li",[e._v("奖励金额")])]),e._v(" "),n("ul",{staticClass:"reward_queue_b"},[n("li",[n("span",[e._v("¥")]),e._v(e._s(t.finish_amount))]),e._v(" "),n("li",[e._v("已奖励")])]),e._v(" "),n("ul",{staticClass:"reward_queue_c"},[n("li",[e._v(e._s(t.status_name))])])])]),e._v(" "),n("div",{staticClass:"queue_c",on:{click:function(n){return e.showMore(t)}}},[n("span",[e._v("展示完整信息")]),e._v(" "),e.amount_id==t.id&&t.show?n("i",{staticClass:"iconfont icon-down"}):n("i",{staticClass:"iconfont icon-up"})]),e._v(" "),e.amount_id==t.id&&t.show?n("div",{staticClass:"button_box"},[n("ul",{staticClass:"queue_c_down"},[n("li",[n("span",[e._v("权益金额")]),e._v(" "),n("span",[e._v(e._s(t.amount))])]),e._v(" "),n("li",[n("span",[e._v("订单商品金额")]),e._v(" "),n("span",[e._v("¥"+e._s(t.goods_price))])]),e._v(" "),n("li",[n("span",[e._v("奖励比例：")]),e._v(" "),n("span",[e._v(e._s(t.ratio)+"%")])]),e._v(" "),n("li",[n("span",[e._v("时间：")]),e._v(" "),n("span",{staticClass:"time"},[e._v(e._s(t.created_at))])])])]):e._e()])}),0),e._v(" "),n("van-tab",{attrs:{title:"奖励记录"}},e._l(e.recordsList,function(t,a){return n("div",{key:a,staticClass:"queue_box"},[n("div",{staticClass:"queue_a"},[n("span",[e._v("奖励队列："+e._s(t.queue_id))]),e._v(" "),n("span",{staticClass:"sum"},[e._v("¥"+e._s(t.amount))])]),e._v(" "),n("div",{staticClass:"queue_b"},[t.has_one_queue?n("div",{staticClass:"queue_center"},[n("ul",{staticClass:"reward_queue_a"},[n("li",[n("span",[e._v("¥")]),e._v(e._s(t.has_one_queue.finish_amount))]),e._v(" "),n("li",[e._v("已奖励金额")])]),e._v(" "),n("ul",{staticClass:"reward_queue_b"},[n("li",[n("span",[e._v("¥")]),e._v(e._s(t.has_one_queue.surplus_amount))]),e._v(" "),n("li",[e._v("未奖励金额")])]),e._v(" "),n("ul",{staticClass:"reward_queue_c"},[n("li",[e._v(e._s(t.has_one_queue.status_name))])])]):e._e()]),e._v(" "),n("div",{staticClass:"queue_c",on:{click:function(n){return e.showMore(t)}}},[n("span",[e._v("展示完整信息")]),e._v(" "),e.amount_id==t.id&&t.show?n("i",{staticClass:"iconfont icon-down"}):n("i",{staticClass:"iconfont icon-up"})]),e._v(" "),e.amount_id==t.id&&t.show?n("div",{staticClass:"button_box"},[n("ul",{staticClass:"queue_c_down"},[t.has_one_order?n("li",[n("span",[e._v("订单编号")]),e._v(" "),n("span",[e._v(e._s(t.has_one_order.order_sn))])]):e._e(),e._v(" "),n("li",[n("span",[e._v("订单商品金额")]),e._v(" "),n("span",[e._v("¥"+e._s(t.goods_price))])]),e._v(" "),n("li",[n("span",[e._v("奖励比例：")]),e._v(" "),n("span",[e._v(e._s(t.ratio)+"%")])]),e._v(" "),n("li",[n("span",[e._v("时间：")]),e._v(" "),n("span",{staticClass:"time"},[e._v(e._s(t.created_at))])])])]):e._e()])}),0)],1)],1)],1)},staticRenderFns:[]};var i=n("VU/8")(o,s,!1,function(e){n("26du")},"data-v-28743f92",null);t.default=i.exports},RzRO:function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,"\n#custom_queue[data-v-28743f92] {\n  padding-top: 40px;\n}\n#custom_queue .content .header_box[data-v-28743f92] {\n    background: #fff;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    padding: 1.25rem 0.875rem;\n    border-bottom: solid 0.0625rem #ebebeb;\n}\n#custom_queue .content .header_box .img[data-v-28743f92] {\n      width: 3.5rem;\n      height: 3.5rem;\n      border-radius: 1.75rem;\n      overflow: hidden;\n      border: solid 0.0625rem #ebebeb;\n      margin-right: 0.625rem;\n      background-color: #f8f8f8;\n}\n#custom_queue .content .header_box .img img[data-v-28743f92] {\n        width: 100%;\n        height: 100%;\n}\n#custom_queue .content .header_box .head_name[data-v-28743f92] {\n      text-align: left;\n}\n#custom_queue .content .header_box .head_name span[data-v-28743f92] {\n        width: 17.5625rem;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        display: block;\n        font-size: 16px;\n        font-weight: bold;\n        line-height: 3rem;\n}\n#custom_queue .content .header_box .head_name .title[data-v-28743f92] {\n        color: #999;\n        font-size: 16px;\n        font-weight: normal;\n}\n#custom_queue .content .reward_box[data-v-28743f92] {\n    background: #fff;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    padding: 0.75rem 0;\n    margin-bottom: 0.625rem;\n}\n#custom_queue .content .reward_box .reward_a[data-v-28743f92],\n    #custom_queue .content .reward_box .reward_b[data-v-28743f92] {\n      width: 50%;\n      text-align: center;\n}\n#custom_queue .content .reward_box .reward_a li span[data-v-28743f92],\n      #custom_queue .content .reward_box .reward_b li span[data-v-28743f92] {\n        font-size: 14px;\n}\n#custom_queue .content .reward_box .reward_a li[data-v-28743f92]:first-child,\n      #custom_queue .content .reward_box .reward_b li[data-v-28743f92]:first-child {\n        height: 1.625rem;\n        line-height: 1.625rem;\n        font-size: 18px;\n        font-weight: bold;\n}\n#custom_queue .content .reward_box .reward_a li[data-v-28743f92]:last-child,\n      #custom_queue .content .reward_box .reward_b li[data-v-28743f92]:last-child {\n        line-height: 1.5rem;\n        color: #8c8c8c;\n        font-size: 14px;\n}\n#custom_queue .content .reward_box .reward_c[data-v-28743f92] {\n      width: 33.33%;\n      line-height: 3.125rem;\n      font-size: 16px;\n}\n#custom_queue .content .reward_box .reward_c li[data-v-28743f92] {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: end;\n            -ms-flex-pack: end;\n                justify-content: flex-end;\n        padding-right: 0.875rem;\n        width: 100%;\n        color: #8c8c8c;\n}\n#custom_queue .content .reward_box .reward_c li i[data-v-28743f92] {\n          font-size: 1.5rem;\n          line-height: 3.125rem;\n          color: #c9c9c9;\n          margin-left: 0.625rem;\n}\n#custom_queue .content .queue_box[data-v-28743f92] {\n    margin-bottom: 0.625rem;\n    background-color: #fff;\n}\n#custom_queue .content .queue_box .queue_a[data-v-28743f92] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      padding: 0.625rem 0.875rem;\n      line-height: 2.5rem;\n      font-size: 16px;\n}\n#custom_queue .content .queue_box .queue_a span[data-v-28743f92]:first-child {\n        font-weight: bold;\n}\n#custom_queue .content .queue_box .queue_a .sum[data-v-28743f92] {\n        color: #f15353;\n}\n#custom_queue .content .queue_box .queue_b .queue_center[data-v-28743f92] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n}\n#custom_queue .content .queue_box .queue_b .queue_center ul[data-v-28743f92] {\n        width: 33.33%;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n}\n#custom_queue .content .queue_box .queue_b .queue_center .reward_queue_a li[data-v-28743f92]:first-child,\n      #custom_queue .content .queue_box .queue_b .queue_center .reward_queue_b li[data-v-28743f92]:first-child {\n        font-size: 16px;\n        height: 1.625rem;\n        line-height: 1.625rem;\n        font-weight: bold;\n}\n#custom_queue .content .queue_box .queue_b .queue_center .reward_queue_a li:first-child span[data-v-28743f92],\n        #custom_queue .content .queue_box .queue_b .queue_center .reward_queue_b li:first-child span[data-v-28743f92] {\n          font-size: 14px;\n}\n#custom_queue .content .queue_box .queue_b .queue_center .reward_queue_a li[data-v-28743f92]:last-child,\n      #custom_queue .content .queue_box .queue_b .queue_center .reward_queue_b li[data-v-28743f92]:last-child {\n        line-height: 1.5rem;\n        color: #8c8c8c;\n        font-size: 14px;\n}\n#custom_queue .content .queue_box .queue_b .queue_center .reward_queue_c[data-v-28743f92] {\n        font-size: 16px;\n        color: #f15353;\n        text-align: center;\n        line-height: 3.125rem;\n}\n#custom_queue .content .queue_box .queue_c[data-v-28743f92] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      margin-top: 0.75rem;\n      height: 2.5rem;\n      line-height: 2.5rem;\n      text-align: center;\n      font-size: 16px;\n}\n#custom_queue .content .queue_box .queue_c i[data-v-28743f92] {\n        font-size: 1.5rem;\n        color: #666;\n}\n#custom_queue .content .queue_box .button_box[data-v-28743f92] {\n      padding: 0 0.875rem;\n}\n#custom_queue .content .queue_box .button_box button[data-v-28743f92] {\n        background: #fff;\n        color: #333;\n        font-size: 14px;\n        border: solid 0.0625rem #ccc;\n        border-radius: 1rem;\n        height: 1.625rem;\n        width: 7.5rem;\n        margin: 0 0.625rem;\n}\n#custom_queue .content .queue_box .queue_c_down[data-v-28743f92] {\n      margin-top: 0.75rem;\n      border-top: solid 0.0625rem #ebebeb;\n      padding: 0.625rem 0;\n      font-size: 14px;\n}\n#custom_queue .content .queue_box .queue_c_down li[data-v-28743f92] {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        line-height: 1.75rem;\n}\n#custom_queue .content .queue_box .queue_bottom[data-v-28743f92] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-pack: distribute;\n          justify-content: space-around;\n      margin-top: 0.625rem;\n}\n#custom_queue .content .queue_box .queue_bottom .button_side[data-v-28743f92] {\n        width: 7.5rem;\n        height: 1.875rem;\n        background-color: #fff;\n        color: #333;\n        font-size: 15px;\n        border: solid 0.0625rem #ebebeb;\n        border-radius: 1.5rem;\n}\n#custom_queue .content .queue_box .queue_bottom .button_line[data-v-28743f92] {\n        width: 19.25rem;\n        height: 1.875rem;\n        border-radius: 0.1875rem;\n        border: solid 0.0625rem #f15353;\n        color: #f15353;\n        font-size: 15px;\n}\n#custom_queue .content .queue_box .fade-enter-active[data-v-28743f92] {\n      -webkit-transition: 0.5s;\n      transition: 0.5s;\n}\n#custom_queue .content .queue_box .fade-enter[data-v-28743f92],\n    #custom_queue .content .queue_box .fade-leave-active[data-v-28743f92] {\n      opacity: 0;\n      height: 0;\n}\n",""])}});