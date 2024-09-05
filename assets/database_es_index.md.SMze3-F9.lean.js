import{_ as s,c as n,a3 as p,o as e}from"./chunks/framework.D7KqzdP6.js";const q=JSON.parse('{"title":"Elasticsearch","description":"","frontmatter":{"title":"Elasticsearch"},"headers":[],"relativePath":"database/es/index.md","filePath":"database/es/index.md"}'),t={name:"database/es/index.md"};function l(o,a,i,c,u,r){return e(),n("div",null,a[0]||(a[0]=[p(`<blockquote><p>Elasticsearch是一种分布式文档存储。Elasticsearch不是将信息存储为列数据行，而是存储已序列化为JSON文档的复杂数据结构。当集群中有多个Elasticsearch节点时，存储的文档分布在整个集群中，可以从任何节点立即访问。</p></blockquote><h3 id="数据类型" tabindex="-1">数据类型 <a class="header-anchor" href="#数据类型" aria-label="Permalink to &quot;数据类型&quot;">​</a></h3><h3 id="常见操作" tabindex="-1">常见操作 <a class="header-anchor" href="#常见操作" aria-label="Permalink to &quot;常见操作&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 创建索引API创建带有显式映射的新索引</span></span>
<span class="line"><span>PUT /my-index-000001</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;mappings&quot;: {</span></span>
<span class="line"><span>    &quot;properties&quot;: {</span></span>
<span class="line"><span>      &quot;age&quot;:    { &quot;type&quot;: &quot;integer&quot; },  </span></span>
<span class="line"><span>      &quot;email&quot;:  { &quot;type&quot;: &quot;keyword&quot;  }, </span></span>
<span class="line"><span>      &quot;name&quot;:   { &quot;type&quot;: &quot;text&quot;  }     </span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 修改 mapping</span></span>
<span class="line"><span>PUT /my-index-000001/_mapping</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;properties&quot;: {</span></span>
<span class="line"><span>    &quot;employee-id&quot;: {</span></span>
<span class="line"><span>      &quot;type&quot;: &quot;keyword&quot;,</span></span>
<span class="line"><span>      &quot;index&quot;: false</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,4)]))}const h=s(t,[["render",l]]);export{q as __pageData,h as default};
