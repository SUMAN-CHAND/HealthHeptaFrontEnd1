(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{318:function(e,t,a){},337:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var l=a(1),n=a.n(l),c=a(6);function i(e){return n.a.createElement("div",null,n.a.createElement(c.b,{to:"/doctor/".concat(e.id),style:{textDecoration:"none"}},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"card"},n.a.createElement("img",{src:"http://".concat("localhost",":8081/").concat(e.imgpath),className:"card-img-top",alt:"...",style:{maxHeight:"13vh"}}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h6",{className:"card-title",style:{fontSize:"0.9rem"}},e.name),n.a.createElement("p",{className:"card-text",style:{fontSize:"0.6rem",marginBottom:"2px"}},e.description),n.a.createElement("p",{className:"card-text text-success",style:{fontSize:"0.6rem",marginBottom:"2px"}}," \u20b9",e.fees,"/Visit"),n.a.createElement("p",{className:"card-text",style:{fontSize:"0.6rem",marginBottom:"2px"}},e.clnics),n.a.createElement("p",{className:"card-text",style:{fontSize:"0.6rem",marginBottom:"2px"}},e.clinic_descs),n.a.createElement("p",{className:"card-text",style:{fontSize:"0.6rem",marginBottom:"2px"}},e.location),n.a.createElement(c.b,{to:"/doctor/".concat(e.id),className:"btn",style:{fontSize:"0.7rem",backgroundColor:"#07dbc1"}},"Book Now"))))))}},394:function(e,t,a){"use strict";var l=a(3),n=a(1),c=a.n(n),i=(a(337),a(318),a(6));function r(e){return c.a.createElement("div",{className:"doctor-c-l",style:{padding:"5px"}},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement("div",{className:"doctor  container shadow",style:{display:"flex",backgroundColor:"#dffffb"}},c.a.createElement("div",{className:"deccription",style:{display:"flex"}},c.a.createElement("img",{src:"http://".concat("localhost",":8081/").concat(e.imgpath),className:"card-img-top",alt:"...",style:{maxWidth:"6vw"}}),c.a.createElement("div",null,c.a.createElement("h6",{className:"fs-8"},e.name," "),c.a.createElement("h6",{className:"fs-9"},e.specializes," "),c.a.createElement("p",{className:"fs-10"},e.desc),c.a.createElement("div",{className:"location ",style:{display:"flex",justifyContent:"center",alignItems:"center"}},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-geo-alt-fill mx-3",viewBox:"0 0 16 16"},c.a.createElement("path",{d:"M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"})),c.a.createElement("p",null,e.location))),c.a.createElement("div",{className:"container doctor-c-d",style:{height:"20vh"}},c.a.createElement("h6",null,e.clinics),c.a.createElement("p",null,e.clinic_descs),c.a.createElement(i.b,{to:"/doctor/".concat(e.id),className:"btn",style:{fontSize:"0.7rem",width:"100%",backgroundColor:"#07dbc1"}},"Book Now")))))))}var o=a(7);function s(e){o.a.defaults.withCredentials=!0;var t=Object(n.useState)([]),a=Object(l.a)(t,2),i=a[0],s=a[1],m=Object(n.useState)([]),d=Object(l.a)(m,2),p=d[0],u=d[1],b=Object(n.useState)([]),f=Object(l.a)(b,2),E=f[0],g=f[1],h=Object(n.useState)([]),y=Object(l.a)(h,2),x=y[0],v=y[1];try{Object(n.useEffect)(function(){o.a.get("/doctors/suggestedDoctors").then(function(e){null!==e.data&&(g(e.data[0]),v(e.data[1]))}).catch(function(e){console.error(e)})},[]),Object(n.useEffect)(function(){o.a.get("/doctors").then(function(e){null!==e.data&&(s(e.data[0]),u(e.data[1]),console.log(i))}).catch(function(e){console.error(e)})},[])}catch(N){console.log(N)}return c.a.createElement("div",null,c.a.createElement("div",{className:"container",style:{marginTop:"5vh"}},c.a.createElement("h5",{className:"py-2"},"|| Suggested Best Doctor For You ||"),E?c.a.createElement(c.a.Fragment,null,E.map(function(e){return c.a.createElement("div",{key:e.product_id},x.map(function(t){return c.a.createElement("div",{key:t.id},parseInt(e.doctor_imageId)===t.id?c.a.createElement(c.a.Fragment,null,c.a.createElement(r,{imgpath:t.path,name:e.doc_name,description:e.doc_desc,location:e.location,clinics:e.clinic,id:e.id,clinic_descs:e.clinic_desc,specializes:e.specializes})):c.a.createElement(c.a.Fragment,null))}))})):c.a.createElement(c.a.Fragment,null,i.map(function(e){return c.a.createElement("div",{key:e.id},p.map(function(t){return c.a.createElement("div",{key:t.id},parseInt(e.doctor_imageId)===t.id?c.a.createElement(c.a.Fragment,null,c.a.createElement(r,{imgpath:t.path,name:e.doc_name,description:e.doc_desc,location:e.location,clinics:e.clinic,id:e.id,clinic_descs:e.clinic_desc,specializes:e.specializes})):c.a.createElement(c.a.Fragment,null))}))}))))}a.d(t,"a",function(){return s})},921:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return d});var l=a(15),n=a(11),c=a(3),i=a(1),r=a.n(i),o=a(8),s=a(394),m=a(7);function d(){var e;m.a.defaults.withCredentials=!0;var t=Object(o.q)().id,a=Object(i.useState)({}),d=Object(c.a)(a,2),p=d[0],u=d[1];Object(i.useEffect)(function(){m.a.get("/profile").then(function(e){u(e.data[0])})},[]);var b=p.id,f=Object(i.useState)([]),E=Object(c.a)(f,2),g=E[0],h=E[1],y=Object(i.useState)([]),x=Object(c.a)(y,2),v=x[0],N=x[1],w=Object(i.useState)(),O=Object(c.a)(w,2),_=O[0],j=O[1],k=Object(i.useState)(),S=Object(c.a)(k,2),C=S[0],z=S[1];Object(i.useEffect)(function(){m.a.get("/book/lab-test/".concat(t)).then(function(e){null!==e.data&&(h(e.data[0]),N(e.data[1]),j(e.data[0][0].Clinic_id),z(e.data[0][0].Price))}).catch(function(e){console.error(e)})},[]);var F=Object(i.useState)((e={Test_id:t,appoint_date:"",appoint_time:"",name:"",ph_number:"",clinic_id:_,user_id:b,gender:"",sample_collection:""},Object(n.a)(e,"appoint_date",""),Object(n.a)(e,"appoint_time",""),Object(n.a)(e,"payment",""),Object(n.a)(e,"total_amount",C),e)),A=Object(c.a)(F,2),B=A[0],L=A[1],W=function(e){L(function(t){return Object(l.a)({},t,Object(n.a)({},e.target.name,[e.target.value]))})},D=Object(o.o)();return r.a.createElement("div",{style:{backgroundColor:"rgb(193 193 206 / 36%)"}},r.a.createElement("div",{className:"row doctor-appoiment",style:{display:"flex",padding:"2rem"}},r.a.createElement("div",{className:" col-7 doctor-appoiment-doctor-profile",style:{backgroundColor:"white",padding:"2rem",margin:"1rem",borderRadius:"5px"}},g.map(function(e){return r.a.createElement("div",{className:"doctor-profile",style:{display:"flex",alignItems:"center"}},r.a.createElement("img",{src:"http://".concat("localhost",":8081/").concat(v[0].path),className:"card-img-top",alt:"...",style:{width:"25%"}}),r.a.createElement("div",{className:"deccription",style:{paddingTop:"7vh",width:"100%"}},r.a.createElement("h5",null,e.Test_Name),r.a.createElement("p",null,e.Test_Desc," "),r.a.createElement("div",{className:"location px-2 mx-2",style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-geo-alt-fill mx-3",viewBox:"0 0 16 16"},r.a.createElement("path",{d:"M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"})),r.a.createElement("p",{className:""},e.Landmark)),r.a.createElement("p",{className:"card-text text-success"},"Price:- ",r.a.createElement("span",{className:"text-success"},"\u20b9",e.Price))))})),r.a.createElement("div",{className:" col-4 from doctor-appoiment-from",style:{backgroundColor:"white",padding:"2rem 0",borderRadius:"5px"}},r.a.createElement("h2",{className:"text-primary"},"||Book here||"),r.a.createElement("br",null),r.a.createElement("form",{action:"submit",onSubmit:function(e){void 0!==b?(e.preventDefault(),m.a.post("/labbook",[B,_,b,C]).then(function(e){null!==e.data?"cod"===B.payment[0]?(alert("Lab Booking Successfull!!!"),D("/")):D("/book/lab-test/payment",{state:{data:B}}):(e.data,alert("Appoiment Failed"))}).catch(function(e){return console.log(e)})):(alert("Please Log In !! "),D("/login"))}},r.a.createElement("div",{className:"mb-3",style:{display:"flex",flexDirection:"column"}},r.a.createElement("label",{for:"name",className:"form-label   m-2",style:{textAlign:"left",fontWeight:"700"}},"Patitent Name : "),r.a.createElement("input",{type:"text",name:"name",onChange:W,className:"form-control ",id:"name","aria-describedby":"name",style:{border:"2px solid black",width:"85%",marginLeft:"5%"}})),r.a.createElement("div",{className:"p-2",style:{textAlign:"initial",fontWeight:"700"}},r.a.createElement("label",{className:"p-2",htmlFor:"phonenumber"},"Phone Number : "),r.a.createElement("input",{className:"p-2",onChange:W,name:"ph_number",id:"phone",type:"tel",required:!0,pattern:"[0-9]{3}[0-9]{3}[0-9]{4}",placeholder:"xxxxxxxxxx",style:{border:"2px solid black",width:"85%",marginLeft:"5%"}}),r.a.createElement("span",{className:"validity mx-2"}),r.a.createElement("p",{style:{fontWeight:"400",marginLeft:"2vw"}},"Format: 1234567890")),r.a.createElement("div",{className:" p-1",style:{textAlign:"initial",fontWeight:"700"}},r.a.createElement("label",{className:"p-1",htmlFor:"type_of_visite"},"Gender : "),r.a.createElement("br",null),r.a.createElement("div",{className:" p-1",style:{textAlign:"initial",fontWeight:"700"}},r.a.createElement("select",{onChange:W,required:!0,className:" p-1",type:"text",style:{width:"85%",border:"2px solid black",marginLeft:"5%",borderRadius:"5px"},placeholder:"Enter  Your Type Of Visite",name:"gender"},r.a.createElement("option",{value:"select",selected:!0},"Select"),r.a.createElement("option",{value:"male"},"Male"),r.a.createElement("option",{value:"female"},"Female"))," ",r.a.createElement("br",null))),r.a.createElement("div",{className:" p-1",style:{textAlign:"initial",fontWeight:"700"}},r.a.createElement("label",{className:"p-1",htmlFor:"type_of_visite"},"Sample Collection : "),r.a.createElement("br",null),r.a.createElement("div",{className:" p-1",style:{textAlign:"initial",fontWeight:"700"}},r.a.createElement("select",{onChange:W,required:!0,className:" p-1",type:"text",style:{width:"85%",border:"2px solid black",marginLeft:"5%",borderRadius:"5px"},placeholder:"Enter  Your Type Of Visite",name:"sample_collection"},r.a.createElement("option",{value:"select",selected:!0},"Select"),r.a.createElement("option",{value:"Home"},"Home"),r.a.createElement("option",{value:"Lab"},"Lab"))," ",r.a.createElement("br",null))),r.a.createElement("div",{className:"mb-3",style:{display:"flex",flexDirection:"column"}},r.a.createElement("label",{for:"name",className:"form-label   m-2",style:{textAlign:"left",fontWeight:"700"}},"Please Select Date : "),r.a.createElement("input",{type:"date",name:"appoint_date",onChange:W,className:"form-control ",id:"name","aria-describedby":"name",style:{border:"2px solid black",width:"85%",marginLeft:"5%",borderRadius:"5px"}})),r.a.createElement("div",{className:"mb-3",style:{display:"flex",flexDirection:"column"}},r.a.createElement("label",{for:"name",className:"form-label   m-2",style:{textAlign:"left",fontWeight:"700"}},"Please Select Time : "),r.a.createElement("input",{type:"time",name:"appoint_time",onChange:W,className:"form-control ",id:"name","aria-describedby":"name",style:{border:"2px solid black",width:"85%",marginLeft:"5%",borderRadius:"5px"}})),r.a.createElement("div",{className:" p-1",style:{textAlign:"initial",fontWeight:"700"}},r.a.createElement("label",{className:"p-1",htmlFor:"type_of_visite"},"Payment Mood : "),r.a.createElement("br",null),r.a.createElement("div",{className:" p-1",style:{textAlign:"initial",fontWeight:"700"}},r.a.createElement("select",{onChange:W,required:!0,className:" p-1",type:"text",style:{width:"85%",border:"2px solid black",marginLeft:"5%",borderRadius:"5px"},placeholder:"Enter  Your Type Of Visite",name:"payment"},r.a.createElement("option",{value:"select",selected:!0},"Select"),r.a.createElement("option",{value:"online_banking"},"Online Banking"),r.a.createElement("option",{value:"cod"},"COD"))," ",r.a.createElement("br",null))),r.a.createElement("button",{type:"submit",className:"btn btn-primary mx-3"},"Submit"),r.a.createElement("button",{type:"reset",className:"btn btn-warning mx-3"},"Clear")))),r.a.createElement("div",{style:{backgroundColor:"#0000ff1c"}},r.a.createElement(s.a,null)))}}}]);
//# sourceMappingURL=70.f7f08d2e.chunk.js.map