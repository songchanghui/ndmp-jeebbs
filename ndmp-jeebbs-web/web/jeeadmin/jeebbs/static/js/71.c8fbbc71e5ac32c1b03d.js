webpackJsonp([71],{1006:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"forum-module"},[s("div",{staticClass:"forum-header"},[s("span",{staticClass:"forum-name tab-name ",on:{click:e.liveLink}},[e._v("直播管理")]),e._v(" "),s("span",{staticClass:"forum-name tab-name",on:{click:e.hostsLink}},[e._v("主播管理")]),e._v(" "),s("span",{staticClass:"forum-name tab-name active"},[e._v("直播配置")])]),e._v(" "),s("div",{directives:[{name:"loading",rawName:"v-loading.body",value:e.loading,expression:"loading",modifiers:{body:!0}}],staticClass:"table-body table-responsive"},[s("el-form",{ref:"topicInfo",attrs:{model:e.systemInfo,rules:e.rules}},[s("el-form-item",{staticClass:"form-group",attrs:{label:"直播是否需要审核",prop:""}},[s("el-col",{attrs:{span:6}},[s("el-switch",{attrs:{"on-text":"是","off-text":"否"},model:{value:e.systemInfo.liveCheck,callback:function(t){e.$set(e.systemInfo,"liveCheck",t)},expression:"systemInfo.liveCheck"}})],1),e._v(" "),s("el-col",{staticClass:"required",attrs:{span:1}},[e._v("  ")]),e._v(" "),s("el-col",{attrs:{span:7}})],1),e._v(" "),s("el-form-item",{staticClass:"form-group",attrs:{label:"直播平台",prop:""}},[s("el-col",{attrs:{span:6}},[s("el-radio-group",{model:{value:e.systemInfo.livePlat,callback:function(t){e.$set(e.systemInfo,"livePlat",t)},expression:"systemInfo.livePlat"}},[s("el-radio",{attrs:{label:"tencent"}},[e._v("腾讯云")]),e._v(" "),s("el-radio",{attrs:{label:"baidu"}},[e._v("百度云")])],1)],1),e._v(" "),s("el-col",{staticClass:"required",attrs:{span:1}},[e._v("  ")]),e._v(" "),s("el-col",{attrs:{span:7}})],1),e._v(" "),s("el-form-item",{staticClass:"form-group",attrs:{label:"推流key",prop:""}},[s("el-col",{attrs:{span:6}},[s("el-input",{model:{value:e.params.tencentPushFlowKey,callback:function(t){e.$set(e.params,"tencentPushFlowKey",t)},expression:"params.tencentPushFlowKey"}})],1),e._v(" "),s("el-col",{attrs:{span:1}},[e._v("  ")]),e._v(" "),s("el-col",{staticClass:"gray",attrs:{span:7}},[e._v("不修改请留空")])],1),e._v(" "),s("el-form-item",{staticClass:"form-group",attrs:{label:"腾讯直播码",prop:""}},[s("el-col",{attrs:{span:6}},[s("el-input",{model:{value:e.params.tencentBizId,callback:function(t){e.$set(e.params,"tencentBizId",t)},expression:"params.tencentBizId"}})],1),e._v(" "),s("el-col",{staticClass:"required",attrs:{span:1}},[e._v("  ")]),e._v(" "),s("el-col",{staticClass:"gray",attrs:{span:7}},[e._v("不修改请留空")])],1),e._v(" "),s("el-form-item",{staticClass:"form-group",attrs:{label:"Api鉴权KEY",prop:""}},[s("el-col",{attrs:{span:6}},[s("el-input",{model:{value:e.params.tencentApiAuthKey,callback:function(t){e.$set(e.params,"tencentApiAuthKey",t)},expression:"params.tencentApiAuthKey"}})],1),e._v(" "),s("el-col",{staticClass:"required",attrs:{span:1}},[e._v("  ")]),e._v(" "),s("el-col",{staticClass:"gray",attrs:{span:7}},[e._v("不修改请留空")])],1),e._v(" "),s("el-form-item",{staticClass:"form-group",attrs:{label:"腾讯直播APPId",prop:""}},[s("el-col",{attrs:{span:6}},[s("el-input",{model:{value:e.params.tencentAppId,callback:function(t){e.$set(e.params,"tencentAppId",t)},expression:"params.tencentAppId"}})],1),e._v(" "),s("el-col",{staticClass:"required",attrs:{span:1}},[e._v("  ")]),e._v(" "),s("el-col",{staticClass:"gray",attrs:{span:7}},[e._v("不修改请留空")])],1),e._v(" "),s("el-form-item",{staticClass:"form-group",attrs:{label:"百度云直播推流域名",prop:""}},[s("el-col",{attrs:{span:6}},[s("el-input",{model:{value:e.systemInfo.baiduPushDomain,callback:function(t){e.$set(e.systemInfo,"baiduPushDomain",t)},expression:"systemInfo.baiduPushDomain"}})],1),e._v(" "),s("el-col",{staticClass:"required",attrs:{span:1}},[e._v("  ")]),e._v(" "),s("el-col",{attrs:{span:7}})],1),e._v(" "),s("el-form-item",{staticClass:"form-group",attrs:{label:"百度云直播播放域名",prop:""}},[s("el-col",{attrs:{span:6}},[s("el-input",{model:{value:e.systemInfo.baiduPlayDomain,callback:function(t){e.$set(e.systemInfo,"baiduPlayDomain",t)},expression:"systemInfo.baiduPlayDomain"}})],1),e._v(" "),s("el-col",{staticClass:"required",attrs:{span:1}},[e._v("  ")]),e._v(" "),s("el-col",{attrs:{span:7}})],1),e._v(" "),s("el-form-item",{staticClass:"form-group",attrs:{label:"百度云直播AccessKey ID",prop:""}},[s("el-col",{attrs:{span:6}},[s("el-input",{model:{value:e.params.accessKeyId,callback:function(t){e.$set(e.params,"accessKeyId",t)},expression:"params.accessKeyId"}})],1),e._v(" "),s("el-col",{staticClass:"required",attrs:{span:1}},[e._v("  ")]),e._v(" "),s("el-col",{staticClass:"gray",attrs:{span:7}},[e._v("不修改请留空")])],1),e._v(" "),s("el-form-item",{staticClass:"form-group",attrs:{label:"百度云直播SecretAccessKey",prop:""}},[s("el-col",{attrs:{span:6}},[s("el-input",{model:{value:e.params.accessKey,callback:function(t){e.$set(e.params,"accessKey",t)},expression:"params.accessKey"}})],1),e._v(" "),s("el-col",{staticClass:"required",attrs:{span:1}},[e._v("  ")]),e._v(" "),s("el-col",{staticClass:"gray",attrs:{span:7}},[e._v("不修改请留空")])],1),e._v(" "),s("el-form-item",{staticClass:"form-group",attrs:{label:"百度云直播安全策略密钥",prop:""}},[s("el-col",{attrs:{span:6}},[s("el-input",{model:{value:e.params.streamSafeKey,callback:function(t){e.$set(e.params,"streamSafeKey",t)},expression:"params.streamSafeKey"}})],1),e._v(" "),s("el-col",{staticClass:"required",attrs:{span:1}},[e._v("  ")]),e._v(" "),s("el-col",{staticClass:"gray",attrs:{span:7}},[e._v("不修改请留空")])],1)],1),e._v(" "),s("div",{staticClass:"margin-md"},[s("input",{staticClass:"bbs-submit",attrs:{type:"button",value:"提交"},on:{click:function(t){e.updateChargeInfo("topicInfo")}}}),e._v(" "),s("input",{staticClass:"bbs-reset",attrs:{type:"reset",value:"重置"}})])],1)])},staticRenderFns:[]}},605:function(e,t,s){function a(e){s(919)}var r=s(66)(s(699),s(1006),a,"data-v-c1ea1eae",null);e.exports=r.exports},699:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(228);t.default={data:function(){return{loading:!0,systemInfo:{},groupList:[],addList:[],params:{tencentPushFlowKey:"",tencentBizId:"",tencentApiAuthKey:"",tencentAppId:"",accessKeyId:"",accessKey:"",streamSafeKey:""},rules:{weixinAppId:[{required:!0,message:"此项必填",trigger:"blur"}],weixinAccount:[{required:!0,smessage:"此项必填",trigger:"blur"}],rewardMin:[{required:!0,type:"number",message:"请输入一个数字",trigger:"blur"}],rewardMax:[{required:!0,type:"number",message:"请输入一个数字",trigger:"blur"}],chargeRatio:[{required:!0,type:"number",message:"请输入一个数字",trigger:"blur"}],minDrawAmount:[{required:!0,type:"number",message:"请输入一个数字",trigger:"blur"}],giftChargeRatio:[{required:!0,type:"number",message:"请输入一个数字",trigger:"blur"}]}}},methods:{getLiveConfigInfo:function(){var e=this;a.l().then(function(t){"100"==t.code?(e.loading=!1,e.systemInfo=t.body):(e.loading=!1,e.$message.error(t.message))}).catch(function(t){e.loading=!1,e.$message.error("网络异常")})},updateChargeInfo:function(e){var t=this;this.$refs[e].validate(function(e){if(document.querySelector("#main").scrollTop=0,!e)return document.querySelector("#main").scrollTop=0,!1;t.systemInfo.tencentPushFlowKey=t.params.tencentPushFlowKe,t.systemInfo.tencentBizId=t.params.tencentBizId,t.systemInfo.tencentApiAuthKey=t.params.tencentApiAuthKey,t.systemInfo.tencentAppId=t.params.tencentApiAuthKey,t.systemInfo.accessKeyId=t.params.accessKeyId,t.systemInfo.accessKey=t.params.accessKey,t.systemInfo.streamSafeKey=t.params.streamSafeKey;var s=t.systemInfo;a.m(s).then(function(e){"100"==e.code?(t.$message.success("修改成功"),t.getLiveConfigInfo()):t.$message.error(e.message)}).catch(function(e){t.$message.error("修改失败")})})},hostsLink:function(){this.$router.push({path:"/hostlist",query:{noceStr:Math.round(10*Math.random())}})},liveLink:function(){this.$router.push({path:"/livelist",query:{noceStr:Math.round(10*Math.random())}})},back:function(){this.$router.push({path:"/livelist",query:{noceStr:Math.round(10*Math.random())}})}},created:function(){this.loading=!0,this.getLiveConfigInfo()},watch:{$route:function(e,t){this.loading=!0,this.getLiveConfigInfo()}}}},833:function(e,t,s){t=e.exports=s(570)(!1),t.push([e.i,".mb10[data-v-c1ea1eae]{margin-bottom:10px}",""])},919:function(e,t,s){var a=s(833);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);s(571)("5a06b5c3",a,!0)}});