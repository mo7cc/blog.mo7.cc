import{c as t,o as c,W as r,a7 as a,$ as p,C as i,Y as l,_ as u}from"./framework-608e059a.js";const _="mo7-blog",d="1.3.11",v="墨七的个人博客",h="MIT",m="module",y={build:"vuepress build src",dev:"vuepress dev src --clean-cache",update:"./_shell/Update.sh",sync:"./_shell/GitSync.sh",deploy:"./_shell/Deploy.sh",open:"./_shell/OpenSource.sh"},f={"@types/store":"^2.0.2","@vuepress/client":"2.0.0-beta.61",aplayer:"^1.10.1",axios:"^1.3.4",store:"^2.0.12",vue:"^3.2.47","vue-router":"^4.1.6",vuepress:"2.0.0-beta.61","vuepress-plugin-search-pro":"2.0.0-beta.190","vuepress-theme-hope":"2.0.0-beta.190"},b={name:_,version:d,description:v,license:h,type:m,scripts:y,dependencies:f},C=l("div",{class:"none"},"版本打印",-1),x=t({__name:"PrintVersion",setup(P){var s=`   
███╗   ███╗ ██████╗ ███████╗
████╗ ████║██╔═══██╗╚════██║
██╔████╔██║██║   ██║    ██╔╝
██║╚██╔╝██║██║   ██║   ██╔╝ 
██║ ╚═╝ ██║╚██████╔╝   ██║  
╚═╝     ╚═╝ ╚═════╝    ╚═╝`;const n=()=>{var e=b;console.info(s+e.version)};return c(()=>{n()}),(e,g)=>{const o=i("ClientOnly");return r(),a(o,null,{default:p(()=>[C]),_:1})}}}),V=u(x,[["__file","PrintVersion.vue"]]);export{V as default};
