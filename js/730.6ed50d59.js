"use strict";(self["webpackChunkweb_se"]=self["webpackChunkweb_se"]||[]).push([[730],{1730:function(e,t,a){a.r(t),a.d(t,{default:function(){return Q}});var s=a(3396),o=a(9242),i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH8SURBVHgBpVXNVcJAEN4sFIAdxArkCCehArUCYwVsKjAWAIlHT8LJK1ZAvHEMFRg7SAf4fckkL8ZNRDLv7Zv9mfnmb3fWUR3k+/412Ph4PI7BR7KdOo6TaK3j5XL51abrtAECLADArATDyGTulkYgsx4MBoHNwA9gYwwVQgB6AhZBeRNFUdaQYwQLkeNZEIbhsxVYQHcQppJpCtoIOi7kXzGdMUI48FSeDcrJZDJ5k9A9gL6oE2i/32cYG+jSgJlOpynWh8pj5PQebH2qpzYCxk4Vhb5k6jQ3GQZGci6oYDyooqgLrjW9RRgujaoeBC9TgG+ZEtZLYzHDfoqDWPUkgEZgI/CroSrykjSFaBUCnziL6tWWM94EF/vz+j5kD9DhdKwxYV4y9Tu0TEILpLglaHnPY5uOGBgNVTf5fM4AWgM8k7lp3lkb6a5D8WAuqcq97wKVR8ZcZyxejMntH+B3BAT3ujxl0cjzXMOKVz5L3OMP1YNYVDoJnAumYouRiUd9QPmsPRacay2h5i2yXv0zKKSDbKNcVN2tfOs0sFqtDuofBG8fWVhV6zXVrZC3zpTEMLI4EXAkec1vS73XNBt9vb8mfKIQ3tgAVdHojSoaj2lt9HWSXAeq+IYYTVwpFA3LlSWvqrGlzgpc82wGdiO/ihIj+WcK/s6O1qb7DY3JJcV4bOAbAAAAAElFTkSuQmCC";const l=e=>((0,s.dD)("data-v-6e02a800"),e=e(),(0,s.Cn)(),e),c={key:0},d=l((()=>(0,s._)("div",{class:"heading-page"},[(0,s._)("p",{class:"heading-page-content"},"Please login to view this page")],-1))),n=[d],r={key:1,class:"container"},p=l((()=>(0,s._)("div",{class:"heading-page"},[(0,s._)("p",{class:"heading-page-content"},"IELTS Mock Tests")],-1))),A={class:"content-page"},g={class:"filter-box"},m=l((()=>(0,s._)("div",{class:"filter-text"},"FILTERS",-1))),h={class:"dropdown"},u=l((()=>(0,s._)("div",{class:"dropdown-text"},"Type",-1))),x=(0,s.uE)('<option class="dropdown-item" data-v-6e02a800>Reading</option><option class="dropdown-item" data-v-6e02a800>Listening</option><option class="dropdown-item" data-v-6e02a800>Writting</option><option class="dropdown-item" data-v-6e02a800>Speaking</option><div class="dropdown-pic" data-v-6e02a800><img src="'+i+'" data-v-6e02a800></div>',5),w=[x],v={class:"dropdown"},y=l((()=>(0,s._)("div",{class:"dropdown-text"},"Year",-1))),S=l((()=>(0,s._)("option",{class:"dropdown-item"},"2023",-1))),k=l((()=>(0,s._)("option",{class:"dropdown-item"},"2022",-1))),_=l((()=>(0,s._)("div",{class:"dropdown-pic"},[(0,s._)("img",{src:i})],-1))),E=[S,k,_],f={class:"exam-list"};function b(e,t,a,i,l,d){const x=(0,s.up)("ExamCard");return(0,s.wg)(),(0,s.iD)(s.HY,null,[l.auth?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",c,n)),l.auth?((0,s.wg)(),(0,s.iD)("div",r,[p,(0,s._)("div",A,[(0,s._)("div",g,[m,(0,s._)("div",h,[u,(0,s.wy)((0,s._)("select",{class:"dropdown-box","onUpdate:modelValue":t[0]||(t[0]=e=>l.typeSelected=e),type:"button",onClick:t[1]||(t[1]=(...e)=>d.getExams&&d.getExams(...e))},w,512),[[o.bM,l.typeSelected]])]),(0,s._)("div",v,[y,(0,s.wy)((0,s._)("select",{class:"dropdown-box","onUpdate:modelValue":t[2]||(t[2]=e=>l.yearSelected=e),type:"button",onClick:t[3]||(t[3]=(...e)=>d.getExams&&d.getExams(...e))},E,512),[[o.bM,l.yearSelected]])])]),(0,s._)("div",f,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.exams,(e=>((0,s.wg)(),(0,s.j4)(x,{key:e.id,exam:e},null,8,["exam"])))),128))])])])):(0,s.kq)("",!0)],64)}var Y=a(7139);const L={class:"exam-container"},C={class:"exam-image"},D=["src"],V={class:"text"},I={class:"card-header"},j={class:"card-description"},B={class:"card-description"},T={class:"card-description"};function W(e,t,a,o,i,l){const c=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",L,[(0,s._)("div",C,[(0,s._)("img",{src:"http://localhost:8019/admin/exams/file/"+a.exam.fileImage,alt:"pic",class:"imageabc"},null,8,D)]),(0,s._)("div",V,[(0,s._)("div",I,[(0,s.Wm)(c,{class:"card-title",to:{name:"exam",params:{id:a.exam.id}}},{default:(0,s.w5)((()=>[(0,s.Uk)((0,Y.zw)(a.exam.title),1)])),_:1},8,["to"]),(0,s._)("p",j,"Category: "+(0,Y.zw)(a.exam.category.name),1),(0,s._)("p",B,"Year: "+(0,Y.zw)(a.exam.year),1),(0,s._)("p",T,[(0,s._)("i",null,(0,Y.zw)(a.exam.description),1)])])])])}var R={name:"exam",props:["exam"]},Z=a(89);const z=(0,Z.Z)(R,[["render",W]]);var M=z,U=a(4161),H={components:{ExamCard:M},name:"Examlist",data(){return{exams:[],typeSelected:null,yearSelected:null,auth:!1}},methods:{getList(e){U.Z.get(e).then((e=>{console.log(e.data),this.exams=e.data.listPost})).catch((e=>{console.log(e)}))},getExams(){if(!this.yearSelected&&this.typeSelected){let e="http://localhost:8019/user/exams/"+this.typeSelected;this.getList(e)}else if(this.yearSelected&&!this.typeSelected){let e="http://localhost:8019/admin/exams/year="+this.yearSelected;this.getList(e),console.log("year")}else if(this.yearSelected&&this.typeSelected){let e="http://localhost:8019/user/exams/year="+this.yearSelected+"/"+this.typeSelected;this.getList(e)}else{let e="http://localhost:8019/user/exams/all";this.getList(e)}}},beforeMount(){this.getExams(),console.log(this.exams),localStorage.getItem("token")&&(this.auth=!0)}};const K=(0,Z.Z)(H,[["render",b],["__scopeId","data-v-6e02a800"]]);var Q=K}}]);
//# sourceMappingURL=730.6ed50d59.js.map