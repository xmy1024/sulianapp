webpackJsonp([370],{"3+Fl":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("mvHQ"),n=s.n(i),a=s("Pexp"),o=(s("SJI6"),s("Tg7E")),r="",d={},l={data:function(){return{switch1:!1,order_data:[],integral:window.localStorage.integral,onclast:!1,toi:this.fun.getKeyByI(),goodsInfo:{},order:{},dispatch:{},realname:"",mobile:"",address:"",goods:[],order_goods_price:0,price:0,popupSpecs:!1,addressData:[],form:{username:"",mobile:"",province:"",city:"",district:"",street:"",address:"",isDefault:!1},district:district,popAddAddress:!1,addressShow:!1,addressName:"",strShow:!1,streetShow:!1,submit_active:!0}},activated:function(){this.cartIDs=this.$route.params.cartIDs,this.cartIDs?(this.init(),this.getData()):this.$router.push(this.fun.getUrl("member",{}))},mounted:function(){},methods:{setViewData:function(t){this.order_data=t.order_goods,this.order_goods_price=t.order_goods_price,this.price=t.price,r=t.order_address.province_id,d=t.order_address,this.realname=t.order_address.realname,this.address=t.order_address.address,this.mobile=t.order_address.mobile,this.price<0&&(this.$router.push(this.fun.getUrl("home",{})),o.MessageBox.alert("下单错误"))},setAddressViewData:function(t){void 0!=t&&""!=t&&t!=[]&&(r=t.id,d=t,this.realname=this.fun.isTextEmpty(t.username)?"":t.username,this.mobile=this.fun.isTextEmpty(t.mobile)?"":t.mobile,this.address=this.fun.isTextEmpty(t.province)?"":t.province+" "+t.city+" "+t.district+" "+(this.fun.isTextEmpty(t.street)?"":t.street+" ")+t.address)},showAddress:function(){this.getAddress()},getAddress:function(t){this.addressData=[];var e=void 0,s=this,i={i:this.fun.getKeyByI(),type:this.fun.getTyep()};$http.get("member.member-address.index",i,"获取中...").then(function(i){1===i.result&&(s.addressData=i.data,e=s.addressData.length,t?s.setAddressViewData(s.addressData[e-1]):s.popupSpecs=!0)},function(t){console.log(t)})},selectAddress:function(t){this.setAddressViewData(t),this.popupSpecs=!1},addAddress:function(){this.popupSpecs=!1,this.showAddAddress()},submit:function(){if(console.log("state===res",this.submit_active),!0===this.submit_active){if(this.submit_active=!1,this.fun.isTextEmpty(r))return Object(o.Toast)("请选择收货地址"),void(this.submit_active=!0);var t=this,e=this.assembleJson();$http.post(t.submitApi,e,"提交中...").then(function(e){t.submit_active=!0,1===e.result?t.$router.push(t.fun.getUrl(t.toOrderList,{order_ids:1})):Object(o.Toast)(e.msg)},function(t){console.log(t)})}},assembleJson:function(){var t={};return t=d.id?{address:this.address,city_id:d.city_id,district_id:d.district_id,mobile:this.mobile,province_id:d.province_id,realname:this.realname,street_id:d.street_id}:d,{address:n()(t),cart_ids:this.cartIDs}},showAddAddress:function(){this.popAddAddress=!0},popAddressClose:function(){this.popAddAddress=!1},addressCallback:function(t){this.form.street="",this.districtVal="",this.addressName=t.itemName1+" "+t.itemName2+" "+t.itemName3,this.form.province=t.itemName1,this.form.city=t.itemName2,this.form.district=t.itemName3,this.getStreet(t.itemValue3)},getStreet:function(t){var e=this;$http.get("member.memberAddress.street",{district_id:t}).then(function(t){console.log(t),1!==t.result||e.fun.isTextEmpty(t.data)?e.strShow=!1:!e.fun.isTextEmpty(t.data)&&t.data.length>0?(e.districtVal=t.data,e.strShow=!0):e.strShow=!1}).catch(function(t){e.strShow=!1,console.log(t)})},streetChoose:function(){this.fun.isTextEmpty(this.addressName)?o.MessageBox.alert("请先选择所在地区"):this.streetShow=!0},streetConfirm:function(t){this.form.street=t,this.streetShow=!1},appendAddress:function(){var t=this;if(this.fun.isTextEmpty(this.form.username))o.MessageBox.alert("请输入收货人姓名");else if(this.fun.isTextEmpty(this.form.mobile))o.MessageBox.alert("请输入手机机号");else if(/^[0-9]{1,}$/.test(this.form.mobile))if(this.fun.isTextEmpty(this.addressName))o.MessageBox.alert("请选择所在区域");else if(this.strShow&&this.fun.isTextEmpty(this.form.street))o.MessageBox.alert("请选择所在街道");else if(this.fun.isTextEmpty(this.form.address))o.MessageBox.alert("请输入详细地址");else{var e={};e=this.strShow?{username:this.form.username,mobile:this.form.mobile,province:this.form.province,city:this.form.city,district:this.form.district,street:this.form.street,address:this.form.address,isdefault:this.form.isDefault?1:0}:{username:this.form.username,mobile:this.form.mobile,province:this.form.province,city:this.form.city,district:this.form.district,address:this.form.address,isdefault:this.form.isDefault?1:0},$http.post("member.member-address.store",e,"").then(function(e){1==e.result?(o.MessageBox.alert(e.msg),t.popAddressClose(),t.getAddress("add"),t.form={username:"",mobile:"",province:"",city:"",district:"",street:"",address:"",isDefault:!1},t.addressName=""):o.MessageBox.alert(e.msg)},function(t){})}else o.MessageBox.alert("请输入正确的联系电话")},getData:function(){var t=this;$http.get(t.api,{cart_ids:t.cartIDs}," ").then(function(e){1===e.result?t.setViewData(e.data):Object(o.Toast)(e.msg)}).catch(function(t){console.log(t)})},init:function(){this.order_data=[],this.order_goods_price=0,this.price=0,this.realname="",this.address="",this.mobile="",this.popAddAddress=!1,this.addressShow=!1,this.strShow=!1,this.addressName="",this.streetShow=!1,this.type=this.$route.query.name,"replenish"===this.type?(this.api="plugin.kingtimes.frontend.providerOrder.cartBuy",this.submitApi="plugin.kingtimes.frontend.providerOrder.create",this.toOrderList="DistributionOrderList",this.getData()):"delivery"===this.type?(this.api="plugin.kingtimes.frontend.distributorOrder.cartBuy",this.submitApi="plugin.kingtimes.frontend.distributorOrder.create",this.toOrderList="ReplenishOrder",this.getData()):this.$router.push(this.fun.getUrl("home"))}},components:{cTitle:a.a}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"shopOrder_detail"}},[s("c-title",{attrs:{hide:!1,text:"订单详情"}}),t._v(" "),s("div",{staticStyle:{height:"40px"}}),t._v(" "),s("div",{attrs:{id:"content"}},[s("div",{staticClass:"add",on:{click:t.showAddress}},[t._m(0),t._v(" "),s("ul",{staticClass:"add_center"},[s("li",[t._v("收件人："+t._s(t.realname)+" "+t._s(t.mobile))]),t._v(" "),s("li",[t._v(t._s(t.address))])]),t._v(" "),t._m(1)]),t._v(" "),s("div",{staticClass:"goods_list"},[t._l(t.order_data,function(e,i){return s("div",{key:i,staticClass:"goods"},[s("div",{staticClass:"img"},[s("img",{attrs:{src:e.thumb}})]),t._v(" "),s("ul",{staticClass:"info"},[s("li",[s("span",{staticClass:"goods-name",staticStyle:{"-webkit-box-orient":"vertical"}},[t._v(t._s(e.title))]),t._v(" "),s("span",[t._v("¥"+t._s((Number(e.goods_price)/e.total).toFixed(2)))])]),t._v(" "),s("li",{staticClass:"standard"},[s("span",{directives:[{name:"show",rawName:"v-show",value:!e.goods_option_id,expression:"!order.goods_option_id"}]}),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.goods_option_id,expression:"order.goods_option_id"}]},[t._v("规格："+t._s(e.goods_option_title))]),t._v(" "),s("span",[t._v("×"+t._s(e.total))])])])])}),t._v(" "),s("ul",{staticClass:"goods_count"},[s("li",[s("span",[t._v("商品金额")]),t._v(" "),s("span",[t._v("¥"+t._s(t.order_goods_price))])])])],2),t._v(" "),s("div",{staticClass:"footer"},[s("div",{staticClass:"price"},[s("span",{staticClass:"price_a"},[t._v("合计：")]),t._v(" "),s("span",{staticClass:"price_b"},[t._v("¥"+t._s(t.price))])]),t._v(" "),s("div",{staticClass:"btn",on:{click:t.submit}},[t._v("提交订单")])])]),t._v(" "),s("mt-popup",{staticClass:"mint-popup-4",attrs:{position:"bottom",closeOnClickModal:"true"},model:{value:t.popupSpecs,callback:function(e){t.popupSpecs=e},expression:"popupSpecs"}},[s("div",{staticClass:"add-info"},[s("ul",t._l(t.addressData,function(e,i){return s("li",{key:i,on:{click:function(s){return t.selectAddress(e)}}},[s("div",{staticClass:"liia"},[s("span",{staticClass:"name"},[t._v(t._s(e.username+" "+e.mobile))]),t._v(" "),s("br"),t._v(" "),e.street?s("p",{staticClass:"address"},[t._v("\n                "+t._s(e.province+" "+e.city+" "+e.district+" "+e.street)+" "+t._s(e.address)+"\n              ")]):s("p",{staticClass:"address"},[t._v(t._s(e.province+" "+e.city+" "+e.district)+" "+t._s(e.address)+"\n              ")])])])}),0)]),t._v(" "),s("button",{staticClass:"address-plus",attrs:{type:"button"},on:{click:t.addAddress}},[t._v("新增地址")])]),t._v(" "),s("yd-popup",{attrs:{position:"right",width:"100%"},model:{value:t.popAddAddress,callback:function(e){t.popAddAddress=e},expression:"popAddAddress"}},[s("div",{staticStyle:{background:"#eee"}},[s("mt-header",{attrs:{fixed:"",title:"添加地址"}},[s("mt-button",{attrs:{slot:"left",icon:"back"},on:{click:t.popAddressClose},slot:"left"})],1),t._v(" "),s("div",{staticStyle:{height:"3.75rem"}}),t._v(" "),s("yd-cell-group",[s("yd-cell-item",[s("span",{attrs:{slot:"left"},slot:"left"},[t._v("收件人：")]),t._v(" "),s("yd-input",{attrs:{slot:"right",max:"20",placeholder:"请输入收件人"},slot:"right",model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}})],1),t._v(" "),s("yd-cell-item",[s("span",{attrs:{slot:"left"},slot:"left"},[t._v("联系电话：")]),t._v(" "),s("yd-input",{attrs:{slot:"right",placeholder:"请输入联系电话",type:"tel"},slot:"right",model:{value:t.form.mobile,callback:function(e){t.$set(t.form,"mobile",e)},expression:"form.mobile"}})],1)],1),t._v(" "),s("yd-cell-group",[s("yd-cell-item",[s("span",{attrs:{slot:"left"},slot:"left"},[t._v("设置默认地址：")]),t._v(" "),s("span",{attrs:{slot:"right"},slot:"right"},[s("mt-switch",{model:{value:t.form.isDefault,callback:function(e){t.$set(t.form,"isDefault",e)},expression:"form.isDefault"}})],1)])],1),t._v(" "),s("yd-cell-group",[s("yd-cell-item",{attrs:{arrow:""}},[s("span",{attrs:{slot:"left"},slot:"left"},[t._v("所在地区：")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.addressName,expression:"addressName"}],attrs:{slot:"right",type:"text",readonly:"",placeholder:"请选择收货地址"},domProps:{value:t.addressName},on:{click:function(e){e.stopPropagation(),t.addressShow=!0},input:function(e){e.target.composing||(t.addressName=e.target.value)}},slot:"right"})]),t._v(" "),t.strShow?s("yd-cell-item",{attrs:{arrow:""}},[s("span",{attrs:{slot:"left"},slot:"left"},[t._v("街道：")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.street,expression:"form.street"}],attrs:{slot:"right",type:"text",readonly:"",placeholder:"请选择街道"},domProps:{value:t.form.street},on:{click:function(e){return e.stopPropagation(),t.streetChoose(e)},input:function(e){e.target.composing||t.$set(t.form,"street",e.target.value)}},slot:"right"})]):t._e()],1),t._v(" "),s("yd-cell-group",[s("yd-cell-item",[s("yd-textarea",{attrs:{slot:"right",placeholder:"请输入详细地址",maxlength:"100"},slot:"right",model:{value:t.form.address,callback:function(e){t.$set(t.form,"address",e)},expression:"form.address"}})],1)],1),t._v(" "),s("div",{staticClass:"address_addnav",on:{click:t.appendAddress}},[s("i",{staticClass:"fa fa-plus-circle"}),t._v(" "),s("span",[t._v("保存")])]),t._v(" "),s("yd-cityselect",{attrs:{callback:t.addressCallback,items:t.district},model:{value:t.addressShow,callback:function(e){t.addressShow=e},expression:"addressShow"}})],1)]),t._v(" "),s("yd-popup",{attrs:{position:"right",width:"100%"},model:{value:t.streetShow,callback:function(e){t.streetShow=e},expression:"streetShow"}},[s("yd-navbar",{attrs:{title:"选择街道",height:"2.5rem",fontsize:"14px",fixed:""}},[s("span",{attrs:{slot:"left"},slot:"left"},[s("yd-navbar-back-icon",{nativeOn:{click:function(e){t.streetShow=!1}}})],1)]),t._v(" "),s("div",{staticStyle:{clear:"both","margin-top":"2.5rem"}}),t._v(" "),t._l(t.districtVal,function(e,i){return s("yd-cell-item",{key:i,attrs:{arrow:""},nativeOn:{click:function(s){return t.streetConfirm(e.areaname)}}},[s("span",{attrs:{slot:"left"},slot:"left"},[t._v(t._s(e.areaname))])])})],2)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"add_left"},[e("i",{staticClass:"iconfont icon-icon_location"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"add_right"},[e("i",{staticClass:"fa fa-angle-right"})])}]};var p=s("VU/8")(l,c,!1,function(t){s("T5zS")},"data-v-5fab95cb",null);e.default=p.exports},LtJV:function(t,e,s){(t.exports=s("FZ+f")(!1)).push([t.i,"\n#shopOrder_detail #content[data-v-5fab95cb] {\n  padding-bottom: 3.75rem;\n}\n#shopOrder_detail #content .add[data-v-5fab95cb] {\n    background-color: #fff;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    padding: 0.625rem 0.875rem;\n    text-align: left;\n}\n#shopOrder_detail #content .add .add_left[data-v-5fab95cb] {\n      width: 1.5rem;\n}\n#shopOrder_detail #content .add .add_left i[data-v-5fab95cb] {\n        font-size: 1.125rem;\n        line-height: 1.75rem;\n        text-align: center;\n        color: #666;\n}\n#shopOrder_detail #content .add .add_center[data-v-5fab95cb] {\n      line-height: 1.625rem;\n      font-size: 14px;\n}\n#shopOrder_detail #content .add .add_center li[data-v-5fab95cb]:first-child {\n        font-weight: bold;\n}\n#shopOrder_detail #content .add .add_right[data-v-5fab95cb] {\n      width: 1.5rem;\n      position: absolute;\n      right: 0;\n}\n#shopOrder_detail #content .add .add_right i[data-v-5fab95cb] {\n        font-size: 1.5rem;\n        line-height: 3.25rem;\n        text-align: center;\n        color: #c9c9c9;\n}\n#shopOrder_detail #content .goods_list[data-v-5fab95cb] {\n    margin-top: 0.625rem;\n    background-color: #fff;\n}\n#shopOrder_detail #content .goods_list h1[data-v-5fab95cb] {\n      border-bottom: solid 0.0625rem #ebebeb;\n      line-height: 2.25rem;\n      padding: 0 0.875rem;\n      font-weight: normal;\n      font-size: 14px;\n      text-align: left;\n}\n#shopOrder_detail #content .goods_list .goods[data-v-5fab95cb] {\n      padding: 0.75rem;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n}\n#shopOrder_detail #content .goods_list .goods .img[data-v-5fab95cb] {\n        width: 4rem;\n        height: 4rem;\n        background: #fff;\n        overflow: hidden;\n        margin-right: 0.75rem;\n}\n#shopOrder_detail #content .goods_list .goods .img img[data-v-5fab95cb] {\n          width: 100%;\n}\n#shopOrder_detail #content .goods_list .goods .info[data-v-5fab95cb] {\n        width: 17.1875rem;\n        font-size: 14px;\n        position: relative;\n}\n#shopOrder_detail #content .goods_list .goods .info li[data-v-5fab95cb]:last-child {\n          width: 100%;\n          position: absolute;\n          bottom: 0rem;\n          color: #8c8c8c;\n}\n#shopOrder_detail #content .goods_list .goods .info li[data-v-5fab95cb] {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-pack: justify;\n              -ms-flex-pack: justify;\n                  justify-content: space-between;\n}\n#shopOrder_detail #content .goods_list .goods .info li span[data-v-5fab95cb]:first-child {\n            width: 11.25rem;\n            text-align: left;\n            line-height: 1.25rem;\n}\n#shopOrder_detail #content .goods_list .goods .info li .goods-name[data-v-5fab95cb] {\n            display: -webkit-box;\n            -webkit-box-orient: vertical;\n            -webkit-line-clamp: 2;\n            overflow: hidden;\n            text-overflow: ellipsis;\n}\n#shopOrder_detail #content .goods_list .goods_count[data-v-5fab95cb] {\n      border-top: solid 0.0625rem #ebebeb;\n      background-color: #fff;\n      padding: 0.625rem 0.875rem;\n      font-size: 14px;\n}\n#shopOrder_detail #content .goods_list .goods_count li[data-v-5fab95cb] {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        line-height: 1.875rem;\n}\n#shopOrder_detail #content .goods_list .goods_count li span[data-v-5fab95cb]:last-child {\n          color: #f15353;\n}\n#shopOrder_detail #content .coupon[data-v-5fab95cb] {\n    margin-top: 0.625rem;\n    line-height: 2.8125rem;\n    background-color: #fff;\n    padding: 0 0.875rem;\n    font-size: 14px;\n}\n#shopOrder_detail #content .coupon li[data-v-5fab95cb] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n}\n#shopOrder_detail #content .coupon li span:first-child small[data-v-5fab95cb] {\n        background: #f15353;\n        color: #fff;\n        font-size: 12px;\n        border-radius: .1875rem;\n        padding: 0 0.3125rem;\n        margin-left: 0.375rem;\n}\n#shopOrder_detail #content .coupon li span[data-v-5fab95cb]:last-child {\n        color: #f15353;\n}\n#shopOrder_detail #content .order_info[data-v-5fab95cb] {\n    background-color: #fff;\n    margin-top: 0.625rem;\n    font-size: 14px;\n    padding: 0.625rem 0.875rem;\n}\n#shopOrder_detail #content .order_info li[data-v-5fab95cb] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      line-height: 1.875rem;\n}\n#shopOrder_detail #content .footer[data-v-5fab95cb] {\n    width: 100%;\n    position: fixed;\n    bottom: 0;\n    height: 3.0625rem;\n    background-color: #fff;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n}\n#shopOrder_detail #content .footer .price[data-v-5fab95cb] {\n      text-align: right;\n      width: 17.5rem;\n      border-top: solid 0.0625rem #ebebeb;\n      font-size: 16px;\n      line-height: 3.0625rem;\n      padding-right: 0.625rem;\n}\n#shopOrder_detail #content .footer .price .price_b[data-v-5fab95cb] {\n        color: #f15353;\n}\n#shopOrder_detail #content .footer .btn[data-v-5fab95cb] {\n      width: 5.9375rem;\n      line-height: 3.0625rem;\n      background-color: #f15353;\n      color: #fff;\n      font-size: 16px;\n}\n#shopOrder_detail .add-info[data-v-5fab95cb] {\n  overflow-y: scroll;\n  width: 100%;\n  background: #fff;\n  max-height: 50vh;\n  padding-top: 0.625rem;\n}\n#shopOrder_detail .mint-popup-4[data-v-5fab95cb] {\n  width: 100%;\n}\n#shopOrder_detail .mint-popup-4 .sure[data-v-5fab95cb] {\n    background: #f15353;\n    height: 2.5rem;\n    line-height: 2.5rem;\n    color: #fff;\n    width: 50%;\n    border: 0;\n    float: left;\n}\n#shopOrder_detail .mint-popup-4 .close[data-v-5fab95cb] {\n    background: #eee;\n    height: 2.5rem;\n    line-height: 2.5rem;\n    color: #333;\n    width: 50%;\n    border: 0;\n    float: left;\n}\n#shopOrder_detail .mint-popup-4 .address-plus[data-v-5fab95cb] {\n    background: #f15353;\n    height: 2.5rem;\n    line-height: 2.5rem;\n    color: #fff;\n    width: 100%;\n    border: 0;\n}\n#shopOrder_detail .mint-popup-4 ul[data-v-5fab95cb] {\n    overflow-y: scroll;\n}\n#shopOrder_detail .mint-popup-4 li[data-v-5fab95cb] {\n    padding: 0.625rem 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    position: relative;\n}\n#shopOrder_detail .mint-popup-4 li .liia[data-v-5fab95cb] {\n      width: 100%;\n      padding-right: 1.25rem;\n      -webkit-box-flex: 9;\n          -ms-flex: 9;\n              flex: 9;\n      text-align: left;\n      padding-left: 1.25rem;\n}\n#shopOrder_detail .mint-popup-4 li .liia .name[data-v-5fab95cb] {\n        font-size: 18px;\n        color: #222;\n        line-height: 2rem;\n}\n#shopOrder_detail .mint-popup-4 li .liia .address[data-v-5fab95cb] {\n        word-break: break-word;\n        width: 100%;\n        font-size: 12px;\n        color: #666;\n        line-height: 1.2rem;\n}\n#shopOrder_detail .mint-popup-4 li i[data-v-5fab95cb] {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n}\n#shopOrder_detail .addr[data-v-5fab95cb] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: #fff;\n  padding: 0.625rem 0.875rem;\n}\n#shopOrder_detail .addr .icon[data-v-5fab95cb] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n#shopOrder_detail .addr .icon i[data-v-5fab95cb] {\n      line-height: 1.5rem;\n      margin-right: 0.625rem;\n}\n#shopOrder_detail .addr i[data-v-5fab95cb] {\n    font-size: 16px;\n    color: #333;\n}\n#shopOrder_detail .addr .fa-angle-right[data-v-5fab95cb] {\n    font-size: 24px;\n    color: #c9c9c9;\n}\n#shopOrder_detail .addr p[data-v-5fab95cb] {\n    -webkit-box-flex: 6;\n        -ms-flex: 6;\n            flex: 6;\n    text-align: justify;\n    font-weight: bold;\n    line-height: 1.5rem;\n    padding-right: 1rem;\n    color: #333333;\n    font-size: 14px;\n}\n#shopOrder_detail .addr p span[data-v-5fab95cb] {\n      font-weight: normal;\n      color: #666;\n}\n#shopOrder_detail .address_addnav[data-v-5fab95cb] {\n  width: 100%;\n  padding: 0 3% 0 6% !important;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  background: #f15353 !important;\n  color: #fff !important;\n  text-align: center;\n  height: 2.75rem !important;\n  line-height: 2.75rem !important;\n}\n#shopOrder_detail .mint-header[data-v-5fab95cb] {\n  background: #ffffff !important;\n  color: #666;\n}\n",""])},T5zS:function(t,e,s){var i=s("LtJV");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s("rjj0")("8d706ee4",i,!0,{})}});