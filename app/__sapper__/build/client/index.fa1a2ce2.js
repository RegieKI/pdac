import{S as e,i as s,s as t,B as n,P as a,E as o,a as c,G as r,g as l,H as i,j as $,I as d,J as f,K as g,f as m,l as u,o as p,ag as h,e as y,t as _,F as N,c as w,b,d as v,h as S,k as x,C as F,L as k,M as j,q as A,Q as B,p as C,v as M,n as R,u as D}from"./client.d0112671.js";function L(e){let s,t;return{c(){s=y("div"),t=_("Nothing to Sync."),this.h()},l(e){s=w(e,"DIV",{style:!0});var n=b(s);t=v(n,"Nothing to Sync."),n.forEach(m),this.h()},h(){M(s,"margin","1em 0em")},m(e,n){$(e,s,n),x(s,t)},p:R,i:R,o:R,d(e){e&&m(s)}}}function U(e){let s,t;return s=new D({props:{a:{grow:!0},$$slots:{default:[I]},$$scope:{ctx:e}}}),s.$on("click",e[5]),{c(){o(s.$$.fragment)},l(e){r(s.$$.fragment,e)},m(e,n){i(s,e,n),t=!0},p(e,t){const n={};1024&t&&(n.$$scope={dirty:t,ctx:e}),s.$set(n)},i(e){t||(d(s.$$.fragment,e),t=!0)},o(e){f(s.$$.fragment,e),t=!1},d(e){g(s,e)}}}function E(e){let s,t;return s=new D({props:{a:{grow:!0},$$slots:{default:[P]},$$scope:{ctx:e}}}),s.$on("click",e[6]),{c(){o(s.$$.fragment)},l(e){r(s.$$.fragment,e)},m(e,n){i(s,e,n),t=!0},p(e,t){const n={};1024&t&&(n.$$scope={dirty:t,ctx:e}),s.$set(n)},i(e){t||(d(s.$$.fragment,e),t=!0)},o(e){f(s.$$.fragment,e),t=!1},d(e){g(s,e)}}}function I(e){let s;return{c(){s=_("Sync All")},l(e){s=v(e,"Sync All")},m(e,t){$(e,s,t)},d(e){e&&m(s)}}}function P(e){let s;return{c(){s=_("Clear Space")},l(e){s=v(e,"Clear Space")},m(e,t){$(e,s,t)},d(e){e&&m(s)}}}function V(e){let s,t,n,a,o,r,i,g,u,p,h,A,B,C,M,R,D,I,P,V,q,G,H,J,K,Q,T=(e[0].matching_files||"None")+"",z=(e[0].differences_found||"None")+"",O=(e[0].files_missing||"None")+"",W=(e[1]?e[1].length:"N/A")+"",X=(e[0].errors_while_checking||"None")+"";const Y=[E,U,L],Z=[];function ee(e,s){return e[0].differences_found||e[0].errors_while_checking||!e[2]||e[0].files_missing||0==e[1].length?0!=e[1].length?1:2:0}return H=ee(e),J=Z[H]=Y[H](e),{c(){s=y("div"),t=_("Used Memory: "),n=_(e[3]),a=y("br"),o=_("\n    Available Memory: "),r=_(e[4]),i=y("br"),g=_("\n    Synced Files: "),u=_(T),p=y("br"),h=_("\n    Unsynced Files: "),A=_(z),B=_(" ("),C=_(O),M=_(") "),R=y("br"),D=_("\n    Local Files: "),I=_(W),P=y("br"),V=_(" \n    Notices: "),q=_(X),G=c(),J.c(),K=N(),this.h()},l(c){s=w(c,"DIV",{class:!0});var $=b(s);t=v($,"Used Memory: "),n=v($,e[3]),a=w($,"BR",{}),o=v($,"\n    Available Memory: "),r=v($,e[4]),i=w($,"BR",{}),g=v($,"\n    Synced Files: "),u=v($,T),p=w($,"BR",{}),h=v($,"\n    Unsynced Files: "),A=v($,z),B=v($," ("),C=v($,O),M=v($,") "),R=w($,"BR",{}),D=v($,"\n    Local Files: "),I=v($,W),P=w($,"BR",{}),V=v($," \n    Notices: "),q=v($,X),$.forEach(m),G=l(c),J.l(c),K=N(),this.h()},h(){S(s,"class","pb1")},m(e,c){$(e,s,c),x(s,t),x(s,n),x(s,a),x(s,o),x(s,r),x(s,i),x(s,g),x(s,u),x(s,p),x(s,h),x(s,A),x(s,B),x(s,C),x(s,M),x(s,R),x(s,D),x(s,I),x(s,P),x(s,V),x(s,q),$(e,G,c),Z[H].m(e,c),$(e,K,c),Q=!0},p(e,s){(!Q||8&s)&&F(n,e[3]),(!Q||16&s)&&F(r,e[4]),(!Q||1&s)&&T!==(T=(e[0].matching_files||"None")+"")&&F(u,T),(!Q||1&s)&&z!==(z=(e[0].differences_found||"None")+"")&&F(A,z),(!Q||1&s)&&O!==(O=(e[0].files_missing||"None")+"")&&F(C,O),(!Q||2&s)&&W!==(W=(e[1]?e[1].length:"N/A")+"")&&F(I,W),(!Q||1&s)&&X!==(X=(e[0].errors_while_checking||"None")+"")&&F(q,X);let t=H;H=ee(e),H===t?Z[H].p(e,s):(k(),f(Z[t],1,1,()=>{Z[t]=null}),j(),J=Z[H],J||(J=Z[H]=Y[H](e),J.c()),d(J,1),J.m(K.parentNode,K))},i(e){Q||(d(J),Q=!0)},o(e){f(J),Q=!1},d(e){e&&m(s),e&&m(G),Z[H].d(e),e&&m(K)}}}function q(e){let s,t,u,p;return s=new n({}),u=new a({props:{a:{grow:!0},className:"p06",$$slots:{default:[V]},$$scope:{ctx:e}}}),{c(){o(s.$$.fragment),t=c(),o(u.$$.fragment)},l(e){r(s.$$.fragment,e),t=l(e),r(u.$$.fragment,e)},m(e,n){i(s,e,n),$(e,t,n),i(u,e,n),p=!0},p(e,[s]){const t={};1055&s&&(t.$$scope={dirty:s,ctx:e}),u.$set(t)},i(e){p||(d(s.$$.fragment,e),d(u.$$.fragment,e),p=!0)},o(e){f(s.$$.fragment,e),f(u.$$.fragment,e),p=!1},d(e){g(s,e),e&&m(t),g(u,e)}}}function G(e,s,t){let n;u(e,C,e=>t(8,n=e));let a,o,c,{data:r={}}=s,l=[],i=!1;function $(){return new Promise((e,s)=>{A.set({type:"wait",message:"Checking Drive"}),B.get("/sync?as=json",{}).then(s=>{t(0,r=s.data),A.set(null),e(),B.get("/usb/recordings?as=json").then(e=>{t(1,l=e.data),console.log("[sync/index.svelte] 🗄✅  listed local files:",l.length),t(2,i=!0)}).catch(e=>{console.log("[sync/index.svelte] 🗄❌  could not list local files:",e)})}).catch(e=>{A.set({type:"error",...e.response.data}),s()})})}return p(async()=>{$()}),e.$$set=e=>{"data"in e&&t(0,r=e.data)},e.$$.update=()=>{256&e.$$.dirty&&t(7,a=n.drives.find(e=>"/home/pi/pdac/usb"==e._mounted)||{}),128&e.$$.dirty&&t(3,o=h(1e3*a._used).auto+" ("+a._capacity+")"),128&e.$$.dirty&&t(4,c=h(1e3*a._available).auto)},[r,l,i,o,c,function(){A.set({type:"wait",message:"Syncing Files<br />Please wait..."}),B.post("/sync?as=json",{}).then(e=>{$().finally(()=>{A.set({type:"success",message:e.data,actions:[["Sessions","/session"],["Close","/sync"]]})})}).catch(e=>{A.set({type:"error",...e.response.data})})},function(){A.set({type:"wait",message:"Deleting Local Files"}),B.post("/sync/clearup?as=json",{}).then(e=>{console.log(e),setTimeout(()=>{$().finally(()=>{A.set(null)})},1e3)}).catch(e=>{A.set({type:"error",...e.response.data})})}]}export default class extends e{constructor(e){super(),s(this,e,G,q,t,{data:0})}}
