import{_ as u}from"./ValaxyMain.vue_vue_type_style_index_0_lang-5e98b21a.js";import{_ as d,u as p,p as h,c as m,w as t,o as f,b as e,d as l,e as n,a as _,r as s,f as g}from"./app-5d529213.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-02cc783c.js";import"./YunCard.vue_vue_type_script_setup_true_lang-5be1cd61.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-a4e979ed.js";import"./index-463abdac.js";const ee=JSON.parse('{"title":"使用Kotodama更优雅地管理waline评论系统后台","description":"","frontmatter":{"categories":"小技术","date":"2022-11-13T12:37:28.000Z","layout":"post","tags":["waline","博客"],"title":"使用Kotodama更优雅地管理waline评论系统后台","updated":"2022-11-13T12:37:28.000Z"},"headers":[{"level":2,"title":"Features","slug":"features","link":"#features","children":[]},{"level":2,"title":"Waline","slug":"waline","link":"#waline","children":[]},{"level":2,"title":"自行部署","slug":"自行部署","link":"#自行部署","children":[{"level":3,"title":"自行构建","slug":"自行构建","link":"#自行构建","children":[]},{"level":3,"title":"GitHub Actions","slug":"github-actions","link":"#github-actions","children":[]}]},{"level":2,"title":"FAQ","slug":"faq","link":"#faq","children":[{"level":3,"title":"Waline 403 Authorization 错误","slug":"waline-403-authorization-错误","link":"#waline-403-authorization-错误","children":[]}]}],"relativePath":"pages/posts/kotodama.md","path":"/home/runner/work/blog-source-valaxy/blog-source-valaxy/pages/posts/kotodama.md","lastUpdated":1695001611000}'),r=JSON.parse('{"title":"使用Kotodama更优雅地管理waline评论系统后台","description":"","frontmatter":{"categories":"小技术","date":"2022-11-13T12:37:28.000Z","layout":"post","tags":["waline","博客"],"title":"使用Kotodama更优雅地管理waline评论系统后台","updated":"2022-11-13T12:37:28.000Z"},"headers":[{"level":2,"title":"Features","slug":"features","link":"#features","children":[]},{"level":2,"title":"Waline","slug":"waline","link":"#waline","children":[]},{"level":2,"title":"自行部署","slug":"自行部署","link":"#自行部署","children":[{"level":3,"title":"自行构建","slug":"自行构建","link":"#自行构建","children":[]},{"level":3,"title":"GitHub Actions","slug":"github-actions","link":"#github-actions","children":[]}]},{"level":2,"title":"FAQ","slug":"faq","link":"#faq","children":[{"level":3,"title":"Waline 403 Authorization 错误","slug":"waline-403-authorization-错误","link":"#waline-403-authorization-错误","children":[]}]}],"relativePath":"pages/posts/kotodama.md","path":"/home/runner/work/blog-source-valaxy/blog-source-valaxy/pages/posts/kotodama.md","lastUpdated":1695001611000}'),k={name:"pages/posts/kotodama.md",data(){return{data:r,frontmatter:r.frontmatter,$frontmatter:r.frontmatter}},setup(){const o=p();o.meta.frontmatter=Object.assign(o.meta.frontmatter,r.frontmatter),h("pageData",r)}},b=e("p",null,"不少博主已经在用waline作为评论系统了吧，但是众所周知，waline的后台管理属实不能说是好用。无论是界面构建还是交互设计都有点复古陈旧的感觉。",-1),y=e("p",null,"以下是官方文档",-1),F=e("hr",null,null,-1),v=e("p",null,[l("kotodama 是一个纯静态的站点，您可以 fork 其自行部署，也可以直接使用已部署的 "),e("code",null,"kotodama.yunyoujun.cn"),l(" | "),e("code",null,"kotodama.vercel.app"),l(" 站点。")],-1),w=e("blockquote",null,[e("p",null,[e("code",null,"kotodama.yunyoujun.cn"),l(" 纯静态托管于 GitHub Pages，代码将始终保持开源，不会也无法获取您的用户名密码，请放心使用。")])],-1),E={id:"features",tabindex:"-1"},C=e("s",null,"未来可能适配更多评论系统，假的",-1),A={id:"waline",tabindex:"-1"},$=e("ul",null,[e("li",null,"已实现基础的登录、评论预览、翻页、删除功能"),e("li",null,"Todo: 编辑评论、细节优化、GitHub 登录、批量删除、审核")],-1),x={id:"自行部署",tabindex:"-1"},j=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",{class:"shiki material-theme-darker vp-code-dark"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#545454","font-style":"italic"}},"# fork 或直接 clone 本项目")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FFCB6B"}},"git"),e("span",{style:{color:"#EEFFFF"}}," "),e("span",{style:{color:"#C3E88D"}},"clone"),e("span",{style:{color:"#EEFFFF"}}," "),e("span",{style:{color:"#C3E88D"}},"https://github.com/YunYouJun/kotodama")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FFCB6B"}},"cp"),e("span",{style:{color:"#EEFFFF"}}," "),e("span",{style:{color:"#C3E88D"}},".env.example"),e("span",{style:{color:"#EEFFFF"}}," "),e("span",{style:{color:"#C3E88D"}},".env")])])]),e("pre",{class:"shiki github-light vp-code-light"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6A737D"}},"# fork 或直接 clone 本项目")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6F42C1"}},"git"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"clone"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"https://github.com/YunYouJun/kotodama")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6F42C1"}},"cp"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},".env.example"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},".env")])])])],-1),B=e("p",null,[l("配置 "),e("code",null,".env"),l(" 中的 "),e("code",null,"VITE_API_BASE_URL"),l(" 环境变量为您的 Waline 后台地址，例如 "),e("code",null,"https://waline.xxx.xxx"),l("。")],-1),D={id:"自行构建",tabindex:"-1"},W=e("div",{class:"language-bash"},[e("button",{title:"Copy Code",class:"copy"}),e("span",{class:"lang"},"bash"),e("pre",{class:"shiki material-theme-darker vp-code-dark"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#545454","font-style":"italic"}},"# 安装依赖")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FFCB6B"}},"npm"),e("span",{style:{color:"#EEFFFF"}}," "),e("span",{style:{color:"#C3E88D"}},"install")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#545454","font-style":"italic"}},"# 构建产物")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FFCB6B"}},"npm"),e("span",{style:{color:"#EEFFFF"}}," "),e("span",{style:{color:"#C3E88D"}},"run"),e("span",{style:{color:"#EEFFFF"}}," "),e("span",{style:{color:"#C3E88D"}},"build")])])]),e("pre",{class:"shiki github-light vp-code-light"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6A737D"}},"# 安装依赖")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6F42C1"}},"npm"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"install")]),l(`
`),e("span",{class:"line"}),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6A737D"}},"# 构建产物")]),l(`
`),e("span",{class:"line"},[e("span",{style:{color:"#6F42C1"}},"npm"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"run"),e("span",{style:{color:"#24292E"}}," "),e("span",{style:{color:"#032F62"}},"build")])])])],-1),q=e("p",null,[l("将 "),e("code",null,"dist"),l(" 下的静态文件托管于您的服务器。")],-1),z={id:"github-actions",tabindex:"-1"},P=e("p",null,"Fork 本项目。",-1),V=e("p",null,[l("进入 "),e("code",null,"Settings/Pages"),l(" Source 设置 Branch 为 "),e("code",null,"gh-pages"),l("，以启用 GitHub Pages。")],-1),Y=e("p",null,[l("进入 "),e("code",null,"Actions"),l("，触发 GitHub Page Workflow run。")],-1),G=e("blockquote",null,[e("p",null,[e("code",null,".github/workflows/gh-pages.yml"),l(" 文件将会自动触发构建，并将构建产物推送至 "),e("code",null,"gh-pages"),l(" 分支。")])],-1),H=e("p",null,[l("如果您需要自定义域名，请修改项目中 "),e("code",null,"public/CNAME"),l(" 文件内容为您自己的域名。")],-1),N={id:"faq",tabindex:"-1"},T={id:"waline-403-authorization-错误",tabindex:"-1"},J=e("p",null,[l("如果您无法正常连接您的 Waline 后台 API，您可能需要配置一下安全域名。 将 "),e("code",null,"kotodama.yunyoujun.cn"),l(" 添加至您的安全域名中。")],-1);function S(o,K,Z,I,i,M){const a=g,c=u;return f(),m(c,{frontmatter:i.frontmatter,data:i.data},{"main-content-md":t(()=>[b,e("p",null,[l("还好有"),n(a,{href:"https://github.com/YunYouJun",target:"_blank",rel:"noreferrer"},{default:t(()=>[l("云游君")]),_:1}),l("开发了"),n(a,{href:"https://github.com/YunYouJun/kotodama",target:"_blank",rel:"noreferrer"},{default:t(()=>[l("kotadama")]),_:1}),l("，适配了waline的后端管理。用它作为waline的后端管理再好不过。")]),e("p",null,[l("要使用kotadama，直接打开网址登录使用即可："),n(a,{href:"https://kotodama.vercel.app",target:"_blank",rel:"noreferrer"},{default:t(()=>[l("https://kotodama.vercel.app")]),_:1})]),_(" more "),y,F,v,w,e("h2",E,[l("Features "),n(a,{class:"header-anchor",href:"#features","aria-hidden":"true"},{default:t(()=>[l("#")]),_:1})]),e("ul",null,[e("li",null,[l("💬 目前只适配 "),n(a,{href:"https://github.com/walinejs/waline",target:"_blank",rel:"noreferrer"},{default:t(()=>[l("Waline")]),_:1}),l("（"),C,l("）")]),e("li",null,[l("⚡️ "),n(a,{href:"https://github.com/vuejs/vue-next",target:"_blank",rel:"noreferrer"},{default:t(()=>[l("Vue 3")]),_:1}),l(", "),n(a,{href:"https://github.com/vitejs/vite",target:"_blank",rel:"noreferrer"},{default:t(()=>[l("Vite 2")]),_:1}),l(", "),n(a,{href:"https://pnpm.js.org/",target:"_blank",rel:"noreferrer"},{default:t(()=>[l("pnpm")]),_:1}),l(", "),n(a,{href:"https://github.com/element-plus/element-plus",target:"_blank",rel:"noreferrer"},{default:t(()=>[l("element-plus")]),_:1}),l(" - ("),n(a,{href:"https://github.com/antfu/vitesse/",target:"_blank",rel:"noreferrer"},{default:t(()=>[l("vitesse")]),_:1}),l(") born for future")])]),e("h2",A,[l("Waline "),n(a,{class:"header-anchor",href:"#waline","aria-hidden":"true"},{default:t(()=>[l("#")]),_:1})]),e("ul",null,[e("li",null,[l("适配 "),n(a,{href:"https://github.com/walinejs/waline",target:"_blank",rel:"noreferrer"},{default:t(()=>[l("Waline")]),_:1}),l(" 后台管理（开发中...） "),$])]),e("blockquote",null,[e("p",null,[l("More info see "),n(a,{href:"https://github.com/walinejs/waline/issues/552",target:"_blank",rel:"noreferrer"},{default:t(()=>[l("#552 | Waline")]),_:1})])]),e("h2",x,[l("自行部署 "),n(a,{class:"header-anchor",href:"#自行部署","aria-hidden":"true"},{default:t(()=>[l("#")]),_:1})]),e("blockquote",null,[e("p",null,[l("推荐直接使用 "),n(a,{href:"https://kotodama.yunyoujun.cn",target:"_blank",rel:"noreferrer"},{default:t(()=>[l("kotodama.yunyoujun.cn")]),_:1}),l(" 或 "),n(a,{href:"https://kotodama.vercel.app",target:"_blank",rel:"noreferrer"},{default:t(()=>[l("kotodama.vercel.app")]),_:1}),l("。如果您不放心，也可以自行部署，但可能需要自己记得更新。")])]),j,B,e("h3",D,[l("自行构建 "),n(a,{class:"header-anchor",href:"#自行构建","aria-hidden":"true"},{default:t(()=>[l("#")]),_:1})]),W,q,e("h3",z,[l("GitHub Actions "),n(a,{class:"header-anchor",href:"#github-actions","aria-hidden":"true"},{default:t(()=>[l("#")]),_:1})]),P,V,Y,G,H,e("h2",N,[l("FAQ "),n(a,{class:"header-anchor",href:"#faq","aria-hidden":"true"},{default:t(()=>[l("#")]),_:1})]),e("h3",T,[l("Waline 403 Authorization 错误 "),n(a,{class:"header-anchor",href:"#waline-403-authorization-错误","aria-hidden":"true"},{default:t(()=>[l("#")]),_:1})]),J,e("blockquote",null,[e("p",null,[n(a,{href:"https://waline.js.org/reference/server.html#securedomains",target:"_blank",rel:"noreferrer"},{default:t(()=>[l("secureDomains | Waline")]),_:1})])])]),"main-header":t(()=>[s(o.$slots,"main-header")]),"main-header-after":t(()=>[s(o.$slots,"main-header-after")]),"main-nav":t(()=>[s(o.$slots,"main-nav")]),"main-content":t(()=>[s(o.$slots,"main-content")]),"main-content-after":t(()=>[s(o.$slots,"main-content-after")]),"main-nav-before":t(()=>[s(o.$slots,"main-nav-before")]),"main-nav-after":t(()=>[s(o.$slots,"main-nav-after")]),comment:t(()=>[s(o.$slots,"comment")]),footer:t(()=>[s(o.$slots,"footer")]),aside:t(()=>[s(o.$slots,"aside")]),"aside-custom":t(()=>[s(o.$slots,"aside-custom")]),default:t(()=>[s(o.$slots,"default")]),_:3},8,["frontmatter","data"])}const le=d(k,[["render",S]]);export{ee as __pageData,le as default};