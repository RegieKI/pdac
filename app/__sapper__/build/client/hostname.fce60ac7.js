import{A as a,S as t,i as s,s as e,B as n,P as o,u as r,a as $,v as c,g as m,w as f,j as i,y as l,z as u,C as p,f as d,l as g,H as h,I as v,F as x,e as w,t as y,c as I,b,d as C,k as j,x as D,K as k,r as A,q as H,p as N}from"./client.8b369788.js";import{I as G}from"./IndexDropdown.9ba43b8e.js";function L(a){let t;return{c(){t=y("Change Hostname")},l(a){t=C(a,"Change Hostname")},m(a,s){i(a,t,s)},d(a){a&&d(t)}}}function O(a){let t,s,e,n,o,g,A,H,N,O=(a[1]?a[1].hostname:"LOADING")+"";function q(t){a[5].call(null,t)}let z={};return void 0!==a[0]&&(z.a=a[0]),o=new G({props:z}),h.push(()=>v(o,"a",q)),o.$on("change",a[2]),H=new x({props:{a:{grow:!0},$$slots:{default:[L]},$$scope:{ctx:a}}}),H.$on("click",a[3]),{c(){t=w("div"),s=y("Current hostname: "),e=y(O),n=$(),r(o.$$.fragment),A=$(),r(H.$$.fragment)},l(a){t=I(a,"DIV",{});var r=b(t);s=C(r,"Current hostname: "),e=C(r,O),r.forEach(d),n=m(a),c(o.$$.fragment,a),A=m(a),c(H.$$.fragment,a)},m(a,r){i(a,t,r),j(t,s),j(t,e),i(a,n,r),f(o,a,r),i(a,A,r),f(H,a,r),N=!0},p(a,t){(!N||2&t)&&O!==(O=(a[1]?a[1].hostname:"LOADING")+"")&&D(e,O);const s={};!g&&1&t&&(g=!0,s.a=a[0],k(()=>g=!1)),o.$set(s);const n={};128&t&&(n.$$scope={dirty:t,ctx:a}),H.$set(n)},i(a){N||(l(o.$$.fragment,a),l(H.$$.fragment,a),N=!0)},o(a){u(o.$$.fragment,a),u(H.$$.fragment,a),N=!1},d(a){a&&d(t),a&&d(n),p(o,a),a&&d(A),p(H,a)}}}function q(a){let t,s,e,g;return t=new n({}),e=new o({props:{className:"mlr06 pb1",a:{grow:!0},$$slots:{default:[O]},$$scope:{ctx:a}}}),{c(){r(t.$$.fragment),s=$(),r(e.$$.fragment)},l(a){c(t.$$.fragment,a),s=m(a),c(e.$$.fragment,a)},m(a,n){f(t,a,n),i(a,s,n),f(e,a,n),g=!0},p(a,[t]){const s={};131&t&&(s.$$scope={dirty:t,ctx:a}),e.$set(s)},i(a){g||(l(t.$$.fragment,a),l(e.$$.fragment,a),g=!0)},o(a){u(t.$$.fragment,a),u(e.$$.fragment,a),g=!1},d(a){p(t,a),a&&d(s),p(e,a)}}}async function z(t,s){return a(t,s,this)}function B(a,t,s){let e;g(a,N,a=>s(1,e=a));let n,{data:o}=t,r={options:o,key:"hostname"};return a.$$set=a=>{"data"in a&&s(4,o=a.data)},a.$$.update=()=>{1&a.$$.dirty&&(n=void 0!==r.value?r.options[r.value]:void 0)},[r,e,function(a){n=r.options[r.value].hostname},function(a){null!=n&&A.post("/system/hostname?as=json",{hostname:n}).then(a=>{}).catch(a=>{H.set({type:"error",...a.response.data})})},o,function(a){r=a,s(0,r)}]}export default class extends t{constructor(a){super(),s(this,a,B,q,e,{data:4})}}export{z as preload};
