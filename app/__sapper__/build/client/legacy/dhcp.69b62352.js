import{v as t,w as n,B as e,_ as r,a,b as c,c as s,i as o,s as i,d as u,S as f,C as p,E as l,f as d,Q as h,F as $,l as v,G as y,n as m,A as g,I as b,R as D,H as O,J as w,k as P,r as j,u as x,T as E,y as R,X as S,aa as C,e as H,t as k,g as B,h as I,j as U,o as V,p as F,D as N,m as A,a5 as G,O as J}from"./client.9ec79f48.js";function Q(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,r=a(t);if(n){var s=a(this).constructor;e=Reflect.construct(r,arguments,s)}else e=r.apply(this,arguments);return c(this,e)}}function T(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function X(t){var n,e;return{c:function(){n=H("div"),e=k("No USB dhcp.txt found.")},l:function(t){n=B(t,"DIV",{});var r=I(n);e=U(r,"No USB dhcp.txt found."),r.forEach(P)},m:function(t,r){m(t,n,r),V(n,e)},p:F,i:F,o:F,d:function(t){t&&P(n)}}}function _(t){var n,e,r,a,c,s,o,i,u;return(i=new N({props:{a:{grow:!0},$$slots:{default:[q]},$$scope:{ctx:t}}})).$on("click",t[2]),{c:function(){n=H("div"),e=k("Found USB dhcp.txt:"),r=d(),a=H("div"),c=k(t[0]),s=d(),o=H("div"),l(i.$$.fragment),this.h()},l:function(u){n=B(u,"DIV",{class:!0});var f=I(n);e=U(f,"Found USB dhcp.txt:"),f.forEach(P),r=v(u),a=B(u,"DIV",{class:!0,style:!0});var p=I(a);c=U(p,t[0]),p.forEach(P),s=v(u),o=B(u,"DIV",{class:!0});var l=I(o);$(i.$$.fragment,l),l.forEach(P),this.h()},h:function(){A(n,"class","plr06"),A(a,"class","terminal plr1 ptb04 "),G(a,"white-space","pre"),A(o,"class","grow flex plr06 pb06")},m:function(t,f){m(t,n,f),V(n,e),m(t,r,f),m(t,a,f),V(a,c),m(t,s,f),m(t,o,f),y(i,o,null),u=!0},p:function(t,n){(!u||1&n)&&J(c,t[0]);var e={};130&n&&(e.$$scope={dirty:n,ctx:t}),i.$set(e)},i:function(t){u||(O(i.$$.fragment,t),u=!0)},o:function(t){b(i.$$.fragment,t),u=!1},d:function(t){t&&P(n),t&&P(r),t&&P(a),t&&P(s),t&&P(o),w(i)}}}function q(t){var n,e=t[1]?"Disable DHCP Edit":"Enable DHCP Edit";return{c:function(){n=k(e)},l:function(t){n=U(t,e)},m:function(t,e){m(t,n,e)},p:function(t,r){2&r&&e!==(e=t[1]?"Disable DHCP Edit":"Enable DHCP Edit")&&J(n,e)},d:function(t){t&&P(n)}}}function z(t){var n,e,r,a,c,s;n=new p({});var o=[_,X],i=[];function u(t,n){return t[0]?0:1}return r=u(t),a=i[r]=o[r](t),{c:function(){l(n.$$.fragment),e=d(),a.c(),c=h()},l:function(t){$(n.$$.fragment,t),e=v(t),a.l(t),c=h()},m:function(t,a){y(n,t,a),m(t,e,a),i[r].m(t,a),m(t,c,a),s=!0},p:function(t,n){var e=g(n,1)[0],s=r;(r=u(t))===s?i[r].p(t,e):(E(),b(i[s],1,1,(function(){i[s]=null})),D(),(a=i[r])||(a=i[r]=o[r](t)).c(),O(a,1),a.m(c.parentNode,c))},i:function(t){s||(O(n.$$.fragment,t),O(a),s=!0)},o:function(t){b(n.$$.fragment,t),b(a),s=!1},d:function(t){w(n,t),t&&P(e),i[r].d(t),t&&P(c)}}}function K(t,n){return L.apply(this,arguments)}function L(){return(L=t(n.mark((function t(r,a){return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e(r,a,this));case 1:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function M(e,r,a){j().page;var c,s,o,i,u=r.data;return x(t(n.mark((function t(){return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log(u,u);case 1:case"end":return t.stop()}}),t)})))),e.$$set=function(t){"data"in t&&a(3,u=t.data)},e.$$.update=function(){8&e.$$.dirty&&a(0,c=u.txt),8&e.$$.dirty&&a(4,s=u.config),1&e.$$.dirty&&a(5,o="\n\n# ---------- auto-generated from pdac -------- >>>>\n"+c+"\n# <<<<< ---- auto-generated from pdac -------------\n\n"),48&e.$$.dirty&&a(1,i=-1!=s.indexOf(o))},[c,i,function(t){R.set({type:"wait",message:"Restarting DHCP service"});var n=i?s.replace(o,""):s+o;S.post("/system/dhcp?as=json",{blob:n}).then((function(t){console.log("[dhcp.svelte] restarted:",t),R.set({type:"success",message:"DHCP Restarted"})})).catch((function(t){R.set(function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?T(Object(e),!0).forEach((function(n){C(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):T(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}({type:"error"},t.response.data))}))},u]}var W=function(t){r(e,f);var n=Q(e);function e(t){var r;return s(this,e),r=n.call(this),o(u(r),t,M,z,i,{data:3}),r}return e}();export default W;export{K as preload};
