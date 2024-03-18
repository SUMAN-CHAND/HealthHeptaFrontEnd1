(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{959:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return d});var l=a(11),n=a(15),c=a(3),r=a(1),o=a.n(r),m=a(6),i=a(7),u={maxHeight:"80vh",maxWidth:"85vw",minWidth:"85vw",borderRadius:"5px",overflow:"hidden"};function d(e){var t=e.closeTheModal,a=Object(r.useState)([]),d=Object(c.a)(a,2),s=d[0],p=d[1],E=Object(r.useState)([]),h=Object(c.a)(E,2),v=h[0],g=h[1];Object(r.useEffect)(function(){i.a.get("/superadmin/product-details/expiring").then(function(e){null!==e.data&&(p(e.data[0]),g(e.data[1]))}).catch(function(e){console.error(e)})},[]);var w=Object(r.useState)({type:"select"}),f=Object(c.a)(w,2),y=f[0],b=f[1],x=function(e){window.confirm("Are you sure to delete the Product?")?i.a.delete("/superadmin/delete/".concat(e)).then(function(e){"success"===e.data&&alert("Product Delete Successfully")}).catch(function(e){console.log(e)}):alert("No Product Delete")};return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{style:u},o.a.createElement("button",{onClick:t,style:{marginLeft:"95%",borderRadius:"50%"},className:"my-1 btn btn-dark close-btn"},"X"),o.a.createElement("div",{className:"",id:"list-products"},o.a.createElement("span",{style:{display:"flex",justifyContent:"space-between"}},o.a.createElement("h2",{className:"p-2 mx-3"},"|| Expiring Products ||")," ",o.a.createElement(m.b,{to:"addproduct"},o.a.createElement("button",{className:"btn btn-primary mx-3 my-2"},"Add New"))),o.a.createElement("div",{className:"container text-dark ",style:{backgroundColor:"rgb(237 237 237)",display:"flex",paddingTop:"1vh",flexDirection:"column",overflowX:"auto",overflowY:"auto",height:"69vh"}},o.a.createElement("div",{className:" p-1",style:{textAlign:"initial",fontWeight:"700"}},o.a.createElement("p",{style:{marginLeft:"10px"}},"Select Drug or Otc :"),o.a.createElement("select",{onChange:function(e){b(function(t){return Object(n.a)({},t,Object(l.a)({},e.target.name,[e.target.value]))})},name:"type",style:{width:"25%",padding:"4px",marginLeft:"10px",cursor:"pointer"}},o.a.createElement("option",{defaultValue:"select"},"Select One"),o.a.createElement("option",{value:"drug"},"Drug"),o.a.createElement("option",{value:"otc"},"otc"))),s&&o.a.createElement("table",{className:"table table-striped",style:{height:"70vh"}},o.a.createElement("thead",{className:"thead-dark"},o.a.createElement("tr",null,o.a.createElement("th",{scope:"col"},"Count"),o.a.createElement("th",{scope:"col"},"Id"),o.a.createElement("th",{scope:"col"},"image"),o.a.createElement("th",{scope:"col"},"Name"),o.a.createElement("th",{scope:"col"},"Description"),o.a.createElement("th",{scope:"col"},"MRP"),o.a.createElement("th",{scope:"col"},"Whose Product "),o.a.createElement("th",{scope:"col"},"Product Quantity"),o.a.createElement("th",{scope:"col"},"Manufacturing Date"),o.a.createElement("th",{scope:"col"},"Expiry Date"),o.a.createElement("th",{scope:"col"},"Discount"),o.a.createElement("th",{scope:"col"},"Drag/Otc"),o.a.createElement("th",{scope:"col"},"Action"))),s&&o.a.createElement("tbody",{style:{verticalAlign:"middle",overflowY:"auto"}},"select"===y.type[0]?o.a.createElement(o.a.Fragment,null,s&&s.map(function(e,a){return o.a.createElement("tr",{key:a},o.a.createElement("th",{scope:"row"},a+1),o.a.createElement("th",{scope:"row"},e.product_id),o.a.createElement("td",null,v.map(function(t){return o.a.createElement("div",{key:t.id},parseInt(e.productImageId)===t.id?o.a.createElement(o.a.Fragment,null,o.a.createElement("img",{src:"http://".concat("localhost",":8081/").concat(t.path),alt:t.name,width:"50"})):o.a.createElement(o.a.Fragment,null))})),o.a.createElement("td",null,e.product_name),o.a.createElement("td",null,e.description),o.a.createElement("td",null,e.product_price),o.a.createElement("td",null,e.productOf),o.a.createElement("td",null,e.product_quantity),o.a.createElement("td",null,e.manufacturing.slice(0,10)),o.a.createElement("td",null,e.expiry.slice(0,10)),o.a.createElement("td",null,e.discount," %"),o.a.createElement("td",null,e.DrugOrNot," "),o.a.createElement("td",null," ",o.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}}," ",o.a.createElement(m.b,{to:"updateproduct/".concat(e.product_id),onClick:t}," ",o.a.createElement("div",{style:{cursor:"pointer"},type:"",className:" m-1"},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"3vw",height:"3vh",fill:"currentColor",className:"bi bi-pencil-square",viewBox:"0 0 16 16"},o.a.createElement("path",{d:"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"}),o.a.createElement("path",{fillRule:"evenodd",d:"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"})))),o.a.createElement("div",{className:" m-1 ",onClick:function(){return x(e.product_id)},style:{color:"red"}},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"3vw",height:"3vh",fill:"currentColor",className:"bi bi-trash-fill",viewBox:"0 0 16 16"},o.a.createElement("path",{d:"M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"}))))))})):o.a.createElement(o.a.Fragment,null),"select"===y.type?o.a.createElement(o.a.Fragment,null,s&&s.map(function(e,a){return o.a.createElement("tr",{key:a},o.a.createElement("th",{scope:"row"},a+1),o.a.createElement("th",{scope:"row"},e.product_id),o.a.createElement("td",null,v.map(function(t){return o.a.createElement("div",{key:t.id},parseInt(e.productImageId)===t.id?o.a.createElement(o.a.Fragment,null,o.a.createElement("img",{src:"http://".concat("localhost",":8081/").concat(t.path),alt:t.name,width:"50"})):o.a.createElement(o.a.Fragment,null))})),o.a.createElement("td",null,e.product_name),o.a.createElement("td",null,e.description),o.a.createElement("td",null,e.product_price),o.a.createElement("td",null,e.productOf),o.a.createElement("td",null,e.product_quantity),o.a.createElement("td",null,e.manufacturing.slice(0,10)),o.a.createElement("td",null,e.expiry.slice(0,10)),o.a.createElement("td",null,e.discount," %"),o.a.createElement("td",null,e.DrugOrNot," "),o.a.createElement("td",null," ",o.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}}," ",o.a.createElement(m.b,{to:"updateproduct/".concat(e.product_id),onClick:t}," ",o.a.createElement("div",{style:{cursor:"pointer"},type:"",className:" m-1"},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"3vw",height:"3vh",fill:"currentColor",className:"bi bi-pencil-square",viewBox:"0 0 16 16"},o.a.createElement("path",{d:"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"}),o.a.createElement("path",{fillRule:"evenodd",d:"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"})))),o.a.createElement("div",{className:" m-1 ",onClick:function(){return x(e.product_id)},style:{color:"red"}},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"3vw",height:"3vh",fill:"currentColor",className:"bi bi-trash-fill",viewBox:"0 0 16 16"},o.a.createElement("path",{d:"M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"}))))))})):o.a.createElement(o.a.Fragment,null),"drug"===y.type[0]?o.a.createElement(o.a.Fragment,null,s&&s.filter(function(e){return"drug"===e.DrugOrNot}).map(function(e,a){return o.a.createElement("tr",{key:a},o.a.createElement("th",{scope:"row"},a+1),o.a.createElement("th",{scope:"row"},e.product_id),o.a.createElement("td",null,v.map(function(t){return o.a.createElement("div",{key:t.id},parseInt(e.productImageId)===t.id?o.a.createElement(o.a.Fragment,null,o.a.createElement("img",{src:"http://".concat("localhost",":8081/").concat(t.path),alt:t.name,width:"50"})):o.a.createElement(o.a.Fragment,null))})),o.a.createElement("td",null,e.product_name),o.a.createElement("td",null,e.description),o.a.createElement("td",null,e.product_price),o.a.createElement("td",null,e.productOf),o.a.createElement("td",null,e.product_quantity),o.a.createElement("td",null,e.manufacturing.slice(0,10)),o.a.createElement("td",null,e.expiry.slice(0,10)),o.a.createElement("td",null,e.discount," %"),o.a.createElement("td",null,e.DrugOrNot," "),o.a.createElement("td",null," ",o.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}}," ",o.a.createElement(m.b,{to:"updateproduct/".concat(e.product_id),onClick:t}," ",o.a.createElement("div",{style:{cursor:"pointer"},type:"",className:" m-1"},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"3vw",height:"3vh",fill:"currentColor",className:"bi bi-pencil-square",viewBox:"0 0 16 16"},o.a.createElement("path",{d:"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"}),o.a.createElement("path",{fillRule:"evenodd",d:"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"})))),o.a.createElement("div",{className:" m-1 ",onClick:function(){return x(e.product_id)},style:{color:"red"}},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"3vw",height:"3vh",fill:"currentColor",className:"bi bi-trash-fill",viewBox:"0 0 16 16"},o.a.createElement("path",{d:"M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"}))))))})):o.a.createElement(o.a.Fragment,null),"otc"===y.type[0]?o.a.createElement(o.a.Fragment,null,s&&s.filter(function(e){return"otc"===e.DrugOrNot}).map(function(e,a){return o.a.createElement("tr",{key:a},o.a.createElement("th",{scope:"row"},a+1),o.a.createElement("th",{scope:"row"},e.product_id),o.a.createElement("td",null,v.map(function(t){return o.a.createElement("div",{key:t.id},parseInt(e.productImageId)===t.id?o.a.createElement(o.a.Fragment,null,o.a.createElement("img",{src:"http://".concat("localhost",":8081/").concat(t.path),alt:t.name,width:"50"})):o.a.createElement(o.a.Fragment,null))})),o.a.createElement("td",null,e.product_name),o.a.createElement("td",null,e.description),o.a.createElement("td",null,e.product_price),o.a.createElement("td",null,e.productOf),o.a.createElement("td",null,e.product_quantity),o.a.createElement("td",null,e.manufacturing.slice(0,10)),o.a.createElement("td",null,e.expiry.slice(0,10)),o.a.createElement("td",null,e.discount," %"),o.a.createElement("td",null,e.DrugOrNot," "),o.a.createElement("td",null," ",o.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}}," ",o.a.createElement(m.b,{to:"updateproduct/".concat(e.product_id),onClick:t}," ",o.a.createElement("div",{style:{cursor:"pointer"},type:"",className:" m-1"},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"3vw",height:"3vh",fill:"currentColor",className:"bi bi-pencil-square",viewBox:"0 0 16 16"},o.a.createElement("path",{d:"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"}),o.a.createElement("path",{fillRule:"evenodd",d:"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"})))),o.a.createElement("div",{className:" m-1 ",onClick:function(){return x(e.product_id)},style:{color:"red"}},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"3vw",height:"3vh",fill:"currentColor",className:"bi bi-trash-fill",viewBox:"0 0 16 16"},o.a.createElement("path",{d:"M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"}))))))})):o.a.createElement(o.a.Fragment,null)))))))}}}]);
//# sourceMappingURL=107.6dedc363.chunk.js.map