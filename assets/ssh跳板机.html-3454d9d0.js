import{_ as s,W as e,X as n,a1 as i}from"./framework-608e059a.js";const c={},d=i(`<h1 id="ssh-跳板机" tabindex="-1"><a class="header-anchor" href="#ssh-跳板机" aria-hidden="true">#</a> ssh 跳板机</h1><blockquote><p>通过设置 ProxyCommand 来进行 ssh 跳板机</p></blockquote><p>代理 github ssh 协议 和 ssh 登录加速。</p><p>文件:<code>~/.ssh/config</code></p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>
Host itpo.mo7.cc
  HostName itpo.mo7.cc
  User root

Host mo7.cc
  HostName mo7.cc
  User root
  ProxyCommand ssh -W %h:%p itpo.mo7.cc

Host github.com
  HostName github.com
  User git
  ProxyCommand ssh -W %h:%p itpo.mo7.cc

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[d];function a(l,r){return e(),n("div",null,o)}const m=s(c,[["render",a],["__file","ssh跳板机.html.vue"]]);export{m as default};
