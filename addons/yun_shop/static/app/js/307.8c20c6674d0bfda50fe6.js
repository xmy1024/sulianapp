webpackJsonp([307],{KWcR:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("Pexp"),s=e("Tg7E"),i={mixins:[e("vsZy").a],data:function(){return{assetList:[],member_info:{},statistics:{},lang:{capital_name:""},isLoadMore:!0,page:1,total_page:0}},activated:function(){this.initData(),this.getLang(),this.getData()},methods:{onCopy:function(t){Object(s.Toast)({message:"复制成功",position:"bottom",duration:1e3})},onError:function(t){Object(s.Toast)({message:"复制失败",position:"bottom",duration:1e3})},gotoMemberGrade:function(){this.$router.push(this.fun.getUrl("member"))},getLang:function(){var t=this;$http.get("plugin.asset.Frontend.Controllers.Lang.index",{},"加载中...").then(function(n){1===n.result?(t.lang=n.data,t.fun.setWXTitle("我的"+t.lang.capital_name)):Object(s.Toast)(n.msg)}).catch(function(t){console.log(t)})},initData:function(){this.assetList=[],this.member_info={},this.statistics={},this.isLoadMore=!0,this.page=1,this.total_page=0},getData:function(){var t=this;this.isLoadMore=!1,this.page=1,$http.get("plugin.asset.Frontend.Modules.Member.Controllers.page.index",{},"加载中...").then(function(n){1===n.result?(t.isLoadMore=!0,t.total_page=n.data.asset_list.last_page,t.total_page||(t.total_page=0),t.assetList=n.data.asset_list.data,t.member_info=n.data.member_info,t.statistics=n.data.statistics):Object(s.Toast)(n.msg)}).catch(function(t){console.log(t)})},getMoreData:function(){var t=this;this.isLoadMore=!1,this.page>=this.total_page||(this.page=this.page+1,$http.get("plugin.asset.Frontend.Modules.Member.Controllers.page.index",{page:t.page},"加载中...").then(function(n){if(t.isLoadMore=!0,1===n.result){var e=n.data.asset_list.data;t.assetList=t.assetList.concat(e)}else t.page=t.page-1,t.isLoadMore=!1},function(t){}))},toAsset:function(t){this.$router.push(this.fun.getUrl("CheckAsset",{asset_id:t.asset_id}))},myKey:function(t){this.$router.push(this.fun.getUrl("SecretKey",{name:t}))},setPws:function(){this.$router.push(this.fun.getUrl("SetPassword"))}},components:{cTitle:a.a}},o={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"my_asset"}},[e("c-title",{attrs:{hide:!1,text:"我的"+t.lang.capital_name}}),t._v(" "),e("div",{attrs:{id:"content"}},[e("div",{staticClass:"content_a"},[e("div",{staticClass:"user"},[e("div",{staticClass:"user_a"},[e("div",{staticClass:"img"},[e("img",{attrs:{src:t.member_info.avatar_image}})]),t._v(" "),e("ul",{staticClass:"name"},[e("li",[e("span",[t._v(t._s(t.member_info.nickname))]),t._v(" "),e("span",[t._v("会员ID："+t._s(t.member_info.member_id))])]),t._v(" "),t.member_info.invite_code?e("li",{staticClass:"invite"},[e("span",[t._v("邀请码："+t._s(t.member_info.invite_code))]),t._v(" "),e("button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.member_info.invite_code,expression:"member_info.invite_code",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"}],staticClass:"copybtn"},[t._v("复制")])]):t._e()]),t._v(" "),e("div",{staticClass:"member-box",staticStyle:{"z-index":"39"},on:{click:t.gotoMemberGrade}},[e("i",{staticClass:"iconfont icon-member-enter"}),t._v(" "),e("div",{staticClass:"font"},[t._v("会员中心")]),t._v(" "),e("i",{staticClass:"fa fa-angle-right"})])]),t._v(" "),e("ul",{staticClass:"user_b"},[e("li",{on:{click:function(n){return t.myKey("blockchain")}}},[e("i",{staticClass:"iconfont icon-asset_a"}),t._v(" "),e("span",[t._v("区块链地址")])]),t._v(" "),e("li",{on:{click:function(n){return t.myKey("secret")}}},[e("i",{staticClass:"iconfont icon-asset_b"}),t._v(" "),e("button",{staticClass:"mykey"},[t._v("我的秘钥")])]),t._v(" "),e("li",{on:{click:t.setPws}},[e("i",{staticClass:"iconfont icon-asset_c"}),t._v(" "),e("button",{staticClass:"pws"},[t._v("交易密码")])])])]),t._v(" "),e("div",{staticClass:"user_info"},[e("div",{staticClass:"left"},[e("ul",{staticClass:"left_a"},[e("li",[t._v(t._s(t.statistics.hold_count))]),t._v(" "),e("li",[t._v(t._s(t.lang.capital_name)+"数量")])])]),t._v(" "),e("div",{staticClass:"right"},[e("ul",{staticClass:"right_a"},[e("li",[t._v("¥"+t._s(t.statistics.subscription_amount))]),t._v(" "),e("li",[t._v("累计购买金额")])]),t._v(" "),e("ul",{staticClass:"right_b"},[e("li",[t._v("¥"+t._s(t.statistics.sell_amount))]),t._v(" "),e("li",[t._v("累计"+t._s(t.lang.sell_name)+"金额")])])])])]),t._v(" "),e("div",{staticClass:"content_b"},[e("div",{staticClass:"list"},t._l(t.assetList,function(n,a){return e("ul",{key:a,staticClass:"list_box",on:{click:function(e){return t.toAsset(n)}}},[e("li",[e("span",[t._v(t._s(n.asset_name))]),t._v(" "),e("i",{staticClass:"fa fa-angle-right"})]),t._v(" "),e("li",[e("span",[t._v("可用："+t._s(n.usable))]),t._v(" "),e("span",[t._v("冻结："+t._s(n.froze))])])])}),0)])])],1)},staticRenderFns:[]};var r=e("VU/8")(i,o,!1,function(t){e("uF5A")},"data-v-7539a5ba",null);n.default=r.exports},NmVE:function(t,n,e){(t.exports=e("FZ+f")(!1)).push([t.i,"\n#my_asset[data-v-7539a5ba] {\n  padding-top: 40px;\n}\n#my_asset #content .content_a .user[data-v-7539a5ba] {\n    background: #f7a145;\n    color: #fff;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n#my_asset #content .content_a .user .user_a[data-v-7539a5ba] {\n      padding: 1.25rem 0.625rem;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n}\n#my_asset #content .content_a .user .user_a .img[data-v-7539a5ba] {\n        width: 3.75rem;\n        height: 3.75rem;\n        border-radius: 1.875rem;\n        border: solid 0.0625rem #f5f5f5;\n        overflow: hidden;\n        margin-right: 0.625rem;\n}\n#my_asset #content .content_a .user .user_a .img img[data-v-7539a5ba] {\n          width: 100%;\n}\n#my_asset #content .content_a .user .user_a .copybtn[data-v-7539a5ba] {\n        font-size: 14px;\n        color: #fff;\n        border: solid 0.0625rem #ebebeb;\n        border-radius: 2rem;\n        margin-left: 0.5rem;\n        padding: 0.1rem 0.5rem;\n}\n#my_asset #content .content_a .user .user_a .name[data-v-7539a5ba] {\n        text-align: left;\n}\n#my_asset #content .content_a .user .user_a .name li[data-v-7539a5ba]:first-child {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n}\n#my_asset #content .content_a .user .user_a .name li:first-child span[data-v-7539a5ba]:first-child {\n            font-size: 18px;\n            font-weight: bold;\n            line-height: 1.875rem;\n            max-width: 6.25rem;\n            text-overflow: ellipsis;\n            overflow: hidden;\n            white-space: nowrap;\n}\n#my_asset #content .content_a .user .user_a .name li:first-child span[data-v-7539a5ba]:last-child {\n            font-size: 12px;\n            font-weight: normal;\n            border-radius: 1rem;\n            padding: 0.125rem 0.375rem;\n            background: rgba(0, 0, 0, 0.2);\n            margin-left: 0.625rem;\n}\n#my_asset #content .content_a .user .user_a .name .invite[data-v-7539a5ba] {\n          line-height: 1.875rem;\n}\n#my_asset #content .content_a .user .user_a .member-box[data-v-7539a5ba] {\n        -ms-flex-line-pack: center;\n            align-content: center;\n        background: -webkit-gradient(linear, left top, right top, from(#3b3b4f), to(#9898a4));\n        background: linear-gradient(to right, #3b3b4f, #9898a4);\n        border-radius: 3.75rem;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        position: absolute;\n        right: 0.625rem;\n        color: #fff;\n        padding: 0 0.375rem;\n        margin-top: 1.0625rem;\n}\n#my_asset #content .content_a .user .user_a .member-box .font[data-v-7539a5ba] {\n          font-size: 12px;\n          right: 0.875rem;\n          line-height: 1.875rem;\n}\n#my_asset #content .content_a .user .user_a .member-box .iconfont[data-v-7539a5ba] {\n          font-size: 1.25rem;\n          color: #fff;\n          margin-right: 0.25rem;\n          line-height: 1.875rem;\n}\n#my_asset #content .content_a .user .user_a .member-box .fa[data-v-7539a5ba] {\n          line-height: 1.875rem;\n          font-size: 1rem;\n          color: #fff;\n          margin-left: 0.375rem;\n}\n#my_asset #content .content_a .user .user_a .member-box .img[data-v-7539a5ba] {\n          width: 6rem;\n          height: 2rem;\n          overflow: hidden;\n          position: absolute;\n          right: 0;\n}\n#my_asset #content .content_a .user .user_a .member-box .img img[data-v-7539a5ba] {\n            width: 100%;\n            height: 100%;\n}\n#my_asset #content .content_a .user .user_b[data-v-7539a5ba] {\n      background: rgba(255, 255, 255, 0.1);\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      padding: 0.5rem 0;\n}\n#my_asset #content .content_a .user .user_b li[data-v-7539a5ba] {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        width: 33.33%;\n        border-right: solid 1px rgba(255, 255, 255, 0.4);\n        font-size: 14px;\n        text-align: center;\n        height: 1.25rem;\n        line-height: 1.25rem;\n}\n#my_asset #content .content_a .user .user_b li .mykey[data-v-7539a5ba] {\n          border: none;\n          color: #fff;\n}\n#my_asset #content .content_a .user .user_b li .pws[data-v-7539a5ba] {\n          border: none;\n          color: #fff;\n}\n#my_asset #content .content_a .user .user_b li i[data-v-7539a5ba] {\n          font-size: 1.5rem;\n          color: #fff;\n          margin-right: 0.25rem;\n}\n#my_asset #content .content_a .user .user_b li[data-v-7539a5ba]:last-child {\n        border: none;\n}\n#my_asset #content .content_a .user_info[data-v-7539a5ba] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    background: #fff;\n}\n#my_asset #content .content_a .user_info .left[data-v-7539a5ba] {\n      width: 50%;\n      border-right: solid 0.0625rem #ebebeb;\n}\n#my_asset #content .content_a .user_info .left .left_a[data-v-7539a5ba] {\n        text-align: center;\n}\n#my_asset #content .content_a .user_info .left .left_a li[data-v-7539a5ba] {\n          margin: 0.625rem 0;\n          height: 3rem;\n          padding: 0.625rem;\n          font-size: 32px;\n}\n#my_asset #content .content_a .user_info .left .left_a li[data-v-7539a5ba]:last-child {\n          font-size: 14px;\n          color: #8c8c8c;\n}\n#my_asset #content .content_a .user_info .right[data-v-7539a5ba] {\n      width: 50%;\n}\n#my_asset #content .content_a .user_info .right .right_a[data-v-7539a5ba],\n      #my_asset #content .content_a .user_info .right .right_b[data-v-7539a5ba] {\n        padding: 0.625rem 0;\n}\n#my_asset #content .content_a .user_info .right .right_a li[data-v-7539a5ba],\n        #my_asset #content .content_a .user_info .right .right_b li[data-v-7539a5ba] {\n          line-height: 1.5rem;\n          text-align: left;\n          padding: 0 0.625rem;\n          font-size: 16px;\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis;\n}\n#my_asset #content .content_a .user_info .right .right_a li[data-v-7539a5ba]:last-child,\n        #my_asset #content .content_a .user_info .right .right_b li[data-v-7539a5ba]:last-child {\n          color: #8c8c8c;\n          font-size: 14px;\n}\n#my_asset #content .content_a .user_info .right .right_a[data-v-7539a5ba] {\n        border-bottom: solid 0.0625rem #ebebeb;\n}\n#my_asset #content .content_b[data-v-7539a5ba] {\n    background: #fff;\n    margin-top: 0.625rem;\n}\n#my_asset #content .content_b .list[data-v-7539a5ba] {\n      padding: 1.25rem 0.875rem;\n}\n#my_asset #content .content_b .list .list_box[data-v-7539a5ba] {\n        -webkit-box-shadow: 0rem 0.0625rem 0.375rem #ccc;\n                box-shadow: 0rem 0.0625rem 0.375rem #ccc;\n        padding: 0.625rem;\n        margin-bottom: 0.875rem;\n}\n#my_asset #content .content_b .list .list_box li[data-v-7539a5ba]:first-child {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-pack: justify;\n              -ms-flex-pack: justify;\n                  justify-content: space-between;\n          line-height: 2.25rem;\n}\n#my_asset #content .content_b .list .list_box li:first-child span[data-v-7539a5ba] {\n            font-size: 16px;\n}\n#my_asset #content .content_b .list .list_box li:first-child i[data-v-7539a5ba] {\n            font-size: 1.25rem;\n            color: #c9c9c9;\n            line-height: 2.25rem;\n}\n#my_asset #content .content_b .list .list_box li[data-v-7539a5ba]:last-child {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          line-height: 1.5rem;\n          -webkit-box-pack: justify;\n              -ms-flex-pack: justify;\n                  justify-content: space-between;\n}\n",""])},uF5A:function(t,n,e){var a=e("NmVE");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e("rjj0")("379badba",a,!0,{})}});