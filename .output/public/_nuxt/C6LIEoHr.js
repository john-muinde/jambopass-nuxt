import{af as g,ck as u,r as D,T as O,bQ as B,bp as H,G as M,x as R,bu as p,c7 as S,cl as E,h as N,S as V,b1 as z}from"./BezDNcna.js";function T(a){return Array.isArray(a)?a:[a]}const j=a=>a==="defer"||a===!1;function G(...a){var v;const n=typeof a[a.length-1]=="string"?a.pop():void 0;typeof a[0]!="string"&&a.unshift(n);let[t,d,e={}]=a;if(typeof t!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof d!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const s=g(),P=d,w=()=>u.value,b=()=>s.isHydrating?s.payload.data[t]:s.static.data[t];e.server=e.server??!0,e.default=e.default??w,e.getCachedData=e.getCachedData??b,e.lazy=e.lazy??!1,e.immediate=e.immediate??!0,e.deep=e.deep??u.deep,e.dedupe=e.dedupe??"cancel";const f=e.getCachedData(t,s),h=f!=null;if(!s._asyncData[t]||!e.immediate){(v=s.payload._errors)[t]??(v[t]=u.errorValue);const i=e.deep?D:O;s._asyncData[t]={data:i(h?f:e.default()),pending:D(!h),error:B(s.payload._errors,t),status:D("idle"),_default:e.default}}const r={...s._asyncData[t]};delete r._default,r.refresh=r.execute=(i={})=>{if(s._asyncDataPromises[t]){if(j(i.dedupe??e.dedupe))return s._asyncDataPromises[t];s._asyncDataPromises[t].cancelled=!0}if(i._initial||s.isHydrating&&i._initial!==!1){const c=i._initial?f:e.getCachedData(t,s);if(c!=null)return Promise.resolve(c)}r.pending.value=!0,r.status.value="pending";const l=new Promise((c,o)=>{try{c(P(s))}catch(y){o(y)}}).then(async c=>{if(l.cancelled)return s._asyncDataPromises[t];let o=c;e.transform&&(o=await e.transform(c)),e.pick&&(o=K(o,e.pick)),s.payload.data[t]=o,r.data.value=o,r.error.value=u.errorValue,r.status.value="success"}).catch(c=>{if(l.cancelled)return s._asyncDataPromises[t];r.error.value=E(c),r.data.value=N(e.default()),r.status.value="error"}).finally(()=>{l.cancelled||(r.pending.value=!1,delete s._asyncDataPromises[t])});return s._asyncDataPromises[t]=l,s._asyncDataPromises[t]},r.clear=()=>x(s,t);const _=()=>r.refresh({_initial:!0}),C=e.server!==!1&&s.payload.serverRendered;{const i=V();if(i&&!i._nuxtOnBeforeMountCbs){i._nuxtOnBeforeMountCbs=[];const o=i._nuxtOnBeforeMountCbs;H(()=>{o.forEach(y=>{y()}),o.splice(0,o.length)}),M(()=>o.splice(0,o.length))}C&&s.isHydrating&&(r.error.value||f!=null)?(r.pending.value=!1,r.status.value=r.error.value?"error":"success"):i&&(s.payload.serverRendered&&s.isHydrating||e.lazy)&&e.immediate?i._nuxtOnBeforeMountCbs.push(_):e.immediate&&_();const l=z();if(e.watch){const o=R(e.watch,()=>r.refresh());l&&p(o)}const c=s.hook("app:data:refresh",async o=>{(!o||o.includes(t))&&await r.refresh()});l&&p(c)}const m=Promise.resolve(s._asyncDataPromises[t]).then(()=>r);return Object.assign(m,r),m}async function I(a){await new Promise(t=>S(t));const n=a?T(a):void 0;await g().hooks.callHookParallel("app:data:refresh",n)}function x(a,n){n in a.payload.data&&(a.payload.data[n]=void 0),n in a.payload._errors&&(a.payload._errors[n]=u.errorValue),a._asyncData[n]&&(a._asyncData[n].data.value=void 0,a._asyncData[n].error.value=u.errorValue,a._asyncData[n].pending.value=!1,a._asyncData[n].status.value="idle"),n in a._asyncDataPromises&&(a._asyncDataPromises[n]&&(a._asyncDataPromises[n].cancelled=!0),a._asyncDataPromises[n]=void 0)}function K(a,n){const t={};for(const d of n)t[d]=a[d];return t}export{I as r,G as u};
