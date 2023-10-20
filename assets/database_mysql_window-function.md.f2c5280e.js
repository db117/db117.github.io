import{_ as e,o as a,c as s,Q as l}from"./chunks/framework.54cab62e.js";const y=JSON.parse('{"title":"窗口函数","description":"","frontmatter":{"title":"窗口函数"},"headers":[],"relativePath":"database/mysql/window-function.md","filePath":"database/mysql/window-function.md","lastUpdated":1697773070000}'),n={name:"database/mysql/window-function.md"},o=l(`<blockquote><p>查询数据是对多行数据进行处理并在当前行展示</p></blockquote><h2 id="备忘单" tabindex="-1">备忘单 <a class="header-anchor" href="#备忘单" aria-label="Permalink to &quot;备忘单&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"></span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"></span></span></code></pre></div><h2 id="函数" tabindex="-1">函数 <a class="header-anchor" href="#函数" aria-label="Permalink to &quot;函数&quot;">​</a></h2><h3 id="窗口框架" tabindex="-1">窗口框架 <a class="header-anchor" href="#窗口框架" aria-label="Permalink to &quot;窗口框架&quot;">​</a></h3><blockquote><p>定义了窗口范围</p><p><strong>当值为<code>null</code>时排序会排在前面</strong>。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">frame_clause:</span></span>
<span class="line"><span style="color:#e1e4e8;">    frame_units frame_extent</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">frame_units:</span></span>
<span class="line"><span style="color:#e1e4e8;">    {ROWS | RANGE}</span></span>
<span class="line"><span style="color:#e1e4e8;">    </span></span>
<span class="line"><span style="color:#e1e4e8;">frame_extent:</span></span>
<span class="line"><span style="color:#e1e4e8;">    {frame_start | frame_between}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">frame_between:</span></span>
<span class="line"><span style="color:#e1e4e8;">    BETWEEN frame_start AND frame_end</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">frame_start, frame_end: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    CURRENT ROW</span></span>
<span class="line"><span style="color:#e1e4e8;">  | UNBOUNDED PRECEDING</span></span>
<span class="line"><span style="color:#e1e4e8;">  | UNBOUNDED FOLLOWING</span></span>
<span class="line"><span style="color:#e1e4e8;">  | expr PRECEDING</span></span>
<span class="line"><span style="color:#e1e4e8;">  | expr FOLLOWING</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">frame_clause:</span></span>
<span class="line"><span style="color:#24292e;">    frame_units frame_extent</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">frame_units:</span></span>
<span class="line"><span style="color:#24292e;">    {ROWS | RANGE}</span></span>
<span class="line"><span style="color:#24292e;">    </span></span>
<span class="line"><span style="color:#24292e;">frame_extent:</span></span>
<span class="line"><span style="color:#24292e;">    {frame_start | frame_between}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">frame_between:</span></span>
<span class="line"><span style="color:#24292e;">    BETWEEN frame_start AND frame_end</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">frame_start, frame_end: {</span></span>
<span class="line"><span style="color:#24292e;">    CURRENT ROW</span></span>
<span class="line"><span style="color:#24292e;">  | UNBOUNDED PRECEDING</span></span>
<span class="line"><span style="color:#24292e;">  | UNBOUNDED FOLLOWING</span></span>
<span class="line"><span style="color:#24292e;">  | expr PRECEDING</span></span>
<span class="line"><span style="color:#24292e;">  | expr FOLLOWING</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>窗口边界定义</p><ul><li><code>CURRENT ROW</code>: 对于<code>ROWS</code>, 当前行. 对于 <code>RANGE</code>, 指当前级别</li><li><code>UNBOUNDED PRECEDING</code>: 分区上界</li><li><code>UNBOUNDED FOLLOWING</code>: 分区下界</li><li><code>expr PRECEDING</code>: 对于<code>ROWS</code>, 当前行前面数据. 对于<code>RANGE</code>, 针对当前级别</li><li><code>expr FOLLOWING</code>: 对于<code>ROWS</code>, 当前行后面数据. 对于<code>RANGE</code>, 针对当前级别</li></ul><p>针对于 <code>ORDER BY</code></p><ul><li>如果有<code>ORDER BY</code><ul><li>对于聚合函数，分组开始到当前行</li><li>对于非聚合函数，对整个分组</li></ul></li><li>没有<code>ORDER BY</code> ，默认为整个分组</li></ul><h3 id="非聚合" tabindex="-1">非聚合 <a class="header-anchor" href="#非聚合" aria-label="Permalink to &quot;非聚合&quot;">​</a></h3><blockquote><p>所有函数后面都可以加 <code>over(partition by col order by col)</code> 表示按照某些字段进行分组，排序</p></blockquote><h4 id="排序" tabindex="-1">排序 <a class="header-anchor" href="#排序" aria-label="Permalink to &quot;排序&quot;">​</a></h4><blockquote><p>主要用在分页，或者排名的情况下。</p></blockquote><ul><li>ROW_NUMBER() <ul><li>排序并分配序号</li></ul></li><li>RANK() <ul><li>排序并分配序号，排序值相同则需要相同</li><li>两个不同的排序值可能会有间隔（如 1,2,2,4,4,4,7）</li></ul></li><li>DENSE_RANK() <ul><li>排序并分配序号，排序值相同则需要相同</li><li>两个不同的排序值没有间隔（如 1,2,2,3,3,3,4）</li></ul></li></ul><h4 id="获取相对行" tabindex="-1">获取相对行 <a class="header-anchor" href="#获取相对行" aria-label="Permalink to &quot;获取相对行&quot;">​</a></h4><blockquote><p>一般情况下我们会对数据进行排序，因为只有在有序的情况下，前面多少行和后面多少行才有意义</p><p>可以用在某些场景下代替自关联的写法</p></blockquote><ul><li>LAG(col,n,DEFAULT) <ul><li>获取当前行前的第几行数据</li><li>如不指定默认值则为 null</li></ul></li><li>LEAD(col,n,DEFAULT) <ul><li>同 <code>LAG</code> 但是向后面找数据</li></ul></li></ul><h4 id="指定行" tabindex="-1">指定行 <a class="header-anchor" href="#指定行" aria-label="Permalink to &quot;指定行&quot;">​</a></h4><blockquote><p>获取分组指定行</p></blockquote><ul><li>FIRST_VALUE() <ul><li>第一行</li></ul></li><li>LAST_VALUE() <ul><li>最后一行</li><li>在没有<code>order by</code>的情况下，是整个分组的最后一个。有的情况下是当前行</li></ul></li><li>NTH_VALUE() <ul><li>分组内第几行</li></ul></li></ul><h3 id="聚合" tabindex="-1">聚合 <a class="header-anchor" href="#聚合" aria-label="Permalink to &quot;聚合&quot;">​</a></h3><blockquote><p>注意又<code>order by</code>的情况下，<code>frame</code>默认到当前行</p></blockquote><ul><li><p>AVG()</p></li><li><p>COUNT()</p></li><li><p>MAX()</p></li><li><p>MIN()</p></li><li><p>SUM()</p></li></ul>`,25),p=[o];function c(i,t,r,d,u,h){return a(),s("div",null,p)}const b=e(n,[["render",c]]);export{y as __pageData,b as default};
