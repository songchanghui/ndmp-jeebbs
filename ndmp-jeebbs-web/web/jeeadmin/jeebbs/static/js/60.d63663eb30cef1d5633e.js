webpackJsonp([60],{576:function(t,e,a){function i(t){a(853)}var n=a(66)(a(670),a(940),i,null,null);t.exports=n.exports},660:function(t,e,a){"use strict";function i(t){return a.i(k.a)({url:"/api/admin/forum/listGroupByCategory",method:"post",data:t})}function n(t){return a.i(k.a)({url:"/api/admin/category/list",method:"post",data:t})}function o(t){return a.i(k.a)({url:"/api/admin/forum/list",method:"post",data:t})}function s(t){return a.i(k.a)({url:"/api/admin/forum/batchupdate",method:"post",signValidate:!0,data:t})}function r(t){return a.i(k.a)({url:"/api/admin/category/delete",method:"post",signValidate:!0,data:t})}function l(t){return a.i(k.a)({url:"/api/admin/forum/delete",method:"post",signValidate:!0,data:t})}function u(t){return a.i(k.a)({url:"/api/admin/category/o_priority_update",method:"post",signValidate:!0,data:t})}function d(t){return a.i(k.a)({url:"/api/admin/forum/o_priority_update",method:"post",signValidate:!0,data:t})}function c(t){return a.i(k.a)({url:"/api//admin/forum/get",method:"post",data:t})}function p(t){return a.i(k.a)({url:"/api/admin/forum/update",method:"post",signValidate:!0,data:t})}function g(t){return a.i(k.a)({url:"/api/admin/topicType/tree",method:"post",signValidate:!1,data:t})}function m(t){return a.i(k.a)({url:"/api/admin/topicType/list",method:"post",signValidate:!1,data:t})}function h(t){return a.i(k.a)({url:"/api/admin/topicType/get",method:"post",signValidate:!1,data:t})}function f(t){return a.i(k.a)({url:"/api/admin/topicType/delete",method:"post",signValidate:!0,data:t})}function v(t){return a.i(k.a)({url:"/api/admin/topicType/update",method:"post",signValidate:!0,data:t})}function b(t){return a.i(k.a)({url:"/api/admin/topicType/save",method:"post",signValidate:!0,data:t})}function y(t){return a.i(k.a)({url:"/api/admin/sensitivity/list",method:"post",signValidate:!1,data:t})}function _(t){return a.i(k.a)({url:"/api/admin/sensitivity/delete",method:"post",signValidate:!0,data:t})}function w(t){return a.i(k.a)({url:"/api/admin/sensitivity/save",method:"post",signValidate:!0,data:t})}function S(t){return a.i(k.a)({url:"/api/admin/sensitivity/batch_update",method:"post",signValidate:!0,data:t})}function P(t){return a.i(k.a)({url:"/api/admin/sensitivity/batch_save",method:"post",signValidate:!0,data:t})}function C(t){return a.i(k.a)({url:"/api/admin/report/list",method:"post",data:t})}function L(t){return a.i(k.a)({url:"/api/admin/report/get",method:"post",data:t})}function z(t){return a.i(k.a)({url:"/api/admin/report/process",signValidate:!0,method:"post",data:t})}function V(t){return a.i(k.a)({url:"/api/admin/report/delete",signValidate:!0,method:"post",data:t})}e.t=i,e.q=n,e.a=o,e.u=s,e.v=r,e.w=l,e.x=u,e.y=d,e.r=c,e.s=p,e.k=g,e.o=m,e.l=h,e.p=f,e.m=v,e.n=b,e.g=y,e.j=_,e.h=w,e.i=S,e.f=P,e.d=C,e.b=L,e.e=z,e.c=V;var k=a(150),$=a(101);a.n($)},670:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(660);e.default={data:function(){return{loading:!0,friendLinkCtgList:[],pointList:[{value:-3,label:"积分-3"},{value:-2,label:"积分-2"},{value:-1,label:"积分-1"},{value:0,label:"不奖惩"},{value:1,label:"积分+1"},{value:2,label:"积分+2"},{value:3,label:"积分+3"}],pointParams:{id:"",point:0,result:"不奖惩"},reportList:[],options:[{value:!1,label:"未处理举报"},{value:!0,label:"已处理举报"}],ids:"",sort:this.$store.state.sort,lastLoginDay:this.$store.state.lastLoginDay,groupList:[],params:{pageNo:1,pageSize:20,dealStatus:!1},totalCount:0,currentPage:1,changePageSize:localStorage.getItem("PageSize"),disabled:!0}},methods:{getReportList:function(){var t=this,e=this.params;i.d(e).then(function(e){"100"==e.code?(t.reportList=e,t.totalCount=e.totalCount,t.loading=!1):(t.loading=!1,t.$message.error(e.message))}).catch(function(e){t.loading=!1,t.$message.error("网络异常")})},queryCtg:function(t){this.loading=!0,this.params.dealStatus=t,this.getReportList()},process:function(t){var e=this;this.loading=!0,this.pointParams.id=t,i.e(this.pointParams).then(function(t){"100"==t.code?(e.loading=!1,e.$message.success("处理成功"),e.getReportList()):(e.loading=!1,e.$message.error(t.message))}).catch(function(t){e.loading=!1,e.$message.error("处理异常!")})},setPointParams:function(t){this.pointParams.result=0==t?"不奖惩":"积分"+t,this.pointParams.point=t},editReport:function(t){this.$router.push({path:"/reportedit",query:{type:"edit",id:t}})},deleteReport:function(t){var e=this;this.ids=t,this.$confirm("您确定要删除用户举报吗?","警告",{type:"warning"}).then(function(t){i.c({ids:e.ids}).then(function(t){e.loading=!1,"100"==t.code?(e.$message.success("删除成功"),e.getReportList()):e.$message.error(t.message)}).catch(function(t){e.loading=!1,e.$message.error("网络异常")})}).catch(function(t){})},getPage:function(t){this.loading=!0,this.params.pageNo=t,this.getReportList()},getSize:function(t){this.loading=!0,this.params.pageNo=t,this.getReportList()},changeSize:function(t){var e=t.target.value;e<1?(localStorage.setItem("PageSize",20),e=20):localStorage.setItem("PageSize",e),this.loading=!0,this.params.pageSize=parseInt(e),this.params.pageNo=1,this.currentPage=1,this.getReportList()},checkIds:function(t){for(var e=[],a=0;a<t.length;a++)e.push(t[a].id);0==e.length?(this.ids="",this.disabled=!0):(this.ids=e.join(","),this.disabled=!1)}},created:function(){var t=localStorage.getItem("PageSize");null!=t?this.params.pageSize=parseInt(t):this.changePageSize=20,this.getReportList()},watch:{$route:function(t,e){this.loading=!0,this.getReportList()}}}},767:function(t,e,a){e=t.exports=a(570)(!1),e.push([t.i,"",""])},853:function(t,e,a){var i=a(767);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(571)("35f74150",i,!0)},940:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"forum-module"},[t._m(0,!1,!1),t._v(" "),a("div",{staticClass:"table-top-bar clearfix"},[a("el-select",{staticClass:"w128",on:{change:t.queryCtg},model:{value:t.reportList.dealStatus,callback:function(e){t.$set(t.reportList,"dealStatus",e)},expression:"reportList.dealStatus"}},t._l(t.options,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1),t._v(" "),a("div",{directives:[{name:"loading",rawName:"v-loading.body",value:t.loading,expression:"loading",modifiers:{body:!0}}],staticClass:"table-responsive"},[a("form",{staticClass:"form-horizontal no-margin"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.reportList.body},on:{"selection-change":t.checkIds}},[a("el-table-column",{attrs:{type:"selection",align:"center",width:"68"}}),t._v(" "),a("el-table-column",{attrs:{label:"id",prop:"id",align:"center",width:50}}),t._v(" "),a("el-table-column",{attrs:{label:"举报地址",prop:"reportUrl",align:"center",width:"180","show-overflow-tooltip":!0},scopedSlots:t._u([{key:"default",fn:function(e){return[a("a",{attrs:{href:e.row.reportUrl}},[t._v(t._s(e.row.reportUrl))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"举报时间",prop:"reportTime",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"举报人",prop:"reportUserName",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"积分奖惩",prop:"point",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{directives:[{name:"show",rawName:"v-show",value:!e.row.status,expression:"!scope.row.status"}]},[a("el-select",{staticStyle:{width:"90px"},on:{change:t.setPointParams},model:{value:e.row.point,callback:function(a){t.$set(e.row,"point",a)},expression:"scope.row.point"}},t._l(t.pointList,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),t._v(" "),a("el-button",{on:{click:function(a){t.process(e.row.id)}}},[t._v("提交")])],1),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.row.status,expression:"scope.row.status"}]},[t._v(t._s(e.row.processResult))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center",width:200},scopedSlots:t._u([{key:"default",fn:function(e){return[a("a",{staticClass:"t-edit iconfont bbs-weibiaoti104",attrs:{href:"javascript:void(0)",title:"查看"},on:{click:function(a){t.editReport(e.row.id)}}}),t._v(" "),a("a",{staticClass:"t-del iconfont bbs-delete",attrs:{href:"javascript:void(0)",title:"删除"},on:{click:function(a){t.deleteReport(e.row.id)}}})]}}])})],1)],1)]),t._v(" "),a("div",{staticClass:"table-bottom-bar"},[a("div",{staticClass:"pull-left"},[a("el-button",{attrs:{disabled:t.disabled},on:{click:function(e){t.deleteReport(t.ids)}}},[t._v("批量删除")]),t._v(" "),a("span",{staticClass:"ml-48"},[t._v("每页显示\n                "),a("el-input",{staticClass:"input-sm",attrs:{type:"number",min:"1",max:"50"},on:{blur:t.changeSize},model:{value:t.changePageSize,callback:function(e){t.changePageSize=e},expression:"changePageSize"}}),t._v("条,输入后按回车")],1)],1),t._v(" "),a("div",{staticClass:"pull-right"},[a("el-pagination",{attrs:{layout:"total,prev, pager, next",total:t.totalCount,"page-size":t.params.pageSize,"current-page":t.currentPage},on:{"update:currentPage":function(e){t.currentPage=e},"current-change":t.getPage,"size-change":t.getSize}})],1)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"forum-header"},[a("span",{staticClass:"forum-name"},[t._v("用户举报列表")])])}]}}});