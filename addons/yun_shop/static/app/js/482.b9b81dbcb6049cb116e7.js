webpackJsonp([482],{YYIF:function(e,t,n){var a=n("oclD");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("5c8a3d1c",a,!0,{})},htNu:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("Pexp"),i=n("Tg7E"),o=document.documentElement,s=document.body,r={data:function(){return{show1:!1,show2:!1,show3:!1,show4:!1,nickname:"",avatar:"",summarizing:{},getDataApi:"",rewardList:[],activeName:"shop",chooseName:"queue",status:"",chooseId:"",chooseRatio:"",msg:"",typeData:{},WXtitle:"",isLoadMore:!0,page:1,total_page:0,type:"",convertType:"",convertTypeId:0,convertTypeUnit:0,convertTypeExchange_count:0,exchangeLogs:{},exchange_name:""}},activated:function(){this.getTitle(),this.initData(),this.getData(this.activeName,"plugin.share-chain.frontend.queue.getList"),this.getUser(),this.getHomeInfo(),window.addEventListener("scroll",this.handleScroll)},created:function(){this.getName()},deactivated:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{toDetail:function(){this.$router.push(this.fun.getUrl("RewardDetail"))},toProcess:function(e){this.$router.push(this.fun.getUrl("RewardProcess",{source_code:this.activeName,queue_id:e.id}))},showComplete:function(e){this.$set(e,"show",!0)},getName:function(){var e=this;$http.get("plugin.share-chain.frontend.exchange-name.index",{}," ").then(function(t){1===t.result?e.exchange_name=t.data.exchange_name:Object(i.Toast)(t.msg)},function(e){console.log(e)})},getTitle:function(){var e=this;$http.get("plugin.share-chain.frontend.plugin-name.index",{},"兑换中...").then(function(t){1===t.result?(e.WXtitle=t.data.plugin_name,e.fun.setWXTitle(e.WXtitle)):Object(i.Toast)(t.msg)},function(e){console.log(e)})},chooseType:function(e){1===e.code?(this.convertType=this.typeData.modules.point.name,this.convertTypeId=this.typeData.modules.point.code,this.convertTypeUnit=this.typeData.modules.point.unit,this.convertTypeExchange_count=this.typeData.modules.point.exchange_count):2===e.code&&(this.convertType=this.typeData.modules.love.name,this.convertTypeId=this.typeData.modules.love.code,this.convertTypeUnit=this.typeData.modules.love.unit,this.convertTypeExchange_count=this.typeData.modules.love.exchange_count)},exchange:function(e){var t=this;this.chooseId=e.id,this.convertType="",this.convertTypeId=0,this.convertTypeUnit=0,this.convertTypeExchange_count=0,$http.get("plugin.share-chain.frontend.exchange.index",{source_code:t.activeName,queue_id:e.id},"加载中...").then(function(e){1===e.result?(t.show3=!0,t.typeData=e.data):Object(i.Toast)(e.msg)},function(e){console.log(e)})},SureExchange:function(){var e=this;$http.get("plugin.share-chain.frontend.exchange.handle",{source_code:e.activeName,queue_id:e.chooseId,exchange_code:e.convertTypeId},"兑换中...").then(function(t){1===t.result?(e.show3=!1,e.getData(e.activeName,"plugin.share-chain.frontend.queue.getList"),Object(i.Toast)(t.msg)):(e.show3=!1,Object(i.Toast)(t.msg))},function(e){console.log(e)})},exchangeLog:function(e){var t=this;$http.get("plugin.share-chain.frontend.exchange.log",{source_code:t.activeName,queue_id:e.id},"加载中...").then(function(e){1===e.result?(t.show4=!0,t.exchangeLogs=e.data):Object(i.Toast)(e.msg)},function(e){console.log(e)})},luckyDraw:function(e){this.show1=!0,this.chooseId=e.id,this.chooseRatio=e.ratio},sureTake:function(e){var t=this;$http.get("plugin.share-chain.frontend.lucky.handle",{source_code:t.activeName,queue_id:t.chooseId},"抽奖中...").then(function(e){1===e.result?(t.show1=!1,t.show2=!0,t.msg=e.data.msg,t.getData(t.activeName,"plugin.share-chain.frontend.queue.getList")):(t.show1=!1,Object(i.Toast)(e.msg))},function(e){console.log(e)})},getUser:function(){var e=this;$http.get("plugin.share-chain.frontend.member.getInfo",{},"加载中...").then(function(t){1===t.result?(e.nickname=t.data.nickname,e.avatar=t.data.avatar):Object(i.Toast)(t.msg)},function(e){console.log(e)})},getHomeInfo:function(){var e=this;$http.get("plugin.share-chain.frontend.center.statistics",{},"加载中...").then(function(t){1===t.result?e.summarizing=t.data:Object(i.Toast)(t.msg)},function(e){console.log(e)})},handleClick1:function(e){this.rewardList=[],this.isLoadMore=!0,"queue"===this.chooseName?this.getData(this.activeName,"plugin.share-chain.frontend.queue.getList"):"record"===this.chooseName&&this.getData("","plugin.share-chain.frontend.log.getList")},handleClick:function(e){this.rewardList=[],this.isLoadMore=!0,this.getData(this.activeName,"plugin.share-chain.frontend.queue.getList")},getData:function(e,t){this.getDataApi=t,this.status=e;var n=this,a={};e&&(a={source_code:e}),n.isLoadMore=!1,n.page=1,$http.get(t,a,"加载中...").then(function(e){1===e.result?(n.isLoadMore=!0,n.total_page=e.data.last_page,n.total_page||(n.total_page=0),n.rewardList=e.data.data):(Object(i.Toast)(e.msg),n.$router.push(n.fun.getUrl("extension",{})))},function(e){console.log(e)})},getMoreData:function(){var e=this;e.isLoadMore=!1;var t={};t=this.status?{source_code:status,page:e.page}:{page:e.page},this.page>=this.total_page||(this.page=this.page+1,$http.get(this.getDataApi,t,"加载中...").then(function(t){if(e.isLoadMore=!0,1!==t.result)return e.page=e.page-1,void(e.isLoadMore=!1);var n=t.data.data;e.rewardList=e.rewardList.concat(n)},function(e){}))},getScrollTop:function(){var e=0;return o&&o.scrollTop?e=o.scrollTop:s&&(e=s.scrollTop),e},getClientHeight:function(){return s.clientHeight&&o.clientHeight?Math.min(s.clientHeight,o.clientHeight):Math.max(s.clientHeight,o.clientHeight)},getScrollHeight:function(){return Math.max(s.scrollHeight,o.scrollHeight)},handleScroll:function(){this.getScrollTop()+this.getClientHeight()+5>this.getScrollHeight()&&(this.isLoadMore?this.getMoreData():console.log("没有更多数据"))},initData:function(){this.show1=!1,this.show2=!1,this.show3=!1,this.show4=!1,this.nickname="",this.avatar="",this.summarizing={},this.status="",this.chooseId="",this.chooseRatio="",this.msg="",this.activeName="shop",this.chooseName="queue",this.page=1,this.total_page=0,this.isLoadMore=!0,this.rewardList=[]}},components:{cTitle:a.a}},u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:[3==this.fun.getPhoneEnv()?"pcStyle":""],attrs:{id:"reward_queue"}},[n("c-title",{attrs:{hide:!1,text:e.WXtitle,tolink:"IntegralGetRecord"}}),e._v(" "),n("div",{staticStyle:{height:"40px"}}),e._v(" "),n("div",{attrs:{id:"reward_header"}},[n("div",{staticClass:"header_box"},[n("div",{staticClass:"img"},[n("img",{attrs:{src:e.avatar}})]),e._v(" "),n("div",{staticClass:"head_name"},[n("span",[e._v(e._s(e.nickname))])])]),e._v(" "),n("div",{staticClass:"reward_box"},[n("ul",{staticClass:"reward_a"},[n("li",[n("span",[e._v("¥")]),e._v(e._s(e.summarizing.finish_total))]),e._v(" "),n("li",[e._v("累计奖励")])]),e._v(" "),n("ul",{staticClass:"reward_b"},[n("li",[n("span",[e._v("¥")]),e._v(e._s(e.summarizing.surplus_total))]),e._v(" "),n("li",[e._v("待奖励")])]),e._v(" "),n("ul",{staticClass:"reward_c",on:{click:e.toDetail}},[e._m(0)])])]),e._v(" "),n("div",{attrs:{id:"queue_content"}},[n("mt-navbar",{model:{value:e.chooseName,callback:function(t){e.chooseName=t},expression:"chooseName"}},[n("mt-tab-item",{attrs:{id:"queue"},nativeOn:{click:function(t){return e.handleClick1(t)}}},[e._v("奖励队列")]),e._v(" "),n("mt-tab-item",{attrs:{id:"record"},nativeOn:{click:function(t){return e.handleClick1(t)}}},[e._v("奖励记录")])],1),e._v(" "),n("mt-tab-container",{model:{value:e.chooseName,callback:function(t){e.chooseName=t},expression:"chooseName"}},[n("mt-tab-container-item",{attrs:{id:"queue"}},["queue"===e.chooseName?n("div",{attrs:{id:"tabs_b"}},[n("mt-navbar",{directives:[{name:"show",rawName:"v-show",value:e.summarizing.goods_queue_count>-1,expression:"summarizing.goods_queue_count>-1"}],model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[n("mt-tab-item",{attrs:{id:"shop"},nativeOn:{click:function(t){return e.handleClick(t)}}},[e._v(e._s("商品（"+e.summarizing.goods_queue_count+"）"))]),e._v(" "),n("mt-tab-item",{attrs:{id:"store"},nativeOn:{click:function(t){return e.handleClick(t)}}},[e._v(e._s("门店（"+e.summarizing.store_queue_count+"）"))]),e._v(" "),n("mt-tab-item",{attrs:{id:"cashier"},nativeOn:{click:function(t){return e.handleClick(t)}}},[e._v(e._s("收银台（"+e.summarizing.cashier_queue_count+"）"))])],1),e._v(" "),n("mt-tab-container",{directives:[{name:"show",rawName:"v-show",value:e.summarizing.goods_queue_count>-1,expression:"summarizing.goods_queue_count>-1"}],model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[n("mt-tab-container-item",{attrs:{id:"shop"}},e._l(e.rewardList,function(t,a){return n("div",{key:a,staticClass:"queue_box"},[n("div",{staticClass:"queue_a"},[n("span",[e._v("奖励队列："+e._s(t.id))])]),e._v(" "),n("div",{staticClass:"queue_b"},[n("div",{staticClass:"queue_top"},[n("div",{staticClass:"img"},[n("img",{attrs:{src:t.source_thumb}})]),e._v(" "),n("span",[e._v(e._s(t.source_name))]),e._v(" "),t.button.lucky_draw?n("yd-button",{staticClass:"btn_a",nativeOn:{click:function(n){return e.luckyDraw(t)}}},[e._v("\n                      "+e._s(t.button.lucky_draw.name)+"\n                    ")]):e._e()],1),e._v(" "),n("div",{staticClass:"queue_center"},[n("ul",{staticClass:"reward_queue_a"},[n("li",[n("span",[e._v("¥")]),e._v(e._s(t.amount_total))]),e._v(" "),n("li",[e._v("奖励数量")])]),e._v(" "),n("ul",{staticClass:"reward_queue_b"},[n("li",[n("span",[e._v("¥")]),e._v(e._s(t.amount_finish))]),e._v(" "),n("li",[e._v("已奖励")])]),e._v(" "),n("ul",{staticClass:"reward_queue_c"},[n("li",[e._v(e._s(t.status_name))])])])]),e._v(" "),t.show?e._e():n("div",{staticClass:"queue_c",on:{click:function(n){return e.showComplete(t)}}},[n("span",[e._v("展示完整信息")]),e._v(" "),n("i",{staticClass:"iconfont icon-down"})]),e._v(" "),n("transition",{attrs:{name:"fade"}},[t.show?n("div",{staticClass:"button_box"},[n("ul",{staticClass:"queue_c_down"},[n("li",[n("span",[e._v("订单编号")]),e._v(" "),n("span",[e._v(e._s(t.order_sn))])]),e._v(" "),n("li",[n("span",[e._v("实付款")]),e._v(" "),n("span",[e._v("¥"+e._s(t.price))])]),e._v(" "),n("li",[n("span",[e._v("奖励比例：")]),e._v(" "),n("span",[e._v(e._s(t.ratio))])])]),e._v(" "),n("div",{staticClass:"queue_bottom"},[t.button.exchange?n("yd-button",{staticClass:"button_side",nativeOn:{click:function(n){return e.exchange(t)}}},[e._v("\n                        "+e._s(t.button.exchange.name)+"\n                      ")]):e._e(),e._v(" "),t.button.process?n("yd-button",{staticClass:"button_side",nativeOn:{click:function(n){return e.toProcess(t)}}},[e._v("\n                        "+e._s(t.button.process.name)+"\n                      ")]):e._e(),e._v(" "),t.button.exchange_log?n("yd-button",{staticClass:"button_side",nativeOn:{click:function(n){return e.exchangeLog(t)}}},[e._v("\n                        "+e._s(t.button.exchange_log.name)+"\n                      ")]):e._e()],1)]):e._e()])],1)}),0),e._v(" "),n("mt-tab-container-item",{attrs:{id:"store"}},e._l(e.rewardList,function(t,a){return n("div",{key:a,staticClass:"queue_box"},[n("div",{staticClass:"queue_a"},[n("span",[e._v("奖励队列："+e._s(t.id))])]),e._v(" "),n("div",{staticClass:"queue_b"},[n("div",{staticClass:"queue_top"},[n("div",{staticClass:"img"},[n("img",{attrs:{src:t.source_thumb}})]),e._v(" "),n("span",[e._v(e._s(t.source_name))]),e._v(" "),t.button.lucky_draw?n("yd-button",{staticClass:"btn_a",nativeOn:{click:function(n){return e.luckyDraw(t)}}},[e._v("\n                      "+e._s(t.button.lucky_draw.name)+"\n                    ")]):e._e()],1),e._v(" "),n("div",{staticClass:"queue_center"},[n("ul",{staticClass:"reward_queue_a"},[n("li",[n("span",[e._v("¥")]),e._v(e._s(t.amount_total))]),e._v(" "),n("li",[e._v("奖励数量")])]),e._v(" "),n("ul",{staticClass:"reward_queue_b"},[n("li",[n("span",[e._v("¥")]),e._v(e._s(t.amount_finish))]),e._v(" "),n("li",[e._v("已奖励")])]),e._v(" "),n("ul",{staticClass:"reward_queue_c"},[n("li",[e._v(e._s(t.status_name))])])])]),e._v(" "),t.show?e._e():n("div",{staticClass:"queue_c",on:{click:function(n){return e.showComplete(t)}}},[n("span",[e._v("展示完整信息")]),e._v(" "),n("i",{staticClass:"iconfont icon-down"})]),e._v(" "),n("transition",{attrs:{name:"fade"}},[t.show?n("div",{staticClass:"button_box"},[n("ul",{staticClass:"queue_c_down"},[n("li",[n("span",[e._v("订单编号")]),e._v(" "),n("span",[e._v(e._s(t.order_sn))])]),e._v(" "),n("li",[n("span",[e._v("实付款")]),e._v(" "),n("span",[e._v("¥"+e._s(t.price))])]),e._v(" "),n("li",[n("span",[e._v("奖励比例：")]),e._v(" "),n("span",[e._v(e._s(t.ratio))])])]),e._v(" "),n("div",{staticClass:"queue_bottom"},[t.button.exchange?n("yd-button",{staticClass:"button_side",nativeOn:{click:function(n){return e.exchange(t)}}},[e._v("\n                        "+e._s(t.button.exchange.name)+"\n                      ")]):e._e(),e._v(" "),t.button.process?n("yd-button",{staticClass:"button_side",nativeOn:{click:function(n){return e.toProcess(t)}}},[e._v("\n                        "+e._s(t.button.process.name)+"\n                      ")]):e._e(),e._v(" "),t.button.exchange_log?n("yd-button",{staticClass:"button_side",nativeOn:{click:function(n){return e.exchangeLog(t)}}},[e._v("\n                        "+e._s(t.button.exchange_log.name)+"\n                      ")]):e._e()],1)]):e._e()])],1)}),0),e._v(" "),n("mt-tab-container-item",{attrs:{id:"cashier"}},e._l(e.rewardList,function(t,a){return n("div",{key:a,staticClass:"queue_box"},[n("div",{staticClass:"queue_a"},[n("span",[e._v("奖励队列："+e._s(t.id))])]),e._v(" "),n("div",{staticClass:"queue_b"},[n("div",{staticClass:"queue_top"},[n("div",{staticClass:"img"},[n("img",{attrs:{src:t.source_thumb}})]),e._v(" "),n("span",[e._v(e._s(t.source_name))]),e._v(" "),t.button.lucky_draw?n("yd-button",{staticClass:"btn_a",nativeOn:{click:function(n){return e.luckyDraw(t)}}},[e._v("\n                      "+e._s(t.button.lucky_draw.name)+"\n                    ")]):e._e()],1),e._v(" "),n("div",{staticClass:"queue_center"},[n("ul",{staticClass:"reward_queue_a"},[n("li",[n("span",[e._v("¥")]),e._v(e._s(t.amount_total))]),e._v(" "),n("li",[e._v("奖励数量")])]),e._v(" "),n("ul",{staticClass:"reward_queue_b"},[n("li",[n("span",[e._v("¥")]),e._v(e._s(t.amount_finish))]),e._v(" "),n("li",[e._v("已奖励")])]),e._v(" "),n("ul",{staticClass:"reward_queue_c"},[n("li",[e._v(e._s(t.status_name))])])])]),e._v(" "),t.show?e._e():n("div",{staticClass:"queue_c",on:{click:function(n){return e.showComplete(t)}}},[n("span",[e._v("展示完整信息")]),e._v(" "),n("i",{staticClass:"iconfont icon-down"})]),e._v(" "),n("transition",{attrs:{name:"fade"}},[t.show?n("div",{staticClass:"button_box"},[n("ul",{staticClass:"queue_c_down"},[n("li",[n("span",[e._v("订单编号")]),e._v(" "),n("span",[e._v(e._s(t.order_sn))])]),e._v(" "),n("li",[n("span",[e._v("实付款")]),e._v(" "),n("span",[e._v("¥"+e._s(t.price))])]),e._v(" "),n("li",[n("span",[e._v("奖励队列：")]),e._v(" "),n("span",[e._v(e._s(t.id))])])]),e._v(" "),n("div",{staticClass:"queue_bottom"},[t.button.exchange?n("yd-button",{staticClass:"button_side",nativeOn:{click:function(n){return e.exchange(t)}}},[e._v("\n                        "+e._s(t.button.exchange.name)+"\n                      ")]):e._e(),e._v(" "),t.button.process?n("yd-button",{staticClass:"button_side",nativeOn:{click:function(n){return e.toProcess(t)}}},[e._v("\n                        "+e._s(t.button.process.name)+"\n                      ")]):e._e(),e._v(" "),t.button.exchange_log?n("yd-button",{staticClass:"button_side",nativeOn:{click:function(n){return e.exchangeLog(t)}}},[e._v("\n                        "+e._s(t.button.exchange_log.name)+"\n                      ")]):e._e()],1)]):e._e()])],1)}),0)],1)],1):e._e()]),e._v(" "),n("mt-tab-container-item",{attrs:{id:"record"}},e._l(e.rewardList,function(t,a){return"record"===e.chooseName?n("div",{key:a,staticClass:"queue_box"},[n("div",{staticClass:"queue_a"},[n("span",[e._v("奖励队列："+e._s(t.queue_id))])]),e._v(" "),n("div",{staticClass:"queue_b"},[n("div",{staticClass:"queue_top"},[n("div",{staticClass:"img"},[n("img",{attrs:{src:t.source_thumb}})]),e._v(" "),n("span",[e._v(e._s(t.source_name))]),e._v(" "),n("span",{staticClass:"money"},[e._v("¥"+e._s(t.amount))])]),e._v(" "),n("div",{staticClass:"queue_center"},[n("ul",{staticClass:"reward_queue_a"},[n("li",[n("span",[e._v("¥")]),e._v(e._s(t.amount_finish))]),e._v(" "),n("li",[e._v("已奖励数量")])]),e._v(" "),n("ul",{staticClass:"reward_queue_b"},[n("li",[n("span",[e._v("¥")]),e._v(e._s(t.amount_surplus))]),e._v(" "),n("li",[e._v("未奖励数量")])]),e._v(" "),n("ul",{staticClass:"reward_queue_c"},[n("li",[e._v(e._s(t.status_name))])])])]),e._v(" "),t.show?e._e():n("div",{staticClass:"queue_c",on:{click:function(n){return e.showComplete(t)}}},[n("span",[e._v("展示完整信息")]),e._v(" "),n("i",{staticClass:"iconfont icon-down"})]),e._v(" "),n("transition",{attrs:{name:"fade"}},[t.show?n("ul",{staticClass:"queue_c_down"},[n("li",[n("span",[e._v("订单编号")]),e._v(" "),n("span",[e._v(e._s(t.order_sn))])]),e._v(" "),n("li",[n("span",[e._v("实付款")]),e._v(" "),n("span",[e._v("¥"+e._s(t.price))])]),e._v(" "),n("li",[n("span",[e._v("奖励比例：")]),e._v(" "),n("span",[e._v(e._s(t.ratio))])])]):e._e()])],1):e._e()}),0)],1)],1),e._v(" "),n("yd-popup",{attrs:{position:"bottom",height:"60%"},model:{value:e.show3,callback:function(t){e.show3=t},expression:"show3"}},[n("div",{staticClass:"queue_type"},[n("h1",[e._v("兑换类型")]),e._v(" "),n("ul",{staticClass:"selete"},[n("li",[e._v("兑换类型：")]),e._v(" "),n("li",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.convertType,expression:"convertType"}],attrs:{type:"text",disabled:"",placeholder:"请选择"},domProps:{value:e.convertType},on:{input:function(t){t.target.composing||(e.convertType=t.target.value)}}})])]),e._v(" "),e.typeData.modules?n("ul",{staticClass:"type"},[e.typeData.modules.love?n("li",{on:{click:function(t){return e.chooseType(e.typeData.modules.love)}}},[n("span",[e._v(e._s(e.typeData.modules.love.name))]),e._v(" "),n("span",{class:2===e.convertTypeId?"circle choose":"circle"})]):e._e(),e._v(" "),e.typeData.modules.point?n("li",{on:{click:function(t){return e.chooseType(e.typeData.modules.point)}}},[n("span",[e._v(e._s(e.typeData.modules.point.name))]),e._v(" "),n("span",{class:1===e.convertTypeId?"circle choose":"circle"})]):e._e()]):e._e(),e._v(" "),n("ul",{staticClass:"queue_info"},[n("li",[e._v("可用兑换数量："+e._s(e.typeData.exchange_amount)+e._s(e.exchange_name||"元"))]),e._v(" "),n("li",{directives:[{name:"show",rawName:"v-show",value:e.convertType,expression:"convertType"}]},[e._v("当前兑换比例：1"+e._s(e.exchange_name||"元")+"="+e._s(e.convertTypeUnit)+e._s(e.convertType))]),e._v(" "),n("li",{directives:[{name:"show",rawName:"v-show",value:e.convertType,expression:"convertType"}]},[e._v("可兑换："+e._s(e.convertTypeExchange_count)+e._s(e.convertType))])]),e._v(" "),n("yd-button",{staticClass:"queue_btn",nativeOn:{click:function(t){return e.SureExchange(t)}}},[e._v("确认兑换")])],1)]),e._v(" "),n("yd-popup",{attrs:{position:"bottom",height:"60%"},model:{value:e.show1,callback:function(t){e.show1=t},expression:"show1"}},[n("div",{staticClass:"prize_box"},[n("h1",[e._v("抽奖提示")]),e._v(" "),n("ul",{staticClass:"prize_content"},[n("li",[e._v("当前默认奖励比例："+e._s(e.chooseRatio)+"。")]),e._v(" "),n("li",[e._v("如果您使用抽奖权益，最终奖励比例将以抽奖结\n          果为准，可能高于、也可能低于默认奖励比例！\n        ")])]),e._v(" "),n("div",{staticClass:"prize_btn"},[n("yd-button",{nativeOn:{click:function(t){return e.sureTake()}}},[e._v("确认抽奖")]),e._v(" "),n("yd-button",{nativeOn:{click:function(t){e.show1=!1}}},[e._v("取消")])],1)])]),e._v(" "),n("yd-popup",{attrs:{position:"bottom",height:"60%"},model:{value:e.show2,callback:function(t){e.show2=t},expression:"show2"}},[n("div",{staticClass:"prize_box"},[n("h1",[e._v("抽奖结果")]),e._v(" "),n("ul",{staticClass:"prize_content"},[n("li",[e._v(e._s(e.msg))])]),e._v(" "),n("yd-button",{staticClass:"ture_btn",nativeOn:{click:function(t){e.show2=!1}}},[e._v("确认")])],1)]),e._v(" "),n("yd-popup",{attrs:{position:"bottom",height:"60%"},model:{value:e.show4,callback:function(t){e.show4=t},expression:"show4"}},[e.exchangeLogs.exchange_amount?n("div",{staticClass:"reward_record"},[n("h1",[e._v("兑换记录")]),e._v(" "),n("ul",[n("li",[e._v("兑换数量:"+e._s(e.exchangeLogs.exchange_amount))]),e._v(" "),n("li",[e._v("兑换比例:"+e._s(e.exchangeLogs.exchange_unit))]),e._v(" "),n("li",[e._v("兑换:"+e._s(e.exchangeLogs.exchange_count))])]),e._v(" "),n("yd-button",{staticClass:"button",nativeOn:{click:function(t){e.show4=!1}}},[e._v("关闭")])],1):e._e()])],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("查看详情 "),t("i",{staticClass:"fa fa-angle-right"})])}]};var c=n("VU/8")(r,u,!1,function(e){n("YYIF")},"data-v-343c460c",null);t.default=c.exports},oclD:function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,"\n#reward_queue[data-v-343c460c] {\n  overflow: scroll;\n  -webkit-overflow-scrolling: touch;\n}\n#reward_queue #reward_header[data-v-343c460c] {\n    background-color: #fff;\n}\n#reward_queue #reward_header .header_box[data-v-343c460c] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      padding: 1.25rem 0.875rem;\n      border-bottom: solid 0.0625rem #ebebeb;\n}\n#reward_queue #reward_header .header_box .img[data-v-343c460c] {\n        width: 3.5rem;\n        height: 3.5rem;\n        border-radius: 1.75rem;\n        overflow: hidden;\n        border: solid 0.0625rem #ebebeb;\n        margin-right: 0.625rem;\n        background-color: #f8f8f8;\n}\n#reward_queue #reward_header .header_box .img img[data-v-343c460c] {\n          width: 100%;\n}\n#reward_queue #reward_header .header_box .head_name[data-v-343c460c] {\n        text-align: left;\n}\n#reward_queue #reward_header .header_box .head_name span[data-v-343c460c] {\n          width: 17.5625rem;\n          overflow: hidden;\n          text-overflow: ellipsis;\n          white-space: nowrap;\n}\n#reward_queue #reward_header .header_box .head_name .title[data-v-343c460c] {\n          color: #999;\n          font-size: 16px;\n          font-weight: normal;\n}\n#reward_queue #reward_header .header_box span[data-v-343c460c] {\n        display: block;\n        font-size: 16px;\n        font-weight: bold;\n        line-height: 3rem;\n}\n#reward_queue #reward_header .reward_box[data-v-343c460c] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      padding: 0.75rem 0;\n}\n#reward_queue #reward_header .reward_box .reward_a[data-v-343c460c],\n      #reward_queue #reward_header .reward_box .reward_b[data-v-343c460c] {\n        width: 33.33%;\n        text-align: center;\n}\n#reward_queue #reward_header .reward_box .reward_a li span[data-v-343c460c],\n        #reward_queue #reward_header .reward_box .reward_b li span[data-v-343c460c] {\n          font-size: 14px;\n}\n#reward_queue #reward_header .reward_box .reward_a li[data-v-343c460c]:first-child,\n        #reward_queue #reward_header .reward_box .reward_b li[data-v-343c460c]:first-child {\n          height: 1.625rem;\n          line-height: 1.625rem;\n          font-size: 18px;\n          font-weight: bold;\n}\n#reward_queue #reward_header .reward_box .reward_a li[data-v-343c460c]:last-child,\n        #reward_queue #reward_header .reward_box .reward_b li[data-v-343c460c]:last-child {\n          line-height: 1.5rem;\n          color: #8c8c8c;\n          font-size: 14px;\n}\n#reward_queue #reward_header .reward_box .reward_c[data-v-343c460c] {\n        width: 33.33%;\n        line-height: 3.125rem;\n        font-size: 16px;\n}\n#reward_queue #reward_header .reward_box .reward_c li[data-v-343c460c] {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-pack: end;\n              -ms-flex-pack: end;\n                  justify-content: flex-end;\n          padding-right: 0.875rem;\n          width: 100%;\n          color: #8c8c8c;\n}\n#reward_queue #reward_header .reward_box .reward_c li i[data-v-343c460c] {\n            font-size: 24px;\n            line-height: 3.125rem;\n            color: #c9c9c9;\n            margin-left: 0.625rem;\n}\n#reward_queue #queue_content[data-v-343c460c] {\n    overflow: scroll;\n    margin-top: 0.625rem;\n}\n#reward_queue #queue_content .queue_box[data-v-343c460c] {\n      margin-bottom: 0.625rem;\n      background-color: #fff;\n}\n#reward_queue #queue_content .queue_box .queue_a[data-v-343c460c] {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        padding: 0 0.875rem;\n        line-height: 2.5rem;\n        font-size: 16px;\n}\n#reward_queue #queue_content .queue_box .queue_a span[data-v-343c460c]:first-child {\n          font-weight: bold;\n}\n#reward_queue #queue_content .queue_box .queue_b .queue_top[data-v-343c460c] {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        padding: 0.625rem 0.875rem;\n        position: relative;\n}\n#reward_queue #queue_content .queue_box .queue_b .queue_top .img[data-v-343c460c] {\n          width: 2.25rem;\n          height: 2.25rem;\n          overflow: hidden;\n          border-radius: 1.125rem;\n          margin-right: 0.625rem;\n          background-color: #f8f8f8;\n}\n#reward_queue #queue_content .queue_box .queue_b .queue_top .img img[data-v-343c460c] {\n            width: 100%;\n}\n#reward_queue #queue_content .queue_box .queue_b .queue_top span[data-v-343c460c]:nth-child(2) {\n          text-align: left;\n          width: 60%;\n          overflow: hidden;\n          text-overflow: ellipsis;\n          white-space: nowrap;\n          line-height: 2.25rem;\n}\n#reward_queue #queue_content .queue_box .queue_b .queue_top span[data-v-343c460c] {\n          font-size: 16px;\n}\n#reward_queue #queue_content .queue_box .queue_b .queue_top .btn_a[data-v-343c460c] {\n          width: 3.75rem;\n          height: 1.625rem;\n          border-radius: 0.1875rem;\n          border: none;\n          background-color: #f15353;\n          color: #fff;\n          position: absolute;\n          right: 0.875rem;\n          top: 0.9375rem;\n          font-size: 14px;\n}\n#reward_queue #queue_content .queue_box .queue_b .queue_top .money[data-v-343c460c] {\n          /*width: 3.75rem;*/\n          line-height: 2.25rem;\n          border-radius: 0.1875rem;\n          border: none;\n          color: #f15353;\n          position: absolute;\n          right: 1rem;\n          top: 0.75rem;\n          font-size: 18px;\n}\n#reward_queue #queue_content .queue_box .queue_b .queue_center[data-v-343c460c] {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n}\n#reward_queue #queue_content .queue_box .queue_b .queue_center ul[data-v-343c460c] {\n          width: 33.33%;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n}\n#reward_queue #queue_content .queue_box .queue_b .queue_center .reward_queue_a li[data-v-343c460c]:first-child,\n        #reward_queue #queue_content .queue_box .queue_b .queue_center .reward_queue_b li[data-v-343c460c]:first-child {\n          font-size: 16px;\n          height: 1.625rem;\n          line-height: 1.625rem;\n          font-weight: bold;\n}\n#reward_queue #queue_content .queue_box .queue_b .queue_center .reward_queue_a li:first-child span[data-v-343c460c],\n          #reward_queue #queue_content .queue_box .queue_b .queue_center .reward_queue_b li:first-child span[data-v-343c460c] {\n            font-size: 14px;\n}\n#reward_queue #queue_content .queue_box .queue_b .queue_center .reward_queue_a li[data-v-343c460c]:last-child,\n        #reward_queue #queue_content .queue_box .queue_b .queue_center .reward_queue_b li[data-v-343c460c]:last-child {\n          line-height: 1.5rem;\n          color: #8c8c8c;\n          font-size: 14px;\n}\n#reward_queue #queue_content .queue_box .queue_b .queue_center .reward_queue_c[data-v-343c460c] {\n          font-size: 16px;\n          color: #f15353;\n          text-align: center;\n          line-height: 3.125rem;\n}\n#reward_queue #queue_content .queue_box .queue_c[data-v-343c460c] {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        margin-top: 0.75rem;\n        height: 2.5rem;\n        line-height: 2.5rem;\n        text-align: center;\n        font-size: 16px;\n}\n#reward_queue #queue_content .queue_box .queue_c i[data-v-343c460c] {\n          font-size: 1.5rem;\n          color: #666;\n}\n#reward_queue #queue_content .queue_box .button_box[data-v-343c460c] {\n        padding: 0.625rem 0;\n}\n#reward_queue #queue_content .queue_box .button_box button[data-v-343c460c] {\n          background: #fff;\n          color: #333;\n          font-size: 14px;\n          border: solid 0.0625rem #ccc;\n          border-radius: 1rem;\n          height: 1.625rem;\n          width: 7.5rem;\n          margin: 0 0.625rem;\n}\n#reward_queue #queue_content .queue_box .queue_c_down[data-v-343c460c] {\n        margin-top: 0.75rem;\n        border-top: solid 0.0625rem #ebebeb;\n        padding: 0.625rem 0.875rem;\n        font-size: 14px;\n}\n#reward_queue #queue_content .queue_box .queue_c_down li[data-v-343c460c] {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-pack: justify;\n              -ms-flex-pack: justify;\n                  justify-content: space-between;\n          line-height: 1.75rem;\n}\n#reward_queue #queue_content .queue_box .queue_bottom[data-v-343c460c] {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-pack: distribute;\n            justify-content: space-around;\n        margin-top: 0.625rem;\n}\n#reward_queue #queue_content .queue_box .queue_bottom .button_side[data-v-343c460c] {\n          width: 7.5rem;\n          height: 1.875rem;\n          background-color: #fff;\n          color: #333;\n          font-size: 15px;\n          border: solid 0.0625rem #ebebeb;\n          border-radius: 1.5rem;\n}\n#reward_queue #queue_content .queue_box .queue_bottom .button_line[data-v-343c460c] {\n          width: 19.25rem;\n          height: 1.875rem;\n          border-radius: 0.1875rem;\n          border: solid 0.0625rem #f15353;\n          color: #f15353;\n          font-size: 15px;\n}\n#reward_queue #queue_content .queue_box .fade-enter-active[data-v-343c460c] {\n        -webkit-transition: 0.5s;\n        transition: 0.5s;\n}\n#reward_queue #queue_content .queue_box .fade-enter[data-v-343c460c],\n      #reward_queue #queue_content .queue_box .fade-leave-active[data-v-343c460c] {\n        opacity: 0;\n        height: 0;\n}\n#reward_queue .queue_type[data-v-343c460c] {\n    height: 25rem;\n}\n#reward_queue .queue_type h1[data-v-343c460c] {\n      height: 2.5rem;\n      line-height: 2.5rem;\n      text-align: center;\n      font-size: 15px;\n      border-bottom: solid 0.0625rem #ebebeb;\n}\n#reward_queue .queue_type .selete[data-v-343c460c] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      height: 2.8125rem;\n      line-height: 2.8125rem;\n      margin-left: 0.875rem;\n      font-size: 16px;\n      border-bottom: solid 0.0625rem #ebebeb;\n}\n#reward_queue .queue_type .selete li[data-v-343c460c]:first-child {\n        text-align: left;\n        -webkit-box-flex: 1;\n            -ms-flex: 1;\n                flex: 1;\n}\n#reward_queue .queue_type .selete li[data-v-343c460c]:last-child {\n        padding-right: 0.875rem;\n        -webkit-box-flex: 0;\n            -ms-flex: 0 0 6rem;\n                flex: 0 0 6rem;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: end;\n            -ms-flex-pack: end;\n                justify-content: flex-end;\n}\n#reward_queue .queue_type .selete li:last-child input[data-v-343c460c] {\n          border: none;\n          outline: none;\n          height: 2.75rem;\n          width: 90%;\n          font-size: 16px;\n          text-align: right;\n          margin-right: 0.625rem;\n}\n#reward_queue .queue_type .selete li:last-child i[data-v-343c460c] {\n          line-height: 2.8125rem;\n          color: #c9c9c9;\n          font-size: 18px;\n}\n#reward_queue .queue_type .type[data-v-343c460c] {\n      padding: 0.625rem 0.875rem;\n}\n#reward_queue .queue_type .type li[data-v-343c460c] {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        font-size: 16px;\n        height: 2.8125rem;\n}\n#reward_queue .queue_type .type li span[data-v-343c460c] {\n          line-height: 2.8125rem;\n}\n#reward_queue .queue_type .type li .circle[data-v-343c460c] {\n          width: 20px;\n          height: 20px;\n          border: 1px solid #ccc;\n          border-radius: 50%;\n          display: inline-block;\n          position: relative;\n          top: 0.8rem;\n          right: 1rem;\n          z-index: 10;\n          line-height: 2.8125rem;\n          pointer-events: none;\n}\n#reward_queue .queue_type .type li .choose[data-v-343c460c] {\n          background: #f15353;\n          border: 1px solid #f15353;\n}\n#reward_queue .queue_type .queue_info[data-v-343c460c] {\n      background-color: #fafafa;\n      padding: 0.625rem 0.875rem;\n}\n#reward_queue .queue_type .queue_info li[data-v-343c460c] {\n        line-height: 1.875rem;\n        text-align: left;\n        font-size: 15px;\n        color: #8c8c8c;\n}\n#reward_queue .queue_type .queue_btn[data-v-343c460c] {\n      width: 100%;\n      height: 2.8125rem;\n      border-radius: 0;\n      font-size: 18px;\n      background-color: #f15353;\n      color: #fff;\n      position: absolute;\n      bottom: 0;\n      left: 0;\n}\n#reward_queue .prize_box[data-v-343c460c] {\n    height: 25rem;\n}\n#reward_queue .prize_box h1[data-v-343c460c] {\n      height: 2.5rem;\n      line-height: 2.5rem;\n      text-align: center;\n      font-size: 15px;\n      border-bottom: solid 0.0625rem #ebebeb;\n}\n#reward_queue .prize_box .prize_content[data-v-343c460c] {\n      padding: 0.625rem 0.875rem;\n      font-size: 16px;\n}\n#reward_queue .prize_box .prize_content li[data-v-343c460c] {\n        line-height: 1.875rem;\n        text-align: left;\n}\n#reward_queue .prize_box .ture_btn[data-v-343c460c] {\n      width: 100%;\n      height: 2.8125rem;\n      border-radius: 0;\n      font-size: 18px;\n      background-color: #f15353;\n      color: #fff;\n      position: absolute;\n      bottom: 0;\n      left: 0;\n}\n#reward_queue .prize_box .prize_btn[data-v-343c460c] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      height: 2.8125rem;\n      width: 100%;\n      position: absolute;\n      bottom: 0;\n      left: 0;\n}\n#reward_queue .prize_box .prize_btn button[data-v-343c460c]:first-child {\n        height: 2.8125rem;\n        background-color: #f15353;\n        border-radius: 0;\n        width: 50%;\n        font-size: 18px;\n        margin: 0;\n        color: #fff;\n}\n#reward_queue .prize_box .prize_btn button[data-v-343c460c]:last-child {\n        height: 2.8125rem;\n        background-color: #ccc;\n        border-radius: 0;\n        width: 50%;\n        font-size: 18px;\n        margin: 0;\n        color: #fff;\n}\n#reward_queue .reward_record[data-v-343c460c] {\n    background-color: #fff;\n    height: 25rem;\n}\n#reward_queue .reward_record h1[data-v-343c460c] {\n      height: 2.5rem;\n      line-height: 2.5rem;\n      font-size: 16px;\n      text-align: center;\n      border-bottom: solid 0.0625rem #ebebeb;\n}\n#reward_queue .reward_record ul[data-v-343c460c] {\n      padding: 0.625rem 0;\n}\n#reward_queue .reward_record ul li[data-v-343c460c] {\n        padding: 0 0.875rem;\n        line-height: 2.25rem;\n        text-align: left;\n        font-size: 15px;\n}\n#reward_queue .reward_record button[data-v-343c460c] {\n      width: 23.4375rem;\n      border-radius: 0;\n      height: 2.8125rem;\n      font-size: 18px;\n      color: #fff;\n      background-color: #f15353;\n      position: absolute;\n      bottom: 0;\n      left: 0;\n}\n#reward_queue[data-v-343c460c]::-webkit-scrollbar {\n  display: none;\n}\n#reward_queue.pcStyle #queue_content[data-v-343c460c] {\n  -ms-overflow-style: none;\n  overflow: -moz-scrollbars-none;\n}\n#reward_queue.pcStyle #queue_content[data-v-343c460c]::-webkit-scrollbar {\n  display: none;\n}\n",""])}});