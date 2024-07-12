import{_ as s,c as a,o as n,a8 as p}from"./chunks/framework.yI1Kwid6.js";const b=JSON.parse('{"title":"yaml格式","description":"","frontmatter":{"title":"yaml格式"},"headers":[],"relativePath":"other/yaml.md","filePath":"other/yaml.md","lastUpdated":1720754378000}'),e={name:"other/yaml.md"},l=p(`<p><a href="http://yaml.org/" target="_blank" rel="noreferrer">官网</a></p><p><a href="https://github.com/yaml/yaml" target="_blank" rel="noreferrer">github</a></p><h2 id="格式" tabindex="-1">格式 <a class="header-anchor" href="#格式" aria-label="Permalink to &quot;格式&quot;">​</a></h2><h3 id="基本格式" tabindex="-1">基本格式 <a class="header-anchor" href="#基本格式" aria-label="Permalink to &quot;基本格式&quot;">​</a></h3><ol><li>yaml中允许表示三种格式，分别为常量值、对象和数组</li><li>大小写敏感</li><li>使用缩进代表层级关系</li><li>.缩进只能使用空格，<strong>不能使用tab键</strong>，不要求空格个数，只需要相同层级左对齐（一般2或4个空格）</li></ol><h3 id="类型" tabindex="-1">类型 <a class="header-anchor" href="#类型" aria-label="Permalink to &quot;类型&quot;">​</a></h3><blockquote><p>可以使用!!来定义类型</p></blockquote><ul><li><p>map</p><blockquote><p>key唯一</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Block style: !!map</span></span>
<span class="line"><span>  Clark : Evans</span></span>
<span class="line"><span>  Ingy  : döt Net</span></span>
<span class="line"><span>  Oren  : Ben-Kiki</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Flow style: !!map { Clark: Evans, Ingy: döt Net, Oren: Ben-Kiki }</span></span></code></pre></div></li><li><p>omap</p><blockquote><p>键: 值对的有序序列，无重复值。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># Explicitly typed ordered map (dictionary).</span></span>
<span class="line"><span>Bestiary: !!omap</span></span>
<span class="line"><span>  - aardvark: African pig-like ant eater. Ugly.</span></span>
<span class="line"><span>  - anteater: South-American ant eater. Two species.</span></span>
<span class="line"><span>  - anaconda: South-American constrictor snake. Scaly.</span></span>
<span class="line"><span>  # Etc.</span></span>
<span class="line"><span># Flow style</span></span>
<span class="line"><span>Numbers: !!omap [ one: 1, two: 2, three : 3 ]</span></span></code></pre></div></li><li><p>pairs</p><blockquote><p>键: 值对的有序序列，允许重复。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># Explicitly typed pairs.</span></span>
<span class="line"><span>Block tasks: !!pairs</span></span>
<span class="line"><span>  - meeting: with team.</span></span>
<span class="line"><span>  - meeting: with boss.</span></span>
<span class="line"><span>  - break: lunch.</span></span>
<span class="line"><span>  - meeting: with client.</span></span>
<span class="line"><span>Flow tasks: !!pairs [ meeting: with team, meeting: with boss ]</span></span></code></pre></div></li><li><p>set</p><blockquote><p>非等值的无序集合。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># Explicitly typed set.</span></span>
<span class="line"><span>baseball players: !!set</span></span>
<span class="line"><span>  ? Mark McGwire</span></span>
<span class="line"><span>  ? Sammy Sosa</span></span>
<span class="line"><span>  ? Ken Griffey</span></span>
<span class="line"><span># Flow style</span></span>
<span class="line"><span>baseball teams: !!set { Boston Red Sox, Detroit Tigers, New York Yankees }</span></span></code></pre></div></li><li><p>seq</p><blockquote><p>表示一个从零开始的连续整数索引的集合。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Block style: !!seq</span></span>
<span class="line"><span>- Clark Evans</span></span>
<span class="line"><span>- Ingy döt Net</span></span>
<span class="line"><span>- Oren Ben-Kiki</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Flow style: !!seq [ Clark Evans, Ingy döt Net, Oren Ben-Kiki ]</span></span></code></pre></div></li><li><p>str</p><blockquote><p>表示 Unicode 字符串,由零个或多个 Unicode 字符组成的序列。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Block style: !!str |-</span></span>
<span class="line"><span>  String: just a theory.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Flow style: !!str &quot;String: just a theory.&quot;</span></span></code></pre></div></li><li><p>null</p><blockquote><p>表示缺少值。</p><p>null | Null | NULL | ~</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>!!null null: value for null key</span></span>
<span class="line"><span>key with null value: !!null null</span></span></code></pre></div></li><li><p>bool</p><blockquote><p>表示一个 true/false 值</p><p>true | True | TRUE | false | False | FALSE</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>YAML is a superset of JSON: !!bool true</span></span>
<span class="line"><span>Pluto is a planet: !!bool false</span></span></code></pre></div></li><li><p>int</p><blockquote><p>整数</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>negative: !!int -12</span></span>
<span class="line"><span>zero: !!int 0</span></span>
<span class="line"><span>positive: !!int 34</span></span></code></pre></div></li><li><p>float</p><blockquote><p>表示实数的近似值，包括三个特殊值(正无穷大和负无穷大，以及“非数”)。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>negative: !!float -1</span></span>
<span class="line"><span>zero: !!float 0</span></span>
<span class="line"><span>positive: !!float 2.3e4</span></span>
<span class="line"><span>infinity: !!float .inf</span></span>
<span class="line"><span>not a number: !!float .nan</span></span></code></pre></div></li><li><p>binary</p><blockquote><p>一个由零个或多个八位元组成的序列(8位值)。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>canonical: !!binary &quot;\\</span></span>
<span class="line"><span> R0lGODlhDAAMAIQAAP//9/X17unp5WZmZgAAAOfn515eXvPz7Y6OjuDg4J+fn5\\</span></span>
<span class="line"><span> OTk6enp56enmlpaWNjY6Ojo4SEhP/++f/++f/++f/++f/++f/++f/++f/++f/+\\</span></span>
<span class="line"><span> +f/++f/++f/++f/++f/++SH+Dk1hZGUgd2l0aCBHSU1QACwAAAAADAAMAAAFLC\\</span></span>
<span class="line"><span> AgjoEwnuNAFOhpEMTRiggcz4BNJHrv/zCFcLiwMWYNG84BwwEeECcgggoBADs=&quot;</span></span>
<span class="line"><span>generic: !binary |</span></span>
<span class="line"><span> R0lGODlhDAAMAIQAAP//9/X17unp5WZmZgAAAOfn515eXvPz7Y6OjuDg4J+fn5</span></span>
<span class="line"><span> OTk6enp56enmlpaWNjY6Ojo4SEhP/++f/++f/++f/++f/++f/++f/++f/++f/+</span></span>
<span class="line"><span> +f/++f/++f/++f/++f/++SH+Dk1hZGUgd2l0aCBHSU1QACwAAAAADAAMAAAFLC</span></span>
<span class="line"><span> AgjoEwnuNAFOhpEMTRiggcz4BNJHrv/zCFcLiwMWYNG84BwwEeECcgggoBADs=</span></span>
<span class="line"><span>description:</span></span>
<span class="line"><span> The binary value above is a tiny arrow encoded as a gif image.</span></span></code></pre></div></li><li><p>merge</p><blockquote><p>指定一个或多个要与当前映射合并的映射。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>---</span></span>
<span class="line"><span>- &amp;CENTER { x: 1, y: 2 }</span></span>
<span class="line"><span>- &amp;LEFT { x: 0, y: 2 }</span></span>
<span class="line"><span>- &amp;BIG { r: 10 }</span></span>
<span class="line"><span>- &amp;SMALL { r: 1 }</span></span>
<span class="line"><span></span></span>
<span class="line"><span># All the following maps are equal:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- # Explicit keys</span></span>
<span class="line"><span>  x: 1</span></span>
<span class="line"><span>  y: 2</span></span>
<span class="line"><span>  r: 10</span></span>
<span class="line"><span>  label: center/big</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- # Merge one map</span></span>
<span class="line"><span>  &lt;&lt; : *CENTER</span></span>
<span class="line"><span>  r: 10</span></span>
<span class="line"><span>  label: center/big</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- # Merge multiple maps</span></span>
<span class="line"><span>  &lt;&lt; : [ *CENTER, *BIG ]</span></span>
<span class="line"><span>  label: center/big</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- # Override</span></span>
<span class="line"><span>  &lt;&lt; : [ *BIG, *LEFT, *SMALL ]</span></span>
<span class="line"><span>  x: 1</span></span>
<span class="line"><span>  label: center/big</span></span></code></pre></div></li><li><p>timestamp</p><blockquote><p>时间</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> 匹配:</span></span>
<span class="line"><span> [0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9] # (ymd)</span></span>
<span class="line"><span>|[0-9][0-9][0-9][0-9] # (year)</span></span>
<span class="line"><span> -[0-9][0-9]? # (month)</span></span>
<span class="line"><span> -[0-9][0-9]? # (day)</span></span>
<span class="line"><span> ([Tt]|[ \\t]+)[0-9][0-9]? # (hour)</span></span>
<span class="line"><span> :[0-9][0-9] # (minute)</span></span>
<span class="line"><span> :[0-9][0-9] # (second)</span></span>
<span class="line"><span> (\\.[0-9]*)? # (fraction)</span></span>
<span class="line"><span> (([ \\t]*)Z|[-+][0-9][0-9]?(:[0-9][0-9])?)? # (time zone)</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> </span></span>
<span class="line"><span> </span></span>
<span class="line"><span>canonical:        2001-12-15T02:59:43.1Z</span></span>
<span class="line"><span>valid iso8601:    2001-12-14t21:59:43.10-05:00</span></span>
<span class="line"><span>space separated:  2001-12-14 21:59:43.10 -5</span></span>
<span class="line"><span>no time zone (Z): 2001-12-15 2:59:43.10</span></span>
<span class="line"><span>date (00:00:00Z): 2002-12-14</span></span></code></pre></div></li></ul>`,8),i=[l];function t(c,o,r,d,u,h){return n(),a("div",null,i)}const k=s(e,[["render",t]]);export{b as __pageData,k as default};
