import{v as t,w as n,B as e,_ as r,a,b as s,c as o,i as c,s as u,d as i,S as f,C as p,X as l,L as $,f as m,N as d,l as g,O as y,n as h,A as w,P as v,Q as k,R as x,k as C,r as R,q as b,u as q,p as N,y as j,Y as P,Z as D}from"./client.7e04caf7.js";import{K}from"./Keyboard.982a7604.js";function S(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=a(t);if(n){var o=a(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return s(this,e)}}function A(t){var n,e;return(n=new K({props:{placeholder:t[1],text:t[2]}})).$on("submit",t[3]),{c:function(){$(n.$$.fragment)},l:function(t){d(n.$$.fragment,t)},m:function(t,r){y(n,t,r),e=!0},p:N,i:function(t){e||(v(n.$$.fragment,t),e=!0)},o:function(t){k(n.$$.fragment,t),e=!1},d:function(t){x(n,t)}}}function B(t){var n,e,r,a;return n=new p({}),r=new l({props:{className:"mlr06 keyboard-wrapper",a:{grow:!0},$$slots:{default:[A]},$$scope:{ctx:t}}}),{c:function(){$(n.$$.fragment),e=m(),$(r.$$.fragment)},l:function(t){d(n.$$.fragment,t),e=g(t),d(r.$$.fragment,t)},m:function(t,s){y(n,t,s),h(t,e,s),y(r,t,s),a=!0},p:function(t,n){var e=w(n,1)[0],a={};64&e&&(a.$$scope={dirty:e,ctx:t}),r.$set(a)},i:function(t){a||(v(n.$$.fragment,t),v(r.$$.fragment,t),a=!0)},o:function(t){k(n.$$.fragment,t),k(r.$$.fragment,t),a=!1},d:function(t){x(n,t),t&&C(e),x(r,t)}}}function L(t,n){return O.apply(this,arguments)}function O(){return(O=t(n.mark((function t(r,a){return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e(r,a,this));case 1:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function Q(e,r,a){var s,o=R().page;b(e,o,(function(t){return a(5,s=t)}));var c=r.data,u="Password for ".concat(s.query.ssid),i=s.query.psk||"";function f(){return(f=t(n.mark((function t(e,r){return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("[NetworkConnect] 🌐  attempting connection to:",e,r,e.detail),j.set({type:"wait",message:"Connecting to "+s.query.ssid}),P.post("/network/connect?as=json",{ssid:s.query.ssid,psk:e.detail}).then((function(t){console.log("[NetworkConnect] ✅🌐  successfully connected:",t),D("/"),j.set(null)})).catch((function(t){console.log("[NetworkConnect] ❌🌐  errpr connecting:",t),j.set({type:"error",message:"Could not connect",status:403})}));case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return q(t(n.mark((function t(){return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log(u,i);case 1:case"end":return t.stop()}}),t)})))),e.$$set=function(t){"data"in t&&a(4,c=t.data)},[o,u,i,function(t,n){return f.apply(this,arguments)},c]}var X=function(t){r(e,f);var n=S(e);function e(t){var r;return o(this,e),r=n.call(this),c(i(r),t,Q,B,u,{data:4}),r}return e}();export default X;export{L as preload};
