import{_ as i}from"./ValaxyMain.vue_vue_type_style_index_0_lang-80fbe896.js";import{_ as d,p,c,w as e,o as h,b as t,d as o,e as _,a as u,r as n,f as g}from"./app-f4422726.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-6e145f56.js";import"./YunCard.vue_vue_type_script_setup_true_lang-205234ed.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-dbb65843.js";const G=JSON.parse('{"title":"ray-mmd制作法线贴图","description":"","frontmatter":{"categories":"小技术","date":"2021-08-13T08:59:08.000Z","layout":"post","tags":["MMD","3D"],"title":"ray-mmd制作法线贴图"},"headers":[],"relativePath":"pages/posts/mmdray-normal-map.md","path":"/home/runner/work/blog-source-valaxy/blog-source-valaxy/pages/posts/mmdray-normal-map.md","lastUpdated":1689574017000}'),l=JSON.parse('{"title":"ray-mmd制作法线贴图","description":"","frontmatter":{"categories":"小技术","date":"2021-08-13T08:59:08.000Z","layout":"post","tags":["MMD","3D"],"title":"ray-mmd制作法线贴图"},"headers":[],"relativePath":"pages/posts/mmdray-normal-map.md","path":"/home/runner/work/blog-source-valaxy/blog-source-valaxy/pages/posts/mmdray-normal-map.md","lastUpdated":1689574017000}'),f={name:"pages/posts/mmdray-normal-map.md",data(){return{data:l,frontmatter:l.frontmatter}},setup(){p("pageData",l)}},v=t("p",null,"如何使材质贴图更有层次感？",-1),y=t("hr",null,null,-1),M=t("p",null,"在制作法线贴图之前，首先要在MMD导入相应的模型，并完成ray渲染的基本流程，方便以下的对比操作，以寻找合适的参数。",-1),b=t("p",null,[t("img",{src:"https://cdn.jsdelivr.net/gh/voidoath/photo/blog-img/20210813091507.png",alt:""})],-1),$=t("p",null,[o("在模型的目录中，找到需要制作的贴图，文件夹名一般为"),t("code",null,"Texture")],-1),B=t("p",null,[o("然后使用ps导入贴图，选择滤镜>3D>生成法线图 "),t("img",{src:"https://cdn.jsdelivr.net/gh/voidoath/photo/blog-img/20210813093103.png",alt:""})],-1),N=t("p",null,"导出为png格式，文件名应是英文",-1),k=t("p",null,[o("在"),t("code",null,"~/ray-mmd-1.5.2/Materials"),o("目录中，找到"),t("code",null,"material_2.0.fx"),o("、"),t("code",null,"material_common_2.0.fxsub"),o("两个文件，复制到模型目录中的材质贴图文件夹")],-1),D=t("p",null,[t("img",{src:"https://cdn.jsdelivr.net/gh/voidoath/photo/blog-img/20210813093713.png",alt:""})],-1),E=t("p",null,[o("然后重命名"),t("code",null,"material_2.0.fx"),o("文件为"),t("code",null,"{你所导出的法线贴图的文件名}.fx")],-1),j=t("p",null,[t("img",{src:"https://cdn.jsdelivr.net/gh/voidoath/photo/blog-img/20210813094047.png",alt:""})],-1),x=t("p",null,[o("打开重命名后的该fx文件，在第28行左右找到"),t("code",null,"#define NORMAL_MAP_FROM 0"),o("，将0修改为1以启用法线贴图。并更改"),t("code",null,'#define NORMAL_MAP_FILE "normal.png" '),o('中的"normal"为法线贴图文件名')],-1),A=t("p",null,[t("img",{src:"https://cdn.jsdelivr.net/gh/voidoath/photo/blog-img/20210813094408.png",alt:""})],-1),O=t("p",null,[o("然后保存，在mmd中，在"),t("code",null,"MaterialMap"),o("栏中，展开所修改的模型，找到对应的贴图，为其添加法线贴图效果")],-1),S=t("p",null,[t("img",{src:"https://cdn.jsdelivr.net/gh/voidoath/photo/blog-img/20210813094739.png",alt:""})],-1),w=t("p",null,"此时可以对照mmd中的效果调整fx文件中的参数，修改参数后保存文件，即可在mmd中预览到效果。",-1),P=t("p",null,"几个参数的作用：",-1),T=t("ul",null,[t("li",null,[t("p",null,[o("const float normalMapScale = 1.0; 法线效果强度，该参数越大，层次感越明显（下图为将该参数设置为5.0的效果） "),t("img",{src:"https://cdn.jsdelivr.net/gh/voidoath/photo/blog-img/20210813095248.png",alt:""})])]),t("li",null,[t("p",null,"#define SMOOTHNESS_MAP_TYPE 0 法线效果平滑度，该参数越大，发现效果显示越平滑，同时颗粒感与湿润感也会更强（多用于场景）")])],-1),V=t("hr",null,null,-1),L=t("p",null,"tips：",-1),F=t("ol",null,[t("li",null,[o("如果需要为同一模型的多个材质贴图添加法线贴图效果，只需要为每个法线贴图复制一个"),t("code",null,"material_2.0.fx"),o("文件，并重命名为对应的文件名，而"),t("code",null,"material_common_2.0.fxsub"),o("只在材质文件夹中保留一份即可")]),t("li",null,"场景制作法线贴图与人物模型同理，但参数的调整与人物模型区别较大，需根据不同的需求进行尝试")],-1);function R(a,Y,C,J,s,U){const r=g,m=i;return h(),c(m,{frontmatter:s.frontmatter,data:s.data},{"main-content-md":e(()=>[v,t("p",null,[o("这就需要制作相应的"),_(r,{href:"https://zh.wikipedia.org/wiki/%E6%B3%95%E7%BA%BF%E8%B4%B4%E5%9B%BE",target:"_blank",rel:"noreferrer"},{default:e(()=>[o("法线贴图")]),_:1}),o(" 本文以YYB式初音未来为例，制作相应的法线贴图，使用ray渲染的版本为1.5.2")]),u(" more "),y,M,b,$,B,N,k,D,E,j,x,A,O,S,w,P,T,V,L,F]),"main-header":e(()=>[n(a.$slots,"main-header")]),"main-header-after":e(()=>[n(a.$slots,"main-header-after")]),"main-nav":e(()=>[n(a.$slots,"main-nav")]),"main-content":e(()=>[n(a.$slots,"main-content")]),"main-content-after":e(()=>[n(a.$slots,"main-content-after")]),"main-nav-before":e(()=>[n(a.$slots,"main-nav-before")]),"main-nav-after":e(()=>[n(a.$slots,"main-nav-after")]),comment:e(()=>[n(a.$slots,"comment")]),footer:e(()=>[n(a.$slots,"footer")]),aside:e(()=>[n(a.$slots,"aside")]),"aside-custom":e(()=>[n(a.$slots,"aside-custom")]),default:e(()=>[n(a.$slots,"default")]),_:3},8,["frontmatter","data"])}const K=d(f,[["render",R]]);export{G as __pageData,K as default};
