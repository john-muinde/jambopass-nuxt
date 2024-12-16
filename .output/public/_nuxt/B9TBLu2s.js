import{_ as G}from"./DNiCKMHD.js";import{_ as J}from"./Cmx_2-sP.js";import{_ as K}from"./DJ_te2rl.js";import{a as O}from"./C6-auSY3.js";import{_ as Q,a8 as U,r as c,j as W,f as V,C as X,B as L,Y as Z,c as u,a as t,b as g,w as d,A as y,q as m,F as S,p as T,y as C,t as b,o as l,m as ee,d as f}from"./Cg6WK9Tj.js";import{u as te}from"./DTOzZtqW.js";import"./BHIiYVKw.js";const ae={class:"main"},se={class:"page-content"},oe={class:"container"},ne={class:"row"},le={class:"col-lg-10 offset-lg-1"},re={key:3,class:"row blogs-main-page-section"},ie={class:"entry entry-grid"},ce={class:"entry-media entry-gallery"},ue={class:"entry-body"},ge={class:"entry-title"},de={class:"entry-content"},pe={class:"mb-2"},me={key:4,class:"row"},ve={class:"col-md-12"},_e={"aria-label":"Page navigation"},fe={class:"pagination justify-content-center"},he={class:"page-item-total"},ye={__name:"blogs",setup(be){te({title:"Blogs | Media Center",meta:[{name:"description",content:"In-depth insights on various topics."}]});const p=U(),s=c(p.params.page?parseInt(p.params.page):1),N=c(9),I=c(0),P=c([]),k=c(p.params.id?parseInt(p.params.id):1),$=c([]),h=c(!1),q=c(null),{api:M}=W(),x=async()=>{h.value=!0;try{const e=await M.get("/api/get-blogs",{params:{page:s.value,per_page:N.value,category_id:k.value}});P.value=e.data.data,I.value=e.data.total}catch(e){e.value=e,console.error(e)}finally{h.value=!1}},E=async()=>{try{const e=await M.get("/api/get-blog-sidebar",{});$.value=e.data.other_blogs}catch(e){console.error(e)}},w=(e,o)=>{let a=o.replace(/ /g,"-").replace(/\//g,"-");return a=a.replace(/-+/g,"-"),a=a.replace(/^-+|-+$/g,""),a=a.toLowerCase(),`/media/blogs/${e}/${a}`},B=e=>`/media/blogs/page/${e}`,v=V(()=>Math.ceil(I.value/N.value)),_=c([]),j=()=>{s.value>1&&s.value--},A=()=>{s.value<v.value&&s.value++},D=e=>{s.value=e},F=()=>{_.value=P.value},z=e=>Number.isInteger(e),H=V(()=>{const e=[];s.value>1&&e.push("Prev");let a=Math.max(1,s.value-Math.floor(5/2)),i=Math.min(a+5-1,v.value);i-a<4&&(a=Math.max(1,i-5+1));for(let r=a;r<=i;r++)e.push(r);return s.value<v.value&&e.push("Next"),e}),R=e=>{const o=document.createElement("div");o.innerHTML=e;const a=o.querySelectorAll("p");for(const i of a){const r=i.textContent.trim();if(r.length>50)return r.length>140?r.slice(0,144)+"...":r}return""},Y=e=>e.length>5?e.length>35?e.slice(0,35)+"...":e:"";return X(()=>{x(),E()}),L(s,x),L(P,F),Z(()=>{const e=p.params;p.query,e.id!==""&&k.value!==e.id&&(s.value=1,k.value=e.id?parseInt(e.id):1,e.page!==""&&s.value!==e.page&&(s.value=e.page?parseInt(e.page):1),x())}),(e,o)=>{const a=G,i=J,r=K;return l(),u("div",null,[t("main",ae,[t("div",se,[t("div",oe,[t("div",ne,[t("div",le,[o[4]||(o[4]=t("h2",{class:"about-us-title"},"Blogs",-1)),g(a,{to:"/media",class:"btn btn-primary btn-round btn-shadow float-right"},{default:d(()=>o[0]||(o[0]=[t("i",{class:"icon-long-arrow-left"},null,-1),t("span",null,"Back to Media Center",-1)])),_:1}),o[5]||(o[5]=t("p",{class:"lead about-us-lead text-primary mb-3"}," In-Depth Insights ",-1)),h.value?(l(),y(i,{key:0,type:"loading","content-type":"Blog Posts"})):m("",!0),!_.value.length&&!h.value?(l(),y(i,{key:1,type:"empty","content-type":"Blog Posts"})):m("",!0),q.value?(l(),y(i,{key:2,type:"error","content-type":"Blog Posts"})):m("",!0),_.value.length?(l(),u("div",re,[(l(!0),u(S,null,T(_.value,n=>(l(),u("div",{key:n.id,class:"entry-item col-sm-6 col-lg-4"},[t("article",ie,[t("figure",ce,[g(a,{to:w(n.id,n.name)},{default:d(()=>[g(r,{src:("assetsSync"in e?e.assetsSync:ee(O))(n.main_image_path),alt:n.name,format:"webp",quality:"80",loading:"lazy",class:"w-full h-auto object-cover"},null,8,["src","alt"])]),_:2},1032,["to"])]),t("div",ue,[t("h2",ge,[g(a,{class:"text-primary",to:w(n.id,n.name)},{default:d(()=>[f(b(Y(n.name)),1)]),_:2},1032,["to"])]),t("div",de,[t("div",pe,b(R(n.excerpt)),1),g(a,{class:"btn btn-primary",to:w(n.id,n.name)},{default:d(()=>o[1]||(o[1]=[f(" Read More "),t("i",{class:"icon-long-arrow-right"},null,-1)])),_:2},1032,["to"])])])])]))),128))])):m("",!0),_.value.length?(l(),u("div",me,[t("div",ve,[t("nav",_e,[t("ul",fe,[t("li",{class:C(["page-item",{disabled:s.value===1}])},[g(a,{class:"page-link page-link-prev",to:B(s.value-1),"aria-label":"Previous",tabindex:"-1","aria-disabled":"true",onClick:j},{default:d(()=>o[2]||(o[2]=[t("span",{"aria-hidden":"true"},[t("i",{class:"icon-long-arrow-left"})],-1),f(" Prev ")])),_:1},8,["to"])],2),(l(!0),u(S,null,T(H.value,n=>(l(),u("li",{key:n,class:C(["page-item",{active:n===s.value}])},[z(n)?(l(),y(a,{key:0,class:"page-link",to:B(n),onClick:Pe=>D(n)},{default:d(()=>[f(b(n),1)]),_:2},1032,["to","onClick"])):m("",!0)],2))),128)),t("li",he,"of "+b(v.value),1),t("li",{class:C(["page-item",{disabled:s.value===v.value}])},[g(a,{class:"page-link page-link-next",to:B(s.value+1),"aria-label":"Next",onClick:A},{default:d(()=>o[3]||(o[3]=[f(" Next "),t("span",{"aria-hidden":"true"},[t("i",{class:"icon-long-arrow-right"})],-1)])),_:1},8,["to"])],2)])])])])):m("",!0)])])])])])])}}},Me=Q(ye,[["__scopeId","data-v-0df8c30b"]]);export{Me as default};
