webpackJsonp([300],{"4bdO":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("Dd8w"),i=o.n(n),a=o("SJI6"),s=o("r3ZR"),r=o("VkqP"),c=o("Tg7E"),d=o("vsZy"),l=i()({mixins:[d.a],data:function(){return{title:"搜索",inputs:"",amout:!1,loading:!1,goods:[],order_by:"",order_field:"",isLoadMore:!0,page:1,total_page:0}},computed:Object(a.mapState)(["view"])},Object(a.mapMutations)(["views"]),{mounted:function(){this.slider(),window.searchallScrollTop=0,"searchAll"==this.$route.name&&this.search()},beforeRouteLeave:function(t,e,o){window.searchallScrollTop=document.documentElement.scrollTop||document.body.scrollTop,o()},methods:{enterSearch:function(t){13===t.keyCode&&(t.preventDefault(),this.search())},sortOut:function(t){0!=this.goods.length&&(this.goods=[],this.order_field=t.order_field,this.order_by=t.order_by,this.getData())},search:function(){this.goods=[],this.getData()},slider:function(){var t=this;window.onscroll=function(){var e=document.documentElement.scrollTop||document.body.scrollTop;t.amout=!(e<80)}},goback:function(){this.$router.go(-1)},getData:function(){var t=this,e={"search[keyword]":this.inputs,page:1,order_field:this.order_field,order_by:this.order_by};$http.get("goods.goods.search-goods",e,"loading").then(function(e){1===e.result?(t.isLoadMore=!0,t.total_page=e.data.last_page,t.total_page||(t.total_page=0),t.goods=e.data.data):Object(c.Toast)(e.msg)}).catch(function(t){console.log(t)})},getMoreData:function(){var t=this,e=this;e.isLoadMore=!1;var o={"search[keyword]":this.inputs,page:1,order_field:this.order_field,order_by:this.order_by};this.page>=this.total_page?this.loading=!0:(this.page=this.page+1,o.page=this.page,$http.get("goods.goods.search-goods",o,"加载中").then(function(o){if(e.isLoadMore=!0,t.loading=!1,1!==o.result)return e.page=e.page-1,t.loading=!0,void(e.isLoadMore=!1);var n=o.data.data;e.goods=e.goods.concat(n)},function(t){}))}},activated:function(){this.amout=!1,window.location.href.indexOf("#/searchall?")>-1&&setTimeout(function(){window.scrollTo(0,window.searchallScrollTop)},200)},components:{cGoodsList:s.a,cSort:r.a}}),f={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"search",transition:"fadeInLeft"}},[o("div",{staticClass:"uou",class:[{mout:t.amout},3==this.fun.getPhoneEnv()?"pcStyle":""],attrs:{id:"soso"}},[o("div",{staticClass:"search"},[o("div",{staticClass:"back",on:{click:t.goback}},[o("i",{staticClass:"fa fa-angle-left"})]),t._v(" "),o("div",{staticClass:"search-box"},[o("form",{attrs:{action:"#"},on:{submit:function(t){t.preventDefault()}}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.inputs,expression:"inputs"}],attrs:{type:"search",placeholder:"请输入内容"},domProps:{value:t.inputs},on:{keypress:t.enterSearch,input:function(e){e.target.composing||(t.inputs=e.target.value)}},nativeOn:{click:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"focus",void 0,e.key,void 0)?null:t.hidebox(e)}}})]),t._v(" "),o("i",{staticClass:"iconfont icon-sousuo1",staticStyle:{color:"#ccc"},on:{click:t.search}})]),t._v(" "),o("div",{staticStyle:{position:"absolute",right:"1rem"}},[o("i",{directives:[{name:"show",rawName:"v-show",value:t.view,expression:"view"}],staticClass:"fa fa-th-large",on:{click:function(e){return t.$store.commit("views")}}}),t._v(" "),o("i",{directives:[{name:"show",rawName:"v-show",value:!t.view,expression:"!view"}],staticClass:"fa fa-th-list",on:{click:function(e){return t.$store.commit("views")}}})])]),t._v(" "),o("c-sort",{attrs:{goods:t.goods,text:"搜索结果"},on:{sortIn:t.sortOut}})],1),t._v(" "),o("div",{staticStyle:{height:"5.4375rem",display:"block"}}),t._v(" "),o("c-goodsList",{staticClass:"osll",attrs:{goods:t.goods,text:"搜索结果",loading:t.loading}})],1)},staticRenderFns:[]};var h=o("VU/8")(l,f,!1,function(t){o("PxXm")},"data-v-76c4fcf7",null);e.default=h.exports},PxXm:function(t,e,o){var n=o("TQ5T");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o("rjj0")("79054839",n,!0,{})},TQ5T:function(t,e,o){(t.exports=o("FZ+f")(!1)).push([t.i,"\n#search .uou[data-v-76c4fcf7] {\n  width: 100%;\n  position: fixed;\n  z-index: 99;\n  top: 0;\n  transition: 0.2s;\n  -webkit-transition: 0.2s;\n}\n#search .pcStyle[data-v-76c4fcf7] {\n  width: 375px;\n}\n#search .mout[data-v-76c4fcf7] {\n  top: -2.25rem;\n}\n.search[data-v-76c4fcf7] {\n  height: 2.8125rem;\n  line-height: 2.8125rem;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n  background: #fff;\n  border-bottom: 0.0625rem solid #f5f5f5;\n}\n.search .back[data-v-76c4fcf7] {\n    width: 2.8125rem;\n}\n.search .back i[data-v-76c4fcf7] {\n      line-height: 2.8125rem;\n      font-size: 1.5rem;\n}\n.search .search-box[data-v-76c4fcf7] {\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    width: 75%;\n    margin-top: 0.5rem;\n    padding: 0 0.625rem;\n    background-color: #f2f2f2;\n    height: 1.75rem;\n    line-height: 1.75rem;\n    border-radius: 0.875rem;\n}\n.search .search-box input[data-v-76c4fcf7] {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      line-height: 1.75rem;\n      border: none;\n      color: #333;\n}\n.search .search-box i[data-v-76c4fcf7] {\n      position: absolute;\n      right: 1rem;\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 1.5rem;\n              flex: 0 0 1.5rem;\n}\n",""])}});