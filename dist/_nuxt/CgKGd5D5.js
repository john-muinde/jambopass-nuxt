import{_ as d}from"./B1FfluCu.js";import{Z as m,c,a as s,b as p,w as u,y as g,i as n,J as l,h as t,x as b,o as f,d as v}from"./ChtoClap.js";const _={class:"page-wrapper"},w={class:"main"},x={class:"login-page bg-image pt-8 pb-8 pt-md-5 pb-md-5 pt-lg-6 pb-lg-6",style:{"background-image":"url('/assets/images/login-background.jpg')"}},k={class:"container"},h={class:"form-box"},y={class:"form-tab"},N={class:"nav nav-pills nav-fill",role:"tablist"},V={class:"nav-item"},L={class:"tab-content"},B={id:"signin-2",class:"tab-pane fade show active",role:"tabpanel","aria-labelledby":"signin-tab-2"},E={class:"form-group"},M={class:"form-group"},T={__name:"login",setup(q){const{loginForm:a,validationErrors:F,processing:I,submitLogin:e}=m();return(P,o)=>{const r=d;return f(),c("div",_,[s("main",w,[s("div",x,[s("div",k,[s("div",h,[s("div",y,[s("ul",N,[o[4]||(o[4]=s("li",{class:"nav-item"},[s("a",{id:"signin-tab-2",class:"nav-link active","data-toggle":"tab",href:"#signin-2",role:"tab","aria-controls":"signin-2","aria-selected":"false"},"Log In")],-1)),s("li",V,[p(r,{class:"nav-link",to:"/register"},{default:u(()=>o[3]||(o[3]=[v(" Register ")])),_:1})])]),s("div",L,[s("div",B,[s("form",{onSubmit:o[2]||(o[2]=g((...i)=>t(e)&&t(e)(...i),["prevent"]))},[s("div",E,[o[5]||(o[5]=s("label",{for:"singin-email-2"},"Email address *",-1)),n(s("input",{id:"singin-email-2","onUpdate:modelValue":o[0]||(o[0]=i=>t(a).email=i),type:"email",class:"form-control",required:"",autofocus:"",autocomplete:"username"},null,512),[[l,t(a).email]])]),s("div",M,[o[6]||(o[6]=s("label",{for:"singin-password-2"},"Password *",-1)),n(s("input",{id:"singin-password-2","onUpdate:modelValue":o[1]||(o[1]=i=>t(a).password=i),type:"password",class:"form-control",required:"",autocomplete:"current-password"},null,512),[[l,t(a).password]])]),o[7]||(o[7]=b('<div class="form-footer"><button type="submit" class="btn btn-outline-primary-2"><span>LOG IN</span><i class="icon-long-arrow-right"></i></button><div class="custom-control custom-checkbox"><input id="signin-remember-2" type="checkbox" class="custom-control-input"><label class="custom-control-label" for="signin-remember-2">Remember Me</label></div><a href="#" class="forgot-link">Forgot Your Password?</a></div>',1))],32)])])])])])])])])}}};export{T as default};
