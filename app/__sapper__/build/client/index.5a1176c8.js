import{S as e,i as s,s as t,B as n,O as a,r as o,a as c,u as r,g as l,v as i,j as $,x as d,y as f,z as g,f as m,l as u,o as p,ad as h,e as y,t as _,D as N,c as w,b,d as v,h as x,k as S,w as F,F as k,C as j,q as A,P as B,p as C,N as D,n as R,E as M}from"./client.c5f629ee.js";function U(e){let s,t;return{c(){s=y("div"),t=_("Nothing to Sync."),this.h()},l(e){s=w(e,"DIV",{style:!0});var n=b(s);t=v(n,"Nothing to Sync."),n.forEach(m),this.h()},h(){D(s,"margin","1em 0em")},m(e,n){$(e,s,n),S(s,t)},p:R,i:R,o:R,d(e){e&&m(s)}}}function E(e){let s,t;return s=new M({props:{a:{grow:!0},$$slots:{default:[P]},$$scope:{ctx:e}}}),s.$on("click",e[5]),{c(){o(s.$$.fragment)},l(e){r(s.$$.fragment,e)},m(e,n){i(s,e,n),t=!0},p(e,t){const n={};1024&t&&(n.$$scope={dirty:t,ctx:e}),s.$set(n)},i(e){t||(d(s.$$.fragment,e),t=!0)},o(e){f(s.$$.fragment,e),t=!1},d(e){g(s,e)}}}function L(e){let s,t;return s=new M({props:{a:{grow:!0},$$slots:{default:[I]},$$scope:{ctx:e}}}),s.$on("click",e[6]),{c(){o(s.$$.fragment)},l(e){r(s.$$.fragment,e)},m(e,n){i(s,e,n),t=!0},p(e,t){const n={};1024&t&&(n.$$scope={dirty:t,ctx:e}),s.$set(n)},i(e){t||(d(s.$$.fragment,e),t=!0)},o(e){f(s.$$.fragment,e),t=!1},d(e){g(s,e)}}}function P(e){let s;return{c(){s=_("Sync All")},l(e){s=v(e,"Sync All")},m(e,t){$(e,s,t)},d(e){e&&m(s)}}}function I(e){let s;return{c(){s=_("Clear Space")},l(e){s=v(e,"Clear Space")},m(e,t){$(e,s,t)},d(e){e&&m(s)}}}function V(e){let s,t,n,a,o,r,i,g,u,p,h,A,B,C,D,R,M,P,I,V,q,z,O,T,G,H,J=(e[0].matching_files||"None")+"",K=(e[0].differences_found||"None")+"",Q=(e[0].files_missing||"None")+"",W=(e[1]?e[1].length:"N/A")+"",X=(e[0].errors_while_checking||"None")+"";const Y=[L,E,U],Z=[];function ee(e,s){return e[0].differences_found||e[0].errors_while_checking||!e[2]||e[0].files_missing||0==e[1].length?0!=e[1].length?1:2:0}return O=ee(e),T=Z[O]=Y[O](e),{c(){s=y("div"),t=_("Used Memory: "),n=_(e[3]),a=y("br"),o=_("\n    Available Memory: "),r=_(e[4]),i=y("br"),g=_("\n    Synced Files: "),u=_(J),p=y("br"),h=_("\n    Unsynced Files: "),A=_(K),B=_(" ("),C=_(Q),D=_(") "),R=y("br"),M=_("\n    Local Files: "),P=_(W),I=y("br"),V=_(" \n    Notices: "),q=_(X),z=c(),T.c(),G=N(),this.h()},l(c){s=w(c,"DIV",{class:!0});var $=b(s);t=v($,"Used Memory: "),n=v($,e[3]),a=w($,"BR",{}),o=v($,"\n    Available Memory: "),r=v($,e[4]),i=w($,"BR",{}),g=v($,"\n    Synced Files: "),u=v($,J),p=w($,"BR",{}),h=v($,"\n    Unsynced Files: "),A=v($,K),B=v($," ("),C=v($,Q),D=v($,") "),R=w($,"BR",{}),M=v($,"\n    Local Files: "),P=v($,W),I=w($,"BR",{}),V=v($," \n    Notices: "),q=v($,X),$.forEach(m),z=l(c),T.l(c),G=N(),this.h()},h(){x(s,"class","pb1")},m(e,c){$(e,s,c),S(s,t),S(s,n),S(s,a),S(s,o),S(s,r),S(s,i),S(s,g),S(s,u),S(s,p),S(s,h),S(s,A),S(s,B),S(s,C),S(s,D),S(s,R),S(s,M),S(s,P),S(s,I),S(s,V),S(s,q),$(e,z,c),Z[O].m(e,c),$(e,G,c),H=!0},p(e,s){(!H||8&s)&&F(n,e[3]),(!H||16&s)&&F(r,e[4]),(!H||1&s)&&J!==(J=(e[0].matching_files||"None")+"")&&F(u,J),(!H||1&s)&&K!==(K=(e[0].differences_found||"None")+"")&&F(A,K),(!H||1&s)&&Q!==(Q=(e[0].files_missing||"None")+"")&&F(C,Q),(!H||2&s)&&W!==(W=(e[1]?e[1].length:"N/A")+"")&&F(P,W),(!H||1&s)&&X!==(X=(e[0].errors_while_checking||"None")+"")&&F(q,X);let t=O;O=ee(e),O===t?Z[O].p(e,s):(k(),f(Z[t],1,1,()=>{Z[t]=null}),j(),T=Z[O],T||(T=Z[O]=Y[O](e),T.c()),d(T,1),T.m(G.parentNode,G))},i(e){H||(d(T),H=!0)},o(e){f(T),H=!1},d(e){e&&m(s),e&&m(z),Z[O].d(e),e&&m(G)}}}function q(e){let s,t,u,p;return s=new n({}),u=new a({props:{a:{grow:!0},className:"p06",$$slots:{default:[V]},$$scope:{ctx:e}}}),{c(){o(s.$$.fragment),t=c(),o(u.$$.fragment)},l(e){r(s.$$.fragment,e),t=l(e),r(u.$$.fragment,e)},m(e,n){i(s,e,n),$(e,t,n),i(u,e,n),p=!0},p(e,[s]){const t={};1055&s&&(t.$$scope={dirty:s,ctx:e}),u.$set(t)},i(e){p||(d(s.$$.fragment,e),d(u.$$.fragment,e),p=!0)},o(e){f(s.$$.fragment,e),f(u.$$.fragment,e),p=!1},d(e){g(s,e),e&&m(t),g(u,e)}}}function z(e,s,t){let n;u(e,C,e=>t(8,n=e));let a,o,c,{data:r={}}=s,l=[],i=!1;function $(){return new Promise((e,s)=>{A.set({type:"wait",message:"Checking Drive"}),B.get("/sync?as=json",{}).then(s=>{t(0,r=s.data),A.set(null),e(),B.get("/usb/recordings?as=json").then(e=>{t(1,l=e.data),console.log("[sync/index.svelte] 🗄✅  listed local files:",l.length),t(2,i=!0)}).catch(e=>{console.log("[sync/index.svelte] 🗄❌  could not list local files:",e)})}).catch(e=>{A.set({type:"error",...e.response.data}),s()})})}return p(async()=>{$()}),e.$$set=e=>{"data"in e&&t(0,r=e.data)},e.$$.update=()=>{256&e.$$.dirty&&t(7,a=n.drives.find(e=>"/home/pi/pdac/usb"==e._mounted)||{}),128&e.$$.dirty&&t(3,o=h(1e3*a._used).auto+" ("+a._capacity+")"),128&e.$$.dirty&&t(4,c=h(1e3*a._available).auto)},[r,l,i,o,c,function(){A.set({type:"wait",message:"Syncing Files<br />Please wait..."}),B.post("/sync?as=json",{}).then(e=>{$().finally(()=>{A.set({type:"success",message:e.data,actions:[["Sessions","/session"],["Close","/sync"]]})})}).catch(e=>{A.set({type:"error",...e.response.data})})},function(){A.set({type:"wait",message:"Deleting Local Files"}),B.post("/sync/clearup?as=json",{}).then(e=>{console.log(e),setTimeout(()=>{$().finally(()=>{A.set(null)})},1e3)}).catch(e=>{A.set({type:"error",...e.response.data})})}]}export default class extends e{constructor(e){super(),s(this,e,z,q,t,{data:0})}}
