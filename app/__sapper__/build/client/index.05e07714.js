import{A as s,S as t,i as a,s as n,B as e,e as r,t as c,a as l,r as o,c as i,b as $,d,g as f,f as m,u as h,h as p,j as u,k as g,v as N,w,x as k,y as x,z as y,C as E,D as A,l as v,E as C,F as B,p as O}from"./client.721c2dc2.js";function b(s){let t,a,n,e,A,v,O,b,j,L,M,U=(s[1].wlan0.ssid?s[1].wlan0.ssid:"NONE")+"",W=(s[0].ssid?s[0].ssid:"NONE")+"",z=s[0].ssid&&S(s);return L=new C({props:{a:{grow:!0},className:"mlr06 pb1",$$slots:{default:[D]},$$scope:{ctx:s}}}),{c(){t=r("div"),a=c("WLAN: "),n=c(U),e=l(),A=r("br"),v=c("\n    USB: "),O=c(W),b=l(),z&&z.c(),j=l(),o(L.$$.fragment),this.h()},l(s){t=i(s,"DIV",{class:!0});var r=$(t);a=d(r,"WLAN: "),n=d(r,U),e=f(r),A=i(r,"BR",{}),v=d(r,"\n    USB: "),O=d(r,W),r.forEach(m),b=f(s),z&&z.l(s),j=f(s),h(L.$$.fragment,s),this.h()},h(){p(t,"class","m06")},m(s,r){u(s,t,r),g(t,a),g(t,n),g(t,e),g(t,A),g(t,v),g(t,O),u(s,b,r),z&&z.m(s,r),u(s,j,r),N(L,s,r),M=!0},p(s,t){(!M||2&t)&&U!==(U=(s[1].wlan0.ssid?s[1].wlan0.ssid:"NONE")+"")&&w(n,U),(!M||1&t)&&W!==(W=(s[0].ssid?s[0].ssid:"NONE")+"")&&w(O,W),s[0].ssid?z?(z.p(s,t),1&t&&k(z,1)):(z=S(s),z.c(),k(z,1),z.m(j.parentNode,j)):z&&(B(),x(z,1,1,()=>{z=null}),E());const a={};4&t&&(a.$$scope={dirty:t,ctx:s}),L.$set(a)},i(s){M||(k(z),k(L.$$.fragment,s),M=!0)},o(s){x(z),x(L.$$.fragment,s),M=!1},d(s){s&&m(t),s&&m(b),z&&z.d(s),s&&m(j),y(L,s)}}}function S(s){let t,a;return t=new C({props:{a:{grow:!0},className:"mlr06",$$slots:{default:[j]},$$scope:{ctx:s}}}),{c(){o(t.$$.fragment)},l(s){h(t.$$.fragment,s)},m(s,n){N(t,s,n),a=!0},p(s,a){const n={};5&a&&(n.$$scope={dirty:a,ctx:s}),t.$set(n)},i(s){a||(k(t.$$.fragment,s),a=!0)},o(s){x(t.$$.fragment,s),a=!1},d(s){y(t,s)}}}function j(s){let t,a,n;return{c(){t=r("a"),a=c("Connect Automatically"),this.h()},l(s){t=i(s,"A",{href:!0});var n=$(t);a=d(n,"Connect Automatically"),n.forEach(m),this.h()},h(){p(t,"href",n="/network/connect?ssid="+s[0].ssid+"&psk="+s[0].psk)},m(s,n){u(s,t,n),g(t,a)},p(s,a){1&a&&n!==(n="/network/connect?ssid="+s[0].ssid+"&psk="+s[0].psk)&&p(t,"href",n)},d(s){s&&m(t)}}}function D(s){let t,a;return{c(){t=r("a"),a=c("Connect Manually"),this.h()},l(s){t=i(s,"A",{href:!0});var n=$(t);a=d(n,"Connect Manually"),n.forEach(m),this.h()},h(){p(t,"href","/network/list")},m(s,n){u(s,t,n),g(t,a)},d(s){s&&m(t)}}}function L(s){let t,a,n,r;t=new e({});let c=s[1]&&b(s);return{c(){o(t.$$.fragment),a=l(),c&&c.c(),n=A()},l(s){h(t.$$.fragment,s),a=f(s),c&&c.l(s),n=A()},m(s,e){N(t,s,e),u(s,a,e),c&&c.m(s,e),u(s,n,e),r=!0},p(s,[t]){s[1]?c?(c.p(s,t),2&t&&k(c,1)):(c=b(s),c.c(),k(c,1),c.m(n.parentNode,n)):c&&(B(),x(c,1,1,()=>{c=null}),E())},i(s){r||(k(t.$$.fragment,s),k(c),r=!0)},o(s){x(t.$$.fragment,s),x(c),r=!1},d(s){y(t,s),s&&m(a),c&&c.d(s),s&&m(n)}}}async function M(t,a){return s(t,a,this)}function U(s,t,a){let n;v(s,O,s=>a(1,n=s));let{data:e}=t;return s.$$set=s=>{"data"in s&&a(0,e=s.data)},[e,n]}export default class extends t{constructor(s){super(),a(this,s,U,L,n,{data:0})}}export{M as preload};
