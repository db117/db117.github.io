import{_ as a,c as s,o as n,a7 as p}from"./chunks/framework.D38zyZX2.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{"0":"E","1":"x","2":"c","3":"e","4":"l","5":" ","6":"公","7":"式"},"headers":[],"relativePath":"util/excel.md","filePath":"util/excel.md","lastUpdated":1719479022000}'),e={name:"util/excel.md"},t=p(`<h3 id="文本" tabindex="-1">文本 <a class="header-anchor" href="#文本" aria-label="Permalink to &quot;文本&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 字符串拼接</span></span>
<span class="line"><span>=A4 &amp; A5 &amp; “text”</span></span></code></pre></div><h3 id="时间" tabindex="-1">时间 <a class="header-anchor" href="#时间" aria-label="Permalink to &quot;时间&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 时间格式化</span></span>
<span class="line"><span>=TEXT(A4,&quot;yyyy年mm月dd日 hh:mm:ss&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 计算时间间隔</span></span>
<span class="line"><span>=TEXT(A2,&quot;[h]&quot;)</span></span>
<span class="line"><span>=TEXT(A2,&quot;[m]&quot;)</span></span>
<span class="line"><span>=TEXT(A2,&quot;[s]&quot;)</span></span></code></pre></div><h3 id="数字处理" tabindex="-1">数字处理 <a class="header-anchor" href="#数字处理" aria-label="Permalink to &quot;数字处理&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 固定数字位数 固定为 8 位，不够补0</span></span>
<span class="line"><span>=TEXT(A4,&quot;00000000&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 阿拉伯数字转中文数字 </span></span>
<span class="line"><span>=TEXT(A1,&quot;[DBnum1]&quot;) </span></span>
<span class="line"><span></span></span>
<span class="line"><span># 百分比</span></span>
<span class="line"><span>=TEXT(0.285,&quot;0.0%&quot;)   </span></span>
<span class="line"><span></span></span>
<span class="line"><span># 给数字加上千分位，保留 2 位小数</span></span>
<span class="line"><span>=TEXT(1234.567,&quot;$#,##0.00&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 科学计数法</span></span>
<span class="line"><span>=TEXT(12200000,&quot;0.00E+00&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 四舍五入</span></span>
<span class="line"><span>=ROUND(F4,2)</span></span></code></pre></div>`,6),l=[t];function i(c,o,d,u,h,r){return n(),s("div",null,l)}const q=a(e,[["render",i]]);export{m as __pageData,q as default};
