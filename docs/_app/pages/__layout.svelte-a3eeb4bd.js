import{S as t,i as e,s,D as a,E as n,a as r,d as l,F as c,G as o,f as i,H as h,p as u,l as d,I as f,J as m,B as g,e as p,j as v,c as $,m as w,b as k,o as E,x as b,u as x,v as z,t as I,g as M,k as T,n as y,K as V,r as D,w as L,L as A,M as N,N as O,O as P,P as H}from"../chunks/vendor-501b219e.js";import{w as S}from"../chunks/wordmark-0849a013.js";function B(t){let e,s,d,f=t[2].contents+"",m=[t[2].attrs,{style:d="width: "+t[0]+"; height: "+t[1]+"; transform: rotate("+t[3]+"deg);"}],p={};for(let a=0;a<m.length;a+=1)p=g(p,m[a]);return{c(){e=a("svg"),s=a("g"),this.h()},l(t){e=n(t,"svg",{style:!0});var a=r(e);s=n(a,"g",{}),r(s).forEach(l),a.forEach(l),this.h()},h(){c(e,p),o(e,"svelte-x4av39",!0)},m(t,a){i(t,e,a),h(e,s),s.innerHTML=f},p(t,a){4&a&&f!==(f=t[2].contents+"")&&(s.innerHTML=f),c(e,p=u(m,[4&a&&t[2].attrs,11&a&&d!==(d="width: "+t[0]+"; height: "+t[1]+"; transform: rotate("+t[3]+"deg);")&&{style:d}])),o(e,"svelte-x4av39",!0)},d(t){t&&l(e)}}}function C(t){let e,s=t[2]&&B(t);return{c(){s&&s.c(),e=d()},l(t){s&&s.l(t),e=d()},m(t,a){s&&s.m(t,a),i(t,e,a)},p(t,[a]){t[2]?s?s.p(t,a):(s=B(t),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null)},i:f,o:f,d(t){s&&s.d(t),t&&l(e)}}}function W(t,e,s){let a,n;const r=["n","ne","e","se","s","sw","w","nw"];let{name:l}=e,{direction:c="n"}=e,{strokeWidth:o}=e,{stroke:i}=e,{width:h="1em"}=e,{height:u="1em"}=e;return t.$$set=t=>{"name"in t&&s(5,l=t.name),"direction"in t&&s(6,c=t.direction),"strokeWidth"in t&&s(7,o=t.strokeWidth),"stroke"in t&&s(8,i=t.stroke),"width"in t&&s(0,h=t.width),"height"in t&&s(1,u=t.height)},t.$$.update=()=>{32&t.$$.dirty&&s(2,a=m.icons[l]),64&t.$$.dirty&&s(3,n=45*r.indexOf(c)),388&t.$$.dirty&&a&&(i&&s(2,a.attrs.stroke=i,a),o&&s(2,a.attrs["stroke-width"]=o,a))},[h,u,a,n,r,l,c,o,i]}class j extends t{constructor(t){super(),e(this,t,W,C,s,{directions:4,name:5,direction:6,strokeWidth:7,stroke:8,width:0,height:1})}get directions(){return this.$$.ctx[4]}}function U(t,e,s){const a=t.slice();return a[4]=e[s].name,a[5]=e[s].url,a}function F(t,e,s){const a=t.slice();return a[4]=e[s].name,a[5]=e[s].url,a}function J(t){let e,s,a,n,c;return s=new j({props:{name:t[4]}}),{c(){e=p("a"),v(s.$$.fragment),this.h()},l(t){e=$(t,"A",{href:!0,"aria-label":!0});var a=r(e);w(s.$$.fragment,a),a.forEach(l),this.h()},h(){k(e,"href",a=t[5]),k(e,"aria-label",n=t[4])},m(t,a){i(t,e,a),E(s,e,null),c=!0},p:f,i(t){c||(b(s.$$.fragment,t),c=!0)},o(t){x(s.$$.fragment,t),c=!1},d(t){t&&l(e),z(s)}}}function R(t){let e,s,a,n=t[4]+"";return{c(){e=p("a"),s=I(n),this.h()},l(t){e=$(t,"A",{class:!0,href:!0});var a=r(e);s=M(a,n),a.forEach(l),this.h()},h(){k(e,"class","btn"),k(e,"href",a=t[5])},m(t,a){i(t,e,a),h(e,s)},p:f,d(t){t&&l(e)}}}function G(t){let e,s,a,n,c,u,d,f,m,g,N,O,P,H,S,B,C,W,G=t[1],K=[];for(let r=0;r<G.length;r+=1)K[r]=J(F(t,G,r));const q=t=>x(K[t],1,1,(()=>{K[t]=null}));let Q=t[2],X=[];for(let r=0;r<Q.length;r+=1)X[r]=R(U(t,Q,r));return N=new j({props:{name:"menu"}}),{c(){e=p("header"),s=p("div"),a=p("a"),n=T(),c=p("div");for(let t=0;t<K.length;t+=1)K[t].c();u=T(),d=p("div");for(let t=0;t<X.length;t+=1)X[t].c();f=T(),m=p("div"),g=p("button"),v(N.$$.fragment),O=T(),P=p("div"),H=p("p"),S=I("I am the menu"),this.h()},l(t){e=$(t,"HEADER",{class:!0});var o=r(e);s=$(o,"DIV",{class:!0});var i=r(s);a=$(i,"A",{href:!0,"aria-label":!0,class:!0}),r(a).forEach(l),i.forEach(l),n=y(o),c=$(o,"DIV",{class:!0});var h=r(c);for(let e=0;e<K.length;e+=1)K[e].l(h);h.forEach(l),u=y(o),d=$(o,"DIV",{class:!0});var p=r(d);for(let e=0;e<X.length;e+=1)X[e].l(p);p.forEach(l),f=y(o),m=$(o,"DIV",{class:!0});var v=r(m);g=$(v,"BUTTON",{});var k=r(g);w(N.$$.fragment,k),k.forEach(l),v.forEach(l),O=y(o),P=$(o,"DIV",{class:!0});var E=r(P);H=$(E,"P",{});var b=r(H);S=M(b,"I am the menu"),b.forEach(l),E.forEach(l),o.forEach(l),this.h()},h(){k(a,"href","https://pudding.cool"),k(a,"aria-label","The Pudding"),k(a,"class","svelte-1ka81wx"),k(s,"class","logo svelte-1ka81wx"),k(c,"class","social"),k(d,"class","cta"),k(m,"class","menu-toggle"),k(P,"class","menu svelte-1ka81wx"),o(P,"is-visible",t[0]),k(e,"class","svelte-1ka81wx")},m(r,l){i(r,e,l),h(e,s),h(s,a),a.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 110"><path class="st0" d="M67.2 14.1C62.6 4.8 55.3 3.8 48.1 7.6c-5.8 3.1-22.3 13.1-22.3 13.1v11.8s18.8-10.9 22.3-12.7c4.3-2.3 8.7-1.6 11.5 3.9 2.8 5.6 2.7 15-1.8 22.5-3.5 5.9-6.8 8.6-9.9 10.3S25.8 69.4 25.8 69.4v11.8s16.8-9.6 22-12.4c5.1-2.8 10.5-7.3 16.4-17.1 7.5-12.6 7.6-28.3 3-37.6z"/><path class="st0" d="M50.8 40.9c1.5-2.5 1.5-5.6.6-7.4-.9-1.8-2.4-2-3.8-1.3-1.1.6-21.9 12.4-21.9 12.4v11.8s20.8-11.6 21.8-12.2c1.1-.5 2.2-1.4 3.3-3.3zM25.8 105.5l11-6.3V87.4l-11 6.3v11.8z"/><g><path class="st1" d="M25.8 32.5l-11-6.4V14.3l11 6.4v11.8zM25.8 56.4l-22-12.6V32l22 12.6v11.8zM25.8 81.1l-5.6-3.2V66.1l5.6 3.2v11.8zM25.8 105.5L9.5 96.1V84.3l16.3 9.4v11.8z"/></g></svg>',h(e,n),h(e,c);for(let t=0;t<K.length;t+=1)K[t].m(c,null);h(e,u),h(e,d);for(let t=0;t<X.length;t+=1)X[t].m(d,null);h(e,f),h(e,m),h(m,g),E(N,g,null),h(e,O),h(e,P),h(P,H),h(H,S),B=!0,C||(W=V(g,"click",t[3]),C=!0)},p(t,[e]){if(2&e){let s;for(G=t[1],s=0;s<G.length;s+=1){const a=F(t,G,s);K[s]?(K[s].p(a,e),b(K[s],1)):(K[s]=J(a),K[s].c(),b(K[s],1),K[s].m(c,null))}for(D(),s=G.length;s<K.length;s+=1)q(s);L()}if(4&e){let s;for(Q=t[2],s=0;s<Q.length;s+=1){const a=U(t,Q,s);X[s]?X[s].p(a,e):(X[s]=R(a),X[s].c(),X[s].m(d,null))}for(;s<X.length;s+=1)X[s].d(1);X.length=Q.length}1&e&&o(P,"is-visible",t[0])},i(t){if(!B){for(let t=0;t<G.length;t+=1)b(K[t]);b(N.$$.fragment,t),B=!0}},o(t){K=K.filter(Boolean);for(let e=0;e<K.length;e+=1)x(K[e]);x(N.$$.fragment,t),B=!1},d(t){t&&l(e),A(K,t),A(X,t),z(N),C=!1,W()}}}function K(t,e,s){let a=!1;return[a,[{name:"twitter",url:"https://twitter.com/puddingviz/"},{name:"instagram",url:"https://www.instagram.com/the.pudding"},{name:"facebook",url:"https://facebook.com/pudding.viz/"}],[{name:"Support The Pudding",url:"https://patreon.com/thepudding/"},{name:"Join our newsletter",url:"http://eepurl.com/czym6f"}],()=>s(0,a=!a)]}class q extends t{constructor(t){super(),e(this,t,K,G,s,{})}}var Q="The Pudding is a digital publication that explains ideas debated in culture with visual essays.";function X(t,e,s){const a=t.slice();return a[1]=e[s],a}function Y(t){let e,s,a,n,c,o,u=t[1].name.toUpperCase()+"";return{c(){e=p("li"),s=p("a"),a=p("span"),n=I(u),o=T(),this.h()},l(t){e=$(t,"LI",{class:!0});var c=r(e);s=$(c,"A",{href:!0,class:!0});var i=r(s);a=$(i,"SPAN",{class:!0});var h=r(a);n=M(h,u),h.forEach(l),i.forEach(l),o=y(c),c.forEach(l),this.h()},h(){k(a,"class","svelte-kc0pdt"),k(s,"href",c=t[1].url),k(s,"class","svelte-kc0pdt"),k(e,"class","svelte-kc0pdt")},m(t,r){i(t,e,r),h(e,s),h(s,a),h(a,n),h(e,o)},p:f,d(t){t&&l(e)}}}function Z(t){let e,s,a,n,c,o,u,d,m,g=Q+"",v=t[0],w=[];for(let r=0;r<v.length;r+=1)w[r]=Y(X(t,v,r));return{c(){e=p("footer"),s=p("section"),a=p("div"),n=T(),c=p("p"),o=I(g),u=T(),d=p("section"),m=p("ul");for(let t=0;t<w.length;t+=1)w[t].c();this.h()},l(t){e=$(t,"FOOTER",{class:!0});var i=r(e);s=$(i,"SECTION",{class:!0});var h=r(s);a=$(h,"DIV",{class:!0}),r(a).forEach(l),n=y(h),c=$(h,"P",{});var f=r(c);o=M(f,g),f.forEach(l),h.forEach(l),u=y(i),d=$(i,"SECTION",{class:!0});var p=r(d);m=$(p,"UL",{class:!0});var v=r(m);for(let e=0;e<w.length;e+=1)w[e].l(v);v.forEach(l),p.forEach(l),i.forEach(l),this.h()},h(){k(a,"class","wordmark svelte-kc0pdt"),k(s,"class","about svelte-kc0pdt"),k(m,"class","svelte-kc0pdt"),k(d,"class","links svelte-kc0pdt"),k(e,"class","svelte-kc0pdt")},m(t,r){i(t,e,r),h(e,s),h(s,a),a.innerHTML=S,h(s,n),h(s,c),h(c,o),h(e,u),h(e,d),h(d,m);for(let e=0;e<w.length;e+=1)w[e].m(m,null)},p(t,[e]){if(1&e){let s;for(v=t[0],s=0;s<v.length;s+=1){const a=X(t,v,s);w[s]?w[s].p(a,e):(w[s]=Y(a),w[s].c(),w[s].m(m,null))}for(;s<w.length;s+=1)w[s].d(1);w.length=v.length}},i:f,o:f,d(t){t&&l(e),A(w,t)}}}function _(t){return[[{name:"about",url:"https://pudding.cool/about"},{name:"facebook",url:"https://facebook.com/pudding.viz/"},{name:"twitter",url:"https://twitter.com/puddingviz/"},{name:"instagram",url:"https://www.instagram.com/the.pudding"},{name:"patreon",url:"https://patreon.com/thepudding/"},{name:"privacy",url:"https://pudding.cool/privacy/"},{name:"newsletter",url:"http://eepurl.com/czym6f"},{name:"rss",url:"https://pudding.cool/feed/index.xml"}]]}class tt extends t{constructor(t){super(),e(this,t,_,Z,s,{})}}function et(t){let e,s,a,n,c,o;e=new q({});const h=t[1].default,u=N(h,t,t[0],null);return c=new tt({}),{c(){v(e.$$.fragment),s=T(),a=p("main"),u&&u.c(),n=T(),v(c.$$.fragment),this.h()},l(t){w(e.$$.fragment,t),s=y(t),a=$(t,"MAIN",{id:!0});var o=r(a);u&&u.l(o),o.forEach(l),n=y(t),w(c.$$.fragment,t),this.h()},h(){k(a,"id","content")},m(t,r){E(e,t,r),i(t,s,r),i(t,a,r),u&&u.m(a,null),i(t,n,r),E(c,t,r),o=!0},p(t,[e]){u&&u.p&&(!o||1&e)&&O(u,h,t,t[0],o?H(h,t[0],e,null):P(t[0]),null)},i(t){o||(b(e.$$.fragment,t),b(u,t),b(c.$$.fragment,t),o=!0)},o(t){x(e.$$.fragment,t),x(u,t),x(c.$$.fragment,t),o=!1},d(t){z(e,t),t&&l(s),t&&l(a),u&&u.d(t),t&&l(n),z(c,t)}}}function st(t,e,s){let{$$slots:a={},$$scope:n}=e;return t.$$set=t=>{"$$scope"in t&&s(0,n=t.$$scope)},[n,a]}class at extends t{constructor(t){super(),e(this,t,st,et,s,{})}}export{at as default};
