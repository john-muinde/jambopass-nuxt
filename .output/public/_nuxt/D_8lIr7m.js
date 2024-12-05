import{_ as se}from"./DFhTPdjK.js";import{_ as oe}from"./BBEWUK-L.js";import{c as H,g as M,a as le,b as B}from"./DVoyQByC.js";import{a as ie}from"./GLWmeCrm.js";import{u as ne,r as i,e as T,f as re,g as U,h as de,c,a as e,b as v,w as g,t as r,d as u,i as ce,v as ue,j as ve,F as w,k as x,n as $,l as m,m as Z,o as d,p as ge,A as me}from"./Bf48DDTp.js";import{u as pe}from"./8wlechin.js";import{u as _e}from"./CXF57Pwd.js";import"./BIEAgmtQ.js";const be={class:"main"},he={"aria-label":"breadcrumb",class:"breadcrumb-nav border-0 mb-0"},fe={class:"container d-flex align-items-center"},ke={class:"breadcrumb"},Ce={class:"breadcrumb-item"},ye={class:"breadcrumb-item"},Pe={class:"breadcrumb-item active","aria-current":"page"},we={class:"page-content"},xe={class:"container"},Le={class:"row"},Ne={class:"col-lg-10"},Ae={class:"toolbox"},Se={class:"toolbox-left"},Ve={class:"toolbox-info"},Me={class:"toolbox-right"},Be={class:"toolbox-sort"},Te={class:"select-custom"},$e={class:"products mb-3 products-section"},Ee={class:"row"},Oe={class:"product product-7 text-center"},Fe={class:"product-media"},Ie={class:"product-action"},De=["onClick"],je={class:"product-body"},ze={class:"product-cat"},qe={class:"product-title"},He={"aria-label":"Page navigation"},Ue={class:"pagination justify-content-center"},Ze={class:"page-item-total"},Ge={class:"col-lg-2 order-lg-first"},Re={class:"sidebar sidebar-shop sidebar-shop-category"},We={key:0,class:"widget widget-collapsible"},Je={id:"widget-1",class:"show"},Ke={class:"widget-body"},Qe={class:"filter-items filter-items-count"},Xe={class:"custom-control custom-checkbox"},Ye=["id","value","onChange"],et=["for"],tt={class:"item-count"},at={class:"widget widget-collapsible"},st={id:"widget-4",class:"show"},ot={class:"widget-body"},lt={class:"filter-items"},it={class:"custom-control custom-checkbox"},nt=["id","value","onChange"],rt=["for"],ht={__name:"[...slug]",setup(dt){const y=ne(),{segment:E,id:h}=y.params,O=Array.isArray(y.params.slug)?y.params.slug:[y.params.slug],G=O[0],f=O[2],{api:R}=pe(),F=i(`${H(E)} - ${H(G)}`),I=T(()=>me.find(s=>s.slug===E));_e({title:F,meta:[{name:"description",content:F}]});const l=i(f?parseInt(f):1),D=i(12),L=i(0),N=i([]),j=i(0),p=i(h?parseInt(h):1),A=i([]),z=i([]),n=i([]),_=i([]),b=i([]),P=i(""),S=async()=>{try{const s={[p.value]:_.value[p.value]||[]};_.value=s;const a={[p.value]:b.value[p.value]||[]};b.value=a;const o=await R.get("/api/get-products",{params:{page:l.value,per_page:D.value,category_id:p.value,checkedCategories:_.value,checkedBrands:b.value,selectedSortOption:P.value}});N.value=o.data.products.data,L.value=o.data.products.total,j.value=o.data.products.per_page,A.value=o.data.categories,z.value=o.data.brands,n.value=o.data.the_category}catch(s){console.error(s)}};function W(s){let a=n.value.id;a in _.value||(_.value[a]=[]);const o=_.value[a];o.includes(s)?o.splice(o.indexOf(s),1):o.push(s)}function J(s){let a=n.value.id;a in b.value||(b.value[a]=[]);const o=b.value[a];o.includes(s)?o.splice(o.indexOf(s),1):o.push(s)}function K(){document.querySelectorAll('input[type="checkbox"]').forEach(a=>{a.checked=!1}),_.value=[],b.value=[],P.value=null}const k=T(()=>Math.ceil(L.value/D.value)),q=i([]),Q=()=>{l.value>1&&l.value--},X=()=>{l.value<k.value&&l.value++},Y=s=>{l.value=s},ee=()=>{q.value=N.value},te=s=>Number.isInteger(s),ae=T(()=>{const s=[];l.value>1&&s.push("Prev");let o=Math.max(1,l.value-Math.floor(5/2)),C=Math.min(o+5-1,k.value);C-o<4&&(o=Math.max(1,C-5+1));for(let t=o;t<=C;t++)s.push(t);return l.value<k.value&&s.push("Next"),s});return re(()=>{S()}),U(l,S),U(N,ee),de(()=>{h!==""&&p.value!==h&&(l.value=1,p.value=h?parseInt(h):1,f!==""&&l.value!==f&&(l.value=f?parseInt(f):1),S())}),(s,a)=>{const o=se,C=oe;return d(),c("main",be,[e("nav",he,[e("div",fe,[e("ol",ke,[e("li",Ce,[v(o,{to:"/"},{default:g(()=>a[1]||(a[1]=[u(" HOME ")])),_:1})]),e("li",ye,[v(o,{to:`/${I.value.slug}`},{default:g(()=>[u(r(I.value.name.toUpperCase()),1)]),_:1},8,["to"])]),e("li",Pe,r(n.value.name),1)])])]),e("div",we,[e("div",xe,[e("div",Le,[e("div",Ne,[e("div",Ae,[e("div",Se,[e("div",Ve,[a[2]||(a[2]=u(" Showing ")),e("span",null,r(j.value)+" of "+r(L.value),1),a[3]||(a[3]=u(" Products "))])]),e("div",Me,[e("div",Be,[a[5]||(a[5]=e("label",{for:"sortby"},"Sort by:",-1)),e("div",Te,[ce(e("select",{id:"sortby","onUpdate:modelValue":a[0]||(a[0]=t=>P.value=t),name:"sortby",class:"form-control"},a[4]||(a[4]=[ve('<option value="">Default</option><option value="name_asc">Name A - Z</option><option value="name_desc">Name Z - A</option><option value="created_at_asc">Latest First</option><option value="created_at_desc">Oldest First</option>',5)]),512),[[ue,P.value]])])])])]),e("div",$e,[e("div",Ee,[(d(!0),c(w,null,x(q.value,t=>(d(),c("div",{key:t.id,class:"col-6 col-md-3 col-lg-2 col-xl-2"},[e("div",Oe,[e("figure",Fe,[v(o,{to:("getProductLink"in s?s.getProductLink:m(M))(t.id,t.name,t.model_number,n.value.name)},{default:g(()=>[v(C,{src:("assets"in s?s.assets:m(ie))(t.main_image_path),alt:t.name,format:"webp",quality:"80",loading:"lazy",class:"w-full h-auto object-cover product-image"},null,8,["src","alt"])]),_:2},1032,["to"]),a[7]||(a[7]=e("div",{class:"product-action-vertical"},null,-1)),e("div",Ie,[e("button",{type:"button",class:"btn-product btn-cart",onClick:V=>("addToCart"in s?s.addToCart:m(le))(t)},a[6]||(a[6]=[e("span",null,"Add to Cart",-1)]),8,De)])]),e("div",je,[e("div",ze,[v(o,{to:("getProductLink"in s?s.getProductLink:m(M))(t.id,t.name,t.model_number,n.value.name)},{default:g(()=>[u(r(t.product_brand.name),1)]),_:2},1032,["to"])]),e("h3",qe,[v(o,{to:("getProductLink"in s?s.getProductLink:m(M))(t.id,t.name,t.model_number,n.value.name)},{default:g(()=>[u(r(t.name),1)]),_:2},1032,["to"])]),a[8]||(a[8]=e("div",{class:"ratings-container"},null,-1))])])]))),128))])]),e("nav",He,[e("ul",Ue,[e("li",{class:$(["page-item",{disabled:l.value===1}])},[v(o,{class:"page-link page-link-prev",to:("getCategoryLink"in s?s.getCategoryLink:m(B))(n.value.id,n.value.name,l.value-1),"aria-label":"Previous",tabindex:"-1","aria-disabled":"true",onClick:Q},{default:g(()=>a[9]||(a[9]=[e("span",{"aria-hidden":"true"},[e("i",{class:"icon-long-arrow-left"})],-1),u(" Prev ")])),_:1},8,["to"])],2),(d(!0),c(w,null,x(ae.value,t=>(d(),c("li",{key:t,class:$(["page-item",{active:t===l.value}])},[te(t)?(d(),ge(o,{key:0,class:"page-link",to:("getCategoryLink"in s?s.getCategoryLink:m(B))(n.value.id,n.value.name,t),onClick:V=>Y(t)},{default:g(()=>[u(r(t),1)]),_:2},1032,["to","onClick"])):Z("",!0)],2))),128)),e("li",Ze,"of "+r(k.value),1),e("li",{class:$(["page-item",{disabled:l.value===k.value}])},[v(o,{class:"page-link page-link-next",to:("getCategoryLink"in s?s.getCategoryLink:m(B))(n.value.id,n.value.name,l.value+1),"aria-label":"Next",onClick:X},{default:g(()=>a[10]||(a[10]=[u(" Next "),e("span",{"aria-hidden":"true"},[e("i",{class:"icon-long-arrow-right"})],-1)])),_:1},8,["to"])],2)])])]),e("aside",Ge,[e("div",Re,[e("div",{class:"widget widget-clean"},[a[11]||(a[11]=e("label",null,"Filters:",-1)),e("button",{class:"btn btn-primary btn-sm sidebar-filter-clear",onClick:K}," Clean All ")]),A.value.length?(d(),c("div",We,[a[12]||(a[12]=e("h3",{class:"widget-title"},[e("a",{"data-toggle":"collapse",href:"#widget-1",role:"button","aria-expanded":"true","aria-controls":"widget-1"}," Category ")],-1)),e("div",Je,[e("div",Ke,[e("div",Qe,[(d(!0),c(w,null,x(A.value,t=>(d(),c("div",{key:t.id,class:"filter-item"},[e("div",Xe,[e("input",{id:"cat-"+t.id,type:"checkbox",class:"custom-control-input",value:t.id,onChange:V=>W(t.id)},null,40,Ye),e("label",{class:"custom-control-label",for:"cat-"+t.id},r(t.name),9,et)]),e("span",tt,r(t.category_products_count),1)]))),128))])])])])):Z("",!0),e("div",at,[a[13]||(a[13]=e("h3",{class:"widget-title"},[e("a",{href:"#widget-4",role:"button","aria-expanded":"true","aria-controls":"widget-4"}," Brand ")],-1)),e("div",st,[e("div",ot,[e("div",lt,[(d(!0),c(w,null,x(z.value,t=>(d(),c("div",{key:t.id,class:"filter-item"},[e("div",it,[e("input",{id:"brand-"+t.product_brand.id,type:"checkbox",class:"custom-control-input",value:t.product_brand.id,onChange:V=>J(t.product_brand.id)},null,40,nt),e("label",{class:"custom-control-label",for:"brand-"+t.product_brand.id},r(t.product_brand.name),9,rt)])]))),128))])])])])])])])])])])}}};export{ht as default};
