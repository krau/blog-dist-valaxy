import{h as w,q as C,R as v,ad as g,l as B,r as N,o as s,k as a,f as o,t as c,u as h,F as _,m,ai as D,z as f,e as L,b as V,w as R,g as Y}from"./app-CP7R0JMg.js";const E={class:"post-collapse px-10 lt-sm:px-5",relative:""},F={w:"full",text:"center",class:"yun-text-light",p:"2"},I={class:"post-collapse-action",text:"center"},M={key:0,"i-ri-sort-desc":""},$={key:1,"i-ri-sort-asc":""},q={class:"collection-title","m-0":"",relative:""},z=["id"],P={class:"post-header",flex:"","items-center":"",relative:""},S={class:"post-meta"},T={key:0,class:"post-time",font:"mono",opacity:"80"},j={class:"post-title","inline-flex":"","items-center":"",font:"serif black"},G=w({__name:"YunPostCollapse",props:{posts:{}},setup(y){const p=y,{t:k}=C(),d=v([]),n=v({});g(()=>p.posts,()=>{n.value={},d.value=[],p.posts.forEach(t=>{if(!(t.hide&&t.hide!=="index")&&t.date){const e=Number.parseInt(f(t.date,"yyyy"));n.value[e]?n.value[e].push(t):(d.value.push(e),n.value[e]=[t])}})},{immediate:!0});const r=v(!0),x=B(()=>{const e=d.value.sort((u,i)=>i-u);return r.value?e:[...e].reverse()});return(t,e)=>{const u=N("RouterLink");return s(),a("div",E,[o("div",F,c(h(k)("counter.archives",t.posts.length)),1),o("div",I,[o("button",{class:"yun-icon-btn shadow hover:shadow-md",onClick:e[0]||(e[0]=i=>r.value=!r.value)},[r.value?(s(),a("div",M)):(s(),a("div",$))])]),(s(!0),a(_,null,m(x.value,i=>(s(),a("div",{key:i,m:"b-6"},[o("div",q,[o("h2",{id:`#archive-year-${i}`,class:"archive-year",text:"4xl",p:"y-2"},c(i),9,z)]),(s(!0),a(_,null,m(h(D)(n.value[i],r.value),(l,b)=>(s(),a("article",{key:b,class:"post-item",relative:""},[o("header",P,[o("div",S,[l.date?(s(),a("time",T,c(h(f)(l.date,"MM-dd")),1)):L("v-if",!0)]),o("h2",j,[V(u,{to:l.path||"",class:"post-title-link"},{default:R(()=>[Y(c(l.title),1)]),_:2},1032,["to"])])])]))),128))]))),128))])}}});export{G as _};
