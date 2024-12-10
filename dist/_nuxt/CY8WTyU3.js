import{c as qe}from"./BosuxZz1.js";import{r as He}from"./CD2Projl.js";var de={exports:{}};/**
 * Vue 3 Carousel 0.9.0
 * (c) 2024
 * @license MIT
 */(function(We,Me){(function(w,e){e(Me,He)})(qe,function(w,e){const N=Symbol("carousel");function W({val:n,max:u,min:a}){return u<a?n:Math.min(Math.max(n,isNaN(a)?n:a),isNaN(u)?n:u)}function K({val:n,max:u,min:a=0}){const i=u-a+1;return((n-a)%i+i)%i+a}function ve(n="",u={}){return Object.entries(u).reduce((a,[i,c])=>a.replace(`{${i}}`,String(c)),n)}function Z(n,u=0){let a=!1,i=0,c=null;function p(...s){if(a)return;a=!0;const h=()=>{c=requestAnimationFrame(g=>{g-i>u?(i=g,n(...s),a=!1):h()})};h()}return p.cancel=()=>{c&&(cancelAnimationFrame(c),c=null,a=!1)},p}const pe=e.defineComponent({name:"CarouselSlide",props:{isClone:{type:Boolean,default:!1},id:{type:String,default:n=>n.isClone?void 0:e.useId()},index:{type:Number,default:0}},setup(n,{slots:u,expose:a}){const i=e.inject(N);if(e.provide(N,void 0),!i)return null;const c=e.ref(n.index);e.watch(()=>n.index,o=>c.value=o);const p=e.computed(()=>c.value===i.currentSlide),s=e.computed(()=>c.value===i.currentSlide-1),h=e.computed(()=>c.value===i.currentSlide+1),g=e.computed(()=>c.value>=Math.floor(i.scrolledIndex)&&c.value<Math.ceil(i.scrolledIndex)+i.config.itemsToShow),S=e.computed(()=>{const o=i.config.gap>0&&i.config.itemsToShow>1?`calc(${100/i.config.itemsToShow}% - ${i.config.gap*(i.config.itemsToShow-1)/i.config.itemsToShow}px)`:100/i.config.itemsToShow+"%";return i.isVertical?{height:o}:{width:o}}),b=e.getCurrentInstance();if(n.isClone){const o=m=>{[...m!=null&&m.el?m.el.querySelectorAll('a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'):[]].filter(A=>!A.hasAttribute("disabled")&&!A.getAttribute("aria-hidden")).forEach(A=>A.setAttribute("tabindex","-1"))};e.onMounted(()=>{o(b.vnode)}),e.onUpdated(()=>{o(b.vnode)})}else i.registerSlide(b,o=>c.value=o),e.onUnmounted(()=>{i.unregisterSlide(b)});return a({id:n.id}),()=>{var o,m;return i.config.enabled?e.h("li",{style:S.value,class:{carousel__slide:!0,"carousel__slide--clone":n.isClone,"carousel__slide--visible":g.value,"carousel__slide--active":p.value,"carousel__slide--prev":s.value,"carousel__slide--next":h.value,"carousel__slide--sliding":i.isSliding},onFocusin:()=>{i.viewport&&(i.viewport.scrollLeft=0),i.nav.slideTo(c.value)},id:n.isClone?void 0:n.id,"aria-hidden":n.isClone||void 0},(m=u.default)===null||m===void 0?void 0:m.call(u,{isActive:p.value,isClone:n.isClone,isPrev:s.value,isNext:h.value,isSliding:i.isSliding,isVisible:g.value})):(o=u.default)===null||o===void 0?void 0:o.call(u)}}});function me({slides:n,position:u,toShow:a}){const i=[],c=u==="before",p=c?0:a;for(let s=c?-a:0;s<p;s++){const h={index:c?s:n.length>0?s+n.length:s+99999,isClone:!0,key:`clone-${u}-${s}`};i.push(n.length>0?e.cloneVNode(n[(s+n.length)%n.length].vnode,h):e.h(pe,h))}return i}const Oe=e.defineComponent({name:"CarouselAria",setup(){const n=e.inject(N);if(n)return()=>e.h("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},ve(n.config.i18n.itemXofY,{currentSlide:n.currentSlide+1,slidesCount:n.slidesCount}))}}),ke=Symbol("carousel"),J=["center","start","end","center-even","center-odd"],Q=["viewport","carousel"],ee=["ltr","left-to-right","rtl","right-to-left","ttb","top-to-bottom","btt","bottom-to-top"],he={ariaNextSlide:"Navigate to next slide",ariaPreviousSlide:"Navigate to previous slide",ariaNavigateToSlide:"Navigate to slide {slideNumber}",ariaGallery:"Gallery",itemXofY:"Item {currentSlide} of {slidesCount}",iconArrowUp:"Arrow pointing upwards",iconArrowDown:"Arrow pointing downwards",iconArrowRight:"Arrow pointing to the right",iconArrowLeft:"Arrow pointing to the left"},V={"left-to-right":"ltr","right-to-left":"rtl","top-to-bottom":"ttb","bottom-to-top":"btt"},De=Object.values(V),f={enabled:!0,itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,gap:0,height:"auto",wrapAround:!1,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,snapAlign:J[0],dir:ee[0],breakpointMode:Q[0],breakpoints:void 0,i18n:he},Ee={enabled:{default:f.enabled,type:Boolean},itemsToShow:{default:f.itemsToShow,type:Number},itemsToScroll:{default:f.itemsToScroll,type:Number},wrapAround:{default:f.wrapAround,type:Boolean},gap:{default:f.gap,type:Number},height:{default:f.height,type:[Number,String]},snapAlign:{default:f.snapAlign,validator:n=>J.includes(n)},transition:{default:f.transition,type:Number},breakpointMode:{default:f.breakpointMode,validator:n=>Q.includes(n)},breakpoints:{default:f.breakpoints,type:Object},autoplay:{default:f.autoplay,type:Number},pauseAutoplayOnHover:{default:f.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:f.mouseDrag,type:Boolean},touchDrag:{default:f.touchDrag,type:Boolean},dir:{type:String,default:f.dir,validator:n=>ee.includes(n)},i18n:{default:f.i18n,type:Object}},je=e.defineComponent({name:"VueCarousel",props:Ee,emits:["init","drag","slide-start","loop","update:modelValue","slide-end","before-init"],setup(n,{slots:u,emit:a,expose:i}){var c;const p=e.ref(null),s=e.ref(null),h=e.shallowReactive([]),g=e.ref(0),S=e.computed(()=>h.length),b=e.computed(()=>Object.assign(Object.assign(Object.assign({},f),n),{i18n:Object.assign(Object.assign({},f.i18n),n.i18n),breakpoints:void 0})),o=e.reactive(Object.assign({},b.value)),m=e.ref((c=n.modelValue)!==null&&c!==void 0?c:0),A=e.ref(0),Ue=e.computed(()=>Math.ceil((S.value-1)/2)),O=e.computed(()=>function({config:t,slidesCount:l}){const{snapAlign:r="center",wrapAround:d,itemsToShow:v=1}=t;return Math.max(function(){switch(d?"":r){case"start":return Math.ceil(l-v);case"center":case"center-odd":return l-Math.ceil((v-.5)/2);case"center-even":return l-Math.ceil(v/2);default:return Math.ceil(l-1)}}(),0)}({config:o,slidesCount:S.value})),$=e.computed(()=>function({config:t,slidesCount:l}){const{snapAlign:r="center",wrapAround:d,itemsToShow:v=1}=t;return d||v>l?0:Math.max(0,function(){switch(r){case"end":return Math.floor(v-1);case"center":case"center-odd":return Math.floor((v-1)/2);case"center-even":return Math.floor((v-2)/2)}return 0}())}({config:o,slidesCount:S.value}));let k=null,oe=null,z=null;const Se=e.computed(()=>g.value+o.gap),D=e.computed(()=>{const t=o.dir||"ltr";return t in V?V[t]:t}),B=[],X=e.computed(()=>["rtl","btt"].includes(D.value)),y=e.computed(()=>["ttb","btt"].includes(D.value)),be=e.computed(()=>Math.ceil(o.itemsToShow)+1);function E(){var t;const l=(b.value.breakpointMode==="carousel"?(t=p.value)===null||t===void 0?void 0:t.getBoundingClientRect().width:typeof window<"u"?window.innerWidth:0)||0,r=Object.keys(n.breakpoints||{}).map(v=>Number(v)).sort((v,x)=>+x-+v),d={};r.some(v=>l>=v&&(Object.assign(d,n.breakpoints[v]),d.i18n&&Object.assign(d.i18n,b.value.i18n,n.breakpoints[v].i18n),!0)),Object.assign(o,b.value,d)}const $e=Z(()=>{E(),G(),C()}),ie=e.computed(()=>(o.itemsToShow-1)*o.gap),Y=e.shallowReactive(new Set);function C(){if(!s.value)return;let t=1;if(Y.forEach(l=>{const r=function(d){const{transform:v}=window.getComputedStyle(d);return v.split(/[(,)]/).slice(1,-1).map(x=>parseFloat(x))}(l);r.length===6&&(t*=r[0])}),y.value){if(o.height!=="auto"){const l=typeof o.height=="string"&&isNaN(parseInt(o.height))?s.value.getBoundingClientRect().height:parseInt(o.height);g.value=(l-ie.value)/o.itemsToShow}}else{const l=s.value.getBoundingClientRect().width;g.value=(l/t-ie.value)/o.itemsToShow}}function G(){!o.wrapAround&&S.value>0&&(m.value=W({val:m.value,max:O.value,min:$.value}))}let j;e.watchEffect(()=>G()),e.watchEffect(()=>{C()});const xe=t=>{const l=t.target;if(l&&Y.add(l),!j){const r=()=>{j=requestAnimationFrame(()=>{C(),r()})};r()}},ye=t=>{const l=t.target;l&&Y.delete(l),j&&Y.size===0&&(cancelAnimationFrame(j),C())};E(),e.onMounted(()=>{b.value.breakpointMode==="carousel"&&E(),_e(),document&&(document.addEventListener("animationstart",xe),document.addEventListener("animationend",ye)),p.value&&(z=new ResizeObserver($e),z.observe(p.value)),a("init")}),e.onBeforeUnmount(()=>{h.splice(0,h.length),B.splice(0,B.length),oe&&clearTimeout(oe),j&&cancelAnimationFrame(j),k&&clearInterval(k),z&&(z.disconnect(),z=null),document&&(document.removeEventListener("keydown",le),document.removeEventListener("animationstart",xe),document.removeEventListener("animationend",ye)),p.value&&(p.value.removeEventListener("transitionend",C),p.value.removeEventListener("animationiteration",C))});let I=!1;const q={x:0,y:0},_=e.reactive({x:0,y:0}),H=e.ref(!1),ae=e.ref(!1),ze=()=>{H.value=!0},Be=()=>{H.value=!1},le=Z(t=>{if(!t.ctrlKey)switch(t.key){case"ArrowLeft":case"ArrowUp":y.value===t.key.endsWith("Up")&&(X.value?L.next(!0):L.prev(!0));break;case"ArrowRight":case"ArrowDown":y.value===t.key.endsWith("Down")&&(X.value?L.prev(!0):L.next(!0))}},200),Fe=()=>{document.addEventListener("keydown",le)},Ve=()=>{document.removeEventListener("keydown",le)};function Ae(t){const l=t.target.tagName;if(["INPUT","TEXTAREA","SELECT"].includes(l)||T.value||(I=t.type==="touchstart",!I&&(t.preventDefault(),t.button!==0)))return;q.x="touches"in t?t.touches[0].clientX:t.clientX,q.y="touches"in t?t.touches[0].clientY:t.clientY;const r=I?"touchmove":"mousemove",d=I?"touchend":"mouseup";document.addEventListener(r,re,{passive:!1}),document.addEventListener(d,Ce,{passive:!0})}const re=Z(t=>{ae.value=!0;const l="touches"in t?t.touches[0].clientX:t.clientX,r="touches"in t?t.touches[0].clientY:t.clientY,d=l-q.x,v=r-q.y;_.x=d,_.y=v,a("drag",{deltaX:d,deltaY:v})});function Ce(){re.cancel();const t=y.value?"y":"x",l=X.value?-1:1,r=.4*Math.sign(_[t]),d=Math.round(_[t]/Se.value+r)*l;if(d&&!I){const M=P=>{P.preventDefault(),window.removeEventListener("click",M)};window.addEventListener("click",M)}R(m.value-d),_.x=0,_.y=0,ae.value=!1;const v=I?"touchmove":"mousemove",x=I?"touchend":"mouseup";document.removeEventListener(v,re),document.removeEventListener(x,Ce)}function _e(){!o.autoplay||o.autoplay<=0||(k=setInterval(()=>{o.pauseAutoplayOnHover&&H.value||se()},o.autoplay))}function Te(){k&&(clearInterval(k),k=null)}function ue(){Te(),_e()}const T=e.ref(!1);function R(t,l=!1){const r=o.wrapAround?t:W({val:t,max:O.value,min:$.value});if(m.value===r||!l&&T.value)return;a("slide-start",{slidingToIndex:t,currentSlideIndex:m.value,prevSlideIndex:A.value,slidesCount:S.value}),Te(),T.value=!0,A.value=m.value;const d=o.wrapAround?K({val:r,max:O.value,min:0}):r;m.value=r,d!==r&&Le.pause(),a("update:modelValue",d),oe=setTimeout(()=>{o.wrapAround&&d!==r&&(Le.resume(),m.value=d,a("loop",{currentSlideIndex:m.value,slidingToIndex:t})),a("slide-end",{currentSlideIndex:m.value,prevSlideIndex:A.value,slidesCount:S.value}),T.value=!1,ue()},o.transition)}function se(t=!1){R(m.value+o.itemsToScroll,t)}function Ne(t=!1){R(m.value-o.itemsToScroll,t)}const L={slideTo:R,next:se,prev:Ne},Ie=e.computed(()=>function({config:t,currentSlide:l,slidesCount:r}){const{snapAlign:d="center",wrapAround:v,itemsToShow:x=1}=t,M=((P,U)=>{var F;return(F={start:0,center:(U-1)/2,"center-odd":(U-1)/2,"center-even":(U-2)/2,end:U-1}[P])!==null&&F!==void 0?F:0})(d,x);return v?K({val:l-M,max:r+x,min:0-x}):W({val:l-M,max:r-x,min:0})}({config:o,currentSlide:m.value,slidesCount:S.value})),Xe=e.reactive({config:o,slidesCount:S,viewport:s,slides:h,scrolledIndex:Ie,currentSlide:m,maxSlide:O,minSlide:$,slideSize:g,isVertical:y,normalizedDir:D,nav:L,isSliding:T,registerSlide:(t,l)=>{l(h.length),h.push(t),B.push(l)},unregisterSlide:t=>{const l=h.indexOf(t);l>=0&&(h.splice(l,1),B.splice(l,1),B.slice(l).forEach((r,d)=>r(l+d)))}});e.provide(N,Xe),e.provide("config",o),e.provide("slidesCount",S),e.provide("currentSlide",m),e.provide("maxSlide",O),e.provide("minSlide",$),e.provide("slideSize",g),e.provide("isVertical",y),e.provide("normalizeDir",D),e.provide("nav",L),e.provide("isSliding",T),e.watch(()=>[b.value,n.breakpoints],()=>E(),{deep:!0}),e.watch(()=>n.autoplay,()=>ue());const Le=e.watch(()=>n.modelValue,t=>{t!==m.value&&R(Number(t),!0)});a("before-init");const ce=e.reactive({config:o,slidesCount:S,slideSize:g,currentSlide:m,maxSlide:O,minSlide:$,middleSlide:Ue});i({updateBreakpointsConfig:E,updateSlidesData:G,updateSlideSize:C,restartCarousel:function(){E(),G(),C(),ue()},slideTo:R,next:se,prev:Ne,nav:L,data:ce});const Ye=e.computed(()=>y.value&&g.value&&o.height==="auto"?`${g.value*o.itemsToShow+ie.value}px`:o.height!=="auto"?typeof o.height=="number"||parseInt(o.height).toString()===o.height?`${o.height}px`:o.height:void 0),Ge=e.computed(()=>{const t=o.wrapAround?be.value:0,l=X.value?-1:1,r=(Ie.value+t)*Se.value*l,d=y.value?_.y:_.x;return`translate${y.value?"Y":"X"}(${d-r}px)`});return()=>{const t=u.default||u.slides,l=u.addons;let r=(t==null?void 0:t(ce))||[];if(!o.enabled||!r.length)return e.h("section",{ref:p,class:["carousel","is-disabled"]},r);const d=(l==null?void 0:l(ce))||[];if(o.wrapAround){const M=r.length>0?r[0].scopeId:null;e.pushScopeId(M);const P=be.value,U=me({slides:h,position:"before",toShow:P}),F=me({slides:h,position:"after",toShow:P});e.popScopeId(),r=[...U,...r,...F]}const v=e.h("ol",{class:"carousel__track",style:{transform:Ge.value,"transition-duration":T.value?`${o.transition}ms`:void 0,gap:o.gap>0?`${o.gap}px`:void 0},onMousedownCapture:o.mouseDrag?Ae:null,onTouchstartPassiveCapture:o.touchDrag?Ae:null},r),x=e.h("div",{class:"carousel__viewport",ref:s},v);return e.h("section",{ref:p,class:["carousel",`is-${D.value}`,{"is-vertical":y.value,"is-sliding":T.value,"is-dragging":ae.value,"is-hover":H.value}],style:{"--vc-trk-height":Ye.value},dir:D.value,"aria-label":o.i18n.ariaGallery,tabindex:"0",onFocus:Fe,onBlur:Ve,onMouseenter:ze,onMouseleave:Be},[x,d,e.h(Oe)])}}});var ne;(function(n){n.arrowUp="arrowUp",n.arrowDown="arrowDown",n.arrowRight="arrowRight",n.arrowLeft="arrowLeft"})(ne||(ne={}));const fe=n=>`icon${n.charAt(0).toUpperCase()+n.slice(1)}`,ge=n=>n&&n in ne,we={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"},te=e.defineComponent({props:{name:{type:String,required:!0,validator:ge},title:{type:String,default:n=>n.name?f.i18n[fe(n.name)]:""}},setup(n){const u=e.inject(N,null);return()=>{const a=n.name;if(!a||!ge(a))return;const i=we[a],c=e.h("path",{d:i}),p=(u==null?void 0:u.config.i18n[fe(a)])||n.title||a,s=e.h("title",p);return e.h("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img","aria-label":p},[s,c])}}}),Re=e.defineComponent({name:"CarouselNavigation",setup(n,{slots:u}){const a=e.inject(N);if(!a)return null;const{next:i,prev:c}=u;return()=>{const{wrapAround:p,i18n:s}=a.config;return[e.h("button",{type:"button",class:["carousel__prev",!p&&a.currentSlide<=a.minSlide&&"carousel__prev--disabled",n.class],"aria-label":s.ariaPreviousSlide,title:s.ariaPreviousSlide,onClick:a.nav.prev},(c==null?void 0:c())||e.h(te,{name:{ltr:"arrowLeft",rtl:"arrowRight",ttb:"arrowUp",btt:"arrowDown"}[a.normalizedDir]})),e.h("button",{type:"button",class:["carousel__next",!p&&a.currentSlide>=a.maxSlide&&"carousel__next--disabled",n.class],"aria-label":s.ariaNextSlide,title:s.ariaNextSlide,onClick:a.nav.next},(i==null?void 0:i())||e.h(te,{name:{ltr:"arrowRight",rtl:"arrowLeft",ttb:"arrowDown",btt:"arrowUp"}[a.normalizedDir]}))]}}}),Pe=e.defineComponent({name:"CarouselPagination",setup(n){const u=e.inject(N);if(!u)return null;const a=i=>K({val:u.currentSlide,max:u.maxSlide,min:0})===i;return()=>{var i,c;const p=[];for(let s=u.minSlide;s<=u.maxSlide;s++){const h=ve(u.config.i18n.ariaNavigateToSlide,{slideNumber:s+1}),g=a(s),S=e.h("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":g},"aria-label":h,"aria-pressed":g,"aria-controls":(c=(i=u.slides[s])===null||i===void 0?void 0:i.exposed)===null||c===void 0?void 0:c.id,title:h,onClick:n.disableOnClick?void 0:()=>u.nav.slideTo(s)}),b=e.h("li",{class:"carousel__pagination-item",key:s},S);p.push(b)}return e.h("ol",{class:"carousel__pagination"},p)}}});w.BREAKPOINT_MODE_OPTIONS=Q,w.Carousel=je,w.DEFAULT_CONFIG=f,w.DIR_MAP=V,w.DIR_OPTIONS=ee,w.I18N_DEFAULT_CONFIG=he,w.Icon=te,w.NORMALIZED_DIR_OPTIONS=De,w.Navigation=Re,w.Pagination=Pe,w.SNAP_ALIGN_OPTIONS=J,w.Slide=pe,w.icons=we,w.injectCarousel=ke})})(de,de.exports);var Je=de.exports;export{Je as c};
