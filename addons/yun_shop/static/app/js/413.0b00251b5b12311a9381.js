webpackJsonp([413],{IPlk:function(e,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=n("Pexp"),t=n("Tg7E"),d={mixins:[n("vsZy").a],data:function(){return{active:0,amount_id:"",memberData:{},integralList:[],currentURL:"",isLoadMore:!0,page:1,total_page:0}},activated:function(){this.initData(),this.getMemberDate(),this.tabHandel(0)},methods:{initData:function(){this.active=0,this.amount_id="",this.integralList=[],this.page=1,this.total_page=0,this.isLoadMore=!0},showMore:function(e){e.show&&this.amount_id===e.amount_id?e.show=!1:(this.amount_id=e.amount_id,this.$set(e,"show",!0))},getMemberDate:function(){var e=this;$http.get("plugin.global-dividend.api.global-dividend",{}," ").then(function(i){1===i.result?(e.memberData=i.data,e.fun.setWXTitle(e.memberData.plugin_name)):Object(t.Toast)(i.msg)},function(e){console.log(e)})},tabHandel:function(e){switch(this.active=e,e){case 0:this.currentURL="plugin.global-dividend.api.global-dividend.global-dividend";break;case 1:this.currentURL="plugin.global-dividend.api.global-dividend.global-reward";break;case 2:this.currentURL="plugin.global-dividend.api.global-dividend.global-shareholder"}this.integralList=[],this.getData()},getData:function(){var e=this;$http.get(this.currentURL,{page:1}," ").then(function(i){1===i.result?(e.isLoadMore=!0,e.page=1,e.total_page=i.data.last_page,e.total_page||(e.total_page=0),e.integralList=i.data.data):Object(t.Toast)(i.msg)}).catch(function(e){console.log(e)})},getMoreData:function(){var e=this;this.isLoadMore=!1,this.page>=this.total_page||(this.page=this.page+1,$http.get(this.currentURL,{page:this.page}," ").then(function(i){if(e.isLoadMore=!0,1===i.result){var n=i.data.data;e.integralList=e.integralList.concat(n)}else e.page=e.page-1,e.isLoadMore=!1},function(e){}).catch(function(e){console.log(e)}))}},components:{cTitle:a.a}},s={render:function(){var e=this,i=e.$createElement,n=e._self._c||i;return n("div",{attrs:{id:"global_dividend"}},[n("c-title",{attrs:{hide:!1,text:e.memberData.plugin_name||"分红"}}),e._v(" "),n("div",{staticClass:"header_box"},[n("div",{staticClass:"header"},[n("img",{attrs:{src:e.memberData.avatar}})]),e._v(" "),n("ul",{staticClass:"name"},[n("li",[e._v(e._s(e.memberData.member_name))]),e._v(" "),n("li",{staticClass:"name_b"},[e._v(e._s(e.memberData.level_name))])]),e._v(" "),n("ul",{staticClass:"right_sum"},[n("li",[n("span",[e._v("¥")]),e._v(e._s(e.memberData.total_dividend||0))]),e._v(" "),n("li",[e._v("累计分红")])])]),e._v(" "),n("ul",{staticClass:"info"},[n("li",[n("span",[e._v(e._s(e.memberData.integral||0))]),e._v(" "),n("span",[e._v("累计获得权益")])]),e._v(" "),n("li",[n("span",[e._v(e._s(e.memberData.return_integral||0))]),e._v(" "),n("span",[e._v("已返还权益")])]),e._v(" "),n("li",[n("span",[e._v(e._s(e.memberData.noreturn_integral||0))]),e._v(" "),n("span",[e._v("待返还权益")])])]),e._v(" "),n("van-tabs",{on:{click:e.tabHandel},model:{value:e.active,callback:function(i){e.active=i},expression:"active"}},[n("van-tab",{attrs:{title:"消费分红("+(e.memberData.dividend_amount||0)+")"}},[n("ul",{staticClass:"rationList"},e._l(e.integralList,function(i,a){return n("li",{key:a,staticClass:"list"},[n("h4",[e._v("\n            分红ID:"+e._s(i.id)+"\n            "),n("span",[e._v("+"+e._s(i.dividend_amount))])]),e._v(" "),n("div",{staticClass:"one"},[n("div",{staticClass:"time"},[n("span",{staticClass:"left"},[e._v("当日累计指定消费金额")]),e._v(" "),n("span",{staticClass:"right"},[e._v(e._s(i.amount))])]),e._v(" "),n("div",{staticClass:"Record"},[n("span",{staticClass:"left look"},[e._v("\n                奖励比例："+e._s(i.dividend_rate)+"%\n              ")]),e._v(" "),n("span",{staticClass:"right"},[e._v(e._s(i.created_at))])])])])}),0)]),e._v(" "),n("van-tab",{attrs:{title:"推荐消费奖励("+(e.memberData.recommend_amount||0)+")"}},[n("div",{staticClass:"reward_box"},e._l(e.integralList,function(i,a){return n("div",{key:a,staticClass:"list_box"},[n("ul",{staticClass:"info_box",on:{click:function(n){return e.showMore(i)}}},[n("li",{staticClass:"info_a"},[n("span",[e._v("消费分红ID:"+e._s(i.amount_id))]),e._v(" "),n("span",{staticClass:"sum"},[e._v("+"+e._s(i.dividend_amount))])]),e._v(" "),n("li",{staticClass:"info_b"},[n("span",[e._v(e._s(i.amount)+"元")]),e._v(" "),n("span",{staticClass:"time"},[e._v(e._s(i.created_at))])])]),e._v(" "),e.amount_id==i.amount_id&&i.show?n("div",{staticClass:"show_hide"},[n("div",{staticClass:"show_hide_a"},[i.has_one_child?n("div",{staticClass:"header"},[n("img",{attrs:{src:i.has_one_child.avatar_image}})]):e._e(),e._v(" "),n("ul",{staticClass:"name"},[n("li",[e._v(e._s(i.username))])])]),e._v(" "),n("ul",{staticClass:"show_hide_b"},[n("li",[n("span",[e._v("奖励比例")]),e._v(" "),n("span",[e._v(e._s(i.dividend_rate)+"%")])])])]):e._e()])}),0)]),e._v(" "),n("van-tab",{attrs:{title:"股东分红("+(e.memberData.shareholder_amount||0)+")"}},[n("ul",{staticClass:"rationList"},e._l(e.integralList,function(i,a){return n("li",{key:a,staticClass:"list"},[n("h4",[e._v("\n            分红ID:"+e._s(i.id)+"\n            "),n("span",[e._v("+"+e._s(i.dividend_amount))])]),e._v(" "),n("div",{staticClass:"one"},[n("div",{staticClass:"time"},[n("span",{staticClass:"left"},[e._v("商城销售总额："+e._s(i.amount))]),e._v(" "),n("span",{staticClass:"right"},[e._v("奖励比例："+e._s(i.dividend_rate)+"%")])]),e._v(" "),n("div",{staticClass:"Record"},[n("span",{staticClass:"left look"},[e._v("奖励人数："+e._s(i.people_number))]),e._v(" "),n("span",{staticClass:"right"},[e._v(e._s(i.created_at))])])])])}),0)])],1)],1)},staticRenderFns:[]};var o=n("VU/8")(d,s,!1,function(e){n("R+L5")},"data-v-50de71ef",null);i.default=o.exports},"R+L5":function(e,i,n){var a=n("v2JO");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("5cbdc68c",a,!0,{})},v2JO:function(e,i,n){(e.exports=n("FZ+f")(!1)).push([e.i,'\n#global_dividend[data-v-50de71ef] {\n  padding-top: 40px;\n}\n#global_dividend .header_box[data-v-50de71ef] {\n    background: #f15353;\n    color: #fff;\n    padding: 1.25rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n#global_dividend .header_box .header[data-v-50de71ef] {\n      width: 3.25rem;\n      height: 3.25rem;\n      border: solid 0.125rem #fff;\n      margin-right: 0.625rem;\n      overflow: hidden;\n      border-radius: 3.75rem;\n      background: #f2f2f2;\n}\n#global_dividend .header_box .header img[data-v-50de71ef] {\n        width: 100%;\n        height: 100%;\n}\n#global_dividend .header_box .name[data-v-50de71ef] {\n      width: 11.25rem;\n}\n#global_dividend .header_box .name li[data-v-50de71ef]:first-child {\n        text-align: left;\n        font-size: 16px;\n        line-height: 1.875rem;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n}\n#global_dividend .header_box .name .name_b[data-v-50de71ef] {\n        font-size: 14px;\n        line-height: 1.375rem;\n        text-align: left;\n}\n#global_dividend .header_box .right_sum[data-v-50de71ef] {\n      width: 5.8125rem;\n      text-align: right;\n}\n#global_dividend .header_box .right_sum li[data-v-50de71ef]:first-child {\n        font-size: 18px;\n        line-height: 1.875rem;\n}\n#global_dividend .header_box .right_sum li:first-child span[data-v-50de71ef] {\n          font-size: 12px;\n}\n#global_dividend .header_box .right_sum li[data-v-50de71ef]:last-child {\n        font-size: 14px;\n        line-height: 1.375rem;\n}\n#global_dividend .info[data-v-50de71ef] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    background: #fff;\n    padding: 1.25rem 0;\n    margin-bottom: 0.625rem;\n}\n#global_dividend .info li span[data-v-50de71ef]:first-child {\n      font-size: 16px;\n      display: block;\n      margin-bottom: 0.375rem;\n}\n#global_dividend .info li span[data-v-50de71ef]:last-child {\n      font-size: 12px;\n      display: block;\n      color: #8c8c8c;\n}\n#global_dividend .rationList .list[data-v-50de71ef] {\n    margin: 0.375rem 0rem;\n    background-color: #fff;\n}\n#global_dividend .rationList .list h4[data-v-50de71ef] {\n      line-height: 40px;\n      width: 100%;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      padding: 0 0.875rem;\n      line-height: 2.5rem;\n      height: 2.5rem;\n      text-align: left;\n      color: #333;\n      font-size: 14px;\n      border-bottom: 0.0625rem solid #ebebeb;\n}\n#global_dividend .rationList .list h4 span[data-v-50de71ef] {\n        display: inline-block;\n        font-size: 14px;\n        font-weight: normal;\n        color: #f15353;\n        float: right;\n}\n#global_dividend .rationList .list .one[data-v-50de71ef] {\n      padding: 0 0.875rem;\n}\n#global_dividend .rationList .list .one .time[data-v-50de71ef] {\n        width: 100%;\n        line-height: 1.625rem;\n        margin-top: 0.625rem;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n}\n#global_dividend .rationList .list .one .Record[data-v-50de71ef] {\n        width: 100%;\n        line-height: 2.75rem;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n}\n#global_dividend .rationList .list .one .Record .right[data-v-50de71ef] {\n          color: #8c8c8c;\n}\n#global_dividend .rationList .list .one .left[data-v-50de71ef] {\n        font-size: 14px;\n}\n#global_dividend .rationList .list .one .look[data-v-50de71ef] {\n        color: #333;\n}\n#global_dividend .rationList .list .one .right[data-v-50de71ef] {\n        font-size: 14px;\n}\n#global_dividend .rationList .list ul[data-v-50de71ef]:after {\n      content: "";\n      display: block;\n      clear: both;\n}\n#global_dividend .rationList .list ul[data-v-50de71ef] {\n      width: 100%;\n      padding: 0.625rem 0rem;\n}\n#global_dividend .rationList .list ul li[data-v-50de71ef] {\n        width: 33%;\n        float: left;\n        font-size: 12px;\n        color: #8c9295;\n        line-height: 1.375rem;\n}\n#global_dividend .rationList .list ul li span[data-v-50de71ef] {\n          color: #333;\n          font-size: 14px;\n}\n#global_dividend .rationList .list p[data-v-50de71ef] {\n      color: #aab2b9;\n      text-align: left;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      padding: 0rem 1.25rem 0.9375rem;\n}\n#global_dividend .rationList .list p span[data-v-50de71ef] {\n        color: #728ae3;\n        float: right;\n}\n#global_dividend .rationList .recordList[data-v-50de71ef] {\n    padding: 0.9375rem;\n    font-size: 14px;\n    line-height: 1.125rem;\n    color: #333;\n    text-align: left;\n    background-color: #fff;\n    margin: 0.125rem;\n}\n#global_dividend .rationList .recordList span[data-v-50de71ef] {\n      font-size: 14px;\n      float: right;\n}\n#global_dividend .rationList[data-v-50de71ef]:after {\n    content: "";\n    display: block;\n    clear: both;\n}\n#global_dividend .reward_box .list_box[data-v-50de71ef] {\n    margin-bottom: 0.375rem;\n}\n#global_dividend .reward_box .list_box .info_box[data-v-50de71ef] {\n      background: #fff;\n      padding: 0.625rem 0.875rem;\n}\n#global_dividend .reward_box .list_box .info_box .info_a[data-v-50de71ef],\n      #global_dividend .reward_box .list_box .info_box .info_b[data-v-50de71ef] {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        line-height: 1.875rem;\n        font-size: 14px;\n}\n#global_dividend .reward_box .list_box .info_box .info_a .sum[data-v-50de71ef],\n        #global_dividend .reward_box .list_box .info_box .info_b .sum[data-v-50de71ef] {\n          color: #f15353;\n}\n#global_dividend .reward_box .list_box .info_box .info_a .time[data-v-50de71ef],\n        #global_dividend .reward_box .list_box .info_box .info_b .time[data-v-50de71ef] {\n          color: #8c8c8c;\n          font-size: 14px;\n}\n#global_dividend .reward_box .list_box .show_hide[data-v-50de71ef] {\n      background: #fff;\n      border-top: solid 0.0625rem #ebebeb;\n      padding: 0.625rem 0.875rem;\n}\n#global_dividend .reward_box .list_box .show_hide .show_hide_a[data-v-50de71ef] {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n}\n#global_dividend .reward_box .list_box .show_hide .show_hide_a .header[data-v-50de71ef] {\n          width: 2.5rem;\n          height: 2.5rem;\n          background: #f2f2f2;\n          border-radius: 3.75rem;\n          overflow: hidden;\n          margin-right: 0.625rem;\n}\n#global_dividend .reward_box .list_box .show_hide .show_hide_a .header img[data-v-50de71ef] {\n            width: 100%;\n            height: 100%;\n}\n#global_dividend .reward_box .list_box .show_hide .show_hide_a .name[data-v-50de71ef] {\n          text-align: left;\n}\n#global_dividend .reward_box .list_box .show_hide .show_hide_a .name li[data-v-50de71ef]:first-child {\n            font-size: 14px;\n            line-height: 1.5rem;\n}\n#global_dividend .reward_box .list_box .show_hide .show_hide_a .name li[data-v-50de71ef]:last-child {\n            font-size: 12px;\n            color: #8c8c8c;\n}\n#global_dividend .reward_box .list_box .show_hide .show_hide_b[data-v-50de71ef] {\n        padding: 0.625rem 0;\n}\n#global_dividend .reward_box .list_box .show_hide .show_hide_b li[data-v-50de71ef] {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-pack: justify;\n              -ms-flex-pack: justify;\n                  justify-content: space-between;\n          font-size: 14px;\n          line-height: 1.875rem;\n}\n',""])}});