import{h as w,q as D,R as v,L as V,o as c,k as m,d as x,f as o,t as n,u as e,aa as L,y as F,A as H,l as T,ab as g,e as y,g as u,F as B,n as M,ac as N,c as S,w as $,b as Y}from"./app-CP7R0JMg.js";function te(i,a){return Math.random()*(a-i)+i}function oe(i,a){let s,r=!1;return()=>{s&&clearTimeout(s),r?s=setTimeout(i,a):(i(),r=!0,setTimeout(()=>{r=!1},a))}}const I={class:"vc-site-live-time"},P={"mx-1":""},z={"mx-1":""},A={"mx-1":""},j={"mx-1":""},q=w({__name:"VCLiveTime",props:{startTime:{}},setup(i){const a=i,{t:s}=D(),r=v(0),t=v(0),f=v(0),h=v(0);function b(){const l=new Date(a.startTime),_=new Date().getTime()-l.getTime(),p=60*1e3,d=60*p,C=24*d;r.value=Math.floor(_/C),t.value=Math.floor(_%C/60/60/1e3),f.value=Math.floor(_%d/60/1e3),h.value=Math.floor(_%p/1e3)}return V(()=>{setInterval(b,1e3)}),(l,k)=>(c(),m("div",I,[x(l.$slots,"live-time-before"),o("span",P,n(e(s)("time.day",r.value)),1),o("span",z,n(e(s)("time.hour",t.value)),1),o("span",A,n(e(s)("time.minute",f.value)),1),o("span",j,n(e(s)("time.second",h.value)),1),x(l.$slots,"live-time-after")]))}}),E={class:"va-footer p-4 text-$va-c-text-light",text:"center sm"},R={key:0,class:"beian",m:"y-2"},G={href:"https://beian.miit.gov.cn/",target:"_blank",rel:"noopener"},J={class:"copyright flex justify-center items-center gap-2",p:"1"},K=["href","title"],O={key:1,class:"powered",m:"2"},Q=["innerHTML"],U=["href","title"],W=w({__name:"YunFooter",setup(i){const{t:a}=D(),s=L(),r=F(),t=H(),f=new Date().getFullYear(),h=T(()=>f===t.value.footer.since),b=T(()=>a("footer.powered",[`<a href="${g.repository.url}" target="_blank" rel="noopener">Valaxy</a> v${g.version}`])),l=T(()=>t.value.footer.icon||{url:g.repository.url,name:"i-ri-cloud-line",title:g.name});return(k,_)=>{var p,d;return c(),m("footer",E,[(p=e(t).footer.beian)!=null&&p.enable&&e(t).footer.beian.icp?(c(),m("div",R,[o("a",G,n(e(t).footer.beian.icp),1)])):y("v-if",!0),o("div",J,[o("span",null,[u(" © "),h.value?y("v-if",!0):(c(),m(B,{key:0},[u(n(e(t).footer.since)+" - ",1)],64)),u(" "+n(e(f)),1)]),(d=e(t).footer.icon)!=null&&d.enable?(c(),m("a",{key:0,class:M(["inline-flex",e(t).footer.icon.animated?"animate-pulse":""]),href:l.value.url,target:"_blank",title:l.value.title},[o("div",{class:M(l.value.name)},null,2)],10,K)):y("v-if",!0),o("span",null,n(e(r).author.name),1)]),e(t).footer.powered?(c(),m("div",O,[o("span",{innerHTML:b.value},null,8,Q),u(" | "),o("span",null,[u(n(e(a)("footer.theme"))+" - ",1),o("a",{href:e(t).pkg.repository.url,title:e(t).pkg.name,target:"_blank"},n(N(e(s).theme)),9,U),u(" v"+n(e(t).pkg.version),1)])])):y("v-if",!0),x(k.$slots,"default")])}}}),X=o("span",null,"本站已勉强运行",-1),Z=o("span",null,"(ノ｀Д)ノ",-1),se=w({__name:"YunFooter",setup(i){return(a,s)=>{const r=q;return c(),S(W,null,{default:$(()=>[Y(r,{"start-time":"2020-03-09"},{"live-time-before":$(()=>[X]),"live-time-after":$(()=>[Z]),_:1})]),_:1})}}});export{se as _,te as r,oe as t};
