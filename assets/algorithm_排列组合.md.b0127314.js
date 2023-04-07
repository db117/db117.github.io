import{_ as s,c as a,o as n,U as e}from"./chunks/framework.6f6f51de.js";const A=JSON.parse('{"title":"排列组合","description":"","frontmatter":{"title":"排列组合"},"headers":[],"relativePath":"algorithm/排列组合.md","lastUpdated":1680861403000}'),l={name:"algorithm/排列组合.md"},o=e(`<h2 id="排列" tabindex="-1">排列 <a class="header-anchor" href="#排列" aria-label="Permalink to &quot;排列&quot;">​</a></h2><blockquote><p>所谓排列组合，排列在组合之前，咱们要聊的第一个概念是“排列”，排列的英文是 Permutation 或者 Arrangement，因此在数学符号中，用 P 或者 A 表示都可以，二者意思完全一样。</p><p>我们常见的 P 右边会跟两个数字（或字母），右下角的数字 n 表示总数，右上角的数字 m 表示抽出的个数。整个符号的意思是“从 n 个人中，<strong>有顺序地</strong>抽出 m 个人的抽法数”，可以读作“P n 抽 m”。</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">m    n!</span></span>
<span class="line"><span style="color:#A6ACCD;">P = ------ = n(n-1)(n-2)....(n-m+1)</span></span>
<span class="line"><span style="color:#A6ACCD;"> n   (n-m)!</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> 从大的数字开始往小乘，乘“小的数字那么多”个</span></span></code></pre></div><h2 id="组合" tabindex="-1">组合 <a class="header-anchor" href="#组合" aria-label="Permalink to &quot;组合&quot;">​</a></h2><blockquote><p>组合的英文是 Combination，因此在数学符号中用 C 表示</p><p>C 右边会跟两个数字（或字母），右下角的数字 n 表示总数，右上角的数字 m 表示抽出的个数。整个符号的意思是“从 n 个人中，<strong>不计顺序地</strong>抽出 m 个人的抽法数”，可以读作“C n 抽 m”。</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">m      n!         n(n-1)(n-2)....(n-m+1)</span></span>
<span class="line"><span style="color:#A6ACCD;">C  = --------- = --------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"> n    (n-m)!m!       m(m-1)(m-2)....1</span></span></code></pre></div><blockquote><p>从大的数字开始往小乘，乘“小的数字那么多”个，再除以“小的数字开始往小乘，乘小的数字那么多个”</p></blockquote><h3 id="组合公式" tabindex="-1">组合公式 <a class="header-anchor" href="#组合公式" aria-label="Permalink to &quot;组合公式&quot;">​</a></h3><blockquote><p>反选</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">m    n-m</span></span>
<span class="line"><span style="color:#A6ACCD;">C =  C </span></span>
<span class="line"><span style="color:#A6ACCD;"> n    n</span></span></code></pre></div><blockquote><p>组合相加</p><p>简单可以理解为<strong>上面的数字取大的，底下的数字加一。</strong></p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">m-1     n-m     m</span></span>
<span class="line"><span style="color:#A6ACCD;">C    +  C    = C </span></span>
<span class="line"><span style="color:#A6ACCD;"> n       n       n+1</span></span></code></pre></div><blockquote><p>&quot;底下相同的”组合数相加</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">0       1      2         n     n</span></span>
<span class="line"><span style="color:#A6ACCD;">C    +  C   +  C  ...  + C   = 2</span></span>
<span class="line"><span style="color:#A6ACCD;"> n       n      n         n</span></span></code></pre></div><blockquote><p>“上面相同的”组合数相加</p><p>记忆方法:和为上面下面都加一</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">r       r      r         r     r+1</span></span>
<span class="line"><span style="color:#A6ACCD;">C    +  C   +  C  ...  + C   = C</span></span>
<span class="line"><span style="color:#A6ACCD;"> r       r+1    r+2       n     n+1</span></span></code></pre></div>`,16),p=[o];function t(c,i,r,C,d,m){return n(),a("div",null,p)}const h=s(l,[["render",t]]);export{A as __pageData,h as default};
