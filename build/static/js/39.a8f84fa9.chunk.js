(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{894:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return m});var n=a(3),l=a(1),c=a.n(l),r=a(8),s=a(7);function m(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),a=(t[0],t[1],Object(l.useState)([])),m=Object(n.a)(a,2),d=m[0],o=m[1],i=Object(l.useState)([]),u=Object(n.a)(i,2),E=u[0],p=u[1],N=Object(l.useState)([]),b=Object(n.a)(N,2),h=b[0],f=b[1],v=Object(r.q)(),g=v.user_id;Object(l.useEffect)(function(){s.a.get("/sub-admin/orders/customer/".concat(g)).then(function(e){e.data&&o(e.data[0])}).catch(function(e){console.log(e)})},[]);var x=v.order_id;console.log(x),Object(l.useEffect)(function(){s.a.get("/sub-admin/orders/order/".concat(x)).then(function(e){null!==e.data&&(console.log(e.data),p(e.data[0]),f(e.data[0]))}).catch(function(e){console.log(e)})},[]);Object(r.o)();var w,y=0,O=0,_=0,j=0;(E&&(w=E.length),w>0)&&(y=E.map(function(e){return e.product_price*e.discount/100*e.quantity}).reduce(function(e,t){return e+t},0));w>0&&(O=E.map(function(e){return e.product_price*e.quantity}).reduce(function(e,t){return e+t},0));if(w>0){var z=E.map(function(e){return e.product_price*e.sgst/100}),S=E.map(function(e){return e.product_price*e.cgst/100});j=z.reduce(function(e,t){return e+t},0),_=S.reduce(function(e,t){return e+t},0)}var k=_+j;return c.a.createElement("div",null,c.a.createElement("div",{className:"m-5 p-3 shadow",style:{border:"2px solid black"}},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"card-order "},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"invoice-title"},c.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",float:"right"}},c.a.createElement("h4",{className:"float-end font-size-15"},"OrderNo: ",h.length>0?h[0].id:void 0," ",c.a.createElement("span",{className:"badge bg-success font-size-12 ms-2"},h.length>0?h[0].status:void 0)),c.a.createElement("h4",{className:"float-end font-size-15"},"PaymentNo: ",h.length>0?h[0].payment_id:void 0," ",c.a.createElement("span",{className:"badge bg-success font-size-12 ms-2"},h.length>0?h[0].payment_status:void 0))),c.a.createElement("div",{className:"mb-4"},c.a.createElement("h2",{className:"mb-1 text-muted"},"Healthhepta.com")),c.a.createElement("div",{className:"text-muted"},c.a.createElement("p",{className:"mb-1"},"Po- Gokarna, Ps- Kandi, Gokarna, Murshidabad"),c.a.createElement("p",{className:"mb-1"},c.a.createElement("i",{className:"uil uil-envelope-alt me-1"}),"  Murshidabad, West Bengal, India"),c.a.createElement("p",null,c.a.createElement("i",{className:"uil uil-phone me-1"}),"742136"))),c.a.createElement("hr",{className:"my-4"}),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-6"},c.a.createElement("div",{className:"text-muted"},c.a.createElement("h5",{className:"font-size-16 mb-3"},"Billed To:"),c.a.createElement("h5",{className:"font-size-15 mb-2"},d.name),c.a.createElement("p",{className:"mb-1"},d.phone),c.a.createElement("p",{className:"mb-1"},d.name,", ",d.Village,",",d.P_O,",",d.City,",",d.district,",",d.State,",",d.pin_code))),c.a.createElement("div",{className:"col-sm-6"},c.a.createElement("div",{className:"text-muted text-sm-end"},c.a.createElement("div",null,c.a.createElement("h5",{className:"font-size-15 mb-1"},"Order No:"),c.a.createElement("p",null,h.length>0?h[0].id:void 0)),c.a.createElement("div",{className:"mt-4"},c.a.createElement("h5",{className:"font-size-15 mb-1"},"Order Date:"),c.a.createElement("p",null,h.length>0?h[0].order_date:void 0))))),c.a.createElement("div",{className:"py-2"},c.a.createElement("h5",{className:"font-size-15"},"Order Summary"),c.a.createElement("div",{className:"table-responsive"},c.a.createElement("table",{className:"table align-middle table-nowrap table-centered mb-0"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{style:{width:"70px"}},"No."),c.a.createElement("th",null,"Item"),c.a.createElement("th",null,"Price"),c.a.createElement("th",null,"Quantity"),c.a.createElement("th",{className:"text-end",style:{width:"120px"}},"Total"))),c.a.createElement("tbody",null,E.map(function(e,t){return c.a.createElement("tr",{key:t},c.a.createElement("th",{scope:"row"},e.product_id),c.a.createElement("td",null,c.a.createElement("div",null,c.a.createElement("h5",{className:"text-truncate font-size-14 mb-1"},e.product_name),c.a.createElement("p",{className:"text-muted mb-0"},e.description))),c.a.createElement("td",null,"\u20b9 ",e.product_price),c.a.createElement("td",null,e.quantity),c.a.createElement("td",{className:"text-end"},"\u20b9 ",e.quantity*e.product_price))}),c.a.createElement("tr",null),c.a.createElement("tr",null,c.a.createElement("th",{scope:"row",colspan:"4",className:"text-end"},"Sub Total"),c.a.createElement("td",{className:"text-end"},"\u20b9",O)),c.a.createElement("tr",null,c.a.createElement("th",{scope:"row",colspan:"4",className:"border-0 text-end"},"Discount :"),c.a.createElement("td",{className:"border-0 text-end"},"\u20b9",y)),c.a.createElement("tr",null,c.a.createElement("th",{scope:"row",colspan:"4",className:"border-0 text-end"},"Shipping Charge :"),c.a.createElement("td",{className:"border-0 text-end"},"\u20b9",25)),c.a.createElement("tr",null,c.a.createElement("th",{scope:"row",colspan:"4",className:"border-0 text-end"},"Tax"),c.a.createElement("td",{className:"border-0 text-end"},"\u20b9 ",k)),c.a.createElement("tr",null,c.a.createElement("th",{scope:"row",colspan:"4",className:"border-0 text-end"},"Total"),c.a.createElement("td",{className:"border-0 text-end"},c.a.createElement("h4",{className:"m-0 fw-semibold"},"\u20b9",O-y+25+k," ")))))),c.a.createElement("div",{className:"d-print-none mt-4"},c.a.createElement("div",{className:"float-end"},c.a.createElement("a",{href:"javascript:window.print()",className:"btn btn-success me-1"},c.a.createElement("i",{className:"fa fa-print"},"Print"))))))))))))}}}]);
//# sourceMappingURL=39.a8f84fa9.chunk.js.map