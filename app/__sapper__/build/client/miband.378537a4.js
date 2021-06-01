import{A as n,S as e,i as t,s as a,B as s,O as o,r as c,a as r,u as d,g as i,v as $,j as l,x as m,y as f,z as u,f as g,l as p,ac as b,G as y,H as h,E as w,e as M,t as k,c as x,b as N,d as C,k as I,w as S,J as _,P as j,p as v,q as B}from"./client.c5f629ee.js";import{I as E}from"./IndexDropdown.80879b61.js";function O(n){let e;return{c(){e=k("Change MiBand")},l(n){e=C(n,"Change MiBand")},m(n,t){l(n,e,t)},d(n){n&&g(e)}}}function D(n){let e;return{c(){e=k("Reconnect MiBand")},l(n){e=C(n,"Reconnect MiBand")},m(n,t){l(n,e,t)},d(n){n&&g(e)}}}function R(n){let e,t,a,s,o,p,b,j,v,B,R,V,q,z,G,H,J,P,F,K,L=(n[1]?n[1].number:"NONE")+"",Q=(n[1]?n[1].mac_address:"~")+"",T=n[2].backend.miband.initialised?"Initialised":"Not Initialised",U=n[2].backend.miband.connected?"Connected":"Not Connected";function W(e){n[6].call(null,e)}let X={};return void 0!==n[0]&&(X.a=n[0]),z=new E({props:X}),y.push(()=>h(z,"a",W)),z.$on("change",A),J=new w({props:{a:{grow:!0},$$slots:{default:[O]},$$scope:{ctx:n}}}),J.$on("click",n[3]),F=new w({props:{a:{grow:!0},$$slots:{default:[D]},$$scope:{ctx:n}}}),F.$on("click",n[4]),{c(){e=M("div"),t=k("Current MiBand: "),a=k(L),s=k(" ( "),o=k(Q),p=k(" )"),b=r(),j=M("div"),v=k("Status: \n    "),B=k(T),R=r(),V=k(U),q=r(),c(z.$$.fragment),H=r(),c(J.$$.fragment),P=r(),c(F.$$.fragment)},l(n){e=x(n,"DIV",{});var c=N(e);t=C(c,"Current MiBand: "),a=C(c,L),s=C(c," ( "),o=C(c,Q),p=C(c," )"),c.forEach(g),b=i(n),j=x(n,"DIV",{});var r=N(j);v=C(r,"Status: \n    "),B=C(r,T),R=i(r),V=C(r,U),r.forEach(g),q=i(n),d(z.$$.fragment,n),H=i(n),d(J.$$.fragment,n),P=i(n),d(F.$$.fragment,n)},m(n,c){l(n,e,c),I(e,t),I(e,a),I(e,s),I(e,o),I(e,p),l(n,b,c),l(n,j,c),I(j,v),I(j,B),I(j,R),I(j,V),l(n,q,c),$(z,n,c),l(n,H,c),$(J,n,c),l(n,P,c),$(F,n,c),K=!0},p(n,e){(!K||2&e)&&L!==(L=(n[1]?n[1].number:"NONE")+"")&&S(a,L),(!K||2&e)&&Q!==(Q=(n[1]?n[1].mac_address:"~")+"")&&S(o,Q),(!K||4&e)&&T!==(T=n[2].backend.miband.initialised?"Initialised":"Not Initialised")&&S(B,T),(!K||4&e)&&U!==(U=n[2].backend.miband.connected?"Connected":"Not Connected")&&S(V,U);const t={};!G&&1&e&&(G=!0,t.a=n[0],_(()=>G=!1)),z.$set(t);const s={};128&e&&(s.$$scope={dirty:e,ctx:n}),J.$set(s);const c={};128&e&&(c.$$scope={dirty:e,ctx:n}),F.$set(c)},i(n){K||(m(z.$$.fragment,n),m(J.$$.fragment,n),m(F.$$.fragment,n),K=!0)},o(n){f(z.$$.fragment,n),f(J.$$.fragment,n),f(F.$$.fragment,n),K=!1},d(n){n&&g(e),n&&g(b),n&&g(j),n&&g(q),u(z,n),n&&g(H),u(J,n),n&&g(P),u(F,n)}}}function V(n){let e,t,a,p;return e=new s({}),a=new o({props:{className:"mlr06 pb1",a:{grow:!0},$$slots:{default:[R]},$$scope:{ctx:n}}}),{c(){c(e.$$.fragment),t=r(),c(a.$$.fragment)},l(n){d(e.$$.fragment,n),t=i(n),d(a.$$.fragment,n)},m(n,s){$(e,n,s),l(n,t,s),$(a,n,s),p=!0},p(n,[e]){const t={};135&e&&(t.$$scope={dirty:e,ctx:n}),a.$set(t)},i(n){p||(m(e.$$.fragment,n),m(a.$$.fragment,n),p=!0)},o(n){f(e.$$.fragment,n),f(a.$$.fragment,n),p=!1},d(n){u(e,n),n&&g(t),u(a,n)}}}async function q(e,t){return n(e,t,this)}function z(n){return n?n.replace(/(\r\n|\n|\r)/gm,"").trim():""}function A(){}function G(n,e,t){let a;p(n,v,n=>t(2,a=n));let s,{data:o}=e,c={options:b,key:"number",grow:!0};return n.$$set=n=>{"data"in n&&t(5,o=n.data)},n.$$.update=()=>{4&n.$$.dirty&&t(1,s=b.find(n=>z(n.mac_address)===z(a.backend.mac_address)))},[c,s,a,function(){let n=b[c.value];console.log(n),n&&j.post("/system/miband?as=json",{mac_address:n.mac_address}).then(e=>{console.log("[Miband] ⌚️✅  Miband updated...",n.mac_address,n.number),v.grab()}).catch(n=>{console.log("[Miband] ⌚️❌ could not update ",n.toString(),Object.keys(n),n.response),B.set({type:"error",...n.response.data})})},function(){console.log("[Session] ⌚️  Miband reconnecting..."),B.set({type:"wait",message:"Reconnecting to "+s.mac_address}),j.post("/system/miband/reconnect?as=json",{}).then(n=>{console.log("[Session] ⌚️✅  Miband connected"),B.set(null)}).catch(n=>{console.log("[Session] ⌚️❌ Miband could not reconnect ",n.toString(),Object.keys(n),n.response),B.set({type:"error",...n.response.data})})},o,function(n){c=n,t(0,c)}]}export default class extends e{constructor(n){super(),t(this,n,G,V,a,{data:5})}}export{q as preload};
