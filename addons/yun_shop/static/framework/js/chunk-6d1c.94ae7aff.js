(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6d1c"],{JNhG:function(t,i,e){},OzGj:function(t,i,e){"use strict";var n=e("JNhG");e.n(n).a},ZQDA:function(t,i,e){},glbJ:function(t,i,e){"use strict";var n=e("Asgo"),s=e.n(n),o=e("EPZ6"),l=e.n(o),a={name:"EditorSlideUpload",props:{color:{type:String,default:"#1890ff"}},data:function(){return{dialogVisible:!1,listObj:{},fileList:[]}},methods:{checkAllSuccess:function(){var t=this;return l()(this.listObj).every(function(i){return t.listObj[i].hasSuccess})},handleSubmit:function(){var t=this,i=l()(this.listObj).map(function(i){return t.listObj[i]});this.checkAllSuccess()?(this.$emit("successCBK",i),this.listObj={},this.fileList=[],this.dialogVisible=!1):this.$message("请等待所有图片上传成功 或 出现了网络问题，请刷新页面重新上传！")},handleSuccess:function(t,i){for(var e=i.uid,n=l()(this.listObj),s=0,o=n.length;s<o;s++)if(this.listObj[n[s]].uid===e)return this.listObj[n[s]].url=t.files.file,void(this.listObj[n[s]].hasSuccess=!0)},handleRemove:function(t){for(var i=t.uid,e=l()(this.listObj),n=0,s=e.length;n<s;n++)if(this.listObj[e[n]].uid===i)return void delete this.listObj[e[n]]},beforeUpload:function(t){var i=this,e=window.URL||window.webkitURL,n=t.uid;return this.listObj[n]={},new s.a(function(s,o){var l=new Image;l.src=e.createObjectURL(t),l.onload=function(){i.listObj[n]={hasSuccess:!1,uid:t.uid,width:this.width,height:this.height}},s(!0)})}}},c=(e("wn0B"),e("ZrdR")),r=Object(c.a)(a,function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"upload-container"},[e("el-button",{style:{background:t.color,borderColor:t.color},attrs:{icon:"el-icon-upload",size:"mini",type:"primary"},on:{click:function(i){t.dialogVisible=!0}}},[t._v("上传图片\n  ")]),t._v(" "),e("el-dialog",{attrs:{visible:t.dialogVisible},on:{"update:visible":function(i){t.dialogVisible=i}}},[e("el-upload",{staticClass:"editor-slide-upload",attrs:{multiple:!0,"file-list":t.fileList,"show-file-list":!0,"on-remove":t.handleRemove,"on-success":t.handleSuccess,"before-upload":t.beforeUpload,action:"https://httpbin.org/post","list-type":"picture-card"}},[e("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")])],1),t._v(" "),e("el-button",{on:{click:function(i){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v("确 定")])],1)],1)},[],!1,null,"39480e6e",null);r.options.__file="editorImage.vue";var u=["advlist anchor autolink autosave code codesample colorpicker colorpicker contextmenu directionality emoticons fullscreen hr image imagetools insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount"],d=["searchreplace bold italic underline strikethrough alignleft aligncenter alignright outdent indent  blockquote undo redo removeformat subscript superscript code codesample","hr bullist numlist link image charmap preview anchor pagebreak insertdatetime media table emoticons forecolor backcolor fullscreen"],m={name:"Tinymce",components:{editorImage:r.exports},props:{id:{type:String,default:function(){return"vue-tinymce-"+ +new Date+(1e3*Math.random()).toFixed(0)}},value:{type:String,default:""},toolbar:{type:Array,required:!1,default:function(){return[]}},menubar:{type:String,default:"file edit insert view format table"},height:{type:Number,required:!1,default:360}},data:function(){return{hasChange:!1,hasInit:!1,tinymceId:this.id,fullscreen:!1,languageTypeList:{en:"en",zh:"zh_CN"}}},computed:{language:function(){return this.languageTypeList[this.$store.getters.language]}},watch:{value:function(t){var i=this;!this.hasChange&&this.hasInit&&this.$nextTick(function(){return window.tinymce.get(i.tinymceId).setContent(t||"")})},language:function(){var t=this;this.destroyTinymce(),this.$nextTick(function(){return t.initTinymce()})}},mounted:function(){this.initTinymce()},activated:function(){this.initTinymce()},deactivated:function(){this.destroyTinymce()},destroyed:function(){this.destroyTinymce()},methods:{initTinymce:function(){var t=this,i=this;window.tinymce.init({language:this.language,selector:"#"+this.tinymceId,height:this.height,body_class:"panel-body ",object_resizing:!1,toolbar:this.toolbar.length>0?this.toolbar:d,menubar:this.menubar,plugins:u,end_container_on_empty_block:!0,powerpaste_word_import:"clean",code_dialog_height:450,code_dialog_width:1e3,advlist_bullet_styles:"square",advlist_number_styles:"default",imagetools_cors_hosts:["www.tinymce.com","codepen.io"],default_link_target:"_blank",link_title:!1,nonbreaking_force_tab:!0,init_instance_callback:function(e){i.value&&e.setContent(i.value),i.hasInit=!0,e.on("NodeChange Change KeyUp SetContent",function(){t.hasChange=!0,t.$emit("input",e.getContent())})},setup:function(t){t.on("FullscreenStateChanged",function(t){i.fullscreen=t.state})}})},destroyTinymce:function(){var t=window.tinymce.get(this.tinymceId);this.fullscreen&&t.execCommand("mceFullScreen"),t&&t.destroy()},setContent:function(t){window.tinymce.get(this.tinymceId).setContent(t)},getContent:function(){window.tinymce.get(this.tinymceId).getContent()},imageSuccessCBK:function(t){var i=this;t.forEach(function(t){window.tinymce.get(i.tinymceId).insertContent('<img class="wscnph" src="'+t.url+'" >')})}}},v=(e("OzGj"),Object(c.a)(m,function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"tinymce-container editor-container",class:{fullscreen:this.fullscreen}},[i("textarea",{staticClass:"tinymce-textarea",attrs:{id:this.tinymceId}}),this._v(" "),i("div",{staticClass:"editor-custom-btn-container"},[i("editorImage",{staticClass:"editor-upload-btn",attrs:{color:"#1890ff"},on:{successCBK:this.imageSuccessCBK}})],1)])},[],!1,null,"4b42c7ad",null));v.options.__file="index.vue";i.a=v.exports},un4T:function(t,i,e){"use strict";var n=e("z5hn");e.n(n).a},"wR+Y":function(t,i,e){"use strict";e.r(i);var n={name:"website-setting",components:{Tinymce:e("glbJ").a},data:function(){return{submit_loading:!1,form:{password_change:"0",password_verify:"0",pic_verify:"0",sms_verify:"0",login_limit_num:"",login_limit_time:""},login_limit_num:"",login_limit_time:"",is_out:!1,is_limit:!1,plugin_status:"",rules:{}}},created:function(){this.getData(),window.addEventListener("beforeunload",function(t){window.onbeforeunload=null})},destroyed:function(){},methods:{isNumber:function(){return/^[1-9]\d*$/.test(this.login_limit_num)&&/^[1-9]\d*$/.test(this.login_limit_time)?(this.form.login_limit_num=this.login_limit_num,this.form.login_limit_time=this.login_limit_time,void(this.is_limit=!1)):(this.$message.error("请输入正确的数值"),!1)},submitForm:function(t){var i=this;$http.post("/admin/system/login_set",{setdata:this.form},"保存中").then(function(t){1===t.result?(i.$message.success("保存成功！"),window.location.reload()):i.$message.error(t.msg)}).catch(function(){i.$message.error("保存失败！")})},getData:function(){var t=this;$http.post("/admin/system/login_set",{},"加载中").then(function(i){1==i.result?(t.form=i.data,t.form.login_limit_num&&(t.login_limit_num=t.form.login_limit_num),t.form.login_limit_time&&(t.login_limit_time=t.form.login_limit_time),console.log(t.form)):t.$message.error(i.msg)}).catch(function(){console.log("获取数据失败！")})}}},s=(e("un4T"),e("ZrdR")),o=Object(s.a)(n,function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"right"},[t._m(0),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"content-row"},[e("div",{staticStyle:{flex:"1"}},[t._v("\n        修改密码\n      ")]),t._v(" "),e("div",{staticStyle:{flex:"5"}},[t._v("\n        开启后，首次登录的用户弹窗提示修改密码\n      ")]),t._v(" "),e("div",{staticStyle:{flex:"1"}},[e("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:t.form.password_change,callback:function(i){t.$set(t.form,"password_change",i)},expression:"form.password_change"}})],1)]),t._v(" "),e("div",{staticClass:"content-row"},[e("div",{staticStyle:{flex:"1"}},[t._v("\n        自动退出\n      ")]),t._v(" "),e("div",{staticStyle:{flex:"5"}},[t._v("\n        登录后长时间无操作系统自动退出\n      ")]),t._v(" "),e("div",{staticStyle:{flex:"1"}},[e("el-button",{attrs:{type:"text"},on:{click:function(i){t.is_out=!0}}},[t._v("修改")])],1)]),t._v(" "),e("div",{staticClass:"content-row"},[e("div",{staticStyle:{flex:"1"}},[t._v("\n        密码强度校验\n      ")]),t._v(" "),e("div",{staticStyle:{flex:"5"}},[t._v("\n        开启后，登录密码设置长度至少为8位，要求包括数字，字母，大小写和特殊符号\n      ")]),t._v(" "),e("div",{staticStyle:{flex:"1"}},[e("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:t.form.password_verify,callback:function(i){t.$set(t.form,"password_verify",i)},expression:"form.password_verify"}})],1)]),t._v(" "),e("div",{staticClass:"content-row"},[e("div",{staticStyle:{flex:"1"}},[t._v("\n        图形验证码\n      ")]),t._v(" "),e("div",{staticStyle:{flex:"5"}},[t._v("\n        开启后，用户需要输入图形验证码\n      ")]),t._v(" "),e("div",{staticStyle:{flex:"1"}},[e("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:t.form.pic_verify,callback:function(i){t.$set(t.form,"pic_verify",i)},expression:"form.pic_verify"}})],1)]),t._v(" "),e("div",{staticClass:"content-row"},[e("div",{staticStyle:{flex:"1"}},[t._v("\n        短信验证码\n      ")]),t._v(" "),e("div",{staticStyle:{flex:"5"}},[t._v("\n        开启后，用户需要输入短信验证码\n      ")]),t._v(" "),e("div",{staticStyle:{flex:"1"}},[e("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:t.form.sms_verify,callback:function(i){t.$set(t.form,"sms_verify",i)},expression:"form.sms_verify"}})],1)]),t._v(" "),e("div",{staticClass:"content-row"},[e("div",{staticStyle:{flex:"1"}},[t._v("\n          登录限制\n        ")]),t._v(" "),e("div",{staticStyle:{flex:"5"}},[t._v("\n          设置登录失败超出限定次数及限制登录时间\n        ")]),t._v(" "),e("div",{staticStyle:{flex:"1"}},[e("el-button",{attrs:{type:"text"},on:{click:function(i){t.is_limit=!0}}},[t._v("修改")])],1)])]),t._v(" "),e("div",{staticClass:"content-row",staticStyle:{"padding-top":"20px"}},[e("el-button",{attrs:{type:"primary"},on:{click:t.submitForm}},[t._v("保存")])],1),t._v(" "),e("el-dialog",{attrs:{title:"设置自动退出时间",visible:t.is_out},on:{"update:visible":function(i){t.is_out=i}}},[e("div",{staticStyle:{"text-align":"center"}},[e("el-tag",{staticStyle:{"margin-bottom":"30px"},attrs:{type:"danger"}},[e("i",{staticClass:"el-icon-warning"}),t._v("\n          登录状态下，若长时间无操作系统将自动退出！\n        ")]),t._v(" "),e("el-tag",{staticStyle:{"margin-bottom":"30px","font-size":"14px"},attrs:{type:"danger"}},[e("i",{staticClass:"el-icon-warning"}),t._v("\n          需要修改，请到商城config文件夹下，找到session.php的'lifetime'参数自行修改，单位默认为分钟\n        ")]),t._v(" "),e("div",[e("el-button",{attrs:{type:"primary"},on:{click:function(i){t.is_out=!1}}},[t._v("确定")]),t._v(" "),e("el-button",{on:{click:function(i){t.is_out=!1}}},[t._v("取消")])],1)],1),t._v(" "),e("span",{staticClass:"dialog-footer",staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"})]),t._v(" "),e("el-dialog",{attrs:{title:"修改登录限制",visible:t.is_limit},on:{"update:visible":function(i){t.is_limit=i}}},[e("div",{staticStyle:{"text-align":"center"}},[e("div",{staticStyle:{padding:"40px 0"}},[e("el-input",{model:{value:t.login_limit_num,callback:function(i){t.login_limit_num=i},expression:"login_limit_num"}},[e("template",{slot:"prepend"},[t._v("登录限制次数")]),t._v(" "),e("template",{slot:"append"},[t._v("次")])],2),t._v(" "),e("el-input",{staticStyle:{"padding-top":"20px"},model:{value:t.login_limit_time,callback:function(i){t.login_limit_time=i},expression:"login_limit_time"}},[e("template",{slot:"prepend"},[t._v("登录限制时间")]),t._v(" "),e("template",{slot:"append"},[t._v("分钟")])],2)],1),t._v(" "),e("div",[e("el-button",{attrs:{type:"primary"},on:{click:function(i){t.isNumber()}}},[t._v("确定")]),t._v(" "),e("el-button",{on:{click:function(i){t.is_limit=!1}}},[t._v("取消")])],1)]),t._v(" "),e("span",{staticClass:"dialog-footer",staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"})])],1)},[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"right-head"},[i("div",{staticClass:"right-head-con1"},[this._v("用户登录设置")]),this._v(" "),i("div",{staticClass:"tip",staticStyle:{color:"red"}},[this._v("注意：设置以下选项之后，需点击下面的‘保存’按钮，设置才生效")])])}],!1,null,null,null);o.options.__file="index.vue";i.default=o.exports},wn0B:function(t,i,e){"use strict";var n=e("ZQDA");e.n(n).a},z5hn:function(t,i,e){}}]);