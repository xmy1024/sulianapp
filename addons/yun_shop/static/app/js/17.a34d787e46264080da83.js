webpackJsonp([17],{"2tJ9":function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAVCAYAAAAuJkyQAAAAuklEQVRIie3WMW7CQBBG4W82lo+Qs3AoREVHmkhxR+VTcRYugMCFKWzASCBHcaR14Sf92p0pdl+xGm2cvteVsBVKgUT0663u0hJEGvb6fLzux/2M9tF/dUeXi7BP2KKUnxKbhD0umWWgQV1g1ycLP4fPpzpl8njLIjTGIjTGUKjCGe0fc+7P+DehqQOyxGaazrPQ1AHZoJ6mQzHYZx2QN2b9qGfBIjTG7IQK3TDL9kn7Wh2XH+NvaVBfAcN0KzsWeGbCAAAAAElFTkSuQmCC"},ALO4:function(t,n,e){var i=e("wxMu");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("4513402b",i,!0,{})},K822:function(t,n,e){t.exports=e.p+"static/app/img/look_bottom.4d6a4a3.png"},Nx9I:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAVCAYAAAAuJkyQAAAAuUlEQVRIie2WSw6DIBRFD9iwgq7SgSMTV8CgiSOX45rcgJ/yOgATGTRotHXCTV7Ie+FzgHCDWvrSItQIBgEcSGjX3IcCAXHbWujvgPeXuoSxLp4zWsPHhNBqoAYM98sAlQZaYLoZBmAGOrX05fbY/n5lr+UZUekf7/qwMlBKGSilK4AsMBK/1d3RFMPY6MFeCXTWWA1QrckVQGeNdQa6NcnGmFIGSikDpfTAG9ttn7SmGPKPca9moPsAEnqiNtVFuA0AAAAASUVORK5CYII="},UO4v:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("Pexp"),a=e("Tg7E"),o=e("GQaK"),s={data:function(){return{Data:{},showAll:!1,time:"",Day:"",Hour:"",Min:"",Sec:"",stop:!1,songStop:!0,button:0,button_name:"",goods_id:"",is_store:0,wheels:[],start:"",end:"",commission_amount:[],timeShow:0,stores:[],business:[],link:"",readyState:0,clientWidths:"",member_count:"",shareInfo:{},isSetShare:0}},activated:function(){var t=this;this.initData(),this.getData(),this.$nextTick(function(){t.initShare()}),this.clientWidths=document.body.clientWidth},mounted:function(){this.clientWidths=document.body.clientWidth,this.autoPlayAudio2()},methods:{initData:function(){this.Data={},this.showAll=!1,this.time="",this.Day="",this.Hour="",this.Min="",this.Sec="",this.stop=!1,this.songStop=!0,this.button=0,this.button_name="",this.goods_id="",this.is_store=0,this.wheels=[],this.start="",this.end="",this.commission_amount=[],this.timeShow=0,this.stores=[],this.business=[],this.link="",this.readyState=0,this.clientWidths="",this.member_count="",this.shareInfo={},this.isSetShare=0},_initScrollCart:function(){this.storeScroll=new o.a(this.$refs.store,{click:!0})},showStore:function(){var t=this;this.$nextTick(function(){t.storeScroll?t.storeScroll.refresh():t._initScrollCart()})},StoreArr:function(){for(var t=Math.ceil(this.stores.length/10),n=1;n<=t;n++){var e=[];e.push(this.stores.slice(10*(n-1),10*n)),this.business.push(e)}},getQueryString:function(t){return decodeURIComponent((new RegExp("[?|&]"+t+"=([^&;]+?)(&|#|;|$)").exec(location.href)||[,""])[1].replace(/\+/g,"%20"))||null},getData:function(){var t=this,n={activity_id:this.getQueryString("mark_id")};$http.get("plugin.business-activity.frontend.controllers.activity.getActivityById",n,"获取中").then(function(n){if(1==n.result){var e=document.getElementById("Activity");if(t.Data=n.data.activity,t.Data.audio_link&&t.autoPlay(),t.link=t.Data.link1,t.button=n.data.activity.button,t.member_count=n.data.member_count,t.goods_id=n.data.goods_id,t.wheels=n.data.wheels,t.is_store_button=n.data.is_store_button,t.stores=n.data.stores.concat(n.data.hotels),t.commission_amount=n.data.commission_amount,t.start=t.Data.countdown_time[0],t.end=t.Data.countdown_time[1],t.timeShow=t.showTime()?t.Data.countdown:0,t.isSetShare=n.data.share_status,t.shareInfo=n.data.share_data,t.fun.setWXTitle(t.Data.name),t.showStore(),t.StoreArr(),t.countdown(),0==t.Data.status)return Object(a.Toast)("活动未启用"),void t.$router.push(t.fun.getUrl("home"));1==t.Data.is_background?e.style.backgroundColor=t.Data.color:2==t.Data.is_background&&(e.style.backgroundImage="url("+t.Data.background_thumb+")",e.style.backgroundSize="100% 100%",e.style.backgroundAttachment="fixed")}else Object(a.Toast)(n.msg)}).catch(function(t){console.log(t)})},initShare:function(){var t=this;$http.post("member.member.wxJsSdkConfig",{url:"android"===t.fun.isIosOrAndroid()?window.location.href:window.initUrl}).then(function(n){1===n.result&&setTimeout(function(){n.data.config&&t.share(n.data)},800)}).catch(function(t){console.log(t)})},share:function(t){var n=this;wx.config(t.config),wx.ready(function(){var e="",i="",o="",s=document.location.href+"&share_tag=2";s=n.fun.isMid(s,t.info.uid),1==n.isSetShare?(e=n.fun.isTextEmpty(n.shareInfo.title)?t.share.title:n.shareInfo.title,i=n.fun.isTextEmpty(n.shareInfo.icon)?t.share.icon:n.shareInfo.icon,o=n.fun.isTextEmpty(n.shareInfo.desc)?t.share.desc:n.shareInfo.desc):(e=t.share.title,i=t.share.icon,o=t.share.desc),wx.showOptionMenu(),wx.onMenuShareTimeline({title:e,link:s,imgUrl:i,success:function(){Object(a.Toast)("分享成功")},cancel:function(){Object(a.Toast)("取消分享")}}),wx.onMenuShareAppMessage({title:e,desc:o,link:s,imgUrl:i,type:"link",dataUrl:"",success:function(){Object(a.Toast)("分享成功")},cancel:function(){Object(a.Toast)("取消分享")}})})},showTime:function(){return(new Date).getTime()/1e3>=this.start},countdown:function(){var t=this,n=Date.parse(new Date)/1e3;if(this.end-n<=0)this.stop=!0;else{var e=this.end-n,i=parseInt(e/60/60/24),a=parseInt(e/60/60%24),o=parseInt(e/60%60),s=parseInt(e%60);a=a>9?a:"0"+a,o=o>9?o:"0"+o,s=s>9?s:"0"+s,this.Day=i,this.Hour=a,this.Min=o,this.Sec=s,setTimeout(function(){t.countdown()},1e3)}},onLoadedmetadata:function(t){this.readyState=this.$refs.audio.readyState,this.autoPlay()},play:function(){this.$refs.audio.paused?(this.$refs.audio.play(),this.songStop=!1):(this.$refs.audio.pause(),this.songStop=!0)},autoPlay:function(){var t=this;this.songStop=!1,this.$refs.audio.play(),this.fun.isWeiXin()&&document.addEventListener("WeixinJSBridgeReady",function(){t.$refs.audio.play(),t.songStop=!1},!1)},toGoods:function(){this.$router.push(this.fun.getUrl("goods",{id:this.goods_id}))},swipeToTop:function(t){t===this.commission_amount.length-2&&this.$refs.swipe.swipeTo(0)},autoPlayAudio2:function(){var t=this;wx.config({debug:!1,appId:"",timestamp:1,nonceStr:"",signature:"",jsApiList:[]}),wx.ready(function(){t.$refs.audio.play()})},linkTo:function(){this.fun.isTextEmpty(this.link)?this.$router.push(this.fun.getUrl("storeApply")):window.location.href=this.link},toPage:function(t){this.fun.isTextEmpty(t.store_name)?this.fun.isTextEmpty(t.hotel_name)||this.$router.push(this.fun.getUrl("HotelHome",{id:t.id,fromHome:1})):this.$router.push(this.fun.getUrl("HomeSeller",{store_id:t.id}))}},components:{cTitle:i.a}},r={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"Activity"}},[e("c-title",{attrs:{hide:!1,text:t.Data.name}}),t._v(" "),e("div",{staticClass:"content_box"},[t.Data.audio_link?e("div",{staticClass:"top_music",style:{width:3==t.fun.getPhoneEnv()?"375px":t.clientWidths+"px"}},[e("i",{directives:[{name:"show",rawName:"v-show",value:!t.songStop,expression:"!songStop"}],staticClass:"iconfont icon-active_music_open xuanzhuan",on:{click:function(n){return n.stopPropagation(),t.play()}}}),t._v(" "),e("i",{directives:[{name:"show",rawName:"v-show",value:t.songStop,expression:"songStop"}],staticClass:"iconfont icon-active_music_close",on:{click:function(n){return n.stopPropagation(),t.play()}}})]):t._e(),t._v(" "),e("audio",{ref:"audio",staticStyle:{display:"none"},attrs:{id:"audio",loop:"loop",controls:"controls",autoplay:"",preload:"",src:t.Data.audio_link},on:{loadedmetadata:t.onLoadedmetadata}}),t._v(" "),e("div",{staticClass:"banner"},[e("a",{attrs:{href:t.Data.link2}},[e("img",{attrs:{src:t.Data.thumb}})])]),t._v(" "),e("p",{staticClass:"member-people"},[e("span",[t._v("已参加活动人数"+t._s(t.member_count)+"人")])]),t._v(" "),1==t.timeShow?e("div",{staticClass:"number_time"},[e("p",{directives:[{name:"show",rawName:"v-show",value:!t.stop,expression:"!stop"}],staticClass:"active_time"},[t._v("\n        活动倒计时：\n        "),e("span",[t._v(t._s(t.Day))]),t._v("天 "),e("span",[t._v(t._s(t.Hour))]),t._v("时 "),e("span",[t._v(t._s(t.Min))]),t._v("分 "),e("span",[t._v(t._s(t.Sec))]),t._v("秒\n      ")]),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:t.stop,expression:"stop"}],staticClass:"active_time"},[e("span",[t._v("活动已结束")])])]):t._e(),t._v(" "),1==t.Data.is_store?e("div",{staticClass:"business_box"},[e("div",{staticClass:"title"},[e("div",{staticClass:"left"}),t._v(" "),e("h2",[t._v(t._s(t.fun.isTextEmpty(t.Data.s_name)?"联盟商家":t.Data.s_name))]),t._v(" "),e("div",{staticClass:"right"})]),t._v(" "),e("p",{staticClass:"title_b"},[t._v("商家排名不分前后")]),t._v(" "),e("div",{staticClass:"business"},[e("van-swipe",{attrs:{loop:!0,autoplay:4e3,width:3==t.fun.getPhoneEnv()?375:t.clientWidths}},t._l(t.business,function(n,i){return e("van-swipe-item",{key:i},[e("div",{staticClass:"user_box"},t._l(n[0],function(n,i){return e("div",{key:i,staticClass:"user",on:{click:function(e){return t.toPage(n)}}},[e("div",{staticClass:"img"},[e("img",{attrs:{src:n.change_thumb}})]),t._v(" "),e("span",[t._v(t._s(n.store_name||n.hotel_name))])])}),0)])}),1)],1)]):t._e(),t._v(" "),1==t.Data.is_rule?e("div",{staticClass:"active_rule"},[e("div",{staticClass:"title"},[e("div",{staticClass:"left"}),t._v(" "),e("h2",[t._v("\n          "+t._s(t.fun.isTextEmpty(t.Data.rule_name)?"活动规则":t.Data.rule_name)+"\n        ")]),t._v(" "),e("div",{staticClass:"right"})]),t._v(" "),e("div",{staticClass:"text_down"},[e("p",{staticClass:"rule_text",class:{overhidden:!t.showAll}},[t._v("\n          "+t._s(t.Data.rule_content)+"\n        ")]),t._v(" "),e("i",{directives:[{name:"show",rawName:"v-show",value:!t.showAll,expression:"!showAll"}],staticClass:"iconfont icon-down",on:{click:function(n){t.showAll=!0}}}),t._v(" "),e("i",{directives:[{name:"show",rawName:"v-show",value:t.showAll,expression:"showAll"}],staticClass:"iconfont icon-up",on:{click:function(n){t.showAll=!1}}})])]):t._e(),t._v(" "),1==t.Data.is_wheel?e("div",{staticClass:"free_detail"},[e("div",{staticClass:"title"},[e("div",{staticClass:"left"}),t._v(" "),e("h2",[t._v("\n          "+t._s(t.fun.isTextEmpty(t.Data.wheel_name)?"免单详情":t.Data.wheel_name)+"\n        ")]),t._v(" "),e("div",{staticClass:"right"})]),t._v(" "),e("div",{staticClass:"list_box"},[e("van-swipe",{attrs:{"show-indicators":!1,autoplay:4e3,loop:!0,width:3==t.fun.getPhoneEnv()?375:t.clientWidths}},t._l(t.wheels,function(n,i,a){return e("van-swipe-item",{key:i},[e("div",{staticClass:"store_info"},[e("div",{staticClass:"top"},[e("div",{staticClass:"img"},[t.fun.isTextEmpty(n.has_one_store)?t._e():e("img",{attrs:{src:n.has_one_store.change_thumb}}),t._v(" "),t.fun.isTextEmpty(n.has_one_store)?e("img",{attrs:{src:n.has_one_hotel.change_thumb}}):t._e()]),t._v(" "),e("ul",{staticClass:"info"},[e("li",[e("i",{staticClass:"iconfont icon-service_l"}),t._v(" "),t.fun.isTextEmpty(n.has_one_store)?t._e():e("span",[t._v(t._s(n.has_one_store.store_name))]),t._v(" "),t.fun.isTextEmpty(n.has_one_store)?e("span",[t._v(t._s(n.has_one_hotel.hotel_name))]):t._e()]),t._v(" "),e("li",[e("i",{staticClass:"iconfont icon-service_m"}),t._v(" "),t.fun.isTextEmpty(n.has_one_store)?t._e():e("span",[t._v(t._s(n.has_one_store.mobile))]),t._v(" "),t.fun.isTextEmpty(n.has_one_store)?e("span",[t._v(t._s(n.has_one_hotel.mobile))]):t._e()]),t._v(" "),e("li",[e("i",{staticClass:"iconfont icon-service_n"}),t._v(" "),t.fun.isTextEmpty(n.has_one_store)?t._e():e("span",[t._v(t._s(n.has_one_store.address))]),t._v(" "),t.fun.isTextEmpty(n.has_one_store)?e("span",[t._v(t._s(n.has_one_hotel.address))]):t._e()])]),t._v(" "),e("div",{staticClass:"top_right"},[t._v("\n                  "+t._s(i+1)+"/"+t._s(t.wheels.length)+"\n                ")])]),t._v(" "),e("div",{staticClass:"store_banner"},[e("a",{attrs:{href:n.link}},[e("img",{attrs:{src:n.thumb}})])])])])}),1)],1),t._v(" "),t._m(0),t._v(" "),t._m(1)]):t._e(),t._v(" "),1==t.Data.is_ranking?e("div",{staticClass:"ranking_list"},[e("div",{staticClass:"title"},[e("div",{staticClass:"left"}),t._v(" "),e("h2",[t._v("\n          "+t._s(t.fun.isTextEmpty(t.Data.ranking)?"佣金排行":t.Data.ranking)+"\n        ")]),t._v(" "),e("div",{staticClass:"right"})]),t._v(" "),e("div",{ref:"store",staticClass:"store_list"},[e("van-swipe",{ref:"swipe",attrs:{vertical:"",height:"80",autoplay:4e3,"initial-swipe":0,"show-indicators":!1,touchable:t.commission_amount.length>=4,width:3==t.fun.getPhoneEnv()?375:t.clientWidths},on:{change:t.swipeToTop}},t._l(t.commission_amount,function(n,i){return e("van-swipe-item",{key:i},[e("div",{staticClass:"header_box"},[e("div",{staticClass:"header"},[e("img",{attrs:{src:t.fun.isTextEmpty(n.member)?"":n.member.avatar}})]),t._v(" "),e("span",{staticClass:"\n                     name"},[t._v(t._s(t.fun.isTextEmpty(n.member)?"":n.member.nickname))]),t._v(" "),e("span",{staticClass:"right"},[t._v(t._s(n.total))])])])}),1)],1)]):t._e(),t._v(" "),e("div",{staticClass:"store_into",on:{click:t.linkTo}},[e("div",{staticClass:"up animated bag"},[e("span",{staticClass:"text"},[t._v(t._s(t.fun.isTextEmpty(t.Data.button_name)?"商家入驻":t.Data.button_name))])])]),t._v(" "),e("div",{staticClass:"bottom_btn",style:{width:3==t.fun.getPhoneEnv()?"375px":t.clientWidths+"px"},on:{click:function(n){return n.stopPropagation(),t.toGoods(n)}}},[e("button",{attrs:{type:"button"}},[t._v("立即抢购")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"look_detail"},[n("div",{staticClass:"look_left"}),this._v(" "),n("h2",[this._v("点击查看详情")]),this._v(" "),n("div",{staticClass:"look_left"})])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"look_bottom"},[n("div",{staticClass:"left"}),this._v(" "),n("div",{staticClass:"right"})])}]};var c=e("VU/8")(s,r,!1,function(t){e("ALO4")},"data-v-55dbc1b0",null);n.default=c.exports},cGFJ:function(t,n,e){t.exports=e.p+"static/app/img/store_into.b8a97f3.png"},eTS2:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAMCAYAAAAkuj5RAAAAtElEQVRIicWWQQ6DIBREnz/d9zZ6g7YLjstGT6AJl/EGXRQTSgCRxM8kLoCZN2EBMjjnSGgEBmBLLVpr/8bGmJRNhSMZ8wLMwJQjVkiFE29g8uan/1rL1TgSmWdvPNRSrsqRgjkOjY2lt3LkxByGlpPyLhzhd7prVfJ24QiwAh9gLxh34E3mOvTqwjnOwOonUqGa0rBclRPeQlsidKW0Cyf+D4ShllJ1ziMTelF4Alwov53zBVjcXqxoqKlxAAAAAElFTkSuQmCC"},iSiR:function(t,n,e){t.exports=e.p+"static/app/img/number_time_bg.f652bfc.png"},wxMu:function(t,n,e){var i=e("kxFB");(t.exports=e("FZ+f")(!1)).push([t.i,'\n@charset "UTF-8";\n#Activity[data-v-55dbc1b0] {\n  padding-top: 40px;\n  padding-bottom: 136px;\n  width: 100%;\n}\n#Activity .content_box .top_music[data-v-55dbc1b0] {\n    z-index: 10;\n    position: fixed;\n    top: 2.5rem;\n    background: rgba(0, 0, 0, 0.5);\n    height: 2.5rem;\n    line-height: 2.5rem;\n    width: 100%;\n    padding: 0 0.625rem;\n    text-align: right;\n}\n#Activity .content_box .top_music .icon-active_music_open[data-v-55dbc1b0] {\n      font-size: 2.25rem;\n      color: #fff;\n      display: block;\n      position: absolute;\n      right: 0.2rem;\n}\n#Activity .content_box .top_music .icon-active_music_close[data-v-55dbc1b0] {\n      font-size: 2.25rem;\n      color: #fff;\n      display: block;\n      position: absolute;\n      right: 0.2rem;\n}\n#Activity .content_box .top_music .xuanzhuan[data-v-55dbc1b0] {\n      -webkit-animation: xz-data-v-55dbc1b0 2s linear infinite;\n              animation: xz-data-v-55dbc1b0 2s linear infinite;\n}\n@-webkit-keyframes xz-data-v-55dbc1b0 {\nfrom {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\nto {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@keyframes xz-data-v-55dbc1b0 {\nfrom {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\nto {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n#Activity .content_box .banner[data-v-55dbc1b0] {\n    width: 21.5625rem;\n    overflow: hidden;\n    background: #f2f2f2;\n    margin: 0 auto;\n}\n#Activity .content_box .banner a[data-v-55dbc1b0] {\n      width: 100%;\n      height: 100%;\n      display: block;\n}\n#Activity .content_box .banner img[data-v-55dbc1b0] {\n      width: 100%;\n      height: 100%;\n      display: block;\n}\n#Activity .content_box .member-people[data-v-55dbc1b0] {\n    width: 12rem;\n    overflow: hidden;\n    background-color: rgba(0, 0, 0, 0.2);\n    margin: 0 auto;\n    margin-top: 1.25rem;\n    border-radius: 16px;\n    height: 2rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n#Activity .content_box .member-people span[data-v-55dbc1b0] {\n      font-size: 14px;\n      color: #fff;\n}\n#Activity .content_box .number_time[data-v-55dbc1b0] {\n    width: 22.5rem;\n    height: 5.9rem;\n    margin: 0 auto;\n    margin-top: 1.25rem;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    background-image: url('+i(e("iSiR"))+");\n    background-repeat: no-repeat;\n    background-size: 22.5rem 6.4375rem;\n    color: #fff;\n    font-size: 14px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}\n#Activity .content_box .number_time .active_number span[data-v-55dbc1b0] {\n      color: #fca232;\n}\n#Activity .content_box .number_time .active_time[data-v-55dbc1b0] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n}\n#Activity .content_box .number_time .active_time span[data-v-55dbc1b0] {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        font-size: 24px;\n}\n#Activity .content_box .business_box[data-v-55dbc1b0] {\n    background: #fff;\n    width: 21.5625rem;\n    margin: 0 auto;\n    margin-top: 1.25rem;\n    border-radius: 0.5rem;\n    padding-bottom: 0.9375rem;\n}\n#Activity .content_box .business_box .title[data-v-55dbc1b0] {\n      height: 3.125rem;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n}\n#Activity .content_box .business_box .title h2[data-v-55dbc1b0] {\n        font-size: 20px;\n        color: #f7806c;\n        margin: 0 1.25rem;\n}\n#Activity .content_box .business_box .title .left[data-v-55dbc1b0] {\n        width: 1.125rem;\n        height: 0.6875rem;\n        background-image: url("+i(e("Nx9I"))+");\n        background-repeat: no-repeat;\n        background-size: 1.125rem 0.6875rem;\n}\n#Activity .content_box .business_box .title .right[data-v-55dbc1b0] {\n        width: 1.125rem;\n        height: 0.6875rem;\n        background-image: url("+i(e("2tJ9"))+");\n        background-repeat: no-repeat;\n        background-size: 1.125rem 0.6875rem;\n}\n#Activity .content_box .business_box .title_b[data-v-55dbc1b0] {\n      font-size: 14px;\n      color: #8c8c8c;\n}\n#Activity .content_box .business_box .business[data-v-55dbc1b0] {\n      margin-top: 0.9375rem;\n}\n#Activity .content_box .business_box .business .user_box[data-v-55dbc1b0] {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n}\n#Activity .content_box .business_box .business .user_box .user[data-v-55dbc1b0] {\n          width: 20%;\n          margin-bottom: 1.625rem;\n}\n#Activity .content_box .business_box .business .user_box .user .img[data-v-55dbc1b0] {\n            width: 3rem;\n            height: 3rem;\n            border-radius: 1.5rem;\n            margin: 0 auto;\n            overflow: hidden;\n            background: #f2f2f2;\n}\n#Activity .content_box .business_box .business .user_box .user .img img[data-v-55dbc1b0] {\n              width: 100%;\n              height: 100%;\n}\n#Activity .content_box .business_box .business .user_box .user span[data-v-55dbc1b0] {\n            line-height: 1.5rem;\n            display: block;\n            word-break: break-word;\n            padding: 0 0.25rem;\n}\n#Activity .content_box .active_rule[data-v-55dbc1b0] {\n    background: #fff;\n    width: 21.5625rem;\n    margin: 1.25rem auto 0;\n    border-radius: 0.5rem;\n}\n#Activity .content_box .active_rule .title[data-v-55dbc1b0] {\n      height: 3.125rem;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n}\n#Activity .content_box .active_rule .title h2[data-v-55dbc1b0] {\n        font-size: 20px;\n        color: #f7806c;\n        margin: 0 1.25rem;\n}\n#Activity .content_box .active_rule .title .left[data-v-55dbc1b0] {\n        width: 1.125rem;\n        height: 0.6875rem;\n        background-image: url("+i(e("Nx9I"))+");\n        background-repeat: no-repeat;\n        background-size: 1.125rem 0.6875rem;\n}\n#Activity .content_box .active_rule .title .right[data-v-55dbc1b0] {\n        width: 1.125rem;\n        height: 0.6875rem;\n        background-image: url("+i(e("2tJ9"))+");\n        background-repeat: no-repeat;\n        background-size: 1.125rem 0.6875rem;\n}\n#Activity .content_box .active_rule .rule_text[data-v-55dbc1b0] {\n      padding: 0 1.25rem;\n      text-align: left;\n      color: #666;\n      line-height: 1.375rem;\n}\n#Activity .content_box .active_rule .iconfont[data-v-55dbc1b0] {\n      width: 2.5rem;\n      height: 2.5rem;\n      line-height: 2.5rem;\n      font-size: 24px;\n      color: #ccc;\n      margin: 0.625rem auto 0;\n      display: block;\n}\n#Activity .content_box .free_detail[data-v-55dbc1b0] {\n    background: #fff;\n    width: 21.5625rem;\n    margin: 1.25rem auto 0;\n    border-radius: 0.5rem;\n    padding-bottom: 0.9375rem;\n    position: relative;\n}\n#Activity .content_box .free_detail .title[data-v-55dbc1b0] {\n      height: 3.125rem;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n}\n#Activity .content_box .free_detail .title h2[data-v-55dbc1b0] {\n        font-size: 20px;\n        color: #f7806c;\n        margin: 0 1.25rem;\n}\n#Activity .content_box .free_detail .title .left[data-v-55dbc1b0] {\n        width: 1.125rem;\n        height: 0.6875rem;\n        background-image: url("+i(e("Nx9I"))+");\n        background-repeat: no-repeat;\n        background-size: 1.125rem 0.6875rem;\n}\n#Activity .content_box .free_detail .title .right[data-v-55dbc1b0] {\n        width: 1.125rem;\n        height: 0.6875rem;\n        background-image: url("+i(e("2tJ9"))+");\n        background-repeat: no-repeat;\n        background-size: 1.125rem 0.6875rem;\n}\n#Activity .content_box .free_detail .list_box[data-v-55dbc1b0] {\n      width: 19.6875rem;\n      margin: 0.9375rem auto 0;\n}\n#Activity .content_box .free_detail .list_box .store_info .top[data-v-55dbc1b0] {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        position: relative;\n}\n#Activity .content_box .free_detail .list_box .store_info .top .img img[data-v-55dbc1b0] {\n          width: 100%;\n          width: 3.75rem;\n          height: 3.75rem;\n          border-radius: 1.875rem;\n          border: solid 0.0625rem #ccc;\n          margin-right: 0.625rem;\n}\n#Activity .content_box .free_detail .list_box .store_info .top .info[data-v-55dbc1b0] {\n          overflow: hidden;\n          width: 12.5rem;\n}\n#Activity .content_box .free_detail .list_box .store_info .top .info li[data-v-55dbc1b0] {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            line-height: 1.25rem;\n}\n#Activity .content_box .free_detail .list_box .store_info .top .info li .iconfont[data-v-55dbc1b0] {\n              margin-right: 0.25rem;\n              font-size: 1rem;\n}\n#Activity .content_box .free_detail .list_box .store_info .top .info li span[data-v-55dbc1b0] {\n              text-align: left;\n}\n#Activity .content_box .free_detail .list_box .store_info .top .top_right[data-v-55dbc1b0] {\n          position: absolute;\n          right: 0;\n          color: #fca232;\n}\n#Activity .content_box .free_detail .list_box .store_info .store_banner[data-v-55dbc1b0] {\n        margin-top: 1.25rem;\n        width: 100%;\n        background: #f2f2f2;\n        border-radius: 0.375rem;\n        overflow: hidden;\n}\n#Activity .content_box .free_detail .list_box .store_info .store_banner img[data-v-55dbc1b0] {\n          width: 100%;\n}\n#Activity .content_box .free_detail .look_detail[data-v-55dbc1b0] {\n      height: 2.5rem;\n      line-height: 2.5rem;\n      color: #8c8c8c;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n}\n#Activity .content_box .free_detail .look_detail h2[data-v-55dbc1b0] {\n        font-weight: normal;\n        margin: 0 1.25rem;\n}\n#Activity .content_box .free_detail .look_detail .look_left[data-v-55dbc1b0] {\n        width: 1.5rem;\n        height: 0.375rem;\n        background-image: url("+i(e("eTS2"))+");\n        background-size: 1.5rem 0.375rem;\n        background-repeat: no-repeat;\n}\n#Activity .content_box .free_detail .look_bottom[data-v-55dbc1b0] {\n      position: absolute;\n      bottom: -2.375rem;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      padding: 0 1.25rem;\n      width: 100%;\n}\n#Activity .content_box .free_detail .look_bottom .left[data-v-55dbc1b0],\n      #Activity .content_box .free_detail .look_bottom .right[data-v-55dbc1b0] {\n        width: 1rem;\n        height: 3.375rem;\n        background-image: url("+i(e("K822"))+");\n        background-size: 1rem 3.375rem;\n        background-repeat: no-repeat;\n}\n#Activity .content_box .ranking_list[data-v-55dbc1b0] {\n    background: #fff;\n    width: 21.5625rem;\n    margin: 1.25rem auto 0;\n    border-radius: 0.5rem;\n    padding-bottom: 0.9375rem;\n}\n#Activity .content_box .ranking_list .title[data-v-55dbc1b0] {\n      height: 3.125rem;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n}\n#Activity .content_box .ranking_list .title h2[data-v-55dbc1b0] {\n        font-size: 20px;\n        color: #f7806c;\n        margin: 0 1.25rem;\n}\n#Activity .content_box .ranking_list .title .left[data-v-55dbc1b0] {\n        width: 1.125rem;\n        height: 0.6875rem;\n        background-image: url("+i(e("Nx9I"))+");\n        background-repeat: no-repeat;\n        background-size: 1.125rem 0.6875rem;\n}\n#Activity .content_box .ranking_list .title .right[data-v-55dbc1b0] {\n        width: 1.125rem;\n        height: 0.6875rem;\n        background-image: url("+i(e("2tJ9"))+");\n        background-repeat: no-repeat;\n        background-size: 1.125rem 0.6875rem;\n}\n#Activity .content_box .ranking_list .store_list[data-v-55dbc1b0] {\n      padding: 0 0.9375rem;\n      height: 17.5rem;\n      overflow: hidden;\n      overflow-y: scroll;\n}\n#Activity .content_box .ranking_list .store_list .header_box[data-v-55dbc1b0] {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        position: relative;\n        border-bottom: solid 0.0625rem #ccc;\n        font-size: 16px;\n        height: 70px;\n}\n#Activity .content_box .ranking_list .store_list .header_box .header[data-v-55dbc1b0] {\n          width: 3rem;\n          height: 3rem;\n          border-radius: 1.5rem;\n          overflow: hidden;\n          border: solid 0.0625rem #ccc;\n          margin-right: 0.625rem;\n}\n#Activity .content_box .ranking_list .store_list .header_box .header img[data-v-55dbc1b0] {\n            width: 100%;\n}\n#Activity .content_box .ranking_list .store_list .header_box .name[data-v-55dbc1b0] {\n          overflow: hidden;\n          text-overflow: ellipsis;\n          white-space: nowrap;\n          width: 10rem;\n          text-align: left;\n          font-size: 14px;\n}\n#Activity .content_box .ranking_list .store_list .header_box .right[data-v-55dbc1b0] {\n          position: absolute;\n          right: 1.5rem;\n          font-size: 14px;\n          color: #fca232;\n}\n#Activity .content_box .ranking_list .store_list .blank[data-v-55dbc1b0] {\n        height: 60px;\n}\n#Activity .content_box .store_into[data-v-55dbc1b0] {\n    position: fixed;\n    bottom: 5rem;\n    left: 0.625rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n#Activity .content_box .store_into .animated[data-v-55dbc1b0] {\n      -webkit-animation-duration: 2s;\n      animation-duration: 2s;\n      /*动画时间*/\n      -webkit-animation-fill-mode: both;\n      animation-fill-mode: both;\n      /*播放后的状态*/\n}\n#Activity .content_box .store_into .animated[data-v-55dbc1b0] {\n      -webkit-animation-iteration-count: infinite;\n      animation-iteration-count: infinite;\n      /*动作循环的次数：infinite 无限循环*/\n}\n#Activity .content_box .store_into .animated[data-v-55dbc1b0] {\n      -webkit-animation-duration: 2s;\n      animation-duration: 2s;\n      /*动画时间*/\n}\n#Activity .content_box .store_into .up[data-v-55dbc1b0] {\n      -webkit-animation-name: upAnimation-data-v-55dbc1b0;\n      animation-name: upAnimation-data-v-55dbc1b0;\n      /*动画的名称*/\n      -webkit-transform-origin: center bottom;\n      transform-origin: center bottom;\n      /*设置动画旋转元素的基点为*/\n      cursor: pointer;\n}\n#Activity .content_box .store_into .bag[data-v-55dbc1b0] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      background-image: url("+i(e("cGFJ"))+");\n      background-size: cover;\n      width: 80px;\n      height: 80px;\n}\n#Activity .content_box .store_into .bag .text[data-v-55dbc1b0] {\n        margin-left: 0.8rem;\n        margin-top: 1.5rem;\n        color: #fff;\n        width: 2rem;\n        font-size: 12px;\n}\n@-webkit-keyframes upAnimation-data-v-55dbc1b0 {\n0%,\n  100%,\n  20%,\n  50%,\n  80% {\n    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n}\n40%,\n  43% {\n    -webkit-transition-timing-function: cubic-bezier(0.755, 0.5, 0.855, 0.06);\n    transition-timing-function: cubic-bezier(0.755, 0.5, 0.855, 0.06);\n    -webkit-transform: translate3d(0, -30px, 0);\n    transform: translate3d(0, -30px, 0);\n}\n70% {\n    -webkit-transition-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    transition-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    -webkit-transform: translate3d(0, -15px, 0);\n    transform: translate3d(0, -15px, 0);\n}\n90% {\n    -webkit-transform: translate3d(0, -4px, 0);\n    transform: translate3d(0, -4px, 0);\n}\n}\n@keyframes upAnimation-data-v-55dbc1b0 {\n0%,\n  100%,\n  20%,\n  50%,\n  80% {\n    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n}\n40%,\n  43% {\n    -webkit-transition-timing-function: cubic-bezier(0.755, 0.5, 0.855, 0.06);\n    transition-timing-function: cubic-bezier(0.755, 0.5, 0.855, 0.06);\n    -webkit-transform: translate3d(0, -30px, 0);\n    transform: translate3d(0, -30px, 0);\n}\n70% {\n    -webkit-transition-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    transition-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    -webkit-transform: translate3d(0, -15px, 0);\n    transform: translate3d(0, -15px, 0);\n}\n90% {\n    -webkit-transform: translate3d(0, -4px, 0);\n    transform: translate3d(0, -4px, 0);\n}\n}\n#Activity .content_box .bottom_btn[data-v-55dbc1b0] {\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n}\n#Activity .content_box .bottom_btn button[data-v-55dbc1b0] {\n      width: 100%;\n      height: 3.125rem;\n      background: #f7806c;\n      font-size: 18px;\n      color: #fff;\n      border: none;\n}\n.overhidden[data-v-55dbc1b0] {\n  height: 5.5rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 5;\n  -webkit-box-orient: vertical;\n}\n",""])}});