webpackJsonp([425],{YPFb:function(e,n,t){var a=t("qiNS");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);t("rjj0")("b83a0772",a,!0,{})},lBur:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t("Pexp"),s=t("Tg7E"),r={data:function(){return{refundMoney:"",address:[],checked:{},options:[],express:"",expressCode:"",expressSN:"",popupVisible:!1,orderId:"",id:"",order_status:0,check_status:""}},activated:function(){this.applyData()},mounted:function(){},methods:{applyData:function(){var e=this;$http.get("plugin.lease-toy.api.retreat.return.index",{order_id:this.$route.params.id},"申请中...").then(function(n){if(console.log(n.data,"数据"),1==n.result){var t=n.data.lease_order;e.refundMoney=t.deposit_total,e.orderId=t.order_id,e.id=t.id,e.order_status=t.return_status,e.check_status=t.return_name,e.fun.isTextEmpty(n.data.return_address)?(s.MessageBox.alert("请填写退还地址"),e.$router.go(-1)):(e.address=n.data.return_address,e.address.forEach(function(n){1==n.is_default&&(console.log(n),e.checked=n)})),e.options=n.data.express_companies}else s.MessageBox.alert(n.msg,"提示")}).catch(function(e){console.log(e)})},getAddress:function(){$http.get("plugin.lease-toy.api.return-address.index",{}).then(function(e){console.log(e),e.result}).catch(function(e){console.log(e)})},chooseAddress:function(){console.log(this.checked)},expressShow:function(){this.popupVisible=!0},expressChoose:function(e){this.initExpress(),this.express=e.name,this.expressCode=e.value,this.popupVisible=!1},initExpress:function(){this.express="",this.expressCode=""},getExpress:function(){var e=this;$http.get("dispatch.express-list",{}).then(function(n){console.log(n),1==n.result&&(e.options=n.data.express_companies)}).catch(function(e){console.log(e)})},submit:function(){var e=this;if(this.fun.isTextEmpty(this.checked.address))s.MessageBox.alert("请选择归还地址");else if(this.fun.isTextEmpty(this.express))s.MessageBox.alert("请选择退还快递");else if(this.fun.isTextEmpty(this.expressCode))s.MessageBox.alert("快递code不能为空");else if(this.fun.isTextEmpty(this.expressSN))s.MessageBox.alert("快递编号不能为空");else{var n={order_id:this.orderId,lease_id:this.id,express_code:this.expressCode,express_company_name:this.express,express_sn:this.expressSN,address:this.checked.address,mobile:this.checked.mobile,realname:this.checked.contact_name};$http.get("plugin.lease-toy.api.retreat.return.submit-return",n,"提交中...").then(function(n){console.log(n),1==n.result?(s.MessageBox.alert("提交成功"),e.$router.go(-1)):(s.MessageBox.alert("提交失败"),e.$router.go(-1))}).catch(function(e){console.log(e)})}}},components:{cTitle:a.a}},i={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"refund"}},[t("c-title",{attrs:{hide:!1,text:"归还商品"}}),e._v(" "),t("div",{staticStyle:{height:"40px"}}),e._v(" "),2==e.order_status?t("div",{staticClass:"status-1"},[t("ul",{staticClass:"money"},[t("li",[t("span",{staticClass:"left"},[e._v("押金预计退还金额")]),e._v(" "),t("span",[e._v("￥"+e._s(e.refundMoney))])])]),e._v(" "),t("p",{staticClass:"prompt"},[e._v("提示：最终退款金额已商品退还确认后为准")]),e._v(" "),t("p",{staticClass:"refund-add"},[e._v("退还地址：请务必按照选择的地址退回商品")]),e._v(" "),t("div",{staticClass:"add-box"},[t("van-radio-group",{on:{change:e.chooseAddress},model:{value:e.checked,callback:function(n){e.checked=n},expression:"checked"}},e._l(e.address,function(n,a){return t("div",{key:a,staticClass:"addr"},[t("div",{staticStyle:{width:"100%","font-size":"14px"}},[t("p",[t("i",{staticClass:"fa fa-map-marker",staticStyle:{"margin-right":"0.3125rem"}}),e._v("收件人:"+e._s(n.contact_name)+" "+e._s(n.mobile)+"\n\t\t\t\t\t\t\t")]),t("div",{staticStyle:{float:"right"}},[t("van-radio",{attrs:{name:n}},[e._v(" ")])],1),e._v(" "),t("p"),t("br"),e._v(" "),t("p",[e._v(e._s(n.address))])])])}),0)],1),e._v(" "),t("div",{staticClass:"express-member"},[t("span",[e._v("退还快递:")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.express,expression:"express"}],attrs:{type:"text",readonly:"",placeholder:"请选择退还快递"},domProps:{value:e.express},on:{click:e.expressShow,input:function(n){n.target.composing||(e.express=n.target.value)}}})]),e._v(" "),t("div",{staticClass:"express-member"},[t("span",[e._v("快递单号:")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.expressSN,expression:"expressSN"}],attrs:{type:"text",placeholder:"请输入您的快递单号"},domProps:{value:e.expressSN},on:{input:function(n){n.target.composing||(e.expressSN=n.target.value)}}})]),e._v(" "),t("div",{staticClass:"submit"},[t("input",{attrs:{type:"button",name:"button",id:"button",value:"提交归还"},on:{click:e.submit}})])]):e._e(),e._v(" "),t("mt-popup",{staticStyle:{width:"100%",height:"18.75rem"},attrs:{position:"bottom"},model:{value:e.popupVisible,callback:function(n){e.popupVisible=n},expression:"popupVisible"}},[t("mt-navbar",{attrs:{fixed:""}},[t("mt-header",{staticStyle:{background:"#ffffff",color:"#000000","border-bottom":"0.0625rem solid #ebebeb"},attrs:{fixed:"",title:"选择快递"}})],1),e._v(" "),t("div",{staticStyle:{height:"2.5rem"}}),e._v(" "),t("div",{staticStyle:{width:"100%",height:"18.75rem",overflow:"scroll"}},e._l(e.options,function(n,a){return t("div",{key:a,staticStyle:{height:"2.5rem","line-height":"2.5rem","border-bottom":"0.0625rem solid #ebebeb"},on:{click:function(t){return e.expressChoose(n)}}},[e._v("\n\t\t\t\t"+e._s(n.name)+"\n\t\t\t")])}),0)],1)],1)},staticRenderFns:[]};var o=t("VU/8")(r,i,!1,function(e){t("YPFb")},"data-v-4b5a07fa",null);n.default=o.exports},qiNS:function(e,n,t){(e.exports=t("FZ+f")(!1)).push([e.i,"\n#refund .status-1[data-v-4b5a07fa] {\n  padding: 0 0.875rem 2.8125rem 0.875rem;\n  background-color: #fff;\n}\n#refund .money[data-v-4b5a07fa] {\n  padding: 0.625rem 0;\n}\n#refund .money li[data-v-4b5a07fa] {\n    line-height: 1.625rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    font-size: 14px;\n}\n#refund .prompt[data-v-4b5a07fa] {\n  color: #f15353;\n  text-align: left;\n  line-height: 1.5rem;\n  margin-bottom: 0.625rem;\n}\n#refund .refund-add[data-v-4b5a07fa] {\n  text-align: left;\n  font-size: 14px;\n  line-height: 1.5rem;\n  margin-bottom: 0.625rem;\n}\n#refund .add-box[data-v-4b5a07fa] {\n  margin-bottom: 1.25rem;\n}\n#refund .add-box .addr[data-v-4b5a07fa] {\n    border-top: solid 0.0625rem #ebebeb;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    background: #fff;\n    padding: 1rem 0;\n}\n#refund .add-box .addr .icon[data-v-4b5a07fa] {\n      font-size: 0.875rem;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n}\n#refund .add-box .addr .icon i[data-v-4b5a07fa] {\n        line-height: 1.5rem;\n        margin-right: 0.625rem;\n}\n#refund .add-box .addr i[data-v-4b5a07fa] {\n      font-size: 16px;\n      color: #333;\n}\n#refund .add-box .addr .fa-angle-right[data-v-4b5a07fa] {\n      font-size: 24px;\n      color: #c9c9c9;\n}\n#refund .add-box .addr p[data-v-4b5a07fa] {\n      -webkit-box-flex: 6;\n          -ms-flex: 6;\n              flex: 6;\n      text-align: justify;\n      font-weight: bold;\n      line-height: 1.5rem;\n      padding-right: 1rem;\n      color: #333333;\n}\n#refund .add-box .addr p span[data-v-4b5a07fa] {\n        font-size: 14px;\n        font-weight: normal;\n        color: #666;\n}\n#refund .refund-express[data-v-4b5a07fa] {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  text-align: left;\n  font-size: 14px;\n}\n#refund .refund-express span[data-v-4b5a07fa] {\n    width: 21%;\n    line-height: 1.625rem;\n}\n#refund .refund-express select[data-v-4b5a07fa] {\n    width: 79%;\n    border: solid 0.0625rem #ebebeb;\n    background-color: #fff;\n    height: 1.625rem;\n    border-radius: 0.1875rem;\n    padding: 0 0.25rem;\n    color: #8c8c8c;\n}\n#refund .express-member[data-v-4b5a07fa] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  text-align: left;\n  font-size: 14px;\n  margin-top: 1.25rem;\n}\n#refund .express-member span[data-v-4b5a07fa] {\n    line-height: 1.625rem;\n    width: 21%;\n}\n#refund .express-member input[data-v-4b5a07fa] {\n    background-color: #fff;\n    border: solid 0.0625rem #ebebeb;\n    width: 79%;\n    height: 1.625rem;\n    border-radius: 0.1875rem;\n    padding: 0 0.25rem;\n}\n#refund .remarks[data-v-4b5a07fa] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  text-align: left;\n  font-size: 14px;\n  display: flex;\n  margin-top: 1.25rem;\n}\n#refund .remarks span[data-v-4b5a07fa] {\n    margin-right: 0.625rem;\n}\n#refund .remarks textarea[data-v-4b5a07fa] {\n    width: 79%;\n    background-color: #fafafa;\n    border: solid 0.0625rem #ebebeb;\n    border-radius: 0.25rem;\n    padding: 0.25rem;\n    height: 4.25rem;\n}\n#refund .submit[data-v-4b5a07fa] {\n  margin-top: 1.25rem;\n}\n#refund .submit input[data-v-4b5a07fa] {\n    width: 60%;\n    height: 2rem;\n    color: #fff;\n    background-color: #f15353;\n    border: none;\n    border-radius: 0.25rem;\n    font-size: 14px;\n}\n#refund .my_wrapper[data-v-4b5a07fa] {\n  background: #fff;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0.625rem;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n#refund .my_wrapper span[data-v-4b5a07fa] {\n    width: 6.5625rem;\n    -webkit-box-flex: 0;\n        -ms-flex: none;\n            flex: none;\n    font-size: 16px;\n    line-height: 1;\n}\n#refund .my_wrapper .my-value[data-v-4b5a07fa] {\n    -webkit-box-flex: 2;\n        -ms-flex: 2;\n            flex: 2;\n    text-align: left;\n}\n#refund .my_wrapper .my-value span[data-v-4b5a07fa] {\n      color: red;\n}\n#refund .el-radio-group[data-v-4b5a07fa] {\n  display: block;\n}\n#refund #state[data-v-4b5a07fa] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  background-color: #f15353;\n  color: #fff;\n  padding: 0 0.875rem;\n  height: 3.75rem;\n  text-align: left;\n}\n#refund #state span[data-v-4b5a07fa] {\n    font-size: 16px;\n    font-weight: bold;\n    line-height: 3.75rem;\n}\n#refund .return-money[data-v-4b5a07fa] {\n  background-color: #fff;\n  padding: 0 0.875rem;\n}\n#refund .money[data-v-4b5a07fa] {\n  padding: 0.625rem 0;\n  border-bottom: solid 0.0625rem #ebebeb;\n}\n#refund .money li[data-v-4b5a07fa] {\n    line-height: 1.875rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    font-size: 14px;\n}\n#refund .money .right[data-v-4b5a07fa] {\n    color: #f15353;\n}\n#refund .prompt[data-v-4b5a07fa] {\n  color: #8c8c8c;\n  text-align: left;\n  line-height: 2.25rem;\n}\n",""])}});