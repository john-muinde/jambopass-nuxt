import{_ as mt}from"./B1FfluCu.js";import{_ as ut}from"./B0UgXDFR.js";import{_ as pt}from"./Coa82mGU.js";import{e as G,a as _t}from"./CalqJLeG.js";import{a as u}from"./DrkG6YK4.js";import{_ as vt,u as ht,r as g,g as gt,f as bt,s as K,m as ft,c as r,a as t,b as h,w as d,h as o,k as X,F as b,j as f,t as y,x as yt,o as n,d as k,q as Y,y as $,n as R,i as Z,z as tt}from"./ChtoClap.js";import{N as kt}from"./cvyKjYX3.js";import{Q as wt,u as Ct}from"./CJGLgSfq.js";import{u as et}from"./D-80TVpf.js";import{u as Lt,r as st}from"./_XJuyIw5.js";import{u as xt}from"./D-NawCb1.js";import"./DDSxoUa3.js";import"./BosuxZz1.js";const Tt={class:"main"},Mt={"aria-label":"breadcrumb",class:"breadcrumb-nav border-0 mb-0"},jt={class:"container d-flex align-items-center"},Ht={class:"breadcrumb"},Nt={class:"breadcrumb-item"},Rt={key:0,class:"breadcrumb-item"},zt={class:"breadcrumb-item"},Dt={class:"breadcrumb-item active","aria-current":"page"},$t={class:"page-content mt-0"},St={class:"container"},At={key:0,class:"product-error-state"},It={class:"row justify-content-center"},Ut={class:"col-md-8 text-center py-5"},Bt={class:"error-actions"},Qt={key:1,class:"product-details-top"},Vt={class:"row"},qt={class:"col-md-5"},Et={class:"product-gallery"},Ft={class:"product-main-image"},Ot={id:"product-zoom-gallery",class:"product-image-gallery max-col-6"},Pt=["data-image","data-zoom-image","onMouseover"],Jt=["src","alt"],Wt={class:"product-gallery-shimmer"},Gt={class:"thumbnail-container"},Kt={class:"col-md-7"},Xt={class:"product-details"},Yt={class:"header text-primary"},Zt=["innerHTML"],te={key:0,class:"qr_section"},ee=["src"],se={class:"product-details-action product-details-sheffield mt-2"},ae=["disabled"],oe={class:"product-details-tab mt-2"},ie={class:"nav nav-pills justify-content-left mobile-description",role:"tablist"},ne={class:"nav-item"},re={class:"nav-item"},le={class:"tab-content"},de={class:"tab-pane fade active show"},ce={class:"product-desc-content"},me=["innerHTML"],ue={class:"product-desc-content"},pe=["innerHTML"],_e={class:"product-details-shimmer"},ve={class:"tabs-shimmer mt-4"},he={__name:"[...slug]",async setup(ge){let z,Q;const p=ht(),{api:at}=et(),{createProductSchema:ot}=Ct(),S=g(!1),V=g(0),A=g(""),I=g(0),U=g(null),_=g("description"),{data:a,pending:be,error:it}=([z,Q]=gt(async()=>Lt(`product-${p.params.id}`,async()=>{try{return(await at.get("/api/get-product",{params:{product_id:p.params.id}})).data.data}catch{throw new Error("Failed to load product data")}},{server:!0,lazy:!1,immediate:!0})),z=await z,Q(),z),nt=async()=>{try{await st(`product-${p.params.id}`)}catch{}},{API_URL:q}=et();xt(()=>{var e,l,D,w,C,L,x,T,M,j,i;if(!a.value)return{};const s=ot(a.value);return{title:(e=a.value)==null?void 0:e.name,meta:[{name:"description",content:((D=(l=a.value)==null?void 0:l.short_description)==null?void 0:D.replace(/<[^>]*>/g,""))||""},{property:"og:title",content:(w=a.value)==null?void 0:w.name},{property:"og:description",content:((L=(C=a.value)==null?void 0:C.short_description)==null?void 0:L.replace(/<[^>]*>/g,""))||""},{property:"og:image",content:u((x=a.value)==null?void 0:x.main_image_path)},{property:"og:url",content:q+p.fullPath},{property:"og:type",content:"product"},{property:"twitter:title",content:(T=a.value)==null?void 0:T.name},{property:"twitter:description",content:((j=(M=a.value)==null?void 0:M.short_description)==null?void 0:j.replace(/<[^>]*>/g,""))||""},{property:"twitter:image",content:u((i=a.value)==null?void 0:i.main_image_path)},{property:"twitter:url",content:q+p.fullPath}],script:[{type:"application/ld+json",children:JSON.stringify(s)}]}});const E=()=>{const s=wt(0,"L");s.addData(p.fullPath),s.make(),U.value=s.createDataURL()},F=()=>{var s;(s=a.value)!=null&&s.product_images&&(O.value=a.value.product_images.map(e=>u(e.name)),V.value=I.value,S.value=!0)},rt=()=>{S.value=!1},lt=(s,e)=>{A.value=s,I.value=e},dt=s=>"/"+s.split("/")[0],ct=s=>s.split("/")[0].toUpperCase(),O=bt(()=>{var s,e;return((e=(s=a.value)==null?void 0:s.product_images)==null?void 0:e.map(l=>u(l.name)))||[]});return K(()=>p.params.id,async(s,e)=>{s!==e&&await st(`product-${s}`)}),K(()=>a.value,s=>{var e;((e=s==null?void 0:s.product_images)==null?void 0:e.length)>0&&(A.value=s.product_images[0].name),E()},{immediate:!0}),ft(()=>{E()}),(s,e)=>{var C,L,x,T,M,j;const l=mt,D=ut,w=pt;return n(),r("main",Tt,[t("nav",Mt,[t("div",jt,[t("ol",Ht,[t("li",Nt,[h(l,{to:"/"},{default:d(()=>e[4]||(e[4]=[k("HOME")])),_:1})]),(C=o(a))!=null&&C.categories_json&&((L=o(a))==null?void 0:L.categories_json.length)>0&&((x=o(a))!=null&&x.categories_json[0].parent_name_with_slashes)?(n(),r("li",Rt,[h(l,{to:dt((T=o(a))==null?void 0:T.categories_json[0].parent_name_with_slashes)},{default:d(()=>{var i;return[k(y(ct((i=o(a))==null?void 0:i.categories_json[0].parent_name_with_slashes)),1)]}),_:1},8,["to"])])):X("",!0),t("li",zt,[(n(!0),r(b,null,f((M=o(a))==null?void 0:M.categories_json,i=>{var c;return n(),Y(l,{key:i.id,to:("getCategoryLink"in s?s.getCategoryLink:o(G))(i.id,i.name,1,(c=o(a))==null?void 0:c.categories_json[0].parent_name_with_slashes)},{default:d(()=>[k(y(i.name),1)]),_:2},1032,["to"])}),128))]),t("li",Dt,y((j=o(a))==null?void 0:j.name),1)])])]),t("div",$t,[t("div",St,[o(it)?(n(),r("div",At,[t("div",It,[t("div",Ut,[e[6]||(e[6]=yt('<div class="error-icon mb-4" data-v-9f56db37><i class="icon-exclamation-circle text-danger" style="font-size:3rem;" data-v-9f56db37></i></div><h2 class="error-title mb-3" data-v-9f56db37>Unable to Load Product</h2><p class="error-message text-muted mb-4" data-v-9f56db37> We&#39;re having trouble loading this product&#39;s information. This might be because: </p><ul class="error-reasons text-left mb-4 mx-auto" style="max-width:400px;" data-v-9f56db37><li data-v-9f56db37>The product may no longer be available</li><li data-v-9f56db37>There might be a temporary connection issue</li><li data-v-9f56db37>The product URL might be incorrect</li></ul>',4)),t("div",Bt,[t("button",{class:"btn btn-primary me-3",onClick:nt}," Try Again "),h(l,{to:"/",class:"btn btn-outline-primary whitespace-nowrap"},{default:d(()=>e[5]||(e[5]=[k(" Return to Homepage ")])),_:1})]),e[7]||(e[7]=t("p",{class:"mt-4 small text-muted"}," If this problem persists, please contact our support team ",-1))])])])):(n(),r("div",Qt,[t("div",Vt,[t("div",qt,[h(w,null,{default:d(()=>{var i,c;return[t("div",Et,[t("figure",Ft,[h(D,{id:"product-zoom",src:("assets"in s?s.assets:o(u))(A.value),alt:(i=o(a))==null?void 0:i.name,style:{display:"grid","max-width":"100%","max-height":"350px","min-height":"350px",height:"auto","margin-left":"auto","margin-right":"auto",width:"auto"},onClick:F},null,8,["src","alt"]),t("a",{id:"btn-product-gallery",href:"#",class:"btn-product-gallery",onClick:$(F,["prevent"])},e[8]||(e[8]=[t("i",{class:"icon-arrows"},null,-1)]))]),t("div",null,[h(o(kt),{"esc-disabled":"",visible:S.value,imgs:O.value,index:V.value,onHide:rt},null,8,["visible","imgs","index"])]),t("div",Ot,[(n(!0),r(b,null,f((c=o(a))==null?void 0:c.product_images,(m,H)=>{var N;return n(),r("a",{key:m.id,class:R(["product-gallery-item",{active:H===I.value}]),href:"#","data-image":("assets"in s?s.assets:o(u))(m.name),"data-zoom-image":("assets"in s?s.assets:o(u))(m.name),onClick:e[0]||(e[0]=$(()=>{},["prevent"])),onMouseover:B=>lt(m.name,H)},[t("img",{src:("assets"in s?s.assets:o(u))(m.name),alt:(N=o(a))==null?void 0:N.name},null,8,Jt)],42,Pt)}),128))])])]}),fallback:d(()=>[t("div",Wt,[e[9]||(e[9]=t("div",{class:"main-image-shimmer shimmer"},null,-1)),t("div",Gt,[(n(),r(b,null,f(4,i=>t("div",{class:"thumbnail-shimmer shimmer",key:i})),64))])])]),_:1})]),t("div",Kt,[h(w,null,{default:d(()=>{var i,c,m,H,N,B,P,J;return[t("div",Xt,[t("h1",Yt,y((i=o(a))==null?void 0:i.name),1),t("div",{class:"short_description",innerHTML:(c=o(a))==null?void 0:c.short_description},null,8,Zt),t("p",null,[e[10]||(e[10]=t("span",null,"Brand : ",-1)),k(" "+y((m=o(a))==null?void 0:m.brand_name),1)]),e[13]||(e[13]=t("span",null,"Category : ",-1)),(n(!0),r(b,null,f((H=o(a))==null?void 0:H.categories_json,v=>{var W;return n(),Y(l,{key:v.id,style:{"font-weight":"500"},to:("getCategoryLink"in s?s.getCategoryLink:o(G))(v.id,v.name,1,(W=o(a))==null?void 0:W.categories_json[0].parent_name_with_slashes)},{default:d(()=>[k(y(v.name),1)]),_:2},1032,["to"])}),128)),U.value?(n(),r("div",te,[e[11]||(e[11]=t("small",{class:"mb-1"},"Product QR",-1)),t("img",{style:{width:"120px"},src:U.value,alt:"QR Code"},null,8,ee)])):X("",!0),t("div",se,[t("button",{type:"button",class:R(["btn-product btn-cart",{"disabled cursor-not-allowed":!((N=o(a))!=null&&N.id)}]),disabled:!((B=o(a))!=null&&B.id),onClick:e[1]||(e[1]=v=>("addToCart"in s?s.addToCart:o(_t))(o(a)))},e[12]||(e[12]=[t("span",null,"Add to Cart",-1)]),10,ae)]),t("div",oe,[t("ul",ie,[t("li",ne,[t("a",{class:R(["nav-link active",{active:_.value==="description"}]),href:"#",onClick:e[2]||(e[2]=$(v=>_.value="description",["prevent"]))},"Description",2)]),t("li",re,[t("a",{class:R(["nav-link",{active:_.value==="specs"}]),href:"#",onClick:e[3]||(e[3]=$(v=>_.value="specs",["prevent"]))},"Technical Specifications",2)])]),t("div",le,[Z(t("div",de,[t("div",ce,[t("div",{innerHTML:(P=o(a))==null?void 0:P.description},null,8,me)])],512),[[tt,_.value==="description"]]),Z(t("div",{class:R(["tab-pane fade",{"active show":_.value==="specs"}])},[t("div",ue,[t("div",{innerHTML:(J=o(a))==null?void 0:J.technical_specification},null,8,pe)])],2),[[tt,_.value==="specs"]])])])])]}),fallback:d(()=>[t("div",_e,[e[14]||(e[14]=t("div",{class:"shimmer title-shimmer mb-4"},null,-1)),(n(),r(b,null,f(3,i=>t("div",{class:"shimmer text-shimmer mb-3",key:i})),64)),e[15]||(e[15]=t("div",{class:"shimmer button-shimmer mt-4"},null,-1)),t("div",ve,[(n(),r(b,null,f(2,i=>t("div",{class:"shimmer tab-shimmer",key:i})),64))])])]),_:1})])])]))])])])}}},ze=vt(he,[["__scopeId","data-v-9f56db37"]]);export{ze as default};
