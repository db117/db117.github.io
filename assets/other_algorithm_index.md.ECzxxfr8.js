import{_ as a,c as n,o as s,a5 as p}from"./chunks/framework.hO7JnZ8p.js";const u=JSON.parse('{"title":"算法","description":"","frontmatter":{"title":"算法"},"headers":[],"relativePath":"other/algorithm/index.md","filePath":"other/algorithm/index.md"}'),e={name:"other/algorithm/index.md"},l=p(`<h2 id="小技巧" tabindex="-1">小技巧 <a class="header-anchor" href="#小技巧" aria-label="Permalink to &quot;小技巧&quot;">​</a></h2><h4 id="向上取整" tabindex="-1">向上取整 <a class="header-anchor" href="#向上取整" aria-label="Permalink to &quot;向上取整&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>(m + (n - 1)) / n; </span></span>
<span class="line"><span>相当于</span></span>
<span class="line"><span>int i=m/n;</span></span>
<span class="line"><span>if(m%n!=0){</span></span>
<span class="line"><span>	i++;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="_1-累加到-n" tabindex="-1">1 累加到 n <a class="header-anchor" href="#_1-累加到-n" aria-label="Permalink to &quot;1 累加到 n&quot;">​</a></h4><blockquote><p>因为S=1+2+3+...+n，并且，S=n+(n-1)+(n-2)+...+1，把这两个等式左右分别相加可以得到：2S=(n+1)+(n+1)+(n+1)+...+(n+1)，其中等式右边一共是n个（n+1)相加是很容易数出来的，所以得到 2S=n(n+1)，于是S=n(n+1)/2</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>n * (n + 1) / 2</span></span></code></pre></div><h4 id="取模" tabindex="-1">取模 <a class="header-anchor" href="#取模" aria-label="Permalink to &quot;取模&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>MOD = 1_000_000_007</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 加</span></span>
<span class="line"><span>(a + b) % MOD</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 减</span></span>
<span class="line"><span>(a - b + MOD) % MOD</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 取模到 [0,MOD-1] 中，无论正负</span></span>
<span class="line"><span>(a % MOD + MOD) % MOD</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 乘</span></span>
<span class="line"><span>a * b % MOD</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 多个数相乘，要步步取模，防止溢出</span></span>
<span class="line"><span>a * b % MOD * c % MOD</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 除（MOD 是质数且 b 不是 MOD 的倍数）</span></span>
<span class="line"><span>a * pow(b, MOD - 2, MOD) % MOD</span></span></code></pre></div>`,8),i=[l];function t(c,o,d,r,h,_){return s(),n("div",null,i)}const m=a(e,[["render",t]]);export{u as __pageData,m as default};
