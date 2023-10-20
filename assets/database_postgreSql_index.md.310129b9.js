import{_ as s,o as e,c as a,Q as n}from"./chunks/framework.54cab62e.js";const h=JSON.parse('{"title":"PostgreSQL","description":"","frontmatter":{"title":"PostgreSQL"},"headers":[],"relativePath":"database/postgreSql/index.md","filePath":"database/postgreSql/index.md","lastUpdated":1697773070000}'),l={name:"database/postgreSql/index.md"},p=n(`<h4 id="不存在则插入-存在则更新" tabindex="-1">不存在则插入/存在则更新 <a class="header-anchor" href="#不存在则插入-存在则更新" aria-label="Permalink to &quot;不存在则插入/存在则更新&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">-- 1、主键id不重复就插入，否则更新</span></span>
<span class="line"><span style="color:#e1e4e8;">insert into 表名称 (字段a, 字段b, ...)</span></span>
<span class="line"><span style="color:#e1e4e8;">            values</span></span>
<span class="line"><span style="color:#e1e4e8;">            (value_a, value_b, ...)</span></span>
<span class="line"><span style="color:#e1e4e8;">            on conflict (主键id)</span></span>
<span class="line"><span style="color:#e1e4e8;">            do</span></span>
<span class="line"><span style="color:#e1e4e8;">            update set ...略</span></span>
<span class="line"><span style="color:#e1e4e8;">            -- 也可以直接 DO NOTHING; 什么都不做</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">-- 2、直接绑定主键名称，主键重复则更新</span></span>
<span class="line"><span style="color:#e1e4e8;">insert into 表名称 (字段a, 字段b, ...)</span></span>
<span class="line"><span style="color:#e1e4e8;">            values</span></span>
<span class="line"><span style="color:#e1e4e8;">            (value_a, value_b, ...)</span></span>
<span class="line"><span style="color:#e1e4e8;">            on conflict on constraint this_table_key</span></span>
<span class="line"><span style="color:#e1e4e8;">            do</span></span>
<span class="line"><span style="color:#e1e4e8;">            update set ...略</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">-- 1、主键id不重复就插入，否则更新</span></span>
<span class="line"><span style="color:#24292e;">insert into 表名称 (字段a, 字段b, ...)</span></span>
<span class="line"><span style="color:#24292e;">            values</span></span>
<span class="line"><span style="color:#24292e;">            (value_a, value_b, ...)</span></span>
<span class="line"><span style="color:#24292e;">            on conflict (主键id)</span></span>
<span class="line"><span style="color:#24292e;">            do</span></span>
<span class="line"><span style="color:#24292e;">            update set ...略</span></span>
<span class="line"><span style="color:#24292e;">            -- 也可以直接 DO NOTHING; 什么都不做</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">-- 2、直接绑定主键名称，主键重复则更新</span></span>
<span class="line"><span style="color:#24292e;">insert into 表名称 (字段a, 字段b, ...)</span></span>
<span class="line"><span style="color:#24292e;">            values</span></span>
<span class="line"><span style="color:#24292e;">            (value_a, value_b, ...)</span></span>
<span class="line"><span style="color:#24292e;">            on conflict on constraint this_table_key</span></span>
<span class="line"><span style="color:#24292e;">            do</span></span>
<span class="line"><span style="color:#24292e;">            update set ...略</span></span></code></pre></div><h4 id="唯一主键-null-值唯一" tabindex="-1">唯一主键 null 值唯一 <a class="header-anchor" href="#唯一主键-null-值唯一" aria-label="Permalink to &quot;唯一主键 null 值唯一&quot;">​</a></h4><p>以前唯一主键对于有 null 都认为是不同的值，在 15 版本中添加了新功能可以解决这个问题。<a href="https://www.postgresql.org/docs/15/release-15.html#id-1.11.6.5.5.3.4" target="_blank" rel="noreferrer">https://www.postgresql.org/docs/15/release-15.html#id-1.11.6.5.5.3.4</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">-- 添加唯一约束</span></span>
<span class="line"><span style="color:#e1e4e8;">ALTER TABLE favorites</span></span>
<span class="line"><span style="color:#e1e4e8;">ADD CONSTRAINT favo_uni UNIQUE NULLS NOT DISTINCT (user_id, menu_id, recipe_id);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">-- 添加联合主键</span></span>
<span class="line"><span style="color:#e1e4e8;">CREATE UNIQUE INDEX favo_uni_idx</span></span>
<span class="line"><span style="color:#e1e4e8;">ON favorites (user_id, menu_id, recipe_id) NULLS NOT DISTINCT;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">-- 添加唯一约束</span></span>
<span class="line"><span style="color:#24292e;">ALTER TABLE favorites</span></span>
<span class="line"><span style="color:#24292e;">ADD CONSTRAINT favo_uni UNIQUE NULLS NOT DISTINCT (user_id, menu_id, recipe_id);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">-- 添加联合主键</span></span>
<span class="line"><span style="color:#24292e;">CREATE UNIQUE INDEX favo_uni_idx</span></span>
<span class="line"><span style="color:#24292e;">ON favorites (user_id, menu_id, recipe_id) NULLS NOT DISTINCT;</span></span></code></pre></div><h4 id="复制表结构" tabindex="-1">复制表结构 <a class="header-anchor" href="#复制表结构" aria-label="Permalink to &quot;复制表结构&quot;">​</a></h4><p><code>INCLUDING</code> 关键字后面可以跟多个参数，以指定需要复制的旧表的哪些特性。以下是常用的参数以及它们的含义：</p><ul><li><code>ALL</code>：复制所有特性。</li><li><code>DEFAULTS</code>：复制默认值。</li><li><code>CONSTRAINTS</code>：复制所有约束。</li><li><code>INDEXES</code>：复制所有索引。</li><li><code>TRIGGERS</code>：复制所有触发器。</li><li><code>STORAGE</code>：复制存储属性、统计信息和填充因子。</li><li><code>COMMENTS</code>：复制注释。</li><li><code>STATISTICS</code>：复制统计信息。</li><li><code>COLLATION</code>：复制排序规则。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 复制表 table_name </span></span>
<span class="line"><span style="color:#e1e4e8;">create table if not exists table_name_copy (like table_name including all );</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 复制表 table_name </span></span>
<span class="line"><span style="color:#24292e;">create table if not exists table_name_copy (like table_name including all );</span></span></code></pre></div><h4 id="查看当前用户是否有某个角色" tabindex="-1">查看当前用户是否有某个角色 <a class="header-anchor" href="#查看当前用户是否有某个角色" aria-label="Permalink to &quot;查看当前用户是否有某个角色&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 查看当前用户是否有 pg_monitor 角色</span></span>
<span class="line"><span style="color:#e1e4e8;">SELECT pg_has_role(current_user, &#39;pg_monitor&#39;, &#39;member&#39;);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 查看当前用户是否有 pg_monitor 角色</span></span>
<span class="line"><span style="color:#24292e;">SELECT pg_has_role(current_user, &#39;pg_monitor&#39;, &#39;member&#39;);</span></span></code></pre></div>`,11),o=[p];function c(t,i,r,d,_,u){return e(),a("div",null,o)}const b=s(l,[["render",c]]);export{h as __pageData,b as default};
