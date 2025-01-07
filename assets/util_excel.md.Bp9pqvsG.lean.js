import{_ as a,c as n,a3 as p,o as e}from"./chunks/framework.SFEPx7-A.js";const r=JSON.parse('{"title":"Excel 公式","description":"","frontmatter":{"title":"Excel 公式"},"headers":[],"relativePath":"util/excel.md","filePath":"util/excel.md"}'),l={name:"util/excel.md"};function t(i,s,o,c,u,d){return e(),n("div",null,s[0]||(s[0]=[p(`<h3 id="文本" tabindex="-1">文本 <a class="header-anchor" href="#文本" aria-label="Permalink to &quot;文本&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 字符串拼接</span></span>
<span class="line"><span>=A4 &amp; A5 &amp; “text”</span></span>
<span class="line"><span>=CONCAT(&quot;&quot;,&quot;&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 替换字符串</span></span>
<span class="line"><span>=SUBSTITUTE(A1, &quot;1&quot;, &quot;&quot;)</span></span>
<span class="line"><span># 替换多个字符串</span></span>
<span class="line"><span>=SUBSTITUTE(=SUBSTITUTE(A1, &quot;1&quot;, &quot;&quot;), &quot;2&quot;, &quot;&quot;)</span></span>
<span class="line"><span># 替换字符串为特殊符号</span></span>
<span class="line"><span>=SUBSTITUTE(A1, &quot;&quot;&quot;&quot;, CHAR(10))</span></span></code></pre></div><h3 id="时间" tabindex="-1">时间 <a class="header-anchor" href="#时间" aria-label="Permalink to &quot;时间&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 时间格式化</span></span>
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
<span class="line"><span>=ROUND(F4,2)</span></span></code></pre></div><h3 id="数据引用" tabindex="-1">数据引用 <a class="header-anchor" href="#数据引用" aria-label="Permalink to &quot;数据引用&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 列转行，行转列</span></span>
<span class="line"><span>=TRANSPOSE(A2:A12)</span></span>
<span class="line"><span>=IF(TRANSPOSE(sheet1!B2:B12)=&quot;&quot;,&quot;&quot;,TRANSPOSE(sheet1!B2:B12))</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 当前列的某一行</span></span>
<span class="line"><span>=INDIRECT(ADDRESS(1,COLUMN()))</span></span>
<span class="line"><span># 当前行的某一列</span></span>
<span class="line"><span>=INDIRECT(&quot;M&quot;&amp;ROW())</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 行列转换（放在区域的左上角，拉倒右下角）</span></span>
<span class="line"><span>=INDEX($A$1:$C$3, COLUMN(A1), ROW(A1))</span></span></code></pre></div><h4 id="引用其他工作表的单元格" tabindex="-1">引用其他工作表的单元格 <a class="header-anchor" href="#引用其他工作表的单元格" aria-label="Permalink to &quot;引用其他工作表的单元格&quot;">​</a></h4><ol><li><strong>使用工作表名称</strong>: <ul><li>语法: <code>工作表名称!单元格地址</code></li><li>例如: <code>Sheet2!A1</code> 表示引用 Sheet2 工作表的 A1 单元格。</li></ul></li><li><strong>使用定义名称</strong>: <ul><li>如果你已经为某个单元格区域定义了名称,也可以直接使用该名称进行引用。</li><li>例如: 如果你将 Sheet2!A1:B10 定义为 &quot;SalesData&quot;,则可以直接使用 <code>SalesData</code> 进行引用。</li></ul></li><li><strong>使用完整路径</strong>: <ul><li>语法: <code>[工作簿名称].[工作表名称]!单元格地址</code></li><li>例如: <code>[Demo.xlsx]Sheet2!A1</code> 表示引用 Demo.xlsx 文件中 Sheet2 工作表的 A1 单元格。</li></ul></li></ol>`,10)]))}const q=a(l,[["render",t]]);export{r as __pageData,q as default};
