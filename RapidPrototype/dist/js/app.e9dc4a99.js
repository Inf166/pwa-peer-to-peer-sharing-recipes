(function(e){function n(n){for(var r,o,u=n[0],i=n[1],s=n[2],l=0,f=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(n);while(f.length)f.shift()();return c.push.apply(c,s||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,o=1;o<t.length;o++){var u=t[o];0!==a[u]&&(r=!1)}r&&(c.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={app:0},a={app:0},c=[];function u(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"a1dbce59","chunk-2d0c2117":"7476ec99","chunk-2d213164":"035c0bdd","chunk-30fd9afa":"9610083f","chunk-4756e555":"ae262be1","chunk-7726dafa":"a1d96478"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-30fd9afa":1,"chunk-4756e555":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-2d0c2117":"31d6cfe0","chunk-2d213164":"31d6cfe0","chunk-30fd9afa":"8106d1b6","chunk-4756e555":"088e0a13","chunk-7726dafa":"31d6cfe0"}[e]+".css",a=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return n()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],l=s.getAttribute("data-href");if(l===r||l===a)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var r=n&&n.target&&n.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],d.parentNode.removeChild(d),t(c)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)n.push(r[2]);else{var c=new Promise((function(n,t){r=a[e]=[n,t]}));n.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var f=new Error;s=function(n){l.onerror=l.onload=null,clearTimeout(d);var t=a[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,t[1](f)}a[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var f=0;f<s.length;f++)n(s[f]);var d=l;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";t("85ec")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("div",{attrs:{id:"nav"}},[t("router-link",{attrs:{to:"/"}},[t("i",{staticClass:"fas fa-home"}),t("span",{staticClass:"nav-label"},[e._v("Entdecken")])]),t("router-link",{attrs:{to:"/savedrecipies"}},[t("i",{staticClass:"far fa-bookmark"}),t("span",{staticClass:"nav-label"},[e._v("Gespeicherte Rezepte")])]),t("router-link",{attrs:{to:"/newrecipe"}},[t("i",{staticClass:"fas fa-plus"}),t("span",{staticClass:"nav-label"},[e._v("Neues Rezept")])]),t("router-link",{attrs:{to:"/profile"}},[t("i",{staticClass:"fas fa-user-alt"}),t("span",{staticClass:"nav-label"},[e._v("Mein Profil")])])],1),t("div",{staticClass:"content"},[t("router-view")],1),t("Footer")],1)},a=[],c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"footer"},[t("ul",{staticClass:"footer-links"},[t("li",[t("router-link",{attrs:{to:"/datenschutz"}},[t("span",{},[e._v("Datenschutz")])])],1),t("li",[t("router-link",{attrs:{to:"/nutzungsbedingungen"}},[t("span",{},[e._v("Nutzungsbedingungen")])])],1)])])},u=[],i={name:"Footer"},s=i,l=(t("760c"),t("2877")),f=Object(l["a"])(s,c,u,!1,null,null,null),d=f.exports,p={name:"App",components:{Footer:d}},h=p,v=(t("034f"),Object(l["a"])(h,o,a,!1,null,null,null)),b=v.exports,m=t("9483");Object(m["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB"),Notification.requestPermission((function(e){console.log("Status ",e)}))},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});t("d3b7");var g=t("8c4f"),k=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},y=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"explore"},[t("h1",[e._v("This is an EXPLORE page")])])}],w={},_=Object(l["a"])(w,k,y,!1,null,null,null),C=_.exports;r["a"].use(g["a"]);var E=[{path:"/",name:"Explore",component:C},{path:"/about",name:"About",component:function(){return t.e("about").then(t.bind(null,"f820"))}},{path:"/savedrecipies",name:"SavedRecipies",component:function(){return t.e("chunk-2d213164").then(t.bind(null,"aad2"))}},{path:"/newrecipe",name:"NewRecipe",component:function(){return t.e("chunk-4756e555").then(t.bind(null,"7584"))}},{path:"/profile",name:"Profile",component:function(){return t.e("chunk-30fd9afa").then(t.bind(null,"c66d"))}},{path:"/datenschutz",name:"Datenschutz",component:function(){return t.e("chunk-7726dafa").then(t.bind(null,"e1639"))}},{path:"/nutzungsbedingungen",name:"Nutzungsbedinungen",component:function(){return t.e("chunk-2d0c2117").then(t.bind(null,"4973"))}}],O=new g["a"]({mode:"history",base:"/",routes:E}),j=O;r["a"].config.productionTip=!1,new r["a"]({router:j,render:function(e){return e(b)}}).$mount("#app")},"760c":function(e,n,t){"use strict";t("c3f5")},"85ec":function(e,n,t){},c3f5:function(e,n,t){}});
//# sourceMappingURL=app.e9dc4a99.js.map