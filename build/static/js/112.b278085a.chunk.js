(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{966:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return i});var n=a(8),l=a(9),c=a(2),s=a(1),m=a.n(s),o=a(11),r=a(7);function i(){r.a.defaults.withCredentials=!0;var e=Object(s.useState)([]),t=Object(c.a)(e,2),a=t[0],i=t[1],u=Object(o.q)().id;Object(s.useEffect)(function(){r.a.get("/superadmin/payment/appoiment/status/".concat(u)).then(function(e){console.log(e.data),null!==e.data&&i(e.data[0]),null==e.data&&alert("Server error!!")}).catch(function(e){console.log(e)})},[]);var p=Object(s.useState)({appoiment_id:u,payment_status:""}),d=Object(c.a)(p,2),f=d[0],h=d[1],b=Object(o.o)();Object(n.a)({width:"13.2rem",height:"2rem",fontSize:"1.1rem"},"width","90%");return m.a.createElement("div",null,m.a.createElement("div",{className:"container mt-3",style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},m.a.createElement("h2",{className:"p-2",style:{backgroundColor:"aqua"}},"||Update Payment Details||"),m.a.createElement("div",{className:"bg-white m-3 pt-3 pl-2 rounded w-30 shadow",style:{minWidth:"40vw",height:"110%"}},m.a.createElement("form",{action:"submit",onSubmit:function(e){console.log(f),e.preventDefault(),r.a.post("/sub-admin/update/appoiment/payment",f).then(function(e){"success"===e.data?(alert("Payment  status updated Successfully!!"),b("/sub-admin/home",{state:{loggedIn:!0}})):(e.data,alert("Error"))}).catch(function(e){return console.log(e)})},style:{padding:"1vw"}},m.a.createElement("h4",null," ",m.a.createElement("span",{className:"text-info"},"Healthhepta")),m.a.createElement("div",{style:{display:"flex",alignItems:"flex-start",flexDirection:"column",marginLeft:"5vw"}},m.a.createElement("h5",{className:"font-size-15"},"PaymentNo: ",a&&a.payment_id," ",m.a.createElement("span",{className:"badge bg-success font-size-12 ms-2"},a&&a.payment_status)),m.a.createElement("h5",{className:"font-size-15"},"Appoiment Booking No: ",a&&a.appoiment_id," "),m.a.createElement("h5",{className:"font-size-15"},"Total Amount: ",a&&a.total_amount," "),m.a.createElement("h5",{className:"font-size-15"},"Payment Type: ",a&&a.payment_type," ")),m.a.createElement("div",{className:" p-1",style:{textAlign:"initial",fontWeight:"700"}},m.a.createElement("label",{className:"p-1",htmlFor:"orderstatus"},"Change Payment Status: "),m.a.createElement("br",null),m.a.createElement("select",{className:"m-2 p-1",required:!0,onChange:function(e){h(function(t){return Object(l.a)({},t,Object(n.a)({},e.target.name,[e.target.value]))})},name:"payment_status",style:{width:"90%",cursor:"pointer"}},m.a.createElement("option",{value:"select"},a.payment_status),m.a.createElement("option",{value:"completed"},"Completed")),m.a.createElement("br",null)),m.a.createElement("div",{className:"form-check "},m.a.createElement("input",{required:!0,className:"form-check-input",type:"checkbox",value:"check",id:"flexCheckChecked",style:{marginLeft:"1vw"}}),m.a.createElement("label",{className:"form-check-label",htmlFor:"flexCheckChecked"},m.a.createElement("p",null,"You are sure to complete  ",m.a.createElement("span",{className:"text-warning"},"Payment")," "))),m.a.createElement("button",{type:"submit",className:"btn  btn-default border p-2 mb-3 btn-info",style:{width:"90%",color:"white",cursor:"pointer"}},"Submit")))))}}}]);
//# sourceMappingURL=112.b278085a.chunk.js.map