import{g as L,ai as j,u as A,N as k,q as N,h as w,aA as E,H as K,i as q,o,j as c,b as _,t as C,l,F as h,k as P,aB as U,c as b,w as y,a as x,e as p,ao as F,B as R,aC as T,ah as V,ax as D,ay as H,av as W}from"./app-75353cfc.js";import{_ as M}from"./YunCard.vue_vue_type_script_setup_true_lang-4560dbb6.js";import{_ as O}from"./YunPostCollapse.vue_vue_type_style_index_0_lang-507ab1ee.js";import{_ as G}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-3207029f.js";const J={class:"category-list-item inline-flex items-center cursor-pointer"},Q={key:0,"i-ri-folder-add-line":""},X={key:1,style:{color:"var(--va-c-primary)"},"i-ri-folder-reduce-line":""},Z={key:0},I=_("div",{"i-ri-file-text-line":""},null,-1),ee={m:"l-1",font:"serif black"},te=L({__name:"YunCategory",props:{parentKey:{},category:{},level:{},collapsable:{type:Boolean,default:!0}},setup($){const u=$,m=j(),n=A(),g=k(()=>{const e=n.query.category||"";return Array.isArray(e)?[e]:e.split("/")}),t=N(u.collapsable),{t:r}=w(),{locale:d}=w();function Y(e){const i=d.value==="zh-CN"?"zh":d.value;return e[`title_${i}`]?e[`title_${i}`]:e.title}const f=N(),{show:s}=E(f);function v(e){m.push({query:{category:e}}),s()}return K(()=>{const e=document.querySelector(".post-collapse-container");e&&(f.value=e)}),(e,i)=>{const z=q("YunCategory",!0),B=q("router-link");return o(),c(h,null,[_("li",J,[_("span",{class:"folder-action inline-flex",onClick:i[0]||(i[0]=a=>t.value=!t.value)},[t.value?(o(),c("div",Q)):(o(),c("div",X))]),_("span",{class:"category-name",m:"l-1",onClick:i[1]||(i[1]=a=>v(e.parentKey))},C(e.category.name==="Uncategorized"?l(r)("category.uncategorized"):e.category.name)+" ["+C(e.category.total)+"] ",1)]),t.value?x("v-if",!0):(o(),c("ul",Z,[(o(!0),c(h,null,P(e.category.children,(a,S)=>(o(),c("li",{key:S,class:"post-list-item",m:"l-4"},[l(U)(a)?(o(),b(z,{key:0,"parent-key":e.parentKey?`${e.parentKey}/${a.name}`:a.name,category:a,collapsable:!g.value.includes(a.name)},null,8,["parent-key","category","collapsable"])):(o(),c(h,{key:1},[a.title?(o(),b(B,{key:0,to:a.path||"",class:"inline-flex items-center"},{default:y(()=>[I,_("span",ee,C(Y(a)),1)]),_:2},1032,["to"])):x("v-if",!0)],64))]))),128))]))],64)}}}),oe=L({__name:"YunCategories",props:{categories:{},level:{default:0},collapsable:{type:Boolean,default:!0}},setup($){const u=A(),m=k(()=>{const n=u.query.category||"";return Array.isArray(n)?[n]:n.split("/")});return(n,g)=>{const t=te;return o(!0),c(h,null,P(n.categories,r=>(o(),c("ul",{key:r.name,class:"category-list",m:"l-4"},[p(t,{"parent-key":r.name,category:r,level:n.level+1,collapsable:!m.value.includes(r.name)},null,8,["parent-key","category","level","collapsable"])]))),128)}}});const ne={text:"center",class:"yun-text-light",p:"2"},ie=L({__name:"categories",setup($){const{t:u}=w(),m=F(),n=R(),g=A(),t=k(()=>g.query.category||""),r=T(),d=k(()=>m.postList.filter(s=>s.categories&&t.value!=="Uncategorized"?typeof s.categories=="string"?s.categories===t.value:s.categories.join("/").startsWith(t.value)&&s.categories[0]===t.value.split("/")[0]:!s.categories&&t.value==="Uncategorized"?s.categories===void 0:!1)),Y=V(n);return D([H({"@type":"CollectionPage"})]),(f,s)=>{const v=G,e=oe,i=q("router-view"),z=O,B=M,a=W;return o(),b(a,null,{"main-header":y(()=>[p(v,{title:l(Y)||l(u)("menu.categories"),icon:l(n).icon||"i-ri-folder-2-line",color:l(n).color},null,8,["title","icon","color"])]),"main-content":y(()=>[_("div",ne,C(l(u)("counter.categories",l(r).children.length)),1),p(e,{categories:l(r).children},null,8,["categories"]),p(i)]),"main-nav-before":y(()=>[t.value?(o(),b(B,{key:0,class:"post-collapse-container",m:"t-4",w:"full"},{default:y(()=>[p(v,{title:t.value==="Uncategorized"?l(u)("category.uncategorized"):t.value.split("/").join(" / "),icon:"i-ri-folder-open-line"},null,8,["title"]),p(z,{w:"full",m:"b-4",p:"x-20 lt-sm:x-5",posts:d.value},null,8,["posts"])]),_:1})):x("v-if",!0)]),_:1})}}});export{ie as default};