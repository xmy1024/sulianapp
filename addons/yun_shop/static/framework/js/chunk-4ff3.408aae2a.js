(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4ff3"],{"6Apw":function(e,t,a){"use strict";var r=a("eIb1");a.n(r).a},"9htI":function(e,t,a){"use strict";a.r(t);var r={name:"PlatformUserList",data:function(){var e=this;return{list:[],form:{old_password:"",password:"",re_password:""},times:"",search_form:{keyword:"",searchtime:"",status:"",times:{start:"",end:""}},dialogTableVisible:!1,change_pwd_id:"",rules:{password:[{required:!0,trigger:"blur",message:"请输入密码"}],re_password:[{validator:function(t,a,r){""===a?r(new Error("请再次输入密码")):a!==e.form.password?r(new Error("两次输入密码不一致!")):r()},required:!0,trigger:"blur"}]},pageSize:0,current_page:0,total:0}},created:function(){this.currentChange(1)},destroyed:function(){},methods:{visDia:function(e,t){this.dialogTableVisible=!0,this.change_pwd_id=t},search:function(){this.currentChange(1)},onDatePick:function(e){this.search_form.times=e?{start:parseInt(e[0]/1e3),end:parseInt(e[1]/1e3)}:{start:"",end:""}},currentChange:function(e){var t=this;$http.post("/admin/user/index",{page:e,search:this.search_form},"加载中").then(function(e){1===e.result?(t.total=e.data.total,t.pageSize=e.data.per_page,t.list=e.data.data,t.current_page=e.data.current_page):(t.list=e.data,t.$message.error("获取失败!"))}).catch(function(e){t.$message.error("获取失败!"),console.error(e)})},changePwd:function(e){var t=this;this.$refs[e].validate(function(e){e?$http.post("/admin/user/change",{user:t.form,uid:t.change_pwd_id}," ").then(function(e){1===e.result?(t.dialogTableVisible=!1,t.$refs.form.resetFields(),t.$message.success("修改成功!")):t.$message.error(e.msg[0])}).catch(function(e){t.$message.error("修改失败!"),console.error(e)}):console.error(t.form)})},toChangeStatus:function(e,t){var a=this,r=2===e?"启用":"禁用";$http.post("/admin/user/status",{status:e,uid:t}," ").then(function(e){1===e.result?(a.$alert("用户已"+r+"成功！！",r+"用户",{confirmButtonText:"确定",type:"success"}),a.currentChange(1)):a.$message.error(e.msg)}).catch(function(e){a.$message.error(r+"失败!"),console.error(e)})},changeStatus:function(e,t){var a=this;2===e&&this.$confirm("确定禁用吗","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.toChangeStatus(3,t)}).catch(function(){a.$message({type:"info",message:"已取消禁用"})}),3===e&&this.$confirm("确定启用吗","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.toChangeStatus(2,t)}).catch(function(){a.$message({type:"info",message:"已取消启用"})})}}},s=(a("6Apw"),a("ZrdR")),o=Object(s.a)(r,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"right"},[a("div",{staticClass:"right-head"},[a("div",{staticClass:"right-head-con"},[e._v("管理员用户")]),e._v(" "),a("router-link",{attrs:{to:"/users/admin/add"}},[a("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-plus"}},[e._v("添加用户\n      ")])],1)],1),e._v(" "),a("el-form",{ref:"search_form",attrs:{inline:!0,model:e.search_form}},[a("el-row",[a("el-col",{attrs:{span:20}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"请输入用户名/手机号"},model:{value:e.search_form.keyword,callback:function(t){e.$set(e.search_form,"keyword",t)},expression:"search_form.keyword"}})],1),e._v(" "),a("el-form-item",[a("el-select",{attrs:{clearable:"",placeholder:"选择时间类型",clearable:""},model:{value:e.search_form.searchtime,callback:function(t){e.$set(e.search_form,"searchtime",t)},expression:"search_form.searchtime"}},[a("el-option",{attrs:{label:"注册时间",value:1}}),e._v(" "),a("el-option",{attrs:{label:"到期时间",value:2}})],1),e._v(" "),a("el-date-picker",{attrs:{"value-format":"timestamp",type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},on:{change:e.onDatePick},model:{value:e.times,callback:function(t){e.times=t},expression:"times"}})],1),e._v(" "),a("el-form-item",[a("el-select",{attrs:{clearable:"",placeholder:"状态",clearable:""},model:{value:e.search_form.status,callback:function(t){e.$set(e.search_form,"status",t)},expression:"search_form.status"}},[a("el-option",{attrs:{label:"有效",value:2}}),e._v(" "),a("el-option",{attrs:{label:"已禁用",value:3}}),e._v(" "),a("el-option",{attrs:{label:"已过期",value:4}})],1)],1)],1),e._v(" "),a("el-col",{attrs:{span:3,align:"right"}},[a("el-form-item",[a("el-button",{attrs:{type:"success",icon:"el-icon-search"},on:{click:function(t){e.search()}}},[e._v("搜索\n          ")])],1)],1)],1)],1),e._v(" "),[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.list}},[a("el-table-column",{attrs:{prop:"uid",label:"ID",align:"center",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{prop:"username",label:"用户名",align:"center",width:"110"}}),e._v(" "),a("el-table-column",{attrs:{prop:"create_at",label:"注册时间",align:"center",width:"160"}}),e._v(" "),a("el-table-column",{attrs:{prop:"endtime",label:"到期时间",align:"center",width:"160"}}),e._v(" "),a("el-table-column",{attrs:{prop:"state",label:"状态",align:"center",width:"110"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作","min-width":"180",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("router-link",{attrs:{to:"/users/admin/platform_list/"+t.row.uid}},[a("el-button",[e._v("平台列表")])],1),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(a){e.visDia(t.$index,t.row.uid)}}},[e._v("修改密码\n          ")]),e._v(" "),2===t.row.status?a("el-button",{attrs:{type:"danger"},on:{click:function(a){e.changeStatus(t.row.status,t.row.uid)}}},[e._v("禁用\n          ")]):e._e(),e._v(" "),3===t.row.status?a("el-button",{attrs:{type:"success"},on:{click:function(a){e.changeStatus(t.row.status,t.row.uid)}}},[e._v("启用\n          ")]):e._e(),e._v(" "),a("router-link",{attrs:{to:"/users/admin/edit/"+t.row.uid}},[a("el-button",{attrs:{type:"success"}},[e._v("编辑")])],1)]}}])})],1),e._v(" "),a("el-row",[a("el-col",{staticStyle:{padding:"15px 5% 15px 0"},attrs:{span:24,align:"right"}},[a("el-pagination",{attrs:{layout:"prev, pager, next","current-page":e.current_page,"page-size":e.pageSize,total:e.total,background:""},on:{"current-change":e.currentChange,"update:currentPage":function(t){e.current_page=t}}})],1)],1)],e._v(" "),a("el-dialog",{attrs:{title:"修改密码",visible:e.dialogTableVisible},on:{"update:visible":function(t){e.dialogTableVisible=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"20%"}},[a("el-form-item",{attrs:{label:"新密码",prop:"password"}},[a("el-input",{staticStyle:{width:"80%"},attrs:{placeholder:"请输入新密码",type:"password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"确认新密码",prop:"re_password"}},[a("el-input",{staticStyle:{width:"80%"},attrs:{placeholder:"请输入确认密码",type:"password"},model:{value:e.form.re_password,callback:function(t){e.$set(e.form,"re_password",t)},expression:"form.re_password"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogTableVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.changePwd("form")}}},[e._v("确 定")])],1)],1)],2)},[],!1,null,null,null);o.options.__file="index.vue";t.default=o.exports},eIb1:function(e,t,a){}}]);