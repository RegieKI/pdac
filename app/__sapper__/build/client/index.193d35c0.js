import{S as e,i as s,s as a,e as r,t as l,a as t,c,b as n,d as o,f,g as i,h,j as p,k as g,n as v,l as d,m as u,o as y,p as m,q as S}from"./client.1c296af1.js";function w(e){let s,a,d,u,y,m,S,w,$,x,A;return{c(){s=r("a"),a=l("Sessions"),d=t(),u=r("a"),y=l("Sync"),m=t(),S=r("a"),w=l("Overview (Stage)"),$=t(),x=r("a"),A=l("System"),this.h()},l(e){s=c(e,"A",{class:!0,rel:!0,href:!0});var r=n(s);a=o(r,"Sessions"),r.forEach(f),d=i(e),u=c(e,"A",{class:!0,rel:!0,href:!0});var l=n(u);y=o(l,"Sync"),l.forEach(f),m=i(e),S=c(e,"A",{class:!0,rel:!0,href:!0});var t=n(S);w=o(t,"Overview (Stage)"),t.forEach(f),$=i(e),x=c(e,"A",{class:!0,rel:!0,href:!0});var h=n(x);A=o(h,"System"),h.forEach(f),this.h()},h(){h(s,"class","grow flex align-center plr06"),h(s,"rel","prefetch"),h(s,"href","/session"),h(u,"class","grow flex align-center plr06"),h(u,"rel","prefetch"),h(u,"href","/sync"),h(S,"class","grow flex align-center plr06"),h(S,"rel","prefetch"),h(S,"href","/overview"),h(x,"class","grow flex align-center plr06"),h(x,"rel","prefetch"),h(x,"href","/system")},m(e,r){p(e,s,r),g(s,a),p(e,d,r),p(e,u,r),g(u,y),p(e,m,r),p(e,S,r),g(S,w),p(e,$,r),p(e,x,r),g(x,A)},p:v,i:v,o:v,d(e){e&&f(s),e&&f(d),e&&f(u),e&&f(m),e&&f(S),e&&f($),e&&f(x)}}}function $(e,s,a){let r,l;d(e,m,e=>a(1,r=e)),d(e,S,e=>a(4,l=e));const{page:t}=u();let c,n,o;return y(async()=>{console.log("[/:index.svelte] 📊 onMount main menu...")}),e.$$.update=()=>{2&e.$$.dirty&&a(0,c=r||{}),1&e.$$.dirty&&(n=c.wlan0||{}),1&e.$$.dirty&&(o=c.backend||{})},[]}export default class extends e{constructor(e){super(),s(this,e,$,w,a,{})}}
