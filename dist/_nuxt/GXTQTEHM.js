import{_ as J}from"./DhTOu1oY.js";import{_ as K}from"./PrlIM9hS.js";import{a as O}from"./FTVK6BGx.js";import{_ as Q,a1 as U,r as c,e as V,f as W,g as L,h as X,i as Y,c as u,a as t,b as g,w as d,q as y,m,F as T,l as $,n as C,t as b,o as n,p as Z,d as f}from"./BYC8Z7Yu.js";import{u as ee}from"./C_GYCgpZ.js";import{u as te}from"./qgurdWUs.js";import"./D-KXQlIp.js";const ae={class:"main"},se={class:"page-content"},oe={class:"container"},le={class:"row"},ne={class:"col-lg-10 offset-lg-1"},re={key:3,class:"row blogs-main-page-section"},ie={class:"entry entry-grid"},ce={class:"entry-media entry-gallery"},ue={class:"entry-body"},ge={class:"entry-title"},de={class:"entry-content"},pe={class:"mb-2"},me={key:4,class:"row"},ve={class:"col-md-12"},_e={"aria-label":"Page navigation"},fe={class:"pagination justify-content-center"},he={class:"page-item-total"},ye={__name:"blogs",setup(be){ee({title:"Blogs | Media Center",meta:[{name:"description",content:"In-depth insights on various topics."}]});const p=U(),s=c(p.params.page?parseInt(p.params.page):1),I=c(9),N=c(0),P=c([]),k=c(p.params.id?parseInt(p.params.id):1),q=c([]),h=c(!1),E=c(null),{api:M}=te(),x=async()=>{h.value=!0;try{const e=await M.get("/api/get-blogs",{params:{page:s.value,per_page:I.value,category_id:k.value}});P.value=e.data.data,N.value=e.data.total}catch(e){e.value=e,console.error(e)}finally{h.value=!1}},S=async()=>{try{const e=await M.get("/api/get-blog-sidebar",{});q.value=e.data.other_blogs}catch(e){console.error(e)}},w=(e,o)=>{let a=o.replace(/ /g,"-").replace(/\//g,"-");return a=a.replace(/-+/g,"-"),a=a.replace(/^-+|-+$/g,""),a=a.toLowerCase(),`/media/blogs/${e}/${a}`},B=e=>`/media/blogs/page/${e}`,v=V(()=>Math.ceil(N.value/I.value)),_=c([]),D=()=>{s.value>1&&s.value--},F=()=>{s.value<v.value&&s.value++},j=e=>{s.value=e},z=()=>{_.value=P.value},A=e=>Number.isInteger(e),H=V(()=>{const e=[];s.value>1&&e.push("Prev");let a=Math.max(1,s.value-Math.floor(5/2)),i=Math.min(a+5-1,v.value);i-a<4&&(a=Math.max(1,i-5+1));for(let r=a;r<=i;r++)e.push(r);return s.value<v.value&&e.push("Next"),e}),R=e=>{const o=document.createElement("div");o.innerHTML=e;const a=o.querySelectorAll("p");for(const i of a){const r=i.textContent.trim();if(r.length>50)return r.length>140?r.slice(0,144)+"...":r}return""},G=e=>e.length>5?e.length>35?e.slice(0,35)+"...":e:"";return W(()=>{x(),S()}),L(s,x),L(P,z),X(()=>{const e=p.params;p.query,e.id!==""&&k.value!==e.id&&(s.value=1,k.value=e.id?parseInt(e.id):1,e.page!==""&&s.value!==e.page&&(s.value=e.page?parseInt(e.page):1),x())}),(e,o)=>{const a=Y("router-link"),i=J,r=K;return n(),u("div",null,[t("main",ae,[t("div",se,[t("div",oe,[t("div",le,[t("div",ne,[o[4]||(o[4]=t("h2",{class:"about-us-title"},"Blogs",-1)),g(a,{to:"/media",class:"btn btn-primary btn-round btn-shadow float-right"},{default:d(()=>o[0]||(o[0]=[t("i",{class:"icon-long-arrow-left"},null,-1),t("span",null,"Back to Media Center",-1)])),_:1}),o[5]||(o[5]=t("p",{class:"lead about-us-lead text-primary mb-3"}," In-Depth Insights ",-1)),h.value?(n(),y(i,{key:0,type:"loading","content-type":"Blog Posts"})):m("",!0),!_.value.length&&!h.value?(n(),y(i,{key:1,type:"empty","content-type":"Blog Posts"})):m("",!0),E.value?(n(),y(i,{key:2,type:"error","content-type":"Blog Posts"})):m("",!0),_.value.length?(n(),u("div",re,[(n(!0),u(T,null,$(_.value,l=>(n(),u("div",{key:l.id,class:"entry-item col-sm-6 col-lg-4"},[t("article",ie,[t("figure",ce,[g(a,{to:w(l.id,l.name)},{default:d(()=>[g(r,{src:("assets"in e?e.assets:Z(O))(l.main_image_path),alt:e.product.name,preset:"cover",format:"webp",quality:"80",loading:"lazy",class:"w-full h-auto object-cover"},null,8,["src","alt"])]),_:2},1032,["to"])]),t("div",ue,[t("h2",ge,[g(a,{class:"text-primary",to:w(l.id,l.name)},{default:d(()=>[f(b(G(l.name)),1)]),_:2},1032,["to"])]),t("div",de,[t("div",pe,b(R(l.excerpt)),1),g(a,{class:"btn btn-primary",to:w(l.id,l.name)},{default:d(()=>o[1]||(o[1]=[f(" Read More "),t("i",{class:"icon-long-arrow-right"},null,-1)])),_:2},1032,["to"])])])])]))),128))])):m("",!0),_.value.length?(n(),u("div",me,[t("div",ve,[t("nav",_e,[t("ul",fe,[t("li",{class:C(["page-item",{disabled:s.value===1}])},[g(a,{class:"page-link page-link-prev",to:B(s.value-1),"aria-label":"Previous",tabindex:"-1","aria-disabled":"true",onClick:D},{default:d(()=>o[2]||(o[2]=[t("span",{"aria-hidden":"true"},[t("i",{class:"icon-long-arrow-left"})],-1),f(" Prev ")])),_:1},8,["to"])],2),(n(!0),u(T,null,$(H.value,l=>(n(),u("li",{key:l,class:C(["page-item",{active:l===s.value}])},[A(l)?(n(),y(a,{key:0,class:"page-link",to:B(l),onClick:Pe=>j(l)},{default:d(()=>[f(b(l),1)]),_:2},1032,["to","onClick"])):m("",!0)],2))),128)),t("li",he,"of "+b(v.value),1),t("li",{class:C(["page-item",{disabled:s.value===v.value}])},[g(a,{class:"page-link page-link-next",to:B(s.value+1),"aria-label":"Next",onClick:F},{default:d(()=>o[3]||(o[3]=[f(" Next "),t("span",{"aria-hidden":"true"},[t("i",{class:"icon-long-arrow-right"})],-1)])),_:1},8,["to"])],2)])])])])):m("",!0)])])])])])])}}},Me=Q(ye,[["__scopeId","data-v-b2691b34"]]);export{Me as default};
