webpackJsonp([334],{W2Q3:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});i("SJI6");var n=i("Tg7E"),o={data:function(){return{eye_open:!1,eye_close:!0,type:"password",form:{mobile:"",mobileErr:"",password:"",passwordErr:"",uuid:0,mid:0,code:"",captcha:""},mydata:"",isApp:!1,apptoken:"",wetach_login:!1,appShow:!0,start1:!1,mobile_login_code:0,imgcode:""}},components:{cTitle:i("Pexp").a},mounted:function(){this.start1=!1,JSON.parse(window.localStorage.getItem("tempIndex")).system&&(this.mobile_login_code=JSON.parse(window.localStorage.getItem("tempIndex")).system.mobile_login_code),JSON.parse(window.localStorage.getItem("tempIndex")).captcha&&(this.imgcode=JSON.parse(window.localStorage.getItem("tempIndex")).captcha.img)},methods:{login:function(t){var e=this,i=this;$http.post("member.login.index",t,"").then(function(t){console.log(t),1===t.result?(window.localStorage.myuserinfo=t.data,console.info("--会员信息--"),console.info(t.msg),i.$store.commit("setLoginStatus",t.data.status),i.fun.isApp()&&(t.msg.uid?YDB.SetUserRelationForPush(t.msg.uid):YDB.SetUserRelationForPush(t.msg.member_id)),t.data.url?window.location.href=t.data.url:i.$router.push(e.fun.getUrl("home"))):i.$store.commit("alerts",t.msg)})},getimgdata:function(){var t=this;$http.get("home-page.getCaptcha").then(function(e){e.data.captcha&&(t.imgcode=e.data.captcha.img)}).catch(function(t){console.log(t)})},mobile_login:function(){if(this.fun.isTextEmpty(this.form.mobile))Object(n.Toast)({message:"请填写手机号",position:"bottom",duration:1500});else{if(1!=this.mobile_login_code){if(this.fun.isTextEmpty(this.form.password))return void Object(n.Toast)({message:"请填写密码",position:"bottom",duration:1500});delete this.form.code}this.form.uuid=0,this.form.mid=null==this.fun.isTextEmpty(window.localStorage.getItem("mid"))?0:window.localStorage.getItem("mid"),this.form.is_sms=this.mobile_login_code,1!=this.mobile_login_code&&delete this.form.code,this.login(this.form)}},verificationCode:function(){var t=this,e=this;this.fun.isTextEmpty(this.form.mobile)?Object(n.Toast)({message:"请填写手机号",timeout:1500}):this.fun.isMoblie(this.form.mobile)?Object(n.Toast)({message:"请填写正确的手机号",timeout:1500}):this.fun.isTextEmpty(this.form.captcha)&&this.imgcode?Object(n.Toast)({message:"请先填图形验证码",timeout:1500}):(this.$yddialog.loading.open("发送中"),$http.get("member.register.alySendCode",{mobile:this.form.mobile,captcha:this.form.captcha,sms_type:1}).then(function(i){t.$yddialog.loading.close(),1===i.result?e.sendCodeAnimation():(Object(n.Toast)({message:i.msg,timeout:1500}),t.form.captcha="",t.getimgdata())},function(t){console.log(t.msg)}))},sendCodeAnimation:function(){var t=this;setTimeout(function(){t.start1=!0,t.$yddialog.loading.close(),Object(n.Toast)({message:"已发送",icon:"success",timeout:1500})},1e3)},register:function(){var t=this;$http.get("member.register.chk-register").then(function(e){1===e.result&&0==e.data.state&&t.$router.push(t.fun.getUrl("register")),0===e.result&&1==e.data.state&&Object(n.Toast)({message:e.data.reason,position:"bottom",duration:1500})}).catch(function(t){console.log(t)})},weixin:function(){var t=this.fun.getKeyByI(),e=this.fun.getKeyByMid(),i=this.fun.getTyep(),n=this.fun.getSiteRoot()+"/addons/yun_shop/api.php?i="+t+"&mid="+e+"&type="+i+"&route=member.login.index&uuid="+YDB_UUID;YDB.WXLogin(0,n)},init_login:function(){var t=this;t.fun.isApp()&&YDB_isWXApp&&(t.apptoken?t.login({apptoken:this.apptoken}):$http.get("member.login.index",{show_wechat_login:!0}).then(function(e){console.log(e),1==e.result&&(t.wetach_login=parseInt(e.data.wetach_login))}))},gotoPwd:function(){this.$router.push(this.fun.getUrl("findpwd"))},isAppLogin:function(){var t=this;$http.post("member.login.phoneSetGet",{}).then(function(e){1==e.result&&(t.appShow=parseInt(e.data.phone_oauth))}).catch(function(t){console.log(t)})},isShowpsd:function(){this.eye_open=0==this.eye_open,this.eye_close=1!=this.eye_close,this.type="password"==this.type?"text":"password"}},activated:function(){"7"==this.fun.getTyep()?this.isAppLogin():this.appShow=!0,this.apptoken=this.$route.query.apptoken,this.init_login()}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"login"}},[i("div",{staticStyle:{position:"relative"}},[i("c-title",{attrs:{hide:!1,text:"用户登录"}}),t._v(" "),i("div",{staticStyle:{height:"20px"}}),t._v(" "),t.imgcode&&1==t.mobile_login_code?i("img",{staticStyle:{width:"20%",height:"40px",position:"absolute",display:"block",left:"74%",top:"13rem","z-index":"999"},attrs:{src:t.imgcode},on:{click:t.getimgdata}}):t._e()],1),t._v(" "),i("div",[t.appShow?i("div",{attrs:{id:"login_box"}},[t._m(0),t._v(" "),i("ul",{staticClass:"login_info"},[i("li",[i("yd-input",{attrs:{slot:"right",type:"text","show-success-icon":!1,"show-error-icon":!1,max:"20",placeholder:"请输入手机号"},slot:"right",model:{value:t.form.mobile,callback:function(e){t.$set(t.form,"mobile",e)},expression:"form.mobile"}})],1),t._v(" "),t.imgcode&&1==t.mobile_login_code?i("li",[i("yd-input",{attrs:{slot:"right",required:"","show-success-icon":!1,"show-error-icon":!1,placeholder:"请输入右侧图形验证码"},slot:"right",model:{value:t.form.captcha,callback:function(e){t.$set(t.form,"captcha","string"==typeof e?e.trim():e)},expression:"form.captcha"}})],1):t._e(),t._v(" "),1==t.mobile_login_code?i("li",{staticClass:"code"},[i("yd-input",{attrs:{slot:"right",required:"","show-success-icon":!1,"show-error-icon":!1,regex:"mobile",placeholder:"请输入验证码"},slot:"right",model:{value:t.form.code,callback:function(e){t.$set(t.form,"code","string"==typeof e?e.trim():e)},expression:"form.code"}}),t._v(" "),i("yd-sendcode",{attrs:{slot:"right",type:"warning"},nativeOn:{click:function(e){return t.verificationCode(e)}},slot:"right",model:{value:t.start1,callback:function(e){t.start1=e},expression:"start1"}})],1):i("li",{staticStyle:{display:"flex","flex-direction":"row"}},[i("yd-input",{staticStyle:{width:"76%"},attrs:{slot:"right",type:"password",placeholder:"请输入密码"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.mobile_login(e)}},slot:"right",model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),t._v(" "),i("span",{staticClass:"forgetBtn"},[i("router-link",{attrs:{to:t.fun.getUrl("findpwd")}},[t._v("忘记密码")])],1)],1)]),t._v(" "),i("div",{staticClass:"login_btn"},[i("mt-button",{staticClass:"login",on:{click:t.mobile_login}},[t._v("登录")]),t._v(" "),1!=t.mobile_login_code?i("mt-button",{staticClass:"register",on:{click:t.register}},[t._v("注册")]):t._e()],1)]):t._e(),t._v(" "),t.wetach_login?i("div",{staticClass:"vip_main"},[i("div",{staticClass:"title"},[t._v("一键登录")]),t._v(" "),i("div",{staticClass:"weixin vip1",on:{click:t.weixin}},[t._m(1),t._v(" "),t._m(2)])]):t._e()])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"login_header"},[e("img",{attrs:{src:i("Rd5w")}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ico1"},[e("i",{staticClass:"fa fa-qrcode"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text"},[e("div",{staticClass:"t1"},[this._v("微信登录")]),this._v(" "),e("div",{staticClass:"t2"},[this._v("微信快捷通道一键登录商城")])])}]};var s=i("VU/8")(o,a,!1,function(t){i("ht1S")},"data-v-6e043166",null);e.default=s.exports},asH2:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"\n#login .forgetBtn[data-v-6e043166] {\n  position: absolute;\n  right: 0.625rem;\n  background: #fff;\n  display: block;\n  width: 4.375rem;\n  height: 1.875rem;\n  text-align: center;\n  line-height: 1.875rem;\n  margin-top: 0.3125rem;\n}\n#login[data-v-6e043166] {\n  overflow: hidden;\n  width: 100%;\n  top: 0;\n  bottom: 0;\n}\n#login .code[data-v-6e043166] {\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n}\n#login .code button[data-v-6e043166] {\n      border: none;\n      background-color: #ebebeb;\n      color: #f15353;\n      font-size: 14px;\n      border-radius: 1.875rem;\n      padding: 0 0.625rem;\n      height: 1.875rem;\n      line-height: 1.875rem;\n      margin-top: 0.25rem;\n}\n#login #login_box[data-v-6e043166] {\n    background-color: #fff;\n    padding-top: 2.5rem;\n    padding-bottom: 1.25rem;\n}\n#login #login_box .login_header[data-v-6e043166] {\n      margin: 0 auto;\n      width: 4.5rem;\n      height: 4.5rem;\n      border-radius: 2.25rem;\n      overflow: hidden;\n}\n#login #login_box .login_header img[data-v-6e043166] {\n        width: 100%;\n}\n#login #login_box .login_info[data-v-6e043166] {\n      margin: 1.25rem;\n}\n#login #login_box .login_info li[data-v-6e043166] {\n        margin: 0 auto;\n        width: 20.625rem;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        font-size: 16px;\n        height: 2.5rem;\n        line-height: 2.5rem;\n        margin-top: 1.25rem;\n        border-bottom: solid 0.0625rem #ccc;\n        position: relative;\n}\n#login #login_box .login_info li input[data-v-6e043166] {\n          width: 12.5rem;\n          border: none;\n}\n#login #login_box .login_info li span[data-v-6e043166] {\n          font-size: 14px;\n          right: 0;\n          color: #333;\n}\n#login #login_box .login_info li .img[data-v-6e043166] {\n          width: 2.5rem;\n          overflow: hidden;\n          position: relative;\n}\n#login #login_box .login_info li .img img[data-v-6e043166] {\n            position: absolute;\n            margin-top: 26%;\n            width: 48%;\n            left: 0.625rem;\n}\n#login #login_box .login_btn[data-v-6e043166] {\n      margin-top: 2.5rem;\n}\n#login #login_box .login_btn button[data-v-6e043166] {\n        width: 20.625rem;\n        height: 2.8125rem;\n        font-size: 16px;\n        margin-bottom: 1.25rem;\n        border-radius: 1.875rem;\n}\n#login #login_box .login_btn .login[data-v-6e043166] {\n        background: #f15353;\n        color: #fff;\n        border: none;\n}\n#login #login_box .login_btn .register[data-v-6e043166] {\n        background: #fff;\n        color: #f15353;\n        border: solid 0.0625rem #f15353;\n}\n#login h1[data-v-6e043166] {\n    color: #42b983;\n}\n#login .mint-button--large[data-v-6e043166] {\n    margin-top: 0.625rem;\n}\n#login #bts[data-v-6e043166] {\n    margin: auto 0.3125rem;\n}\n#login .forget[data-v-6e043166] {\n    line-height: 2.5rem;\n    float: right;\n}\n#login .forget a[data-v-6e043166] {\n      color: #999;\n}\n#login .vip_main[data-v-6e043166] {\n    background: #ffffff;\n    overflow: hidden;\n    margin-top: 0;\n}\n#login .vip_main .title[data-v-6e043166] {\n      font-size: 12px;\n      border-bottom: 0.0625rem solid #eeeeee;\n      text-align: center;\n      padding: 1.625rem 0 0.625rem 0;\n}\n#login .vip_main .weixin[data-v-6e043166] {\n      padding: 0.9375rem 0.625rem;\n      overflow: hidden;\n      font-size: 12px;\n      color: #999;\n}\n#login .vip_main .weixin .ico1[data-v-6e043166],\n      #login .vip_main .weixin .ico2[data-v-6e043166] {\n        width: 15%;\n        float: left;\n}\n#login .vip_main .weixin .ico1 i[data-v-6e043166] {\n        background: #32cd32;\n}\n#login .vip_main .weixin .ico2 i[data-v-6e043166] {\n        background: #fece00;\n}\n#login .vip_main .weixin .text[data-v-6e043166] {\n        float: left;\n        width: 85%;\n}\n#login .vip_main .weixin .text .t1[data-v-6e043166] {\n          font-size: 16px;\n          color: #333;\n          margin-bottom: 0.3125rem;\n          text-align: left;\n}\n#login .vip_main .weixin .text .t2[data-v-6e043166] {\n          text-align: justify;\n}\n#login .vip_main .weixin i[data-v-6e043166] {\n        background: #32cd32;\n        height: 2.25rem;\n        width: 2.25rem;\n        border-radius: 1.125rem;\n        color: #fff;\n        text-align: center;\n        line-height: 2.375rem;\n        font-size: 18px;\n}\n#login .vip_main .vip1[data-v-6e043166] {\n      border-bottom: 0.0625rem solid #eeeeee;\n}\n",""])},ht1S:function(t,e,i){var n=i("asH2");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("a9445c4c",n,!0,{})}});