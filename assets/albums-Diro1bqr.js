import{h as m,o as t,c as r,w as l,f as c,u as s,t as f,v as k,k as i,F as g,m as $,q as C,N as Y,a9 as A,ai as w,aj as B,l as L,r as P,d as S,b as u,ak as V,ah as F}from"./app-D4mOEXGx.js";import{o as N}from"./index-Bj38XWP1.js";import{_ as D}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-BXjpUC3i.js";const E=["title"],I=["src","alt","on-error"],R=m({__name:"YunAlbum",props:{album:{}},setup(_){return(e,a)=>{const n=k;return t(),r(n,{class:"yun-album-list-item",to:e.album.url},{default:l(()=>[c("figure",{title:e.album.desc},[c("img",{loading:"lazy",class:"yun-album-list-cover",src:e.album.cover,alt:e.album.caption,"on-error":s(N)},null,40,I),c("figcaption",null," 「"+f(e.album.caption)+"」 ",1)],8,E)]),_:1},8,["to"])}}}),T={class:"yun-album-list"},j=m({__name:"YunAlbumList",props:{albums:{}},setup(_){return(e,a)=>{const n=R;return t(),i("div",T,[(t(!0),i(g,null,$(e.albums,o=>(t(),r(n,{key:o.url,album:o},null,8,["album"]))),128))])}}}),q={text:"center",class:"yun-text-light",p:"2"},G=m({__name:"albums",setup(_){const{t:e}=C(),a=Y(),n=A(a);w([B({"@type":"CollectionPage"})]);const o=L(()=>a.value.albums||[]);return(p,z)=>{const b=F,h=D,y=j,d=P("RouterView");return t(),i(g,null,[p.$slots["sidebar-child"]?(t(),r(b,{key:0},{default:l(()=>[S(p.$slots,"sidebar-child")]),_:3})):(t(),r(b,{key:1})),u(d,null,{default:l(({Component:v})=>[(t(),r(V(v),null,{"main-header":l(()=>[u(h,{title:s(n)||s(e)("title.album"),icon:s(a).icon||"i-ri-gallery-line",color:s(a).color,"page-title-class":s(a).pageTitleClass},null,8,["title","icon","color","page-title-class"])]),"main-content":l(()=>[c("div",q,f(s(e)("counter.albums",o.value.length)),1),u(y,{albums:o.value},null,8,["albums"]),u(d)]),_:2},1024))]),_:1})],64)}}});export{G as default};
