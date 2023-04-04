import{_ as h}from"./ValaxyMain.vue_vue_type_style_index_0_lang-ebfadf65.js";import{_ as u,c,w as t,o as _,b as e,d as l,e as a,r as s,f as m,p as f}from"./app-b6bf6c9f.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-dfc85554.js";import"./YunCard.vue_vue_type_style_index_0_lang-f610db89.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-28c83974.js";const oe=JSON.parse('{"title":"ray-mmd内置天空盒调整参数简介","description":"","frontmatter":{"categories":"小技术","date":"2021-08-12T19:57:39.000Z","layout":"post","tags":["MMD","3D"],"title":"ray-mmd内置天空盒调整参数简介"},"headers":[{"level":2,"title":"第一栏","slug":"第一栏","link":"#第一栏","children":[]},{"level":2,"title":"第二栏","slug":"第二栏","link":"#第二栏","children":[]},{"level":2,"title":"第三栏","slug":"第三栏","link":"#第三栏","children":[]},{"level":2,"title":"第四栏","slug":"第四栏","link":"#第四栏","children":[]},{"level":2,"title":"第一栏","slug":"第一栏-1","link":"#第一栏-1","children":[]},{"level":2,"title":"第二栏","slug":"第二栏-1","link":"#第二栏-1","children":[]},{"level":2,"title":"第三栏","slug":"第三栏-1","link":"#第三栏-1","children":[]},{"level":2,"title":"第四栏","slug":"第四栏-1","link":"#第四栏-1","children":[]},{"level":2,"title":"第一栏","slug":"第一栏-2","link":"#第一栏-2","children":[]},{"level":2,"title":"第二栏","slug":"第二栏-2","link":"#第二栏-2","children":[]},{"level":2,"title":"第三栏","slug":"第三栏-2","link":"#第三栏-2","children":[]},{"level":2,"title":"第四栏","slug":"第四栏-2","link":"#第四栏-2","children":[]}],"relativePath":"pages/posts/mmdray-skyboxs.md","path":"/home/runner/work/blog-source-valaxy/blog-source-valaxy/pages/posts/mmdray-skyboxs.md","lastUpdated":1680571703000}'),d=JSON.parse('{"title":"ray-mmd内置天空盒调整参数简介","description":"","frontmatter":{"categories":"小技术","date":"2021-08-12T19:57:39.000Z","layout":"post","tags":["MMD","3D"],"title":"ray-mmd内置天空盒调整参数简介"},"headers":[{"level":2,"title":"第一栏","slug":"第一栏","link":"#第一栏","children":[]},{"level":2,"title":"第二栏","slug":"第二栏","link":"#第二栏","children":[]},{"level":2,"title":"第三栏","slug":"第三栏","link":"#第三栏","children":[]},{"level":2,"title":"第四栏","slug":"第四栏","link":"#第四栏","children":[]},{"level":2,"title":"第一栏","slug":"第一栏-1","link":"#第一栏-1","children":[]},{"level":2,"title":"第二栏","slug":"第二栏-1","link":"#第二栏-1","children":[]},{"level":2,"title":"第三栏","slug":"第三栏-1","link":"#第三栏-1","children":[]},{"level":2,"title":"第四栏","slug":"第四栏-1","link":"#第四栏-1","children":[]},{"level":2,"title":"第一栏","slug":"第一栏-2","link":"#第一栏-2","children":[]},{"level":2,"title":"第二栏","slug":"第二栏-2","link":"#第二栏-2","children":[]},{"level":2,"title":"第三栏","slug":"第三栏-2","link":"#第三栏-2","children":[]},{"level":2,"title":"第四栏","slug":"第四栏-2","link":"#第四栏-2","children":[]}],"relativePath":"pages/posts/mmdray-skyboxs.md","path":"/home/runner/work/blog-source-valaxy/blog-source-valaxy/pages/posts/mmdray-skyboxs.md","lastUpdated":1680571703000}'),p={name:"pages/posts/mmdray-skyboxs.md",data(){return{data:d,frontmatter:d.frontmatter}},setup(){f("pageData",d)}},g=e("p",null,[l("完成ray渲染的基本流程后，就要开始调各种参数了，本篇介绍ray渲染内置的几个天空盒的参数 "),e("img",{src:"https://cdn.jsdelivr.net/gh/voidoath/photo/blog-img/20210812200556.png",alt:"内置天空盒"})],-1),v=e("p",null,[l("在"),e("code",null,"模型操作"),l("栏中，选择导入的天空盒，在表情栏即可进行其相关参数调整。")],-1),k=e("p",null,"以下介绍中，把表情四栏按从左到右，从上到下分成 第一栏、第二栏、第三栏、第四栏。",-1),y={id:"helipad-goldenhour",tabindex:"-1"},b={id:"第一栏",tabindex:"-1"},x=e("ul",null,[e("li",null,"Balance 可以看到该栏中有BalanceR+-/G+-/B+-以及Gray+的调整，它们即对应色调红绿蓝（RGB）三色以及灰色的调整。 例如，调高BalanceR+栏，画面将偏红色")],-1),$={id:"第二栏",tabindex:"-1"},S=e("ul",null,[e("li",null,"EnvDiffLight 该参数为天空盒的光源强度，调高该参数，天空盒对模型的影响将会变亮"),e("li",null,"EnvSpecLight 该参数为漫反射强度，调高该参数，模型漫反射增强")],-1),D={id:"第三栏",tabindex:"-1"},B=e("ul",null,[e("li",null,"Diffuse 该栏调整漫反射色调（RGB&Gray）")],-1),T={id:"第四栏",tabindex:"-1"},L=e("ul",null,[e("li",null,"Specular 该栏调整镜面反射色调（与Diffuse同理）")],-1),M={id:"sky-hemisphere",tabindex:"-1"},E=e("p",null,"该天空盒初始为纯白背景，一般适用于实景合成/唯美风渲染",-1),G={id:"第一栏-1",tabindex:"-1"},N=e("ul",null,[e("li",null,"Top 可以看到该栏中有TopH+/S+/V+-，它们调整该天空盒的顶部色调效果")],-1),R={id:"第二栏-1",tabindex:"-1"},H=e("ul",null,[e("li",null,"Medium 与第一栏同理，调整中部色调")],-1),V={id:"第三栏-1",tabindex:"-1"},w=e("ul",null,[e("li",null,"Bottom 与上同理，调整底部色调")],-1),C={id:"第四栏-1",tabindex:"-1"},P=e("ul",null,[e("li",null,"EnvDiffLight 该参数为天空盒的光源强度，调高该参数，天空盒对模型的影响将会变亮"),e("li",null,"EnvSpecLight 该参数为漫反射强度，调高该参数，模型漫反射增强")],-1),F={id:"sky-night",tabindex:"-1"},J=e("p",null,[l("该天空盒与"),e("code",null,"Sky Hemisphere"),l("几乎一样，区别是该天空盒带有夜晚的月亮和流星效果")],-1),O={id:"time-of-day",tabindex:"-1"},U={id:"第一栏-2",tabindex:"-1"},Z=e("ul",null,[e("li",null,"SunRadius 调整太阳半径大小")],-1),j={id:"第二栏-2",tabindex:"-1"},A=e("ul",null,[e("li",null,"EnvDiffLight 该参数为天空盒的光源强度，调高该参数，天空盒对模型的影响将会变亮"),e("li",null,"EnvSpecLight 该参数为漫反射强度，调高该参数，模型漫反射增强")],-1),I={id:"第三栏-2",tabindex:"-1"},q=e("ul",null,[e("li",null,"MiePhase 该参数可以影响丁达尔效应的强弱"),e("li",null,"FogRange 调整雾气距离"),e("li",null,"FogIntensity 该参数可以影响雾气效果强度")],-1),z={id:"第四栏-2",tabindex:"-1"},K=e("ul",null,[e("li",null,"Cloud 云的密度，调高该参数，云将增多"),e("li",null,"CloudSpeed 云的流动速度")],-1),Q={id:"time-of-night",tabindex:"-1"},W=e("p",null,[l("该天空盒具有夜间星空银河与流星效果，参数调整与"),e("code",null,"Time of day"),l("基本一致。 区别是该天空盒第四栏的参数为影响星星的效果")],-1);function X(n,Y,ee,le,o,te){const i=m,r=h;return _(),c(r,{frontmatter:o.frontmatter,data:o.data},{"main-content-md":t(()=>[g,v,k,e("h1",y,[l("Helipad GoldenHour "),a(i,{class:"header-anchor",href:"#helipad-goldenhour","aria-hidden":"true"},{default:t(()=>[l("#")]),_:1})]),e("h2",b,[l("第一栏 "),a(i,{class:"header-anchor",href:"#第一栏","aria-hidden":"true"},{default:t(()=>[l("#")]),_:1})]),x,e("h2",$,[l("第二栏 "),a(i,{class:"header-anchor",href:"#第二栏","aria-hidden":"true"},{default:t(()=>[l("#")]),_:1})]),S,e("h2",D,[l("第三栏 "),a(i,{class:"header-anchor",href:"#第三栏","aria-hidden":"true"},{default:t(()=>[l("#")]),_:1})]),B,e("h2",T,[l("第四栏 "),a(i,{class:"header-anchor",href:"#第四栏","aria-hidden":"true"},{default:t(()=>[l("#")]),_:1})]),L,e("h1",M,[l("Sky Hemisphere "),a(i,{class:"header-anchor",href:"#sky-hemisphere","aria-hidden":"true"},{default:t(()=>[l("#")]),_:1})]),E,e("h2",G,[l("第一栏 "),a(i,{class:"header-anchor",href:"#第一栏-1","aria-hidden":"true"},{default:t(()=>[l("#")]),_:1})]),N,e("h2",R,[l("第二栏 "),a(i,{class:"header-anchor",href:"#第二栏-1","aria-hidden":"true"},{default:t(()=>[l("#")]),_:1})]),H,e("h2",V,[l("第三栏 "),a(i,{class:"header-anchor",href:"#第三栏-1","aria-hidden":"true"},{default:t(()=>[l("#")]),_:1})]),w,e("h2",C,[l("第四栏 "),a(i,{class:"header-anchor",href:"#第四栏-1","aria-hidden":"true"},{default:t(()=>[l("#")]),_:1})]),P,e("h1",F,[l("Sky Night "),a(i,{class:"header-anchor",href:"#sky-night","aria-hidden":"true"},{default:t(()=>[l("#")]),_:1})]),J,e("h1",O,[l("Time of day "),a(i,{class:"header-anchor",href:"#time-of-day","aria-hidden":"true"},{default:t(()=>[l("#")]),_:1})]),e("h2",U,[l("第一栏 "),a(i,{class:"header-anchor",href:"#第一栏-2","aria-hidden":"true"},{default:t(()=>[l("#")]),_:1})]),Z,e("h2",j,[l("第二栏 "),a(i,{class:"header-anchor",href:"#第二栏-2","aria-hidden":"true"},{default:t(()=>[l("#")]),_:1})]),A,e("h2",I,[l("第三栏 "),a(i,{class:"header-anchor",href:"#第三栏-2","aria-hidden":"true"},{default:t(()=>[l("#")]),_:1})]),q,e("h2",z,[l("第四栏 "),a(i,{class:"header-anchor",href:"#第四栏-2","aria-hidden":"true"},{default:t(()=>[l("#")]),_:1})]),K,e("h1",Q,[l("Time of night "),a(i,{class:"header-anchor",href:"#time-of-night","aria-hidden":"true"},{default:t(()=>[l("#")]),_:1})]),W]),"main-header":t(()=>[s(n.$slots,"main-header")]),"main-header-after":t(()=>[s(n.$slots,"main-header-after")]),"main-nav":t(()=>[s(n.$slots,"main-nav")]),"main-content":t(()=>[s(n.$slots,"main-content")]),"main-content-after":t(()=>[s(n.$slots,"main-content-after")]),"main-nav-before":t(()=>[s(n.$slots,"main-nav-before")]),"main-nav-after":t(()=>[s(n.$slots,"main-nav-after")]),comment:t(()=>[s(n.$slots,"comment")]),footer:t(()=>[s(n.$slots,"footer")]),aside:t(()=>[s(n.$slots,"aside")]),"aside-custom":t(()=>[s(n.$slots,"aside-custom")]),default:t(()=>[s(n.$slots,"default")]),_:3},8,["frontmatter","data"])}const re=u(p,[["render",X]]);export{oe as __pageData,re as default};
