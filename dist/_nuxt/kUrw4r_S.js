import{p as _,_ as u,k as g,r as t,g as f,n as v,B as x,c as n,a,s as h,F as i,m as w,o as c,b as k,w as y,t as b}from"./BDUxOr-D.js";import"./D9TN8rRn.js";import{u as B}from"./B0i6G_qg.js";import{u as C}from"./iSt8HW-c.js";const L=_("/assets/images/homepage/cold_storage_page.jpg"),S={class:"page-wrapper"},N={class:"main"},A={class:"container",style:{"margin-top":"1px"}},R={class:"row cat-banner-row"},V={class:"col-xl-10 col-xxl-10 mt-1 slide-from-left"},$={class:"row"},F=["src"],I={class:"cat-block-title"},M={__name:"index",setup(T){B({title:"Cold Room",meta:[{name:"description",content:"We offer cold storage rooms in Kenya for sale. Get in touch with us today"},{name:"keywords",content:"Cold storage warehouse,commercial cold room,cold room panels,cold rooms for sale,cold room price,cold rooms in kenya"}]});const{api:d,API_URL:U}=C();g([]),t([]),t([]);const l=t([]),m=async()=>{try{const e=await d.get("/api/get-solutions/301",{});l.value=e.data.data}catch(e){console.error(e)}};t([]),t([]),t([]);const p=(e,s)=>{let o=s.replace(/ /g,"-").replace(/\//g,"-");return o=o.replace(/-+/g,"-"),o=o.replace(/^-+|-+$/g,""),o=o.toLowerCase(),`/cold-storage/solutions/${e}/${o}`};return f(async()=>{m(),await v()}),(e,s)=>{const o=x("router-link");return c(),n(i,null,[a("div",S,[a("main",N,[a("div",A,[a("div",R,[s[0]||(s[0]=h('<div class="col-xl-2 col-xxl-2 slide-from-right" data-v-fa0e1a96><div class="cat-banner row no-gutters" data-v-fa0e1a96><div class="col-sm-12 col-xl-12 col-xxl-12" data-v-fa0e1a96><div class="banner banner-overlay solution-image" data-v-fa0e1a96><a href="#" data-v-fa0e1a96><img src="'+L+'" alt="Banner img desc" data-v-fa0e1a96></a></div></div></div></div>',1)),a("div",V,[a("div",$,[(c(!0),n(i,null,w(l.value,r=>(c(),n("div",{key:r.id,class:"col-md-2 col-sm-4 slide-solutions"},[k(o,{class:"cat-block",to:p(r.id,r.name)},{default:y(()=>[a("figure",null,[a("span",null,[a("img",{src:"/storage/"+r.main_image_path,alt:"Category image"},null,8,F)])]),a("h3",I,b(r.name),1)]),_:2},1032,["to"])]))),128))])])])])])]),s[1]||(s[1]=a("button",{id:"scroll-top",title:"Back to Top"},[a("i",{class:"icon-arrow-up"})],-1))],64)}}},H=u(M,[["__scopeId","data-v-fa0e1a96"]]);export{H as default};
