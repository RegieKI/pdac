import{A as t,S as e,i as s,s as n,B as a,O as o,v as r,a as c,w as $,g as l,x as i,j as f,y as m,z as g,C as p,f as u,m as d,l as y,o as w,n as k,q as x,P as C,Q as h}from"./client.1c296af1.js";import{K as q}from"./Keyboard.2cc577f3.js";function j(t){let e,s;return e=new q({props:{placeholder:t[1],text:t[2]}}),e.$on("submit",t[3]),{c(){r(e.$$.fragment)},l(t){$(e.$$.fragment,t)},m(t,n){i(e,t,n),s=!0},p:k,i(t){s||(m(e.$$.fragment,t),s=!0)},o(t){g(e.$$.fragment,t),s=!1},d(t){p(e,t)}}}function N(t){let e,s,n,d;return e=new a({}),n=new o({props:{className:"mlr06 keyboard-wrapper",a:{grow:!0},$$slots:{default:[j]},$$scope:{ctx:t}}}),{c(){r(e.$$.fragment),s=c(),r(n.$$.fragment)},l(t){$(e.$$.fragment,t),s=l(t),$(n.$$.fragment,t)},m(t,a){i(e,t,a),f(t,s,a),i(n,t,a),d=!0},p(t,[e]){const s={};64&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){d||(m(e.$$.fragment,t),m(n.$$.fragment,t),d=!0)},o(t){g(e.$$.fragment,t),g(n.$$.fragment,t),d=!1},d(t){p(e,t),t&&u(s),p(n,t)}}}async function b(e,s){return t(e,s,this)}function K(t,e,s){let n;const{page:a}=d();y(t,a,t=>s(5,n=t));let{data:o}=e,r="Password for "+n.query.ssid,c=n.query.psk||"";return w(async()=>{console.log(r,c)}),t.$$set=t=>{"data"in t&&s(4,o=t.data)},[a,r,c,async function(t,e){console.log("[NetworkConnect] 🌐  attempting connection to:",t,e,t.detail),x.set({type:"wait",message:"Connecting to "+n.query.ssid}),C.post("/network/connect?as=json",{ssid:n.query.ssid,psk:t.detail}).then(t=>{console.log("[NetworkConnect] ✅🌐  successfully connected:",t),h("/"),x.set(null)}).catch(t=>{console.log("[NetworkConnect] ❌🌐  errpr connecting:",t),x.set({type:"error",message:"Could not connect",status:403})})},o]}export default class extends e{constructor(t){super(),s(this,t,K,N,n,{data:4})}}export{b as preload};
