(function(t){function e(e){for(var s,n,i=e[0],c=e[1],u=e[2],l=0,d=[];l<i.length;l++)n=i[l],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&d.push(r[n][0]),r[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,n=1;n<a.length;n++){var i=a[n];0!==r[i]&&(s=!1)}s&&(o.splice(e--,1),t=c(c.s=a[0]))}return t}var s={},n={app:0},r={app:0},o=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"e4110cc5","chunk-2d0aedb5":"858f1554","chunk-2d0c2117":"59f45a13","chunk-2d0c8842":"44af2dc5","chunk-2d0d6f50":"e42b3f43","chunk-2d0f0e03":"36ea48f5","chunk-2d213164":"4fab5c65","chunk-40fa87f4":"d25db240","chunk-7726dafa":"47aa921f","chunk-a6f47b60":"0bfb2edf"}[t]+".js"}function c(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={"chunk-40fa87f4":1,"chunk-a6f47b60":1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var s="css/"+({about:"about"}[t]||t)+"."+{about:"31d6cfe0","chunk-2d0aedb5":"31d6cfe0","chunk-2d0c2117":"31d6cfe0","chunk-2d0c8842":"31d6cfe0","chunk-2d0d6f50":"31d6cfe0","chunk-2d0f0e03":"31d6cfe0","chunk-2d213164":"31d6cfe0","chunk-40fa87f4":"bf415ed1","chunk-7726dafa":"31d6cfe0","chunk-a6f47b60":"4d6d22e2"}[t]+".css",r=c.p+s,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var u=o[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===s||l===r))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===s||l===r)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var s=e&&e.target&&e.target.src||r,o=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=s,delete n[t],p.parentNode.removeChild(p),a(o)},p.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){n[t]=0})));var s=r[t];if(0!==s)if(s)e.push(s[2]);else{var o=new Promise((function(e,a){s=r[t]=[e,a]}));e.push(s[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(p);var a=r[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+s+": "+n+")",d.name="ChunkLoadError",d.type=s,d.request=n,a[1](d)}r[t]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=s,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(a,s,function(e){return t[e]}.bind(null,s));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var p=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/"}},[a("i",{staticClass:"fas fa-home"}),a("span",{staticClass:"nav-label"},[t._v("Entdecken")])]),a("router-link",{attrs:{to:"/savedrecipies"}},[a("i",{staticClass:"far fa-bookmark"}),a("span",{staticClass:"nav-label"},[t._v("Gespeicherte Rezepte")])]),a("router-link",{attrs:{to:"/newrecipe"}},[a("i",{staticClass:"fas fa-plus"}),a("span",{staticClass:"nav-label"},[t._v("Neues Rezept")])]),a("router-link",{attrs:{to:"/profile",onclick:"checkUserLoginState()"}},[a("i",{staticClass:"fas fa-user-alt"}),a("span",{staticClass:"nav-label"},[t._v("Mein Profil")])])],1),a("div",{staticClass:"content"},[a("router-view"),a("Footer")],1)])},r=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("ul",{staticClass:"footer-links"},[a("li",[a("router-link",{attrs:{to:"/datenschutz"}},[a("span",{},[t._v("Datenschutz")])])],1),a("li",[a("router-link",{attrs:{to:"/nutzungsbedingungen"}},[a("span",{},[t._v("Nutzungsbedingungen")])])],1)])])},i=[],c={name:"Footer"},u=c,l=(a("760c"),a("2877")),d=Object(l["a"])(u,o,i,!1,null,null,null),p=d.exports,f={name:"App",components:{Footer:p}},m=f,h=(a("034f"),Object(l["a"])(m,n,r,!1,null,null,null)),v=h.exports,b=a("9483");Object(b["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB"),Notification.requestPermission((function(t){console.log("Status ",t)}))},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});a("d3b7");var g=a("8c4f"),k=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"explore"},[a("h1",[t._v("Entdecke deine Kultur")]),a("div",{staticClass:"search-container"},[a("form",[a("input",{attrs:{type:"text",id:"search",name:"search",required:"",placeholder:"Search.."}}),a("button",{staticClass:"search-button",attrs:{type:"button"}},[a("i",{staticClass:"fas fa-search"}),t._v(" Search")])])]),a("div",{staticClass:"recipe-teaser"},[a("div",{staticClass:"recipe-teaser-img"},[a("img",{attrs:{src:"https://via.placeholder.com/300x300.png",alt:"Rezept2",width:"300",height:"300"}})]),a("div",{staticClass:"recipe-teaser-desc"},[a("h3",[t._v("Ein spannender Rezeptname")]),a("p",[t._v("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet")]),a("p",[a("strong",[t._v("Geschrieben von: ")]),a("a",{attrs:{href:"#",target:"_blank"}},[t._v("Peter Lustig")])]),a("p",[a("strong",[t._v("Erstellt am: ")]),t._v("3.1.2020 14:00")])]),a("div",{staticClass:"recipe-teaser-buttons"},[a("button",{staticClass:"primary-button",attrs:{type:"button"}},[a("i",{staticClass:"fas fa-utensils"}),t._v("Rezept kochen")]),a("button",{staticClass:"other-button",attrs:{type:"button"}},[a("i",{staticClass:"far fa-bookmark"}),t._v("Rezept markieren")]),a("button",{staticClass:"secondary-button",attrs:{type:"button"}},[a("i",{staticClass:"fas fa-trash"}),t._v("Rezept verwerfen")])])]),a("hr"),a("div",{staticClass:"recipe-teaser"},[a("div",{staticClass:"recipe-teaser-img"},[a("img",{attrs:{src:"https://via.placeholder.com/300x300.png",alt:"Rezept2",width:"300",height:"300"}})]),a("div",{staticClass:"recipe-teaser-desc"},[a("h3",[t._v("Ein spannender Rezeptname")]),a("p",[t._v("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet")]),a("p",[a("strong",[t._v("Geschrieben von: ")]),a("a",{attrs:{href:"#",target:"_blank"}},[t._v("Peter Lustig")])]),a("p",[a("strong",[t._v("Erstellt am: ")]),t._v("3.1.2020 14:00")])]),a("div",{staticClass:"recipe-teaser-buttons"},[a("button",{staticClass:"primary-button",attrs:{type:"button"}},[a("i",{staticClass:"fas fa-utensils"}),t._v("Rezept kochen")]),a("button",{staticClass:"other-button",attrs:{type:"button"}},[a("i",{staticClass:"far fa-bookmark"}),t._v("Rezept markieren")]),a("button",{staticClass:"secondary-button",attrs:{type:"button"}},[a("i",{staticClass:"fas fa-trash"}),t._v("Rezept verwerfen")])])]),a("hr"),a("div",{staticClass:"recipe-teaser"},[a("div",{staticClass:"recipe-teaser-img"},[a("img",{attrs:{src:"https://via.placeholder.com/300x300.png",alt:"Rezept3",width:"300",height:"300"}})]),a("div",{staticClass:"recipe-teaser-desc"},[a("h3",[t._v("Ein spannender Rezeptname")]),a("p",[t._v("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet")]),a("p",[a("strong",[t._v("Geschrieben von: ")]),a("a",{attrs:{href:"#",target:"_blank"}},[t._v("Peter Lustig")])]),a("p",[a("strong",[t._v("Erstellt am: ")]),t._v("3.1.2020 14:00")])]),a("div",{staticClass:"recipe-teaser-buttons"},[a("button",{staticClass:"primary-button",attrs:{type:"button"}},[a("i",{staticClass:"fas fa-utensils"}),t._v("Rezept kochen")]),a("button",{staticClass:"other-button",attrs:{type:"button"}},[a("i",{staticClass:"far fa-bookmark"}),t._v("Rezept markieren")]),a("button",{staticClass:"secondary-button",attrs:{type:"button"}},[a("i",{staticClass:"fas fa-trash"}),t._v("Rezept verwerfen")])])]),a("hr"),a("div",{staticClass:"recipe-teaser"},[a("div",{staticClass:"recipe-teaser-img"},[a("img",{attrs:{src:"https://via.placeholder.com/300x300.png",alt:"Rezept2",width:"300",height:"300"}})]),a("div",{staticClass:"recipe-teaser-desc"},[a("h3",[t._v("Ein spannender Rezeptname")]),a("p",[t._v("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet")]),a("p",[a("strong",[t._v("Geschrieben von: ")]),a("a",{attrs:{href:"#",target:"_blank"}},[t._v("Peter Lustig")])]),a("p",[a("strong",[t._v("Erstellt am: ")]),t._v("3.1.2020 14:00")])]),a("div",{staticClass:"recipe-teaser-buttons"},[a("button",{staticClass:"primary-button",attrs:{type:"button"}},[a("i",{staticClass:"fas fa-utensils"}),t._v("Rezept kochen")]),a("button",{staticClass:"other-button",attrs:{type:"button"}},[a("i",{staticClass:"far fa-bookmark"}),t._v("Rezept markieren")]),a("button",{staticClass:"secondary-button",attrs:{type:"button"}},[a("i",{staticClass:"fas fa-trash"}),t._v("Rezept verwerfen")])])]),a("hr"),a("div",{staticClass:"recipe-teaser"},[a("div",{staticClass:"recipe-teaser-img"},[a("img",{attrs:{src:"https://via.placeholder.com/300x300.png",alt:"Rezept2",width:"300",height:"300"}})]),a("div",{staticClass:"recipe-teaser-desc"},[a("h3",[t._v("Ein spannender Rezeptname")]),a("p",[t._v("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet")]),a("p",[a("strong",[t._v("Geschrieben von: ")]),a("a",{attrs:{href:"#",target:"_blank"}},[t._v("Peter Lustig")])]),a("p",[a("strong",[t._v("Erstellt am: ")]),t._v("3.1.2020 14:00")])]),a("div",{staticClass:"recipe-teaser-buttons"}),a("div",{staticClass:"recipe-teaser-buttons"},[a("button",{staticClass:"primary-button",attrs:{type:"button"}},[a("i",{staticClass:"fas fa-utensils"}),t._v("Rezept kochen")]),a("button",{staticClass:"other-button",attrs:{type:"button"}},[a("i",{staticClass:"far fa-bookmark"}),t._v("Rezept markieren")]),a("button",{staticClass:"secondary-button",attrs:{type:"button"}},[a("i",{staticClass:"fas fa-trash"}),t._v("Rezept verwerfen")])])]),a("hr"),a("div",{staticClass:"recipe-teaser"},[a("div",{staticClass:"recipe-teaser-img"},[a("img",{attrs:{src:"https://via.placeholder.com/300x300.png",alt:"Rezept2",width:"300",height:"300"}})]),a("div",{staticClass:"recipe-teaser-desc"},[a("h3",[t._v("Ein spannender Rezeptname")]),a("p",[t._v("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet")]),a("p",[a("strong",[t._v("Geschrieben von: ")]),a("a",{attrs:{href:"#",target:"_blank"}},[t._v("Peter Lustig")])]),a("p",[a("strong",[t._v("Erstellt am: ")]),t._v("3.1.2020 14:00")])]),a("div",{staticClass:"recipe-teaser-buttons"},[a("button",{staticClass:"primary-button",attrs:{type:"button"}},[a("i",{staticClass:"fas fa-utensils"}),t._v("Rezept kochen")]),a("button",{staticClass:"other-button",attrs:{type:"button"}},[a("i",{staticClass:"far fa-bookmark"}),t._v("Rezept markieren")]),a("button",{staticClass:"secondary-button",attrs:{type:"button"}},[a("i",{staticClass:"fas fa-trash"}),t._v("Rezept verwerfen")])])])])}],C={},y=Object(l["a"])(C,k,_,!1,null,null,null),w=y.exports;s["a"].use(g["a"]);var z=[{path:"/",name:"Explore",component:w},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/savedrecipies",name:"SavedRecipies",component:function(){return a.e("chunk-2d213164").then(a.bind(null,"aad2"))}},{path:"/newrecipe",name:"NewRecipe",component:function(){return a.e("chunk-2d0d6f50").then(a.bind(null,"7584"))}},{path:"/recipe",name:"Recipe",component:function(){return a.e("chunk-a6f47b60").then(a.bind(null,"2d11"))}},{path:"/profile",name:"Profile",component:function(){return a.e("chunk-40fa87f4").then(a.bind(null,"c66d"))}},{path:"/datenschutz",name:"Datenschutz",component:function(){return a.e("chunk-7726dafa").then(a.bind(null,"e1639"))}},{path:"/nutzungsbedingungen",name:"Nutzungsbedinungen",component:function(){return a.e("chunk-2d0c2117").then(a.bind(null,"4973"))}},{path:"/login",name:"LogIn",component:function(){return a.e("chunk-2d0f0e03").then(a.bind(null,"9ddf"))}},{path:"/logout",name:"LogOut",component:function(){return a.e("chunk-2d0aedb5").then(a.bind(null,"0c9e"))}},{path:"/signin",name:"SignIn",component:function(){return a.e("chunk-2d0c8842").then(a.bind(null,"54e2"))}}],R=new g["a"]({mode:"history",base:"/",routes:z}),E=R,L=a("67b0");s["a"].config.productionTip=!1,s["a"].use(L["a"]),new s["a"]({router:E,render:function(t){return t(v)}}).$mount("#app")},"760c":function(t,e,a){"use strict";a("c3f5")},"85ec":function(t,e,a){},c3f5:function(t,e,a){}});
//# sourceMappingURL=app.18888656.js.map