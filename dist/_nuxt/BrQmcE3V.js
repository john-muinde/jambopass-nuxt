import{_ as f}from"./Coa82mGU.js";import{_ as w}from"./B1FfluCu.js";import{u as b,g as h,r as y}from"./CalqJLeG.js";import{a as x}from"./DrkG6YK4.js";import{f as C,r as k,o as d,c as i,b as r,w as a,a as t,t as n,a1 as L,F as q,j as V,h as c,d as B,D as F}from"./ChtoClap.js";const N={class:"dropdown cart-dropdown"},R={class:"cart-count"},T={class:"dropdown-menu dropdown-menu-right"},j={class:"dropdown-cart-products"},z={class:"flex items-center space-x-4"},A=["src","alt"],P={class:"font-semibold text-gray-800"},D={class:"text-sm text-gray-500"},H={class:"text-gray-500"},I=["onClick"],M={class:"dropdown-cart-action"},J={__name:"CartComponent",setup(Q){const g=b(),u=C(()=>g.cartItems),p=k(!1),_=()=>{document.body.classList.toggle("mmenu-active"),p.value=!p.value};return(e,s)=>{const m=f,l=w;return d(),i("div",N,[r(l,{to:"/request-for-quote",class:"dropdown-toggle",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false","data-display":"static"},{default:a(()=>[s[0]||(s[0]=t("i",{class:"icon-shopping-cart"},null,-1)),r(m,null,{default:a(()=>{var o;return[t("span",R,n((o=u.value)==null?void 0:o.length),1)]}),_:1}),s[1]||(s[1]=t("span",{class:"cart-txt"},"Cart",-1))]),_:1}),t("div",T,[t("div",j,[r(m,null,{fallback:a(()=>s[2]||(s[2]=[t("div",{class:"text-center py-4"},[t("p",{class:"text-gray-500"},"Loading cart items...")],-1)])),default:a(()=>[r(L,{name:"cart-item",tag:"div",class:"space-y-3"},{default:a(()=>[(d(!0),i(q,null,V(u.value,(o,v)=>(d(),i("div",{key:o.id,class:"flex items-center justify-between bg-white shadow-sm border border-gray-100 p-4 rounded-lg hover:shadow-md transition-all duration-300"},[r(l,{to:("getProductLink"in e?e.getProductLink:c(h))(o)},{default:a(()=>[t("div",z,[t("img",{src:("assets"in e?e.assets:c(x))(o.main_image_path),alt:o.name,class:"w-16 h-16 object-cover rounded-md border"},null,8,A),t("div",null,[t("span",P,n(o.name),1),t("p",D,n(o.category),1),t("span",H,"Qty: "+n(o.quantity),1)])])]),_:2},1032,["to"]),t("button",{class:"text-red-500 hover:bg-red-100 p-2 rounded-full transition-all duration-300 group",onClick:S=>("removeFromCart"in e?e.removeFromCart:c(y))(v)},s[3]||(s[3]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 group-hover:scale-110",viewBox:"0 0 20 20",fill:"currentColor"},[t("path",{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd"})],-1)]),8,I)]))),128))]),_:1})]),_:1}),t("div",M,[r(l,{to:"/request-for-quote",class:"btn btn-primary mt-2 float-right",style:{color:"white"}},{default:a(()=>s[4]||(s[4]=[B(" Request for Quote ")])),_:1})])])]),t("button",{class:"mobile-menu-toggler",onClick:_},s[5]||(s[5]=[t("span",{class:"sr-only"},"Toggle mobile menu",-1),t("i",{class:"icon-bars"},null,-1)]))])}}},K=F("/assets/images/logo.png");export{K as _,J as a};
