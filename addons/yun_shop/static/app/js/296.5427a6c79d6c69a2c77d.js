webpackJsonp([296],{"1oZw":function(a,t,e){var n=e("M3YC");"string"==typeof n&&(n=[[a.i,n,""]]),n.locals&&(a.exports=n.locals);e("rjj0")("45ac0864",n,!0,{})},M3YC:function(a,t,e){(a.exports=e("FZ+f")(!1)).push([a.i,"\n#city_manager[data-v-772aee03] {\n  padding-top: 40px;\n}\n#city_manager #list_box[data-v-772aee03] {\n    background: #fff;\n}\n#city_manager #list_box .con[data-v-772aee03] {\n      min-height: 100vh;\n}\n#city_manager #list_box .con .user[data-v-772aee03] {\n        border-bottom: solid 0.0625rem #ebebeb;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        padding: 0.875rem;\n}\n#city_manager #list_box .con .user .user_img[data-v-772aee03] {\n          width: 3rem;\n          height: 3rem;\n          border-radius: 2rem;\n          background: #f2f2f2;\n          overflow: hidden;\n          margin-right: 0.625rem;\n}\n#city_manager #list_box .con .user .user_img img[data-v-772aee03] {\n            width: 100%;\n}\n#city_manager #list_box .con .user .name_number[data-v-772aee03] {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-pack: justify;\n              -ms-flex-pack: justify;\n                  justify-content: space-between;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          width: 289px;\n}\n#city_manager #list_box .con .user .name_number .name[data-v-772aee03] {\n            font-size: 16px;\n            max-width: 10rem;\n            overflow: hidden;\n            text-overflow: ellipsis;\n            white-space: nowrap;\n}\n#city_manager #list_box .con .user .name_number .number span[data-v-772aee03] {\n            display: block;\n            font-size: 14px;\n}\n#city_manager #list_box .con .user .name_number .number span[data-v-772aee03]:last-child {\n            color: #ed743b;\n}\n",""])},g1kW:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});e("Tg7E");var n=e("Pexp"),i="plugin.net-car.frontend.subordinate.city-manager-people",o={mixins:[e("vsZy").a],data:function(){return{isShowNoText:!1,managerNumber:"0",dataInfo:[],page:1,isLoadMore:!0,total_page:0}},activated:function(){this.getData()},methods:{initPageData:function(){this.dataInfo=[],this.isLoadMore=!0,this.total_page=0,this.page=1},getData:function(){var a=this,t=this;$http.get(i,{page:1},"加载中...").then(function(e){1==e.result&&(t.isLoadMore=!0,t.total_page=e.data.last_page,t.total_page||(t.total_page=0),t.dataInfo=e.data,t.managerNumber=e.data.total,t.isShowNoText=t.fun.isTextEmpty(a.dataInfo.data))}).catch(function(a){console.log(a)})},getMoreData:function(){this.isLoadMore=!1;var a=this;a.page>=a.total_page||(a.page+=1,$http.get(i,{page:a.page},"加载中...").then(function(t){if(a.isLoadMore=!0,1!=t.result)return a.page=a.page-1,void(a.isLoadMore=!1);var e=t.data;a.dataInfo=a.dataInfo.concat(e)}).catch(function(a){console.log(a)}))},loadTop:function(){this.initPageData(),this.getData(),this.$refs.loadmore.onTopLoaded()}},components:{cTitle:n.a}},s={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{attrs:{id:"city_manager"}},[e("c-title",{attrs:{hide:!1,text:"城市经理人(合计："+a.managerNumber+"人）"}}),a._v(" "),this.fun.isTextEmpty(a.dataInfo.data)?a._e():e("div",{attrs:{id:"list_box"}},[e("mt-loadmore",{ref:"loadmore",attrs:{"top-method":a.loadTop,topDropText:"释放刷新"}},[e("div",{staticClass:"con"},a._l(a.dataInfo.data,function(t,n){return e("div",{key:n,staticClass:"user"},[e("div",{staticClass:"user_img"},[e("img",{attrs:{src:t.avatar}})]),a._v(" "),e("ul",{staticClass:"name_number"},[e("li",{staticClass:"name"},[a._v(a._s(t.username))]),a._v(" "),e("li",{staticClass:"number"},[e("span",[a._v("总投资"+a._s(t.total_order_amount)+"元")]),a._v(" "),e("span",[a._v("总投资车辆"+a._s(t.car_num)+"辆")])])])])}),0)])],1),a._v(" "),a.isShowNoText?e("h2",[a._v("暂无数据")]):a._e()],1)},staticRenderFns:[]};var r=e("VU/8")(o,s,!1,function(a){e("1oZw")},"data-v-772aee03",null);t.default=r.exports}});