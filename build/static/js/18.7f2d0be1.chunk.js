(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{333:function(e,t,a){e.exports=a.p+"static/media/medicalproduct.a173a652.webp"},386:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var c=a(1),n=a.n(c),l=a(6);function r(e){var t=e.product_id,a="/addtocart/".concat(t),c=e.discount,r=e.price,s=r-r*c/100;return n.a.createElement("div",null,n.a.createElement("div",{className:" ProductCardForList m my-3",style:{display:"flex",alignItems:"center",justifyContent:"flex-start"}},n.a.createElement("img",{src:"http://".concat("localhost",":8081/").concat(e.imgpath),alt:"",style:{height:"5vh",width:"5vw"}}),n.a.createElement("span",{className:"py-1",style:{display:"flex",width:"100%",alignItems:"center",justifyContent:"space-evenly"}},n.a.createElement("p",{className:""},e.name),n.a.createElement("p",{className:""},e.description),n.a.createElement("p",{className:"text-success ",style:{marginRight:"10px"}},"Price:- \u20b9",s),n.a.createElement("p",{className:"",style:{textDecoration:"line-through",Color:"#878787"}},"\u20b9",e.price),n.a.createElement("p",{className:"text-success ",style:{marginRight:"10px"}},e.discount,"% Off"),n.a.createElement(l.b,{to:a,className:"btn",style:{fontSize:"0.9rem",backgroundColor:"#0cbea9"}}," ",n.a.createElement("p",null,"View Detail")))))}},877:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return u});var c=a(2),n=a(1),l=a.n(n),r=(a(333),a(386)),s=a(11),o=a(7),i=a(348);function u(){o.a.defaults.withCredentials=!0;var e=Object(s.q)().product_id,t=Object(n.useState)([]),a=Object(c.a)(t,2),u=a[0],d=a[1],m=Object(n.useState)([]),p=Object(c.a)(m,2),f=p[0],E=p[1],h=Object(s.o)(),g=Object(n.useState)([]),y=Object(c.a)(g,2),b=y[0],v=y[1],N=Object(n.useState)([]),j=Object(c.a)(N,2),w=j[0],O=j[1],x=Object(n.useState)({}),C=Object(c.a)(x,2),k=(C[0],C[1]);Object(n.useEffect)(function(){o.a.get("/profile").then(function(e){k(e.data[0])})},[]),Object(n.useEffect)(function(){o.a.get("/addtocart/".concat(e)).then(function(e){d(e.data[0]),E(e.data[1])})},[]),Object(n.useEffect)(function(){o.a.get("/product").then(function(e){v(e.data[0]),O(e.data[1])})},[]);var _=sessionStorage.getItem("LogedIn"),S=(sessionStorage.getItem("user_id"),function(){if(_)o.a.post("/addtocart/".concat(e,"/").concat(D)).then(function(e){null!==e.data?h("/cart"):e.data}).catch(function(e){return console.log(e)});else{var t="/addtocart/".concat(e,"/");sessionStorage.setItem("redirectUrl",t),h("/login")}}),I=Object(n.useState)(1),L=Object(c.a)(I,2),D=L[0],F=L[1],R=function(){return F(function(e){return e+1})},J=function(){D>1&&F(function(e){return e-1})};return l.a.createElement("div",null,l.a.createElement("div",{className:"product",style:{overflowX:"hidden"}},l.a.createElement("div",{className:"row particular-product",style:{display:"flex",justifyContent:"center",backgroundColor:"#8080804f",overflow:"scroll"}},l.a.createElement("div",{className:"product-details col-6",style:{display:"flex",backgroundColor:"white",height:"81vh"}},l.a.createElement("div",{className:"col-5 mt-3 ",style:{marginLeft:"1vw"}},l.a.createElement("div",{className:"productimage "},f.map(function(e){return l.a.createElement("img",{src:"http://".concat("localhost",":8081/").concat(e.path),alt:"",style:{width:"25vw",height:"35vh"}})})),l.a.createElement("div",null,u.map(function(e){return l.a.createElement("p",null,e.fulldesctiption)}))),l.a.createElement("div",{className:"col-7  mt-4  "},u.map(function(e){return l.a.createElement("div",{key:e.id,className:"productdetail p-2 ",style:{borderRadius:"5px",height:"35vh"}},l.a.createElement("h2",null,e.product_name),l.a.createElement("p",null,e.description),l.a.createElement("hr",null),l.a.createElement("h5",null,"\u20b9 ",e.product_price-e.product_price*e.discount/100),l.a.createElement("h5",{style:{textDecoration:"line-through",Color:"#878787"}},"\u20b9 ",e.product_price),l.a.createElement("span",{style:{display:"flex",justifyContent:"center"}},l.a.createElement("h5",{className:"px-2"},"Qty"),l.a.createElement("p",{style:{display:"flex"}},l.a.createElement("span",{className:"px-2",onClick:J},l.a.createElement(i.b,null)),l.a.createElement("span",null,l.a.createElement("h5",null,D)),"  ",l.a.createElement("span",{onClick:R,className:"px-2"},l.a.createElement(i.c,null)))),l.a.createElement("p",null,"Inclusive of all taxes"),l.a.createElement("button",{onClick:S,type:"submit",className:"btn m-2",style:{backgroundColor:"#0cbea9"}},"Add To Cart"),l.a.createElement("p",{className:"my-2"},"%Offer%"),l.a.createElement("p",{className:"my-2"},e.discount,"% Off"))}))),l.a.createElement("div",{className:"col-5 products",style:{backgroundColor:"white"}},l.a.createElement("h5",{className:"m-2 p-2"},"Suggected Medicine"),b.filter(function(e){return"madicine"===e.category.toLowerCase()}).map(function(e){return l.a.createElement("div",{key:e.product_id},w.map(function(t){return l.a.createElement("div",{key:t.id},parseInt(e.productImageId)===t.id?l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,{imgpath:t.path,name:e.product_name,price:e.product_price,product_id:e.product_id,discount:e.discount,description:e.description})):l.a.createElement(l.a.Fragment,null))}))})))))}}}]);
//# sourceMappingURL=18.7f2d0be1.chunk.js.map