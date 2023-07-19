import{_ as a,o as s,c as n,U as o}from"./chunks/framework.190aac23.js";const h=JSON.parse('{"title":"grafana","description":"","frontmatter":{"title":"grafana"},"headers":[],"relativePath":"ops/grafana/index.md","filePath":"ops/grafana/index.md","lastUpdated":1689760198000}'),e={name:"ops/grafana/index.md"},l=o(`<blockquote><p><a href="https://grafana.com/docs/grafana/latest/" target="_blank" rel="noreferrer">Grafana documentation | Grafana documentation</a></p><p>仪表板<a href="https://grafana.com/grafana/dashboards/" target="_blank" rel="noreferrer">Dashboards | Grafana Labs</a></p></blockquote><h3 id="数据源" tabindex="-1">数据源 <a class="header-anchor" href="#数据源" aria-label="Permalink to &quot;数据源&quot;">​</a></h3><h4 id="postgres数据库" tabindex="-1">postgres数据库 <a class="header-anchor" href="#postgres数据库" aria-label="Permalink to &quot;postgres数据库&quot;">​</a></h4><p>需要权限，没有权限查询不到表信息</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">USER</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">grafanareader</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">WITH</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">PASSWORD</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">password</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">GRANT</span><span style="color:#A6ACCD;"> USAGE </span><span style="color:#F78C6C;">ON</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">SCHEMA</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">schema</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TO</span><span style="color:#A6ACCD;"> grafanareader;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">GRANT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">SELECT</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">ON</span><span style="color:#A6ACCD;"> schema.table </span><span style="color:#F78C6C;">TO</span><span style="color:#A6ACCD;"> grafanareader;</span></span></code></pre></div><hr><h3 id="常见配置" tabindex="-1">常见配置 <a class="header-anchor" href="#常见配置" aria-label="Permalink to &quot;常见配置&quot;">​</a></h3><blockquote><p>使用中常见配置</p><p><a href="https://grafana.com/docs/grafana/latest/setup-grafana/configure-grafana/" target="_blank" rel="noreferrer">Configure Grafana | Grafana documentation</a></p><p>默认配置文件在<code>$WORKING_DIR/conf/defaults.ini</code></p><p>通过<code>--config</code>来指定配置文件</p></blockquote><h4 id="数据库" tabindex="-1">数据库 <a class="header-anchor" href="#数据库" aria-label="Permalink to &quot;数据库&quot;">​</a></h4><blockquote><p><code>postgresql</code> 数据库不支持指定 <code>currentSchema</code></p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">[database]</span></span>
<span class="line"><span style="color:#A6ACCD;">type = postgres</span></span>
<span class="line"><span style="color:#A6ACCD;">host = 1.1.1.1:5432</span></span>
<span class="line"><span style="color:#A6ACCD;">name = dbname</span></span>
<span class="line"><span style="color:#A6ACCD;">user = username</span></span>
<span class="line"><span style="color:#A6ACCD;"># If the password contains # or ; you have to wrap it with triple quotes. Ex &quot;&quot;&quot;#password;&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">password = &quot;&quot;&quot;132456&quot;&quot;&quot;</span></span></code></pre></div><h4 id="代理" tabindex="-1">代理 <a class="header-anchor" href="#代理" aria-label="Permalink to &quot;代理&quot;">​</a></h4><blockquote><p>需要前置代理来访问的情况下，需要修改配置</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">[server]</span></span>
<span class="line"><span style="color:#A6ACCD;">domain = domain.com</span></span>
<span class="line"><span style="color:#A6ACCD;">root_url = %(protocol)s://%(domain)s/grafana/</span></span>
<span class="line"><span style="color:#A6ACCD;">serve_from_sub_path = true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[security]</span></span>
<span class="line"><span style="color:#A6ACCD;">csrf_trusted_origins = domain.com</span></span></code></pre></div>`,14),p=[l];function t(r,c,C,i,d,A){return s(),n("div",null,p)}const y=a(e,[["render",t]]);export{h as __pageData,y as default};