import{u as s}from"./8wlechin.js";function u(e){if(!e)return null;const{API_URL:n}=s();return e=(o=>o.split("/").map(encodeURIComponent).join("/"))(e),`${n}/storage/${e}`}export{u as a};
