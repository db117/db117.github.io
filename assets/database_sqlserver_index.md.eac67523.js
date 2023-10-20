import{_ as s,o as a,c as e,Q as n}from"./chunks/framework.54cab62e.js";const g=JSON.parse('{"title":"sqlserver","description":"","frontmatter":{"title":"sqlserver"},"headers":[],"relativePath":"database/sqlserver/index.md","filePath":"database/sqlserver/index.md","lastUpdated":1697773070000}'),l={name:"database/sqlserver/index.md"},p=n(`<h3 id="官方文档" tabindex="-1">官方文档 <a class="header-anchor" href="#官方文档" aria-label="Permalink to &quot;官方文档&quot;">​</a></h3><blockquote><p><a href="https://docs.microsoft.com/zh-cn/sql/sql-server/sql-docs-navigation-guide?view=sql-server-ver15" target="_blank" rel="noreferrer">SQL Server 文档导航提示 - SQL Server | Microsoft Docs</a></p></blockquote><h4 id="获取前-n-条数据" tabindex="-1">获取前 n 条数据 <a class="header-anchor" href="#获取前-n-条数据" aria-label="Permalink to &quot;获取前 n 条数据&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">SELECT TOP(10) *  FROM table_name;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">SELECT TOP(10) *  FROM table_name;</span></span></code></pre></div><h4 id="获取数据库名称" tabindex="-1">获取数据库名称 <a class="header-anchor" href="#获取数据库名称" aria-label="Permalink to &quot;获取数据库名称&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">select db_name()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">select db_name()</span></span></code></pre></div><h4 id="触发器-mybatis-异常" tabindex="-1">触发器 mybatis 异常 <a class="header-anchor" href="#触发器-mybatis-异常" aria-label="Permalink to &quot;触发器 mybatis 异常&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">-- 在触发线执行 sql 前加入</span></span>
<span class="line"><span style="color:#e1e4e8;">SET NOCOUNT ON;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">。。。。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">-- 在触发线执行 sql 后加入</span></span>
<span class="line"><span style="color:#e1e4e8;">SET NOCOUNT OFF;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">-- 在触发线执行 sql 前加入</span></span>
<span class="line"><span style="color:#24292e;">SET NOCOUNT ON;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">。。。。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">-- 在触发线执行 sql 后加入</span></span>
<span class="line"><span style="color:#24292e;">SET NOCOUNT OFF;</span></span></code></pre></div><h4 id="使用-transact-sql-语句在结果集内进行浏览" tabindex="-1">使用 Transact-SQL 语句在结果集内进行浏览 <a class="header-anchor" href="#使用-transact-sql-语句在结果集内进行浏览" aria-label="Permalink to &quot;使用 Transact-SQL 语句在结果集内进行浏览&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">-- 定义字段</span></span>
<span class="line"><span style="color:#e1e4e8;">declare @au_id char( 11 )</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">-- 每次查询是更新最小 id</span></span>
<span class="line"><span style="color:#e1e4e8;">select @au_id = min( au_id ) from authors</span></span>
<span class="line"><span style="color:#e1e4e8;">while @au_id is not null</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">begin</span></span>
<span class="line"><span style="color:#e1e4e8;">select * from authors where au_id = @au_id</span></span>
<span class="line"><span style="color:#e1e4e8;">select @au_id = min( au_id ) from authors where au_id &gt; @au_id</span></span>
<span class="line"><span style="color:#e1e4e8;">end</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">-- 定义字段</span></span>
<span class="line"><span style="color:#24292e;">declare @au_id char( 11 )</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">-- 每次查询是更新最小 id</span></span>
<span class="line"><span style="color:#24292e;">select @au_id = min( au_id ) from authors</span></span>
<span class="line"><span style="color:#24292e;">while @au_id is not null</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">begin</span></span>
<span class="line"><span style="color:#24292e;">select * from authors where au_id = @au_id</span></span>
<span class="line"><span style="color:#24292e;">select @au_id = min( au_id ) from authors where au_id &gt; @au_id</span></span>
<span class="line"><span style="color:#24292e;">end</span></span></code></pre></div><h4 id="使用-for-json-将查询结果格式化为-json-sql-server" tabindex="-1">使用 FOR JSON 将查询结果格式化为 JSON (SQL Server) <a class="header-anchor" href="#使用-for-json-将查询结果格式化为-json-sql-server" aria-label="Permalink to &quot;使用 FOR JSON 将查询结果格式化为 JSON (SQL Server)&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">SELECT *</span></span>
<span class="line"><span style="color:#e1e4e8;">FROM table_name  </span></span>
<span class="line"><span style="color:#e1e4e8;">FOR JSON</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">SELECT *</span></span>
<span class="line"><span style="color:#24292e;">FROM table_name  </span></span>
<span class="line"><span style="color:#24292e;">FOR JSON</span></span></code></pre></div><h4 id="多行数据合成一行" tabindex="-1">多行数据合成一行 <a class="header-anchor" href="#多行数据合成一行" aria-label="Permalink to &quot;多行数据合成一行&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">SELECT STUFF(( SELECT &lt;拼接的字符串&gt; FROM &lt;表&gt; FOR XML PATH(&#39;&#39;) ),1,1,&#39;&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">-- 如下</span></span>
<span class="line"><span style="color:#e1e4e8;">SELECT STUFF(( SELECT &#39;,&#39;+t.cstaffname FROM #staff  t FOR XML PATH(&#39;&#39;) ),1,1,&#39;&#39;)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">SELECT STUFF(( SELECT &lt;拼接的字符串&gt; FROM &lt;表&gt; FOR XML PATH(&#39;&#39;) ),1,1,&#39;&#39;)</span></span>
<span class="line"><span style="color:#24292e;">-- 如下</span></span>
<span class="line"><span style="color:#24292e;">SELECT STUFF(( SELECT &#39;,&#39;+t.cstaffname FROM #staff  t FOR XML PATH(&#39;&#39;) ),1,1,&#39;&#39;)</span></span></code></pre></div><h4 id="当-identity-insert-设置为-off-时-不能向表中的标识列插入显式值" tabindex="-1">当 IDENTITY_INSERT 设置为 OFF 时,不能向表中的标识列插入显式值 <a class="header-anchor" href="#当-identity-insert-设置为-off-时-不能向表中的标识列插入显式值" aria-label="Permalink to &quot;当 IDENTITY_INSERT 设置为 OFF 时,不能向表中的标识列插入显式值&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">在执行 SQL 前添加</span></span>
<span class="line"><span style="color:#e1e4e8;">set identity_insert tableName（表名） ON</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">在执行 SQL 前添加</span></span>
<span class="line"><span style="color:#24292e;">set identity_insert tableName（表名） ON</span></span></code></pre></div><h4 id="获取数据库时区与-utc-时区小时差" tabindex="-1">获取数据库时区与 utc 时区小时差 <a class="header-anchor" href="#获取数据库时区与-utc-时区小时差" aria-label="Permalink to &quot;获取数据库时区与 utc 时区小时差&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">select datediff(hour,getutcdate(),getdate());</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#24292e;">select datediff(hour,getutcdate(),getdate());</span></span></code></pre></div><h4 id="删除重复行" tabindex="-1">删除重复行 <a class="header-anchor" href="#删除重复行" aria-label="Permalink to &quot;删除重复行&quot;">​</a></h4><p>此脚本按给定顺序执行以下操作：</p><ul><li>使用 <code>ROW_NUMBER</code> 函数根据 <code>key_value</code>（可能是以逗号分隔的一列或多列）对数据进行分区。</li><li>删除所有收到大于 1 的 <code>DupRank</code> 值的记录。 此值指定记录是重复项。</li></ul><p>由于 <code>(SELECT NULL)</code> 表达式的原因，脚本不会根据任何条件对分区数据进行排序。 如果删除重复项的逻辑需要根据其他列的排序顺序选择要删除和保留的记录，则可以使用 ORDER BY 表达式来执行此操作。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">DELETE T</span></span>
<span class="line"><span style="color:#e1e4e8;">FROM</span></span>
<span class="line"><span style="color:#e1e4e8;">(</span></span>
<span class="line"><span style="color:#e1e4e8;">SELECT *</span></span>
<span class="line"><span style="color:#e1e4e8;">, DupRank = ROW_NUMBER() OVER (</span></span>
<span class="line"><span style="color:#e1e4e8;">              PARTITION BY key_value</span></span>
<span class="line"><span style="color:#e1e4e8;">              ORDER BY (SELECT NULL)</span></span>
<span class="line"><span style="color:#e1e4e8;">            )</span></span>
<span class="line"><span style="color:#e1e4e8;">FROM original_table</span></span>
<span class="line"><span style="color:#e1e4e8;">) AS T</span></span>
<span class="line"><span style="color:#e1e4e8;">WHERE DupRank &gt; 1</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">DELETE T</span></span>
<span class="line"><span style="color:#24292e;">FROM</span></span>
<span class="line"><span style="color:#24292e;">(</span></span>
<span class="line"><span style="color:#24292e;">SELECT *</span></span>
<span class="line"><span style="color:#24292e;">, DupRank = ROW_NUMBER() OVER (</span></span>
<span class="line"><span style="color:#24292e;">              PARTITION BY key_value</span></span>
<span class="line"><span style="color:#24292e;">              ORDER BY (SELECT NULL)</span></span>
<span class="line"><span style="color:#24292e;">            )</span></span>
<span class="line"><span style="color:#24292e;">FROM original_table</span></span>
<span class="line"><span style="color:#24292e;">) AS T</span></span>
<span class="line"><span style="color:#24292e;">WHERE DupRank &gt; 1</span></span></code></pre></div>`,23),o=[p];function t(c,i,r,d,h,u){return a(),e("div",null,o)}const b=s(l,[["render",t]]);export{g as __pageData,b as default};
