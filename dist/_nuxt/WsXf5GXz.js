import{u as b}from"./B63lc7iQ.js";import{r as f,c2 as A,k as v}from"./BDUxOr-D.js";function T(){let t=f({name:"",email:""});const a=f(!1),s=f({}),o=b(),u=A(),i=v({email:"",password:"",remember:!1}),l=v({name:"",email:"",password:"",password_confirmation:""}),c=async()=>{if(!a.value){a.value=!0,s.value={};try{await n("post","/login",i),await o.dispatch("auth/getUser"),showToast("success","Login successfully"),await u.push({name:"frontend.myaccount"})}catch(e){s.value=e}finally{a.value=!1}}},g=async()=>{if(!a.value){a.value=!0,s.value={};try{await n("post","/register",l),showToast("success","Registration successfully"),await u.push({name:"auth.login"})}catch(e){s.value=e}finally{a.value=!1}}},m=async()=>{if(a.value){showToast("Processing","error");return}a.value=!0,s.value={};try{const e=await n("post","/login",i);localStorage.setItem("token",e.token),localStorage.setItem("user",JSON.stringify(e.user)),await o.dispatch("auth/getUser"),showToast("Login successfully","success"),await u.push({name:"admin.dashboard"})}catch(e){s.value=e}finally{a.value=!1}},r=async()=>{if(!a.value){a.value=!0,s.value={};try{await n("post","/register",l),showToast("Registration successfully","success"),await u.push({name:"admin.dashboard"})}catch(e){s.value=e}finally{a.value=!1}}},h=async()=>{t.value=o.auth.user};return{loginForm:i,registerForm:l,validationErrors:s,processing:a,submitLogin:c,submitLoginAdmin:m,submitRegister:g,submitRegisterAdmin:r,user:t,getUser:async()=>{o.getters["auth/authenticated"]&&(await o.dispatch("auth/getUser"),await h())},logout:async()=>{if(!a.value){a.value=!0;try{await n("post","/logout"),t.value.name="",t.value.email="",o.dispatch("auth/logout"),u.push({name:"frontend.login"})}catch(e){s.value=e}finally{a.value=!1}}},logoutAdmin:async()=>{if(!a.value){a.value=!0;try{await n("post","/logout"),t.value.name="",t.value.email="",o.dispatch("auth/logout"),showToast("Logout successfully","success"),u.replace({name:"admin.login",meta:{layout:"auth"},replace:!0})}catch(e){s.value=e}finally{a.value=!1}}},getAbilities:async()=>{try{const y=await n("get","/api/abilities"),{can:d,rules:w}=new AbilityBuilder(Ability);d(y),ability.update(w)}catch(e){s.value=e}}}}const n=async(t,a,s=null,o={})=>{var i,l,c,g,m;const{logoutAdmin:u}=T();try{t==="put"&&(t="post",a+="?_method=PUT");const r=api[t](a,s,o);return((i=r.data)==null?void 0:i.data)||r.data}catch(r){const h=((c=(l=r.response)==null?void 0:l.data)==null?void 0:c.errors)||{},p=((m=(g=r.response)==null?void 0:g.data)==null?void 0:m.message)||r.message||"Something went wrong";throw h.message=p,showToast(p,"error"),r.response.status===401&&window.location.pathname.includes("admin")&&u(),h}};export{n as a,T as u};
