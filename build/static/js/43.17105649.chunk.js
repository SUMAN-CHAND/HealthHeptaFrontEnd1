(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{901:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return m});var n=a(8),l=a(9),c=a(2),r=a(1),i=a.n(r),s=a(11),o=a(7);function m(){o.a.defaults.withCredentials=!0;var e=Object(r.useState)({length:"",discount_percentage:"",expiry_date:"",is_active:""}),t=Object(c.a)(e,2),a=t[0],m=t[1],u=Object(r.useState)(!1),p=Object(c.a)(u,2),d=(p[0],p[1]),h=function(e){m(function(t){return Object(l.a)({},t,Object(n.a)({},e.target.name,[e.target.value]))})},E=Object(s.o)(),g=Object(n.a)({width:"13.2rem",height:"2rem",fontSize:"1.1rem"},"width","90%");return i.a.createElement("div",null,i.a.createElement("div",{className:"container mt-3",style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},i.a.createElement("h2",{className:"p-2",style:{backgroundColor:"aqua"}},"||Add New Coupon||"),i.a.createElement("div",{className:"bg-white m-3 pt-3 pl-2 rounded w-30 shadow",style:{minWidth:"40vw",height:"110%"}},i.a.createElement("form",{action:"submit",onSubmit:function(e){e.preventDefault(),o.a.post("/superadmin/generate-coupon",a).then(function(e){"success"===e.data?(alert("Product Added Successfully!!"),E("/superadmin",{state:{loggedIn:!0}})):(e.data,alert("Error"))}).catch(function(e){return console.log(e)})},style:{padding:"1vw"}},i.a.createElement("h5",null," ",i.a.createElement("span",{className:"text-info"},"Healthhepta")),i.a.createElement("div",{className:" p-1",style:{textAlign:"initial",fontWeight:"700"}},i.a.createElement("label",{className:"p-1",htmlFor:"length"},"Coupon Length : "),i.a.createElement("br",null),i.a.createElement("input",{className:"m-2 p-1",type:"number",style:{width:"90%"},placeholder:"Enter Coupon Length",name:"length",onChange:h}),i.a.createElement("br",null)),i.a.createElement("div",{className:" p-1",style:{textAlign:"initial",fontWeight:"700"}},i.a.createElement("label",{className:"p-1",htmlFor:"discount_percentage"}," Coupon Discount Percentage: "),i.a.createElement("br",null),i.a.createElement("input",{className:"m-2 p-1",type:"text",style:{width:"90%"},placeholder:"Enter Product Description",name:"discount_percentage",onChange:h}),i.a.createElement("br",null)),i.a.createElement("div",{className:" p-1",style:{textAlign:"initial",fontWeight:"700"}},i.a.createElement("label",{className:"p-1",htmlFor:"expiry_date "},"Expiry Date  : "),i.a.createElement("input",{className:"m-2 p-1",type:"date",style:g,name:"expiry_date",onChange:h}),i.a.createElement("br",null)),i.a.createElement("div",{className:" p-1",style:{textAlign:"initial",fontWeight:"700"}},i.a.createElement("label",{className:"p-1",htmlFor:"dragornot"},"is_active : "),i.a.createElement("br",null),i.a.createElement("select",{className:"m-2 p-1",onChange:h,name:"is_active",style:{width:"90%",cursor:"pointer"}},i.a.createElement("option",{value:"select"},"Select One"),i.a.createElement("option",{value:"Active"},"Active"),i.a.createElement("option",{value:"Not Active"},"Not Active")),i.a.createElement("br",null)),i.a.createElement("div",{className:"form-check "},i.a.createElement("input",{className:"form-check-input",type:"checkbox",value:"check",id:"flexCheckChecked",style:{marginLeft:"1vw"},onChange:function(){d(!0)}}),i.a.createElement("label",{className:"form-check-label",htmlFor:"flexCheckChecked"},i.a.createElement("p",null,"You are sure to add  ",i.a.createElement("span",{className:"text-warning"},"Cupon")," "))),i.a.createElement("button",{type:"submit",className:"btn  btn-default border p-2 mb-3 btn-info",style:{width:"90%",color:"white",cursor:"pointer"}},"Add Coupon")))))}}}]);
//# sourceMappingURL=43.17105649.chunk.js.map