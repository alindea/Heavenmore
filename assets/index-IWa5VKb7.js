const __vite__fileDeps=["assets/TautochroneCurve-Bf2aiNV3.js","assets/TautochroneCurve-DP6OAfHL.css","assets/MultiplicationTableGame-qkMERyXr.js","assets/MultiplicationTableGame-Dx3PrHmi.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
var bt=Object.defineProperty;var $t=(l,e,t)=>e in l?bt(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t;var J=(l,e,t)=>($t(l,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();function p(){}function V(l,e){for(const t in e)l[t]=e[t];return l}function kt(l){return!!l&&(typeof l=="object"||typeof l=="function")&&typeof l.then=="function"}function mt(l){return l()}function Ve(){return Object.create(null)}function se(l){l.forEach(mt)}function ht(l){return typeof l=="function"}function S(l,e){return l!=l?e==e:l!==e||l&&typeof l=="object"||typeof l=="function"}function vt(l){return Object.keys(l).length===0}function Q(l,...e){if(l==null){for(const n of e)n(void 0);return p}const t=l.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function ce(l,e,t){l.$$.on_destroy.push(Q(e,t))}function Fe(l){const e={};for(const t in l)t[0]!=="$"&&(e[t]=l[t]);return e}function pt(l,e,t){return l.set(t),e}function E(l,e){l.appendChild(e)}function h(l,e,t){l.insertBefore(e,t||null)}function m(l){l.parentNode&&l.parentNode.removeChild(l)}function te(l,e){for(let t=0;t<l.length;t+=1)l[t]&&l[t].d(e)}function v(l){return document.createElement(l)}function yt(l){return document.createElementNS("http://www.w3.org/2000/svg",l)}function j(l){return document.createTextNode(l)}function H(){return j(" ")}function I(){return j("")}function ne(l,e,t,n){return l.addEventListener(e,t,n),()=>l.removeEventListener(e,t,n)}function Zn(l){return function(e){return e.preventDefault(),l.call(this,e)}}function w(l,e,t){t==null?l.removeAttribute(e):l.getAttribute(e)!==t&&l.setAttribute(e,t)}const Nt=["width","height"];function wt(l,e){const t=Object.getOwnPropertyDescriptors(l.__proto__);for(const n in e)e[n]==null?l.removeAttribute(n):n==="style"?l.style.cssText=e[n]:n==="__value"?l.value=l[n]=e[n]:t[n]&&t[n].set&&Nt.indexOf(n)===-1?l[n]=e[n]:w(l,n,e[n])}function Et(l,e){Object.keys(e).forEach(t=>{St(l,t,e[t])})}function St(l,e,t){const n=e.toLowerCase();n in l?l[n]=typeof l[n]=="boolean"&&t===""?!0:t:e in l?l[e]=typeof l[e]=="boolean"&&t===""?!0:t:w(l,e,t)}function q(l){return/-/.test(l)?Et:wt}function xn(l){return l===""?null:+l}function It(l){return Array.from(l.childNodes)}function ke(l,e){e=""+e,l.data!==e&&(l.data=e)}function ae(l,e){l.value=e??""}function me(l,e,t,n){t==null?l.style.removeProperty(e):l.style.setProperty(e,t,"")}function Y(l,e,t){for(let n=0;n<l.options.length;n+=1){const o=l.options[n];if(o.__value===e){o.selected=!0;return}}(!t||e!==void 0)&&(l.selectedIndex=-1)}function ve(l){const e=l.querySelector(":checked");return e&&e.__value}function D(l,e,t){l.classList.toggle(e,!!t)}class Tt{constructor(e=!1){J(this,"is_svg",!1);J(this,"e");J(this,"n");J(this,"t");J(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){this.e||(this.is_svg?this.e=yt(t.nodeName):this.e=v(t.nodeType===11?"TEMPLATE":t.nodeName),this.t=t.tagName!=="TEMPLATE"?t:t.content,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)h(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(m)}}function Ue(l,e){return new l(e)}let de;function X(l){de=l}function Ct(){if(!de)throw new Error("Function called outside component initialization");return de}const re=[],$e=[];let ie=[];const Xe=[],Ot=Promise.resolve();let Me=!1;function Lt(){Me||(Me=!0,Ot.then(He))}function Z(l){ie.push(l)}const Se=new Set;let le=0;function He(){if(le!==0)return;const l=de;do{try{for(;le<re.length;){const e=re[le];le++,X(e),At(e.$$)}}catch(e){throw re.length=0,le=0,e}for(X(null),re.length=0,le=0;$e.length;)$e.pop()();for(let e=0;e<ie.length;e+=1){const t=ie[e];Se.has(t)||(Se.add(t),t())}ie.length=0}while(re.length);for(;Xe.length;)Xe.pop()();Me=!1,Se.clear(),X(l)}function At(l){if(l.fragment!==null){l.update(),se(l.before_update);const e=l.dirty;l.dirty=[-1],l.fragment&&l.fragment.p(l.ctx,e),l.after_update.forEach(Z)}}function Pt(l){const e=[],t=[];ie.forEach(n=>l.indexOf(n)===-1?e.push(n):t.push(n)),t.forEach(n=>n()),ie=e}const pe=new Set;let W;function F(){W={r:0,c:[],p:W}}function U(){W.r||se(W.c),W=W.p}function $(l,e){l&&l.i&&(pe.delete(l),l.i(e))}function k(l,e,t,n){if(l&&l.o){if(pe.has(l))return;pe.add(l),W.c.push(()=>{pe.delete(l),n&&(t&&l.d(1),n())}),l.o(e)}else n&&n()}function Mt(l,e){const t=e.token={};function n(o,r,i,u){if(e.token!==t)return;e.resolved=u;let c=e.ctx;i!==void 0&&(c=c.slice(),c[i]=u);const s=o&&(e.current=o)(c);let f=!1;e.block&&(e.blocks?e.blocks.forEach((a,d)=>{d!==r&&a&&(F(),k(a,1,1,()=>{e.blocks[d]===a&&(e.blocks[d]=null)}),U())}):e.block.d(1),s.c(),$(s,1),s.m(e.mount(),e.anchor),f=!0),e.block=s,e.blocks&&(e.blocks[r]=s),f&&He()}if(kt(l)){const o=Ct();if(l.then(r=>{X(o),n(e.then,1,e.value,r),X(null)},r=>{if(X(o),n(e.catch,2,e.error,r),X(null),!e.hasCatch)throw r}),e.current!==e.pending)return n(e.pending,0),!0}else{if(e.current!==e.then)return n(e.then,1,e.value,l),!0;e.resolved=l}}function jt(l,e,t){const n=e.slice(),{resolved:o}=l;l.current===l.then&&(n[l.value]=o),l.current===l.catch&&(n[l.error]=o),l.block.p(n,t)}function z(l){return(l==null?void 0:l.length)!==void 0?l:Array.from(l)}function el(l,e){l.d(1),e.delete(l.key)}function tl(l,e,t,n,o,r,i,u,c,s,f,a){let d=l.length,g=r.length,b=d;const _={};for(;b--;)_[l[b].key]=b;const y=[],N=new Map,O=new Map,fe=[];for(b=g;b--;){const A=a(o,r,b),B=t(A);let R=i.get(B);R?fe.push(()=>R.p(A,e)):(R=s(B,A),R.c()),N.set(B,y[b]=R),B in _&&O.set(B,Math.abs(b-_[B]))}const Be=new Set,Re=new Set;function Ee(A){$(A,1),A.m(u,f),i.set(A.key,A),f=A.first,g--}for(;d&&g;){const A=y[g-1],B=l[d-1],R=A.key,_e=B.key;A===B?(f=A.first,d--,g--):N.has(_e)?!i.has(R)||Be.has(R)?Ee(A):Re.has(_e)?d--:O.get(R)>O.get(_e)?(Re.add(R),Ee(A)):(Be.add(_e),d--):(c(B,i),d--)}for(;d--;){const A=l[d];N.has(A.key)||c(A,i)}for(;g;)Ee(y[g-1]);return se(fe),y}function G(l,e){const t={},n={},o={$$scope:1};let r=l.length;for(;r--;){const i=l[r],u=e[r];if(u){for(const c in i)c in u||(n[c]=1);for(const c in u)o[c]||(t[c]=u[c],o[c]=1);l[r]=u}else for(const c in i)o[c]=1}for(const i in n)i in t||(t[i]=void 0);return t}function je(l){return typeof l=="object"&&l!==null?l:{}}function L(l){l&&l.c()}function T(l,e,t){const{fragment:n,after_update:o}=l.$$;n&&n.m(e,t),Z(()=>{const r=l.$$.on_mount.map(mt).filter(ht);l.$$.on_destroy?l.$$.on_destroy.push(...r):se(r),l.$$.on_mount=[]}),o.forEach(Z)}function C(l,e){const t=l.$$;t.fragment!==null&&(Pt(t.after_update),se(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function zt(l,e){l.$$.dirty[0]===-1&&(re.push(l),Lt(),l.$$.dirty.fill(0)),l.$$.dirty[e/31|0]|=1<<e%31}function P(l,e,t,n,o,r,i=null,u=[-1]){const c=de;X(l);const s=l.$$={fragment:null,ctx:[],props:r,update:p,not_equal:o,bound:Ve(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Ve(),dirty:u,skip_bound:!1,root:e.target||c.$$.root};i&&i(s.root);let f=!1;if(s.ctx=t?t(l,e.props||{},(a,d,...g)=>{const b=g.length?g[0]:d;return s.ctx&&o(s.ctx[a],s.ctx[a]=b)&&(!s.skip_bound&&s.bound[a]&&s.bound[a](b),f&&zt(l,a)),d}):[],s.update(),f=!0,se(s.before_update),s.fragment=n?n(s.ctx):!1,e.target){if(e.hydrate){const a=It(e.target);s.fragment&&s.fragment.l(a),a.forEach(m)}else s.fragment&&s.fragment.c();e.intro&&$(l.$$.fragment),T(l,e.target,e.anchor),He()}X(c)}class M{constructor(){J(this,"$$");J(this,"$$set")}$destroy(){C(this,1),this.$destroy=p}$on(e,t){if(!ht(t))return p;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const o=n.indexOf(t);o!==-1&&n.splice(o,1)}}$set(e){this.$$set&&!vt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Dt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Dt);const oe=[];function x(l,e=p){let t;const n=new Set;function o(u){if(S(l,u)&&(l=u,t)){const c=!oe.length;for(const s of n)s[1](),oe.push(s,l);if(c){for(let s=0;s<oe.length;s+=2)oe[s][0](oe[s+1]);oe.length=0}}}function r(u){o(u(l))}function i(u,c=p){const s=[u,c];return n.add(s),n.size===1&&(t=e(o,r)||p),u(l),()=>{n.delete(s),n.size===0&&t&&(t(),t=null)}}return{set:o,update:r,subscribe:i}}const Ie=x([]);function Je(l,e,t){const n=l.slice();return n[5]=e[t],n[7]=t,n}function Ye(l){let e,t,n,o=z(l[1]),r=[];for(let i=0;i<o.length;i+=1)r[i]=Ge(Je(l,o,i));return{c(){e=v("dialog");for(let i=0;i<r.length;i+=1)r[i].c();w(e,"role","presentation"),w(e,"class","svelte-fghd0")},m(i,u){h(i,e,u);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(e,null);l[3](e),t||(n=ne(e,"click",l[4]),t=!0)},p(i,u){if(u&2){o=z(i[1]);let c;for(c=0;c<o.length;c+=1){const s=Je(i,o,c);r[c]?r[c].p(s,u):(r[c]=Ge(s),r[c].c(),r[c].m(e,null))}for(;c<r.length;c+=1)r[c].d(1);r.length=o.length}},d(i){i&&m(e),te(r,i),l[3](null),t=!1,n()}}}function Ge(l){let e,t,n,o=l[5].value+"",r,i,u;function c(){return l[2](l[7])}return{c(){e=v("pre"),t=v("button"),t.textContent="×",n=j(" "),r=j(o),w(t,"type","button"),w(e,"class","svelte-fghd0"),D(e,"error",l[5].error)},m(s,f){h(s,e,f),E(e,t),E(e,n),E(e,r),i||(u=ne(t,"click",c),i=!0)},p(s,f){l=s,f&2&&o!==(o=l[5].value+"")&&ke(r,o),f&2&&D(e,"error",l[5].error)},d(s){s&&m(e),i=!1,u()}}}function Ht(l){let e,t=l[1].length&&Ye(l);return{c(){t&&t.c(),e=I()},m(n,o){t&&t.m(n,o),h(n,e,o)},p(n,[o]){n[1].length?t?t.p(n,o):(t=Ye(n),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:p,o:p,d(n){n&&m(e),t&&t.d(n)}}}function qt(l,e,t){let n;ce(l,Ie,c=>t(1,n=c));let o;const r=c=>pt(Ie,n=n.filter((s,f)=>c!==f),n);function i(c){$e[c?"unshift":"push"](()=>{o=c,t(0,o)})}const u=c=>{const s=o.getBoundingClientRect();s.top<=c.clientY&&c.clientY<=s.top+s.height&&s.left<=c.clientX&&c.clientX<=s.left+s.width||Ie.set([])};return l.$$.update=()=>{l.$$.dirty&1&&(o==null||o.showModal())},[o,n,r,i,u]}class Bt extends M{constructor(e){super(),P(this,e,qt,Ht,S,{})}}const Ke=[{value:"",label:"none",source:""},{value:"pexels-roman-odintsov-5668103.jpg",label:"dawn",source:"https://www.pexels.com/photo/photo-of-clouds-during-dawn-5668103/",opacity:{light:.25,dark:.6}}],K={light:[...Ke,{value:"pexels-snapwire-37728.jpg",label:"clouds",source:"https://www.pexels.com/photo/cloudy-sky-37728/",opacity:{light:.2}},{value:"pexels-2091109.jpg",label:"flowers",source:"https://www.pexels.com/photo/shallow-focus-photo-of-white-flowers-2091109/",opacity:{light:.2}}],dark:[...Ke,{value:"flower-729514_1920.jpg",label:"lily",source:"https://pixabay.com/photos/flower-lily-lilium-candidum-729514/",opacity:{dark:.7}},{value:"starry-sky-2051448_1920.jpg",label:"night",source:"https://pixabay.com/photos/starry-sky-night-sky-stars-2051448/",opacity:{dark:.4}}]},ue={light:x(K.light[2].value,l=>{const e=localStorage.getItem("background image light");typeof e=="string"&&l(e)}),dark:x(K.dark[2].value,l=>{const e=localStorage.getItem("background image dark");typeof e=="string"&&l(e)})};ue.light.subscribe(l=>{localStorage.setItem("background image light",l)});ue.dark.subscribe(l=>{localStorage.setItem("background image dark",l)});const ge="#f5f5f5",be="#262626",ye=[{label:"auto",value:"auto",colors:[be,ge]},{label:"light",value:"light",colors:[ge,ge]},{label:"dark",value:"dark",colors:[be,be]}],ze=ye[1].value,We=document.documentElement.dataset,Qe=document.querySelector('meta[media="(prefers-color-scheme: light)"]'),Ze=document.querySelector('meta[media="(prefers-color-scheme: dark)"]'),qe=matchMedia("(prefers-color-scheme: dark)"),ee=x(ze!=="auto"?ze:qe.matches?"dark":"light");qe.addEventListener("change",l=>{const e=l.matches?"dark":"light";ee.set(e)});const De=x(ze,l=>{var n;const e=localStorage.getItem("color scheme");if(!e)return;const t=(n=ye.find(o=>o.value===e))==null?void 0:n.value;t&&l(t)});De.subscribe(l=>{var t;const e=((t=ye.find(n=>n.value===l))==null?void 0:t.colors)||[be,ge];Ze&&(Ze.content=e[0]),Qe&&(Qe.content=e[1]),l==="auto"?(delete We.color_scheme,ee.set(qe.matches?"dark":"light")):(We.color_scheme=l,ee.set(l)),localStorage.setItem("color scheme",l)});const Ne={light:{},dark:{}};K.light.forEach(l=>{l.opacity&&(Ne.light[l.value]=x(parseFloat(localStorage.getItem(`background image opacity light ${l.value}`)||""+(l.opacity.light||0))))});K.dark.forEach(l=>{l.opacity&&(Ne.dark[l.value]=x(parseFloat(localStorage.getItem(`background image opacity dark ${l.value}`)||""+(l.opacity.dark||0))))});function xe(l){let e,t,n,o,r=Math.round(l[1]*100)+"",i,u,c,s;return{c(){e=v("form"),t=v("input"),o=v("small"),i=j(r),u=j("%"),w(t,"type","range"),w(t,"min","5"),w(t,"max","95"),w(t,"step","1"),w(t,"title","background image opacity"),t.value=n=Math.round(l[1]*100)},m(f,a){h(f,e,a),E(e,t),E(e,o),E(o,i),E(o,u),c||(s=ne(t,"input",l[5]),c=!0)},p(f,a){a&2&&n!==(n=Math.round(f[1]*100))&&(t.value=n),a&2&&r!==(r=Math.round(f[1]*100)+"")&&ke(i,r)},d(f){f&&m(e),c=!1,s()}}}function Rt(l){let e,t=l[0]&&xe(l);return{c(){t&&t.c(),e=I()},m(n,o){t&&t.m(n,o),h(n,e,o)},p(n,[o]){n[0]?t?t.p(n,o):(t=xe(n),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:p,o:p,d(n){n&&m(e),t&&t.d(n)}}}function Vt(l,e,t){let n,o,r,i=p,u=()=>(i(),i=Q(o,g=>t(1,r=g)),o),c,s=p,f=()=>(s(),s=Q(n,g=>t(3,c=g)),n),a;ce(l,ee,g=>t(4,a=g)),l.$$.on_destroy.push(()=>i()),l.$$.on_destroy.push(()=>s());const d=g=>pt(o,r=+g.currentTarget.value/100,r);return l.$$.update=()=>{l.$$.dirty&16&&f(t(2,n=ue[a])),l.$$.dirty&24&&u(t(0,o=Ne[a][c])),l.$$.dirty&27&&o&&localStorage.setItem(`background image opacity ${a} ${c}`,r.toString())},[o,r,n,c,a,d]}class Ft extends M{constructor(e){super(),P(this,e,Vt,Rt,S,{})}}const Ut="modulepreload",Xt=function(l){return"/"+l},et={},he=function(e,t,n){let o=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),i=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));o=Promise.all(t.map(u=>{if(u=Xt(u),u in et)return;et[u]=!0;const c=u.endsWith(".css"),s=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${s}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":Ut,c||(f.as="script",f.crossOrigin=""),f.href=u,i&&f.setAttribute("nonce",i),document.head.appendChild(f),c)return new Promise((a,d)=>{f.addEventListener("load",a),f.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${u}`)))})}))}return o.then(()=>e()).catch(r=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=r,window.dispatchEvent(i),!i.defaultPrevented)throw r})};function Jt(l){let e;return{c(){e=v("pre"),e.textContent=`Component "${l[0].name}" not found`,w(e,"class","svelte-10sxj2q")},m(t,n){h(t,e,n)},p,i:p,o:p,d(t){t&&m(e)}}}function Yt(l){let e,t,n={ctx:l,current:null,token:null,hasCatch:!0,pending:Wt,then:Kt,catch:Gt,value:3,error:4,blocks:[,,,]};return Mt(l[1].fun(),n),{c(){e=I(),n.block.c()},m(o,r){h(o,e,r),n.block.m(o,n.anchor=r),n.mount=()=>e.parentNode,n.anchor=e,t=!0},p(o,r){l=o,jt(n,l,r)},i(o){t||($(n.block),t=!0)},o(o){for(let r=0;r<3;r+=1){const i=n.blocks[r];k(i)}t=!1},d(o){o&&m(e),n.block.d(o),n.token=null,n=null}}}function Gt(l){let e;return{c(){e=v("pre"),e.textContent=`${l[4].message}`,w(e,"class","svelte-10sxj2q")},m(t,n){h(t,e,n)},p,i:p,o:p,d(t){t&&m(e)}}}function Kt(l){let e,t,n;const o=[l[1].props];var r=l[3].default;function i(u,c){let s={};for(let f=0;f<o.length;f+=1)s=V(s,o[f]);return c!==void 0&&c&2&&(s=V(s,G(o,[je(u[1].props)]))),{props:s}}return r&&(e=Ue(r,i(l))),{c(){e&&L(e.$$.fragment),t=I()},m(u,c){e&&T(e,u,c),h(u,t,c),n=!0},p(u,c){if(r!==(r=u[3].default)){if(e){F();const s=e;k(s.$$.fragment,1,0,()=>{C(s,1)}),U()}r?(e=Ue(r,i(u,c)),L(e.$$.fragment),$(e.$$.fragment,1),T(e,t.parentNode,t)):e=null}else if(r){const s=c&2?G(o,[je(u[1].props)]):{};e.$set(s)}},i(u){n||(e&&$(e.$$.fragment,u),n=!0)},o(u){e&&k(e.$$.fragment,u),n=!1},d(u){u&&m(t),e&&C(e,u)}}}function Wt(l){return{c:p,m:p,p,i:p,o:p,d:p}}function Qt(l){let e,t,n,o;const r=[Yt,Jt],i=[];function u(c,s){var f;return(f=c[1])!=null&&f.fun?0:1}return e=u(l),t=i[e]=r[e](l),{c(){t.c(),n=I()},m(c,s){i[e].m(c,s),h(c,n,s),o=!0},p(c,[s]){t.p(c,s)},i(c){o||($(t),o=!0)},o(c){k(t),o=!1},d(c){c&&m(n),i[e].d(c)}}}function Zt(l,e,t){const n=e,o={"Angel icon":{fun:()=>he(()=>import("./AngelSvg-DNdtDjuZ.js"),[]),props:{height:n.height||".85em"}},"Link icon":{fun:()=>he(()=>import("./LinkSvg-Dmchvp1P.js"),[]),props:{height:n.height||".65em"}},"Tautochrone curve":{fun:()=>he(()=>import("./TautochroneCurve-Bf2aiNV3.js"),__vite__mapDeps([0,1]))},"Multiplication table game":{fun:()=>he(()=>import("./MultiplicationTableGame-qkMERyXr.js"),__vite__mapDeps([2,3]))}}[n.name||""];return l.$$set=r=>{t(2,e=V(V({},e),Fe(r)))},e=Fe(e),[n,o]}class gt extends M{constructor(e){super(),P(this,e,Zt,Qt,S,{})}}function xt(l){let e,t,n,o,r;return n=new gt({props:{name:"Link icon",height:"1em"}}),{c(){var i;e=v("small"),t=v("a"),L(n.$$.fragment),w(t,"title","background image source"),w(t,"href",o=((i=K[l[0]].find(l[3]))==null?void 0:i.source)||"/")},m(i,u){h(i,e,u),E(e,t),T(n,t,null),r=!0},p(i,[u]){var c;(!r||u&5&&o!==(o=((c=K[i[0]].find(i[3]))==null?void 0:c.source)||"/"))&&w(t,"href",o)},i(i){r||($(n.$$.fragment,i),r=!0)},o(i){k(n.$$.fragment,i),r=!1},d(i){i&&m(e),C(n)}}}function en(l,e,t){let n,o,r,i=p,u=()=>(i(),i=Q(n,s=>t(2,r=s)),n);ce(l,ee,s=>t(0,o=s)),l.$$.on_destroy.push(()=>i());const c=s=>s.value===r;return l.$$.update=()=>{l.$$.dirty&1&&u(t(1,n=ue[o]))},[o,n,r,c]}class tn extends M{constructor(e){super(),P(this,e,en,xt,S,{})}}function tt(l,e,t){const n=l.slice();return n[3]=e[t].value,n[4]=e[t].label,n}function nt(l){let e,t=l[4]+"",n;return{c(){e=v("option"),n=j(t),e.__value=l[3],ae(e,e.__value)},m(o,r){h(o,e,r),E(e,n)},p,d(o){o&&m(e)}}}function nn(l){let e,t;return e=new tn({}),{c(){L(e.$$.fragment)},m(n,o){T(e,n,o),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function ln(l){let e,t;return e=new Ft({}),{c(){L(e.$$.fragment)},m(n,o){T(e,n,o),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function on(l){let e,t,n,o,r,i,u,c,s=z(l[1]),f=[];for(let b=0;b<s.length;b+=1)f[b]=nt(tt(l,s,b));const a=[ln,nn],d=[];function g(b,_){return b[0]==="opacity"?0:b[0]==="source"?1:-1}return~(n=g(l))&&(o=d[n]=a[n](l)),{c(){e=v("select");for(let b=0;b<f.length;b+=1)f[b].c();t=H(),o&&o.c(),r=I(),w(e,"title","image options"),l[0]===void 0&&Z(()=>l[2].call(e))},m(b,_){h(b,e,_);for(let y=0;y<f.length;y+=1)f[y]&&f[y].m(e,null);Y(e,l[0],!0),h(b,t,_),~n&&d[n].m(b,_),h(b,r,_),i=!0,u||(c=ne(e,"change",l[2]),u=!0)},p(b,[_]){if(_&2){s=z(b[1]);let N;for(N=0;N<s.length;N+=1){const O=tt(b,s,N);f[N]?f[N].p(O,_):(f[N]=nt(O),f[N].c(),f[N].m(e,null))}for(;N<f.length;N+=1)f[N].d(1);f.length=s.length}_&3&&Y(e,b[0]);let y=n;n=g(b),n!==y&&(o&&(F(),k(d[y],1,1,()=>{d[y]=null}),U()),~n?(o=d[n],o||(o=d[n]=a[n](b),o.c()),$(o,1),o.m(r.parentNode,r)):o=null)},i(b){i||($(o),i=!0)},o(b){k(o),i=!1},d(b){b&&(m(e),m(t),m(r)),te(f,b),~n&&d[n].d(b),u=!1,c()}}}function rn(l,e,t){var i;const n=[{value:"",label:""},{value:"opacity",label:"Opacity"},{value:"source",label:"Source"}];let o=((i=n.find(u=>u.value===localStorage.getItem("background image options")))==null?void 0:i.value)||n[0].value;function r(){o=ve(this),t(0,o),t(1,n)}return l.$$.update=()=>{l.$$.dirty&1&&localStorage.setItem("background image options",o)},[o,n,r]}class sn extends M{constructor(e){super(),P(this,e,rn,on,S,{})}}function lt(l,e,t){const n=l.slice();return n[4]=e[t].value,n[5]=e[t].label,n}function ot(l){let e,t=l[5]+"",n,o;return{c(){e=v("option"),n=j(t),e.__value=o=l[4],ae(e,e.__value)},m(r,i){h(r,e,i),E(e,n)},p(r,i){i&1&&t!==(t=r[5]+"")&&ke(n,t),i&1&&o!==(o=r[4])&&(e.__value=o,ae(e,e.__value))},d(r){r&&m(e)}}}function rt(l){let e,t;return e=new sn({}),{c(){L(e.$$.fragment)},m(n,o){T(e,n,o),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function cn(l){let e,t,n,o,r,i,u,c=z(K[l[0]]),s=[];for(let a=0;a<c.length;a+=1)s[a]=ot(lt(l,c,a));let f=l[2]!==""&&rt();return{c(){e=v("form"),t=v("select");for(let a=0;a<s.length;a+=1)s[a].c();n=H(),f&&f.c(),o=I(),w(t,"title","background image"),l[2]===void 0&&Z(()=>l[3].call(t))},m(a,d){h(a,e,d),E(e,t);for(let g=0;g<s.length;g+=1)s[g]&&s[g].m(t,null);Y(t,l[2],!0),h(a,n,d),f&&f.m(a,d),h(a,o,d),r=!0,i||(u=ne(t,"change",l[3]),i=!0)},p(a,[d]){if(d&1){c=z(K[a[0]]);let g;for(g=0;g<c.length;g+=1){const b=lt(a,c,g);s[g]?s[g].p(b,d):(s[g]=ot(b),s[g].c(),s[g].m(t,null))}for(;g<s.length;g+=1)s[g].d(1);s.length=c.length}d&5&&Y(t,a[2]),a[2]!==""?f?d&4&&$(f,1):(f=rt(),f.c(),$(f,1),f.m(o.parentNode,o)):f&&(F(),k(f,1,1,()=>{f=null}),U())},i(a){r||($(f),r=!0)},o(a){k(f),r=!1},d(a){a&&(m(e),m(n),m(o)),te(s,a),f&&f.d(a),i=!1,u()}}}function un(l,e,t){let n,o,r,i=p,u=()=>(i(),i=Q(n,s=>t(2,r=s)),n);ce(l,ee,s=>t(0,o=s)),l.$$.on_destroy.push(()=>i());function c(){r=ve(this),n.set(r)}return l.$$.update=()=>{l.$$.dirty&1&&u(t(1,n=ue[o]))},[o,n,r,c]}let fn=class extends M{constructor(e){super(),P(this,e,un,cn,S,{})}};function an(l,e,t){const n=l.slice();return n[2]=e[t].value,n[3]=e[t].label,n}function dn(l){let e;return{c(){e=v("option"),e.textContent=`${l[3]}`,e.__value=l[2],ae(e,e.__value)},m(t,n){h(t,e,n)},p,d(t){t&&m(e)}}}function _n(l){let e,t,n,o,r=z(ye),i=[];for(let u=0;u<r.length;u+=1)i[u]=dn(an(l,r,u));return{c(){e=v("form"),t=v("select");for(let u=0;u<i.length;u+=1)i[u].c();w(t,"title","color scheme"),l[0]===void 0&&Z(()=>l[1].call(t))},m(u,c){h(u,e,c),E(e,t);for(let s=0;s<i.length;s+=1)i[s]&&i[s].m(t,null);Y(t,l[0],!0),n||(o=ne(t,"change",l[1]),n=!0)},p(u,[c]){c&1&&Y(t,u[0])},i:p,o:p,d(u){u&&m(e),te(i,u),n=!1,o()}}}function mn(l,e,t){let n;ce(l,De,r=>t(0,n=r));function o(){n=ve(this),De.set(n)}return[n,o]}class hn extends M{constructor(e){super(),P(this,e,mn,_n,S,{})}}function it(l,e,t){const n=l.slice();return n[3]=e[t].value,n[4]=e[t].label,n}function st(l){let e,t=l[4]+"",n;return{c(){e=v("option"),n=j(t),e.__value=l[3],ae(e,e.__value)},m(o,r){h(o,e,r),E(e,n)},p,d(o){o&&m(e)}}}function pn(l){let e,t;return e=new fn({}),{c(){L(e.$$.fragment)},m(n,o){T(e,n,o),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function gn(l){let e,t;return e=new hn({}),{c(){L(e.$$.fragment)},m(n,o){T(e,n,o),t=!0},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function bn(l){let e,t,n,o,r,i,u,c,s,f=z(l[1]),a=[];for(let _=0;_<f.length;_+=1)a[_]=st(it(l,f,_));const d=[gn,pn],g=[];function b(_,y){return _[0]==="colors"?0:_[0]==="background-image"?1:-1}return~(o=b(l))&&(r=g[o]=d[o](l)),{c(){e=v("form"),t=v("select");for(let _=0;_<a.length;_+=1)a[_].c();n=H(),r&&r.c(),i=I(),w(t,"title","page"),l[0]===void 0&&Z(()=>l[2].call(t))},m(_,y){h(_,e,y),E(e,t);for(let N=0;N<a.length;N+=1)a[N]&&a[N].m(t,null);Y(t,l[0],!0),h(_,n,y),~o&&g[o].m(_,y),h(_,i,y),u=!0,c||(s=ne(t,"change",l[2]),c=!0)},p(_,[y]){if(y&2){f=z(_[1]);let O;for(O=0;O<f.length;O+=1){const fe=it(_,f,O);a[O]?a[O].p(fe,y):(a[O]=st(fe),a[O].c(),a[O].m(t,null))}for(;O<a.length;O+=1)a[O].d(1);a.length=f.length}y&3&&Y(t,_[0]);let N=o;o=b(_),o!==N&&(r&&(F(),k(g[N],1,1,()=>{g[N]=null}),U()),~o?(r=g[o],r||(r=g[o]=d[o](_),r.c()),$(r,1),r.m(i.parentNode,i)):r=null)},i(_){u||($(r),u=!0)},o(_){k(r),u=!1},d(_){_&&(m(e),m(n),m(i)),te(a,_),~o&&g[o].d(_),c=!1,s()}}}function $n(l,e,t){var i;const n=[{value:"",label:""},{value:"background-image",label:"Background image"},{value:"colors",label:"Colors"}];let o=((i=n.find(u=>u.value===localStorage.getItem("page")))==null?void 0:i.value)||n[0].value;function r(){o=ve(this),t(0,o),t(1,n)}return l.$$.update=()=>{l.$$.dirty&1&&localStorage.setItem("page",o)},[o,n,r]}class kn extends M{constructor(e){super(),P(this,e,$n,bn,S,{})}}function vn(l){let e,t,n;return t=new kn({}),{c(){e=v("nav"),L(t.$$.fragment)},m(o,r){h(o,e,r),T(t,e,null),n=!0},p,i(o){n||($(t.$$.fragment,o),n=!0)},o(o){k(t.$$.fragment,o),n=!1},d(o){o&&m(e),C(t)}}}class yn extends M{constructor(e){super(),P(this,e,null,vn,S,{})}}function ct(l){let e;return{c(){e=j("Loading")},m(t,n){h(t,e,n)},d(t){t&&m(e)}}}function Te(l){let e,t=!l[0]&&ct();return{c(){e=v(l[0]?"span":"div"),t&&t.c(),q(l[0]?"span":"div")(e,{class:"loading svelte-tw2gob"})},m(n,o){h(n,e,o),t&&t.m(e,null)},p(n,o){n[0]?t&&(t.d(1),t=null):t||(t=ct(),t.c(),t.m(e,null))},d(n){n&&m(e),t&&t.d()}}}function Nn(l){let e=l[0]?"span":"div",t,n=(l[0]?"span":"div")&&Te(l);return{c(){n&&n.c(),t=I()},m(o,r){n&&n.m(o,r),h(o,t,r)},p(o,[r]){o[0],e?S(e,o[0]?"span":"div")?(n.d(1),n=Te(o),e=o[0]?"span":"div",n.c(),n.m(t.parentNode,t)):n.p(o,r):(n=Te(o),e=o[0]?"span":"div",n.c(),n.m(t.parentNode,t))},i:p,o:p,d(o){o&&m(t),n&&n.d(o)}}}function wn(l,e,t){let{inline:n=!1}=e;return l.$$set=o=>{"inline"in o&&t(0,n=o.inline)},[n]}class En extends M{constructor(e){super(),P(this,e,wn,Nn,S,{inline:0})}}function ut(l,e,t){const n=l.slice();return n[6]=e[t],n}function ft(l,e,t){const n=l.slice();return n[11]=e[t],n[13]=t,n}function Sn(l){const e=l.slice(),t=e[11].split(/({.*})/);return e[14]=t[0],e[15]=t[1],e}function In(l){var n;const e=l.slice(),t=((n=e[6].textContent)==null?void 0:n.trim().toLowerCase().replace(/\s+/g,"-"))||"";return e[10]=t,e}function Tn(l){const e=l.slice(),t=e[3](e[6]);return e[9]=t,e}function Cn(l){let e,t;return e=new En({}),{c(){L(e.$$.fragment)},m(n,o){T(e,n,o),t=!0},p,i(n){t||($(e.$$.fragment,n),t=!0)},o(n){k(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function On(l){let e,t,n=z([...l[0]]),o=[];for(let i=0;i<n.length;i+=1)o[i]=dt(ut(l,n,i));const r=i=>k(o[i],1,1,()=>{o[i]=null});return{c(){for(let i=0;i<o.length;i+=1)o[i].c();e=I()},m(i,u){for(let c=0;c<o.length;c+=1)o[c]&&o[c].m(i,u);h(i,e,u),t=!0},p(i,u){if(u&31){n=z([...i[0]]);let c;for(c=0;c<n.length;c+=1){const s=ut(i,n,c);o[c]?(o[c].p(s,u),$(o[c],1)):(o[c]=dt(s),o[c].c(),$(o[c],1),o[c].m(e.parentNode,e))}for(F(),c=n.length;c<o.length;c+=1)r(c);U()}},i(i){if(!t){for(let u=0;u<n.length;u+=1)$(o[u]);t=!0}},o(i){o=o.filter(Boolean);for(let u=0;u<o.length;u+=1)k(o[u]);t=!1},d(i){i&&m(e),te(o,i)}}}function Ln(l){let e,t="<!--"+l[6].nodeValue+"-->",n;return{c(){e=new Tt(!1),n=I(),e.a=n},m(o,r){e.m(t,o,r),h(o,n,r)},p(o,r){r&1&&t!==(t="<!--"+o[6].nodeValue+"-->")&&e.p(t)},i:p,o:p,d(o){o&&(m(n),e.d())}}}function An(l){let e,t,n=z((l[6].textContent||"").split(/\((.*?);\)/g)),o=[];for(let i=0;i<n.length;i+=1)o[i]=at(ft(l,n,i));const r=i=>k(o[i],1,1,()=>{o[i]=null});return{c(){for(let i=0;i<o.length;i+=1)o[i].c();e=I()},m(i,u){for(let c=0;c<o.length;c+=1)o[c]&&o[c].m(i,u);h(i,e,u),t=!0},p(i,u){if(u&17){n=z((i[6].textContent||"").split(/\((.*?);\)/g));let c;for(c=0;c<n.length;c+=1){const s=ft(i,n,c);o[c]?(o[c].p(s,u),$(o[c],1)):(o[c]=at(s),o[c].c(),$(o[c],1),o[c].m(e.parentNode,e))}for(F(),c=n.length;c<o.length;c+=1)r(c);U()}},i(i){if(!t){for(let u=0;u<n.length;u+=1)$(o[u]);t=!0}},o(i){o=o.filter(Boolean);for(let u=0;u<o.length;u+=1)k(o[u]);t=!1},d(i){i&&m(e),te(o,i)}}}function Pn(l){let e,t,n,o,r;const i=[Bn,qn,Hn,Dn,zn],u=[];function c(f,a){return a&1&&(e=null),e==null&&(e=!!["H1","H2","H3","H4","H5","H6"].includes(f[6].nodeName)),e?0:f[6].nodeName==="A"?1:f[6].nodeName==="IMG"?2:f[6].nodeName==="IFRAME"?3:4}function s(f,a){return a===0?In(f):f}return t=c(l,-1),n=u[t]=i[t](s(l,t)),{c(){n.c(),o=I()},m(f,a){u[t].m(f,a),h(f,o,a),r=!0},p(f,a){let d=t;t=c(f,a),t===d?u[t].p(s(f,t),a):(F(),k(u[d],1,1,()=>{u[d]=null}),U(),n=u[t],n?n.p(s(f,t),a):(n=u[t]=i[t](s(f,t)),n.c()),$(n,1),n.m(o.parentNode,o))},i(f){r||($(n),r=!0)},o(f){k(n),r=!1},d(f){f&&m(o),u[t].d(f)}}}function Mn(l){let e=l[11]+"",t;return{c(){t=j(e)},m(n,o){h(n,t,o)},p(n,o){o&1&&e!==(e=n[11]+"")&&ke(t,e)},i:p,o:p,d(n){n&&m(t)}}}function jn(l){let e,t=" ",n,o;const r=[{name:l[14]},l[4](l[15])];let i={};for(let u=0;u<r.length;u+=1)i=V(i,r[u]);return e=new gt({props:i}),{c(){L(e.$$.fragment),n=j(t)},m(u,c){T(e,u,c),h(u,n,c),o=!0},p(u,c){const s=c&17?G(r,[c&1&&{name:u[14]},je(u[4](u[15]))]):{};e.$set(s)},i(u){o||($(e.$$.fragment,u),o=!0)},o(u){k(e.$$.fragment,u),o=!1},d(u){u&&m(n),C(e,u)}}}function at(l){let e,t,n,o;const r=[jn,Mn],i=[];function u(s,f){return s[13]%2?0:1}function c(s,f){return f===0?Sn(s):s}return e=u(l),t=i[e]=r[e](c(l,e)),{c(){t.c(),n=I()},m(s,f){i[e].m(s,f),h(s,n,f),o=!0},p(s,f){t.p(c(s,e),f)},i(s){o||($(t),o=!0)},o(s){k(t),o=!1},d(s){s&&m(n),i[e].d(s)}}}function zn(l){let e=l[6].nodeName,t,n=l[6].nodeName&&Ce(l);return{c(){n&&n.c(),t=I()},m(o,r){n&&n.m(o,r),h(o,t,r)},p(o,r){o[6].nodeName?e?S(e,o[6].nodeName)?(n.d(1),n=Ce(o),e=o[6].nodeName,n.c(),n.m(t.parentNode,t)):n.p(o,r):(n=Ce(o),e=o[6].nodeName,n.c(),n.m(t.parentNode,t)):e&&(n.d(1),n=null,e=o[6].nodeName)},i:p,o(o){k(n,o)},d(o){o&&m(t),n&&n.d(o)}}}function Dn(l){let e,t=l[6].nodeName,n,o=l[6].nodeName&&Oe(l);return{c(){e=v("div"),o&&o.c(),n=H(),w(e,"class","iframe-container")},m(r,i){h(r,e,i),o&&o.m(e,null),E(e,n)},p(r,i){r[6].nodeName?t?S(t,r[6].nodeName)?(o.d(1),o=Oe(r),t=r[6].nodeName,o.c(),o.m(e,n)):o.p(r,i):(o=Oe(r),t=r[6].nodeName,o.c(),o.m(e,n)):t&&(o.d(1),o=null,t=r[6].nodeName)},i:p,o:p,d(r){r&&m(e),o&&o.d(r)}}}function Hn(l){let e=l[6].nodeName,t,n=l[6].nodeName&&Le(l);return{c(){n&&n.c(),t=I()},m(o,r){n&&n.m(o,r),h(o,t,r)},p(o,r){o[6].nodeName?e?S(e,o[6].nodeName)?(n.d(1),n=Le(o),e=o[6].nodeName,n.c(),n.m(t.parentNode,t)):n.p(o,r):(n=Le(o),e=o[6].nodeName,n.c(),n.m(t.parentNode,t)):e&&(n.d(1),n=null,e=o[6].nodeName)},i:p,o:p,d(o){o&&m(t),n&&n.d(o)}}}function qn(l){let e=l[6].nodeName,t,n=l[6].nodeName&&Ae(l);return{c(){n&&n.c(),t=I()},m(o,r){n&&n.m(o,r),h(o,t,r)},p(o,r){o[6].nodeName?e?S(e,o[6].nodeName)?(n.d(1),n=Ae(o),e=o[6].nodeName,n.c(),n.m(t.parentNode,t)):n.p(o,r):(n=Ae(o),e=o[6].nodeName,n.c(),n.m(t.parentNode,t)):e&&(n.d(1),n=null,e=o[6].nodeName)},i:p,o(o){k(n,o)},d(o){o&&m(t),n&&n.d(o)}}}function Bn(l){let e=l[6].nodeName,t,n=l[6].nodeName&&Pe(l);return{c(){n&&n.c(),t=I()},m(o,r){n&&n.m(o,r),h(o,t,r)},p(o,r){o[6].nodeName?e?S(e,o[6].nodeName)?(n.d(1),n=Pe(o),e=o[6].nodeName,n.c(),n.m(t.parentNode,t)):n.p(o,r):(n=Pe(o),e=o[6].nodeName,n.c(),n.m(t.parentNode,t)):e&&(n.d(1),n=null,e=o[6].nodeName)},i:p,o(o){k(n,o)},d(o){o&&m(t),n&&n.d(o)}}}function Ce(l){let e,t,n,o;t=new we({props:{childNodes:l[6].childNodes,hash:l[1]}});let r=[l[9]],i={};for(let u=0;u<r.length;u+=1)i=V(i,r[u]);return{c(){e=v(l[6].nodeName),L(t.$$.fragment),n=H(),q(l[6].nodeName)(e,i),D(e,"svelte-2c9z0b",!0)},m(u,c){h(u,e,c),T(t,e,null),E(e,n),o=!0},p(u,c){const s={};c&1&&(s.childNodes=u[6].childNodes),c&2&&(s.hash=u[1]),t.$set(s),q(u[6].nodeName)(e,i=G(r,[c&1&&u[9]])),D(e,"svelte-2c9z0b",!0)},i(u){o||($(t.$$.fragment,u),o=!0)},o(u){k(t.$$.fragment,u),o=!1},d(u){u&&m(e),C(t)}}}function Oe(l){let e,t=[l[9]],n={};for(let o=0;o<t.length;o+=1)n=V(n,t[o]);return{c(){e=v(l[6].nodeName),q(l[6].nodeName)(e,n),D(e,"svelte-2c9z0b",!0)},m(o,r){h(o,e,r)},p(o,r){q(o[6].nodeName)(e,n=G(t,[r&1&&o[9]])),D(e,"svelte-2c9z0b",!0)},d(o){o&&m(e)}}}function Le(l){let e,t=[l[9]],n={};for(let o=0;o<t.length;o+=1)n=V(n,t[o]);return{c(){e=v(l[6].nodeName),q(l[6].nodeName)(e,n),D(e,"svelte-2c9z0b",!0)},m(o,r){h(o,e,r)},p(o,r){q(o[6].nodeName)(e,n=G(t,[r&1&&o[9]])),D(e,"svelte-2c9z0b",!0)},d(o){o&&m(e)}}}function Ae(l){let e,t,n;t=new we({props:{childNodes:l[6].childNodes,hash:l[1]}});let o=[l[9]],r={};for(let i=0;i<o.length;i+=1)r=V(r,o[i]);return{c(){e=v(l[6].nodeName),L(t.$$.fragment),q(l[6].nodeName)(e,r),D(e,"svelte-2c9z0b",!0)},m(i,u){h(i,e,u),T(t,e,null),n=!0},p(i,u){const c={};u&1&&(c.childNodes=i[6].childNodes),u&2&&(c.hash=i[1]),t.$set(c),q(i[6].nodeName)(e,r=G(o,[u&1&&i[9]])),D(e,"svelte-2c9z0b",!0)},i(i){n||($(t.$$.fragment,i),n=!0)},o(i){k(t.$$.fragment,i),n=!1},d(i){i&&m(e),C(t)}}}function Pe(l){let e,t,n,o,r,i,u,c,s=l[10],f;i=new we({props:{childNodes:l[6].childNodes,hash:l[1]}});let a=[l[9],{id:c=l[10]}],d={};for(let _=0;_<a.length;_+=1)d=V(d,a[_]);const g=()=>l[5](e,s),b=()=>l[5](null,s);return{c(){e=v(l[6].nodeName),t=v("a"),n=j("#"),r=H(),L(i.$$.fragment),u=H(),w(t,"class","link-title svelte-2c9z0b"),w(t,"href",o="#"+l[10]),q(l[6].nodeName)(e,d),D(e,"svelte-2c9z0b",!0)},m(_,y){h(_,e,y),E(e,t),E(t,n),E(e,r),T(i,e,null),E(e,u),g(),f=!0},p(_,y){l=_,(!f||y&1&&o!==(o="#"+l[10]))&&w(t,"href",o);const N={};y&1&&(N.childNodes=l[6].childNodes),y&2&&(N.hash=l[1]),i.$set(N),q(l[6].nodeName)(e,d=G(a,[y&1&&l[9],(!f||y&1&&c!==(c=l[10]))&&{id:c}])),s!==l[10]&&(b(),s=l[10],g()),D(e,"svelte-2c9z0b",!0)},i(_){f||($(i.$$.fragment,_),f=!0)},o(_){k(i.$$.fragment,_),f=!1},d(_){_&&m(e),C(i),b()}}}function dt(l){let e,t,n,o;const r=[Pn,An,Ln],i=[];function u(s,f){return s[6].nodeType===Node.ELEMENT_NODE?0:s[6].nodeType===Node.TEXT_NODE?1:s[6].nodeType===Node.COMMENT_NODE?2:-1}function c(s,f){return f===0?Tn(s):s}return~(e=u(l))&&(t=i[e]=r[e](c(l,e))),{c(){t&&t.c(),n=I()},m(s,f){~e&&i[e].m(s,f),h(s,n,f),o=!0},p(s,f){let a=e;e=u(s),e===a?~e&&i[e].p(c(s,e),f):(t&&(F(),k(i[a],1,1,()=>{i[a]=null}),U()),~e?(t=i[e],t?t.p(c(s,e),f):(t=i[e]=r[e](c(s,e)),t.c()),$(t,1),t.m(n.parentNode,n)):t=null)},i(s){o||($(t),o=!0)},o(s){k(t),o=!1},d(s){s&&m(n),~e&&i[e].d(s)}}}function Rn(l){let e,t,n,o;const r=[On,Cn],i=[];function u(c,s){return c[0]?0:1}return e=u(l),t=i[e]=r[e](l),{c(){t.c(),n=I()},m(c,s){i[e].m(c,s),h(c,n,s),o=!0},p(c,[s]){let f=e;e=u(c),e===f?i[e].p(c,s):(F(),k(i[f],1,1,()=>{i[f]=null}),U(),t=i[e],t?t.p(c,s):(t=i[e]=r[e](c),t.c()),$(t,1),t.m(n.parentNode,n))},i(c){o||($(t),o=!0)},o(c){k(t),o=!1},d(c){c&&m(n),i[e].d(c)}}}function Vn(l,e,t){let{childNodes:n}=e,{hash:o}=e;const r=s=>{const f=s.attributes,a={};for(const d of f)a[d.name]=d.value||"true";return a},i=s=>{if(!s)return{};try{return JSON.parse(s)}catch{return{}}},u={};function c(s,f){$e[s?"unshift":"push"](()=>{u[f]=s,t(2,u)})}return l.$$set=s=>{"childNodes"in s&&t(0,n=s.childNodes),"hash"in s&&t(1,o=s.hash)},l.$$.update=()=>{var s;l.$$.dirty&6&&((s=u[o])==null||s.scrollIntoView())},[n,o,u,r,i,c]}class we extends M{constructor(e){super(),P(this,e,Vn,Rn,S,{childNodes:0,hash:1})}}function Fn(l){let e,t,n,o,r,i;return r=new we({props:{hash:l[1],childNodes:l[0]}}),{c(){e=v("main"),t=v("div"),n=v("h1"),n.innerHTML='<a href="/" class="svelte-11n8ruj">The Book of Heavenmore</a>',o=H(),L(r.$$.fragment),w(n,"class","svelte-11n8ruj")},m(u,c){h(u,e,c),E(e,t),E(t,n),E(t,o),T(r,t,null),i=!0},p(u,[c]){const s={};c&1&&(s.childNodes=u[0]),r.$set(s)},i(u){i||($(r.$$.fragment,u),i=!0)},o(u){k(r.$$.fragment,u),i=!1},d(u){u&&m(e),C(r)}}}function Un(l,e,t){let n=location.hash.substring(1);const o=new DOMParser,r=localStorage.getItem("url")||"https://gist.githubusercontent.com/alindea/311ac18445902b1878b936bd5fa06946/raw/book.html";fetch(r+"?v="+Date.now()).then(u=>u.text()).then(u=>{t(0,i=o.parseFromString(u,"text/html").body.childNodes)}).catch(u=>{t(0,i=o.parseFromString("<br/>"+u.message,"text/html").body.childNodes)});let i;return[i,n]}class Xn extends M{constructor(e){super(),P(this,e,Un,Fn,S,{})}}function _t(l){let e;return{c(){e=v("div"),me(e,"background-image","url('images/"+l[0]+"')"),me(e,"opacity",l[3]),w(e,"class","svelte-6yznai")},m(t,n){h(t,e,n)},p(t,n){n&1&&me(e,"background-image","url('images/"+t[0]+"')"),n&8&&me(e,"opacity",t[3])},d(t){t&&m(e)}}}function Jn(l){let e,t=l[0]!==""&&_t(l);return{c(){t&&t.c(),e=I()},m(n,o){t&&t.m(n,o),h(n,e,o)},p(n,[o]){n[0]!==""?t?t.p(n,o):(t=_t(n),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:p,o:p,d(n){n&&m(e),t&&t.d(n)}}}function Yn(l,e,t){let n,o,r,i=p,u=()=>(i(),i=Q(n,d=>t(0,r=d)),n),c,s,f=p,a=()=>(f(),f=Q(o,d=>t(3,s=d)),o);return ce(l,ee,d=>t(4,c=d)),l.$$.on_destroy.push(()=>i()),l.$$.on_destroy.push(()=>f()),l.$$.update=()=>{l.$$.dirty&16&&u(t(2,n=ue[c])),l.$$.dirty&17&&a(t(1,o=Ne[c][r]))},[r,o,n,s,c]}class Gn extends M{constructor(e){super(),P(this,e,Yn,Jn,S,{})}}function Kn(l){let e,t,n,o,r,i,u,c;return e=new Bt({}),n=new yn({}),r=new Xn({}),u=new Gn({}),{c(){L(e.$$.fragment),t=H(),L(n.$$.fragment),o=H(),L(r.$$.fragment),i=H(),L(u.$$.fragment)},m(s,f){T(e,s,f),h(s,t,f),T(n,s,f),h(s,o,f),T(r,s,f),h(s,i,f),T(u,s,f),c=!0},p,i(s){c||($(e.$$.fragment,s),$(n.$$.fragment,s),$(r.$$.fragment,s),$(u.$$.fragment,s),c=!0)},o(s){k(e.$$.fragment,s),k(n.$$.fragment,s),k(r.$$.fragment,s),k(u.$$.fragment,s),c=!1},d(s){s&&(m(t),m(o),m(i)),C(e,s),C(n,s),C(r,s),C(u,s)}}}class Wn extends M{constructor(e){super(),P(this,e,null,Kn,S,{})}}new Wn({target:document.body});export{el as A,M as S,yt as a,w as b,h as c,E as d,m as e,V as f,Fe as g,z as h,P as i,v as j,H as k,me as l,ae as m,p as n,ne as o,Zn as p,xn as q,te as r,S as s,j as t,se as u,ee as v,ke as w,$e as x,I as y,tl as z};