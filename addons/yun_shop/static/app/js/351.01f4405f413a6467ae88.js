webpackJsonp([351],{"7nGa":function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"\n.course-content[data-v-6848f84f] {\n  padding-top: 40px;\n}\n.box01[data-v-6848f84f] {\n  border-bottom: solid 0.0625rem #ebebeb;\n  text-align: left;\n  width: 100%;\n  background-color: #fff;\n  padding-bottom: 0.75rem;\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.image[data-v-6848f84f] {\n  width: 5rem;\n  height: 5rem;\n  background-color: #333;\n  float: left;\n  overflow: hidden;\n}\n.image img[data-v-6848f84f] {\n    width: 100%;\n    height: 100%;\n}\n.title[data-v-6848f84f] {\n  float: left;\n  margin-left: 0.625rem;\n}\n.title .name[data-v-6848f84f] {\n    display: block;\n    width: 16.125rem;\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 2;\n    overflow: hidden;\n}\ni[data-v-6848f84f] {\n  position: absolute;\n  right: 1.25rem;\n}\n.clearfix[data-v-6848f84f] {\n  clear: both;\n}\n",""])},tMb9:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("Tg7E");var i=n("C8p+"),o={data:function(){return{myCourseInfo:[]}},mounted:function(){},methods:{getMyCourse:function(){var t=this;$http.get("plugin.video-demand.api.video-demand-member.get-me-course").then(function(e){console.log(e),1!==e.result||t.fun.isTextEmpty(e.data)||(t.myCourseInfo=e.data)}).catch(function(t){console.log(t)})},goToDetail:function(t){this.$router.push(this.fun.getUrl("CourseDetail",{goods_id:t}))}},activated:function(){this.getMyCourse()},components:{cTitle:n("Pexp").a,CheckBox:i.CheckBox}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"course"}},[n("c-title",{attrs:{hide:!1,text:"我的课程"}}),t._v(" "),n("div",{staticClass:"course-content"},t._l(t.myCourseInfo,function(e){return n("div",{key:e.goods_id,staticClass:"box01",on:{click:function(n){return t.goToDetail(e.goods_id)}}},[n("span",{staticStyle:{"line-height":"2.5rem","text-align":"left","font-size":"15px"},attrs:{slot:"text"},slot:"text"},[t._v("订单号："+t._s(e.order_sn))]),t._v(" "),n("div",{staticStyle:{display:"flex"}},[n("div",{staticClass:"image"},[n("img",{staticStyle:{width:"100%",hieght:"100%"},attrs:{src:e.goods_thumb}})]),t._v(" "),n("div",{staticClass:"title"},[n("span",{staticClass:"name",staticStyle:{"font-size":"15px"}},[t._v("课程名称:"+t._s(e.goods_title))]),t._v(" "),n("ul",{staticStyle:{"margin-top":"0.625rem"}},[n("li",{staticStyle:{color:"#8c8c8c"}},[t._v(t._s(e.created_at))])])]),t._v(" "),n("yd-icon",{staticClass:"icon-bofang",staticStyle:{float:"right","line-height":"3rem",color:"#ff9600"},attrs:{slot:"icon",custom:"",size:"1.25rem"},slot:"icon"})],1),t._v(" "),n("div",{staticClass:"clearfix"})])}),0)],1)},staticRenderFns:[]};var s=n("VU/8")(o,a,!1,function(t){n("yoCx")},"data-v-6848f84f",null);e.default=s.exports},yoCx:function(t,e,n){var i=n("7nGa");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("30e8002a",i,!0,{})}});