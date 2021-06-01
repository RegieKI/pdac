import{_ as t,a as n,b as e,c as o,i,s as r,d as c,ah as s,S as a,e as u,f,t as l,g as d,h as p,k as $,l as h,j as m,m as g,n as v,o as w,A as y,J as x,p as b,a3 as R,u as N,v as E,w as D,ae as O,z as P,B,ad as z,L as S,M as j,N as _,O as k,Q as A,U as C,P as I,R as q,q as T,r as V,ai as M,T as H,E as L,K as F,Y as Z,y as G,Z as U,aa as J,ag as K,D as Q,x as Y,a0 as W,a1 as X,a2 as tt}from"./client.7e04caf7.js";import{G as nt}from"./GroupBlock.225a301f.js";function et(t){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,r=n(t);if(o){var c=n(this).constructor;i=Reflect.construct(r,arguments,c)}else i=r.apply(this,arguments);return e(this,i)}}function ot(t){var n,e,o,i,r,c,s,a,R,N,E,D,O,P=(t[3]||"~")+"";return{c:function(){n=u("div"),e=u("span"),o=f(),i=u("span"),r=f(),c=u("span"),s=f(),a=u("span"),R=f(),N=u("span"),E=l(P),this.h()},l:function(t){n=d(t,"DIV",{class:!0,style:!0});var u=p(n);e=d(u,"SPAN",{class:!0,style:!0}),p(e).forEach($),o=h(u),i=d(u,"SPAN",{class:!0,style:!0}),p(i).forEach($),r=h(u),c=d(u,"SPAN",{class:!0,style:!0}),p(c).forEach($),s=h(u),a=d(u,"SPAN",{class:!0,style:!0}),p(a).forEach($),R=h(u),N=d(u,"SPAN",{class:!0});var f=p(N);E=m(f,P),f.forEach($),u.forEach($),this.h()},h:function(){g(e,"class","ring a svelte-1bdiq0m"),g(e,"style",t[5]),g(i,"class","ring b svelte-1bdiq0m"),g(i,"style",t[5]),g(c,"class","ring c svelte-1bdiq0m"),g(c,"style",t[5]),g(a,"class","bg svelte-1bdiq0m"),g(a,"style",t[5]),g(N,"class","txt svelte-1bdiq0m"),g(n,"class",D="timer "+t[1]+" "+(t[2]?"paused":"")+" svelte-1bdiq0m"),g(n,"style",O=""+(t[4]+t[0]))},m:function(t,u){v(t,n,u),w(n,e),w(n,o),w(n,i),w(n,r),w(n,c),w(n,s),w(n,a),w(n,R),w(n,N),w(N,E)},p:function(t,o){var r=y(o,1)[0];32&r&&g(e,"style",t[5]),32&r&&g(i,"style",t[5]),32&r&&g(c,"style",t[5]),32&r&&g(a,"style",t[5]),8&r&&P!==(P=(t[3]||"~")+"")&&x(E,P),6&r&&D!==(D="timer "+t[1]+" "+(t[2]?"paused":"")+" svelte-1bdiq0m")&&g(n,"class",D),17&r&&O!==(O=""+(t[4]+t[0]))&&g(n,"style",O)},i:b,o:b,d:function(t){t&&$(n)}}}function it(){for(var t=1;t<99999;t++)window.clearInterval(t),window.cancelAnimationFrame(t)}function rt(t,n,e){var o,i,r,c,s,a,u=R(),f=n.time,l=n.size,d=void 0===l?150:l,p=n.style,$=n.className,h=void 0===$?"spin":$,m=n.paused,g=void 0!==m&&m,v=n.id,w=void 0===v?"":v,y=!1;function x(t){"undefined"==typeof window||"undefined"==typeof document||y||(it(),e(6,f=t),e(3,o=f),i=f,c=0,r=new Date,console.log("[Timer] ⏰  onRestart:",w),window.requestAnimationFrame(b),u("start",i))}function b(){if("undefined"!=typeof window&&"undefined"!=typeof document){var t=!0;if(!g&&o>0){c=(new Date-r)/1e3;var n=o;i=f-c,e(3,o=parseInt(i,10)),o!=n&&(u("second",i),0==o&&(u("end",i),it(),t=!1))}else r=new Date-1e3*c;t&&!y&&(console.log("[Timer] ⏰  onFrame:",w),window.requestAnimationFrame(b))}else console.error("there is no window to request animation frame from")}return N(E(D.mark((function t(){return D.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:y=!1,console.log("[Timer] ⏰✅  onMount (restart) :",w),x(f);case 3:case"end":return t.stop()}}),t)})))),O((function(){console.log("[Timer] ⏰❌  onDestroy:",w),y=!0})),t.$$set=function(t){"time"in t&&e(6,f=t.time),"size"in t&&e(7,d=t.size),"style"in t&&e(0,p=t.style),"className"in t&&e(1,h=t.className),"paused"in t&&e(2,g=t.paused),"id"in t&&e(8,w=t.id)},t.$$.update=function(){128&t.$$.dirty&&e(4,s="font-size:".concat(.4*d,"px;line-height:").concat(d,"px;border-radius:").concat(d,"px;width:").concat(d,"px;height:").concat(d,"px;flex-basis:").concat(d,"px;max-height:").concat(d,"px;")),128&t.$$.dirty&&e(5,a="border-radius:".concat(d,"px;animation-delay:-").concat(Math.floor(100*Math.random()),"s;"))},[p,h,g,o,s,a,f,d,w,x]}var ct=function(n){t(u,a);var e=et(u);function u(t){var n;return o(this,u),n=e.call(this),i(c(n),t,rt,ot,r,{time:6,size:7,style:0,className:1,paused:2,id:8,restart:9}),n}return s(u,[{key:"restart",get:function(){return this.$$.ctx[9]}}]),u}();function st(t){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,r=n(t);if(o){var c=n(this).constructor;i=Reflect.construct(r,arguments,c)}else i=r.apply(this,arguments);return e(this,i)}}function at(t){var n,e;return{c:function(){n=P("svg"),e=P("path"),this.h()},l:function(t){n=d(t,"svg",{width:!0,height:!0,viewBox:!0},1);var o=p(n);e=d(o,"path",{d:!0,fill:!0},1),p(e).forEach($),o.forEach($),this.h()},h:function(){g(e,"d","M14,19H18V5H14M6,19H10V5H6V19Z"),g(e,"fill",t[2]),g(n,"width",t[0]),g(n,"height",t[1]),g(n,"viewBox",t[3])},m:function(t,o){v(t,n,o),w(n,e)},p:function(t,o){var i=y(o,1)[0];4&i&&g(e,"fill",t[2]),1&i&&g(n,"width",t[0]),2&i&&g(n,"height",t[1]),8&i&&g(n,"viewBox",t[3])},i:b,o:b,d:function(t){t&&$(n)}}}function ut(t,n,e){var o=n.size,i=void 0===o?"1em":o,r=n.width,c=void 0===r?i:r,s=n.height,a=void 0===s?i:s,u=n.color,f=void 0===u?"currentColor":u,l=n.viewBox,d=void 0===l?"0 0 24 24":l;return t.$$set=function(t){"size"in t&&e(4,i=t.size),"width"in t&&e(0,c=t.width),"height"in t&&e(1,a=t.height),"color"in t&&e(2,f=t.color),"viewBox"in t&&e(3,d=t.viewBox)},[c,a,f,d,i]}var ft=function(n){t(s,a);var e=st(s);function s(t){var n;return o(this,s),n=e.call(this),i(c(n),t,ut,at,r,{size:4,width:0,height:1,color:2,viewBox:3}),n}return s}();function lt(t){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,r=n(t);if(o){var c=n(this).constructor;i=Reflect.construct(r,arguments,c)}else i=r.apply(this,arguments);return e(this,i)}}function dt(t){var n,e;return{c:function(){n=P("svg"),e=P("path"),this.h()},l:function(t){n=d(t,"svg",{width:!0,height:!0,viewBox:!0},1);var o=p(n);e=d(o,"path",{d:!0,fill:!0},1),p(e).forEach($),o.forEach($),this.h()},h:function(){g(e,"d","M8,5.14V19.14L19,12.14L8,5.14Z"),g(e,"fill",t[2]),g(n,"width",t[0]),g(n,"height",t[1]),g(n,"viewBox",t[3])},m:function(t,o){v(t,n,o),w(n,e)},p:function(t,o){var i=y(o,1)[0];4&i&&g(e,"fill",t[2]),1&i&&g(n,"width",t[0]),2&i&&g(n,"height",t[1]),8&i&&g(n,"viewBox",t[3])},i:b,o:b,d:function(t){t&&$(n)}}}function pt(t,n,e){var o=n.size,i=void 0===o?"1em":o,r=n.width,c=void 0===r?i:r,s=n.height,a=void 0===s?i:s,u=n.color,f=void 0===u?"currentColor":u,l=n.viewBox,d=void 0===l?"0 0 24 24":l;return t.$$set=function(t){"size"in t&&e(4,i=t.size),"width"in t&&e(0,c=t.width),"height"in t&&e(1,a=t.height),"color"in t&&e(2,f=t.color),"viewBox"in t&&e(3,d=t.viewBox)},[c,a,f,d,i]}var $t=function(n){t(s,a);var e=lt(s);function s(t){var n;return o(this,s),n=e.call(this),i(c(n),t,pt,dt,r,{size:4,width:0,height:1,color:2,viewBox:3}),n}return s}();function ht(t){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,r=n(t);if(o){var c=n(this).constructor;i=Reflect.construct(r,arguments,c)}else i=r.apply(this,arguments);return e(this,i)}}function mt(t){var n,e;return{c:function(){n=P("svg"),e=P("path"),this.h()},l:function(t){n=d(t,"svg",{width:!0,height:!0,viewBox:!0},1);var o=p(n);e=d(o,"path",{d:!0,fill:!0},1),p(e).forEach($),o.forEach($),this.h()},h:function(){g(e,"d","M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z"),g(e,"fill",t[2]),g(n,"width",t[0]),g(n,"height",t[1]),g(n,"viewBox",t[3])},m:function(t,o){v(t,n,o),w(n,e)},p:function(t,o){var i=y(o,1)[0];4&i&&g(e,"fill",t[2]),1&i&&g(n,"width",t[0]),2&i&&g(n,"height",t[1]),8&i&&g(n,"viewBox",t[3])},i:b,o:b,d:function(t){t&&$(n)}}}function gt(t,n,e){var o=n.size,i=void 0===o?"1em":o,r=n.width,c=void 0===r?i:r,s=n.height,a=void 0===s?i:s,u=n.color,f=void 0===u?"currentColor":u,l=n.viewBox,d=void 0===l?"0 0 24 24":l;return t.$$set=function(t){"size"in t&&e(4,i=t.size),"width"in t&&e(0,c=t.width),"height"in t&&e(1,a=t.height),"color"in t&&e(2,f=t.color),"viewBox"in t&&e(3,d=t.viewBox)},[c,a,f,d,i]}var vt=function(n){t(s,a);var e=ht(s);function s(t){var n;return o(this,s),n=e.call(this),i(c(n),t,gt,mt,r,{size:4,width:0,height:1,color:2,viewBox:3}),n}return s}();function wt(t){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,r=n(t);if(o){var c=n(this).constructor;i=Reflect.construct(r,arguments,c)}else i=r.apply(this,arguments);return e(this,i)}}function yt(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,o)}return e}function xt(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?yt(Object(e),!0).forEach((function(n){J(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):yt(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function bt(t,n,e){var o=t.slice();return o[24]=n[e],o}function Rt(t){var n,e,o;function i(n){t[12].call(null,n)}var r={className:"spin",id:"INTRO: "+t[5].description,time:t[4].break_time,paused:t[0]};return void 0!==t[2]&&(r.restart=t[2]),n=new ct({props:r}),W.push((function(){return X(n,"restart",i)})),n.$on("start",Lt),n.$on("second",t[7]),n.$on("end",t[8]),{c:function(){S(n.$$.fragment)},l:function(t){_(n.$$.fragment,t)},m:function(t,e){k(n,t,e),o=!0},p:function(t,o){var i={};32&o&&(i.id="INTRO: "+t[5].description),16&o&&(i.time=t[4].break_time),1&o&&(i.paused=t[0]),!e&&4&o&&(e=!0,i.restart=t[2],tt((function(){return e=!1}))),n.$set(i)},i:function(t){o||(I(n.$$.fragment,t),o=!0)},o:function(t){A(n.$$.fragment,t),o=!1},d:function(t){q(n,t)}}}function Nt(t){var n,e;return(n=new ct({props:{className:"pulse",id:"RECORD: "+t[5].description,time:t[5].time}})).$on("start",Ft),n.$on("second",Zt),n.$on("end",t[9]),{c:function(){S(n.$$.fragment)},l:function(t){_(n.$$.fragment,t)},m:function(t,o){k(n,t,o),e=!0},p:function(t,e){var o={};32&e&&(o.id="RECORD: "+t[5].description),32&e&&(o.time=t[5].time),n.$set(o)},i:function(t){e||(I(n.$$.fragment,t),e=!0)},o:function(t){A(n.$$.fragment,t),e=!1},d:function(t){q(n,t)}}}function Et(t){var n,e,o,i,r=[Nt,Rt],c=[];function s(t,n){return t[1]?0:1}return n=s(t),e=c[n]=r[n](t),{c:function(){e.c(),o=j()},l:function(t){e.l(t),o=j()},m:function(t,e){c[n].m(t,e),v(t,o,e),i=!0},p:function(t,i){var a=n;(n=s(t))===a?c[n].p(t,i):(H(),A(c[a],1,1,(function(){c[a]=null})),C(),(e=c[n])||(e=c[n]=r[n](t)).c(),I(e,1),e.m(o.parentNode,o))},i:function(t){i||(I(e),i=!0)},o:function(t){A(e),i=!1},d:function(t){c[n].d(t),t&&$(o)}}}function Dt(t){var n,e=t[5].example.data&&Ot(t);return{c:function(){e&&e.c(),n=j()},l:function(t){e&&e.l(t),n=j()},m:function(t,o){e&&e.m(t,o),v(t,n,o)},p:function(t,o){t[5].example.data?e?e.p(t,o):((e=Ot(t)).c(),e.m(n.parentNode,n)):e&&(e.d(1),e=null)},d:function(t){e&&e.d(t),t&&$(n)}}}function Ot(t){var n,e;return{c:function(){n=u("audio"),this.h()},l:function(t){n=d(t,"AUDIO",{style:!0,class:!0,src:!0,autoplay:!0,controls:!0}),p(n).forEach($),this.h()},h:function(){L(n,"max-width","120px"),g(n,"class","mtb06 grow"),n.src!==(e=t[5].example.data.full_url)&&g(n,"src",e),n.autoplay=!0,n.controls=!0},m:function(t,e){v(t,n,e)},p:function(t,o){32&o&&n.src!==(e=t[5].example.data.full_url)&&g(n,"src",e)},d:function(t){t&&$(n)}}}function Pt(t){var n,e,o,i=t[24].tag_id.title+"";return{c:function(){n=u("span"),e=l(i),o=l(" ")},l:function(t){n=d(t,"SPAN",{});var r=p(n);e=m(r,i),o=m(r," "),r.forEach($)},m:function(t,i){v(t,n,i),w(n,e),w(n,o)},p:function(t,n){32&n&&i!==(i=t[24].tag_id.title+"")&&x(e,i)},d:function(t){t&&$(n)}}}function Bt(t){for(var n,e,o,i,r,c,s,a,y,b,R,N=t[4].exercises.length+"",E=t[5].description+"",D="sound"==t[4].point_of_interest&&t[5].example&&Dt(t),O=t[5].tags,P=[],B=0;B<O.length;B+=1)P[B]=Pt(bt(t,O,B));return{c:function(){D&&D.c(),n=f(),e=u("div"),o=u("div"),i=l(t[3]),r=l("/"),c=l(N),s=l(": "),a=l(E),y=f(),b=u("div"),R=l("Tags:\n      ");for(var d=0;d<P.length;d+=1)P[d].c();this.h()},l:function(u){D&&D.l(u),n=h(u),e=d(u,"DIV",{class:!0});var f=p(e);o=d(f,"DIV",{});var l=p(o);i=m(l,t[3]),r=m(l,"/"),c=m(l,N),s=m(l,": "),a=m(l,E),l.forEach($),y=h(f),b=d(f,"DIV",{});var g=p(b);R=m(g,"Tags:\n      ");for(var v=0;v<P.length;v+=1)P[v].l(g);g.forEach($),f.forEach($),this.h()},h:function(){g(e,"class","grow")},m:function(t,u){D&&D.m(t,u),v(t,n,u),v(t,e,u),w(e,o),w(o,i),w(o,r),w(o,c),w(o,s),w(o,a),w(e,y),w(e,b),w(b,R);for(var f=0;f<P.length;f+=1)P[f].m(b,null)},p:function(t,e){if("sound"==t[4].point_of_interest&&t[5].example?D?D.p(t,e):((D=Dt(t)).c(),D.m(n.parentNode,n)):D&&(D.d(1),D=null),8&e&&x(i,t[3]),16&e&&N!==(N=t[4].exercises.length+"")&&x(c,N),32&e&&E!==(E=t[5].description+"")&&x(a,E),32&e){var o;for(O=t[5].tags,o=0;o<O.length;o+=1){var r=bt(t,O,o);P[o]?P[o].p(r,e):(P[o]=Pt(r),P[o].c(),P[o].m(b,null))}for(;o<P.length;o+=1)P[o].d(1);P.length=O.length}},d:function(t){D&&D.d(t),t&&$(n),t&&$(e),F(P,t)}}}function zt(t){var n,e,o,i,r,c,s;return e=new K({}),c=new z({props:{a:{grow:!0},className:"mlr06 pb06",$$slots:{default:[It]},$$scope:{ctx:t}}}),{c:function(){n=u("a"),S(e.$$.fragment),o=l(" Back"),r=f(),S(c.$$.fragment),this.h()},l:function(t){n=d(t,"A",{style:!0,href:!0});var i=p(n);_(e.$$.fragment,i),o=m(i," Back"),i.forEach($),r=h(t),_(c.$$.fragment,t),this.h()},h:function(){L(n,"position","absolute"),L(n,"top","50px"),L(n,"left","10px"),L(n,"flex-direction","row"),L(n,"align-items","center"),g(n,"href",i="/session/"+t[4].url)},m:function(t,i){v(t,n,i),k(e,n,null),w(n,o),v(t,r,i),k(c,t,i),s=!0},p:function(t,e){(!s||16&e&&i!==(i="/session/"+t[4].url))&&g(n,"href",i);var o={};134217749&e&&(o.$$scope={dirty:e,ctx:t}),c.$set(o)},i:function(t){s||(I(e.$$.fragment,t),I(c.$$.fragment,t),s=!0)},o:function(t){A(e.$$.fragment,t),A(c.$$.fragment,t),s=!1},d:function(t){t&&$(n),q(e),t&&$(r),q(c,t)}}}function St(t){var n,e;return n=new z({props:{a:{grow:!0},className:"mlr06",$$slots:{default:[Tt]},$$scope:{ctx:t}}}),{c:function(){S(n.$$.fragment)},l:function(t){_(n.$$.fragment,t)},m:function(t,o){k(n,t,o),e=!0},p:function(t,e){var o={};134217728&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i:function(t){e||(I(n.$$.fragment,t),e=!0)},o:function(t){A(n.$$.fragment,t),e=!1},d:function(t){q(n,t)}}}function jt(t){var n,e,o;return e=new vt({}),{c:function(){n=u("span"),S(e.$$.fragment)},l:function(t){n=d(t,"SPAN",{});var o=p(n);_(e.$$.fragment,o),o.forEach($)},m:function(t,i){v(t,n,i),k(e,n,null),o=!0},i:function(t){o||(I(e.$$.fragment,t),o=!0)},o:function(t){A(e.$$.fragment,t),o=!1},d:function(t){t&&$(n),q(e)}}}function _t(t){var n,e,o;return e=new ft({}),{c:function(){n=u("span"),S(e.$$.fragment)},l:function(t){n=d(t,"SPAN",{});var o=p(n);_(e.$$.fragment,o),o.forEach($)},m:function(t,i){v(t,n,i),k(e,n,null),o=!0},i:function(t){o||(I(e.$$.fragment,t),o=!0)},o:function(t){A(e.$$.fragment,t),o=!1},d:function(t){t&&$(n),q(e)}}}function kt(t){var n,e,o;return e=new $t({}),{c:function(){n=u("span"),S(e.$$.fragment)},l:function(t){n=d(t,"SPAN",{});var o=p(n);_(e.$$.fragment,o),o.forEach($)},m:function(t,i){v(t,n,i),k(e,n,null),o=!0},i:function(t){o||(I(e.$$.fragment,t),o=!0)},o:function(t){A(e.$$.fragment,t),o=!1},d:function(t){t&&$(n),q(e)}}}function At(t){var n,e,o,i,r=[kt,_t],c=[];function s(t,n){return t[0]?0:1}return n=s(t),e=c[n]=r[n](t),{c:function(){e.c(),o=j()},l:function(t){e.l(t),o=j()},m:function(t,e){c[n].m(t,e),v(t,o,e),i=!0},p:function(t,i){var a=n;(n=s(t))!==a&&(H(),A(c[a],1,1,(function(){c[a]=null})),C(),(e=c[n])||(e=c[n]=r[n](t)).c(),I(e,1),e.m(o.parentNode,o))},i:function(t){i||(I(e),i=!0)},o:function(t){A(e),i=!1},d:function(t){c[n].d(t),t&&$(o)}}}function Ct(t){var n;return{c:function(){n=l("10s")},l:function(t){n=m(t,"10s")},m:function(t,e){v(t,n,e)},d:function(t){t&&$(n)}}}function It(t){var n,e,o,i,r,c;return(n=new Q({props:{a:{grow:!0},$$slots:{default:[jt]},$$scope:{ctx:t}}})).$on("click",t[13]),(o=new Q({props:{a:{grow:!0},$$slots:{default:[At]},$$scope:{ctx:t}}})).$on("click",t[14]),(r=new Q({props:{a:{grow:!0},$$slots:{default:[Ct]},$$scope:{ctx:t}}})).$on("click",t[15]),{c:function(){S(n.$$.fragment),e=f(),S(o.$$.fragment),i=f(),S(r.$$.fragment)},l:function(t){_(n.$$.fragment,t),e=h(t),_(o.$$.fragment,t),i=h(t),_(r.$$.fragment,t)},m:function(t,s){k(n,t,s),v(t,e,s),k(o,t,s),v(t,i,s),k(r,t,s),c=!0},p:function(t,e){var i={};134217728&e&&(i.$$scope={dirty:e,ctx:t}),n.$set(i);var c={};134217729&e&&(c.$$scope={dirty:e,ctx:t}),o.$set(c);var s={};134217728&e&&(s.$$scope={dirty:e,ctx:t}),r.$set(s)},i:function(t){c||(I(n.$$.fragment,t),I(o.$$.fragment,t),I(r.$$.fragment,t),c=!0)},o:function(t){A(n.$$.fragment,t),A(o.$$.fragment,t),A(r.$$.fragment,t),c=!1},d:function(t){q(n,t),t&&$(e),q(o,t),t&&$(i),q(r,t)}}}function qt(t){var n;return{c:function(){n=l("Panic!")},l:function(t){n=m(t,"Panic!")},m:function(t,e){v(t,n,e)},d:function(t){t&&$(n)}}}function Tt(t){var n,e;return(n=new Q({props:{a:{grow:!0,height:"60px"},className:"pb1",$$slots:{default:[qt]},$$scope:{ctx:t}}})).$on("click",t[10]),{c:function(){S(n.$$.fragment)},l:function(t){_(n.$$.fragment,t)},m:function(t,o){k(n,t,o),e=!0},p:function(t,e){var o={};134217728&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i:function(t){e||(I(n.$$.fragment,t),e=!0)},o:function(t){A(n.$$.fragment,t),e=!1},d:function(t){q(n,t)}}}function Vt(t){var n,e,o,i,r,c,s,a;n=new nt({props:{className:"justify-center align-center",$$slots:{default:[Et]},$$scope:{ctx:t}}}),o=new z({props:{a:{grow:!0},className:"align-center mlr06",$$slots:{default:[Bt]},$$scope:{ctx:t}}});var u=[St,zt],l=[];function d(t,n){return t[1]?0:1}return r=d(t),c=l[r]=u[r](t),{c:function(){S(n.$$.fragment),e=f(),S(o.$$.fragment),i=f(),c.c(),s=j()},l:function(t){_(n.$$.fragment,t),e=h(t),_(o.$$.fragment,t),i=h(t),c.l(t),s=j()},m:function(t,c){k(n,t,c),v(t,e,c),k(o,t,c),v(t,i,c),l[r].m(t,c),v(t,s,c),a=!0},p:function(t,e){var i=y(e,1)[0],a={};134217783&i&&(a.$$scope={dirty:i,ctx:t}),n.$set(a);var f={};134217784&i&&(f.$$scope={dirty:i,ctx:t}),o.$set(f);var p=r;(r=d(t))===p?l[r].p(t,i):(H(),A(l[p],1,1,(function(){l[p]=null})),C(),(c=l[r])||(c=l[r]=u[r](t)).c(),I(c,1),c.m(s.parentNode,s))},i:function(t){a||(I(n.$$.fragment,t),I(o.$$.fragment,t),I(c),a=!0)},o:function(t){A(n.$$.fragment,t),A(o.$$.fragment,t),A(c),a=!1},d:function(t){q(n,t),t&&$(e),q(o,t),t&&$(i),l[r].d(t),t&&$(s)}}}function Mt(t,n){return Ht.apply(this,arguments)}function Ht(){return(Ht=E(D.mark((function t(n,e){return D.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",B(n,e,this));case 1:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function Lt(t){console.log("[session:slug:idx] 🖖🏁 intro start:",t.detail)}function Ft(t){console.log("[session:slug:idx] 🔴🏁 record start:",t.detail)}function Zt(t){console.log("[session:slug:idx] 🔴 recording:",t.detail)}function Gt(t,n,e){var o,i;T(t,Y,(function(t){return e(20,i=t)}));var r=V().page;T(t,r,(function(t){return e(17,o=t)}));var c,s=n.data,a=!1,u=!1;function f(t){G.set({type:"wait",message:"Closing Camera"}),Z.post("/camera/stop?as=json",{}).then((function(t){console.log("[session:slug:idx] 📸🛑  stopped recording");G.set({type:"wait",message:"Successfully Closed"}),Z.post("/buzz?as=json",{sequence:"10 40 41 0.0001"}).then((function(){setTimeout((function(){e(1,u=!1);var t=l>=p.exercises.length-1?"/session/"+p.url+"/complete":"/session/"+p.url+"/"+(d+1);console.log("[session:slug:idx] 🛫  goto: ",t,l,p.exercises.length),U(t),G.set(null)}),2e3)}))})).catch((function(t){console.error("[session:slug:idx] could not stop 📸 ❌",t.toString(),Object.keys(t),t.response),G.set(xt({type:"error"},t.response.data))}))}N(E(D.mark((function t(){return D.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("[session:slug:idx] 🤳 idx:",d);case 1:case"end":return t.stop()}}),t)}))));var l,d,p,$,h,m,g,v;return t.$$set=function(t){"data"in t&&e(11,s=t.data)},t.$$.update=function(){131072&t.$$.dirty&&e(16,l=parseInt(o.params.idx,10)-1),131072&t.$$.dirty&&e(3,d=parseInt(o.params.idx,10)),2048&t.$$.dirty&&e(4,p=s[0]||{}),65552&t.$$.dirty&&e(5,$=p.exercises[l]?p.exercises[l].exercise_id:{example:{data:{}}}),32&t.$$.dirty&&e(18,h=$.tags||[]),1310744&t.$$.dirty&&e(19,m=function(){var t=i.hostname+"_";return t+=p.point_of_interest+"_",t+=p.url+"_",t+=d+"_",h.forEach((function(n,e){n.tag_id&&(t+=n.tag_id.url,e<h.length-1&&(t+="-"))})),console.log("[SESSION] 🗯🦆  returning ID:",t),t}),524288&t.$$.dirty&&e(21,g=m()),3145728&t.$$.dirty&&(v={"session-id":"".concat(g,"_").concat(M()),sources:{audio:{active:!0},video:{active:!0},heartrate:{active:!!i.backend.miband.connected}},sinks:{rstp:{active:!1},file:{active:!0},window:{active:!1}}})},[a,u,c,d,p,$,r,function(t){var n=parseInt(t.detail,10);if(n<=10&&0!=n){var e=1==n?"50 50 11 0.001":"100 100 1 0.001";console.log("Count",e,n),console.log("[session:slug:idx] 🖖 intro buzz:",t.detail),Z.post("/buzz?as=json",{sequence:e})}},function(t){console.log("[session:slug:idx] 🖖 intro ended:",t.detail),G.set({type:"wait",message:"Opening Camera<br />Please wait..."}),Z.post("/camera/start?as=json",v).then((function(t){console.log("[session:slug:idx] 📸  begun recording ✅"),e(1,u=!0),G.set(null)})).catch((function(t){console.error("[session:slug:idx] could not start 📸 ❌",t.toString(),Object.keys(t),t.response),Z.post("/camera/stop?as=json",{}).then((function(t){console.log("[session:slug:idx] emergency stop was successful...")})).catch((function(t){console.error("[session:slug:idx] emergency stop was unsuccessful...",t.toString())})),G.set(xt({type:"error"},t.response.data))}))},function(t){console.log("[session:slug:idx] 🔴✅  recording ended:",t.detail),f()},f,s,function(t){e(2,c=t)},function(){return c(p.break_time+1)},function(){return e(0,a=!a)},function(){return c(11)}]}var Ut=function(n){t(s,a);var e=wt(s);function s(t){var n;return o(this,s),n=e.call(this),i(c(n),t,Gt,Vt,r,{data:11}),n}return s}();export default Ut;export{Mt as preload};
