(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{468:function(e,t,a){e.exports=a.p+"static/media/loginpageimg.27e1c41d.jpg"},474:function(e,t,a){"use strict";var n=a(3),o=a(1),r=a.n(o),l=a(475);t.a=function(){var e=Object(o.useState)(!1),t=Object(n.a)(e,2),a=t[0],s=t[1];return[a?"text":"password",a?r.a.createElement(l.a,{onClick:function(){return s(function(e){return!e})}}):r.a.createElement(l.b,{onClick:function(){return s(function(e){return!e})}})]}},478:function(e,t,a){},487:function(e,t,a){"use strict";t.a=function(e){var t={};return""===e.phone?t.phone="The phone number can not be empty":t.phone="",""===e.password?t.password="The password number can not be empty":t.password="",t}},891:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return v});var n=a(11),o=a(15),r=a(3),l=a(1),s=a.n(l),c=a(468),i=a.n(c),m=(a(31),a(487)),u=a(8),d=a(318),p=(a(478),a(19)),b=a.n(p),h=a(7),g=a(474),f=a(4),w=a.n(f),E=Object(l.lazy)(function(){return a.e(115).then(a.bind(null,865))});function v(){h.a.defaults.withCredentials=!0;var e=Object(l.useState)({phone:"",password:""}),t=Object(r.a)(e,2),a=t[0],c=t[1],p=Object(u.o)(),f=Object(l.useState)([]),v=Object(r.a)(f,2),y=v[0],x=v[1],N=function(e){c(function(t){return Object(o.a)({},t,Object(n.a)({},e.target.name,[e.target.value]))})},O=s.a.useState(!1),j=Object(r.a)(O,2),C=j[0],k=j[1];function P(){document.body.style.overflow="unset",k(!1)}var S=Object(g.a)(),A=Object(r.a)(S,2),L=A[0],F=A[1];return s.a.createElement("div",{id:"sub_admin_login_mob",className:"d-flex justify-content-center align-item-center  p-3 m-3"},s.a.createElement("div",{className:"img login-img"},s.a.createElement("img",{src:i.a,style:{width:"38vw"},alt:"...."})),s.a.createElement("div",{className:"bg-white m-3 pt-3 pl-2 rounded w-30 shadow",style:{height:"110%"}},s.a.createElement("form",{action:"submit",onSubmit:function(e){if(e.preventDefault(),x(Object(m.a)(a)),""===y.phone&&""===y.password){var t=h.a.post("/sub-admin/login",a).then(function(e){null===e.data?d.b.error("Login Fail ! Phone Number Or Password dose not match ",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}):"Not_Approve"===e.data?alert("Your Profile Not Verified by Admin || Please Wait for 24 hr Or Connect with Healthhepta.com "):null!==e.data[0]&&(d.b.success("Login Successfull",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),p("/b2b-home",{state:{loggedIn:e.data[1]}}),sessionStorage.setItem("user_id",e.data[0].id),sessionStorage.setItem("LogedIn",e.data[1]))}).catch(function(e){return console.log(e)});console.log(t)}}},s.a.createElement("h5",null,"Log in to ",s.a.createElement("span",{className:"text-info"},"Healthhepta")),s.a.createElement("div",{className:"p-2",style:{textAlign:"initial",fontWeight:"700"}},s.a.createElement("label",{className:"p-2",htmlFor:"phonenumber"},"Phone Number : "),s.a.createElement("br",null),s.a.createElement("input",{className:"m-2 p-1",onChange:N,name:"phone",id:"phone",type:"tel",required:!0,pattern:"[0-9]{3}[0-9]{3}[0-9]{4}",placeholder:"xxxxxxxxxx",style:{width:"90%",border:"1px solid black"}}),s.a.createElement("span",{className:"validity"}),s.a.createElement("p",{style:{fontWeight:"400",marginLeft:"2vw"}},"Format: 1234567890")),s.a.createElement("div",{className:"mb-3 p-2",style:{textAlign:"initial",fontWeight:"700",position:"relative"}},s.a.createElement("label",{className:"p-2",htmlFor:"password"},"Password : "),s.a.createElement("input",{className:"m-2  p-1",type:L,style:{width:"90%"},name:"password",placeholder:"Enter Password",onChange:N}),s.a.createElement("br",null),s.a.createElement("span",{className:"password-toogle-icon"},F),y.password&&s.a.createElement("span",{className:"text-danger"},y.password)),s.a.createElement("button",{type:"submit",className:"btn",style:{width:"90%",color:"white",backgroundColor:"#6775ec"}},"Log In"),s.a.createElement("p",null,"You are agree to our ",s.a.createElement("span",{className:"text-primary"},"terms & policies")," "),s.a.createElement("p",{className:"px-2"},"Do not have any account please  ",s.a.createElement("span",{className:"text-primary"},"create an Account")," "),s.a.createElement(s.a.Fragment,null,s.a.createElement("button",{className:"  btn-default border p-2 mb-3 btnonhover",style:{borderRadius:"5px",width:"90%"},onClick:function(){k(!0)}},"Create Account"),s.a.createElement(b.a,{isOpen:C,onAfterOpen:function(){document.body.style.overflow="hidden"},onRequestClose:P,style:{content:{overflowY:"hidden",top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},contentLabel:"Example Modal"},s.a.createElement("div",{className:"dis-flex"}," ",s.a.createElement(l.Suspense,{fallback:s.a.createElement(w.a,{color:"#36d7b7"})}," ",s.a.createElement(E,{closeTheModal:P}))," "))))),s.a.createElement(d.a,null))}}}]);
//# sourceMappingURL=33.a9c0fe70.chunk.js.map