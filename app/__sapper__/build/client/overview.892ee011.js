import{A as e,S as s,i as t,s as a,B as o,e as n,t as r,a as l,c,b as i,d as v,f as g,g as d,h as f,u as h,j as m,k as p,v as u,w as $,x as w,y,z as E,C as b,D as k,E as D,l as I,o as N,p as S,F as V}from"./client.bed04d7c.js";function x(e,s,t){const a=e.slice();return a[10]=s[t],a[12]=t,a}function A(e){let s,t,a,o,$,w,y,E,b,k=e[10].timestamp+"",D=e[10].message+"";return{c(){s=n("div"),t=n("span"),a=r("["),o=r(k),$=r("]"),w=l(),y=n("span"),E=r(D),b=l(),this.h()},l(e){s=c(e,"DIV",{});var n=i(s);t=c(n,"SPAN",{class:!0});var r=i(t);a=v(r,"["),o=v(r,k),$=v(r,"]"),r.forEach(g),w=d(n),y=c(n,"SPAN",{});var l=i(y);E=v(l,D),l.forEach(g),b=d(n),n.forEach(g),this.h()},h(){f(t,"class","fade"),h(y,"success",e[10].type==z),h(y,"fail",e[10].type==P)},m(e,n){m(e,s,n),p(s,t),p(t,a),p(t,o),p(t,$),p(s,w),p(s,y),p(y,E),p(s,b)},p(e,s){1&s&&k!==(k=e[10].timestamp+"")&&u(o,k),1&s&&D!==(D=e[10].message+"")&&u(E,D),1&s&&h(y,"success",e[10].type==z),1&s&&h(y,"fail",e[10].type==P)},d(e){e&&g(s)}}}function L(e){let s,t,a,h,I,N,S,V,L,j,P;s=new o({});let z=e[0],B=[];for(let s=0;s<z.length;s+=1)B[s]=A(x(e,z,s));return{c(){$(s.$$.fragment),t=l(),a=n("div"),h=n("div"),I=r(e[1]),N=l(),S=n("div"),V=r(e[2]),L=l(),j=n("div");for(let e=0;e<B.length;e+=1)B[e].c();this.h()},l(o){w(s.$$.fragment,o),t=d(o),a=c(o,"DIV",{class:!0});var n=i(a);h=c(n,"DIV",{});var r=i(h);I=v(r,e[1]),r.forEach(g),N=d(n),S=c(n,"DIV",{});var l=i(S);V=v(l,e[2]),l.forEach(g),n.forEach(g),L=d(o),j=c(o,"DIV",{class:!0});var f=i(j);for(let e=0;e<B.length;e+=1)B[e].l(f);f.forEach(g),this.h()},h(){f(a,"class","plr1"),f(j,"class","konsole p04")},m(e,o){y(s,e,o),m(e,t,o),m(e,a,o),p(a,h),p(h,I),p(a,N),p(a,S),p(S,V),m(e,L,o),m(e,j,o);for(let e=0;e<B.length;e+=1)B[e].m(j,null);P=!0},p(e,[s]){if((!P||2&s)&&u(I,e[1]),(!P||4&s)&&u(V,e[2]),1&s){let t;for(z=e[0],t=0;t<z.length;t+=1){const a=x(e,z,t);B[t]?B[t].p(a,s):(B[t]=A(a),B[t].c(),B[t].m(j,null))}for(;t<B.length;t+=1)B[t].d(1);B.length=z.length}},i(e){P||(E(s.$$.fragment,e),P=!0)},o(e){b(s.$$.fragment,e),P=!1},d(e){k(s,e),e&&g(t),e&&g(a),e&&g(L),e&&g(j),D(B,e)}}}async function j(s,t){return e(s,t,this)}const P="❌",z="✅";function B(e){console.log("[overview.svelte] 👁 ✅  opened websocket...",e.currentTarget.url)}function C(e){console.log("[overview.svelte] 👁 ❌  opened websocket...",e)}function F(e,s,t){let a,o;I(e,S,e=>t(6,a=e)),I(e,V,e=>t(0,o=e));let n,r,l,c,{data:i}=s,v={};function g(e){console.log("[overview.svelte] 👁 ✨  received websocket message...",e.data),function(e){try{const s=JSON.parse(e);V.update(e=>{for(e.unshift({timestamp:s.timestamp,type:s.type,message:s.message});e.length>80;)e.slice(1);return e}),console.log("[overview.svelte] 👁 ✨ ✅  parsed socket message:",o.length,o),t(5,v=s.config)}catch(e){console.log("[overview.svelte] 👁 ✨ ❌  error parsing message:",e.message)}}(e.data)}return N(async()=>{console.log("[overview.svelte] 👁 mounted overview..."),S.grab().then(()=>{const e=`ws://${a.hostname}.local:8765`;console.log("[overview.svelte] 👁 ⚡️  opening websocket...",e),n=new WebSocket(e),n.addEventListener("open",B),n.addEventListener("message",g),n.addEventListener("error",C)}).catch(e=>{console.log("[overview.svelte] 👁 ❌  could not grab info:",e.message)})}),e.$$set=e=>{"data"in e&&t(3,i=e.data)},e.$$.update=()=>{32&e.$$.dirty&&t(7,r=v.status||{}),128&e.$$.dirty&&t(1,l=r.title||"No title"),128&e.$$.dirty&&t(2,c=r.message||"No message")},[o,l,c,i]}export default class extends s{constructor(e){super(),t(this,e,F,L,a,{data:3})}}export{j as preload};