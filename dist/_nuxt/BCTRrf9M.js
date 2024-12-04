import{a as b}from"./BOnHwYNG.js";import{p as n,r as a,g as w,c as l,s as k,a as s,b as x,u as p,F as S,m as E,o as d,t as c}from"./DW93kUmu.js";import{N as A}from"./o3kK8PTG.js";import{u as C}from"./BtLpYdNM.js";import{u as F}from"./ByXv6ydl.js";const L=n("/assets/images/events/training.png"),N=n("/assets/images/events/client_demos.png"),P=n("/assets/images/events/product_launch.png"),R=n("/assets/images/events/live_cooking.png"),B=n("/assets/images/events/chef_competitions.png"),D=n("/assets/images/events/partner_training.png"),V={class:"main"},H={class:"page-content pg-white"},U={class:"mb-lg-8 pb-4"},j={class:"container-fluid pb-4 pt-4 mb-5"},I={class:"row"},O={class:"col-md-10 offset-lg-1"},T={class:"row justify-content-left"},M={class:"entry entry-grid"},$={class:"entry-media"},q=["src","onClick"],z={class:"entry-body pt-1"},G={class:"entry-title"},J={class:"entry-content text-left"},K={class:"ml-3"},Q={class:"ml-3"},W=["href"],ns={__name:"index",setup(X){C({title:"Events",meta:[{name:"description",content:"Sheffield hosts events at the Sheffield Academy and Our Facility based on the theme of experiential sessions so that you can interact with our solutions and network with like-minded industry players."},{name:"keywords",content:"Events, Sheffield, Sheffield Academy, Sheffield Solutions, Sheffield Events, Sheffield Industry Players"}]});const r=a([]),u=t=>{r.value=_+"/storage/"+t,g()},o=a(!1),v=a(0),g=()=>{v.value=0,o.value=!0},f=()=>{o.value=!1},m=a([]),{api:h,API_URL:_}=F(),y=async()=>{try{const t=await h.get("/api/get-events",{});m.value=t.data}catch(t){console.error(t)}};return w(async()=>{y()}),(t,e)=>(d(),l("main",V,[e[4]||(e[4]=k('<div class="page-content pg-white who-we-are-section pb-1"><div class="overlay"></div><div class="pt-1 mb-lg-8"><div class="container"><div class="row"><div class="col-lg-10 offset-lg-1"><h2 class="about-us-title">Events</h2><p class="lead about-us-lead text-primary mb-1"> Elevate Skills, Amplify Visibility </p></div><div class="col-lg-10 offset-lg-1"><p style="" class="text-5 about-us-p"> Sheffield hosts events at the Sheffield Academy and Our Facility based on the theme of experiential sessions so that you can interact with our solutions and network with like-minded industry players.<br> Some of the events include: </p></div><div class="col-lg-10 offset-lg-1"><div class="row justify-content-left links-container mt-3"><div class="event-item"><div class="event-image"><img src="'+L+'"></div><div class="event-text mt-2"><p>Product and Solutions Focus Business Training</p></div></div><div class="event-item"><div class="event-image"><img src="'+N+'"></div><div class="event-text mt-2"><p>Client Dedicated Demos</p></div></div><div class="event-item"><div class="event-image"><img src="'+P+'"></div><div class="event-text mt-2"><p>New Product Launches</p></div></div><div class="event-item"><div class="event-image"><img src="'+R+'"></div><div class="event-text mt-2"><p> The Rational Live Cooking sessions that take place twice a month </p></div></div><div class="event-item"><div class="event-image"><img src="'+B+'"></div><div class="event-text mt-2"><p>Chefs Competitions</p></div></div><div class="event-item"><div class="event-image"><img src="'+D+'"></div><div class="event-text mt-2"><p>Partner training and Demos</p></div></div></div></div></div></div></div></div>',1)),s("div",H,[s("div",U,[s("div",j,[s("div",I,[s("div",O,[e[3]||(e[3]=s("h2",{class:"about-us-title mb-5"},"Upcoming Events",-1)),s("div",T,[s("div",null,[x(p(A),{"esc-disabled":"",visible:o.value,imgs:r.value,index:v.value,onHide:f},null,8,["visible","imgs","index"])]),(d(!0),l(S,null,E(m.value,i=>(d(),l("div",{key:i.id,class:"col-sm-6 col-lg-4"},[s("article",M,[s("figure",$,[s("img",{style:{},src:("assets"in t?t.assets:p(b))(i.main_image_path),alt:"image desc",onClick:Y=>u(i.main_image_path)},null,8,q)]),s("div",z,[s("h2",G,c(i.name),1),s("div",J,[s("p",null,[e[0]||(e[0]=s("i",{class:"icon-map-marker"},null,-1)),s("span",K,c(i.location),1),e[1]||(e[1]=s("br",null,null,-1)),e[2]||(e[2]=s("i",{class:"icon-calendar"},null,-1)),s("span",Q,c(i.start_date),1)]),s("a",{class:"btn btn-primary btn-round mt-2 bottom-0",href:i.url,target:"_blank"}," Register ",8,W)])])])]))),128))])])])])])])]))}};export{ns as default};
