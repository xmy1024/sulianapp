webpackJsonp([320],{"91fi":function(a,n,e){var t=e("ynKl");"string"==typeof t&&(t=[[a.i,t,""]]),t.locals&&(a.exports=t.locals);e("rjj0")("7d6dd091",t,!0,{})},Ejss:function(a,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t={components:{cTitle:e("Pexp").a},data:function(){return{language:{},data:{numId:"12345689",status:"待支付",denomination:20,totalSize:200,money:"19.9x2",scoreDel:"4.00",payMethod:"-----",payNum:"30.00",date:"2017-05-01 11:00:00"}}},methods:{},computed:{getLangState:function(){return this.$store.state.service.languageService}},watch:{getLangState:function(a){this.language=a?JSON.parse(sessionStorage.languageService).trafficOrderNoPay:this.$store.state.service.languageService.trafficOrderNoPay}},mounted:function(){sessionStorage.languageService?this.language=JSON.parse(sessionStorage.languageService).trafficOrderNoPay:this.language=this.$store.state.service.languageService.trafficOrderNoPay},activated:function(){this.$store.commit("onload")}},i={render:function(){var a=this,n=a.$createElement,e=a._self._c||n;return e("div",{class:"trafficOrderNoPay"+a.$store.state.service.lang,attrs:{id:"trafficOrderNoPay"}},[e("c-title",{attrs:{hide:!1,text:a.language.orderDetail}}),a._v(" "),e("div",{staticStyle:{height:"40px"}}),a._v(" "),e("div",{staticClass:"main"},[e("div",{staticClass:"title"},[e("p",[a._v(a._s(a.language.orderNum)+a._s(a.data.numId))]),a._v(" "),e("span",[a._v(a._s(a.data.status))])]),a._v(" "),e("div",{staticClass:"top normal"},[e("ul",[e("li",[a._v(a._s(a.language.trafficFine)),e("span",[a._v("甘肃兰州交通罚款 电子单")])])])]),a._v(" "),e("div",{staticClass:"middle normal"},[e("ul",[e("li",[a._v(a._s(a.language.carNum)),e("span",[a._v(a._s(a.data.denomination)+"元")])]),a._v(" "),e("li",[a._v(a._s(a.language.violationNum)),e("span",[a._v(a._s(a.data.totalSize)+"M")])]),a._v(" "),e("li",[a._v(a._s(a.language.fineExer)),e("span",[a._v(a._s(a.data.totalSize)+"M")])])])]),a._v(" "),e("div",{staticClass:"content normal"},[e("ul",[e("li",[a._v(a._s(a.language.goodsAmount)),e("span",[a._v("￥"+a._s(a.data.money))])]),a._v(" "),e("li",[a._v(a._s(a.language.scorePay)),e("span",[a._v("-"+a._s(a.data.scoreDel))])]),a._v(" "),e("li",[a._v(a._s(a.language.payStyle)),e("span",[a._v(a._s(a.data.payMethod))])])])]),a._v(" "),e("div",{staticClass:"bottom_pay"},[e("b",[a._v(a._s(a.language.payNum))]),e("b",[a._v(a._s(a.data.payNum))]),e("br"),a._v(" "),e("span",{staticClass:"orderTime"},[a._v(a._s(a.language.date))]),e("span",[a._v(a._s(a.data.date))])]),a._v(" "),e("div",{staticClass:"footer"},[e("div",{staticClass:"btn"},[a._v(a._s(a.language.cancle))]),a._v(" "),e("div",{staticClass:"btn"},[a._v(a._s(a.language.toPay))])])])],1)},staticRenderFns:[]};var r=e("VU/8")(t,i,!1,function(a){e("91fi")},"data-v-71d8fe7e",null);n.default=r.exports},ynKl:function(a,n,e){(a.exports=e("FZ+f")(!1)).push([a.i,"\n.trafficOrderNoPaych .main[data-v-71d8fe7e] {\n  padding-top: 0.0625rem;\n}\n.trafficOrderNoPaych .main .title[data-v-71d8fe7e] {\n    height: 2.75rem;\n    line-height: 2.75rem;\n    padding: 0rem 0.875rem;\n    text-align: right;\n    background: #fff;\n    font-weight: 500;\n}\n.trafficOrderNoPaych .main .title p[data-v-71d8fe7e] {\n      display: inline-block;\n      color: #8c8c8c;\n      font-size: 14px;\n      float: left;\n}\n.trafficOrderNoPaych .main .title span[data-v-71d8fe7e] {\n      color: #333;\n      font-size: 14px;\n      font-weight: 500;\n}\n.trafficOrderNoPaych .main .normal[data-v-71d8fe7e] {\n    background: #fff;\n}\n.trafficOrderNoPaych .main .normal li[data-v-71d8fe7e] {\n      text-align: left;\n}\n.trafficOrderNoPaych .main .normal li span[data-v-71d8fe7e] {\n        display: inline-block;\n        float: right;\n}\n.trafficOrderNoPaych .main .top[data-v-71d8fe7e] {\n    margin: 0.625rem 0;\n    padding: 0 0.875rem;\n}\n.trafficOrderNoPaych .main .top li[data-v-71d8fe7e] {\n      color: #8c8c8c;\n      line-height: 2.75rem;\n      font-size: 14px;\n}\n.trafficOrderNoPaych .main .top li span[data-v-71d8fe7e] {\n        color: #333;\n}\n.trafficOrderNoPaych .main .middle[data-v-71d8fe7e] {\n    padding: 0.625rem 0.875rem;\n}\n.trafficOrderNoPaych .main .middle li[data-v-71d8fe7e] {\n      line-height: 1.875rem;\n      font-size: 14px;\n      color: #8c8c8c;\n      font-weight: 400;\n}\n.trafficOrderNoPaych .main .middle li span[data-v-71d8fe7e] {\n        color: #333;\n}\n.trafficOrderNoPaych .main .content[data-v-71d8fe7e] {\n    padding: 0.625rem 0.875rem;\n    margin-top: 0.625rem;\n}\n.trafficOrderNoPaych .main .content li[data-v-71d8fe7e] {\n      line-height: 1.875rem;\n      font-size: 14px;\n      color: #8c8c8c;\n}\n.trafficOrderNoPaych .main .content span[data-v-71d8fe7e] {\n      color: #333;\n}\n.trafficOrderNoPaych .main .bottom_pay[data-v-71d8fe7e] {\n    margin-top: 0.625rem;\n    background: #fff;\n    text-align: right;\n    padding: 0.9375rem;\n    line-height: 1.625rem;\n    margin-bottom: 6.25rem;\n}\n.trafficOrderNoPaych .main .bottom_pay b[data-v-71d8fe7e] {\n      color: #616161;\n      font-weight: 500;\n}\n.trafficOrderNoPaych .main .bottom_pay span[data-v-71d8fe7e] {\n      color: #a5a5a5;\n}\n.trafficOrderNoPaych .main .footer[data-v-71d8fe7e] {\n    background: #fff;\n    position: fixed;\n    height: 2.8125rem;\n    line-height: 2.8125rem;\n    bottom: 0rem;\n    width: 100%;\n    text-align: right;\n    padding: 0 0.875rem;\n}\n.trafficOrderNoPaych .main .footer .btn[data-v-71d8fe7e] {\n      margin-left: 0.625rem;\n      padding: 0 0.625rem;\n      height: 1.625rem;\n      line-height: 1.625rem;\n      display: inline-block;\n      text-align: center;\n      border-radius: 0.25rem;\n      color: #333;\n      border: 0.0625rem solid #666;\n      cursor: pointer;\n      font-weight: 400;\n}\n.trafficOrderNoPaywei .main[data-v-71d8fe7e] {\n  padding-top: 0.0625rem;\n}\n.trafficOrderNoPaywei .main .title[data-v-71d8fe7e] {\n    height: 2.1875rem;\n    line-height: 2.1875rem;\n    padding: 0rem 0.9375rem;\n    text-align: right;\n    background: #fff;\n    font-weight: 500;\n}\n.trafficOrderNoPaywei .main .title p[data-v-71d8fe7e] {\n      display: inline-block;\n      color: #414141;\n      font-size: 14px;\n      float: right;\n}\n.trafficOrderNoPaywei .main .title span[data-v-71d8fe7e] {\n      color: #ffc381;\n      font-size: 14px;\n      font-weight: 500;\n      float: left;\n}\n.trafficOrderNoPaywei .main .normal[data-v-71d8fe7e] {\n    padding: 0.9375rem;\n    background: #fff;\n    margin: 0.9375rem 0;\n}\n.trafficOrderNoPaywei .main .normal li[data-v-71d8fe7e] {\n      line-height: 1.625rem;\n      text-align: right;\n}\n.trafficOrderNoPaywei .main .normal li span[data-v-71d8fe7e] {\n        display: inline-block;\n        float: left;\n}\n.trafficOrderNoPaywei .main .top[data-v-71d8fe7e] {\n    font-size: 14px;\n}\n.trafficOrderNoPaywei .main .top li[data-v-71d8fe7e] {\n      color: #4b4b4b;\n}\n.trafficOrderNoPaywei .main .middle li[data-v-71d8fe7e] {\n    font-size: 14px;\n    color: #4b4b4b;\n    font-weight: 400;\n    text-align: right;\n}\n.trafficOrderNoPaywei .main .middle li span[data-v-71d8fe7e] {\n      color: #ff9d2b;\n      float: left;\n}\n.trafficOrderNoPaywei .main .content li[data-v-71d8fe7e] {\n    font-size: 14px;\n    color: #4b4b4b;\n}\n.trafficOrderNoPaywei .main .bottom_pay[data-v-71d8fe7e] {\n    background: #fff;\n    text-align: right;\n    padding: 0.9375rem;\n    line-height: 1.625rem;\n    margin-bottom: 6.25rem;\n}\n.trafficOrderNoPaywei .main .bottom_pay b[data-v-71d8fe7e] {\n      color: #616161;\n      font-weight: 500;\n}\n.trafficOrderNoPaywei .main .bottom_pay b[data-v-71d8fe7e]:first-child {\n      float: right;\n}\n.trafficOrderNoPaywei .main .bottom_pay span[data-v-71d8fe7e] {\n      color: #a5a5a5;\n}\n.trafficOrderNoPaywei .main .bottom_pay .orderTime[data-v-71d8fe7e] {\n      float: right;\n}\n.trafficOrderNoPaywei .main .footer[data-v-71d8fe7e] {\n    background: #fff;\n    position: fixed;\n    bottom: 0rem;\n    width: 100%;\n    text-align: right;\n}\n.trafficOrderNoPaywei .main .footer .btn[data-v-71d8fe7e] {\n      width: 100px;\n      height: 30px;\n      line-height: 30px;\n      display: inline-block;\n      text-align: center;\n      margin: 0.9375rem;\n      border-radius: 0.3125rem;\n      color: #ff9b28;\n      border: 1px solid #ffd8ab;\n      cursor: pointer;\n      font-weight: 400;\n}\n",""])}});