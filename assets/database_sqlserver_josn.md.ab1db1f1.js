import{_ as s,c as n,o as a,a as t}from"./app.3d2db0cb.js";const y=JSON.parse('{"title":"JSON 基本操作","description":"","frontmatter":{"tital":"json 相关"},"headers":[{"level":3,"title":"将查询结果格式化为 JSON","slug":"将查询结果格式化为-json","link":"#将查询结果格式化为-json","children":[]},{"level":3,"title":"获取 json 数据","slug":"获取-json-数据","link":"#获取-json-数据","children":[]},{"level":3,"title":"修改 json 的值","slug":"修改-json-的值","link":"#修改-json-的值","children":[]}],"relativePath":"database/sqlserver/josn.md","lastUpdated":1677230567000}'),l={name:"database/sqlserver/josn.md"},o=t(`<h1 id="json-基本操作" tabindex="-1">JSON 基本操作 <a class="header-anchor" href="#json-基本操作" aria-hidden="true">#</a></h1><blockquote><p><a href="https://docs.microsoft.com/zh-cn/sql/relational-databases/json/json-data-sql-server?view=sql-server-ver15" target="_blank" rel="noreferrer">使用 JSON 数据 - SQL Server | Microsoft Docs</a></p></blockquote><h3 id="将查询结果格式化为-json" tabindex="-1">将查询结果格式化为 JSON <a class="header-anchor" href="#将查询结果格式化为-json" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">SELECT name, surname  </span></span>
<span class="line"><span style="color:#A6ACCD;">FROM emp  </span></span>
<span class="line"><span style="color:#A6ACCD;">FOR JSON AUTO;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="获取-json-数据" tabindex="-1">获取 json 数据 <a class="header-anchor" href="#获取-json-数据" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">DECLARE @jsonInfo NVARCHAR(MAX)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">SET @jsonInfo=N&#39;{  </span></span>
<span class="line"><span style="color:#A6ACCD;">     &quot;info&quot;:{    </span></span>
<span class="line"><span style="color:#A6ACCD;">       &quot;type&quot;:1,  </span></span>
<span class="line"><span style="color:#A6ACCD;">       &quot;address&quot;:{    </span></span>
<span class="line"><span style="color:#A6ACCD;">         &quot;town&quot;:&quot;Bristol&quot;,  </span></span>
<span class="line"><span style="color:#A6ACCD;">         &quot;county&quot;:&quot;Avon&quot;,  </span></span>
<span class="line"><span style="color:#A6ACCD;">         &quot;country&quot;:&quot;England&quot;  </span></span>
<span class="line"><span style="color:#A6ACCD;">       },  </span></span>
<span class="line"><span style="color:#A6ACCD;">       &quot;tags&quot;:[&quot;Sport&quot;, &quot;Water polo&quot;]  </span></span>
<span class="line"><span style="color:#A6ACCD;">    },  </span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;type&quot;:&quot;Basic&quot;  </span></span>
<span class="line"><span style="color:#A6ACCD;"> }&#39; </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"> // 对于数组</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li><p>获取值 JSON_VALUE</p><blockquote><p>从 JSON 字符串中提取标量值。不能获取对象。</p><p><code>JSON_VALUE(&lt;字段或设置的变量&gt;,&#39;&lt;path&gt;&#39;)</code></p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">json_value(@jsonInfo,&#39;$&#39;)							null</span></span>
<span class="line"><span style="color:#A6ACCD;">json_value(@jsonInfo,&#39;$.info.type&#39;)		N&#39;1&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p>获取对象 JSON_QUERY</p><blockquote><p>从 JSON 字符串中提取对象或数组。不能获取值。</p><p><code>JSON_QUERY(&lt;字段或设置的变量&gt;,&#39;&lt;path&gt;&#39;)</code></p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">json_query(@jsonInfo,&#39;$.info.type&#39;)  	null</span></span>
<span class="line"><span style="color:#A6ACCD;">json_query(@jsonInfo,&#39;$&#39;)							返回整个 JSON 文本。</span></span>
<span class="line"><span style="color:#A6ACCD;">json_query(@jsonInfo,&#39;$.info.tags&#39;)  	N&#39;[ &quot;Sport&quot;, &quot;Water polo&quot;]&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p>数组读取</p><blockquote><p>对于数组读取，可以使用OPENJSON，或使用 <code>$[0].xxx</code>方式获取</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">DECLARE @jsonInfo NVARCHAR(MAX)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">SET @jsonInfo=N&#39;[{  </span></span>
<span class="line"><span style="color:#A6ACCD;">     &quot;info&quot;:{    </span></span>
<span class="line"><span style="color:#A6ACCD;">       &quot;type&quot;:1,  </span></span>
<span class="line"><span style="color:#A6ACCD;">       &quot;address&quot;:{    </span></span>
<span class="line"><span style="color:#A6ACCD;">         &quot;town&quot;:&quot;Bristol&quot;,  </span></span>
<span class="line"><span style="color:#A6ACCD;">         &quot;county&quot;:&quot;Avon&quot;,  </span></span>
<span class="line"><span style="color:#A6ACCD;">         &quot;country&quot;:&quot;England&quot;  </span></span>
<span class="line"><span style="color:#A6ACCD;">       },  </span></span>
<span class="line"><span style="color:#A6ACCD;">       &quot;tags&quot;:[&quot;Sport&quot;, &quot;Water polo&quot;]  </span></span>
<span class="line"><span style="color:#A6ACCD;">    },  </span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;type&quot;:&quot;Basic&quot;  </span></span>
<span class="line"><span style="color:#A6ACCD;"> }]&#39; </span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">json_value(@jsonInfo,&#39;$[0].info.type&#39;)		N&#39;1&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">json_query(@jsonInfo,&#39;$[0].info.tags&#39;)  	N&#39;[ &quot;Sport&quot;, &quot;Water polo&quot;]&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p>OPENJSON</p><blockquote><p>对 JSON 文档提供行集视图。</p><p><code>OPENJSON( jsonExpression [ , path ] ) [ &lt;with_clause&gt; ] &lt;with_clause&gt; ::= WITH ( { colName type [ column_path ] [ AS JSON ] } [ ,...n ] )</code></p></blockquote><p>解析默认为 <code>key</code>,<code>value</code>,<code>type</code>三个属性，下面为 type 的含义。</p><table><thead><tr><th style="text-align:left;">类型列的值</th><th style="text-align:left;">JSON 数据类型</th></tr></thead><tbody><tr><td style="text-align:left;">0</td><td style="text-align:left;">Null</td></tr><tr><td style="text-align:left;">1</td><td style="text-align:left;">字符串</td></tr><tr><td style="text-align:left;">2</td><td style="text-align:left;">数字</td></tr><tr><td style="text-align:left;">3</td><td style="text-align:left;">true/false</td></tr><tr><td style="text-align:left;">4</td><td style="text-align:left;">array</td></tr><tr><td style="text-align:left;">5</td><td style="text-align:left;">对象 (object)</td></tr></tbody></table><p>可以使用 <code>with</code>指定返回的行集头</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">DECLARE @array VARCHAR(MAX);</span></span>
<span class="line"><span style="color:#A6ACCD;">SET @array = &#39;[{&quot;month&quot;:&quot;Jan&quot;, &quot;temp&quot;:10},{&quot;month&quot;:&quot;Feb&quot;, &quot;temp&quot;:12},{&quot;month&quot;:&quot;Mar&quot;, &quot;temp&quot;:15},</span></span>
<span class="line"><span style="color:#A6ACCD;">               {&quot;month&quot;:&quot;Apr&quot;, &quot;temp&quot;:17},{&quot;month&quot;:&quot;May&quot;, &quot;temp&quot;:23},{&quot;month&quot;:&quot;Jun&quot;, &quot;temp&quot;:27}</span></span>
<span class="line"><span style="color:#A6ACCD;">              ]&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">SELECT * FROM OPENJSON(@array)</span></span>
<span class="line"><span style="color:#A6ACCD;">        WITH (  month VARCHAR(3),</span></span>
<span class="line"><span style="color:#A6ACCD;">                temp int)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li></ul><h3 id="修改-json-的值" tabindex="-1">修改 json 的值 <a class="header-anchor" href="#修改-json-的值" aria-hidden="true">#</a></h3><blockquote><p>JSON_MODIFY ( expression , path , newValue )</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">DECLARE @info NVARCHAR(100)=&#39;{&quot;name&quot;:&quot;John&quot;,&quot;skills&quot;:[&quot;C#&quot;,&quot;SQL&quot;]}&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">-- 修改字段</span></span>
<span class="line"><span style="color:#A6ACCD;">SET @info=JSON_MODIFY(@info,&#39;$.name&#39;,&#39;Mike&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;name&quot;: &quot;Mike&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;skills&quot;: [&quot;C#&quot;, &quot;SQL&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">-- 添加字段</span></span>
<span class="line"><span style="color:#A6ACCD;">SET @info=JSON_MODIFY(@info,&#39;$.surname&#39;,&#39;Smith&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;name&quot;: &quot;Mike&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;skills&quot;: [&quot;C#&quot;, &quot;SQL&quot;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;surname&quot;: &quot;Smith&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">-- 设置字段为 null</span></span>
<span class="line"><span style="color:#A6ACCD;">SET @info=JSON_MODIFY(@info,&#39;strict $.name&#39;,NULL)</span></span>
<span class="line"><span style="color:#A6ACCD;">-- 删除字段</span></span>
<span class="line"><span style="color:#A6ACCD;">SET @info=JSON_MODIFY(@info,&#39;$.name&#39;,NULL)</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;skills&quot;: [&quot;C#&quot;, &quot;SQL&quot;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;surname&quot;: &quot;Smith&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">-- 追加数据</span></span>
<span class="line"><span style="color:#A6ACCD;">SET @info=JSON_MODIFY(@info,&#39;append $.skills&#39;,&#39;Azure&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;skills&quot;: [&quot;C#&quot;, &quot;SQL&quot;, &quot;Azure&quot;],</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;surname&quot;: &quot;Smith&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,10),e=[o];function p(c,i,u,r,C,A){return a(),n("div",null,e)}const d=s(l,[["render",p]]);export{y as __pageData,d as default};
