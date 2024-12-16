import{_ as f,o,A as v,w as c,a as e,b as g,m,c as n,ac as l,t as r,d as i,q as y}from"./Cg6WK9Tj.js";import{h as p,S as b}from"./BHIiYVKw.js";const k={id:"content-state",class:"w-full min-h-[400px] flex flex-col items-center justify-center p-6"},w={class:"text-center max-w-md mx-auto"},x={key:0,class:"animate-in fade-in duration-500"},M={class:"relative mx-auto w-24 h-24 mb-6"},S={class:"text-xl font-semibold text-gray-900 mb-2"},C={class:"text-gray-500"},T={key:1,class:"animate-in fade-in duration-500"},$={class:"relative mx-auto w-24 h-24 mb-6"},H={class:"empty-state-animation"},V={class:"w-full h-full text-gray-300",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},j=["d"],B={key:1,d:"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5"},z={class:"text-xl font-semibold text-gray-900 mb-2"},L={class:"text-gray-500 mb-6"},A={class:"flex flex-wrap justify-center gap-3"},N={key:2,class:"animate-in fade-in duration-500"},q={class:"relative mx-auto w-24 h-24 mb-6"},E={class:"text-xl font-semibold text-gray-900 mb-2"},I={class:"text-gray-500 mb-6"},D={class:"flex flex-wrap justify-center gap-3"},P={__name:"ContentState",props:{type:{type:String,default:"loading",validator:t=>["loading","empty","error"].includes(t)},contentType:{type:String,required:!0,default:"items"},searchTerm:{type:String,default:""},loadingMessage:{type:String,default:""},loadingSubMessage:{type:String,default:""},emptyMessage:{type:String,default:""},emptySubMessage:{type:String,default:""},errorMessage:{type:String,default:""},errorSubMessage:{type:String,default:""},primaryColor:{type:String,default:"blue"}},emits:["clear-search","retry","clear-filters"],setup(t){const d={videos:"M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",images:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",newsletters:"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4",brochures:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",products:"M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",users:"M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",documents:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"},h=a=>a.charAt(0).toUpperCase()+a.slice(1);return(a,s)=>(o(),v(m(b),{appear:"",show:!0},{default:c(()=>[e("div",k,[g(m(p),{enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:c(()=>[e("div",w,[t.type==="loading"?(o(),n("div",x,[e("div",M,[l(a.$slots,"loading-icon",{},()=>[s[3]||(s[3]=e("div",{class:"absolute inset-0 rounded-full border-4 border-primary-100 border-t-primary-500 animate-spin"},null,-1)),s[4]||(s[4]=e("div",{class:"absolute inset-3 rounded-full bg-primary-50 animate-pulse"},null,-1)),s[5]||(s[5]=e("div",{class:"absolute inset-[14px] rounded-full bg-primary-500"},null,-1))],!0)]),e("h3",S,r(t.loadingMessage||`Loading ${t.contentType}...`),1),e("p",C,r(t.loadingSubMessage||`Please wait while we fetch the ${t.contentType}`),1)])):t.type==="empty"?(o(),n("div",T,[e("div",$,[l(a.$slots,"empty-icon",{},()=>[e("div",H,[(o(),n("svg",V,[d[t.contentType]?(o(),n("path",{key:0,d:d[t.contentType],"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5"},null,8,j)):(o(),n("path",B))]))])],!0)]),e("h3",z,r(t.searchTerm?`No ${t.contentType} found for "${t.searchTerm}"`:t.emptyMessage||`No ${t.contentType} found`),1),e("p",L,r(t.searchTerm?"Try adjusting your search terms":t.emptySubMessage||`${h(t.contentType)} will appear here once added`),1),e("div",A,[t.searchTerm?(o(),n("button",{key:0,class:"btn-primary",onClick:s[0]||(s[0]=u=>a.$emit("clear-search"))},s[6]||(s[6]=[e("svg",{class:"w-4 h-4 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),i(" Clear search ")]))):y("",!0),l(a.$slots,"empty-actions",{},void 0,!0)])])):t.type==="error"?(o(),n("div",N,[e("div",q,[l(a.$slots,"error-icon",{},()=>[s[7]||(s[7]=e("div",{class:"absolute inset-0 rounded-full bg-red-100 animate-pulse"},null,-1)),s[8]||(s[8]=e("svg",{class:"absolute inset-0 w-full h-full text-red-500 transform -rotate-12",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})],-1))],!0)]),e("h3",E,r(t.errorMessage||`Error loading ${t.contentType}`),1),e("p",I,r(t.errorSubMessage||`There was an error loading the ${t.contentType}`),1),e("div",D,[e("button",{class:"btn-error",onClick:s[1]||(s[1]=u=>a.$emit("retry"))},s[9]||(s[9]=[e("svg",{class:"w-4 h-4 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})],-1),i(" Try again ")])),l(a.$slots,"error-actions",{},()=>[e("button",{class:"btn-secondary",onClick:s[2]||(s[2]=u=>a.$emit("clear-filters"))},s[10]||(s[10]=[e("svg",{class:"w-4 h-4 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l18 0"})],-1),i(" Clear filters ")]))],!0)])])):y("",!0)])]),_:3})])]),_:3}))}},G=f(P,[["__scopeId","data-v-b3c4ac71"]]);export{G as _};
