import{S as Be,i as Re,s as Te,h as P,j as R,a as O,y as Oe,t as X,k as oe,b as o,m as S,c as K,d as _,o as he,z as De,w as ie,n as ne,e as J,r as re,u as Pe,A as qe,x as ae,q as Fe}from"./index-CVidEIAK.js";function me(t,l,e){const n=t.slice();n[44]=l[e],n[47]=e;const u=n[10]*(n[47]+1);return n[45]=u,n}function ke(t,l,e){const n=t.slice();return n[48]=l[e],n[47]=e,n}function be(t,l,e){const n=t.slice();n[44]=l[e],n[47]=e;const u=n[15]*(n[47]+1);return n[45]=u,n}function de(t,l,e){const n=t.slice();return n[44]=l[e],n[52]=e,n}function ye(t,l,e){const n=t.slice();n[44]=l[e],n[55]=e;const u=n[14]+100+215*(n[52]>4?n[52]-5:n[52]);n[45]=u;const a=(n[52]>4?n[12]/2:0)+0+43+53*n[55];return n[53]=a,n}function Ke(t){var A,W;let l,e=t[52]+1+"",n,u,a=t[55]+1+"",f,g,m=((W=(A=t[1])==null?void 0:A[t[52]+1])==null?void 0:W[t[55]+1])<=-1?"!":"?",w;return{c(){l=O("tspan"),n=X(e),u=X(" × "),f=X(a),g=X(" = "),w=X(m),o(l,"text-anchor","middle"),o(l,"textLength","140"),o(l,"lengthAdjust","spacingAndGlyphs"),o(l,"x",t[45]),o(l,"y",t[53])},m(M,T){K(M,l,T),_(l,n),_(l,u),_(l,f),_(l,g),_(l,w)},p(M,T){var N,Q;T[0]&2&&m!==(m=((Q=(N=M[1])==null?void 0:N[M[52]+1])==null?void 0:Q[M[55]+1])<=-1?"!":"?")&&ie(w,m)},d(M){M&&J(l)}}}function Je(t){let l,e=t[52]+1+"",n,u,a=t[55]+1+"",f,g,m=(t[52]+1)*(t[55]+1)+"",w;return{c(){l=O("tspan"),n=X(e),u=X(" × "),f=X(a),g=X(" = "),w=X(m),o(l,"text-anchor","middle"),o(l,"textLength","165"),o(l,"lengthAdjust","spacingAndGlyphs"),o(l,"x",t[45]),o(l,"y",t[53])},m(A,W){K(A,l,W),_(l,n),_(l,u),_(l,f),_(l,g),_(l,w)},p:ne,d(A){A&&J(l)}}}function we(t){let l,e;function n(f,g){var m,w;return g[0]&7&&(l=null),l==null&&(l=!f[0]||((w=(m=f[1])==null?void 0:m[f[52]+1])==null?void 0:w[f[55]+1])===1||!f[2].has(f[52]+1)),l?Je:Ke}let u=n(t,[-1,-1]),a=u(t);return{c(){a.c(),e=Oe()},m(f,g){a.m(f,g),K(f,e,g)},p(f,g){u===(u=n(f,g))&&a?a.p(f,g):(a.d(1),a=u(f),a&&(a.c(),a.m(e.parentNode,e)))},d(f){f&&J(e),a.d(f)}}}function Ae(t){let l,e=P(Array(10)),n=[];for(let u=0;u<e.length;u+=1)n[u]=we(ye(t,e,u));return{c(){l=O("text");for(let u=0;u<n.length;u+=1)n[u].c();o(l,"class","svelte-1bux7fk")},m(u,a){K(u,l,a);for(let f=0;f<n.length;f+=1)n[f]&&n[f].m(l,null)},p(u,a){if(a[0]&20487){e=P(Array(10));let f;for(f=0;f<e.length;f+=1){const g=ye(u,e,f);n[f]?n[f].p(g,a):(n[f]=we(g),n[f].c(),n[f].m(l,null))}for(;f<n.length;f+=1)n[f].d(1);n.length=e.length}},d(u){u&&J(l),re(n,u)}}}function Me(t){let l;return{c(){l=O("line"),o(l,"x1",t[45]),o(l,"x2",t[45]),o(l,"y1",0),o(l,"y2",t[13]-t[16]-t[14]),o(l,"stroke-width",t[14]),o(l,"class","svelte-1bux7fk")},m(e,n){K(e,l,n)},p:ne,d(e){e&&J(l)}}}function ve(t,l){let e,n,u=l[6][l[47]]+"",a,f,g;return{key:t,first:null,c(){e=O("g"),n=O("text"),a=X(u),o(n,"y",l[12]+90),o(n,"text-anchor","middle"),o(n,"x",f=l[9]*l[48]),o(n,"class","svelte-1bux7fk"),o(e,"data-opt",g=l[6][l[47]]),o(e,"class","svelte-1bux7fk"),this.first=e},m(m,w){K(m,e,w),_(e,n),_(n,a)},p(m,w){l=m,w[0]&96&&u!==(u=l[6][l[47]]+"")&&ie(a,u),w[0]&544&&f!==(f=l[9]*l[48])&&o(n,"x",f),w[0]&96&&g!==(g=l[6][l[47]])&&o(e,"data-opt",g)},d(m){m&&J(e)}}}function Le(t){let l,e,n;return{c(){l=O("line"),o(l,"x1",e=t[45]),o(l,"x2",n=t[45]),o(l,"y1",t[12]),o(l,"y2",t[12]+t[17]),o(l,"stroke-width",t[14]),o(l,"class","svelte-1bux7fk")},m(u,a){K(u,l,a)},p(u,a){a[0]&1024&&e!==(e=u[45])&&o(l,"x1",e),a[0]&1024&&n!==(n=u[45])&&o(l,"x2",n)},d(u){u&&J(l)}}}function We(t){let l,e,n;return{c(){l=R("button"),l.textContent="Restart"},m(u,a){K(u,l,a),e||(n=he(l,"click",t[31]),e=!0)},p:ne,d(u){u&&J(l),e=!1,n()}}}function Ne(t){let l,e,n,u,a,f,g,m=[],w=new Map,A,W,M,T,N,Q,U,te,z,fe,q,E,x,$,I,C,j,B,V,L=P(Array(10)),c=[];for(let r=0;r<L.length;r+=1)c[r]=Ae(de(t,L,r));let k=P(Array(4)),b=[];for(let r=0;r<k.length;r+=1)b[r]=Me(be(t,k,r));let D=P(Array(t[5]).fill(0).map(Ce));const Y=r=>r[47]+"_"+r[6][r[47]];for(let r=0;r<D.length;r+=1){let p=ke(t,D,r),s=Y(p);w.set(s,m[r]=ve(s,p))}let h=P(Array(t[5]-1)),d=[];for(let r=0;r<h.length;r+=1)d[r]=Le(me(t,h,r));let y=t[7]!=="?"&&We(t);return{c(){l=R("div"),e=O("svg"),n=O("rect");for(let r=0;r<c.length;r+=1)c[r].c();u=Oe();for(let r=0;r<b.length;r+=1)b[r].c();a=O("line"),f=O("line"),g=O("g");for(let r=0;r<m.length;r+=1)m[r].c();for(let r=0;r<d.length;r+=1)d[r].c();A=O("line"),W=O("g"),M=O("text"),T=X(t[7]),N=oe(),Q=R("label"),U=R("small"),U.textContent="Number of choices:",te=oe(),z=R("input"),fe=oe(),q=R("datalist"),E=R("option"),x=R("option"),$=R("option"),I=R("option"),C=R("option"),j=oe(),y&&y.c(),o(n,"x",t[14]),o(n,"y",t[14]),o(n,"width",t[12]-t[14]*2),o(n,"height",t[13]-t[14]*2),o(n,"rx","30"),o(n,"stroke-width",t[14]),o(n,"class","svelte-1bux7fk"),o(a,"x1",t[14]),o(a,"x2",t[12]-t[14]),o(a,"y1",t[12]/2),o(a,"y2",t[12]/2),o(a,"stroke-width",t[14]),o(a,"class","svelte-1bux7fk"),o(f,"x1",t[14]),o(f,"x2",t[12]-t[14]),o(f,"y1",t[12]),o(f,"y2",t[12]),o(f,"stroke-width",t[14]),o(f,"class","svelte-1bux7fk"),o(g,"class","svelte-1bux7fk"),o(A,"x1",t[14]),o(A,"x2",t[12]-t[14]),o(A,"y1",t[12]+t[17]),o(A,"y2",t[12]+t[17]),o(A,"stroke-width",t[14]),o(A,"class","svelte-1bux7fk"),o(M,"class","question svelte-1bux7fk"),o(M,"x","535"),o(M,"y",t[12]+t[17]+155),o(M,"text-anchor","middle"),o(W,"class","shake svelte-1bux7fk"),o(e,"viewBox","0 0 "+t[12]+" "+t[13]),o(e,"fill","none"),o(e,"class","svelte-1bux7fk"),o(z,"min","1"),o(z,"max","5"),o(z,"type","range"),o(z,"list","markers"),E.__value="1",S(E,E.__value),x.__value="2",S(x,x.__value),$.__value="3",S($,$.__value),I.__value="4",S(I,I.__value),C.__value="5",S(C,C.__value),o(q,"id","markers")},m(r,p){K(r,l,p),_(l,e),_(e,n);for(let s=0;s<c.length;s+=1)c[s]&&c[s].m(e,null);_(e,u);for(let s=0;s<b.length;s+=1)b[s]&&b[s].m(e,null);_(e,a),_(e,f),_(e,g);for(let s=0;s<m.length;s+=1)m[s]&&m[s].m(g,null);t[27](g);for(let s=0;s<d.length;s+=1)d[s]&&d[s].m(e,null);_(e,A),_(e,W),_(W,M),_(M,T),t[28](W),t[29](e),_(l,N),_(l,Q),_(Q,U),_(Q,te),_(Q,z),S(z,t[5]),_(Q,fe),_(Q,q),_(q,E),_(q,x),_(q,$),_(q,I),_(q,C),_(l,j),y&&y.m(l,null),B||(V=[he(z,"change",t[30]),he(z,"input",t[30])],B=!0)},p(r,p){if(p[0]&20487){L=P(Array(10));let s;for(s=0;s<L.length;s+=1){const G=de(r,L,s);c[s]?c[s].p(G,p):(c[s]=Ae(G),c[s].c(),c[s].m(e,u))}for(;s<c.length;s+=1)c[s].d(1);c.length=L.length}if(p[0]&122880){k=P(Array(4));let s;for(s=0;s<k.length;s+=1){const G=be(r,k,s);b[s]?b[s].p(G,p):(b[s]=Me(G),b[s].c(),b[s].m(e,a))}for(;s<b.length;s+=1)b[s].d(1);b.length=k.length}if(p[0]&4704&&(D=P(Array(r[5]).fill(0).map(Ce)),m=De(m,p,Y,1,r,D,w,g,qe,ve,null,ke)),p[0]&152608){h=P(Array(r[5]-1));let s;for(s=0;s<h.length;s+=1){const G=me(r,h,s);d[s]?d[s].p(G,p):(d[s]=Le(G),d[s].c(),d[s].m(e,A))}for(;s<d.length;s+=1)d[s].d(1);d.length=h.length}p[0]&128&&ie(T,r[7]),p[0]&32&&S(z,r[5]),r[7]!=="?"?y?y.p(r,p):(y=We(r),y.c(),y.m(l,null)):y&&(y.d(1),y=null)},i:ne,o:ne,d(r){r&&J(l),re(c,r),re(b,r);for(let p=0;p<m.length;p+=1)m[p].d();t[27](null),re(d,r),t[28](null),t[29](null),y&&y.d(),B=!1,Pe(V)}}}const Ce=(t,l)=>l*2+1;function Ue(t,l,e){let n,u;const a=i=>Math.floor(Math.random()*i),f=()=>{var i;L&&((i=r.querySelector('[data-opt="'+L+'"]'))==null||i.classList.add("shake")),W(-1),e(26,d=!1)},g=()=>{var i;L&&((i=y.querySelector('[data-opt="'+L+'"]'))==null||i.classList.add("shake"))},m=()=>r==null?void 0:r.querySelectorAll(".shake").forEach(i=>i.classList.remove("shake")),w=()=>p==null?void 0:p.classList.add("shake"),A=()=>p==null?void 0:p.classList.remove("shake"),W=i=>{c[j]||e(1,c[j]={},c),e(1,c[j][B]=i,c)},M=()=>{if(!k.length)return U(s),e(7,V="✓"),!1;e(23,b=a(k.length));const i=k[b];e(24,D=a(i[1].length));const F=i[1][D];e(19,j=i[0]),e(20,B=F),e(21,L=j*B),e(7,V=j+" x "+B);const v=[L];for(;v.length<s;){const H=a(100)+1;v.includes(H)||v.push(H)}for(let H=v.length-1;H>0;H--){const le=Math.floor(Math.random()*(H+1));[v[H],v[le]]=[v[le],v[H]]}return e(6,G=v),!0},T=()=>{M()&&(e(26,d=!0),h==null||h.addEventListener("finish",f),h==null||h.play())},N=()=>{e(18,C=!0),w(),h==null||h.pause()},Q=()=>{e(18,C=!1),A(),h==null||h.play()},U=i=>{e(0,I=!1),e(6,G=Array(i).fill("?")),e(1,c={}),w(),h==null||h.cancel(),e(22,k=[]),e(2,Y=new Set),e(7,V="?")},te=i=>{const F=[];for(let v=1;v<=10;v++)F.push(v);k.push([i,F])};let I=!1,C=!1,j,B,V="?",L,c={},k=[],b,D,Y=new Set,h,d=!1,y,r,p,s=+(localStorage.getItem("numberOfChoices")||"2"),G=Array(s).fill("?");function Ge(i){ae[i?"unshift":"push"](()=>{r=i,e(4,r)})}function Ie(i){ae[i?"unshift":"push"](()=>{p=i,e(8,p)})}function Ye(i){ae[i?"unshift":"push"](()=>{y=i,e(3,y),e(2,Y),e(22,k),e(1,c),e(0,I),e(25,h),e(18,C),e(5,s),e(6,G),e(21,L),e(19,j),e(20,B),e(23,b),e(24,D),e(26,d),e(4,r)})}function He(){s=Fe(this.value),e(5,s)}const Qe=()=>U(s);return t.$$.update=()=>{t.$$.dirty[0]&16&&r&&e(25,h=new Animation(new KeyframeEffect(r,[{transform:"translateY(0)"},{transform:"translateY(420px)"}],{duration:7e3,fill:"forwards"}),document.timeline)),t.$$.dirty[0]&133955695&&y&&e(3,y.onclick=i=>{var _e,ce,ge;i.preventDefault();const F=y.getBoundingClientRect(),v=F.width,H=F.height,le=F.left+window.scrollX,ue=F.top+window.scrollY,se=H-v,je=se/3*2;if(i.pageY<ue+(H-se)){const Z=Math.trunc((i.pageX-le)/(v/5))+1,Xe=Math.trunc((i.pageY-ue)/((H-se)/2)),ee=Z+5*Xe;if(Y.has(ee)){Y.delete(ee);const pe=k.findIndex(ze=>ze[0]===ee);pe!==-1&&k.splice(pe,1),c==null||delete c[ee]}else Y.add(ee),te(ee);e(1,c={...c}),I?M()&&(h==null||h.cancel(),C||N()):(e(0,I=!0),e(18,C=!0),M())}else if(i.pageY<ue+(H-se)+je){const Z=Math.trunc((i.pageX-le)/(v/s));G[Z]===L?(((_e=c==null?void 0:c[j])==null?void 0:_e[B])!==-1?((ce=k==null?void 0:k[b])==null||ce[1].splice(D,1),(ge=k==null?void 0:k[b])!=null&&ge[1].length||(Y.delete(k[b][0]),k==null||k.splice(b,1)),W(1)):W(-2),m(),e(26,d=!1),h==null||h.removeEventListener("finish",f),C&&(e(18,C=!1),A()),h==null||h.cancel(),T()):(W(-1),g())}else if(I)C?Q():d?N():(e(26,d=!0),h.play());else{if(!Y.size)for(let Z=1;Z<=10;Z++)Y.add(Z);Y.forEach(te),e(0,I=!0),A(),T()}},y),t.$$.dirty[0]&32&&localStorage.setItem("numberOfChoices",""+s),t.$$.dirty[0]&32&&e(10,n=(1080-2*2)/s),t.$$.dirty[0]&32&&e(9,u=(1080-2*2)/(s*2)),t.$$.dirty[0]&32&&U(s)},[I,c,Y,y,r,s,G,V,p,u,n,U,1080,1920,2,215.2,840,560,C,j,B,L,k,b,D,h,d,Ge,Ie,Ye,He,Qe]}class Ze extends Be{constructor(l){super(),Re(this,l,Ue,Ne,Te,{},null,[-1,-1])}}export{Ze as default};
