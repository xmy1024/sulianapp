webpackJsonp([2],{"/AEP":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o=e("Pexp"),i=e("Tg7E"),s={data:function(){return{toi:this.fun.getKeyByI(),alipay_url:"",uid:""}},methods:{webToPay:function(){this.fun.isWeiXin()?"1"==this.fun.getPhoneEnv()&&(window.location=window.location):document.location.href=this.alipay_url},toPay:function(){var t=this;$http.get("finance.balance.alipay",{order_sn:this.$route.params.order_pay_id,uid:this.$route.params.uid,pay_type:2,recharge_money:this.$route.params.recharge_money},"正在充值").then(function(a){1==a.result?(t.alipay_url=a.data,t.webToPay()):i.MessageBox.alert(a.msg,"提示")},function(t){})},toPayOrder:function(){var t=this,a="";a=t.$route.params.money?"order.merge-pay.wft-alipay":"order.merge-pay.alipay",$http.get(a,{pid:this.$route.query.pid?this.$route.query.pid:window.localStorage.getItem("uid"),uid:this.$route.params.uid,order_pay_id:this.$route.params.order_pay_id,i:this.fun.getKeyByI(),type:this.fun.getTyep()},"loading").then(function(a){1==a.result?(t.$route.params.money?t.alipay_url=a.data.code_url:t.alipay_url=a.data,t.webToPay(a.data)):i.MessageBox.alert(a.msg,"提示")},function(t){})},toPayByGold:function(){var t=this,a={pay_type:2,change_value:this.$route.params.recharge_money,i:this.fun.getKeyByI(),type:this.fun.getTyep(),uid:this.$route.params.uid};$http.get("plugin.gold.frontend.controllers.recharge",a,"正在充值").then(function(a){1==a.result?(t.alipay_url=a.data,t.webToPay()):i.MessageBox.alert(a.msg,"提示")},function(t){i.MessageBox.alert(t.msg,"提示")})},toPayByCash:function(){var t=this,a={payment:2,order_sn:this.$route.params.order_pay_id};$http.get("plugin.lease.Frontend.Modules.Deposit.Controllers.recharge.pay",a,"正在充值").then(function(a){1==a.result?(t.alipay_url=a.data,t.webToPay()):i.MessageBox.alert(a.msg,"提示")},function(t){i.MessageBox.alert(t.msg,"提示")})},toPayClockin:function(){this.alipay_url=this.$route.params.url,this.webToPay()},toPayCloud:function(){this.alipay_url=this.$route.params.url,this.webToPay()},toPayCloudByBalance:function(){this.alipay_url=this.$route.params.url,this.webToPay()},toFrozen:function(){var t=this;$http.get("plugin.froze.Frontend.Modules.Froze.Controllers.recharge.alipay",{order_sn:this.$route.params.order_pay_id},"正在充值").then(function(a){1==a.result?(t.alipay_url=a.data,t.webToPay()):i.MessageBox.alert(a.msg,"提示")},function(t){})},toLove:function(){var t=this;$http.get("plugin.love.Frontend.Modules.Love.Controllers.recharge.alipay",{order_sn:this.$route.params.order_pay_id},"正在充值").then(function(a){1==a.result?(t.alipay_url=a.data,t.webToPay()):i.MessageBox.alert(a.msg,"提示")},function(t){})},toWftPay:function(){var t=this;$http.get("order.merge-pay.wft-alipay",{pid:this.$route.query.pid?this.$route.query.pid:window.localStorage.getItem("uid"),uid:this.$route.params.uid,order_pay_id:this.$route.params.order_pay_id},"loading").then(function(a){1==a.result?200==a.data.status&&(t.alipay_url=a.data.code_url,t.webToPay()):i.MessageBox.alert(a.msg,"提示")},function(t){})},toWftBalancePay:function(){var t=this;$http.get("finance.balance.alipay",{order_sn:this.$route.params.order_pay_id},"正在充值").then(function(a){1==a.result?(t.alipay_url=a.data.code_url,t.webToPay()):i.MessageBox.alert(a.msg,"提示")},function(t){})},toLoveRecharge:function(){var t=this;console.log(this.$route.params.order_pay_id),$http.get("plugin.love.Frontend.Modules.Love.Controllers.recharge.alipay",{order_sn:this.$route.params.pay_id},"正在充值").then(function(a){1==a.result?(t.alipay_url=a.data,t.webToPay()):i.MessageBox.alert(a.msg,"提示")}).catch(function(t){console.log(t)})},alipayapiPay:function(){var t=this;$http.get("order.merge-pay.alipay-jsapi-pay",{order_pay_id:this.$route.params.order_pay_id,pid:this.$route.params.uid}).then(function(a){1===a.result?(t.alipay_url=a.data,t.webToPay()):i.MessageBox.alert(a.msg,"提示")},function(t){Object(i.Toast)(t.msg)})},toWftBalancePay1:function(){this.alipay_url=this.$route.params.url,console.log(this.alipay_url),this.webToPay()}},activated:function(){this.toi=this.fun.getKeyByI(),console.log(this.$route.params.status),this.fun.isWeiXin()||("2"==this.$route.params.status?this.toPayOrder():"1"==this.$route.params.status?"frozen"==this.$route.params.tag?(console.log("冻结币执行了"),this.toFrozen()):"love"==this.$route.params.tag?(console.log("爱心值执行了"),this.toLove()):(console.log("余额充值执行了"),this.toPay()):"3"==this.$route.params.status?this.toPayByGold():"4"==this.$route.params.status?this.toPayByCash():"5"==this.$route.params.status?this.toPayClockin():"6"==this.$route.params.status?this.toPayCloud():"7"==this.$route.params.status?this.toPayCloudByBalance():"8"==this.$route.params.status?this.toPayCloud():"9"==this.$route.params.status?this.toPayCloud():"10"==this.$route.params.status?this.toWftPay():"12"==this.$route.params.status?this.toWftBalancePay1():"11"==this.$route.params.status?this.toLoveRecharge():"49"==this.$route.params.status&&this.alipayapiPay())},components:{cTitle:o.a},created:function(){!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)&&(location.href=document.location.protocol+"//"+window.location.host+"/addons/yun_shop/?menu#"+this.$route.fullPath)}},r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"test_alipay"}},[a("div",{staticClass:"J-weixin-tip weixin-tip"},[a("div",{attrs:{id:"alipay-detail"}},[a("div",{staticClass:"bg"},[a("img",{attrs:{src:e("5PWv"),alt:""}})])])]),this._v(" "),a("div",{staticClass:"J-weixin-tip-img weixin-tip-img"})])}]};var n=e("VU/8")(s,r,!1,function(t){e("9y4g")},"data-v-26615d26",null);a.default=n.exports},"5PWv":function(t,a,e){t.exports=e.p+"static/app/img/alipay-bg.64de79e.png"},"9y4g":function(t,a,e){var o=e("znPQ");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e("rjj0")("24b0b1b9",o,!0,{})},znPQ:function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,"\n#alipay-detail[data-v-26615d26] {\n  background: rgba(0, 0, 0, 0.8);\n  height: 100%;\n  position: fixed;\n  width: 100%;\n}\n#alipay-detail img[data-v-26615d26] {\n    width: 100%;\n    position: relative;\n    top: -2.5rem;\n}\n",""])}});