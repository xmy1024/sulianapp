webpackJsonp([587],{"56o9":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("BO1k"),o=n.n(a),i=n("Pexp"),s=n("Tg7E"),r={data:function(){return{id:"",formData:{mercFlg:"2",isAcFlg:"1",idType:"01",busRating:"00",platRoleID:"001",realNm:"",idNo:"",contacts:"",email:"",telphone:"",address:""}}},activated:function(){this.initData()},methods:{initData:function(){this.id="",this.formData={mercFlg:"2",isAcFlg:"1",idType:"01",busRating:"00",platRoleID:"001",realNm:"",idNo:"",contacts:"",email:"",telphone:"",address:""}},dragonPay:function(t){var e=t.form_data,n=document.createElement("form");n.method="post",n.setAttribute("action",t.action_url);var a=!0,i=!1,s=void 0;try{for(var r,l=o()(["INFO","BODY","SIGN","CONTENTTYPE"]);!(a=(r=l.next()).done);a=!0){var f=r.value,c=document.createElement("input");c.setAttribute("name",f),c.setAttribute("value",e[f]),n.appendChild(c)}}catch(t){i=!0,s=t}finally{try{!a&&l.return&&l.return()}finally{if(i)throw s}}return document.body.appendChild(n),n.style.display="none",n.submit(),n},submit:function(){var t=this;this.fun.isTextEmpty(this.formData.realNm)?Object(s.Toast)("请输入姓名"):this.fun.isTextEmpty(this.formData.idNo)?Object(s.Toast)("请输入身份证号码"):/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(this.formData.idNo)?this.fun.isTextEmpty(this.formData.contacts)?Object(s.Toast)("请输入联系人姓名"):this.fun.isTextEmpty(this.formData.telphone)?Object(s.Toast)("请输入固定电话"):isNaN(this.formData.telphone)&&this.formData.telphone.length>0?Object(s.Toast)("固定电话只能为数字"):$http.post("plugin.dragon-deposit.frontend.index.consumerReg",{data:this.formData}).then(function(e){1===e.result?t.dragonPay(e.data):Object(s.Toast)(e.msg)}).catch(function(t){console.log(t)}):Object(s.Toast)("请输入正确身份证号码")}},components:{cTitle:i.a}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"person_logon",attrs:{id:"person_logon"}},[n("c-title",{attrs:{hide:!1,text:"个人注册"}}),t._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"first"},[t._m(0),t._v(" "),n("div",{staticClass:"form_first"},[n("div",{staticClass:"list"},[t._m(1),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.realNm,expression:"formData.realNm"}],attrs:{type:"text",placeholder:"请填写你的姓名"},domProps:{value:t.formData.realNm},on:{input:function(e){e.target.composing||t.$set(t.formData,"realNm",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"list"},[t._m(2),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.idNo,expression:"formData.idNo"}],attrs:{type:"text",placeholder:"请填写身份证号码"},domProps:{value:t.formData.idNo},on:{input:function(e){e.target.composing||t.$set(t.formData,"idNo",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"list"},[t._m(3),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.contacts,expression:"formData.contacts"}],attrs:{type:"text",placeholder:"请填写联系人姓名"},domProps:{value:t.formData.contacts},on:{input:function(e){e.target.composing||t.$set(t.formData,"contacts",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"list"},[t._m(4),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.email,expression:"formData.email"}],attrs:{type:"text",placeholder:"请填写邮箱"},domProps:{value:t.formData.email},on:{input:function(e){e.target.composing||t.$set(t.formData,"email",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"list"},[t._m(5),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.telphone,expression:"formData.telphone"}],attrs:{type:"text",placeholder:"请填写固定电话"},domProps:{value:t.formData.telphone},on:{input:function(e){e.target.composing||t.$set(t.formData,"telphone",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"list"},[t._m(6),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.address,expression:"formData.address"}],attrs:{type:"text",placeholder:"请填写地址"},domProps:{value:t.formData.address},on:{input:function(e){e.target.composing||t.$set(t.formData,"address",e.target.value)}}})])])]),t._v(" "),n("div",{staticClass:"btn",on:{click:function(e){return t.submit()}}},[t._v("\n      开通\n    ")])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"head"},[e("div",{staticClass:"line"}),this._v(" "),e("span",[this._v("个人信息")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("label",[this._v("姓名")]),this._v(" "),e("span",[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("label",[this._v("证件号")]),this._v(" "),e("span",[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("label",[this._v("联系人")]),this._v(" "),e("span",[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("label",[this._v("邮箱")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("label",[this._v("固定电话")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("label",[this._v("地址")])])}]};var f=n("VU/8")(r,l,!1,function(t){n("pxnE")},"data-v-0d1fafbe",null);e.default=f.exports},TZdi:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"\n#person_logon[data-v-0d1fafbe] {\n  padding-top: 40px;\n}\n#person_logon .content .first[data-v-0d1fafbe] {\n    background-color: #fff;\n    margin-bottom: 0.3rem;\n}\n#person_logon .content .first .head[data-v-0d1fafbe] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      padding-top: 1rem;\n      padding-left: 1rem;\n}\n#person_logon .content .first .head .line[data-v-0d1fafbe] {\n        width: 0.1875rem;\n        height: 0.875rem;\n        background-color: #f87070;\n        margin-right: 1rem;\n}\n#person_logon .content .first .head span[data-v-0d1fafbe] {\n        font-size: 14px;\n        color: #f86e6e;\n}\n#person_logon .content .first .form_first .list[data-v-0d1fafbe] {\n      padding-left: 1rem;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      border-bottom: solid 1px #ccc;\n}\n#person_logon .content .first .form_first .list .act[data-v-0d1fafbe] {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-flex: 1;\n            -ms-flex: 1;\n                flex: 1;\n        -webkit-box-pack: end;\n            -ms-flex-pack: end;\n                justify-content: flex-end;\n}\n#person_logon .content .first .form_first .list .act .act-people[data-v-0d1fafbe] {\n          padding: 0.125rem;\n          border-radius: 1rem;\n          border: solid 1px #f87070;\n          margin-right: 1rem;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n}\n#person_logon .content .first .form_first .list .act .act-people span[data-v-0d1fafbe] {\n            padding: 0.25rem 0.5rem;\n            border-radius: 1rem;\n            line-height: 1rem;\n            font-size: 12px;\n            color: #b1b1b1;\n}\n#person_logon .content .first .form_first .list .title[data-v-0d1fafbe] {\n        margin: 1rem 0;\n}\n#person_logon .content .first .form_first .list .title label[data-v-0d1fafbe] {\n          font-size: 12px;\n}\n#person_logon .content .first .form_first .list .title span[data-v-0d1fafbe] {\n          color: #f87070;\n          display: inline-block;\n          vertical-align: top;\n}\n#person_logon .content .first .form_first .list input[data-v-0d1fafbe] {\n        -webkit-box-flex: 1;\n            -ms-flex: 1;\n                flex: 1;\n        border: none;\n        outline: none;\n        text-indent: 0.5rem;\n}\n#person_logon .content .first .form_first .list input[data-v-0d1fafbe]::-webkit-input-placeholder {\n        /* WebKit browsers */\n        font-size: 12px;\n}\n#person_logon .content .first .form_first .list input[data-v-0d1fafbe]:-moz-placeholder {\n        /* Mozilla Firefox 4 to 18 */\n        font-size: 12px;\n}\n#person_logon .content .first .form_first .list input[data-v-0d1fafbe]::-moz-placeholder {\n        /* Mozilla Firefox 19+ */\n        font-size: 12px;\n}\n#person_logon .content .first .form_first .list input[data-v-0d1fafbe]:-ms-input-placeholder {\n        /* Internet Explorer 10+ */\n        font-size: 12px;\n}\n#person_logon .content .first .form_first .list[data-v-0d1fafbe]:last-child {\n      border-bottom: none;\n}\n#person_logon .content .btn[data-v-0d1fafbe] {\n    margin: 0 auto;\n    margin-top: 1rem;\n    width: 80%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    color: #fff;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    background-color: #fd5b5b;\n    height: 3rem;\n}\n#person_logon .content .btn-false[data-v-0d1fafbe] {\n    margin: 0 auto;\n    margin-top: 1rem;\n    width: 80%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    color: #fff;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    background-color: #999999;\n    height: 3rem;\n}\n#person_logon .content .bg[data-v-0d1fafbe] {\n    background-color: #f87070;\n    color: #fff !important;\n}\n",""])},pxnE:function(t,e,n){var a=n("TZdi");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("28d57226",a,!0,{})}});