import{A as t,S as e,i as s,s as a,B as n,r as $,a as r,u as c,g as o,v as i,j as l,x as p,y as f,z as m,f as d,l as g,m as u,o as h,E as x,P as y,t as w,e as b,d as S,c as k,w as v,D as j,b as B,h as E,k as N,p as A,R as G}from"./client.721c2dc2.js";import{G as R}from"./GroupBlock.65fb185c.js";function z(t){let e,s,a,n,$,c,i,p,f=t[0].title+"",m=t[0].exercises.length+"",g=t[1]()+"";return{c(){e=w(f),s=w(": "),a=b("br"),n=r(),$=w(m),c=w(" exercise(s), \n      "),i=w(g),p=w(" seconds in total")},l(t){e=S(t,f),s=S(t,": "),a=k(t,"BR",{}),n=o(t),$=S(t,m),c=S(t," exercise(s), \n      "),i=S(t,g),p=S(t," seconds in total")},m(t,r){l(t,e,r),l(t,s,r),l(t,a,r),l(t,n,r),l(t,$,r),l(t,c,r),l(t,i,r),l(t,p,r)},p(t,s){1&s&&f!==(f=t[0].title+"")&&v(e,f),1&s&&m!==(m=t[0].exercises.length+"")&&v($,m),2&s&&g!==(g=t[1]()+"")&&v(i,g)},d(t){t&&d(e),t&&d(s),t&&d(a),t&&d(n),t&&d($),t&&d(c),t&&d(i),t&&d(p)}}}function D(t){let e,s,a=t[0].description+"";return{c(){s=j(),this.h()},l(t){s=j(),this.h()},h(){e=new G(s)},m(t,n){e.m(a,t,n),l(t,s,n)},p(t,s){1&s&&a!==(a=t[0].description+"")&&e.p(a)},d(t){t&&d(s),t&&e.d()}}}function P(t){let e,s,a;return{c(){e=b("a"),s=w("Start Session"),this.h()},l(t){e=k(t,"A",{href:!0});var a=B(e);s=S(a,"Start Session"),a.forEach(d),this.h()},h(){E(e,"href",a=t[2].path+"/preview")},m(t,a){l(t,e,a),N(e,s)},p(t,s){4&s&&a!==(a=t[2].path+"/preview")&&E(e,"href",a)},d(t){t&&d(e)}}}function _(t){let e,s,a,n,g,u;return e=new R({props:{className:"pb06",$$slots:{default:[z]},$$scope:{ctx:t}}}),a=new R({props:{className:"pb06",$$slots:{default:[D]},$$scope:{ctx:t}}}),g=new x({props:{a:{height:"80px"},$$slots:{default:[P]},$$scope:{ctx:t}}}),{c(){$(e.$$.fragment),s=r(),$(a.$$.fragment),n=r(),$(g.$$.fragment)},l(t){c(e.$$.fragment,t),s=o(t),c(a.$$.fragment,t),n=o(t),c(g.$$.fragment,t)},m(t,$){i(e,t,$),l(t,s,$),i(a,t,$),l(t,n,$),i(g,t,$),u=!0},p(t,s){const n={};259&s&&(n.$$scope={dirty:s,ctx:t}),e.$set(n);const $={};257&s&&($.$$scope={dirty:s,ctx:t}),a.$set($);const r={};260&s&&(r.$$scope={dirty:s,ctx:t}),g.$set(r)},i(t){u||(p(e.$$.fragment,t),p(a.$$.fragment,t),p(g.$$.fragment,t),u=!0)},o(t){f(e.$$.fragment,t),f(a.$$.fragment,t),f(g.$$.fragment,t),u=!1},d(t){m(e,t),t&&d(s),m(a,t),t&&d(n),m(g,t)}}}function q(t){let e,s,a,g;return e=new n({}),a=new R({props:{className:"p06",$$slots:{default:[_]},$$scope:{ctx:t}}}),{c(){$(e.$$.fragment),s=r(),$(a.$$.fragment)},l(t){c(e.$$.fragment,t),s=o(t),c(a.$$.fragment,t)},m(t,n){i(e,t,n),l(t,s,n),i(a,t,n),g=!0},p(t,[e]){const s={};263&e&&(s.$$scope={dirty:e,ctx:t}),a.$set(s)},i(t){g||(p(e.$$.fragment,t),p(a.$$.fragment,t),g=!0)},o(t){f(e.$$.fragment,t),f(a.$$.fragment,t),g=!1},d(t){m(e,t),t&&d(s),m(a,t)}}}async function C(e,s){return t(e,s,this)}function F(t,e,s){let a,n;g(t,A,t=>s(6,a=t));const{page:$}=u();g(t,$,t=>s(2,n=t));let r,c,o,{data:i}=e;return h(async()=>{console.log("[Session mount] 👥🌀"),y.get("http://localhost:8888/status").then(t=>{console.log("[Session mount] 👥✅",t)}).catch(t=>{console.log("[Session mount] 👥❌")})}),t.$$set=t=>{"data"in t&&s(4,i=t.data)},t.$$.update=()=>{16&t.$$.dirty&&s(0,r=i[0]),1&t.$$.dirty&&s(1,c=()=>{let t=0;return r.exercises.forEach(e=>{const s=e.exercise_id;s.time&&(t+=s.time)}),t}),64&t.$$.dirty&&(o=!!a&&(!!a.backend&&a.backend.miband.connected))},[r,c,n,$,i]}export default class extends e{constructor(t){super(),s(this,t,F,q,a,{data:4})}}export{C as preload};
