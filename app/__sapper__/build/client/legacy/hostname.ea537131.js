import{v as t,w as n,B as e,_ as r,a,b as o,c,i as s,s as i,d as f,S as u,C as p,W as $,E as l,f as m,F as y,l as h,G as d,n as g,A as b,H as v,I as O,J as w,k as j,y as P,X as x,aa as D}from"./client.9ec79f48.js";import{K as R}from"./Keyboard.51343164.js";function S(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=a(t);if(n){var c=a(this).constructor;e=Reflect.construct(r,arguments,c)}else e=r.apply(this,arguments);return o(this,e)}}function k(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function E(t){var n,e;return(n=new R({props:{placeholder:"Enter a hostname",text:t[0]}})).$on("submit",t[1]),{c:function(){l(n.$$.fragment)},l:function(t){y(n.$$.fragment,t)},m:function(t,r){d(n,t,r),e=!0},p:function(t,e){var r={};1&e&&(r.text=t[0]),n.$set(r)},i:function(t){e||(v(n.$$.fragment,t),e=!0)},o:function(t){O(n.$$.fragment,t),e=!1},d:function(t){w(n,t)}}}function K(t){var n,e,r,a;return n=new p({}),r=new $({props:{className:"mlr06 keyboard-wrapper",a:{grow:!0},$$slots:{default:[E]},$$scope:{ctx:t}}}),{c:function(){l(n.$$.fragment),e=m(),l(r.$$.fragment)},l:function(t){y(n.$$.fragment,t),e=h(t),y(r.$$.fragment,t)},m:function(t,o){d(n,t,o),g(t,e,o),d(r,t,o),a=!0},p:function(t,n){var e=b(n,1)[0],a={};33&e&&(a.$$scope={dirty:e,ctx:t}),r.$set(a)},i:function(t){a||(v(n.$$.fragment,t),v(r.$$.fragment,t),a=!0)},o:function(t){O(n.$$.fragment,t),O(r.$$.fragment,t),a=!1},d:function(t){w(n,t),t&&j(e),w(r,t)}}}function A(t,n){return B.apply(this,arguments)}function B(){return(B=t(n.mark((function t(r,a){return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e(r,a,this));case 1:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function C(t,n,e){var r,a=n.data;return t.$$set=function(t){"data"in t&&e(2,a=t.data)},t.$$.update=function(){4&t.$$.dirty&&e(0,r=a.hostname)},[r,function(t){P.set({type:"wait",message:"Setting hostname to "+t.detail}),x.post("/system/hostname?as=json",{hostname:t.detail}).then((function(t){})).catch((function(t){P.set(function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?k(Object(e),!0).forEach((function(n){D(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):k(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}({type:"error"},t.response.data))}))},a]}var F=function(t){r(e,u);var n=S(e);function e(t){var r;return c(this,e),r=n.call(this),s(f(r),t,C,K,i,{data:2}),r}return e}();export default F;export{A as preload};
