(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{960:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return m});var n=a(8),l=a(9),r=a(2),c=a(1),i=a.n(c),s=a(11),o=a(7);function m(){o.a.defaults.withCredentials=!0;var e=Object(c.useState)([]),t=Object(r.a)(e,2),a=t[0],m=t[1],d=Object(c.useState)([]),u=Object(r.a)(d,2),p=u[0],h=u[1],E=Object(s.q)().id;Object(c.useEffect)(function(){o.a.get("/sub_admin/orders/order/".concat(E)).then(function(e){null!==e.data&&m(e.data[0])}).catch(function(e){console.log(e)})},[]),Object(c.useEffect)(function(){o.a.get("/superadmin/delivery_partner").then(function(e){h(e.data)}).catch(function(e){console.error(e)})},[]);var v=Object(c.useState)({order_id:E,orderstatus:"",expected_delivery_date:"",assigndeliverypersion:""}),f=Object(r.a)(v,2),g=f[0],b=f[1],y=function(e){b(function(t){return Object(l.a)({},t,Object(n.a)({},e.target.name,[e.target.value]))})},N=Object(s.o)(),_=Object(n.a)({width:"13.2rem",height:"2rem",fontSize:"1.1rem"},"width","90%");return i.a.createElement("div",null,i.a.createElement("div",{className:"container mt-3",style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},i.a.createElement("h2",{className:"p-2",style:{backgroundColor:"aqua"}},"||Update Order Details||"),i.a.createElement("div",{className:"bg-white m-3 pt-3 pl-2 rounded w-30 shadow",style:{minWidth:"40vw",height:"110%"}},i.a.createElement("form",{action:"submit",onSubmit:function(e){e.preventDefault(),o.a.post("/sub_admin/update/order",g).then(function(e){"success"===e.data?(alert("Delivery  status updated Successfully!!"),N("/sub-admin/home",{state:{loggedIn:!0}})):(e.data,alert("Error"))}).catch(function(e){return console.log(e)})},style:{padding:"1vw"}},i.a.createElement("h5",null," ",i.a.createElement("span",{className:"text-info"},"Healthhepta")),i.a.createElement("h5",null," ",i.a.createElement("span",{className:"text-warning"},void 0!==a.assign_delivery_persion_id?i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,"Delivery Person Already Assigned")):i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,"Delivery Person Not Assigned")))),i.a.createElement("div",{className:" p-1",style:{textAlign:"initial",fontWeight:"700"}},i.a.createElement("label",{className:"p-1",htmlFor:"order_id"},"Order Id : "),i.a.createElement("br",null),i.a.createElement("input",{required:!0,className:"m-2 p-1",type:"text",style:{width:"90%"},placeholder:"Enter Product Name",name:"id",value:a.id,onChange:y}),i.a.createElement("br",null)),i.a.createElement("div",{className:" p-1",style:{textAlign:"initial",fontWeight:"700"}},i.a.createElement("label",{className:"p-1",htmlFor:"orderstatus"},"Order Status: "),i.a.createElement("br",null),i.a.createElement("select",{className:"m-2 p-1",required:!0,onChange:y,name:"orderstatus",style:{width:"90%",cursor:"pointer"}},i.a.createElement("option",{value:"select"},a.status),i.a.createElement("option",{value:"accepted"},"Accepted"),i.a.createElement("option",{value:"completed"},"Completed")),i.a.createElement("br",null)),i.a.createElement("div",{className:" p-1",style:{textAlign:"initial",fontWeight:"700"}},i.a.createElement("label",{className:"p-1",htmlFor:"expected_delivery_date"},"Expected Delivery Date : "),i.a.createElement("input",{className:"m-2 p-1",type:"date",required:!0,style:_,name:"expected_delivery_date",value:a.expected_delivery_date,placeholder:a.expected_delivery_date,onChange:y}),i.a.createElement("br",null)),i.a.createElement("div",{className:" p-1",style:{textAlign:"initial",fontWeight:"700"}},i.a.createElement("label",{className:"p-1",htmlFor:"assigndeliverypersion"},"Assign Delivery Persion : "),i.a.createElement("select",{className:"m-2 p-1",required:!0,onChange:y,name:"assigndeliverypersion",style:{width:"90%",cursor:"pointer"}},void 0!==a.assign_delivery_persion_id?i.a.createElement(i.a.Fragment,null,i.a.createElement("option",{value:"select"}," ",p.filter(function(e){return e.id===a.assign_delivery_persion_id}).map(function(e){return i.a.createElement("li",null,e.name)}))):i.a.createElement(i.a.Fragment,null,i.a.createElement("option",{value:"select"},"Select")),p.length>0&&p.map(function(e){return i.a.createElement("option",{value:e.id},e.name)})),i.a.createElement("br",null)),i.a.createElement("div",{className:"form-check "},i.a.createElement("input",{required:!0,className:"form-check-input",type:"checkbox",value:"check",id:"flexCheckChecked",style:{marginLeft:"1vw"}}),i.a.createElement("label",{className:"form-check-label",htmlFor:"flexCheckChecked"},i.a.createElement("p",null,"You are sure to Assign  ",i.a.createElement("span",{className:"text-warning"},"Delivery Boy")," "))),i.a.createElement("button",{type:"submit",className:"btn  btn-default border p-2 mb-3 btn-info",style:{width:"90%",color:"white",cursor:"pointer"}},"Submit")))))}}}]);
//# sourceMappingURL=104.09ea1385.chunk.js.map