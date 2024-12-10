import{_ as J}from"./CvcCeE8A.js";import{_ as K}from"./BUsJzUwX.js";import{_ as O}from"./CnekbYDQ.js";import{a as Q}from"./DrkG6YK4.js";import{_ as U,$ as W,r as c,f as V,p as X,x as L,A as Y,c as u,a as t,b as g,w as d,s as y,j as m,F as $,i as T,n as C,t as b,o as n,h as Z,d as f}from"./BVvk6MK8.js";import{u as ee}from"./CgAPc4fB.js";import{u as te}from"./ByOEX_mC.js";import"./CXmUSqvE.js";const ae={class:"main"},se={class:"page-content"},oe={class:"container"},le={class:"row"},ne={class:"col-lg-10 offset-lg-1"},re={key:3,class:"row blogs-main-page-section"},ie={class:"entry entry-grid"},ce={class:"entry-media entry-gallery"},ue={class:"entry-body"},ge={class:"entry-title"},de={class:"entry-content"},pe={class:"mb-2"},me={key:4,class:"row"},ve={class:"col-md-12"},_e={"aria-label":"Page navigation"},fe={class:"pagination justify-content-center"},he={class:"page-item-total"},ye={__name:"blogs",setup(be){ee({title:"Blogs | Media Center",meta:[{name:"description",content:"In-depth insights on various topics."}]});const p=W(),s=c(p.params.page?parseInt(p.params.page):1),N=c(9),I=c(0),P=c([]),x=c(p.params.id?parseInt(p.params.id):1),E=c([]),h=c(!1),S=c(null),{api:M}=te(),k=async()=>{h.value=!0;try{const e=await M.get("/api/get-blogs",{params:{page:s.value,per_page:N.value,category_id:x.value}});P.value=e.data.data,I.value=e.data.total}catch(e){e.value=e,console.error(e)}finally{h.value=!1}},j=async()=>{try{const e=await M.get("/api/get-blog-sidebar",{});E.value=e.data.other_blogs}catch(e){console.error(e)}},w=(e,o)=>{let a=o.replace(/ /g,"-").replace(/\//g,"-");return a=a.replace(/-+/g,"-"),a=a.replace(/^-+|-+$/g,""),a=a.toLowerCase(),`/media/blogs/${e}/${a}`},B=e=>`/media/blogs/page/${e}`,v=V(()=>Math.ceil(I.value/N.value)),_=c([]),q=()=>{s.value>1&&s.value--},A=()=>{s.value<v.value&&s.value++},D=e=>{s.value=e},F=()=>{_.value=P.value},z=e=>Number.isInteger(e),H=V(()=>{const e=[];s.value>1&&e.push("Prev");let a=Math.max(1,s.value-Math.floor(5/2)),i=Math.min(a+5-1,v.value);i-a<4&&(a=Math.max(1,i-5+1));for(let r=a;r<=i;r++)e.push(r);return s.value<v.value&&e.push("Next"),e}),R=e=>{const o=document.createElement("div");o.innerHTML=e;const a=o.querySelectorAll("p");for(const i of a){const r=i.textContent.trim();if(r.length>50)return r.length>140?r.slice(0,144)+"...":r}return""},G=e=>e.length>5?e.length>35?e.slice(0,35)+"...":e:"";return X(()=>{k(),j()}),L(s,k),L(P,F),Y(()=>{const e=p.params;p.query,e.id!==""&&x.value!==e.id&&(s.value=1,x.value=e.id?parseInt(e.id):1,e.page!==""&&s.value!==e.page&&(s.value=e.page?parseInt(e.page):1),k())}),(e,o)=>{const a=J,i=K,r=O;return n(),u("div",null,[t("main",ae,[t("div",se,[t("div",oe,[t("div",le,[t("div",ne,[o[4]||(o[4]=t("h2",{class:"about-us-title"},"Blogs",-1)),g(a,{to:"/media",class:"btn btn-primary btn-round btn-shadow float-right"},{default:d(()=>o[0]||(o[0]=[t("i",{class:"icon-long-arrow-left"},null,-1),t("span",null,"Back to Media Center",-1)])),_:1}),o[5]||(o[5]=t("p",{class:"lead about-us-lead text-primary mb-3"}," In-Depth Insights ",-1)),h.value?(n(),y(i,{key:0,type:"loading","content-type":"Blog Posts"})):m("",!0),!_.value.length&&!h.value?(n(),y(i,{key:1,type:"empty","content-type":"Blog Posts"})):m("",!0),S.value?(n(),y(i,{key:2,type:"error","content-type":"Blog Posts"})):m("",!0),_.value.length?(n(),u("div",re,[(n(!0),u($,null,T(_.value,l=>(n(),u("div",{key:l.id,class:"entry-item col-sm-6 col-lg-4"},[t("article",ie,[t("figure",ce,[g(a,{to:w(l.id,l.name)},{default:d(()=>[g(r,{src:("assets"in e?e.assets:Z(Q))(l.main_image_path),alt:l.name,format:"webp",quality:"80",loading:"lazy",class:"w-full h-auto object-cover"},null,8,["src","alt"])]),_:2},1032,["to"])]),t("div",ue,[t("h2",ge,[g(a,{class:"text-primary",to:w(l.id,l.name)},{default:d(()=>[f(b(G(l.name)),1)]),_:2},1032,["to"])]),t("div",de,[t("div",pe,b(R(l.excerpt)),1),g(a,{class:"btn btn-primary",to:w(l.id,l.name)},{default:d(()=>o[1]||(o[1]=[f(" Read More "),t("i",{class:"icon-long-arrow-right"},null,-1)])),_:2},1032,["to"])])])])]))),128))])):m("",!0),_.value.length?(n(),u("div",me,[t("div",ve,[t("nav",_e,[t("ul",fe,[t("li",{class:C(["page-item",{disabled:s.value===1}])},[g(a,{class:"page-link page-link-prev",to:B(s.value-1),"aria-label":"Previous",tabindex:"-1","aria-disabled":"true",onClick:q},{default:d(()=>o[2]||(o[2]=[t("span",{"aria-hidden":"true"},[t("i",{class:"icon-long-arrow-left"})],-1),f(" Prev ")])),_:1},8,["to"])],2),(n(!0),u($,null,T(H.value,l=>(n(),u("li",{key:l,class:C(["page-item",{active:l===s.value}])},[z(l)?(n(),y(a,{key:0,class:"page-link",to:B(l),onClick:Pe=>D(l)},{default:d(()=>[f(b(l),1)]),_:2},1032,["to","onClick"])):m("",!0)],2))),128)),t("li",he,"of "+b(v.value),1),t("li",{class:C(["page-item",{disabled:s.value===v.value}])},[g(a,{class:"page-link page-link-next",to:B(s.value+1),"aria-label":"Next",onClick:A},{default:d(()=>o[3]||(o[3]=[f(" Next "),t("span",{"aria-hidden":"true"},[t("i",{class:"icon-long-arrow-right"})],-1)])),_:1},8,["to"])],2)])])])])):m("",!0)])])])])])])}}},Ve=U(ye,[["__scopeId","data-v-bb471dca"]]);export{Ve as default};
