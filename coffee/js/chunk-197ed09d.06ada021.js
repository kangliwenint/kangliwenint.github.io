(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-197ed09d"],{"04c7":function(t,e,i){"use strict";function n(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function a(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}i.d(e,"a",(function(){return a}))},"0d7a":function(t,e,i){"use strict";var n=i("b2a2"),a=i("8a1c"),s=i("857c"),o=i("2732"),r=i("ef4c"),c=i("38eb"),l=i("d88d"),u=i("59da"),f=i("5139"),d=i("efe2"),h=[].push,p=Math.min,g=4294967295,m=!d((function(){return!RegExp(g,"y")}));n("split",2,(function(t,e,i){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,i){var n=String(o(this)),s=void 0===i?g:i>>>0;if(0===s)return[];if(void 0===t)return[n];if(!a(t))return e.call(n,t,s);var r,c,l,u=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,m=new RegExp(t.source,d+"g");while(r=f.call(m,n)){if(c=m.lastIndex,c>p&&(u.push(n.slice(p,r.index)),r.length>1&&r.index<n.length&&h.apply(u,r.slice(1)),l=r[0].length,p=c,u.length>=s))break;m.lastIndex===r.index&&m.lastIndex++}return p===n.length?!l&&m.test("")||u.push(""):u.push(n.slice(p)),u.length>s?u.slice(0,s):u}:"0".split(void 0,0).length?function(t,i){return void 0===t&&0===i?[]:e.call(this,t,i)}:e,[function(e,i){var a=o(this),s=void 0==e?void 0:e[t];return void 0!==s?s.call(e,a,i):n.call(String(a),e,i)},function(t,a){var o=i(n,t,this,a,n!==e);if(o.done)return o.value;var f=s(t),d=String(this),h=r(f,RegExp),v=f.unicode,b=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(m?"y":"g"),C=new h(m?f:"^(?:"+f.source+")",b),y=void 0===a?g:a>>>0;if(0===y)return[];if(0===d.length)return null===u(C,d)?[d]:[];var k=0,x=0,w=[];while(x<d.length){C.lastIndex=m?x:0;var I,$=u(C,m?d:d.slice(x));if(null===$||(I=p(l(C.lastIndex+(m?0:x)),d.length))===k)x=c(d,x,v);else{if(w.push(d.slice(k,x)),w.length===y)return w;for(var S=1;S<=$.length-1;S++)if(w.push($[S]),w.length===y)return w;x=k=I}}return w.push(d.slice(k)),w}]}),!m)},1983:function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}i.d(e,"a",(function(){return n}))},"2f14":function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));i("b4fb"),i("77ad");var n=i("1983"),a=i("04c7"),s=function(){function t(){Object(n["a"])(this,t)}return Object(a["a"])(t,[{key:"queryString",value:function(t){var e="";for(var i in t)e+="".concat(i,"=").concat(t[i],"&");return e.slice(0,-1)}}]),t}(),o=new s},3837:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my"},[n("div",{staticClass:"bg"}),t.isLogin?n("div",{staticClass:"bow"},[n("div",{staticClass:"bow-top clearfix"},[n("div",{staticClass:"head-img fl"},[n("img",{staticClass:"auto-img imghead",attrs:{src:t.userInfo.userImg,alt:""}})]),n("div",{staticClass:"shezhi fr",on:{click:t.showPopup}},[n("img",{staticClass:"auto-img ig",attrs:{src:i("f27d"),alt:""}})])]),n("div",{staticClass:"name"},[t._v(t._s(t.userInfo.nickName))])]):n("div",{staticClass:"bow"},[n("div",{staticClass:"bow-top clearfix"},[n("div",{staticClass:"head-img fl"},[n("img",{staticClass:"auto-img imghead",attrs:{src:t.userInfo.userImg,alt:""}})]),n("div",{staticClass:"shezhi fr",on:{click:t.showPopup}},[n("img",{staticClass:"auto-img ig",attrs:{src:i("f27d"),alt:""}})])]),n("div",{staticClass:"name",on:{click:t.gologin}},[t._v("请先登录")])]),n("van-popup",{style:{height:"100%",width:"70%"},attrs:{position:"left"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("div",{staticClass:"personal"},[n("div",{staticClass:"list-box"},[n("van-cell",{attrs:{title:"头像"}},[n("div",{staticClass:"avatar fr"},[n("img",{staticClass:"auto-img",attrs:{src:t.userInfo.userImg,alt:""}}),n("van-uploader",{staticClass:"uploader-box",attrs:{"after-read":t.headimg}})],1)]),n("van-cell",{attrs:{title:"用户id"}},[n("div",{staticClass:"fr"},[t._v(t._s(t.userInfo.userId))])]),n("van-cell",{attrs:{title:"手机号"}},[n("div",{staticClass:"fr"},[t._v(t._s(t.userInfo.phone))])]),n("van-cell",{attrs:{title:"昵称"}},[n("div",{staticClass:"fr"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.userInfo.nickName,expression:"userInfo.nickName"}],staticClass:"nickname",attrs:{type:"text"},domProps:{value:t.userInfo.nickName},on:{change:function(e){return t.modifyuserinfo("nickName","/updateNickName")},input:function(e){e.target.composing||t.$set(t.userInfo,"nickName",e.target.value)}}})])]),n("div",{staticClass:"desc-box"},[n("div",{staticClass:"desc-title"},[t._v("简介")]),n("div",[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.userInfo.desc,expression:"userInfo.desc"}],staticClass:"text-area",attrs:{placeholder:"这家伙很懒，什么都没有留下"},domProps:{value:t.userInfo.desc},on:{change:function(e){return t.modifyuserinfo("desc","/updateDesc")},input:function(e){e.target.composing||t.$set(t.userInfo,"desc",e.target.value)}}})])])],1)])]),n("div",{staticClass:"myicon clearfix"},[n("div",{staticClass:"myicon-item fl",on:{click:t.culture}},[t._m(0),n("div",{staticClass:"myicon-info"},[t._v("文化")])]),n("div",{staticClass:"myicon-item fl",on:{click:t.like}},[t._m(1),n("div",{staticClass:"myicon-info"},[t._v("收藏")])]),n("div",{staticClass:"myicon-item fl",on:{click:t.me}},[t._m(2),n("div",{staticClass:"myicon-info"},[t._v("我们")])])]),n("div",{staticClass:"other"},[n("van-notice-bar",{attrs:{mode:"link",text:"red",color:"black"},on:{click:t.administration}},[t._v("地址管理")])],1),n("div",{staticClass:"other"},[n("van-notice-bar",{attrs:{mode:"link",text:"red",color:"black"},on:{click:t.order}},[t._v("购物清单")])],1),n("div",{staticClass:"other"},[n("div",{staticClass:"you"},[n("van-coupon-cell",{attrs:{coupons:t.coupons,"chosen-coupon":t.chosenCoupon},on:{click:function(e){t.showList=!0}}}),n("van-popup",{staticStyle:{height:"60%"},attrs:{round:"",position:"bottom"},model:{value:t.showList,callback:function(e){t.showList=e},expression:"showList"}},[n("van-coupon-list",{attrs:{coupons:t.coupons,"chosen-coupon":t.chosenCoupon,"disabled-coupons":t.disabledCoupons},on:{change:t.onChange,exchange:t.onExchange}})],1)],1)]),n("div",{staticClass:"other"},[n("van-notice-bar",{attrs:{mode:"link",text:"red",color:"black"},on:{click:t.safe}},[t._v("安全中心")])],1),n("div",{staticClass:"other"},[n("van-notice-bar",{attrs:{mode:"link",text:"red",color:"black"},on:{click:t.edition}},[t._v("版本更新")])],1)],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-icon"},[n("img",{staticClass:"auto-img",attrs:{src:i("4e89"),alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-icon"},[n("img",{staticClass:"auto-img",attrs:{src:i("a646"),alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-icon"},[n("img",{staticClass:"auto-img",attrs:{src:i("a0f5"),alt:""}})])}];i("ecb4"),i("9302"),i("e35a"),i("5e9f"),i("0d7a");function s(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}i("619a");var o=i("2f14"),r={available:1,condition:"无使用门槛\n最多优惠12元",reason:"",value:150,name:"优惠券名称",startAt:1599114e3,endAt:1600592e3,valueDesc:"1.5",unitDesc:"元"},c={data:function(){return{show:!1,userInfo:{},maxSize:1048576,isLogin:!1,chosenCoupon:-1,coupons:[r],disabledCoupons:[r],showList:!1}},created:function(){this.getuserinfo()},methods:{showPopup:function(){this.show=!0},getuserinfo:function(){var t=this,e=localStorage.getItem("CSTK");e&&(this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"}),this.axios({method:"GET",url:"/findAccountInfo",params:{appkey:this.appkey,tokenString:e}}).then((function(e){t.$toast.clear(),"B001"==e.data.code&&(t.isLogin=!0,t.userInfo=e.data.result[0])})).catch((function(e){t.$toast.clear()})))},headimg:function(t){var e=this,i=localStorage.getItem("CSTK");if(i){var n=t.file.type.split("/")[1],a=["png","gif","jpg","jpeg"];if(-1!==a.indexOf(n))if(this.maxSize<t.file.size)this.$notify({message:"上传文件大小不能超过"+this.maxSize/1024+"KB",color:"#fff",background:"#5f56ff"});else{var s=t.content.replace(/data:image\/[A-Za-z]+;base64,/,""),r=o["a"].queryString({appkey:this.appkey,tokenString:i,imgType:n,serverBase64Img:s});this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"}),this.axios({method:"POST",url:"/updateAvatar",data:r}).then((function(t){e.$toast.clear(),"H001"==t.data.code&&(e.userInfo.userImg=t.data.userImg)})).catch((function(t){e.$toast.clear()}))}else this.$notify({message:"图片类型只支持"+a.join(","),color:"#fff",background:"#5f56ff"})}},modifyuserinfo:function(t,e){var i=this,n=localStorage.getItem("CSTK");if(n){var a=o["a"].queryString(s({appkey:this.appkey,tokenString:n},t,this.userInfo[t]));this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"}),this.axios({method:"POST",url:e,data:a}).then((function(t){i.$toast.clear(),i.$toast(t.data.msg)})).catch((function(t){i.$toast.clear()}))}},gologin:function(){this.$router.push({name:"Login"})},administration:function(){this.$router.push({name:"Address"})},order:function(){this.$router.push({name:"Order"})},culture:function(){var t=this;this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"}),this.$router.push({name:"Culture"}),setTimeout((function(){t.$toast.clear()}),500)},me:function(){var t=this;this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"}),this.$router.push({name:"Me"}),setTimeout((function(){t.$toast.clear()}),500)},like:function(){this.$router.push({name:"Like"})},safe:function(){this.$router.push({name:"Safe"})},onChange:function(t){this.showList=!1,this.chosenCoupon=t},onExchange:function(t){this.coupons.push(r)},edition:function(){this.$toast("你已经是最新版本4.1.3,无需更新")}}},l=c,u=i("9ca4"),f=Object(u["a"])(l,n,a,!1,null,"6b41d62f",null);e["default"]=f.exports},"4e89":function(t,e,i){t.exports=i.p+"img/myicon1.e1aba9a4.png"},"619a":function(t,e,i){},9302:function(t,e,i){"use strict";var n=i("1c8b"),a=i("692f"),s=i("da10"),o=i("d7e1"),r=[].join,c=a!=Object,l=o("join",",");n({target:"Array",proto:!0,forced:c||!l},{join:function(t){return r.call(s(this),void 0===t?",":t)}})},a0f5:function(t,e,i){t.exports=i.p+"img/myicon3.fd812525.png"},a646:function(t,e,i){t.exports=i.p+"img/myicon2.9a68dee4.png"},b4fb:function(t,e,i){"use strict";var n=i("1c8b"),a=i("efe2"),s=i("74e7"),o=i("a719"),r=i("3553"),c=i("d88d"),l=i("1bbd"),u=i("1ca1"),f=i("1ea7"),d=i("90fb"),h=i("f594"),p=d("isConcatSpreadable"),g=9007199254740991,m="Maximum allowed index exceeded",v=h>=51||!a((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),b=f("concat"),C=function(t){if(!o(t))return!1;var e=t[p];return void 0!==e?!!e:s(t)},y=!v||!b;n({target:"Array",proto:!0,forced:y},{concat:function(t){var e,i,n,a,s,o=r(this),f=u(o,0),d=0;for(e=-1,n=arguments.length;e<n;e++)if(s=-1===e?o:arguments[e],C(s)){if(a=c(s.length),d+a>g)throw TypeError(m);for(i=0;i<a;i++,d++)i in s&&l(f,d,s[i])}else{if(d>=g)throw TypeError(m);l(f,d++,s)}return f.length=d,f}})},d7e1:function(t,e,i){"use strict";var n=i("efe2");t.exports=function(t,e){var i=[][t];return!!i&&n((function(){i.call(null,e||function(){throw 1},1)}))}},ecb4:function(t,e,i){"use strict";var n=i("1c8b"),a=i("45af").indexOf,s=i("d7e1"),o=i("ff9c"),r=[].indexOf,c=!!r&&1/[1].indexOf(1,-0)<0,l=s("indexOf"),u=o("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:c||!l||!u},{indexOf:function(t){return c?r.apply(this,arguments)||0:a(this,t,arguments.length>1?arguments[1]:void 0)}})},f27d:function(t,e,i){t.exports=i.p+"img/shezhi.3b4f9caf.png"}}]);
//# sourceMappingURL=chunk-197ed09d.06ada021.js.map