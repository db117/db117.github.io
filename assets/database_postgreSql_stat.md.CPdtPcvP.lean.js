import{_ as e,c as s,a3 as t,o as l}from"./chunks/framework.lVUbth6I.js";const u=JSON.parse('{"title":"一些常用的状态信息","description":"","frontmatter":{"title":"一些常用的状态信息"},"headers":[],"relativePath":"database/postgreSql/stat.md","filePath":"database/postgreSql/stat.md"}'),n={name:"database/postgreSql/stat.md"};function i(p,a,r,o,_,c){return l(),s("div",null,a[0]||(a[0]=[t(`<h3 id="数据库使用情况" tabindex="-1">数据库使用情况 <a class="header-anchor" href="#数据库使用情况" aria-label="Permalink to &quot;数据库使用情况&quot;">​</a></h3><p>表存储空间使用情况</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>SELECT schemaname                              as table_schema,</span></span>
<span class="line"><span>       relname                                    table_name,</span></span>
<span class="line"><span>       pg_size_pretty(pg_relation_size(relid)) as table_size</span></span>
<span class="line"><span>FROM pg_catalog.pg_statio_user_tables</span></span>
<span class="line"><span>ORDER BY pg_relation_size(relid) desc;</span></span></code></pre></div><p>当前数据库表数据行数</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>SELECT schemaname, relname, n_live_tup total</span></span>
<span class="line"><span>FROM pg_stat_user_tables</span></span>
<span class="line"><span>order by total desc;</span></span></code></pre></div><h3 id="数据库视图" tabindex="-1">数据库视图 <a class="header-anchor" href="#数据库视图" aria-label="Permalink to &quot;数据库视图&quot;">​</a></h3><h3 id="pg-stat-user-tables" tabindex="-1">pg_stat_user_tables <a class="header-anchor" href="#pg-stat-user-tables" aria-label="Permalink to &quot;pg_stat_user_tables&quot;">​</a></h3><p><code>pg_stat_user_tables</code>是一个统计视图，显示当前数据库中每个非系统表的访问统计信息<a href="https://pgpedia.info/p/pg_stat_user_tables.html" target="_blank" rel="noreferrer">1</a> <a href="https://www.postgresql.org/docs/current/monitoring-stats.html" target="_blank" rel="noreferrer">2</a>。它包含以下字段：</p><ul><li>relid：表的OID</li><li>schemaname：表所在的模式名</li><li>relname：表的名字</li><li>seq_scan：顺序扫描的次数</li><li>seq_tup_read：顺序扫描读取的行数</li><li>idx_scan：索引扫描的次数</li><li>idx_tup_fetch：索引扫描获取的行数</li><li>n_tup_ins：插入的行数</li><li>n_tup_upd：更新的行数</li><li>n_tup_del：删除的行数</li><li>n_tup_hot_upd：热更新的行数（不需要更新索引）</li><li>n_live_tup：表中存活的行数（不包括已删除或过期的行）</li><li>n_dead_tup：表中死亡的行数（已删除或过期的行）</li><li>n_mod_since_analyze：自上次分析后修改的行数</li><li>last_vacuum：上次执行VACUUM命令的时间</li><li>last_autovacuum：上次执行自动VACUUM命令的时间</li><li>last_analyze：上次执行ANALYZE命令的时间</li><li>last_autoanalyze：上次执行自动ANALYZE命令的时间</li><li>vacuum_count：执行VACUUM命令的次数</li><li>autovacuum_count：执行自动VACUUM命令的次数</li><li>analyze_count：执行ANALYZE命令的次数</li><li>autoanalyze_count：执行自动ANALYZE命令的次数</li></ul>`,9)]))}const h=e(n,[["render",i]]);export{u as __pageData,h as default};