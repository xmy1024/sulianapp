webpackJsonp([359],{"U+f/":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t("Pexp"),r=t("Tg7E"),s={mixins:[t("vsZy").a],data:function(){return{active:0,allData:{},member:{},rewards:{},name:{},rewards_type:1,recordsList:[],amount_id:"",isLoadMore:!0,page:1,total_page:0}},activated:function(){this.initData(),this.getData()},methods:{toPage:function(){this.$router.push(this.fun.getUrl("TaskCenter"))},tabHandel:function(e){this.rewards_type=e+1,this.initData(),this.getData()},showDetail:function(e){e.show&&this.amount_id===e.id?e.show=!1:(this.amount_id=e.id,this.$set(e,"show",!0))},getData:function(){var e=this;$http.post("plugin.team-rewards.frontend.controllers.rewards-center.index",{page:1,rewards_type:this.rewards_type}," ").then(function(a){1===a.result?(e.allData=a.data,e.member=e.allData.member,e.rewards=e.allData.statistics,e.name=e.allData.name,e.isLoadMore=!0,e.total_page=e.allData.page_list.last_page,e.total_page||(e.total_page=0),e.recordsList=e.allData.page_list.data,e.fun.setWXTitle(e.name.plugin_name)):Object(r.Toast)(a.msg)},function(e){console.log(e)})},getMoreData:function(){var e=this;this.isLoadMore=!1,this.page>=this.total_page||(this.page=this.page+1,$http.get("plugin.team-rewards.frontend.controllers.rewards-center.search",{page:this.page,rewards_type:this.rewards_type},"加载中").then(function(a){if(e.isLoadMore=!0,1===a.result){var t=a.data.data;e.recordsList=e.recordsList.concat(t)}else e.page=e.page-1,e.isLoadMore=!1},function(e){}))},initData:function(){this.recordsList=[],this.page=1,this.total_page=0,this.isLoadMore=!0,this.amount_id=""},goRewardsRecordDetail:function(){this.$router.push(this.fun.getUrl("RewardsRecordDetail"))}},components:{cTitle:n.a}},i={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"rewards_record"}},[t("c-title",{attrs:{hide:!1,text:e.name.plugin_name}}),e._v(" "),e.member.member?t("div",{staticClass:"header_box"},[t("div",{staticClass:"header"},[t("img",{attrs:{src:e.member.member.avatar_image}})]),e._v(" "),t("ul",{staticClass:"name"},[t("li",[e._v(e._s(e.member.member.nickname)+"[会员ID："+e._s(e.member.member.uid)+"]")]),e._v(" "),e.member.level?t("li",[e._v(e._s(e.member.level.level_name))]):e._e()]),e._v(" "),t("div",{staticClass:"task",on:{click:e.toPage}},[e._v("任务中心")])]):e._e(),e._v(" "),t("div",{staticClass:"rew_detail",on:{click:e.goRewardsRecordDetail}},[t("div",{staticClass:"left"},[e._v("\n               我的"+e._s(e.name.deposit)+"\n          ")]),e._v(" "),t("div",{staticClass:"right",staticStyle:{color:"#f15353"}},[e._v("\n              ￥"+e._s(e.member.deposit)+"\n          ")])]),e._v(" "),t("div",[t("ul",{staticClass:"today_bonus"},[t("li",{staticClass:"date"},[t("span",[e._v(e._s(e.rewards.today))]),e._v(" "),t("br"),e._v(" "),t("b",[e._v("今日")])]),e._v(" "),t("li",{staticClass:"date"},[t("span",[e._v(e._s(e.rewards.yesterday))]),e._v(" "),t("br"),e._v(" "),t("b",[e._v("昨日")])]),e._v(" "),t("li",{staticClass:"date"},[t("span",[e._v(e._s(e.rewards.week))]),e._v(" "),t("br"),e._v(" "),t("b",[e._v("本周")])]),e._v(" "),t("li",{staticClass:"mounth"},[t("span",[e._v(e._s(e.rewards.month))]),e._v(" "),t("br"),e._v(" "),t("b",[e._v("本月累计"+e._s(1===e.rewards_type?e.name.service_charge:e.name.difference_award))])]),e._v(" "),e._m(0)])]),e._v(" "),t("div",{staticClass:"money"},[t("ul",{staticClass:"gongge"},[t("li",[t("i",{staticClass:"iconfont icon-weitixian"}),e._v(" "),t("span",[e._v("未发放奖励")]),e._v(" "),t("b",[e._v(e._s(e.rewards.wait)),t("em",[e._v("元")])])]),e._v(" "),t("li",[t("i",{staticClass:"iconfont icon-yijiesuan"}),e._v(" "),t("span",[e._v("已发放奖励")]),e._v(" "),t("b",[e._v(e._s(e.rewards.complate)),t("em",[e._v("元")])])])])]),e._v(" "),t("van-tabs",{on:{click:e.tabHandel},model:{value:e.active,callback:function(a){e.active=a},expression:"active"}},[t("van-tab",{attrs:{title:e.name.service_charge}},[t("div",{staticClass:"list_box"},e._l(e.recordsList,function(a,n){return t("ul",{key:n,staticClass:"box"},[t("li",{on:{click:function(t){return t.stopPropagation(),e.showDetail(a)}}},[t("span",{staticClass:"order"},[e._v("订单号："+e._s(a.order_sn))]),e._v(" "),t("span",{staticClass:"sum"},[e._v(e._s(a.reward_price))])]),e._v(" "),t("li",{on:{click:function(t){return t.stopPropagation(),e.showDetail(a)}}},[t("span",{staticClass:"time"},[e._v("时间："+e._s(a.created_at))]),e._v(" "),t("span",{staticClass:"state"},[e._v(e._s(a.status_name))])]),e._v(" "),a.show?t("div",{staticClass:"show_hide_box"},[a.order&&a.order.belongs_to_member?t("div",{staticClass:"user_a"},[t("div",{staticClass:"header"},[t("img",{attrs:{src:a.order.belongs_to_member.avatar_image}})]),e._v(" "),t("ul",{staticClass:"name"},[t("li",[e._v(e._s(a.order.belongs_to_member.nickname))])])]):e._e(),e._v(" "),e._l(a.goods_arr,function(a,n){return t("div",{key:n,staticClass:"goods_a"},[t("div",{staticClass:"goods"},[t("img",{attrs:{src:a.thumb}})]),e._v(" "),t("ul",{staticClass:"name",staticStyle:{"-webkit-box-orient":"vertical"}},[t("li",[e._v(e._s(a.title))])]),e._v(" "),t("ul",{staticClass:"price"},[t("li",[e._v("¥"+e._s(a.price))]),e._v(" "),t("li",[e._v("×"+e._s(a.num))]),e._v(" "),t("li",{staticClass:"big"},[e._v("¥"+e._s(a.all_price))])])])})],2):e._e()])}),0)]),e._v(" "),t("van-tab",{attrs:{title:e.name.difference_award}},[t("div",{staticClass:"list_box"},e._l(e.recordsList,function(a,n){return t("ul",{key:n,staticClass:"box"},[t("li",{on:{click:function(t){return t.stopPropagation(),e.showDetail(a)}}},[t("span",{staticClass:"order"},[e._v("订单号："+e._s(a.order_sn))]),e._v(" "),t("span",{staticClass:"sum"},[e._v(e._s(a.reward_price))])]),e._v(" "),t("li",{on:{click:function(t){return t.stopPropagation(),e.showDetail(a)}}},[t("span",{staticClass:"time"},[e._v("时间："+e._s(a.created_at))]),e._v(" "),t("span",{staticClass:"state"},[e._v(e._s(a.status_name))])]),e._v(" "),a.show?t("div",{staticClass:"show_hide_box"},[a.order&&a.order.belongs_to_member?t("div",{staticClass:"user_a"},[t("div",{staticClass:"header"},[t("img",{attrs:{src:a.order.belongs_to_member.avatar_image}})]),e._v(" "),t("ul",{staticClass:"name"},[t("li",[e._v(e._s(a.order.belongs_to_member.nickname))])])]):e._e(),e._v(" "),e._l(a.goods_arr,function(a,n){return t("div",{key:n,staticClass:"goods_a"},[t("div",{staticClass:"goods"},[t("img",{attrs:{src:a.thumb}})]),e._v(" "),t("ul",{staticClass:"name",staticStyle:{"-webkit-box-orient":"vertical"}},[t("li",[e._v(e._s(a.title))])]),e._v(" "),t("ul",{staticClass:"price"},[t("li",[e._v("¥"+e._s(a.price))]),e._v(" "),t("li",[e._v("×"+e._s(a.num))]),e._v(" "),t("li",{staticClass:"big"},[e._v("¥"+e._s(a.all_price))])])])})],2):e._e()])}),0)])],1)],1)},staticRenderFns:[function(){var e=this.$createElement,a=this._self._c||e;return a("li",{staticClass:"line"},[a("div",{staticClass:"careat"})])}]};var o=t("VU/8")(s,i,!1,function(e){t("UaaR")},"data-v-65691b51",null);a.default=o.exports},UaaR:function(e,a,t){var n=t("m3og");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);t("rjj0")("51180792",n,!0,{})},m3og:function(e,a,t){(e.exports=t("FZ+f")(!1)).push([e.i,"\n#rewards_record[data-v-65691b51] {\n  padding-top: 40px;\n}\n#rewards_record .header_box[data-v-65691b51] {\n    background: #f15353;\n    color: #fff;\n    padding: 1.25rem 0.875rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n#rewards_record .header_box .header[data-v-65691b51] {\n      width: 3.25rem;\n      height: 3.25rem;\n      border: solid 0.125rem #fff;\n      margin-right: 0.625rem;\n      overflow: hidden;\n      border-radius: 3.75rem;\n      background: #f2f2f2;\n}\n#rewards_record .header_box .header img[data-v-65691b51] {\n        width: 100%;\n}\n#rewards_record .header_box .name[data-v-65691b51] {\n      width: 12.5rem;\n      text-align: left;\n}\n#rewards_record .header_box .name li[data-v-65691b51]:first-child {\n        text-align: left;\n        font-size: 16px;\n        line-height: 1.875rem;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n}\n#rewards_record .header_box .name .name_b[data-v-65691b51] {\n        font-size: 14px;\n        line-height: 1.375rem;\n        text-align: left;\n}\n#rewards_record .header_box .task[data-v-65691b51] {\n      font-size: 13px;\n      background: rgba(0, 0, 0, 0.2);\n      position: absolute;\n      right: 0.875rem;\n      padding: 0.25rem 0.625rem;\n      border-radius: 1rem;\n}\n#rewards_record .info_box[data-v-65691b51] {\n    background: #fff;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n#rewards_record .info_box .left[data-v-65691b51], #rewards_record .info_box .right[data-v-65691b51] {\n      width: 50%;\n      padding: 0.625rem 0.875rem;\n}\n#rewards_record .info_box .left li[data-v-65691b51], #rewards_record .info_box .right li[data-v-65691b51] {\n        line-height: 1.5rem;\n        text-align: left;\n        font-size: 14px;\n}\n#rewards_record .info_box .left li span[data-v-65691b51], #rewards_record .info_box .right li span[data-v-65691b51] {\n          font-size: 24px;\n}\n#rewards_record .info_box .left li[data-v-65691b51]:last-child, #rewards_record .info_box .right li[data-v-65691b51]:last-child {\n        color: #8c8c8c;\n}\n#rewards_record .rew_detail[data-v-65691b51] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    height: 4rem;\n    padding: 0.4rem;\n    font-size: 18px;\n    background: #fff;\n}\n#rewards_record .today_bonus[data-v-65691b51] {\n    margin-top: 0.625rem;\n    width: 100%;\n    height: 5.125rem;\n    background: #fff;\n    padding: 1rem 0;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    position: relative;\n}\n#rewards_record .today_bonus li.line[data-v-65691b51] {\n      position: absolute;\n      width: 0.0625rem;\n      height: 3.25rem;\n      background: #ddd;\n      top: 1rem;\n      right: 34%;\n}\n#rewards_record .today_bonus li.line .careat[data-v-65691b51] {\n        width: 0.375rem;\n        height: 0.375rem;\n        border: 0.0625rem solid #ddd;\n        border-left: 0;\n        border-bottom: 0;\n        -webkit-transform: rotate(45deg);\n        transform: rotate(45deg);\n        background: #fff;\n        position: absolute;\n        top: 1.4375rem;\n        right: -0.1875rem;\n}\n#rewards_record .today_bonus li[data-v-65691b51] {\n      text-align: center;\n      float: left;\n}\n#rewards_record .today_bonus li span[data-v-65691b51] {\n        font-size: 17px;\n        line-height: 1.625rem;\n        margin-bottom: 0.625rem;\n        display: inline-block;\n}\n#rewards_record .today_bonus li b[data-v-65691b51] {\n        font-size: 11px;\n        color: #333;\n}\n#rewards_record .today_bonus .date[data-v-65691b51] {\n      width: 22%;\n}\n#rewards_record .today_bonus .date span[data-v-65691b51] {\n        color: #ffa800;\n}\n#rewards_record .today_bonus li[data-v-65691b51]:first-child,\n    #rewards_record .today_bonus li[data-v-65691b51]:nth-child(2) {\n      border-right: 0.0625rem solid #e2e2e2;\n}\n#rewards_record .today_bonus .mounth[data-v-65691b51] {\n      width: 33%;\n}\n#rewards_record .today_bonus .mounth span[data-v-65691b51] {\n        color: #fc6a70;\n}\n#rewards_record .money[data-v-65691b51] {\n    margin-top: 0.625rem;\n    margin-bottom: 0.625rem;\n}\n#rewards_record .money .gongge[data-v-65691b51] {\n      width: 100%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      background: #fff;\n      -webkit-column-count: 3;\n         -moz-column-count: 3;\n              column-count: 3;\n      padding-bottom: 0.625rem;\n      padding-top: 0.625rem;\n}\n#rewards_record .money .gongge li[data-v-65691b51] {\n        width: 50%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        text-align: center;\n        font-size: 12px;\n}\n#rewards_record .money .gongge li i[data-v-65691b51] {\n          -webkit-box-flex: 0;\n              -ms-flex: 0 0 1.75rem;\n                  flex: 0 0 1.75rem;\n          font-size: 26px;\n          color: #999;\n          display: inline-block;\n          margin-bottom: 0.375rem;\n          width: 100%;\n}\n#rewards_record .money .gongge li span[data-v-65691b51] {\n          -webkit-box-flex: 0;\n              -ms-flex: 0 0 1.4rem;\n                  flex: 0 0 1.4rem;\n          color: #333;\n          font-size: 12px;\n}\n#rewards_record .money .gongge li b[data-v-65691b51] {\n          overflow: hidden;\n          text-overflow: ellipsis;\n          white-space: nowrap;\n          color: #f15353;\n          font-size: 16px;\n}\n#rewards_record .list_box .box[data-v-65691b51] {\n    background: #fff;\n    padding: 0.625rem 0;\n    border-bottom: solid 0.0625rem #ebebeb;\n}\n#rewards_record .list_box .box li[data-v-65691b51] {\n      line-height: 1.875rem;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      padding: 0 0.875rem;\n      font-size: 15px;\n}\n#rewards_record .list_box .box li .sum[data-v-65691b51] {\n        color: #f15353;\n}\n#rewards_record .list_box .box li .time[data-v-65691b51] {\n        font-size: 12px;\n        color: #8c8c8c;\n}\n#rewards_record .list_box .show_hide_box[data-v-65691b51] {\n    padding: 0 0.875rem;\n    background: #fff;\n    margin-bottom: 0.625rem;\n}\n#rewards_record .list_box .show_hide_box .user_a[data-v-65691b51] {\n      padding: 0.625rem 0;\n      border-bottom: solid 0.0625rem #ebebeb;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n}\n#rewards_record .list_box .show_hide_box .user_a .header[data-v-65691b51] {\n        width: 2.5rem;\n        height: 2.5rem;\n        overflow: hidden;\n        background: #f2f2f2;\n        margin-right: 10px;\n}\n#rewards_record .list_box .show_hide_box .user_a .header img[data-v-65691b51] {\n          width: 100%;\n}\n#rewards_record .list_box .show_hide_box .user_a .name[data-v-65691b51] {\n        text-align: left;\n}\n#rewards_record .list_box .show_hide_box .user_a .name li[data-v-65691b51] {\n          line-height: 1.25rem;\n}\n#rewards_record .list_box .show_hide_box .user_a .name li[data-v-65691b51]:last-child {\n          color: #8c8c8c;\n          font-size: 12px;\n}\n#rewards_record .list_box .show_hide_box .goods_a[data-v-65691b51] {\n      padding: 0.625rem 0;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n}\n#rewards_record .list_box .show_hide_box .goods_a .goods[data-v-65691b51] {\n        width: 3.75rem;\n        height: 3.75rem;\n        overflow: hidden;\n        background: #f2f2f2;\n        margin-right: 0.625rem;\n}\n#rewards_record .list_box .show_hide_box .goods_a .goods img[data-v-65691b51] {\n          width: 100%;\n}\n#rewards_record .list_box .show_hide_box .goods_a .name[data-v-65691b51] {\n        width: 12.5rem;\n        text-align: left;\n        max-height: 2.5rem;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        display: -webkit-box;\n        -webkit-box-orient: vertical;\n        -webkit-line-clamp: 2;\n}\n#rewards_record .list_box .show_hide_box .goods_a .price[data-v-65691b51] {\n        width: 4.75rem;\n        text-align: right;\n        font-size: 12px;\n        color: #8c8c8c;\n}\n#rewards_record .list_box .show_hide_box .goods_a .price .big[data-v-65691b51] {\n          color: #333;\n          font-size: 15px;\n          margin-top: 0.375rem;\n}\n",""])}});