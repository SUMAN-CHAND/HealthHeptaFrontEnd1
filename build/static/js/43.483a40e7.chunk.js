(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{897:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return u});var n=a(3),c=a(1),l=a.n(c),r=a(8),o=a(6),d=a(7);function u(){var e=Object(c.useState)([]),t=Object(n.a)(e,2),a=t[0],u=t[1],s=Object(r.q)().user_id;Object(c.useEffect)(function(){console.log("click"),d.a.get("/superadmin/subadmin/orders/".concat(s)).then(function(e){null!==e.data&&u(e.data)}).catch(function(e){console.error(e)})},[]);var m=Object(r.o)();return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container mt-4 ",style:{minHeight:"50vh"}},l.a.createElement("table",{className:"table table-striped"},l.a.createElement("thead",{className:"thead-dark"},l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Id"),l.a.createElement("th",{scope:"col"},"Product id"),l.a.createElement("th",{scope:"col"},"Order_id"),l.a.createElement("th",{scope:"col"},"User_id"),l.a.createElement("th",{scope:"col"},"Order date"),l.a.createElement("th",{scope:"col"},"Status"),l.a.createElement("th",{scope:"col"},"Payment Staus"),l.a.createElement("th",{scope:"col"},"Payment Type"))),l.a.createElement("tbody",{style:{verticalAlign:"middle"}},a.map(function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("th",{scope:"row"},e.id),l.a.createElement("td",null,"img..."),l.a.createElement("td",null,e.product_id),l.a.createElement("td",null,e.user_id),l.a.createElement("td",null,e.order_date),l.a.createElement("td",null,e.status),l.a.createElement("td",null,e.payment_status),l.a.createElement("td",null,e.payment_type),l.a.createElement("td",null," ",l.a.createElement("button",{className:"btn btn-danger m-1",onClick:function(){return t=e.product_id,void(window.confirm("Are you sure to delete the Product?")?d.a.delete("/sub-admin/home/delete/".concat(t)).then(function(e){"success"===e.data&&alert("Product Delete Successfully")}).catch(function(e){console.log(e)}):alert("No Product Delete"));var t}},"Delete"),"  ",l.a.createElement(o.b,{to:"updateproduct/".concat(e.product_id)}," ",l.a.createElement("button",{style:{cursor:"pointer"},type:"button",className:"btn btn-warning m-1"},"Update"))," "))}))),l.a.createElement("div",{className:"button"},l.a.createElement("button",{className:"btn btn-primary",onClick:function(){m("/superadmin",{state:{loggedIn:!0}})},style:{width:"20%",cursor:"pointer"}},"Back"))))}}}]);
//# sourceMappingURL=43.483a40e7.chunk.js.map