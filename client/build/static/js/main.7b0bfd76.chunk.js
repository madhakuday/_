(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{20:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(13),r=c.n(s),l=c(3),i=c(2),j=c(4),o=c.n(j),b=c(7),d=c(0),m=function(){var e=Object(n.useContext)(L),t=Object(l.a)(e,2),c=(t[0],t[1]),a=Object(i.f)(),s=Object(n.useState)(""),r=Object(l.a)(s,2),j=r[0],m=r[1],u=Object(n.useState)(""),x=Object(l.a)(u,2),h=x[0],O=x[1],p=function(){var e=Object(b.a)(o.a.mark((function e(t){var n,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:j,password:h})});case 3:return n=e.sent,e.next=6,n.json();case 6:s=e.sent,404!==n.status&&s?(c({type:"USER",payload:!0}),window.alert("Login successfully "),a("/")):alert("innvalid data");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("form",{method:"post",className:"form form-control mt-3 bg-gray-600",children:[Object(d.jsx)("input",{className:"mt-2 mb-2 form-control",type:"text",placeholder:"email",value:j,name:"email",onChange:function(e){return m(e.target.value)}}),Object(d.jsx)("input",{className:"mt-2 mb-2 form-control",type:"text",placeholder:"password",value:h,name:"password",onChange:function(e){return O(e.target.value)}}),Object(d.jsx)("button",{onClick:p,className:"mt-2 mb-2 btn btn-primary",children:"login"}),Object(d.jsxs)("div",{className:"mb-3 mt-3 text-gray-100 ",children:[Object(d.jsx)("p",{children:"email : test@gmail.com"}),Object(d.jsx)("p",{children:"pass : 123"})]})]})})},u=c(5),x=function(){var e=Object(n.useContext)(L),t=Object(l.a)(e,2),c=t[0],a=(t[1],function(){return c?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(u.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(u.b,{className:"nav-link",to:"/about",children:"about"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(u.b,{className:"nav-link",to:"/Employee",children:"employee"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(u.b,{className:"nav-link",to:"/products",children:"products"})}),Object(d.jsx)("li",{className:"nav-item  right ",children:Object(d.jsx)(u.b,{className:"nav-link",to:"/logout",children:"Logout"})})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(u.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(u.b,{className:"nav-link",to:"/login",children:"Login"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(u.b,{className:"nav-link",to:"/sigin",children:"Register"})})]})});return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsx)("div",{className:"collapse navbar-collapse bg-gray-200 rounded",id:"navbarSupportedContent",children:Object(d.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(d.jsx)(a,{})})})]})})})},h=(c(20),new Date),O=h.getHours();h.getDay();var p=function(){var e=(new Date).toLocaleTimeString(),t=Object(n.useState)(e),c=Object(l.a)(t,2),a=(c[0],c[1]);return setInterval((function(){e=(new Date).toLocaleTimeString(),a(e)}),100),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"main",children:Object(d.jsx)("h1",{className:"ecomh1 ml-2 fw-bolder",children:"E-Commerce"})})})},g=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],a=t[1],s=function(){var e=Object(b.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/about",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"include"});case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,a(c),404!==t.status&&c||r("/login"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),e.t0&&r("/login",{replace:!0});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){s()}),[]);var r=Object(i.f)();return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"card mb-3",style:{maxwidth:"540px"},children:Object(d.jsxs)("div",{className:"row g-0",children:[Object(d.jsx)("div",{className:"col-md-4",children:Object(d.jsx)("img",{src:"...",className:"img-fluid rounded-start",alt:"..."})}),Object(d.jsx)("div",{className:"col-md-8",children:Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsxs)("h5",{className:"card-title",children:["name :",c.name]}),Object(d.jsxs)("h5",{className:"card-title",children:["email : ",c.email]})]})})]})})})},f=c(9),v=c(8);var y=function(){var e,t,c=Object(i.f)(),a=Object(n.useState)({name:"",email:"",password:""}),s=Object(l.a)(a,2),r=s[0],j=s[1],m=function(c){e=c.target.name,t=c.target.value,j(Object(v.a)(Object(v.a)({},r),{},Object(f.a)({},e,t)))},u=function(){var e=Object(b.a)(o.a.mark((function e(t){var n,a,s,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=r.name,a=r.email,s=r.password,e.next=4,fetch("/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n,email:a,password:s})});case 4:return l=e.sent,e.next=7,l.json();case 7:e.sent?(alert("data add succefully "),c("/")):alert("innvalid data");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("form",{method:"post",className:"form-control",children:[Object(d.jsx)("input",{value:r.name,onChange:m,className:"form-control mt-2 mb-2",type:"text",placeholder:"name",name:"name"}),Object(d.jsx)("input",{value:r.email,onChange:m,className:"form-control mt-2 mb-2",type:"text",placeholder:"email",name:"email"}),Object(d.jsx)("input",{value:r.password,onChange:m,className:"form-control mt-2 mb-2",type:"text",placeholder:"password",name:"password"}),Object(d.jsx)("button",{onClick:u,className:"btn btn-danger",children:"sign in"})]})})})};var N,w=function(){var e=Object(n.useContext)(L),t=Object(l.a)(e,2),c=(t[0],t[1]),a=Object(i.f)();return Object(n.useEffect)(Object(b.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("/logout",(t={method:"get"},Object(f.a)(t,"method","GET"),Object(f.a)(t,"headers",{Accept:"application/json","Content-Type":"application/json"}),Object(f.a)(t,"credentials","include"),t)).then((function(e){if(c({type:"USER",payload:!1}),a("/login"),200!==e.status)throw new Error(e.error)})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)}))),[]),Object(d.jsx)("div",{children:"Logout"})},k=function(e,t){return"USER"===t.type?t.payload:e};N={loggedIn:localStorage.getItem("isLoggedin")||!1};var C=c(10);var S=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(c),r=Object(l.a)(s,2),i=r[0],j=r[1],m=Object(n.useState)(!1),x=Object(l.a)(m,2),h=x[0],O=x[1];Object(n.useEffect)((function(){var e=function(){var e=Object(b.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.next=3,fetch("http://fakestoreapi.com/products");case 3:return t=e.sent,e.t0=a,e.next=8,t.clone().json();case 8:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=j,e.next=13,t.json();case 13:e.t3=e.sent,(0,e.t2)(e.t3),O(!1);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var p=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"bg-gray-200 col-md-3 mb-5 card py-20 ml-1 ",children:Object(d.jsx)(C.a,{height:350})}),Object(d.jsx)("div",{className:"bg-gray-200 col-md-3 mb-5 card py-20 ml-1 ",children:Object(d.jsx)(C.a,{height:350})}),Object(d.jsx)("div",{className:"bg-gray-200 col-md-3 mb-5 card py-20 ml-1 ",children:Object(d.jsx)(C.a,{height:350})}),Object(d.jsx)("div",{className:"bg-gray-200 col-md-3 mb-5 card py-20 ml-1 ",children:Object(d.jsx)(C.a,{height:350})})]})},g=function(e){var t=c.filter((function(t){return t.category===e}));j(t)},f=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"buttons d-flex align-items-center justify-content-center ",children:[Object(d.jsx)("button",{className:"btn btn-outline-primary me-2",onClick:function(){return j(c)},children:"all"}),Object(d.jsx)("button",{className:"btn btn-outline-primary me-2",onClick:function(){return g("men's clothing")},children:"men's"}),Object(d.jsx)("button",{className:"btn btn-outline-primary me-2",onClick:function(){return g("women's clothing")},children:"women's"}),Object(d.jsx)("button",{className:"btn btn-outline-primary me-2",onClick:function(){return g("jewelery")},children:"jewelery"}),Object(d.jsx)("button",{className:"btn btn-outline-primary me-2",onClick:function(){return g("electronics")},children:"electronic"})]}),i.map((function(e){return Object(d.jsx)("div",{className:" mt-5 col-md-3 mb-4",children:Object(d.jsxs)("div",{className:"card h-100 text-center  p-5 border-0",children:[Object(d.jsx)("img",{src:e.image,className:"card-img-top",height:240,alt:e.title}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsxs)("h5",{className:"card-title  mb-0",children:[e.title.substring(0,12),"..."]}),Object(d.jsxs)("p",{className:"card-text  lead fw-bold ",children:["$",e.price]}),Object(d.jsx)("div",{className:"d-flex align-items-center justify-content-center",children:Object(d.jsx)(u.b,{to:"/products/".concat(e.id),className:"btn btn-primary mb-1 position-absolute bottom-0",children:"Buy now"})})]})]},e.title)})}))]})};return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"container my-5 py-5 bg-gray-300",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-10 mb-5",children:Object(d.jsx)("h1",{className:"display-6 fw-bolder  text-center",children:"Letest Productes"})}),Object(d.jsx)("div",{className:"row justify-content-center",children:h?Object(d.jsx)(p,{}):Object(d.jsx)(f,{})})]})})})};c(21);var F=function(){var e=Object(i.g)().id,t=Object(n.useState)([]),c=Object(l.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)(!1),j=Object(l.a)(r,2),m=j[0],u=j[1];Object(n.useEffect)((function(){var t=function(){var t=Object(b.a)(o.a.mark((function t(){var c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u(!0),t.next=3,fetch("http://fakestoreapi.com/products/".concat(e));case 3:return c=t.sent,t.t0=s,t.next=7,c.json();case 7:t.t1=t.sent,(0,t.t0)(t.t1),u(!1);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]);var x=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"container mt-3",children:Object(d.jsx)("section",{class:"text-gray-100 ",children:Object(d.jsx)("div",{class:"container bg-gray-300 px-5 py-20 mx-auto",children:Object(d.jsx)("div",{class:"lg:w-4/5 mx-auto flex flex-wrap",children:Object(d.jsx)("div",{class:"lg:w-1/2 w-full lg:h-auto h-70 object-content  rounded",children:Object(d.jsx)(C.a,{height:350})})})})})})})},h=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(x,{}),Object(d.jsx)(x,{}),Object(d.jsx)(x,{}),Object(d.jsx)(x,{}),Object(d.jsx)(x,{}),Object(d.jsx)(x,{})]})},O=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("section",{class:"text-gray-600 body-font overflow-hidden",children:Object(d.jsx)("div",{class:"container px-5 py-20 mx-auto",children:Object(d.jsxs)("div",{class:"lg:w-4/5 mx-auto flex flex-wrap",children:[Object(d.jsx)("img",{alt:"ecommerce",class:"lg:w-1/2 w-full lg:h-auto h-70 object-content  rounded",src:a.image}),Object(d.jsxs)("div",{class:"lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0",children:[Object(d.jsx)("h2",{class:"text-sm title-font text-gray-500 tracking-widest",children:"BRAND NAME"}),Object(d.jsx)("h1",{class:"text-gray-900 text-3xl title-font font-medium mb-1",children:a.title}),Object(d.jsxs)("div",{class:"flex mb-4",children:[Object(d.jsx)("span",{class:"flex items-center",children:Object(d.jsxs)("p",{className:"fw-bold",children:["Rating : ",a.rating&&a.rating.rate]})}),Object(d.jsxs)("span",{class:"flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s",children:[Object(d.jsx)("a",{class:"text-gray-500",children:Object(d.jsx)("svg",{fill:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",class:"w-5 h-5",viewBox:"0 0 24 24",children:Object(d.jsx)("path",{d:"M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"})})}),Object(d.jsx)("a",{class:"text-gray-500",children:Object(d.jsx)("svg",{fill:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",class:"w-5 h-5",viewBox:"0 0 24 24",children:Object(d.jsx)("path",{d:"M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"})})}),Object(d.jsx)("a",{class:"text-gray-500",children:Object(d.jsx)("svg",{fill:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",class:"w-5 h-5",viewBox:"0 0 24 24",children:Object(d.jsx)("path",{d:"M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"})})})]})]}),Object(d.jsx)("p",{class:"leading-relaxed",children:a.description}),Object(d.jsxs)("div",{class:"flex",children:[Object(d.jsxs)("span",{class:"title-font font-medium text-2xl text-gray-900",children:["$",a.price]}),Object(d.jsx)("button",{class:"flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded",children:"Button"}),Object(d.jsx)("button",{class:"hovbut rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4",children:Object(d.jsx)("svg",{fill:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",class:"w-5 h-5",viewBox:"0 0 24 24",children:Object(d.jsx)("path",{d:"M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"})})})]})]})]})})})})})};return Object(d.jsx)(d.Fragment,{children:m?Object(d.jsx)(h,{}):Object(d.jsx)(O,{})})};var E=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(!1),r=Object(l.a)(s,2),i=r[0],j=r[1];return Object(n.useEffect)(Object(b.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://reqres.in/api/users");case 2:return t=e.sent,e.next=5,t.json();case 5:(c=e.sent)&&t?(j(!0),setTimeout((function(){a(c.data),j(!1)}),900)):j(!0);case 7:case"end":return e.stop()}}),e)}))),[]),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"row ",children:i?Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"loder",children:"Loding...."})}):c.map((function(e,t){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"card container  ",style:{width:"18rem"},children:[Object(d.jsx)("img",{src:e.avatar,className:"card-img-top",alt:"..."}),Object(d.jsxs)("div",{className:"card-body ",children:[Object(d.jsxs)("h5",{className:"card-title",children:["id : ",e.id]}),Object(d.jsxs)("h5",{className:"card-title",children:["email : ",e.email]}),Object(d.jsxs)("h5",{className:"card-title",children:["fname : ",e.first_name]}),Object(d.jsxs)("h5",{className:"card-title",children:["lname : ",e.last_name]})]},t)]},t)})}))})})})},L=Object(n.createContext)(),T=function(){var e=Object(n.useReducer)(k,N),t=Object(l.a)(e,2),c=t[0],a=t[1];return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(L.Provider,{value:[c,a],children:[Object(d.jsx)(x,{}),Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{exact:!0,path:"/",element:Object(d.jsx)(p,{})}),Object(d.jsx)(i.a,{exact:!0,path:"/about",element:Object(d.jsx)(g,{})}),Object(d.jsx)(i.a,{exact:!0,path:"/products",element:Object(d.jsx)(S,{})}),Object(d.jsx)(i.a,{exact:!0,path:"/products/:id",element:Object(d.jsx)(F,{})}),Object(d.jsx)(i.a,{exact:!0,path:"/employee",element:Object(d.jsx)(E,{})}),Object(d.jsx)(i.a,{exact:!0,path:"/login",element:Object(d.jsx)(m,{})}),Object(d.jsx)(i.a,{exact:!0,path:"/sigin",element:Object(d.jsx)(y,{})}),Object(d.jsx)(i.a,{exact:!0,path:"/logout",element:Object(d.jsx)(w,{})})]})]})})},B=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,23)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(u.a,{children:Object(d.jsx)(T,{})})}),document.getElementById("root")),B()}},[[22,1,2]]]);
//# sourceMappingURL=main.7b0bfd76.chunk.js.map