import{A as t,S as e,i as s,s as a,B as n,E as $,a as r,G as o,g as c,H as i,j as l,I as f,J as p,K as m,f as d,l as g,m as u,o as h,u as x,R as y,t as w,e as S,d as b,c as k,C as j,F as v,b as B,h as E,k as G,p as N,$ as A}from"./client.e7012d37.js";import{G as R}from"./GroupBlock.ff49e01e.js";function C(t){let e,s,a,n,$,o,i,f,p=t[0].title+"",m=t[0].exercises.length+"",g=t[1]()+"";return{c(){e=w(p),s=w(": "),a=S("br"),n=r(),$=w(m),o=w(" exercise(s), \n      "),i=w(g),f=w(" seconds in total")},l(t){e=b(t,p),s=b(t,": "),a=k(t,"BR",{}),n=c(t),$=b(t,m),o=b(t," exercise(s), \n      "),i=b(t,g),f=b(t," seconds in total")},m(t,r){l(t,e,r),l(t,s,r),l(t,a,r),l(t,n,r),l(t,$,r),l(t,o,r),l(t,i,r),l(t,f,r)},p(t,s){1&s&&p!==(p=t[0].title+"")&&j(e,p),1&s&&m!==(m=t[0].exercises.length+"")&&j($,m),2&s&&g!==(g=t[1]()+"")&&j(i,g)},d(t){t&&d(e),t&&d(s),t&&d(a),t&&d(n),t&&d($),t&&d(o),t&&d(i),t&&d(f)}}}function F(t){let e,s,a=t[0].description+"";return{c(){s=v(),this.h()},l(t){s=v(),this.h()},h(){e=new A(s)},m(t,n){e.m(a,t,n),l(t,s,n)},p(t,s){1&s&&a!==(a=t[0].description+"")&&e.p(a)},d(t){t&&d(s),t&&e.d()}}}function H(t){let e,s,a;return{c(){e=S("a"),s=w("Start Session"),this.h()},l(t){e=k(t,"A",{href:!0});var a=B(e);s=b(a,"Start Session"),a.forEach(d),this.h()},h(){E(e,"href",a=t[2].path+"/preview")},m(t,a){l(t,e,a),G(e,s)},p(t,s){4&s&&a!==(a=t[2].path+"/preview")&&E(e,"href",a)},d(t){t&&d(e)}}}function I(t){let e,s,a,n,g,u;return e=new R({props:{className:"pb06",$$slots:{default:[C]},$$scope:{ctx:t}}}),a=new R({props:{className:"pb06",$$slots:{default:[F]},$$scope:{ctx:t}}}),g=new x({props:{a:{height:"80px"},$$slots:{default:[H]},$$scope:{ctx:t}}}),{c(){$(e.$$.fragment),s=r(),$(a.$$.fragment),n=r(),$(g.$$.fragment)},l(t){o(e.$$.fragment,t),s=c(t),o(a.$$.fragment,t),n=c(t),o(g.$$.fragment,t)},m(t,$){i(e,t,$),l(t,s,$),i(a,t,$),l(t,n,$),i(g,t,$),u=!0},p(t,s){const n={};259&s&&(n.$$scope={dirty:s,ctx:t}),e.$set(n);const $={};257&s&&($.$$scope={dirty:s,ctx:t}),a.$set($);const r={};260&s&&(r.$$scope={dirty:s,ctx:t}),g.$set(r)},i(t){u||(f(e.$$.fragment,t),f(a.$$.fragment,t),f(g.$$.fragment,t),u=!0)},o(t){p(e.$$.fragment,t),p(a.$$.fragment,t),p(g.$$.fragment,t),u=!1},d(t){m(e,t),t&&d(s),m(a,t),t&&d(n),m(g,t)}}}function J(t){let e,s,a,g;return e=new n({}),a=new R({props:{className:"p06",$$slots:{default:[I]},$$scope:{ctx:t}}}),{c(){$(e.$$.fragment),s=r(),$(a.$$.fragment)},l(t){o(e.$$.fragment,t),s=c(t),o(a.$$.fragment,t)},m(t,n){i(e,t,n),l(t,s,n),i(a,t,n),g=!0},p(t,[e]){const s={};263&e&&(s.$$scope={dirty:e,ctx:t}),a.$set(s)},i(t){g||(f(e.$$.fragment,t),f(a.$$.fragment,t),g=!0)},o(t){p(e.$$.fragment,t),p(a.$$.fragment,t),g=!1},d(t){m(e,t),t&&d(s),m(a,t)}}}async function K(e,s){return t(e,s,this)}function _(t,e,s){let a,n;g(t,N,t=>s(6,a=t));const{page:$}=u();g(t,$,t=>s(2,n=t));let r,o,c,{data:i}=e;return h(async()=>{console.log("[Session mount] 👥🌀"),y.get("http://localhost:8888/status").then(t=>{console.log("[Session mount] 👥✅",t)}).catch(t=>{console.log("[Session mount] 👥❌")})}),t.$$set=t=>{"data"in t&&s(4,i=t.data)},t.$$.update=()=>{16&t.$$.dirty&&s(0,r=i[0]),1&t.$$.dirty&&s(1,o=()=>{let t=0;return r.exercises.forEach(e=>{const s=e.exercise_id;s.time&&(t+=s.time)}),t}),64&t.$$.dirty&&(c=!!a&&(!!a.backend&&a.backend.miband.connected))},[r,o,n,$,i]}export default class extends e{constructor(t){super(),s(this,t,_,J,a,{data:4})}}export{K as preload};
