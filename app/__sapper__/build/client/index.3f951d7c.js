import{A as s,S as t,i as a,s as n,B as e,e as r,t as c,a as l,E as o,c as i,b as $,d,g as f,f as m,G as h,h as p,j as u,k as g,H as N,C as w,I as k,J as E,K as x,M as y,F as A,l as C,u as v,L as B,p as O}from"./client.e7012d37.js";function b(s){let t,a,n,e,A,C,O,b,M,j,I,U=(s[1].wlan0.ssid?s[1].wlan0.ssid:"NONE")+"",W=(s[0].ssid?s[0].ssid:"NONE")+"",D=s[0].ssid&&L(s);return j=new v({props:{a:{grow:!0},className:"mlr06 pb1",$$slots:{default:[S]},$$scope:{ctx:s}}}),{c(){t=r("div"),a=c("WLAN: "),n=c(U),e=l(),A=r("br"),C=c("\n    USB: "),O=c(W),b=l(),D&&D.c(),M=l(),o(j.$$.fragment),this.h()},l(s){t=i(s,"DIV",{class:!0});var r=$(t);a=d(r,"WLAN: "),n=d(r,U),e=f(r),A=i(r,"BR",{}),C=d(r,"\n    USB: "),O=d(r,W),r.forEach(m),b=f(s),D&&D.l(s),M=f(s),h(j.$$.fragment,s),this.h()},h(){p(t,"class","m06")},m(s,r){u(s,t,r),g(t,a),g(t,n),g(t,e),g(t,A),g(t,C),g(t,O),u(s,b,r),D&&D.m(s,r),u(s,M,r),N(j,s,r),I=!0},p(s,t){(!I||2&t)&&U!==(U=(s[1].wlan0.ssid?s[1].wlan0.ssid:"NONE")+"")&&w(n,U),(!I||1&t)&&W!==(W=(s[0].ssid?s[0].ssid:"NONE")+"")&&w(O,W),s[0].ssid?D?(D.p(s,t),1&t&&k(D,1)):(D=L(s),D.c(),k(D,1),D.m(M.parentNode,M)):D&&(B(),E(D,1,1,()=>{D=null}),y());const a={};4&t&&(a.$$scope={dirty:t,ctx:s}),j.$set(a)},i(s){I||(k(D),k(j.$$.fragment,s),I=!0)},o(s){E(D),E(j.$$.fragment,s),I=!1},d(s){s&&m(t),s&&m(b),D&&D.d(s),s&&m(M),x(j,s)}}}function L(s){let t,a;return t=new v({props:{a:{grow:!0},className:"mlr06",$$slots:{default:[M]},$$scope:{ctx:s}}}),{c(){o(t.$$.fragment)},l(s){h(t.$$.fragment,s)},m(s,n){N(t,s,n),a=!0},p(s,a){const n={};5&a&&(n.$$scope={dirty:a,ctx:s}),t.$set(n)},i(s){a||(k(t.$$.fragment,s),a=!0)},o(s){E(t.$$.fragment,s),a=!1},d(s){x(t,s)}}}function M(s){let t,a,n;return{c(){t=r("a"),a=c("Connect Automatically"),this.h()},l(s){t=i(s,"A",{href:!0});var n=$(t);a=d(n,"Connect Automatically"),n.forEach(m),this.h()},h(){p(t,"href",n="/network/connect?ssid="+s[0].ssid+"&psk="+s[0].psk)},m(s,n){u(s,t,n),g(t,a)},p(s,a){1&a&&n!==(n="/network/connect?ssid="+s[0].ssid+"&psk="+s[0].psk)&&p(t,"href",n)},d(s){s&&m(t)}}}function S(s){let t,a;return{c(){t=r("a"),a=c("Connect Manually"),this.h()},l(s){t=i(s,"A",{href:!0});var n=$(t);a=d(n,"Connect Manually"),n.forEach(m),this.h()},h(){p(t,"href","/network/list")},m(s,n){u(s,t,n),g(t,a)},d(s){s&&m(t)}}}function j(s){let t,a,n,r;t=new e({});let c=s[1]&&b(s);return{c(){o(t.$$.fragment),a=l(),c&&c.c(),n=A()},l(s){h(t.$$.fragment,s),a=f(s),c&&c.l(s),n=A()},m(s,e){N(t,s,e),u(s,a,e),c&&c.m(s,e),u(s,n,e),r=!0},p(s,[t]){s[1]?c?(c.p(s,t),2&t&&k(c,1)):(c=b(s),c.c(),k(c,1),c.m(n.parentNode,n)):c&&(B(),E(c,1,1,()=>{c=null}),y())},i(s){r||(k(t.$$.fragment,s),k(c),r=!0)},o(s){E(t.$$.fragment,s),E(c),r=!1},d(s){x(t,s),s&&m(a),c&&c.d(s),s&&m(n)}}}async function I(t,a){return s(t,a,this)}function U(s,t,a){let n;C(s,O,s=>a(1,n=s));let{data:e}=t;return s.$$set=s=>{"data"in s&&a(0,e=s.data)},[e,n]}export default class extends t{constructor(s){super(),a(this,s,U,j,n,{data:0})}}export{I as preload};