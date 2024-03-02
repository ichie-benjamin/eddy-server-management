import{e as O,f as x,u as A,h as Q,i as N,j as L,k as B,l as W,c as j,w as k}from"./app.600a379f.js";var I;const m=typeof window<"u",F=e=>typeof e=="string",M=()=>{};m&&((I=window==null?void 0:window.navigator)==null?void 0:I.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function g(e){return typeof e=="function"?e():A(e)}function R(e){return e}function C(e){return Q()?(N(e),!0):!1}function U(e,t=!0){L()?B(e):t?e():W(e)}function D(e,t,n={}){const{immediate:a=!0}=n,u=O(!1);let r=null;function f(){r&&(clearTimeout(r),r=null)}function c(){u.value=!1,f()}function d(...i){f(),u.value=!0,r=setTimeout(()=>{u.value=!1,r=null,e(...i)},g(t))}return a&&(u.value=!0,m&&d()),C(c),{isPending:x(u),start:d,stop:c}}function G(e){var t;const n=g(e);return(t=n==null?void 0:n.$el)!=null?t:n}const H=m?window:void 0;m&&window.document;const $=m?window.navigator:void 0;m&&window.location;function q(...e){let t,n,a,u;if(F(e[0])||Array.isArray(e[0])?([n,a,u]=e,t=H):[t,n,a,u]=e,!t)return M;Array.isArray(n)||(n=[n]),Array.isArray(a)||(a=[a]);const r=[],f=()=>{r.forEach(s=>s()),r.length=0},c=(s,p,v,y)=>(s.addEventListener(p,v,y),()=>s.removeEventListener(p,v,y)),d=k(()=>[G(t),g(u)],([s,p])=>{f(),s&&r.push(...n.flatMap(v=>a.map(y=>c(s,v,y,p))))},{immediate:!0,flush:"post"}),i=()=>{d(),f()};return C(i),i}function K(e,t=!1){const n=O(),a=()=>n.value=Boolean(e());return a(),U(a,t),n}function V(e={}){const{navigator:t=$,read:n=!1,source:a,copiedDuring:u=1500,legacy:r=!1}=e,f=["copy","cut"],c=K(()=>t&&"clipboard"in t),d=j(()=>c.value||r),i=O(""),s=O(!1),p=D(()=>s.value=!1,u);function v(){c.value?t.clipboard.readText().then(o=>{i.value=o}):i.value=P()}if(d.value&&n)for(const o of f)q(o,v);async function y(o=g(a)){d.value&&o!=null&&(c.value?await t.clipboard.writeText(o):S(o),i.value=o,s.value=!0,p.start())}function S(o){const l=document.createElement("textarea");l.value=o!=null?o:"",l.style.position="absolute",l.style.opacity="0",document.body.appendChild(l),l.select(),document.execCommand("copy"),l.remove()}function P(){var o,l,h;return(h=(l=(o=document==null?void 0:document.getSelection)==null?void 0:o.call(document))==null?void 0:l.toString())!=null?h:""}return{isSupported:d,text:i,copied:s,copy:y}}const w=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},_="__vueuse_ssr_handlers__";w[_]=w[_]||{};w[_];var b;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(b||(b={}));var z=Object.defineProperty,T=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable,E=(e,t,n)=>t in e?z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Y=(e,t)=>{for(var n in t||(t={}))J.call(t,n)&&E(e,n,t[n]);if(T)for(var n of T(t))X.call(t,n)&&E(e,n,t[n]);return e};const Z={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Y({linear:R},Z);const{copy:ee,isSupported:te}=V(),oe={props:{source:{type:String,required:!0}},data(){return{copied:!1,timeout:null}},render(){return this.$slots.default({copied:this.copied,copy:()=>{!te||(clearTimeout(this.timeout),this.copied=!0,ee(this.source),this.timeout=setTimeout(()=>{this.copied=!1},2e3))}})}};export{oe as default};
