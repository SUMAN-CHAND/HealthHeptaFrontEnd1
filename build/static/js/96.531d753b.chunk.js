(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{336:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n(1),r=n.n(a),o=n(6);function i(e){return r.a.createElement("div",null,r.a.createElement(o.b,{to:"/doctor/".concat(e.id),style:{textDecoration:"none"}},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:"http://".concat("localhost",":8081/").concat(e.imgpath),className:"card-img-top",alt:"...",style:{maxHeight:"13vh"}}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h6",{className:"card-title",style:{fontSize:"0.9rem"}},e.name),r.a.createElement("p",{className:"card-text",style:{fontSize:"0.6rem",marginBottom:"2px"}},e.description),r.a.createElement("p",{className:"card-text",style:{fontSize:"0.6rem",marginBottom:"2px"}},e.clnics),r.a.createElement("p",{className:"card-text",style:{fontSize:"0.6rem",marginBottom:"2px"}},e.clinic_descs),r.a.createElement("p",{className:"card-text",style:{fontSize:"0.6rem",marginBottom:"2px"}},e.location),r.a.createElement(o.b,{to:"/doctor/".concat(e.id),className:"btn",style:{fontSize:"0.7rem",backgroundColor:"#07dbc1"}},"Book Now"))))))}},360:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n(1),r=n.n(a),o=n(6);function i(e){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("span",{style:{textDecoration:"none"}},r.a.createElement("div",{className:"container",style:{textAlign:"center"}},r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:"http://".concat("localhost",":8081/").concat(e.img),className:"card-img-top",alt:"...",style:{maxHeight:"13vh"}}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},e.title," "),r.a.createElement("p",{className:"card-title"},e.desc," "),r.a.createElement("p",{className:"card-text"},"Location:-",e.location),r.a.createElement("p",{className:"card-text text-success"},"Price:- ",r.a.createElement("span",{className:"text-success"},"\u20b9",e.price)),r.a.createElement(o.b,{to:"/book/lab-test/".concat(e.id),className:"btn btn-primary",style:{fontSize:"0.9rem"}},e.btntext)))))))}},377:function(e,t,n){"use strict";n.d(t,"a",function(){return h});var a=n(3),r=n(1),o=n.n(r),i=n(336),c=(n(318),n(99)),l=n.n(c),s=n(7),u=n(329),m=n.n(u),d=n(28);function h(e){s.a.defaults.withCredentials=!0;var t={superLargeDesktop:{breakpoint:{max:4e3,min:1150},items:7},desktop:{breakpoint:{max:1150,min:700},items:5},tablet:{breakpoint:{max:700,min:450},items:3},mobile:{breakpoint:{max:450,min:0},items:2}},n=Object(r.useState)([]),c=Object(a.a)(n,2),u=c[0],h=c[1],p=Object(r.useState)([]),f=Object(a.a)(p,2),v=f[0],y=f[1],g=Object(r.useState)(!1),b=Object(a.a)(g,2),E=b[0],x=b[1];return void 0===e.location&&Object(r.useEffect)(function(){s.a.get("/doctors").then(function(e){null!==e.data&&(h(e.data[0]),y(e.data[1]),x(!0))}).catch(function(e){console.error(e)})},[]),o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a,null,o.a.createElement("title",null,"healthhepta.com"),o.a.createElement("meta",{name:"description",content:"Search pharmacy near you. Book your lab test with our platform. Find Doctor near you .schedule Doctor appointment online 24/7 even after hours."})),o.a.createElement("div",null,o.a.createElement("div",{className:"container",style:{marginTop:"1vh"}},o.a.createElement("h3",{className:"py-1"},"|| Meet our Doctors ||"),E?o.a.createElement(l.a,{responsive:t,className:"allDoctorsCarousel"},u.map(function(e){return o.a.createElement("div",{key:e.id},v.map(function(t){return o.a.createElement("div",{key:t.id},parseInt(e.doctor_imageId)===t.id?o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{imgpath:t.path,name:e.doc_name,description:e.doc_desc,location:e.location,clnics:e.clnic,id:e.id,clinic_descs:e.clinic_desc})):o.a.createElement(o.a.Fragment,null))}))})):o.a.createElement(m.a,{color:"blue"})),o.a.createElement("div",{className:"container",style:{marginTop:"1vh"}},o.a.createElement("h3",{className:"py-1"},"||Online Doctor Counselling ||"),E?o.a.createElement(l.a,{responsive:t,className:"allDoctorsCarousel"},u.filter(function(e){return"online"===e.type_of_visite.toLowerCase()}).map(function(e){return o.a.createElement("div",{key:e.id},v.map(function(t){return o.a.createElement("div",{key:t.id},parseInt(e.doctor_imageId)===t.id?o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{imgpath:t.path,name:e.doc_name,description:e.doc_desc,location:e.location,clnics:e.clnic,id:e.id,clinic_descs:e.clinic_desc})):o.a.createElement(o.a.Fragment,null))}))})):o.a.createElement(m.a,{color:"blue"}))))}},380:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var a=n(10),r=n(3),o=n(1),i=n.n(o),c=n(7),l=n(8);function s(){s=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(_){l=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var o=t&&t.prototype instanceof h?t:h,i=Object.create(o.prototype),c=new L(r||[]);return a(i,"_invoke",{value:w(e,n,c)}),i}function m(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(_){return{type:"throw",arg:_}}}e.wrap=u;var d={};function h(){}function p(){}function f(){}var v={};l(v,o,function(){return this});var y=Object.getPrototypeOf,g=y&&y(y(j([])));g&&g!==t&&n.call(g,o)&&(v=g);var b=f.prototype=h.prototype=Object.create(v);function E(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function x(e,t){var r;a(this,"_invoke",{value:function(a,o){function i(){return new t(function(r,i){!function a(r,o,i,c){var l=m(e[r],e,o);if("throw"!==l.type){var s=l.arg,u=s.value;return u&&"object"==typeof u&&n.call(u,"__await")?t.resolve(u.__await).then(function(e){a("next",e,i,c)},function(e){a("throw",e,i,c)}):t.resolve(u).then(function(e){s.value=e,i(s)},function(e){return a("throw",e,i,c)})}c(l.arg)}(a,o,r,i)})}return r=r?r.then(i,i):i()}})}function w(e,t,n){var a="suspendedStart";return function(r,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw o;return S()}for(n.method=r,n.arg=o;;){var i=n.delegate;if(i){var c=k(i,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var l=m(e,t,n);if("normal"===l.type){if(a=n.done?"completed":"suspendedYield",l.arg===d)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(a="completed",n.method="throw",n.arg=l.arg)}}}function k(e,t){var n=t.method,a=e.iterator[n];if(void 0===a)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,k(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var r=m(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,d;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function j(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,r=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:S}}function S(){return{value:void 0,done:!0}}return p.prototype=f,a(b,"constructor",{value:f,configurable:!0}),a(f,"constructor",{value:p,configurable:!0}),p.displayName=l(f,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,l(e,c,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},E(x.prototype),l(x.prototype,i,function(){return this}),e.AsyncIterator=x,e.async=function(t,n,a,r,o){void 0===o&&(o=Promise);var i=new x(u(t,n,a,r),o);return e.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},E(b),l(b,c,"Generator"),l(b,o,function(){return this}),l(b,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),n=[];for(var a in t)n.push(a);return n.reverse(),function e(){for(;n.length;){var a=n.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},e.values=j,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(n,a){return i.type="throw",i.arg=e,t.next=n,a&&(t.method="next",t.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var r=a.arg;O(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:j(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},e}function u(e){var t=e.onImageUpload,n=Object(o.useState)(null),u=Object(r.a)(n,2),m=u[0],d=u[1],h=Object(o.useState)([]),p=Object(r.a)(h,2),f=(p[0],p[1]),v=(Object(l.o)(),function(){var e=Object(a.a)(s().mark(function e(){var n,a,r;return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(m.size>1e5)){e.next=4;break}alert("You File size is more then 1Mb !! \n Please ensure the file size is below 1 MB"),e.next=19;break;case 4:if(!m){e.next=19;break}return(n=new FormData).append("image",m),e.prev=7,e.next=10,c.a.post("/upload/prescription",n);case 10:a=e.sent,r=a.data.imageId,t(r),alert("Image Uplodad Succfully"),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(7),console.error("Error uploading image:",e.t0);case 19:case"end":return e.stop()}},e,null,[[7,16]])}));return function(){return e.apply(this,arguments)}}());Object(o.useEffect)(function(){y()},[]);var y=function(){c.a.get("/images/prescription").then(function(e){f(e.data)}).catch(function(e){console.error("Image retrieval error: "+e)})};return i.a.createElement("div",{className:"image-upload"},i.a.createElement("input",{type:"file",onChange:function(e){d(e.target.files[0])}}),i.a.createElement("button",{className:"btn btn-warning m-2",onClick:v},"Upload Image"),i.a.createElement("p",{className:"text-danger"},"*Please ensure the file size is below 1 MB*"))}},419:function(e,t,n){e.exports=n.p+"static/media/lab.5566052f.webp"},420:function(e,t,n){"use strict";n.d(t,"a",function(){return h});var a=n(3),r=n(1),o=n.n(r),i=(n(105),n(318),n(99)),c=n.n(i),l=n(360),s=n(7),u=n(329),m=n.n(u),d=n(28);function h(e){var t=Object(r.useState)([]),n=Object(a.a)(t,2),i=n[0],u=n[1],h=Object(r.useState)([]),p=Object(a.a)(h,2),f=p[0],v=p[1],y=Object(r.useState)(!1),g=Object(a.a)(y,2),b=g[0],E=g[1];return void 0===e.location?Object(r.useEffect)(function(){s.a.get("/laboratory/lab_tests").then(function(e){null!==e.data&&(u(e.data[0]),v(e.data[1]),E(!0))}).catch(function(e){console.error(e)})},[]):Object(r.useEffect)(function(){s.a.get("/madicine/medicineshops/".concat(e.location)).then(function(e){null!==e.data&&(u(e.data),v(e.data[1]),E(!0))}).catch(function(e){console.error(e)})},[]),o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a,null,o.a.createElement("title",null,"healthhepta.com"),o.a.createElement("meta",{name:"description",content:"Search pharmacy near you. Book your lab test with our platform. Find Doctor near you .schedule Doctor appointment online 24/7 even after hours."})),o.a.createElement("div",null,o.a.createElement("div",{className:"container",style:{marginTop:"1vh"}},o.a.createElement("h3",{className:"py-1"},"||Browse All Type Of Tests||"),b?o.a.createElement(c.a,{responsive:{superLargeDesktop:{breakpoint:{max:4e3,min:1150},items:7},desktop:{breakpoint:{max:1150,min:1024},items:5},tablet:{breakpoint:{max:1024,min:560},items:3},mobile:{breakpoint:{max:560,min:0},items:2}},className:"allLabTestCarousel"},i.map(function(e){return o.a.createElement("div",{key:e.Test_id},f.map(function(t){return o.a.createElement("div",{key:t.id},parseInt(e.test_imageId)===t.id?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,o.a.createElement(l.a,{img:t.path,title:e.Test_Name,desc:e.Test_Desc,id:e.Test_id,location:e.Landmark,price:e.Price,btntext:"Book Now"})," ")):o.a.createElement(o.a.Fragment,null))}))})):o.a.createElement(m.a,{color:"blue"}))))}},421:function(e,t,n){e.exports=n.p+"static/media/Clinic.351e44ca.webp"},473:function(e,t,n){"use strict";var a=n(3),r=n(1),o=n.n(r),i=(n(318),n(99)),c=n.n(i),l=n(6),s=n(19),u=n.n(s),m=n(380),d={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",padding:"3%",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"#4c4cce",textAlign:"center",borderRadius:"5%"}};function h(e){var t=o.a.useState(!1),n=Object(a.a)(t,2),r=n[0],i=n[1];function c(){document.body.style.overflow="unset",i(!1)}return o.a.createElement("div",{className:" "},o.a.createElement(l.b,{style:{textDecoration:"none"}},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"card  "},o.a.createElement("img",{src:"http://".concat("localhost",":8081/").concat(e.img),className:"card-img-top",alt:"...",style:{maxHeight:"13vh"}}),o.a.createElement("div",{className:"card-body"},o.a.createElement("p",{className:"card-title",style:{fontWeight:"800"}},e.title),o.a.createElement("p",{className:"card-text"},e.phone),o.a.createElement("p",{className:"card-text"},e.location),o.a.createElement(l.b,{to:"/particular-laboratory/".concat(e.id),className:"btn btn-primary",style:{fontSize:"0.7rem"},onClick:function(){i(!0)}},e.btntext),o.a.createElement(u.a,{isOpen:r,onAfterOpen:function(){document.body.style.overflow="hidden"},onRequestClose:c,style:d,contentLabel:"Example Modal"},o.a.createElement(m.a,{closeTheModal:c})))))))}var p=n(7),f=n(329),v=n.n(f),y=n(28);function g(e){var t=Object(r.useState)([]),n=Object(a.a)(t,2),i=n[0],l=n[1],s=Object(r.useState)([]),u=Object(a.a)(s,2),m=u[0],d=u[1],f=Object(r.useState)(!1),g=Object(a.a)(f,2),b=g[0],E=g[1];return void 0===e.location?Object(r.useEffect)(function(){p.a.get("/laboratory/laboratorys").then(function(e){null!==e.data&&(l(e.data[0]),d(e.data[1]),E(!0))}).catch(function(e){console.error(e)})},[]):Object(r.useEffect)(function(){p.a.get("/madicine/medicineshops/".concat(e.location)).then(function(e){null!==e.data&&(l(e.data),d(e.data[1]),E(!0))}).catch(function(e){console.error(e)})},[]),o.a.createElement(o.a.Fragment,null,o.a.createElement(y.a,null,o.a.createElement("title",null,"healthhepta.com"),o.a.createElement("meta",{name:"description",content:"Search pharmacy near you. Book your lab test with our platform. Find Doctor near you .schedule Doctor appointment online 24/7 even after hours."})),o.a.createElement("div",null,o.a.createElement("div",{className:"container",style:{marginTop:"1vh"}},o.a.createElement("h3",{className:"py-1"},"||Best Pathological Laboratory In Your Location ||"),b?o.a.createElement(c.a,{responsive:{superLargeDesktop:{breakpoint:{max:4e3,min:1150},items:7},desktop:{breakpoint:{max:1150,min:1024},items:5},tablet:{breakpoint:{max:1024,min:560},items:3},mobile:{breakpoint:{max:560,min:0},items:2}},className:"allLabsCarousel"},i.map(function(e){return o.a.createElement("div",{key:e.id},m.map(function(t){return o.a.createElement("div",{key:t.id},parseInt(e.SubAdminImageId)===t.id?o.a.createElement(o.a.Fragment,null,o.a.createElement(h,{id:e.id,img:t.path,title:e.name,phone:e.phone,location:e.landmark,openingtime:e.OpeningTime,closetime:e.CloseingTime,desc:e.description,btntext:"Book A Test Now"})):o.a.createElement(o.a.Fragment,null))}))})):o.a.createElement(v.a,{color:"blue"}))))}n.d(t,"a",function(){return g})},858:function(e,t,n){e.exports=n.p+"static/media/doctor1.ea759796.avif"},859:function(e,t,n){e.exports=n.p+"static/media/eyedoctor.8acbd95b.webp"},953:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(3),i=n(6),c=n(19),l=n.n(c),s=n(28),u={content:{overflowY:"hidden",top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},m={maxWidth:"18vw",height:"45vh"};function d(e){var t=r.a.useState(!1),n=Object(o.a)(t,2),a=n[0],c=n[1];function d(){document.body.style.overflow="unset",c(!1)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,null,r.a.createElement("title",null,"healthhepta.com"),r.a.createElement("meta",{name:"description",content:"Search pharmacy near you. Book your lab test with our platform. Find Doctor near you .schedule Doctor appointment online 24/7 even after hours."})),r.a.createElement("div",null,r.a.createElement("div",{className:"container",style:{display:"flex",alignItems:"center",justifyContent:"center"}},r.a.createElement("div",{className:"card card-service shadow",style:m},r.a.createElement("img",{src:e.img,style:{height:"25vh"},className:"card-img-top ",alt:"..."}),r.a.createElement("h5",{className:"card-title mt-1"},e.title),r.a.createElement("div",{className:"card-body pt-1",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between"}},r.a.createElement("p",{className:"card-text"},e.text),r.a.createElement(i.b,{className:"btn btn-primary btn-text",onClick:function(){c(!0)}},r.a.createElement("p",null,e.btnText)),r.a.createElement(l.a,{isOpen:a,onAfterOpen:function(){document.body.style.overflow="hidden"},onRequestClose:d,style:u,contentLabel:"Example Modal"},r.a.createElement(e.component,{closeTheModal:d})))))))}var h=n(858),p=n.n(h),f=n(100),v=n.n(f),y=n(419),g=n.n(y),b=n(421),E=n.n(b),x=n(46),w=n(45),k=n(61),N=n(62),O=(n(318),n(99)),L=n.n(O),j=n(948);function S(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,null,r.a.createElement("title",null,"healthhepta.com"),r.a.createElement("meta",{name:"description",content:"Search pharmacy near you. Book your lab test with our platform. Find Doctor near you .schedule Doctor appointment online 24/7 even after hours."})),r.a.createElement("div",null,r.a.createElement(j.a.div,{animate:{x:0,y:0,scale:1,rotate:0},className:"container"},r.a.createElement("h3",{className:""},"|| Affordable Healthcare Services For You ||"),r.a.createElement(L.a,{className:"ourserviceCarousel",responsive:{superLargeDesktop:{breakpoint:{max:4e3,min:1150},items:4},desktop:{breakpoint:{max:1150,min:1024},items:4},tablet:{breakpoint:{max:1024,min:560},items:3},mobile:{breakpoint:{max:560,min:0},items:2}},style:{height:"53vh"}},r.a.createElement("div",null,r.a.createElement(d,{img:p.a,title:"Visit a Doctor",text:"Search the best doctors, specialities, clinic & hospital nearest to you.",btnText:"Find Doctor Near You",component:w.a})),r.a.createElement("div",null,r.a.createElement(d,{img:v.a,title:"Medicines",text:"No need to stand in Pharma line,Skip pharmacy queue.Just click here.",btnText:"Order Your Medicines",component:x.a})),r.a.createElement("div",null,r.a.createElement(d,{img:g.a,title:"Lab Tests",text:"Book your lab test with our healthcare platfrom.",btnText:"Book Your Lab Test",component:k.a})),r.a.createElement("div",null,r.a.createElement(d,{img:E.a,title:"Clinic",text:"Book your near by clinic and save your time.",btnText:"Find Your Clinic",component:N.a}))))))}var _=n(377),F=n(10),T=n(859),D=n.n(T),C=n(8),I=n(7);function z(){z=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(S){l=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var o=t&&t.prototype instanceof d?t:d,i=Object.create(o.prototype),c=new O(r||[]);return a(i,"_invoke",{value:x(e,n,c)}),i}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(S){return{type:"throw",arg:S}}}e.wrap=s;var m={};function d(){}function h(){}function p(){}var f={};l(f,o,function(){return this});var v=Object.getPrototypeOf,y=v&&v(v(L([])));y&&y!==t&&n.call(y,o)&&(f=y);var g=p.prototype=d.prototype=Object.create(f);function b(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var r;a(this,"_invoke",{value:function(a,o){function i(){return new t(function(r,i){!function a(r,o,i,c){var l=u(e[r],e,o);if("throw"!==l.type){var s=l.arg,m=s.value;return m&&"object"==typeof m&&n.call(m,"__await")?t.resolve(m.__await).then(function(e){a("next",e,i,c)},function(e){a("throw",e,i,c)}):t.resolve(m).then(function(e){s.value=e,i(s)},function(e){return a("throw",e,i,c)})}c(l.arg)}(a,o,r,i)})}return r=r?r.then(i,i):i()}})}function x(e,t,n){var a="suspendedStart";return function(r,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw o;return j()}for(n.method=r,n.arg=o;;){var i=n.delegate;if(i){var c=w(i,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var l=u(e,t,n);if("normal"===l.type){if(a=n.done?"completed":"suspendedYield",l.arg===m)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(a="completed",n.method="throw",n.arg=l.arg)}}}function w(e,t){var n=t.method,a=e.iterator[n];if(void 0===a)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var r=u(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,m;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function L(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,r=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:j}}function j(){return{value:void 0,done:!0}}return h.prototype=p,a(g,"constructor",{value:p,configurable:!0}),a(p,"constructor",{value:h,configurable:!0}),h.displayName=l(p,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,l(e,c,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},b(E.prototype),l(E.prototype,i,function(){return this}),e.AsyncIterator=E,e.async=function(t,n,a,r,o){void 0===o&&(o=Promise);var i=new E(s(t,n,a,r),o);return e.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},b(g),l(g,c,"Generator"),l(g,o,function(){return this}),l(g,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),n=[];for(var a in t)n.push(a);return n.reverse(),function e(){for(;n.length;){var a=n.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},e.values=L,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(n,a){return i.type="throw",i.arg=e,t.next=n,a&&(t.method="next",t.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),N(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var r=a.arg;N(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:L(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),m}},e}function B(e){var t=Object(a.useState)(),n=Object(o.a)(t,2),c=n[0],l=(n[1],Object(C.o)()),s=function(){var t=Object(F.a)(z().mark(function t(){var n;return z().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n={specializes:e.specializes};try{I.a.post("/doctorspecializes",n).then(function(e){null!==e.data?l("/listofdoctor",{state:{data:e.data,location:c}}):(e.data,console.error(e.data.message))}).catch(function(e){return console.log(e)})}catch(a){console.error("An error occurred:",a)}case 2:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(i.b,{style:{textDecoration:"none"}},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:D.a,className:"card-img-top",alt:"..."}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h6",{className:"card-title",style:{fontSize:"0.9rem"}},e.specializes),r.a.createElement("button",{className:"btn btn-primary",style:{fontSize:"0.7rem"},onClick:function(e){return s()}}," View Doctor's "))))))}var P=n(329),G=n.n(P);function A(e){var t=Object(a.useState)([]),n=Object(o.a)(t,2),i=n[0],c=n[1],l=Object(a.useState)([]),u=Object(o.a)(l,2),m=(u[0],u[1],Object(a.useState)(!1)),d=Object(o.a)(m,2),h=d[0],p=d[1];return void 0===e.location&&Object(a.useEffect)(function(){I.a.get("/specializes-doctors").then(function(e){null!==e.data&&(c(e.data[0]),p(!0))}).catch(function(e){console.error(e)})},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,null,r.a.createElement("title",null,"healthhepta.com"),r.a.createElement("meta",{name:"description",content:"Search pharmacy near you. Book your lab test with our platform. Find Doctor near you .schedule Doctor appointment online 24/7 even after hours."})),r.a.createElement("div",null,r.a.createElement("div",{className:"container",style:{marginTop:"1vh"}},r.a.createElement("h3",{className:"py-1"},"|| Find doctors in top specialities ||"),h?r.a.createElement(L.a,{responsive:{superLargeDesktop:{breakpoint:{max:4e3,min:1150},items:7},desktop:{breakpoint:{max:1150,min:700},items:5},tablet:{breakpoint:{max:700,min:450},items:3},mobile:{breakpoint:{max:450,min:0},items:2}},className:"allSpecialitiesDoctorsCarousel"},i.map(function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(B,{specializes:e.specializes}))})):r.a.createElement(G.a,{color:"blue"}))))}var Y=n(473),M=n(420);function R(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,null,r.a.createElement("title",null,"healthhepta.com"),r.a.createElement("meta",{name:"description",content:"Find Doctor near you .schedule Doctor appointment online 24/7 even after hours."})),r.a.createElement("div",null,r.a.createElement("div",{className:"service",style:{height:"100%",width:"100%",backgroundColor:"#99d9d9",paddingBottom:"2vh",paddingTop:"2vh"}},r.a.createElement(S,null),r.a.createElement(A,null),r.a.createElement(_.a,null),r.a.createElement(Y.a,null),r.a.createElement(M.a,null))))}n.d(t,"default",function(){return R})}}]);
//# sourceMappingURL=96.531d753b.chunk.js.map