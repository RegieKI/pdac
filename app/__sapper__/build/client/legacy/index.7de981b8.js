import{v as t,w as n,B as r,_ as a,a as e,b as s,c,i as o,s as u,d as f,S as i,C as l,M as h,n as p,e as v,t as d,g,h as m,j as $,k as y,m as w,o as x,J as R,L as b,f as D,N,l as j,O as k,A,P,Q as S,R as q,K as B,q as C,x as E}from"./client.89def385.js";function J(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,a=e(t);if(n){var c=e(this).constructor;r=Reflect.construct(a,arguments,c)}else r=a.apply(this,arguments);return s(this,r)}}function K(t,n,r){var a=t.slice();return a[3]=n[r],a}function L(t){var n,r,a,e=t[3].title+"";return{c:function(){n=v("a"),r=d(e),this.h()},l:function(t){n=g(t,"A",{class:!0,href:!0});var a=m(n);r=$(a,e),a.forEach(y),this.h()},h:function(){w(n,"class","grow flex align-center plr06 ptb08"),w(n,"href",a="/session/".concat(t[3].url))},m:function(t,a){p(t,n,a),x(n,r)},p:function(t,s){1&s&&e!==(e=t[3].title+"")&&R(r,e),1&s&&a!==(a="/session/".concat(t[3].url))&&w(n,"href",a)},d:function(t){t&&y(n)}}}function M(t){var n,r=("published"==t[3].status||t[1].showDrafts)&&L(t);return{c:function(){r&&r.c(),n=h()},l:function(t){r&&r.l(t),n=h()},m:function(t,a){r&&r.m(t,a),p(t,n,a)},p:function(t,a){"published"==t[3].status||t[1].showDrafts?r?r.p(t,a):((r=L(t)).c(),r.m(n.parentNode,n)):r&&(r.d(1),r=null)},d:function(t){r&&r.d(t),t&&y(n)}}}function O(t){var n,r,a,e;n=new l({});for(var s=t[0],c=[],o=0;o<s.length;o+=1)c[o]=M(K(t,s,o));return{c:function(){b(n.$$.fragment),r=D();for(var t=0;t<c.length;t+=1)c[t].c();a=h()},l:function(t){N(n.$$.fragment,t),r=j(t);for(var e=0;e<c.length;e+=1)c[e].l(t);a=h()},m:function(t,s){k(n,t,s),p(t,r,s);for(var o=0;o<c.length;o+=1)c[o].m(t,s);p(t,a,s),e=!0},p:function(t,n){var r=A(n,1)[0];if(3&r){var e;for(s=t[0],e=0;e<s.length;e+=1){var o=K(t,s,e);c[e]?c[e].p(o,r):(c[e]=M(o),c[e].c(),c[e].m(a.parentNode,a))}for(;e<c.length;e+=1)c[e].d(1);c.length=s.length}},i:function(t){e||(P(n.$$.fragment,t),e=!0)},o:function(t){S(n.$$.fragment,t),e=!1},d:function(t){q(n,t),t&&y(r),B(c,t),t&&y(a)}}}function Q(t,n){return _.apply(this,arguments)}function _(){return(_=t(n.mark((function t(a,e){return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",r(a,e,this));case 1:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function z(t,n,r){var a;C(t,E,(function(t){return r(1,a=t)}));var e=n.data;return t.$$set=function(t){"data"in t&&r(0,e=t.data)},[e,a]}var F=function(t){a(r,i);var n=J(r);function r(t){var a;return c(this,r),a=n.call(this),o(f(a),t,z,O,u,{data:0}),a}return r}();export default F;export{Q as preload};
