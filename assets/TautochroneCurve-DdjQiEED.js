import{S as ye,i as Me,s as Ie,h as ce,j as r,k as M,t as ee,b as u,l as se,c as ue,d as l,m as de,o as F,p as Te,q as be,n as ae,e as ie,r as Pe,u as _e,v as Ce,w as fe,x as ne}from"./index-BpUgd_1P.js";function pe(t,o,n){const b=t.slice();return b[35]=o[n],b[37]=n,b}function ge(t){let o,n,b;return{c(){o=r("button"),o.textContent="Reset",u(o,"type","button")},m(q,w){ue(q,o,w),n||(b=F(o,"click",t[18]),n=!0)},p:ae,d(q){q&&ie(o),n=!1,b()}}}function me(t){let o,n,b,q,w=(t[9](t[4].length,t[37]+1,t[2],t[3])||0)+"",W,J,p,P,X,V=t[37]+1+"",z,g,y,v,h,d,C,j=t[35]+"",R,k,S,Y,c,A,m,I,H,B,E;function N(){return t[19](t[37])}function K(){return t[20](t[37])}function Z(){return t[21](t[37])}function _(){return t[22](t[37])}return{c(){o=r("tr"),n=r("td"),b=r("b"),q=ee("$"),W=ee(w),J=M(),p=r("td"),P=r("button"),P.textContent="-",X=M(),z=ee(V),g=M(),y=r("button"),v=ee("+"),d=M(),C=r("td"),R=ee(j),k=M(),S=r("td"),Y=r("button"),Y.textContent="×",c=M(),A=r("td"),m=r("label"),I=r("input"),u(n,"class","svelte-1vhsxgl"),u(P,"type","button"),P.disabled=t[37]===0,u(y,"type","button"),y.disabled=h=t[37]===t[4].length-1,u(p,"class","svelte-1vhsxgl"),u(C,"class","svelte-1vhsxgl"),u(Y,"type","button"),se(Y,"color","var(--color-red-500)"),u(S,"class","svelte-1vhsxgl"),u(I,"placeholder","graph"),I.checked=H=t[1]===t[37]+1,u(I,"name","individual"),u(I,"type","radio"),se(m,"display","block"),u(A,"class","svelte-1vhsxgl")},m(T,i){ue(T,o,i),l(o,n),l(n,b),l(b,q),l(b,W),l(o,J),l(o,p),l(p,P),l(p,X),l(p,z),l(p,g),l(p,y),l(y,v),l(o,d),l(o,C),l(C,R),l(o,k),l(o,S),l(S,Y),l(o,c),l(o,A),l(A,m),l(m,I),B||(E=[F(P,"click",N),F(y,"click",K),F(Y,"click",Z),F(I,"input",_)],B=!0)},p(T,i){t=T,i[0]&28&&w!==(w=(t[9](t[4].length,t[37]+1,t[2],t[3])||0)+"")&&fe(W,w),i[0]&16&&h!==(h=t[37]===t[4].length-1)&&(y.disabled=h),i[0]&16&&j!==(j=t[35]+"")&&fe(R,j),i[0]&2&&H!==(H=t[1]===t[37]+1)&&(I.checked=H)},d(T){T&&ie(o),B=!1,_e(E)}}}function Ye(t){let o,n,b,q,w,W,J,p,P,X,V,z,g,y,v,h,d,C,j,R,k,S,Y,c,A,m,I,H,B,E,N,K,Z,_=!t[8]&&ge(t),T=ce(t[4]),i=[];for(let a=0;a<T.length;a+=1)i[a]=me(pe(t,T,a));return{c(){o=r("div"),n=r("canvas"),b=M(),q=r("br"),w=M(),W=r("label"),J=ee("Payment: $"),p=r("input"),P=M(),X=r("label"),V=r("small"),V.textContent="Round",z=M(),g=r("input"),y=M(),_&&_.c(),v=M(),h=r("form"),d=r("table"),C=r("tr"),C.innerHTML='<th class="svelte-1vhsxgl">Share</th> <th class="svelte-1vhsxgl">Impact</th> <th class="svelte-1vhsxgl">Motive</th> <th class="svelte-1vhsxgl">Remove</th> <th class="svelte-1vhsxgl">Graph</th>',j=M();for(let a=0;a<i.length;a+=1)i[a].c();R=M(),k=r("tr"),S=r("td"),S.innerHTML='<button type="submit">Add share</button>',Y=M(),c=r("td"),A=r("label"),m=r("input"),B=M(),E=r("td"),N=r("textarea"),u(p,"type","number"),u(g,"type","checkbox"),u(S,"class","svelte-1vhsxgl"),u(m,"placeholder","share Impact"),u(m,"min","1"),u(m,"max",I=t[4].length+1),u(m,"type","number"),u(m,"name","share-impact"),m.value=H=t[4].length+1,u(c,"class","svelte-1vhsxgl"),se(N,"display","block"),u(N,"name","share-motive"),u(E,"colspan","3"),se(E,"padding","0"),u(E,"class","svelte-1vhsxgl"),u(d,"class","svelte-1vhsxgl")},m(a,e){ue(a,o,e),l(o,n),t[14](n),l(o,b),l(o,q),l(o,w),l(o,W),l(W,J),l(W,p),t[15](p),de(p,t[2]),l(o,P),l(o,X),l(X,V),l(X,z),l(X,g),g.checked=t[3],l(o,y),_&&_.m(o,null),l(o,v),l(o,h),l(h,d),l(d,C),l(d,j);for(let s=0;s<i.length;s+=1)i[s]&&i[s].m(d,null);l(d,R),l(d,k),l(k,S),l(k,Y),l(k,c),l(c,A),l(A,m),t[23](m),l(k,B),l(k,E),l(E,N),t[24](N),K||(Z=[F(p,"input",t[16]),F(g,"change",t[17]),F(h,"submit",Te(t[25]))],K=!0)},p(a,e){if(e[0]&4&&be(p.value)!==a[2]&&de(p,a[2]),e[0]&8&&(g.checked=a[3]),a[8]?_&&(_.d(1),_=null):_?_.p(a,e):(_=ge(a),_.c(),_.m(o,v)),e[0]&798){T=ce(a[4]);let s;for(s=0;s<T.length;s+=1){const f=pe(a,T,s);i[s]?i[s].p(f,e):(i[s]=me(f),i[s].c(),i[s].m(d,R))}for(;s<i.length;s+=1)i[s].d(1);i.length=T.length}e[0]&16&&I!==(I=a[4].length+1)&&u(m,"max",I),e[0]&16&&H!==(H=a[4].length+1)&&m.value!==H&&(m.value=H)},i:ae,o:ae,d(a){a&&ie(o),t[14](null),t[15](null),_&&_.d(),Pe(i,a),t[23](null),t[24](null),K=!1,_e(Z)}}}const x=100,U=1,$=1;function we(t,o,n){const b=(e,s,f)=>{e&&(e.clearRect(0,0,V,z),e.strokeStyle=getComputedStyle(document.body).getPropertyValue("--fg-color"),q(e),p(e,s,f))},q=e=>{e.beginPath();for(let s=0;s<=Math.PI;s+=.01){const f=x*(s-Math.sin(s)),D=x*(1-Math.cos(s));e.lineTo(U+f,$+D)}e.stroke()},w=e=>{let s=Math.PI/2,f=!1;for(let L=0;L<10;L++){const G=s-(s-Math.sin(s)-e/x)/(1-Math.cos(s)),O=Math.abs(G-s);if(s=G,O<1e-8){f=!0;break}}return f?x*(1-Math.cos(s)):0},W=(e,s)=>{if(s<1||s>e)return;const f=P/e,D=f*(s-1),L=w(D),G=f*s,O=w(G);return{yPercentage:(O-L)/X,indX1:D,indY1:L,indX2:G,indY2:O}},J=(e,s,f,D)=>{const L=W(e,s);if(!L)return 0;const G=L.yPercentage*f;return D?Math.round(G):G},p=(e,s,f)=>{const D=W(s,f);if(!D)return;const{indX1:L,indY1:G,indX2:O,indY2:he}=D,te=Math.round(U+L),oe=Math.round($+G),le=Math.round(U+O),ve=Math.round($+he),re=U,ke=$,Se=U+P,Q=$+X;e.beginPath(),e.moveTo(te,oe),e.lineTo(te,Q),e.lineTo(le,Q),e.lineTo(le,ve),e.lineTo(le,oe),e.lineTo(te,oe),e.stroke(),e.beginPath(),U!==te&&(e.moveTo(re,ke),e.lineTo(re,Q)),e.moveTo(re,Q),e.lineTo(te,Q),e.moveTo(le,Q),e.lineTo(Se,Q),e.stroke()},P=x*Math.PI,X=x*2,V=U*2+P,z=$*2+X;let g,y,v=+(localStorage.getItem("isochrone population")||10),h=+(localStorage.getItem("isochrone individual")||1),d=+(localStorage.getItem("isochrone resource")||1e6),C=localStorage.getItem("isochrone threshold")!=="-1",j;Ce.subscribe(()=>{b(y,v,h)}),matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{b(y,v,h)});let R,k,S=!0;const Y=["workforce","capital"];let c=[...Y];const A=()=>{const e=new Date,s=e.getHours().toString().padStart(2,"0"),f=e.getMinutes().toString().padStart(2,"0"),D=e.getSeconds().toString().padStart(2,"0"),L=e.getMilliseconds();return`${s}:${f}:${D}.${L}`};function m(e){ne[e?"unshift":"push"](()=>{g=e,n(0,g)})}function I(e){ne[e?"unshift":"push"](()=>{j=e,n(5,j)})}function H(){d=be(this.value),n(2,d)}function B(){C=this.checked,n(3,C)}const E=()=>{n(4,c=[...Y]),n(8,S=!0),n(1,h=1),n(2,d=1e6)},N=e=>{c.splice(e-1,0,c.splice(e,1)[0]),n(4,c),n(8,S=!1)},K=e=>{c.splice(e+1,0,c.splice(e,1)[0]),n(4,c),n(8,S=!1)},Z=e=>{n(4,c=c.filter((s,f)=>f!==e)),n(8,S=!1)},_=e=>{n(1,h=e+1),n(8,S=!1)};function T(e){ne[e?"unshift":"push"](()=>{R=e,n(6,R)})}function i(e){ne[e?"unshift":"push"](()=>{k=e,n(7,k)})}const a=()=>{c.splice(+R.value-1,0,k.value||A()),n(4,c),n(7,k.value="",k),n(8,S=!1)};return t.$$.update=()=>{t.$$.dirty[0]&1&&g&&(n(0,g.width=V,g),n(0,g.height=z,g),n(12,y=g.getContext("2d"))),t.$$.dirty[0]&8192&&(v<1&&n(13,v=1),localStorage.setItem("isochrone population",""+v)),t.$$.dirty[0]&16&&n(13,v=c.length),t.$$.dirty[0]&8194&&(h<1&&n(1,h=1),h>v&&n(1,h=v),localStorage.setItem("isochrone individual",""+h)),t.$$.dirty[0]&12290&&b(y,v,h),t.$$.dirty[0]&4&&(d<1&&n(2,d=1),localStorage.setItem("isochrone resource",""+d)),t.$$.dirty[0]&8&&(C?localStorage.removeItem("isochrone threshold"):localStorage.setItem("isochrone threshold","-1"))},[g,h,d,C,c,j,R,k,S,J,Y,A,y,v,m,I,H,B,E,N,K,Z,_,T,i,a]}class Re extends ye{constructor(o){super(),Me(this,o,we,Ye,Ie,{},null,[-1,-1])}}export{Re as default};