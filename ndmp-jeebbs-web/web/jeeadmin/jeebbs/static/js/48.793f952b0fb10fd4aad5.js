webpackJsonp([48],{590:function(t,a,e){function r(t){e(894)}var s=e(66)(e(684),e(981),r,null,null);t.exports=s.exports},663:function(t,a,e){"use strict";function r(t){return e.i(y.a)({url:"/api/admin/resource/tree",method:"post",data:t})}function s(t){return e.i(y.a)({url:"/api/admin/resource/list",method:"post",data:t})}function i(t){return e.i(y.a)({url:"/api/admin/template/list",method:"post",data:t})}function n(t){return e.i(y.a)({url:"/api/admin/resource/get",method:"post",data:t})}function o(t){return e.i(y.a)({url:"/api/admin/template/get",method:"post",data:t})}function u(t){return e.i(y.a)({url:"/api/admin/resource/delete",method:"post",signValidate:!0,data:t})}function l(t){return e.i(y.a)({url:"/api/admin/template/delete",method:"post",signValidate:!0,data:t})}function m(t){return e.i(y.a)({url:"api/admin/resource/dir_save",method:"post",signValidate:!0,data:t})}function p(t){return e.i(y.a)({url:"api/admin/template/dir_save",method:"post",signValidate:!0,data:t})}function d(t){return e.i(y.a)({url:"/api/admin/resource/rename",method:"post",signValidate:!0,data:t})}function c(t){return e.i(y.a)({url:"/api/admin/template/rename",method:"post",signValidate:!0,data:t})}function f(t){return e.i(y.a)({url:"/api/admin/template/update",method:"post",signValidate:!0,data:t})}function h(t){return e.i(y.a)({url:"/api/admin/resource/save",method:"post",signValidate:!0,data:t})}function v(t){return e.i(y.a)({url:"/api/admin/template/save",method:"post",signValidate:!0,data:t})}function g(t){return e.i(y.a)({url:"/api/admin/template/tree",method:"post",data:t})}function _(t){return e.i(y.a)({url:"/api/admin/template/getSolutions",method:"post",data:t})}function b(t){return e.i(y.a)({url:"/api/admin/template/solutionupdate",method:"post",signValidate:!0,data:t})}a.q=r,a.n=s,a.g=i,a.l=n,a.d=o,a.p=u,a.i=l,a.o=m,a.h=p,a.k=d,a.c=c,a.e=f,a.m=h,a.f=v,a.j=g,a.a=_,a.b=b;var y=e(152),$=e(101);e.n($)},684:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=e(663);a.default={data:function(){return{loading:!0,rules:{distName:[{required:!0,message:"此项必填",trigger:"blur"}]},params:{origName:"",distName:"",root:""}}},methods:{reName:function(t){var a=this;this.$refs[t].validate(function(t){if(document.querySelector("#main").scrollTop=0,!t)return document.querySelector("#main").scrollTop=0,!1;var e=a.params;r.c(e).then(function(t){a.loading=!1,"100"==t.code?(a.$message.success("修改成功"),a.$router.push({path:"/templatelist",query:{name:a.params.root}})):(a.$message.error(t.message),a.$router.push({path:"/templatelist",query:{name:a.params.root}}))}).catch(function(t){a.loading=!1,a.$message.error("修改失败"),a.$router.push({path:"/templatelist",query:{name:a.params.root}})})})},back:function(){this.$router.push({path:"/templatelist",query:{name:this.params.root}})}},created:function(){var t=this.$route.query.name,a=this.$route.query.root;this.params.origName=t,this.params.distName=t,this.params.root=a}}},808:function(t,a,e){a=t.exports=e(572)(!1),a.push([t.i,"",""])},894:function(t,a,e){var r=e(808);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);e(573)("7e0be784",r,!0)},981:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"forum-module"},[e("div",{staticClass:"forum-header"},[e("span",{staticClass:"forum-name"},[t._v(t._s(t.$route.name))])]),t._v(" "),e("div",{staticClass:"table-body table-responsive"},[e("el-form",{ref:"topicInfo",attrs:{model:t.params,rules:t.rules}},[e("el-form-item",{staticClass:"form-group",attrs:{label:"原名称"}},[e("el-col",{attrs:{span:6}},[t._v("\n                    "+t._s(t.params.origName)+"\n                ")]),t._v(" "),e("el-col",{staticClass:"required",attrs:{span:1}},[t._v("*")]),t._v(" "),e("el-col",{attrs:{span:7}})],1),t._v(" "),e("el-form-item",{staticClass:"form-group",attrs:{label:"新名称",prop:"distName"}},[e("el-col",{attrs:{span:6}},[e("el-input",{model:{value:t.params.distName,callback:function(a){t.$set(t.params,"distName",a)},expression:"params.distName"}})],1),t._v(" "),e("el-col",{staticClass:"required",attrs:{span:1}},[t._v("  ")]),t._v(" "),e("el-col",{attrs:{span:7}})],1)],1),t._v(" "),e("div",{staticClass:"margin-md"},[e("input",{staticClass:"bbs-submit",attrs:{type:"button",value:"提交"},on:{click:function(a){t.reName("topicInfo")}}}),t._v(" "),e("input",{staticClass:"bbs-reset",attrs:{type:"reset",value:"重置"}})])],1)])},staticRenderFns:[]}}});