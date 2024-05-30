import{_ as h}from"./ValaxyMain.vue_vue_type_style_index_0_lang-DVbs8TRx.js";import{c as m,w as e,u as c,a as u,p as i,o as g,d as o,f as t,g as l}from"./app-CP7R0JMg.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-DbgA9qPq.js";import"./YunCard.vue_vue_type_script_setup_true_lang-Iavb4A1N.js";import"./index-C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-CSg_UIf2.js";import"./index-C7yU5XnD.js";import"./post-BNXBBnB8.js";const f=t("h2",{id:"前言",tabindex:"-1"},[l("前言 "),t("a",{class:"header-anchor",href:"#前言","aria-label":'Permalink to "前言"'},"​")],-1),_=t("p",null,"闲来无事在摸MMD，然后看到了这个",-1),M=t("p",null,[t("a",{href:"https://www.bilibili.com/video/BV1r7411u7ST",target:"_blank",rel:"noreferrer"},"【PV背景配布/动作配布】九尾三妈式初音 - お気に召すまま ")],-1),v=t("p",null,"感觉这个配布的挺不错，想摸一个。",-1),w=t("p",null,"但是碰到点问题：60fps的背景是单独的视频，需要通过后期软件把人物和背景的视频叠加起来，这就要一个带有alpha通道（透明）的人物视频，去网上找了一些方法，依旧踩了不少坑。",-1),b=t("h2",{id:"rewritealpha",tabindex:"-1"},[l("RewriteAlpha "),t("a",{class:"header-anchor",href:"#rewritealpha","aria-label":'Permalink to "RewriteAlpha"'},"​")],-1),y=t("p",null,"找了很多方法，感觉就这个最简单方便。",-1),$=t("p",null,[l("首先去下载这个MME："),t("a",{href:"https://bowlroll.net/file/27004",target:"_blank",rel:"noreferrer"},"https://bowlroll.net/file/27004")],-1),D=t("p",null,"这个MME可以让你随心所欲的加花里花哨的全局MME，而不会丢失透明通道",-1),k=t("p",null,[l("下载之后"),t("strong",null,"保持乱码状态解压")],-1),R=t("p",null,[l("然后在 "),t("code",null,"RewriteAlpha"),l(" 文件夹中，往MMD里加入这个 "),t("code",null,"RewriteAlpha.x")],-1),A=t("p",null,[l("在MMD>背景>绘制附件中，把"),t("code",null,"RewriteAlpha.x"),l("放到最后一位")],-1),j=t("figure",null,[t("img",{src:"https://cdn.jsdelivr.net/gh/voidoath/photo/blog-img/20200407205316.png",alt:"",loading:"lazy",decoding:"async"})],-1),x=t("p",null,[l("然后打开MME面板，找到"),t("code",null,"alphamap"),l("栏，把skybox和stage的渲染关闭（取消勾选），人物模型的渲染开启，并勾选上RewriteAlpha.x的渲染")],-1),T=t("figure",null,[t("img",{src:"https://cdn.jsdelivr.net/gh/voidoath/photo/blog-img/20200407205639.png",alt:"",loading:"lazy",decoding:"async"})],-1),V=t("p",null,[l("这样就算完成了，导出的时候将会导出只有人物渲染，且背景是透明通道的视频，也可以先导出一张png看看效果。"),t("s",null,"别渲染了半天发现不是透明通道，别问我怎么知道的")],-1),z=t("figure",null,[t("img",{src:"https://img.asnet.top/i/2020/04/07/yrrxxj.png",alt:"",loading:"lazy",decoding:"async"})],-1),B=t("figure",null,[t("img",{src:"https://cdn.jsdelivr.net/gh/voidoath/photo/blog-img/alphammd.png",alt:"",loading:"lazy",decoding:"async"})],-1),G={__name:"mmdray-output-videos-with-alpha",setup(E,{expose:d}){const n=JSON.parse('{"title":"MMD中导出带alpha通道视频的方法","description":"","frontmatter":{"categories":"小技术","date":"2020-04-07T20:33:29.000Z","layout":"post","tags":["MMD","3D"],"title":"MMD中导出带alpha通道视频的方法"},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"RewriteAlpha","slug":"rewritealpha","link":"#rewritealpha","children":[]}],"relativePath":"pages/posts/mmdray-output-videos-with-alpha.md","path":"/home/runner/work/blog-source-valaxy/blog-source-valaxy/pages/posts/mmdray-output-videos-with-alpha.md","lastUpdated":1717031049000}'),r=u(),s=n.frontmatter||{};return r.meta.frontmatter=Object.assign(r.meta.frontmatter||{},n.frontmatter||{}),i("pageData",n),i("valaxy:frontmatter",s),globalThis.$frontmatter=s,d({frontmatter:{categories:"小技术",date:"2020-04-07T20:33:29.000Z",layout:"post",tags:["MMD","3D"],title:"MMD中导出带alpha通道视频的方法"}}),(a,N)=>{const p=h;return g(),m(p,{frontmatter:c(s)},{"main-content-md":e(()=>[f,_,M,v,w,b,y,$,D,k,R,A,j,x,T,V,z,B]),"main-header":e(()=>[o(a.$slots,"main-header")]),"main-header-after":e(()=>[o(a.$slots,"main-header-after")]),"main-nav":e(()=>[o(a.$slots,"main-nav")]),"main-content":e(()=>[o(a.$slots,"main-content")]),"main-content-after":e(()=>[o(a.$slots,"main-content-after")]),"main-nav-before":e(()=>[o(a.$slots,"main-nav-before")]),"main-nav-after":e(()=>[o(a.$slots,"main-nav-after")]),comment:e(()=>[o(a.$slots,"comment")]),footer:e(()=>[o(a.$slots,"footer")]),aside:e(()=>[o(a.$slots,"aside")]),"aside-custom":e(()=>[o(a.$slots,"aside-custom")]),default:e(()=>[o(a.$slots,"default")]),_:3},8,["frontmatter"])}}};export{G as default};