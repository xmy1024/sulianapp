(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-c9aa"],{JNhG:function(t,e,i){},OzGj:function(t,e,i){"use strict";var n=i("JNhG");i.n(n).a},ZQDA:function(t,e,i){},glbJ:function(t,e,i){"use strict";var n=i("Asgo"),s=i.n(n),o=i("EPZ6"),a=i.n(o),l={name:"EditorSlideUpload",props:{color:{type:String,default:"#1890ff"}},data:function(){return{dialogVisible:!1,listObj:{},fileList:[]}},methods:{checkAllSuccess:function(){var t=this;return a()(this.listObj).every(function(e){return t.listObj[e].hasSuccess})},handleSubmit:function(){var t=this,e=a()(this.listObj).map(function(e){return t.listObj[e]});this.checkAllSuccess()?(this.$emit("successCBK",e),this.listObj={},this.fileList=[],this.dialogVisible=!1):this.$message("请等待所有图片上传成功 或 出现了网络问题，请刷新页面重新上传！")},handleSuccess:function(t,e){for(var i=e.uid,n=a()(this.listObj),s=0,o=n.length;s<o;s++)if(this.listObj[n[s]].uid===i)return this.listObj[n[s]].url=t.files.file,void(this.listObj[n[s]].hasSuccess=!0)},handleRemove:function(t){for(var e=t.uid,i=a()(this.listObj),n=0,s=i.length;n<s;n++)if(this.listObj[i[n]].uid===e)return void delete this.listObj[i[n]]},beforeUpload:function(t){var e=this,i=window.URL||window.webkitURL,n=t.uid;return this.listObj[n]={},new s.a(function(s,o){var a=new Image;a.src=i.createObjectURL(t),a.onload=function(){e.listObj[n]={hasSuccess:!1,uid:t.uid,width:this.width,height:this.height}},s(!0)})}}},r=(i("wn0B"),i("ZrdR")),c=Object(r.a)(l,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"upload-container"},[i("el-button",{style:{background:t.color,borderColor:t.color},attrs:{icon:"el-icon-upload",size:"mini",type:"primary"},on:{click:function(e){t.dialogVisible=!0}}},[t._v("上传图片\n  ")]),t._v(" "),i("el-dialog",{attrs:{visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("el-upload",{staticClass:"editor-slide-upload",attrs:{multiple:!0,"file-list":t.fileList,"show-file-list":!0,"on-remove":t.handleRemove,"on-success":t.handleSuccess,"before-upload":t.beforeUpload,action:"https://httpbin.org/post","list-type":"picture-card"}},[i("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")])],1),t._v(" "),i("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v("确 定")])],1)],1)},[],!1,null,"39480e6e",null);c.options.__file="editorImage.vue";var d=["advlist anchor autolink autosave code codesample colorpicker colorpicker contextmenu directionality emoticons fullscreen hr image imagetools insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount"],u=["searchreplace bold italic underline strikethrough alignleft aligncenter alignright outdent indent  blockquote undo redo removeformat subscript superscript code codesample","hr bullist numlist link image charmap preview anchor pagebreak insertdatetime media table emoticons forecolor backcolor fullscreen"],_={name:"Tinymce",components:{editorImage:c.exports},props:{id:{type:String,default:function(){return"vue-tinymce-"+ +new Date+(1e3*Math.random()).toFixed(0)}},value:{type:String,default:""},toolbar:{type:Array,required:!1,default:function(){return[]}},menubar:{type:String,default:"file edit insert view format table"},height:{type:Number,required:!1,default:360}},data:function(){return{hasChange:!1,hasInit:!1,tinymceId:this.id,fullscreen:!1,languageTypeList:{en:"en",zh:"zh_CN"}}},computed:{language:function(){return this.languageTypeList[this.$store.getters.language]}},watch:{value:function(t){var e=this;!this.hasChange&&this.hasInit&&this.$nextTick(function(){return window.tinymce.get(e.tinymceId).setContent(t||"")})},language:function(){var t=this;this.destroyTinymce(),this.$nextTick(function(){return t.initTinymce()})}},mounted:function(){this.initTinymce()},activated:function(){this.initTinymce()},deactivated:function(){this.destroyTinymce()},destroyed:function(){this.destroyTinymce()},methods:{initTinymce:function(){var t=this,e=this;window.tinymce.init({language:this.language,selector:"#"+this.tinymceId,height:this.height,body_class:"panel-body ",object_resizing:!1,toolbar:this.toolbar.length>0?this.toolbar:u,menubar:this.menubar,plugins:d,end_container_on_empty_block:!0,powerpaste_word_import:"clean",code_dialog_height:450,code_dialog_width:1e3,advlist_bullet_styles:"square",advlist_number_styles:"default",imagetools_cors_hosts:["www.tinymce.com","codepen.io"],default_link_target:"_blank",link_title:!1,nonbreaking_force_tab:!0,init_instance_callback:function(i){e.value&&i.setContent(e.value),e.hasInit=!0,i.on("NodeChange Change KeyUp SetContent",function(){t.hasChange=!0,t.$emit("input",i.getContent())})},setup:function(t){t.on("FullscreenStateChanged",function(t){e.fullscreen=t.state})}})},destroyTinymce:function(){var t=window.tinymce.get(this.tinymceId);this.fullscreen&&t.execCommand("mceFullScreen"),t&&t.destroy()},setContent:function(t){window.tinymce.get(this.tinymceId).setContent(t)},getContent:function(){window.tinymce.get(this.tinymceId).getContent()},imageSuccessCBK:function(t){var e=this;t.forEach(function(t){window.tinymce.get(e.tinymceId).insertContent('<img class="wscnph" src="'+t.url+'" >')})}}},p=(i("OzGj"),Object(r.a)(_,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tinymce-container editor-container",class:{fullscreen:this.fullscreen}},[e("textarea",{staticClass:"tinymce-textarea",attrs:{id:this.tinymceId}}),this._v(" "),e("div",{staticClass:"editor-custom-btn-container"},[e("editorImage",{staticClass:"editor-upload-btn",attrs:{color:"#1890ff"},on:{successCBK:this.imageSuccessCBK}})],1)])},[],!1,null,"4b42c7ad",null));p.options.__file="index.vue";e.a=p.exports},k0kQ:function(t,e,i){"use strict";i.r(e);var n={name:"website-setting",components:{Tinymce:i("glbJ").a},data:function(){return{loading:!1,init_loading:!1,version:"",filecount:"",frontendUpgrad:"",log:"",files:[],not_files:[],showDialog:!1,is_update:3,is_update_type:1,redirect:void 0,is_show_progress:0,is_show_progress_type:0,updated_file:0,total_file:0,new_version:0,error_msg:"",rules:{}}},created:function(){this.getData()},destroyed:function(){},methods:{getData:function(){var t=this;t.init_loading=!0,$http.get("/admin/system/update/verifyCheck",{},"正在检查更新").then(function(e){if(1==e.result){if(e.filecount>0){if(t.files=e.files,t.version=e.version,e.list&&e.list.length>0&&(t.new_version=e.list[e.frontendUpgrad-1].version),t.filecount=e.filecount,t.frontendUpgrad=e.frontendUpgrad,t.log=e.log,t.log&&t.log.length>=0)for(var i=0;i<t.log.length;i++)t.log[i].created_at=t.log[i].created_at.split(" ")[0],t.log[i].content=t.log[i].content.split("\n");t.is_update=1,t.is_update_type=1}else e.filecount<=0&&(0==e.frontendUpgrad?t.is_update=99:(t.filecount=e.filecount,t.frontendUpgrad=e.frontendUpgrad,t.new_version=e.list[e.frontendUpgrad-1].version,t.version=e.version,t.is_update=1,t.is_update_type=2));t.init_loading=!1}else-1==e.result?(t.$message.error("暂未授权!"),t.is_update=-1,t.init_loading=!1):0==e.result?(t.$message.error("网络请求超时!"),t.is_update=0,t.init_loading=!1):99==e.result?(t.$message.success("当前版本为最新版!"),t.is_update=99,t.init_loading=!1):98==e.result&&(t.$message.error(e.msg),t.error_msg=e.msg,t.is_update=98,t.init_loading=!1)}).catch(function(){console.log("获取数据失败！"),t.init_loading=!1})},upgrade:function(){console.log(this.files);var t=this;t.is_show_progress=1;for(var e=0;e<t.files.length;e++)1===t.files[e].is_choose&&t.not_files.push(t.files[e].path);$http.post("/admin/system/update/fileDownload",{nofiles:t.not_files}).then(function(e){console.log(e),1==e.result?(t.is_show_progress_type=1,t.updated_file=e.success,t.total_file=e.total,t.upgrade()):2==e.result?t.frontendUpgrad>0?t.upgradeFront():(t.is_show_progress_type=3,t.is_show_progress=0,t.getData()):3==e.result&&t.upgrade()}).catch(function(){console.log("获取数据失败！")}),console.log(t.not_files)},upgradeFront:function(){var t=this;t.is_show_progress=1,t.is_show_progress_type=2,$http.post("/admin/system/update/startDownload",{}).then(function(e){console.log(e),1==e.status?(t.is_show_progress_type=3,t.getData(),t.is_show_progress=0):(t.is_show_progress_type=4,t.is_show_progress=0)}).catch(function(){console.log("获取数据失败！")})}}},s=(i("sbOL"),i("ZrdR")),o=Object(s.a)(n,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.init_loading,expression:"init_loading"}],staticClass:"right"},[t._m(0),t._v(" "),i("el-col",{attrs:{span:12}},[[99==t.is_update?i("div",{staticStyle:{color:"green","fonr-weight":"800","line-height":"50px"}},[t._v("\n        恭喜您,当前版本为最新版!\n      ")]):t._e(),t._v(" "),-1==t.is_update?i("div",{staticStyle:{"fonr-weight":"800","line-height":"50px"}},[t._v("\n        暂未授权!\n      ")]):t._e(),t._v(" "),3==t.is_update?i("div",{staticStyle:{color:"green","fonr-weight":"800","line-height":"50px"}},[t._v("\n        检查更新中...\n      ")]):t._e(),t._v(" "),0==t.is_update?i("div",{staticStyle:{color:"red","fonr-weight":"800","line-height":"50px"}},[t._v("\n        网络请求超时!\n      ")]):t._e(),t._v(" "),98==t.is_update?i("div",{staticStyle:{color:"red","fonr-weight":"800","line-height":"50px"}},[t._v("\n        "+t._s(t.error_msg)+"\n      ")]):t._e(),t._v(" "),1==t.is_update&&1==t.is_update_type?i("div",{staticStyle:{"overflow-y":"scroll",height:"700px"}},[i("div",{staticStyle:{color:"red","fonr-weight":"800","line-height":"50px"}},[t._v("\n          更新之前请注意数据备份!\n        ")]),t._v(" "),i("div",[t._v("更新文件(选中则不更新文件):")]),t._v(" "),i("div",{staticStyle:{"padding-top":"20px"}},t._l(t.files,function(e,n){return i("div",{staticStyle:{"line-height":"30px"}},[i("el-checkbox",{attrs:{"true-label":1,"false-label":0},model:{value:e.is_choose,callback:function(i){t.$set(e,"is_choose",t._n(i))},expression:"item.is_choose"}}),t._v("\n            "+t._s(e.path)+"\n          ")],1)}))]):t._e(),t._v(" "),1==t.is_update&&2==t.is_update_type?i("div",[t._v("\n        当前版本号："),i("span",{staticStyle:{color:"red","fonr-weight":"900","line-height":"50px"}},[t._v(t._s(t.version))])]):t._e()]],2),t._v(" "),1==t.is_update?i("el-col",{staticStyle:{"padding-left":"30px","overflow-y":"scroll",height:"700px"},attrs:{span:12}},[1===t.is_update_type?i("el-button",{attrs:{type:"success",icon:"el-icon-download",loading:1===t.is_show_progress},on:{click:function(e){t.upgrade()}}},[t._v("立即升级")]):t._e(),t._v(" "),2===t.is_update_type?i("el-button",{attrs:{type:"success",icon:"el-icon-download",loading:1===t.is_show_progress},on:{click:function(e){t.upgradeFront()}}},[t._v("立即升级")]):t._e(),t._v(" "),1===t.is_show_progress?i("div",{staticStyle:{display:"inline-block","padding-left":"10px",color:"#999"}},[1===t.is_show_progress_type?i("div",[t._v("\n        后台文件已更新\n        "),i("span",{staticStyle:{color:"red","font-weight":"900"}},[t._v("\n          "+t._s(t.updated_file)+"\n        ")]),t._v("\n        个文件 / 共\n        "),i("span",{staticStyle:{color:"red","font-weight":"900"}},[t._v("\n          "+t._s(t.total_file)+" ")]),t._v("个文件！\n      ")]):t._e(),t._v(" "),2===t.is_show_progress_type?i("div",[t._v("\n        前端文件正在下载更新\n      ")]):t._e(),t._v(" "),3===t.is_show_progress_type?i("div",[t._v("\n        更新完成\n      ")]):t._e(),t._v(" "),4===t.is_show_progress_type?i("div",[t._v("\n        网络请求超时\n      ")]):t._e()]):t._e(),t._v(" "),i("div",{staticStyle:{padding:"30px 0"}},[t._v("\n      最新版本号：\n      "),2===t.is_update_type?i("span",{staticStyle:{color:"red","font-weight":"900"}},[t._v(t._s(t.new_version))]):t._e(),t._v(" "),1===t.is_update_type?i("span",{staticStyle:{color:"red","font-weight":"900"}},[t._v(t._s(t.version))]):t._e()]),t._v(" "),i("div",{staticStyle:{"font-size":"14px",color:"#666"}},[t._v("版本说明：")]),t._v(" "),i("div",{staticStyle:{padding:"30px 0 10px 15px",color:"#333","font-size":"15px","line-height":"24px"}},t._l(t.log,function(e,n){return i("div",{staticClass:"version-box"},[i("div",{staticClass:"version-radius"}),t._v(" "),i("div",{staticClass:"version-margin-left"},[i("div",{staticClass:"version-num"},[t._v(t._s(e.title))]),t._v(" "),i("div",{staticClass:"version-margin-bottom"},[i("span",{staticClass:"version-time"},[t._v(t._s(e.created_at))])]),t._v(" "),i("div",{staticStyle:{"padding-bottom":"30px"}},t._l(e.content,function(e,n){return i("div",[t._v("\n              "+t._s(e)+"\n            ")])}))])])}))],1):t._e()],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"right-head"},[e("div",{staticClass:"right-head-con1"},[this._v("系统升级")])])}],!1,null,null,null);o.options.__file="index.vue";e.default=o.exports},klGe:function(t,e,i){},sbOL:function(t,e,i){"use strict";var n=i("klGe");i.n(n).a},wn0B:function(t,e,i){"use strict";var n=i("ZQDA");i.n(n).a}}]);