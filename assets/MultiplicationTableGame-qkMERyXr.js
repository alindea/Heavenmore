import{S as Be,i as Pe,s as Xe,h as J,j,a as C,y as Ge,t as B,k as oe,b as o,m as x,c as z,d as f,o as _e,z as ze,w as ce,n as re,e as R,r as ie,u as Re,A as De,x as fe,q as Fe}from"./index-IWa5VKb7.js";function ke(t,l,e){const n=t.slice();n[44]=l[e],n[47]=e;const i=n[10]*(n[47]+1);return n[45]=i,n}function ye(t,l,e){const n=t.slice();return n[48]=l[e],n[47]=e,n}function be(t,l,e){const n=t.slice();n[44]=l[e],n[47]=e;const i=n[15]*(n[47]+1);return n[45]=i,n}function we(t,l,e){const n=t.slice();return n[44]=l[e],n[52]=e,n}function Ae(t,l,e){const n=t.slice();n[44]=l[e],n[55]=e;const i=n[14]+100+215*(n[52]>4?n[52]-5:n[52]);n[45]=i;const u=(n[52]>4?n[12]/2:0)+0+43+53*n[55];return n[53]=u,n}function Ke(t){var A,L;let l,e=t[52]+1+"",n,i,u=t[55]+1+"",a,c,g=((L=(A=t[1])==null?void 0:A[t[52]+1])==null?void 0:L[t[55]+1])<=-1?"!":"?",w;return{c(){l=C("tspan"),n=B(e),i=B(" × "),a=B(u),c=B(" = "),w=B(g),o(l,"text-anchor","middle"),o(l,"textLength","140"),o(l,"lengthAdjust","spacingAndGlyphs"),o(l,"x",t[45]),o(l,"y",t[53])},m(v,D){z(v,l,D),f(l,n),f(l,i),f(l,a),f(l,c),f(l,w)},p(v,D){var Z,Y;D[0]&2&&g!==(g=((Y=(Z=v[1])==null?void 0:Z[v[52]+1])==null?void 0:Y[v[55]+1])<=-1?"!":"?")&&ce(w,g)},d(v){v&&R(l)}}}function Je(t){let l,e=t[52]+1+"",n,i,u=t[55]+1+"",a,c,g=(t[52]+1)*(t[55]+1)+"",w;return{c(){l=C("tspan"),n=B(e),i=B(" × "),a=B(u),c=B(" = "),w=B(g),o(l,"text-anchor","middle"),o(l,"textLength","165"),o(l,"lengthAdjust","spacingAndGlyphs"),o(l,"x",t[45]),o(l,"y",t[53])},m(A,L){z(A,l,L),f(l,n),f(l,i),f(l,a),f(l,c),f(l,w)},p:re,d(A){A&&R(l)}}}function ve(t){let l,e;function n(a,c){var g,w;return c[0]&7&&(l=null),l==null&&(l=!a[0]||((w=(g=a[1])==null?void 0:g[a[52]+1])==null?void 0:w[a[55]+1])===1||!a[2].has(a[52]+1)),l?Je:Ke}let i=n(t,[-1,-1]),u=i(t);return{c(){u.c(),e=Ge()},m(a,c){u.m(a,c),z(a,e,c)},p(a,c){i===(i=n(a,c))&&u?u.p(a,c):(u.d(1),u=i(a),u&&(u.c(),u.m(e.parentNode,e)))},d(a){a&&R(e),u.d(a)}}}function qe(t){let l,e=J(Array(10)),n=[];for(let i=0;i<e.length;i+=1)n[i]=ve(Ae(t,e,i));return{c(){l=C("text");for(let i=0;i<n.length;i+=1)n[i].c();o(l,"class","svelte-10f9742")},m(i,u){z(i,l,u);for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(l,null)},p(i,u){if(u[0]&20487){e=J(Array(10));let a;for(a=0;a<e.length;a+=1){const c=Ae(i,e,a);n[a]?n[a].p(c,u):(n[a]=ve(c),n[a].c(),n[a].m(l,null))}for(;a<n.length;a+=1)n[a].d(1);n.length=e.length}},d(i){i&&R(l),ie(n,i)}}}function Me(t){let l;return{c(){l=C("line"),o(l,"x1",t[45]),o(l,"x2",t[45]),o(l,"y1",0),o(l,"y2",t[13]-t[16]-t[14]),o(l,"stroke-width",t[14]),o(l,"class","svelte-10f9742")},m(e,n){z(e,l,n)},p:re,d(e){e&&R(l)}}}function Le(t,l){let e,n,i=l[6][l[47]]+"",u,a,c;return{key:t,first:null,c(){e=C("g"),n=C("text"),u=B(i),o(n,"y",l[12]+90),o(n,"text-anchor","middle"),o(n,"x",a=l[9]*l[48]),o(n,"class","svelte-10f9742"),o(e,"data-opt",c=l[6][l[47]]),o(e,"class","svelte-10f9742"),this.first=e},m(g,w){z(g,e,w),f(e,n),f(n,u)},p(g,w){l=g,w[0]&96&&i!==(i=l[6][l[47]]+"")&&ce(u,i),w[0]&544&&a!==(a=l[9]*l[48])&&o(n,"x",a),w[0]&96&&c!==(c=l[6][l[47]])&&o(e,"data-opt",c)},d(g){g&&R(e)}}}function We(t){let l,e,n;return{c(){l=C("line"),o(l,"x1",e=t[45]),o(l,"x2",n=t[45]),o(l,"y1",t[12]),o(l,"y2",t[12]+t[17]),o(l,"stroke-width",t[14]),o(l,"class","svelte-10f9742")},m(i,u){z(i,l,u)},p(i,u){u[0]&1024&&e!==(e=i[45])&&o(l,"x1",e),u[0]&1024&&n!==(n=i[45])&&o(l,"x2",n)},d(i){i&&R(l)}}}function Ie(t){let l,e,n;return{c(){l=j("button"),l.textContent="Restart"},m(i,u){z(i,l,u),e||(n=_e(l,"click",t[31]),e=!0)},p:re,d(i){i&&R(l),e=!1,n()}}}function Ne(t){let l,e,n,i,u,a,c,g=[],w=new Map,A,L,v,D,Z,Y,S,ne,P,ue,N,$,ee,te,G,W,O,X,U,H,q,m=J(Array(10)),y=[];for(let s=0;s<m.length;s+=1)y[s]=qe(we(t,m,s));let Q=J(Array(4)),d=[];for(let s=0;s<Q.length;s+=1)d[s]=Me(be(t,Q,s));let _=J(Array(t[5]).fill(0).map(Ce));const F=s=>s[47]+"_"+s[6][s[47]];for(let s=0;s<_.length;s+=1){let p=ye(t,_,s),r=F(p);w.set(r,g[s]=Le(r,p))}let I=J(Array(t[5]-1)),k=[];for(let s=0;s<I.length;s+=1)k[s]=We(ke(t,I,s));let b=t[7]!=="?"&&Ie(t);return{c(){l=j("div"),e=C("svg"),n=C("rect");for(let s=0;s<y.length;s+=1)y[s].c();i=Ge();for(let s=0;s<d.length;s+=1)d[s].c();u=C("line"),a=C("line"),c=C("g");for(let s=0;s<g.length;s+=1)g[s].c();for(let s=0;s<k.length;s+=1)k[s].c();A=C("line"),L=C("g"),v=C("text"),D=B(t[7]),Z=oe(),Y=j("label"),S=j("small"),S.textContent="Number of choices:",ne=oe(),P=j("input"),ue=oe(),N=j("datalist"),$=j("option"),ee=j("option"),te=j("option"),G=j("option"),W=j("option"),O=oe(),b&&b.c(),X=oe(),U=j("ul"),U.innerHTML=`<li>Press the movable items to select an answer and start or pause the game.</li> <li>By default, all numbers are included in the game.</li> <li>Press the columns to toggle the numbers you want to play.</li> <li>The numbers that have a &quot;?&quot; mark after &quot;=&quot; are the questions you will
        have to answer, which will be selected randomly.</li> <li>If you give the right answer, the &quot;?&quot; mark will be replaced with your
        answer.</li> <li>If you do not answer or give the wrong answer the &quot;?&quot; mark will be
        replace with the &quot;!&quot; mark and the question will be played again.</li> <li>The game ends when all questions have been answered correctly.</li>`,o(n,"x",t[14]),o(n,"y",t[14]),o(n,"width",t[12]-t[14]*2),o(n,"height",t[13]-t[14]*2),o(n,"rx","30"),o(n,"stroke-width",t[14]),o(n,"class","svelte-10f9742"),o(u,"x1",t[14]),o(u,"x2",t[12]-t[14]),o(u,"y1",t[12]/2),o(u,"y2",t[12]/2),o(u,"stroke-width",t[14]),o(u,"class","svelte-10f9742"),o(a,"x1",t[14]),o(a,"x2",t[12]-t[14]),o(a,"y1",t[12]),o(a,"y2",t[12]),o(a,"stroke-width",t[14]),o(a,"class","svelte-10f9742"),o(c,"class","svelte-10f9742"),o(A,"x1",t[14]),o(A,"x2",t[12]-t[14]),o(A,"y1",t[12]+t[17]),o(A,"y2",t[12]+t[17]),o(A,"stroke-width",t[14]),o(A,"class","svelte-10f9742"),o(v,"class","question svelte-10f9742"),o(v,"x","535"),o(v,"y",t[12]+t[17]+155),o(v,"text-anchor","middle"),o(L,"class","shake svelte-10f9742"),o(e,"viewBox","0 0 "+t[12]+" "+t[13]),o(e,"fill","none"),o(e,"class","svelte-10f9742"),o(P,"min","1"),o(P,"max","5"),o(P,"type","range"),o(P,"list","markers"),$.__value="1",x($,$.__value),ee.__value="2",x(ee,ee.__value),te.__value="3",x(te,te.__value),G.__value="4",x(G,G.__value),W.__value="5",x(W,W.__value),o(N,"id","markers")},m(s,p){z(s,l,p),f(l,e),f(e,n);for(let r=0;r<y.length;r+=1)y[r]&&y[r].m(e,null);f(e,i);for(let r=0;r<d.length;r+=1)d[r]&&d[r].m(e,null);f(e,u),f(e,a),f(e,c);for(let r=0;r<g.length;r+=1)g[r]&&g[r].m(c,null);t[27](c);for(let r=0;r<k.length;r+=1)k[r]&&k[r].m(e,null);f(e,A),f(e,L),f(L,v),f(v,D),t[28](L),t[29](e),f(l,Z),f(l,Y),f(Y,S),f(Y,ne),f(Y,P),x(P,t[5]),f(Y,ue),f(Y,N),f(N,$),f(N,ee),f(N,te),f(N,G),f(N,W),f(l,O),b&&b.m(l,null),z(s,X,p),z(s,U,p),H||(q=[_e(P,"change",t[30]),_e(P,"input",t[30])],H=!0)},p(s,p){if(p[0]&20487){m=J(Array(10));let r;for(r=0;r<m.length;r+=1){const K=we(s,m,r);y[r]?y[r].p(K,p):(y[r]=qe(K),y[r].c(),y[r].m(e,i))}for(;r<y.length;r+=1)y[r].d(1);y.length=m.length}if(p[0]&122880){Q=J(Array(4));let r;for(r=0;r<Q.length;r+=1){const K=be(s,Q,r);d[r]?d[r].p(K,p):(d[r]=Me(K),d[r].c(),d[r].m(e,u))}for(;r<d.length;r+=1)d[r].d(1);d.length=Q.length}if(p[0]&4704&&(_=J(Array(s[5]).fill(0).map(Ce)),g=ze(g,p,F,1,s,_,w,c,De,Le,null,ye)),p[0]&152608){I=J(Array(s[5]-1));let r;for(r=0;r<I.length;r+=1){const K=ke(s,I,r);k[r]?k[r].p(K,p):(k[r]=We(K),k[r].c(),k[r].m(e,A))}for(;r<k.length;r+=1)k[r].d(1);k.length=I.length}p[0]&128&&ce(D,s[7]),p[0]&32&&x(P,s[5]),s[7]!=="?"?b?b.p(s,p):(b=Ie(s),b.c(),b.m(l,null)):b&&(b.d(1),b=null)},i:re,o:re,d(s){s&&(R(l),R(X),R(U)),ie(y,s),ie(d,s);for(let p=0;p<g.length;p+=1)g[p].d();t[27](null),ie(k,s),t[28](null),t[29](null),b&&b.d(),H=!1,Re(q)}}}const Ce=(t,l)=>l*2+1;function Ue(t,l,e){let n,i;const u=h=>Math.floor(Math.random()*h),a=()=>{var h;H&&((h=k.querySelector('[data-opt="'+H+'"]'))==null||h.classList.add("shake")),L(-1),e(26,F=!1)},c=()=>{var h;H&&((h=I.querySelector('[data-opt="'+H+'"]'))==null||h.classList.add("shake"))},g=()=>k==null?void 0:k.querySelectorAll(".shake").forEach(h=>h.classList.remove("shake")),w=()=>b==null?void 0:b.classList.add("shake"),A=()=>b==null?void 0:b.classList.remove("shake"),L=h=>{q[O]||e(1,q[O]={},q),e(1,q[O][X]=h,q)},v=()=>{if(!m.length)return S(s),e(7,U="✓"),!1;e(23,y=u(m.length));const h=m[y];e(24,Q=u(h[1].length));const V=h[1][Q];e(19,O=h[0]),e(20,X=V),e(21,H=O*X),e(7,U=O+" x "+X);const M=[H];for(;M.length<s;){const T=u(100)+1;M.includes(T)||M.push(T)}for(let T=M.length-1;T>0;T--){const se=Math.floor(Math.random()*(T+1));[M[T],M[se]]=[M[se],M[T]]}return e(6,p=M),!0},D=()=>{v()&&(e(26,F=!0),_==null||_.addEventListener("finish",a),_==null||_.play())},Z=()=>{e(18,W=!0),w(),_==null||_.pause()},Y=()=>{e(18,W=!1),A(),_==null||_.play()},S=h=>{e(0,G=!1),e(6,p=Array(h).fill("?")),e(1,q={}),w(),_==null||_.cancel(),e(22,m=[]),e(2,d=new Set),e(7,U="?")},ne=h=>{const V=[];for(let M=1;M<=10;M++)V.push(M);m.push([h,V])};let G=!1,W=!1,O,X,U="?",H,q={},m=[],y,Q,d=new Set,_,F=!1,I,k,b,s=+(localStorage.getItem("mtg number of choices")||"2"),p=Array(s).fill("?");function r(h){fe[h?"unshift":"push"](()=>{k=h,e(4,k)})}function K(h){fe[h?"unshift":"push"](()=>{b=h,e(8,b)})}function He(h){fe[h?"unshift":"push"](()=>{I=h,e(3,I),e(2,d),e(22,m),e(1,q),e(0,G),e(25,_),e(18,W),e(5,s),e(6,p),e(21,H),e(19,O),e(20,X),e(23,y),e(24,Q),e(26,F),e(4,k)})}function Te(){s=Fe(this.value),e(5,s)}const Ye=()=>S(s);return t.$$.update=()=>{t.$$.dirty[0]&16&&k&&e(25,_=new Animation(new KeyframeEffect(k,[{transform:"translateY(0)"},{transform:"translateY(420px)"}],{duration:7e3,fill:"forwards"}),document.timeline)),t.$$.dirty[0]&133955695&&I&&e(3,I.onclick=h=>{var ge,pe,me;h.preventDefault();const V=I.getBoundingClientRect(),M=V.width,T=V.height,se=V.left+window.scrollX,he=V.top+window.scrollY,ae=T-M,Oe=ae/3*2;if(h.pageY<he+(T-ae)){const E=Math.trunc((h.pageX-se)/(M/5))+1,Qe=Math.trunc((h.pageY-he)/((T-ae)/2)),le=E+5*Qe;if(d.has(le)){d.delete(le);const de=m.findIndex(je=>je[0]===le);de!==-1&&m.splice(de,1),q==null||delete q[le]}else d.add(le),ne(le);e(1,q={...q}),G?v()&&(_==null||_.cancel(),W||Z()):(e(0,G=!0),e(18,W=!0),v())}else if(h.pageY<he+(T-ae)+Oe){const E=Math.trunc((h.pageX-se)/(M/s));p[E]===H?(((ge=q==null?void 0:q[O])==null?void 0:ge[X])!==-1?((pe=m==null?void 0:m[y])==null||pe[1].splice(Q,1),(me=m==null?void 0:m[y])!=null&&me[1].length||(d.delete(m[y][0]),m==null||m.splice(y,1)),L(1)):L(-2),g(),e(26,F=!1),_==null||_.removeEventListener("finish",a),W&&(e(18,W=!1),A()),_==null||_.cancel(),D()):(L(-1),c())}else if(G)W?Y():F?Z():(e(26,F=!0),_.play());else{if(!d.size)for(let E=1;E<=10;E++)d.add(E);d.forEach(ne),e(0,G=!0),A(),D()}},I),t.$$.dirty[0]&32&&localStorage.setItem("mtg number of choices",""+s),t.$$.dirty[0]&32&&e(10,n=(1080-2*2)/s),t.$$.dirty[0]&32&&e(9,i=(1080-2*2)/(s*2)),t.$$.dirty[0]&32&&S(s)},[G,q,d,I,k,s,p,U,b,i,n,S,1080,1920,2,215.2,840,560,W,O,X,H,m,y,Q,_,F,r,K,He,Te,Ye]}class Ze extends Be{constructor(l){super(),Pe(this,l,Ue,Ne,Xe,{},null,[-1,-1])}}export{Ze as default};
