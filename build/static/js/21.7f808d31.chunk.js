(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{318:function(e,t,a){},329:function(e,t,a){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var l in t=arguments[a])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},l=this&&this.__createBinding||(Object.create?function(e,t,a,n){void 0===n&&(n=a);var l=Object.getOwnPropertyDescriptor(t,a);l&&("get"in l?t.__esModule:!l.writable&&!l.configurable)||(l={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,n,l)}:function(e,t,a,n){void 0===n&&(n=a),e[n]=t[a]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&l(t,e,a);return r(t,e),t},o=this&&this.__rest||function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(a[n[l]]=e[n[l]])}return a};Object.defineProperty(t,"__esModule",{value:!0});var c=i(a(1)),s=a(173),m=(0,a(174).createAnimation)("ClipLoader","0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}","clip");t.default=function(e){var t=e.loading,a=void 0===t||t,l=e.color,r=void 0===l?"#000000":l,i=e.speedMultiplier,d=void 0===i?1:i,u=e.cssOverride,p=void 0===u?{}:u,v=e.size,b=void 0===v?35:v,E=o(e,["loading","color","speedMultiplier","cssOverride","size"]),h=n({background:"transparent !important",width:(0,s.cssValue)(b),height:(0,s.cssValue)(b),borderRadius:"100%",border:"2px solid",borderTopColor:r,borderBottomColor:"transparent",borderLeftColor:r,borderRightColor:r,display:"inline-block",animation:"".concat(m," ").concat(.75/d,"s 0s infinite linear"),animationFillMode:"both"},p);return a?c.createElement("span",n({style:h},E)):null}},336:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var n=a(1),l=a.n(n),r=a(6);function i(e){return l.a.createElement("div",null,l.a.createElement(r.b,{to:"/doctor/".concat(e.id),style:{textDecoration:"none"}},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"card"},l.a.createElement("img",{src:"http://".concat("localhost",":8081/").concat(e.imgpath),className:"card-img-top",alt:"...",style:{maxHeight:"13vh"}}),l.a.createElement("div",{className:"card-body"},l.a.createElement("h6",{className:"card-title",style:{fontSize:"0.9rem"}},e.name),l.a.createElement("p",{className:"card-text",style:{fontSize:"0.6rem",marginBottom:"2px"}},e.description),l.a.createElement("p",{className:"card-text",style:{fontSize:"0.6rem",marginBottom:"2px"}},e.clnics),l.a.createElement("p",{className:"card-text",style:{fontSize:"0.6rem",marginBottom:"2px"}},e.clinic_descs),l.a.createElement("p",{className:"card-text",style:{fontSize:"0.6rem",marginBottom:"2px"}},e.location),l.a.createElement(r.b,{to:"/doctor/".concat(e.id),className:"btn",style:{fontSize:"0.7rem",backgroundColor:"#07dbc1"}},"Book Now"))))))}},377:function(e,t,a){"use strict";a.d(t,"a",function(){return p});var n=a(3),l=a(1),r=a.n(l),i=a(336),o=(a(318),a(99)),c=a.n(o),s=a(7),m=a(329),d=a.n(m),u=a(28);function p(e){s.a.defaults.withCredentials=!0;var t={superLargeDesktop:{breakpoint:{max:4e3,min:1150},items:7},desktop:{breakpoint:{max:1150,min:700},items:5},tablet:{breakpoint:{max:700,min:450},items:3},mobile:{breakpoint:{max:450,min:0},items:2}},a=Object(l.useState)([]),o=Object(n.a)(a,2),m=o[0],p=o[1],v=Object(l.useState)([]),b=Object(n.a)(v,2),E=b[0],h=b[1],g=Object(l.useState)(!1),f=Object(n.a)(g,2),w=f[0],y=f[1];return void 0===e.location&&Object(l.useEffect)(function(){s.a.get("/doctors").then(function(e){null!==e.data&&(p(e.data[0]),h(e.data[1]),y(!0))}).catch(function(e){console.error(e)})},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,null,r.a.createElement("title",null,"healthhepta.com"),r.a.createElement("meta",{name:"description",content:"Search pharmacy near you. Book your lab test with our platform. Find Doctor near you .schedule Doctor appointment online 24/7 even after hours."})),r.a.createElement("div",null,r.a.createElement("div",{className:"container",style:{marginTop:"1vh"}},r.a.createElement("h3",{className:"py-1"},"|| Meet our Doctors ||"),w?r.a.createElement(c.a,{responsive:t,className:"allDoctorsCarousel"},m.map(function(e){return r.a.createElement("div",{key:e.id},E.map(function(t){return r.a.createElement("div",{key:t.id},parseInt(e.doctor_imageId)===t.id?r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{imgpath:t.path,name:e.doc_name,description:e.doc_desc,location:e.location,clnics:e.clnic,id:e.id,clinic_descs:e.clinic_desc})):r.a.createElement(r.a.Fragment,null))}))})):r.a.createElement(d.a,{color:"blue"})),r.a.createElement("div",{className:"container",style:{marginTop:"1vh"}},r.a.createElement("h3",{className:"py-1"},"||Online Doctor Counselling ||"),w?r.a.createElement(c.a,{responsive:t,className:"allDoctorsCarousel"},m.filter(function(e){return"online"===e.type_of_visite.toLowerCase()}).map(function(e){return r.a.createElement("div",{key:e.id},E.map(function(t){return r.a.createElement("div",{key:t.id},parseInt(e.doctor_imageId)===t.id?r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{imgpath:t.path,name:e.doc_name,description:e.doc_desc,location:e.location,clnics:e.clnic,id:e.id,clinic_descs:e.clinic_desc})):r.a.createElement(r.a.Fragment,null))}))})):r.a.createElement(d.a,{color:"blue"}))))}},378:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var n=a(1),l=a.n(n),r=a(6);function i(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"container ",style:{marginTop:"3vh",marginBottom:"9vh"}},l.a.createElement("div",{className:"container text-center"},l.a.createElement("div",{className:"row banner",style:{justifyContent:"space-around"}},l.a.createElement("div",{className:"col baner-text",style:{maxHeight:"65vh",maxWidth:"35vw",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},l.a.createElement("div",{className:"p-2"},l.a.createElement("h1",{className:"Heading",style:{fontSize:"calc(1.8vw + 0.5rem)"}},e.heading," "),l.a.createElement("p",null," ",e.desc)),l.a.createElement("div",{className:"btn"},l.a.createElement(r.b,{className:"list-group-item list-group-item-action","aria-current":"true"},l.a.createElement("button",{type:"button",className:"btn btn-info book-btn py-3"},e.btntext))),l.a.createElement("div",{className:"socialIcon py-4"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"3vw",height:"3vh",fill:"currentColor",className:"bi bi-instagram ",viewBox:"0 0 16 16"},l.a.createElement("path",{d:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"})),l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"3vw",height:"3vh",fill:"currentColor",className:"bi bi-facebook ",viewBox:"0 0 16 16"},l.a.createElement("path",{d:"M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"})),l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"3vw",height:"3vh",fill:"currentColor",className:"bi bi-twitter ",viewBox:"0 0 16 16"},l.a.createElement("path",{d:"M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"})),l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"3vw",height:"3vh",fill:"currentColor",className:"bi bi-linkedin",viewBox:"0 0 16 16"},l.a.createElement("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"})))),l.a.createElement("div",{className:"col  banner-img",style:{maxHeight:"65vh",maxWidth:"35vw"}},l.a.createElement("img",{src:e.img,alt:"Banner",className:"text-center my-3 banner-img",style:{maxHeight:"65vh",maxWidth:"35vw"}}))))))}},421:function(e,t,a){e.exports=a.p+"static/media/Clinic.351e44ca.webp"},955:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(378),i=a(421),o=a.n(i);function c(){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("div",{id:"carouselExampleDark",className:"carousel carousel-dark slide"},l.a.createElement("div",{className:"carousel-indicators"},l.a.createElement("button",{type:"button","data-bs-target":"#carouselExampleDark","data-bs-slide-to":"0",className:"active","aria-current":"true","aria-label":"Slide 1"}),l.a.createElement("button",{type:"button","data-bs-target":"#carouselExampleDark","data-bs-slide-to":"1","aria-label":"Slide 2"}),l.a.createElement("button",{type:"button","data-bs-target":"#carouselExampleDark","data-bs-slide-to":"2","aria-label":"Slide 3"})),l.a.createElement("div",{className:"carousel-inner"},l.a.createElement("div",{className:"carousel-item active","data-bs-interval":"10000"},l.a.createElement(r.a,{heading:"Visit Our Clinic",desc:"when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal\r distribution of letters, as opposed to ",btntext:"Book Now",img:o.a})),l.a.createElement("div",{className:"carousel-item","data-bs-interval":"2000"},l.a.createElement(r.a,{heading:"Visit Our Clinic",desc:"when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal\r distribution of letters, as opposed to ",btntext:"Book Now",img:o.a})),l.a.createElement("div",{className:"carousel-item"},l.a.createElement(r.a,{heading:"Visit Our Clinic",desc:"when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal\r distribution of letters, as opposed to ",btntext:"Book Now",img:o.a}))),l.a.createElement("button",{className:"carousel-control-prev",style:{width:"5vw"},type:"button","data-bs-target":"#carouselExampleDark","data-bs-slide":"prev"},l.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),l.a.createElement("span",{className:"visually-hidden"},"Previous")),l.a.createElement("button",{className:"carousel-control-next",style:{width:"5vw"},type:"button","data-bs-target":"#carouselExampleDark","data-bs-slide":"next"},l.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),l.a.createElement("span",{className:"visually-hidden"},"Next")))))}a(318);var s=a(99),m=a.n(s),d=a(102),u=a.n(d),p=a(6);function v(e){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(p.b,{style:{textDecoration:"none"}},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"card"},l.a.createElement("img",{src:e.img,className:"card-img-top",alt:"..."}),l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},e.title),l.a.createElement("p",{className:"card-text"},e.location),l.a.createElement(p.b,{to:"/particular-clinic",className:"btn btn-primary",style:{fontSize:"0.9rem"}},e.btntext)))))))}var b=a(8);function E(){Object(b.m)().state;return l.a.createElement("div",null,l.a.createElement("div",{className:"container",style:{marginTop:"3vh"}},l.a.createElement("h1",{className:"py-3"},"||Best Medicines Seller In Your Location ||"),l.a.createElement(m.a,{responsive:{superLargeDesktop:{breakpoint:{max:4e3,min:1150},items:7},desktop:{breakpoint:{max:1150,min:1024},items:5},tablet:{breakpoint:{max:1024,min:560},items:3},mobile:{breakpoint:{max:560,min:0},items:2}}},l.a.createElement("div",null,l.a.createElement(v,{img:u.a,title:"Applo Clinic",location:"Kolkata",btntext:"Book Now"})," "),l.a.createElement("div",null,l.a.createElement(v,{img:u.a,title:"Applo Clinic",location:"Kolkata",btntext:"Book Now"})," "),l.a.createElement("div",null,l.a.createElement(v,{img:u.a,title:"Applo Clinic",location:"Kolkata",btntext:"Book Now"})," "),l.a.createElement("div",null,l.a.createElement(v,{img:u.a,title:"Applo Clinic",location:"Kolkata",btntext:"Book Now"})," "),l.a.createElement("div",null,l.a.createElement(v,{img:u.a,title:"Applo Clinic",location:"Kolkata",btntext:"Book Now"})," "),l.a.createElement("div",null,l.a.createElement(v,{img:u.a,title:"Applo Clinic",location:"Kolkata",btntext:"Book Now"})," "),l.a.createElement("div",null,l.a.createElement(v,{img:u.a,title:"Applo Clinic",location:"Kolkata",btntext:"Book Now"})," "),l.a.createElement("div",null,l.a.createElement(v,{img:u.a,title:"Applo Clinic",location:"Kolkata",btntext:"Book Now"})," "),l.a.createElement("div",null,l.a.createElement(v,{img:u.a,title:"Applo Clinic",location:"Kolkata",btntext:"Book Now"})," "),l.a.createElement("div",null,l.a.createElement(v,{img:u.a,title:"Applo Clinic",location:"Kolkata",btntext:"Book Now"})," "),l.a.createElement("div",null,l.a.createElement(v,{img:u.a,title:"Applo Clinic",location:"Kolkata",btntext:"Book Now"})," "))))}var h=a(377);function g(){return l.a.createElement("div",null,l.a.createElement("div",{className:"main-medicine-page"},l.a.createElement(c,null),l.a.createElement(E,null),l.a.createElement(h.a,null)))}a.d(t,"default",function(){return g})}}]);
//# sourceMappingURL=21.7f808d31.chunk.js.map