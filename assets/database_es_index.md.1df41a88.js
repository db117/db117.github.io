import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.54cab62e.js";const _=JSON.parse('{"title":"Elasticsearch","description":"","frontmatter":{"title":"Elasticsearch"},"headers":[],"relativePath":"database/es/index.md","filePath":"database/es/index.md","lastUpdated":1697773070000}'),p={name:"database/es/index.md"},l=e(`<blockquote><p>Elasticsearch是一种分布式文档存储。Elasticsearch不是将信息存储为列数据行，而是存储已序列化为JSON文档的复杂数据结构。当集群中有多个Elasticsearch节点时，存储的文档分布在整个集群中，可以从任何节点立即访问。</p></blockquote><h3 id="数据类型" tabindex="-1">数据类型 <a class="header-anchor" href="#数据类型" aria-label="Permalink to &quot;数据类型&quot;">​</a></h3><h3 id="常见操作" tabindex="-1">常见操作 <a class="header-anchor" href="#常见操作" aria-label="Permalink to &quot;常见操作&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 创建索引API创建带有显式映射的新索引</span></span>
<span class="line"><span style="color:#e1e4e8;">PUT /my-index-000001</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;mappings&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;properties&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;age&quot;:    { &quot;type&quot;: &quot;integer&quot; },  </span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;email&quot;:  { &quot;type&quot;: &quot;keyword&quot;  }, </span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;name&quot;:   { &quot;type&quot;: &quot;text&quot;  }     </span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 修改 mapping</span></span>
<span class="line"><span style="color:#e1e4e8;">PUT /my-index-000001/_mapping</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;properties&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;employee-id&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;type&quot;: &quot;keyword&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;index&quot;: false</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 创建索引API创建带有显式映射的新索引</span></span>
<span class="line"><span style="color:#24292e;">PUT /my-index-000001</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  &quot;mappings&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">    &quot;properties&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">      &quot;age&quot;:    { &quot;type&quot;: &quot;integer&quot; },  </span></span>
<span class="line"><span style="color:#24292e;">      &quot;email&quot;:  { &quot;type&quot;: &quot;keyword&quot;  }, </span></span>
<span class="line"><span style="color:#24292e;">      &quot;name&quot;:   { &quot;type&quot;: &quot;text&quot;  }     </span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 修改 mapping</span></span>
<span class="line"><span style="color:#24292e;">PUT /my-index-000001/_mapping</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  &quot;properties&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">    &quot;employee-id&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">      &quot;type&quot;: &quot;keyword&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      &quot;index&quot;: false</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div>`,4),o=[l];function t(c,i,r,u,q,y){return a(),n("div",null,o)}const h=s(p,[["render",t]]);export{_ as __pageData,h as default};
