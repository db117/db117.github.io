import{_ as s,c as a,o as n,a as e}from"./app.55d73d08.js";const q=JSON.parse('{"title":"Elasticsearch","description":"","frontmatter":{"title":"Elasticsearch"},"headers":[{"level":3,"title":"数据类型","slug":"数据类型","link":"#数据类型","children":[]},{"level":3,"title":"常见操作","slug":"常见操作","link":"#常见操作","children":[]}],"relativePath":"database/es/README.md","lastUpdated":1677490656000}'),l={name:"database/es/README.md"},p=e(`<blockquote><p>Elasticsearch是一种分布式文档存储。Elasticsearch不是将信息存储为列数据行，而是存储已序列化为JSON文档的复杂数据结构。当集群中有多个Elasticsearch节点时，存储的文档分布在整个集群中，可以从任何节点立即访问。</p></blockquote><h3 id="数据类型" tabindex="-1">数据类型 <a class="header-anchor" href="#数据类型" aria-hidden="true">#</a></h3><h3 id="常见操作" tabindex="-1">常见操作 <a class="header-anchor" href="#常见操作" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"># 创建索引API创建带有显式映射的新索引</span></span>
<span class="line"><span style="color:#A6ACCD;">PUT /my-index-000001</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;mappings&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;properties&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;age&quot;:    { &quot;type&quot;: &quot;integer&quot; },  </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;email&quot;:  { &quot;type&quot;: &quot;keyword&quot;  }, </span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;name&quot;:   { &quot;type&quot;: &quot;text&quot;  }     </span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 修改 mapping</span></span>
<span class="line"><span style="color:#A6ACCD;">PUT /my-index-000001/_mapping</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;properties&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;employee-id&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;type&quot;: &quot;keyword&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;index&quot;: false</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,4),t=[p];function o(c,i,r,A,C,u){return n(),a("div",null,t)}const y=s(l,[["render",o]]);export{q as __pageData,y as default};