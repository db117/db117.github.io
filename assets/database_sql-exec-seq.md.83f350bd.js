import{_ as s,o as e,c as n,Q as l}from"./chunks/framework.54cab62e.js";const _=JSON.parse('{"title":"sql 语句执行顺序","description":"","frontmatter":{"title":"sql 语句执行顺序"},"headers":[],"relativePath":"database/sql-exec-seq.md","filePath":"database/sql-exec-seq.md","lastUpdated":1697773070000}'),a={name:"database/sql-exec-seq.md"},p=l(`<blockquote><p>常用的 sql 中大致执行顺序</p><p>每一步都生成一个虚拟的表，供后面的表使用。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">(8) SELECT (9)DISTINCT&lt;Select_list&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">(1) FROM &lt;left_table&gt; (3) &lt;join_type&gt;JOIN&lt;right_table&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">(2) ON&lt;join_condition&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">(4) WHERE&lt;where_condition&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">(5) GROUP BY&lt;group_by_list&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">(6) WITH {CUBE|ROLLUP}</span></span>
<span class="line"><span style="color:#e1e4e8;">(7) HAVING&lt;having_condtion&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">(10) ORDER BY&lt;order_by_list&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">(11) LIMIT&lt;limit_number&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">(8) SELECT (9)DISTINCT&lt;Select_list&gt;</span></span>
<span class="line"><span style="color:#24292e;">(1) FROM &lt;left_table&gt; (3) &lt;join_type&gt;JOIN&lt;right_table&gt;</span></span>
<span class="line"><span style="color:#24292e;">(2) ON&lt;join_condition&gt;</span></span>
<span class="line"><span style="color:#24292e;">(4) WHERE&lt;where_condition&gt;</span></span>
<span class="line"><span style="color:#24292e;">(5) GROUP BY&lt;group_by_list&gt;</span></span>
<span class="line"><span style="color:#24292e;">(6) WITH {CUBE|ROLLUP}</span></span>
<span class="line"><span style="color:#24292e;">(7) HAVING&lt;having_condtion&gt;</span></span>
<span class="line"><span style="color:#24292e;">(10) ORDER BY&lt;order_by_list&gt;</span></span>
<span class="line"><span style="color:#24292e;">(11) LIMIT&lt;limit_number&gt;</span></span></code></pre></div><ul><li><p>先对 <code>from</code> 中的两个表执行笛卡尔积，在通过 <code>on</code> 进行筛选，并根据连接类型进行下一步操作。</p></li><li><p><code>where</code> 对上一步产生的虚拟表，进行过滤</p><ul><li>由于现在还没有分组，没有执行聚合函数。所以不能使用聚合函数进行个过滤。</li><li>由于还没有进行列的选取操作，所以还不能使用 <code>select</code> 中列的别名</li></ul></li><li><p><code>group by</code> 对查询的列进行分组</p><ul><li>从这一步开始可以使用 <code>select</code> 中的别名</li><li>也可以使用数组 1，2...来表示 <code>select</code> 中的列（从 1 开始算）</li></ul></li><li><p>计算聚合函数，如<code>COUNT</code>，<code>FIRST</code>，<code>AVG</code>，<code>LAST</code>，<code>MAX</code>，<code>MIN</code>，<code>SUM</code>等。</p></li><li><p><code>with</code>应用<code>ROLLUP</code>或<code>CUBE</code>，会作用在 <code>group by</code> 中多个字段的情况下</p><ul><li><p><code>ROLLUP</code>：从左往右多层次的聚合统计，相当于加上了从左到右多种组合的分组统计。</p></li><li><p><code>CUBE</code>：想当于对 group by 中的字段进行 1...n 个字段的组合进行分组</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">group 1，2，3</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">with ROLLUP</span></span>
<span class="line"><span style="color:#e1e4e8;">相当于</span></span>
<span class="line"><span style="color:#e1e4e8;">group by 1,2,3 + group by 1,2 +group 1</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">with CUBE</span></span>
<span class="line"><span style="color:#e1e4e8;">相当于</span></span>
<span class="line"><span style="color:#e1e4e8;">group by 1,2,3 +group by 1 + group by 2 + group by 3 + group by 1,2 + group by 1,3 + group by 2,3</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">group 1，2，3</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">with ROLLUP</span></span>
<span class="line"><span style="color:#24292e;">相当于</span></span>
<span class="line"><span style="color:#24292e;">group by 1,2,3 + group by 1,2 +group 1</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">with CUBE</span></span>
<span class="line"><span style="color:#24292e;">相当于</span></span>
<span class="line"><span style="color:#24292e;">group by 1,2,3 +group by 1 + group by 2 + group by 3 + group by 1,2 + group by 1,3 + group by 2,3</span></span></code></pre></div></li></ul></li><li><p><code>having</code> 对分组后的数据进行筛选</p></li><li><p><code>select</code> 把需要的列筛选出来，过滤掉不需要的列</p></li><li><p><code>distinct</code> 把重复的数据进行剔除</p></li><li><p><code>order by</code> 对数据进行排序</p></li><li><p><code>limit</code>：选择指定行</p></li></ul>`,3),o=[p];function c(t,i,r,d,y,g){return e(),n("div",null,o)}const b=s(a,[["render",c]]);export{_ as __pageData,b as default};
