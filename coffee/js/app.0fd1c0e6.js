(function(e){function n(n){for(var a,u,o=n[0],f=n[1],h=n[2],d=0,i=[];d<o.length;d++)u=o[d],Object.prototype.hasOwnProperty.call(c,u)&&c[u]&&i.push(c[u][0]),c[u]=0;for(a in f)Object.prototype.hasOwnProperty.call(f,a)&&(e[a]=f[a]);s&&s(n);while(i.length)i.shift()();return r.push.apply(r,h||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],a=!0,u=1;u<t.length;u++){var o=t[u];0!==c[o]&&(a=!1)}a&&(r.splice(n--,1),e=f(f.s=t[0]))}return e}var a={},u={app:0},c={app:0},r=[];function o(e){return f.p+"js/"+({}[e]||e)+"."+{"chunk-0203568e":"7d173fd1","chunk-06b9f771":"73ac0b19","chunk-17e84136":"5576709f","chunk-197ed09d":"06ada021","chunk-1f79f26c":"98397896","chunk-2ca8e38e":"1887f294","chunk-2d7f7805":"cfeffad3","chunk-2f913cbe":"6d07c349","chunk-3be2623e":"fb017d4d","chunk-40f041ea":"4863d603","chunk-439805be":"f38988a1","chunk-440609f8":"53678b0d","chunk-55e0474a":"5f65459e","chunk-6b56f798":"19749eb6","chunk-6ce41f61":"4b936091","chunk-763cad4e":"b44604c1","chunk-8a1eb664":"8aa8f794","chunk-a00b30d8":"93a25d22","chunk-a2875c96":"b4be60fa","chunk-dfe14f04":"ec26b227","chunk-fbfdb1f4":"af41e224"}[e]+".js"}function f(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,f),t.l=!0,t.exports}f.e=function(e){var n=[],t={"chunk-0203568e":1,"chunk-06b9f771":1,"chunk-17e84136":1,"chunk-197ed09d":1,"chunk-1f79f26c":1,"chunk-2ca8e38e":1,"chunk-2d7f7805":1,"chunk-2f913cbe":1,"chunk-3be2623e":1,"chunk-40f041ea":1,"chunk-439805be":1,"chunk-440609f8":1,"chunk-55e0474a":1,"chunk-6b56f798":1,"chunk-6ce41f61":1,"chunk-763cad4e":1,"chunk-8a1eb664":1,"chunk-a00b30d8":1,"chunk-a2875c96":1,"chunk-dfe14f04":1,"chunk-fbfdb1f4":1};u[e]?n.push(u[e]):0!==u[e]&&t[e]&&n.push(u[e]=new Promise((function(n,t){for(var a="css/"+({}[e]||e)+"."+{"chunk-0203568e":"43f22961","chunk-06b9f771":"347fdfe2","chunk-17e84136":"8b26ffbe","chunk-197ed09d":"f3cdaac4","chunk-1f79f26c":"c7ce1e99","chunk-2ca8e38e":"415afb21","chunk-2d7f7805":"b2c6d5e6","chunk-2f913cbe":"8c6635f8","chunk-3be2623e":"1616ac8a","chunk-40f041ea":"8ec77ca8","chunk-439805be":"5731b505","chunk-440609f8":"a4ae4234","chunk-55e0474a":"86ff6e4b","chunk-6b56f798":"77bc6034","chunk-6ce41f61":"5a991646","chunk-763cad4e":"200f9b40","chunk-8a1eb664":"feda1b55","chunk-a00b30d8":"97b68af3","chunk-a2875c96":"deec5a24","chunk-dfe14f04":"06d2db13","chunk-fbfdb1f4":"d3a7b320"}[e]+".css",c=f.p+a,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var h=r[o],d=h.getAttribute("data-href")||h.getAttribute("href");if("stylesheet"===h.rel&&(d===a||d===c))return n()}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){h=i[o],d=h.getAttribute("data-href");if(d===a||d===c)return n()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=n,s.onerror=function(n){var a=n&&n.target&&n.target.src||c,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete u[e],s.parentNode.removeChild(s),t(r)},s.href=c;var l=document.getElementsByTagName("head")[0];l.appendChild(s)})).then((function(){u[e]=0})));var a=c[e];if(0!==a)if(a)n.push(a[2]);else{var r=new Promise((function(n,t){a=c[e]=[n,t]}));n.push(a[2]=r);var h,d=document.createElement("script");d.charset="utf-8",d.timeout=120,f.nc&&d.setAttribute("nonce",f.nc),d.src=o(e);var i=new Error;h=function(n){d.onerror=d.onload=null,clearTimeout(s);var t=c[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.src;i.message="Loading chunk "+e+" failed.\n("+a+": "+u+")",i.name="ChunkLoadError",i.type=a,i.request=u,t[1](i)}c[e]=void 0}};var s=setTimeout((function(){h({type:"timeout",target:d})}),12e4);d.onerror=d.onload=h,document.head.appendChild(d)}return Promise.all(n)},f.m=e,f.c=a,f.d=function(e,n,t){f.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},f.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.t=function(e,n){if(1&n&&(e=f(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(f.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)f.d(t,a,function(n){return e[n]}.bind(null,a));return t},f.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return f.d(n,"a",n),n},f.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},f.p="",f.oe=function(e){throw console.error(e),e};var h=window["webpackJsonp"]=window["webpackJsonp"]||[],d=h.push.bind(h);h.push=n,h=h.slice();for(var i=0;i<h.length;i++)n(h[i]);var s=d;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"4e66":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("dbb3"),t("77ad"),t("e18c"),t("84c2"),t("e35a"),t("1c2e"),t("5e9f"),t("e843");var a=t("a0d2"),u=(t("49be"),t("a2ca")),c=(t("edc6"),t("b2c5")),r=(t("d54c"),t("1cdc")),o=(t("d5a7"),t("9201")),f=(t("a7ed"),t("e8b8")),h=(t("f2cb"),t("318f")),d=(t("2fe8"),t("31bb")),i=(t("0060"),t("a302")),s=(t("b02b"),t("2110")),l=(t("ec7f"),t("a3c2")),b=(t("9b11"),t("8183")),p=(t("30dd"),t("3498")),k=(t("aa35"),t("1d29")),m=(t("7d80"),t("747b")),g=(t("590c"),t("9948")),v=(t("e305"),t("1d06")),y=(t("f6b9"),t("2aa4")),w=(t("f0ba"),t("9d9f")),S=(t("bcde"),t("61e3")),j=(t("dee8"),t("8d9b")),x=(t("6ea8"),t("f2e6")),O=(t("d13a"),t("d2a8")),E=(t("6797"),t("606f")),P=(t("b287"),t("f96d")),C=(t("293e"),t("ba60")),M=(t("79fe"),t("185c")),_=(t("4076"),t("6c0d")),A=(t("59f1"),t("b137")),T=(t("b14e"),t("6198")),L=(t("b09b"),t("ef2f")),N=(t("76bf"),t("718e")),D=(t("87ff"),t("8e39")),B=(t("2af9"),t("fc27")),F=(t("602f"),t("5121")),R=(t("a133"),t("ed0d"),t("f09c"),t("e117"),t("a593")),$=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},H=[],U=(t("7c55"),t("9ca4")),q={},G=Object(U["a"])(q,$,H,!1,null,null,null),J=G.exports,V=t("6f50"),W=[{path:"/login",name:"Login",component:function(){return t.e("chunk-3be2623e").then(t.bind(null,"a55b"))}},{path:"/main",name:"Main",component:function(){return t.e("chunk-a00b30d8").then(t.bind(null,"cd56"))},children:[{path:"home",name:"Home",component:function(){return t.e("chunk-06b9f771").then(t.bind(null,"b288"))}},{path:"menu",name:"Menu",component:function(){return t.e("chunk-0203568e").then(t.bind(null,"0f38"))}},{path:"shopbag",name:"Shopbag",component:function(){return t.e("chunk-763cad4e").then(t.bind(null,"6707"))}},{path:"my",name:"My",component:function(){return t.e("chunk-197ed09d").then(t.bind(null,"3837"))}}]},{path:"/detail",name:"Detail",component:function(){return t.e("chunk-6b56f798").then(t.bind(null,"c84b"))}},{path:"/pay",name:"Pay",component:function(){return t.e("chunk-40f041ea").then(t.bind(null,"76a1"))}},{path:"/address",name:"Address",component:function(){return t.e("chunk-1f79f26c").then(t.bind(null,"a821"))}},{path:"/newAddress",name:"NewAddress",component:function(){return t.e("chunk-dfe14f04").then(t.bind(null,"5f65"))}},{path:"/destination",name:"Destination",component:function(){return t.e("chunk-440609f8").then(t.bind(null,"9fdb"))}},{path:"/grinding",name:"Grinding",component:function(){return t.e("chunk-6ce41f61").then(t.bind(null,"b6b6"))}},{path:"/sweets",name:"Sweets",component:function(){return t.e("chunk-2ca8e38e").then(t.bind(null,"adb1"))}},{path:"/order",name:"Order",component:function(){return t.e("chunk-17e84136").then(t.bind(null,"cf2a"))}},{path:"/culture",name:"Culture",component:function(){return t.e("chunk-fbfdb1f4").then(t.bind(null,"aced"))}},{path:"/me",name:"Me",component:function(){return t.e("chunk-439805be").then(t.bind(null,"0a99"))}},{path:"/like",name:"Like",component:function(){return t.e("chunk-8a1eb664").then(t.bind(null,"7c2a"))}},{path:"/safe",name:"Safe",component:function(){return t.e("chunk-2d7f7805").then(t.bind(null,"bc90"))}},{path:"/forget",name:"Forget",component:function(){return t.e("chunk-a2875c96").then(t.bind(null,"4f3a"))}},{path:"/search",name:"Search",component:function(){return t.e("chunk-55e0474a").then(t.bind(null,"2d3b"))}},{path:"/waiter",name:"Waiter",component:function(){return t.e("chunk-2f913cbe").then(t.bind(null,"2736"))}},{path:"*",redirect:{name:"Login"}}];R["a"].use(V["a"]);var I=new V["a"]({routes:W}),K=I,Q=(t("44ce"),t("82ae")),X=t.n(Q),Y=t("e7aa"),Z=t.n(Y);R["a"].use(a["a"]).use(u["a"]).use(c["a"]).use(r["a"]).use(o["a"]).use(f["a"]).use(h["a"]).use(d["a"]).use(i["a"]).use(s["a"]).use(l["a"]).use(b["a"]).use(p["a"]).use(k["a"]).use(m["a"]).use(g["a"]).use(v["a"]).use(y["a"]).use(w["a"]).use(S["a"]).use(j["a"]).use(x["a"]).use(O["a"]).use(E["a"]).use(P["a"]).use(C["a"]).use(M["a"]).use(_["a"]).use(A["a"]).use(T["a"]).use(L["a"]).use(N["a"]).use(D["a"]).use(B["a"]).use(F["a"]),X.a.defaults.baseURL="http://www.kangliuyong.com:10002",X.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=utf-8",R["a"].config.productionTip=!1,R["a"].prototype.appkey="U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=",R["a"].filter("formatDate",(function(e,n){var t=new Date(e),a=t.getFullYear();if(/(y+)/.test(n)){var u=RegExp.$1;n=n.replace(u,a.toString().slice(4-u.length))}var c={M:t.getMonth()+1,d:t.getDate(),h:t.getHours(),m:t.getMinutes(),s:t.getSeconds()};for(var r in c){var o=new RegExp("(".concat(r,"+)"));if(o.test(n)){var f=RegExp.$1,h=c[r]>=10?c[r]:2==f.length?"0"+c[r]:c[r];n=n.replace(f,h)}}return n})),R["a"].config.productionTip=!1,R["a"].use(Z.a,X.a),new R["a"]({router:K,render:function(e){return e(J)}}).$mount("#app")},"7c55":function(e,n,t){"use strict";var a=t("4e66"),u=t.n(a);u.a}});
//# sourceMappingURL=app.0fd1c0e6.js.map