import{d as p,k as a,O as b,o as s,b as l,g as t,Y as w,ac as C,x as k,ad as _,h as g,v as V,i as T,f as A,ae as D,P}from"./app-DYwnrrn0.js";import{r as m}from"./ValaxyMain.vue_vue_type_style_index_0_lang-BpGoxE0S.js";import{u as E}from"./decrypt-O8g8koKi.js";const I={key:0,"w-full":"","pt-14":"","pb-10":""},N={class:"decrypt-password-container w-full sm:w-1/2","flex-center":"","m-auto":"",relative:""},W={key:0,class:"-bottom-6",absolute:"","text-xs":"",op:"50"},B={key:1},K=p({__name:"ValaxyDecrypt",props:{encryptedContent:{}},setup(v){const f=v,r=a(""),n=a(""),i=a(!1),{decrypt:y}=E();async function u(){const o=f.encryptedContent;if(o)try{const e=await y(r.value,o);n.value=e||"",setTimeout(()=>{m()},16)}catch{i.value=!0}}function h(){n.value="",r.value="",setTimeout(()=>{m()},16)}const x=p({name:"ValaxyDeprecatedContent",props:{html:String},render(){const o=`<div>${this.html}</div>`;return D({setup:()=>({frontmatter:P()}),template:o})}}),c=a(!1);return b(()=>{location.protocol!=="https:"&&(c.value=!0)}),(o,e)=>(s(),l("div",null,[n.value?(s(),l("div",B,[T(A(x),{html:n.value},null,8,["html"]),t("div",{"w-full":"","text-center":"","mt-8":""},[t("button",{"m-auto":"",class:"btn","font-bold":"",onClick:h}," Encrypt Again ")])])):(s(),l("div",I,[t("div",N,[w(t("input",{"onUpdate:modelValue":e[0]||(e[0]=d=>r.value=d),"w-full":"",border:"~ solid dark:dark-100","pl-5":"","pr-11":"","py-3":"","rounded-full":"","hover:shadow":"",transition:"",type:"password",placeholder:"Enter password",class:k(i.value&&"border-red"),onInput:e[1]||(e[1]=d=>i.value=!1),onKeyup:_(u,["enter"])},null,34),[[C,r.value]]),t("div",{"cursor-pointer":"",absolute:"","text-2xl":"","i-ri-arrow-right-circle-line":"","right-3":"","text-gray":"","hover:text-black":"",onClick:u}),c.value?(s(),l("div",W,e[2]||(e[2]=[t("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API",target:"_blank"},[t("span",null,"Web Crypto API")],-1),g(" Only works in HTTPS ")]))):V("v-if",!0)])]))]))}});export{K as _};