webpackJsonp([253],{"69+m":function(t,n,e){(t.exports=e("FZ+f")(!1)).push([t.i,"\n#register[data-v-93295b00] {\n  margin-top: 3.125rem;\n  width: 100%;\n}\n#register #agreement[data-v-93295b00] {\n    height: 1.875rem;\n    line-height: 1.875rem;\n}\n#register #agreement .span[data-v-93295b00] {\n      text-align: center;\n      font-size: 20px;\n}\n#register #lin[data-v-93295b00] {\n    margin-bottom: 1.25rem;\n}\n#register #code[data-v-93295b00] {\n    background: #ccc;\n    padding: 0.1875rem 0.3125rem;\n    border-radius: 0.1875rem;\n}\n#register h1[data-v-93295b00] {\n    color: #42b983;\n}\n#register .mint-button--large[data-v-93295b00] {\n    margin-top: 0.625rem;\n}\n#register #bts[data-v-93295b00] {\n    margin: auto 0.3125rem;\n}\n#register #bts .mint-button--default[data-v-93295b00] {\n      background-color: #13ce66;\n      color: #FFF;\n}\n#register .forget[data-v-93295b00] {\n    color: #999;\n    float: right;\n}\n",""])},"NwY+":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});e("Tg7E");var r={data:function(){return{protocol:""}},mounted:function(){},methods:{init:function(){},getProtocolInfo:function(){var t=this;$http.get("setting.get-member-protocol",{}).then(function(n){1==n.result&&(t.protocol=n.data.content)},function(t){console.log(t.msg)})}},activated:function(){this.init(),this.getProtocolInfo()},components:{cTitle:e("Pexp").a}},o={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"register"}},[n("c-title",{attrs:{hide:!1,text:"协议"}}),this._v(" "),n("div",{attrs:{id:"a_content"},domProps:{innerHTML:this._s(this.protocol)}})],1)},staticRenderFns:[]};var i=e("VU/8")(r,o,!1,function(t){e("V1UL")},"data-v-93295b00",null);n.default=i.exports},V1UL:function(t,n,e){var r=e("69+m");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);e("rjj0")("0ab12661",r,!0,{})}});