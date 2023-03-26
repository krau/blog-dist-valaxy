import{_ as c}from"./ValaxyMain.vue_vue_type_style_index_0_lang-7aad2c26.js";import{_ as d,c as m,w as t,o as h,b as e,d as s,e as n,a as _,r as a,f as u,p as D}from"./app-6216bac5.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-0c49cff8.js";import"./YunCard.vue_vue_type_style_index_0_lang-383e316f.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-85380aaf.js";const g="/photo/post-pics/pasteimage-in-vs/pasteimage-in-vs_2022-07-07-09-31-48.webp",v="/photo/post-pics/pasteimage-in-vs/pasteimage-in-vs_2022-07-07-09-32-56.webp",F="/photo/post-pics/pasteimage-in-vs/pasteimage-in-vs_2022-07-07-09-35-12.webp",y="/photo/post-pics/pasteimage-in-vs/pasteimage-in-vs_2022-07-07-09-37-18.webp",f="/photo/post-pics/pasteimage-in-vs/pasteimage-in-vs_2022-07-07-09-38-09.webp",C="/photo/post-pics/pasteimage-in-vs/pasteimage-in-vs_2022-07-07-09-48-46.webp",le=JSON.parse('{"title":"在vscode里直接粘贴图片——pasteimage|vs写博客利器","description":"","frontmatter":{"categories":"小技术","date":"2022-07-07T09:16:30.000Z","layout":"post","tags":["vscode","博客","安利"],"title":"在vscode里直接粘贴图片——pasteimage|vs写博客利器","updated":"2022-07-07T09:16:30.000Z"},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"效果展示","slug":"效果展示","link":"#效果展示","children":[]},{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[{"level":3,"title":"先设情景","slug":"先设情景","link":"#先设情景","children":[]},{"level":3,"title":"教程","slug":"教程","link":"#教程","children":[]}]}],"relativePath":"pages/posts/pasteimage-in-vs.md","path":"/home/runner/work/blog-source-valaxy/blog-source-valaxy/pages/posts/pasteimage-in-vs.md","lastUpdated":1679801637000}'),i=JSON.parse('{"title":"在vscode里直接粘贴图片——pasteimage|vs写博客利器","description":"","frontmatter":{"categories":"小技术","date":"2022-07-07T09:16:30.000Z","layout":"post","tags":["vscode","博客","安利"],"title":"在vscode里直接粘贴图片——pasteimage|vs写博客利器","updated":"2022-07-07T09:16:30.000Z"},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"效果展示","slug":"效果展示","link":"#效果展示","children":[]},{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[{"level":3,"title":"先设情景","slug":"先设情景","link":"#先设情景","children":[]},{"level":3,"title":"教程","slug":"教程","link":"#教程","children":[]}]}],"relativePath":"pages/posts/pasteimage-in-vs.md","path":"/home/runner/work/blog-source-valaxy/blog-source-valaxy/pages/posts/pasteimage-in-vs.md","lastUpdated":1679801637000}'),A={name:"pages/posts/pasteimage-in-vs.md",data(){return{data:i,frontmatter:i.frontmatter}},setup(){D("pageData",i)}},b={id:"前言",tabindex:"-1"},k=e("p",null,"使用vscode写博客，要想便捷快速地在文章中插入图片，比较常见的一个做法是通过picgo+图床实现快捷键上传图片，并生成markdown格式的链接。图床常常是利用jsdelivr加速github仓库的方式搭建。 我原本也一直是这样做的，但自从jsdelivr在国内不可用之后，（再者，jsdelivr的使用规范也不允许作为图床使用）我换用了另一种方案，即本文所写，通过vs的pasteimage插件直接把图片粘贴在文章内，并保存在博客目录内。",-1),$={id:"效果展示",tabindex:"-1"},w=e("p",null,"为了突出这个插件的好用，特把效果展示提到使用教程前。",-1),x=e("p",null,"首先，截张图，或者复制一张图片",-1),E=e("p",null,[e("img",{src:g,alt:""})],-1),N=e("p",null,"然后在vscode内，使用快捷键ctrl+alt+v（可自定义）粘贴这张图片",-1),j=e("p",null,[e("img",{src:v,alt:""})],-1),I=e("p",null,"这样就完成了，粘贴到文章内的图片会保存在你设置的目录下，粘贴图片实际上是粘贴的图片路径。图片文件以{文章标题_时间}的格式命名，十分有条理。",-1),V=e("p",null,"vscode内的实际效果↓↓↓",-1),S=e("p",null,[e("img",{src:F,alt:""})],-1),T=e("p",null,"图片文件名↓↓↓",-1),P=e("p",null,[e("img",{src:y,alt:""})],-1),Z={id:"使用",tabindex:"-1"},B={id:"先设情景",tabindex:"-1"},U=e("p",null,[s("你使用vscode写博客，你的博客由hexo驱动，你的博客的根目录文件夹名是"),e("code",null,"hexo-blog-raw"),s("，你想把粘贴的图片以"),e("code",null,"文章标题_时间.png"),s("的格式命名，并保存在"),e("code",null,"hexo-blog-raw/source/photo"),s("目录下")],-1),J={id:"教程",tabindex:"-1"},O=e("p",null,"首先，在vscode的扩展商店中，搜索 paste image并安装",-1),R=e("p",null,[e("img",{src:f,alt:""})],-1),L=e("p",null,"然后，在博客根目录下，新建.vscode文件夹，用于存放vscode的工作区配置（即局部设置）",-1),M=e("p",null,"在.vscode文件夹内，新建settings.json文件，并写入以下内容并保存。（是的，配置我都帮你写好了）",-1),W=e("div",{class:"language-json"},[e("span",{class:"copy"}),e("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"    "),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C792EA"}},"pasteImage.namePrefix"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"${currentFileNameWithoutExt}_"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#89DDFF"}},",")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"    "),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C792EA"}},"pasteImage.path"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"${projectRoot}/source/photo"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#89DDFF"}},",")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"    "),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C792EA"}},"pasteImage.basePath"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"${projectRoot}/source"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#89DDFF"}},",")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"    "),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C792EA"}},"pasteImage.forceUnixStyleSeparator"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},"true,")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A6ACCD"}},"    "),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C792EA"}},"pasteImage.prefix"),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#89DDFF"}},":"),e("span",{style:{color:"#A6ACCD"}}," "),e("span",{style:{color:"#89DDFF"}},'"'),e("span",{style:{color:"#C3E88D"}},"../"),e("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),e("span",{class:"line"})])])],-1),q=e("p",null,[e("img",{src:C,alt:""})],-1),z=e("p",null,"这样就完成了。 按照如上配置后，所有配置是只在hexo-blog-raw工作区生效的，即只有在用vscode写博客文章时，以上配置才生效。",-1),G=e("p",null,"使用时，用vscode打开博客文章，用快捷键ctrl+alt+v即可插入图片到文章内。",-1);function H(o,K,Q,X,r,Y){const l=u,p=c;return h(),m(p,{frontmatter:r.frontmatter,data:r.data},{"main-content-md":t(()=>[e("h2",b,[s("前言 "),n(l,{class:"header-anchor",href:"#前言","aria-hidden":"true"},{default:t(()=>[s("#")]),_:1})]),k,_(" more "),e("h2",$,[s("效果展示 "),n(l,{class:"header-anchor",href:"#效果展示","aria-hidden":"true"},{default:t(()=>[s("#")]),_:1})]),w,x,E,N,j,I,V,S,T,P,e("h2",Z,[s("使用 "),n(l,{class:"header-anchor",href:"#使用","aria-hidden":"true"},{default:t(()=>[s("#")]),_:1})]),e("h3",B,[s("先设情景 "),n(l,{class:"header-anchor",href:"#先设情景","aria-hidden":"true"},{default:t(()=>[s("#")]),_:1})]),U,e("h3",J,[s("教程 "),n(l,{class:"header-anchor",href:"#教程","aria-hidden":"true"},{default:t(()=>[s("#")]),_:1})]),O,R,L,M,W,q,z,G,e("p",null,[s("更多的自定义配置，可参考"),n(l,{href:"https://marketplace.visualstudio.com/items?itemName=mushan.vscode-paste-image",target:"_blank",rel:"noreferrer"},{default:t(()=>[s("pasteimage官方文档")]),_:1})])]),"main-header":t(()=>[a(o.$slots,"main-header")]),"main-header-after":t(()=>[a(o.$slots,"main-header-after")]),"main-nav":t(()=>[a(o.$slots,"main-nav")]),"main-content":t(()=>[a(o.$slots,"main-content")]),"main-content-after":t(()=>[a(o.$slots,"main-content-after")]),"main-nav-before":t(()=>[a(o.$slots,"main-nav-before")]),"main-nav-after":t(()=>[a(o.$slots,"main-nav-after")]),comment:t(()=>[a(o.$slots,"comment")]),footer:t(()=>[a(o.$slots,"footer")]),aside:t(()=>[a(o.$slots,"aside")]),"aside-custom":t(()=>[a(o.$slots,"aside-custom")]),default:t(()=>[a(o.$slots,"default")]),_:3},8,["frontmatter","data"])}const ne=d(A,[["render",H]]);export{le as __pageData,ne as default};
