import{g as F,a9 as L,aa as N,a4 as R,a3 as V,l as j,u as q,A as E,am as I,R as d,a0 as W,m as z,ad as D,U as H,h as O,o as n,c as h,w as a,e as o,k as e,b as r,t as u,i as y,j as U,F as G,a as J,a8 as K,W as M}from"./app-fec6569f.js";import{_ as Q}from"./YunCard.vue_vue_type_script_setup_true_lang-5ea94624.js";import{_ as X}from"./YunPostCollapse.vue_vue_type_style_index_0_lang-14a3c42c.js";import{_ as Z}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-db934599.js";const ee={class:"yun-text-light",text:"center",p:"2"},te={class:"justify-center items-end",flex:"~ wrap",gap:"1"},se=["onClick"],ne={"inline-flex":""},ae={"inline-flex":"",text:"xs"},me=F({__name:"tags",setup(oe){L([N({"@type":"CollectionPage"})]);const v=R(),x=V(),C=j(),{t:m}=q(),i=E(),{tags:_,getTagStyle:w}=I({primary:C.value.colors.primary}),s=d(()=>v.query.tag||""),S=W(),b=d(()=>S.postList.filter(t=>t.tags?typeof t.tags=="string"?t.tags===s.value:t.tags.includes(s.value):!1)),p=z(),{show:k}=D(p);function T(l){x.push({query:{tag:l}}),k()}const P=H(i);return(l,t)=>{const f=Z,$=O("router-view"),B=X,Y=Q,A=K;return n(),h(A,null,{"main-header":a(()=>[o(f,{title:e(P)||e(m)("menu.tags"),icon:e(i).icon||"i-ri-tag-line",color:e(i).color},null,8,["title","icon","color"])]),"main-content":a(()=>[r("div",ee,u(e(m)("counter.tags",Array.from(e(_)).length)),1),r("div",te,[(n(!0),y(G,null,U(Array.from(e(_)).sort(),([c,g])=>(n(),y("span",{key:c,"inline-flex":"",my:"2",class:"post-tag cursor-pointer items-baseline leading-4",style:M(e(w)(g.count)),p:"1",onClick:re=>T(c.toString())},[r("span",ne,"#"+u(c),1),r("span",ae,"["+u(g.count)+"]",1)],12,se))),128))]),o($)]),"main-nav-before":a(()=>[s.value?(n(),h(Y,{key:0,ref_key:"collapse",ref:p,m:"t-4",w:"full"},{default:a(()=>[o(f,{title:s.value,icon:"i-ri-hashtag"},null,8,["title"]),o(B,{w:"full",m:"b-4",p:"x-20 lt-sm:x-5",posts:b.value},null,8,["posts"])]),_:1},512)):J("v-if",!0)]),_:1})}}});export{me as default};
