import{A as t,S as s,i as e,s as a,O as $,r as n,u as r,v as c,x as o,y as i,z as f,m as l,Z as m,e as p,t as h,a as d,c as u,b as g,d as x,f as y,g as w,h as v,j as S,k as E,w as j,E as A}from"./client.721c2dc2.js";function b(t){let s,e;return{c(){s=p("a"),e=h("Sessions"),this.h()},l(t){s=u(t,"A",{href:!0});var a=g(s);e=x(a,"Sessions"),a.forEach(y),this.h()},h(){v(s,"href","/session")},m(t,a){S(t,s,a),E(s,e)},d(t){t&&y(s)}}}function C(t){let s,e;return{c(){s=p("a"),e=h("Sync"),this.h()},l(t){s=u(t,"A",{href:!0});var a=g(s);e=x(a,"Sync"),a.forEach(y),this.h()},h(){v(s,"href","/sync")},m(t,a){S(t,s,a),E(s,e)},d(t){t&&y(s)}}}function k(t){let s,e,a,$;return s=new A({props:{a:{grow:!0},style:"min-width: 160px",$$slots:{default:[b]},$$scope:{ctx:t}}}),a=new A({props:{a:{grow:!0},style:"min-width: 160px",$$slots:{default:[C]},$$scope:{ctx:t}}}),{c(){n(s.$$.fragment),e=d(),n(a.$$.fragment)},l(t){r(s.$$.fragment,t),e=w(t),r(a.$$.fragment,t)},m(t,n){c(s,t,n),S(t,e,n),c(a,t,n),$=!0},p(t,e){const $={};8&e&&($.$$scope={dirty:e,ctx:t}),s.$set($);const n={};8&e&&(n.$$scope={dirty:e,ctx:t}),a.$set(n)},i(t){$||(o(s.$$.fragment,t),o(a.$$.fragment,t),$=!0)},o(t){i(s.$$.fragment,t),i(a.$$.fragment,t),$=!1},d(t){f(s,t),t&&y(e),f(a,t)}}}function z(t){let s,e,a,$,l,A,b=t[0].title+"";return l=new m({props:{a:{height:"60px"},$$slots:{default:[k]},$$scope:{ctx:t}}}),{c(){s=p("div"),e=h("Complete: "),a=h(b),$=d(),n(l.$$.fragment),this.h()},l(t){s=u(t,"DIV",{class:!0});var n=g(s);e=x(n,"Complete: "),a=x(n,b),n.forEach(y),$=w(t),r(l.$$.fragment,t),this.h()},h(){v(s,"class","mtb1")},m(t,n){S(t,s,n),E(s,e),E(s,a),S(t,$,n),c(l,t,n),A=!0},p(t,s){(!A||1&s)&&b!==(b=t[0].title+"")&&j(a,b);const e={};8&s&&(e.$$scope={dirty:s,ctx:t}),l.$set(e)},i(t){A||(o(l.$$.fragment,t),A=!0)},o(t){i(l.$$.fragment,t),A=!1},d(t){t&&y(s),t&&y($),f(l,t)}}}function D(t){let s,e;return s=new $({props:{a:{grow:!0},className:"justify-center align-center",$$slots:{default:[z]},$$scope:{ctx:t}}}),{c(){n(s.$$.fragment)},l(t){r(s.$$.fragment,t)},m(t,a){c(s,t,a),e=!0},p(t,[e]){const a={};9&e&&(a.$$scope={dirty:e,ctx:t}),s.$set(a)},i(t){e||(o(s.$$.fragment,t),e=!0)},o(t){i(s.$$.fragment,t),e=!1},d(t){f(s,t)}}}async function I(s,e){return t(s,e,this)}function N(t,s,e){const{page:a}=l();let $,{data:n}=s;return t.$$set=t=>{"data"in t&&e(1,n=t.data)},t.$$.update=()=>{2&t.$$.dirty&&e(0,$=n[0]||{})},[$,n]}export default class extends s{constructor(t){super(),e(this,t,N,D,a,{data:1})}}export{I as preload};
