webpackJsonp([171],{"94md":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("Tg7E"),a=s("smaD"),r=s("Pexp"),o=(s("lRwf"),s("C8p+"),a.a,{data:function(){return{form:{username:"",mobile:"",city:"",address:"",province:"",district:"",uid:9,isDefault:!1,streetName:""},addressShow:!1,district:district,districtVal:[],streetShow:!1,isShowStreet:!1,address_id:0,addressName:""}},methods:{alterAddresshandle:function(){var t=this;if(this.fun.isTextEmpty(this.form.username))i.MessageBox.alert("请输入收件人");else if(this.fun.isTextEmpty(this.form.mobile))i.MessageBox.alert("请输入联系电话");else if(/^[0-9]{1,}$/.test(this.form.mobile))if(this.fun.isTextEmpty(this.addressName))i.MessageBox.alert("请输入所在地区");else if(this.isShowStreet&&this.fun.isTextEmpty(this.form.streetName))i.MessageBox.alert("请输入所在街道");else if(this.fun.isTextEmpty(this.form.address))i.MessageBox.alert("请输入详细地址");else{var e={};e=this.isShowStreet?{address_id:this.address_id,username:this.form.username,mobile:this.form.mobile,city:this.form.city,address:this.form.address,province:this.form.province,isdefault:this.form.isDefault?1:0,district:this.form.district,street:this.form.streetName}:{address_id:this.address_id,username:this.form.username,mobile:this.form.mobile,city:this.form.city,address:this.form.address,province:this.form.province,isdefault:this.form.isDefault?1:0,district:this.form.district},$http.post("member.member-address.update",e,"").then(function(e){1==e.result?(i.MessageBox.alert(e.msg),t.$router.go(-1)):i.MessageBox.alert(e.msg)},function(t){})}else i.MessageBox.alert("请输入正确的联系电话")},addressCallback:function(t){this.form.streetName="",this.districtVal="",this.form.province=t.itemName1,this.form.city=t.itemName2,this.form.district=t.itemName3,this.addressName=t.itemName1+" "+t.itemName2+" "+t.itemName3,this.getStreet(t.itemValue3)},streetTip:function(){this.fun.isTextEmpty(this.addressName)?i.MessageBox.alert("请先选择所在地区"):this.streetShow=!0},streetConfirm:function(t){this.form.streetName=t,this.streetShow=!1},getStreet:function(t){var e=this;$http.get("member.memberAddress.street",{district_id:t}).then(function(t){console.log(t),1==t.result?!e.fun.isTextEmpty(t.data)&&t.data.length>0?(e.districtVal=t.data,e.isShowStreet=!0):e.isShowStreet=!1:e.this.isShowStreet=!1}).catch(function(t){console.log(t)})}},activated:function(){this.isShowStreet=!1,this.form.isDefault=0!=this.$route.params.model.isdefault,this.form.province=this.$route.params.model.province,this.address_id=this.$route.params.model.id,this.form.username=this.$route.params.model.username,this.form.mobile=this.$route.params.model.mobile,this.form.city=this.$route.params.model.city,this.form.district=this.$route.params.model.district,this.form.address=this.$route.params.model.address,this.form.streetName=this.$route.params.model.street,this.addressName=this.form.province+" "+this.form.city+" "+this.form.district,this.isShowStreet=!this.fun.isTextEmpty(this.form.streetName),this.isShowStreet&&this.getStreet(this.$route.params.model.district_id)},mounted:function(){},components:{cTitle:r.a}}),n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:[3==this.fun.getPhoneEnv()?"pcStyle":""],attrs:{id:"appendAddress"}},[s("c-title",{attrs:{hide:!1,text:"修改收货地址"}}),t._v(" "),s("div",{staticStyle:{height:"40px","margin-top":"0.625rem"}}),t._v(" "),s("yd-cell-group",[s("yd-cell-item",[s("span",{attrs:{slot:"left"},slot:"left"},[t._v("收件人：")]),t._v(" "),s("yd-input",{attrs:{slot:"right",max:"20",placeholder:"请输入收件人","show-success-icon":!1},slot:"right",model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}})],1),t._v(" "),s("yd-cell-item",[s("span",{attrs:{slot:"left"},slot:"left"},[t._v("联系电话：")]),t._v(" "),s("yd-input",{attrs:{slot:"right",placeholder:"请输入联系电话",type:"tel"},slot:"right",model:{value:t.form.mobile,callback:function(e){t.$set(t.form,"mobile",e)},expression:"form.mobile"}})],1)],1),t._v(" "),s("yd-cell-group",[s("yd-cell-item",[s("span",{attrs:{slot:"left"},slot:"left"},[t._v("设置默认地址：")]),t._v(" "),s("span",{attrs:{slot:"right"},slot:"right"},[s("mt-switch",{model:{value:t.form.isDefault,callback:function(e){t.$set(t.form,"isDefault",e)},expression:"form.isDefault"}})],1)])],1),t._v(" "),s("div",[s("yd-cell-group",[s("yd-cell-item",{attrs:{arrow:""}},[s("span",{attrs:{slot:"left"},slot:"left"},[t._v("所在地区：")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.addressName,expression:"addressName"}],staticStyle:{color:"transparent","text-shadow":"0 0 0 #ccc"},attrs:{slot:"right",type:"text",unselectable:"on",placeholder:"请选择收货地址"},domProps:{value:t.addressName},on:{click:function(e){e.stopPropagation(),t.addressShow=!0},input:function(e){e.target.composing||(t.addressName=e.target.value)}},slot:"right"})]),t._v(" "),t.isShowStreet?s("yd-cell-item",{attrs:{arrow:""}},[s("span",{attrs:{slot:"left"},slot:"left"},[t._v("街道：")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.streetName,expression:"form.streetName"}],staticStyle:{color:"transparent","text-shadow":"0 0 0 #ccc"},attrs:{slot:"right",type:"text",readonly:"",unselectable:"on",placeholder:"请选择街道"},domProps:{value:t.form.streetName},on:{click:function(e){return e.stopPropagation(),t.streetTip(e)},input:function(e){e.target.composing||t.$set(t.form,"streetName",e.target.value)}},slot:"right"})]):t._e()],1),t._v(" "),s("yd-cityselect",{attrs:{callback:t.addressCallback,items:t.district},model:{value:t.addressShow,callback:function(e){t.addressShow=e},expression:"addressShow"}})],1),t._v(" "),s("yd-cell-group",[s("yd-cell-item",[s("yd-textarea",{attrs:{slot:"right",placeholder:"请输入详细地址",maxlength:"100"},slot:"right",model:{value:t.form.address,callback:function(e){t.$set(t.form,"address",e)},expression:"form.address"}})],1)],1),t._v(" "),s("div",{staticStyle:{height:"3.75rem"}}),t._v(" "),s("div",{staticClass:"address_addnav",on:{click:t.alterAddresshandle}},[s("i",{staticClass:"fa fa-plus-circle"}),s("span",[t._v("保存")])]),t._v(" "),s("yd-popup",{attrs:{position:"right",width:"100%"},model:{value:t.streetShow,callback:function(e){t.streetShow=e},expression:"streetShow"}},[s("yd-navbar",{attrs:{title:"选择街道",height:"2.5rem",fontsize:"14px",fixed:""}},[s("span",{attrs:{slot:"left"},slot:"left"},[s("yd-navbar-back-icon",{nativeOn:{click:function(e){t.streetShow=!1}}})],1)]),t._v(" "),s("div",{staticStyle:{clear:"both","margin-top":"2.5rem"}}),t._v(" "),t._l(t.districtVal,function(e,i){return s("yd-cell-item",{key:i,attrs:{arrow:""},nativeOn:{click:function(s){return t.streetConfirm(e.areaname)}}},[s("span",{attrs:{slot:"left"},slot:"left"},[t._v(t._s(e.areaname))])])})],2)],1)},staticRenderFns:[]};var l=s("VU/8")(o,n,!1,function(t){s("qgOB")},"data-v-e8a42c7a",null);e.default=l.exports},Qxit:function(t,e,s){(t.exports=s("FZ+f")(!1)).push([t.i,"\n.address_addnav[data-v-e8a42c7a] {\n  width: 100%;\n  padding: 0 3% 0 6% !important;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  background: #f15353 !important;\n  color: #fff !important;\n  text-align: center;\n  height: 2.8125rem !important;\n  line-height: 2.8125rem !important;\n}\n.popup-con[data-v-e8a42c7a] {\n  width: 100%;\n}\n#appendAddress .mint-field .mint-cell-title[data-v-e8a42c7a] {\n  text-align: left;\n}\n.address_addnav i[data-v-e8a42c7a] {\n  color: #fff;\n  font-size: 22px;\n  position: absolute;\n  top: 50%;\n  height: 1.125rem;\n  line-height: 1.125rem;\n  margin-left: -2.125rem;\n  margin-top: -0.5625rem;\n}\n.maleall[data-v-e8a42c7a] {\n  background: #fff;\n  text-align: left;\n}\n#appendAddress .males[data-v-e8a42c7a] {\n  line-height: 3.125rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-top: 0.0625rem solid #d9d9d9;\n  margin-left: 0.625rem;\n  padding-right: 0.625rem;\n}\n#appendAddress .males .address[data-v-e8a42c7a] {\n    display: inline-block;\n    position: relative;\n    width: 100%;\n    float: right;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    padding-top: 0rem;\n}\n.maleall span[data-v-e8a42c7a] {\n  font-size: 16px;\n  vertical-align: middle;\n  width: 6.5625rem;\n  -webkit-box-flex: 0;\n  -ms-flex: none;\n  flex: none;\n  line-height: 3.125rem;\n}\n#address[data-v-e8a42c7a] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  line-height: 3.125rem;\n}\n#address .mint-button--default[data-v-e8a42c7a] {\n    line-height: 3.125rem;\n    text-align: left;\n    font-size: 16px;\n}\n#appendAddress.pcStyle .address_addnav[data-v-e8a42c7a] {\n  width: 375px;\n  left: auto;\n}\n",""])},qgOB:function(t,e,s){var i=s("Qxit");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s("rjj0")("0afcc936",i,!0,{})}});