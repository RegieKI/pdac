import{A as s,S as a,i as t,s as e,B as r,e as n,t as l,a as o,c,b as i,d as h,f,g as d,h as u,a9 as g,j as p,k as m,w as v,r as $,u as y,v as E,x as I,y as D,z as V,I as b,l as w,o as x,aa as N,ab as A}from"./client.721c2dc2.js";function S(s,a,t){const e=s.slice();return e[6]=a[t],e[8]=t,e}function j(s){let a,t,e,r,$,y,E,I,D,V=s[6].timestamp+"",b=s[6].message+"";return{c(){a=n("div"),t=n("span"),e=l("["),r=l(V),$=l("]"),y=o(),E=n("span"),I=l(b),D=o(),this.h()},l(s){a=c(s,"DIV",{});var n=i(a);t=c(n,"SPAN",{class:!0});var l=i(t);e=h(l,"["),r=h(l,V),$=h(l,"]"),l.forEach(f),y=d(n),E=c(n,"SPAN",{});var o=i(E);I=h(o,b),o.forEach(f),D=d(n),n.forEach(f),this.h()},h(){u(t,"class","fade"),g(E,"success",s[6].type==B),g(E,"bright",s[6].type==q),g(E,"error",s[6].type==z)},m(s,n){p(s,a,n),m(a,t),m(t,e),m(t,r),m(t,$),m(a,y),m(a,E),m(E,I),m(a,D)},p(s,a){4&a&&V!==(V=s[6].timestamp+"")&&v(r,V),4&a&&b!==(b=s[6].message+"")&&v(I,b),4&a&&g(E,"success",s[6].type==B),4&a&&g(E,"bright",s[6].type==q),4&a&&g(E,"error",s[6].type==z)},d(s){s&&f(a)}}}function k(s){let a,t,e,g,w,x,N,A,k,P,z;a=new r({});let B=s[2],q=[];for(let a=0;a<B.length;a+=1)q[a]=j(S(s,B,a));return{c(){$(a.$$.fragment),t=o(),e=n("div"),g=n("div"),w=l(s[0]),x=o(),N=n("div"),A=l(s[1]),k=o(),P=n("div");for(let s=0;s<q.length;s+=1)q[s].c();this.h()},l(r){y(a.$$.fragment,r),t=d(r),e=c(r,"DIV",{class:!0});var n=i(e);g=c(n,"DIV",{});var l=i(g);w=h(l,s[0]),l.forEach(f),x=d(n),N=c(n,"DIV",{});var o=i(N);A=h(o,s[1]),o.forEach(f),n.forEach(f),k=d(r),P=c(r,"DIV",{class:!0});var u=i(P);for(let s=0;s<q.length;s+=1)q[s].l(u);u.forEach(f),this.h()},h(){u(e,"class","plr1"),u(P,"class","konsole p04")},m(s,r){E(a,s,r),p(s,t,r),p(s,e,r),m(e,g),m(g,w),m(e,x),m(e,N),m(N,A),p(s,k,r),p(s,P,r);for(let s=0;s<q.length;s+=1)q[s].m(P,null);z=!0},p(s,[a]){if((!z||1&a)&&v(w,s[0]),(!z||2&a)&&v(A,s[1]),4&a){let t;for(B=s[2],t=0;t<B.length;t+=1){const e=S(s,B,t);q[t]?q[t].p(e,a):(q[t]=j(e),q[t].c(),q[t].m(P,null))}for(;t<q.length;t+=1)q[t].d(1);q.length=B.length}},i(s){z||(I(a.$$.fragment,s),z=!0)},o(s){D(a.$$.fragment,s),z=!1},d(s){V(a,s),s&&f(t),s&&f(e),s&&f(k),s&&f(P),b(q,s)}}}async function P(a,t){return s(a,t,this)}const z="❌",B="✅",q="⚡️";function C(s,a,t){let e,r;w(s,N,s=>t(5,e=s)),w(s,A,s=>t(2,r=s));let n,l,o,{data:c}=a;return x(async()=>{console.log("[overview.svelte] 👁 mounted overview...")}),s.$$set=s=>{"data"in s&&t(3,c=s.data)},s.$$.update=()=>{32&s.$$.dirty&&t(4,n=e.status||{}),16&s.$$.dirty&&t(0,l=n.title||"No title"),16&s.$$.dirty&&t(1,o=n.message||"No message")},[l,o,r,c]}export default class extends a{constructor(s){super(),t(this,s,C,k,e,{data:3})}}export{P as preload};
