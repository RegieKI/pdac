import{A as t,S as e,i as s,s as $,B as n,R as a,w as o,a as r,x as c,g as f,y as m,j as l,z as g,C as p,D as i,f as h,l as d,a8 as u,$ as x,e as w,t as y,c as b,b as S,d as D,h as j,k,r as v,p as A,I as C,v as N}from"./client.bed04d7c.js";function E(t){let e;return{c(){e=y("Shutdown")},l(t){e=D(t,"Shutdown")},m(t,s){l(t,e,s)},d(t){t&&h(e)}}}function H(t){let e;return{c(){e=y("Reboot")},l(t){e=D(t,"Reboot")},m(t,s){l(t,e,s)},d(t){t&&h(e)}}}function B(t){let e,s,$,n;return e=new C({props:{a:{height:"80px",grow:!0},$$slots:{default:[E]},$$scope:{ctx:t}}}),e.$on("click",t[4]),$=new C({props:{a:{height:"80px",grow:!0},$$slots:{default:[H]},$$scope:{ctx:t}}}),$.$on("click",t[3]),{c(){o(e.$$.fragment),s=r(),o($.$$.fragment)},l(t){c(e.$$.fragment,t),s=f(t),c($.$$.fragment,t)},m(t,a){m(e,t,a),l(t,s,a),m($,t,a),n=!0},p(t,s){const n={};512&s&&(n.$$scope={dirty:s,ctx:t}),e.$set(n);const a={};512&s&&(a.$$scope={dirty:s,ctx:t}),$.$set(a)},i(t){n||(g(e.$$.fragment,t),g($.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),p($.$$.fragment,t),n=!1},d(t){i(e,t),t&&h(s),i($,t)}}}function R(t){let e;return{c(){e=y("Calibrate Screen")},l(t){e=D(t,"Calibrate Screen")},m(t,s){l(t,e,s)},d(t){t&&h(e)}}}function I(t){let e;return{c(){e=y("Update System")},l(t){e=D(t,"Update System")},m(t,s){l(t,e,s)},d(t){t&&h(e)}}}function M(t){let e,s,$,n;return e=new C({props:{a:{height:"80px",grow:!0},$$slots:{default:[R]},$$scope:{ctx:t}}}),e.$on("click",t[2]),$=new C({props:{a:{height:"80px",grow:!0},$$slots:{default:[I]},$$scope:{ctx:t}}}),$.$on("click",t[6]),{c(){o(e.$$.fragment),s=r(),o($.$$.fragment)},l(t){c(e.$$.fragment,t),s=f(t),c($.$$.fragment,t)},m(t,a){m(e,t,a),l(t,s,a),m($,t,a),n=!0},p(t,s){const n={};512&s&&(n.$$scope={dirty:s,ctx:t}),e.$set(n);const a={};512&s&&(a.$$scope={dirty:s,ctx:t}),$.$set(a)},i(t){n||(g(e.$$.fragment,t),g($.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),p($.$$.fragment,t),n=!1},d(t){i(e,t),t&&h(s),i($,t)}}}function O(t){let e,s;return{c(){e=w("a"),s=y("Hostname"),this.h()},l(t){e=b(t,"A",{rel:!0,href:!0});var $=S(e);s=D($,"Hostname"),$.forEach(h),this.h()},h(){j(e,"rel","prefetch"),j(e,"href","/system/hostname")},m(t,$){l(t,e,$),k(e,s)},d(t){t&&h(e)}}}function T(t){let e,s;return{c(){e=w("a"),s=y("Test Camera"),this.h()},l(t){e=b(t,"A",{rel:!0,href:!0});var $=S(e);s=D($,"Test Camera"),$.forEach(h),this.h()},h(){j(e,"rel","prefetch"),j(e,"href","/camera")},m(t,$){l(t,e,$),k(e,s)},d(t){t&&h(e)}}}function U(t){let e,s,$,n;return e=new C({props:{a:{height:"80px",grow:!0},$$slots:{default:[O]},$$scope:{ctx:t}}}),$=new C({props:{a:{height:"80px",grow:!0},$$slots:{default:[T]},$$scope:{ctx:t}}}),{c(){o(e.$$.fragment),s=r(),o($.$$.fragment)},l(t){c(e.$$.fragment,t),s=f(t),c($.$$.fragment,t)},m(t,a){m(e,t,a),l(t,s,a),m($,t,a),n=!0},p(t,s){const n={};512&s&&(n.$$scope={dirty:s,ctx:t}),e.$set(n);const a={};512&s&&(a.$$scope={dirty:s,ctx:t}),$.$set(a)},i(t){n||(g(e.$$.fragment,t),g($.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),p($.$$.fragment,t),n=!1},d(t){i(e,t),t&&h(s),i($,t)}}}function z(t){let e,s;return{c(){e=w("a"),s=y("MiBand"),this.h()},l(t){e=b(t,"A",{rel:!0,href:!0});var $=S(e);s=D($,"MiBand"),$.forEach(h),this.h()},h(){j(e,"rel","prefetch"),j(e,"href","/system/miband")},m(t,$){l(t,e,$),k(e,s)},d(t){t&&h(e)}}}function V(t){let e,s,$=t[0].showDrafts?"Hide":"Show";return{c(){e=y($),s=y("\n      Drafts")},l(t){e=D(t,$),s=D(t,"\n      Drafts")},m(t,$){l(t,e,$),l(t,s,$)},p(t,s){1&s&&$!==($=t[0].showDrafts?"Hide":"Show")&&N(e,$)},d(t){t&&h(e),t&&h(s)}}}function q(t){let e,s,$,n;return e=new C({props:{a:{height:"80px",grow:!0},$$slots:{default:[z]},$$scope:{ctx:t}}}),$=new C({props:{a:{height:"80px",grow:!0},$$slots:{default:[V]},$$scope:{ctx:t}}}),$.$on("click",t[5]),{c(){o(e.$$.fragment),s=r(),o($.$$.fragment)},l(t){c(e.$$.fragment,t),s=f(t),c($.$$.fragment,t)},m(t,a){m(e,t,a),l(t,s,a),m($,t,a),n=!0},p(t,s){const n={};512&s&&(n.$$scope={dirty:s,ctx:t}),e.$set(n);const a={};513&s&&(a.$$scope={dirty:s,ctx:t}),$.$set(a)},i(t){n||(g(e.$$.fragment,t),g($.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),p($.$$.fragment,t),n=!1},d(t){i(e,t),t&&h(s),i($,t)}}}function F(t){let e,s,$,n,a,d,u,v,A,C,N;return e=new x({props:{className:"mb04 mt3",a:{grow:!0},$$slots:{default:[B]},$$scope:{ctx:t}}}),$=new x({props:{className:"mb04",a:{grow:!0},$$slots:{default:[M]},$$scope:{ctx:t}}}),v=new x({props:{className:"mb04",a:{grow:!0},$$slots:{default:[U]},$$scope:{ctx:t}}}),C=new x({props:{className:"mb04 pb1",a:{grow:!0},$$slots:{default:[q]},$$scope:{ctx:t}}}),{c(){o(e.$$.fragment),s=r(),o($.$$.fragment),n=r(),a=w("div"),d=y("Admin Only!"),u=r(),o(v.$$.fragment),A=r(),o(C.$$.fragment),this.h()},l(t){c(e.$$.fragment,t),s=f(t),c($.$$.fragment,t),n=f(t),a=b(t,"DIV",{class:!0});var o=S(a);d=D(o,"Admin Only!"),o.forEach(h),u=f(t),c(v.$$.fragment,t),A=f(t),c(C.$$.fragment,t),this.h()},h(){j(a,"class","mtb2")},m(t,o){m(e,t,o),l(t,s,o),m($,t,o),l(t,n,o),l(t,a,o),k(a,d),l(t,u,o),m(v,t,o),l(t,A,o),m(C,t,o),N=!0},p(t,s){const n={};512&s&&(n.$$scope={dirty:s,ctx:t}),e.$set(n);const a={};512&s&&(a.$$scope={dirty:s,ctx:t}),$.$set(a);const o={};512&s&&(o.$$scope={dirty:s,ctx:t}),v.$set(o);const r={};513&s&&(r.$$scope={dirty:s,ctx:t}),C.$set(r)},i(t){N||(g(e.$$.fragment,t),g($.$$.fragment,t),g(v.$$.fragment,t),g(C.$$.fragment,t),N=!0)},o(t){p(e.$$.fragment,t),p($.$$.fragment,t),p(v.$$.fragment,t),p(C.$$.fragment,t),N=!1},d(t){i(e,t),t&&h(s),i($,t),t&&h(n),t&&h(a),t&&h(u),i(v,t),t&&h(A),i(C,t)}}}function G(t){let e,s,$,d;return e=new n({props:{page:t[1]}}),$=new a({props:{className:"mlr06",$$slots:{default:[F]},$$scope:{ctx:t}}}),{c(){o(e.$$.fragment),s=r(),o($.$$.fragment)},l(t){c(e.$$.fragment,t),s=f(t),c($.$$.fragment,t)},m(t,n){m(e,t,n),l(t,s,n),m($,t,n),d=!0},p(t,[e]){const s={};513&e&&(s.$$scope={dirty:e,ctx:t}),$.$set(s)},i(t){d||(g(e.$$.fragment,t),g($.$$.fragment,t),d=!0)},o(t){p(e.$$.fragment,t),p($.$$.fragment,t),d=!1},d(t){i(e,t),t&&h(s),i($,t)}}}async function J(e,s){return t(e,s,this)}function K(t,e,s){let $;d(t,A,t=>s(0,$=t));const n=u("page");u("data");return[$,n,function(){v.post("/system/calibrate?as=json").then(t=>{console.log("[System] 📠  calibrate")}).catch(t=>{console.log("[System] 📠❌  calibrate",t)})},function(){v.post("/system/reboot?as=json").then(t=>{console.log("[System] 📠  reboot")}).catch(t=>{console.log("[System] 📠❌  reboot",t)})},function(){v.post("/system/shutdown?as=json").then(t=>{console.log("[System] 📠  shutdown")}).catch(t=>{console.log("[System] 📠❌  shutdown",t)})},function(){A.toggleDrafts()},function(){console.log("[System] 📠  updating system..."),v.post("/system/update?as=json").then(t=>{console.log("[System] 📠  updating")}).catch(t=>{console.log("[System] 📠❌  updating",t)})}]}export default class extends e{constructor(t){super(),s(this,t,K,G,$,{})}}export{J as preload};
