(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{335:function(e,t,a){e.exports=a.p+"static/media/doctor2.42afdf94.webp"},360:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return o});var n=a(2),c=a(1),l=a.n(c),s=a(335),m=a.n(s),r=a(10),i=a(7);function o(){var e={display:"flex",alignItems:"center"},t=Object(c.useState)([]),a=Object(n.a)(t,2),s=a[0],o=a[1],u=Object(r.q)().user_id;Object(c.useEffect)(function(){i.a.get("/superadmin/orders/customer/".concat(u)).then(function(e){e.data&&o(e.data[0])}).catch(function(e){console.log(e)})},[]);var d=Object(r.o)();return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container mt-4 ",style:{minHeight:"50vh"}},l.a.createElement("div",{className:"product",style:{display:"flex",justifyContent:"center",alignItems:"center"}},l.a.createElement("img",{className:"modal-img mx-3 mb-3",style:{width:"15vw",borderRadius:"25%"},src:m.a,alt:""}),l.a.createElement("div",{className:"products  mx-3 mb-3"},l.a.createElement("h2",{className:""},"Customer Details"),l.a.createElement("hr",null),l.a.createElement("span",{style:e},l.a.createElement("p",{className:"mx-2"},"Customer Id : ")," ",l.a.createElement("p",null,s.id," ")),l.a.createElement("span",{style:e},l.a.createElement("p",{className:"mx-2"},"Customer Name : ")," ",l.a.createElement("p",null,s.name," ")),l.a.createElement("span",{style:e},l.a.createElement("p",{className:"mx-2"},"Customer Phone No : ")," ",l.a.createElement("p",null,s.phone," ")),l.a.createElement("span",{style:e},l.a.createElement("p",{className:"mx-2"},"Customer Address : ")," ",l.a.createElement("p",null,s.name,", ",s.Village,",",s.P_O,",",s.City,",",s.district,",",s.State,",",s.Pin," ")))),l.a.createElement("div",{className:"button"},l.a.createElement("button",{className:"btn btn-primary",onClick:function(){d("/superadmin",{state:{loggedIn:!0}})},style:{width:"20%",cursor:"pointer"}},"Back"))))}}}]);
//# sourceMappingURL=32.57b84beb.chunk.js.map