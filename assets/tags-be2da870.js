import{g as x,o as s,j as C,b as i,t as _,af as N,ag as V,u as A,a0 as E,m as I,h as R,B as z,as as D,Y as v,a8 as H,q as O,aj as W,$ as G,i as J,c as m,w as a,e as r,l as t,k as K,a3 as M,F as Q,a as U,ae as X}from"./app-5d529213.js";import{_ as Z}from"./YunCard.vue_vue_type_script_setup_true_lang-5be1cd61.js";import{_ as tt}from"./YunPostCollapse.vue_vue_type_style_index_0_lang-7500a24d.js";import{_ as et}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-a4e979ed.js";const st={"inline-flex":"",my:"2",p:"1",class:"post-tag cursor-pointer items-baseline leading-4"},nt={"inline-flex":""},ot={"inline-flex":"",text:"xs"},at=x({__name:"YunLayoutPostTag",props:{title:{},count:{}},setup($){return(n,p)=>(s(),C("span",st,[i("span",nt,"#"+_(n.title),1),i("span",ot,"["+_(n.count)+"]",1)]))}}),rt={class:"yun-text-light",text:"center",p:"2"},it={class:"justify-center items-end",flex:"~ wrap",gap:"1"},pt=x({__name:"tags",setup($){N([V({"@type":"CollectionPage"})]);const n=A(),p=E(),w=I(),{t:f}=R(),l=z(),{tags:g,getTagStyle:T}=D({primary:w.value.colors.primary}),o=v(()=>n.query.tag||""),P=H(),S=v(()=>P.postList.filter(e=>e.tags?typeof e.tags=="string"?e.tags===o.value:e.tags.includes(o.value):!1)),d=O(),{show:Y}=W(d);function b(c){p.push({query:{tag:c}}),Y()}const k=G(l);return(c,e)=>{const y=et,B=at,L=J("router-view"),j=tt,q=Z,F=X;return s(),m(F,null,{"main-header":a(()=>[r(y,{title:t(k)||t(f)("menu.tags"),icon:t(l).icon||"i-ri-tag-line",color:t(l).color},null,8,["title","icon","color"])]),"main-content":a(()=>[i("div",rt,_(t(f)("counter.tags",Array.from(t(g)).length)),1),i("div",it,[(s(!0),C(Q,null,K(Array.from(t(g)).sort(),([u,h])=>(s(),m(B,{key:u,title:u,count:h.count,style:M(t(T)(h.count)),onClick:lt=>b(u.toString())},null,8,["title","count","style","onClick"]))),128))]),r(L)]),"main-nav-before":a(()=>[o.value?(s(),m(q,{key:0,ref_key:"collapse",ref:d,m:"t-4",w:"full"},{default:a(()=>[r(y,{title:o.value,icon:"i-ri-hashtag"},null,8,["title"]),r(j,{w:"full",m:"b-4",p:"x-20 lt-sm:x-5",posts:S.value},null,8,["posts"])]),_:1},512)):U("v-if",!0)]),_:1})}}});export{pt as default};