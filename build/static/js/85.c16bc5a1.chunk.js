(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{318:function(e,t,a){},326:function(e,t,a){e.exports=a.p+"static/media/medicalproduct.a173a652.webp"},340:function(e,t,a){"use strict";a.d(t,"a",function(){return m});var n=a(3),c=a(1),l=a.n(c),r=(a(326),a(8)),o=a(6),s=a(346),i=a(7);function m(e){var t=Object(r.o)(),a=e.product_id,m="/addtocart/".concat(a),d=e.discount,u=e.price,p=u-u*d/100,E=Object(c.useState)(!1),g=Object(n.a)(E,2),b=g[0],f=g[1],y=Object(c.useState)(1),h=Object(n.a)(y,2),x=h[0],v=h[1],N=sessionStorage.getItem("LogedIn");sessionStorage.getItem("user_id");return l.a.createElement("div",{className:""},l.a.createElement(o.b,{style:{textDecoration:"none"}},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"card ",style:{alignItems:"center"}},l.a.createElement(o.b,{to:m},l.a.createElement("img",{src:"http://".concat("localhost",":8081/").concat(e.imgpath),className:"card-img-top",alt:"...",style:{maxHeight:"13vh"}})),l.a.createElement("div",{className:"card-body"},l.a.createElement(o.b,{to:m,style:{textDecoration:"none",color:"black"}},l.a.createElement("h5",{className:"card-title"},e.name),l.a.createElement("div",{style:{}},l.a.createElement("p",{style:{marginBottom:"1px"}},e.description),l.a.createElement("p",{className:"text-success",style:{marginBottom:"1px"}},"Price:- \u20b9",p),l.a.createElement("p",null,"MRP:- ",l.a.createElement("span",{style:{textDecoration:"line-through",color:"#878787"}},"\u20b9",e.price))),l.a.createElement("p",{className:"text-success card-body-product-discount",style:{marginRight:"10px"}},e.discount,"% Off")),b?l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{style:{display:"flex",justifyContent:"center"}},l.a.createElement("p",{style:{display:"flex"}},l.a.createElement("span",{className:"px-2",onClick:function(){x>0&&v(function(e){return e-1}),i.a.post("/product/decrease_quantity/".concat(a)).then(function(e){null!==e.data||e.data}).catch(function(e){return console.log(e)}),1===x&&f(!1)}},l.a.createElement(s.a,null)),l.a.createElement("span",null,l.a.createElement("h5",null,x)),"  ",l.a.createElement("span",{onClick:function(){v(function(e){return e+1}),i.a.post("/product/increase_quantity/".concat(a)).then(function(e){null!==e.data?console.log("success"):e.data}).catch(function(e){return console.log(e)})},className:"px-2"},l.a.createElement(s.b,null))))):l.a.createElement(l.a.Fragment,null,l.a.createElement(o.b,{onClick:function(){if(N)i.a.post("/addtocart/".concat(a,"/").concat(x)).then(function(e){null!==e.data?(console.log("success"),f(!0)):e.data}).catch(function(e){return console.log(e)});else{alert("Please Log In !! ");var e="/addtocart/".concat(a,"/");sessionStorage.setItem("redirectUrl",e),t("/login")}},type:"button",className:"btn ",style:{fontSize:"0.9rem",width:"80px",border:"2px solid black",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0",margin:"0"}},l.a.createElement("span",{className:"product-btn",style:{padding:"4px 22px 4px 6px"}},"Add"),l.a.createElement("span",{className:"p-1",style:{borderLeft:"1px solid black",backgroundColor:"#cae0e0f7 "}},l.a.createElement(s.b,null)))))))))}},358:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var n=a(3),c=a(1),l=a.n(c),r=a(6);function o(e){var t=l.a.useState(!1),a=Object(n.a)(t,2);a[0],a[1];var c=e.id;return l.a.createElement("div",{className:" "},l.a.createElement(r.b,{style:{textDecoration:"none"}},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"card  "},l.a.createElement("img",{src:"http://".concat("localhost",":8081/").concat(e.img),className:"card-img-top",alt:"...",style:{maxHeight:"13vh"}}),l.a.createElement("div",{className:"card-body"},l.a.createElement("p",{className:"card-title",style:{fontWeight:"800"}},e.title),l.a.createElement("p",{className:"card-text"},e.phone),l.a.createElement("p",{className:"card-text"},e.location),l.a.createElement(r.b,{to:"/medicineshop/products/".concat(c),className:"btn btn-primary",style:{fontSize:"0.7rem"}},e.btntext))))))}},936:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return u});var n=a(3),c=a(1),l=a.n(c),r=a(8),o=a(7),s=a(99),i=a.n(s),m=a(340),d=(a(318),a(358));function u(){var e=Object(r.q)().id;console.log(e);var t=Object(c.useState)([]),a=Object(n.a)(t,2),s=a[0],u=a[1],p=Object(c.useState)([]),E=Object(n.a)(p,2),g=E[0],b=E[1],f=Object(c.useState)([]),y=Object(n.a)(f,2),h=y[0],x=y[1],v=Object(c.useState)([]),N=Object(n.a)(v,2),j=N[0],k=N[1];return Object(c.useEffect)(function(){o.a.get("/medicineshop/products/".concat(e)).then(function(e){null!==e.data&&(u(e.data[0]),b(e.data[1]),x(e.data[2]),k(e.data[3]))}).catch(function(e){console.error(e)})},[]),l.a.createElement("div",{style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},l.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"}},l.a.createElement("div",{className:""},h.map(function(e){return l.a.createElement("div",{key:e.id},j.map(function(t){return l.a.createElement("div",{key:t.id,style:{width:"15vw"}},parseInt(e.SubAdminImageId)===t.id?l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{id:e.id,img:t.path,title:e.name,phone:e.phone,location:e.City,btntext:"View Products"})):l.a.createElement(l.a.Fragment,null))}))}))),s&&l.a.createElement("div",{className:"container",style:{marginTop:"3vh",marginBottom:"1vh"}},l.a.createElement("h3",{className:"py-1"},"|| All Products ||"),l.a.createElement(i.a,{responsive:{superLargeDesktop:{breakpoint:{max:4e3,min:1150},items:7},desktop:{breakpoint:{max:1150,min:700},items:5},tablet:{breakpoint:{max:700,min:450},items:3},mobile:{breakpoint:{max:450,min:0},items:2}},className:"productCarousel"},s.map(function(e){return l.a.createElement("div",{key:e.product_id},g.map(function(t){return l.a.createElement("div",{key:t.id},parseInt(e.productImageId)===t.id?l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,{imgpath:t.path,name:e.product_name,price:e.product_price,product_id:e.product_id,discount:e.discount,description:e.description})):l.a.createElement(l.a.Fragment,null))}))})),l.a.createElement("p",{style:{margin:"5px"}})),!s&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("p",null,"Data not found"))))}}}]);
//# sourceMappingURL=85.c16bc5a1.chunk.js.map