webpackJsonp([211],{icRD:function(n,e,t){(n.exports=t("FZ+f")(!1)).push([n.i,"\n#balance_recharge .content .transfer_info[data-v-bf2a1036] {\n  background: #fff;\n  padding-left: 0.875rem;\n  font-size: 16px;\n}\n#balance_recharge .content .transfer_info .info_a[data-v-bf2a1036],\n  #balance_recharge .content .transfer_info .info_b[data-v-bf2a1036] {\n    line-height: 2.875rem;\n    border-bottom: solid 0.0625rem #ebebeb;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n}\n#balance_recharge .content .transfer_info .info_a span[data-v-bf2a1036]:first-child,\n    #balance_recharge .content .transfer_info .info_b span[data-v-bf2a1036]:first-child {\n      width: 6.875rem;\n      display: block;\n      text-align: left;\n}\n#balance_recharge .content .transfer_info .info_a input[data-v-bf2a1036],\n    #balance_recharge .content .transfer_info .info_b input[data-v-bf2a1036] {\n      border: none;\n      width: 15.625rem;\n}\n#balance_recharge .content .transfer_sum[data-v-bf2a1036] {\n  background: #fff;\n  padding: 0.625rem 0.875rem;\n}\n#balance_recharge .content .transfer_sum span[data-v-bf2a1036] {\n    display: block;\n    font-size: 16px;\n    line-height: 2.5rem;\n    text-align: left;\n}\n#balance_recharge .content .transfer_sum .sum[data-v-bf2a1036] {\n    text-align: left;\n    font-size: 24px;\n}\n#balance_recharge .content .transfer_sum .sum input[data-v-bf2a1036] {\n      margin-left: 0.375rem;\n      line-height: 3.75rem;\n      width: 90%;\n      font-size: 36px;\n      border: none;\n}\n#balance_recharge .content .personal_info[data-v-bf2a1036] {\n  margin-top: 0.625rem;\n  background: #fff;\n  padding-left: 0.875rem;\n}\n#balance_recharge .content .personal_info li[data-v-bf2a1036] {\n    line-height: 2.875rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    font-size: 16px;\n    border-bottom: solid 0.0625rem #ebebeb;\n    text-align: left;\n}\n#balance_recharge .content .personal_info li span[data-v-bf2a1036]:first-child {\n      display: block;\n      width: 6.875rem;\n}\n#balance_recharge .content .personal_info li[data-v-bf2a1036]:last-child {\n    border: none;\n}\n#balance_recharge .content .btn[data-v-bf2a1036] {\n  width: 21.5625rem;\n  margin: 1.25rem auto;\n  height: 2.875rem;\n  border-radius: 0.25rem;\n  font-size: 16px;\n  color: #fff;\n  background: #f15353;\n  border: none;\n}\n#balance_recharge .content .notes[data-v-bf2a1036] {\n  color: #8c8c8c;\n  line-height: 1.125rem;\n}\n#balance_recharge .my_wrapper[data-v-bf2a1036] {\n  background: #fff;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0 0.875rem;\n  line-height: 2.875rem;\n}\n#balance_recharge .my_wrapper span[data-v-bf2a1036] {\n    width: 80px;\n    text-align: left;\n    font-size: 16px;\n    /*line-height: 1;*/\n}\n#balance_recharge .my_wrapper .my-value[data-v-bf2a1036] {\n    -webkit-box-flex: 2;\n        -ms-flex: 2;\n            flex: 2;\n    text-align: left;\n}\n#balance_recharge .my_wrapper .my-value span[data-v-bf2a1036] {\n      color: #f15353;\n}\n#balance_recharge #wrapper[data-v-bf2a1036] {\n  margin-top: 0.625rem;\n}\n",""])},p0Ze:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=t("Pexp"),r=t("Tg7E"),i={data:function(){return{credit1:"0.00",toi:this.fun.getKeyByI(),balance:0,info_form:{transfer_id:"",transfer_point:""},transfer_id:"",memberInfo:"",integral:window.localStorage.integral,rate:0}},watch:{transfer_id:function(n){var e=this;$http.get("member.member.memberInfo",{i:this.fun.getKeyByI(),type:this.fun.getTyep(),uid:this.transfer_id},"获取用户中").then(function(n){1===n.result&&(e.memberInfo=n.data)},function(n){})}},methods:{initData:function(){this.credit1="0.00",this.info_form.transfer_point=""},getIntegral:function(){var n=this;$http.get("finance.point-page.index",{i:this.fun.getKeyByI(),type:this.fun.getTyep()},"加载中").then(function(e){1==e.result?(n.credit1=e.data.credit1,n.transfer=e.data.transfer,n.rate=e.data.rate):r.MessageBox.alert(e.msg)},function(n){r.MessageBox.alert(n)})},confirm:function(){var n=this;parseFloat(this.info_form.transfer_point)>parseFloat(this.credit1)?r.MessageBox.alert("转让积分不可大于您的积分","提示"):void 0==this.transfer_id||this.transfer_id<=0||0==this.transfer_id.length?r.MessageBox.alert("转让id不可为空","提示"):void 0==this.info_form.transfer_point||this.info_form.transfer_point<=0||0==this.info_form.length?r.MessageBox.alert("转让积分不可低于0元","提示"):$http.get("finance.point-transfer.index",{i:this.fun.getKeyByI(),type:this.fun.getTyep(),recipient:this.transfer_id,transfer_point:this.info_form.transfer_point}," ").then(function(e){1==e.result?(r.MessageBox.alert(e.msg,"提示"),n.$router.go(-1)):r.MessageBox.alert(e.msg,"提示")},function(n){})}},activated:function(){this.toi=this.fun.getKeyByI(),this.initData(),this.getIntegral(),this.fun.setWXTitle(this.integral+"转账")},components:{cTitle:a.a}},s={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"balance_recharge"}},[t("c-title",{attrs:{hide:!1,text:n.integral+"转账"}}),n._v(" "),t("div",{staticStyle:{height:"50px"}}),n._v(" "),t("div",{staticClass:"content"},[t("ul",{staticClass:"transfer_info"},[t("li",{staticClass:"info_a"},[t("span",[n._v("当前"+n._s(n.integral?n.integral:"积分")+"：")]),n._v(" "),t("span",[n._v(n._s(n.credit1))])]),n._v(" "),t("li",{staticClass:"info_b"},[t("span",[n._v("受让人ID：")]),n._v(" "),t("input",{directives:[{name:"model",rawName:"v-model.lazy",value:n.transfer_id,expression:"transfer_id",modifiers:{lazy:!0}}],attrs:{type:"text",placeholder:"请输入受让人ID"},domProps:{value:n.transfer_id},on:{change:function(e){n.transfer_id=e.target.value}}})])]),n._v(" "),t("div",{staticClass:"transfer_sum"},[t("span",[n._v("转账"+n._s(n.integral?n.integral:"积分"))]),n._v(" "),t("div",{staticClass:"sum"},[t("input",{directives:[{name:"model",rawName:"v-model",value:n.info_form.transfer_point,expression:"info_form.transfer_point"}],attrs:{type:"text",placeholder:"0.00"},domProps:{value:n.info_form.transfer_point},on:{input:function(e){e.target.composing||n.$set(n.info_form,"transfer_point",e.target.value)}}})])]),n._v(" "),n.memberInfo?t("ul",{staticClass:"personal_info"},[t("li",[t("span",[n._v("昵称：")]),n._v(" "),t("span",[n._v(n._s(n.memberInfo.nickname))])]),n._v(" "),t("li",[t("span",[n._v("姓名：")]),n._v(" "),t("span",[n._v(n._s(n.memberInfo.realname))])])]):n._e(),n._v(" "),t("button",{staticClass:"btn custom_color",attrs:{type:"button"},on:{click:n.confirm}},[n._v("\n      确认转账\n    ")]),n._v(" "),t("p",{staticClass:"notes"},[n._v("\n      注：转账积分不能小于0, 且为整数。"),t("br"),n._v("\n      转让手续费比率为"+n._s(100*n.rate)+"%，"),t("br"),n._v("\n      您实际转账到数为："+n._s(n.info_form.transfer_point-n.info_form.transfer_point*n.rate)+"\n    ")])])],1)},staticRenderFns:[]};var o=t("VU/8")(i,s,!1,function(n){t("zfpf")},"data-v-bf2a1036",null);e.default=o.exports},zfpf:function(n,e,t){var a=t("icRD");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);t("rjj0")("59310d3d",a,!0,{})}});