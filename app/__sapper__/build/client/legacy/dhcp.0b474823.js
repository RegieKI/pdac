import{v as t,w as n,B as r,_ as e,a,b as c,c as s,i as o,s as i,d as u,S as f,C as p,L as l,f as d,M as h,N as $,l as v,O as y,n as m,A as g,Q as b,U as D,P as O,R as w,k as P,r as j,u as x,T as E,y as R,Z as S,ab as C,e as H,t as k,g as B,h as U,j as I,o as N,p as V,D as F,m as A,E as J,J as L}from"./client.766b20db.js";function M(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,e=a(t);if(n){var s=a(this).constructor;r=Reflect.construct(e,arguments,s)}else r=e.apply(this,arguments);return c(this,r)}}function Q(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.push.apply(r,e)}return r}function T(t){var n,r;return{c:function(){n=H("div"),r=k("No USB dhcp.txt found.")},l:function(t){n=B(t,"DIV",{});var e=U(n);r=I(e,"No USB dhcp.txt found."),e.forEach(P)},m:function(t,e){m(t,n,e),N(n,r)},p:V,i:V,o:V,d:function(t){t&&P(n)}}}function Z(t){var n,r,e,a,c,s,o,i,u;return(i=new F({props:{a:{grow:!0},$$slots:{default:[_]},$$scope:{ctx:t}}})).$on("click",t[2]),{c:function(){n=H("div"),r=k("Found USB dhcp.txt:"),e=d(),a=H("div"),c=k(t[0]),s=d(),o=H("div"),l(i.$$.fragment),this.h()},l:function(u){n=B(u,"DIV",{class:!0});var f=U(n);r=I(f,"Found USB dhcp.txt:"),f.forEach(P),e=v(u),a=B(u,"DIV",{class:!0,style:!0});var p=U(a);c=I(p,t[0]),p.forEach(P),s=v(u),o=B(u,"DIV",{class:!0});var l=U(o);$(i.$$.fragment,l),l.forEach(P),this.h()},h:function(){A(n,"class","plr06"),A(a,"class","terminal plr1 ptb04 "),J(a,"white-space","pre"),A(o,"class","grow flex plr06 pb06")},m:function(t,f){m(t,n,f),N(n,r),m(t,e,f),m(t,a,f),N(a,c),m(t,s,f),m(t,o,f),y(i,o,null),u=!0},p:function(t,n){(!u||1&n)&&L(c,t[0]);var r={};130&n&&(r.$$scope={dirty:n,ctx:t}),i.$set(r)},i:function(t){u||(O(i.$$.fragment,t),u=!0)},o:function(t){b(i.$$.fragment,t),u=!1},d:function(t){t&&P(n),t&&P(e),t&&P(a),t&&P(s),t&&P(o),w(i)}}}function _(t){var n,r=t[1]?"Disable DHCP Edit":"Enable DHCP Edit";return{c:function(){n=k(r)},l:function(t){n=I(t,r)},m:function(t,r){m(t,n,r)},p:function(t,e){2&e&&r!==(r=t[1]?"Disable DHCP Edit":"Enable DHCP Edit")&&L(n,r)},d:function(t){t&&P(n)}}}function q(t){var n,r,e,a,c,s;n=new p({});var o=[Z,T],i=[];function u(t,n){return t[0]?0:1}return e=u(t),a=i[e]=o[e](t),{c:function(){l(n.$$.fragment),r=d(),a.c(),c=h()},l:function(t){$(n.$$.fragment,t),r=v(t),a.l(t),c=h()},m:function(t,a){y(n,t,a),m(t,r,a),i[e].m(t,a),m(t,c,a),s=!0},p:function(t,n){var r=g(n,1)[0],s=e;(e=u(t))===s?i[e].p(t,r):(E(),b(i[s],1,1,(function(){i[s]=null})),D(),(a=i[e])||(a=i[e]=o[e](t)).c(),O(a,1),a.m(c.parentNode,c))},i:function(t){s||(O(n.$$.fragment,t),O(a),s=!0)},o:function(t){b(n.$$.fragment,t),b(a),s=!1},d:function(t){w(n,t),t&&P(r),i[e].d(t),t&&P(c)}}}function z(t,n){return G.apply(this,arguments)}function G(){return(G=t(n.mark((function t(e,a){return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",r(e,a,this));case 1:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function K(r,e,a){j().page;var c,s,o,i,u=e.data;return x(t(n.mark((function t(){return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log(u,u);case 1:case"end":return t.stop()}}),t)})))),r.$$set=function(t){"data"in t&&a(3,u=t.data)},r.$$.update=function(){8&r.$$.dirty&&a(0,c=u.txt),8&r.$$.dirty&&a(4,s=u.config),1&r.$$.dirty&&a(5,o="\n\n# ---------- auto-generated from pdac -------- >>>>\n"+c+"\n# <<<<< ---- auto-generated from pdac -------------\n\n"),48&r.$$.dirty&&a(1,i=-1!=s.indexOf(o))},[c,i,function(t){R.set({type:"wait",message:"Restarting DHCP service"});var n=i?s.replace(o,""):s+o;S.post("/system/dhcp?as=json",{blob:n}).then((function(t){console.log("[dhcp.svelte] restarted:",t),R.set({type:"success",message:"DHCP Restarted"})})).catch((function(t){R.set(function(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?Q(Object(r),!0).forEach((function(n){C(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))}))}return t}({type:"error"},t.response.data))}))},u]}var W=function(t){e(r,f);var n=M(r);function r(t){var e;return s(this,r),e=n.call(this),o(u(e),t,K,q,i,{data:3}),e}return r}();export default W;export{z as preload};
