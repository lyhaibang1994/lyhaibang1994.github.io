(function(e){function t(t){for(var a,c,i=t[0],u=t[1],s=t[2],l=0,d=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&d.push(r[c][0]),r[c]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,c=1;c<n.length;c++){var i=n[c];0!==r[i]&&(a=!1)}a&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},c={app:0},r={app:0},o=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-24dced23":"fbeb1c7f","chunk-5c6ca6dc":"b247aa04","chunk-694eec7e":"e6fd02cf","chunk-8811ed12":"a57cdbe0","chunk-a8dd7fac":"d4e65914","chunk-0833b90e":"3dced985","chunk-c1c3a0e0":"cf72bcbf"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-24dced23":1,"chunk-5c6ca6dc":1,"chunk-694eec7e":1,"chunk-8811ed12":1,"chunk-a8dd7fac":1,"chunk-0833b90e":1,"chunk-c1c3a0e0":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-24dced23":"639a558e","chunk-5c6ca6dc":"d823d897","chunk-694eec7e":"83f8f874","chunk-8811ed12":"3362e45d","chunk-a8dd7fac":"a0bb0584","chunk-0833b90e":"6a273746","chunk-c1c3a0e0":"9d812431"}[e]+".css",r=u.p+a,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var s=o[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===a||l===r))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],l=s.getAttribute("data-href");if(l===a||l===r)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete c[e],f.parentNode.removeChild(f),n(o)},f.href=r;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){c[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=o);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",d.name="ChunkLoadError",d.type=a,d.request=c,n[1](d)}r[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0624":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[e._t("default"),n("div",{staticClass:"container containerHeader"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col s12 l8 center-align"},[n("div",{attrs:{id:"headerContent"}},[e._t("headerContent")],2)])])])],2)},c=[],r={props:{img:{type:String,default:"@/assets/img/Our-company/our-com.jpg"}}},o=r,i=(n("7745"),n("40f0"),n("2877")),u=Object(i["a"])(o,a,c,!1,null,"ecb2a320",null);t["default"]=u.exports},1525:function(e,t,n){},"3dfd":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-view")},c=[],r={mounted:function(){setTimeout((function(){}),1e3)}},o=r,i=n("2877"),u=Object(i["a"])(o,a,c,!1,null,null,null);t["default"]=u.exports},"40f0":function(e,t,n){"use strict";n("b0a3")},"41cb":function(e,t,n){"use strict";n.r(t);n("d3b7");var a=n("2b0e"),c=n("8c4f");a["a"].use(c["a"]);var r=new c["a"]({mode:"history",scrollBehavior:function(){return{x:0,y:0}},routes:[{path:"/",redirect:{name:"home"}},{path:"/",component:function(){return n.e("chunk-c1c3a0e0").then(n.bind(null,"b8f7"))},name:"root",children:[{path:"/home",component:function(){return n.e("chunk-a8dd7fac").then(n.bind(null,"4a12"))},name:"home",meta:{imgPath:"@/assets/img/Our-company/our-com.jpg"}},{path:"/our-business",component:function(){return n.e("chunk-24dced23").then(n.bind(null,"e7bb"))},name:"ourbusiness"},{path:"/our-product",component:function(){return n.e("chunk-5c6ca6dc").then(n.bind(null,"8203"))},name:"ourproduct"},{path:"/our-product-detail",component:function(){return Promise.all([n.e("chunk-8811ed12"),n.e("chunk-5c6ca6dc"),n.e("chunk-24dced23"),n.e("chunk-a8dd7fac"),n.e("chunk-0833b90e")]).then(n.bind(null,"b4fa"))},name:"ourproductdetail"},{path:"/our-sourcing-detail",component:function(){return Promise.all([n.e("chunk-8811ed12"),n.e("chunk-5c6ca6dc"),n.e("chunk-24dced23"),n.e("chunk-a8dd7fac"),n.e("chunk-0833b90e")]).then(n.bind(null,"1407"))},name:"oursourcingdetail"},{path:"/new-insight",component:function(){return n.e("chunk-8811ed12").then(n.bind(null,"b7c3"))},name:"newinsight"},{path:"/contact",component:function(){return n.e("chunk-694eec7e").then(n.bind(null,"371a"))},name:"contact"}]}]});t["default"]=r},"46aa":function(e,t,n){"use strict";n("d9bf")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),c=n("3dfd"),r=n("41cb"),o=n("f4dd"),i=n("742e"),u=n("0624");a["a"].component("HeaderFile",u["default"]),window.$=window.jQuery=n("1157"),a["a"].component("navigation",o["default"]),a["a"].component("ImgLogo",i["default"]),a["a"].config.productionTip=!1,new a["a"]({router:r["default"],render:function(e){return e(c["default"])}}).$mount("#app")},"5fe7":function(e,t,n){},"742e":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"logoContainer"}},[a("img",{attrs:{src:n("de04"),width:e.width,alt:"Logo ELEMENT Group"}})])},c=[],r={props:{width:{default:300}}},o=r,i=(n("f7aa"),n("46aa"),n("cd3e"),n("2877")),u=Object(i["a"])(o,a,c,!1,null,"0e811bd5",null);t["default"]=u.exports},7745:function(e,t,n){"use strict";n("784e")},"784e":function(e,t,n){},"7f32":function(e,t,n){},8184:function(e,t,n){"use strict";n("c336")},"81ab":function(e,t,n){"use strict";n("1525")},"945e":function(e,t,n){},b0a3:function(e,t,n){},c330:function(e,t,n){"use strict";n("7f32")},c336:function(e,t,n){},cd3e:function(e,t,n){"use strict";n("945e")},d9bf:function(e,t,n){},de04:function(e,t,n){e.exports=n.p+"img/viethaus_transparent.21263032.png"},f4dd:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"nav-header",attrs:{role:"navigation",id:"navigation"}},[a("div",{staticClass:"nav-wrapper container"},[a("router-link",{staticClass:"page-scroll",attrs:{to:{name:"home"}}},[a("img",{staticClass:"logoNav",attrs:{src:n("de04"),alt:"Logo ELEMENT Americas"}})]),a("ul",{staticClass:"right hide-on-med-and-down",staticStyle:{"z-index":"10"}},[a("li",[a("router-link",{staticClass:"page-scroll",attrs:{"active-class":"active",to:{name:"home"}}},[e._v("Our Company")])],1),a("li",[a("router-link",{staticClass:"page-scroll",attrs:{"active-class":"active",to:{name:"ourbusiness"}}},[e._v("Products")])],1),a("li",[a("router-link",{staticClass:"page-scroll",attrs:{"active-class":"active",to:{name:"ourproduct"}}},[e._v("SOURCING")])],1),a("li",[a("router-link",{staticClass:"page-scroll",attrs:{"active-class":"active",to:{name:"newinsight"}}},[e._v("NEWS")])],1),a("li",[a("router-link",{staticClass:"page-scroll",attrs:{"active-class":"active",to:{name:"contact"}}},[e._v("Contact Us")])],1)]),a("button",{attrs:{id:"btnNavMobile"},on:{click:e.openModal}},[a("i",{staticClass:"fa fa-bars"})]),a("div",{staticClass:"modalNav",attrs:{id:"modalNav"},on:{click:e.hideModal}},[a("div",{staticClass:"modalOverlay"}),a("div",{staticClass:"navContent"},[a("li",[a("router-link",{staticClass:"page-scroll",attrs:{"active-class":"active",to:{name:"home"}}},[e._v("Our Company")])],1),a("li",[a("router-link",{staticClass:"page-scroll",attrs:{"active-class":"active",to:{name:"ourbusiness"}}},[e._v("Products")])],1),a("li",[a("router-link",{staticClass:"page-scroll",attrs:{"active-class":"active",to:{name:"ourproduct"}}},[e._v("SOURCING")])],1),a("li",[a("router-link",{staticClass:"page-scroll",attrs:{"active-class":"active",to:{name:"newinsight"}}},[e._v("NEWS")])],1),a("li",[a("router-link",{staticClass:"page-scroll",attrs:{"active-class":"active",to:{name:"contact"}}},[e._v("Contact Us")])],1)])])],1)])},c=[],r={name:"Navigation",methods:{openModal:function(){document.getElementById("modalNav").style.display="block"},hideModal:function(){document.getElementById("modalNav").style.display="none"}}},o=r,i=(n("8184"),n("81ab"),n("c330"),n("2877")),u=Object(i["a"])(o,a,c,!1,null,"0a67b67c",null);t["default"]=u.exports},f7aa:function(e,t,n){"use strict";n("5fe7")}});
//# sourceMappingURL=app.7028c5a5.js.map