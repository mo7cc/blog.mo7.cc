import{_ as e,W as p,X as c,Y as n,a0 as a,Z as t,a1 as o,C as i}from"./framework-608e059a.js";const l={},r=n("h1",{id:"必应每日壁纸-api",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#必应每日壁纸-api","aria-hidden":"true"},"#"),a(" 必应每日壁纸 api")],-1),u={href:"https://cn.bing.com",target:"_blank",rel:"noopener noreferrer"},d=n("code",null,"idx=1",-1),k=o(`<p>支持 <code>http</code> 以及 <code>https</code> 。</p><h2 id="html-和-markdown-使用" tabindex="-1"><a class="header-anchor" href="#html-和-markdown-使用" aria-hidden="true">#</a> HTML 和 Markdown 使用</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//file.mo7.cc/api/public/bz<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//file.mo7.cc/api/public/bz?idx=3<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>![](//file.mo7.cc/api/public/bz?idx=1)
![](//file.mo7.cc/api/public/bz?idx=3)
![](//file.mo7.cc/api/public/bz)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="//file.mo7.cc/api/public/bz?idx=1" alt="" loading="lazy"><img src="//file.mo7.cc/api/public/bz?idx=3" alt="" loading="lazy"><img src="//file.mo7.cc/api/public/bz" alt="" loading="lazy"></p><blockquote><p>当 <code>idx</code> 参数小于 1 时，则会随机返回一张壁纸</p></blockquote><h2 id="api-接口返回当日-json-数据" tabindex="-1"><a class="header-anchor" href="#api-接口返回当日-json-数据" aria-hidden="true">#</a> api 接口返回当日 json 数据</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;//file.mo7.cc/api/public/url&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> imgList <span class="token operator">=</span> response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>Data<span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>imgList<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),m={href:"https://file.mo7.cc/api/public/url",target:"_blank",rel:"noopener noreferrer"},b=n("div",{class:"hint-container info"},[n("p",{class:"hint-container-title"},"相关信息"),n("p",null,"程序采用 golang 编写，采用 302 重定向返回图片，流量消耗可以忽略不计。程序定时爬取数据并缓存在内存中，因此可以支持极高的并发。欢迎食用 ~")],-1);function v(h,g){const s=i("ExternalLinkIcon");return p(),c("div",null,[r,n("p",null,[a("采用 golang 编写，每日定时爬取 "),n("a",u,[a("https://cn.bing.com"),t(s)]),a(" 当日的 7 张壁纸，并将链接固定下来进行 302 重定向。 idx 参数分别对应 当日壁纸数组 的序号，"),d,a(" 时则返回当天壁纸。")]),k,n("p",null,[a("API 完整地址: "),n("a",m,[a("https://file.mo7.cc/api/public/url"),t(s)])]),b])}const _=e(l,[["render",v],["__file","BingImgApi.html.vue"]]);export{_ as default};
