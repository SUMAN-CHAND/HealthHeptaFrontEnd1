(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{942:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return h});var n=a(10),r=a(2),l=a(1),o=a.n(l),i=a(11),c=a(6),s=(a(330),a(403)),m=a(375),u=a(107),d=a(7);function p(){p=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,n=Object.defineProperty||function(e,t,a){e[t]=a.value},r="function"==typeof Symbol?Symbol:{},l=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(L){c=function(e,t,a){return e[t]=a}}function s(e,t,a,r){var l=t&&t.prototype instanceof d?t:d,o=Object.create(l.prototype),i=new k(r||[]);return n(o,"_invoke",{value:N(e,a,i)}),o}function m(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(L){return{type:"throw",arg:L}}}e.wrap=s;var u={};function d(){}function h(){}function f(){}var E={};c(E,l,function(){return this});var y=Object.getPrototypeOf,v=y&&y(y(_([])));v&&v!==t&&a.call(v,l)&&(E=v);var b=f.prototype=d.prototype=Object.create(E);function g(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function w(e,t){var r;n(this,"_invoke",{value:function(n,l){function o(){return new t(function(r,o){!function n(r,l,o,i){var c=m(e[r],e,l);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"==typeof u&&a.call(u,"__await")?t.resolve(u.__await).then(function(e){n("next",e,o,i)},function(e){n("throw",e,o,i)}):t.resolve(u).then(function(e){s.value=e,o(s)},function(e){return n("throw",e,o,i)})}i(c.arg)}(n,l,r,o)})}return r=r?r.then(o,o):o()}})}function N(e,t,a){var n="suspendedStart";return function(r,l){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw l;return C()}for(a.method=r,a.arg=l;;){var o=a.delegate;if(o){var i=x(o,a);if(i){if(i===u)continue;return i}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var c=m(e,t,a);if("normal"===c.type){if(n=a.done?"completed":"suspendedYield",c.arg===u)continue;return{value:c.arg,done:a.done}}"throw"===c.type&&(n="completed",a.method="throw",a.arg=c.arg)}}}function x(e,t){var a=t.method,n=e.iterator[a];if(void 0===n)return t.delegate=null,"throw"===a&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==a&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+a+"' method")),u;var r=m(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,u;var l=r.arg;return l?l.done?(t[e.resultName]=l.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):l:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function _(e){if(e){var t=e[l];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:C}}function C(){return{value:void 0,done:!0}}return h.prototype=f,n(b,"constructor",{value:f,configurable:!0}),n(f,"constructor",{value:h,configurable:!0}),h.displayName=c(f,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,c(e,i,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},g(w.prototype),c(w.prototype,o,function(){return this}),e.AsyncIterator=w,e.async=function(t,a,n,r,l){void 0===l&&(l=Promise);var o=new w(s(t,a,n,r),l);return e.isGeneratorFunction(a)?o:o.next().then(function(e){return e.done?e.value:o.next()})},g(b),c(b,i,"Generator"),c(b,l,function(){return this}),c(b,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),a=[];for(var n in t)a.push(n);return a.reverse(),function e(){for(;a.length;){var n=a.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=_,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return o.type="throw",o.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var l=this.tryEntries[r],o=l.completion;if("root"===l.tryLoc)return n("end");if(l.tryLoc<=this.prev){var i=a.call(l,"catchLoc"),c=a.call(l,"finallyLoc");if(i&&c){if(this.prev<l.catchLoc)return n(l.catchLoc,!0);if(this.prev<l.finallyLoc)return n(l.finallyLoc)}else if(i){if(this.prev<l.catchLoc)return n(l.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return n(l.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var l=r;break}}l&&("break"===e||"continue"===e)&&l.tryLoc<=t&&t<=l.finallyLoc&&(l=null);var o=l?l.completion:{};return o.type=e,o.arg=t,l?(this.method="next",this.next=l.finallyLoc,u):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),j(a),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;j(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:_(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),u}},e}function h(){d.a.defaults.withCredentials=!0;var e=o.a.useState(!1),t=Object(r.a)(e,2),a=(t[0],t[1]);function h(){a(!0)}var f=Object(i.o)(),E=Object(l.useState)({}),y=Object(r.a)(E,2),v=y[0],b=y[1],g=Object(l.useState)({}),w=Object(r.a)(g,2),N=(w[0],w[1],Object(i.m)(),Object(l.useState)([])),x=Object(r.a)(N,2),O=x[0],j=x[1],k=Object(l.useState)([]),_=Object(r.a)(k,2),C=_[0],L=_[1],S=Object(l.useState)([]),A=Object(r.a)(S,2),P=(A[0],A[1],Object(l.useState)([])),T=Object(r.a)(P,2),I=(T[0],T[1],Object(l.useState)([])),F=Object(r.a)(I,2),D=F[0],G=F[1];Object(l.useEffect)(function(){d.a.get("/deleviry_partner/assigned/orders").then(function(e){null!==e.data&&G(e.data)}).catch(function(e){console.log(e)})},[]);Object(l.useEffect)(function(){d.a.get("/delivery_partner/home/profile").then(function(e,t){null!==e.data?b(e.data[0]):console.error(t)})},[]);var Y={backgroundColor:"rgb(207 244 252)",display:"flex",justifyContent:"space-between"},H=Object(l.useState)([]),R=Object(r.a)(H,2),W=R[0],B=(R[1],Object(l.useState)([])),J=Object(r.a)(B,2),Q=(J[0],J[1]),V=function(){var e=Object(n.a)(p().mark(function e(){var t;return p().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.post("/profile");case 3:(t=e.sent).data.success?(Q(void 0),f("/")):console.error(t.data.message),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("An error occurred:",e.t0);case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(){return e.apply(this,arguments)}}(),q={backgroundColor:"rgb(237 237 237)",display:"flex",justifyContent:"center",alignItems:"center",paddingTop:"1vh"};return o.a.createElement("div",null,o.a.createElement("div",{className:" partner-profile-full-class row",style:{height:"70vh",overflowX:"hidden"}},o.a.createElement("div",{className:"col-3",style:{borderRight:"2px solid black"}},o.a.createElement("div",{className:"container mt-5",style:{top:"50px"}},o.a.createElement("h5",{style:{backgroundColor:"#055160",padding:"5px",color:"white",borderRadius:"5px"}},"Quick Links"),o.a.createElement("hr",null),o.a.createElement("div",{className:"list-group shadow",id:"list-tab",role:"tablist"},o.a.createElement(c.b,{to:"#orders",className:"list-group-item active list-group-item-action    list-group-item-info",id:"list-summary-list","data-bs-toggle":"list",role:"tab","aria-controls":"list-order"},"Orders"),o.a.createElement(c.b,{to:"#your-commission",onClick:function(){d.a.get("/superadmin/own/delivery-partner-commissions").then(function(e){L(e.data),console.log(e.data)}).catch(function(e){console.error(e)})},className:"list-group-item list-group-item-action  list-group-item-info",id:"list-commission-service-wise-list","data-bs-toggle":"list",role:"tab","aria-controls":"list-commission-service-wise"},"Your Commission"),o.a.createElement(c.b,{to:"#profile",className:"list-group-item list-group-item-action  list-group-item-info",id:"list-summary-list","data-bs-toggle":"list",role:"tab","aria-controls":"list-profile"},"Profile"),o.a.createElement(c.b,{to:"#commission-service-wise",onClick:function(){d.a.get("/superadmin/delivery-partner-commissions").then(function(e){j(e.data)}).catch(function(e){console.error(e)})},className:"list-group-item list-group-item-action  list-group-item-info",id:"list-commission-service-wise-list","data-bs-toggle":"list",role:"tab","aria-controls":"list-commission-service-wise"},"Commission Service Wise")))),o.a.createElement("div",{className:"col-9",style:{marginTop:"2vh"}},o.a.createElement("div",{className:"tab-content shadow",id:"nav-tabContent",style:{color:"black",borderRadius:"5px"}},o.a.createElement("div",{className:"tab-pane fade show text-light",id:"profile",role:"tabpanel","aria-labelledby":"list-profile-list"},o.a.createElement("h2",{className:"p-2 text-dark"}," || Profile ||"),o.a.createElement("div",{className:"container text-dark ",style:q},o.a.createElement("div",{className:"profile-details",style:{minWidth:"95%",marginBottom:"2vh"}},o.a.createElement("div",{className:"tab-pane fade show active text-light",id:"profile",role:"tabpanel","aria-labelledby":"list-profile-list"},o.a.createElement("ul",{className:"list-group"},o.a.createElement("li",{className:"list-group-item ",style:Y}),o.a.createElement("li",{className:"list-group-item ",style:Y},o.a.createElement("h2",null,"Hi ",o.a.createElement("span",{style:{color:"#1facff"}},v.name),"!")),o.a.createElement("li",{className:"list-group-item ",style:Y},o.a.createElement("p",null,"Phone no:- ",v.ph_num)),o.a.createElement("li",{className:"list-group-item ",style:Y},o.a.createElement(o.a.Fragment,null,"Address :- ",v.name,", ",v.Village,",",v.P_O,",",v.City,",",v.district,",",v.State,",",v.Pin)),o.a.createElement("li",{className:"list-group-item ",style:Y},o.a.createElement("div",{className:" p-1",style:{fontWeight:"700",display:"flex",justifyContent:"space-between",width:"100%"}}))))))),o.a.createElement("div",{className:"tab-pane active fade text-light",id:"orders",role:"tabpanel",style:{opacity:"1"},"aria-labelledby":"list-Medicine-list"},o.a.createElement("h2",{className:"p-2 text-dark"}," Orders"),o.a.createElement("div",{className:"container text-dark",style:q},D.length>0?o.a.createElement("div",null,o.a.createElement("div",{className:"container text-dark ",style:q},o.a.createElement("table",{className:"table table-striped"},o.a.createElement("thead",{className:"thead-dark"},o.a.createElement("tr",null,o.a.createElement("th",{scope:"col"},"Id"),o.a.createElement("th",{scope:"col"},"Product Name"),o.a.createElement("th",{scope:"col"},"Order Total Amount"),o.a.createElement("th",{scope:"col"},"Product Quantity"),o.a.createElement("th",{scope:"col"},"Payment Status"),o.a.createElement("th",{scope:"col"},"Payment Type"),o.a.createElement("th",{scope:"col"},"Expected Delivery Date"),o.a.createElement("th",{scope:"col"},"See Customer"),o.a.createElement("th",{scope:"col"},"Action"))),o.a.createElement("tbody",null,D.filter(function(e){return"completed"!==e.status.toLowerCase()}).map(function(e,t){return o.a.createElement("tr",{key:t},o.a.createElement("th",{scope:"row"},e.id),o.a.createElement("td",null,e.product_name),o.a.createElement("td",null,e.total_amount),o.a.createElement("td",null,e.quantity),o.a.createElement("td",null,e.payment_status),o.a.createElement("td",null,e.payment_type),o.a.createElement("td",null,e.expected_delivery_date),o.a.createElement("td",null,o.a.createElement("button",{className:"btn btn-info"}," See User")),o.a.createElement("td",null," ","Delivery Persion Accepted"===e.status?o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{onClick:function(){return t=e.id,void(window.confirm("Are you sure that Order is Delivered?")?d.a.post("/delivery_partner/orders/complete/".concat(t)).then(function(e){e.data&&alert("Order Copeleted")}).catch(function(e){console.log(e)}):alert("Order Not Copeleted"));var t},className:"btn btn-warning"},"Complete The Order")):o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{onClick:function(){return t=e.id,void(window.confirm("Are you sure to Accept the Order?")?d.a.post("/delivery_partner/orders/accept/".concat(t)).then(function(e){e.data&&alert("Order Accepted")}).catch(function(e){console.log(e)}):alert("Order Not Accepted"));var t},className:"btn btn-warning"},"Accept"))))}))))):o.a.createElement("p",null,"No Delivery Assigned!!"))),o.a.createElement("div",{className:"tab-pane fade",id:"lab",role:"tabpanel","aria-labelledby":"list-Lab-list"},o.a.createElement("h2",{className:"p-2"}," Your Lab Appointments"),o.a.createElement("div",{className:"container text-dark",style:q},o.a.createElement("table",{className:"table table-striped"},o.a.createElement("thead",{className:"thead-dark"},o.a.createElement("tr",null,o.a.createElement("th",{scope:"col"},"ID"),o.a.createElement("th",{scope:"col"},"Test ID"),o.a.createElement("th",{scope:"col"},"Patient Name"),o.a.createElement("th",{scope:"col"},"Patient Phone no:"),o.a.createElement("th",{scope:"col"},"appoint_date"),o.a.createElement("th",{scope:"col"},"appoint_time"),o.a.createElement("th",{scope:"col"},"Test Name"),o.a.createElement("th",{scope:"col"},"Semple Collection"),o.a.createElement("th",{scope:"col"},"Clinic"),o.a.createElement("th",{scope:"col"},"Appoiment Status"),o.a.createElement("th",{scope:"col"},"Action"))),o.a.createElement("tbody",null,W.length>0?o.a.createElement(o.a.Fragment,null,W.map(function(e,t){return o.a.createElement("tr",{key:t},o.a.createElement("th",{scope:"row"},e.id),o.a.createElement("td",null,e.Test_id),o.a.createElement("td",null,e.name),o.a.createElement("td",null,e.ph_number),o.a.createElement("td",null,e.appoint_date),o.a.createElement("td",null,e.appoint_time),o.a.createElement("td",null,e.Test_Name),o.a.createElement("td",null,e.sample_collection),o.a.createElement("td",null,e.sub_name),o.a.createElement("td",null,e.LabTestStatus),o.a.createElement("td",null," ",o.a.createElement(c.b,{to:"/reschedule/".concat(e.id)},o.a.createElement("button",{className:"btn btn-info m-1"},"Reschedule")),o.a.createElement(c.b,{className:" btn btn-info mx-2","aria-current":"page",onClick:h},"View Commission")))})):o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"no record found!!")))))),o.a.createElement("div",{className:"tab-pane fade text-light",id:"commission-service-wise",role:"tabpanel","aria-labelledby":"list-commission-service-wise-list"},o.a.createElement("span",{style:{display:"flex",justifyContent:"space-between"}},o.a.createElement("h2",{className:"p-2 mx-3"},"||  Partner Commission ||")),o.a.createElement("div",{className:"container text-dark",style:q},o.a.createElement("div",{id:"partner-commission"},o.a.createElement("table",{className:"table table-striped"},o.a.createElement("thead",{className:"thead-dark"},o.a.createElement("tr",null,o.a.createElement("th",{scope:"col"}," Id"),o.a.createElement("th",{scope:"col"},"Service Type"),o.a.createElement("th",{scope:"col"},"Commission Type"),o.a.createElement("th",{scope:"col"},"Commission"))),o.a.createElement("tbody",null,O.map(function(e,t){return o.a.createElement("tr",{key:t},o.a.createElement("th",{scope:"row"},e.id),o.a.createElement("td",null,e.service_type),o.a.createElement("td",null,e.commision_type),o.a.createElement("td",null,e.commision))})))))),o.a.createElement("div",{className:"tab-pane fade text-light",id:"your-commission",role:"tabpanel","aria-labelledby":"list-your-commission-list"},o.a.createElement("span",{style:{display:"flex",justifyContent:"space-between"}},o.a.createElement("h2",{className:"p-2 mx-3"},"||  Your Commission ||")),o.a.createElement("div",{className:"container text-dark",style:q},o.a.createElement("div",{id:"partner-commission"},o.a.createElement("table",{className:"table table-striped"},o.a.createElement("thead",{className:"thead-dark"},o.a.createElement("tr",null,o.a.createElement("th",{scope:"col"}," Id"),o.a.createElement("th",{scope:"col"},"Service Type"),o.a.createElement("th",{scope:"col"},"Commission Type"),o.a.createElement("th",{scope:"col"},"Commission"),o.a.createElement("th",{scope:"col"},"Order Id"))),o.a.createElement("tbody",null,C.map(function(e,t){return o.a.createElement("tr",{key:t},o.a.createElement("th",{scope:"row"},e.id),o.a.createElement("td",null,e.service_type),o.a.createElement("td",null,e.commision_type),o.a.createElement("td",null,e.commision),o.a.createElement("td",null,e.order_id))}))))))))),o.a.createElement("div",{className:"partner-profile-full-class-mob row m-2 p-2"},o.a.createElement("div",{className:"shadow"},o.a.createElement("div",null,o.a.createElement("nav",null,o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("div",{style:{position:"absolute"}},"Hey! HealthHepta Customer")),o.a.createElement("div",null)))),o.a.createElement("div",{className:"showOptions",style:{paddingTop:"4vh",display:"flex",flexDirection:"column",paddingBottom:"2vh"}},o.a.createElement("div",null,o.a.createElement(c.b,{to:"orders"},o.a.createElement("button",{type:"button",className:"btn btn-outline-info m-2 p-2",style:{width:"32vw",height:"7vh",cursor:"pointer"}},"Orders")),o.a.createElement(c.b,{to:"lab-booking"},o.a.createElement("button",{type:"button",className:"btn btn-outline-info m-2 p-2",style:{width:"32vw",height:"7vh",cursor:"pointer"}},"Lab Booking "))),o.a.createElement("div",null,o.a.createElement(c.b,{to:"appoiments"},o.a.createElement("button",{type:"button",className:"btn btn-outline-info m-2 p-2",style:{width:"32vw",height:"7vh",cursor:"pointer"}},"Appoiments")),o.a.createElement(c.b,{to:"clinic"}," ",o.a.createElement("button",{type:"button",className:"btn btn-outline-info m-2 p-2",style:{width:"32vw",height:"7vh",cursor:"pointer"}},"Clinic"))),o.a.createElement(c.b,{to:"/"},o.a.createElement("button",{type:"button",className:"btn btn-info m-2 p-2",style:{width:"90%",height:"7vh",cursor:"pointer"}},"Shop Now")))),o.a.createElement("div",{className:"gap",style:{width:"100%",height:"1vh",backgroundColor:"#80808070"}}),o.a.createElement("div",{style:{padding:"3vh 0"}},o.a.createElement("div",{className:"account-setting"},o.a.createElement("h1",{className:"m-2",style:{fontSize:"calc(1.375rem + 0.7vw)",fontWeight:"600",textAlign:"left"}},"Account Setting"),o.a.createElement("div",{className:"all-funtions"},o.a.createElement("div",{className:"edit-profile pt-3",style:{marginLeft:"3vw",textAlign:"left",display:"flex",justifyContent:"space-between",alignItems:"center"}},o.a.createElement("div",{style:{display:"flex"}},o.a.createElement(s.a,{style:{color:"blue",height:"3vh",width:"16vw"}}),"Edit Profile"),o.a.createElement(m.a,null)),o.a.createElement("div",{className:"edit-profile pt-3",style:{marginLeft:"3vw",textAlign:"left",display:"flex",justifyContent:"space-between",alignItems:"center"}},o.a.createElement("div",{style:{display:"flex"}},o.a.createElement(u.a,{style:{color:"blue",height:"3vh",width:"16vw"}}),"Saved Address"),o.a.createElement(m.a,null))))),o.a.createElement("div",{className:"logout"},o.a.createElement("button",{type:"button",onClick:V,className:"btn btn-primary m-2 p-2",style:{width:"90%"}},"Log Out"))))}}}]);
//# sourceMappingURL=88.83a05faf.chunk.js.map