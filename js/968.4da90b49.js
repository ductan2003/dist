"use strict";(self["webpackChunkweb_se"]=self["webpackChunkweb_se"]||[]).push([[968],{7055:function(t,i,s){s.d(i,{Z:function(){return g}});var e=s(3396),a=s(7139);const n={class:"container"},o={class:"tips-image"},p=["src"],r={class:"tips-content"},c={class:"tips-title"},l={class:"description"},d={class:"tip-description"};function u(t,i,s,u,m,h){const f=(0,e.up)("router-link");return(0,e.wg)(),(0,e.iD)("div",n,[(0,e._)("div",o,[(0,e._)("img",{src:"http://localhost:8019/admin/exams/file/"+s.tip.image,alt:"pic",class:"imageabc"},null,8,p)]),(0,e._)("div",r,[(0,e._)("div",c,[(0,e.Wm)(f,{class:"title-header",to:{name:"tip",params:{id:s.tip.id}}},{default:(0,e.w5)((()=>[(0,e.Uk)((0,a.zw)(s.tip.title),1)])),_:1},8,["to"])]),(0,e._)("div",l,[(0,e._)("p",d,(0,a.zw)(s.tip.title),1)])])])}var m={name:"tip",props:["tip"]},h=s(89);const f=(0,h.Z)(m,[["render",u],["__scopeId","data-v-a0a3b9f2"]]);var g=f},5968:function(t,i,s){s.r(i),s.d(i,{default:function(){return d}});var e=s(3396),a=s(7139);function n(t,i,s,n,o,p){const r=(0,e.up)("TipsCard");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e._)("div",null,[(0,e._)("h2",null,"Hi, test "+(0,a.zw)(t.$route.params.id),1)]),((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(o.tips,(t=>((0,e.wg)(),(0,e.j4)(r,{key:t.id})))),128))],64)}var o=s(4161),p=s(7055),r={name:"app",components:{TipsCard:p.Z},data(){return{tips:[]}},methods:{getTips(){o.Z.get("https://jsonplaceholder.typicode.com/posts").then((t=>{console.log(t.data),this.tips=t.data})).catch((t=>{console.log(t)}))}},beforeMount(){this.getTips()},computed:{destinationId(){return parseInt(this.$route.params.id)}}},c=s(89);const l=(0,c.Z)(r,[["render",n]]);var d=l}}]);
//# sourceMappingURL=968.4da90b49.js.map