import{_ as i}from"./ValaxyMain.vue_vue_type_style_index_0_lang-c3230b2d.js";import{_ as d,u as y,p as h,c as F,w as e,o as m,b as l,d as s,e as n,a as E,r as a,f as u}from"./app-656b4539.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-3fd30411.js";import"./YunCard.vue_vue_type_script_setup_true_lang-8bbaf3ee.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-9e30d9ba.js";import"./index-463abdac.js";const C="/photo/post-pics/acmessl/acmessl1.webp",dl=JSON.parse('{"title":"使用ACME脚本申请并配置SSL证书","description":"","frontmatter":{"categories":"小技术","date":"2022-04-22T16:48:01.000Z","layout":"post","tags":["SSL"],"title":"使用ACME脚本申请并配置SSL证书","updated":"2022-04-22T16:48:01.000Z"},"headers":[{"level":2,"title":"前言|为什么选择ACME方法","slug":"前言-为什么选择acme方法","link":"#前言-为什么选择acme方法","children":[]},{"level":2,"title":"准备工作与脚本安装","slug":"准备工作与脚本安装","link":"#准备工作与脚本安装","children":[{"level":3,"title":"安装","slug":"安装","link":"#安装","children":[]}]},{"level":2,"title":"证书申请","slug":"证书申请","link":"#证书申请","children":[{"level":3,"title":"监听80端口申请证书","slug":"监听80端口申请证书","link":"#监听80端口申请证书","children":[]},{"level":3,"title":"通过Nginx服务申请","slug":"通过nginx服务申请","link":"#通过nginx服务申请","children":[]}]},{"level":2,"title":"安装证书到指定路径","slug":"安装证书到指定路径","link":"#安装证书到指定路径","children":[]},{"level":2,"title":"善后工作","slug":"善后工作","link":"#善后工作","children":[]}],"relativePath":"pages/posts/acmessl.md","path":"/home/runner/work/blog-source-valaxy/blog-source-valaxy/pages/posts/acmessl.md","lastUpdated":1697682601000}'),c=JSON.parse('{"title":"使用ACME脚本申请并配置SSL证书","description":"","frontmatter":{"categories":"小技术","date":"2022-04-22T16:48:01.000Z","layout":"post","tags":["SSL"],"title":"使用ACME脚本申请并配置SSL证书","updated":"2022-04-22T16:48:01.000Z"},"headers":[{"level":2,"title":"前言|为什么选择ACME方法","slug":"前言-为什么选择acme方法","link":"#前言-为什么选择acme方法","children":[]},{"level":2,"title":"准备工作与脚本安装","slug":"准备工作与脚本安装","link":"#准备工作与脚本安装","children":[{"level":3,"title":"安装","slug":"安装","link":"#安装","children":[]}]},{"level":2,"title":"证书申请","slug":"证书申请","link":"#证书申请","children":[{"level":3,"title":"监听80端口申请证书","slug":"监听80端口申请证书","link":"#监听80端口申请证书","children":[]},{"level":3,"title":"通过Nginx服务申请","slug":"通过nginx服务申请","link":"#通过nginx服务申请","children":[]}]},{"level":2,"title":"安装证书到指定路径","slug":"安装证书到指定路径","link":"#安装证书到指定路径","children":[]},{"level":2,"title":"善后工作","slug":"善后工作","link":"#善后工作","children":[]}],"relativePath":"pages/posts/acmessl.md","path":"/home/runner/work/blog-source-valaxy/blog-source-valaxy/pages/posts/acmessl.md","lastUpdated":1697682601000}'),g={name:"pages/posts/acmessl.md",data(){return{data:c,frontmatter:c.frontmatter,$frontmatter:c.frontmatter}},setup(){const o=y();o.meta.frontmatter=Object.assign(o.meta.frontmatter,c.frontmatter),h("pageData",c)}},_={id:"前言-为什么选择acme方法",tabindex:"-1"},f=l("p",null,"要想通过TLS/https协议访问自己域名下的服务，就必须申请SSL证书。类似宝塔这种面板提供了简单快捷的方法一键申请，但终究不是良好的解决方案。一来宝塔过于臃肿，二来其需要手机实名验证。使用各大云服务商提供的【免费证书】则还需要登录网页、申请、导入证书，未免操作繁琐。更何况这些云服务商提供的ssl证书只能给你很少的自由选择性。",-1),k=l("p",null,"而ACME则很好地解决了这些问题。",-1),v=l("p",null,"系统环境：Debian",-1),D={id:"准备工作与脚本安装",tabindex:"-1"},b=l("p",null,"在开始之前，首先将域名解析到服务器的ip上。",-1),x={id:"安装",tabindex:"-1"},B=l("p",null,"首先安装socat，它是acme所需的组件",-1),A=l("div",{class:"language-shell"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"shell"),l("pre",{class:"shiki material-theme-darker vp-code-dark"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"apt"),l("span",{style:{color:"#EEFFFF"}}," "),l("span",{style:{color:"#C3E88D"}},"update")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"apt"),l("span",{style:{color:"#EEFFFF"}}," "),l("span",{style:{color:"#C3E88D"}},"install"),l("span",{style:{color:"#EEFFFF"}}," "),l("span",{style:{color:"#C3E88D"}},"socat"),l("span",{style:{color:"#EEFFFF"}}," "),l("span",{style:{color:"#C3E88D"}},"-y")])])]),l("pre",{class:"shiki github-light vp-code-light"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#6F42C1"}},"apt"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#032F62"}},"update")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#6F42C1"}},"apt"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#032F62"}},"install"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#032F62"}},"socat"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#005CC5"}},"-y")])])])],-1),S=l("p",null,"然后安装acme脚本",-1),$=l("div",{class:"language-shell"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"shell"),l("pre",{class:"shiki material-theme-darker vp-code-dark"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"curl"),l("span",{style:{color:"#EEFFFF"}}," "),l("span",{style:{color:"#C3E88D"}},"https://get.acme.sh"),l("span",{style:{color:"#EEFFFF"}}," "),l("span",{style:{color:"#89DDFF"}},"|"),l("span",{style:{color:"#EEFFFF"}}," "),l("span",{style:{color:"#FFCB6B"}},"sh")])])]),l("pre",{class:"shiki github-light vp-code-light"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#6F42C1"}},"curl"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#032F62"}},"https://get.acme.sh"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#D73A49"}},"|"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#6F42C1"}},"sh")])])])],-1),M=l("p",null,[s("脚本安装在用户目录下的"),l("code",null,".acme.sh"),s("（隐藏）文件夹内，使用 "),l("code",null,". .bashrc"),s(" 让acme.sh命令生效")],-1),N=l("p",null,"接下来使用脚本申请证书",-1),P={id:"证书申请",tabindex:"-1"},L=l("p",null,"首先注册CA账户，将下列命令中的邮箱改为自己的邮箱地址",-1),T=l("div",{class:"language-shell"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"shell"),l("pre",{class:"shiki material-theme-darker vp-code-dark"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"acme.sh"),l("span",{style:{color:"#EEFFFF"}}," "),l("span",{style:{color:"#C3E88D"}},"--register-account"),l("span",{style:{color:"#EEFFFF"}}," "),l("span",{style:{color:"#C3E88D"}},"-m"),l("span",{style:{color:"#EEFFFF"}}," "),l("span",{style:{color:"#C3E88D"}},"xxxx@xxxx.com")])])]),l("pre",{class:"shiki github-light vp-code-light"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#6F42C1"}},"acme.sh"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#005CC5"}},"--register-account"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#005CC5"}},"-m"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#032F62"}},"xxxx@xxxx.com")])])])],-1),w=l("p",null,"注册成功的输出结果如下",-1),V=l("p",null,[l("img",{src:C,alt:"1"}),s("_注册成功")],-1),Z=l("p",null,"然后申请证书，接下来的方法有多种，根据自己情况选择可用的一种即可",-1),O={id:"监听80端口申请证书",tabindex:"-1"},j=l("p",null,"如果服务器的80端口空闲，且能够访问，可以让acme临时监听80端口，完成验证。执行以下命令即可。将domain.com改为自己的域名",-1),J=l("div",{class:"language-shell"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"shell"),l("pre",{class:"shiki material-theme-darker vp-code-dark"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"acme.sh"),l("span",{style:{color:"#EEFFFF"}}," "),l("span",{style:{color:"#C3E88D"}},"--issue"),l("span",{style:{color:"#EEFFFF"}}," "),l("span",{style:{color:"#C3E88D"}},"-d"),l("span",{style:{color:"#EEFFFF"}}," "),l("span",{style:{color:"#C3E88D"}},"domain.com"),l("span",{style:{color:"#EEFFFF"}}," "),l("span",{style:{color:"#C3E88D"}},"--standalone")])])]),l("pre",{class:"shiki github-light vp-code-light"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#6F42C1"}},"acme.sh"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#005CC5"}},"--issue"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#005CC5"}},"-d"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#032F62"}},"domain.com"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#005CC5"}},"--standalone")])])])],-1),U={id:"通过nginx服务申请",tabindex:"-1"},R=l("p",null,"如果服务器上已经安装了nginx，且网页能够正常打开，执行以下命令即可通过nginx验证并申请证书。",-1),q=l("div",{class:"language-shell"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"shell"),l("pre",{class:"shiki material-theme-darker vp-code-dark"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"acme.sh"),l("span",{style:{color:"#EEFFFF"}}," "),l("span",{style:{color:"#C3E88D"}},"--issue"),l("span",{style:{color:"#EEFFFF"}}," "),l("span",{style:{color:"#C3E88D"}},"-d"),l("span",{style:{color:"#EEFFFF"}}," "),l("span",{style:{color:"#C3E88D"}},"mydomain.com"),l("span",{style:{color:"#EEFFFF"}}," "),l("span",{style:{color:"#C3E88D"}},"--nginx")])])]),l("pre",{class:"shiki github-light vp-code-light"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#6F42C1"}},"acme.sh"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#005CC5"}},"--issue"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#005CC5"}},"-d"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#032F62"}},"mydomain.com"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#005CC5"}},"--nginx")])])])],-1),z=l("hr",null,null,-1),G=l("p",null,"如果成功申请了证书，将会看到的输出结果是一长串自己的证书和证书文件存放路径。",-1),H={id:"安装证书到指定路径",tabindex:"-1"},I=l("p",null,"生成的证书文件默认存放在与acme.sh脚本相同文件夹内，大多数情况下不应直接使用该路径下的证书文件，而使用以下命令安装证书到指定路径。",-1),K=l("div",{class:"language-shell"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"shell"),l("pre",{class:"shiki material-theme-darker vp-code-dark"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"acme.sh"),l("span",{style:{color:"#EEFFFF"}}," "),l("span",{style:{color:"#C3E88D"}},"--install-cert"),l("span",{style:{color:"#EEFFFF"}}," "),l("span",{style:{color:"#C3E88D"}},"-d"),l("span",{style:{color:"#EEFFFF"}}," "),l("span",{style:{color:"#C3E88D"}},"domain.com"),l("span",{style:{color:"#EEFFFF"}}," "),l("span",{style:{color:"#C3E88D"}},"--key-file"),l("span",{style:{color:"#EEFFFF"}}," "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#C3E88D"}},"pat"),l("span",{style:{color:"#EEFFFF"}},"h"),l("span",{style:{color:"#89DDFF"}},">"),l("span",{style:{color:"#C3E88D"}},"privkey.pem"),l("span",{style:{color:"#EEFFFF"}}," "),l("span",{style:{color:"#C3E88D"}},"--fullchain-file"),l("span",{style:{color:"#EEFFFF"}}," "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#C3E88D"}},"pat"),l("span",{style:{color:"#EEFFFF"}},"h"),l("span",{style:{color:"#89DDFF"}},">"),l("span",{style:{color:"#C3E88D"}},"fullchain.pem")])])]),l("pre",{class:"shiki github-light vp-code-light"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#6F42C1"}},"acme.sh"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#005CC5"}},"--install-cert"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#005CC5"}},"-d"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#032F62"}},"domain.com"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#005CC5"}},"--key-file"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#D73A49"}},"<"),l("span",{style:{color:"#032F62"}},"pat"),l("span",{style:{color:"#24292E"}},"h"),l("span",{style:{color:"#D73A49"}},">"),l("span",{style:{color:"#032F62"}},"privkey.pem"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#005CC5"}},"--fullchain-file"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#D73A49"}},"<"),l("span",{style:{color:"#032F62"}},"pat"),l("span",{style:{color:"#24292E"}},"h"),l("span",{style:{color:"#D73A49"}},">"),l("span",{style:{color:"#032F62"}},"fullchain.pem")])])])],-1),Q=l("p",null,[s("其中"),l("code",null,"--key-file <path>privkey.pem"),s("指定的为私钥文件，"),l("code",null,"--fullchain-file <path>fullchain.pem"),s("为证书文件。")],-1),W=l("p",null,"done",-1),X={id:"善后工作",tabindex:"-1"},Y=l("div",{class:"language-shell"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"shell"),l("pre",{class:"shiki material-theme-darker vp-code-dark"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"acme.sh"),l("span",{style:{color:"#EEFFFF"}}," "),l("span",{style:{color:"#C3E88D"}},"--upgrade"),l("span",{style:{color:"#EEFFFF"}}," "),l("span",{style:{color:"#C3E88D"}},"--auto-upgrade"),l("span",{style:{color:"#EEFFFF"}},"  "),l("span",{style:{color:"#545454","font-style":"italic"}},"#开启acme的自动更新")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"acme.sh"),l("span",{style:{color:"#EEFFFF"}}," "),l("span",{style:{color:"#C3E88D"}},"--upgrade"),l("span",{style:{color:"#EEFFFF"}}," "),l("span",{style:{color:"#C3E88D"}},"--auto-upgrade"),l("span",{style:{color:"#EEFFFF"}}," "),l("span",{style:{color:"#F78C6C"}},"0"),l("span",{style:{color:"#EEFFFF"}},"  "),l("span",{style:{color:"#545454","font-style":"italic"}},"#关闭自动更新")])])]),l("pre",{class:"shiki github-light vp-code-light"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#6F42C1"}},"acme.sh"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#005CC5"}},"--upgrade"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#005CC5"}},"--auto-upgrade"),l("span",{style:{color:"#24292E"}},"  "),l("span",{style:{color:"#6A737D"}},"#开启acme的自动更新")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#6F42C1"}},"acme.sh"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#005CC5"}},"--upgrade"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#005CC5"}},"--auto-upgrade"),l("span",{style:{color:"#24292E"}}," "),l("span",{style:{color:"#005CC5"}},"0"),l("span",{style:{color:"#24292E"}},"  "),l("span",{style:{color:"#6A737D"}},"#关闭自动更新")])])])],-1);function ll(o,sl,el,ol,r,al){const t=u,p=i;return m(),F(p,{frontmatter:r.frontmatter,data:r.data},{"main-content-md":e(()=>[l("h2",_,[s("前言|为什么选择ACME方法 "),n(t,{class:"header-anchor",href:"#前言-为什么选择acme方法","aria-label":'Permalink to "前言|为什么选择ACME方法"'},{default:e(()=>[s("​")]),_:1})]),f,k,E(" more "),v,l("h2",D,[s("准备工作与脚本安装 "),n(t,{class:"header-anchor",href:"#准备工作与脚本安装","aria-label":'Permalink to "准备工作与脚本安装"'},{default:e(()=>[s("​")]),_:1})]),b,l("h3",x,[s("安装 "),n(t,{class:"header-anchor",href:"#安装","aria-label":'Permalink to "安装"'},{default:e(()=>[s("​")]),_:1})]),B,A,S,$,M,N,l("h2",P,[s("证书申请 "),n(t,{class:"header-anchor",href:"#证书申请","aria-label":'Permalink to "证书申请"'},{default:e(()=>[s("​")]),_:1})]),L,T,w,V,Z,l("h3",O,[s("监听80端口申请证书 "),n(t,{class:"header-anchor",href:"#监听80端口申请证书","aria-label":'Permalink to "监听80端口申请证书"'},{default:e(()=>[s("​")]),_:1})]),j,J,l("h3",U,[s("通过Nginx服务申请 "),n(t,{class:"header-anchor",href:"#通过nginx服务申请","aria-label":'Permalink to "通过Nginx服务申请"'},{default:e(()=>[s("​")]),_:1})]),R,q,z,G,l("h2",H,[s("安装证书到指定路径 "),n(t,{class:"header-anchor",href:"#安装证书到指定路径","aria-label":'Permalink to "安装证书到指定路径"'},{default:e(()=>[s("​")]),_:1})]),I,K,Q,W,l("h2",X,[s("善后工作 "),n(t,{class:"header-anchor",href:"#善后工作","aria-label":'Permalink to "善后工作"'},{default:e(()=>[s("​")]),_:1})]),l("p",null,[s("在安装acme.sh脚本时，它自动为创建 cronjob, 每天 0:00 点自动检测所有的证书, 如果快过期了, 需要更新, 则会自动更新证书。 但由于acme 协议和 letsencrypt CA 都在频繁的更新, 因此 "),n(t,{href:"http://acme.sh",target:"_blank",rel:"noreferrer"},{default:e(()=>[s("acme.sh")]),_:1}),s(" 也应当经常更新以保持同步。参考以下命令")]),Y]),"main-header":e(()=>[a(o.$slots,"main-header")]),"main-header-after":e(()=>[a(o.$slots,"main-header-after")]),"main-nav":e(()=>[a(o.$slots,"main-nav")]),"main-content":e(()=>[a(o.$slots,"main-content")]),"main-content-after":e(()=>[a(o.$slots,"main-content-after")]),"main-nav-before":e(()=>[a(o.$slots,"main-nav-before")]),"main-nav-after":e(()=>[a(o.$slots,"main-nav-after")]),comment:e(()=>[a(o.$slots,"comment")]),footer:e(()=>[a(o.$slots,"footer")]),aside:e(()=>[a(o.$slots,"aside")]),"aside-custom":e(()=>[a(o.$slots,"aside-custom")]),default:e(()=>[a(o.$slots,"default")]),_:3},8,["frontmatter","data"])}const yl=d(g,[["render",ll]]);export{dl as __pageData,yl as default};
