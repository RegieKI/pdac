import{_ as n,a as t,b as e,c as r,i as c,s as o,d as a,S as s,ao as i,L as u,N as f,O as l,A as $,P as d,Q as p,R as m,a9 as g,ap as b,ab as y,ac as v,ad as h,ag as O,v as j,w,B as P,C as k,Y as N,f as D,l as x,n as R,k as S,q as M,aq as C,a1 as _,a2 as E,D as B,e as I,t as q,g as V,h as A,j as J,o as L,J as Q,a3 as Y,Z,x as z,y as F}from"./client.766b20db.js";function G(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var c,o=t(n);if(r){var a=t(this).constructor;c=Reflect.construct(o,arguments,a)}else c=o.apply(this,arguments);return e(this,c)}}function H(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function K(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?H(Object(e),!0).forEach((function(t){y(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):H(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function T(n){var t,e=n[3].default,r=v(e,n,n[10],null);return{c:function(){r&&r.c()},l:function(n){r&&r.l(n)},m:function(n,e){r&&r.m(n,e),t=!0},p:function(n,t){r&&r.p&&1024&t&&h(r,e,n,n[10],t,null,null)},i:function(n){t||(d(r,n),t=!0)},o:function(n){p(r,n),t=!1},d:function(n){r&&r.d(n)}}}function U(n){var t,e;return(t=new i({props:{a:n[0],style:n[1],className:n[2],$$slots:{default:[T]},$$scope:{ctx:n}}})).$on("click",n[4]),t.$on("focus",n[5]),t.$on("input",n[6]),t.$on("blur",n[7]),t.$on("change",n[8]),t.$on("keypress",n[9]),{c:function(){u(t.$$.fragment)},l:function(n){f(t.$$.fragment,n)},m:function(n,r){l(t,n,r),e=!0},p:function(n,e){var r=$(e,1)[0],c={};1&r&&(c.a=n[0]),2&r&&(c.style=n[1]),4&r&&(c.className=n[2]),1024&r&&(c.$$scope={dirty:r,ctx:n}),t.$set(c)},i:function(n){e||(d(t.$$.fragment,n),e=!0)},o:function(n){p(t.$$.fragment,n),e=!1},d:function(n){m(t,n)}}}function W(n,t,e){var r=t.a;r=K(K({},g[b]),r);var c=t.style,o=void 0===c?"":c,a=t.className,s=void 0===a?"":a,i=t.$$slots,u=void 0===i?{}:i,f=t.$$scope;return n.$$set=function(n){"a"in n&&e(0,r=n.a),"style"in n&&e(1,o=n.style),"className"in n&&e(2,s=n.className),"$$scope"in n&&e(10,f=n.$$scope)},[r,o,s,u,function(t){O(n,t)},function(t){O(n,t)},function(t){O(n,t)},function(t){O(n,t)},function(t){O(n,t)},function(t){O(n,t)},f]}var X=function(t){n(i,s);var e=G(i);function i(n){var t;return r(this,i),t=e.call(this),c(a(t),n,W,U,o,{a:0,style:1,className:2}),t}return i}();function nn(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var c,o=t(n);if(r){var a=t(this).constructor;c=Reflect.construct(o,arguments,a)}else c=o.apply(this,arguments);return e(this,c)}}function tn(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function en(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?tn(Object(e),!0).forEach((function(t){y(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):tn(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function rn(n){var t;return{c:function(){t=q("Change MiBand")},l:function(n){t=J(n,"Change MiBand")},m:function(n,e){R(n,t,e)},d:function(n){n&&S(t)}}}function cn(n){var t;return{c:function(){t=q("Reconnect MiBand")},l:function(n){t=J(n,"Reconnect MiBand")},m:function(n,e){R(n,t,e)},d:function(n){n&&S(t)}}}function on(n){var t,e,r,c,o,a,s,i,$,g,b,y,v,h,O,j,w,P,k,N,M=(n[1]?n[1].number:"NONE")+"",C=(n[1]?n[1].mac_address:"~")+"",Z=n[2].backend.miband.initialised?"Initialised":"Not Initialised",z=n[2].backend.miband.connected?"Connected":"Not Connected";function F(t){n[6].call(null,t)}var G={};return void 0!==n[0]&&(G.a=n[0]),h=new X({props:G}),_.push((function(){return E(h,"a",F)})),h.$on("change",ln),(w=new B({props:{a:{grow:!0},$$slots:{default:[rn]},$$scope:{ctx:n}}})).$on("click",n[3]),(k=new B({props:{a:{grow:!0},$$slots:{default:[cn]},$$scope:{ctx:n}}})).$on("click",n[4]),{c:function(){t=I("div"),e=q("Current MiBand: "),r=q(M),c=q(" ( "),o=q(C),a=q(" )"),s=D(),i=I("div"),$=q("Status: \n    "),g=q(Z),b=D(),y=q(z),v=D(),u(h.$$.fragment),j=D(),u(w.$$.fragment),P=D(),u(k.$$.fragment)},l:function(n){t=V(n,"DIV",{});var u=A(t);e=J(u,"Current MiBand: "),r=J(u,M),c=J(u," ( "),o=J(u,C),a=J(u," )"),u.forEach(S),s=x(n),i=V(n,"DIV",{});var l=A(i);$=J(l,"Status: \n    "),g=J(l,Z),b=x(l),y=J(l,z),l.forEach(S),v=x(n),f(h.$$.fragment,n),j=x(n),f(w.$$.fragment,n),P=x(n),f(k.$$.fragment,n)},m:function(n,u){R(n,t,u),L(t,e),L(t,r),L(t,c),L(t,o),L(t,a),R(n,s,u),R(n,i,u),L(i,$),L(i,g),L(i,b),L(i,y),R(n,v,u),l(h,n,u),R(n,j,u),l(w,n,u),R(n,P,u),l(k,n,u),N=!0},p:function(n,t){(!N||2&t)&&M!==(M=(n[1]?n[1].number:"NONE")+"")&&Q(r,M),(!N||2&t)&&C!==(C=(n[1]?n[1].mac_address:"~")+"")&&Q(o,C),(!N||4&t)&&Z!==(Z=n[2].backend.miband.initialised?"Initialised":"Not Initialised")&&Q(g,Z),(!N||4&t)&&z!==(z=n[2].backend.miband.connected?"Connected":"Not Connected")&&Q(y,z);var e={};!O&&1&t&&(O=!0,e.a=n[0],Y((function(){return O=!1}))),h.$set(e);var c={};128&t&&(c.$$scope={dirty:t,ctx:n}),w.$set(c);var a={};128&t&&(a.$$scope={dirty:t,ctx:n}),k.$set(a)},i:function(n){N||(d(h.$$.fragment,n),d(w.$$.fragment,n),d(k.$$.fragment,n),N=!0)},o:function(n){p(h.$$.fragment,n),p(w.$$.fragment,n),p(k.$$.fragment,n),N=!1},d:function(n){n&&S(t),n&&S(s),n&&S(i),n&&S(v),m(h,n),n&&S(j),m(w,n),n&&S(P),m(k,n)}}}function an(n){var t,e,r,c;return t=new k({}),r=new N({props:{className:"mlr06 pb1",a:{grow:!0},$$slots:{default:[on]},$$scope:{ctx:n}}}),{c:function(){u(t.$$.fragment),e=D(),u(r.$$.fragment)},l:function(n){f(t.$$.fragment,n),e=x(n),f(r.$$.fragment,n)},m:function(n,o){l(t,n,o),R(n,e,o),l(r,n,o),c=!0},p:function(n,t){var e=$(t,1)[0],c={};135&e&&(c.$$scope={dirty:e,ctx:n}),r.$set(c)},i:function(n){c||(d(t.$$.fragment,n),d(r.$$.fragment,n),c=!0)},o:function(n){p(t.$$.fragment,n),p(r.$$.fragment,n),c=!1},d:function(n){m(t,n),n&&S(e),m(r,n)}}}function sn(n,t){return un.apply(this,arguments)}function un(){return(un=j(w.mark((function n(t,e){return w.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",P(t,e,this));case 1:case"end":return n.stop()}}),n,this)})))).apply(this,arguments)}function fn(n){return n?n.replace(/(\r\n|\n|\r)/gm,"").trim():""}function ln(){}function $n(n,t,e){var r;M(n,z,(function(n){return e(2,r=n)}));var c,o=t.data,a={options:C,key:"number",grow:!0};return n.$$set=function(n){"data"in n&&e(5,o=n.data)},n.$$.update=function(){4&n.$$.dirty&&e(1,c=C.find((function(n){return fn(n.mac_address)===fn(r.backend.mac_address)})))},[a,c,r,function(){var n=C[a.value];console.log(n),n&&Z.post("/system/miband?as=json",{mac_address:n.mac_address}).then((function(t){console.log("[Miband] ⌚️✅  Miband updated...",n.mac_address,n.number),z.grab()})).catch((function(n){console.log("[Miband] ⌚️❌ could not update ",n.toString(),Object.keys(n),n.response),F.set(en({type:"error"},n.response.data))}))},function(){console.log("[Session] ⌚️  Miband reconnecting..."),F.set({type:"wait",message:"Reconnecting to "+c.mac_address}),Z.post("/system/miband/reconnect?as=json",{}).then((function(n){console.log("[Session] ⌚️✅  Miband connected"),F.set(null)})).catch((function(n){console.log("[Session] ⌚️❌ Miband could not reconnect ",n.toString(),Object.keys(n),n.response),F.set(en({type:"error"},n.response.data))}))},o,function(n){e(0,a=n)}]}var dn=function(t){n(i,s);var e=nn(i);function i(n){var t;return r(this,i),t=e.call(this),c(a(t),n,$n,an,o,{data:5}),t}return i}();export default dn;export{sn as preload};
