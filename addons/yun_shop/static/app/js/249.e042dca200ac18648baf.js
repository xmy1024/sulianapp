webpackJsonp([249],{"7HGq":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});a("Tg7E");var n=a("Pexp"),i="plugin.net-car.frontend.subordinate.car-team-member",o={mixins:[a("vsZy").a],data:function(){return{dataInfo:[],page:1,isLoadMore:!0,total_page:0,isShowNoTest:!1,memberTotal:"0"}},activated:function(){this.getData()},mounted:function(){},methods:{getData:function(){var e=this;$http.get(i,{page:1},"加载中...").then(function(t){1==t.result&&(e.isLoadMore=!0,e.total_page=t.data.last_page,e.total_page||(e.total_page=0),e.memberTotal=t.data.total,e.dataInfo=t.data,e.isShowNoText=e.fun.isTextEmpty(e.dataInfo.data))}).catch(function(e){console.log(e)})},getMoreData:function(){var e=this;this.isLoadMore=!1,this.page>=this.total_page||(this.page+=1,$http.get(i,{page:this.page},"加载中...").then(function(t){if(e.isLoadMore=!0,1!=t.result)return e.page=that.page-1,void(e.isLoadMore=!1);var a=t.data;e.dataInfo=e.dataInfo.concat(a)}).catch(function(e){console.log(e)}))},loadTop:function(){this.initPageData(),this.getData(),this.$refs.loadmore.onTopLoaded()},initPageData:function(){this.dataInfo=[],this.isLoadMore=!0,this.total_page=0,this.page=1}},components:{cTitle:n.a}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"team_member"}},[a("c-title",{attrs:{hide:!1,text:"车队成员(合计："+e.memberTotal+"人）"}}),e._v(" "),a("mt-loadmore",{ref:"loadmore",attrs:{"top-method":e.loadTop,topDropText:"释放刷新"}},[e.isShowNoText?e._e():a("div",{attrs:{id:"list_box"}},e._l(e.dataInfo.data,function(t,n){return a("div",{key:n,staticClass:"user"},[a("div",{staticClass:"user_img"},[a("img",{attrs:{src:t.avatar}})]),e._v(" "),a("ul",{staticClass:"name_number"},[a("li",{staticClass:"name"},[e._v(e._s(t.username))]),e._v(" "),a("li",{staticClass:"number"},[e._v("\n                      ID:"+e._s(t.uid)+"\n                  ")])])])}),0)]),e._v(" "),e.isShowNoText?a("h2",[e._v("暂无数据")]):e._e()],1)},staticRenderFns:[]};var r=a("VU/8")(o,s,!1,function(e){a("xH5t")},"data-v-950f8ce8",null);t.default=r.exports},LCGb:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"\n#team_member[data-v-950f8ce8] {\n  padding-top: 40px;\n}\n#team_member #list_box[data-v-950f8ce8] {\n    background: #fff;\n    min-height: 100vh;\n}\n#team_member #list_box .user[data-v-950f8ce8] {\n      border-bottom: solid 0.0625rem #ebebeb;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      padding: 0.875rem;\n}\n#team_member #list_box .user .user_img[data-v-950f8ce8] {\n        width: 3rem;\n        height: 3rem;\n        border-radius: 2rem;\n        background: #f2f2f2;\n        overflow: hidden;\n        margin-right: 0.625rem;\n}\n#team_member #list_box .user .user_img img[data-v-950f8ce8] {\n          width: 100%;\n}\n#team_member #list_box .user .name_number[data-v-950f8ce8] {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        width: 289px;\n}\n#team_member #list_box .user .name_number .name[data-v-950f8ce8] {\n          font-size: 16px;\n          max-width: 10rem;\n          overflow: hidden;\n          text-overflow: ellipsis;\n          white-space: nowrap;\n}\n#team_member #list_box .user .name_number .number span[data-v-950f8ce8] {\n          display: block;\n          font-size: 14px;\n}\n#team_member #list_box .user .name_number .number span[data-v-950f8ce8]:last-child {\n          color: #ed743b;\n}\n",""])},xH5t:function(e,t,a){var n=a("LCGb");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("a30c0fc8",n,!0,{})}});