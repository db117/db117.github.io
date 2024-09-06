import{_ as s,c as n,a3 as e,o as p}from"./chunks/framework.BChxy9sN.js";const h=JSON.parse('{"title":"Excel 公式","description":"","frontmatter":{"title":"Excel 公式"},"headers":[],"relativePath":"util/excel.md","filePath":"util/excel.md"}'),l={name:"util/excel.md"};function t(i,a,o,c,d,u){return p(),n("div",null,a[0]||(a[0]=[e(`<h3 id="文本" tabindex="-1">文本 <a class="header-anchor" href="#文本" aria-label="Permalink to &quot;文本&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 字符串拼接</span></span>
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
<span class="line"><span>=ROUND(F4,2)</span></span></code></pre></div><h4 id="引用其他工作表的单元格" tabindex="-1">引用其他工作表的单元格 <a class="header-anchor" href="#引用其他工作表的单元格" aria-label="Permalink to &quot;引用其他工作表的单元格&quot;">​</a></h4><ol><li><strong>使用工作表名称</strong>: <ul><li>语法: <code>工作表名称!单元格地址</code></li><li>例如: <code>Sheet2!A1</code> 表示引用 Sheet2 工作表的 A1 单元格。</li></ul></li><li><strong>使用定义名称</strong>: <ul><li>如果你已经为某个单元格区域定义了名称,也可以直接使用该名称进行引用。</li><li>例如: 如果你将 Sheet2!A1:B10 定义为 &quot;SalesData&quot;,则可以直接使用 <code>SalesData</code> 进行引用。</li></ul></li><li><strong>使用完整路径</strong>: <ul><li>语法: <code>[工作簿名称].[工作表名称]!单元格地址</code></li><li>例如: <code>[Demo.xlsx]Sheet2!A1</code> 表示引用 Demo.xlsx 文件中 Sheet2 工作表的 A1 单元格。</li></ul></li></ol>`,8)]))}const m=s(l,[["render",t]]);export{h as __pageData,m as default};
