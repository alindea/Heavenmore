import{S as Be,i as Pe,s as Xe,h as J,j,a as C,y as Ge,t as B,k as oe,b as o,m as x,c as z,d as f,o as _e,z as ze,w as ce,n as re,e as R,r as ae,u as Re,A as De,x as fe,q as Fe}from"./index-BLAs-bEs.js";function ke(t,l,e){const n=t.slice();n[44]=l[e],n[47]=e;const a=n[10]*(n[47]+1);return n[45]=a,n}function ye(t,l,e){const n=t.slice();return n[48]=l[e],n[47]=e,n}function be(t,l,e){const n=t.slice();n[44]=l[e],n[47]=e;const a=n[15]*(n[47]+1);return n[45]=a,n}function we(t,l,e){const n=t.slice();return n[44]=l[e],n[52]=e,n}function Ae(t,l,e){const n=t.slice();n[44]=l[e],n[55]=e;const a=n[14]+100+215*(n[52]>4?n[52]-5:n[52]);n[45]=a;const i=(n[52]>4?n[12]/2:0)+0+43+53*n[55];return n[53]=i,n}function Ke(t){var A,L;let l,e=t[52]+1+"",n,a,i=t[55]+1+"",u,c,p=((L=(A=t[1])==null?void 0:A[t[52]+1])==null?void 0:L[t[55]+1])<=-1?"!":"?",w;return{c(){l=C("tspan"),n=B(e),a=B(" × "),u=B(i),c=B(" = "),w=B(p),o(l,"text-anchor","middle"),o(l,"textLength","140"),o(l,"lengthAdjust","spacingAndGlyphs"),o(l,"x",t[45]),o(l,"y",t[53])},m(v,D){z(v,l,D),f(l,n),f(l,a),f(l,u),f(l,c),f(l,w)},p(v,D){var Z,Y;D[0]&2&&p!==(p=((Y=(Z=v[1])==null?void 0:Z[v[52]+1])==null?void 0:Y[v[55]+1])<=-1?"!":"?")&&ce(w,p)},d(v){v&&R(l)}}}function Je(t){let l,e=t[52]+1+"",n,a,i=t[55]+1+"",u,c,p=(t[52]+1)*(t[55]+1)+"",w;return{c(){l=C("tspan"),n=B(e),a=B(" × "),u=B(i),c=B(" = "),w=B(p),o(l,"text-anchor","middle"),o(l,"textLength","165"),o(l,"lengthAdjust","spacingAndGlyphs"),o(l,"x",t[45]),o(l,"y",t[53])},m(A,L){z(A,l,L),f(l,n),f(l,a),f(l,u),f(l,c),f(l,w)},p:re,d(A){A&&R(l)}}}function ve(t){let l,e;function n(u,c){var p,w;return c[0]&7&&(l=null),l==null&&(l=!u[0]||((w=(p=u[1])==null?void 0:p[u[52]+1])==null?void 0:w[u[55]+1])===1||!u[2].has(u[52]+1)),l?Je:Ke}let a=n(t,[-1,-1]),i=a(t);return{c(){i.c(),e=Ge()},m(u,c){i.m(u,c),z(u,e,c)},p(u,c){a===(a=n(u,c))&&i?i.p(u,c):(i.d(1),i=a(u),i&&(i.c(),i.m(e.parentNode,e)))},d(u){u&&R(e),i.d(u)}}}function qe(t){let l,e=J(Array(10)),n=[];for(let a=0;a<e.length;a+=1)n[a]=ve(Ae(t,e,a));return{c(){l=C("text");for(let a=0;a<n.length;a+=1)n[a].c();o(l,"class","svelte-pd6u6m")},m(a,i){z(a,l,i);for(let u=0;u<n.length;u+=1)n[u]&&n[u].m(l,null)},p(a,i){if(i[0]&20487){e=J(Array(10));let u;for(u=0;u<e.length;u+=1){const c=Ae(a,e,u);n[u]?n[u].p(c,i):(n[u]=ve(c),n[u].c(),n[u].m(l,null))}for(;u<n.length;u+=1)n[u].d(1);n.length=e.length}},d(a){a&&R(l),ae(n,a)}}}function Me(t){let l;return{c(){l=C("line"),o(l,"x1",t[45]),o(l,"x2",t[45]),o(l,"y1",0),o(l,"y2",t[13]-t[16]-t[14]),o(l,"stroke-width",t[14]),o(l,"class","svelte-pd6u6m")},m(e,n){z(e,l,n)},p:re,d(e){e&&R(l)}}}function Le(t,l){let e,n,a=l[6][l[47]]+"",i,u,c;return{key:t,first:null,c(){e=C("g"),n=C("text"),i=B(a),o(n,"y",l[12]+90),o(n,"text-anchor","middle"),o(n,"x",u=l[9]*l[48]),o(n,"class","svelte-pd6u6m"),o(e,"data-opt",c=l[6][l[47]]),o(e,"class","svelte-pd6u6m"),this.first=e},m(p,w){z(p,e,w),f(e,n),f(n,i)},p(p,w){l=p,w[0]&96&&a!==(a=l[6][l[47]]+"")&&ce(i,a),w[0]&544&&u!==(u=l[9]*l[48])&&o(n,"x",u),w[0]&96&&c!==(c=l[6][l[47]])&&o(e,"data-opt",c)},d(p){p&&R(e)}}}function We(t){let l,e,n;return{c(){l=C("line"),o(l,"x1",e=t[45]),o(l,"x2",n=t[45]),o(l,"y1",t[12]),o(l,"y2",t[12]+t[17]),o(l,"stroke-width",t[14]),o(l,"class","svelte-pd6u6m")},m(a,i){z(a,l,i)},p(a,i){i[0]&1024&&e!==(e=a[45])&&o(l,"x1",e),i[0]&1024&&n!==(n=a[45])&&o(l,"x2",n)},d(a){a&&R(l)}}}function Ie(t){let l,e,n;return{c(){l=j("button"),l.textContent="Restart"},m(a,i){z(a,l,i),e||(n=_e(l,"click",t[31]),e=!0)},p:re,d(a){a&&R(l),e=!1,n()}}}function Ne(t){let l,e,n,a,i,u,c,p=[],w=new Map,A,L,v,D,Z,Y,S,ne,P,ie,N,$,ee,te,G,W,O,X,U,H,q,m=J(Array(10)),y=[];for(let s=0;s<m.length;s+=1)y[s]=qe(we(t,m,s));let Q=J(Array(4)),d=[];for(let s=0;s<Q.length;s+=1)d[s]=Me(be(t,Q,s));let _=J(Array(t[5]).fill(0).map(Ce));const F=s=>s[47]+"_"+s[6][s[47]];for(let s=0;s<_.length;s+=1){let g=ye(t,_,s),r=F(g);w.set(r,p[s]=Le(r,g))}let I=J(Array(t[5]-1)),k=[];for(let s=0;s<I.length;s+=1)k[s]=We(ke(t,I,s));let b=t[7]!=="?"&&Ie(t);return{c(){l=j("div"),e=C("svg"),n=C("rect");for(let s=0;s<y.length;s+=1)y[s].c();a=Ge();for(let s=0;s<d.length;s+=1)d[s].c();i=C("line"),u=C("line"),c=C("g");for(let s=0;s<p.length;s+=1)p[s].c();for(let s=0;s<k.length;s+=1)k[s].c();A=C("line"),L=C("g"),v=C("text"),D=B(t[7]),Z=oe(),Y=j("label"),S=j("small"),S.textContent="Number of choices:",ne=oe(),P=j("input"),ie=oe(),N=j("datalist"),$=j("option"),ee=j("option"),te=j("option"),G=j("option"),W=j("option"),O=oe(),b&&b.c(),X=oe(),U=j("ul"),U.innerHTML=`<li>Press the movable items to select an answer and start or pause the game.</li> <li>By default, all numbers are included in the game.</li> <li>Press the bottom columns to toggle the numbers you want to play.</li> <li>The numbers that have a &quot;?&quot; mark after &quot;=&quot; are the questions you will
        have to answer, which will be selected randomly.</li> <li>If you give the right answer, the &quot;?&quot; mark will be replaced with your
        answer.</li> <li>If you do not answer or give the wrong answer the &quot;?&quot; mark will be
        replace with &quot;!&quot; and the question will be played again.</li> <li>The game ends when all questions have been answered correctly.</li>`,o(n,"x",t[14]),o(n,"y",t[14]),o(n,"width",t[12]-t[14]*2),o(n,"height",t[13]-t[14]*2),o(n,"rx","30"),o(n,"stroke-width",t[14]),o(n,"class","svelte-pd6u6m"),o(i,"x1",t[14]),o(i,"x2",t[12]-t[14]),o(i,"y1",t[12]/2),o(i,"y2",t[12]/2),o(i,"stroke-width",t[14]),o(i,"class","svelte-pd6u6m"),o(u,"x1",t[14]),o(u,"x2",t[12]-t[14]),o(u,"y1",t[12]),o(u,"y2",t[12]),o(u,"stroke-width",t[14]),o(u,"class","svelte-pd6u6m"),o(c,"class","svelte-pd6u6m"),o(A,"x1",t[14]),o(A,"x2",t[12]-t[14]),o(A,"y1",t[12]+t[17]),o(A,"y2",t[12]+t[17]),o(A,"stroke-width",t[14]),o(A,"class","svelte-pd6u6m"),o(v,"class","question svelte-pd6u6m"),o(v,"x","535"),o(v,"y",t[12]+t[17]+155),o(v,"text-anchor","middle"),o(L,"class","shake svelte-pd6u6m"),o(e,"viewBox","0 0 "+t[12]+" "+t[13]),o(e,"fill","none"),o(e,"class","svelte-pd6u6m"),o(P,"min","1"),o(P,"max","5"),o(P,"type","range"),o(P,"list","markers"),$.__value="1",x($,$.__value),ee.__value="2",x(ee,ee.__value),te.__value="3",x(te,te.__value),G.__value="4",x(G,G.__value),W.__value="5",x(W,W.__value),o(N,"id","markers")},m(s,g){z(s,l,g),f(l,e),f(e,n);for(let r=0;r<y.length;r+=1)y[r]&&y[r].m(e,null);f(e,a);for(let r=0;r<d.length;r+=1)d[r]&&d[r].m(e,null);f(e,i),f(e,u),f(e,c);for(let r=0;r<p.length;r+=1)p[r]&&p[r].m(c,null);t[27](c);for(let r=0;r<k.length;r+=1)k[r]&&k[r].m(e,null);f(e,A),f(e,L),f(L,v),f(v,D),t[28](L),t[29](e),f(l,Z),f(l,Y),f(Y,S),f(Y,ne),f(Y,P),x(P,t[5]),f(Y,ie),f(Y,N),f(N,$),f(N,ee),f(N,te),f(N,G),f(N,W),f(l,O),b&&b.m(l,null),z(s,X,g),z(s,U,g),H||(q=[_e(P,"change",t[30]),_e(P,"input",t[30])],H=!0)},p(s,g){if(g[0]&20487){m=J(Array(10));let r;for(r=0;r<m.length;r+=1){const K=we(s,m,r);y[r]?y[r].p(K,g):(y[r]=qe(K),y[r].c(),y[r].m(e,a))}for(;r<y.length;r+=1)y[r].d(1);y.length=m.length}if(g[0]&122880){Q=J(Array(4));let r;for(r=0;r<Q.length;r+=1){const K=be(s,Q,r);d[r]?d[r].p(K,g):(d[r]=Me(K),d[r].c(),d[r].m(e,i))}for(;r<d.length;r+=1)d[r].d(1);d.length=Q.length}if(g[0]&4704&&(_=J(Array(s[5]).fill(0).map(Ce)),p=ze(p,g,F,1,s,_,w,c,De,Le,null,ye)),g[0]&152608){I=J(Array(s[5]-1));let r;for(r=0;r<I.length;r+=1){const K=ke(s,I,r);k[r]?k[r].p(K,g):(k[r]=We(K),k[r].c(),k[r].m(e,A))}for(;r<k.length;r+=1)k[r].d(1);k.length=I.length}g[0]&128&&ce(D,s[7]),g[0]&32&&x(P,s[5]),s[7]!=="?"?b?b.p(s,g):(b=Ie(s),b.c(),b.m(l,null)):b&&(b.d(1),b=null)},i:re,o:re,d(s){s&&(R(l),R(X),R(U)),ae(y,s),ae(d,s);for(let g=0;g<p.length;g+=1)p[g].d();t[27](null),ae(k,s),t[28](null),t[29](null),b&&b.d(),H=!1,Re(q)}}}const Ce=(t,l)=>l*2+1;function Ue(t,l,e){let n,a;const i=h=>Math.floor(Math.random()*h),u=()=>{var h;H&&((h=k.querySelector('[data-opt="'+H+'"]'))==null||h.classList.add("shake")),L(-1),e(26,F=!1)},c=()=>{var h;H&&((h=I.querySelector('[data-opt="'+H+'"]'))==null||h.classList.add("shake"))},p=()=>k==null?void 0:k.querySelectorAll(".shake").forEach(h=>h.classList.remove("shake")),w=()=>b==null?void 0:b.classList.add("shake"),A=()=>b==null?void 0:b.classList.remove("shake"),L=h=>{q[O]||e(1,q[O]={},q),e(1,q[O][X]=h,q)},v=()=>{if(!m.length)return S(s),e(7,U="✓"),!1;e(23,y=i(m.length));const h=m[y];e(24,Q=i(h[1].length));const V=h[1][Q];e(19,O=h[0]),e(20,X=V),e(21,H=O*X),e(7,U=O+" x "+X);const M=[H];for(;M.length<s;){const T=i(100)+1;M.includes(T)||M.push(T)}for(let T=M.length-1;T>0;T--){const se=Math.floor(Math.random()*(T+1));[M[T],M[se]]=[M[se],M[T]]}return e(6,g=M),!0},D=()=>{v()&&(e(26,F=!0),_==null||_.addEventListener("finish",u),_==null||_.play())},Z=()=>{e(18,W=!0),w(),_==null||_.pause()},Y=()=>{e(18,W=!1),A(),_==null||_.play()},S=h=>{e(0,G=!1),e(6,g=Array(h).fill("?")),e(1,q={}),w(),_==null||_.cancel(),e(22,m=[]),e(2,d=new Set),e(7,U="?")},ne=h=>{const V=[];for(let M=1;M<=10;M++)V.push(M);m.push([h,V])};let G=!1,W=!1,O,X,U="?",H,q={},m=[],y,Q,d=new Set,_,F=!1,I,k,b,s=+(localStorage.getItem("mtg number of choices")||"2"),g=Array(s).fill("?");function r(h){fe[h?"unshift":"push"](()=>{k=h,e(4,k)})}function K(h){fe[h?"unshift":"push"](()=>{b=h,e(8,b)})}function He(h){fe[h?"unshift":"push"](()=>{I=h,e(3,I),e(2,d),e(22,m),e(1,q),e(0,G),e(25,_),e(18,W),e(5,s),e(6,g),e(21,H),e(19,O),e(20,X),e(23,y),e(24,Q),e(26,F),e(4,k)})}function Te(){s=Fe(this.value),e(5,s)}const Ye=()=>S(s);return t.$$.update=()=>{t.$$.dirty[0]&16&&k&&e(25,_=new Animation(new KeyframeEffect(k,[{transform:"translateY(0)"},{transform:"translateY(420px)"}],{duration:7e3,fill:"forwards"}),document.timeline)),t.$$.dirty[0]&133955695&&I&&e(3,I.onclick=h=>{var pe,ge,me;h.preventDefault();const V=I.getBoundingClientRect(),M=V.width,T=V.height,se=V.left+window.scrollX,he=V.top+window.scrollY,ue=T-M,Oe=ue/3*2;if(h.pageY<he+(T-ue)){const E=Math.trunc((h.pageX-se)/(M/5))+1,Qe=Math.trunc((h.pageY-he)/((T-ue)/2)),le=E+5*Qe;if(d.has(le)){d.delete(le);const de=m.findIndex(je=>je[0]===le);de!==-1&&m.splice(de,1),q==null||delete q[le]}else d.add(le),ne(le);e(1,q={...q}),G?v()&&(_==null||_.cancel(),W||Z()):(e(0,G=!0),e(18,W=!0),v())}else if(h.pageY<he+(T-ue)+Oe){const E=Math.trunc((h.pageX-se)/(M/s));g[E]===H?(((pe=q==null?void 0:q[O])==null?void 0:pe[X])!==-1?((ge=m==null?void 0:m[y])==null||ge[1].splice(Q,1),(me=m==null?void 0:m[y])!=null&&me[1].length||(d.delete(m[y][0]),m==null||m.splice(y,1)),L(1)):L(-2),p(),e(26,F=!1),_==null||_.removeEventListener("finish",u),W&&(e(18,W=!1),A()),_==null||_.cancel(),D()):(L(-1),c())}else if(G)W?Y():F?Z():(e(26,F=!0),_.play());else{if(!d.size)for(let E=1;E<=10;E++)d.add(E);d.forEach(ne),e(0,G=!0),A(),D()}},I),t.$$.dirty[0]&32&&localStorage.setItem("mtg number of choices",""+s),t.$$.dirty[0]&32&&e(10,n=(1080-2*2)/s),t.$$.dirty[0]&32&&e(9,a=(1080-2*2)/(s*2)),t.$$.dirty[0]&32&&S(s)},[G,q,d,I,k,s,g,U,b,a,n,S,1080,1920,2,215.2,840,560,W,O,X,H,m,y,Q,_,F,r,K,He,Te,Ye]}class Ze extends Be{constructor(l){super(),Pe(this,l,Ue,Ne,Xe,{},null,[-1,-1])}}export{Ze as default};