webpackJsonp([427],{"6ZUQ":function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,'\n@charset "UTF-8";\n#all[data-v-4ac0352c] {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n}\nbody[data-v-4ac0352c],\nhtml[data-v-4ac0352c],\n.home-address-con[data-v-4ac0352c] {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  margin: 0;\n  font-family: "\\5FAE\\8F6F\\96C5\\9ED1";\n}\n.home-address-con[data-v-4ac0352c] {\n  margin-top: 2.5rem;\n}\n',""])},Rwvs:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("Pexp"),i=n("Tg7E"),o={data:function(){return{lng:0,lat:0,city:"",storeName:""}},mounted:function(){this.init(),this.getAddress()},created:function(){},activated:function(){},methods:{createMap:function(){var t=new BMap.Map("map"),e=new BMap.Point(this.lng,this.lat),n=new BMap.Marker(e);t.centerAndZoom(e,15),t.centerAndZoom(new BMap.Point(this.lng,this.lat),100),t.addControl(new BMap.MapTypeControl),t.setCurrentCity(this.city),t.enableScrollWheelZoom(!0),n.addEventListener("touch",function(){this.fun.isWeiXin()?this.goToWXAdress(items):window.location.href="https://m.amap.com/navi/?dest="+this.lng+","+this.lat+"&destName="+this.storeName+"&key=43de56d8e65fe042493541213d9ad7b0"}),t.addOverlay(n)},goToWXAdress:function(){$http.post("member.member.wxJsSdkConfig",{url:"android"===this.fun.isIosOrAndroid()?window.location.href:window.initUrl}," ").then(function(t){1===t.result?(wx.config({debug:!1,appId:t.data.config.appId,nonceStr:t.data.config.nonceStr,timestamp:t.data.config.timestamp,url:t.data.config.url,signature:t.data.config.signature,jsApiList:["checkJsApi","openLocation","getLocation"]}),wx.checkJsApi({jsApiList:["getLocation"],success:function(t){0==t.checkResult.getLocation&&alert("你的微信版本太低，不支持微信JS接口，请升级到最新的微信版本！")}}),wx.ready(function(){wx.getLocation({type:"gcj02",success:function(t){wx.openLocation({latitude:this.lat,longitude:this.lng,name:this.storeName,address:"门店地址",scale:20})},cancel:function(t){alert("用户拒绝授权获取地理位置")}})}),wx.error(function(t){console.log(t)})):Object(i.Toast)(t.msg)},function(t){console.log(t)})},getAddress:function(){var t=this;$http.get("plugin.store-cashier.frontend.store.get-store-info.get-info-by-store-id",{store_id:this.$route.params.store_id}).then(function(e){1!==e.result||t.fun.isTextEmpty(e.data)||(t.lat=parseFloat(e.data.lat),t.lng=parseFloat(e.data.lng),t.storeName=e.data.store_name,t.city=e.data.store_address.slice(0,2),t.createMap())}).catch(function(t){console.log(t)})},init:function(){this.lng=0,this.lat=0,this.store_name=""}},components:{cTitle:a.a},compiled:function(){}},s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"all"}},[e("c-title",{attrs:{hide:!1,text:"门店地址"}}),this._v(" "),e("div",{staticClass:"home-address-con",attrs:{id:"map"}})],1)},staticRenderFns:[]};var c=n("VU/8")(o,s,!1,function(t){n("YS2E")},"data-v-4ac0352c",null);e.default=c.exports},YS2E:function(t,e,n){var a=n("6ZUQ");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("128c81e2",a,!0,{})}});