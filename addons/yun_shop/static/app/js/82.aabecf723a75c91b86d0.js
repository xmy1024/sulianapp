webpackJsonp([82],{bxtL:function(t,e,i){var n=i("e3r9");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("14fb672d",n,!0,{})},e3r9:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"\n.osll[data-v-5e1ada6a] {\n  min-height: 100vh;\n}\n.contes[data-v-5e1ada6a] {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 2.1875rem;\n  background: #FFF;\n  line-height: 2.1875rem;\n  border-top: #e2e2e2 solid 0.0625rem;\n  text-align: right;\n}\n.contes button[data-v-5e1ada6a] {\n    border: solid 0.0625rem #f15353;\n    background: #FFF;\n    border-radius: 0.875rem;\n    margin-right: 0.3125rem;\n    color: #f15353;\n}\n.loadNomore img[data-v-5e1ada6a] {\n  width: 20%;\n}\n#payment .mint-navbar.is-fixed[data-v-5e1ada6a] {\n  top: 2.5rem;\n}\n",""])},sxrA:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("Pexp"),a=i("Tg7E"),o={props:["datasource","status","getAllLoaded"],data:function(){return{isShow:!1,toi:this.fun.getKeyByI(),checkList:[],loading:!1,allLoaded:!1,goload:!0}},methods:{setCheckList:function(){this.checkList=[]},goOrder:function(t,e){0==t&&this.$router.push(this.fun.getUrl("orderpay",{status:"2",order_ids:e}))},operation:function(t,e){8==t.value?this.checklogistics(e,t):12==t.value?this.deleteOrder(e,t):10==t.value?this.comment(e,t):1==t.value?this.toPay(e,t):13==t.value?this.toRefund(e,t):9==t.value?this.cancleOrder(e,t):5==t.value?this.confirmOrder(e,t):18==t.value&&this.toRefundDetail(e,t)},multiplePayChange:function(t){this.$emit("MultiplePayNotification",this.checkList)},toDetail:function(t){this.$emit("ToDetailNotification",t)},checklogistics:function(t,e){this.$router.push(this.fun.getUrl("logistics",{order:t}))},cancleOrder:function(t,e){var i=this;Object(a.MessageBox)({title:"提示",message:"确定取消此订单?",showCancelButton:!0}).then(function(n){"confirm"==n&&(i.datasource.splice(i.datasource.indexOf(t),1),i.sentRequest(e.api,{order_id:t.id},!1))})},deleteOrder:function(t,e){var i=this;Object(a.MessageBox)({title:"提示",message:"确定删除此订单?",showCancelButton:!0}).then(function(n){"confirm"==n&&(i.datasource.splice(i.datasource.indexOf(t),1),i.sentRequest(e.api,{order_id:t.id},!1))})},toPay:function(t,e){this.$router.push(this.fun.getUrl("orderpay",{status:2,order_ids:t.id}))},comment:function(t,e){this.$router.push(this.fun.getUrl("comment",{order:t}))},confirmOrder:function(t,e){var i=this;Object(a.MessageBox)({title:"提示",message:"您确定收到货物?",showCancelButton:!0}).then(function(n){if("confirm"==n){var o=i;$http.get(e.api,{order_id:t.id}).then(function(e){1==e.result?o.$emit("ConfrimOrderNotification",t):a.MessageBox.alert(e.msg)},function(t){})}})},reCommend:function(t,e){},toRefundDetail:function(t,e){this.$router.push(this.fun.getUrl("aftersales",{refund_id:t.refund_id}))},toRefund:function(t,e){this.$router.push(this.fun.getUrl("refund",{order_id:t.id,type:1}))},sentRequest:function(t,e,i){$http.get(t,e,"").then(function(t){},function(t){})},sheetAction:function(){console.log(this.sheetVisible)},loadTop:function(){alert("刷新"),this.$refs.loadmore.onTopLoaded()},loadBottom:function(){console.log("加载更多"),this.$refs.loadmore.onBottomLoaded(),this.getAllLoaded?this.allLoaded=!1:this.allLoaded=!0}}},s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"orderList"}},[i("van-checkbox-group",{on:{change:t.multiplePayChange},model:{value:t.checkList,callback:function(e){t.checkList=e},expression:"checkList"}},t._l(t.datasource,function(e,n){return i("div",{key:n,staticClass:"shop",on:{click:function(i){return t.goOrder(e.has_one_order.status,e.order_id)}}},[i("div",{staticClass:"title"},[1==t.status?i("van-checkbox",{attrs:{"checked-color":"#f15353",shape:"square",name:e.id}},[t._v(" ")]):t._e(),t._v(" "),i("h4",[t._v("订单号："+t._s(e.recharge_no))]),t._v(" "),i("span",[t._v(t._s(e.has_one_order.status_name))])],1),t._v(" "),t._l(e.has_one_order.has_many_order_goods,function(e,n){return i("a",{key:n},[i("div",{staticClass:"goods"},[i("div",{staticClass:"img"},[i("img",{attrs:{src:e.thumb}})]),t._v(" "),i("div",{staticClass:"warp"},[i("div",{staticClass:"inner"},[i("div",{staticClass:"name"},[t._v(t._s(e.title))]),t._v(" "),i("div",{staticClass:"option"},[t._v("规格: "+t._s(e.goods_option_title))])]),t._v(" "),i("div",{staticClass:"price"},[t._v("\n                        ￥"+t._s(e.price)+"\n                   \n                    ")])])])])}),t._v(" "),i("div",{staticClass:"title"},[i("h4",[t._v(" 实付：￥"),i("b",[t._v(t._s(e.price))])]),t._v(" "),1==e.length?i("span",{staticClass:"del",on:{click:function(i){return t.operation(e.button_models[0],e)}}},[t._v(t._s(e.button_models[0].name))]):t._e()]),t._v(" "),e.length>1?i("div",{staticClass:"allbt"},[i("div",{staticStyle:{flex:"3"}}),t._v(" "),t._l(e.button_models,function(n,a){return i("span",{key:a,on:{click:function(i){return t.operation(n,e)}}},[t._v(t._s(n.name))])})],2):t._e()],2)}),0)],1)},staticRenderFns:[]};var r=i("VU/8")(o,s,!1,function(t){i("zJuF")},"data-v-73a99982",null).exports,l={data:function(){return{toi:this.fun.getKeyByI(),topStatus:"",bottomStatus:"",getAllLoaded:!1,selected:0,last_status:0,loading:!1,allLoaded:!1,goload:!1,isLoadMore:!0,action:"",orderList:[],waitPayList:[],waitSendList:[],waitReceiveList:[],waitCompleteList:[],order_ids:[],checkList:[],isMultiplePay:!1,page:1,total_page:0}},methods:{swichTabTItem:function(){this.initData(),this.getOrderList(this.selected)},handleTopChange:function(t){this.topStatus=t},handleBottomChange:function(t){this.allLoaded=!1,this.bottomStatus=t},initData:function(){this.page=1,this.goload=!0,this.total_page=0,this.loading=!0,this.allLoaded=!1,this.isLoadMore=!0},loadTop:function(){this.initData(),this.getOrderList(this.selected),this.$refs.loadmore.onTopLoaded()},loadBottom:function(){this.isLoadMore?(console.log("加载更多"),this.getMoreData(this.page,this.selected),this.$refs.loadmore.onBottomLoaded()):console.log("没有更多数据")},getOrderList:function(t){this.action,0==t?this.action="plugin.elive.api.index.allList":1==t?this.action="plugin.elive.api.index.waitPay":2==t?this.action="plugin.elive.api.index.waitSend":3==t&&(this.action="plugin.elive.api.index.completed"),this.getNetData(this.action,t)},toDetail:function(t){console.log(t),this.$router.push(this.fun.getUrl("orderdetail",{order_id:t.id,isDetail:!0}))},cofirmOrderAction:function(t){0==this.selected?this.getOrderList(this.selected):this.waitReceiveList.splice(this.waitReceiveList.indexOf(t),1)},toMultiplePay:function(){this.$router.push(this.fun.getUrl("orderpay",{status:2,order_ids:encodeURI(this.order_ids)})),this.$refs.mychild.setCheckList(),this.isMultiplePay=!1},multiplePayAction:function(t){this.order_ids=t,t.length>0?this.isMultiplePay=!0:this.isMultiplePay=!1},getNetData:function(t,e){var i=this;$http.get(t,{page:1,i:this.fun.getKeyByI(),type:this.fun.getTyep()},"正在获取订单...").then(function(t){if(1==t.result){var n=t.data;i.total_page=n.total,0==e?i.orderList=n.data:1==e?i.waitPayList=n.data:2==e?i.waitSendList=n.data:3==e?i.waitReceiveList=n.data:i.waitCompleteList=n.data}},function(t){})},getMoreData:function(t,e){var i=this;if(this.page!=this.total_page)return this.page>=this.total_page?(i.loading=!0,void(i.allLoaded=!0)):(this.page=this.page+1,void $http.get(this.action,{page:this.page,i:this.fun.getKeyByI(),type:this.fun.getTyep()},"正在获取更多订单...").then(function(t){if(1!=t.result)return i.page=i.page-1,i.loading=!0,i.allLoaded=!0,void(i.isLoadMore=!1);var n=t.data;i.loading=!1,i.allLoaded=!1,0==e?i.orderList=i.orderList.concat(n.data):1==e?i.waitPayList=i.waitPayList.concat(n.data):2==e?i.waitSendList=i.waitSendList.concat(n.data):3==e?i.waitReceiveList=i.waitReceiveList.concat(n.data):i.waitCompleteList=i.waitCompleteList.concat(n.data)},function(t){}))}},computed:{},created:function(){this.last_status=this.selected},mounted:function(){this.toi=this.fun.getKeyByI()},activated:function(){this.toi=this.fun.getKeyByI(),this.selected=this.$route.params.status,this.initData(),this.getOrderList(this.selected)},components:{cTitle:n.a,cOrderList:r}},d={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"payment"}},[i("c-title",{attrs:{hide:!1,text:"我的订单"}}),t._v(" "),i("div",{staticStyle:{height:"87px"}}),t._v(" "),i("mt-navbar",{attrs:{fixed:""},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[i("mt-tab-item",{attrs:{id:"0"},nativeOn:{click:function(e){return t.swichTabTItem(e)}}},[t._v("全部")]),t._v(" "),i("mt-tab-item",{attrs:{id:"1"},nativeOn:{click:function(e){return t.swichTabTItem(e)}}},[t._v(" 待付款")]),t._v(" "),i("mt-tab-item",{attrs:{id:"2"},nativeOn:{click:function(e){return t.swichTabTItem(e)}}},[t._v("待充值")]),t._v(" "),i("mt-tab-item",{attrs:{id:"3"},nativeOn:{click:function(e){return t.swichTabTItem(e)}}},[t._v("已完成")])],1),t._v(" "),t.goload?i("mt-loadmore",{ref:"loadmore",attrs:{"top-method":t.loadTop,"bottom-method":t.loadBottom,"bottom-all-loaded":t.allLoaded,bottomPullText:"",bottomDropText:"下拉加载...",bottomLoadingText:"",autoFill:!0,id:"olis"}},[i("mt-tab-container",{model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[i("mt-tab-container-item",{attrs:{id:"0"}},[i("cOrderList",{staticClass:"osll",attrs:{datasource:t.orderList,status:0},on:{ConfrimOrderNotification:t.cofirmOrderAction,ToDetailNotification:t.toDetail}})],1),t._v(" "),i("mt-tab-container-item",{attrs:{id:"1"}},[i("cOrderList",{ref:"mychild",staticClass:"osll",attrs:{datasource:t.waitPayList,status:1},on:{ConfrimOrderNotification:t.cofirmOrderAction,ToDetailNotification:t.toDetail,MultiplePayNotification:t.multiplePayAction}}),t._v(" "),i("div",{staticStyle:{height:"45px"}})],1),t._v(" "),i("mt-tab-container-item",{attrs:{id:"2"}},[i("cOrderList",{staticClass:"osll",attrs:{datasource:t.waitSendList,status:2},on:{ConfrimOrderNotification:t.cofirmOrderAction,ToDetailNotification:t.toDetail}})],1),t._v(" "),i("mt-tab-container-item",{attrs:{id:"3"}},[i("cOrderList",{staticClass:"osll",attrs:{datasource:t.waitReceiveList,status:3},on:{ConfrimOrderNotification:t.cofirmOrderAction,ToDetailNotification:t.toDetail}})],1)],1)],1):t._e(),t._v(" "),t.isMultiplePay?i("div",{staticClass:"contes"},[i("button",{on:{click:t.toMultiplePay}},[t._v("合并支付")])]):t._e()],1)},staticRenderFns:[]};var c=i("VU/8")(l,d,!1,function(t){i("bxtL")},"data-v-5e1ada6a",null);e.default=c.exports},zJuF:function(t,e,i){var n=i("zaeB");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("5881c819",n,!0,{})},zaeB:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"\n.olis[data-v-73a99982] {\n  height: 100vh;\n}\n.shop[data-v-73a99982] {\n  background: #FFF;\n  margin-top: 0.625rem;\n  border-bottom: 0.0625rem solid #ebebeb;\n  border-top: 0.0625rem solid #ebebeb;\n}\n.shop a[data-v-73a99982] {\n    color: #000000;\n}\n.shop .title[data-v-73a99982]:after {\n    content: '';\n    display: block;\n    clear: both;\n}\n.shop .title[data-v-73a99982] {\n    padding: 0 0.625rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    font-size: 14px;\n}\n.shop .title h4[data-v-73a99982] {\n      text-align: left;\n      font-weight: normal;\n      margin: 0.625rem 0;\n      -webkit-box-flex: 8;\n          -ms-flex: 8;\n              flex: 8;\n}\n.shop .title h4 b[data-v-73a99982] {\n        font-size: 18px;\n}\n.shop .title span[data-v-73a99982] {\n      color: #f15353;\n      text-align: right;\n      margin-right: 0.0625rem;\n      -webkit-box-flex: 2;\n          -ms-flex: 2;\n              flex: 2;\n}\n.shop span.del[data-v-73a99982] {\n    border-radius: 0.875rem;\n    border: 0.0625rem solid #F15353;\n    text-align: center;\n    padding: 0.3125rem 0.4375rem;\n    font-size: 12px;\n}\n.shop .allbt[data-v-73a99982] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin: 0 0 0.625rem;\n    -ms-flex-pack: justify;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    border-top: 0.0625rem solid #e2e2e2;\n    padding-top: 0.625rem;\n}\n.shop .allbt span[data-v-73a99982] {\n      -webkit-box-flex: 2;\n          -ms-flex: 2;\n              flex: 2;\n      border-radius: 0.875rem;\n      border: 0.0625rem solid #b1a6a6;\n      margin: 0 0.625rem 0 0;\n      padding: 0.3125rem 0.4375rem;\n      text-align: center;\n      font-size: 12px;\n}\n.shop .allbt span[data-v-73a99982]:last-child {\n      color: #f15353;\n      border: 0.0625rem solid #f15353;\n}\n.goods[data-v-73a99982]:after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n.goods[data-v-73a99982] {\n  /*display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-align: stretch;\n            -ms-flex-align: stretch;\n            align-items: stretch;\n            -webkit-box-orient: horizontal;\n            -webkit-box-direction: normal;\n            -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n            */\n  padding: 0.625rem 1.25rem;\n  width: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background: #fafafa;\n}\n.goods .img[data-v-73a99982] {\n    /*flex: 1;*/\n    width: 4.0625rem;\n    height: 4.0625rem;\n    float: left;\n    display: inline-block;\n    /*background:blue;*/\n}\n.goods .img img[data-v-73a99982] {\n      width: 100%;\n}\n.goods .warp[data-v-73a99982] {\n    width: 70%;\n    float: left;\n    display: inline-block;\n    margin-left: 0.75rem;\n}\n.goods .warp .inner[data-v-73a99982] {\n      width: 70%;\n      float: left;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      padding: 0 0.3125rem;\n      text-align: left;\n}\n.goods .warp .inner .name[data-v-73a99982] {\n        font-size: 14px;\n        text-align: left;\n        color: #333333;\n        margin-bottom: 0.625rem;\n}\n.goods .warp .price[data-v-73a99982] {\n      width: 30%;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      text-align: right;\n      color: #333333;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      float: left;\n      padding-right: 0.25rem;\n      font-size: 14px;\n}\n.goods .warp .price p[data-v-73a99982] {\n        margin-top: 0;\n}\n.goods .warp .price b[data-v-73a99982] {\n        font-size: 18px;\n}\n.goods .option[data-v-73a99982] {\n    color: #888;\n    font-size: 12px;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n}\n#tbs[data-v-73a99982] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: #FFF;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  padding: 0.625rem;\n  line-height: 1.5rem;\n  border-bottom: 0.0625rem solid #D9D9D9;\n}\n#tbs .left[data-v-73a99982] {\n    text-align: left;\n    -webkit-box-flex: 50%;\n        -ms-flex: 50%;\n            flex: 50%;\n    color: #858585;\n}\n#tbs .right[data-v-73a99982] {\n    text-align: right;\n    -webkit-box-flex: 50%;\n        -ms-flex: 50%;\n            flex: 50%;\n}\n#tbs .add[data-v-73a99982] {\n    color: #259b24;\n}\n#tbs .reduce[data-v-73a99982] {\n    color: #e51c23;\n}\n",""])}});