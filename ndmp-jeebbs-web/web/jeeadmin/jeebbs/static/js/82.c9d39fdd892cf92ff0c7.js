webpackJsonp([82],{594:function(e,t,s){function i(e){s(842)}var a=s(66)(s(688),s(929),i,null,null);e.exports=a.exports},688:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(228);t.default={data:function(){return{fileState:!0,dialogVisible:!1,loading:!0,count:0,state:!1,imgPath:"",rootId:0,upobj:{type:"image",sessionKey:localStorage.getItem("sessionKey"),appId:this.$store.state.appId},advertisingSpaceInfo:{},rules:{name:[{required:!0,message:"请填写一个广告版块名字",trigger:"blur"}],priority:[{required:!0,type:"number",message:"请填写一个数字排序",trigger:"blur"}]}}},methods:{showBig:function(){this.dialogVisible=!0},getAdvertisingSpaceInfo:function(e){var t=this;i.L({id:e}).then(function(e){"100"==e.code?(t.loading=!1,t.advertisingSpaceInfo=e.body,""==t.advertisingSpaceInfo.previewImg?t.state=!0:(t.imgPath=e.body.previewImg,t.state=!1)):(t.loading=!1,t.$message.error(e.message))}).catch(function(e){t.loading=!1,t.$message.error("网络异常")})},updateAdvertisingSpaceInfo:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;var s=t.advertisingSpaceInfo;i.M(s).then(function(e){"100"==e.code?(t.$message.success("修改成功"),setTimeout(function(){t.$router.push({path:"/advertisingspacelist"})},1e3)):t.$message.error(e.message)}).catch(function(e){t.$message.error("修改失败")})})},addAdvertisingSpaceInfo:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;var s=t.advertisingSpaceInfo;i.N(s).then(function(e){"100"==e.code?(t.$message.success("添加成功"),setTimeout(function(){t.$router.push({path:"/advertisingspacelist"})},1e3)):t.$message.error(e.message)}).catch(function(e){t.$message.error("添加异常")})})},back:function(){this.$router.push({path:"/advertisingspacelist"})},beforeAvatarUpload:function(e){this.fileState=!0;var t="image/jpeg"===e.type||"image/png"===e.type||"image/gif"===e.type,s=e.size/1024/1024<2;return t||this.$message.error("上传头像图片只能是 JPG 格式!"),s||this.$message.error("上传头像图片大小不能超过2MB!"),t&&s},getImgpreviewImg:function(e,t,s){this.imgPath=e.body.url,this.state=!1,this.fileState=!1,this.advertisingSpaceInfo.previewImg=e.body.url},resetForm:function(e){this.$route.query.id;this.$refs[e].resetFields()}},created:function(){var e=this.$route.query.type,t=this.$route.query.id;"add"==e?this.getAdvertisingSpaceInfo(t):"edit"==e&&this.getAdvertisingSpaceInfo(t)},watch:{$route:function(e,t){var s=this.$route.query.id;this.loading=!0,this.getAdvertisingSpaceInfo(s)}}}},756:function(e,t,s){t=e.exports=s(570)(!1),t.push([e.i,"",""])},842:function(e,t,s){var i=s(756);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);s(571)("32f53cf4",i,!0)},929:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"forum-module"},[s("div",{staticClass:"forum-header"},[s("span",{staticClass:"forum-name"},[e._v(e._s(e.$route.name))])]),e._v(" "),s("div",{directives:[{name:"loading",rawName:"v-loading.body",value:e.loading,expression:"loading",modifiers:{body:!0}}],staticClass:"table-body table-responsive"},[s("el-form",{ref:"topicInfo",attrs:{rules:e.rules,model:e.advertisingSpaceInfo}},[s("el-form-item",{staticClass:"form-group",attrs:{label:"广告版块名称",prop:"name"}},[s("el-col",{attrs:{span:6}},[s("el-input",{model:{value:e.advertisingSpaceInfo.name,callback:function(t){e.$set(e.advertisingSpaceInfo,"name",t)},expression:"advertisingSpaceInfo.name"}})],1),e._v(" "),s("el-col",{staticClass:"required",attrs:{span:1}},[e._v("* ")])],1),e._v(" "),s("el-form-item",{staticClass:"form-group",attrs:{label:"描述"}},[s("el-col",{attrs:{span:6}},[s("el-input",{attrs:{type:"textarea"},model:{value:e.advertisingSpaceInfo.description,callback:function(t){e.$set(e.advertisingSpaceInfo,"description",t)},expression:"advertisingSpaceInfo.description"}})],1)],1),e._v(" "),s("el-form-item",{staticClass:"form-group",attrs:{label:"图片地址"}},[s("el-col",{attrs:{span:6}},[s("el-input",{model:{value:e.advertisingSpaceInfo.previewImg,callback:function(t){e.$set(e.advertisingSpaceInfo,"previewImg",t)},expression:"advertisingSpaceInfo.previewImg"}}),e._v(" "),s("div",{class:e.state?"pic-box":"pic-box-no"},[e.state?e._e():s("img",{attrs:{src:e.$store.state.baseUrl+e.imgPath,alt:""},on:{click:e.showBig}})])],1),e._v(" "),s("el-col",{attrs:{span:6}},[s("el-upload",{staticClass:"upload-demo",attrs:{action:e.$store.state.upLoadUrl,name:"uploadFile",data:e.upobj,"before-upload":e.beforeAvatarUpload,"on-success":e.getImgpreviewImg,"show-file-list":e.fileState}},[s("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"}},[e._v("点击上传")])],1),e._v(" "),s("el-dialog",{staticClass:"pic-dialog",attrs:{title:"按下esc退出全屏",size:"full"},model:{value:e.dialogVisible,callback:function(t){e.dialogVisible=t},expression:"dialogVisible"}},[s("img",{staticClass:"big-img",attrs:{src:e.$store.state.baseUrl+e.imgPath,alt:""}})])],1)],1),e._v(" "),s("el-form-item",{staticClass:"form-group",attrs:{label:"是否启用"}},[s("el-col",{attrs:{span:1}},[s("el-switch",{attrs:{"on-text":"是","off-text":"否"},model:{value:e.advertisingSpaceInfo.enabled,callback:function(t){e.$set(e.advertisingSpaceInfo,"enabled",t)},expression:"advertisingSpaceInfo.enabled"}})],1)],1)],1),e._v(" "),s("div",{staticClass:"margin-md"},["edit"==e.$route.query.type?s("input",{staticClass:"bbs-submit",attrs:{type:"button",value:"提交"},on:{click:function(t){e.updateAdvertisingSpaceInfo("topicInfo")}}}):e._e(),e._v(" "),"add"==e.$route.query.type?s("input",{staticClass:"bbs-submit",attrs:{type:"button",value:"提交"},on:{click:function(t){e.addAdvertisingSpaceInfo("topicInfo")}}}):e._e(),e._v(" "),s("input",{staticClass:"bbs-reset",attrs:{type:"reset",value:"重置"}})])],1)])},staticRenderFns:[]}}});