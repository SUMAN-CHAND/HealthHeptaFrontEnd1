(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{926:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return o});var n=a(3),c=a(1),l=a.n(c),r=(a(25),a(368)),i=a(6),s=a(7);function o(){var e=Object(c.useState)([]),t=Object(n.a)(e,2),a=t[0],o=t[1],m=Object(c.useState)([]),d=Object(n.a)(m,2),u=(d[0],d[1]);Object(c.useEffect)(function(){s.a.get("/user/see-lab-booking").then(function(e){null!==e.data&&(o(e.data[0]),u(e.data[1]))}).catch(function(e){console.error(e)})},[]);var b=Object(c.useState)(!0),p=Object(n.a)(b,2);p[0],p[1];return l.a.createElement("div",null,l.a.createElement("div",{className:"tab-pane",id:"order",role:"tabpanel","aria-labelledby":"list-Medicine-list",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},l.a.createElement("h2",{className:"p-2"}," Your Lab Tests"),l.a.createElement("div",{className:"gap",style:{width:"100%",height:"1vh",backgroundColor:"#80808070",marginBottom:"25px"}}),a.map(function(e,t){return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.b,{to:"".concat(e.id),style:{textDecoration:"none",color:"black"}},l.a.createElement("div",{className:"",style:{width:"85vw",display:"flex",flexDirection:"initial",backgroundColor:"white",height:"15vh",alignItems:"center"}},l.a.createElement("div",{className:"card-body",style:{textAlign:"left",marginLeft:"5vw"}},l.a.createElement("h5",{className:"card-text"},"Appoiment Date:- ",e.appoint_date),l.a.createElement("h5",{className:"card-text"},"Appoiment Time:- ",e.appoint_time),l.a.createElement("h5",{className:"card-text"},"Patient Name :- ",e.name),l.a.createElement("h5",{className:"card-text"},"Test Name:- ",e.Test_Name),l.a.createElement("h5",{className:"card-text"},"Labrotory Name:- ",e.sub_name)),l.a.createElement("div",{className:"icons"},l.a.createElement(r.a,{style:{color:"blue"}})))),l.a.createElement("hr",{style:{width:"100vw"}}))})))}}}]);
//# sourceMappingURL=75.64cc4ced.chunk.js.map