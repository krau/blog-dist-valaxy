import{g as h,h as $,X as x,W as f,o as a,j as r,b as o,t as m,l as n,a as c,q as S,F as z,k as B,a0 as P,n as k,c as d,u as V,E as L,B as T,ao as M,ad as j,ap as F,w as g,e as y,r as N,ac as U}from"./app-70b88bc3.js";import{a as W,b as q,_ as A}from"./YunPostMeta.vue_vue_type_style_index_0_lang-dbe17aba.js";const H={class:"post-copyright"},R={class:"post-copyright-author"},E={key:0,class:"post-copyright-link"},D=["href"],I={class:"post-copyright-license"},O=["innerHTML"],Q=h({__name:"ValaxyCopyright",props:{url:{default:""}},setup(v){const{t:e,locale:s}=$(),t=x(),l=t.value.license.type==="zero"?"1.0":"4.0",_=t.value.license.type==="zero"?"publicdomain":"licenses",p=f(()=>{const u=t.value.license.language?t.value.license.language:s.value==="zh-CN"?"zh":"en";return`https://creativecommons.org/${_}/${t.value.license.type}/${l}/deed.${u}`}),i=f(()=>e("post.copyright.license_content",[`<a href="${p.value}" target="_blank" rel="noopener" title="CC ${`${t.value.license.type.toUpperCase()} ${l}`} ">CC ${t.value.license.type.toUpperCase()}</a>`]));return(u,C)=>(a(),r("ul",H,[o("li",R,[o("strong",null,m(n(e)("post.copyright.author")+n(e)("symbol.colon")),1),o("span",null,m(n(t).author.name),1)]),u.url?(a(),r("li",E,[o("strong",null,m(n(e)("post.copyright.link")+n(e)("symbol.colon")),1),o("a",{href:u.url},m(u.url),9,D)])):c("v-if",!0),o("li",I,[o("strong",null,m(n(e)("post.copyright.license_title")+n(e)("symbol.colon")),1),o("span",{innerHTML:i.value},null,8,O)])]))}});const X={class:"yun-sponsor-container flex-center flex-col"},G=["title"],J=o("div",{"i-ri-heart-line":""},null,-1),K=[J],Z={key:0,class:"sponsor-description",mb:"4",text:"sm"},ee={class:"flex justify-around"},te=["href"],ne=["src","title"],oe=h({__name:"YunSponsor",setup(v){const{t:e}=$(),s=x(),t=S(!1),l=f(()=>{var _;return((_=s.value.sponsor)==null?void 0:_.title)??e("reward.donate")});return(_,p)=>(a(),r("div",X,[o("button",{class:"sponsor-button yun-icon-btn shadow hover:shadow-md",title:l.value,text:"red-400",onClick:p[0]||(p[0]=i=>t.value=!t.value)},K,8,G),o("div",{class:k(["qrcode-container qrcode flex-center flex-col",t.value&&"show"]),m:"y-4"},[n(s).sponsor.description?(a(),r("div",Z,m(n(s).sponsor.description),1)):c("v-if",!0),o("div",ee,[(a(!0),r(z,null,B(n(s).sponsor.methods,(i,u)=>(a(),r("a",{key:u,class:"flex-center flex-col animate-iteration-1 animate-fade-in",href:i.url,target:"_blank",style:P(`color:${i.color}`)},[o("img",{class:"sponsor-method-img",border:"~ rounded",p:"1",loading:"lazy",src:i.url,title:i.name},null,8,ne),o("div",{text:"xl",m:"2",class:k(i.icon)},null,2)],12,te))),128))])],2)]))}});const se={class:"inline-flex",text:"sm",py:"1"},ae={key:1,mx:"2"},le=h({__name:"YunPostCategoriesAndTags",props:{frontmatter:{}},setup(v){return(e,s)=>{const t=W,l=q;return a(),r("div",se,[e.frontmatter.categories?(a(),d(t,{key:0,categories:e.frontmatter.categories},null,8,["categories"])):c("v-if",!0),e.frontmatter.categories&&e.frontmatter.tags?(a(),r("span",ae,"-")):c("v-if",!0),e.frontmatter.tags?(a(),d(l,{key:2,tags:e.frontmatter.tags},null,8,["tags"])):c("v-if",!0)])}}}),re={key:0,flex:"~",text:"sm",py:"1"},ie=["title"],ce=o("div",{"inline-flex":"","i-ri-eye-line":""},null,-1),ue=["data-path"],_e=["title"],pe=o("div",{"inline-flex":"","i-ri-chat-4-line":""},null,-1),me=["data-path"],de=h({__name:"YunWalineMeta",setup(v){const e=V(),s=L(),t=f(()=>s.value.addons["valaxy-addon-waline"]),{t:l}=$();return(_,p)=>t.value&&t.value.options?(a(),r("div",re,[t.value.options.pageview?(a(),r("div",{key:0,"inline-flex":"",justify:"center",items:"center",mx:"2",title:n(l)("post.pageview_count")},[ce,o("span",{"ml-1":"","inline-flex":"",class:"waline-pageview-count","data-path":n(e).path},null,8,ue)],8,ie)):c("v-if",!0),t.value.options.comment?(a(),r("div",{key:1,"inline-flex":"",justify:"center",items:"center",mx:"2",title:n(l)("post.comment_count")},[pe,o("span",{"ml-1":"","inline-flex":"",class:"waline-comment-count","data-path":n(e).path},null,8,me)],8,_e)):c("v-if",!0)])):c("v-if",!0)}}),ve=h({__name:"post",setup(v){const e=x(),s=T(),t=M(),l=f(()=>typeof s.value.sponsor=="boolean"?s.value.sponsor:e.value.sponsor.enable);return j(F({"@type":"BlogPosting",headline:s.value.title,description:s.value.description,author:[{name:e.value.author.name,url:e.value.author.link}]})),(_,p)=>{const i=A,u=de,C=le,b=oe,w=Q,Y=U;return a(),d(Y,null,{"main-header-after":g(()=>[y(i,{frontmatter:n(s)},null,8,["frontmatter"]),y(u),y(C,{frontmatter:n(s)},null,8,["frontmatter"])]),"main-content-after":g(()=>[l.value?(a(),d(b,{key:0,m:"t-6"})):c("v-if",!0),n(s).copyright||n(e).license.enabled?(a(),d(w,{key:1,url:n(t),m:"y-4"},null,8,["url"])):c("v-if",!0)]),"aside-custom":g(()=>[N(_.$slots,"aside-custom")]),_:3})}}});export{ve as default};
