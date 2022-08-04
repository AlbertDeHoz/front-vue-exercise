const Xo=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}};Xo();function Tr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const qo="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Jo=Tr(qo);function vi(e){return!!e||e===""}function Sr(e){if(F(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=Q(r)?Qo(r):Sr(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(Q(e))return e;if(G(e))return e}}const Go=/;(?![^(]*\))/g,Zo=/:(.+)/;function Qo(e){const t={};return e.split(Go).forEach(n=>{if(n){const r=n.split(Zo);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Re(e){let t="";if(Q(e))t=e;else if(F(e))for(let n=0;n<e.length;n++){const r=Re(e[n]);r&&(t+=r+" ")}else if(G(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Qn=e=>Q(e)?e:e==null?"":F(e)||G(e)&&(e.toString===wi||!L(e.toString))?JSON.stringify(e,bi,2):String(e),bi=(e,t)=>t&&t.__v_isRef?bi(e,t.value):xt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:yi(t)?{[`Set(${t.size})`]:[...t.values()]}:G(t)&&!F(t)&&!_i(t)?String(t):t,Y={},yt=[],xe=()=>{},es=()=>!1,ts=/^on[^a-z]/,An=e=>ts.test(e),Ir=e=>e.startsWith("onUpdate:"),ae=Object.assign,Nr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ns=Object.prototype.hasOwnProperty,$=(e,t)=>ns.call(e,t),F=Array.isArray,xt=e=>On(e)==="[object Map]",yi=e=>On(e)==="[object Set]",L=e=>typeof e=="function",Q=e=>typeof e=="string",Mr=e=>typeof e=="symbol",G=e=>e!==null&&typeof e=="object",xi=e=>G(e)&&L(e.then)&&L(e.catch),wi=Object.prototype.toString,On=e=>wi.call(e),rs=e=>On(e).slice(8,-1),_i=e=>On(e)==="[object Object]",Fr=e=>Q(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,an=Tr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Cn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},as=/-(\w)/g,Ie=Cn(e=>e.replace(as,(t,n)=>n?n.toUpperCase():"")),is=/\B([A-Z])/g,Ot=Cn(e=>e.replace(is,"-$1").toLowerCase()),En=Cn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Un=Cn(e=>e?`on${En(e)}`:""),dn=(e,t)=>!Object.is(e,t),Wn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},mn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},os=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let va;const ss=()=>va||(va=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Oe;class ls{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Oe&&(this.parent=Oe,this.index=(Oe.scopes||(Oe.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Oe;try{return Oe=this,t()}finally{Oe=n}}}on(){Oe=this}off(){Oe=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function fs(e,t=Oe){t&&t.active&&t.effects.push(e)}const Rr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},ki=e=>(e.w&Je)>0,Ai=e=>(e.n&Je)>0,cs=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Je},us=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];ki(a)&&!Ai(a)?a.delete(e):t[n++]=a,a.w&=~Je,a.n&=~Je}t.length=n}},er=new WeakMap;let Ft=0,Je=1;const tr=30;let ge;const it=Symbol(""),nr=Symbol("");class Lr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,fs(this,r)}run(){if(!this.active)return this.fn();let t=ge,n=Xe;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=ge,ge=this,Xe=!0,Je=1<<++Ft,Ft<=tr?cs(this):ba(this),this.fn()}finally{Ft<=tr&&us(this),Je=1<<--Ft,ge=this.parent,Xe=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ge===this?this.deferStop=!0:this.active&&(ba(this),this.onStop&&this.onStop(),this.active=!1)}}function ba(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Xe=!0;const Oi=[];function Ct(){Oi.push(Xe),Xe=!1}function Et(){const e=Oi.pop();Xe=e===void 0?!0:e}function de(e,t,n){if(Xe&&ge){let r=er.get(e);r||er.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Rr()),Ci(a)}}function Ci(e,t){let n=!1;Ft<=tr?Ai(e)||(e.n|=Je,n=!ki(e)):n=!e.has(ge),n&&(e.add(ge),ge.deps.push(e))}function Le(e,t,n,r,a,i){const o=er.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&F(e))o.forEach((l,u)=>{(u==="length"||u>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":F(e)?Fr(n)&&s.push(o.get("length")):(s.push(o.get(it)),xt(e)&&s.push(o.get(nr)));break;case"delete":F(e)||(s.push(o.get(it)),xt(e)&&s.push(o.get(nr)));break;case"set":xt(e)&&s.push(o.get(it));break}if(s.length===1)s[0]&&rr(s[0]);else{const l=[];for(const u of s)u&&l.push(...u);rr(Rr(l))}}function rr(e,t){const n=F(e)?e:[...e];for(const r of n)r.computed&&ya(r);for(const r of n)r.computed||ya(r)}function ya(e,t){(e!==ge||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const ds=Tr("__proto__,__v_isRef,__isVue"),Ei=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Mr)),ms=jr(),ps=jr(!1,!0),hs=jr(!0),xa=gs();function gs(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=B(this);for(let i=0,o=this.length;i<o;i++)de(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(B)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Ct();const r=B(this)[t].apply(this,n);return Et(),r}}),e}function jr(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Ns:Ni:t?Ii:Si).get(r))return r;const o=F(r);if(!e&&o&&$(xa,a))return Reflect.get(xa,a,i);const s=Reflect.get(r,a,i);return(Mr(a)?Ei.has(a):ds(a))||(e||de(r,"get",a),t)?s:re(s)?o&&Fr(a)?s:s.value:G(s)?e?Mi(s):Dr(s):s}}const vs=Pi(),bs=Pi(!0);function Pi(e=!1){return function(n,r,a,i){let o=n[r];if(Wt(o)&&re(o)&&!re(a))return!1;if(!e&&!Wt(a)&&(ar(a)||(a=B(a),o=B(o)),!F(n)&&re(o)&&!re(a)))return o.value=a,!0;const s=F(n)&&Fr(r)?Number(r)<n.length:$(n,r),l=Reflect.set(n,r,a,i);return n===B(i)&&(s?dn(a,o)&&Le(n,"set",r,a):Le(n,"add",r,a)),l}}function ys(e,t){const n=$(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Le(e,"delete",t,void 0),r}function xs(e,t){const n=Reflect.has(e,t);return(!Mr(t)||!Ei.has(t))&&de(e,"has",t),n}function ws(e){return de(e,"iterate",F(e)?"length":it),Reflect.ownKeys(e)}const Ti={get:ms,set:vs,deleteProperty:ys,has:xs,ownKeys:ws},_s={get:hs,set(e,t){return!0},deleteProperty(e,t){return!0}},ks=ae({},Ti,{get:ps,set:bs}),zr=e=>e,Pn=e=>Reflect.getPrototypeOf(e);function Zt(e,t,n=!1,r=!1){e=e.__v_raw;const a=B(e),i=B(t);n||(t!==i&&de(a,"get",t),de(a,"get",i));const{has:o}=Pn(a),s=r?zr:n?Ur:Hr;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function Qt(e,t=!1){const n=this.__v_raw,r=B(n),a=B(e);return t||(e!==a&&de(r,"has",e),de(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function en(e,t=!1){return e=e.__v_raw,!t&&de(B(e),"iterate",it),Reflect.get(e,"size",e)}function wa(e){e=B(e);const t=B(this);return Pn(t).has.call(t,e)||(t.add(e),Le(t,"add",e,e)),this}function _a(e,t){t=B(t);const n=B(this),{has:r,get:a}=Pn(n);let i=r.call(n,e);i||(e=B(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?dn(t,o)&&Le(n,"set",e,t):Le(n,"add",e,t),this}function ka(e){const t=B(this),{has:n,get:r}=Pn(t);let a=n.call(t,e);a||(e=B(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Le(t,"delete",e,void 0),i}function Aa(){const e=B(this),t=e.size!==0,n=e.clear();return t&&Le(e,"clear",void 0,void 0),n}function tn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=B(o),l=t?zr:e?Ur:Hr;return!e&&de(s,"iterate",it),o.forEach((u,d)=>r.call(a,l(u),l(d),i))}}function nn(e,t,n){return function(...r){const a=this.__v_raw,i=B(a),o=xt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,u=a[e](...r),d=n?zr:t?Ur:Hr;return!t&&de(i,"iterate",l?nr:it),{next(){const{value:m,done:b}=u.next();return b?{value:m,done:b}:{value:s?[d(m[0]),d(m[1])]:d(m),done:b}},[Symbol.iterator](){return this}}}}function We(e){return function(...t){return e==="delete"?!1:this}}function As(){const e={get(i){return Zt(this,i)},get size(){return en(this)},has:Qt,add:wa,set:_a,delete:ka,clear:Aa,forEach:tn(!1,!1)},t={get(i){return Zt(this,i,!1,!0)},get size(){return en(this)},has:Qt,add:wa,set:_a,delete:ka,clear:Aa,forEach:tn(!1,!0)},n={get(i){return Zt(this,i,!0)},get size(){return en(this,!0)},has(i){return Qt.call(this,i,!0)},add:We("add"),set:We("set"),delete:We("delete"),clear:We("clear"),forEach:tn(!0,!1)},r={get(i){return Zt(this,i,!0,!0)},get size(){return en(this,!0)},has(i){return Qt.call(this,i,!0)},add:We("add"),set:We("set"),delete:We("delete"),clear:We("clear"),forEach:tn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=nn(i,!1,!1),n[i]=nn(i,!0,!1),t[i]=nn(i,!1,!0),r[i]=nn(i,!0,!0)}),[e,n,t,r]}const[Os,Cs,Es,Ps]=As();function $r(e,t){const n=t?e?Ps:Es:e?Cs:Os;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get($(n,a)&&a in r?n:r,a,i)}const Ts={get:$r(!1,!1)},Ss={get:$r(!1,!0)},Is={get:$r(!0,!1)},Si=new WeakMap,Ii=new WeakMap,Ni=new WeakMap,Ns=new WeakMap;function Ms(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Fs(e){return e.__v_skip||!Object.isExtensible(e)?0:Ms(rs(e))}function Dr(e){return Wt(e)?e:Br(e,!1,Ti,Ts,Si)}function Rs(e){return Br(e,!1,ks,Ss,Ii)}function Mi(e){return Br(e,!0,_s,Is,Ni)}function Br(e,t,n,r,a){if(!G(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Fs(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function wt(e){return Wt(e)?wt(e.__v_raw):!!(e&&e.__v_isReactive)}function Wt(e){return!!(e&&e.__v_isReadonly)}function ar(e){return!!(e&&e.__v_isShallow)}function Fi(e){return wt(e)||Wt(e)}function B(e){const t=e&&e.__v_raw;return t?B(t):e}function Ri(e){return mn(e,"__v_skip",!0),e}const Hr=e=>G(e)?Dr(e):e,Ur=e=>G(e)?Mi(e):e;function Ls(e){Xe&&ge&&(e=B(e),Ci(e.dep||(e.dep=Rr())))}function js(e,t){e=B(e),e.dep&&rr(e.dep)}function re(e){return!!(e&&e.__v_isRef===!0)}function zs(e){return re(e)?e.value:e}const $s={get:(e,t,n)=>zs(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return re(a)&&!re(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Li(e){return wt(e)?e:new Proxy(e,$s)}class Ds{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Lr(t,()=>{this._dirty||(this._dirty=!0,js(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=B(this);return Ls(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Bs(e,t,n=!1){let r,a;const i=L(e);return i?(r=e,a=xe):(r=e.get,a=e.set),new Ds(r,a,i||!a,n)}function qe(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Tn(i,t,n)}return a}function we(e,t,n,r){if(L(e)){const i=qe(e,t,n,r);return i&&xi(i)&&i.catch(o=>{Tn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(we(e[i],t,n,r));return a}function Tn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const u=i.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){qe(l,null,10,[e,o,s]);return}}Hs(e,n,a,r)}function Hs(e,t,n,r=!0){console.error(e)}let pn=!1,ir=!1;const ue=[];let Fe=0;const jt=[];let Rt=null,pt=0;const zt=[];let Ke=null,ht=0;const ji=Promise.resolve();let Wr=null,or=null;function Us(e){const t=Wr||ji;return e?t.then(this?e.bind(this):e):t}function Ws(e){let t=Fe+1,n=ue.length;for(;t<n;){const r=t+n>>>1;Yt(ue[r])<e?t=r+1:n=r}return t}function zi(e){(!ue.length||!ue.includes(e,pn&&e.allowRecurse?Fe+1:Fe))&&e!==or&&(e.id==null?ue.push(e):ue.splice(Ws(e.id),0,e),$i())}function $i(){!pn&&!ir&&(ir=!0,Wr=ji.then(Hi))}function Ys(e){const t=ue.indexOf(e);t>Fe&&ue.splice(t,1)}function Di(e,t,n,r){F(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),$i()}function Ks(e){Di(e,Rt,jt,pt)}function Vs(e){Di(e,Ke,zt,ht)}function Sn(e,t=null){if(jt.length){for(or=t,Rt=[...new Set(jt)],jt.length=0,pt=0;pt<Rt.length;pt++)Rt[pt]();Rt=null,pt=0,or=null,Sn(e,t)}}function Bi(e){if(Sn(),zt.length){const t=[...new Set(zt)];if(zt.length=0,Ke){Ke.push(...t);return}for(Ke=t,Ke.sort((n,r)=>Yt(n)-Yt(r)),ht=0;ht<Ke.length;ht++)Ke[ht]();Ke=null,ht=0}}const Yt=e=>e.id==null?1/0:e.id;function Hi(e){ir=!1,pn=!0,Sn(e),ue.sort((n,r)=>Yt(n)-Yt(r));const t=xe;try{for(Fe=0;Fe<ue.length;Fe++){const n=ue[Fe];n&&n.active!==!1&&qe(n,null,14)}}finally{Fe=0,ue.length=0,Bi(),pn=!1,Wr=null,(ue.length||jt.length||zt.length)&&Hi(e)}}function Xs(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Y;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:b}=r[d]||Y;b&&(a=n.map(O=>O.trim())),m&&(a=n.map(os))}let s,l=r[s=Un(t)]||r[s=Un(Ie(t))];!l&&i&&(l=r[s=Un(Ot(t))]),l&&we(l,e,6,a);const u=r[s+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,we(u,e,6,a)}}function Ui(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!L(e)){const l=u=>{const d=Ui(u,t,!0);d&&(s=!0,ae(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(r.set(e,null),null):(F(i)?i.forEach(l=>o[l]=null):ae(o,i),r.set(e,o),o)}function In(e,t){return!e||!An(t)?!1:(t=t.slice(2).replace(/Once$/,""),$(e,t[0].toLowerCase()+t.slice(1))||$(e,Ot(t))||$(e,t))}let Te=null,Wi=null;function hn(e){const t=Te;return Te=e,Wi=e&&e.type.__scopeId||null,t}function qs(e,t=Te,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Fa(-1);const i=hn(t),o=e(...a);return hn(i),r._d&&Fa(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Yn(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:u,render:d,renderCache:m,data:b,setupState:O,ctx:R,inheritAttrs:j}=e;let I,y;const C=hn(e);try{if(n.shapeFlag&4){const z=a||r;I=Pe(d.call(z,z,m,i,O,b,R)),y=l}else{const z=t;I=Pe(z.length>1?z(i,{attrs:l,slots:s,emit:u}):z(i,null)),y=t.props?l:Js(l)}}catch(z){Dt.length=0,Tn(z,e,1),I=J(st)}let N=I;if(y&&j!==!1){const z=Object.keys(y),{shapeFlag:W}=N;z.length&&W&7&&(o&&z.some(Ir)&&(y=Gs(y,o)),N=kt(N,y))}return n.dirs&&(N=kt(N),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),I=N,hn(C),I}const Js=e=>{let t;for(const n in e)(n==="class"||n==="style"||An(n))&&((t||(t={}))[n]=e[n]);return t},Gs=(e,t)=>{const n={};for(const r in e)(!Ir(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Zs(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Oa(r,o,u):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const b=d[m];if(o[b]!==r[b]&&!In(u,b))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Oa(r,o,u):!0:!!o;return!1}function Oa(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!In(n,i))return!0}return!1}function Qs({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const el=e=>e.__isSuspense;function tl(e,t){t&&t.pendingBranch?F(e)?t.effects.push(...e):t.effects.push(e):Vs(e)}function nl(e,t){if(ee){let n=ee.provides;const r=ee.parent&&ee.parent.provides;r===n&&(n=ee.provides=Object.create(r)),n[e]=t}}function Kn(e,t,n=!1){const r=ee||Te;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&L(t)?t.call(r.proxy):t}}const Ca={};function on(e,t,n){return Yi(e,t,n)}function Yi(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=Y){const s=ee;let l,u=!1,d=!1;if(re(e)?(l=()=>e.value,u=ar(e)):wt(e)?(l=()=>e,r=!0):F(e)?(d=!0,u=e.some(y=>wt(y)||ar(y)),l=()=>e.map(y=>{if(re(y))return y.value;if(wt(y))return gt(y);if(L(y))return qe(y,s,2)})):L(e)?t?l=()=>qe(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),we(e,s,3,[b])}:l=xe,t&&r){const y=l;l=()=>gt(y())}let m,b=y=>{m=I.onStop=()=>{qe(y,s,4)}};if(Vt)return b=xe,t?n&&we(t,s,3,[l(),d?[]:void 0,b]):l(),xe;let O=d?[]:Ca;const R=()=>{if(!!I.active)if(t){const y=I.run();(r||u||(d?y.some((C,N)=>dn(C,O[N])):dn(y,O)))&&(m&&m(),we(t,s,3,[y,O===Ca?void 0:O,b]),O=y)}else I.run()};R.allowRecurse=!!t;let j;a==="sync"?j=R:a==="post"?j=()=>le(R,s&&s.suspense):j=()=>Ks(R);const I=new Lr(l,j);return t?n?R():O=I.run():a==="post"?le(I.run.bind(I),s&&s.suspense):I.run(),()=>{I.stop(),s&&s.scope&&Nr(s.scope.effects,I)}}function rl(e,t,n){const r=this.proxy,a=Q(e)?e.includes(".")?Ki(r,e):()=>r[e]:e.bind(r,r);let i;L(t)?i=t:(i=t.handler,n=t);const o=ee;At(this);const s=Yi(a,i.bind(r),n);return o?At(o):ot(),s}function Ki(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function gt(e,t){if(!G(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),re(e))gt(e.value,t);else if(F(e))for(let n=0;n<e.length;n++)gt(e[n],t);else if(yi(e)||xt(e))e.forEach(n=>{gt(n,t)});else if(_i(e))for(const n in e)gt(e[n],t);return e}function Yr(e){return L(e)?{setup:e,name:e.name}:e}const sn=e=>!!e.type.__asyncLoader,Vi=e=>e.type.__isKeepAlive;function al(e,t){Xi(e,"a",t)}function il(e,t){Xi(e,"da",t)}function Xi(e,t,n=ee){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Nn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Vi(a.parent.vnode)&&ol(r,t,n,a),a=a.parent}}function ol(e,t,n,r){const a=Nn(t,e,r,!0);qi(()=>{Nr(r[t],a)},n)}function Nn(e,t,n=ee,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Ct(),At(n);const s=we(t,n,e,o);return ot(),Et(),s});return r?a.unshift(i):a.push(i),i}}const De=e=>(t,n=ee)=>(!Vt||e==="sp")&&Nn(e,t,n),sl=De("bm"),ll=De("m"),fl=De("bu"),cl=De("u"),ul=De("bum"),qi=De("um"),dl=De("sp"),ml=De("rtg"),pl=De("rtc");function hl(e,t=ee){Nn("ec",e,t)}function Qe(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Ct(),we(l,n,8,[e.el,s,e,t]),Et())}}const Ji="components";function $t(e,t){return vl(Ji,e,!0,t)||e}const gl=Symbol();function vl(e,t,n=!0,r=!1){const a=Te||ee;if(a){const i=a.type;if(e===Ji){const s=Vl(i,!1);if(s&&(s===t||s===Ie(t)||s===En(Ie(t))))return i}const o=Ea(a[e]||i[e],t)||Ea(a.appContext[e],t);return!o&&r?i:o}}function Ea(e,t){return e&&(e[t]||e[Ie(t)]||e[En(Ie(t))])}function bl(e,t,n,r){let a;const i=n&&n[r];if(F(e)||Q(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(G(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const u=o[s];a[s]=t(e[u],u,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const sr=e=>e?lo(e)?qr(e)||e.proxy:sr(e.parent):null,gn=ae(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>sr(e.parent),$root:e=>sr(e.root),$emit:e=>e.emit,$options:e=>Zi(e),$forceUpdate:e=>e.f||(e.f=()=>zi(e.update)),$nextTick:e=>e.n||(e.n=Us.bind(e.proxy)),$watch:e=>rl.bind(e)}),yl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let u;if(t[0]!=="$"){const O=o[t];if(O!==void 0)switch(O){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==Y&&$(r,t))return o[t]=1,r[t];if(a!==Y&&$(a,t))return o[t]=2,a[t];if((u=e.propsOptions[0])&&$(u,t))return o[t]=3,i[t];if(n!==Y&&$(n,t))return o[t]=4,n[t];lr&&(o[t]=0)}}const d=gn[t];let m,b;if(d)return t==="$attrs"&&de(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==Y&&$(n,t))return o[t]=4,n[t];if(b=l.config.globalProperties,$(b,t))return b[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==Y&&$(a,t)?(a[t]=n,!0):r!==Y&&$(r,t)?(r[t]=n,!0):$(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==Y&&$(e,o)||t!==Y&&$(t,o)||(s=i[0])&&$(s,o)||$(r,o)||$(gn,o)||$(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:$(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let lr=!0;function xl(e){const t=Zi(e),n=e.proxy,r=e.ctx;lr=!1,t.beforeCreate&&Pa(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:u,created:d,beforeMount:m,mounted:b,beforeUpdate:O,updated:R,activated:j,deactivated:I,beforeDestroy:y,beforeUnmount:C,destroyed:N,unmounted:z,render:W,renderTracked:te,renderTriggered:fe,errorCaptured:_e,serverPrefetch:ie,expose:Tt,inheritAttrs:ct,components:St,directives:Jt,filters:ua}=t;if(u&&wl(u,r,null,e.appContext.config.unwrapInjectedRef),o)for(const q in o){const K=o[q];L(K)&&(r[q]=K.bind(n))}if(a){const q=a.call(n,n);G(q)&&(e.data=Dr(q))}if(lr=!0,i)for(const q in i){const K=i[q],Ne=L(K)?K.bind(n,n):L(K.get)?K.get.bind(n,n):xe,Dn=!L(K)&&L(K.set)?K.set.bind(n):xe,It=pe({get:Ne,set:Dn});Object.defineProperty(r,q,{enumerable:!0,configurable:!0,get:()=>It.value,set:ut=>It.value=ut})}if(s)for(const q in s)Gi(s[q],r,n,q);if(l){const q=L(l)?l.call(n):l;Reflect.ownKeys(q).forEach(K=>{nl(K,q[K])})}d&&Pa(d,e,"c");function oe(q,K){F(K)?K.forEach(Ne=>q(Ne.bind(n))):K&&q(K.bind(n))}if(oe(sl,m),oe(ll,b),oe(fl,O),oe(cl,R),oe(al,j),oe(il,I),oe(hl,_e),oe(pl,te),oe(ml,fe),oe(ul,C),oe(qi,z),oe(dl,ie),F(Tt))if(Tt.length){const q=e.exposed||(e.exposed={});Tt.forEach(K=>{Object.defineProperty(q,K,{get:()=>n[K],set:Ne=>n[K]=Ne})})}else e.exposed||(e.exposed={});W&&e.render===xe&&(e.render=W),ct!=null&&(e.inheritAttrs=ct),St&&(e.components=St),Jt&&(e.directives=Jt)}function wl(e,t,n=xe,r=!1){F(e)&&(e=fr(e));for(const a in e){const i=e[a];let o;G(i)?"default"in i?o=Kn(i.from||a,i.default,!0):o=Kn(i.from||a):o=Kn(i),re(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function Pa(e,t,n){we(F(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Gi(e,t,n,r){const a=r.includes(".")?Ki(n,r):()=>n[r];if(Q(e)){const i=t[e];L(i)&&on(a,i)}else if(L(e))on(a,e.bind(n));else if(G(e))if(F(e))e.forEach(i=>Gi(i,t,n,r));else{const i=L(e.handler)?e.handler.bind(n):t[e.handler];L(i)&&on(a,i,e)}}function Zi(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(u=>vn(l,u,o,!0)),vn(l,t,o)),i.set(t,l),l}function vn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&vn(e,i,n,!0),a&&a.forEach(o=>vn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=_l[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const _l={data:Ta,props:tt,emits:tt,methods:tt,computed:tt,beforeCreate:ne,created:ne,beforeMount:ne,mounted:ne,beforeUpdate:ne,updated:ne,beforeDestroy:ne,beforeUnmount:ne,destroyed:ne,unmounted:ne,activated:ne,deactivated:ne,errorCaptured:ne,serverPrefetch:ne,components:tt,directives:tt,watch:Al,provide:Ta,inject:kl};function Ta(e,t){return t?e?function(){return ae(L(e)?e.call(this,this):e,L(t)?t.call(this,this):t)}:t:e}function kl(e,t){return tt(fr(e),fr(t))}function fr(e){if(F(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ne(e,t){return e?[...new Set([].concat(e,t))]:t}function tt(e,t){return e?ae(ae(Object.create(null),e),t):t}function Al(e,t){if(!e)return t;if(!t)return e;const n=ae(Object.create(null),e);for(const r in t)n[r]=ne(e[r],t[r]);return n}function Ol(e,t,n,r=!1){const a={},i={};mn(i,Mn,1),e.propsDefaults=Object.create(null),Qi(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Rs(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Cl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=B(a),[l]=e.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let b=d[m];if(In(e.emitsOptions,b))continue;const O=t[b];if(l)if($(i,b))O!==i[b]&&(i[b]=O,u=!0);else{const R=Ie(b);a[R]=cr(l,s,R,O,e,!1)}else O!==i[b]&&(i[b]=O,u=!0)}}}else{Qi(e,t,a,i)&&(u=!0);let d;for(const m in s)(!t||!$(t,m)&&((d=Ot(m))===m||!$(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=cr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!$(t,m)&&!0)&&(delete i[m],u=!0)}u&&Le(e,"set","$attrs")}function Qi(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(an(l))continue;const u=t[l];let d;a&&$(a,d=Ie(l))?!i||!i.includes(d)?n[d]=u:(s||(s={}))[d]=u:In(e.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=B(n),u=s||Y;for(let d=0;d<i.length;d++){const m=i[d];n[m]=cr(a,l,m,u[m],e,!$(u,m))}}return o}function cr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=$(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&L(l)){const{propsDefaults:u}=a;n in u?r=u[n]:(At(a),r=u[n]=l.call(null,t),ot())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Ot(n))&&(r=!0))}return r}function eo(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!L(e)){const d=m=>{l=!0;const[b,O]=eo(m,t,!0);ae(o,b),O&&s.push(...O)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return r.set(e,yt),yt;if(F(i))for(let d=0;d<i.length;d++){const m=Ie(i[d]);Sa(m)&&(o[m]=Y)}else if(i)for(const d in i){const m=Ie(d);if(Sa(m)){const b=i[d],O=o[m]=F(b)||L(b)?{type:b}:b;if(O){const R=Ma(Boolean,O.type),j=Ma(String,O.type);O[0]=R>-1,O[1]=j<0||R<j,(R>-1||$(O,"default"))&&s.push(m)}}}const u=[o,s];return r.set(e,u),u}function Sa(e){return e[0]!=="$"}function Ia(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Na(e,t){return Ia(e)===Ia(t)}function Ma(e,t){return F(t)?t.findIndex(n=>Na(n,e)):L(t)&&Na(t,e)?0:-1}const to=e=>e[0]==="_"||e==="$stable",Kr=e=>F(e)?e.map(Pe):[Pe(e)],El=(e,t,n)=>{if(t._n)return t;const r=qs((...a)=>Kr(t(...a)),n);return r._c=!1,r},no=(e,t,n)=>{const r=e._ctx;for(const a in e){if(to(a))continue;const i=e[a];if(L(i))t[a]=El(a,i,r);else if(i!=null){const o=Kr(i);t[a]=()=>o}}},ro=(e,t)=>{const n=Kr(t);e.slots.default=()=>n},Pl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=B(t),mn(t,"_",n)):no(t,e.slots={})}else e.slots={},t&&ro(e,t);mn(e.slots,Mn,1)},Tl=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=Y;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(ae(a,t),!n&&s===1&&delete a._):(i=!t.$stable,no(t,a)),o=t}else t&&(ro(e,t),o={default:1});if(i)for(const s in a)!to(s)&&!(s in o)&&delete a[s]};function ao(){return{app:null,config:{isNativeTag:es,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Sl=0;function Il(e,t){return function(r,a=null){L(r)||(r=Object.assign({},r)),a!=null&&!G(a)&&(a=null);const i=ao(),o=new Set;let s=!1;const l=i.app={_uid:Sl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:ql,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&L(u.install)?(o.add(u),u.install(l,...d)):L(u)&&(o.add(u),u(l,...d))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,d){return d?(i.components[u]=d,l):i.components[u]},directive(u,d){return d?(i.directives[u]=d,l):i.directives[u]},mount(u,d,m){if(!s){const b=J(r,a);return b.appContext=i,d&&t?t(b,u):e(b,u,m),s=!0,l._container=u,u.__vue_app__=l,qr(b.component)||b.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(u,d){return i.provides[u]=d,l}};return l}}function ur(e,t,n,r,a=!1){if(F(e)){e.forEach((b,O)=>ur(b,t&&(F(t)?t[O]:t),n,r,a));return}if(sn(r)&&!a)return;const i=r.shapeFlag&4?qr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,u=t&&t.r,d=s.refs===Y?s.refs={}:s.refs,m=s.setupState;if(u!=null&&u!==l&&(Q(u)?(d[u]=null,$(m,u)&&(m[u]=null)):re(u)&&(u.value=null)),L(l))qe(l,s,12,[o,d]);else{const b=Q(l),O=re(l);if(b||O){const R=()=>{if(e.f){const j=b?d[l]:l.value;a?F(j)&&Nr(j,i):F(j)?j.includes(i)||j.push(i):b?(d[l]=[i],$(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else b?(d[l]=o,$(m,l)&&(m[l]=o)):O&&(l.value=o,e.k&&(d[e.k]=o))};o?(R.id=-1,le(R,n)):R()}}}const le=tl;function Nl(e){return Ml(e)}function Ml(e,t){const n=ss();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:u,setElementText:d,parentNode:m,nextSibling:b,setScopeId:O=xe,cloneNode:R,insertStaticContent:j}=e,I=(f,c,p,g=null,h=null,w=null,k=!1,x=null,_=!!c.dynamicChildren)=>{if(f===c)return;f&&!Mt(f,c)&&(g=Gt(f),Ue(f,h,w,!0),f=null),c.patchFlag===-2&&(_=!1,c.dynamicChildren=null);const{type:v,ref:P,shapeFlag:E}=c;switch(v){case Vr:y(f,c,p,g);break;case st:C(f,c,p,g);break;case Vn:f==null&&N(c,p,g,k);break;case Ee:Jt(f,c,p,g,h,w,k,x,_);break;default:E&1?te(f,c,p,g,h,w,k,x,_):E&6?ua(f,c,p,g,h,w,k,x,_):(E&64||E&128)&&v.process(f,c,p,g,h,w,k,x,_,dt)}P!=null&&h&&ur(P,f&&f.ref,w,c||f,!c)},y=(f,c,p,g)=>{if(f==null)r(c.el=s(c.children),p,g);else{const h=c.el=f.el;c.children!==f.children&&u(h,c.children)}},C=(f,c,p,g)=>{f==null?r(c.el=l(c.children||""),p,g):c.el=f.el},N=(f,c,p,g)=>{[f.el,f.anchor]=j(f.children,c,p,g,f.el,f.anchor)},z=({el:f,anchor:c},p,g)=>{let h;for(;f&&f!==c;)h=b(f),r(f,p,g),f=h;r(c,p,g)},W=({el:f,anchor:c})=>{let p;for(;f&&f!==c;)p=b(f),a(f),f=p;a(c)},te=(f,c,p,g,h,w,k,x,_)=>{k=k||c.type==="svg",f==null?fe(c,p,g,h,w,k,x,_):Tt(f,c,h,w,k,x,_)},fe=(f,c,p,g,h,w,k,x)=>{let _,v;const{type:P,props:E,shapeFlag:T,transition:M,patchFlag:D,dirs:H}=f;if(f.el&&R!==void 0&&D===-1)_=f.el=R(f.el);else{if(_=f.el=o(f.type,w,E&&E.is,E),T&8?d(_,f.children):T&16&&ie(f.children,_,null,g,h,w&&P!=="foreignObject",k,x),H&&Qe(f,null,g,"created"),E){for(const V in E)V!=="value"&&!an(V)&&i(_,V,null,E[V],w,f.children,g,h,Me);"value"in E&&i(_,"value",null,E.value),(v=E.onVnodeBeforeMount)&&Ae(v,g,f)}_e(_,f,f.scopeId,k,g)}H&&Qe(f,null,g,"beforeMount");const U=(!h||h&&!h.pendingBranch)&&M&&!M.persisted;U&&M.beforeEnter(_),r(_,c,p),((v=E&&E.onVnodeMounted)||U||H)&&le(()=>{v&&Ae(v,g,f),U&&M.enter(_),H&&Qe(f,null,g,"mounted")},h)},_e=(f,c,p,g,h)=>{if(p&&O(f,p),g)for(let w=0;w<g.length;w++)O(f,g[w]);if(h){let w=h.subTree;if(c===w){const k=h.vnode;_e(f,k,k.scopeId,k.slotScopeIds,h.parent)}}},ie=(f,c,p,g,h,w,k,x,_=0)=>{for(let v=_;v<f.length;v++){const P=f[v]=x?Ve(f[v]):Pe(f[v]);I(null,P,c,p,g,h,w,k,x)}},Tt=(f,c,p,g,h,w,k)=>{const x=c.el=f.el;let{patchFlag:_,dynamicChildren:v,dirs:P}=c;_|=f.patchFlag&16;const E=f.props||Y,T=c.props||Y;let M;p&&et(p,!1),(M=T.onVnodeBeforeUpdate)&&Ae(M,p,c,f),P&&Qe(c,f,p,"beforeUpdate"),p&&et(p,!0);const D=h&&c.type!=="foreignObject";if(v?ct(f.dynamicChildren,v,x,p,g,D,w):k||Ne(f,c,x,null,p,g,D,w,!1),_>0){if(_&16)St(x,c,E,T,p,g,h);else if(_&2&&E.class!==T.class&&i(x,"class",null,T.class,h),_&4&&i(x,"style",E.style,T.style,h),_&8){const H=c.dynamicProps;for(let U=0;U<H.length;U++){const V=H[U],he=E[V],mt=T[V];(mt!==he||V==="value")&&i(x,V,he,mt,h,f.children,p,g,Me)}}_&1&&f.children!==c.children&&d(x,c.children)}else!k&&v==null&&St(x,c,E,T,p,g,h);((M=T.onVnodeUpdated)||P)&&le(()=>{M&&Ae(M,p,c,f),P&&Qe(c,f,p,"updated")},g)},ct=(f,c,p,g,h,w,k)=>{for(let x=0;x<c.length;x++){const _=f[x],v=c[x],P=_.el&&(_.type===Ee||!Mt(_,v)||_.shapeFlag&70)?m(_.el):p;I(_,v,P,null,g,h,w,k,!0)}},St=(f,c,p,g,h,w,k)=>{if(p!==g){for(const x in g){if(an(x))continue;const _=g[x],v=p[x];_!==v&&x!=="value"&&i(f,x,v,_,k,c.children,h,w,Me)}if(p!==Y)for(const x in p)!an(x)&&!(x in g)&&i(f,x,p[x],null,k,c.children,h,w,Me);"value"in g&&i(f,"value",p.value,g.value)}},Jt=(f,c,p,g,h,w,k,x,_)=>{const v=c.el=f?f.el:s(""),P=c.anchor=f?f.anchor:s("");let{patchFlag:E,dynamicChildren:T,slotScopeIds:M}=c;M&&(x=x?x.concat(M):M),f==null?(r(v,p,g),r(P,p,g),ie(c.children,p,P,h,w,k,x,_)):E>0&&E&64&&T&&f.dynamicChildren?(ct(f.dynamicChildren,T,p,h,w,k,x),(c.key!=null||h&&c===h.subTree)&&io(f,c,!0)):Ne(f,c,p,P,h,w,k,x,_)},ua=(f,c,p,g,h,w,k,x,_)=>{c.slotScopeIds=x,f==null?c.shapeFlag&512?h.ctx.activate(c,p,g,k,_):$n(c,p,g,h,w,k,_):oe(f,c,_)},$n=(f,c,p,g,h,w,k)=>{const x=f.component=Hl(f,g,h);if(Vi(f)&&(x.ctx.renderer=dt),Ul(x),x.asyncDep){if(h&&h.registerDep(x,q),!f.el){const _=x.subTree=J(st);C(null,_,c,p)}return}q(x,f,c,p,h,w,k)},oe=(f,c,p)=>{const g=c.component=f.component;if(Zs(f,c,p))if(g.asyncDep&&!g.asyncResolved){K(g,c,p);return}else g.next=c,Ys(g.update),g.update();else c.el=f.el,g.vnode=c},q=(f,c,p,g,h,w,k)=>{const x=()=>{if(f.isMounted){let{next:P,bu:E,u:T,parent:M,vnode:D}=f,H=P,U;et(f,!1),P?(P.el=D.el,K(f,P,k)):P=D,E&&Wn(E),(U=P.props&&P.props.onVnodeBeforeUpdate)&&Ae(U,M,P,D),et(f,!0);const V=Yn(f),he=f.subTree;f.subTree=V,I(he,V,m(he.el),Gt(he),f,h,w),P.el=V.el,H===null&&Qs(f,V.el),T&&le(T,h),(U=P.props&&P.props.onVnodeUpdated)&&le(()=>Ae(U,M,P,D),h)}else{let P;const{el:E,props:T}=c,{bm:M,m:D,parent:H}=f,U=sn(c);if(et(f,!1),M&&Wn(M),!U&&(P=T&&T.onVnodeBeforeMount)&&Ae(P,H,c),et(f,!0),E&&Hn){const V=()=>{f.subTree=Yn(f),Hn(E,f.subTree,f,h,null)};U?c.type.__asyncLoader().then(()=>!f.isUnmounted&&V()):V()}else{const V=f.subTree=Yn(f);I(null,V,p,g,f,h,w),c.el=V.el}if(D&&le(D,h),!U&&(P=T&&T.onVnodeMounted)){const V=c;le(()=>Ae(P,H,V),h)}(c.shapeFlag&256||H&&sn(H.vnode)&&H.vnode.shapeFlag&256)&&f.a&&le(f.a,h),f.isMounted=!0,c=p=g=null}},_=f.effect=new Lr(x,()=>zi(v),f.scope),v=f.update=()=>_.run();v.id=f.uid,et(f,!0),v()},K=(f,c,p)=>{c.component=f;const g=f.vnode.props;f.vnode=c,f.next=null,Cl(f,c.props,g,p),Tl(f,c.children,p),Ct(),Sn(void 0,f.update),Et()},Ne=(f,c,p,g,h,w,k,x,_=!1)=>{const v=f&&f.children,P=f?f.shapeFlag:0,E=c.children,{patchFlag:T,shapeFlag:M}=c;if(T>0){if(T&128){It(v,E,p,g,h,w,k,x,_);return}else if(T&256){Dn(v,E,p,g,h,w,k,x,_);return}}M&8?(P&16&&Me(v,h,w),E!==v&&d(p,E)):P&16?M&16?It(v,E,p,g,h,w,k,x,_):Me(v,h,w,!0):(P&8&&d(p,""),M&16&&ie(E,p,g,h,w,k,x,_))},Dn=(f,c,p,g,h,w,k,x,_)=>{f=f||yt,c=c||yt;const v=f.length,P=c.length,E=Math.min(v,P);let T;for(T=0;T<E;T++){const M=c[T]=_?Ve(c[T]):Pe(c[T]);I(f[T],M,p,null,h,w,k,x,_)}v>P?Me(f,h,w,!0,!1,E):ie(c,p,g,h,w,k,x,_,E)},It=(f,c,p,g,h,w,k,x,_)=>{let v=0;const P=c.length;let E=f.length-1,T=P-1;for(;v<=E&&v<=T;){const M=f[v],D=c[v]=_?Ve(c[v]):Pe(c[v]);if(Mt(M,D))I(M,D,p,null,h,w,k,x,_);else break;v++}for(;v<=E&&v<=T;){const M=f[E],D=c[T]=_?Ve(c[T]):Pe(c[T]);if(Mt(M,D))I(M,D,p,null,h,w,k,x,_);else break;E--,T--}if(v>E){if(v<=T){const M=T+1,D=M<P?c[M].el:g;for(;v<=T;)I(null,c[v]=_?Ve(c[v]):Pe(c[v]),p,D,h,w,k,x,_),v++}}else if(v>T)for(;v<=E;)Ue(f[v],h,w,!0),v++;else{const M=v,D=v,H=new Map;for(v=D;v<=T;v++){const ce=c[v]=_?Ve(c[v]):Pe(c[v]);ce.key!=null&&H.set(ce.key,v)}let U,V=0;const he=T-D+1;let mt=!1,pa=0;const Nt=new Array(he);for(v=0;v<he;v++)Nt[v]=0;for(v=M;v<=E;v++){const ce=f[v];if(V>=he){Ue(ce,h,w,!0);continue}let ke;if(ce.key!=null)ke=H.get(ce.key);else for(U=D;U<=T;U++)if(Nt[U-D]===0&&Mt(ce,c[U])){ke=U;break}ke===void 0?Ue(ce,h,w,!0):(Nt[ke-D]=v+1,ke>=pa?pa=ke:mt=!0,I(ce,c[ke],p,null,h,w,k,x,_),V++)}const ha=mt?Fl(Nt):yt;for(U=ha.length-1,v=he-1;v>=0;v--){const ce=D+v,ke=c[ce],ga=ce+1<P?c[ce+1].el:g;Nt[v]===0?I(null,ke,p,ga,h,w,k,x,_):mt&&(U<0||v!==ha[U]?ut(ke,p,ga,2):U--)}}},ut=(f,c,p,g,h=null)=>{const{el:w,type:k,transition:x,children:_,shapeFlag:v}=f;if(v&6){ut(f.component.subTree,c,p,g);return}if(v&128){f.suspense.move(c,p,g);return}if(v&64){k.move(f,c,p,dt);return}if(k===Ee){r(w,c,p);for(let E=0;E<_.length;E++)ut(_[E],c,p,g);r(f.anchor,c,p);return}if(k===Vn){z(f,c,p);return}if(g!==2&&v&1&&x)if(g===0)x.beforeEnter(w),r(w,c,p),le(()=>x.enter(w),h);else{const{leave:E,delayLeave:T,afterLeave:M}=x,D=()=>r(w,c,p),H=()=>{E(w,()=>{D(),M&&M()})};T?T(w,D,H):H()}else r(w,c,p)},Ue=(f,c,p,g=!1,h=!1)=>{const{type:w,props:k,ref:x,children:_,dynamicChildren:v,shapeFlag:P,patchFlag:E,dirs:T}=f;if(x!=null&&ur(x,null,p,f,!0),P&256){c.ctx.deactivate(f);return}const M=P&1&&T,D=!sn(f);let H;if(D&&(H=k&&k.onVnodeBeforeUnmount)&&Ae(H,c,f),P&6)Vo(f.component,p,g);else{if(P&128){f.suspense.unmount(p,g);return}M&&Qe(f,null,c,"beforeUnmount"),P&64?f.type.remove(f,c,p,h,dt,g):v&&(w!==Ee||E>0&&E&64)?Me(v,c,p,!1,!0):(w===Ee&&E&384||!h&&P&16)&&Me(_,c,p),g&&da(f)}(D&&(H=k&&k.onVnodeUnmounted)||M)&&le(()=>{H&&Ae(H,c,f),M&&Qe(f,null,c,"unmounted")},p)},da=f=>{const{type:c,el:p,anchor:g,transition:h}=f;if(c===Ee){Ko(p,g);return}if(c===Vn){W(f);return}const w=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(f.shapeFlag&1&&h&&!h.persisted){const{leave:k,delayLeave:x}=h,_=()=>k(p,w);x?x(f.el,w,_):_()}else w()},Ko=(f,c)=>{let p;for(;f!==c;)p=b(f),a(f),f=p;a(c)},Vo=(f,c,p)=>{const{bum:g,scope:h,update:w,subTree:k,um:x}=f;g&&Wn(g),h.stop(),w&&(w.active=!1,Ue(k,f,c,p)),x&&le(x,c),le(()=>{f.isUnmounted=!0},c),c&&c.pendingBranch&&!c.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===c.pendingId&&(c.deps--,c.deps===0&&c.resolve())},Me=(f,c,p,g=!1,h=!1,w=0)=>{for(let k=w;k<f.length;k++)Ue(f[k],c,p,g,h)},Gt=f=>f.shapeFlag&6?Gt(f.component.subTree):f.shapeFlag&128?f.suspense.next():b(f.anchor||f.el),ma=(f,c,p)=>{f==null?c._vnode&&Ue(c._vnode,null,null,!0):I(c._vnode||null,f,c,null,null,null,p),Bi(),c._vnode=f},dt={p:I,um:Ue,m:ut,r:da,mt:$n,mc:ie,pc:Ne,pbc:ct,n:Gt,o:e};let Bn,Hn;return t&&([Bn,Hn]=t(dt)),{render:ma,hydrate:Bn,createApp:Il(ma,Bn)}}function et({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function io(e,t,n=!1){const r=e.children,a=t.children;if(F(r)&&F(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Ve(a[i]),s.el=o.el),n||io(o,s))}}function Fl(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const u=e[r];if(u!==0){if(a=n[n.length-1],e[a]<u){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<u?i=s+1:o=s;u<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Rl=e=>e.__isTeleport,Ee=Symbol(void 0),Vr=Symbol(void 0),st=Symbol(void 0),Vn=Symbol(void 0),Dt=[];let be=null;function Ce(e=!1){Dt.push(be=e?null:[])}function Ll(){Dt.pop(),be=Dt[Dt.length-1]||null}let Kt=1;function Fa(e){Kt+=e}function oo(e){return e.dynamicChildren=Kt>0?be||yt:null,Ll(),Kt>0&&be&&be.push(e),e}function nt(e,t,n,r,a,i){return oo(Z(e,t,n,r,a,i,!0))}function dr(e,t,n,r,a){return oo(J(e,t,n,r,a,!0))}function mr(e){return e?e.__v_isVNode===!0:!1}function Mt(e,t){return e.type===t.type&&e.key===t.key}const Mn="__vInternal",so=({key:e})=>e!=null?e:null,ln=({ref:e,ref_key:t,ref_for:n})=>e!=null?Q(e)||re(e)||L(e)?{i:Te,r:e,k:t,f:!!n}:e:null;function Z(e,t=null,n=null,r=0,a=null,i=e===Ee?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&so(t),ref:t&&ln(t),scopeId:Wi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(Xr(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=Q(n)?8:16),Kt>0&&!o&&be&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&be.push(l),l}const J=jl;function jl(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===gl)&&(e=st),mr(e)){const s=kt(e,t,!0);return n&&Xr(s,n),Kt>0&&!i&&be&&(s.shapeFlag&6?be[be.indexOf(e)]=s:be.push(s)),s.patchFlag|=-2,s}if(Xl(e)&&(e=e.__vccOpts),t){t=zl(t);let{class:s,style:l}=t;s&&!Q(s)&&(t.class=Re(s)),G(l)&&(Fi(l)&&!F(l)&&(l=ae({},l)),t.style=Sr(l))}const o=Q(e)?1:el(e)?128:Rl(e)?64:G(e)?4:L(e)?2:0;return Z(e,t,n,r,a,o,i,!0)}function zl(e){return e?Fi(e)||Mn in e?ae({},e):e:null}function kt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?$l(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&so(s),ref:t&&t.ref?n&&a?F(a)?a.concat(ln(t)):[a,ln(t)]:ln(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ee?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&kt(e.ssContent),ssFallback:e.ssFallback&&kt(e.ssFallback),el:e.el,anchor:e.anchor}}function Be(e=" ",t=0){return J(Vr,null,e,t)}function Ra(e="",t=!1){return t?(Ce(),dr(st,null,e)):J(st,null,e)}function Pe(e){return e==null||typeof e=="boolean"?J(st):F(e)?J(Ee,null,e.slice()):typeof e=="object"?Ve(e):J(Vr,null,String(e))}function Ve(e){return e.el===null||e.memo?e:kt(e)}function Xr(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(F(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Xr(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Mn in t)?t._ctx=Te:a===3&&Te&&(Te.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else L(t)?(t={default:t,_ctx:Te},n=32):(t=String(t),r&64?(n=16,t=[Be(t)]):n=8);e.children=t,e.shapeFlag|=n}function $l(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Re([t.class,r.class]));else if(a==="style")t.style=Sr([t.style,r.style]);else if(An(a)){const i=t[a],o=r[a];o&&i!==o&&!(F(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Ae(e,t,n,r=null){we(e,t,7,[n,r])}const Dl=ao();let Bl=0;function Hl(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Dl,i={uid:Bl++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new ls(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:eo(r,a),emitsOptions:Ui(r,a),emit:null,emitted:null,propsDefaults:Y,inheritAttrs:r.inheritAttrs,ctx:Y,data:Y,props:Y,attrs:Y,slots:Y,refs:Y,setupState:Y,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Xs.bind(null,i),e.ce&&e.ce(i),i}let ee=null;const At=e=>{ee=e,e.scope.on()},ot=()=>{ee&&ee.scope.off(),ee=null};function lo(e){return e.vnode.shapeFlag&4}let Vt=!1;function Ul(e,t=!1){Vt=t;const{props:n,children:r}=e.vnode,a=lo(e);Ol(e,n,a,t),Pl(e,r);const i=a?Wl(e,t):void 0;return Vt=!1,i}function Wl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ri(new Proxy(e.ctx,yl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Kl(e):null;At(e),Ct();const i=qe(r,e,0,[e.props,a]);if(Et(),ot(),xi(i)){if(i.then(ot,ot),t)return i.then(o=>{La(e,o,t)}).catch(o=>{Tn(o,e,0)});e.asyncDep=i}else La(e,i,t)}else fo(e,t)}function La(e,t,n){L(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:G(t)&&(e.setupState=Li(t)),fo(e,n)}let ja;function fo(e,t,n){const r=e.type;if(!e.render){if(!t&&ja&&!r.render){const a=r.template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,u=ae(ae({isCustomElement:i,delimiters:s},o),l);r.render=ja(a,u)}}e.render=r.render||xe}At(e),Ct(),xl(e),Et(),ot()}function Yl(e){return new Proxy(e.attrs,{get(t,n){return de(e,"get","$attrs"),t[n]}})}function Kl(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Yl(e))},slots:e.slots,emit:e.emit,expose:t}}function qr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Li(Ri(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in gn)return gn[n](e)}}))}function Vl(e,t=!0){return L(e)?e.displayName||e.name:e.name||t&&e.__name}function Xl(e){return L(e)&&"__vccOpts"in e}const pe=(e,t)=>Bs(e,t,Vt);function co(e,t,n){const r=arguments.length;return r===2?G(t)&&!F(t)?mr(t)?J(e,null,[t]):J(e,t):J(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&mr(n)&&(n=[n]),J(e,t,n))}const ql="3.2.37",Jl="http://www.w3.org/2000/svg",rt=typeof document<"u"?document:null,za=rt&&rt.createElement("template"),Gl={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?rt.createElementNS(Jl,e):rt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>rt.createTextNode(e),createComment:e=>rt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>rt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{za.innerHTML=r?`<svg>${e}</svg>`:e;const s=za.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Zl(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Ql(e,t,n){const r=e.style,a=Q(n);if(n&&!a){for(const i in n)pr(r,i,n[i]);if(t&&!Q(t))for(const i in t)n[i]==null&&pr(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const $a=/\s*!important$/;function pr(e,t,n){if(F(n))n.forEach(r=>pr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=ef(e,t);$a.test(n)?e.setProperty(Ot(r),n.replace($a,""),"important"):e[r]=n}}const Da=["Webkit","Moz","ms"],Xn={};function ef(e,t){const n=Xn[t];if(n)return n;let r=Ie(t);if(r!=="filter"&&r in e)return Xn[t]=r;r=En(r);for(let a=0;a<Da.length;a++){const i=Da[a]+r;if(i in e)return Xn[t]=i}return t}const Ba="http://www.w3.org/1999/xlink";function tf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ba,t.slice(6,t.length)):e.setAttributeNS(Ba,t,n);else{const i=Jo(t);n==null||i&&!vi(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function nf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=vi(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}const[uo,rf]=(()=>{let e=Date.now,t=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let hr=0;const af=Promise.resolve(),of=()=>{hr=0},sf=()=>hr||(af.then(of),hr=uo());function lf(e,t,n,r){e.addEventListener(t,n,r)}function ff(e,t,n,r){e.removeEventListener(t,n,r)}function cf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=uf(t);if(r){const u=i[t]=df(r,a);lf(e,s,u,l)}else o&&(ff(e,s,o,l),i[t]=void 0)}}const Ha=/(?:Once|Passive|Capture)$/;function uf(e){let t;if(Ha.test(e)){t={};let n;for(;n=e.match(Ha);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Ot(e.slice(2)),t]}function df(e,t){const n=r=>{const a=r.timeStamp||uo();(rf||a>=n.attached-1)&&we(mf(r,n.value),t,5,[r])};return n.value=e,n.attached=sf(),n}function mf(e,t){if(F(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Ua=/^on[a-z]/,pf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?Zl(e,r,a):t==="style"?Ql(e,n,r):An(t)?Ir(t)||cf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):hf(e,t,r,a))?nf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),tf(e,t,r,a))};function hf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Ua.test(t)&&L(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ua.test(t)&&Q(n)?!1:t in e}const gf=ae({patchProp:pf},Gl);let Wa;function vf(){return Wa||(Wa=Nl(gf))}const bf=(...e)=>{const t=vf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=yf(r);if(!a)return;const i=t._component;!L(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function yf(e){return Q(e)?document.querySelector(e):e}const Jr=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},xf={props:{winner:String},data:()=>({buttonStyle:"hover:bg-indigo-500 text-indigo-300 bg-indigo-900 hover:text-indigo-50 py-2 px-4 rounded disabled:bg-slate-800 disabled:text-slate-600 "}),methods:{emitRestart(){this.$emit("handle-restart",{})}}},wf={class:"absolute bg-slate-900/75 flex justify-center items-center inset-0"},_f={class:"bg-slate-900 w-3/4 max-w-lg border border-slate-100 rounded flex flex-col py-4 px-4 text-center drop-shadow"},kf={class:"mb-4 mx-auto"},Af=Be('The player "'),Of=Be('" has won! '),Cf=Z("br",null,null,-1),Ef=Be(" \u{1F389} \u{1F973} \u{1F38A}");function Pf(e,t,n,r,a,i){return Ce(),nt("div",wf,[Z("div",_f,[Z("div",kf,[Af,Z("i",{class:Re(n.winner)},null,2),Of,Cf,Ef]),Z("button",{class:Re(e.buttonStyle),onClick:t[0]||(t[0]=(...o)=>i.emitRestart&&i.emitRestart(...o))},"Restart",2)])])}const Tf=Jr(xf,[["render",Pf]]);/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function Ya(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ya(Object(n),!0).forEach(function(r){Nf(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ya(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function bn(e){return bn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},bn(e)}function Sf(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ka(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function If(e,t,n){return t&&Ka(e.prototype,t),n&&Ka(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Nf(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Gr(e,t){return Ff(e)||Lf(e,t)||mo(e,t)||zf()}function Fn(e){return Mf(e)||Rf(e)||mo(e)||jf()}function Mf(e){if(Array.isArray(e))return gr(e)}function Ff(e){if(Array.isArray(e))return e}function Rf(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Lf(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function mo(e,t){if(!!e){if(typeof e=="string")return gr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return gr(e,t)}}function gr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function jf(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zf(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Va=function(){},Zr={},po={},ho=null,go={mark:Va,measure:Va};try{typeof window<"u"&&(Zr=window),typeof document<"u"&&(po=document),typeof MutationObserver<"u"&&(ho=MutationObserver),typeof performance<"u"&&(go=performance)}catch{}var $f=Zr.navigator||{},Xa=$f.userAgent,qa=Xa===void 0?"":Xa,Ge=Zr,X=po,Ja=ho,rn=go;Ge.document;var He=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",vo=~qa.indexOf("MSIE")||~qa.indexOf("Trident/"),je="___FONT_AWESOME___",vr=16,bo="fa",yo="svg-inline--fa",lt="data-fa-i2svg",br="data-fa-pseudo-element",Df="data-fa-pseudo-element-pending",Qr="data-prefix",ea="data-icon",Ga="fontawesome-i2svg",Bf="async",Hf=["HTML","HEAD","STYLE","SCRIPT"],xo=function(){try{return!0}catch{return!1}}(),ta={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},yn={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},wo={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},Uf={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},Wf=/fa[srltdbk]?[\-\ ]/,_o="fa-layers-text",Yf=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,Kf={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},ko=[1,2,3,4,5,6,7,8,9,10],Vf=ko.concat([11,12,13,14,15,16,17,18,19,20]),Xf=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],at={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},qf=[].concat(Fn(Object.keys(yn)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",at.GROUP,at.SWAP_OPACITY,at.PRIMARY,at.SECONDARY]).concat(ko.map(function(e){return"".concat(e,"x")})).concat(Vf.map(function(e){return"w-".concat(e)})),Ao=Ge.FontAwesomeConfig||{};function Jf(e){var t=X.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Gf(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(X&&typeof X.querySelector=="function"){var Zf=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Zf.forEach(function(e){var t=Gr(e,2),n=t[0],r=t[1],a=Gf(Jf(n));a!=null&&(Ao[r]=a)})}var Qf={familyPrefix:bo,styleDefault:"solid",replacementClass:yo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Bt=A(A({},Qf),Ao);Bt.autoReplaceSvg||(Bt.observeMutations=!1);var S={};Object.keys(Bt).forEach(function(e){Object.defineProperty(S,e,{enumerable:!0,set:function(n){Bt[e]=n,fn.forEach(function(r){return r(S)})},get:function(){return Bt[e]}})});Ge.FontAwesomeConfig=S;var fn=[];function ec(e){return fn.push(e),function(){fn.splice(fn.indexOf(e),1)}}var Ye=vr,Se={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function tc(e){if(!(!e||!He)){var t=X.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=X.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return X.head.insertBefore(t,r),e}}var nc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Xt(){for(var e=12,t="";e-- >0;)t+=nc[Math.random()*62|0];return t}function Pt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function na(e){return e.classList?Pt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Oo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function rc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Oo(e[n]),'" ')},"").trim()}function Rn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ra(e){return e.size!==Se.size||e.x!==Se.x||e.y!==Se.y||e.rotate!==Se.rotate||e.flipX||e.flipY}function ac(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:u}}function ic(e){var t=e.transform,n=e.width,r=n===void 0?vr:n,a=e.height,i=a===void 0?vr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&vo?l+="translate(".concat(t.x/Ye-r/2,"em, ").concat(t.y/Ye-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Ye,"em), calc(-50% + ").concat(t.y/Ye,"em)) "):l+="translate(".concat(t.x/Ye,"em, ").concat(t.y/Ye,"em) "),l+="scale(".concat(t.size/Ye*(t.flipX?-1:1),", ").concat(t.size/Ye*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var oc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Co(){var e=bo,t=yo,n=S.familyPrefix,r=S.replacementClass,a=oc;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Za=!1;function qn(){S.autoAddCss&&!Za&&(tc(Co()),Za=!0)}var sc={mixout:function(){return{dom:{css:Co,insertCss:qn}}},hooks:function(){return{beforeDOMElementCreation:function(){qn()},beforeI2svg:function(){qn()}}}},ze=Ge||{};ze[je]||(ze[je]={});ze[je].styles||(ze[je].styles={});ze[je].hooks||(ze[je].hooks={});ze[je].shims||(ze[je].shims=[]);var ye=ze[je],Eo=[],lc=function e(){X.removeEventListener("DOMContentLoaded",e),xn=1,Eo.map(function(t){return t()})},xn=!1;He&&(xn=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),xn||X.addEventListener("DOMContentLoaded",lc));function fc(e){!He||(xn?setTimeout(e,0):Eo.push(e))}function qt(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Oo(e):"<".concat(t," ").concat(rc(r),">").concat(i.map(qt).join(""),"</").concat(t,">")}function Qa(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var cc=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Jn=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?cc(n,a):n,l,u,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)u=i[l],d=s(d,t[u],u,t);return d};function uc(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function yr(e){var t=uc(e);return t.length===1?t[0].toString(16):null}function dc(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function ei(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function xr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=ei(t);typeof ye.hooks.addPack=="function"&&!a?ye.hooks.addPack(e,ei(t)):ye.styles[e]=A(A({},ye.styles[e]||{}),i),e==="fas"&&xr("fa",t)}var Ht=ye.styles,mc=ye.shims,pc=Object.values(wo),aa=null,Po={},To={},So={},Io={},No={},hc=Object.keys(ta);function gc(e){return~qf.indexOf(e)}function vc(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!gc(a)?a:null}var Mo=function(){var t=function(i){return Jn(Ht,function(o,s,l){return o[l]=Jn(s,i,{}),o},{})};Po=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),To=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),No=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Ht||S.autoFetchSvg,r=Jn(mc,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});So=r.names,Io=r.unicodes,aa=Ln(S.styleDefault)};ec(function(e){aa=Ln(e.styleDefault)});Mo();function ia(e,t){return(Po[e]||{})[t]}function bc(e,t){return(To[e]||{})[t]}function vt(e,t){return(No[e]||{})[t]}function Fo(e){return So[e]||{prefix:null,iconName:null}}function yc(e){var t=Io[e],n=ia("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ze(){return aa}var oa=function(){return{prefix:null,iconName:null,rest:[]}};function Ln(e){var t=ta[e],n=yn[e]||yn[t],r=e in ye.styles?e:null;return n||r||null}function jn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,a=null,i=e.reduce(function(o,s){var l=vc(S.familyPrefix,s);if(Ht[s]?(s=pc.includes(s)?Uf[s]:s,a=s,o.prefix=s):hc.indexOf(s)>-1?(a=s,o.prefix=Ln(s)):l?o.iconName=l:s!==S.replacementClass&&o.rest.push(s),!r&&o.prefix&&o.iconName){var u=a==="fa"?Fo(o.iconName):{},d=vt(o.prefix,o.iconName);u.prefix&&(a=null),o.iconName=u.iconName||d||o.iconName,o.prefix=u.prefix||o.prefix,o.prefix==="far"&&!Ht.far&&Ht.fas&&!S.autoFetchSvg&&(o.prefix="fas")}return o},oa());return(i.prefix==="fa"||a==="fa")&&(i.prefix=Ze()||"fas"),i}var xc=function(){function e(){Sf(this,e),this.definitions={}}return If(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=A(A({},n.definitions[s]||{}),o[s]),xr(s,o[s]);var l=wo[s];l&&xr(l,o[s]),Mo()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,u=o.icon,d=u[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=u)}),n[s][l]=u}),n}}]),e}(),ti=[],bt={},_t={},wc=Object.keys(_t);function _c(e,t){var n=t.mixoutsTo;return ti=e,bt={},Object.keys(_t).forEach(function(r){wc.indexOf(r)===-1&&delete _t[r]}),ti.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),bn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){bt[o]||(bt[o]=[]),bt[o].push(i[o])})}r.provides&&r.provides(_t)}),n}function wr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=bt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function ft(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=bt[e]||[];a.forEach(function(i){i.apply(null,n)})}function $e(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return _t[e]?_t[e].apply(null,t):void 0}function _r(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Ze();if(!!t)return t=vt(n,t)||t,Qa(Ro.definitions,n,t)||Qa(ye.styles,n,t)}var Ro=new xc,kc=function(){S.autoReplaceSvg=!1,S.observeMutations=!1,ft("noAuto")},Ac={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return He?(ft("beforeI2svg",t),$e("pseudoElements2svg",t),$e("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;S.autoReplaceSvg===!1&&(S.autoReplaceSvg=!0),S.observeMutations=!0,fc(function(){Cc({autoReplaceSvgRoot:n}),ft("watch",t)})}},Oc={icon:function(t){if(t===null)return null;if(bn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:vt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Ln(t[0]);return{prefix:r,iconName:vt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(S.familyPrefix,"-"))>-1||t.match(Wf))){var a=jn(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Ze(),iconName:vt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Ze();return{prefix:i,iconName:vt(i,t)||t}}}},me={noAuto:kc,config:S,dom:Ac,parse:Oc,library:Ro,findIconDefinition:_r,toHtml:qt},Cc=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?X:n;(Object.keys(ye.styles).length>0||S.autoFetchSvg)&&He&&S.autoReplaceSvg&&me.dom.i2svg({node:r})};function zn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return qt(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!He){var r=X.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Ec(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(ra(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};a.style=Rn(A(A({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Pc(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(S.familyPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:A(A({},a),{},{id:o}),children:r}]}]}function sa(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,d=e.titleId,m=e.extra,b=e.watchable,O=b===void 0?!1:b,R=r.found?r:n,j=R.width,I=R.height,y=a==="fak",C=[S.replacementClass,i?"".concat(S.familyPrefix,"-").concat(i):""].filter(function(ie){return m.classes.indexOf(ie)===-1}).filter(function(ie){return ie!==""||!!ie}).concat(m.classes).join(" "),N={children:[],attributes:A(A({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:C,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(j," ").concat(I)})},z=y&&!~m.classes.indexOf("fa-fw")?{width:"".concat(j/I*16*.0625,"em")}:{};O&&(N.attributes[lt]=""),l&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(d||Xt())},children:[l]}),delete N.attributes.title);var W=A(A({},N),{},{prefix:a,iconName:i,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:A(A({},z),m.styles)}),te=r.found&&n.found?$e("generateAbstractMask",W)||{children:[],attributes:{}}:$e("generateAbstractIcon",W)||{children:[],attributes:{}},fe=te.children,_e=te.attributes;return W.children=fe,W.attributes=_e,s?Pc(W):Ec(W)}function ni(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=A(A(A({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(u[lt]="");var d=A({},o.styles);ra(a)&&(d.transform=ic({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=Rn(d);m.length>0&&(u.style=m);var b=[];return b.push({tag:"span",attributes:u,children:[t]}),i&&b.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),b}function Tc(e){var t=e.content,n=e.title,r=e.extra,a=A(A(A({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Rn(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Gn=ye.styles;function kr(e){var t=e[0],n=e[1],r=e.slice(4),a=Gr(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(S.familyPrefix,"-").concat(at.GROUP)},children:[{tag:"path",attributes:{class:"".concat(S.familyPrefix,"-").concat(at.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(S.familyPrefix,"-").concat(at.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Sc={found:!1,width:512,height:512};function Ic(e,t){!xo&&!S.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Ar(e,t){var n=t;return t==="fa"&&S.styleDefault!==null&&(t=Ze()),new Promise(function(r,a){if($e("missingIconAbstract"),n==="fa"){var i=Fo(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Gn[t]&&Gn[t][e]){var o=Gn[t][e];return r(kr(o))}Ic(e,t),r(A(A({},Sc),{},{icon:S.showMissingIcons&&e?$e("missingIconAbstract")||{}:{}}))})}var ri=function(){},Or=S.measurePerformance&&rn&&rn.mark&&rn.measure?rn:{mark:ri,measure:ri},Lt='FA "6.1.2"',Nc=function(t){return Or.mark("".concat(Lt," ").concat(t," begins")),function(){return Lo(t)}},Lo=function(t){Or.mark("".concat(Lt," ").concat(t," ends")),Or.measure("".concat(Lt," ").concat(t),"".concat(Lt," ").concat(t," begins"),"".concat(Lt," ").concat(t," ends"))},la={begin:Nc,end:Lo},cn=function(){};function ai(e){var t=e.getAttribute?e.getAttribute(lt):null;return typeof t=="string"}function Mc(e){var t=e.getAttribute?e.getAttribute(Qr):null,n=e.getAttribute?e.getAttribute(ea):null;return t&&n}function Fc(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(S.replacementClass)}function Rc(){if(S.autoReplaceSvg===!0)return un.replace;var e=un[S.autoReplaceSvg];return e||un.replace}function Lc(e){return X.createElementNS("http://www.w3.org/2000/svg",e)}function jc(e){return X.createElement(e)}function jo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Lc:jc:n;if(typeof e=="string")return X.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(jo(o,{ceFn:r}))}),a}function zc(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var un={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(jo(a),n)}),n.getAttribute(lt)===null&&S.keepOriginalSource){var r=X.createComment(zc(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~na(n).indexOf(S.replacementClass))return un.replace(t);var a=new RegExp("".concat(S.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===S.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return qt(s)}).join(`
`);n.setAttribute(lt,""),n.innerHTML=o}};function ii(e){e()}function zo(e,t){var n=typeof t=="function"?t:cn;if(e.length===0)n();else{var r=ii;S.mutateApproach===Bf&&(r=Ge.requestAnimationFrame||ii),r(function(){var a=Rc(),i=la.begin("mutate");e.map(a),i(),n()})}}var fa=!1;function $o(){fa=!0}function Cr(){fa=!1}var wn=null;function oi(e){if(!!Ja&&!!S.observeMutations){var t=e.treeCallback,n=t===void 0?cn:t,r=e.nodeCallback,a=r===void 0?cn:r,i=e.pseudoElementsCallback,o=i===void 0?cn:i,s=e.observeMutationsRoot,l=s===void 0?X:s;wn=new Ja(function(u){if(!fa){var d=Ze();Pt(u).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!ai(m.addedNodes[0])&&(S.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&S.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&ai(m.target)&&~Xf.indexOf(m.attributeName))if(m.attributeName==="class"&&Mc(m.target)){var b=jn(na(m.target)),O=b.prefix,R=b.iconName;m.target.setAttribute(Qr,O||d),R&&m.target.setAttribute(ea,R)}else Fc(m.target)&&a(m.target)})}}),He&&wn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function $c(){!wn||wn.disconnect()}function Dc(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Bc(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=jn(na(e));return a.prefix||(a.prefix=Ze()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=bc(a.prefix,e.innerText)||ia(a.prefix,yr(e.innerText))),!a.iconName&&S.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Hc(e){var t=Pt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return S.autoA11y&&(n?t["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat(r||Xt()):(t["aria-hidden"]="true",t.focusable="false")),t}function Uc(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Se,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function si(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Bc(e),r=n.iconName,a=n.prefix,i=n.rest,o=Hc(e),s=wr("parseNodeAttributes",{},e),l=t.styleParser?Dc(e):[];return A({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Se,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Wc=ye.styles;function Do(e){var t=S.autoReplaceSvg==="nest"?si(e,{styleParser:!1}):si(e);return~t.extra.classes.indexOf(_o)?$e("generateLayersText",e,t):$e("generateSvgReplacementMutation",e,t)}function li(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!He)return Promise.resolve();var n=X.documentElement.classList,r=function(m){return n.add("".concat(Ga,"-").concat(m))},a=function(m){return n.remove("".concat(Ga,"-").concat(m))},i=S.autoFetchSvg?Object.keys(ta):Object.keys(Wc);i.includes("fa")||i.push("fa");var o=[".".concat(_o,":not([").concat(lt,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(lt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Pt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=la.begin("onTree"),u=s.reduce(function(d,m){try{var b=Do(m);b&&d.push(b)}catch(O){xo||O.name==="MissingIcon"&&console.error(O)}return d},[]);return new Promise(function(d,m){Promise.all(u).then(function(b){zo(b,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(b){l(),m(b)})})}function Yc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Do(e).then(function(n){n&&zo([n],t)})}function Kc(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:_r(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:_r(a||{})),e(r,A(A({},n),{},{mask:a}))}}var Vc=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Se:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,u=n.maskId,d=u===void 0?null:u,m=n.title,b=m===void 0?null:m,O=n.titleId,R=O===void 0?null:O,j=n.classes,I=j===void 0?[]:j,y=n.attributes,C=y===void 0?{}:y,N=n.styles,z=N===void 0?{}:N;if(!!t){var W=t.prefix,te=t.iconName,fe=t.icon;return zn(A({type:"icon"},t),function(){return ft("beforeDOMElementCreation",{iconDefinition:t,params:n}),S.autoA11y&&(b?C["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat(R||Xt()):(C["aria-hidden"]="true",C.focusable="false")),sa({icons:{main:kr(fe),mask:l?kr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:W,iconName:te,transform:A(A({},Se),a),symbol:o,title:b,maskId:d,titleId:R,extra:{attributes:C,styles:z,classes:I}})})}},Xc={mixout:function(){return{icon:Kc(Vc)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=li,n.nodeCallback=Yc,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?X:r,i=n.callback,o=i===void 0?function(){}:i;return li(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,d=r.mask,m=r.maskId,b=r.extra;return new Promise(function(O,R){Promise.all([Ar(a,s),d.iconName?Ar(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(j){var I=Gr(j,2),y=I[0],C=I[1];O([n,sa({icons:{main:y,mask:C},prefix:s,iconName:a,transform:l,symbol:u,maskId:m,title:i,titleId:o,extra:b,watchable:!0})])}).catch(R)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Rn(s);l.length>0&&(a.style=l);var u;return ra(o)&&(u=$e("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:a}}}},qc={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return zn({type:"layer"},function(){ft("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(S.familyPrefix,"-layers")].concat(Fn(i)).join(" ")},children:o}]})}}}},Jc={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return zn({type:"counter",content:n},function(){return ft("beforeDOMElementCreation",{content:n,params:r}),Tc({content:n.toString(),title:i,extra:{attributes:u,styles:m,classes:["".concat(S.familyPrefix,"-layers-counter")].concat(Fn(s))}})})}}}},Gc={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Se:a,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,b=r.styles,O=b===void 0?{}:b;return zn({type:"text",content:n},function(){return ft("beforeDOMElementCreation",{content:n,params:r}),ni({content:n,transform:A(A({},Se),i),title:s,extra:{attributes:m,styles:O,classes:["".concat(S.familyPrefix,"-layers-text")].concat(Fn(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(vo){var u=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/u,l=d.height/u}return S.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,ni({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Zc=new RegExp('"',"ug"),fi=[1105920,1112319];function Qc(e){var t=e.replace(Zc,""),n=dc(t,0),r=n>=fi[0]&&n<=fi[1],a=t.length===2?t[0]===t[1]:!1;return{value:yr(a?t[0]:t),isSecondary:r||a}}function ci(e,t){var n="".concat(Df).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Pt(e.children),o=i.filter(function(te){return te.getAttribute(br)===t})[0],s=Ge.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Yf),u=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?yn[l[2].toLowerCase()]:Kf[u],O=Qc(m),R=O.value,j=O.isSecondary,I=l[0].startsWith("FontAwesome"),y=ia(b,R),C=y;if(I){var N=yc(R);N.iconName&&N.prefix&&(y=N.iconName,b=N.prefix)}if(y&&!j&&(!o||o.getAttribute(Qr)!==b||o.getAttribute(ea)!==C)){e.setAttribute(n,C),o&&e.removeChild(o);var z=Uc(),W=z.extra;W.attributes[br]=t,Ar(y,b).then(function(te){var fe=sa(A(A({},z),{},{icons:{main:te,mask:oa()},prefix:b,iconName:C,extra:W,watchable:!0})),_e=X.createElement("svg");t==="::before"?e.insertBefore(_e,e.firstChild):e.appendChild(_e),_e.outerHTML=fe.map(function(ie){return qt(ie)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function eu(e){return Promise.all([ci(e,"::before"),ci(e,"::after")])}function tu(e){return e.parentNode!==document.head&&!~Hf.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(br)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function ui(e){if(!!He)return new Promise(function(t,n){var r=Pt(e.querySelectorAll("*")).filter(tu).map(eu),a=la.begin("searchPseudoElements");$o(),Promise.all(r).then(function(){a(),Cr(),t()}).catch(function(){a(),Cr(),n()})})}var nu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=ui,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?X:r;S.searchPseudoElements&&ui(a)}}},di=!1,ru={mixout:function(){return{dom:{unwatch:function(){$o(),di=!0}}}},hooks:function(){return{bootstrap:function(){oi(wr("mutationObserverCallbacks",{}))},noAuto:function(){$c()},watch:function(n){var r=n.observeMutationsRoot;di?Cr():oi(wr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},mi=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},au={mixout:function(){return{parse:{transform:function(n){return mi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=mi(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(u," ").concat(d)},b={transform:"translate(".concat(o/2*-1," -256)")},O={outer:s,inner:m,path:b};return{tag:"g",attributes:A({},O.outer),children:[{tag:"g",attributes:A({},O.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:A(A({},r.icon.attributes),O.path)}]}]}}}},Zn={x:0,y:0,width:"100%",height:"100%"};function pi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function iu(e){return e.tag==="g"?e.children:[e]}var ou={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?jn(a.split(" ").map(function(o){return o.trim()})):oa();return i.prefix||(i.prefix=Ze()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,u=i.width,d=i.icon,m=o.width,b=o.icon,O=ac({transform:l,containerWidth:m,iconWidth:u}),R={tag:"rect",attributes:A(A({},Zn),{},{fill:"white"})},j=d.children?{children:d.children.map(pi)}:{},I={tag:"g",attributes:A({},O.inner),children:[pi(A({tag:d.tag,attributes:A(A({},d.attributes),O.path)},j))]},y={tag:"g",attributes:A({},O.outer),children:[I]},C="mask-".concat(s||Xt()),N="clip-".concat(s||Xt()),z={tag:"mask",attributes:A(A({},Zn),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[R,y]},W={tag:"defs",children:[{tag:"clipPath",attributes:{id:N},children:iu(b)},z]};return r.push(W,{tag:"rect",attributes:A({fill:"currentColor","clip-path":"url(#".concat(N,")"),mask:"url(#".concat(C,")")},Zn)}),{children:r,attributes:a}}}},su={provides:function(t){var n=!1;Ge.matchMedia&&(n=Ge.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:A(A({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=A(A({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:A(A({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:A(A({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:A(A({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:A(A({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:A(A({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:A(A({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:A(A({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},lu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},fu=[sc,Xc,qc,Jc,Gc,nu,ru,au,ou,su,lu];_c(fu,{mixoutsTo:me});me.noAuto;var Bo=me.config,Ho=me.library;me.dom;var _n=me.parse;me.findIconDefinition;me.toHtml;var cu=me.icon;me.layer;var uu=me.text;me.counter;function hi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ve(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?hi(Object(n),!0).forEach(function(r){se(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):hi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function kn(e){return kn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},kn(e)}function se(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function du(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function mu(e,t){if(e==null)return{};var n=du(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function Er(e){return pu(e)||hu(e)||gu(e)||vu()}function pu(e){if(Array.isArray(e))return Pr(e)}function hu(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function gu(e,t){if(!!e){if(typeof e=="string")return Pr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Pr(e,t)}}function Pr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function vu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var bu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Uo={exports:{}};(function(e){(function(t){var n=function(y,C,N){if(!u(C)||m(C)||b(C)||O(C)||l(C))return C;var z,W=0,te=0;if(d(C))for(z=[],te=C.length;W<te;W++)z.push(n(y,C[W],N));else{z={};for(var fe in C)Object.prototype.hasOwnProperty.call(C,fe)&&(z[y(fe,N)]=n(y,C[fe],N))}return z},r=function(y,C){C=C||{};var N=C.separator||"_",z=C.split||/(?=[A-Z])/;return y.split(z).join(N)},a=function(y){return R(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(C,N){return N?N.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},i=function(y){var C=a(y);return C.substr(0,1).toUpperCase()+C.substr(1)},o=function(y,C){return r(y,C).toLowerCase()},s=Object.prototype.toString,l=function(y){return typeof y=="function"},u=function(y){return y===Object(y)},d=function(y){return s.call(y)=="[object Array]"},m=function(y){return s.call(y)=="[object Date]"},b=function(y){return s.call(y)=="[object RegExp]"},O=function(y){return s.call(y)=="[object Boolean]"},R=function(y){return y=y-0,y===y},j=function(y,C){var N=C&&"process"in C?C.process:C;return typeof N!="function"?y:function(z,W){return N(z,y,W)}},I={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(y,C){return n(j(a,C),y)},decamelizeKeys:function(y,C){return n(j(o,C),y,C)},pascalizeKeys:function(y,C){return n(j(i,C),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=I:t.humps=I})(bu)})(Uo);var yu=Uo.exports,xu=["class","style"];function wu(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=yu.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function _u(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ca(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ca(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,u){var d=e.attributes[u];switch(u){case"class":l.class=_u(d);break;case"style":l.style=wu(d);break;default:l.attrs[u]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=mu(n,xu);return co(e.tag,ve(ve(ve({},t),{},{class:a.class,style:ve(ve({},a.style),o)},a.attrs),s),r)}var Wo=!1;try{Wo=!0}catch{}function ku(){if(!Wo&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Ut(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?se({},e,t):{}}function Au(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},se(t,"fa-".concat(e.size),e.size!==null),se(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),se(t,"fa-pull-".concat(e.pull),e.pull!==null),se(t,"fa-swap-opacity",e.swapOpacity),se(t,"fa-bounce",e.bounce),se(t,"fa-shake",e.shake),se(t,"fa-beat",e.beat),se(t,"fa-fade",e.fade),se(t,"fa-beat-fade",e.beatFade),se(t,"fa-flash",e.flash),se(t,"fa-spin-pulse",e.spinPulse),se(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function gi(e){if(e&&kn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(_n.icon)return _n.icon(e);if(e===null)return null;if(kn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Yo=Yr({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=pe(function(){return gi(t.icon)}),i=pe(function(){return Ut("classes",Au(t))}),o=pe(function(){return Ut("transform",typeof t.transform=="string"?_n.transform(t.transform):t.transform)}),s=pe(function(){return Ut("mask",gi(t.mask))}),l=pe(function(){return cu(a.value,ve(ve(ve(ve({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});on(l,function(d){if(!d)return ku("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var u=pe(function(){return l.value?ca(l.value.abstract[0],{},r):null});return function(){return u.value}}});Yr({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=Bo.familyPrefix,i=pe(function(){return["".concat(a,"-layers")].concat(Er(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return co("div",{class:i.value},r.default?r.default():[])}}});Yr({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=Bo.familyPrefix,i=pe(function(){return Ut("classes",[].concat(Er(t.counter?["".concat(a,"-layers-counter")]:[]),Er(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=pe(function(){return Ut("transform",typeof t.transform=="string"?_n.transform(t.transform):t.transform)}),s=pe(function(){var u=uu(t.value.toString(),ve(ve({},o.value),i.value)),d=u.abstract;return t.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=pe(function(){return ca(s.value,{},r)});return function(){return l.value}}});/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var Ou={prefix:"fas",iconName:"backward-step",icon:[320,512,["step-backward"],"f048","M31.1 64.03c-17.67 0-31.1 14.33-31.1 32v319.9c0 17.67 14.33 32 32 32C49.67 447.1 64 433.6 64 415.1V96.03C64 78.36 49.67 64.03 31.1 64.03zM267.5 71.41l-192 159.1C67.82 237.8 64 246.9 64 256c0 9.094 3.82 18.18 11.44 24.62l192 159.1c20.63 17.12 52.51 2.75 52.51-24.62v-319.9C319.1 68.66 288.1 54.28 267.5 71.41z"]},Cu=Ou,Eu={prefix:"fas",iconName:"circle",icon:[512,512,[128308,128309,128992,128993,128994,128995,128996,9898,9899,11044,61708,61915,9679],"f111","M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256z"]},Pu={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,10084,61578,9829],"f004","M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"]},Tu={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z"]},Su={prefix:"fas",iconName:"rotate-left",icon:[512,512,["rotate-back","rotate-backward","undo-alt"],"f2ea","M480 256c0 123.4-100.5 223.9-223.9 223.9c-48.84 0-95.17-15.58-134.2-44.86c-14.12-10.59-16.97-30.66-6.375-44.81c10.59-14.12 30.62-16.94 44.81-6.375c27.84 20.91 61 31.94 95.88 31.94C344.3 415.8 416 344.1 416 256s-71.69-159.8-159.8-159.8c-37.46 0-73.09 13.49-101.3 36.64l45.12 45.14c17.01 17.02 4.955 46.1-19.1 46.1H35.17C24.58 224.1 16 215.5 16 204.9V59.04c0-24.04 29.07-36.08 46.07-19.07l47.6 47.63C149.9 52.71 201.5 32.11 256.1 32.11C379.5 32.11 480 132.6 480 256z"]},Iu={prefix:"fas",iconName:"xmark",icon:[320,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"]};Ho.add(Cu,Tu,Su);const Nu={data:()=>({classStyles:"hover:bg-indigo-500 text-indigo-400 bg-indigo-900 hover:text-indigo-50 py-2 px-4 rounded disabled:bg-slate-800 disabled:text-slate-600 sm:text-xl"}),components:{FontAwesomeIcon:Yo},props:{isPlayAlone:Boolean,winner:String},methods:{emitOneMove(){this.$emit("handle-move")},emitBackMove(){this.$emit("handle-back")},emitRestart(){this.$emit("handle-restart")},emitPlayAlone(){this.$emit("handle-play-alone")}}},Mu={class:"grid grid-cols-3 gap-2 mb-4"},Fu=["disabled"],Ru=["disabled"];function Lu(e,t,n,r,a,i){const o=$t("FontAwesomeIcon"),s=$t("font-awesome-icon");return Ce(),nt("div",Mu,[Z("button",{class:Re(e.classStyles),onClick:t[0]||(t[0]=(...l)=>i.emitBackMove&&i.emitBackMove(...l)),disabled:!!n.winner},[J(o,{icon:"fas fa-step-backward"})],10,Fu),Z("button",{class:Re(e.classStyles),onClick:t[1]||(t[1]=(...l)=>i.emitOneMove&&i.emitOneMove(...l)),title:"play one move",disabled:!!n.winner},[J(o,{icon:"fas fa-play"})],10,Ru),Z("button",{class:Re(e.classStyles),onClick:t[2]||(t[2]=(...l)=>i.emitRestart&&i.emitRestart(...l))},[J(s,{icon:"fa-solid fa-rotate-left"})],2),Z("button",{class:Re(e.classStyles),onClick:t[3]||(t[3]=(...l)=>i.emitPlayAlone&&i.emitPlayAlone(...l)),style:{"grid-column":"1 / span 3"}},Qn(n.isPlayAlone?"Set Two Player":"Set Play Alone"),3)])}const ju=Jr(Nu,[["render",Lu]]);/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var zu={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};Ho.add(Iu,Eu,Pu,zu);const $u={name:"App",components:{MenuBoard:ju,ModalWinner:Tf,FontAwesomeIcon:Yo},data:()=>({isPlayAlone:!1,turn:{X:"fa-xmark",O:"fa-circle"},history:[],values:{},defaultValues:{1:"",2:"",3:"",4:"",5:"",6:"",7:"",8:"",9:""},slotStyles:{1:"border-b-4 border-r-4",2:"border-r-4 border-l-4 border-b-4",3:"border-b-4 border-l-4",4:"border-r-4 border-t-4 border-b-4",5:"border-4",6:"border-l-4 border-t-4 border-b-4",7:"border-t-4 border-r-4",8:"border-l-4 border-t-4 border-r-4",9:"border-t-4 border-l-4"},currentPlayer:"X",machinePlayer:"O",winner:null}),mounted(){this.values={...this.defaultValues}},methods:{restartValues(){this.setValues({...this.defaultValues}),this.currentPlayer="X",this.machinePlayer="O"},setOnePlayer(){this.isPlayAlone=!this.isPlayAlone,this.restartValues()},toggleCurrent(){this.currentPlayer=this.currentPlayer==="X"?"O":"X"},makeOneMove(){const e=this.getEmptySlots(),t=Math.floor(Math.random()*e.length),n=e[t];setTimeout(()=>{this.play(n)},300)},backOneMove(){this.history.pop();const e=this.history.length-1;this.setValues([...this.history[e]])},getEmptySlots(){const e=[];for(const[t,n]of Object.entries(this.values))n||e.push(t);return e},setValues({...e}){const t=Object.keys(e).length===0&&e.constructor===Object;if(this.history.length==0||t&&this.winner)for(let n=1;n<=9;n++)this.values[n]="",this.history=[],this.currentPlayer="X",this.winner=this.calculateWinner(this.values);this.values=e,this.winner=this.calculateWinner(this.values)},playAlone(e){this.currentPlayer!==this.machinePlayer&&(this.play(e),this.makeOneMove())},play(e){if(!(this.values[e]||!!this.winner))return this.values[e]=this.currentPlayer,this.winner=this.calculateWinner(this.values),this.history.push({...this.values}),this.toggleCurrent(),!0},calculateWinner(e){const t=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];for(let n=0;n<t.length;n++){const[r,a,i]=t[n];if(e[r]&&e[r]===e[a]&&e[r]===e[i])return e[r]}return null}}},Du={id:"app-main",class:"app px-4 pt-4 text-indigo-50 min-h-screen bg-slate-900 grid gap-4 items-center mx-auto sm:max-w-xl lg:max-w-5xl"},Bu=Z("h1",{class:"text-center text-2xl border-2 border-indigo-300 rounded mb-4 text-indigo-200"}," TIC TAC TOE ",-1),Hu={class:"info text-slate-600 bg-slate-800 mb-4 px-4 py-1 rounded text-center"},Uu=Z("i",{class:"fas fa-user"},null,-1),Wu={key:0,class:"fas fa-user"},Yu={class:"board grid grid-rows-3 grid-cols-3 gap-2 mb-4 lg:w-3/4",style:{"aspect-ratio":"1 / 1"}},Ku=["onClick"],Vu={key:0},Xu={class:"text-xs text-slate-700 text-center flex flex-col"},qu=Be("developed by "),Ju={href:"https://github.com/AlbertDeHoz/front-vue-exercise",class:"text-slate-600"},Gu=Be("AlbertDeHoz{"),Zu=Be("}"),Qu=Be(" with ");function ed(e,t,n,r,a,i){const o=$t("font-awesome-icon"),s=$t("menu-board"),l=$t("modal-winner");return Ce(),nt("div",Du,[Bu,Z("p",Hu,[Be(Qn(e.isPlayAlone?"play alone":"two players")+" ",1),Uu,e.isPlayAlone?Ra("",!0):(Ce(),nt("i",Wu))]),Z("div",Yu,[(Ce(!0),nt(Ee,null,bl(e.values,(u,d)=>(Ce(),nt("div",{key:d,onClick:m=>e.isPlayAlone?i.playAlone(d.toString()):i.play(d.toString()),class:"bg-pink-800 hover:bg-pink-700 rounded flex justify-center items-center"},[u?(Ce(),dr(o,{key:1,icon:`fa-solid ${e.turn[u]}`,class:"text-4xl"},null,8,["icon"])):(Ce(),nt("span",Vu,Qn(u),1))],8,Ku))),128))]),J(s,{onHandleMove:i.makeOneMove,onHandleBack:i.backOneMove,onHandleRestart:i.restartValues,onHandlePlayAlone:i.setOnePlayer,isPlayAlone:e.isPlayAlone,winner:e.turn[e.winner],class:"menu"},null,8,["onHandleMove","onHandleBack","onHandleRestart","onHandlePlayAlone","isPlayAlone","winner"]),e.winner?(Ce(),dr(l,{key:0,winner:e.turn[e.winner],onHandleRestart:i.restartValues},null,8,["winner","onHandleRestart"])):Ra("",!0),Z("footer",Xu,[Z("span",null,[qu,Z("a",Ju,[Gu,J(o,{icon:"fa-brands fa-github"}),Zu]),Qu,J(o,{icon:"fa-solid fa-heart"})])])])}const td=Jr($u,[["render",ed]]);bf(td).mount("#app");
