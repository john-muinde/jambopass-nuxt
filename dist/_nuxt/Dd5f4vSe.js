import{r as a,m as d,C as l,L as m,c as _,a as e,b as u,w as p,o as v,d as b}from"./ChtoClap.js";import{M as k,u as w}from"./CdqSpBO2.js";import{u as f}from"./D-NawCb1.js";const h={class:"main"},C={"aria-label":"breadcrumb",class:"breadcrumb-nav border-0 mb-0"},M={class:"container"},g={class:"breadcrumb"},E={class:"breadcrumb-item"},T={class:"page-content pb-0"},N={class:"container terms_page"},y={class:"row"},O={class:"col-lg-12"},x=["innerHTML"],B={__name:"terms-and-conditions",setup(H){f({title:"Terms and Conditions",meta:[{name:"description",content:"Our terms and conditions"}]});const{formatMarkdownContent:s}=w(),r=a(null),i=new k({html:!0,breaks:!0,linkify:!0}),o=a("");return d(async()=>{try{const t=(await l(()=>import("./CZuYlZUe.js"),[],import.meta.url)).default;o.value=i.render(t),await s(r.value)}catch(n){console.error("Error loading markdown content:",n),o.value="Error loading content. Please try again later."}}),(n,t)=>{const c=m("router-link");return v(),_("div",null,[e("main",h,[e("nav",C,[e("div",M,[e("ol",g,[e("li",E,[u(c,{to:"/"},{default:p(()=>t[0]||(t[0]=[b(" HOME ")])),_:1})]),t[1]||(t[1]=e("li",{class:"breadcrumb-item active","aria-current":"page"}," TERMS AND CONDITIONS ",-1))])])]),e("div",T,[e("div",N,[e("div",y,[e("div",O,[e("div",{ref_key:"markdownContainer",ref:r,innerHTML:o.value},null,8,x)])])])])])])}}};export{B as default};
