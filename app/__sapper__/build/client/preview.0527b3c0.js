import{S as t,i as e,s,_ as n,c as r,b as o,f as i,h as a,j as c,k as l,n as $,e as h,a as f,g,M as u,$ as d,o as m,a0 as p,A as v,Z as w,r as x,u as y,v as A,x as B,y as E,z,m as C,E as D,a1 as L,D as V,F as M,C as S}from"./client.721c2dc2.js";import{G as _}from"./GroupBlock.65fb185c.js";import{W as N}from"./WebCam.c3b0865e.js";function b(t){let e,s;return{c(){e=n("svg"),s=n("path"),this.h()},l(t){e=r(t,"svg",{width:!0,height:!0,viewBox:!0},1);var n=o(e);s=r(n,"path",{d:!0,fill:!0},1),o(s).forEach(i),n.forEach(i),this.h()},h(){a(s,"d","M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"),a(s,"fill",t[2]),a(e,"width",t[0]),a(e,"height",t[1]),a(e,"viewBox",t[3])},m(t,n){c(t,e,n),l(e,s)},p(t,[n]){4&n&&a(s,"fill",t[2]),1&n&&a(e,"width",t[0]),2&n&&a(e,"height",t[1]),8&n&&a(e,"viewBox",t[3])},i:$,o:$,d(t){t&&i(e)}}}function j(t,e,s){let{size:n="1em"}=e,{width:r=n}=e,{height:o=n}=e,{color:i="currentColor"}=e,{viewBox:a="0 0 24 24"}=e;return t.$$set=t=>{"size"in t&&s(4,n=t.size),"width"in t&&s(0,r=t.width),"height"in t&&s(1,o=t.height),"color"in t&&s(2,i=t.color),"viewBox"in t&&s(3,a=t.viewBox)},[r,o,i,a,n]}class k extends t{constructor(t){super(),e(this,t,j,b,s,{size:4,width:0,height:1,color:2,viewBox:3})}}function q(t){let e,s,n,d,m,p,v,w,x;return{c(){e=h("div"),s=h("div"),n=h("div"),d=h("span"),m=f(),p=h("div"),v=h("span"),this.h()},l(t){e=r(t,"DIV",{class:!0,style:!0});var a=o(e);s=r(a,"DIV",{class:!0});var c=o(s);n=r(c,"DIV",{class:!0});var l=o(n);d=r(l,"SPAN",{style:!0,class:!0}),o(d).forEach(i),l.forEach(i),m=g(c),p=r(c,"DIV",{class:!0});var $=o(p);v=r($,"SPAN",{style:!0,class:!0}),o(v).forEach(i),$.forEach(i),c.forEach(i),a.forEach(i),this.h()},h(){a(d,"style",t[1]),a(d,"class","svelte-1lgc7gn"),a(n,"class","left meter svelte-1lgc7gn"),a(v,"style",t[1]),a(v,"class","svelte-1lgc7gn"),a(p,"class","right meter svelte-1lgc7gn"),a(s,"class","inner svelte-1lgc7gn"),a(e,"class","audio-levels svelte-1lgc7gn"),a(e,"style",t[0])},m(r,o){c(r,e,o),l(e,s),l(s,n),l(n,d),l(s,m),l(s,p),l(p,v),w||(x=u(e,"click",t[3]),w=!0)},p(t,[s]){2&s&&a(d,"style",t[1]),2&s&&a(v,"style",t[1]),1&s&&a(e,"style",t[0])},i:$,o:$,d(t){t&&i(e),w=!1,x()}}}function F(t,e,s){let n,r,o=0,i=0,{style:a}=e,{orientation:c="vertical"}=e;function l(){s(4,o=i),window.requestAnimationFrame(l)}return d(()=>{n&&n.getTracks().forEach((function(t){console.log("[AudioLevels] 🔈☠️  destroying stream:",t),t.stop()}))}),m(async()=>{navigator.mediaDevices&&(console.log("YOYOYO"),navigator.mediaDevices.getUserMedia({audio:!0,video:!1}).then((function(t){n=t,console.log("[AudioLevels] 🔈✅  successfully opened",t);const e=new AudioContext,s=e.createAnalyser(),r=e.createMediaStreamSource(t),o=e.createScriptProcessor(2048,1,1);s.smoothingTimeConstant=.8,s.fftSize=1024,r.connect(s),s.connect(o),o.connect(e.destination),window.requestAnimationFrame(l),o.onaudioprocess=function(){var t=new Uint8Array(s.frequencyBinCount);s.getByteFrequencyData(t);for(var e=0,n=t.length,r=0;r<n;r++)e+=t[r];i=Math.round(e/n)}})).catch((function(t){console.error(t)})))}),t.$$set=t=>{"style"in t&&s(0,a=t.style),"orientation"in t&&s(2,c=t.orientation)},t.$$.update=()=>{t.$$.dirty,16&t.$$.dirty&&s(1,r=`height: ${o}%`)},[a,r,c,function(e){p(t,e)}]}class I extends t{constructor(t){super(),e(this,t,F,q,s,{style:0,orientation:2})}}function H(t){let e,s;return{c(){e=n("svg"),s=n("path"),this.h()},l(t){e=r(t,"svg",{width:!0,height:!0,viewBox:!0},1);var n=o(e);s=r(n,"path",{d:!0,fill:!0},1),o(s).forEach(i),n.forEach(i),this.h()},h(){a(s,"d","M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"),a(s,"fill",t[2]),a(e,"width",t[0]),a(e,"height",t[1]),a(e,"viewBox",t[3])},m(t,n){c(t,e,n),l(e,s)},p(t,[n]){4&n&&a(s,"fill",t[2]),1&n&&a(e,"width",t[0]),2&n&&a(e,"height",t[1]),8&n&&a(e,"viewBox",t[3])},i:$,o:$,d(t){t&&i(e)}}}function O(t,e,s){let{size:n="1em"}=e,{width:r=n}=e,{height:o=n}=e,{color:i="currentColor"}=e,{viewBox:a="0 0 24 24"}=e;return t.$$set=t=>{"size"in t&&s(4,n=t.size),"width"in t&&s(0,r=t.width),"height"in t&&s(1,o=t.height),"color"in t&&s(2,i=t.color),"viewBox"in t&&s(3,a=t.viewBox)},[r,o,i,a,n]}class P extends t{constructor(t){super(),e(this,t,O,H,s,{size:4,width:0,height:1,color:2,viewBox:3})}}function Y(t){let e,s,n,l;return s=new L({}),{c(){e=h("a"),x(s.$$.fragment),this.h()},l(t){e=r(t,"A",{href:!0});var n=o(e);y(s.$$.fragment,n),n.forEach(i),this.h()},h(){a(e,"href",n="/session/"+t[0].url)},m(t,n){c(t,e,n),A(s,e,null),l=!0},p(t,s){(!l||1&s&&n!==(n="/session/"+t[0].url))&&a(e,"href",n)},i(t){l||(B(s.$$.fragment,t),l=!0)},o(t){E(s.$$.fragment,t),l=!1},d(t){t&&i(e),z(s)}}}function Z(t){let e,s;return e=new N({props:{width:"360px",height:"240px",focus:t[0].point_of_interest}}),{c(){x(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,n){A(e,t,n),s=!0},p(t,s){const n={};1&s&&(n.focus=t[0].point_of_interest),e.$set(n)},i(t){s||(B(e.$$.fragment,t),s=!0)},o(t){E(e.$$.fragment,t),s=!1},d(t){z(e,t)}}}function G(t){let e,s,n,r;return e=new I({props:{style:"height: 100%"}}),n=new k({props:{size:"2em"}}),{c(){x(e.$$.fragment),s=f(),x(n.$$.fragment)},l(t){y(e.$$.fragment,t),s=g(t),y(n.$$.fragment,t)},m(t,o){A(e,t,o),c(t,s,o),A(n,t,o),r=!0},p:$,i(t){r||(B(e.$$.fragment,t),B(n.$$.fragment,t),r=!0)},o(t){E(e.$$.fragment,t),E(n.$$.fragment,t),r=!1},d(t){z(e,t),t&&i(s),z(n,t)}}}function T(t){let e,s,n,r;const o=[G,Z],a=[];function l(t,e){return t[1]?0:1}return e=l(t),s=a[e]=o[e](t),{c(){s.c(),n=V()},l(t){s.l(t),n=V()},m(t,s){a[e].m(t,s),c(t,n,s),r=!0},p(t,r){let i=e;e=l(t),e===i?a[e].p(t,r):(M(),E(a[i],1,1,()=>{a[i]=null}),S(),s=a[e],s||(s=a[e]=o[e](t),s.c()),B(s,1),s.m(n.parentNode,n))},i(t){r||(B(s),r=!0)},o(t){E(s),r=!1},d(t){a[e].d(t),t&&i(n)}}}function U(t){let e,s,n,l;return s=new P({}),{c(){e=h("a"),x(s.$$.fragment),this.h()},l(t){e=r(t,"A",{href:!0});var n=o(e);y(s.$$.fragment,n),n.forEach(i),this.h()},h(){a(e,"href",n="/session/"+t[0].url+"/1")},m(t,n){c(t,e,n),A(s,e,null),l=!0},p(t,s){(!l||1&s&&n!==(n="/session/"+t[0].url+"/1"))&&a(e,"href",n)},i(t){l||(B(s.$$.fragment,t),l=!0)},o(t){E(s.$$.fragment,t),l=!1},d(t){t&&i(e),z(s)}}}function W(t){let e,s,n,r,o,a;return e=new D({props:{a:{grow:!0},$$slots:{default:[Y]},$$scope:{ctx:t}}}),n=new _({props:{a:{grow:!1,width:"360px"},className:"align-center",style:"height:240px;",$$slots:{default:[T]},$$scope:{ctx:t}}}),o=new D({props:{a:{grow:!0},$$slots:{default:[U]},$$scope:{ctx:t}}}),{c(){x(e.$$.fragment),s=f(),x(n.$$.fragment),r=f(),x(o.$$.fragment)},l(t){y(e.$$.fragment,t),s=g(t),y(n.$$.fragment,t),r=g(t),y(o.$$.fragment,t)},m(t,i){A(e,t,i),c(t,s,i),A(n,t,i),c(t,r,i),A(o,t,i),a=!0},p(t,s){const r={};17&s&&(r.$$scope={dirty:s,ctx:t}),e.$set(r);const i={};19&s&&(i.$$scope={dirty:s,ctx:t}),n.$set(i);const a={};17&s&&(a.$$scope={dirty:s,ctx:t}),o.$set(a)},i(t){a||(B(e.$$.fragment,t),B(n.$$.fragment,t),B(o.$$.fragment,t),a=!0)},o(t){E(e.$$.fragment,t),E(n.$$.fragment,t),E(o.$$.fragment,t),a=!1},d(t){z(e,t),t&&i(s),z(n,t),t&&i(r),z(o,t)}}}function J(t){let e,s;return e=new w({props:{className:"p06",$$slots:{default:[W]},$$scope:{ctx:t}}}),{c(){x(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,n){A(e,t,n),s=!0},p(t,[s]){const n={};19&s&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){s||(B(e.$$.fragment,t),s=!0)},o(t){E(e.$$.fragment,t),s=!1},d(t){z(e,t)}}}async function K(t,e){return v(t,e,this)}function Q(t,e,s){const{page:n}=C();let r,o,{data:i}=e;return t.$$set=t=>{"data"in t&&s(2,i=t.data)},t.$$.update=()=>{4&t.$$.dirty&&s(0,r=i[0]),1&t.$$.dirty&&s(1,o="sound"==r.point_of_interest)},[r,o,i]}export default class extends t{constructor(t){super(),e(this,t,Q,J,s,{data:2})}}export{K as preload};
