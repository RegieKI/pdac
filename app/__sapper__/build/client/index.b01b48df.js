import{A as s,S as t,i as a,s as n,B as e,e as r,t as c,a as l,v as o,c as i,b as $,d,g as f,f as m,w as h,h as p,j as u,k as g,x as N,H as w,y as k,z as x,C as y,K as A,J as E,l as v,u as C,L as B,p as O}from"./client.61e270f9.js";function b(s){let t,a,n,e,E,v,O,b,S,M,U,W=(s[1].wlan0.ssid?s[1].wlan0.ssid:"NONE")+"",z=(s[0].ssid?s[0].ssid:"NONE")+"",D=s[0].ssid&&L(s);return M=new C({props:{a:{grow:!0},className:"mlr06 pb1",$$slots:{default:[j]},$$scope:{ctx:s}}}),{c(){t=r("div"),a=c("WLAN: "),n=c(W),e=l(),E=r("br"),v=c("\n    USB: "),O=c(z),b=l(),D&&D.c(),S=l(),o(M.$$.fragment),this.h()},l(s){t=i(s,"DIV",{class:!0});var r=$(t);a=d(r,"WLAN: "),n=d(r,W),e=f(r),E=i(r,"BR",{}),v=d(r,"\n    USB: "),O=d(r,z),r.forEach(m),b=f(s),D&&D.l(s),S=f(s),h(M.$$.fragment,s),this.h()},h(){p(t,"class","m06")},m(s,r){u(s,t,r),g(t,a),g(t,n),g(t,e),g(t,E),g(t,v),g(t,O),u(s,b,r),D&&D.m(s,r),u(s,S,r),N(M,s,r),U=!0},p(s,t){(!U||2&t)&&W!==(W=(s[1].wlan0.ssid?s[1].wlan0.ssid:"NONE")+"")&&w(n,W),(!U||1&t)&&z!==(z=(s[0].ssid?s[0].ssid:"NONE")+"")&&w(O,z),s[0].ssid?D?(D.p(s,t),1&t&&k(D,1)):(D=L(s),D.c(),k(D,1),D.m(S.parentNode,S)):D&&(B(),x(D,1,1,()=>{D=null}),A());const a={};4&t&&(a.$$scope={dirty:t,ctx:s}),M.$set(a)},i(s){U||(k(D),k(M.$$.fragment,s),U=!0)},o(s){x(D),x(M.$$.fragment,s),U=!1},d(s){s&&m(t),s&&m(b),D&&D.d(s),s&&m(S),y(M,s)}}}function L(s){let t,a;return t=new C({props:{a:{grow:!0},className:"mlr06",$$slots:{default:[S]},$$scope:{ctx:s}}}),{c(){o(t.$$.fragment)},l(s){h(t.$$.fragment,s)},m(s,n){N(t,s,n),a=!0},p(s,a){const n={};5&a&&(n.$$scope={dirty:a,ctx:s}),t.$set(n)},i(s){a||(k(t.$$.fragment,s),a=!0)},o(s){x(t.$$.fragment,s),a=!1},d(s){y(t,s)}}}function S(s){let t,a,n;return{c(){t=r("a"),a=c("Connect Automatically"),this.h()},l(s){t=i(s,"A",{href:!0});var n=$(t);a=d(n,"Connect Automatically"),n.forEach(m),this.h()},h(){p(t,"href",n="/network/connect?ssid="+s[0].ssid+"&psk="+s[0].psk)},m(s,n){u(s,t,n),g(t,a)},p(s,a){1&a&&n!==(n="/network/connect?ssid="+s[0].ssid+"&psk="+s[0].psk)&&p(t,"href",n)},d(s){s&&m(t)}}}function j(s){let t,a;return{c(){t=r("a"),a=c("Connect Manually"),this.h()},l(s){t=i(s,"A",{href:!0});var n=$(t);a=d(n,"Connect Manually"),n.forEach(m),this.h()},h(){p(t,"href","/network/list")},m(s,n){u(s,t,n),g(t,a)},d(s){s&&m(t)}}}function M(s){let t,a,n,r;t=new e({});let c=s[1]&&b(s);return{c(){o(t.$$.fragment),a=l(),c&&c.c(),n=E()},l(s){h(t.$$.fragment,s),a=f(s),c&&c.l(s),n=E()},m(s,e){N(t,s,e),u(s,a,e),c&&c.m(s,e),u(s,n,e),r=!0},p(s,[t]){s[1]?c?(c.p(s,t),2&t&&k(c,1)):(c=b(s),c.c(),k(c,1),c.m(n.parentNode,n)):c&&(B(),x(c,1,1,()=>{c=null}),A())},i(s){r||(k(t.$$.fragment,s),k(c),r=!0)},o(s){x(t.$$.fragment,s),x(c),r=!1},d(s){y(t,s),s&&m(a),c&&c.d(s),s&&m(n)}}}async function U(t,a){return s(t,a,this)}function W(s,t,a){let n;v(s,O,s=>a(1,n=s));let{data:e}=t;return s.$$set=s=>{"data"in s&&a(0,e=s.data)},[e,n]}export default class extends t{constructor(s){super(),a(this,s,W,M,n,{data:0})}}export{U as preload};