import{_ as y}from"./DdmrsCq-.js";import{_ as k}from"./BjP_6sOV.js";import{f as v,Z as C,c as d,a as t,b as B,w,i as e,j as u,k as c,l as x,v as D,F as L,p as M,o as a,t as N}from"./BhgO3_os.js";import{u as S}from"./2nxpqKD9.js";import{u as E}from"./D2XM4M9u.js";import{u as R}from"./CsROfR_-.js";import"./NMWfUHvh.js";const V={class:"main"},$={class:"page-content"},F={class:"container"},j={class:"row"},z={class:"col-lg-10 offset-lg-1"},A={id:"dflip-books",ref:"bookContainer",class:"dflip-books row media-center"},H=["id","href","data-slug","data-title","data-df-option","thumb"],O={ref:"thumbnailCanvas",style:{display:"none"}},T={__name:"brochures-and-catalogs",setup(Z){const{api:p}=S();E({title:"Brochures & Catalogs",meta:[{name:"description",content:"Explore our brochures and catalogs."}]});const{processDocuments:_,initializeDflip:f,documents:n,loading:r,error:i,handleRouteLeave:g}=R({thumbnailScale:.4,enableDflip:!0}),m=async()=>(await p.get("/api/get-media-center")).data.brochures;return v(async()=>{await _(m),f()}),C(g),(h,s)=>{const b=y,l=k;return a(),d("div",null,[t("main",V,[t("div",$,[t("div",F,[t("div",j,[t("div",z,[s[1]||(s[1]=t("h2",{class:"about-us-title"}," Brochures & Catalogs ",-1)),B(b,{to:"/media",class:"btn btn-primary btn-round btn-shadow float-right"},{default:w(()=>s[0]||(s[0]=[t("i",{class:"icon-long-arrow-left"},null,-1),t("span",null,"Back to Media Center",-1)])),_:1}),s[2]||(s[2]=t("p",{class:"lead about-us-lead text-primary mb-1"}," Explore Our Brochures & Catalogs ",-1)),s[3]||(s[3]=t("p",{class:"about-us-text mb-2"}," Click on the documents to view ",-1)),e(r)?(a(),u(l,{key:0,type:"loading","content-type":"Brochures & Catalogs"})):c("",!0),!e(n).length&&!e(r)&&e(i)==null?(a(),u(l,{key:1,type:"empty","content-type":"Brochures & Catalogs"})):c("",!0),e(i)&&!e(r)?(a(),u(l,{key:2,type:"error","error-sub-message":e(i).message,"content-type":"Brochures & Catalogs",onRetry:m},null,8,["error-sub-message"])):c("",!0),x(t("div",A,[(a(!0),d(L,null,M(e(n),o=>(a(),d("a",{id:`df_${o.id}`,key:o.id,href:`/media/brochures#${o.slug}/`,class:"_df_thumb","data-slug":o.slug,"data-title":o.name,"data-df-option":`df_option_${o.id}`,thumb:o.thumb},N(o.name),9,H))),128))],512),[[D,e(n).length]]),t("canvas",O,null,512)])])])])])])}}};export{T as default};
