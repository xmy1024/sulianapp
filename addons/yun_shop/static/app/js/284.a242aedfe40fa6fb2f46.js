webpackJsonp([284],{Mbt3:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=e("Pexp"),n=(e("Tg7E"),{data:function(){return{recordtype:["全部","待审核","已通过","无效"],selectkey:0,dataold:[],datas:[],couriername:""}},methods:{filtertype:function(t){this.selectkey=t;var a=this.datas.filter(function(t){return 5!=t});switch(this.datas=a,t){case 0:this.datas=this.dataold;break;case 1:this.datas=this.dataold,this.datas=this.datas.filter(function(t){return 0==t.status});break;case 2:this.datas=this.dataold,this.datas=this.datas.filter(function(t){return 1==t.status});break;case 3:this.datas=this.dataold,this.datas=this.datas.filter(function(t){return 2==t.status})}},getdata:function(){var t=this;$http.get("plugin.courier.api.frontend.uploadLog.index").then(function(a){t.dataold=a.data.list,t.datas=t.dataold})}},created:function(){this.couriername=window.localStorage.couriername},activated:function(){this.getdata()},components:{cTitle:r.a}}),c={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"courierrecord"}},[e("c-title",{attrs:{hide:!1,text:"上传记录"}}),t._v(" "),e("div",{staticStyle:{height:"40px"}}),t._v(" "),e("header",t._l(t.recordtype,function(a,r,n){return e("span",{key:n,class:{color:r==t.selectkey},on:{click:function(a){return t.filtertype(r)}}},[t._v(t._s(a))])}),0),t._v(" "),t._l(t.datas,function(a,r,n){return e("div",{key:n,staticClass:"record"},[e("p",[e("span",[t._v("记录id："+t._s(a.id))]),t._v(" "),0==a.status?e("span",{staticStyle:{color:"#f15353"}},[t._v("待审核")]):t._e(),t._v(" "),1==a.status?e("span",{staticStyle:{color:"green"}},[t._v("已通过")]):t._e(),t._v(" "),2==a.status?e("span",{staticStyle:{color:"#ccc"}},[t._v("已驳回")]):t._e()]),t._v(" "),e("div",{staticClass:"records"},[e("section",[e("span",[t._v(t._s(t.couriername)+"号")]),t._v(" "),e("span",[t._v(t._s(a.courier_number)+"SM3478598746")])]),t._v(" "),e("router-link",{attrs:{to:t.fun.getUrl("courierdetail",{id:a.id})}},[e("div",{staticClass:"look"},[e("span",[t._v("查看记录")]),t._v(" "),e("i",{staticClass:"fa fa-angle-right"})])])],1)])})],2)},staticRenderFns:[]};var i=e("VU/8")(n,c,!1,function(t){e("y7AL")},"data-v-7c83ac6a",null);a.default=i.exports},OXqj:function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,"\n#courierrecord .color[data-v-7c83ac6a] {\n  border-bottom: solid 3px #f15353;\n  color: #f15353;\n}\n#courierrecord header[data-v-7c83ac6a] {\n  width: 100%;\n  height: 45px;\n  margin-top: 1px;\n  background: #fff;\n}\n#courierrecord header span[data-v-7c83ac6a] {\n    display: block;\n    height: 45px;\n    width: 25%;\n    text-align: center;\n    float: left;\n    line-height: 45px;\n    font-size: 14px;\n}\n#courierrecord .record p[data-v-7c83ac6a] {\n  margin-top: 10px;\n  height: 40px;\n  background: #fff;\n}\n#courierrecord .record p span[data-v-7c83ac6a] {\n    font-size: 14px;\n    line-height: 40px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n#courierrecord .record p span[data-v-7c83ac6a]:nth-child(1) {\n      float: left;\n      padding-left: 10px;\n}\n#courierrecord .record p span[data-v-7c83ac6a]:nth-child(2) {\n      float: right;\n      padding-right: 10px;\n}\n#courierrecord .record .records[data-v-7c83ac6a] {\n  background: #fff;\n  margin-top: 1px;\n  padding: 10px  14px;\n  color: #8c8c8c;\n}\n#courierrecord .record .records section[data-v-7c83ac6a] {\n    width: 100%;\n    height: 30px;\n    font-size: 13px;\n}\n#courierrecord .record .records section span[data-v-7c83ac6a] {\n      line-height: 30px;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n}\n#courierrecord .record .records section span[data-v-7c83ac6a]:nth-child(1) {\n        float: left;\n}\n#courierrecord .record .records section span[data-v-7c83ac6a]:nth-child(2) {\n        float: right;\n}\n#courierrecord .record .records .look[data-v-7c83ac6a] {\n    line-height: 30px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    font-size: 13px;\n    text-align: left;\n}\n#courierrecord .record .records .look i[data-v-7c83ac6a] {\n      line-height: 30px;\n      font-size: 20px;\n      color: #c9c9c9;\n}\n",""])},y7AL:function(t,a,e){var r=e("OXqj");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);e("rjj0")("a0d544b8",r,!0,{})}});