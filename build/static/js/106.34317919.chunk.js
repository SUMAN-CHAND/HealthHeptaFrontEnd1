(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{328:function(e,t,a){"use strict";a.d(t,"a",function(){return u});var n=a(10),r=a(2),l=a(1),o=a.n(l),i=a(7);function c(){c=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,n=Object.defineProperty||function(e,t,a){e[t]=a.value},r="function"==typeof Symbol?Symbol:{},l=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function u(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(j){u=function(e,t,a){return e[t]=a}}function s(e,t,a,r){var l=t&&t.prototype instanceof d?t:d,o=Object.create(l.prototype),i=new C(r||[]);return n(o,"_invoke",{value:N(e,a,i)}),o}function m(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(j){return{type:"throw",arg:j}}}e.wrap=s;var p={};function d(){}function h(){}function f(){}var y={};u(y,l,function(){return this});var g=Object.getPrototypeOf,E=g&&g(g(P([])));E&&E!==t&&a.call(E,l)&&(y=E);var v=f.prototype=d.prototype=Object.create(y);function b(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function w(e,t){var r;n(this,"_invoke",{value:function(n,l){function o(){return new t(function(r,o){!function n(r,l,o,i){var c=m(e[r],e,l);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"==typeof s&&a.call(s,"__await")?t.resolve(s.__await).then(function(e){n("next",e,o,i)},function(e){n("throw",e,o,i)}):t.resolve(s).then(function(e){u.value=e,o(u)},function(e){return n("throw",e,o,i)})}i(c.arg)}(n,l,r,o)})}return r=r?r.then(o,o):o()}})}function N(e,t,a){var n="suspendedStart";return function(r,l){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw l;return L()}for(a.method=r,a.arg=l;;){var o=a.delegate;if(o){var i=x(o,a);if(i){if(i===p)continue;return i}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var c=m(e,t,a);if("normal"===c.type){if(n=a.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:a.done}}"throw"===c.type&&(n="completed",a.method="throw",a.arg=c.arg)}}}function x(e,t){var a=t.method,n=e.iterator[a];if(void 0===n)return t.delegate=null,"throw"===a&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==a&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+a+"' method")),p;var r=m(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,p;var l=r.arg;return l?l.done?(t[e.resultName]=l.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):l:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function P(e){if(e){var t=e[l];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:L}}function L(){return{value:void 0,done:!0}}return h.prototype=f,n(v,"constructor",{value:f,configurable:!0}),n(f,"constructor",{value:h,configurable:!0}),h.displayName=u(f,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,u(e,i,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},b(w.prototype),u(w.prototype,o,function(){return this}),e.AsyncIterator=w,e.async=function(t,a,n,r,l){void 0===l&&(l=Promise);var o=new w(s(t,a,n,r),l);return e.isGeneratorFunction(a)?o:o.next().then(function(e){return e.done?e.value:o.next()})},b(v),u(v,i,"Generator"),u(v,l,function(){return this}),u(v,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),a=[];for(var n in t)a.push(n);return a.reverse(),function e(){for(;a.length;){var n=a.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=P,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return o.type="throw",o.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var l=this.tryEntries[r],o=l.completion;if("root"===l.tryLoc)return n("end");if(l.tryLoc<=this.prev){var i=a.call(l,"catchLoc"),c=a.call(l,"finallyLoc");if(i&&c){if(this.prev<l.catchLoc)return n(l.catchLoc,!0);if(this.prev<l.finallyLoc)return n(l.finallyLoc)}else if(i){if(this.prev<l.catchLoc)return n(l.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return n(l.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var l=r;break}}l&&("break"===e||"continue"===e)&&l.tryLoc<=t&&t<=l.finallyLoc&&(l=null);var o=l?l.completion:{};return o.type=e,o.arg=t,l?(this.method="next",this.next=l.finallyLoc,p):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),O(a),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;O(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:P(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),p}},e}function u(e){var t=e.onImageUpload,a=Object(l.useState)(null),u=Object(r.a)(a,2),s=u[0],m=u[1],p=Object(l.useState)([]),d=Object(r.a)(p,2),h=d[0],f=d[1],y=function(){var e=Object(n.a)(c().mark(function e(){var a,n,r;return c().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(s.size>1e5)){e.next=4;break}alert("You File size is more then 1Mb !! \n Please ensure the file size is below 1 MB"),e.next=19;break;case 4:if(!s){e.next=19;break}return(a=new FormData).append("image",s),e.prev=7,e.next=10,i.a.post("/upload",a);case 10:n=e.sent,g(),r=n.data.imageId,t(r),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(7),console.error("Error uploading image:",e.t0);case 19:case"end":return e.stop()}},e,null,[[7,16]])}));return function(){return e.apply(this,arguments)}}(),g=function(){i.a.get("/images").then(function(e){f(e.data)}).catch(function(e){console.error("Image retrieval error: "+e)})};return o.a.createElement("div",{className:"image-upload"},o.a.createElement("input",{type:"file",onChange:function(e){m(e.target.files[0])}}),o.a.createElement("button",{className:"btn btn-warning m-2",onClick:y},"Upload Image"),o.a.createElement("div",null,h.map(function(e){return o.a.createElement("div",{key:e.id},o.a.createElement("img",{src:"http://".concat("localhost",":8081/").concat(e.path),alt:e.name,width:"50"}),o.a.createElement("p",null,e.name))})),o.a.createElement("p",{className:"text-danger"},"*Please ensure the file size is below 1 MB*"))}},962:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return m});var n=a(8),r=a(9),l=a(2),o=a(1),i=a.n(o),c=a(11),u=a(328),s=a(7);function m(){s.a.defaults.withCredentials=!0;var e=Object(o.useState)({product_name:"",product_price:"",product_quantity:"",category:"",discount:"",description:"",fulldesctiption:"",manufacturing:"",expiry:"",dragornot:"",fromOfMedicine:"",typeOfMedicine:"",sgst:"",cgst:"",moleculesName:"",manufacturing_Company_Name:"",productImageId:null}),t=Object(l.a)(e,2),a=t[0],m=t[1],p=Object(o.useState)(!1),d=Object(l.a)(p,2),h=(d[0],d[1]),f=function(e){m(function(t){return Object(r.a)({},t,Object(n.a)({},e.target.name,[e.target.value]))})},y=Object(c.o)(),g=Object(n.a)({width:"13.2rem",height:"2rem",fontSize:"1.1rem"},"width","90%");return i.a.createElement("div",null,i.a.createElement("div",{className:"container mt-3",style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},i.a.createElement("h2",{className:"p-2",style:{backgroundColor:"aqua"}},"||Add New Product||"),i.a.createElement("div",{className:"bg-white m-3 pt-3 pl-2 rounded w-30 shadow",style:{minWidth:"40vw",height:"110%"}},i.a.createElement("form",{action:"submit",onSubmit:function(e){console.log("click"),e.preventDefault(),s.a.post("/sub-admin/home/addproduct",a).then(function(e){"success"===e.data?(alert("Product Added Successfully!!"),y("/sub-admin/home",{state:{loggedIn:!0}})):(e.data,alert("Error"))}).catch(function(e){return console.log(e)})},style:{padding:"1vw"}},i.a.createElement("h5",null," ",i.a.createElement("span",{className:"text-info"},"Healthhepta")),i.a.createElement("div",{className:" p-1",style:{textAlign:"initial",fontWeight:"700"}},i.a.createElement("label",{className:"p-1",htmlFor:"product_name"},"Product Name : "),i.a.createElement("br",null),i.a.createElement("input",{required:!0,className:"m-2 p-1",type:"text",style:{width:"90%"},placeholder:"Enter Product Name",name:"product_name",onChange:f}),i.a.createElement("br",null)),i.a.createElement("div",{className:" p-1",style:{textAlign:"initial",fontWeight:"700"}},i.a.createElement("label",{className:"p-1",htmlFor:"product_dec"},"Product Description",i.a.createElement("span",{style:{fontSize:"9px",color:"red"}},"(Product quantity)")," : "),i.a.createElement("br",null),i.a.createElement("input",{required:!0,className:"m-2 p-1",type:"text",style:{width:"90%"},placeholder:"Enter Product Description",name:"description",onChange:f}),i.a.createElement("br",null)),i.a.createElement("div",{className:" p-1",style:{textAlign:"initial",fontWeight:"700"}},i.a.createElement("label",{className:"p-1",htmlFor:"product_dec"},"Product Full Desctiption",i.a.createElement("span",{style:{fontSize:"9px",color:"red"}},"(Product Name ,Brand Name, Moluqule name ,what is product do?)")," : "),i.a.createElement("br",null),i.a.createElement("input",{required:!0,className:"m-2 p-1",type:"text",style:{width:"90%"},placeholder:"Enter Product Full Description",name:"fulldesctiption",onChange:f}),i.a.createElement("br",null)),i.a.createElement("div",{className:" p-1",style:{textAlign:"initial",fontWeight:"700"}},i.a.createElement("label",{className:"p-1",htmlFor:"product_price"},"Product Price : "),i.a.createElement("input",{required:!0,className:"m-2  p-1",type:"text",style:{width:"90%"},placeholder:"Enter Product Price",name:"product_price",onChange:f}),i.a.createElement("br",null)),i.a.createElement("div",{className:" p-1",style:{textAlign:"initial",fontWeight:"700"}},i.a.createElement("label",{className:"p-1",htmlFor:"product_quantity"},"Product Quantity : "),i.a.createElement("input",{required:!0,className:"m-2  p-1",type:"text",style:{width:"90%"},placeholder:"Enter Product Quantity",name:"product_quantity",onChange:f}),i.a.createElement("br",null)),i.a.createElement("div",{className:" p-1",style:{textAlign:"initial",fontWeight:"700"}},i.a.createElement("label",{className:"p-1",htmlFor:"product_category"},"Product Category : "),i.a.createElement("input",{required:!0,className:"m-2  p-1",type:"text",style:{width:"90%"},placeholder:"Enter Product Category",name:"category",onChange:f}),i.a.createElement("br",null)),i.a.createElement("div",{className:" p-1",style:{textAlign:"initial",fontWeight:"700"}},i.a.createElement("label",{className:"p-1",htmlFor:"moleculesName"},"Molecules Name : "),i.a.createElement("input",{required:!0,className:"m-2  p-1",type:"text",style:{width:"90%"},placeholder:"Enter Product molecules name",name:"moleculesName",onChange:f}),i.a.createElement("br",null)),i.a.createElement("div",{className:" p-1",style:{textAlign:"initial",fontWeight:"700"}},i.a.createElement("label",{className:"p-1",htmlFor:"manufacturing_Company_Name"},"Manufacturing Company Name : "),i.a.createElement("input",{required:!0,className:"m-2  p-1",type:"text",style:{width:"90%"},placeholder:"Enter Product Manufacturing Company Name",name:"manufacturing_Company_Name",onChange:f}),i.a.createElement("br",null)),i.a.createElement("div",{className:" p-1",style:{textAlign:"initial",fontWeight:"700"}},i.a.createElement("label",{className:"p-1",htmlFor:"product_manufacturing_date "},"Manufacturing Date  : "),i.a.createElement("input",{required:!0,className:"m-2 p-1",type:"date",style:g,name:"manufacturing",onChange:f}),i.a.createElement("br",null)),i.a.createElement("div",{className:" p-1",style:{textAlign:"initial",fontWeight:"700"}},i.a.createElement("label",{className:"p-1",htmlFor:"product_manufacturing_date "},"Expiry Date  : "),i.a.createElement("input",{required:!0,className:"m-2 p-1",type:"date",style:g,name:"expiry",onChange:f}),i.a.createElement("br",null)),i.a.createElement("div",{className:" p-1",style:{textAlign:"initial",fontWeight:"700"}},i.a.createElement("label",{className:"p-1",htmlFor:"discount"},"Discount : "),i.a.createElement("input",{required:!0,className:"m-2  p-1",type:"text",style:{width:"90%"},placeholder:"Enter Discount",name:"discount",onChange:f}),i.a.createElement("br",null)),i.a.createElement("div",{className:" p-1",style:{textAlign:"initial",fontWeight:"700"}},i.a.createElement("label",{className:"p-1",htmlFor:"dragornot"},"Drag/Otc : "),i.a.createElement("br",null),i.a.createElement("select",{required:!0,className:"m-2 p-1",onChange:f,name:"dragornot",style:{width:"90%",cursor:"pointer"}},i.a.createElement("option",{value:"select"},"Select One"),i.a.createElement("option",{value:"drug"},"Drug"),i.a.createElement("option",{value:"otc"},"Otc Product")),i.a.createElement("br",null)),i.a.createElement("div",{className:" p-1",style:{textAlign:"initial",fontWeight:"700"}},i.a.createElement("label",{className:"p-1",htmlFor:"fromOfMedicine"},"From of Medicine: "),i.a.createElement("br",null),i.a.createElement("select",{required:!0,className:"m-2 p-1",onChange:f,name:"fromOfMedicine",style:{width:"90%",cursor:"pointer"}},i.a.createElement("option",{value:"select"},"Select One"),i.a.createElement("option",{value:"Tablet"},"Tablet"),i.a.createElement("option",{value:"Capsules"},"Capsules"),i.a.createElement("option",{value:"Liquid"},"Liquid")),i.a.createElement("br",null)),i.a.createElement("div",{className:" p-1",style:{textAlign:"initial",fontWeight:"700"}},i.a.createElement("label",{className:"p-1",htmlFor:"typeOfMedicine"},"Type of Medicine: "),i.a.createElement("br",null),i.a.createElement("select",{required:!0,className:"m-2 p-1",onChange:f,name:"typeOfMedicine",style:{width:"90%",cursor:"pointer"}},i.a.createElement("option",{value:"select"},"Select One"),i.a.createElement("option",{value:"Allopathy"},"Allopathy"),i.a.createElement("option",{value:"Homeopathy"},"Homeopathy")),i.a.createElement("br",null)),i.a.createElement("div",{className:" p-1",style:{textAlign:"initial",fontWeight:"700"}},i.a.createElement("label",{className:"p-1",htmlFor:"product_category"},"CGST : "),i.a.createElement("input",{required:!0,className:"m-2  p-1",type:"text",style:{width:"90%"},placeholder:"Enter Product SGST",name:"sgst",onChange:f}),i.a.createElement("br",null)),i.a.createElement("div",{className:" p-1",style:{textAlign:"initial",fontWeight:"700"}},i.a.createElement("label",{className:"p-1",htmlFor:"product_category"},"SGST : "),i.a.createElement("input",{required:!0,className:"m-2  p-1",type:"text",style:{width:"90%"},placeholder:"Enter Product CGST",name:"cgst",onChange:f}),i.a.createElement("br",null)),i.a.createElement("div",{className:" p-1",style:{textAlign:"initial",fontWeight:"700"}},i.a.createElement("label",{className:"p-1",htmlFor:"product_category"},"Add Product Image "),i.a.createElement(u.a,{onImageUpload:function(e){m(Object(r.a)({},a,{productImageId:e}))}})),i.a.createElement("div",{className:"form-check "},i.a.createElement("input",{required:!0,className:"form-check-input",type:"checkbox",value:"check",id:"flexCheckChecked",style:{marginLeft:"1vw"},onChange:function(){h(!0)}}),i.a.createElement("label",{className:"form-check-label",htmlFor:"flexCheckChecked"},i.a.createElement("p",null,"You are sure to add  ",i.a.createElement("span",{className:"text-warning"},"product")," "))),i.a.createElement("button",{type:"submit",className:"btn  btn-default border p-2 mb-3 btn-info",style:{width:"90%",color:"white",cursor:"pointer"}},"Add Product")))))}}}]);
//# sourceMappingURL=106.34317919.chunk.js.map