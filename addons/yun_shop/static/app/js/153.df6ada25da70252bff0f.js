webpackJsonp([153],{"+6Bu":function(t,e,i){"use strict";e.__esModule=!0,e.default=function(t,e){var i={};for(var o in t)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(t,o)&&(i[o]=t[o]);return i}},"9RrX":function(t,e,i){var o=i("kklg");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i("rjj0")("4400e422",o,!0,{})},HrL9:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i("+6Bu"),a=i.n(o),n=i("Tg7E"),r=i("C8p+"),s=i("Pexp");Date.prototype.Format=function(t){var e={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var i in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),e)new RegExp("("+i+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[i]:("00"+e[i]).substr((""+e[i]).length)));return t};var l={data:function(){return{isset:"",protocol_content:"",show2:!1,imgcode:"",agreementStatus:!1,agreementCB:!0,start1:!1,form:{country:"86",mobile:"",mobileErr:"",password:"",passwordErr:"",confirm_password:"",confirm_passwordErr:"",captcha:"",invite_code:""},diyStatus:0,form_id:"",pickerValue:"2017-09-27",startDate:new Date("1900"),showCity:!1,district:district,currentDateKey:"",currentCityKey:"",checks:[],isValidation:!0,diyform:{},diydata:[],types:{0:"diyinput",1:"diytextarea",3:"diycheckbox",4:"diyradio",2:"diyselect",7:"diydate",9:"diycity"},invite:"",isrequired:"",country_code:0}},mounted:function(){var t=this;this.isset=sessionStorage.getItem("isset");var e={};this.isset&&(sessionStorage.removeItem("isset"),e={close:1}),$http.get("member.register.getInviteCode",e).then(function(e){if(1==e.data.status)return t.invite=e.data.status,t.isrequired=e.data.required,t.country_code=e.data.country_code,void(t.form.invite_code=e.data.invitation_code.invite_code)})},methods:{init:function(){this.agreementCB=!0,this.start1=!1,this.form={country:"86",mobile:"",mobileErr:"",password:"",passwordErr:"",confirm_password:"",confirm_passwordErr:"",close:1},this.diyStatus=0,this.form_id="",this.pickerValue="2017-09-27",this.showCity=!1,this.currentDateKey="",this.currentCityKey="",this.checks=[],this.isValidation=!0,this.diyform={},this.diydata=[],this.show2=!1},getProtocolStatus:function(){var t=this;$http.get("setting.get-member-protocol",{}).then(function(e){1==e.result?(t.agreementStatus="0"!=e.data.protocol,t.protocol_content=e.data.content):t.agreementStatus=!1},function(e){console.log(e.msg),t.agreementStatus=!1})},getDiyFormStatus:function(){var t=this;$http.get("setting.get-register-diy-form",{}).then(function(e){1==e.result&&1==e.data.status?(t.diyStatus=1,t.form_id=e.data.form_id,t.getDiyFormInfo(e.data.form_id)):t.diyStatus=0},function(e){console.log(e.msg),t.diyStatus=0})},getDiyFormInfo:function(t){var e=this;$http.get("plugin.diyform.api.diy-form.get-diy-form-by-id",{form_id:t}).then(function(t){if(1==t.result){e.diyform=t.data;var i=e.diyform.fields;for(var o in console.log(i,456),i){if("diycheckbox"==e.types[i[o].data_type])var a={name:o,data:i[o],value:[],type:e.types[i[o].data_type]};else if("diydate"==e.types[i[o].data_type])a={name:o,data:i[o],value:"",type:e.types[i[o].data_type]};else a={name:o,data:i[o],value:"",type:e.types[i[o].data_type]};e.diydata.push(a)}}},function(t){console.log(t.msg)})},verificationCode:function(){var t=this,e=this;this.fun.isTextEmpty(this.form.country)?Object(n.Toast)("请输入国际区号"):this.fun.isTextEmpty(this.form.mobile)?Object(n.Toast)("请填写手机号"):"86"==this.form.country&&this.fun.isMoblie(this.form.mobile)?Object(n.Toast)("请填写正确的手机号"):this.fun.isTextEmpty(this.form.captcha)&&this.imgcode?Object(n.Toast)("请填图形验证码"):(this.$yddialog.loading.open("发送中..."),$http.get("member.register.sendCodeV2",{mobile:this.form.mobile,state:this.form.country,captcha:this.form.captcha,code:this.form.code}).then(function(i){t.$yddialog.loading.close(),1==i.result?e.sendCodeAnimation():(Object(n.Toast)(i.msg),t.form.captcha="",t.getimgdata())},function(t){console.log(t.msg)}))},sendCodeAnimation:function(){var t=this;setTimeout(function(){t.start1=!0,t.$yddialog.loading.close(),Object(n.Toast)("已发送")},1e3)},login:function(){this.$router.push(this.fun.getUrl("login"))},goAgreement:function(){this.show2=!0},register:function(){var t=this,e=this;if(this.fun.isTextEmpty(this.form.country))Object(n.Toast)("请输入国际区号");else if(this.fun.isTextEmpty(this.form.mobile))Object(n.Toast)("请填写手机号");else if("86"==this.form.country&&this.fun.isMoblie(this.form.mobile))Object(n.Toast)("请填写正确的手机号");else if(this.fun.isTextEmpty(this.form.code))Object(n.Toast)("请填验证码");else if(this.fun.isTextEmpty(this.form.password))Object(n.Toast)("请填写密码");else if(1==this.isrequired&&this.fun.isTextEmpty(this.form.invite_code))Object(n.Toast)("请填写邀请码");else if(this.fun.isTextEmpty(this.form.password))Object(n.Toast)("请填写确认密码");else if(this.form.password==this.form.confirm_password){if(this.imgcode&&this.fun.isTextEmpty(this.form.captcha))Object(n.Toast)("图形验证码不能为空");else if(1!=this.diyStatus||(this.validation(),this.isValidation))if(!this.agreementStatus||this.agreementCB){if(!this.isset){var i=this.form,o=(i.close,a()(i,["close"]));this.form=o}$http.post("member.member.bindMobile",this.form,"绑定中...").then(function(i){1==i.result?0==t.diyStatus?(t.$dialog.alert({message:"绑定成功"}),1==t.isset?(sessionStorage.removeItem("isset"),t.$router.push(t.fun.getUrl("home"))):window.localStorage.is_force_mobile&&999==window.localStorage.is_force_mobile?e.$router.push(e.fun.getUrl("RegisterGuide",{type:"2"})):e.$router.go(-1)):1==t.diyStatus&&t.postDiy():t.$dialog.alert({message:i.msg})},function(e){t.$dialog.alert({message:e.msg})})}else Object(n.Toast)("请同意注册协议")}else Object(n.Toast)("两次密码不一致")},getimgdata:function(){var t=this;$http.get("home-page.getCaptcha").then(function(e){t.imgcode=e.data.captcha.img}).catch(function(t){console.log(t)})},postDiy:function(){var t=this,e=this,i=[],o={};this.diydata.forEach(function(t){o[t.name]=t.value}),i.push(o);var a={form_data:i,form_id:this.form_id,form_type:"register"};$http.post("plugin.diyform.api.diy-form.save-diy-form-data",a,"提交中...").then(function(i){1==i.result?(t.$dialog.alert({message:"绑定成功"}),e.$router.go(-1)):(console.log(0!=t.isrequired),0!=t.isrequired&&t.$dialog.alert({message:i.msg}),t.$dialog.alert({message:i.msg}))},function(e){t.$dialog.alert({message:e.msg})})},setCity:function(t){var e=this,i=t.itemName1+" "+t.itemName2+" "+t.itemName3;console.log("retCity",i),console.log("currentCityKey",this.currentCityKey),this.diydata.forEach(function(t){t.name==e.currentCityKey&&e.$set(t,"value",i)})},openPicker:function(t){this.currentDateKey=t,console.log("name",t),this.$refs.picker.open()},setDate:function(t){var e=this;console.log(t.Format("yyyy-MM-dd")),this.diydata.forEach(function(i){i.name==e.currentDateKey&&e.$set(i,"value",t.Format("yyyy-MM-dd"))})},openCity:function(t){this.currentCityKey=t},validation:function(){var t=this;this.isValidation=!0,console.log(this.diydata,33),this.diydata.forEach(function(e){1==e.data.tp_must&&!e.value&&e.type&&(console.log(e.data.tp_name,e.value),Object(n.Toast)(e.data.tp_name+"必须填写哦"),t.isValidation=!1),"diycheckbox"==e.type&&0==e.value.length&&(console.log(e.data.tp_name,e.value),Object(n.Toast)(e.data.tp_name+"必须选择哦"),t.isValidation=!1)})},popClose:function(){this.show2=!1}},activated:function(){this.init(),this.form.mobile=this.$route.params.num,this.getDiyFormStatus(),this.getProtocolStatus(),this.getimgdata()},components:{cTitle:s.a,CheckBox:r.CheckBox}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"register"}},[i("c-title",{attrs:{hide:!1,text:"绑定手机"}}),t._v(" "),t.imgcode?i("img",{staticStyle:{width:"20%",height:"40px",position:"absolute",display:"block",left:"74%","z-index":"999"},style:{top:1==t.country_code?"8rem":"6rem"},attrs:{src:t.imgcode},on:{click:t.getimgdata}}):t._e(),t._v(" "),i("div",{attrs:{id:"content"}},[i("ul",{staticClass:"area_number"},[1==t.country_code?i("li",[i("span",[t._v("国家区号")]),t._v(" "),i("yd-input",{attrs:{slot:"right",required:"","show-success-icon":!1,"show-error-icon":!1,placeholder:"+86"},slot:"right",model:{value:t.form.country,callback:function(e){t.$set(t.form,"country","string"==typeof e?e.trim():e)},expression:"form.country"}})],1):t._e()]),t._v(" "),i("ul",{staticClass:"login_info"},[t.imgcode?i("li",[i("yd-input",{attrs:{slot:"right",required:"","show-success-icon":!1,"show-error-icon":!1,placeholder:"请输入右侧图形验证码"},slot:"right",model:{value:t.form.captcha,callback:function(e){t.$set(t.form,"captcha","string"==typeof e?e.trim():e)},expression:"form.captcha"}})],1):t._e(),t._v(" "),i("li",[i("yd-input",{attrs:{slot:"right",required:"","show-success-icon":!1,"show-error-icon":!1,placeholder:"请输入手机号码"},slot:"right",model:{value:t.form.mobile,callback:function(e){t.$set(t.form,"mobile","string"==typeof e?e.trim():e)},expression:"form.mobile"}})],1),t._v(" "),i("li",{staticClass:"code"},[i("yd-input",{attrs:{slot:"right",required:"","show-success-icon":!1,"show-error-icon":!1,placeholder:"请输入验证码"},slot:"right",model:{value:t.form.code,callback:function(e){t.$set(t.form,"code","string"==typeof e?e.trim():e)},expression:"form.code"}}),t._v(" "),i("yd-sendcode",{attrs:{slot:"right",type:"warning"},nativeOn:{click:function(e){return t.verificationCode(e)}},slot:"right",model:{value:t.start1,callback:function(e){t.start1=e},expression:"start1"}})],1),t._v(" "),t.invite?i("li",{staticClass:"invitCode"},[i("yd-input",{attrs:{slot:"right",required:"","show-success-icon":!1,"show-error-icon":!1,placeholder:"请输入邀请码"},slot:"right",model:{value:t.form.invite_code,callback:function(e){t.$set(t.form,"invite_code","string"==typeof e?e.trim():e)},expression:"form.invite_code"}})],1):t._e(),t._v(" "),i("li",[i("yd-input",{attrs:{slot:"right",type:"password",placeholder:"设置密码"},slot:"right",model:{value:t.form.password,callback:function(e){t.$set(t.form,"password","string"==typeof e?e.trim():e)},expression:"form.password"}})],1),t._v(" "),i("li",[i("yd-input",{attrs:{slot:"right",type:"password",placeholder:"确认密码"},slot:"right",model:{value:t.form.confirm_password,callback:function(e){t.$set(t.form,"confirm_password","string"==typeof e?e.trim():e)},expression:"form.confirm_password"}})],1)]),t._v(" "),t.agreementStatus?i("div",{staticClass:"agreement"},[i("van-checkbox",{attrs:{"checked-color":"#f15353",shape:"square"},model:{value:t.agreementCB,callback:function(e){t.agreementCB=e},expression:"agreementCB"}},[t._v(" ")]),t._v(" "),i("span",{staticStyle:{"font-size":"16px","text-decoration":"underline"},attrs:{slot:"right"},on:{click:t.goAgreement},slot:"right"},[t._v("注册协议")])],1):t._e()]),t._v(" "),i("div",{staticClass:"diyform"},[t._l(t.diydata,function(e,o){return["diyinput"==e.type?[i("yd-cell-group",[i("yd-cell-item",[i("span",{attrs:{slot:"left"},slot:"left"},[t._v(t._s(e.data.tp_name)+"：")]),t._v(" "),1==e.data.tp_must?i("yd-input",{attrs:{slot:"right",required:"",placeholder:e.data.placeholder},slot:"right",model:{value:e.value,callback:function(i){t.$set(e,"value",i)},expression:"item.value"}}):t._e(),t._v(" "),0==e.data.tp_must?i("yd-input",{attrs:{slot:"right",placeholder:e.data.placeholder},slot:"right",model:{value:e.value,callback:function(i){t.$set(e,"value",i)},expression:"item.value"}}):t._e()],1)],1)]:t._e(),t._v(" "),"diytextarea"==e.type?[i("yd-cell-group",{attrs:{title:e.data.tp_name}},[i("yd-cell-item",[i("yd-textarea",{attrs:{slot:"right",placeholder:e.data.placeholder,maxlength:"100"},slot:"right",model:{value:e.value,callback:function(i){t.$set(e,"value",i)},expression:"item.value"}})],1)],1)]:t._e(),t._v(" "),"diycheckbox"==e.type?[i("yd-cell-group",{attrs:{title:e.data.tp_name}},t._l(e.data.tp_text,function(o,a){return i("yd-cell-item",{key:a,attrs:{type:"checkbox"}},[i("span",{attrs:{slot:"left"},slot:"left"},[t._v(t._s(o))]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"item.value"}],attrs:{slot:"right",type:"checkbox"},domProps:{value:o,checked:Array.isArray(e.value)?t._i(e.value,o)>-1:e.value},on:{change:function(i){var a=e.value,n=i.target,r=!!n.checked;if(Array.isArray(a)){var s=o,l=t._i(a,s);n.checked?l<0&&t.$set(e,"value",a.concat([s])):l>-1&&t.$set(e,"value",a.slice(0,l).concat(a.slice(l+1)))}else t.$set(e,"value",r)}},slot:"right"})])}),1)]:t._e(),t._v(" "),"diyselect"==e.type?[i("yd-cell-group",[i("yd-cell-item",{attrs:{arrow:"",type:"label"}},[i("span",{attrs:{slot:"left"},slot:"left"},[t._v(t._s(e.data.tp_name)+"：")]),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"item.value"}],attrs:{slot:"right"},on:{change:function(i){var o=Array.prototype.filter.call(i.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(e,"value",i.target.multiple?o:o[0])}},slot:"right"},[i("option",{attrs:{value:""}},[t._v("请选择"+t._s(e.data.tp_name))]),t._v(" "),t._l(e.data.tp_text,function(e,o){return i("option",{key:o,domProps:{value:e}},[t._v(t._s(e))])})],2)])],1)]:t._e(),t._v(" "),"diyradio"==e.type?[i("yd-cell-group",{attrs:{title:e.data.tp_name}},t._l(e.data.tp_text,function(o,a){return i("yd-cell-item",{key:a,attrs:{type:"radio"}},[i("span",{attrs:{slot:"left"},slot:"left"},[t._v(t._s(o))]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"item.value"}],attrs:{slot:"right",type:"radio"},domProps:{value:o,checked:t._q(e.value,o)},on:{change:function(i){return t.$set(e,"value",o)}},slot:"right"})])}),1)]:t._e(),t._v(" "),"diycity"==e.type?[i("div",[i("yd-cell-group",[i("yd-cell-item",{attrs:{arrow:""}},[i("span",{attrs:{slot:"left"},slot:"left"},[t._v(t._s(e.data.tp_name)+"：")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"item.value"}],attrs:{slot:"right",type:"text",readonly:"",placeholder:e.data.tp_name},domProps:{value:e.value},on:{click:[function(e){e.stopPropagation(),t.showCity=!0},function(i){return t.openCity(e.name)}],input:function(i){i.target.composing||t.$set(e,"value",i.target.value)}},slot:"right"})])],1)],1)]:t._e(),t._v(" "),"diydate"==e.type?[i("yd-cell-group",[i("yd-cell-item",{nativeOn:{click:function(i){return t.openPicker(e.name)}}},[i("span",{attrs:{slot:"left"},slot:"left"},[t._v(t._s(e.data.tp_name))]),t._v(" "),i("span",{attrs:{slot:"right"},slot:"right"},[t._v(t._s(e.value))])])],1)]:t._e()]})],2),t._v(" "),i("div",{staticClass:"btn"},[i("button",{attrs:{type:"button"},on:{click:t.register}},[t._v("绑定")])]),t._v(" "),i("mt-datetime-picker",{ref:"picker",attrs:{type:"date","year-format":"{value} 年","month-format":"{value} 月","date-format":"{value} 日","start-date":t.startDate},on:{confirm:t.setDate},model:{value:t.pickerValue,callback:function(e){t.pickerValue=e},expression:"pickerValue"}}),t._v(" "),i("yd-cityselect",{attrs:{callback:t.setCity,items:t.district},model:{value:t.showCity,callback:function(e){t.showCity=e},expression:"showCity"}}),t._v(" "),i("div"),t._v(" "),i("mt-popup",{staticClass:"mint-popup-3",staticStyle:{"z-index":"2004"},attrs:{position:"right",closeOnClickModal:"true",modal:"false"},model:{value:t.show2,callback:function(e){t.show2=e},expression:"show2"}},[i("div",{staticClass:"city-info"},[i("mt-header",{attrs:{fixed:"",title:"协议"}},[i("mt-button",{attrs:{slot:"left",icon:"back"},on:{click:t.popClose},slot:"left"})],1),t._v(" "),i("div",[i("div",{staticStyle:{height:"2.5rem",clear:"both"}}),t._v(" "),i("div",{attrs:{id:"a_content"},domProps:{innerHTML:t._s(t.protocol_content)}})])],1)]),t._v(" "),i("div",{staticStyle:{height:"2.5rem",clear:"both"}})],1)},staticRenderFns:[]};var d=i("VU/8")(l,c,!1,function(t){i("9RrX")},"data-v-1397fa28",null);e.default=d.exports},kklg:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"\n#register[data-v-1397fa28] {\n  margin-top: 3.125rem;\n  width: 100%;\n}\n#register #content[data-v-1397fa28] {\n    background-color: #fff;\n    overflow-y: hidden;\n}\n#register #content .area_number[data-v-1397fa28] {\n      padding-top: 1.25rem;\n      font-size: 18px;\n      color: #333;\n      margin-bottom: 1.875rem;\n}\n#register #content .area_number li[data-v-1397fa28] {\n        height: 2.5rem;\n        line-height: 2.5rem;\n        padding: 0 1.25rem;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n}\n#register #content .area_number li span[data-v-1397fa28] {\n          width: 5.75rem;\n          text-align: left;\n}\n#register #content .area_number li .yd-input[data-v-1397fa28] {\n          border: none;\n          border-bottom: solid 0.0625rem #ccc;\n          width: 15rem;\n}\n#register #content .login_info li[data-v-1397fa28] {\n      margin: 0 auto;\n      width: 20.625rem;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      font-size: 16px;\n      height: 2.5rem;\n      line-height: 2.5rem;\n      margin-top: 1.25rem;\n      border-bottom: solid 0.0625rem #ccc;\n      position: relative;\n}\n#register #content .login_info li input[data-v-1397fa28] {\n        width: 14.625rem;\n        border: none;\n}\n#register #content .login_info li span[data-v-1397fa28] {\n        font-size: 14px;\n        position: absolute;\n        right: 0;\n        color: #333;\n}\n#register #content .login_info li .img[data-v-1397fa28] {\n        width: 2.5rem;\n        overflow: hidden;\n}\n#register #content .login_info li .img img[data-v-1397fa28] {\n          margin-top: 26%;\n          width: 48%;\n}\n#register #content .login_info .code[data-v-1397fa28] {\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n}\n#register #content .login_info .code button[data-v-1397fa28] {\n        border: none;\n        background-color: #ebebeb;\n        color: #f15353;\n        font-size: 14px;\n        border-radius: 1.875rem;\n        padding: 0 0.625rem;\n        height: 1.875rem;\n        line-height: 1.875rem;\n        margin-top: 0.25rem;\n}\n#register #content .agreement[data-v-1397fa28] {\n      margin-top: 0.625rem;\n      height: 2.25rem;\n      line-height: 2.25rem;\n      text-align: left;\n      padding: 0 1.25rem;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n}\n#register #content .agreement .span[data-v-1397fa28] {\n        text-align: center;\n        font-size: 20px;\n        margin-left: 0.375rem;\n        display: block;\n}\n#register #content .btn[data-v-1397fa28] {\n      margin-top: 2.5rem;\n}\n#register #content .btn button[data-v-1397fa28] {\n        width: 20.625rem;\n        height: 2.8125rem;\n        font-size: 16px;\n        margin-bottom: 1.25rem;\n        border-radius: 1.875rem;\n        border: none;\n        background-color: #f15353;\n        color: #fff;\n}\n#register #agreement[data-v-1397fa28] {\n    height: 1.875rem;\n    line-height: 1.875rem;\n}\n#register #agreement .span[data-v-1397fa28] {\n      text-align: center;\n      font-size: 20px;\n}\n#register .city-info[data-v-1397fa28] {\n    overflow-y: scroll;\n    width: 100vw;\n    height: 100vh;\n    background: #fff;\n}\n#register .mint-header[data-v-1397fa28] {\n    background: none;\n    color: #666;\n}\n#register .is-fixed .mint-header-title[data-v-1397fa28] {\n    font-weight: bold;\n}\n#register .mint-header.is-fixed[data-v-1397fa28] {\n    border-bottom: 0.0625rem solid #e8e8e8;\n    background: #fff;\n    z-index: 99;\n}\n#register #lin[data-v-1397fa28] {\n    margin-bottom: 1.25rem;\n}\n#register #code[data-v-1397fa28] {\n    background: #ccc;\n    padding: 0.1875rem 0.3125rem;\n    border-radius: 0.1875rem;\n}\n#register h1[data-v-1397fa28] {\n    color: #42b983;\n}\n#register .mint-button--large[data-v-1397fa28] {\n    margin-top: 0.625rem;\n}\n#register .btn[data-v-1397fa28] {\n    margin-top: 2.5rem;\n}\n#register .btn button[data-v-1397fa28] {\n      width: 20.625rem;\n      height: 2.8125rem;\n      font-size: 16px;\n      margin-bottom: 1.25rem;\n      border-radius: 1.875rem;\n      border: none;\n      background-color: #f15353;\n      color: #fff;\n}\n#register #bts[data-v-1397fa28] {\n    margin: auto 0.3125rem;\n}\n#register #bts .mint-button--default[data-v-1397fa28] {\n      background-color: #13ce66;\n      color: #fff;\n}\n#register .forget[data-v-1397fa28] {\n    color: #999;\n    float: right;\n}\n",""])}});