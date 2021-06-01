import{S as e,i as t,s,e as n,a as i,t as o,c as r,b as a,f as l,g as c,d as $,h as d,j as f,k as u,H as m,n as g,W as h,o as p,a5 as w,r as x,A as v,a4 as y,v as b,J as N,w as A,x as E,z as B,K as I,y as S,C as z,l as _,m as k,a8 as C,L as D,Z as P,I as q,P as O,q as T,Q as V,a7 as R,u as H,p as M,R as j,U as L,V as F}from"./client.61e270f9.js";import{G as Z}from"./GroupBlock.ad167acd.js";function J(e){let t,s,h,p,w,x,v,y,b,N,A,E,B,I=(e[3]||"~")+"";return{c(){t=n("div"),s=n("span"),h=i(),p=n("span"),w=i(),x=n("span"),v=i(),y=n("span"),b=i(),N=n("span"),A=o(I),this.h()},l(e){t=r(e,"DIV",{class:!0,style:!0});var n=a(t);s=r(n,"SPAN",{class:!0,style:!0}),a(s).forEach(l),h=c(n),p=r(n,"SPAN",{class:!0,style:!0}),a(p).forEach(l),w=c(n),x=r(n,"SPAN",{class:!0,style:!0}),a(x).forEach(l),v=c(n),y=r(n,"SPAN",{class:!0,style:!0}),a(y).forEach(l),b=c(n),N=r(n,"SPAN",{class:!0});var i=a(N);A=$(i,I),i.forEach(l),n.forEach(l),this.h()},h(){d(s,"class","ring a svelte-1bdiq0m"),d(s,"style",e[5]),d(p,"class","ring b svelte-1bdiq0m"),d(p,"style",e[5]),d(x,"class","ring c svelte-1bdiq0m"),d(x,"style",e[5]),d(y,"class","bg svelte-1bdiq0m"),d(y,"style",e[5]),d(N,"class","txt svelte-1bdiq0m"),d(t,"class",E="timer "+e[1]+" "+(e[2]?"paused":"")+" svelte-1bdiq0m"),d(t,"style",B=""+(e[4]+e[0]))},m(e,n){f(e,t,n),u(t,s),u(t,h),u(t,p),u(t,w),u(t,x),u(t,v),u(t,y),u(t,b),u(t,N),u(N,A)},p(e,[n]){32&n&&d(s,"style",e[5]),32&n&&d(p,"style",e[5]),32&n&&d(x,"style",e[5]),32&n&&d(y,"style",e[5]),8&n&&I!==(I=(e[3]||"~")+"")&&m(A,I),6&n&&E!==(E="timer "+e[1]+" "+(e[2]?"paused":"")+" svelte-1bdiq0m")&&d(t,"class",E),17&n&&B!==(B=""+(e[4]+e[0]))&&d(t,"style",B)},i:g,o:g,d(e){e&&l(t)}}}function G(){for(var e=1;e<99999;e++)window.clearInterval(e),window.cancelAnimationFrame(e)}function U(e,t,s){const n=h();let i,o,r,a,l,c,{time:$}=t,{size:d=150}=t,{style:f}=t,{className:u="spin"}=t,{paused:m=!1}=t,{id:g=""}=t,x=!1;function v(e){"undefined"==typeof window||"undefined"==typeof document||x||(G(),s(6,$=e),s(3,i=$),o=$,a=0,r=new Date,console.log("[Timer] ⏰  onRestart:",g),window.requestAnimationFrame(y),n("start",o))}function y(){if("undefined"!=typeof window&&"undefined"!=typeof document){let e=!0;if(!m&&i>0){a=(new Date-r)/1e3;const t=i;o=$-a,s(3,i=parseInt(o,10)),i!=t&&(n("second",o),0==i&&(n("end",o),G(),e=!1))}else r=new Date-1e3*a;e&&!x&&(console.log("[Timer] ⏰  onFrame:",g),window.requestAnimationFrame(y))}else console.error("there is no window to request animation frame from")}return p(async()=>{x=!1,console.log("[Timer] ⏰✅  onMount (restart) :",g),v($)}),w(()=>{console.log("[Timer] ⏰❌  onDestroy:",g),x=!0}),e.$$set=e=>{"time"in e&&s(6,$=e.time),"size"in e&&s(7,d=e.size),"style"in e&&s(0,f=e.style),"className"in e&&s(1,u=e.className),"paused"in e&&s(2,m=e.paused),"id"in e&&s(8,g=e.id)},e.$$.update=()=>{128&e.$$.dirty&&s(4,l=`font-size:${.4*d}px;line-height:${d}px;border-radius:${d}px;width:${d}px;height:${d}px;flex-basis:${d}px;max-height:${d}px;`),128&e.$$.dirty&&s(5,c=`border-radius:${d}px;animation-delay:-${Math.floor(100*Math.random())}s;`)},[f,u,m,i,l,c,$,d,g,v]}class K extends e{constructor(e){super(),t(this,e,U,J,s,{time:6,size:7,style:0,className:1,paused:2,id:8,restart:9})}get restart(){return this.$$.ctx[9]}}function Q(e){let t,s;return{c(){t=x("svg"),s=x("path"),this.h()},l(e){t=r(e,"svg",{width:!0,height:!0,viewBox:!0},1);var n=a(t);s=r(n,"path",{d:!0,fill:!0},1),a(s).forEach(l),n.forEach(l),this.h()},h(){d(s,"d","M14,19H18V5H14M6,19H10V5H6V19Z"),d(s,"fill",e[2]),d(t,"width",e[0]),d(t,"height",e[1]),d(t,"viewBox",e[3])},m(e,n){f(e,t,n),u(t,s)},p(e,[n]){4&n&&d(s,"fill",e[2]),1&n&&d(t,"width",e[0]),2&n&&d(t,"height",e[1]),8&n&&d(t,"viewBox",e[3])},i:g,o:g,d(e){e&&l(t)}}}function W(e,t,s){let{size:n="1em"}=t,{width:i=n}=t,{height:o=n}=t,{color:r="currentColor"}=t,{viewBox:a="0 0 24 24"}=t;return e.$$set=e=>{"size"in e&&s(4,n=e.size),"width"in e&&s(0,i=e.width),"height"in e&&s(1,o=e.height),"color"in e&&s(2,r=e.color),"viewBox"in e&&s(3,a=e.viewBox)},[i,o,r,a,n]}class X extends e{constructor(e){super(),t(this,e,W,Q,s,{size:4,width:0,height:1,color:2,viewBox:3})}}function Y(e){let t,s;return{c(){t=x("svg"),s=x("path"),this.h()},l(e){t=r(e,"svg",{width:!0,height:!0,viewBox:!0},1);var n=a(t);s=r(n,"path",{d:!0,fill:!0},1),a(s).forEach(l),n.forEach(l),this.h()},h(){d(s,"d","M8,5.14V19.14L19,12.14L8,5.14Z"),d(s,"fill",e[2]),d(t,"width",e[0]),d(t,"height",e[1]),d(t,"viewBox",e[3])},m(e,n){f(e,t,n),u(t,s)},p(e,[n]){4&n&&d(s,"fill",e[2]),1&n&&d(t,"width",e[0]),2&n&&d(t,"height",e[1]),8&n&&d(t,"viewBox",e[3])},i:g,o:g,d(e){e&&l(t)}}}function ee(e,t,s){let{size:n="1em"}=t,{width:i=n}=t,{height:o=n}=t,{color:r="currentColor"}=t,{viewBox:a="0 0 24 24"}=t;return e.$$set=e=>{"size"in e&&s(4,n=e.size),"width"in e&&s(0,i=e.width),"height"in e&&s(1,o=e.height),"color"in e&&s(2,r=e.color),"viewBox"in e&&s(3,a=e.viewBox)},[i,o,r,a,n]}class te extends e{constructor(e){super(),t(this,e,ee,Y,s,{size:4,width:0,height:1,color:2,viewBox:3})}}function se(e){let t,s;return{c(){t=x("svg"),s=x("path"),this.h()},l(e){t=r(e,"svg",{width:!0,height:!0,viewBox:!0},1);var n=a(t);s=r(n,"path",{d:!0,fill:!0},1),a(s).forEach(l),n.forEach(l),this.h()},h(){d(s,"d","M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z"),d(s,"fill",e[2]),d(t,"width",e[0]),d(t,"height",e[1]),d(t,"viewBox",e[3])},m(e,n){f(e,t,n),u(t,s)},p(e,[n]){4&n&&d(s,"fill",e[2]),1&n&&d(t,"width",e[0]),2&n&&d(t,"height",e[1]),8&n&&d(t,"viewBox",e[3])},i:g,o:g,d(e){e&&l(t)}}}function ne(e,t,s){let{size:n="1em"}=t,{width:i=n}=t,{height:o=n}=t,{color:r="currentColor"}=t,{viewBox:a="0 0 24 24"}=t;return e.$$set=e=>{"size"in e&&s(4,n=e.size),"width"in e&&s(0,i=e.width),"height"in e&&s(1,o=e.height),"color"in e&&s(2,r=e.color),"viewBox"in e&&s(3,a=e.viewBox)},[i,o,r,a,n]}class ie extends e{constructor(e){super(),t(this,e,ne,se,s,{size:4,width:0,height:1,color:2,viewBox:3})}}function oe(e,t,s){const n=e.slice();return n[25]=t[s],n}function re(e){let t,s,n;function i(t){e[12].call(null,t)}let o={className:"spin",id:"INTRO: "+e[5].description,time:e[4].break_time,paused:e[0]};return void 0!==e[2]&&(o.restart=e[2]),t=new K({props:o}),j.push(()=>L(t,"restart",i)),t.$on("start",Ee),t.$on("second",e[7]),t.$on("end",e[8]),{c(){b(t.$$.fragment)},l(e){A(t.$$.fragment,e)},m(e,s){E(t,e,s),n=!0},p(e,n){const i={};32&n&&(i.id="INTRO: "+e[5].description),16&n&&(i.time=e[4].break_time),1&n&&(i.paused=e[0]),!s&&4&n&&(s=!0,i.restart=e[2],F(()=>s=!1)),t.$set(i)},i(e){n||(S(t.$$.fragment,e),n=!0)},o(e){B(t.$$.fragment,e),n=!1},d(e){z(t,e)}}}function ae(e){let t,s;return t=new K({props:{className:"pulse",id:"RECORD: "+e[5].description,time:e[5].time}}),t.$on("start",Be),t.$on("second",Ie),t.$on("end",e[9]),{c(){b(t.$$.fragment)},l(e){A(t.$$.fragment,e)},m(e,n){E(t,e,n),s=!0},p(e,s){const n={};32&s&&(n.id="RECORD: "+e[5].description),32&s&&(n.time=e[5].time),t.$set(n)},i(e){s||(S(t.$$.fragment,e),s=!0)},o(e){B(t.$$.fragment,e),s=!1},d(e){z(t,e)}}}function le(e){let t,s,n,i;const o=[ae,re],r=[];function a(e,t){return e[1]?0:1}return t=a(e),s=r[t]=o[t](e),{c(){s.c(),n=N()},l(e){s.l(e),n=N()},m(e,s){r[t].m(e,s),f(e,n,s),i=!0},p(e,i){let l=t;t=a(e),t===l?r[t].p(e,i):(D(),B(r[l],1,1,()=>{r[l]=null}),I(),s=r[t],s||(s=r[t]=o[t](e),s.c()),S(s,1),s.m(n.parentNode,n))},i(e){i||(S(s),i=!0)},o(e){B(s),i=!1},d(e){r[t].d(e),e&&l(n)}}}function ce(e){let t,s=e[5].example.data&&$e(e);return{c(){s&&s.c(),t=N()},l(e){s&&s.l(e),t=N()},m(e,n){s&&s.m(e,n),f(e,t,n)},p(e,n){e[5].example.data?s?s.p(e,n):(s=$e(e),s.c(),s.m(t.parentNode,t)):s&&(s.d(1),s=null)},d(e){s&&s.d(e),e&&l(t)}}}function $e(e){let t,s;return{c(){t=n("audio"),this.h()},l(e){t=r(e,"AUDIO",{style:!0,class:!0,src:!0,autoplay:!0,controls:!0}),a(t).forEach(l),this.h()},h(){P(t,"max-width","120px"),d(t,"class","mtb06 grow"),t.src!==(s=e[5].example.data.full_url)&&d(t,"src",s),t.autoplay=!0,t.controls=!0},m(e,s){f(e,t,s)},p(e,n){32&n&&t.src!==(s=e[5].example.data.full_url)&&d(t,"src",s)},d(e){e&&l(t)}}}function de(e){let t,s,i,c=e[25].tag_id.title+"";return{c(){t=n("span"),s=o(c),i=o(" ")},l(e){t=r(e,"SPAN",{});var n=a(t);s=$(n,c),i=$(n," "),n.forEach(l)},m(e,n){f(e,t,n),u(t,s),u(t,i)},p(e,t){32&t&&c!==(c=e[25].tag_id.title+"")&&m(s,c)},d(e){e&&l(t)}}}function fe(e){let t,s,g,h,p,w,x,v,y,b,N,A=e[4].exercises.length+"",E=e[5].description+"",B="sound"==e[4].point_of_interest&&e[5].example&&ce(e),I=e[5].tags,S=[];for(let t=0;t<I.length;t+=1)S[t]=de(oe(e,I,t));return{c(){B&&B.c(),t=i(),s=n("div"),g=n("div"),h=o(e[3]),p=o("/"),w=o(A),x=o(": "),v=o(E),y=i(),b=n("div"),N=o("Tags:\n      ");for(let e=0;e<S.length;e+=1)S[e].c();this.h()},l(n){B&&B.l(n),t=c(n),s=r(n,"DIV",{class:!0});var i=a(s);g=r(i,"DIV",{});var o=a(g);h=$(o,e[3]),p=$(o,"/"),w=$(o,A),x=$(o,": "),v=$(o,E),o.forEach(l),y=c(i),b=r(i,"DIV",{});var d=a(b);N=$(d,"Tags:\n      ");for(let e=0;e<S.length;e+=1)S[e].l(d);d.forEach(l),i.forEach(l),this.h()},h(){d(s,"class","grow")},m(e,n){B&&B.m(e,n),f(e,t,n),f(e,s,n),u(s,g),u(g,h),u(g,p),u(g,w),u(g,x),u(g,v),u(s,y),u(s,b),u(b,N);for(let e=0;e<S.length;e+=1)S[e].m(b,null)},p(e,s){if("sound"==e[4].point_of_interest&&e[5].example?B?B.p(e,s):(B=ce(e),B.c(),B.m(t.parentNode,t)):B&&(B.d(1),B=null),8&s&&m(h,e[3]),16&s&&A!==(A=e[4].exercises.length+"")&&m(w,A),32&s&&E!==(E=e[5].description+"")&&m(v,E),32&s){let t;for(I=e[5].tags,t=0;t<I.length;t+=1){const n=oe(e,I,t);S[t]?S[t].p(n,s):(S[t]=de(n),S[t].c(),S[t].m(b,null))}for(;t<S.length;t+=1)S[t].d(1);S.length=I.length}},d(e){B&&B.d(e),e&&l(t),e&&l(s),q(S,e)}}}function ue(e){let t,s,m,g,h,p,w;return s=new R({}),p=new y({props:{a:{grow:!0},className:"mlr06 pb06",$$slots:{default:[ve]},$$scope:{ctx:e}}}),{c(){t=n("a"),b(s.$$.fragment),m=o(" Back"),h=i(),b(p.$$.fragment),this.h()},l(e){t=r(e,"A",{style:!0,href:!0});var n=a(t);A(s.$$.fragment,n),m=$(n," Back"),n.forEach(l),h=c(e),A(p.$$.fragment,e),this.h()},h(){P(t,"position","absolute"),P(t,"top","50px"),P(t,"left","10px"),P(t,"flex-direction","row"),P(t,"align-items","center"),d(t,"href",g="/session/"+e[4].url)},m(e,n){f(e,t,n),E(s,t,null),u(t,m),f(e,h,n),E(p,e,n),w=!0},p(e,s){(!w||16&s&&g!==(g="/session/"+e[4].url))&&d(t,"href",g);const n={};268435477&s&&(n.$$scope={dirty:s,ctx:e}),p.$set(n)},i(e){w||(S(s.$$.fragment,e),S(p.$$.fragment,e),w=!0)},o(e){B(s.$$.fragment,e),B(p.$$.fragment,e),w=!1},d(e){e&&l(t),z(s),e&&l(h),z(p,e)}}}function me(e){let t,s;return t=new y({props:{a:{grow:!0},className:"mlr06",$$slots:{default:[be]},$$scope:{ctx:e}}}),{c(){b(t.$$.fragment)},l(e){A(t.$$.fragment,e)},m(e,n){E(t,e,n),s=!0},p(e,s){const n={};268435456&s&&(n.$$scope={dirty:s,ctx:e}),t.$set(n)},i(e){s||(S(t.$$.fragment,e),s=!0)},o(e){B(t.$$.fragment,e),s=!1},d(e){z(t,e)}}}function ge(e){let t,s,i;return s=new ie({}),{c(){t=n("span"),b(s.$$.fragment)},l(e){t=r(e,"SPAN",{});var n=a(t);A(s.$$.fragment,n),n.forEach(l)},m(e,n){f(e,t,n),E(s,t,null),i=!0},i(e){i||(S(s.$$.fragment,e),i=!0)},o(e){B(s.$$.fragment,e),i=!1},d(e){e&&l(t),z(s)}}}function he(e){let t,s,i;return s=new X({}),{c(){t=n("span"),b(s.$$.fragment)},l(e){t=r(e,"SPAN",{});var n=a(t);A(s.$$.fragment,n),n.forEach(l)},m(e,n){f(e,t,n),E(s,t,null),i=!0},i(e){i||(S(s.$$.fragment,e),i=!0)},o(e){B(s.$$.fragment,e),i=!1},d(e){e&&l(t),z(s)}}}function pe(e){let t,s,i;return s=new te({}),{c(){t=n("span"),b(s.$$.fragment)},l(e){t=r(e,"SPAN",{});var n=a(t);A(s.$$.fragment,n),n.forEach(l)},m(e,n){f(e,t,n),E(s,t,null),i=!0},i(e){i||(S(s.$$.fragment,e),i=!0)},o(e){B(s.$$.fragment,e),i=!1},d(e){e&&l(t),z(s)}}}function we(e){let t,s,n,i;const o=[pe,he],r=[];function a(e,t){return e[0]?0:1}return t=a(e),s=r[t]=o[t](e),{c(){s.c(),n=N()},l(e){s.l(e),n=N()},m(e,s){r[t].m(e,s),f(e,n,s),i=!0},p(e,i){let l=t;t=a(e),t!==l&&(D(),B(r[l],1,1,()=>{r[l]=null}),I(),s=r[t],s||(s=r[t]=o[t](e),s.c()),S(s,1),s.m(n.parentNode,n))},i(e){i||(S(s),i=!0)},o(e){B(s),i=!1},d(e){r[t].d(e),e&&l(n)}}}function xe(e){let t;return{c(){t=o("10s")},l(e){t=$(e,"10s")},m(e,s){f(e,t,s)},d(e){e&&l(t)}}}function ve(e){let t,s,n,o,r,a;return t=new H({props:{a:{grow:!0},$$slots:{default:[ge]},$$scope:{ctx:e}}}),t.$on("click",e[13]),n=new H({props:{a:{grow:!0},$$slots:{default:[we]},$$scope:{ctx:e}}}),n.$on("click",e[14]),r=new H({props:{a:{grow:!0},$$slots:{default:[xe]},$$scope:{ctx:e}}}),r.$on("click",e[15]),{c(){b(t.$$.fragment),s=i(),b(n.$$.fragment),o=i(),b(r.$$.fragment)},l(e){A(t.$$.fragment,e),s=c(e),A(n.$$.fragment,e),o=c(e),A(r.$$.fragment,e)},m(e,i){E(t,e,i),f(e,s,i),E(n,e,i),f(e,o,i),E(r,e,i),a=!0},p(e,s){const i={};268435456&s&&(i.$$scope={dirty:s,ctx:e}),t.$set(i);const o={};268435457&s&&(o.$$scope={dirty:s,ctx:e}),n.$set(o);const a={};268435456&s&&(a.$$scope={dirty:s,ctx:e}),r.$set(a)},i(e){a||(S(t.$$.fragment,e),S(n.$$.fragment,e),S(r.$$.fragment,e),a=!0)},o(e){B(t.$$.fragment,e),B(n.$$.fragment,e),B(r.$$.fragment,e),a=!1},d(e){z(t,e),e&&l(s),z(n,e),e&&l(o),z(r,e)}}}function ye(e){let t;return{c(){t=o("Panic!")},l(e){t=$(e,"Panic!")},m(e,s){f(e,t,s)},d(e){e&&l(t)}}}function be(e){let t,s;return t=new H({props:{a:{grow:!0,height:"60px"},className:"pb1",$$slots:{default:[ye]},$$scope:{ctx:e}}}),t.$on("click",e[10]),{c(){b(t.$$.fragment)},l(e){A(t.$$.fragment,e)},m(e,n){E(t,e,n),s=!0},p(e,s){const n={};268435456&s&&(n.$$scope={dirty:s,ctx:e}),t.$set(n)},i(e){s||(S(t.$$.fragment,e),s=!0)},o(e){B(t.$$.fragment,e),s=!1},d(e){z(t,e)}}}function Ne(e){let t,s,n,o,r,a,$,d;t=new Z({props:{className:"justify-center align-center",$$slots:{default:[le]},$$scope:{ctx:e}}}),n=new y({props:{a:{grow:!0},className:"align-center mlr06",$$slots:{default:[fe]},$$scope:{ctx:e}}});const u=[me,ue],m=[];function g(e,t){return e[1]?0:1}return r=g(e),a=m[r]=u[r](e),{c(){b(t.$$.fragment),s=i(),b(n.$$.fragment),o=i(),a.c(),$=N()},l(e){A(t.$$.fragment,e),s=c(e),A(n.$$.fragment,e),o=c(e),a.l(e),$=N()},m(e,i){E(t,e,i),f(e,s,i),E(n,e,i),f(e,o,i),m[r].m(e,i),f(e,$,i),d=!0},p(e,[s]){const i={};268435511&s&&(i.$$scope={dirty:s,ctx:e}),t.$set(i);const o={};268435512&s&&(o.$$scope={dirty:s,ctx:e}),n.$set(o);let l=r;r=g(e),r===l?m[r].p(e,s):(D(),B(m[l],1,1,()=>{m[l]=null}),I(),a=m[r],a||(a=m[r]=u[r](e),a.c()),S(a,1),a.m($.parentNode,$))},i(e){d||(S(t.$$.fragment,e),S(n.$$.fragment,e),S(a),d=!0)},o(e){B(t.$$.fragment,e),B(n.$$.fragment,e),B(a),d=!1},d(e){z(t,e),e&&l(s),z(n,e),e&&l(o),m[r].d(e),e&&l($)}}}async function Ae(e,t){return v(e,t,this)}function Ee(e){console.log("[session:slug:idx] 🖖🏁 intro start:",e.detail)}function Be(e){console.log("[session:slug:idx] 🔴🏁 record start:",e.detail)}function Ie(e){console.log("[session:slug:idx] 🔴 recording:",e.detail)}function Se(e,t,s){let n,i;_(e,M,e=>s(21,i=e));const{page:o}=k();_(e,o,e=>s(17,n=e));let r,{data:a}=t,l=!1,c=!1;function $(e){T.set({type:"wait",message:"Sending to AI..."});const t={action:"stop",type:"🤖",timestamp:(new Date).toISOString().substr(11,8),message:"stopping exercise"};if(console.log("[idx.svelte] 🤖 ⚡️ 💅  sending config STOP to AI...",t),window.websocketsClient){window.websocketsClient.send(JSON.stringify(t)),s(1,c=!1),T.set(null);const e=d>=u.exercises.length-1?"/session/"+u.url+"/complete":"/session/"+u.url+"/"+(f+1);console.log("[session:slug:idx] 🛫  goto: ",e,d,u.exercises.length),V(e)}else T.set({type:"error",message:"No connection to AI..."})}p(async()=>{console.log("[session:slug:idx] 🤳 idx:",f)});let d,f,u,m,g,h,w,x,v;return e.$$set=e=>{"data"in e&&s(11,a=e.data)},e.$$.update=()=>{131072&e.$$.dirty&&s(16,d=parseInt(n.params.idx,10)-1),131072&e.$$.dirty&&s(3,f=parseInt(n.params.idx,10)),2048&e.$$.dirty&&s(4,u=a[0]||{}),65552&e.$$.dirty&&s(5,m=u.exercises[d]?u.exercises[d].exercise_id:{example:{data:{}}}),32&e.$$.dirty&&s(18,g=m.tags||[]),262144&e.$$.dirty&&(h=g.map(e=>e.tag_id.url)),2359320&e.$$.dirty&&s(20,w=()=>{let e=i.hostname+"_";return e+=u.point_of_interest+"_",e+=u.url+"_",e+=f+"_",g.forEach((t,s)=>{t.tag_id&&(e+=t.tag_id.url,s<g.length-1&&(e+="-"))}),console.log("[SESSION] 🗯 🦆  returning ID:",e),e}),1048576&e.$$.dirty&&s(22,x=w()),6291456&e.$$.dirty&&(v={"session-id":`${x}_${C()}`,sources:{audio:{active:!0},video:{active:!0},heartrate:{active:!!i.backend.miband.connected}},sinks:{rstp:{active:!1},file:{active:!0},window:{active:!1}}})},[l,c,r,f,u,m,o,function(e){const t=parseInt(e.detail,10);if(t<=10&&0!=t){const s=1==t?"50 50 11 0.001":"100 100 1 0.001";console.log("Count",s,t),console.log("[session:slug:idx] 🖖 intro buzz:",e.detail),O.post("/buzz?as=json",{sequence:s})}},function(e){console.log("[session:slug:idx] 🖖 intro ended:",e.detail),function(e){T.set({type:"wait",status:"🤖",message:"Sending to AI..."});const t=["liebe","trauer","wut","freude","uberraschung","verachtung","angst"];let n="none";h.forEach(e=>{-1!=t.indexOf(e)&&(n=e)});const i={action:"start",title:n,tags:h,type:"🤖",length:m.time,timestamp:(new Date).toISOString().substr(11,8),message:`starting exercise: "${n}" ${m.time}s`};console.log("[idx.svelte] 🤖 ⚡️ 💅  sending config START to AI...",i),window.websocketsClient?(window.websocketsClient.send(JSON.stringify(i)),s(1,c=!0),T.set(null)):T.set({type:"error",status:"🤖",message:"No connection to AI..."})}()},function(e){console.log("[session:slug:idx] 🔴✅  recording ended:",e.detail),$()},$,a,function(e){r=e,s(2,r)},()=>r(u.break_time+1),()=>s(0,l=!l),()=>r(11)]}export default class extends e{constructor(e){super(),t(this,e,Se,Ne,s,{data:11})}}export{Ae as preload};
