import{c as f}from"./BosuxZz1.js";import{r as j}from"./Bz99rRjK.js";import{ag as P}from"./BVvk6MK8.js";var y={},_={},v={},g={},x=f&&f.__awaiter||function(n,i,e,a){function c(t){return t instanceof e?t:new e(function(u){u(t)})}return new(e||(e=Promise))(function(t,u){function o(s){try{r(a.next(s))}catch(d){u(d)}}function l(s){try{r(a.throw(s))}catch(d){u(d)}}function r(s){s.done?t(s.value):c(s.value).then(o,l)}r((a=a.apply(n,i||[])).next())})},E=f&&f.__generator||function(n,i){var e={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1]},trys:[],ops:[]},a,c,t,u;return u={next:o(0),throw:o(1),return:o(2)},typeof Symbol=="function"&&(u[Symbol.iterator]=function(){return this}),u;function o(r){return function(s){return l([r,s])}}function l(r){if(a)throw new TypeError("Generator is already executing.");for(;u&&(u=0,r[0]&&(e=0)),e;)try{if(a=1,c&&(t=r[0]&2?c.return:r[0]?c.throw||((t=c.return)&&t.call(c),0):c.next)&&!(t=t.call(c,r[1])).done)return t;switch(c=0,t&&(r=[r[0]&2,t.value]),r[0]){case 0:case 1:t=r;break;case 4:return e.label++,{value:r[1],done:!1};case 5:e.label++,c=r[1],r=[0];continue;case 7:r=e.ops.pop(),e.trys.pop();continue;default:if(t=e.trys,!(t=t.length>0&&t[t.length-1])&&(r[0]===6||r[0]===2)){e=0;continue}if(r[0]===3&&(!t||r[1]>t[0]&&r[1]<t[3])){e.label=r[1];break}if(r[0]===6&&e.label<t[1]){e.label=t[1],t=r;break}if(t&&e.label<t[2]){e.label=t[2],e.ops.push(r);break}t[2]&&e.ops.pop(),e.trys.pop();continue}r=i.call(n,e)}catch(s){r=[6,s],c=0}finally{a=t=0}if(r[0]&5)throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}};Object.defineProperty(g,"__esModule",{value:!0});g.ReCaptchaInstance=void 0;var T=function(){function n(i,e,a){this.siteKey=i,this.recaptchaID=e,this.recaptcha=a,this.styleContainer=null}return n.prototype.execute=function(i){return x(this,void 0,void 0,function(){var e;return E(this,function(a){switch(a.label){case 0:return this.recaptcha.enterprise?[4,this.recaptcha.enterprise.execute(this.recaptchaID,{action:i})]:[3,2];case 1:return e=a.sent(),[3,4];case 2:return[4,this.recaptcha.execute(this.recaptchaID,{action:i})];case 3:e=a.sent(),a.label=4;case 4:return[2,e]}})})},n.prototype.getSiteKey=function(){return this.siteKey},n.prototype.hideBadge=function(){this.styleContainer===null&&(this.styleContainer=document.createElement("style"),this.styleContainer.innerHTML=".grecaptcha-badge{visibility:hidden !important;}",document.head.appendChild(this.styleContainer))},n.prototype.showBadge=function(){this.styleContainer!==null&&(document.head.removeChild(this.styleContainer),this.styleContainer=null)},n}();g.ReCaptchaInstance=T;var b=f&&f.__assign||function(){return b=Object.assign||function(n){for(var i,e=1,a=arguments.length;e<a;e++){i=arguments[e];for(var c in i)Object.prototype.hasOwnProperty.call(i,c)&&(n[c]=i[c])}return n},b.apply(this,arguments)};Object.defineProperty(v,"__esModule",{value:!0});v.getInstance=v.load=void 0;var k=g,h;(function(n){n[n.NOT_LOADED=0]="NOT_LOADED",n[n.LOADING=1]="LOADING",n[n.LOADED=2]="LOADED"})(h||(h={}));var L=function(){function n(){}return n.load=function(i,e){if(e===void 0&&(e={}),typeof document>"u")return Promise.reject(new Error("This is a library for the browser!"));if(n.getLoadingState()===h.LOADED)return n.instance.getSiteKey()===i?Promise.resolve(n.instance):Promise.reject(new Error("reCAPTCHA already loaded with different site key!"));if(n.getLoadingState()===h.LOADING)return i!==n.instanceSiteKey?Promise.reject(new Error("reCAPTCHA already loaded with different site key!")):new Promise(function(c,t){n.successfulLoadingConsumers.push(function(u){return c(u)}),n.errorLoadingRunnable.push(function(u){return t(u)})});n.instanceSiteKey=i,n.setLoadingState(h.LOADING);var a=new n;return new Promise(function(c,t){a.loadScript(i,e.useRecaptchaNet||!1,e.useEnterprise||!1,e.renderParameters?e.renderParameters:{},e.customUrl).then(function(){n.setLoadingState(h.LOADED);var u=a.doExplicitRender(grecaptcha,i,e.explicitRenderParameters?e.explicitRenderParameters:{},e.useEnterprise||!1),o=new k.ReCaptchaInstance(i,u,grecaptcha);n.successfulLoadingConsumers.forEach(function(l){return l(o)}),n.successfulLoadingConsumers=[],e.autoHideBadge&&o.hideBadge(),n.instance=o,c(o)}).catch(function(u){n.errorLoadingRunnable.forEach(function(o){return o(u)}),n.errorLoadingRunnable=[],t(u)})})},n.getInstance=function(){return n.instance},n.setLoadingState=function(i){n.loadingState=i},n.getLoadingState=function(){return n.loadingState===null?h.NOT_LOADED:n.loadingState},n.prototype.loadScript=function(i,e,a,c,t){var u=this;e===void 0&&(e=!1),a===void 0&&(a=!1),c===void 0&&(c={}),t===void 0&&(t="");var o=document.createElement("script");o.setAttribute("recaptcha-v3-script",""),o.setAttribute("async",""),o.setAttribute("defer","");var l="https://www.google.com/recaptcha/api.js";e?a?l="https://recaptcha.net/recaptcha/enterprise.js":l="https://recaptcha.net/recaptcha/api.js":a&&(l="https://www.google.com/recaptcha/enterprise.js"),t&&(l=t),c.render&&(c.render=void 0);var r=this.buildQueryString(c);return o.src=l+"?render=explicit"+r,new Promise(function(s,d){o.addEventListener("load",u.waitForScriptToLoad(function(){s(o)},a),!1),o.onerror=function(S){n.setLoadingState(h.NOT_LOADED),d(S)},document.head.appendChild(o)})},n.prototype.buildQueryString=function(i){var e=Object.keys(i);return e.length<1?"":"&"+Object.keys(i).filter(function(a){return!!i[a]}).map(function(a){return a+"="+i[a]}).join("&")},n.prototype.waitForScriptToLoad=function(i,e){var a=this;return function(){window.grecaptcha===void 0?setTimeout(function(){a.waitForScriptToLoad(i,e)},n.SCRIPT_LOAD_DELAY):e?window.grecaptcha.enterprise.ready(function(){i()}):window.grecaptcha.ready(function(){i()})}},n.prototype.doExplicitRender=function(i,e,a,c){var t=b({sitekey:e},a);return a.container?c?i.enterprise.render(a.container,t):i.render(a.container,t):c?i.enterprise.render(t):i.render(t)},n.loadingState=null,n.instance=null,n.instanceSiteKey=null,n.successfulLoadingConsumers=[],n.errorLoadingRunnable=[],n.SCRIPT_LOAD_DELAY=25,n}();v.load=L.load;v.getInstance=L.getInstance;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.ReCaptchaInstance=n.getInstance=n.load=void 0;var i=v;Object.defineProperty(n,"load",{enumerable:!0,get:function(){return i.load}}),Object.defineProperty(n,"getInstance",{enumerable:!0,get:function(){return i.getInstance}});var e=g;Object.defineProperty(n,"ReCaptchaInstance",{enumerable:!0,get:function(){return e.ReCaptchaInstance}})})(_);var R=f&&f.__awaiter||function(n,i,e,a){function c(t){return t instanceof e?t:new e(function(u){u(t)})}return new(e||(e=Promise))(function(t,u){function o(s){try{r(a.next(s))}catch(d){u(d)}}function l(s){try{r(a.throw(s))}catch(d){u(d)}}function r(s){s.done?t(s.value):c(s.value).then(o,l)}r((a=a.apply(n,i||[])).next())})},O=f&&f.__generator||function(n,i){var e={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1]},trys:[],ops:[]},a,c,t,u;return u={next:o(0),throw:o(1),return:o(2)},typeof Symbol=="function"&&(u[Symbol.iterator]=function(){return this}),u;function o(r){return function(s){return l([r,s])}}function l(r){if(a)throw new TypeError("Generator is already executing.");for(;e;)try{if(a=1,c&&(t=r[0]&2?c.return:r[0]?c.throw||((t=c.return)&&t.call(c),0):c.next)&&!(t=t.call(c,r[1])).done)return t;switch(c=0,t&&(r=[r[0]&2,t.value]),r[0]){case 0:case 1:t=r;break;case 4:return e.label++,{value:r[1],done:!1};case 5:e.label++,c=r[1],r=[0];continue;case 7:r=e.ops.pop(),e.trys.pop();continue;default:if(t=e.trys,!(t=t.length>0&&t[t.length-1])&&(r[0]===6||r[0]===2)){e=0;continue}if(r[0]===3&&(!t||r[1]>t[0]&&r[1]<t[3])){e.label=r[1];break}if(r[0]===6&&e.label<t[1]){e.label=t[1],t=r;break}if(t&&e.label<t[2]){e.label=t[2],e.ops.push(r);break}t[2]&&e.ops.pop(),e.trys.pop();continue}r=i.call(n,e)}catch(s){r=[6,s],c=0}finally{a=t=0}if(r[0]&5)throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}};Object.defineProperty(y,"__esModule",{value:!0});var I=y.useReCaptcha=D=y.VueReCaptcha=void 0,K=_,w=j,A=Symbol("VueReCaptchaInjectKey"),p={loadedWaiters:[],error:null},D=y.VueReCaptcha={install:function(n,i){var e=w.ref(!1),a=w.ref(void 0);n.config.globalProperties.$recaptchaLoaded=C(e),G(i).then(function(c){e.value=!0,a.value=c,n.config.globalProperties.$recaptcha=m(a),n.config.globalProperties.$recaptchaInstance=a,p.loadedWaiters.forEach(function(t){return t.resolve(!0)})}).catch(function(c){p.error=c,p.loadedWaiters.forEach(function(t){return t.reject(c)})}),n.provide(A,{instance:a,isLoaded:e,executeRecaptcha:m(a),recaptchaLoaded:C(e)})}};function $(){return w.inject(A)}I=y.useReCaptcha=$;function G(n){return R(this,void 0,void 0,function(){return O(this,function(i){switch(i.label){case 0:return[4,K.load(n.siteKey,n.loaderOptions)];case 1:return[2,i.sent()]}})})}function C(n){return function(){return new Promise(function(i,e){if(p.error!==null)return e(p.error);if(n.value)return i(!0);p.loadedWaiters.push({resolve:i,reject:e})})}}function m(n){var i=this;return function(e){return R(i,void 0,void 0,function(){var a;return O(this,function(c){switch(c.label){case 0:return[4,(a=n.value)===null||a===void 0?void 0:a.execute(e)];case 1:return[2,c.sent()]}})})}}const H=async()=>{const{vueApp:n}=P();return n.use(D,{siteKey:"6Ldyw1wpAAAAAGx6vRq1hhnnfKaKHPmcuJ0imPkT",loaderOptions:{autoHideBadge:!0}}),I};export{H as u};
