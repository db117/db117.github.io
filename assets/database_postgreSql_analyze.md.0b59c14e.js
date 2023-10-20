import{_ as s,o as a,c as e,Q as n}from"./chunks/framework.54cab62e.js";const b=JSON.parse('{"title":"sql 分析","description":"","frontmatter":{"title":"sql 分析"},"headers":[],"relativePath":"database/postgreSql/analyze.md","filePath":"database/postgreSql/analyze.md","lastUpdated":1697773070000}'),l={name:"database/postgreSql/analyze.md"},p=n(`<h3 id="执行状态" tabindex="-1">执行状态 <a class="header-anchor" href="#执行状态" aria-label="Permalink to &quot;执行状态&quot;">​</a></h3><ul><li><p>查询正在执行的 SQL</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">SELECT</span></span>
<span class="line"><span style="color:#e1e4e8;">    procpid,</span></span>
<span class="line"><span style="color:#e1e4e8;">    start,</span></span>
<span class="line"><span style="color:#e1e4e8;">    now() - start AS lap,</span></span>
<span class="line"><span style="color:#e1e4e8;">    current_query</span></span>
<span class="line"><span style="color:#e1e4e8;">FROM</span></span>
<span class="line"><span style="color:#e1e4e8;">    (SELECT</span></span>
<span class="line"><span style="color:#e1e4e8;">         backendid,</span></span>
<span class="line"><span style="color:#e1e4e8;">         pg_stat_get_backend_pid(S.backendid) AS procpid,</span></span>
<span class="line"><span style="color:#e1e4e8;">         pg_stat_get_backend_activity_start(S.backendid) AS start,</span></span>
<span class="line"><span style="color:#e1e4e8;">         pg_stat_get_backend_activity(S.backendid) AS current_query</span></span>
<span class="line"><span style="color:#e1e4e8;">     FROM</span></span>
<span class="line"><span style="color:#e1e4e8;">         (SELECT pg_stat_get_backend_idset() AS backendid) AS S</span></span>
<span class="line"><span style="color:#e1e4e8;">    ) AS S</span></span>
<span class="line"><span style="color:#e1e4e8;">where start is not null</span></span>
<span class="line"><span style="color:#e1e4e8;">ORDER BY</span></span>
<span class="line"><span style="color:#e1e4e8;">    lap DESC;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">SELECT</span></span>
<span class="line"><span style="color:#24292e;">    procpid,</span></span>
<span class="line"><span style="color:#24292e;">    start,</span></span>
<span class="line"><span style="color:#24292e;">    now() - start AS lap,</span></span>
<span class="line"><span style="color:#24292e;">    current_query</span></span>
<span class="line"><span style="color:#24292e;">FROM</span></span>
<span class="line"><span style="color:#24292e;">    (SELECT</span></span>
<span class="line"><span style="color:#24292e;">         backendid,</span></span>
<span class="line"><span style="color:#24292e;">         pg_stat_get_backend_pid(S.backendid) AS procpid,</span></span>
<span class="line"><span style="color:#24292e;">         pg_stat_get_backend_activity_start(S.backendid) AS start,</span></span>
<span class="line"><span style="color:#24292e;">         pg_stat_get_backend_activity(S.backendid) AS current_query</span></span>
<span class="line"><span style="color:#24292e;">     FROM</span></span>
<span class="line"><span style="color:#24292e;">         (SELECT pg_stat_get_backend_idset() AS backendid) AS S</span></span>
<span class="line"><span style="color:#24292e;">    ) AS S</span></span>
<span class="line"><span style="color:#24292e;">where start is not null</span></span>
<span class="line"><span style="color:#24292e;">ORDER BY</span></span>
<span class="line"><span style="color:#24292e;">    lap DESC;</span></span></code></pre></div></li><li><p>结束正在进行的查询</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">select pg_cancel_backend(pid);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">select pg_cancel_backend(pid);</span></span></code></pre></div></li><li><p>结束正在执行操作(修改修改数据库操作)</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">select pg_terminate_backend(pid)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">select pg_terminate_backend(pid)</span></span></code></pre></div></li><li><p>查询最耗时的SQL</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">select * from pg_stat_statements order by total_time desc limit 5;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">select * from pg_stat_statements order by total_time desc limit 5;</span></span></code></pre></div></li><li><p>查询使用Buffer次数最多的SQL</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">select * from pg_stat_statements order by shared_blks_hit+shared_blks_read desc limit 5;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">select * from pg_stat_statements order by shared_blks_hit+shared_blks_read desc limit 5;</span></span></code></pre></div></li></ul><h3 id="explain" tabindex="-1">EXPLAIN <a class="header-anchor" href="#explain" aria-label="Permalink to &quot;EXPLAIN&quot;">​</a></h3><h4 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h4><ul><li><code>ANALYZE</code> [ boolean ] : 是否真正执行 该选项默认为FALSE。</li><li><code>VERBOSE</code> [ boolean ] : 计划中每个节点输出的各个列，如果触发器被触发，还会输出触发器的名称。该选项默认为FALSE。</li><li><code>COSTS</code> [ boolean ] : 选项显示每个计划节点的启动成本和总成本，以及估计行数和每行宽度。该选项默认是TRUE。</li><li><code>BUFFERS</code> [ boolean ] : 选项显示关于缓存区的信息。该选项只能与ANALYZE参数一起使用。该选项默认为FALSE。</li><li><code>TIMING</code> [ boolean ] : 记录每一步的时间 默认是TRUE。</li><li><code>FORMAT</code> { TEXT | XML | JSON | YAML } : 输出格式,默认 text</li></ul><h4 id="结果分析" tabindex="-1">结果分析 <a class="header-anchor" href="#结果分析" aria-label="Permalink to &quot;结果分析&quot;">​</a></h4><p>扫描类型</p><ul><li>全表扫描 (seq scan)</li><li>索引扫描(Index Scan)</li><li>位图扫描(Bitmap)</li></ul><p>表关联</p><ul><li>Nestloop join <ul><li>循环第一张表,去第二张表查询数据</li><li>小表驱动大表,大表最好有索引</li></ul></li><li>Hash join <ul><li>对一张表建立 hash ,然后扫描另一张表</li></ul></li><li>Merge Join <ul><li>对两张表进行排序,然后合并</li></ul></li></ul><h4 id="小技巧" tabindex="-1">小技巧 <a class="header-anchor" href="#小技巧" aria-label="Permalink to &quot;小技巧&quot;">​</a></h4><p>对于分析插入更新的语句，我们我们是可以把ANALYZE放到事物里面的，分析后之后回滚</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">BEGIN;</span></span>
<span class="line"><span style="color:#e1e4e8;">EXPLAIN ANALYZE ...;</span></span>
<span class="line"><span style="color:#e1e4e8;">ROLLBACK;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">BEGIN;</span></span>
<span class="line"><span style="color:#24292e;">EXPLAIN ANALYZE ...;</span></span>
<span class="line"><span style="color:#24292e;">ROLLBACK;</span></span></code></pre></div>`,13),t=[p];function c(o,i,r,d,_,h){return a(),e("div",null,t)}const g=s(l,[["render",c]]);export{b as __pageData,g as default};
