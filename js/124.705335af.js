"use strict";(self["webpackChunkweb_se"]=self["webpackChunkweb_se"]||[]).push([[124],{9124:function(t,e,s){s.r(e),s.d(e,{default:function(){return B}});var a=s(3396),o=s(7139),l=s(9242),n=s(29),i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIVSURBVHgBxVUxVsJAEN1ED5AjxBMIHVTgCTyC8QQkdFaEA0DCCcROO1srQ0cZTyDegNIO/09m476QkJD3fM57YXdnZ/7M7vwdlPpjsZoMptPp9eFwGOPrYemKem9ZVmLb9utisfjqFCAIghFAQwCNRbWTj+LgY0AFGwbyl8vlR+sAvu9HAPYJCIA1xlUcx/uSjQubEaYhT8ZkYDNvDADHRzh6cIixnJeBaxKawSdkMrC/N/cuKgx9yeZhu91+qxYCu81gMFD0xehg/XYUgMXE8Fx31JZBHAYZDocJ1lnxbW0gV7LrAm4IfVm3UCuyGkjBPjH1oih6qvJk4VXOntwRNK2yNerRR7KpLca32XFsO6kB59HHxudBvQaV7yrMV4I5yjD5w4eEIa17NGQSsu3juxLaKsPvyFbl19QrAiCaA8U5dAzV76OrEu65RYA2YoKfQwR9RTs4ux3AK08NO0fv6StKMbgsZtkYhZxUgZMlKqdlORkyskeWcX0pxhsoOJ2UnWiIfR/gK1Nf10IK9qDTZmsj03cAuZj22/SfOsEJ+J74YG+yQMZeKHWYqY4itXIxDbSu6EXsHbqXsHGxt6gzpESEF60/1a5b0VGIobvwUbu2GrIhfUO2kPIrF2CSwuO1sFlCgjKWdSIzUo0Nbsw1AEjlrPhyz66YkmX8Y0qqcBr/9IXXt+w7bCkSjCdLSW92TPWf8gPvREVf/YDheAAAAABJRU5ErkJggg==";const r={class:"container"},c={class:"title"},m={key:0},g={class:"time"},u={class:"img"},A=["src"],p={class:"body"},d={class:"comment"},h={key:0,class:"newComment"},w=["src"],v={key:1,class:"oldCmtAva",src:n,alt:"ava"},C={class:"answerbox"},k=(0,a._)("img",{src:i},null,-1),I=[k],f=["src"],y={key:1,src:n,alt:"ava"},x={class:"oldCommentBox"},b={class:"userName"};function D(t,e,s,n,i,k){return(0,a.wg)(),(0,a.iD)("div",r,[(0,a._)("div",c,[i.tip.title?((0,a.wg)(),(0,a.iD)("p",m,(0,o.zw)(i.tip.title),1)):(0,a.kq)("",!0)]),(0,a._)("div",g,[(0,a._)("p",null,[(0,a._)("i",null,"Timestamp: "+(0,o.zw)(i.tip.dateCreated),1)])]),(0,a._)("div",u,[(0,a._)("img",{src:"http://localhost:8019/admin/exams/file/"+i.tip.image,alt:"pic"},null,8,A)]),(0,a._)("div",p,[(0,a._)("p",null,(0,o.zw)(i.tip.body),1)]),(0,a._)("div",d,[i.user?((0,a.wg)(),(0,a.iD)("div",h,[this.avatar?((0,a.wg)(),(0,a.iD)("img",{key:0,class:"oldCmtAva",src:"http://localhost:8019/admin/exams/file/"+this.avatar,alt:"ava"},null,8,w)):(0,a.kq)("",!0),this.avatar?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("img",v)),(0,a._)("div",C,[(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>i.newComment=t),placeholder:"Comment Here"},null,512),[[l.nr,i.newComment]]),(0,a._)("button",{type:"button",onClick:e[1]||(e[1]=(...t)=>k.postComment&&k.postComment(...t))},I)])])):(0,a.kq)("",!0),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(this.comments,(t=>((0,a.wg)(),(0,a.iD)("div",{key:t.id,class:"oldComment"},[t.creatorImage?((0,a.wg)(),(0,a.iD)("img",{key:0,src:"http://localhost:8019/admin/exams/file/"+t.creatorImage,alt:"ava"},null,8,f)):(0,a.kq)("",!0),t.creatorImage?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("img",y)),(0,a._)("div",x,[(0,a._)("div",b,(0,o.zw)(t.creatorName),1),(0,a._)("p",null,(0,o.zw)(t.text),1)])])))),128))])])}var Y=s(4161),Z=s(672),S={data(){return{tip:null,newComment:"",comments:null,user:null,avatar:null}},methods:{async getTip(){let t="http://localhost:8019/tips/post/"+parseInt(this.$route.params.id);const e=await Y.Z.get(t);this.tip=e.data,this.comments=this.tip.comments.slice().reverse()},async postComment(){await Y.Z.post("http://localhost:8019/tips/comments/postComment",{text:this.newComment,postId:this.$route.params.id,creatorName:this.user.username},{headers:{"Content-Type":"multipart/form-data"}}).then((t=>{console.log(t.data),this.getTip(),this.newComment=""})).catch((t=>{console.log(t),Z.Am.error("Saved failed",{position:Z.Am.POSITION.BOTTOM_RIGHT}),t.response?(console.log(t.response.data),console.log(t.response.status),console.log(t.response.headers)):t.request?console.log(t.request):console.log("Error",t.message)}))},async getUser(){if(localStorage.getItem("token")){Y.Z.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token");const t=await Y.Z.get("http://localhost:8019/account/"+this.user.username);console.log(t.data),this.user=t.data}}},beforeMount(){this.getTip()},async created(){if(localStorage.getItem("token")){Y.Z.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token");const t=await Y.Z.get("http://localhost:8019/api/auth/profile");this.user=t.data,console.log(this.user)}const t=await Y.Z.get("http://localhost:8019/account/"+this.user.username);this.avatar=t.data.profileImage}},R=s(89);const _=(0,R.Z)(S,[["render",D]]);var B=_}}]);
//# sourceMappingURL=124.705335af.js.map