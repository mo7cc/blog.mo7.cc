import{m}from"./tools-5383652a.js";import{c as l,o as d,s as a,A as u,W as p,a7 as C,$ as _,C as y,Y as f,_ as h}from"./framework-608e059a.js";import"./commonjsHelpers-725317a4.js";const w=f("div",{class:"none"},"评论区隐藏按钮",-1),B=l({__name:"CommentHideBtn",setup(E){const s=()=>{const e=document.querySelector(".waline-wrapper");e&&(e.classList.add("show"),e.classList.remove("hide"),m.set("CommentIsDisplay",!0))},c=()=>{const e=document.querySelector(".waline-wrapper");e&&(e.classList.add("hide"),e.classList.remove("show"),m.set("CommentIsDisplay",!1))},i=()=>{const e=document.querySelector(".waline-wrapper");if(!e)return;m.get("CommentIsDisplay")?s():c(),e.style.opacity="1"},r=()=>{const e=document.querySelector(".waline-wrapper");if(!e)return;if(!document.getElementById("ShowComment")){const t=document.createElement("button");t.id="ShowComment",t.innerHTML="显示评论区",e.appendChild(t)}if(!document.getElementById("HideComment")){const t=document.createElement("button");t.id="HideComment",t.innerHTML="隐藏评论区",e.appendChild(t)}const n=document.getElementById("ShowComment"),o=document.getElementById("HideComment");n&&o&&(n.onclick=s,o.onclick=c)};return d(()=>{a(()=>{r(),i()}),u().beforeEach(n=>{a(()=>{setTimeout(()=>{r(),i()},500)})})}),(e,n)=>{const o=y("ClientOnly");return p(),C(o,null,{default:_(()=>[w]),_:1})}}});const g=h(B,[["__file","CommentHideBtn.vue"]]);export{g as default};
