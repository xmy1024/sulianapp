webpackJsonp([596],{"+Oak":function(t,n,e){(t.exports=e("FZ+f")(!1)).push([t.i,"\n#articleContent[data-v-0596ee04] {\n  padding: 0.625rem;\n  background: #fff;\n}\n#articleContent .foot_advs[data-v-0596ee04] {\n    margin-bottom: 1.25rem;\n    background: #fff;\n    height: auto;\n    border: 0.0625rem solid #ebebeb;\n    padding: 0.3125rem;\n    width: 100%;\n    border-radius: 0;\n}\n#articleContent .foot[data-v-0596ee04] {\n    height: 1.875rem;\n}\n#articleContent h4[data-v-0596ee04] {\n    text-align: left;\n    font-size: 18px;\n}\n#articleContent h4.like[data-v-0596ee04] {\n    float: left;\n    color: #8a8a8a;\n    text-align: left;\n    font-size: 16px;\n}\n#articleContent h4.read[data-v-0596ee04] {\n    padding-right: 0.625rem;\n    float: left;\n    color: #8a8a8a;\n    text-align: left;\n    font-size: 16px;\n}\n#articleContent h4.report[data-v-0596ee04] {\n    padding-right: 0.625rem;\n    float: right;\n    color: #8a8a8a;\n    text-align: left;\n    font-size: 16px;\n}\n#articleContent h4.link[data-v-0596ee04] {\n    padding-right: 0.625rem;\n    float: right;\n    color: #8a8a8a;\n    text-align: left;\n    font-size: 16px;\n}\n#articleContent h4.copy[data-v-0596ee04] {\n    padding-right: 0.625rem;\n    float: left;\n    color: #8a8a8a;\n    text-align: left;\n    font-size: 16px;\n}\n#articleContent .time[data-v-0596ee04] {\n    font-size: 14px;\n    color: #8a8a8a;\n    text-align: left;\n    line-height: 1.5625rem;\n    height: 1.5625rem;\n}\n#articleContent .content[data-v-0596ee04] {\n    width: 100%;\n    font-size: 16px;\n    text-align: left;\n    padding-top: 0.625rem;\n    padding-bottom: 1.875rem;\n}\n#articleContent .content img[data-v-0596ee04] {\n      width: 100%;\n}\n#articleContent .advs_img_bg[data-v-0596ee04] {\n    width: 100%;\n    height: 8.125rem;\n    margin-bottom: 0.625rem;\n    padding-top: 0.3125rem;\n    padding-bottom: 0.3125rem;\n}\n#articleContent .advs_img[data-v-0596ee04] {\n    width: 100%;\n    height: 7.5rem;\n}\n#articleContent p.advs_title[data-v-0596ee04] {\n    padding-left: 0.3125rem;\n    padding-right: 0.3125rem;\n    text-align: left;\n    height: 1.875rem;\n    line-height: 1.875rem;\n    font-size: 15px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    font-weight: bold;\n}\n#articleContent .advs_desc[data-v-0596ee04] {\n    padding-left: 0.3125rem;\n    padding-right: 0.3125rem;\n    text-align: left;\n    font-size: 14px;\n    color: #8a8a8a;\n}\n",""])},Piph:function(t,n,e){var a=e("+Oak");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e("rjj0")("18e96ce2",a,!0,{})},ovX4:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("Pexp"),i=(e("Tg7E"),{data:function(){return{toi:this.fun.getKeyByI(),_id:"",dataInfo:{},content:""}},activated:function(){this._id=this.$route.params.id,this.dataInfo={},this.content="",this.getData()},mounted:function(){this.toi=this.fun.getKeyByI()},methods:{getData:function(){var t=this,n={message_id:this._id,i:this.fun.getKeyByI(),type:this.fun.getTyep()};$http.get("plugin.app-set.frontend.message-detail.index",n,"加载中").then(function(n){console.log(n),1===n.result?t.dataInfo=n.data.message:console.log(n.msg)},function(t){console.log(t)})},goto:function(){window.history.go(-1)}},components:{cTitle:a.a}}),o={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"articleContent"}},[e("h4",[t._v(t._s(t.dataInfo.title))]),t._v(" "),e("div",{staticClass:"time"},[t._v(t._s(t.dataInfo.created_at))]),t._v(" "),e("div",{staticClass:"content"},[t._v("\n    "+t._s(t.dataInfo.content)+"\n  ")])])},staticRenderFns:[]};var r=e("VU/8")(i,o,!1,function(t){e("Piph")},"data-v-0596ee04",null);n.default=r.exports}});