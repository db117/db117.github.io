import{gt as e,nt as t,s as n,tt as r}from"./chunks/framework.BqU7tCwc.js";var i=JSON.parse(`{"title":"算法","description":"","frontmatter":{"title":"算法"},"headers":[],"relativePath":"other/algorithm/index.md","filePath":"other/algorithm/index.md","lastUpdated":1784887501000}`),a={name:`other/algorithm/index.md`};function o(n,i,a,o,s,c){return e(),r(`div`,null,[...i[0]||=[t(`<h2 id="小技巧" tabindex="-1">小技巧 <a class="header-anchor" href="#小技巧" aria-label="Permalink to “小技巧”">​</a></h2><h4 id="向上取整" tabindex="-1">向上取整 <a class="header-anchor" href="#向上取整" aria-label="Permalink to “向上取整”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>(m + (n - 1)) / n; </span></span>
<span class="line"><span>相当于</span></span>
<span class="line"><span>int i=m/n;</span></span>
<span class="line"><span>if(m%n!=0){</span></span>
<span class="line"><span>	i++;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="_1-累加到-n" tabindex="-1">1 累加到 n <a class="header-anchor" href="#_1-累加到-n" aria-label="Permalink to “1 累加到 n”">​</a></h4><blockquote><p>因为S=1+2+3+...+n，并且，S=n+(n-1)+(n-2)+...+1，把这两个等式左右分别相加可以得到：2S=(n+1)+(n+1)+(n+1)+...+(n+1)，其中等式右边一共是n个（n+1)相加是很容易数出来的，所以得到 2S=n(n+1)，于是S=n(n+1)/2</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>n * (n + 1) / 2</span></span></code></pre></div><h4 id="取模" tabindex="-1">取模 <a class="header-anchor" href="#取模" aria-label="Permalink to “取模”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>MOD = 1_000_000_007</span></span>
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
<span class="line"><span>a * pow(b, MOD - 2, MOD) % MOD</span></span></code></pre></div>`,8)]])}var s=n(a,[[`render`,o]]);export{i as __pageData,s as default};