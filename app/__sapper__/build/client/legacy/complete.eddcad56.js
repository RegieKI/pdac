import{v as t,w as n,B as r,_ as a,a as e,b as c,c as s,i as o,s as i,d as f,S as u,W as $,E as p,F as h,G as l,A as m,H as d,I as g,J as v,r as y,ad as x,e as w,t as S,f as R,g as D,h as E,j as b,k as j,l as A,m as k,n as C,o as I,O as B,D as F}from"./client.a873360c.js";function G(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,a=e(t);if(n){var s=e(this).constructor;r=Reflect.construct(a,arguments,s)}else r=a.apply(this,arguments);return c(this,r)}}function H(t){var n,r;return{c:function(){n=w("a"),r=S("Sessions"),this.h()},l:function(t){n=D(t,"A",{href:!0});var a=E(n);r=b(a,"Sessions"),a.forEach(j),this.h()},h:function(){k(n,"href","/session")},m:function(t,a){C(t,n,a),I(n,r)},d:function(t){t&&j(n)}}}function J(t){var n,r;return{c:function(){n=w("a"),r=S("Sync"),this.h()},l:function(t){n=D(t,"A",{href:!0});var a=E(n);r=b(a,"Sync"),a.forEach(j),this.h()},h:function(){k(n,"href","/sync")},m:function(t,a){C(t,n,a),I(n,r)},d:function(t){t&&j(n)}}}function N(t){var n,r,a,e;return n=new F({props:{a:{grow:!0},style:"min-width: 160px",$$slots:{default:[H]},$$scope:{ctx:t}}}),a=new F({props:{a:{grow:!0},style:"min-width: 160px",$$slots:{default:[J]},$$scope:{ctx:t}}}),{c:function(){p(n.$$.fragment),r=R(),p(a.$$.fragment)},l:function(t){h(n.$$.fragment,t),r=A(t),h(a.$$.fragment,t)},m:function(t,c){l(n,t,c),C(t,r,c),l(a,t,c),e=!0},p:function(t,r){var e={};8&r&&(e.$$scope={dirty:r,ctx:t}),n.$set(e);var c={};8&r&&(c.$$scope={dirty:r,ctx:t}),a.$set(c)},i:function(t){e||(d(n.$$.fragment,t),d(a.$$.fragment,t),e=!0)},o:function(t){g(n.$$.fragment,t),g(a.$$.fragment,t),e=!1},d:function(t){v(n,t),t&&j(r),v(a,t)}}}function O(t){var n,r,a,e,c,s,o=t[0].title+"";return c=new x({props:{a:{height:"60px"},$$slots:{default:[N]},$$scope:{ctx:t}}}),{c:function(){n=w("div"),r=S("Complete: "),a=S(o),e=R(),p(c.$$.fragment),this.h()},l:function(t){n=D(t,"DIV",{class:!0});var s=E(n);r=b(s,"Complete: "),a=b(s,o),s.forEach(j),e=A(t),h(c.$$.fragment,t),this.h()},h:function(){k(n,"class","mtb1")},m:function(t,o){C(t,n,o),I(n,r),I(n,a),C(t,e,o),l(c,t,o),s=!0},p:function(t,n){(!s||1&n)&&o!==(o=t[0].title+"")&&B(a,o);var r={};8&n&&(r.$$scope={dirty:n,ctx:t}),c.$set(r)},i:function(t){s||(d(c.$$.fragment,t),s=!0)},o:function(t){g(c.$$.fragment,t),s=!1},d:function(t){t&&j(n),t&&j(e),v(c,t)}}}function P(t){var n,r;return n=new $({props:{a:{grow:!0},className:"justify-center align-center",$$slots:{default:[O]},$$scope:{ctx:t}}}),{c:function(){p(n.$$.fragment)},l:function(t){h(n.$$.fragment,t)},m:function(t,a){l(n,t,a),r=!0},p:function(t,r){var a=m(r,1)[0],e={};9&a&&(e.$$scope={dirty:a,ctx:t}),n.$set(e)},i:function(t){r||(d(n.$$.fragment,t),r=!0)},o:function(t){g(n.$$.fragment,t),r=!1},d:function(t){v(n,t)}}}function V(t,n){return W.apply(this,arguments)}function W(){return(W=t(n.mark((function t(a,e){return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",r(a,e,this));case 1:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function _(t,n,r){y().page;var a,e=n.data;return t.$$set=function(t){"data"in t&&r(1,e=t.data)},t.$$.update=function(){2&t.$$.dirty&&r(0,a=e[0]||{})},[a,e]}var q=function(t){a(r,u);var n=G(r);function r(t){var a;return s(this,r),a=n.call(this),o(f(a),t,_,P,i,{data:1}),a}return r}();export default q;export{V as preload};