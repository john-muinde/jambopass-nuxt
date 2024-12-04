import{_ as A,r as c,e as O,g as S,o as d,c as m,a as e,d as M,t as C,F as I,l as V,n as P,j as U,K as z,m as h,a1 as G,D as J,f as H,h as K,i as Q,b,w as D,q as T,p as W,G as X}from"./BYC8Z7Yu.js";import{_ as Y}from"./DhTOu1oY.js";import{_ as Z}from"./PrlIM9hS.js";import{a as ee}from"./FTVK6BGx.js";import{u as te}from"./C_GYCgpZ.js";import{u as se}from"./qgurdWUs.js";import"./D-KXQlIp.js";const ae={key:0,class:"filter-container"},le={class:"filter-heading"},re=["value"],oe={class:"filter-content"},ne={class:"checkbox-wrapper"},ie={key:0,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"checkmark"},ce={class:"filter-label"},ue={key:0,class:"filter-count"},de={__name:"DynamicFilters",props:{items:{type:Array,required:!0},filterColumn:{type:String,required:!0},filters:{type:Array,required:!1,default:()=>[]},selectedFilters:{type:Array,required:!1,default:()=>[]},showNumbers:{type:Boolean,default:!1},searchTerm:{type:String,default:""},classes:{type:String,default:""}},emits:["update:displayedProducts"],setup(L,{emit:$}){const _=$,t=L,n=c(t.selectedFilters),N=c(t.showNumbers),v=c(t.items),f=c(t.searchTerm),p=c([]),w=c([]);t.filters.length>0&&(typeof t.filters[0]=="object"?(p.value=t.filters.map(s=>Object.keys(s)[0]),w.value=t.filters.map(s=>Object.values(s)[0])):(p.value=t.filters,w.value=t.filters)),O(()=>{var s,l,i;if(p.value.length)return p.value;if(!((s=t.items)!=null&&s.length)&&!((l=p.value)!=null&&l.length)&&!t.filterColumn)return[];if(!((i=t.items)!=null&&i.length)||!t.filterColumn)return[];p.value=[...new Set(t.items.map(y=>y[t.filterColumn]).filter(Boolean))].sort(),w.value=p.value});const x=s=>t.items.filter(l=>l[t.filterColumn]===s).length,F=s=>s.split("_").map(l=>l.charAt(0).toUpperCase()+l.slice(1)).join(" "),g=()=>{n.value.length===0?v.value=t.items:v.value=t.items.filter(s=>n.value.includes(s[t.filterColumn])),f.value&&(v.value=v.value.filter(s=>{var l,i,y;return((l=s.name)==null?void 0:l.toLowerCase().includes(f.value.toLowerCase()))||((i=s.description)==null?void 0:i.toLowerCase().includes(f.value.toLowerCase()))||((y=s.tags)==null?void 0:y.toLowerCase().includes(f.value.toLowerCase()))||s[t.filterColumn].toLowerCase().includes(f.value.toLowerCase())})),_("update:displayedProducts",{filteredData:v.value,selectedFilters:n.value})};return S(()=>t.searchTerm,s=>{f.value=s,g()}),S(()=>t.items,s=>{if(v.value=s,n.value.length>0){const l=s.filter(i=>n.value.includes(i[t.filterColumn]));_("update:displayedProducts",{filteredData:l,selectedFilters:n.value})}else _("update:displayedProducts",{filteredData:s,selectedFilters:[]})},{deep:!0}),(s,l)=>p.value.length?(d(),m("div",ae,[e("h4",le,[l[1]||(l[1]=e("span",{class:"filter-icon"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z","clip-rule":"evenodd"})])],-1)),M(" "+C(F(L.filterColumn)),1)]),e("div",{class:P(["filter-options-container",t.classes])},[(d(!0),m(I,null,V(p.value,(i,y)=>(d(),m("label",{key:i,class:P(["filter-card",{"filter-card-selected":n.value.includes(i)}])},[U(e("input",{"onUpdate:modelValue":l[0]||(l[0]=k=>n.value=k),type:"checkbox",value:i,class:"filter-checkbox",onChange:g},null,40,re),[[z,n.value]]),e("div",oe,[e("div",ne,[e("div",{class:P(["custom-checkbox",{checked:n.value.includes(i)}])},[n.value.includes(i)?(d(),m("svg",ie,l[2]||(l[2]=[e("path",{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"},null,-1)]))):h("",!0)],2),e("span",ce,C(w.value[y]),1)]),N.value?(d(),m("span",ue,C(x(i)),1)):h("",!0)])],2))),128))],2)])):h("",!0)}},pe=A(de,[["__scopeId","data-v-46647f62"]]),me={class:"main"},ve={class:"page-content"},fe={class:"container"},_e={class:"row"},ge={class:"col-lg-10 offset-lg-1 gallery-main-page-section"},ye={key:3,class:"row mt-2"},he={class:"entry entry-mask"},we={class:"entry-media entry-gallery"},Ce={class:"entry-body"},ke={class:"entry-title"},be={class:"entry-cats mt-1"},xe={style:{"background-color":"#c02434",padding:"5px"}},Pe={class:"col-lg-12 mt-3"},Le={"aria-label":"Page navigation"},$e={class:"pagination justify-content-center"},Ne=["onClick"],Fe={__name:"gallery",setup(L){te({title:"Gallery | Media Center",meta:[{name:"description",content:"Journey through the lens: Our story in pictures."}]});const{api:$}=se(),_=G(),t=J(),n=c(_.params.page?parseInt(_.params.page):1);c(12);const N=c(0),v=c([]),f=c(_.params.id?parseInt(_.params.id):1),p=c([]),w=c([]),x=c({}),F=c(["CSR","EVENT","PROJECT"]),g=c(!1),s=c(null),l=async(r=null)=>{g.value=!0,typeof r=="string"&&r.includes("http")&&(r=r.split("/api/").pop());try{const a=(await $.get(r||"/api/get-media-center-galleries",{params:{page:n.value,category_id:f.value,gallery_type:w.value}})).data;v.value=a.data,N.value=a.total,x.value={next_page_url:a.next_page_url,prev_page_url:a.prev_page_url,links:a.links},g.value=!1,k(v.value)}catch(o){o.value=o,console.error(o)}finally{g.value=!1}},i=(r,o)=>{let a=o.replace(/ /g,"-").replace(/\//g,"-");return a=a.replace(/-+/g,"-"),a=a.replace(/^-+|-+$/g,""),a=a.toLowerCase(),`/media/gallery/${r}/${a}`},y=r=>{if(r){const a=new URLSearchParams(r.split("?")[1]).get("page");a&&(n.value=parseInt(a),t.push(`/media/gallery/page/${n.value}`))}},k=r=>{p.value=r},q=({filteredData:r,selectedFilters:o})=>{k(r),o.value=o};return H(()=>{l()}),S(v,k),K(()=>{const r=_.params,o=r.id?parseInt(r.id):1,a=r.page?parseInt(r.page):1;(f.value!==o||n.value!==a)&&(f.value=o,n.value=a,l())}),(r,o)=>{var j;const a=Q("router-link"),R=pe,B=Y,E=Z;return d(),m("div",null,[e("main",me,[e("div",ve,[e("div",fe,[e("div",_e,[e("div",ge,[o[2]||(o[2]=e("h2",{class:"about-us-title"},"Gallery",-1)),b(a,{to:"/media",class:"btn btn-primary btn-round btn-shadow float-right"},{default:D(()=>o[0]||(o[0]=[e("i",{class:"icon-long-arrow-left"},null,-1),e("span",null,"Back to Media Center",-1)])),_:1}),o[3]||(o[3]=e("p",{class:"lead about-us-lead text-primary mb-3"}," Journey Through the Lens: Our Story in Pictures ",-1)),b(R,{items:v.value,"filter-column":"gallery_type",filters:F.value,"onUpdate:displayedProducts":q},null,8,["items","filters"]),g.value?(d(),T(B,{key:0,type:"loading","content-type":"gallery"})):h("",!0),!p.value.length&&!g.value?(d(),T(B,{key:1,type:"empty","content-type":"gallery"})):h("",!0),s.value?(d(),T(B,{key:2,type:"error","content-type":"gallery"})):h("",!0),p.value.length?(d(),m("div",ye,[(d(!0),m(I,null,V(p.value,u=>(d(),m("div",{key:u.id,class:"entry-item col-sm-6 col-lg-4"},[e("article",he,[e("figure",we,[b(a,{to:i(u.id,u.name)},{default:D(()=>[b(E,{src:("assets"in r?r.assets:W(ee))(u.main_image_path),alt:u.name,preset:"cover",format:"webp",quality:"80",loading:"lazy",class:"w-full h-auto object-cover"},null,8,["src","alt"])]),_:2},1032,["to"])]),e("div",Ce,[o[1]||(o[1]=e("div",{class:"entry-meta"},[e("span",{class:"meta-separator"},"|")],-1)),e("h2",ke,[b(a,{to:i(u.id,u.name)},{default:D(()=>[M(C(u.name),1)]),_:2},1032,["to"])]),e("div",be,[e("b",xe,C(u.gallery_type),1)])])])]))),128)),e("div",Pe,[e("nav",Le,[e("ul",$e,[(d(!0),m(I,null,V((j=x.value)==null?void 0:j.links,(u,Be)=>(d(),m("li",{key:u.label,class:P(["page-item",{active:u.active}])},[u.url&&Number.isInteger(Number(u.label))?(d(),m("a",{key:0,class:"page-link",onClick:X(De=>y(u.url),["prevent"])},C(u.label),9,Ne)):h("",!0)],2))),128))])])])])):h("",!0)])])])])])])}}},qe=A(Fe,[["__scopeId","data-v-ddfbf3a5"]]);export{qe as default};
