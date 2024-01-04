import{_ as a,c as s,o as n,U as e}from"./chunks/framework.L6XTt9Gt.js";const g=JSON.parse('{"title":"PostgreSQL","description":"","frontmatter":{"title":"PostgreSQL"},"headers":[],"relativePath":"database/postgreSql/index.md","filePath":"database/postgreSql/index.md","lastUpdated":1704353670000}'),p={name:"database/postgreSql/index.md"},l=e(`<h4 id="不存在则插入-存在则更新" tabindex="-1">不存在则插入/存在则更新 <a class="header-anchor" href="#不存在则插入-存在则更新" aria-label="Permalink to &quot;不存在则插入/存在则更新&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>-- 1、主键id不重复就插入，否则更新</span></span>
<span class="line"><span>insert into 表名称 (字段a, 字段b, ...)</span></span>
<span class="line"><span>            values</span></span>
<span class="line"><span>            (value_a, value_b, ...)</span></span>
<span class="line"><span>            on conflict (主键id)</span></span>
<span class="line"><span>            do</span></span>
<span class="line"><span>            update set ...略</span></span>
<span class="line"><span>            -- 也可以直接 DO NOTHING; 什么都不做</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 2、直接绑定主键名称，主键重复则更新</span></span>
<span class="line"><span>insert into 表名称 (字段a, 字段b, ...)</span></span>
<span class="line"><span>            values</span></span>
<span class="line"><span>            (value_a, value_b, ...)</span></span>
<span class="line"><span>            on conflict on constraint this_table_key</span></span>
<span class="line"><span>            do</span></span>
<span class="line"><span>            update set ...略</span></span></code></pre></div><h4 id="唯一主键-null-值唯一" tabindex="-1">唯一主键 null 值唯一 <a class="header-anchor" href="#唯一主键-null-值唯一" aria-label="Permalink to &quot;唯一主键 null 值唯一&quot;">​</a></h4><p>以前唯一主键对于有 null 都认为是不同的值，在 15 版本中添加了新功能可以解决这个问题。<a href="https://www.postgresql.org/docs/15/release-15.html#id-1.11.6.5.5.3.4" target="_blank" rel="noreferrer">https://www.postgresql.org/docs/15/release-15.html#id-1.11.6.5.5.3.4</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>-- 添加唯一约束</span></span>
<span class="line"><span>ALTER TABLE favorites</span></span>
<span class="line"><span>ADD CONSTRAINT favo_uni UNIQUE NULLS NOT DISTINCT (user_id, menu_id, recipe_id);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 添加联合主键</span></span>
<span class="line"><span>CREATE UNIQUE INDEX favo_uni_idx</span></span>
<span class="line"><span>ON favorites (user_id, menu_id, recipe_id) NULLS NOT DISTINCT;</span></span></code></pre></div><h4 id="复制表结构" tabindex="-1">复制表结构 <a class="header-anchor" href="#复制表结构" aria-label="Permalink to &quot;复制表结构&quot;">​</a></h4><p><code>INCLUDING</code> 关键字后面可以跟多个参数，以指定需要复制的旧表的哪些特性。以下是常用的参数以及它们的含义：</p><ul><li><code>ALL</code>：复制所有特性。</li><li><code>DEFAULTS</code>：复制默认值。</li><li><code>CONSTRAINTS</code>：复制所有约束。</li><li><code>INDEXES</code>：复制所有索引。</li><li><code>TRIGGERS</code>：复制所有触发器。</li><li><code>STORAGE</code>：复制存储属性、统计信息和填充因子。</li><li><code>COMMENTS</code>：复制注释。</li><li><code>STATISTICS</code>：复制统计信息。</li><li><code>COLLATION</code>：复制排序规则。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 复制表 table_name </span></span>
<span class="line"><span>create table if not exists table_name_copy (like table_name including all );</span></span></code></pre></div><h4 id="查看当前用户是否有某个角色" tabindex="-1">查看当前用户是否有某个角色 <a class="header-anchor" href="#查看当前用户是否有某个角色" aria-label="Permalink to &quot;查看当前用户是否有某个角色&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 查看当前用户是否有 pg_monitor 角色</span></span>
<span class="line"><span>SELECT pg_has_role(current_user, &#39;pg_monitor&#39;, &#39;member&#39;);</span></span></code></pre></div>`,11),i=[l];function t(o,c,d,r,h,u){return n(),s("div",null,i)}const b=a(p,[["render",t]]);export{g as __pageData,b as default};
