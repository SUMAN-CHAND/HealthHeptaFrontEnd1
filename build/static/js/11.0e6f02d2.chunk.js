(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{318:function(e,t,a){},336:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var c=a(1),n=a.n(c),l=a(6);function i(e){return n.a.createElement("div",null,n.a.createElement(l.b,{to:"/doctor/".concat(e.id),style:{textDecoration:"none"}},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"card"},n.a.createElement("img",{src:"http://".concat("localhost",":8081/").concat(e.imgpath),className:"card-img-top",alt:"...",style:{maxHeight:"13vh"}}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h6",{className:"card-title",style:{fontSize:"0.9rem"}},e.name),n.a.createElement("p",{className:"card-text",style:{fontSize:"0.6rem",marginBottom:"2px"}},e.description),n.a.createElement("p",{className:"card-text",style:{fontSize:"0.6rem",marginBottom:"2px"}},e.clnics),n.a.createElement("p",{className:"card-text",style:{fontSize:"0.6rem",marginBottom:"2px"}},e.clinic_descs),n.a.createElement("p",{className:"card-text",style:{fontSize:"0.6rem",marginBottom:"2px"}},e.location),n.a.createElement(l.b,{to:"/doctor/".concat(e.id),className:"btn",style:{fontSize:"0.7rem",backgroundColor:"#07dbc1"}},"Book Now"))))))}},393:function(e,t,a){"use strict";var c=a(3),n=a(1),l=a.n(n),i=(a(336),a(318),a(6));function r(e){return l.a.createElement("div",{className:"doctor-c-l",style:{padding:"5px"}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{className:"doctor  container shadow",style:{display:"flex",backgroundColor:"#dffffb"}},l.a.createElement("div",{className:"deccription",style:{display:"flex"}},l.a.createElement("img",{src:"http://".concat("localhost",":8081/").concat(e.imgpath),className:"card-img-top",alt:"...",style:{maxWidth:"6vw"}}),l.a.createElement("div",null,l.a.createElement("h6",{className:"fs-8"},e.name," "),l.a.createElement("h6",{className:"fs-9"},e.specializes," "),l.a.createElement("p",{className:"fs-10"},e.desc),l.a.createElement("div",{className:"location ",style:{display:"flex",justifyContent:"center",alignItems:"center"}},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-geo-alt-fill mx-3",viewBox:"0 0 16 16"},l.a.createElement("path",{d:"M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"})),l.a.createElement("p",null,e.location))),l.a.createElement("div",{className:"container doctor-c-d",style:{height:"20vh"}},l.a.createElement("h6",null,e.clinics),l.a.createElement("p",null,e.clinic_descs),l.a.createElement(i.b,{to:"/doctor/".concat(e.id),className:"btn",style:{fontSize:"0.7rem",width:"100%",backgroundColor:"#07dbc1"}},"Book Now")))))))}var o=a(7);function s(e){o.a.defaults.withCredentials=!0;var t=Object(n.useState)([]),a=Object(c.a)(t,2),i=a[0],s=a[1],m=Object(n.useState)([]),d=Object(c.a)(m,2),u=d[0],p=d[1],E=Object(n.useState)([]),f=Object(c.a)(E,2),g=f[0],h=f[1],y=Object(n.useState)([]),b=Object(c.a)(y,2),v=b[0],N=b[1];try{Object(n.useEffect)(function(){o.a.get("/doctors/suggestedDoctors").then(function(e){null!==e.data&&(h(e.data[0]),N(e.data[1]))}).catch(function(e){console.error(e)})},[]),Object(n.useEffect)(function(){o.a.get("/doctors").then(function(e){null!==e.data&&(s(e.data[0]),p(e.data[1]),console.log(i))}).catch(function(e){console.error(e)})},[])}catch(w){console.log(w)}return l.a.createElement("div",null,l.a.createElement("div",{className:"container",style:{marginTop:"5vh"}},l.a.createElement("h5",{className:"py-2"},"|| Suggested Best Doctor For You ||"),g?l.a.createElement(l.a.Fragment,null,g.map(function(e){return l.a.createElement("div",{key:e.product_id},v.map(function(t){return l.a.createElement("div",{key:t.id},parseInt(e.doctor_imageId)===t.id?l.a.createElement(l.a.Fragment,null,l.a.createElement(r,{imgpath:t.path,name:e.doc_name,description:e.doc_desc,location:e.location,clinics:e.clinic,id:e.id,clinic_descs:e.clinic_desc,specializes:e.specializes})):l.a.createElement(l.a.Fragment,null))}))})):l.a.createElement(l.a.Fragment,null,i.map(function(e){return l.a.createElement("div",{key:e.id},u.map(function(t){return l.a.createElement("div",{key:t.id},parseInt(e.doctor_imageId)===t.id?l.a.createElement(l.a.Fragment,null,l.a.createElement(r,{imgpath:t.path,name:e.doc_name,description:e.doc_desc,location:e.location,clinics:e.clinic,id:e.id,clinic_descs:e.clinic_desc,specializes:e.specializes})):l.a.createElement(l.a.Fragment,null))}))}))))}a.d(t,"a",function(){return s})},867:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return d});var c=a(3),n=a(1),l=a.n(n),i=a(8),r=a(6),o=a(393),s=a(7),m={maxWidth:"85vw",borderRadius:"5px",overflow:"hidden",background:"white",backgroundColor:"white",padding:"2vw"};function d(){var e=Object(n.useState)({}),t=Object(c.a)(e,2),a=t[0],d=t[1];Object(n.useEffect)(function(){s.a.get("/profile").then(function(e){d(e.data[0])})},[]),console.log(a.id);var u=a.id,p=Object(n.useState)([]),E=Object(c.a)(p,2),f=E[0],g=E[1],h=Object(n.useState)([]),y=Object(c.a)(h,2),b=y[0],v=y[1],N=Object(n.useState)([]),w=Object(c.a)(N,2),x=w[0],_=w[1],j=Object(i.q)(),O=j.id;Object(n.useEffect)(function(){s.a.get("/doctorsearch/".concat(j.id)).then(function(e){null!==e.data&&(g(e.data[0]),_(e.data[1]))}).catch(function(e){console.error(e)})},[]),Object(n.useEffect)(function(){s.a.get("/doctor/".concat(j.id)).then(function(e){if(null!==e.data){Date();v(e.data)}}).catch(function(e){console.error(e)})},[]);var k=Object(i.o)(),S=Object(n.useState)([]),z=Object(c.a)(S,2),C=z[0],D=z[1],I=Object(n.useState)([]),T=Object(c.a)(I,2),B=T[0],F=T[1];return Object(n.useEffect)(function(){s.a.get("/viewdetails/doctor/".concat(O)).then(function(e){e.data&&(D(e.data[0]),F(e.data[2]),console.log(e.data[2]))}).catch(function(e){console.log(e)})},[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"row particular-doctor-page",style:{margin:"0px",backgroundColor:"rgb(193 193 206 / 36%)",overflow:"scroll"}},l.a.createElement("div",{className:"col-8 particular-doctor",style:{position:"sticky",top:"0"}},l.a.createElement("div",{className:"doctor container  shadow",style:{margin:"3rem 2rem",backgroundColor:"white",width:"90%",padding:"5px",borderRadius:"5px"}},f.map(function(e){return l.a.createElement("div",{className:"doctor-profile",style:{display:"flex",alignItems:"center"}},l.a.createElement("img",{src:"http://".concat("localhost",":8081/").concat(x[0].path),className:"card-img-top",alt:"...",style:{width:"25%"}}),l.a.createElement("div",{className:"deccription",style:{paddingTop:"7vh",width:"100%",display:"flex",flexDirection:"column"}},l.a.createElement("h5",null,e.doc_name),l.a.createElement("p",null,e.doc_desc," "),l.a.createElement("div",{className:"location px-2 mx-2",style:{display:"flex",justifyContent:"center",alignItems:"center"}},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-geo-alt-fill mx-3",viewBox:"0 0 16 16"},l.a.createElement("path",{d:"M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"})),l.a.createElement("p",{className:""},e.location))),l.a.createElement("div",{className:"container "},l.a.createElement("h5",null,e.clinic),l.a.createElement("p",null,e.clinic_desc)))}),l.a.createElement("div",{className:"time-for-appoitment",style:{marginTop:"1rem",display:"flex",justifyContent:"center",alignItems:"center"}},l.a.createElement("div",{className:"day",style:{marginRight:"10vw",marginTop:"20px"}},b.map(function(e){return l.a.createElement("div",{className:"m-1 text-primary fs-5",onClick:function(){return t=e.weekly_day,a=e.starting_time,void k("/appoitment-from",{state:{doctor_id:O,appoint_date:t,appoint_time:a,clinic_id:f[0].clinic_id,user_id:u}});var t,a}},l.a.createElement("p",{className:"btn btn-outline-primary "},e.weekly_day))})),l.a.createElement("div",{className:"doctor-time"},l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("p",{className:"mx-3 m-1"},"Opening Time"),l.a.createElement("p",{className:"mx-3 m-1"},"Ending Time")),b.map(function(e){return l.a.createElement("div",{className:"after-noon",style:{margin:"0rem 0"}},l.a.createElement(r.b,null,l.a.createElement("button",{type:"button",className:"btn btn-outline-primary mx-3 m-1"},l.a.createElement("p",null," ",e.starting_time))),l.a.createElement(r.b,null,l.a.createElement("button",{type:"button",className:"btn btn-outline-primary mx-3 m-1"},l.a.createElement("p",null,e.ending_time," "))))})))),l.a.createElement("div",{className:"docter-ad shadow",style:{margin:"3rem 2rem",backgroundColor:"white",width:"90%",padding:"5px",borderRadius:"5px"}},l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container ",style:m},l.a.createElement("div",{className:"",style:{display:"flex",justifyContent:"center",alignItems:"center"}},l.a.createElement("div",null,C.map(function(e,t){return l.a.createElement("div",{className:"doctor-profile",style:{display:"flex"}},l.a.createElement("div",{className:"deccription",style:{margin:"0 1vw",padding:"0 1vw",display:"flex",alignItems:"center"}},l.a.createElement("div",{style:{display:"flex",alignItems:"self-start",flexDirection:"column",marginRight:"2vw"}},l.a.createElement("h5",null,"Doctor Name :- ",e.doc_name),l.a.createElement("p",null,"Doctor Description :- ",e.doc_desc," "),l.a.createElement("p",{className:""},"Location :- ",e.location),l.a.createElement("p",null,"Doctor Clinic :- ",e.clinic),l.a.createElement("p",null,"Clinic Description :- ",e.clinic_desc),l.a.createElement("p",null,"Doctor Specializes :- ",e.specializes),l.a.createElement("p",null,"Doctor Phone Number :- ",e.Phone_number),l.a.createElement("p",null,"Doctor Visit Type :- ",e.type_of_visite)),l.a.createElement("div",{className:"timeTable",style:{marginRight:"2vw"}},l.a.createElement("table",{className:"table table-striped"},l.a.createElement("thead",{className:"thead-dark"},l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Id"),l.a.createElement("th",{scope:"col"},"Day"),l.a.createElement("th",{scope:"col"},"Start Time"),l.a.createElement("th",{scope:"col"},"End Time"))),B.map(function(e,t){return l.a.createElement("tbody",{style:{verticalAlign:"middle"}},l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},t+1),l.a.createElement("td",null,e.weekly_day),l.a.createElement("td",null,e.starting_time),l.a.createElement("td",null,e.ending_time)))})))))}))))))),l.a.createElement("div",{className:"col-4 my-4 shadow list-of-doctor",style:{backgroundColor:"white",width:"32vw"}},l.a.createElement("div",null,l.a.createElement(o.a,null)))))}}}]);
//# sourceMappingURL=11.0e6f02d2.chunk.js.map