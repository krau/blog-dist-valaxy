import{h as w,q as B,W as v,a8 as C,l as g,r as N,o as s,k as a,f as o,t as c,u as h,F as _,m,al as D,B as f,e as L,b as V,w as Y,g as E}from"./app-D4mOEXGx.js";const F={class:"post-collapse px-10 lt-sm:px-5",relative:""},I={w:"full",text:"center",class:"yun-text-light",p:"2"},M={class:"post-collapse-action",text:"center"},R={key:0,"i-ri-sort-desc":""},$={key:1,"i-ri-sort-asc":""},q={class:"collection-title","m-0":"",relative:""},P=["id"],S={class:"post-header",flex:"","items-center":"",relative:""},T={class:"post-meta"},W={key:0,class:"post-time",font:"mono",opacity:"80"},j={class:"post-title","inline-flex":"","items-center":"",font:"serif black"},A=w({__name:"YunPostCollapse",props:{posts:{}},setup(y){const p=y,{t:k}=B(),d=v([]),i=v({});C(()=>p.posts,()=>{i.value={},d.value=[],p.posts.forEach(t=>{if(!(t.hide&&t.hide!=="index")&&t.date){const e=Number.parseInt(f(t.date,"yyyy"));i.value[e]?i.value[e].push(t):(d.value.push(e),i.value[e]=[t])}})},{immediate:!0});const r=v(!0),x=g(()=>{const e=d.value.sort((u,n)=>n-u);return r.value?e:[...e].reverse()});return(t,e)=>{const u=N("RouterLink");return s(),a("div",F,[o("div",I,c(h(k)("counter.archives",t.posts.length)),1),o("div",M,[o("button",{class:"yun-icon-btn shadow hover:shadow-md",onClick:e[0]||(e[0]=n=>r.value=!r.value)},[r.value?(s(),a("div",R)):(s(),a("div",$))])]),(s(!0),a(_,null,m(x.value,n=>(s(),a("div",{key:n,m:"b-6"},[o("div",q,[o("h2",{id:`#archive-year-${n}`,class:"archive-year",text:"4xl",p:"y-2"},c(n),9,P)]),(s(!0),a(_,null,m(h(D)(i.value[n],r.value),(l,b)=>(s(),a("article",{key:b,class:"post-item",relative:""},[o("header",S,[o("div",T,[l.date?(s(),a("time",W,c(h(f)(l.date,"MM-dd")),1)):L("v-if",!0)]),o("h2",j,[V(u,{to:l.path||"",class:"post-title-link"},{default:Y(()=>[E(c(l.title),1)]),_:2},1032,["to"])])])]))),128))]))),128))])}}});export{A as _};