(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{867:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return f});var n=a(3),l=a(1),c=a.n(l),o=a(8),r=a(6),s=a(19),m=a.n(s),i=a(46),u=a(45),p=a(61),E=a(62),b=a(7),d={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};function f(){var e=c.a.useState(!1),t=Object(n.a)(e,2),a=t[0],s=t[1];function f(){s(!0)}function h(){document.body.style.overflow="hidden"}function y(){document.body.style.overflow="unset",s(!1)}var v=Object(o.m)().state.value,N=v.doctor_id,g=Object(l.useState)([]),w=Object(n.a)(g,2),C=w[0],k=w[1];return Object(l.useEffect)(function(){b.a.get("/doctorsearch/".concat(N)).then(function(e){null!==e.data&&k(e.data[0])}).catch(function(e){console.error(e)})},[]),c.a.createElement("div",null,c.a.createElement("div",{className:"container ",style:{borderRadius:"5px"}},c.a.createElement(r.b,{to:"/"},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"5vw",height:"5vh",fill:"currentColor",class:"bi bi-x",viewBox:"0 0 16 16",style:{marginLeft:"68vw",marginTop:"2vh"}},c.a.createElement("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"}))),c.a.createElement("div",{className:"container p-2 Appointment-confirm",style:{display:"flex",justifyContent:"center"}},c.a.createElement("h1",{className:"h-line"},"||"),c.a.createElement("h1",{style:{color:"black"}}," APPOINTMENT"),c.a.createElement("h1",{style:{color:"rgb(34 220 220)"}}," \xa0 CONFIRM"),c.a.createElement("h1",{className:"h-line"},"||")),C.map(function(e){return c.a.createElement("div",{className:"container p-2 "},c.a.createElement("h5",{className:"m-2"},v.name,", We have got you confirmed for your appointment."),c.a.createElement("h2",{className:"m-2"},v.appoint_time," || ",e.doc_name,",",e.doc_desc),c.a.createElement("h5",{className:"m-2"},v.appoint_date,",",c.a.createElement("br",null),e.clinic,", ",c.a.createElement("br",null),e.clinic_desc,",",c.a.createElement("br",null),e.location))}),"online"===v.type_of_visite[0]&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"m-3 p-3"},c.a.createElement("h5",{className:"text-success"},"To Meet Your Doctor Please Click ",c.a.createElement(r.b,{to:"/profile#appoiment"},c.a.createElement("span",{className:"text-primary",style:{cursor:"pointer"}},"Join")," ")),c.a.createElement(r.b,{to:"/profile#appoiment"},c.a.createElement("button",{className:"btn btn-info"},"Join")))),c.a.createElement("div",{className:"button d-flex m-3",style:{justifyContent:"center"}},c.a.createElement(r.b,{to:"/"},c.a.createElement("button",{type:"button",class:"btn btn-success p-3 mx-3"},"Go to Home "),"  "),c.a.createElement("div",{className:"d-print-none "},c.a.createElement("div",{className:"float-end"},c.a.createElement("a",{href:"javascript:window.print()",className:"btn btn-success me-1  p-3 mx-3"},c.a.createElement("i",{className:"fa fa-print"},"Print")))))),c.a.createElement("div",{className:"container extarnal-Link my-5"},c.a.createElement(r.b,{class:"btn p-2 m-3",style:{backgroundColor:"rgb(7 219 193)"},onClick:f},c.a.createElement("h5",null,"Book Another APPOINTMENT")," "),c.a.createElement(m.a,{isOpen:a,onAfterOpen:h,onRequestClose:y,style:d,contentLabel:"Example Modal"},c.a.createElement(u.a,{closeTheModal:y})),c.a.createElement(r.b,{class:"btn p-2 m-3",style:{backgroundColor:"rgb(7 219 193)"},onClick:f},c.a.createElement("h5",null,"Shop Medicine")," "),c.a.createElement(m.a,{isOpen:a,onAfterOpen:h,onRequestClose:y,style:d,contentLabel:"Example Modal"},c.a.createElement(i.a,{closeTheModal:y})),c.a.createElement(r.b,{class:"btn p-2 m-3",style:{backgroundColor:"rgb(7 219 193)"},onClick:f},c.a.createElement("h5",null,"Book Lab Test")," "),c.a.createElement(m.a,{isOpen:a,onAfterOpen:h,onRequestClose:y,style:d,contentLabel:"Example Modal"},c.a.createElement(p.a,{closeTheModal:y})),c.a.createElement(r.b,{class:"btn p-2 m-3",style:{backgroundColor:"rgb(7 219 193)"},onClick:f},c.a.createElement("h5",null,"Book Clinc Test")," "),c.a.createElement(m.a,{isOpen:a,onAfterOpen:h,onRequestClose:y,style:d,contentLabel:"Example Modal"},c.a.createElement(E.a,{closeTheModal:y}))))}}}]);
//# sourceMappingURL=11.22e344b9.chunk.js.map