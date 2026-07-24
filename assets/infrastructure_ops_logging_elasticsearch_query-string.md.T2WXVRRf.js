import{gt as e,nt as t,s as n,tt as r}from"./chunks/framework.BqU7tCwc.js";var i=JSON.parse(`{"title":"query_string","description":"","frontmatter":{"title":"query_string"},"headers":[],"relativePath":"infrastructure/ops/logging/elasticsearch/query-string.md","filePath":"infrastructure/ops/logging/elasticsearch/query-string.md","lastUpdated":1784887501000}`),a={name:`infrastructure/ops/logging/elasticsearch/query-string.md`};function o(n,i,a,o,s,c){return e(),r(`div`,null,[...i[0]||=[t(`<blockquote><p><a href="https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-query-string-query.html#query-string-top-level-params" target="_blank" rel="noreferrer">https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-query-string-query.html#query-string-top-level-params</a></p><p>kibana 中查询使用的就是这个。</p></blockquote><h2 id="备忘单" tabindex="-1">备忘单 <a class="header-anchor" href="#备忘单" aria-label="Permalink to “备忘单”">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 字段 field 包含 active</span></span>
<span class="line"><span>field:active</span></span>
<span class="line"><span># 字段 title 包含 quick 或者 brown</span></span>
<span class="line"><span>title:(quick OR brown)</span></span>
<span class="line"><span># 字段 title 完整包含 John Smith</span></span>
<span class="line"><span>title:&quot;John Smith&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 通配符</span></span>
<span class="line"><span>title:qu?ck bro*</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 模糊查询</span></span>
<span class="line"><span>title:quikc~</span></span>
<span class="line"><span># 模糊查询，编辑距离为 1</span></span>
<span class="line"><span>title:quikc~1</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 正则匹配</span></span>
<span class="line"><span>field:/joh?n(ath[oa]n)/</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 匹配所有不为 null 的</span></span>
<span class="line"><span>field:*</span></span>
<span class="line"><span>exists_:field</span></span>
<span class="line"><span># 一个字符</span></span>
<span class="line"><span>field:a?</span></span>
<span class="line"><span># 多个字符</span></span>
<span class="line"><span>field:a*</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 范围</span></span>
<span class="line"><span># 时间范围</span></span>
<span class="line"><span>date:[2024-01-01 TO 2024-12-31]</span></span>
<span class="line"><span># 数字范围</span></span>
<span class="line"><span>count:[1 TO 5]</span></span>
<span class="line"><span>count:(&gt;=1 AND &lt;=5)</span></span>
<span class="line"><span>count:(+&gt;=1 +&lt;5)</span></span>
<span class="line"><span># 字符范围</span></span>
<span class="line"><span>tag:{alpha TO omega}</span></span>
<span class="line"><span># 大于 10 的数字</span></span>
<span class="line"><span>count:[10 TO *]</span></span>
<span class="line"><span>count:&gt;=10</span></span>
<span class="line"><span># 小于 2024-01-01 的时间</span></span>
<span class="line"><span>date:{* TO 2024-01-01}</span></span>
<span class="line"><span>date:&lt;2024-01-01</span></span></code></pre></div><h2 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to “语法”">​</a></h2><h4 id="查询字段" tabindex="-1">查询字段 <a class="header-anchor" href="#查询字段" aria-label="Permalink to “查询字段”">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 存在 title 字段</span></span>
<span class="line"><span>_exists_:title</span></span>
<span class="line"><span># 匹配 foo 开头的字段</span></span>
<span class="line"><span>foo\\*:</span></span>
<span class="line"><span># 使用 \\ 转义空格</span></span>
<span class="line"><span>first\\ name:</span></span></code></pre></div><h4 id="通配符" tabindex="-1">通配符 <a class="header-anchor" href="#通配符" aria-label="Permalink to “通配符”">​</a></h4><ul><li><code>?</code>匹配一个字符</li><li><code>*</code>匹配多个字符</li><li>当只有一个<code>*</code>时匹配所有不为 null 的</li></ul><h4 id="正则" tabindex="-1">正则 <a class="header-anchor" href="#正则" aria-label="Permalink to “正则”">​</a></h4><ul><li>使用<code>/正则表达式/</code>来查询</li></ul><h4 id="模糊查询" tabindex="-1">模糊查询 <a class="header-anchor" href="#模糊查询" aria-label="Permalink to “模糊查询”">​</a></h4><ul><li>使用 <code>~</code>可以模糊查询一个字符</li><li>默认是 2 个编辑距离</li><li>可以使用<code>~1</code>来指定编辑距离</li></ul><h4 id="范围" tabindex="-1">范围 <a class="header-anchor" href="#范围" aria-label="Permalink to “范围”">​</a></h4><blockquote><p>[min TO max]</p></blockquote><ul><li><code>[</code>,<code>]</code>包含边界</li><li><code>{}</code>不包含边界</li></ul><h4 id="布尔" tabindex="-1">布尔 <a class="header-anchor" href="#布尔" aria-label="Permalink to “布尔”">​</a></h4><ul><li><code>+</code>必须匹配</li><li><code>-</code>必须不能匹配</li><li><code>AND</code>两个条件都满足</li><li><code>OR</code>或者</li><li><code>AND NOT</code>必须不满足</li></ul>`,17)]])}var s=n(a,[[`render`,o]]);export{i as __pageData,s as default};