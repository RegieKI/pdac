import{_ as t,a as n,b as e,c as r,i,s as o,d as c,S as a,z as f,g as s,h as u,k as l,m as h,n as $,o as v,A as p,p as d,e as g,f as m,l as y,a4 as w,ae as x,u as R,v as A,w as B,af as D,B as E,ad as z,E as S,F as C,G as L,H as V,I as P,J as _,r as k,D as M,ag as I,Q as N,T as b,R as q}from"./client.a873360c.js";import{G as F}from"./GroupBlock.0f7ecea4.js";import{W as H}from"./WebCam.ebcf748e.js";function j(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=n(t);if(r){var c=n(this).constructor;i=Reflect.construct(o,arguments,c)}else i=o.apply(this,arguments);return e(this,i)}}function G(t){var n,e;return{c:function(){n=f("svg"),e=f("path"),this.h()},l:function(t){n=s(t,"svg",{width:!0,height:!0,viewBox:!0},1);var r=u(n);e=s(r,"path",{d:!0,fill:!0},1),u(e).forEach(l),r.forEach(l),this.h()},h:function(){h(e,"d","M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"),h(e,"fill",t[2]),h(n,"width",t[0]),h(n,"height",t[1]),h(n,"viewBox",t[3])},m:function(t,r){$(t,n,r),v(n,e)},p:function(t,r){var i=p(r,1)[0];4&i&&h(e,"fill",t[2]),1&i&&h(n,"width",t[0]),2&i&&h(n,"height",t[1]),8&i&&h(n,"viewBox",t[3])},i:d,o:d,d:function(t){t&&l(n)}}}function O(t,n,e){var r=n.size,i=void 0===r?"1em":r,o=n.width,c=void 0===o?i:o,a=n.height,f=void 0===a?i:a,s=n.color,u=void 0===s?"currentColor":s,l=n.viewBox,h=void 0===l?"0 0 24 24":l;return t.$$set=function(t){"size"in t&&e(4,i=t.size),"width"in t&&e(0,c=t.width),"height"in t&&e(1,f=t.height),"color"in t&&e(2,u=t.color),"viewBox"in t&&e(3,h=t.viewBox)},[c,f,u,h,i]}var T=function(n){t(f,a);var e=j(f);function f(t){var n;return r(this,f),n=e.call(this),i(c(n),t,O,G,o,{size:4,width:0,height:1,color:2,viewBox:3}),n}return f}();function Y(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=n(t);if(r){var c=n(this).constructor;i=Reflect.construct(o,arguments,c)}else i=o.apply(this,arguments);return e(this,i)}}function U(t){var n,e,r,i,o,c,a,f,x;return{c:function(){n=g("div"),e=g("div"),r=g("div"),i=g("span"),o=m(),c=g("div"),a=g("span"),this.h()},l:function(t){n=s(t,"DIV",{class:!0,style:!0});var f=u(n);e=s(f,"DIV",{class:!0});var h=u(e);r=s(h,"DIV",{class:!0});var $=u(r);i=s($,"SPAN",{style:!0,class:!0}),u(i).forEach(l),$.forEach(l),o=y(h),c=s(h,"DIV",{class:!0});var v=u(c);a=s(v,"SPAN",{style:!0,class:!0}),u(a).forEach(l),v.forEach(l),h.forEach(l),f.forEach(l),this.h()},h:function(){h(i,"style",t[1]),h(i,"class","svelte-1lgc7gn"),h(r,"class","left meter svelte-1lgc7gn"),h(a,"style",t[1]),h(a,"class","svelte-1lgc7gn"),h(c,"class","right meter svelte-1lgc7gn"),h(e,"class","inner svelte-1lgc7gn"),h(n,"class","audio-levels svelte-1lgc7gn"),h(n,"style",t[0])},m:function(s,u){$(s,n,u),v(n,e),v(e,r),v(r,i),v(e,o),v(e,c),v(c,a),f||(x=w(n,"click",t[3]),f=!0)},p:function(t,e){var r=p(e,1)[0];2&r&&h(i,"style",t[1]),2&r&&h(a,"style",t[1]),1&r&&h(n,"style",t[0])},i:d,o:d,d:function(t){t&&l(n),f=!1,x()}}}function W(t,n,e){var r,i,o=0,c=0,a=n.style,f=n.orientation,s=void 0===f?"vertical":f;function u(){e(4,o=c),window.requestAnimationFrame(u)}return x((function(){r&&r.getTracks().forEach((function(t){console.log("[AudioLevels] 🔈☠️  destroying stream:",t),t.stop()}))})),R(A(B.mark((function t(){return B.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:navigator.mediaDevices&&(console.log("YOYOYO"),navigator.mediaDevices.getUserMedia({audio:!0,video:!1}).then((function(t){r=t,console.log("[AudioLevels] 🔈✅  successfully opened",t);var n=new AudioContext,e=n.createAnalyser(),i=n.createMediaStreamSource(t),o=n.createScriptProcessor(2048,1,1);e.smoothingTimeConstant=.8,e.fftSize=1024,i.connect(e),e.connect(o),o.connect(n.destination),window.requestAnimationFrame(u),o.onaudioprocess=function(){var t=new Uint8Array(e.frequencyBinCount);e.getByteFrequencyData(t);for(var n=0,r=t.length,i=0;i<r;i++)n+=t[i];c=Math.round(n/r)}})).catch((function(t){console.error(t)})));case 1:case"end":return t.stop()}}),t)})))),t.$$set=function(t){"style"in t&&e(0,a=t.style),"orientation"in t&&e(2,s=t.orientation)},t.$$.update=function(){t.$$.dirty,16&t.$$.dirty&&e(1,i="height: ".concat(o,"%"))},[a,i,s,function(n){D(t,n)}]}var Z=function(n){t(f,a);var e=Y(f);function f(t){var n;return r(this,f),n=e.call(this),i(c(n),t,W,U,o,{style:0,orientation:2}),n}return f}();function J(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=n(t);if(r){var c=n(this).constructor;i=Reflect.construct(o,arguments,c)}else i=o.apply(this,arguments);return e(this,i)}}function Q(t){var n,e;return{c:function(){n=f("svg"),e=f("path"),this.h()},l:function(t){n=s(t,"svg",{width:!0,height:!0,viewBox:!0},1);var r=u(n);e=s(r,"path",{d:!0,fill:!0},1),u(e).forEach(l),r.forEach(l),this.h()},h:function(){h(e,"d","M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"),h(e,"fill",t[2]),h(n,"width",t[0]),h(n,"height",t[1]),h(n,"viewBox",t[3])},m:function(t,r){$(t,n,r),v(n,e)},p:function(t,r){var i=p(r,1)[0];4&i&&h(e,"fill",t[2]),1&i&&h(n,"width",t[0]),2&i&&h(n,"height",t[1]),8&i&&h(n,"viewBox",t[3])},i:d,o:d,d:function(t){t&&l(n)}}}function K(t,n,e){var r=n.size,i=void 0===r?"1em":r,o=n.width,c=void 0===o?i:o,a=n.height,f=void 0===a?i:a,s=n.color,u=void 0===s?"currentColor":s,l=n.viewBox,h=void 0===l?"0 0 24 24":l;return t.$$set=function(t){"size"in t&&e(4,i=t.size),"width"in t&&e(0,c=t.width),"height"in t&&e(1,f=t.height),"color"in t&&e(2,u=t.color),"viewBox"in t&&e(3,h=t.viewBox)},[c,f,u,h,i]}var X=function(n){t(f,a);var e=J(f);function f(t){var n;return r(this,f),n=e.call(this),i(c(n),t,K,Q,o,{size:4,width:0,height:1,color:2,viewBox:3}),n}return f}();function tt(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,o=n(t);if(r){var c=n(this).constructor;i=Reflect.construct(o,arguments,c)}else i=o.apply(this,arguments);return e(this,i)}}function nt(t){var n,e,r,i;return e=new I({}),{c:function(){n=g("a"),S(e.$$.fragment),this.h()},l:function(t){n=s(t,"A",{href:!0});var r=u(n);C(e.$$.fragment,r),r.forEach(l),this.h()},h:function(){h(n,"href",r="/session/"+t[0].url)},m:function(t,r){$(t,n,r),L(e,n,null),i=!0},p:function(t,e){(!i||1&e&&r!==(r="/session/"+t[0].url))&&h(n,"href",r)},i:function(t){i||(V(e.$$.fragment,t),i=!0)},o:function(t){P(e.$$.fragment,t),i=!1},d:function(t){t&&l(n),_(e)}}}function et(t){var n,e;return n=new H({props:{width:"360px",height:"240px",focus:t[0].point_of_interest}}),{c:function(){S(n.$$.fragment)},l:function(t){C(n.$$.fragment,t)},m:function(t,r){L(n,t,r),e=!0},p:function(t,e){var r={};1&e&&(r.focus=t[0].point_of_interest),n.$set(r)},i:function(t){e||(V(n.$$.fragment,t),e=!0)},o:function(t){P(n.$$.fragment,t),e=!1},d:function(t){_(n,t)}}}function rt(t){var n,e,r,i;return n=new Z({props:{style:"height: 100%"}}),r=new T({props:{size:"2em"}}),{c:function(){S(n.$$.fragment),e=m(),S(r.$$.fragment)},l:function(t){C(n.$$.fragment,t),e=y(t),C(r.$$.fragment,t)},m:function(t,o){L(n,t,o),$(t,e,o),L(r,t,o),i=!0},p:d,i:function(t){i||(V(n.$$.fragment,t),V(r.$$.fragment,t),i=!0)},o:function(t){P(n.$$.fragment,t),P(r.$$.fragment,t),i=!1},d:function(t){_(n,t),t&&l(e),_(r,t)}}}function it(t){var n,e,r,i,o=[rt,et],c=[];function a(t,n){return t[1]?0:1}return n=a(t),e=c[n]=o[n](t),{c:function(){e.c(),r=N()},l:function(t){e.l(t),r=N()},m:function(t,e){c[n].m(t,e),$(t,r,e),i=!0},p:function(t,i){var f=n;(n=a(t))===f?c[n].p(t,i):(b(),P(c[f],1,1,(function(){c[f]=null})),q(),(e=c[n])||(e=c[n]=o[n](t)).c(),V(e,1),e.m(r.parentNode,r))},i:function(t){i||(V(e),i=!0)},o:function(t){P(e),i=!1},d:function(t){c[n].d(t),t&&l(r)}}}function ot(t){var n,e,r,i;return e=new X({}),{c:function(){n=g("a"),S(e.$$.fragment),this.h()},l:function(t){n=s(t,"A",{href:!0});var r=u(n);C(e.$$.fragment,r),r.forEach(l),this.h()},h:function(){h(n,"href",r="/session/"+t[0].url+"/1")},m:function(t,r){$(t,n,r),L(e,n,null),i=!0},p:function(t,e){(!i||1&e&&r!==(r="/session/"+t[0].url+"/1"))&&h(n,"href",r)},i:function(t){i||(V(e.$$.fragment,t),i=!0)},o:function(t){P(e.$$.fragment,t),i=!1},d:function(t){t&&l(n),_(e)}}}function ct(t){var n,e,r,i,o,c;return n=new M({props:{a:{grow:!0},$$slots:{default:[nt]},$$scope:{ctx:t}}}),r=new F({props:{a:{grow:!1,width:"360px"},className:"align-center",style:"height:240px;",$$slots:{default:[it]},$$scope:{ctx:t}}}),o=new M({props:{a:{grow:!0},$$slots:{default:[ot]},$$scope:{ctx:t}}}),{c:function(){S(n.$$.fragment),e=m(),S(r.$$.fragment),i=m(),S(o.$$.fragment)},l:function(t){C(n.$$.fragment,t),e=y(t),C(r.$$.fragment,t),i=y(t),C(o.$$.fragment,t)},m:function(t,a){L(n,t,a),$(t,e,a),L(r,t,a),$(t,i,a),L(o,t,a),c=!0},p:function(t,e){var i={};17&e&&(i.$$scope={dirty:e,ctx:t}),n.$set(i);var c={};19&e&&(c.$$scope={dirty:e,ctx:t}),r.$set(c);var a={};17&e&&(a.$$scope={dirty:e,ctx:t}),o.$set(a)},i:function(t){c||(V(n.$$.fragment,t),V(r.$$.fragment,t),V(o.$$.fragment,t),c=!0)},o:function(t){P(n.$$.fragment,t),P(r.$$.fragment,t),P(o.$$.fragment,t),c=!1},d:function(t){_(n,t),t&&l(e),_(r,t),t&&l(i),_(o,t)}}}function at(t){var n,e;return n=new z({props:{className:"p06",$$slots:{default:[ct]},$$scope:{ctx:t}}}),{c:function(){S(n.$$.fragment)},l:function(t){C(n.$$.fragment,t)},m:function(t,r){L(n,t,r),e=!0},p:function(t,e){var r=p(e,1)[0],i={};19&r&&(i.$$scope={dirty:r,ctx:t}),n.$set(i)},i:function(t){e||(V(n.$$.fragment,t),e=!0)},o:function(t){P(n.$$.fragment,t),e=!1},d:function(t){_(n,t)}}}function ft(t,n){return st.apply(this,arguments)}function st(){return(st=A(B.mark((function t(n,e){return B.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",E(n,e,this));case 1:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function ut(t,n,e){k().page;var r,i,o=n.data;return t.$$set=function(t){"data"in t&&e(2,o=t.data)},t.$$.update=function(){4&t.$$.dirty&&e(0,r=o[0]),1&t.$$.dirty&&e(1,i="sound"==r.point_of_interest)},[r,i,o]}var lt=function(n){t(f,a);var e=tt(f);function f(t){var n;return r(this,f),n=e.call(this),i(c(n),t,ut,at,o,{data:2}),n}return f}();export default lt;export{ft as preload};
