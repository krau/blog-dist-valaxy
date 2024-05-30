import{_ as c}from"./ValaxyMain.vue_vue_type_style_index_0_lang-DVbs8TRx.js";import{c as p,w as e,u,a as h,p as r,o as g,e as _,d as a,f as t,g as o}from"./app-CP7R0JMg.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-DbgA9qPq.js";import"./YunCard.vue_vue_type_script_setup_true_lang-Iavb4A1N.js";import"./index-C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-CSg_UIf2.js";import"./index-C7yU5XnD.js";import"./post-BNXBBnB8.js";const f=t("p",null,"如何使材质贴图更有层次感？",-1),v=t("p",null,[o("这就需要制作相应的"),t("a",{href:"https://zh.wikipedia.org/wiki/%E6%B3%95%E7%BA%BF%E8%B4%B4%E5%9B%BE",target:"_blank",rel:"noreferrer"},"法线贴图")],-1),y=t("p",null,"本文以YYB式初音未来为例，制作相应的法线贴图，使用ray渲染的版本为1.5.2",-1),M=t("hr",null,null,-1),b=t("p",null,"在制作法线贴图之前，首先要在MMD导入相应的模型，并完成ray渲染的基本流程，方便以下的对比操作，以寻找合适的参数。",-1),$=t("figure",null,[t("img",{src:"https://cdn.jsdelivr.net/gh/voidoath/photo/blog-img/20210813091507.png",alt:"",loading:"lazy",decoding:"async"})],-1),B=t("p",null,[o("在模型的目录中，找到需要制作的贴图，文件夹名一般为"),t("code",null,"Texture")],-1),j=t("p",null,[o("然后使用ps导入贴图，选择滤镜>3D>生成法线图 "),t("img",{src:"https://cdn.jsdelivr.net/gh/voidoath/photo/blog-img/20210813093103.png",alt:""})],-1),E=t("p",null,"导出为png格式，文件名应是英文",-1),D=t("p",null,[o("在"),t("code",null,"~/ray-mmd-1.5.2/Materials"),o("目录中，找到"),t("code",null,"material_2.0.fx"),o("、"),t("code",null,"material_common_2.0.fxsub"),o("两个文件，复制到模型目录中的材质贴图文件夹")],-1),N=t("figure",null,[t("img",{src:"https://cdn.jsdelivr.net/gh/voidoath/photo/blog-img/20210813093713.png",alt:"",loading:"lazy",decoding:"async"})],-1),O=t("p",null,[o("然后重命名"),t("code",null,"material_2.0.fx"),o("文件为"),t("code",null,"{你所导出的法线贴图的文件名}.fx")],-1),T=t("figure",null,[t("img",{src:"https://cdn.jsdelivr.net/gh/voidoath/photo/blog-img/20210813094047.png",alt:"",loading:"lazy",decoding:"async"})],-1),k=t("p",null,[o("打开重命名后的该fx文件，在第28行左右找到"),t("code",null,"#define NORMAL_MAP_FROM 0"),o("，将0修改为1以启用法线贴图。并更改"),t("code",null,'#define NORMAL_MAP_FILE "normal.png" '),o('中的"normal"为法线贴图文件名')],-1),x=t("figure",null,[t("img",{src:"https://cdn.jsdelivr.net/gh/voidoath/photo/blog-img/20210813094408.png",alt:"",loading:"lazy",decoding:"async"})],-1),z=t("p",null,[o("然后保存，在mmd中，在"),t("code",null,"MaterialMap"),o("栏中，展开所修改的模型，找到对应的贴图，为其添加法线贴图效果")],-1),A=t("figure",null,[t("img",{src:"https://cdn.jsdelivr.net/gh/voidoath/photo/blog-img/20210813094739.png",alt:"",loading:"lazy",decoding:"async"})],-1),S=t("p",null,"此时可以对照mmd中的效果调整fx文件中的参数，修改参数后保存文件，即可在mmd中预览到效果。",-1),w=t("p",null,"几个参数的作用：",-1),P=t("ul",null,[t("li",null,[t("p",null,[o("const float normalMapScale = 1.0; 法线效果强度，该参数越大，层次感越明显（下图为将该参数设置为5.0的效果） "),t("img",{src:"https://cdn.jsdelivr.net/gh/voidoath/photo/blog-img/20210813095248.png",alt:""})])]),t("li",null,[t("p",null,"#define SMOOTHNESS_MAP_TYPE 0 法线效果平滑度，该参数越大，发现效果显示越平滑，同时颗粒感与湿润感也会更强（多用于场景）")])],-1),R=t("hr",null,null,-1),V=t("p",null,"tips：",-1),F=t("ol",null,[t("li",null,[o("如果需要为同一模型的多个材质贴图添加法线贴图效果，只需要为每个法线贴图复制一个"),t("code",null,"material_2.0.fx"),o("文件，并重命名为对应的文件名，而"),t("code",null,"material_common_2.0.fxsub"),o("只在材质文件夹中保留一份即可")]),t("li",null,"场景制作法线贴图与人物模型同理，但参数的调整与人物模型区别较大，需根据不同的需求进行尝试")],-1),Q={__name:"mmdray-normal-map",setup(L,{expose:d}){const l=JSON.parse('{"title":"ray-mmd制作法线贴图","description":"","frontmatter":{"categories":"小技术","date":"2021-08-13T08:59:08.000Z","layout":"post","tags":["MMD","3D"],"title":"ray-mmd制作法线贴图"},"headers":[],"relativePath":"pages/posts/mmdray-normal-map.md","path":"/home/runner/work/blog-source-valaxy/blog-source-valaxy/pages/posts/mmdray-normal-map.md","lastUpdated":1717031049000}'),i=h(),s=l.frontmatter||{};return i.meta.frontmatter=Object.assign(i.meta.frontmatter||{},l.frontmatter||{}),r("pageData",l),r("valaxy:frontmatter",s),globalThis.$frontmatter=s,d({frontmatter:{categories:"小技术",date:"2021-08-13T08:59:08.000Z",layout:"post",tags:["MMD","3D"],title:"ray-mmd制作法线贴图"}}),(n,C)=>{const m=c;return g(),p(m,{frontmatter:u(s)},{"main-content-md":e(()=>[f,v,y,_(" more "),M,b,$,B,j,E,D,N,O,T,k,x,z,A,S,w,P,R,V,F]),"main-header":e(()=>[a(n.$slots,"main-header")]),"main-header-after":e(()=>[a(n.$slots,"main-header-after")]),"main-nav":e(()=>[a(n.$slots,"main-nav")]),"main-content":e(()=>[a(n.$slots,"main-content")]),"main-content-after":e(()=>[a(n.$slots,"main-content-after")]),"main-nav-before":e(()=>[a(n.$slots,"main-nav-before")]),"main-nav-after":e(()=>[a(n.$slots,"main-nav-after")]),comment:e(()=>[a(n.$slots,"comment")]),footer:e(()=>[a(n.$slots,"footer")]),aside:e(()=>[a(n.$slots,"aside")]),"aside-custom":e(()=>[a(n.$slots,"aside-custom")]),default:e(()=>[a(n.$slots,"default")]),_:3},8,["frontmatter"])}}};export{Q as default};
