webpackJsonp([415],{"34R7":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t("mvHQ"),s=t.n(a),i=t("Pexp"),o=(t("Tg7E"),{components:{cTitle:i.a},data:function(){return{language:{},popupVisible:!1,popupVisible2:!1,passanger:"",card:"",cardId:"",name:"",slots:[{flex:1,values:["成人票"],className:"slot1",textAlign:"center"}],slots2:[{flex:1,values:["身份证"],className:"slot2",textAlign:"center"}],type:""}},methods:{confirm:function(){if(""!=this.cardId&&this.name){var e={cardId:this.cardId,name:this.name};if(localStorage.getItem("airMans")){var n=JSON.parse(localStorage.getItem("airMans"));n.push(e),localStorage.setItem("airMans",s()(n)),this.$router.go(-1)}else localStorage.setItem("airMans",s()([e])),this.$router.go(-1)}else MessageBox.alert("请填写正确的信息")},choosePassanger:function(){this.popupVisible=!this.popupVisible},onValuesChange:function(e,n){e.setSlotValue(1,n[0]),this.passanger=n[0]},chooseCrad:function(){this.popupVisible2=!this.popupVisible2},onValuesChange2:function(e,n){e.setSlotValue(1,n[0]),this.card=n[0]},initLang:function(){sessionStorage.languageService?this.language=JSON.parse(sessionStorage.languageService).newAddPassenger:this.language=this.$store.state.service.languageService.newAddPassenger}},computed:{getLangState:function(){return this.$store.state.service.languageService}},watch:{getLangState:function(e){this.language=e?JSON.parse(sessionStorage.languageService).newAddPassenger:this.$store.state.service.languageService.newAddPassenger}},mounted:function(){this.initLang(),this.type=this.$route.params.type},activated:function(){this.$store.commit("onload"),this.cardId="",this.name="",this.type=this.$route.params.type}}),r={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{class:"newAddPassenger"+e.$store.state.service.lang,attrs:{id:"newAddPassenger"}},[t("c-title",{attrs:{hide:!1,text:e.language.title}}),e._v(" "),t("div",{staticStyle:{height:"40px"}}),e._v(" "),t("ul",{staticClass:"content"},[e._e(),e._v(" "),t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-help"},[e._v(e._s(e.language.name))]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-controler",attrs:{type:"text",placeholder:e.language.placeNameTip},domProps:{value:e.name},on:{input:function(n){n.target.composing||(e.name=n.target.value)}}})]),e._v(" "),e._e(),e._v(" "),t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-help"},[e._v(e._s(e.language.cardId))]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.cardId,expression:"cardId"}],staticClass:"form-controler",attrs:{type:"number",placeholder:e.language.placeCardTip},domProps:{value:e.cardId},on:{input:function(n){n.target.composing||(e.cardId=n.target.value)}}})])]),e._v(" "),t("button",{staticClass:"btn",on:{click:e.confirm}},[e._v(e._s(e.language.btn))]),e._v(" "),t("mt-popup",{attrs:{position:"bottom"},model:{value:e.popupVisible,callback:function(n){e.popupVisible=n},expression:"popupVisible"}},[t("div",{staticClass:"popUp"},[t("div",{staticClass:"title"},[t("span",{staticClass:"left",on:{click:e.choosePassanger}},[e._v(e._s(e.language.cancle))]),e._v(e._s(e.language.passangeType)+"\n\t\t\t\t"),t("span",{staticClass:"right",on:{click:e.choosePassanger}},[e._v(e._s(e.language.btn))])]),e._v(" "),t("mt-picker",{attrs:{slots:e.slots},on:{change:e.onValuesChange}})],1)]),e._v(" "),t("mt-popup",{attrs:{position:"bottom"},model:{value:e.popupVisible2,callback:function(n){e.popupVisible2=n},expression:"popupVisible2"}},[t("div",{staticClass:"popUp"},[t("div",{staticClass:"title"},[t("span",{staticClass:"left",on:{click:e.chooseCrad}},[e._v(e._s(e.language.cancle))]),e._v(e._s(e.language.cardType)+"\n\t\t\t\t"),t("span",{staticClass:"right",on:{click:e.chooseCrad}},[e._v(e._s(e.language.btn))])]),e._v(" "),t("mt-picker",{attrs:{slots:e.slots2},on:{change:e.onValuesChange2}})],1)])],1)},staticRenderFns:[]};var l=t("VU/8")(o,r,!1,function(e){t("IREd")},"data-v-4f2dca3c",null);n.default=l.exports},Ey8U:function(e,n,t){(e.exports=t("FZ+f")(!1)).push([e.i,"\n.newAddPassengerch .content[data-v-4f2dca3c] {\n  margin-top: 0.625rem;\n  background-color: #fff;\n  padding-left: 0.875rem;\n  font-size: 16px;\n}\n.newAddPassengerch .content li[data-v-4f2dca3c]:last-child {\n    border: none;\n}\n.newAddPassengerch .content li[data-v-4f2dca3c] {\n    height: 2.8125rem;\n    line-height: 2.8125rem;\n    padding-right: 0.875rem;\n    background: #fff;\n    text-align: left;\n    border-bottom: solid 0.0625rem #ebebeb;\n}\n.newAddPassengerch .content li label[data-v-4f2dca3c] {\n      width: 6.25rem;\n      float: left;\n      text-align: left;\n}\n.newAddPassengerch .content li i[data-v-4f2dca3c] {\n      font-size: 25px;\n      float: right;\n}\n.newAddPassengerch .content li input[data-v-4f2dca3c] {\n      border: 0;\n      outline: 0;\n      float: left;\n      width: 75%;\n      height: 2.8125rem;\n      line-height: 2.8125rem;\n}\n.newAddPassengerch .content .form-help[data-v-4f2dca3c]:last-child {\n    border: none;\n}\n.newAddPassengerch .content .form-group[data-v-4f2dca3c] {\n    padding-right: 0.875rem;\n    height: 2.8125rem;\n    margin-top: 0.625rem;\n    border-bottom: solid 0.0625rem #ebebeb;\n    background: #FFF;\n    /* Safari */\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row;\n            flex-flow: row;\n}\n.newAddPassengerch .content .form-group .form-help[data-v-4f2dca3c] {\n      width: 6.25rem;\n      height: 2.8125rem;\n      line-height: 2.8125rem;\n      text-align: left;\n}\n.newAddPassengerch .content .form-group .form-controler[data-v-4f2dca3c] {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      height: auto;\n      line-height: 2.8125rem;\n      float: left;\n      border: 0;\n      outline: 0;\n      text-align: left;\n}\n.newAddPassengerch .content .form-group .form-controler i[data-v-4f2dca3c] {\n        font-size: 23px;\n        float: right;\n}\n.newAddPassengerch .btn[data-v-4f2dca3c] {\n  width: 90%;\n  height: 2.875rem;\n  line-height: 2.875rem;\n  border: none;\n  display: block;\n  margin: 0.625rem auto;\n  border-radius: 0.375rem;\n  background: #f15353;\n  color: #fff;\n  font-size: 16px;\n  margin-top: 1.25rem;\n}\n.newAddPassengerch .popUp[data-v-4f2dca3c] {\n  width: 100%;\n  background: #fff;\n}\n.newAddPassengerch .popUp .title[data-v-4f2dca3c] {\n    height: 2.8125rem;\n    line-height: 2.8125rem;\n    border-bottom: 0.0625rem solid #f3f5f7;\n    padding: 0 0.9375rem;\n}\n.newAddPassengerch .popUp .title .left[data-v-4f2dca3c] {\n      float: left;\n}\n.newAddPassengerch .popUp .title .right[data-v-4f2dca3c] {\n      float: right;\n      color: #1bba9e;\n}\n.newAddPassengerwei .content li[data-v-4f2dca3c] {\n  height: 2.8125rem;\n  line-height: 2.8125rem;\n  padding: 0 0.9375rem;\n  margin-top: 0.625rem;\n  background: #fff;\n  text-align: right;\n}\n.newAddPassengerwei .content li label[data-v-4f2dca3c] {\n    width: 25%;\n    float: right;\n    text-align: right;\n}\n.newAddPassengerwei .content li i[data-v-4f2dca3c] {\n    font-size: 25px;\n    float: left;\n}\n.newAddPassengerwei .content li input[data-v-4f2dca3c] {\n    border: 0;\n    outline: 0;\n    float: right;\n    width: 75%;\n    height: 2.5rem;\n}\n.newAddPassengerwei .btn[data-v-4f2dca3c] {\n  width: 80%;\n  height: 2.5rem;\n  line-height: 2.5rem;\n  border: 0.0625rem solid #dfdfdf;\n  display: block;\n  margin: 0.625rem auto;\n  border-radius: 0.375rem;\n  background: #FF951B;\n  color: #fff;\n  font-size: 16px;\n  margin-top: 1.875rem;\n}\n.newAddPassengerwei .popUp[data-v-4f2dca3c] {\n  width: 100%;\n  background: #fff;\n}\n.newAddPassengerwei .popUp .title[data-v-4f2dca3c] {\n    height: 2.8125rem;\n    line-height: 2.8125rem;\n    border-bottom: 0.0625rem solid #f3f5f7;\n    padding: 0 0.9375rem;\n}\n.newAddPassengerwei .popUp .title .left[data-v-4f2dca3c] {\n      float: right;\n}\n.newAddPassengerwei .popUp .title .right[data-v-4f2dca3c] {\n      float: left;\n      color: #1bba9e;\n}\n",""])},IREd:function(e,n,t){var a=t("Ey8U");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);t("rjj0")("31751dcd",a,!0,{})}});