import{_ as a,c as n,o as p,ah as e}from"./chunks/framework.HOMaeY8S.js";const q=JSON.parse('{"title":"ES 查询操作","description":"","frontmatter":{"title":"ES 查询操作"},"headers":[],"relativePath":"database/es/search.md","filePath":"database/es/search.md"}'),l={name:"database/es/search.md"};function t(o,s,i,c,u,d){return p(),n("div",null,s[0]||(s[0]=[e(`<h3 id="分页查询" tabindex="-1">分页查询 <a class="header-anchor" href="#分页查询" aria-label="Permalink to &quot;分页查询&quot;">​</a></h3><blockquote><p>简单数据量小的查询，直接使用<code>from</code>来查询。</p><p>需要遍历大量数据可以使用<code>scroll</code>或<code>search_after</code>。缺点是需要一页一页的翻。</p><p>当翻的页数比较多时，推荐使用<code>search_after</code>。应为<code>scroll</code>占用的资源比较多。</p></blockquote><h4 id="form" tabindex="-1">form <a class="header-anchor" href="#form" aria-label="Permalink to &quot;form&quot;">​</a></h4><ul><li><p>使用 <code>from</code> <code>size</code>来进行分页。</p></li><li><p>默认不能超过<code>10000</code>个数据。可以通过<code>index.max_result_window</code>来进行修改。</p></li><li><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>GET sample/_search</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;from&quot;: 5,</span></span>
<span class="line"><span>  &quot;size&quot;: 20,</span></span>
<span class="line"><span>  &quot;query&quot;: {</span></span>
<span class="line"><span>    &quot;match&quot;: {</span></span>
<span class="line"><span>      &quot;name&quot;: &quot;db&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div></li></ul><h4 id="search-after" tabindex="-1">search_after <a class="header-anchor" href="#search-after" aria-label="Permalink to &quot;search_after&quot;">​</a></h4><ul><li><p>要有排序字段，每次查询时把上一次查询返回的排序值传入下一次的查询中。</p></li><li><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>GET sample/_search</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;query&quot;: {</span></span>
<span class="line"><span>        &quot;match&quot;: {</span></span>
<span class="line"><span>            &quot;title&quot;: &quot;elasticsearch&quot;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    &quot;search_after&quot;: [1463538857, &quot;654323&quot;],</span></span>
<span class="line"><span>    &quot;sort&quot;: [</span></span>
<span class="line"><span>        {&quot;date&quot;: &quot;asc&quot;},</span></span>
<span class="line"><span>        {&quot;tie_id&quot;: &quot;asc&quot;}      </span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>}</span></span></code></pre></div></li><li><p>point in time (PIT)</p></li><li><p>在多次查询中间数据可能发生变更，如果想保证数据一致性则可以使用 <code>pit</code></p></li><li><p>先创建一个pit，在之后的调用都带上这个值</p></li><li><p>需要带上<code>size</code>参数。但是不能带上<code>form</code></p></li><li><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>POST /sample/_pit?keep_alive=1m</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>GET sample/_search</span></span>
<span class="line"><span>{	</span></span>
<span class="line"><span>	&quot;size&quot;: 20,</span></span>
<span class="line"><span>    &quot;query&quot;: {</span></span>
<span class="line"><span>        &quot;match&quot;: {</span></span>
<span class="line"><span>            &quot;title&quot;: &quot;elasticsearch&quot;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    &quot;search_after&quot;: [1463538857, &quot;654323&quot;],</span></span>
<span class="line"><span>    &quot;pit&quot;: {</span></span>
<span class="line"><span>        &quot;id&quot;:  &quot;***==&quot;, </span></span>
<span class="line"><span>        &quot;keep_alive&quot;: &quot;1m&quot;</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>    &quot;sort&quot;: [</span></span>
<span class="line"><span>        {&quot;date&quot;: &quot;asc&quot;},</span></span>
<span class="line"><span>        {&quot;tie_id&quot;: &quot;asc&quot;}      </span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>}</span></span></code></pre></div></li></ul><h4 id="scroll" tabindex="-1">scroll <a class="header-anchor" href="#scroll" aria-label="Permalink to &quot;scroll&quot;">​</a></h4><ul><li><p>主要场景是当需要遍历数据时使用，比如导出。</p></li><li><p>在第一次查询时需要设置参数<code>scroll=1m</code>，来指定<code>scroll</code>保存的时间。</p></li><li><p>之后就使用scroll进行获取数据</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>GET  /_search/scroll                                                               </span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;scroll&quot; : &quot;1m&quot;,                                                                 </span></span>
<span class="line"><span>  &quot;scroll_id&quot; : &quot;上一次返回的值&quot; </span></span>
<span class="line"><span>}</span></span></code></pre></div></li><li><p>当使用聚合函数时，只有第一次才会返回结果</p></li><li><p>当想要访问的是全部的文档，直接使用<code>_doc</code>排序效率非常好</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>GET /_search?scroll=1m</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;sort&quot;: [</span></span>
<span class="line"><span>    &quot;_doc&quot;</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre></div></li></ul><h3 id="同时查询多个索引" tabindex="-1">同时查询多个索引 <a class="header-anchor" href="#同时查询多个索引" aria-label="Permalink to &quot;同时查询多个索引&quot;">​</a></h3><p>可以使用逗号分割或正则直接进行查询</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>GET /my-index-000001,my-index-000002/_search</span></span>
<span class="line"><span>GET /my-index-*/_search</span></span></code></pre></div><h3 id="模版查询" tabindex="-1">模版查询 <a class="header-anchor" href="#模版查询" aria-label="Permalink to &quot;模版查询&quot;">​</a></h3><p>创建模版</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>PUT _scripts/my-search-template</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;script&quot;: {</span></span>
<span class="line"><span>    &quot;lang&quot;: &quot;mustache&quot;,</span></span>
<span class="line"><span>    &quot;source&quot;: {</span></span>
<span class="line"><span>      &quot;query&quot;: {</span></span>
<span class="line"><span>        &quot;match&quot;: {</span></span>
<span class="line"><span>          &quot;message&quot;: &quot;{{query_string}}&quot;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      &quot;from&quot;: &quot;{{from}}&quot;,</span></span>
<span class="line"><span>      &quot;size&quot;: &quot;{{size}}&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>测试模版</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>POST _render/template</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;id&quot;: &quot;my-search-template&quot;,</span></span>
<span class="line"><span>  &quot;params&quot;: {</span></span>
<span class="line"><span>    &quot;query_string&quot;: &quot;hello world&quot;,</span></span>
<span class="line"><span>    &quot;from&quot;: 20,</span></span>
<span class="line"><span>    &quot;size&quot;: 10</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>执行模版</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>GET my-index/_search/template</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;id&quot;: &quot;my-search-template&quot;,</span></span>
<span class="line"><span>  &quot;params&quot;: {</span></span>
<span class="line"><span>    &quot;query_string&quot;: &quot;hello world&quot;,</span></span>
<span class="line"><span>    &quot;from&quot;: 0,</span></span>
<span class="line"><span>    &quot;size&quot;: 10</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>获取模版</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>GET _scripts/my-search-template</span></span></code></pre></div><p>删除模版</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>DELETE _scripts/my-search-template</span></span></code></pre></div>`,22)]))}const h=a(l,[["render",t]]);export{q as __pageData,h as default};
