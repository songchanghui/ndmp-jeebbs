webpackJsonp([26],{645:function(e,t,a){function s(e){a(862)}var r=a(66)(a(739),a(949),s,null,null);e.exports=r.exports},660:function(e,t,a){"use strict";function s(e){return a.i(w.a)({url:"/api/admin/group/list",method:"post",signValidate:!1,data:e})}function r(e){return a.i(w.a)({url:"/api/admin/group/delete",method:"post",signValidate:!0,data:e})}function n(e){return a.i(w.a)({url:"/api/admin/group/get",method:"post",signValidate:!1,data:e})}function o(e){return a.i(w.a)({url:"/api/admin/group/update",method:"post",signValidate:!0,data:e})}function i(e){return a.i(w.a)({url:"/api/admin/group/save",method:"post",signValidate:!0,data:e})}function l(e){return a.i(w.a)({url:"/api/admin/user/list",method:"post",signValidate:!1,data:e})}function u(e){return a.i(w.a)({url:"/api/admin/user/official_list",method:"post",signValidate:!1,data:e})}function d(e){return a.i(w.a)({url:"/api/admin/user/get",method:"post",signValidate:!1,data:e})}function c(e){return a.i(w.a)({url:"/api/admin/user/update",method:"post",signValidate:!0,data:e})}function f(e){return a.i(w.a)({url:"/api/admin/user/save",method:"post",signValidate:!0,data:e})}function p(e){return a.i(w.a)({url:"/api/admin/user/delete",method:"post",signValidate:!0,data:e})}function m(e){return a.i(w.a)({url:"/api/admin/admin/list",method:"post",signValidate:!1,data:e})}function g(e){return a.i(w.a)({url:"/api/admin/admin/update",method:"post",signValidate:!0,data:e})}function v(e){return a.i(w.a)({url:"/api/admin/admin/save",method:"post",signValidate:!0,data:e})}function h(e){return a.i(w.a)({url:"/api/admin/role/list",method:"post",signValidate:!1,data:e})}function I(e){return a.i(w.a)({url:"/api/admin/role/delete",method:"post",signValidate:!0,data:e})}function b(e){return a.i(w.a)({url:"/api/admin/role/get",method:"post",signValidate:!1,data:e})}function _(e){return a.i(w.a)({url:"/api/admin/role/update",method:"post",signValidate:!0,data:e})}function y(e){return a.i(w.a)({url:"/api/admin/role/save",method:"post",signValidate:!0,data:e})}function k(e){return a.i(w.a)({url:"/api/admin/account/list",method:"post",signValidate:!0,data:e})}function $(e){return a.i(w.a)({url:"/api/admin/account/delete",method:"post",signValidate:!0,data:e})}function x(e){return a.i(w.a)({url:"/api/admin/message/sys_list",method:"post",signValidate:!0,data:e})}function C(e){return a.i(w.a)({url:"/api/admin/message/delete",method:"post",signValidate:!0,data:e})}function V(e){return a.i(w.a)({url:"/api/admin/message/sendSys",method:"post",signValidate:!0,data:e})}t.a=s,t.x=r,t.u=n,t.v=o,t.w=i,t.t=l,t.o=u,t.l=d,t.m=c,t.n=f,t.p=p,t.s=m,t.q=g,t.r=v,t.j=h,t.k=I,t.g=b,t.h=_,t.i=y,t.e=k,t.f=$,t.c=x,t.d=C,t.b=V;var w=a(152),q=a(101);a.n(q)},739:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(660),r=a(67),n=a(74);t.default={data:function(){var e=this,t=function(t,a,s){""===a?s():(""!==e.userInfo.checkPass&&e.$refs.userInfo.validateField("checkPass"),s())},a=function(t,a,s){""===a?s():a!==e.userInfo.password?s(new Error("两次输入密码不一致!")):s()};return{loading:!0,sex:{man:!0,woman:!1,other:""},userInfo:{password:"",checkPass:""},adminInfo:{},groupList:[],roleList:[],roleIds:[],rules:{},rulesList:{rank:[{validator:function(t,a,s){""===a?s(new Error("请输入等级")):a>e.adminInfo.rank?s(new Error("等级不能超过当前用户等级，当前用户等级为："+e.adminInfo.rank)):s()},trigger:"blur"}],groupId:[{type:"number",required:!0,message:"请选择一个会员组",trigger:"change"}],email:[{validator:function(e,t,a){""===t?a():/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(t)?a():a(new Error("请输入正确的邮箱地址"))},trigger:"blur"}],password:[{validator:t,trigger:"blur"}],checkPass:[{validator:a,trigger:"blur"}]}}},methods:{getAdminInfo:function(){var e=this;r.d({username:localStorage.getItem("userName"),nonce_str:a.i(n.a)()}).then(function(t){e.adminInfo=t.body})},getRoleList:function(){var e=this;s.j().then(function(t){e.roleList=t.body})},setRoleIds:function(e){this.userInfo.roleIds=this.roleIds.join(",")},getuserGroupList:function(){var e=this;s.a({groupType:-1}).then(function(t){e.groupList=t.body})},getUserInfo:function(e){var t=this;s.l({id:e}).then(function(e){if("100"==e.code){t.userInfo=e.body,t.userInfo.password="",t.userInfo.checkPass="";var a=e.body.roleIds.split(",");t.roleIds=t.arrChange(a),"add"==t.$route.query.type&&(t.userInfo.groupId=1),t.loading=!1}else t.$message.error(e.message),t.loading=!1}).catch(function(e){t.$message.error("网络异常"),t.loading=!1})},arrChange:function(e){for(var t=[],a=0;a<e.length;a++)t.push(parseInt(e[a]));return t},updateAdminInfo:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;var a=t.userInfo;s.q(a).then(function(e){"100"==e.code?(t.$message.success("修改成功"),setTimeout(function(){t.$router.push({path:"/adminlist"})},500)):t.$message.error(e.message)}).catch(function(e){t.$message.error("修改失败")})})},addAdminInfo:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;var a=t.userInfo;s.r(a).then(function(e){"100"==e.code?(t.$message.success("添加成功"),setTimeout(function(){t.$router.push({path:"/adminlist"})},500)):t.$message.error(e.message)}).catch(function(e){t.$message.error("修改失败")})})},resetForm:function(e){this.$route.query.id;this.$refs[e].resetFields()},formatDate:function(e){this.userInfo.birthday=e}},created:function(){var e=this.$route.query.type,t=this.$route.query.id;this.getAdminInfo(),this.getuserGroupList(),this.getRoleList(),"add"==e?(this.getUserInfo(t),this.rules=this.rulesList):"edit"==e&&(this.getUserInfo(t),this.rules=this.rulesList)}}},776:function(e,t,a){t=e.exports=a(572)(!1),t.push([e.i,".el-checkbox-group>label{display:inline-block;margin-right:12px}",""])},862:function(e,t,a){var s=a(776);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a(573)("3eed00bc",s,!0)},949:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading.body",value:e.loading,expression:"loading",modifiers:{body:!0}}],staticClass:"forum-module"},[a("div",{staticClass:"forum-header"},[a("span",{staticClass:"forum-name"},[e._v(e._s(e.$route.name))]),e._v(" "),a("span",{staticClass:"forum-hint"},[e._v('带"*"号的为必填项')])]),e._v(" "),a("div",{staticClass:"table-body table-responsive"},[a("el-form",{ref:"userInfo",attrs:{rules:e.rules,model:e.userInfo}},[a("el-form-item",{staticClass:"form-group",attrs:{label:"用户名"}},[a("el-col",{attrs:{span:6}},["add"==e.$route.query.type?a("el-input",{model:{value:e.userInfo.username,callback:function(t){e.$set(e.userInfo,"username",t)},expression:"userInfo.username"}}):a("label",[e._v(e._s(e.userInfo.username))])],1),e._v(" "),"add"==e.$route.query.type?a("el-col",{staticClass:"required",attrs:{span:1}},[e._v("* ")]):e._e()],1),e._v(" "),a("el-form-item",{staticClass:"form-group",attrs:{label:"电子邮件",prop:"email"}},[a("el-col",{attrs:{span:6}},[a("el-input",{model:{value:e.userInfo.email,callback:function(t){e.$set(e.userInfo,"email",t)},expression:"userInfo.email"}})],1)],1),e._v(" "),a("el-form-item",{staticClass:"form-group",attrs:{label:"密码",prop:"password"}},[a("el-col",{attrs:{span:6}},[a("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:e.userInfo.password,callback:function(t){e.$set(e.userInfo,"password",t)},expression:"userInfo.password"}})],1),e._v(" "),a("el-col",{staticClass:"required",attrs:{span:1}},[e._v(" ")]),e._v(" "),a("el-col",{staticClass:"gray",attrs:{span:10}},[e._v("不修改请留空")])],1),e._v(" "),a("el-form-item",{staticClass:"form-group",attrs:{label:"重复密码",prop:"checkPass"}},[a("el-col",{attrs:{span:6}},[a("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:e.userInfo.checkPass,callback:function(t){e.$set(e.userInfo,"checkPass",t)},expression:"userInfo.checkPass"}})],1),e._v(" "),a("el-col",{staticClass:"required",attrs:{span:1}},[e._v(" ")]),e._v(" "),a("el-col",{staticClass:"gray",attrs:{span:10}},[e._v(" 不修改请留空")])],1),e._v(" "),a("el-form-item",{staticClass:"form-group",attrs:{label:"会员组",prop:"groupId"}},[a("el-col",{attrs:{span:6}},[a("el-select",{attrs:{placeholder:"用户组"},model:{value:e.userInfo.groupId,callback:function(t){e.$set(e.userInfo,"groupId",t)},expression:"userInfo.groupId"}},e._l(e.groupList,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),a("el-col",{staticClass:"required",attrs:{span:1}},[e._v("*")])],1),e._v(" "),a("el-form-item",{staticClass:"form-group",attrs:{label:"等级",prop:"rank",required:!0}},[a("el-col",{attrs:{span:6}},[a("el-input",{attrs:{type:"number",max:e.userInfo.rank,min:1},model:{value:e.userInfo.rank,callback:function(t){e.$set(e.userInfo,"rank",e._n(t))},expression:"userInfo.rank"}})],1),e._v(" "),a("el-col",{staticClass:"required",attrs:{span:1}},[e._v("*")]),e._v(" "),a("el-col",{staticClass:"gray",attrs:{span:10}},[e._v("越大等级越高")])],1),e._v(" "),a("el-form-item",{staticClass:"form-group",attrs:{label:"是否禁用"}},[a("el-col",{attrs:{span:1}},[a("el-switch",{attrs:{"on-text":"是","off-text":"否"},model:{value:e.userInfo.disabled,callback:function(t){e.$set(e.userInfo,"disabled",t)},expression:"userInfo.disabled"}})],1)],1),e._v(" "),a("el-form-item",{staticClass:"form-group",attrs:{label:"是否为只读管理员"}},[a("el-col",{attrs:{span:1}},[a("el-switch",{attrs:{"on-text":"是","off-text":"否"},model:{value:e.userInfo.readOnly,callback:function(t){e.$set(e.userInfo,"readOnly",t)},expression:"userInfo.readOnly"}})],1)],1),e._v(" "),a("el-form-item",{staticClass:"form-group",attrs:{label:"真实姓名",prop:"realname"}},[a("el-col",{attrs:{span:6}},[a("el-input",{model:{value:e.userInfo.realname,callback:function(t){e.$set(e.userInfo,"realname",t)},expression:"userInfo.realname"}})],1)],1),e._v(" "),a("el-form-item",{staticClass:"form-group",attrs:{label:"性别",prop:"gender"}},[a("el-col",{attrs:{span:8}},[a("el-radio",{staticClass:"radio",attrs:{label:e.sex.man},model:{value:e.userInfo.gender,callback:function(t){e.$set(e.userInfo,"gender",t)},expression:"userInfo.gender"}},[e._v("男")]),e._v(" "),a("el-radio",{staticClass:"radio",attrs:{label:e.sex.woman},model:{value:e.userInfo.gender,callback:function(t){e.$set(e.userInfo,"gender",t)},expression:"userInfo.gender"}},[e._v("女")]),e._v(" "),a("el-radio",{staticClass:"radio",attrs:{label:e.sex.other},model:{value:e.userInfo.gender,callback:function(t){e.$set(e.userInfo,"gender",t)},expression:"userInfo.gender"}},[e._v("保密")])],1)],1),e._v(" "),a("el-form-item",{staticClass:"form-group",attrs:{label:"角色",prop:"birth"}},[a("el-col",{attrs:{span:8}},[a("el-checkbox-group",{on:{change:e.setRoleIds},model:{value:e.roleIds,callback:function(t){e.roleIds=t},expression:"roleIds"}},e._l(e.roleList,function(t,s){return a("el-checkbox",{key:t.id,attrs:{label:t.id}},[e._v(e._s(t.name))])}))],1)],1)],1),e._v(" "),a("div",{staticClass:"margin-md"},["edit"==e.$route.query.type?a("input",{staticClass:"bbs-submit",attrs:{type:"button",value:"提交"},on:{click:function(t){e.updateAdminInfo("userInfo")}}}):e._e(),e._v(" "),"add"==e.$route.query.type?a("input",{staticClass:"bbs-submit",attrs:{type:"button",value:"提交"},on:{click:function(t){e.addAdminInfo("userInfo")}}}):e._e(),e._v(" "),a("input",{staticClass:"bbs-reset",attrs:{type:"reset",value:"重置"},on:{click:function(t){e.resetForm("userInfo")}}})])],1)])},staticRenderFns:[]}}});