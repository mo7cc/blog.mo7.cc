import{a as p}from"./axios-aba6f0e0.js";import{c as v,o as x,s as _,A as k,W as y,a7 as g,$ as E,C as H,Y as T,_ as B}from"./framework-608e059a.js";const C=T("div",{class:"none"},"一言插件",-1),I=v({__name:"HeroHitokoto",setup(w){const f=o=>{const t=window;clearInterval(t.Timer);const n=document.getElementsByClassName("description");if(n.length>0){const d=n[0];d.id="hotWord"}const u=document.getElementById("hotWord");if(!u)return;u.innerHTML=`
<div class="word">
  <div class="left">『</div>
    <span id="hitokoto_text"></span>
  <div class="right">』</div>
</div>
<div class="author" id="hitokoto_author"> ——「${o.from}」</div>
  `;const l=document.getElementById("hitokoto_author"),m=document.getElementById("hitokoto_text");if(!m||!l)return;l.style.opacity="0";const c=o.hitokoto.split("");let e=0,i=0,h=20,a=!1,s="";t.Timer=setInterval(()=>{const d=c[e];if(s.length<4?l.style.opacity="0":l.style.opacity="1",i!=0){i--,s.length==0&&i==0&&(clearInterval(t.Timer),r());return}a?s=s.slice(0,e):s+=d,a?e--:e++,e>=c.length&&(a=!0,e=c.length,i=h),e<0&&(a=!1,e=0,i=h),m.innerHTML=s},200)},r=o=>{let t=window.location.pathname;o&&(t=o),t=="/"&&p({method:"get",url:"https://v1.hitokoto.cn",params:{}}).then(n=>{f(n.data)})};return x(()=>{_(()=>{r()}),k().beforeEach(t=>{_(()=>{r(t.fullPath)})})}),(o,t)=>{const n=H("ClientOnly");return y(),g(n,null,{default:E(()=>[C]),_:1})}}});const N=B(I,[["__file","HeroHitokoto.vue"]]);export{N as default};
