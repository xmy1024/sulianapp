webpackJsonp([15],{"/Wi5":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("Pexp"),a=e("Tg7E"),s=e("GQaK"),o={data:function(){return{Data:{},showAll:!1,time:"",Day:"",Hour:"",Min:"",Sec:"",stop:!1,songStop:!0,end:"",commission_amount:[],orders:[],readyState:0,clientWidths:"",browse_count:"",award_count:"",buy_count:"",show:!1}},activated:function(){this.show=!1,this.initData(),this.getData(),this.clientWidths=document.body.clientWidth},mounted:function(){this.clientWidths=document.body.clientWidth,this.autoPlayAudio2()},methods:{initData:function(){this.Data={},this.showAll=!1,this.time="",this.Day="",this.Hour="",this.Min="",this.Sec="",this.stop=!1,this.songStop=!0,this.browse_member=[],this.commission_amount=[],this.orders=[],this.readyState=0,this.clientWidths="",this.browse_count=0},_initScrollCart:function(){this.storeScroll=new s.a(this.$refs.store,{click:!0})},_initScrollCart1:function(){this.storeScroll1=new s.a(this.$refs.store1,{click:!0})},showStore:function(){var t=this;this.$nextTick(function(){1==t.Data.award_list&&(t.storeScroll?t.storeScroll.refresh():t._initScrollCart()),1==t.Data.order_list&&(t.storeScroll1?t.storeScroll1.refresh():t._initScrollCart1())})},getData:function(){var t=this,n={activity_id:this.fun.getKey("activity_id")};$http.get("plugin.share-activity.frontend.activity.index",n,"获取中").then(function(n){if(1==n.result){var e=document.getElementById("Activity");t.Data=n.data,t.Data.audio_link&&t.autoPlay(),t.browse_count=t.Data.browse_count,t.browse_member=t.Data.browse_member,t.end=t.Data.end_time,t.fun.setWXTitle(t.Data.name),t.countdown(),t.initShare(),e.style.backgroundColor=t.Data.color,1==t.Data.order_list&&t.getOrderData(),1==t.Data.award_list&&t.getAwardData()}else a.MessageBox.alert(n.msg)}).catch(function(t){console.log(t)})},getOrderData:function(){var t=this,n={activity_id:this.fun.getKey("activity_id")};$http.get("plugin.share-activity.frontend.activity.getOrders",n,"获取中").then(function(n){1===n.result?(t.buy_count=n.data.buy_count,t.orders=n.data.orders):a.MessageBox.alert(n.msg)}).catch(function(t){console.log(t)})},getAwardData:function(){var t=this,n={activity_id:this.fun.getKey("activity_id")};$http.get("plugin.share-activity.frontend.activity.getAwards",n,"获取中").then(function(n){1==n.result?(t.award_count=n.data.award_count,t.commission_amount=n.data.awards):a.MessageBox.alert(n.msg)}).catch(function(t){console.log(t)})},initShare:function(){var t=this;$http.post("member.member.wxJsSdkConfig",{url:"android"===t.fun.isIosOrAndroid()?window.location.href:window.initUrl}).then(function(n){1===n.result&&setTimeout(function(){n.data.config&&t.share(n.data)},800)}).catch(function(t){console.log(t)})},share:function(t){var n=this;wx.config(t.config),wx.ready(function(){var e,i,s,o=document.location.href+"&share_tag=2";o=n.fun.isMid(o,t.info.uid),e=n.fun.isTextEmpty(n.Data.share_title)?t.shop.share.title:n.Data.share_title,i=n.fun.isTextEmpty(n.Data.share_thumb)?t.share.icon:n.Data.share_thumb,s=n.fun.isTextEmpty(n.Data.share_content)?t.share.desc:n.Data.share_content,wx.showOptionMenu(),wx.onMenuShareTimeline({title:e,link:o,imgUrl:i,success:function(){Object(a.Toast)("分享成功")},cancel:function(){Object(a.Toast)("取消分享")}}),wx.onMenuShareAppMessage({title:e,desc:s,link:o,imgUrl:i,type:"link",dataUrl:"",success:function(){Object(a.Toast)("分享成功")},cancel:function(){Object(a.Toast)("取消分享")}})})},countdown:function(){var t=this,n=Date.parse(new Date)/1e3;if(this.end-n<=0)this.stop=!0;else{var e=0;e=n>=this.Data.star_time?this.end-n:this.Data.star_time-n;var i=parseInt(e/60/60/24),a=parseInt(e/60/60%24),s=parseInt(e/60%60),o=parseInt(e%60);a=a>9?a:"0"+a,s=s>9?s:"0"+s,o=o>9?o:"0"+o,this.Day=i,this.Hour=a,this.Min=s,this.Sec=o,setTimeout(function(){t.countdown()},1e3)}},onLoadedmetadata:function(t){this.readyState=this.$refs.audio.readyState,this.autoPlay()},play:function(){this.$refs.audio.paused?(this.$refs.audio.play(),this.songStop=!1):(this.$refs.audio.pause(),this.songStop=!0)},autoPlay:function(){var t=this;this.songStop=!1,this.$refs.audio.play(),this.fun.isWeiXin()&&document.addEventListener("WeixinJSBridgeReady",function(){t.$refs.audio.play(),t.songStop=!1},!1)},toGoods:function(){Date.parse(new Date)/1e3<this.Data.star_time?a.MessageBox.alert("目前还没到开始时间"):Date.parse(new Date)/1e3>this.Data.end_time?a.MessageBox.alert("活动时间已结束"):this.Data.diyform_id?this.$router.push(this.fun.getUrl("activityDiyForm",{id:this.Data.diyform_id,goodsId:this.Data.goods_id,optionsId:this.Data.option_id,total:this.Data.total})):this.$router.push(this.fun.getUrl("goodsorder",{tag:"-2",goodsId:this.Data.goods_id,optionsId:this.Data.option_id,total:this.Data.total}))},swipeToTop:function(t){t===this.commission_amount.length-2&&this.$refs.swipe.swipeTo(0),t===this.orders.length-2&&this.$refs.swipe1.swipeTo(0)},autoPlayAudio2:function(){var t=this;wx.config({debug:!1,appId:"",timestamp:1,nonceStr:"",signature:"",jsApiList:[]}),wx.ready(function(){t.$refs.audio.play()})},linkTo:function(t){"order"==t?this.$router.push(this.fun.getUrl("orderlist",{status:"0"})):"member"==t?this.$router.push(this.fun.getUrl("member")):this.show=!0}},components:{cTitle:i.a}},r={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{attrs:{id:"Activity"}},[i("c-title",{attrs:{hide:!1,text:t.Data.name}}),t._v(" "),i("div",{staticClass:"content_box"},[t.Data.audio_link?i("div",{staticClass:"top_music",style:{width:3==t.fun.getPhoneEnv()?"375px":t.clientWidths+"px"}},[i("i",{directives:[{name:"show",rawName:"v-show",value:!t.songStop,expression:"!songStop"}],staticClass:"iconfont icon-active_music_open xuanzhuan",on:{click:function(n){return n.stopPropagation(),t.play()}}}),t._v(" "),i("i",{directives:[{name:"show",rawName:"v-show",value:t.songStop,expression:"songStop"}],staticClass:"iconfont icon-active_music_close",on:{click:function(n){return n.stopPropagation(),t.play()}}})]):t._e(),t._v(" "),i("audio",{ref:"audio",staticStyle:{display:"none"},attrs:{id:"audio",loop:"loop",controls:"controls",autoplay:"",preload:"",src:t.Data.audio_link},on:{loadedmetadata:t.onLoadedmetadata}}),t._v(" "),i("div",{staticClass:"banner"},[i("img",{attrs:{src:t.Data.background_thumb}})]),t._v(" "),Date.parse(new Date)/1e3>=t.Data.star_time?i("div",{staticClass:"business_box"},[t._m(0),t._v(" "),i("div",{staticClass:"title_b"},[i("p",[t._v("距离活动结束")]),t._v(" "),i("p",{staticClass:"orange"},[t._v(t._s(t.Data.end_date))])]),t._v(" "),i("div",{staticClass:"number_time"},[i("p",{directives:[{name:"show",rawName:"v-show",value:!t.stop,expression:"!stop"}],staticClass:"active_time"},[i("span",[t._v(t._s(t.Day))]),i("em",[t._v("天")]),t._v(" "),i("span",[t._v(t._s(t.Hour))]),i("em",[t._v(":")]),t._v(" "),i("span",[t._v(t._s(t.Min))]),i("em",[t._v(":")]),t._v(" "),i("span",[t._v(t._s(t.Sec))])])]),t._v(" "),t.buy_count?i("div",{staticClass:"business bottom-line"},[i("p",[t._v("\n          已购"),i("span",[t._v(t._s(t.buy_count))]),t._v("人\n        ")])]):t._e(),t._v(" "),i("div",{staticClass:"business"},[i("p",{staticStyle:{"line-height":"2rem"}},[i("span",[t._v(t._s(t.browse_count))]),t._v("人浏览\n        ")])]),t._v(" "),i("div",{staticClass:"user"},t._l(t.browse_member,function(n,e){return i("div",{key:e,staticClass:"img",style:{zIndex:e,right:24*e+5+"px"}},[n.member&&n.member.avatar_image?[i("img",{attrs:{src:n.member.avatar_image,alt:""}})]:t._e()],2)}),0)]):i("div",{staticClass:"business_box"},[t._m(1),t._v(" "),i("div",{staticClass:"title_b"},[i("p",[t._v("距离活动开始")]),t._v(" "),i("p",{staticClass:"orange"},[t._v(t._s(t.Data.star_date))])]),t._v(" "),i("div",{staticClass:"number_time"},[i("p",{directives:[{name:"show",rawName:"v-show",value:!t.stop,expression:"!stop"}],staticClass:"active_time"},[i("span",[t._v(t._s(t.Day))]),i("em",[t._v("天")]),t._v(" "),i("span",[t._v(t._s(t.Hour))]),i("em",[t._v(":")]),t._v(" "),i("span",[t._v(t._s(t.Min))]),i("em",[t._v(":")]),t._v(" "),i("span",[t._v(t._s(t.Sec))])])]),t._v(" "),i("div",{staticClass:"business"},[i("p",{staticStyle:{"line-height":"2rem"}},[i("span",[t._v(t._s(t.browse_count))]),t._v("人浏览\n        ")])]),t._v(" "),i("div",{staticClass:"user"},t._l(t.browse_member,function(n,e){return i("div",{key:e,staticClass:"img",style:{zIndex:e,right:24*e+5+"px"}},[n.member&&n.member.avatar_image?[i("img",{attrs:{src:n.member.avatar_image,alt:""}})]:t._e()],2)}),0)]),t._v(" "),1==t.Data.order_list?i("div",{staticClass:"ranking_list"},[t._m(2),t._v(" "),i("div",{staticClass:"business bottom-line",staticStyle:{"text-align":"center"}},[i("p",[t._v("\n          共"),i("span",[t._v(t._s(t.buy_count))]),t._v("人参与购买\n        ")])]),t._v(" "),i("div",{ref:"store1",staticClass:"store_list"},[i("van-swipe",{ref:"swipe1",attrs:{vertical:"",height:"65",autoplay:4e3,"initial-swipe":0,"show-indicators":!1,touchable:!1,width:3==t.fun.getPhoneEnv()?375:t.clientWidths},on:{change:t.swipeToTop}},t._l(t.orders,function(n,e){return i("van-swipe-item",{key:e},[i("div",{staticClass:"header_box"},[i("div",{staticClass:"header"},[i("img",{attrs:{src:t.fun.isTextEmpty(n.belongs_to_member)?"":n.belongs_to_member.avatar_image}})]),t._v(" "),i("div",{staticClass:"content"},[n.belongs_to_member?i("div",{staticClass:"left"},[i("span",{staticClass:"name"},[t._v(t._s(t.fun.isTextEmpty(n.belongs_to_member)?"":n.belongs_to_member.nickname))]),t._v(" "),i("span",[t._v(t._s(n.belongs_to_member.mobile))])]):t._e(),t._v(" "),i("div",{staticClass:"right"},[i("span",{staticClass:"money"},[t._v("￥"+t._s(n.price)+" "+t._s(n.status_name))]),t._v(" "),i("span",{staticClass:"time"},[t._v(t._s(n.create_time))])])])])])}),1)],1)]):t._e(),t._v(" "),1==t.Data.award_list?i("div",{staticClass:"ranking_list"},[t._m(3),t._v(" "),i("div",{staticClass:"business bottom-line",staticStyle:{"text-align":"center"}},[i("p",[t._v("\n          共"),i("span",[t._v(t._s(t.award_count))]),t._v("人参与\n        ")])]),t._v(" "),i("div",{ref:"store",staticClass:"store_list"},[i("van-swipe",{ref:"swipe",attrs:{vertical:"",height:"65",autoplay:4e3,"initial-swipe":0,"show-indicators":!1,touchable:!1,width:3==t.fun.getPhoneEnv()?375:t.clientWidths},on:{change:t.swipeToTop}},t._l(t.commission_amount,function(n,e){return i("van-swipe-item",{key:e},[i("div",{staticClass:"header_box"},[n.has_one_member?i("div",{staticClass:"header"},[i("img",{attrs:{src:t.fun.isTextEmpty(n.has_one_member)?"":n.has_one_member.avatar}})]):t._e(),t._v(" "),i("div",{staticClass:"content"},[n.has_one_member?i("div",{staticClass:"left"},[i("span",{staticClass:"name"},[t._v(t._s(t.fun.isTextEmpty(n.has_one_member)?"":n.has_one_member.nickname))]),t._v(" "),i("span",[t._v(t._s(n.has_one_member.mobile))])]):t._e(),t._v(" "),i("div",{staticClass:"right"},[i("span",{staticClass:"money"},[t._v("￥"+t._s(n.amount)+" 已领取")]),t._v(" "),i("span",{staticClass:"time"},[t._v(t._s(n.created_at))])])])])])}),1)],1)]):t._e(),t._v(" "),i("div",{staticClass:"active_rule"},[t._m(4),t._v(" "),i("div",{staticClass:"text_down"},[i("div",{class:{overhidden:!t.showAll},attrs:{id:"rule_text"},domProps:{innerHTML:t._s(t.Data.agreement)}}),t._v(" "),i("i",{directives:[{name:"show",rawName:"v-show",value:!t.showAll,expression:"!showAll"}],staticClass:"iconfont icon-down",on:{click:function(n){t.showAll=!0}}}),t._v(" "),i("i",{directives:[{name:"show",rawName:"v-show",value:t.showAll,expression:"showAll"}],staticClass:"iconfont icon-up",on:{click:function(n){t.showAll=!1}}})])]),t._v(" "),i("div",{staticClass:"store_into"},[i("div",{staticClass:"fixed-box",on:{click:t.linkTo}},[i("img",{attrs:{src:e("UVWW"),alt:""}}),t._v(" "),i("span",{staticClass:"text blue"},[t._v("联系商家")])]),t._v(" "),i("div",{staticClass:"fixed-box",on:{click:function(n){return t.linkTo("order")}}},[i("img",{attrs:{src:e("aCUT"),alt:""}}),t._v(" "),i("span",{staticClass:"text orange"},[t._v(t._s(t.fun.isTextEmpty(t.Data.button_name)?"我的订单":t.Data.button_name))])]),t._v(" "),i("div",{staticClass:"fixed-box",on:{click:function(n){return t.linkTo("member")}}},[i("img",{attrs:{src:e("iZD+"),alt:""}}),t._v(" "),i("span",{staticClass:"text yellow"},[t._v(t._s(t.fun.isTextEmpty(t.Data.button_name)?"会员中心":t.Data.button_name))])])]),t._v(" "),i("div",{staticClass:"bottom_btn",style:{width:3==t.fun.getPhoneEnv()?"375px":t.clientWidths+"px"},on:{click:function(n){return n.stopPropagation(),t.toGoods(n)}}},[i("button",{attrs:{type:"button"}},[t._v("立即参与")])]),t._v(" "),i("van-popup",{model:{value:t.show,callback:function(n){t.show=n},expression:"show"}},[i("div",{staticClass:"popop-box"},[i("div",{staticClass:"popup-content"},[i("div",{staticClass:"popup-head"},[i("a",{attrs:{href:"tel:"+t.Data.service_mobile}},[i("div",{staticClass:"green"},[i("img",{attrs:{src:e("Cy6W"),alt:""}}),t._v(" "),i("span",[t._v("一键拨打")])])])]),t._v(" "),i("div",{staticClass:"qr"},[i("img",{staticClass:"code",attrs:{src:t.Data.service_qr,alt:""}}),t._v(" "),i("span",[t._v("长按识别 二维码联系我们")])])]),t._v(" "),i("div",{staticClass:"close",on:{click:function(n){t.show=!1}}},[i("img",{attrs:{src:e("69Rl"),alt:""}})])])])],1)],1)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"title"},[n("div",{staticClass:"left"}),this._v(" "),n("h2",[this._v("活动倒计时")]),this._v(" "),n("div",{staticClass:"right"})])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"title"},[n("div",{staticClass:"left"}),this._v(" "),n("h2",[this._v("活动倒计时")]),this._v(" "),n("div",{staticClass:"right"})])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"title"},[n("div",{staticClass:"left"}),this._v(" "),n("h2",[this._v("最新购买列表")]),this._v(" "),n("div",{staticClass:"right"})])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"title"},[n("div",{staticClass:"left"}),this._v(" "),n("h2",[this._v("领取奖励列表")]),this._v(" "),n("div",{staticClass:"right"})])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"title"},[n("div",{staticClass:"left"}),this._v(" "),n("h2",[this._v("活动介绍")]),this._v(" "),n("div",{staticClass:"right"})])}]};var c=e("VU/8")(o,r,!1,function(t){e("LbHn")},"data-v-c63609b8",null);n.default=c.exports},"69Rl":function(t,n,e){t.exports=e.p+"static/app/img/close@2x.4c6f1b1.png"},Cy6W:function(t,n,e){t.exports=e.p+"static/app/img/phone@2x.f9c6e1d.png"},LbHn:function(t,n,e){var i=e("dcFy");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("1e713f9e",i,!0,{})},UVWW:function(t,n,e){t.exports=e.p+"static/app/img/contact@2x.381f252.png"},aCUT:function(t,n,e){t.exports=e.p+"static/app/img/my_order@2x.1986fe7.png"},dcFy:function(t,n,e){var i=e("kxFB");(t.exports=e("FZ+f")(!1)).push([t.i,"\n#Activity[data-v-c63609b8] {\n  padding-top: 40px;\n  padding-bottom: 100px;\n  width: 100%;\n}\n#Activity .van-popup[data-v-c63609b8] {\n    border-radius: 10px;\n    background: transparent;\n}\n#Activity .popop-box[data-v-c63609b8] {\n    width: 20rem;\n    height: 26rem;\n    margin: 0 auto;\n    border-radius: 10px;\n}\n#Activity .popop-box .popup-content[data-v-c63609b8] {\n      background: #fff;\n      width: 20rem;\n      height: 22rem;\n      border-radius: 10px;\n}\n#Activity .popop-box .popup-head[data-v-c63609b8] {\n      padding: 1rem 0;\n      border-bottom: 1px dashed #ebebeb;\n}\n#Activity .popop-box .popup-head p[data-v-c63609b8] {\n        font-size: 14px;\n        font-weight: bold;\n}\n#Activity .popop-box .green[data-v-c63609b8] {\n      background: #37ce50;\n      color: #fff;\n      width: 7rem;\n      height: 2rem;\n      margin: 0 auto;\n      border-radius: 1rem;\n      line-height: 2rem;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      padding: 0 0.5rem;\n      margin-top: 1.5rem;\n}\n#Activity .popop-box .green img[data-v-c63609b8] {\n        width: 1.2rem;\n        height: 1.2rem;\n        -webkit-box-flex: 0;\n            -ms-flex: 0 0 1.5rem;\n                flex: 0 0 1.5rem;\n        margin-right: 0.2rem;\n}\n#Activity .popop-box .green span[data-v-c63609b8] {\n        -webkit-box-flex: 1;\n            -ms-flex: 1;\n                flex: 1;\n}\n#Activity .popop-box .qr[data-v-c63609b8] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      margin-top: 1rem;\n}\n#Activity .popop-box .qr img[data-v-c63609b8] {\n        width: 11rem;\n        height: 11rem;\n}\n#Activity .popop-box .qr span[data-v-c63609b8] {\n        color: #999999;\n}\n#Activity .popop-box .close[data-v-c63609b8] {\n      position: absolute;\n      bottom: 0;\n      left: calc(50% - 1rem);\n}\n#Activity .popop-box .close img[data-v-c63609b8] {\n        width: 2rem;\n        height: 2rem;\n}\n#Activity .content_box .top_music[data-v-c63609b8] {\n    z-index: 10;\n    position: fixed;\n    top: 2.5rem;\n    background: rgba(0, 0, 0, 0.5);\n    height: 2.5rem;\n    line-height: 2.5rem;\n    width: 100%;\n    padding: 0 0.625rem;\n    text-align: right;\n}\n#Activity .content_box .top_music .icon-active_music_open[data-v-c63609b8] {\n      font-size: 2.25rem;\n      color: #fff;\n      display: block;\n      position: absolute;\n      right: 0.2rem;\n}\n#Activity .content_box .top_music .icon-active_music_close[data-v-c63609b8] {\n      font-size: 2.25rem;\n      color: #fff;\n      display: block;\n      position: absolute;\n      right: 0.2rem;\n}\n#Activity .content_box .top_music .xuanzhuan[data-v-c63609b8] {\n      -webkit-animation: xz-data-v-c63609b8 2s linear infinite;\n              animation: xz-data-v-c63609b8 2s linear infinite;\n}\n@-webkit-keyframes xz-data-v-c63609b8 {\nfrom {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\nto {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@keyframes xz-data-v-c63609b8 {\nfrom {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\nto {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n#Activity .content_box .banner[data-v-c63609b8] {\n    overflow: hidden;\n    margin: 0 auto;\n    padding: 0;\n}\n#Activity .content_box .banner img[data-v-c63609b8] {\n      width: 100%;\n}\n#Activity .content_box .member-people[data-v-c63609b8] {\n    width: 12rem;\n    overflow: hidden;\n    background-color: rgba(0, 0, 0, 0.2);\n    margin: 0 auto;\n    margin-top: 1.25rem;\n    border-radius: 16px;\n    height: 2rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n#Activity .content_box .member-people span[data-v-c63609b8] {\n      font-size: 14px;\n      color: #fff;\n}\n#Activity .content_box .number_time[data-v-c63609b8] {\n    margin: 1.5rem auto;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    background-size: 22.5rem 6.4375rem;\n    color: #333333;\n    font-size: 14px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}\n#Activity .content_box .number_time .active_time[data-v-c63609b8] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n}\n#Activity .content_box .number_time .active_time span[data-v-c63609b8] {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        font-size: 24px;\n        font-weight: bold;\n        background-color: #f2f4f7;\n        padding: 1rem;\n        border-radius: 12px;\n}\n#Activity .content_box .number_time .active_time em[data-v-c63609b8] {\n        font-weight: bold;\n        display: inline-block;\n        padding: 0 0.5rem;\n}\n#Activity .content_box .business[data-v-c63609b8] {\n    margin: 1rem;\n    text-align: left;\n    color: #666666;\n}\n#Activity .content_box .business span[data-v-c63609b8] {\n      color: #ff812d;\n}\n#Activity .content_box .bottom-line[data-v-c63609b8] {\n    padding-bottom: 1rem;\n    border-bottom: 1px solid #ebebeb;\n}\n#Activity .content_box .business_box[data-v-c63609b8] {\n    background: #fff;\n    width: 21.5625rem;\n    margin: 0 auto;\n    margin-top: 1.25rem;\n    border-radius: 0.5rem;\n    padding-bottom: 0.9375rem;\n    position: relative;\n}\n#Activity .content_box .business_box .title[data-v-c63609b8] {\n      height: 3.125rem;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n}\n#Activity .content_box .business_box .title h2[data-v-c63609b8] {\n        font-size: 20px;\n        color: #2748d7;\n        margin: 0 1.25rem;\n}\n#Activity .content_box .business_box .title .left[data-v-c63609b8] {\n        width: 1.125rem;\n        height: 0.6875rem;\n        background-image: url("+i(e("lwC6"))+");\n        background-repeat: no-repeat;\n        background-size: 1.125rem 0.6875rem;\n}\n#Activity .content_box .business_box .title .right[data-v-c63609b8] {\n        width: 1.125rem;\n        height: 0.6875rem;\n        background-image: url("+i(e("lwC6"))+");\n        background-repeat: no-repeat;\n        background-size: 1.125rem 0.6875rem;\n}\n#Activity .content_box .business_box .title_b[data-v-c63609b8] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      margin: 0 1rem;\n}\n#Activity .content_box .business_box .title_b p[data-v-c63609b8] {\n        -webkit-box-flex: 1;\n            -ms-flex: 1;\n                flex: 1;\n        text-align: left;\n}\n#Activity .content_box .business_box .title_b .orange[data-v-c63609b8] {\n        text-align: right;\n        color: #ff812d;\n}\n#Activity .content_box .business_box .user[data-v-c63609b8] {\n      /*display: flex;*/\n      /*flex-wrap: wrap;*/\n}\n#Activity .content_box .business_box .user .img[data-v-c63609b8] {\n        width: 3rem;\n        height: 3rem;\n        border-radius: 1.5rem;\n        margin: 0 auto;\n        overflow: hidden;\n        background: #f2f2f2;\n        position: absolute;\n        bottom: 20px;\n}\n#Activity .content_box .business_box .user .img img[data-v-c63609b8] {\n          width: 100%;\n          height: 100%;\n}\n#Activity .content_box .ranking_list[data-v-c63609b8] {\n    background: #fff;\n    width: 21.5625rem;\n    margin: 1.25rem auto 0;\n    border-radius: 0.5rem;\n    padding-bottom: 0.9375rem;\n}\n#Activity .content_box .ranking_list .title[data-v-c63609b8] {\n      height: 3.125rem;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n}\n#Activity .content_box .ranking_list .title h2[data-v-c63609b8] {\n        font-size: 20px;\n        color: #2748d7;\n        margin: 0 1.25rem;\n}\n#Activity .content_box .ranking_list .title .left[data-v-c63609b8] {\n        width: 1.125rem;\n        height: 0.6875rem;\n        background-image: url("+i(e("lwC6"))+");\n        background-repeat: no-repeat;\n        background-size: 1.125rem 0.6875rem;\n}\n#Activity .content_box .ranking_list .title .right[data-v-c63609b8] {\n        width: 1.125rem;\n        height: 0.6875rem;\n        background-image: url("+i(e("lwC6"))+");\n        background-repeat: no-repeat;\n        background-size: 1.125rem 0.6875rem;\n}\n#Activity .content_box .ranking_list .store_list[data-v-c63609b8] {\n      padding: 0 0.9375rem;\n      height: 17.5rem;\n      overflow: hidden;\n      /*overflow-y: scroll;*/\n}\n#Activity .content_box .ranking_list .store_list .header_box[data-v-c63609b8] {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        position: relative;\n        font-size: 14px;\n        height: 70px;\n}\n#Activity .content_box .ranking_list .store_list .header_box .header[data-v-c63609b8] {\n          -webkit-box-flex: 0;\n              -ms-flex: 0 0 3rem;\n                  flex: 0 0 3rem;\n          width: 3rem;\n          height: 3rem;\n          border-radius: 1.5rem;\n          overflow: hidden;\n          border: solid 0.0625rem #ccc;\n          margin-right: 0.625rem;\n}\n#Activity .content_box .ranking_list .store_list .header_box .header img[data-v-c63609b8] {\n            width: 100%;\n}\n#Activity .content_box .ranking_list .store_list .header_box .content[data-v-c63609b8] {\n          -webkit-box-flex: 1;\n              -ms-flex: 1;\n                  flex: 1;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n}\n#Activity .content_box .ranking_list .store_list .header_box .content span[data-v-c63609b8] {\n            padding: 0.3rem 0;\n}\n#Activity .content_box .ranking_list .store_list .header_box .left[data-v-c63609b8] {\n          text-align: left;\n}\n#Activity .content_box .ranking_list .store_list .header_box .right[data-v-c63609b8] {\n          text-align: right;\n}\n#Activity .content_box .ranking_list .store_list .header_box .left[data-v-c63609b8],\n        #Activity .content_box .ranking_list .store_list .header_box .right[data-v-c63609b8] {\n          -webkit-box-flex: 1;\n              -ms-flex: 1;\n                  flex: 1;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: column;\n                  flex-direction: column;\n}\n#Activity .content_box .ranking_list .store_list .header_box .time[data-v-c63609b8] {\n          font-size: 12px;\n          color: #999999;\n}\n#Activity .content_box .ranking_list .store_list .header_box .money[data-v-c63609b8] {\n          color: #ff812d;\n}\n#Activity .content_box .ranking_list .store_list .header_box .name[data-v-c63609b8],\n        #Activity .content_box .ranking_list .store_list .header_box .money[data-v-c63609b8] {\n          overflow: hidden;\n          text-overflow: ellipsis;\n          white-space: nowrap;\n          width: 8rem;\n}\n#Activity .content_box .ranking_list .store_list .blank[data-v-c63609b8] {\n        height: 60px;\n}\n#Activity .content_box .active_rule[data-v-c63609b8] {\n    background: #fff;\n    width: 21.5625rem;\n    margin: 1.25rem auto 0;\n    border-radius: 0.5rem;\n}\n#Activity .content_box .active_rule .title[data-v-c63609b8] {\n      height: 3.125rem;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n}\n#Activity .content_box .active_rule .title h2[data-v-c63609b8] {\n        font-size: 20px;\n        color: #2748d7;\n        margin: 0 1.25rem;\n}\n#Activity .content_box .active_rule .title .left[data-v-c63609b8] {\n        width: 1.125rem;\n        height: 0.6875rem;\n        background-image: url("+i(e("lwC6"))+");\n        background-repeat: no-repeat;\n        background-size: 1.125rem 0.6875rem;\n}\n#Activity .content_box .active_rule .title .right[data-v-c63609b8] {\n        width: 1.125rem;\n        height: 0.6875rem;\n        background-image: url("+i(e("lwC6"))+");\n        background-repeat: no-repeat;\n        background-size: 1.125rem 0.6875rem;\n}\n#Activity .content_box .active_rule #rule_text[data-v-c63609b8] {\n      padding: 0 1.25rem;\n      text-align: left;\n      color: #666;\n      line-height: 1.375rem;\n}\n#Activity .content_box .active_rule .iconfont[data-v-c63609b8] {\n      width: 2.5rem;\n      height: 2.5rem;\n      line-height: 2.5rem;\n      font-size: 24px;\n      color: #ccc;\n      margin: 0.625rem auto 0;\n      display: block;\n}\n#Activity .content_box .store_into[data-v-c63609b8] {\n    position: fixed;\n    right: 0;\n    top: 60%;\n    z-index: 999;\n}\n#Activity .content_box .store_into .fixed-box[data-v-c63609b8] {\n      padding: 0.2rem 0.5rem;\n      background-color: #ffffff;\n      border-radius: 22px 0 0 22px;\n      opacity: 0.8;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      margin-bottom: 1rem;\n}\n#Activity .content_box .store_into .fixed-box img[data-v-c63609b8] {\n        width: 2rem;\n        height: 2rem;\n        margin-right: 0.5rem;\n}\n#Activity .content_box .store_into .fixed-box .text[data-v-c63609b8] {\n        width: 2rem;\n        font-size: 12px;\n}\n#Activity .content_box .store_into .blue[data-v-c63609b8] {\n      color: #2892ff;\n}\n#Activity .content_box .store_into .orange[data-v-c63609b8] {\n      color: #ff8229;\n}\n#Activity .content_box .store_into .yellow[data-v-c63609b8] {\n      color: #ffb126;\n}\n#Activity .content_box .bottom_btn[data-v-c63609b8] {\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n    z-index: 999;\n}\n#Activity .content_box .bottom_btn button[data-v-c63609b8] {\n      width: 100%;\n      height: 3.125rem;\n      background: #58c232;\n      font-size: 18px;\n      color: #fff;\n      border: none;\n}\n.overhidden[data-v-c63609b8] {\n  height: 5.5rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 5;\n  -webkit-box-orient: vertical;\n}\n",""])},"iZD+":function(t,n,e){t.exports=e.p+"static/app/img/my_member@2x.f05d6a0.png"},lwC6:function(t,n,e){t.exports=e.p+"static/app/img/title_img@2x.14378a7.png"}});