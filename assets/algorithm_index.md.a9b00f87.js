import{_ as a,o as n,c as s,U as e}from"./chunks/framework.190aac23.js";const C=JSON.parse('{"title":"算法","description":"","frontmatter":{"title":"算法"},"headers":[],"relativePath":"algorithm/index.md","filePath":"algorithm/index.md","lastUpdated":1689760198000}'),t={name:"algorithm/index.md"},l=e(`<h2 id="小技巧" tabindex="-1">小技巧 <a class="header-anchor" href="#小技巧" aria-label="Permalink to &quot;小技巧&quot;">​</a></h2><h4 id="向上取整" tabindex="-1">向上取整 <a class="header-anchor" href="#向上取整" aria-label="Permalink to &quot;向上取整&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">(m + (n - 1)) / n; </span></span>
<span class="line"><span style="color:#A6ACCD;">相当于</span></span>
<span class="line"><span style="color:#A6ACCD;">int i=m/n;</span></span>
<span class="line"><span style="color:#A6ACCD;">if(m%n!=0){</span></span>
<span class="line"><span style="color:#A6ACCD;">	i++;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h4 id="_1-累加到-n" tabindex="-1">1 累加到 n <a class="header-anchor" href="#_1-累加到-n" aria-label="Permalink to &quot;1 累加到 n&quot;">​</a></h4><blockquote><p>因为S=1+2+3+...+n，并且，S=n+(n-1)+(n-2)+...+1，把这两个等式左右分别相加可以得到：2S=(n+1)+(n+1)+(n+1)+...+(n+1)，其中等式右边一共是n个（n+1)相加是很容易数出来的，所以得到 2S=n(n+1)，于是S=n(n+1)/2</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">n * (n + 1) / 2</span></span></code></pre></div>`,6),o=[l];function i(p,c,r,d,h,_){return n(),s("div",null,o)}const u=a(t,[["render",i]]);export{C as __pageData,u as default};