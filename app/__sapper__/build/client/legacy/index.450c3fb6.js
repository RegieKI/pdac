import{_ as n,a as t,b as e,c as r,i as c,s as o,d as a,S as u,ak as f,E as i,F as s,G as $,A as l,H as p,I as m,J as v,a8 as g,al as d,aa as y,ab as h,ac as w,C as x,ad as O,f as b,l as j,n as P,k as D,q as S,ai as R,u as k,$ as C,a0 as N,a1 as E,D as F,Q as A,T as H,R as T,y as _,X as B,x as V,v as W,w as q,t as G,j as I,e as J,g as Q,h as X,m as z,o as K}from"./client.a873360c.js";function L(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var c,o=t(n);if(r){var a=t(this).constructor;c=Reflect.construct(o,arguments,a)}else c=o.apply(this,arguments);return e(this,c)}}function M(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function U(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?M(Object(e),!0).forEach((function(t){y(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):M(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function Y(n){var t,e=n[3].default,r=h(e,n,n[4],null);return{c:function(){r&&r.c()},l:function(n){r&&r.l(n)},m:function(n,e){r&&r.m(n,e),t=!0},p:function(n,t){r&&r.p&&16&t&&w(r,e,n,n[4],t,null,null)},i:function(n){t||(p(r,n),t=!0)},o:function(n){m(r,n),t=!1},d:function(n){r&&r.d(n)}}}function Z(n){var t,e;return t=new f({props:{a:n[0],style:n[1],className:n[2],$$slots:{default:[Y]},$$scope:{ctx:n}}}),{c:function(){i(t.$$.fragment)},l:function(n){s(t.$$.fragment,n)},m:function(n,r){$(t,n,r),e=!0},p:function(n,e){var r=l(e,1)[0],c={};1&r&&(c.a=n[0]),2&r&&(c.style=n[1]),4&r&&(c.className=n[2]),16&r&&(c.$$scope={dirty:r,ctx:n}),t.$set(c)},i:function(n){e||(p(t.$$.fragment,n),e=!0)},o:function(n){m(t.$$.fragment,n),e=!1},d:function(n){v(t,n)}}}function nn(n,t,e){var r=t.a;r=U(U({},g[d]),r);var c=t.style,o=void 0===c?"":c,a=t.className,u=void 0===a?"":a,f=t.$$slots,i=void 0===f?{}:f,s=t.$$scope;return n.$$set=function(n){"a"in n&&e(0,r=n.a),"style"in n&&e(1,o=n.style),"className"in n&&e(2,u=n.className),"$$scope"in n&&e(4,s=n.$$scope)},[r,o,u,i,s]}var tn=function(t){n(f,u);var e=L(f);function f(n){var t;return r(this,f),t=e.call(this),c(a(t),n,nn,Z,o,{a:0,style:1,className:2}),t}return f}();function en(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var c,o=t(n);if(r){var a=t(this).constructor;c=Reflect.construct(o,arguments,a)}else c=o.apply(this,arguments);return e(this,c)}}function rn(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function cn(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?rn(Object(e),!0).forEach((function(t){y(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):rn(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function on(n){var t;return{c:function(){t=G("Audio")},l:function(n){t=I(n,"Audio")},m:function(n,e){P(n,t,e)},d:function(n){n&&D(t)}}}function an(n){var t;return{c:function(){t=G("Video")},l:function(n){t=I(n,"Video")},m:function(n,e){P(n,t,e)},d:function(n){n&&D(t)}}}function un(n){var t;return{c:function(){t=G("Heartrate")},l:function(n){t=I(n,"Heartrate")},m:function(n,e){P(n,t,e)},d:function(n){n&&D(t)}}}function fn(n){var t,e,r,c,o,a,u,f,l;function g(t){n[11].call(null,t)}var d={$$slots:{default:[on]},$$scope:{ctx:n}};function y(t){n[12].call(null,t)}void 0!==n[1]&&(d.a=n[1]),t=new tn({props:d}),C.push((function(){return N(t,"a",g)}));var h={$$slots:{default:[an]},$$scope:{ctx:n}};function w(t){n[13].call(null,t)}void 0!==n[2]&&(h.a=n[2]),c=new tn({props:h}),C.push((function(){return N(c,"a",y)}));var x={$$slots:{default:[un]},$$scope:{ctx:n}};return void 0!==n[3]&&(x.a=n[3]),u=new tn({props:x}),C.push((function(){return N(u,"a",w)})),{c:function(){i(t.$$.fragment),r=b(),i(c.$$.fragment),a=b(),i(u.$$.fragment)},l:function(n){s(t.$$.fragment,n),r=j(n),s(c.$$.fragment,n),a=j(n),s(u.$$.fragment,n)},m:function(n,e){$(t,n,e),P(n,r,e),$(c,n,e),P(n,a,e),$(u,n,e),l=!0},p:function(n,r){var a={};1048576&r&&(a.$$scope={dirty:r,ctx:n}),!e&&2&r&&(e=!0,a.a=n[1],E((function(){return e=!1}))),t.$set(a);var i={};1048576&r&&(i.$$scope={dirty:r,ctx:n}),!o&&4&r&&(o=!0,i.a=n[2],E((function(){return o=!1}))),c.$set(i);var s={};1048576&r&&(s.$$scope={dirty:r,ctx:n}),!f&&8&r&&(f=!0,s.a=n[3],E((function(){return f=!1}))),u.$set(s)},i:function(n){l||(p(t.$$.fragment,n),p(c.$$.fragment,n),p(u.$$.fragment,n),l=!0)},o:function(n){m(t.$$.fragment,n),m(c.$$.fragment,n),m(u.$$.fragment,n),l=!1},d:function(n){v(t,n),n&&D(r),v(c,n),n&&D(a),v(u,n)}}}function sn(n){var t;return{c:function(){t=G("Face")},l:function(n){t=I(n,"Face")},m:function(n,e){P(n,t,e)},d:function(n){n&&D(t)}}}function $n(n){var t;return{c:function(){t=G("Body")},l:function(n){t=I(n,"Body")},m:function(n,e){P(n,t,e)},d:function(n){n&&D(t)}}}function ln(n){var t;return{c:function(){t=G("Sockets")},l:function(n){t=I(n,"Sockets")},m:function(n,e){P(n,t,e)},d:function(n){n&&D(t)}}}function pn(n){var t,e,r,c,o,a;return t=new tn({props:{$$slots:{default:[sn]},$$scope:{ctx:n}}}),r=new tn({props:{$$slots:{default:[$n]},$$scope:{ctx:n}}}),o=new tn({props:{$$slots:{default:[ln]},$$scope:{ctx:n}}}),{c:function(){i(t.$$.fragment),e=b(),i(r.$$.fragment),c=b(),i(o.$$.fragment)},l:function(n){s(t.$$.fragment,n),e=j(n),s(r.$$.fragment,n),c=j(n),s(o.$$.fragment,n)},m:function(n,u){$(t,n,u),P(n,e,u),$(r,n,u),P(n,c,u),$(o,n,u),a=!0},p:function(n,e){var c={};1048576&e&&(c.$$scope={dirty:e,ctx:n}),t.$set(c);var a={};1048576&e&&(a.$$scope={dirty:e,ctx:n}),r.$set(a);var u={};1048576&e&&(u.$$scope={dirty:e,ctx:n}),o.$set(u)},i:function(n){a||(p(t.$$.fragment,n),p(r.$$.fragment,n),p(o.$$.fragment,n),a=!0)},o:function(n){m(t.$$.fragment,n),m(r.$$.fragment,n),m(o.$$.fragment,n),a=!1},d:function(n){v(t,n),n&&D(e),v(r,n),n&&D(c),v(o,n)}}}function mn(n){var t;return{c:function(){t=G("RTSP")},l:function(n){t=I(n,"RTSP")},m:function(n,e){P(n,t,e)},d:function(n){n&&D(t)}}}function vn(n){var t;return{c:function(){t=G("File")},l:function(n){t=I(n,"File")},m:function(n,e){P(n,t,e)},d:function(n){n&&D(t)}}}function gn(n){var t;return{c:function(){t=G("Window")},l:function(n){t=I(n,"Window")},m:function(n,e){P(n,t,e)},d:function(n){n&&D(t)}}}function dn(n){var t,e,r,c,o,a,u,f,l;function g(t){n[14].call(null,t)}var d={$$slots:{default:[mn]},$$scope:{ctx:n}};function y(t){n[15].call(null,t)}void 0!==n[4]&&(d.a=n[4]),t=new tn({props:d}),C.push((function(){return N(t,"a",g)}));var h={$$slots:{default:[vn]},$$scope:{ctx:n}};function w(t){n[16].call(null,t)}void 0!==n[5]&&(h.a=n[5]),c=new tn({props:h}),C.push((function(){return N(c,"a",y)}));var x={$$slots:{default:[gn]},$$scope:{ctx:n}};return void 0!==n[6]&&(x.a=n[6]),u=new tn({props:x}),C.push((function(){return N(u,"a",w)})),{c:function(){i(t.$$.fragment),r=b(),i(c.$$.fragment),a=b(),i(u.$$.fragment)},l:function(n){s(t.$$.fragment,n),r=j(n),s(c.$$.fragment,n),a=j(n),s(u.$$.fragment,n)},m:function(n,e){$(t,n,e),P(n,r,e),$(c,n,e),P(n,a,e),$(u,n,e),l=!0},p:function(n,r){var a={};1048576&r&&(a.$$scope={dirty:r,ctx:n}),!e&&16&r&&(e=!0,a.a=n[4],E((function(){return e=!1}))),t.$set(a);var i={};1048576&r&&(i.$$scope={dirty:r,ctx:n}),!o&&32&r&&(o=!0,i.a=n[5],E((function(){return o=!1}))),c.$set(i);var s={};1048576&r&&(s.$$scope={dirty:r,ctx:n}),!f&&64&r&&(f=!0,s.a=n[6],E((function(){return f=!1}))),u.$set(s)},i:function(n){l||(p(t.$$.fragment,n),p(c.$$.fragment,n),p(u.$$.fragment,n),l=!0)},o:function(n){m(t.$$.fragment,n),m(c.$$.fragment,n),m(u.$$.fragment,n),l=!1},d:function(n){v(t,n),n&&D(r),v(c,n),n&&D(a),v(u,n)}}}function yn(n){var t,e;return{c:function(){t=J("a"),e=G("Preview"),this.h()},l:function(n){t=Q(n,"A",{href:!0});var r=X(t);e=I(r,"Preview"),r.forEach(D),this.h()},h:function(){z(t,"href","/camera/preview")},m:function(n,r){P(n,t,r),K(t,e)},d:function(n){n&&D(t)}}}function hn(n){var t,e;return(t=new F({props:{$$slots:{default:[xn]},$$scope:{ctx:n}}})).$on("click",n[8]),{c:function(){i(t.$$.fragment)},l:function(n){s(t.$$.fragment,n)},m:function(n,r){$(t,n,r),e=!0},p:function(n,e){var r={};1048576&e&&(r.$$scope={dirty:e,ctx:n}),t.$set(r)},i:function(n){e||(p(t.$$.fragment,n),e=!0)},o:function(n){m(t.$$.fragment,n),e=!1},d:function(n){v(t,n)}}}function wn(n){var t,e;return(t=new F({props:{$$slots:{default:[On]},$$scope:{ctx:n}}})).$on("click",n[9]),{c:function(){i(t.$$.fragment)},l:function(n){s(t.$$.fragment,n)},m:function(n,r){$(t,n,r),e=!0},p:function(n,e){var r={};1048576&e&&(r.$$scope={dirty:e,ctx:n}),t.$set(r)},i:function(n){e||(p(t.$$.fragment,n),e=!0)},o:function(n){m(t.$$.fragment,n),e=!1},d:function(n){v(t,n)}}}function xn(n){var t;return{c:function(){t=G("Start")},l:function(n){t=I(n,"Start")},m:function(n,e){P(n,t,e)},d:function(n){n&&D(t)}}}function On(n){var t;return{c:function(){t=G("Stop")},l:function(n){t=I(n,"Stop")},m:function(n,e){P(n,t,e)},d:function(n){n&&D(t)}}}function bn(n){var t,e,r,c,o,a;t=new F({props:{$$slots:{default:[yn]},$$scope:{ctx:n}}});var u=[wn,hn],f=[];function l(n,t){return n[7]?0:1}return r=l(n),c=f[r]=u[r](n),{c:function(){i(t.$$.fragment),e=b(),c.c(),o=A()},l:function(n){s(t.$$.fragment,n),e=j(n),c.l(n),o=A()},m:function(n,c){$(t,n,c),P(n,e,c),f[r].m(n,c),P(n,o,c),a=!0},p:function(n,e){var a={};1048576&e&&(a.$$scope={dirty:e,ctx:n}),t.$set(a);var i=r;(r=l(n))===i?f[r].p(n,e):(H(),m(f[i],1,1,(function(){f[i]=null})),T(),(c=f[r])||(c=f[r]=u[r](n)).c(),p(c,1),c.m(o.parentNode,o))},i:function(n){a||(p(t.$$.fragment,n),p(c),a=!0)},o:function(n){m(t.$$.fragment,n),m(c),a=!1},d:function(n){v(t,n),n&&D(e),f[r].d(n),n&&D(o)}}}function jn(n){var t,e,r,c,o,a,u,f,g,d;return t=new x({props:{page:n[0]}}),r=new O({props:{$$slots:{default:[fn]},$$scope:{ctx:n}}}),o=new O({props:{$$slots:{default:[pn]},$$scope:{ctx:n}}}),u=new O({props:{$$slots:{default:[dn]},$$scope:{ctx:n}}}),g=new O({props:{$$slots:{default:[bn]},$$scope:{ctx:n}}}),{c:function(){i(t.$$.fragment),e=b(),i(r.$$.fragment),c=b(),i(o.$$.fragment),a=b(),i(u.$$.fragment),f=b(),i(g.$$.fragment)},l:function(n){s(t.$$.fragment,n),e=j(n),s(r.$$.fragment,n),c=j(n),s(o.$$.fragment,n),a=j(n),s(u.$$.fragment,n),f=j(n),s(g.$$.fragment,n)},m:function(n,i){$(t,n,i),P(n,e,i),$(r,n,i),P(n,c,i),$(o,n,i),P(n,a,i),$(u,n,i),P(n,f,i),$(g,n,i),d=!0},p:function(n,e){var c=l(e,1)[0],a={};1&c&&(a.page=n[0]),t.$set(a);var f={};1048590&c&&(f.$$scope={dirty:c,ctx:n}),r.$set(f);var i={};1048576&c&&(i.$$scope={dirty:c,ctx:n}),o.$set(i);var s={};1048688&c&&(s.$$scope={dirty:c,ctx:n}),u.$set(s);var $={};1048704&c&&($.$$scope={dirty:c,ctx:n}),g.$set($)},i:function(n){d||(p(t.$$.fragment,n),p(r.$$.fragment,n),p(o.$$.fragment,n),p(u.$$.fragment,n),p(g.$$.fragment,n),d=!0)},o:function(n){m(t.$$.fragment,n),m(r.$$.fragment,n),m(o.$$.fragment,n),m(u.$$.fragment,n),m(g.$$.fragment,n),d=!1},d:function(n){v(t,n),n&&D(e),v(r,n),n&&D(c),v(o,n),n&&D(a),v(u,n),n&&D(f),v(g,n)}}}function Pn(n,t,e){var r;S(n,V,(function(n){return e(18,r=n)}));var c=t.page,o=void 0===c?{}:c,a=t.data,u=void 0===a?{}:a;function f(){return r.hostname+"_test_"+R()}var i,s={value:f()},$={value:!0},l={value:!0},p={value:!1},m={value:!1},v={value:!0},g={value:!1};return k(W(q.mark((function n(){return q.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices().then((function(n){for(var t=0;t<n.length;t++){var e=n[t];"videoinput"===e.kind&&console.log("[Camera] 🎥  camera available",t,cn({},e))}}));case 1:case"end":return n.stop()}}),n)})))),n.$$set=function(n){"page"in n&&e(0,o=n.page),"data"in n&&e(10,u=n.data)},n.$$.update=function(){262144&n.$$.dirty&&e(7,i=r.backend.session.running)},[o,$,l,p,m,v,g,i,function(){var n={"session-id":s.value,sources:{audio:{active:$.value},video:{active:l.value},heartrate:{active:p.value}},sinks:{rstp:{active:m.value},file:{active:v.value},window:{active:g.value}}};console.log("[Camera] 📸 opening camera",n),_.set({type:"wait",message:"Opening camera"}),B.post("/camera/start?as=json",n).then((function(n){console.log("[Camera] 📸 ✅  successfully started"),_.set(null)})).catch((function(n){console.log("[Camera] ❌ error starting:",n.response.data),_.set(cn({type:"error"},n.response.data))})).finally((function(n){V.grab()}))},function(){_.set({type:"wait",message:"Closing camera"}),B.post("/camera/stop?as=json",{}).then((function(n){console.log("[Camera] 📸 🛑  successfully stopped"),_.set(null)})).catch((function(n){console.log("[Camera] ❌ error stopping:",n.response.data),_.set(cn({type:"error"},n.response.data))})).finally((function(n){V.grab(),s.value=f()}))},u,function(n){e(1,$=n)},function(n){e(2,l=n)},function(n){e(3,p=n)},function(n){e(4,m=n)},function(n){e(5,v=n)},function(n){e(6,g=n)}]}var Dn=function(t){n(f,u);var e=en(f);function f(n){var t;return r(this,f),t=e.call(this),c(a(t),n,Pn,jn,o,{page:0,data:10}),t}return f}();export default Dn;
