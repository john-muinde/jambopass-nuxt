import{_ as y}from"./CvcCeE8A.js";import{_ as k}from"./BUsJzUwX.js";import{p as v,a0 as w,c as d,a as t,b as x,w as N,h as e,s as u,j as c,l as C,z as L,F as B,i as D,o as a,t as M}from"./BVvk6MK8.js";import{u as S}from"./ByOEX_mC.js";import{u as R}from"./DfSMoYZe.js";import"./CXmUSqvE.js";const V={class:"main"},$={class:"page-content"},z={class:"container"},E={class:"row"},F={class:"col-lg-10 offset-lg-1"},j={id:"dflip-books",ref:"bookContainer",class:"dflip-books row media-center"},A=["id","href","data-slug","data-title","data-df-option","thumb"],O={ref:"thumbnailCanvas",style:{display:"none"}},Q={__name:"newsletters",setup(q){const{api:p}=S(),{processDocuments:_,initializeDflip:f,documents:n,loading:i,error:r,handleRouteLeave:b}=R({thumbnailScale:.4,enableDflip:!0}),m=async()=>(await p.get("/api/get-media-center")).data.newsletters;return v(async()=>{await _(m),f()}),w(b),(h,s)=>{const g=y,l=k;return a(),d("div",null,[t("main",V,[t("div",$,[t("div",z,[t("div",E,[t("div",F,[s[1]||(s[1]=t("h2",{class:"about-us-title"}," Newsletters ",-1)),x(g,{to:"/media",class:"btn btn-primary btn-round btn-shadow float-right"},{default:N(()=>s[0]||(s[0]=[t("i",{class:"icon-long-arrow-left"},null,-1),t("span",null,"Back to Media Center",-1)])),_:1}),s[2]||(s[2]=t("p",{class:"lead about-us-lead text-primary mb-1"}," Explore Our Newsletters ",-1)),s[3]||(s[3]=t("p",{class:"about-us-text mb-2"}," Click on the documents to view ",-1)),e(i)?(a(),u(l,{key:0,type:"loading","content-type":"NewsLetters"})):c("",!0),!e(n).length&&!e(i)&&e(r)==null?(a(),u(l,{key:1,type:"empty","content-type":"NewsLetters"})):c("",!0),e(r)&&!e(i)?(a(),u(l,{key:2,type:"error","error-sub-message":e(r).message,"content-type":"NewsLetters",onRetry:m},null,8,["error-sub-message"])):c("",!0),C(t("div",j,[(a(!0),d(B,null,D(e(n),o=>(a(),d("a",{id:`df_${o.id}`,key:o.id,href:`/media/newsletters#${o.slug}/`,class:"_df_thumb","data-slug":o.slug,"data-title":o.name,"data-df-option":`df_option_${o.id}`,thumb:o.thumb},M(o.name),9,A))),128))],512),[[L,e(n).length]]),t("canvas",O,null,512)])])])])])])}}};export{Q as default};
