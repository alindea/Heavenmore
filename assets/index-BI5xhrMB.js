const __vite__fileDeps=["assets/TautochroneCurve-Do282AuT.js","assets/TautochroneCurve-MT3b8hXE.css","assets/TheMultiplicationTableGame-yuo2Mq45.js","assets/TheMultiplicationTableGame-in6crHfZ.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
var ht=Object.defineProperty;var gt=(l,e,t)=>e in l?ht(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t;var Ee=(l,e,t)=>(gt(l,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();function b(){}function U(l,e){for(const t in e)l[t]=e[t];return l}function bt(l){return!!l&&(typeof l=="object"||typeof l=="function")&&typeof l.then=="function"}function dt(l){return l()}function Ve(){return Object.create(null)}function re(l){l.forEach(dt)}function _t(l){return typeof l=="function"}function I(l,e){return l!=l?e==e:l!==e||l&&typeof l=="object"||typeof l=="function"}function $t(l){return Object.keys(l).length===0}function K(l,...e){if(l==null){for(const n of e)n(void 0);return b}const t=l.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function ie(l,e,t){l.$$.on_destroy.push(K(e,t))}function Fe(l){const e={};for(const t in l)t[0]!=="$"&&(e[t]=l[t]);return e}function mt(l,e,t){return l.set(t),e}function S(l,e){l.appendChild(e)}function g(l,e,t){l.insertBefore(e,t||null)}function p(l){l.parentNode&&l.parentNode.removeChild(l)}function se(l,e){for(let t=0;t<l.length;t+=1)l[t]&&l[t].d(e)}function v(l){return document.createElement(l)}function Gn(l){return document.createElementNS("http://www.w3.org/2000/svg",l)}function M(l){return document.createTextNode(l)}function B(){return M(" ")}function A(){return M("")}function ee(l,e,t,n){return l.addEventListener(e,t,n),()=>l.removeEventListener(e,t,n)}function N(l,e,t){t==null?l.removeAttribute(e):l.getAttribute(e)!==t&&l.setAttribute(e,t)}const kt=["width","height"];function vt(l,e){const t=Object.getOwnPropertyDescriptors(l.__proto__);for(const n in e)e[n]==null?l.removeAttribute(n):n==="style"?l.style.cssText=e[n]:n==="__value"?l.value=l[n]=e[n]:t[n]&&t[n].set&&kt.indexOf(n)===-1?l[n]=e[n]:N(l,n,e[n])}function yt(l,e){Object.keys(e).forEach(t=>{wt(l,t,e[t])})}function wt(l,e,t){const n=e.toLowerCase();n in l?l[n]=typeof l[n]=="boolean"&&t===""?!0:t:e in l?l[e]=typeof l[e]=="boolean"&&t===""?!0:t:N(l,e,t)}function X(l){return/-/.test(l)?yt:vt}function Kn(l){return l===""?null:+l}function Nt(l){return Array.from(l.childNodes)}function ke(l,e){e=""+e,l.data!==e&&(l.data=e)}function ae(l,e){l.value=e??""}function _e(l,e,t,n){t==null?l.style.removeProperty(e):l.style.setProperty(e,t,"")}function J(l,e,t){for(let n=0;n<l.options.length;n+=1){const o=l.options[n];if(o.__value===e){o.selected=!0;return}}(!t||e!==void 0)&&(l.selectedIndex=-1)}function ve(l){const e=l.querySelector(":checked");return e&&e.__value}function H(l,e,t){l.classList.toggle(e,!!t)}function Ue(l,e){return new l(e)}let fe;function F(l){fe=l}function St(){if(!fe)throw new Error("Function called outside component initialization");return fe}const le=[],$e=[];let oe=[];const Xe=[],Et=Promise.resolve();let je=!1;function Ct(){je||(je=!0,Et.then(qe))}function W(l){oe.push(l)}const Ce=new Set;let te=0;function qe(){if(te!==0)return;const l=fe;do{try{for(;te<le.length;){const e=le[te];te++,F(e),It(e.$$)}}catch(e){throw le.length=0,te=0,e}for(F(null),le.length=0,te=0;$e.length;)$e.pop()();for(let e=0;e<oe.length;e+=1){const t=oe[e];Ce.has(t)||(Ce.add(t),t())}oe.length=0}while(le.length);for(;Xe.length;)Xe.pop()();je=!1,Ce.clear(),F(l)}function It(l){if(l.fragment!==null){l.update(),re(l.before_update);const e=l.dirty;l.dirty=[-1],l.fragment&&l.fragment.p(l.ctx,e),l.after_update.forEach(W)}}function Ot(l){const e=[],t=[];oe.forEach(n=>l.indexOf(n)===-1?e.push(n):t.push(n)),t.forEach(n=>n()),oe=e}const pe=new Set;let G;function R(){G={r:0,c:[],p:G}}function V(){G.r||re(G.c),G=G.p}function $(l,e){l&&l.i&&(pe.delete(l),l.i(e))}function k(l,e,t,n){if(l&&l.o){if(pe.has(l))return;pe.add(l),G.c.push(()=>{pe.delete(l),n&&(t&&l.d(1),n())}),l.o(e)}else n&&n()}function Lt(l,e){const t=e.token={};function n(o,r,i,c){if(e.token!==t)return;e.resolved=c;let u=e.ctx;i!==void 0&&(u=u.slice(),u[i]=c);const s=o&&(e.current=o)(u);let a=!1;e.block&&(e.blocks?e.blocks.forEach((f,d)=>{d!==r&&f&&(R(),k(f,1,1,()=>{e.blocks[d]===f&&(e.blocks[d]=null)}),V())}):e.block.d(1),s.c(),$(s,1),s.m(e.mount(),e.anchor),a=!0),e.block=s,e.blocks&&(e.blocks[r]=s),a&&qe()}if(bt(l)){const o=St();if(l.then(r=>{F(o),n(e.then,1,e.value,r),F(null)},r=>{if(F(o),n(e.catch,2,e.error,r),F(null),!e.hasCatch)throw r}),e.current!==e.pending)return n(e.pending,0),!0}else{if(e.current!==e.then)return n(e.then,1,e.value,l),!0;e.resolved=l}}function Tt(l,e,t){const n=e.slice(),{resolved:o}=l;l.current===l.then&&(n[l.value]=o),l.current===l.catch&&(n[l.error]=o),l.block.p(n,t)}function D(l){return(l==null?void 0:l.length)!==void 0?l:Array.from(l)}function Wn(l,e){l.d(1),e.delete(l.key)}function Qn(l,e,t,n,o,r,i,c,u,s,a,f){let d=l.length,m=r.length,h=d;const _={};for(;h--;)_[l[h].key]=h;const y=[],w=new Map,O=new Map,ue=[];for(h=m;h--;){const T=f(o,r,h),z=t(T);let q=i.get(z);q?ue.push(()=>q.p(T,e)):(q=s(z,T),q.c()),w.set(z,y[h]=q),z in _&&O.set(z,Math.abs(h-_[z]))}const He=new Set,Re=new Set;function Se(T){$(T,1),T.m(c,a),i.set(T.key,T),a=T.first,m--}for(;d&&m;){const T=y[m-1],z=l[d-1],q=T.key,de=z.key;T===z?(a=T.first,d--,m--):w.has(de)?!i.has(q)||He.has(q)?Se(T):Re.has(de)?d--:O.get(q)>O.get(de)?(Re.add(q),Se(T)):(He.add(de),d--):(u(z,i),d--)}for(;d--;){const T=l[d];w.has(T.key)||u(T,i)}for(;m;)Se(y[m-1]);return re(ue),y}function Q(l,e){const t={},n={},o={$$scope:1};let r=l.length;for(;r--;){const i=l[r],c=e[r];if(c){for(const u in i)u in c||(n[u]=1);for(const u in c)o[u]||(t[u]=c[u],o[u]=1);l[r]=c}else for(const u in i)o[u]=1}for(const i in n)i in t||(t[i]=void 0);return t}function Me(l){return typeof l=="object"&&l!==null?l:{}}function L(l){l&&l.c()}function E(l,e,t){const{fragment:n,after_update:o}=l.$$;n&&n.m(e,t),W(()=>{const r=l.$$.on_mount.map(dt).filter(_t);l.$$.on_destroy?l.$$.on_destroy.push(...r):re(r),l.$$.on_mount=[]}),o.forEach(W)}function C(l,e){const t=l.$$;t.fragment!==null&&(Ot(t.after_update),re(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function At(l,e){l.$$.dirty[0]===-1&&(le.push(l),Ct(),l.$$.dirty.fill(0)),l.$$.dirty[e/31|0]|=1<<e%31}function P(l,e,t,n,o,r,i=null,c=[-1]){const u=fe;F(l);const s=l.$$={fragment:null,ctx:[],props:r,update:b,not_equal:o,bound:Ve(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:Ve(),dirty:c,skip_bound:!1,root:e.target||u.$$.root};i&&i(s.root);let a=!1;if(s.ctx=t?t(l,e.props||{},(f,d,...m)=>{const h=m.length?m[0]:d;return s.ctx&&o(s.ctx[f],s.ctx[f]=h)&&(!s.skip_bound&&s.bound[f]&&s.bound[f](h),a&&At(l,f)),d}):[],s.update(),a=!0,re(s.before_update),s.fragment=n?n(s.ctx):!1,e.target){if(e.hydrate){const f=Nt(e.target);s.fragment&&s.fragment.l(f),f.forEach(p)}else s.fragment&&s.fragment.c();e.intro&&$(l.$$.fragment),E(l,e.target,e.anchor),qe()}F(u)}class j{constructor(){Ee(this,"$$");Ee(this,"$$set")}$destroy(){C(this,1),this.$destroy=b}$on(e,t){if(!_t(t))return b;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const o=n.indexOf(t);o!==-1&&n.splice(o,1)}}$set(e){this.$$set&&!$t(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Pt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Pt);const ne=[];function Z(l,e=b){let t;const n=new Set;function o(c){if(I(l,c)&&(l=c,t)){const u=!ne.length;for(const s of n)s[1](),ne.push(s,l);if(u){for(let s=0;s<ne.length;s+=2)ne[s][0](ne[s+1]);ne.length=0}}}function r(c){o(c(l))}function i(c,u=b){const s=[c,u];return n.add(s),n.size===1&&(t=e(o,r)||b),c(l),()=>{n.delete(s),n.size===0&&t&&(t(),t=null)}}return{set:o,update:r,subscribe:i}}const he=Z([]),jt=(...l)=>he.update(e=>[...l.map(t=>({type:"error",value:t})),...e]);function Je(l,e,t){const n=l.slice();return n[5]=e[t],n[7]=t,n}function Ye(l){let e,t,n,o=D(l[1]),r=[];for(let i=0;i<o.length;i+=1)r[i]=Ge(Je(l,o,i));return{c(){e=v("dialog");for(let i=0;i<r.length;i+=1)r[i].c();N(e,"role","presentation"),N(e,"class","svelte-fghd0")},m(i,c){g(i,e,c);for(let u=0;u<r.length;u+=1)r[u]&&r[u].m(e,null);l[3](e),t||(n=ee(e,"click",l[4]),t=!0)},p(i,c){if(c&2){o=D(i[1]);let u;for(u=0;u<o.length;u+=1){const s=Je(i,o,u);r[u]?r[u].p(s,c):(r[u]=Ge(s),r[u].c(),r[u].m(e,null))}for(;u<r.length;u+=1)r[u].d(1);r.length=o.length}},d(i){i&&p(e),se(r,i),l[3](null),t=!1,n()}}}function Ge(l){let e,t,n,o=l[5].value+"",r,i,c;function u(){return l[2](l[7])}return{c(){e=v("pre"),t=v("button"),t.textContent="×",n=M(" "),r=M(o),N(t,"type","button"),N(e,"class","svelte-fghd0"),H(e,"error",l[5].error)},m(s,a){g(s,e,a),S(e,t),S(e,n),S(e,r),i||(c=ee(t,"click",u),i=!0)},p(s,a){l=s,a&2&&o!==(o=l[5].value+"")&&ke(r,o),a&2&&H(e,"error",l[5].error)},d(s){s&&p(e),i=!1,c()}}}function Mt(l){let e,t=l[1].length&&Ye(l);return{c(){t&&t.c(),e=A()},m(n,o){t&&t.m(n,o),g(n,e,o)},p(n,[o]){n[1].length?t?t.p(n,o):(t=Ye(n),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:b,o:b,d(n){n&&p(e),t&&t.d(n)}}}function Dt(l,e,t){let n;ie(l,he,u=>t(1,n=u));let o;const r=u=>mt(he,n=n.filter((s,a)=>u!==a),n);function i(u){$e[u?"unshift":"push"](()=>{o=u,t(0,o)})}const c=u=>{const s=o.getBoundingClientRect();s.top<=u.clientY&&u.clientY<=s.top+s.height&&s.left<=u.clientX&&u.clientX<=s.left+s.width||he.set([])};return l.$$.update=()=>{l.$$.dirty&1&&(o==null||o.showModal())},[o,n,r,i,c]}class zt extends j{constructor(e){super(),P(this,e,Dt,Mt,I,{})}}const Ke=[{value:"",label:"none",source:"",opacity:{light:.5,dark:.5}},{value:"pexels-roman-odintsov-5668103.jpg",label:"dawn",source:"https://www.pexels.com/photo/photo-of-clouds-during-dawn-5668103/",opacity:{light:.95,dark:.8}}],Y={light:[...Ke,{value:"pexels-snapwire-37728.jpg",label:"clouds",source:"https://www.pexels.com/photo/cloudy-sky-37728/",opacity:{light:.5}},{value:"pexels-2091109.jpg",label:"flowers",source:"https://www.pexels.com/photo/shallow-focus-photo-of-white-flowers-2091109/",opacity:{light:.95}}],dark:[...Ke,{value:"flower-729514_1920.jpg",label:"lily",source:"https://pixabay.com/photos/flower-lily-lilium-candidum-729514/",opacity:{dark:.95}},{value:"starry-sky-2051448_1920.jpg",label:"stars",source:"https://pixabay.com/photos/starry-sky-night-sky-stars-2051448/",opacity:{dark:.75}}]},ce={light:Z(localStorage.getItem("background image light")||Y.light[2].value),dark:Z(localStorage.getItem("background image dark")||Y.dark[2].value)};ce.light.subscribe(l=>{localStorage.setItem("background image light",l)});ce.dark.subscribe(l=>{localStorage.setItem("background image dark",l)});const ge="#f5f5f5",be="#262626",ye=[{label:"auto",value:"auto",colors:[be,ge]},{label:"light",value:"light",colors:[ge,ge]},{label:"dark",value:"dark",colors:[be,be]}],De=ye[1].value,We=document.documentElement.dataset,Qe=document.querySelector('meta[media="(prefers-color-scheme: light)"]'),Ze=document.querySelector('meta[media="(prefers-color-scheme: dark)"]'),Be=matchMedia("(prefers-color-scheme: dark)"),x=Z(De!=="auto"?De:Be.matches?"dark":"light");Be.addEventListener("change",l=>{const e=l.matches?"dark":"light";x.set(e)});const ze=Z(De,l=>{var n;const e=localStorage.getItem("color scheme");if(!e)return;const t=(n=ye.find(o=>o.value===e))==null?void 0:n.value;t&&l(t)});ze.subscribe(l=>{var t;const e=((t=ye.find(n=>n.value===l))==null?void 0:t.colors)||[be,ge];Ze&&(Ze.content=e[0]),Qe&&(Qe.content=e[1]),l==="auto"?(delete We.color_scheme,x.set(Be.matches?"dark":"light")):(We.color_scheme=l,x.set(l)),localStorage.setItem("color scheme",l)});const we={light:{},dark:{}};Y.light.forEach(l=>{we.light[l.value]=Z(parseFloat(localStorage.getItem(`background image opacity light ${l.value}`)||l.opacity.light.toString()))});Y.dark.forEach(l=>{we.dark[l.value]=Z(parseFloat(localStorage.getItem(`background image opacity dark ${l.value}`)||l.opacity.dark.toString()))});function qt(l){let e,t,n,o,r=Math.round(l[1]*100)+"",i,c,u,s;return{c(){e=v("form"),t=v("input"),o=v("small"),i=M(r),c=M("%"),N(t,"type","range"),N(t,"min","5"),N(t,"max","95"),N(t,"step","1"),N(t,"title","background image opacity"),t.value=n=Math.round(l[1]*100)},m(a,f){g(a,e,f),S(e,t),S(e,o),S(o,i),S(o,c),u||(s=ee(t,"input",l[5]),u=!0)},p(a,[f]){f&2&&n!==(n=Math.round(a[1]*100))&&(t.value=n),f&2&&r!==(r=Math.round(a[1]*100)+"")&&ke(i,r)},i:b,o:b,d(a){a&&p(e),u=!1,s()}}}function Bt(l,e,t){let n,o,r,i=b,c=()=>(i(),i=K(o,m=>t(1,r=m)),o),u,s=b,a=()=>(s(),s=K(n,m=>t(3,u=m)),n),f;ie(l,x,m=>t(4,f=m)),l.$$.on_destroy.push(()=>i()),l.$$.on_destroy.push(()=>s());const d=m=>mt(o,r=+m.currentTarget.value/100,r);return l.$$.update=()=>{l.$$.dirty&16&&a(t(2,n=ce[f])),l.$$.dirty&24&&c(t(0,o=we[f][u])),l.$$.dirty&27&&o&&localStorage.setItem(`background image opacity ${f} ${u}`,r.toString())},[o,r,n,u,f,d]}class Ht extends j{constructor(e){super(),P(this,e,Bt,qt,I,{})}}const Rt="modulepreload",Vt=function(l){return"/"+l},xe={},me=function(e,t,n){let o=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),i=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));o=Promise.all(t.map(c=>{if(c=Vt(c),c in xe)return;xe[c]=!0;const u=c.endsWith(".css"),s=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${s}`))return;const a=document.createElement("link");if(a.rel=u?"stylesheet":Rt,u||(a.as="script",a.crossOrigin=""),a.href=c,i&&a.setAttribute("nonce",i),document.head.appendChild(a),u)return new Promise((f,d)=>{a.addEventListener("load",f),a.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${c}`)))})}))}return o.then(()=>e()).catch(r=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=r,window.dispatchEvent(i),!i.defaultPrevented)throw r})};function Ft(l){let e;return{c(){e=v("pre"),e.textContent=`Component "${l[0].name}" not found`,N(e,"class","svelte-10sxj2q")},m(t,n){g(t,e,n)},p:b,i:b,o:b,d(t){t&&p(e)}}}function Ut(l){let e,t,n={ctx:l,current:null,token:null,hasCatch:!0,pending:Yt,then:Jt,catch:Xt,value:3,error:4,blocks:[,,,]};return Lt(l[1].fun(),n),{c(){e=A(),n.block.c()},m(o,r){g(o,e,r),n.block.m(o,n.anchor=r),n.mount=()=>e.parentNode,n.anchor=e,t=!0},p(o,r){l=o,Tt(n,l,r)},i(o){t||($(n.block),t=!0)},o(o){for(let r=0;r<3;r+=1){const i=n.blocks[r];k(i)}t=!1},d(o){o&&p(e),n.block.d(o),n.token=null,n=null}}}function Xt(l){let e;return{c(){e=v("pre"),e.textContent=`${l[4].message}`,N(e,"class","svelte-10sxj2q")},m(t,n){g(t,e,n)},p:b,i:b,o:b,d(t){t&&p(e)}}}function Jt(l){let e,t,n;const o=[l[1].props];var r=l[3].default;function i(c,u){let s={};for(let a=0;a<o.length;a+=1)s=U(s,o[a]);return u!==void 0&&u&2&&(s=U(s,Q(o,[Me(c[1].props)]))),{props:s}}return r&&(e=Ue(r,i(l))),{c(){e&&L(e.$$.fragment),t=A()},m(c,u){e&&E(e,c,u),g(c,t,u),n=!0},p(c,u){if(r!==(r=c[3].default)){if(e){R();const s=e;k(s.$$.fragment,1,0,()=>{C(s,1)}),V()}r?(e=Ue(r,i(c,u)),L(e.$$.fragment),$(e.$$.fragment,1),E(e,t.parentNode,t)):e=null}else if(r){const s=u&2?Q(o,[Me(c[1].props)]):{};e.$set(s)}},i(c){n||(e&&$(e.$$.fragment,c),n=!0)},o(c){e&&k(e.$$.fragment,c),n=!1},d(c){c&&p(t),e&&C(e,c)}}}function Yt(l){return{c:b,m:b,p:b,i:b,o:b,d:b}}function Gt(l){let e,t,n,o;const r=[Ut,Ft],i=[];function c(u,s){var a;return(a=u[1])!=null&&a.fun?0:1}return e=c(l),t=i[e]=r[e](l),{c(){t.c(),n=A()},m(u,s){i[e].m(u,s),g(u,n,s),o=!0},p(u,[s]){t.p(u,s)},i(u){o||($(t),o=!0)},o(u){k(t),o=!1},d(u){u&&p(n),i[e].d(u)}}}function Kt(l,e,t){const n=e,o={"Angel icon":{fun:()=>me(()=>import("./AngelSvg-DKT1SxW9.js"),[]),props:{height:n.height||".85em"}},"Link icon":{fun:()=>me(()=>import("./LinkSvg-Cbf_PMXd.js"),[]),props:{height:n.height||".65em"}},"Tautochrone curve":{fun:()=>me(()=>import("./TautochroneCurve-Do282AuT.js"),__vite__mapDeps([0,1]))},"The multiplication table game":{fun:()=>me(()=>import("./TheMultiplicationTableGame-yuo2Mq45.js"),__vite__mapDeps([2,3]))}}[n.name||""];return l.$$set=r=>{t(2,e=U(U({},e),Fe(r)))},e=Fe(e),[n,o]}class pt extends j{constructor(e){super(),P(this,e,Kt,Gt,I,{})}}function Wt(l){let e,t,n,o,r;return n=new pt({props:{name:"Link icon",height:"1em"}}),{c(){var i;e=v("small"),t=v("a"),L(n.$$.fragment),N(t,"title","background image source"),N(t,"href",o=((i=Y[l[0]].find(l[3]))==null?void 0:i.source)||"/")},m(i,c){g(i,e,c),S(e,t),E(n,t,null),r=!0},p(i,[c]){var u;(!r||c&5&&o!==(o=((u=Y[i[0]].find(i[3]))==null?void 0:u.source)||"/"))&&N(t,"href",o)},i(i){r||($(n.$$.fragment,i),r=!0)},o(i){k(n.$$.fragment,i),r=!1},d(i){i&&p(e),C(n)}}}function Qt(l,e,t){let n,o,r,i=b,c=()=>(i(),i=K(n,s=>t(2,r=s)),n);ie(l,x,s=>t(0,o=s)),l.$$.on_destroy.push(()=>i());const u=s=>s.value===r;return l.$$.update=()=>{l.$$.dirty&1&&c(t(1,n=ce[o]))},[o,n,r,u]}class Zt extends j{constructor(e){super(),P(this,e,Qt,Wt,I,{})}}function et(l,e,t){const n=l.slice();return n[3]=e[t].value,n[4]=e[t].label,n}function tt(l){let e,t=l[4]+"",n;return{c(){e=v("option"),n=M(t),e.__value=l[3],ae(e,e.__value)},m(o,r){g(o,e,r),S(e,n)},p:b,d(o){o&&p(e)}}}function xt(l){let e,t;return e=new Zt({}),{c(){L(e.$$.fragment)},m(n,o){E(e,n,o),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function en(l){let e,t;return e=new Ht({}),{c(){L(e.$$.fragment)},m(n,o){E(e,n,o),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function tn(l){let e,t,n,o,r,i,c,u,s=D(l[1]),a=[];for(let h=0;h<s.length;h+=1)a[h]=tt(et(l,s,h));const f=[en,xt],d=[];function m(h,_){return h[0]==="opacity"?0:h[0]==="source"?1:-1}return~(n=m(l))&&(o=d[n]=f[n](l)),{c(){e=v("select");for(let h=0;h<a.length;h+=1)a[h].c();t=B(),o&&o.c(),r=A(),N(e,"title","image options"),l[0]===void 0&&W(()=>l[2].call(e))},m(h,_){g(h,e,_);for(let y=0;y<a.length;y+=1)a[y]&&a[y].m(e,null);J(e,l[0],!0),g(h,t,_),~n&&d[n].m(h,_),g(h,r,_),i=!0,c||(u=ee(e,"change",l[2]),c=!0)},p(h,[_]){if(_&2){s=D(h[1]);let w;for(w=0;w<s.length;w+=1){const O=et(h,s,w);a[w]?a[w].p(O,_):(a[w]=tt(O),a[w].c(),a[w].m(e,null))}for(;w<a.length;w+=1)a[w].d(1);a.length=s.length}_&3&&J(e,h[0]);let y=n;n=m(h),n!==y&&(o&&(R(),k(d[y],1,1,()=>{d[y]=null}),V()),~n?(o=d[n],o||(o=d[n]=f[n](h),o.c()),$(o,1),o.m(r.parentNode,r)):o=null)},i(h){i||($(o),i=!0)},o(h){k(o),i=!1},d(h){h&&(p(e),p(t),p(r)),se(a,h),~n&&d[n].d(h),c=!1,u()}}}function nn(l,e,t){var i;const n=[{value:"",label:""},{value:"opacity",label:"Opacity"},{value:"source",label:"Source"}];let o=((i=n.find(c=>c.value===localStorage.getItem("background image options")))==null?void 0:i.value)||n[0].value;function r(){o=ve(this),t(0,o),t(1,n)}return l.$$.update=()=>{l.$$.dirty&1&&localStorage.setItem("background image options",o)},[o,n,r]}class ln extends j{constructor(e){super(),P(this,e,nn,tn,I,{})}}function nt(l,e,t){const n=l.slice();return n[4]=e[t].value,n[5]=e[t].label,n}function lt(l){let e,t=l[5]+"",n,o;return{c(){e=v("option"),n=M(t),e.__value=o=l[4],ae(e,e.__value)},m(r,i){g(r,e,i),S(e,n)},p(r,i){i&1&&t!==(t=r[5]+"")&&ke(n,t),i&1&&o!==(o=r[4])&&(e.__value=o,ae(e,e.__value))},d(r){r&&p(e)}}}function ot(l){let e,t;return e=new ln({}),{c(){L(e.$$.fragment)},m(n,o){E(e,n,o),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function on(l){let e,t,n,o,r,i,c,u=D(Y[l[0]]),s=[];for(let f=0;f<u.length;f+=1)s[f]=lt(nt(l,u,f));let a=l[2]!==""&&ot();return{c(){e=v("form"),t=v("select");for(let f=0;f<s.length;f+=1)s[f].c();n=B(),a&&a.c(),o=A(),N(t,"title","background image"),l[2]===void 0&&W(()=>l[3].call(t))},m(f,d){g(f,e,d),S(e,t);for(let m=0;m<s.length;m+=1)s[m]&&s[m].m(t,null);J(t,l[2],!0),g(f,n,d),a&&a.m(f,d),g(f,o,d),r=!0,i||(c=ee(t,"change",l[3]),i=!0)},p(f,[d]){if(d&1){u=D(Y[f[0]]);let m;for(m=0;m<u.length;m+=1){const h=nt(f,u,m);s[m]?s[m].p(h,d):(s[m]=lt(h),s[m].c(),s[m].m(t,null))}for(;m<s.length;m+=1)s[m].d(1);s.length=u.length}d&5&&J(t,f[2]),f[2]!==""?a?d&4&&$(a,1):(a=ot(),a.c(),$(a,1),a.m(o.parentNode,o)):a&&(R(),k(a,1,1,()=>{a=null}),V())},i(f){r||($(a),r=!0)},o(f){k(a),r=!1},d(f){f&&(p(e),p(n),p(o)),se(s,f),a&&a.d(f),i=!1,c()}}}function rn(l,e,t){let n,o,r,i=b,c=()=>(i(),i=K(n,s=>t(2,r=s)),n);ie(l,x,s=>t(0,o=s)),l.$$.on_destroy.push(()=>i());function u(){r=ve(this),n.set(r)}return l.$$.update=()=>{l.$$.dirty&1&&c(t(1,n=ce[o]))},[o,n,r,u]}let sn=class extends j{constructor(e){super(),P(this,e,rn,on,I,{})}};function cn(l,e,t){const n=l.slice();return n[2]=e[t].value,n[3]=e[t].label,n}function un(l){let e;return{c(){e=v("option"),e.textContent=`${l[3]}`,e.__value=l[2],ae(e,e.__value)},m(t,n){g(t,e,n)},p:b,d(t){t&&p(e)}}}function an(l){let e,t,n,o,r=D(ye),i=[];for(let c=0;c<r.length;c+=1)i[c]=un(cn(l,r,c));return{c(){e=v("form"),t=v("select");for(let c=0;c<i.length;c+=1)i[c].c();N(t,"title","color scheme"),l[0]===void 0&&W(()=>l[1].call(t))},m(c,u){g(c,e,u),S(e,t);for(let s=0;s<i.length;s+=1)i[s]&&i[s].m(t,null);J(t,l[0],!0),n||(o=ee(t,"change",l[1]),n=!0)},p(c,[u]){u&1&&J(t,c[0])},i:b,o:b,d(c){c&&p(e),se(i,c),n=!1,o()}}}function fn(l,e,t){let n;ie(l,ze,r=>t(0,n=r));function o(){n=ve(this),ze.set(n)}return[n,o]}class dn extends j{constructor(e){super(),P(this,e,fn,an,I,{})}}function rt(l,e,t){const n=l.slice();return n[3]=e[t].value,n[4]=e[t].label,n}function it(l){let e,t=l[4]+"",n;return{c(){e=v("option"),n=M(t),e.__value=l[3],ae(e,e.__value)},m(o,r){g(o,e,r),S(e,n)},p:b,d(o){o&&p(e)}}}function _n(l){let e,t;return e=new sn({}),{c(){L(e.$$.fragment)},m(n,o){E(e,n,o),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function mn(l){let e,t;return e=new dn({}),{c(){L(e.$$.fragment)},m(n,o){E(e,n,o),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function pn(l){let e,t,n,o,r,i,c,u,s,a=D(l[1]),f=[];for(let _=0;_<a.length;_+=1)f[_]=it(rt(l,a,_));const d=[mn,_n],m=[];function h(_,y){return _[0]==="colors"?0:_[0]==="background-image"?1:-1}return~(o=h(l))&&(r=m[o]=d[o](l)),{c(){e=v("form"),t=v("select");for(let _=0;_<f.length;_+=1)f[_].c();n=B(),r&&r.c(),i=A(),N(t,"title","page"),l[0]===void 0&&W(()=>l[2].call(t))},m(_,y){g(_,e,y),S(e,t);for(let w=0;w<f.length;w+=1)f[w]&&f[w].m(t,null);J(t,l[0],!0),g(_,n,y),~o&&m[o].m(_,y),g(_,i,y),c=!0,u||(s=ee(t,"change",l[2]),u=!0)},p(_,[y]){if(y&2){a=D(_[1]);let O;for(O=0;O<a.length;O+=1){const ue=rt(_,a,O);f[O]?f[O].p(ue,y):(f[O]=it(ue),f[O].c(),f[O].m(t,null))}for(;O<f.length;O+=1)f[O].d(1);f.length=a.length}y&3&&J(t,_[0]);let w=o;o=h(_),o!==w&&(r&&(R(),k(m[w],1,1,()=>{m[w]=null}),V()),~o?(r=m[o],r||(r=m[o]=d[o](_),r.c()),$(r,1),r.m(i.parentNode,i)):r=null)},i(_){c||($(r),c=!0)},o(_){k(r),c=!1},d(_){_&&(p(e),p(n),p(i)),se(f,_),~o&&m[o].d(_),u=!1,s()}}}function hn(l,e,t){var i;const n=[{value:"",label:""},{value:"background-image",label:"Background image"},{value:"colors",label:"Colors"}];let o=((i=n.find(c=>c.value===localStorage.getItem("page")))==null?void 0:i.value)||n[0].value;function r(){o=ve(this),t(0,o),t(1,n)}return l.$$.update=()=>{l.$$.dirty&1&&localStorage.setItem("page",o)},[o,n,r]}class gn extends j{constructor(e){super(),P(this,e,hn,pn,I,{})}}function bn(l){let e,t,n;return t=new gn({}),{c(){e=v("nav"),L(t.$$.fragment)},m(o,r){g(o,e,r),E(t,e,null),n=!0},p:b,i(o){n||($(t.$$.fragment,o),n=!0)},o(o){k(t.$$.fragment,o),n=!1},d(o){o&&p(e),C(t)}}}function $n(l){var n;const e=[{value:"",label:""},{value:"page",label:"Page"},{value:"content",label:"Content"}];let t=((n=e.find(o=>o.value===localStorage.getItem("select")))==null?void 0:n.value)||e[0].value;return localStorage.setItem("select",t),[]}class kn extends j{constructor(e){super(),P(this,e,$n,bn,I,{})}}function st(l){let e;return{c(){e=M("Loading")},m(t,n){g(t,e,n)},d(t){t&&p(e)}}}function Ie(l){let e,t=!l[0]&&st();return{c(){e=v(l[0]?"span":"div"),t&&t.c(),X(l[0]?"span":"div")(e,{class:"loading svelte-tw2gob"})},m(n,o){g(n,e,o),t&&t.m(e,null)},p(n,o){n[0]?t&&(t.d(1),t=null):t||(t=st(),t.c(),t.m(e,null))},d(n){n&&p(e),t&&t.d()}}}function vn(l){let e=l[0]?"span":"div",t,n=(l[0]?"span":"div")&&Ie(l);return{c(){n&&n.c(),t=A()},m(o,r){n&&n.m(o,r),g(o,t,r)},p(o,[r]){o[0],e?I(e,o[0]?"span":"div")?(n.d(1),n=Ie(o),e=o[0]?"span":"div",n.c(),n.m(t.parentNode,t)):n.p(o,r):(n=Ie(o),e=o[0]?"span":"div",n.c(),n.m(t.parentNode,t))},i:b,o:b,d(o){o&&p(t),n&&n.d(o)}}}function yn(l,e,t){let{inline:n=!1}=e;return l.$$set=o=>{"inline"in o&&t(0,n=o.inline)},[n]}class wn extends j{constructor(e){super(),P(this,e,yn,vn,I,{inline:0})}}function ct(l,e,t){const n=l.slice();return n[6]=e[t],n}function Oe(l){const e=l.slice(),t=e[11].split(/({.*})/);return e[12]=t[0],e[13]=t[1],e}function Nn(l){var n;const e=l.slice(),t=((n=e[6].textContent)==null?void 0:n.trim().toLowerCase().replace(/\s+/g,"-"))||"";return e[10]=t,e}function Sn(l){var n,o;const e=l.slice(),t=(o=(n=e[6].nodeValue)==null?void 0:n.split("component:"))==null?void 0:o[1];return e[11]=t,e}function En(l){const e=l.slice(),t=e[3](e[6]);return e[9]=t,e}function Cn(l){let e,t;return e=new wn({}),{c(){L(e.$$.fragment)},m(n,o){E(e,n,o),t=!0},p:b,i(n){t||($(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function In(l){let e,t,n=D([...l[0]]),o=[];for(let i=0;i<n.length;i+=1)o[i]=at(ct(l,n,i));const r=i=>k(o[i],1,1,()=>{o[i]=null});return{c(){for(let i=0;i<o.length;i+=1)o[i].c();e=A()},m(i,c){for(let u=0;u<o.length;u+=1)o[u]&&o[u].m(i,c);g(i,e,c),t=!0},p(i,c){if(c&31){n=D([...i[0]]);let u;for(u=0;u<n.length;u+=1){const s=ct(i,n,u);o[u]?(o[u].p(s,c),$(o[u],1)):(o[u]=at(s),o[u].c(),$(o[u],1),o[u].m(e.parentNode,e))}for(R(),u=n.length;u<o.length;u+=1)r(u);V()}},i(i){if(!t){for(let c=0;c<n.length;c+=1)$(o[c]);t=!0}},o(i){o=o.filter(Boolean);for(let c=0;c<o.length;c+=1)k(o[c]);t=!1},d(i){i&&p(e),se(o,i)}}}function On(l){let e,t,n=l[11]&&ut(Oe(l));return{c(){n&&n.c(),e=A()},m(o,r){n&&n.m(o,r),g(o,e,r),t=!0},p(o,r){o[11]?n?(n.p(Oe(o),r),r&1&&$(n,1)):(n=ut(Oe(o)),n.c(),$(n,1),n.m(e.parentNode,e)):n&&(R(),k(n,1,1,()=>{n=null}),V())},i(o){t||($(n),t=!0)},o(o){k(n),t=!1},d(o){o&&p(e),n&&n.d(o)}}}function Ln(l){let e=l[6].textContent+"",t;return{c(){t=M(e)},m(n,o){g(n,t,o)},p(n,o){o&1&&e!==(e=n[6].textContent+"")&&ke(t,e)},i:b,o:b,d(n){n&&p(t)}}}function Tn(l){let e,t,n,o,r;const i=[Mn,jn,Pn,An],c=[];function u(a,f){return f&1&&(e=null),e==null&&(e=!!["H1","H2","H3","H4","H5","H6"].includes(a[6].nodeName)),e?0:a[6].nodeName==="A"?1:a[6].nodeName==="IMG"?2:3}function s(a,f){return f===0?Nn(a):a}return t=u(l,-1),n=c[t]=i[t](s(l,t)),{c(){n.c(),o=A()},m(a,f){c[t].m(a,f),g(a,o,f),r=!0},p(a,f){let d=t;t=u(a,f),t===d?c[t].p(s(a,t),f):(R(),k(c[d],1,1,()=>{c[d]=null}),V(),n=c[t],n?n.p(s(a,t),f):(n=c[t]=i[t](s(a,t)),n.c()),$(n,1),n.m(o.parentNode,o))},i(a){r||($(n),r=!0)},o(a){k(n),r=!1},d(a){a&&p(o),c[t].d(a)}}}function ut(l){let e,t=" ",n,o;const r=[{name:l[12]},l[4](l[13])];let i={};for(let c=0;c<r.length;c+=1)i=U(i,r[c]);return e=new pt({props:i}),{c(){L(e.$$.fragment),n=M(t)},m(c,u){E(e,c,u),g(c,n,u),o=!0},p(c,u){const s=u&17?Q(r,[u&1&&{name:c[12]},Me(c[4](c[13]))]):{};e.$set(s)},i(c){o||($(e.$$.fragment,c),o=!0)},o(c){k(e.$$.fragment,c),o=!1},d(c){c&&p(n),C(e,c)}}}function An(l){let e=l[6].nodeName,t,n=l[6].nodeName&&Le(l);return{c(){n&&n.c(),t=A()},m(o,r){n&&n.m(o,r),g(o,t,r)},p(o,r){o[6].nodeName?e?I(e,o[6].nodeName)?(n.d(1),n=Le(o),e=o[6].nodeName,n.c(),n.m(t.parentNode,t)):n.p(o,r):(n=Le(o),e=o[6].nodeName,n.c(),n.m(t.parentNode,t)):e&&(n.d(1),n=null,e=o[6].nodeName)},i:b,o(o){k(n,o)},d(o){o&&p(t),n&&n.d(o)}}}function Pn(l){let e=l[6].nodeName,t,n=l[6].nodeName&&Te(l);return{c(){n&&n.c(),t=A()},m(o,r){n&&n.m(o,r),g(o,t,r)},p(o,r){o[6].nodeName?e?I(e,o[6].nodeName)?(n.d(1),n=Te(o),e=o[6].nodeName,n.c(),n.m(t.parentNode,t)):n.p(o,r):(n=Te(o),e=o[6].nodeName,n.c(),n.m(t.parentNode,t)):e&&(n.d(1),n=null,e=o[6].nodeName)},i:b,o:b,d(o){o&&p(t),n&&n.d(o)}}}function jn(l){let e=l[6].nodeName,t,n=l[6].nodeName&&Ae(l);return{c(){n&&n.c(),t=A()},m(o,r){n&&n.m(o,r),g(o,t,r)},p(o,r){o[6].nodeName?e?I(e,o[6].nodeName)?(n.d(1),n=Ae(o),e=o[6].nodeName,n.c(),n.m(t.parentNode,t)):n.p(o,r):(n=Ae(o),e=o[6].nodeName,n.c(),n.m(t.parentNode,t)):e&&(n.d(1),n=null,e=o[6].nodeName)},i:b,o(o){k(n,o)},d(o){o&&p(t),n&&n.d(o)}}}function Mn(l){let e=l[6].nodeName,t,n=l[6].nodeName&&Pe(l);return{c(){n&&n.c(),t=A()},m(o,r){n&&n.m(o,r),g(o,t,r)},p(o,r){o[6].nodeName?e?I(e,o[6].nodeName)?(n.d(1),n=Pe(o),e=o[6].nodeName,n.c(),n.m(t.parentNode,t)):n.p(o,r):(n=Pe(o),e=o[6].nodeName,n.c(),n.m(t.parentNode,t)):e&&(n.d(1),n=null,e=o[6].nodeName)},i:b,o(o){k(n,o)},d(o){o&&p(t),n&&n.d(o)}}}function Le(l){let e,t,n,o;t=new Ne({props:{childNodes:l[6].childNodes,hash:l[1]}});let r=[l[9]],i={};for(let c=0;c<r.length;c+=1)i=U(i,r[c]);return{c(){e=v(l[6].nodeName),L(t.$$.fragment),n=B(),X(l[6].nodeName)(e,i),H(e,"svelte-2c9z0b",!0)},m(c,u){g(c,e,u),E(t,e,null),S(e,n),o=!0},p(c,u){const s={};u&1&&(s.childNodes=c[6].childNodes),u&2&&(s.hash=c[1]),t.$set(s),X(c[6].nodeName)(e,i=Q(r,[u&1&&c[9]])),H(e,"svelte-2c9z0b",!0)},i(c){o||($(t.$$.fragment,c),o=!0)},o(c){k(t.$$.fragment,c),o=!1},d(c){c&&p(e),C(t)}}}function Te(l){let e,t=[l[9]],n={};for(let o=0;o<t.length;o+=1)n=U(n,t[o]);return{c(){e=v(l[6].nodeName),X(l[6].nodeName)(e,n),H(e,"svelte-2c9z0b",!0)},m(o,r){g(o,e,r)},p(o,r){X(o[6].nodeName)(e,n=Q(t,[r&1&&o[9]])),H(e,"svelte-2c9z0b",!0)},d(o){o&&p(e)}}}function Ae(l){let e,t,n;t=new Ne({props:{childNodes:l[6].childNodes,hash:l[1]}});let o=[l[9]],r={};for(let i=0;i<o.length;i+=1)r=U(r,o[i]);return{c(){e=v(l[6].nodeName),L(t.$$.fragment),X(l[6].nodeName)(e,r),H(e,"svelte-2c9z0b",!0)},m(i,c){g(i,e,c),E(t,e,null),n=!0},p(i,c){const u={};c&1&&(u.childNodes=i[6].childNodes),c&2&&(u.hash=i[1]),t.$set(u),X(i[6].nodeName)(e,r=Q(o,[c&1&&i[9]])),H(e,"svelte-2c9z0b",!0)},i(i){n||($(t.$$.fragment,i),n=!0)},o(i){k(t.$$.fragment,i),n=!1},d(i){i&&p(e),C(t)}}}function Pe(l){let e,t,n,o,r,i,c,u,s=l[10],a;i=new Ne({props:{childNodes:l[6].childNodes,hash:l[1]}});let f=[l[9],{id:u=l[10]}],d={};for(let _=0;_<f.length;_+=1)d=U(d,f[_]);const m=()=>l[5](e,s),h=()=>l[5](null,s);return{c(){e=v(l[6].nodeName),t=v("a"),n=M("#"),r=B(),L(i.$$.fragment),c=B(),N(t,"class","link-title svelte-2c9z0b"),N(t,"href",o="#"+l[10]),X(l[6].nodeName)(e,d),H(e,"svelte-2c9z0b",!0)},m(_,y){g(_,e,y),S(e,t),S(t,n),S(e,r),E(i,e,null),S(e,c),m(),a=!0},p(_,y){l=_,(!a||y&1&&o!==(o="#"+l[10]))&&N(t,"href",o);const w={};y&1&&(w.childNodes=l[6].childNodes),y&2&&(w.hash=l[1]),i.$set(w),X(l[6].nodeName)(e,d=Q(f,[y&1&&l[9],(!a||y&1&&u!==(u=l[10]))&&{id:u}])),s!==l[10]&&(h(),s=l[10],m()),H(e,"svelte-2c9z0b",!0)},i(_){a||($(i.$$.fragment,_),a=!0)},o(_){k(i.$$.fragment,_),a=!1},d(_){_&&p(e),C(i),h()}}}function at(l){let e,t,n,o;const r=[Tn,Ln,On],i=[];function c(s,a){return s[6].nodeType===Node.ELEMENT_NODE?0:s[6].nodeType===Node.TEXT_NODE?1:s[6].nodeType===Node.COMMENT_NODE?2:-1}function u(s,a){return a===0?En(s):a===2?Sn(s):s}return~(e=c(l))&&(t=i[e]=r[e](u(l,e))),{c(){t&&t.c(),n=A()},m(s,a){~e&&i[e].m(s,a),g(s,n,a),o=!0},p(s,a){let f=e;e=c(s),e===f?~e&&i[e].p(u(s,e),a):(t&&(R(),k(i[f],1,1,()=>{i[f]=null}),V()),~e?(t=i[e],t?t.p(u(s,e),a):(t=i[e]=r[e](u(s,e)),t.c()),$(t,1),t.m(n.parentNode,n)):t=null)},i(s){o||($(t),o=!0)},o(s){k(t),o=!1},d(s){s&&p(n),~e&&i[e].d(s)}}}function Dn(l){let e,t,n,o;const r=[In,Cn],i=[];function c(u,s){return u[0]?0:1}return e=c(l),t=i[e]=r[e](l),{c(){t.c(),n=A()},m(u,s){i[e].m(u,s),g(u,n,s),o=!0},p(u,[s]){let a=e;e=c(u),e===a?i[e].p(u,s):(R(),k(i[a],1,1,()=>{i[a]=null}),V(),t=i[e],t?t.p(u,s):(t=i[e]=r[e](u),t.c()),$(t,1),t.m(n.parentNode,n))},i(u){o||($(t),o=!0)},o(u){k(t),o=!1},d(u){u&&p(n),i[e].d(u)}}}function zn(l,e,t){let{childNodes:n}=e,{hash:o}=e;const r=s=>{const a=s.attributes,f={};for(const d of a)f[d.name]=d.value||"true";return f},i=s=>{if(!s)return{};try{return JSON.parse(s)}catch{return{}}},c={};function u(s,a){$e[s?"unshift":"push"](()=>{c[a]=s,t(2,c)})}return l.$$set=s=>{"childNodes"in s&&t(0,n=s.childNodes),"hash"in s&&t(1,o=s.hash)},l.$$.update=()=>{var s;l.$$.dirty&6&&((s=c[o])==null||s.scrollIntoView())},[n,o,c,r,i,u]}class Ne extends j{constructor(e){super(),P(this,e,zn,Dn,I,{childNodes:0,hash:1})}}function qn(l){let e,t,n,o,r,i;return r=new Ne({props:{hash:l[1],childNodes:l[0]}}),{c(){e=v("main"),t=v("div"),n=v("h1"),n.innerHTML='<a href="/" class="svelte-11n8ruj">The Book of Heavenmore</a>',o=B(),L(r.$$.fragment),N(n,"class","svelte-11n8ruj")},m(c,u){g(c,e,u),S(e,t),S(t,n),S(t,o),E(r,t,null),i=!0},p(c,[u]){const s={};u&1&&(s.childNodes=c[0]),r.$set(s)},i(c){i||($(r.$$.fragment,c),i=!0)},o(c){k(r.$$.fragment,c),i=!1},d(c){c&&p(e),C(r)}}}const Bn="https://gist.githubusercontent.com/alindea/311ac18445902b1878b936bd5fa06946/raw/book.html";function Hn(l,e,t){let n=location.hash.substring(1);const o=new DOMParser;fetch(Bn+"?v="+Date.now()).then(i=>i.text()).then(i=>{t(0,r=o.parseFromString(i,"text/html").body.childNodes)}).catch(i=>{jt("Content: "+i.message),t(0,r=o.parseFromString("<br/>Content not found","text/html").body.childNodes)});let r;return[r,n]}class Rn extends j{constructor(e){super(),P(this,e,Hn,qn,I,{})}}function ft(l){let e;return{c(){e=v("div"),_e(e,"background-image","url('images/"+l[0]+"')"),_e(e,"opacity",l[3]),N(e,"class","svelte-6yznai")},m(t,n){g(t,e,n)},p(t,n){n&1&&_e(e,"background-image","url('images/"+t[0]+"')"),n&8&&_e(e,"opacity",t[3])},d(t){t&&p(e)}}}function Vn(l){let e,t=l[0]!==""&&ft(l);return{c(){t&&t.c(),e=A()},m(n,o){t&&t.m(n,o),g(n,e,o)},p(n,[o]){n[0]!==""?t?t.p(n,o):(t=ft(n),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:b,o:b,d(n){n&&p(e),t&&t.d(n)}}}function Fn(l,e,t){let n,o,r,i=b,c=()=>(i(),i=K(n,d=>t(0,r=d)),n),u,s,a=b,f=()=>(a(),a=K(o,d=>t(3,s=d)),o);return ie(l,x,d=>t(4,u=d)),l.$$.on_destroy.push(()=>i()),l.$$.on_destroy.push(()=>a()),l.$$.update=()=>{l.$$.dirty&16&&c(t(2,n=ce[u])),l.$$.dirty&17&&f(t(1,o=we[u][r]))},[r,o,n,s,u]}class Un extends j{constructor(e){super(),P(this,e,Fn,Vn,I,{})}}function Xn(l){let e,t,n,o,r,i,c,u;return e=new zt({}),n=new kn({}),r=new Rn({}),c=new Un({}),{c(){L(e.$$.fragment),t=B(),L(n.$$.fragment),o=B(),L(r.$$.fragment),i=B(),L(c.$$.fragment)},m(s,a){E(e,s,a),g(s,t,a),E(n,s,a),g(s,o,a),E(r,s,a),g(s,i,a),E(c,s,a),u=!0},p:b,i(s){u||($(e.$$.fragment,s),$(n.$$.fragment,s),$(r.$$.fragment,s),$(c.$$.fragment,s),u=!0)},o(s){k(e.$$.fragment,s),k(n.$$.fragment,s),k(r.$$.fragment,s),k(c.$$.fragment,s),u=!1},d(s){s&&(p(t),p(o),p(i)),C(e,s),C(n,s),C(r,s),C(c,s)}}}class Jn extends j{constructor(e){super(),P(this,e,null,Xn,I,{})}}new Jn({target:document.body});export{j as S,Gn as a,N as b,g as c,S as d,p as e,U as f,Fe as g,v as h,P as i,B as j,ae as k,ee as l,ke as m,b as n,Kn as o,x as p,$e as q,re as r,I as s,M as t,D as u,Qn as v,se as w,Wn as x,A as y};
