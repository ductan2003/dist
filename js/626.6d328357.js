"use strict";(self["webpackChunkweb_se"]=self["webpackChunkweb_se"]||[]).push([[626],{6626:function(t,e,s){s.r(e),s.d(e,{default:function(){return L}});var i=s(3396),o=s(7139),n=s(9242);const a=t=>((0,i.dD)("data-v-281062c2"),t=t(),(0,i.Cn)(),t),c={class:"exam-container"},l={class:"topic-container"},r={key:0,class:"section"},u={key:1},d={class:"question-container"},h={class:"right-side"},p={class:"exam-header"},w={key:0,class:"point"},g={key:0},m={key:1,class:"question-text"},k={key:2,class:"box"},q={class:"idQues"},v={class:"answerbox"},_=["onUpdate:modelValue"],y={key:3,class:"checkTrue"},x={key:4,class:"checkFalse"},D={class:"clock"},b={class:"countdown"},f={class:"submit-ans"},I=a((()=>(0,i._)("b",null,"Submit",-1))),T=[I],z=a((()=>(0,i._)("b",null,"Back",-1)));function A(t,e,s,a,I,A){const C=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",c,[(0,i._)("div",l,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(I.exam.questionsList,(t=>((0,i.wg)(),(0,i.iD)("div",{key:t.id,class:"paragraph"},[t.section?((0,i.wg)(),(0,i.iD)("div",r,"Section "+(0,o.zw)(t.section),1)):(0,i.kq)("",!0),t.paragraph?((0,i.wg)(),(0,i.iD)("div",u,(0,o.zw)(t.paragraph),1)):(0,i.kq)("",!0)])))),128))]),(0,i._)("div",d,[(0,i._)("div",h,[(0,i._)("div",p,"Exam "+(0,o.zw)(this.exam.title),1),I.stop?((0,i.wg)(),(0,i.iD)("div",w,[(0,i._)("p",null,"Total correct answer: "+(0,o.zw)(this.point),1)])):(0,i.kq)("",!0),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(I.exam.questionsList,(t=>((0,i.wg)(),(0,i.iD)("div",{key:t.id,class:"question"},[t.title?((0,i.wg)(),(0,i.iD)("div",g,[(0,i._)("i",null,(0,o.zw)(t.title),1)])):(0,i.kq)("",!0),t.question?((0,i.wg)(),(0,i.iD)("div",m,(0,o.zw)(t.question),1)):(0,i.kq)("",!0),t.questionId?((0,i.wg)(),(0,i.iD)("div",k,[(0,i._)("div",q,[(0,i._)("p",null,(0,o.zw)(t.questionId),1)]),(0,i._)("div",v,[(0,i.wy)((0,i._)("input",{type:"text","onUpdate:modelValue":e=>I.answer[t.questionId]=e},null,8,_),[[n.nr,I.answer[t.questionId]]])])])):(0,i.kq)("",!0),I.check[t.questionId]&&I.stop&&t.questionId?((0,i.wg)(),(0,i.iD)("div",y,[(0,i._)("i",null,"The correct answer is: "+(0,o.zw)(t.correctAnswer),1)])):(0,i.kq)("",!0),!I.check[t.questionId]&&I.stop&&t.questionId?((0,i.wg)(),(0,i.iD)("div",x,[(0,i._)("i",null,"The correct answer is: "+(0,o.zw)(t.correctAnswer),1)])):(0,i.kq)("",!0)])))),128))])])]),(0,i._)("div",D,[(0,i._)("div",b,[(0,i._)("p",null,(0,o.zw)(Math.floor(this.timecount/60))+":"+(0,o.zw)(this.timecount%60),1)]),(0,i._)("div",f,[I.stop?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("button",{key:0,class:"button",type:"button",onClick:e[0]||(e[0]=(...t)=>A.getPoint&&A.getPoint(...t))},T)),I.stop?((0,i.wg)(),(0,i.j4)(C,{key:1,class:"button",type:"button",to:"/exams"},{default:(0,i.w5)((()=>[z])),_:1})):(0,i.kq)("",!0)])])],64)}var C=s(4161),P=s(672),O={data(){return{exam:null,timecount:1800,answer:new Array(15).fill(""),check:new Array(15).fill(!1),stop:!1,point:0}},methods:{async getExam(){let t="http://localhost:8019/user/exams/id="+parseInt(this.$route.params.id);const e=await C.Z.get(t);this.exam=e.data},countDownTimer(){this.timecount>0&&!this.stop&&setTimeout((()=>{this.timecount-=1,this.countDownTimer()}),1e3),0!==this.timecount||this.stop||this.getPoint()},async getAns(){this.stop=!0,this.getPoint();let t="http://localhost:8019/question/eval-exam";await C.Z.post(t,{examId:this.exam.id,answers:this.answer},{headers:{"Content-Type":"multipart/form-data"}}).then((t=>{console.log(t.data)})).catch((t=>{console.log(t),P.Am.error(t.response,{position:P.Am.POSITION.BOTTOM_RIGHT}),t.response?(console.log(t.response.data),console.log(t.response.status),console.log(t.response.headers)):t.request?console.log(t.request):console.log("Error",t.message)}))},getPoint(){this.stop=!0;for(let t=0;t<15;t++)if(null!=this.exam.questionsList[t].correctAnswer){let e=JSON.stringify(this.exam.questionsList[t].correctAnswer);e=e.substring(1,e.length-1).toUpperCase(),e===this.answer[t+1].toUpperCase()&&(this.point++,this.check[t+1]=!0)}console.log(this.point)}},beforeMount(){},created(){this.stop=!1,this.getExam(),this.countDownTimer()}},E=s(89);const H=(0,E.Z)(O,[["render",A],["__scopeId","data-v-281062c2"]]);var L=H}}]);
//# sourceMappingURL=626.6d328357.js.map