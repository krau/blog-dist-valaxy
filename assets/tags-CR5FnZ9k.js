import{_ as M}from"./YunCard.vue_vue_type_script_setup_true_lang-BH0WA724.js";import{_ as N}from"./YunPostCollapse.vue_vue_type_style_index_0_lang-SMUmJDx1.js";import{aw as z,ax as P,h as V,o as e,k as S,f as _,t as T,af as D,ag as I,a as j,i as H,A as O,q as W,M as G,l as Y,x as J,R as K,a5 as Q,r as U,c,w as o,d as X,b as u,ah as Z,u as t,F as R,m as tt,s as et,e as st,ae as nt}from"./app-Dn2Mf4hd.js";import{_ as ot}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-Cr3bQY9D.js";import{u as at}from"./helper-Ca9rSRfG.js";function rt(f={primary:"#0078E7"}){const s=z(),m=new P("#999999"),g=new P(f.primary);return{tags:s,getTagStyle:a=>{const r=Array.from(s.value).map(([x,v])=>v.count),y=Math.max(...r),n=Math.min(...r),h=y-n,p=(a-n)/h;return{"--yun-tag-color":m.mix(g,p*100).toString(),fontSize:`${p*36+12}px`}}}}const lt={"inline-flex":"",my:"2",p:"1",class:"post-tag cursor-pointer items-baseline leading-4"},it={"inline-flex":""},ct={"inline-flex":"",text:"xs"},ut=V({__name:"YunLayoutPostTag",props:{title:{},count:{}},setup(f){return(s,m)=>(e(),S("span",lt,[_("span",it,"#"+T(s.title),1),_("span",ct,"["+T(s.count)+"]",1)]))}}),mt={class:"yun-text-light",text:"center",p:"2"},pt={class:"justify-center items-end",flex:"~ wrap",gap:"1"},xt=V({__name:"tags",setup(f){D([I({"@type":"CollectionPage"})]);const s=j(),m=H(),g=O(),{t:d}=W(),a=G(),{tags:r,getTagStyle:y}=rt({primary:g.value.colors.primary}),n=Y(()=>s.query.tag||""),h=J(),p=Y(()=>h.postList.filter(i=>i.tags?typeof i.tags=="string"?i.tags===n.value:i.tags.includes(n.value):!1)),x=K(),{show:v}=at(x);function A(l){m.push({query:{tag:l}}),v()}const B=Q(a);return(l,i)=>{const w=nt,$=ot,L=ut,b=U("RouterView"),q=N,E=M;return e(),S(R,null,[l.$slots["sidebar-child"]?(e(),c(w,{key:0},{default:o(()=>[X(l.$slots,"sidebar-child")]),_:3})):(e(),c(w,{key:1})),u(b,null,{default:o(({Component:F})=>[(e(),c(Z(F),null,{"main-header":o(()=>[u($,{title:t(B)||t(d)("menu.tags"),icon:t(a).icon||"i-ri-tag-line",color:t(a).color},null,8,["title","icon","color"])]),"main-content":o(()=>[_("div",mt,T(t(d)("counter.tags",Array.from(t(r)).length)),1),_("div",pt,[(e(!0),S(R,null,tt(Array.from(t(r)).sort(),([C,k])=>(e(),c(L,{key:C,title:C,count:k.count,style:et(t(y)(k.count)),onClick:_t=>A(C.toString())},null,8,["title","count","style","onClick"]))),128))]),u(b)]),"main-nav-before":o(()=>[n.value?(e(),c(E,{key:0,ref_key:"collapse",ref:x,m:"t-4",w:"full"},{default:o(()=>[u($,{title:n.value,icon:"i-ri-hashtag"},null,8,["title"]),u(q,{w:"full",m:"b-4",p:"x-20 lt-sm:x-5",posts:p.value},null,8,["posts"])]),_:1},512)):st("v-if",!0)]),_:2},1024))]),_:1})],64)}}});export{xt as default};
