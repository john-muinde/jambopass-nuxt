import{ah as z,ai as B,aj as x,ak as R,al as N,am as $,an as C,ao as E,ap as H,f as v,h as L,aq as U,r as I,C as D,o as F,c as G,ar as T,m as W}from"./Cg6WK9Tj.js";async function J(e,t){return await V(t).catch(r=>(console.error("Failed to get image meta for "+t,r+""),{width:0,height:0,ratio:0}))}async function V(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,i)=>{const r=new Image;r.onload=()=>{const s={width:r.width,height:r.height,ratio:r.width/r.height};t(s)},r.onerror=s=>i(s),r.src=e})}function j(e){return t=>t?e[t]||t:e.missingValue}function Q({formatter:e,keyMap:t,joinWith:i="/",valueMap:r}={}){e||(e=(n,o)=>`${n}=${o}`),t&&typeof t!="function"&&(t=j(t));const s=r||{};return Object.keys(s).forEach(n=>{typeof s[n]!="function"&&(s[n]=j(s[n]))}),(n={})=>Object.entries(n).filter(([a,d])=>typeof d<"u").map(([a,d])=>{const l=s[a];return typeof l=="function"&&(d=l(n[a])),a=typeof t=="function"?t(a):a,e(a,d)}).join(i)}function y(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return Number.parseInt(e,10)}function X(e=""){if(e===void 0||!e.length)return[];const t=new Set;for(const i of e.split(" ")){const r=Number.parseInt(i.replace("x",""));r&&t.add(r)}return Array.from(t)}function Y(e){if(e.length===0)throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")}function Z(e){const t={};if(typeof e=="string")for(const i of e.split(/[\s,]+/).filter(r=>r)){const r=i.split(":");r.length!==2?t["1px"]=r[0].trim():t[r[0].trim()]=r[1].trim()}else Object.assign(t,e);return t}function K(e){const t={options:e},i=(s,n={})=>P(t,s,n),r=(s,n={},o={})=>i(s,{...o,modifiers:N(n,o.modifiers||{})}).url;for(const s in e.presets)r[s]=(n,o,a)=>r(n,o,{...e.presets[s],...a});return r.options=e,r.getImage=i,r.getMeta=(s,n)=>ee(t,s,n),r.getSizes=(s,n)=>ie(t,s,n),t.$img=r,r}async function ee(e,t,i){const r=P(e,t,{...i});return typeof r.getMeta=="function"?await r.getMeta():await J(e,r.url)}function P(e,t,i){var l,f;if(t&&typeof t!="string")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(!t||t.startsWith("data:"))return{url:t};const{provider:r,defaults:s}=te(e,i.provider||e.options.provider),n=re(e,i.preset);if(t=z(t)?t:B(t),!r.supportsAlias){for(const g in e.options.alias)if(t.startsWith(g)){const h=e.options.alias[g];h&&(t=x(h,t.slice(g.length)))}}if(r.validateDomains&&z(t)){const g=R(t).host;if(!e.options.domains.find(h=>h===g))return{url:t}}const o=N(i,n,s);o.modifiers={...o.modifiers};const a=o.modifiers.format;(l=o.modifiers)!=null&&l.width&&(o.modifiers.width=y(o.modifiers.width)),(f=o.modifiers)!=null&&f.height&&(o.modifiers.height=y(o.modifiers.height));const d=r.getImage(t,o,e);return d.format=d.format||a||"",d}function te(e,t){const i=e.options.providers[t];if(!i)throw new Error("Unknown provider: "+t);return i}function re(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function ie(e,t,i){var _,q,b,c,m;const r=y((_=i.modifiers)==null?void 0:_.width),s=y((q=i.modifiers)==null?void 0:q.height),n=Z(i.sizes),o=(b=i.densities)!=null&&b.trim()?X(i.densities.trim()):e.options.densities;Y(o);const a=r&&s?s/r:0,d=[],l=[];if(Object.keys(n).length>=1){for(const u in n){const p=M(u,String(n[u]),s,a,e);if(p!==void 0){d.push({size:p.size,screenMaxWidth:p.screenMaxWidth,media:`(max-width: ${p.screenMaxWidth}px)`});for(const w of o)l.push({width:p._cWidth*w,src:A(e,t,i,p,w)})}}se(d)}else for(const u of o){const p=Object.keys(n)[0];let w=p?M(p,String(n[p]),s,a,e):void 0;w===void 0&&(w={size:"",screenMaxWidth:0,_cWidth:(c=i.modifiers)==null?void 0:c.width,_cHeight:(m=i.modifiers)==null?void 0:m.height}),l.push({width:u,src:A(e,t,i,w,u)})}ne(l);const f=l[l.length-1],g=d.length?d.map(u=>`${u.media?u.media+" ":""}${u.size}`).join(", "):void 0,h=g?"w":"x",S=l.map(u=>`${u.src} ${u.width}${h}`).join(", ");return{sizes:g,srcset:S,src:f==null?void 0:f.src}}function M(e,t,i,r,s){const n=s.options.screens&&s.options.screens[e]||Number.parseInt(e),o=t.endsWith("vw");if(!o&&/^\d+$/.test(t)&&(t=t+"px"),!o&&!t.endsWith("px"))return;let a=Number.parseInt(t);if(!n||!a)return;o&&(a=Math.round(a/100*n));const d=r?Math.round(a*r):i;return{size:t,screenMaxWidth:n,_cWidth:a,_cHeight:d}}function A(e,t,i,r,s){return e.$img(t,{...i.modifiers,width:r._cWidth?r._cWidth*s:void 0,height:r._cHeight?r._cHeight*s:void 0},i)}function se(e){var i;e.sort((r,s)=>r.screenMaxWidth-s.screenMaxWidth);let t=null;for(let r=e.length-1;r>=0;r--){const s=e[r];s.media===t&&e.splice(r,1),t=s.media}for(let r=0;r<e.length;r++)e[r].media=((i=e[r+1])==null?void 0:i.media)||""}function ne(e){e.sort((i,r)=>i.width-r.width);let t=null;for(let i=e.length-1;i>=0;i--){const r=e[i];r.width===t&&e.splice(i,1),t=r.width}}const oe=Q({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(e,t)=>$(e)+"_"+$(t)}),ae=(e,{modifiers:t={},baseURL:i}={},r)=>{t.width&&t.height&&(t.resize=`${t.width}x${t.height}`,delete t.width,delete t.height);const s=oe(t)||"_";return i||(i=x(r.options.nuxt.baseURL,"/_ipx")),{url:x(i,s,C(e))}},ce=!0,de=!0,le=Object.freeze(Object.defineProperty({__proto__:null,getImage:ae,supportsAlias:de,validateDomains:ce},Symbol.toStringTag,{value:"Module"})),O={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"ipx",domains:[],alias:{},densities:[1,2],format:["webp"]};O.providers={ipx:{provider:le,defaults:{}}};const k=()=>{const e=H(),t=E();return t.$img||t._img||(t._img=K({...O,nuxt:{baseURL:e.app.baseURL},runtimeConfig:e}))};function fe(e){var t;(t=performance==null?void 0:performance.mark)==null||t.call(performance,"mark_feature_usage",{detail:{feature:e}})}const ue={src:{type:String,required:!1},format:{type:String,required:!1},quality:{type:[Number,String],required:!1},background:{type:String,required:!1},fit:{type:String,required:!1},modifiers:{type:Object,required:!1},preset:{type:String,required:!1},provider:{type:String,required:!1},sizes:{type:[Object,String],required:!1},densities:{type:String,required:!1},preload:{type:[Boolean,Object],required:!1},width:{type:[String,Number],required:!1},height:{type:[String,Number],required:!1},alt:{type:String,required:!1},referrerpolicy:{type:String,required:!1},usemap:{type:String,required:!1},longdesc:{type:String,required:!1},ismap:{type:Boolean,required:!1},loading:{type:String,required:!1,validator:e=>["lazy","eager"].includes(e)},crossorigin:{type:[Boolean,String],required:!1,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,required:!1,validator:e=>["async","auto","sync"].includes(e)},nonce:{type:[String],required:!1}},ge=e=>{const t=v(()=>({provider:e.provider,preset:e.preset})),i=v(()=>({width:y(e.width),height:y(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding,nonce:e.nonce})),r=k(),s=v(()=>({...e.modifiers,width:y(e.width),height:y(e.height),format:e.format,quality:e.quality||r.options.quality,background:e.background,fit:e.fit}));return{options:t,attrs:i,modifiers:s}},he={...ue,placeholder:{type:[Boolean,String,Number,Array],required:!1},placeholderClass:{type:String,required:!1}},me=["src"],ye=L({__name:"NuxtImg",props:he,emits:["load","error"],setup(e,{emit:t}){const i=e,r=U(),s=t,n=!1,o=k(),a=ge(i),d=I(!1),l=I(),f=v(()=>o.getSizes(i.src,{...a.options.value,sizes:i.sizes,densities:i.densities,modifiers:{...a.modifiers.value,width:y(i.width),height:y(i.height)}})),g=v(()=>{const c={...a.attrs.value,"data-nuxt-img":""};return(!i.placeholder||d.value)&&(c.sizes=f.value.sizes,c.srcset=f.value.srcset),c}),h=v(()=>{let c=i.placeholder;if(c===""&&(c=!0),!c||d.value)return!1;if(typeof c=="string")return c;const m=Array.isArray(c)?c:typeof c=="number"?[c,c]:[10,10];return o(i.src,{...a.modifiers.value,width:m[0],height:m[1],quality:m[2]||50,blur:m[3]||3},a.options.value)}),S=v(()=>i.sizes?f.value.src:o(i.src,a.modifiers.value,a.options.value)),_=v(()=>h.value?h.value:S.value),b=E().isHydrating;return D(()=>{if(h.value){const c=new Image;S.value&&(c.src=S.value),i.sizes&&(c.sizes=f.value.sizes||"",c.srcset=f.value.srcset),c.onload=m=>{d.value=!0,s("load",m)},fe("nuxt-image");return}l.value&&(l.value.complete&&b&&(l.value.getAttribute("data-error")?s("error",new Event("error")):s("load",new Event("load"))),l.value.onload=c=>{s("load",c)},l.value.onerror=c=>{s("error",c)})}),(c,m)=>(F(),G("img",T({ref_key:"imgEl",ref:l,class:i.placeholder&&!d.value?i.placeholderClass:void 0},{...W(n)?{onerror:"this.setAttribute('data-error', 1)"}:{},...g.value,...W(r)},{src:_.value}),null,16,me))}});export{ye as _};
