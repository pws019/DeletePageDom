(function(e){function t(t){for(var n,c,i=t[0],l=t[1],s=t[2],u=0,p=[];u<i.length;u++)c=i[u],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);f&&f(t);while(p.length)p.shift()();return a.push.apply(a,s||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,c=1;c<r.length;c++){var l=r[c];0!==o[l]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},a=[];function c(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"44dc347e"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=n);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var s=new Error;a=function(t){l.onerror=l.onload=null,clearTimeout(u);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",s.name="ChunkLoadError",s.type=n,s.request=a,r[1](s)}o[e]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:l})}),12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var f=s;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},2395:function(e,t,r){},6293:function(e,t,r){"use strict";var n=r("a830"),o=r.n(n);o.a},"7c55":function(e,t,r){"use strict";var n=r("2395"),o=r.n(n);o.a},a830:function(e,t,r){},cd49:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},a=[],c=n["default"].extend({name:"App"}),i=c,l=(r("7c55"),r("2877")),s=Object(l["a"])(i,o,a,!1,null,null,null),u=s.exports,f=(r("d3b7"),r("8c4f")),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("HomeContent")],1)},d=[],m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",[r("Input",{staticStyle:{width:"300px"},attrs:{type:"textarea",rows:4,disabled:!0,placeholder:"已缓存css选择器"},model:{value:e.cacheSelector,callback:function(t){e.cacheSelector=t},expression:"cacheSelector"}})],1),r("div",[r("Input",{staticClass:"mgt10",staticStyle:{width:"300px"},attrs:{type:"textarea",rows:4,placeholder:"需要删除元素的css选择器,多个请“,”隔开"},model:{value:e.filterSelector,callback:function(t){e.filterSelector=t},expression:"filterSelector"}})],1),r("div",{staticClass:"mgt10"},[r("Button",{staticStyle:{width:"140px"},attrs:{type:"primary"},on:{click:e.confirm}},[e._v("生效")]),r("Button",{staticStyle:{width:"140px","margin-left":"20px"},attrs:{type:"error"},on:{click:e.reset}},[e._v("清除缓存")])],1),r("div",{staticClass:"mgt10"},[e.errMsg?r("Alert",{attrs:{type:"error"}},[e._v(e._s(e.errMsg))]):e._e()],1)])},h=[],v=(r("a15b"),r("ac1f"),r("25f0"),r("5319"),r("1276"),function(e,t){chrome.tabs.query({active:!0,currentWindow:!0},(function(r){chrome.tabs.sendMessage(r[0].id,e,(function(e){t&&t(e)}))}))}),g={sendMessage:v},b=n["default"].extend({name:"HomeContent",mounted:function(){var e=this;g.sendMessage({type:"getDeleteSelectorsFromLocalStorage"},(function(t){var r=t.data||[],n=r.toString();e.filterSelector=n,e.cacheSelector=n}))},data:function(){return{filterSelector:"",errMsg:"",cacheSelector:""}},methods:{confirm:function(){var e=this;if(this.filterSelector){var t=this.filterSelector.replace(/\n/g,",").replace(/，/g,",").split(",");g.sendMessage({type:"deleteDom",data:t},(function(r){var n=r.err;n.length>0?e.errMsg=n.join("**************************"):e.errMsg="",g.sendMessage({type:"setDeleteSelectorsFromLocalStorage",data:t}),e.filterSelector=t.toString(),e.cacheSelector=t.toString()}))}},reset:function(){g.sendMessage({type:"setDeleteSelectorsFromLocalStorage",data:""}),this.filterSelector="",this.cacheSelector=""}}}),y=b,S=(r("6293"),Object(l["a"])(y,m,h,!1,null,"3aa13f96",null)),w=S.exports,x={name:"Home",components:{HomeContent:w}},_=x,j=Object(l["a"])(_,p,d,!1,null,null,null),M=j.exports;n["default"].use(f["a"]);var O=[{path:"/",name:"Home",component:M},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],k=new f["a"]({routes:O}),C=k,P=r("2f62");n["default"].use(P["a"]);var E=new P["a"].Store({state:{},mutations:{},actions:{},modules:{}}),H=r("f825"),L=r.n(H);r("f8ce");n["default"].use(L.a),n["default"].config.productionTip=!1,new n["default"]({router:C,store:E,render:function(e){return e(u)}}).$mount("#app")}});
//# sourceMappingURL=app.8c2a1143.js.map