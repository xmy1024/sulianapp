webpackJsonp([329],{"4f93":function(a,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});s("Tg7E");var e="plugin.scoring-dividend.api.scoring-dividend.scoring-record",i={data:function(){return{all_arr:[],auditing_arr:[],pass_arr:[],reject_arr:[],page:1,total_page:0,isLoading:!1,isAllLoaded:!1,status:"",current_index:0}},activated:function(){this.initData(),this.getList()},mounted:function(){},methods:{tabHandel:function(a){if(console.log(a),this.current_index!=a){switch(this.current_index=a,a){case 0:this.status="";break;case 1:this.status="0";break;case 2:this.status="1";break;case 3:this.status="-1"}this.initPageData(),this.getList()}},initData:function(){this.all_arr=[],this.auditing_arr=[],this.pass_arr=[],this.reject_arr=[],this.page=1,this.total_page=0,this.isLoading=!1,this.isAllLoaded=!1,this.status="",this.current_index=0},initPageData:function(){this.page=1,this.total_page=0,this.isLoading=!1,this.isAllLoaded=!1},getList:function(){var a=this;$http.get(e,{page:this.page,status:this.status},"...加载中").then(function(t){if(1==t.result){switch(a.status){case"":a.all_arr=t.data.data;break;case"0":a.auditing_arr=t.data.data;break;case"1":a.pass_arr=t.data.data;break;case"-1":a.reject_arr=t.data.data}a.isLoading=!1,a.page==t.data.last_page&&(a.isAllLoaded=!0)}}).catch(function(a){console.log(a)})},getMoreList:function(){var a=this;this.isAllLoaded||(this.page=this.page+1,$http.get(e,{status:this.status,page:this.page},"加载中...").then(function(t){if(1!=t.result)return a.page=a.page-1,a.isLoading=!1,void(a.isAllLoaded=!1);switch(a.status){case"":a.all_arr=a.all_arr.concat(t.data.data);break;case"0":a.auditing_arr=a.auditing_arr.concat(t.data.data);break;case"1":a.pass_arr=a.pass_arr.concat(t.data.data);break;case"-1":a.reject_arr=a.reject_arr.concat(t.data.data)}a.isLoading=!1,a.page==t.data.last_page&&(a.isAllLoaded=!0)}).catch(function(a){console.log(a)}))},getStatus:function(a){var t="";switch(a){case 0:t="待审核";break;case 1:t="已审核";break;case-1:t="已驳回"}return t}},components:{cTitle:s("Pexp").a}},n={render:function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{attrs:{id:"bonus_record"}},[s("c-title",{attrs:{hide:!1,text:"分红记录"}}),a._v(" "),s("div",{attrs:{id:"content"}},[s("van-tabs",{on:{click:a.tabHandel}},[s("van-tab",{attrs:{title:"全部"}},[s("div",{staticClass:"reward_box"},[s("van-pull-refresh",{attrs:{disabled:a.isAllLoaded},on:{refresh:a.getMoreList},model:{value:a.isLoading,callback:function(t){a.isLoading=t},expression:"isLoading"}},a._l(a.all_arr,function(t,e){return s("div",{key:e,staticClass:"reward_list"},[s("ul",{staticClass:"reward_ID"},[s("li",[s("span",[a._v("奖励记录ID:"+a._s(t.scoring_sn))])])]),a._v(" "),s("ul",{staticClass:"reward_info"},[s("li",[s("span",[a._v(a._s(t.has_one_member_level.level_name))]),a._v(" "),s("span",{staticClass:"sum"},[a._v(a._s(t.scoring_amount||0))])]),a._v(" "),s("li",[s("span",{staticClass:"time"},[a._v(a._s(t.created_at))]),a._v(" "),s("span",[a._v(a._s(a.getStatus(t.status)))])])])])}),0)],1)]),a._v(" "),s("van-tab",{attrs:{title:"待审核"}},[s("div",{staticClass:"reward_box"},[s("van-pull-refresh",{attrs:{disabled:a.isAllLoaded},on:{refresh:a.getMoreList},model:{value:a.isLoading,callback:function(t){a.isLoading=t},expression:"isLoading"}},a._l(a.auditing_arr,function(t,e){return s("div",{key:e,staticClass:"reward_list"},[s("ul",{staticClass:"reward_ID"},[s("li",[s("span",[a._v("奖励记录ID:"+a._s(t.scoring_sn))])])]),a._v(" "),s("ul",{staticClass:"reward_info"},[s("li",[s("span",[a._v(a._s(t.has_one_member_level.level_name))]),a._v(" "),s("span",{staticClass:"sum"},[a._v(a._s(t.scoring_amount||0))])]),a._v(" "),s("li",[s("span",{staticClass:"time"},[a._v(a._s(t.created_at))]),a._v(" "),s("span",[a._v(a._s(a.getStatus(t.status)))])])])])}),0)],1)]),a._v(" "),s("van-tab",{attrs:{title:"通过"}},[s("div",{staticClass:"reward_box"},[s("van-pull-refresh",{attrs:{disabled:a.isAllLoaded},on:{refresh:a.getMoreList},model:{value:a.isLoading,callback:function(t){a.isLoading=t},expression:"isLoading"}},a._l(a.pass_arr,function(t,e){return s("div",{key:e,staticClass:"reward_list"},[s("ul",{staticClass:"reward_ID"},[s("li",[s("span",[a._v("奖励记录ID:"+a._s(t.scoring_sn))])])]),a._v(" "),s("ul",{staticClass:"reward_info"},[s("li",[s("span",[a._v(a._s(t.has_one_member_level.level_name))]),a._v(" "),s("span",{staticClass:"sum"},[a._v(a._s(t.scoring_amount||0))])]),a._v(" "),s("li",[s("span",{staticClass:"time"},[a._v(a._s(t.created_at))]),a._v(" "),s("span",[a._v(a._s(a.getStatus(t.status)))])])])])}),0)],1)]),a._v(" "),s("van-tab",{attrs:{title:"驳回"}},[s("div",{staticClass:"reward_box"},[s("van-pull-refresh",{attrs:{disabled:a.isAllLoaded},on:{refresh:a.getMoreList},model:{value:a.isLoading,callback:function(t){a.isLoading=t},expression:"isLoading"}},a._l(a.reject_arr,function(t,e){return s("div",{key:e,staticClass:"reward_list"},[s("ul",{staticClass:"reward_ID"},[s("li",[s("span",[a._v("奖励记录ID:"+a._s(t.scoring_sn))])])]),a._v(" "),s("ul",{staticClass:"reward_info"},[s("li",[s("span",[a._v(a._s(t.has_one_member_level.level_name))]),a._v(" "),s("span",{staticClass:"sum"},[a._v(a._s(t.scoring_amount||0))])]),a._v(" "),s("li",[s("span",{staticClass:"time"},[a._v(a._s(t.created_at))]),a._v(" "),s("span",[a._v(a._s(a.getStatus(t.status)))])])])])}),0)],1)])],1)],1)],1)},staticRenderFns:[]};var r=s("VU/8")(i,n,!1,function(a){s("evu1")},"data-v-6f040d4b",null);t.default=r.exports},evu1:function(a,t,s){var e=s("h0cU");"string"==typeof e&&(e=[[a.i,e,""]]),e.locals&&(a.exports=e.locals);s("rjj0")("1cc0106c",e,!0,{})},h0cU:function(a,t,s){(a.exports=s("FZ+f")(!1)).push([a.i,"\n#bonus_record[data-v-6f040d4b] {\n  padding-top: 40px;\n}\n#bonus_record #content .reward_box .reward_list[data-v-6f040d4b] {\n    background: #fff;\n    margin-top: 0.5rem;\n}\n#bonus_record #content .reward_box .reward_list .reward_ID[data-v-6f040d4b] {\n      padding-left: 0.875rem;\n}\n#bonus_record #content .reward_box .reward_list .reward_ID li[data-v-6f040d4b] {\n        border-bottom: solid 0.0625rem #ebebeb;\n        line-height: 2.5rem;\n        font-size: 16px;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        padding-right: 0.875rem;\n}\n#bonus_record #content .reward_box .reward_list .reward_info[data-v-6f040d4b] {\n      padding: 0.625rem 0;\n}\n#bonus_record #content .reward_box .reward_list .reward_info li[data-v-6f040d4b] {\n        line-height: 1.875rem;\n        text-align: left;\n        font-size: 15px;\n        padding: 0 0.875rem;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n}\n#bonus_record #content .reward_box .reward_list .reward_info li .time[data-v-6f040d4b] {\n          line-height: 1.875rem;\n          font-size: 12px;\n          color: #8c8c8c;\n}\n#bonus_record #content .reward_box .reward_list .reward_info li .sum[data-v-6f040d4b] {\n          color: #f15353;\n}\n",""])}});