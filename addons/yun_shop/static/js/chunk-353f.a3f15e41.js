(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-353f"],{"4axg":function(t,e,a){"use strict";a.r(e);var n={name:"PlatformUserList",data:function(){return{list:[],userData:{},pageSize:0,current_page:0,total:0,dialogTableVisible:!1,uid:""}},created:function(){this.uid=this.$route.params.id,this.currentChange(1)},destroyed:function(){},methods:{currentChange:function(t){var e=this;$http.post("/admin/user/app_list",{page:t,uid:this.uid},"加载中").then(function(t){1===t.result?(e.userData=t.data,e.total=t.data.total,e.pageSize=t.data.per_page,e.list=t.data.has_many_app_user,e.current_page=t.data.current_page):(e.list=t.data,e.$message.error(t.msg))}).catch(function(t){e.$message.error("获取失败!"),console.error(t)})},toChangeStatus:function(t,e){var a=this,n=2===t?"启用":"禁用";$http.post("/admin/user/status",{status:t,uid:e}," ").then(function(t){1===t.result?(a.$alert("用户已"+n+"成功！！",n+"用户",{confirmButtonText:"确定",type:"success"}),a.currentChange(1)):a.$message.error(t.msg)}).catch(function(t){a.$message.error(n+"失败!"),console.error(t)})},changeStatus:function(t,e){var a=this;t=this.userData.status,e=this.userData.uid,2===t&&this.$confirm("确定禁用吗","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.toChangeStatus(3,e)}).catch(function(){a.$message({type:"info",message:"已取消禁用"})}),3===t&&this.$confirm("确定启用吗","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.toChangeStatus(2,e)}).catch(function(){a.$message({type:"info",message:"已取消启用"})})}}},r=(a("vKXG"),a("ZrdR")),s=Object(r.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"right"},[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",[a("router-link",{attrs:{to:"/users/admin"}},[t._v("管理员用户")])],1),t._v(" "),a("el-breadcrumb-item",[t._v("平台列表")])],1),t._v(" "),a("el-col",{attrs:{span:16}},[a("el-tag",{staticStyle:{height:"50px","line-height":"50px","font-size":"20px","margin-top":"10px"}},[t._v("\n      用户名："),a("span",{staticStyle:{"font-weight":"900"}},[t._v(t._s(t.userData.username))])])],1),t._v(" "),a("el-col",{attrs:{align:"right",span:7}},[a("el-button",{staticStyle:{"margin-top":"10px"},attrs:{type:3===t.userData.status?"success":"danger"},on:{click:t.changeStatus}},[t._v(t._s(3===t.userData.status?"启用":"禁用")+"\n    ")])],1),t._v(" "),[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list}},[a("el-table-column",{attrs:{prop:"has_one_app.name",label:"平台名称",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"role_name",label:"账号类型",align:"center"}})],1),t._v(" "),a("el-row",[a("el-col",{staticStyle:{padding:"15px 5% 15px 0"},attrs:{span:24,align:"right"}},[a("el-pagination",{attrs:{layout:"prev, pager, next","current-page":t.current_page,"page-size":t.pageSize,total:t.total,background:""},on:{"current-change":t.currentChange,"update:currentPage":function(e){t.current_page=e}}})],1)],1)]],2)},[],!1,null,null,null);s.options.__file="platform_list.vue";e.default=s.exports},izU4:function(t,e,a){},vKXG:function(t,e,a){"use strict";var n=a("izU4");a.n(n).a}}]);