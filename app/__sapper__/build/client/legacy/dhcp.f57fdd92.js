import{v as t,w as n,A as e,_ as r,a,b as c,c as s,i as o,s as i,d as u,S as f,B as p,C as l,f as d,K as h,D as $,l as v,E as m,n as y,L as g,H as b,J as D,G as O,I as w,k as x,r as P,u as j,N as E,x as S,z as C,a3 as H,e as R,t as k,g as B,h as I,j as N,o as U,p as V,M as F,m as z,X as A,F as G}from"./client.7a5f01ae.js";function J(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=a(t);if(n){var s=a(this).constructor;e=Reflect.construct(r,arguments,s)}else e=r.apply(this,arguments);return c(this,e)}}function K(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function L(t){var n,e;return{c:function(){n=R("div"),e=k("No USB dhcp.txt found.")},l:function(t){n=B(t,"DIV",{});var r=I(n);e=N(r,"No USB dhcp.txt found."),r.forEach(x)},m:function(t,r){y(t,n,r),U(n,e)},p:V,i:V,o:V,d:function(t){t&&x(n)}}}function M(t){var n,e,r,a,c,s,o,i,u;return(i=new F({props:{a:{grow:!0},$$slots:{default:[X]},$$scope:{ctx:t}}})).$on("click",t[2]),{c:function(){n=R("div"),e=k("Found USB dhcp.txt:"),r=d(),a=R("div"),c=k(t[0]),s=d(),o=R("div"),l(i.$$.fragment),this.h()},l:function(u){n=B(u,"DIV",{class:!0});var f=I(n);e=N(f,"Found USB dhcp.txt:"),f.forEach(x),r=v(u),a=B(u,"DIV",{class:!0,style:!0});var p=I(a);c=N(p,t[0]),p.forEach(x),s=v(u),o=B(u,"DIV",{class:!0});var l=I(o);$(i.$$.fragment,l),l.forEach(x),this.h()},h:function(){z(n,"class","plr06"),z(a,"class","terminal plr1 ptb04 "),A(a,"white-space","pre"),z(o,"class","grow flex plr06 pb06")},m:function(t,f){y(t,n,f),U(n,e),y(t,r,f),y(t,a,f),U(a,c),y(t,s,f),y(t,o,f),m(i,o,null),u=!0},p:function(t,n){(!u||1&n)&&G(c,t[0]);var e={};130&n&&(e.$$scope={dirty:n,ctx:t}),i.$set(e)},i:function(t){u||(O(i.$$.fragment,t),u=!0)},o:function(t){b(i.$$.fragment,t),u=!1},d:function(t){t&&x(n),t&&x(r),t&&x(a),t&&x(s),t&&x(o),w(i)}}}function X(t){var n,e=t[1]?"Disable DHCP Edit":"Enable DHCP Edit";return{c:function(){n=k(e)},l:function(t){n=N(t,e)},m:function(t,e){y(t,n,e)},p:function(t,r){2&r&&e!==(e=t[1]?"Disable DHCP Edit":"Enable DHCP Edit")&&G(n,e)},d:function(t){t&&x(n)}}}function _(t){var n,e,r,a,c,s;n=new p({});var o=[M,L],i=[];function u(t,n){return t[0]?0:1}return r=u(t),a=i[r]=o[r](t),{c:function(){l(n.$$.fragment),e=d(),a.c(),c=h()},l:function(t){$(n.$$.fragment,t),e=v(t),a.l(t),c=h()},m:function(t,a){m(n,t,a),y(t,e,a),i[r].m(t,a),y(t,c,a),s=!0},p:function(t,n){var e=g(n,1)[0],s=r;(r=u(t))===s?i[r].p(t,e):(E(),b(i[s],1,1,(function(){i[s]=null})),D(),(a=i[r])||(a=i[r]=o[r](t)).c(),O(a,1),a.m(c.parentNode,c))},i:function(t){s||(O(n.$$.fragment,t),O(a),s=!0)},o:function(t){b(n.$$.fragment,t),b(a),s=!1},d:function(t){w(n,t),t&&x(e),i[r].d(t),t&&x(c)}}}function q(t,n){return Q.apply(this,arguments)}function Q(){return(Q=t(n.mark((function t(r,a){return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e(r,a,this));case 1:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function T(e,r,a){P().page;var c,s,o,i,u=r.data;return j(t(n.mark((function t(){return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log(u,u);case 1:case"end":return t.stop()}}),t)})))),e.$$set=function(t){"data"in t&&a(3,u=t.data)},e.$$.update=function(){8&e.$$.dirty&&a(0,c=u.txt),8&e.$$.dirty&&a(4,s=u.config),1&e.$$.dirty&&a(5,o="\n\n# ---------- auto-generated from pdac -------- >>>>\n"+c+"\n# <<<<< ---- auto-generated from pdac -------------\n\n"),48&e.$$.dirty&&a(1,i=-1!=s.indexOf(o))},[c,i,function(t){S.set({type:"wait",message:"Restarting DHCP service"});var n=i?s.replace(o,""):s+o;C.post("/system/dhcp?as=json",{blob:n}).then((function(t){console.log("[dhcp.svelte] restarted:",t),S.set({type:"success",message:"DHCP Restarted"})})).catch((function(t){S.set(function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?K(Object(e),!0).forEach((function(n){H(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):K(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}({type:"error"},t.response.data))}))},u]}var W=function(t){r(e,f);var n=J(e);function e(t){var r;return s(this,e),r=n.call(this),o(u(r),t,T,_,i,{data:3}),r}return e}();export default W;export{q as preload};