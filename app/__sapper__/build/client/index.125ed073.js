import{A as s,S as a,i as t,s as n,B as e,e as r,t as c,a as l,v as o,c as i,b as $,d,g as f,f as m,w as h,h as p,j as u,k as g,x as N,H as w,y as k,z as x,C as y,K as A,J as E,l as v,u as C,L as b,p as B}from"./client.eb90a55a.js";function O(s){let a,t,n,e,E,v,B,O,S,M,U,W=(s[1].wlan0.ssid?s[1].wlan0.ssid:"NONE")+"",z=(s[0].ssid?s[0].ssid:"NONE")+"",D=s[0].ssid&&L(s);return M=new C({props:{a:{grow:!0},className:"mlr06 pb1",$$slots:{default:[j]},$$scope:{ctx:s}}}),{c(){a=r("div"),t=c("WLAN: "),n=c(W),e=l(),E=r("br"),v=c("\n    USB: "),B=c(z),O=l(),D&&D.c(),S=l(),o(M.$$.fragment),this.h()},l(s){a=i(s,"DIV",{class:!0});var r=$(a);t=d(r,"WLAN: "),n=d(r,W),e=f(r),E=i(r,"BR",{}),v=d(r,"\n    USB: "),B=d(r,z),r.forEach(m),O=f(s),D&&D.l(s),S=f(s),h(M.$$.fragment,s),this.h()},h(){p(a,"class","m06")},m(s,r){u(s,a,r),g(a,t),g(a,n),g(a,e),g(a,E),g(a,v),g(a,B),u(s,O,r),D&&D.m(s,r),u(s,S,r),N(M,s,r),U=!0},p(s,a){(!U||2&a)&&W!==(W=(s[1].wlan0.ssid?s[1].wlan0.ssid:"NONE")+"")&&w(n,W),(!U||1&a)&&z!==(z=(s[0].ssid?s[0].ssid:"NONE")+"")&&w(B,z),s[0].ssid?D?(D.p(s,a),1&a&&k(D,1)):(D=L(s),D.c(),k(D,1),D.m(S.parentNode,S)):D&&(b(),x(D,1,1,()=>{D=null}),A());const t={};4&a&&(t.$$scope={dirty:a,ctx:s}),M.$set(t)},i(s){U||(k(D),k(M.$$.fragment,s),U=!0)},o(s){x(D),x(M.$$.fragment,s),U=!1},d(s){s&&m(a),s&&m(O),D&&D.d(s),s&&m(S),y(M,s)}}}function L(s){let a,t;return a=new C({props:{a:{grow:!0},className:"mlr06",$$slots:{default:[S]},$$scope:{ctx:s}}}),{c(){o(a.$$.fragment)},l(s){h(a.$$.fragment,s)},m(s,n){N(a,s,n),t=!0},p(s,t){const n={};5&t&&(n.$$scope={dirty:t,ctx:s}),a.$set(n)},i(s){t||(k(a.$$.fragment,s),t=!0)},o(s){x(a.$$.fragment,s),t=!1},d(s){y(a,s)}}}function S(s){let a,t,n;return{c(){a=r("a"),t=c("Connect Automatically"),this.h()},l(s){a=i(s,"A",{href:!0});var n=$(a);t=d(n,"Connect Automatically"),n.forEach(m),this.h()},h(){p(a,"href",n="/network/connect?ssid="+s[0].ssid+"&psk="+s[0].psk)},m(s,n){u(s,a,n),g(a,t)},p(s,t){1&t&&n!==(n="/network/connect?ssid="+s[0].ssid+"&psk="+s[0].psk)&&p(a,"href",n)},d(s){s&&m(a)}}}function j(s){let a,t;return{c(){a=r("a"),t=c("Connect Manually"),this.h()},l(s){a=i(s,"A",{href:!0});var n=$(a);t=d(n,"Connect Manually"),n.forEach(m),this.h()},h(){p(a,"href","/network/list")},m(s,n){u(s,a,n),g(a,t)},d(s){s&&m(a)}}}function M(s){let a,t,n,r;a=new e({});let c=s[1]&&O(s);return{c(){o(a.$$.fragment),t=l(),c&&c.c(),n=E()},l(s){h(a.$$.fragment,s),t=f(s),c&&c.l(s),n=E()},m(s,e){N(a,s,e),u(s,t,e),c&&c.m(s,e),u(s,n,e),r=!0},p(s,[a]){s[1]?c?(c.p(s,a),2&a&&k(c,1)):(c=O(s),c.c(),k(c,1),c.m(n.parentNode,n)):c&&(b(),x(c,1,1,()=>{c=null}),A())},i(s){r||(k(a.$$.fragment,s),k(c),r=!0)},o(s){x(a.$$.fragment,s),x(c),r=!1},d(s){y(a,s),s&&m(t),c&&c.d(s),s&&m(n)}}}async function U(a,t){return s(a,t,this)}function W(s,a,t){let n;v(s,B,s=>t(1,n=s));let{data:e}=a;return s.$$set=s=>{"data"in s&&t(0,e=s.data)},[e,n]}export default class extends a{constructor(s){super(),t(this,s,W,M,n,{data:0})}}export{U as preload};
