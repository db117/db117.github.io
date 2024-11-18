import{_ as n,o as a,c as t,a3 as p}from"./chunks/framework.wJagV7l8.js";const r=JSON.parse('{"title":"json 相关","description":"","frontmatter":{"title":"json 相关"},"headers":[],"relativePath":"database/sqlserver/josn.md","filePath":"database/sqlserver/josn.md"}'),o={name:"database/sqlserver/josn.md"};function e(l,s,i,u,c,q){return a(),t("div",null,s[0]||(s[0]=[p(`<h1 id="json-基本操作" tabindex="-1">JSON 基本操作 <a class="header-anchor" href="#json-基本操作" aria-label="Permalink to &quot;JSON 基本操作&quot;">​</a></h1><blockquote><p><a href="https://docs.microsoft.com/zh-cn/sql/relational-databases/json/json-data-sql-server?view=sql-server-ver15" target="_blank" rel="noreferrer">使用 JSON 数据 - SQL Server | Microsoft Docs</a></p></blockquote><h3 id="将查询结果格式化为-json" tabindex="-1">将查询结果格式化为 JSON <a class="header-anchor" href="#将查询结果格式化为-json" aria-label="Permalink to &quot;将查询结果格式化为 JSON&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>SELECT name, surname  </span></span>
<span class="line"><span>FROM emp  </span></span>
<span class="line"><span>FOR JSON AUTO;</span></span></code></pre></div><h3 id="获取-json-数据" tabindex="-1">获取 json 数据 <a class="header-anchor" href="#获取-json-数据" aria-label="Permalink to &quot;获取 json 数据&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>DECLARE @jsonInfo NVARCHAR(MAX)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SET @jsonInfo=N&#39;{  </span></span>
<span class="line"><span>     &quot;info&quot;:{    </span></span>
<span class="line"><span>       &quot;type&quot;:1,  </span></span>
<span class="line"><span>       &quot;address&quot;:{    </span></span>
<span class="line"><span>         &quot;town&quot;:&quot;Bristol&quot;,  </span></span>
<span class="line"><span>         &quot;county&quot;:&quot;Avon&quot;,  </span></span>
<span class="line"><span>         &quot;country&quot;:&quot;England&quot;  </span></span>
<span class="line"><span>       },  </span></span>
<span class="line"><span>       &quot;tags&quot;:[&quot;Sport&quot;, &quot;Water polo&quot;]  </span></span>
<span class="line"><span>    },  </span></span>
<span class="line"><span>    &quot;type&quot;:&quot;Basic&quot;  </span></span>
<span class="line"><span> }&#39; </span></span>
<span class="line"><span> </span></span>
<span class="line"><span> // 对于数组</span></span></code></pre></div><ul><li><p>获取值 JSON_VALUE</p><blockquote><p>从 JSON 字符串中提取标量值。不能获取对象。</p><p><code>JSON_VALUE(&lt;字段或设置的变量&gt;,&#39;&lt;path&gt;&#39;)</code></p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>json_value(@jsonInfo,&#39;$&#39;)							null</span></span>
<span class="line"><span>json_value(@jsonInfo,&#39;$.info.type&#39;)		N&#39;1&#39;</span></span></code></pre></div></li><li><p>获取对象 JSON_QUERY</p><blockquote><p>从 JSON 字符串中提取对象或数组。不能获取值。</p><p><code>JSON_QUERY(&lt;字段或设置的变量&gt;,&#39;&lt;path&gt;&#39;)</code></p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>json_query(@jsonInfo,&#39;$.info.type&#39;)  	null</span></span>
<span class="line"><span>json_query(@jsonInfo,&#39;$&#39;)							返回整个 JSON 文本。</span></span>
<span class="line"><span>json_query(@jsonInfo,&#39;$.info.tags&#39;)  	N&#39;[ &quot;Sport&quot;, &quot;Water polo&quot;]&#39;</span></span></code></pre></div></li><li><p>数组读取</p><blockquote><p>对于数组读取，可以使用OPENJSON，或使用 <code>$[0].xxx</code>方式获取</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>DECLARE @jsonInfo NVARCHAR(MAX)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SET @jsonInfo=N&#39;[{  </span></span>
<span class="line"><span>     &quot;info&quot;:{    </span></span>
<span class="line"><span>       &quot;type&quot;:1,  </span></span>
<span class="line"><span>       &quot;address&quot;:{    </span></span>
<span class="line"><span>         &quot;town&quot;:&quot;Bristol&quot;,  </span></span>
<span class="line"><span>         &quot;county&quot;:&quot;Avon&quot;,  </span></span>
<span class="line"><span>         &quot;country&quot;:&quot;England&quot;  </span></span>
<span class="line"><span>       },  </span></span>
<span class="line"><span>       &quot;tags&quot;:[&quot;Sport&quot;, &quot;Water polo&quot;]  </span></span>
<span class="line"><span>    },  </span></span>
<span class="line"><span>    &quot;type&quot;:&quot;Basic&quot;  </span></span>
<span class="line"><span> }]&#39; </span></span>
<span class="line"><span> </span></span>
<span class="line"><span>json_value(@jsonInfo,&#39;$[0].info.type&#39;)		N&#39;1&#39;</span></span>
<span class="line"><span>json_query(@jsonInfo,&#39;$[0].info.tags&#39;)  	N&#39;[ &quot;Sport&quot;, &quot;Water polo&quot;]&#39;</span></span></code></pre></div></li><li><p>OPENJSON</p><blockquote><p>对 JSON 文档提供行集视图。</p><p><code>OPENJSON( jsonExpression [ , path ] ) [ &lt;with_clause&gt; ] &lt;with_clause&gt; ::= WITH ( { colName type [ column_path ] [ AS JSON ] } [ ,...n ] )</code></p></blockquote><p>解析默认为 <code>key</code>,<code>value</code>,<code>type</code>三个属性，下面为 type 的含义。</p><table tabindex="0"><thead><tr><th style="text-align:left;">类型列的值</th><th style="text-align:left;">JSON 数据类型</th></tr></thead><tbody><tr><td style="text-align:left;">0</td><td style="text-align:left;">Null</td></tr><tr><td style="text-align:left;">1</td><td style="text-align:left;">字符串</td></tr><tr><td style="text-align:left;">2</td><td style="text-align:left;">数字</td></tr><tr><td style="text-align:left;">3</td><td style="text-align:left;">true/false</td></tr><tr><td style="text-align:left;">4</td><td style="text-align:left;">array</td></tr><tr><td style="text-align:left;">5</td><td style="text-align:left;">对象 (object)</td></tr></tbody></table><p>可以使用 <code>with</code>指定返回的行集头</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>DECLARE @array VARCHAR(MAX);</span></span>
<span class="line"><span>SET @array = &#39;[{&quot;month&quot;:&quot;Jan&quot;, &quot;temp&quot;:10},{&quot;month&quot;:&quot;Feb&quot;, &quot;temp&quot;:12},{&quot;month&quot;:&quot;Mar&quot;, &quot;temp&quot;:15},</span></span>
<span class="line"><span>               {&quot;month&quot;:&quot;Apr&quot;, &quot;temp&quot;:17},{&quot;month&quot;:&quot;May&quot;, &quot;temp&quot;:23},{&quot;month&quot;:&quot;Jun&quot;, &quot;temp&quot;:27}</span></span>
<span class="line"><span>              ]&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SELECT * FROM OPENJSON(@array)</span></span>
<span class="line"><span>        WITH (  month VARCHAR(3),</span></span>
<span class="line"><span>                temp int)</span></span></code></pre></div></li></ul><h3 id="修改-json-的值" tabindex="-1">修改 json 的值 <a class="header-anchor" href="#修改-json-的值" aria-label="Permalink to &quot;修改 json 的值&quot;">​</a></h3><blockquote><p>JSON_MODIFY ( expression , path , newValue )</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>DECLARE @info NVARCHAR(100)=&#39;{&quot;name&quot;:&quot;John&quot;,&quot;skills&quot;:[&quot;C#&quot;,&quot;SQL&quot;]}&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 修改字段</span></span>
<span class="line"><span>SET @info=JSON_MODIFY(@info,&#39;$.name&#39;,&#39;Mike&#39;)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;name&quot;: &quot;Mike&quot;,</span></span>
<span class="line"><span>    &quot;skills&quot;: [&quot;C#&quot;, &quot;SQL&quot;]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 添加字段</span></span>
<span class="line"><span>SET @info=JSON_MODIFY(@info,&#39;$.surname&#39;,&#39;Smith&#39;)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;name&quot;: &quot;Mike&quot;,</span></span>
<span class="line"><span>    &quot;skills&quot;: [&quot;C#&quot;, &quot;SQL&quot;],</span></span>
<span class="line"><span>    &quot;surname&quot;: &quot;Smith&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 设置字段为 null</span></span>
<span class="line"><span>SET @info=JSON_MODIFY(@info,&#39;strict $.name&#39;,NULL)</span></span>
<span class="line"><span>-- 删除字段</span></span>
<span class="line"><span>SET @info=JSON_MODIFY(@info,&#39;$.name&#39;,NULL)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;skills&quot;: [&quot;C#&quot;, &quot;SQL&quot;],</span></span>
<span class="line"><span>    &quot;surname&quot;: &quot;Smith&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 追加数据</span></span>
<span class="line"><span>SET @info=JSON_MODIFY(@info,&#39;append $.skills&#39;,&#39;Azure&#39;)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;skills&quot;: [&quot;C#&quot;, &quot;SQL&quot;, &quot;Azure&quot;],</span></span>
<span class="line"><span>    &quot;surname&quot;: &quot;Smith&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,10)]))}const h=n(o,[["render",e]]);export{r as __pageData,h as default};
