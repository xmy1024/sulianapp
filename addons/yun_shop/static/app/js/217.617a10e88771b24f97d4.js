webpackJsonp([217],{"59i+":function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={components:{cTitle:t("Pexp").a},data:function(){return{data:{currentMoney:"0.00",chargeMoney:"50",payNum:"1234567890"}}}},r={render:function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{attrs:{id:"orderPay"}},[t("c-title",{attrs:{hide:!1,text:"订单支付"}}),a._v(" "),t("div",{staticStyle:{height:"50px"}}),a._v(" "),t("div",{staticClass:"my_wrapper"},[t("span",[a._v("账户余额")]),a._v(" "),t("div",{staticClass:"my-value"},[a._v(a._s(a.data.currentMoney)+" 元")])]),a._v(" "),t("div",{staticClass:"my_wrapper"},[t("span",[a._v("支付流水号")]),a._v(" "),t("div",{staticClass:"my-value"},[a._v(a._s(a.data.payNum))])]),a._v(" "),t("div",{staticClass:"my_wrapper"},[t("span",[a._v("支付金额")]),a._v(" "),t("div",{staticClass:"my-value"},[t("span",[a._v(a._s(a.data.chargeMoney))]),a._v(" 元")])]),a._v(" "),t("div",{staticStyle:{height:"0.625rem"}}),a._v(" "),a._m(0)],1)},staticRenderFns:[function(){var a=this.$createElement,e=this._self._c||a;return e("div",{staticClass:"mod_btns"},[e("a",{staticClass:"mod_btn bg_ali"},[this._v("支付宝支付")]),this._v(" "),e("a",{staticClass:"mod_btn bg_ali"},[this._v("余额支付")]),this._v(" "),e("a",{staticClass:"mod_btn bg_wechat"},[this._v("微信支付")])])}]};var s=t("VU/8")(n,r,!1,function(a){t("Tt8P")},"data-v-babbfafe",null);e.default=s.exports},Tt8P:function(a,e,t){var n=t("UhV7");"string"==typeof n&&(n=[[a.i,n,""]]),n.locals&&(a.exports=n.locals);t("rjj0")("7e31f2f8",n,!0,{})},UhV7:function(a,e,t){(a.exports=t("FZ+f")(!1)).push([a.i,"\n#orderPay .my_wrapper[data-v-babbfafe] {\n  background: #FFF;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0.625rem;\n}\n#orderPay .my_wrapper span[data-v-babbfafe] {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    font-size: 16px;\n    line-height: 1;\n}\n#orderPay .my_wrapper .my-value[data-v-babbfafe] {\n    -webkit-box-flex: 2;\n        -ms-flex: 2;\n            flex: 2;\n    text-align: left;\n}\n#orderPay .my_wrapper .my-value span[data-v-babbfafe] {\n      color: red;\n}\n#orderPay .mod_btns[data-v-babbfafe] {\n  margin: 0.625rem 0;\n  height: 2.5rem;\n  line-height: 2.5rem;\n  font-size: 16px;\n}\n#orderPay .mod_btns .mod_btn[data-v-babbfafe] {\n    display: block;\n    width: 96%;\n    margin: 1.25rem 2%;\n    border-radius: 0.3125rem;\n}\n#orderPay .mod_btns .mod_btn.bg_wechat[data-v-babbfafe] {\n    background: #26ce29;\n    color: #fff;\n}\n#orderPay .mod_btns .mod_btn.bg_ali[data-v-babbfafe] {\n    background: #22aaed;\n    color: #fff;\n}\n",""])}});