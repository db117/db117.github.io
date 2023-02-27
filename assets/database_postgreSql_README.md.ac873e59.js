import{_ as s,c as a,o as n,a as e}from"./app.55d73d08.js";const D=JSON.parse('{"title":"PostgreSQL","description":"","frontmatter":{"title":"PostgreSQL"},"headers":[],"relativePath":"database/postgreSql/README.md","lastUpdated":1677490656000}'),l={name:"database/postgreSql/README.md"},p=e(`<h4 id="不存在则插入-存在则更新" tabindex="-1">不存在则插入/存在则更新 <a class="header-anchor" href="#不存在则插入-存在则更新" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">-- 1、主键id不重复就插入，否则更新</span></span>
<span class="line"><span style="color:#A6ACCD;">insert into 表名称 (字段a, 字段b, ...)</span></span>
<span class="line"><span style="color:#A6ACCD;">            values</span></span>
<span class="line"><span style="color:#A6ACCD;">            (value_a, value_b, ...)</span></span>
<span class="line"><span style="color:#A6ACCD;">            on conflict (主键id)</span></span>
<span class="line"><span style="color:#A6ACCD;">            do</span></span>
<span class="line"><span style="color:#A6ACCD;">            update set ...略</span></span>
<span class="line"><span style="color:#A6ACCD;">            -- 也可以直接 DO NOTHING; 什么都不做</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">-- 2、直接绑定主键名称，主键重复则更新</span></span>
<span class="line"><span style="color:#A6ACCD;">insert into 表名称 (字段a, 字段b, ...)</span></span>
<span class="line"><span style="color:#A6ACCD;">            values</span></span>
<span class="line"><span style="color:#A6ACCD;">            (value_a, value_b, ...)</span></span>
<span class="line"><span style="color:#A6ACCD;">            on conflict on constraint this_table_key</span></span>
<span class="line"><span style="color:#A6ACCD;">            do</span></span>
<span class="line"><span style="color:#A6ACCD;">            update set ...略</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="唯一主键-null-值唯一" tabindex="-1">唯一主键 null 值唯一 <a class="header-anchor" href="#唯一主键-null-值唯一" aria-hidden="true">#</a></h4><p>以前唯一主键对于有 null 都认为是不同的值，在 15 版本中添加了新功能可以解决这个问题。<a href="https://www.postgresql.org/docs/15/release-15.html#id-1.11.6.5.5.3.4" target="_blank" rel="noreferrer">https://www.postgresql.org/docs/15/release-15.html#id-1.11.6.5.5.3.4</a></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">-- 添加唯一约束</span></span>
<span class="line"><span style="color:#A6ACCD;">ALTER TABLE favorites</span></span>
<span class="line"><span style="color:#A6ACCD;">ADD CONSTRAINT favo_uni UNIQUE NULLS NOT DISTINCT (user_id, menu_id, recipe_id);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">-- 添加联合主键</span></span>
<span class="line"><span style="color:#A6ACCD;">CREATE UNIQUE INDEX favo_uni_idx</span></span>
<span class="line"><span style="color:#A6ACCD;">ON favorites (user_id, menu_id, recipe_id) NULLS NOT DISTINCT;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,5),t=[p];function o(c,i,r,A,C,d){return n(),a("div",null,t)}const u=s(l,[["render",o]]);export{D as __pageData,u as default};
