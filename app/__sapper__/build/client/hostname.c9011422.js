import{A as a,S as t,i as s,s as e,B as n,O as o,r,a as $,u as c,g as m,v as f,j as i,x as l,y as u,z as p,f as d,l as g,G as h,H as v,E as x,e as w,t as y,c as I,b as j,d as C,k as D,w as b,J as k,P as A,q as G,p as H}from"./client.c5f629ee.js";import{I as N}from"./IndexDropdown.80879b61.js";function O(a){let t;return{c(){t=y("Change Hostname")},l(a){t=C(a,"Change Hostname")},m(a,s){i(a,t,s)},d(a){a&&d(t)}}}function E(a){let t,s,e,n,o,g,A,G,H,E=(a[1]?a[1].hostname:"LOADING")+"";function L(t){a[5].call(null,t)}let q={};return void 0!==a[0]&&(q.a=a[0]),o=new N({props:q}),h.push(()=>v(o,"a",L)),o.$on("change",a[2]),G=new x({props:{a:{grow:!0},$$slots:{default:[O]},$$scope:{ctx:a}}}),G.$on("click",a[3]),{c(){t=w("div"),s=y("Current hostname: "),e=y(E),n=$(),r(o.$$.fragment),A=$(),r(G.$$.fragment)},l(a){t=I(a,"DIV",{});var r=j(t);s=C(r,"Current hostname: "),e=C(r,E),r.forEach(d),n=m(a),c(o.$$.fragment,a),A=m(a),c(G.$$.fragment,a)},m(a,r){i(a,t,r),D(t,s),D(t,e),i(a,n,r),f(o,a,r),i(a,A,r),f(G,a,r),H=!0},p(a,t){(!H||2&t)&&E!==(E=(a[1]?a[1].hostname:"LOADING")+"")&&b(e,E);const s={};!g&&1&t&&(g=!0,s.a=a[0],k(()=>g=!1)),o.$set(s);const n={};128&t&&(n.$$scope={dirty:t,ctx:a}),G.$set(n)},i(a){H||(l(o.$$.fragment,a),l(G.$$.fragment,a),H=!0)},o(a){u(o.$$.fragment,a),u(G.$$.fragment,a),H=!1},d(a){a&&d(t),a&&d(n),p(o,a),a&&d(A),p(G,a)}}}function L(a){let t,s,e,g;return t=new n({}),e=new o({props:{className:"mlr06 pb1",a:{grow:!0},$$slots:{default:[E]},$$scope:{ctx:a}}}),{c(){r(t.$$.fragment),s=$(),r(e.$$.fragment)},l(a){c(t.$$.fragment,a),s=m(a),c(e.$$.fragment,a)},m(a,n){f(t,a,n),i(a,s,n),f(e,a,n),g=!0},p(a,[t]){const s={};131&t&&(s.$$scope={dirty:t,ctx:a}),e.$set(s)},i(a){g||(l(t.$$.fragment,a),l(e.$$.fragment,a),g=!0)},o(a){u(t.$$.fragment,a),u(e.$$.fragment,a),g=!1},d(a){p(t,a),a&&d(s),p(e,a)}}}async function q(t,s){return a(t,s,this)}function z(a,t,s){let e;g(a,H,a=>s(1,e=a));let n,{data:o}=t,r={options:o,key:"hostname"};return a.$$set=a=>{"data"in a&&s(4,o=a.data)},a.$$.update=()=>{1&a.$$.dirty&&(n=void 0!==r.value?r.options[r.value]:void 0)},[r,e,function(a){n=r.options[r.value].hostname},function(a){null!=n&&A.post("/system/hostname?as=json",{hostname:n}).then(a=>{}).catch(a=>{G.set({type:"error",...a.response.data})})},o,function(a){r=a,s(0,r)}]}export default class extends t{constructor(a){super(),s(this,a,z,L,e,{data:4})}}export{q as preload};
