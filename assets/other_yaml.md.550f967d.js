import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.54cab62e.js";const h=JSON.parse('{"title":"yaml格式","description":"","frontmatter":{"title":"yaml格式"},"headers":[],"relativePath":"other/yaml.md","filePath":"other/yaml.md","lastUpdated":1697773070000}'),l={name:"other/yaml.md"},p=e(`<p><a href="http://yaml.org/" target="_blank" rel="noreferrer">官网</a></p><p><a href="https://github.com/yaml/yaml" target="_blank" rel="noreferrer">github</a></p><h2 id="格式" tabindex="-1">格式 <a class="header-anchor" href="#格式" aria-label="Permalink to &quot;格式&quot;">​</a></h2><h3 id="基本格式" tabindex="-1">基本格式 <a class="header-anchor" href="#基本格式" aria-label="Permalink to &quot;基本格式&quot;">​</a></h3><ol><li>yaml中允许表示三种格式，分别为常量值、对象和数组</li><li>大小写敏感</li><li>使用缩进代表层级关系</li><li>.缩进只能使用空格，<strong>不能使用tab键</strong>，不要求空格个数，只需要相同层级左对齐（一般2或4个空格）</li></ol><h3 id="类型" tabindex="-1">类型 <a class="header-anchor" href="#类型" aria-label="Permalink to &quot;类型&quot;">​</a></h3><blockquote><p>可以使用!!来定义类型</p></blockquote><ul><li><p>map</p><blockquote><p>key唯一</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Block style: !!map</span></span>
<span class="line"><span style="color:#e1e4e8;">  Clark : Evans</span></span>
<span class="line"><span style="color:#e1e4e8;">  Ingy  : döt Net</span></span>
<span class="line"><span style="color:#e1e4e8;">  Oren  : Ben-Kiki</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Flow style: !!map { Clark: Evans, Ingy: döt Net, Oren: Ben-Kiki }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Block style: !!map</span></span>
<span class="line"><span style="color:#24292e;">  Clark : Evans</span></span>
<span class="line"><span style="color:#24292e;">  Ingy  : döt Net</span></span>
<span class="line"><span style="color:#24292e;">  Oren  : Ben-Kiki</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Flow style: !!map { Clark: Evans, Ingy: döt Net, Oren: Ben-Kiki }</span></span></code></pre></div></li><li><p>omap</p><blockquote><p>键: 值对的有序序列，无重复值。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># Explicitly typed ordered map (dictionary).</span></span>
<span class="line"><span style="color:#e1e4e8;">Bestiary: !!omap</span></span>
<span class="line"><span style="color:#e1e4e8;">  - aardvark: African pig-like ant eater. Ugly.</span></span>
<span class="line"><span style="color:#e1e4e8;">  - anteater: South-American ant eater. Two species.</span></span>
<span class="line"><span style="color:#e1e4e8;">  - anaconda: South-American constrictor snake. Scaly.</span></span>
<span class="line"><span style="color:#e1e4e8;">  # Etc.</span></span>
<span class="line"><span style="color:#e1e4e8;"># Flow style</span></span>
<span class="line"><span style="color:#e1e4e8;">Numbers: !!omap [ one: 1, two: 2, three : 3 ]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># Explicitly typed ordered map (dictionary).</span></span>
<span class="line"><span style="color:#24292e;">Bestiary: !!omap</span></span>
<span class="line"><span style="color:#24292e;">  - aardvark: African pig-like ant eater. Ugly.</span></span>
<span class="line"><span style="color:#24292e;">  - anteater: South-American ant eater. Two species.</span></span>
<span class="line"><span style="color:#24292e;">  - anaconda: South-American constrictor snake. Scaly.</span></span>
<span class="line"><span style="color:#24292e;">  # Etc.</span></span>
<span class="line"><span style="color:#24292e;"># Flow style</span></span>
<span class="line"><span style="color:#24292e;">Numbers: !!omap [ one: 1, two: 2, three : 3 ]</span></span></code></pre></div></li><li><p>pairs</p><blockquote><p>键: 值对的有序序列，允许重复。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># Explicitly typed pairs.</span></span>
<span class="line"><span style="color:#e1e4e8;">Block tasks: !!pairs</span></span>
<span class="line"><span style="color:#e1e4e8;">  - meeting: with team.</span></span>
<span class="line"><span style="color:#e1e4e8;">  - meeting: with boss.</span></span>
<span class="line"><span style="color:#e1e4e8;">  - break: lunch.</span></span>
<span class="line"><span style="color:#e1e4e8;">  - meeting: with client.</span></span>
<span class="line"><span style="color:#e1e4e8;">Flow tasks: !!pairs [ meeting: with team, meeting: with boss ]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># Explicitly typed pairs.</span></span>
<span class="line"><span style="color:#24292e;">Block tasks: !!pairs</span></span>
<span class="line"><span style="color:#24292e;">  - meeting: with team.</span></span>
<span class="line"><span style="color:#24292e;">  - meeting: with boss.</span></span>
<span class="line"><span style="color:#24292e;">  - break: lunch.</span></span>
<span class="line"><span style="color:#24292e;">  - meeting: with client.</span></span>
<span class="line"><span style="color:#24292e;">Flow tasks: !!pairs [ meeting: with team, meeting: with boss ]</span></span></code></pre></div></li><li><p>set</p><blockquote><p>非等值的无序集合。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># Explicitly typed set.</span></span>
<span class="line"><span style="color:#e1e4e8;">baseball players: !!set</span></span>
<span class="line"><span style="color:#e1e4e8;">  ? Mark McGwire</span></span>
<span class="line"><span style="color:#e1e4e8;">  ? Sammy Sosa</span></span>
<span class="line"><span style="color:#e1e4e8;">  ? Ken Griffey</span></span>
<span class="line"><span style="color:#e1e4e8;"># Flow style</span></span>
<span class="line"><span style="color:#e1e4e8;">baseball teams: !!set { Boston Red Sox, Detroit Tigers, New York Yankees }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># Explicitly typed set.</span></span>
<span class="line"><span style="color:#24292e;">baseball players: !!set</span></span>
<span class="line"><span style="color:#24292e;">  ? Mark McGwire</span></span>
<span class="line"><span style="color:#24292e;">  ? Sammy Sosa</span></span>
<span class="line"><span style="color:#24292e;">  ? Ken Griffey</span></span>
<span class="line"><span style="color:#24292e;"># Flow style</span></span>
<span class="line"><span style="color:#24292e;">baseball teams: !!set { Boston Red Sox, Detroit Tigers, New York Yankees }</span></span></code></pre></div></li><li><p>seq</p><blockquote><p>表示一个从零开始的连续整数索引的集合。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Block style: !!seq</span></span>
<span class="line"><span style="color:#e1e4e8;">- Clark Evans</span></span>
<span class="line"><span style="color:#e1e4e8;">- Ingy döt Net</span></span>
<span class="line"><span style="color:#e1e4e8;">- Oren Ben-Kiki</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Flow style: !!seq [ Clark Evans, Ingy döt Net, Oren Ben-Kiki ]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Block style: !!seq</span></span>
<span class="line"><span style="color:#24292e;">- Clark Evans</span></span>
<span class="line"><span style="color:#24292e;">- Ingy döt Net</span></span>
<span class="line"><span style="color:#24292e;">- Oren Ben-Kiki</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Flow style: !!seq [ Clark Evans, Ingy döt Net, Oren Ben-Kiki ]</span></span></code></pre></div></li><li><p>str</p><blockquote><p>表示 Unicode 字符串,由零个或多个 Unicode 字符组成的序列。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Block style: !!str |-</span></span>
<span class="line"><span style="color:#e1e4e8;">  String: just a theory.</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Flow style: !!str &quot;String: just a theory.&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Block style: !!str |-</span></span>
<span class="line"><span style="color:#24292e;">  String: just a theory.</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Flow style: !!str &quot;String: just a theory.&quot;</span></span></code></pre></div></li><li><p>null</p><blockquote><p>表示缺少值。</p><p>null | Null | NULL | ~</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">!!null null: value for null key</span></span>
<span class="line"><span style="color:#e1e4e8;">key with null value: !!null null</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">!!null null: value for null key</span></span>
<span class="line"><span style="color:#24292e;">key with null value: !!null null</span></span></code></pre></div></li><li><p>bool</p><blockquote><p>表示一个 true/false 值</p><p>true | True | TRUE | false | False | FALSE</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">YAML is a superset of JSON: !!bool true</span></span>
<span class="line"><span style="color:#e1e4e8;">Pluto is a planet: !!bool false</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">YAML is a superset of JSON: !!bool true</span></span>
<span class="line"><span style="color:#24292e;">Pluto is a planet: !!bool false</span></span></code></pre></div></li><li><p>int</p><blockquote><p>整数</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">negative: !!int -12</span></span>
<span class="line"><span style="color:#e1e4e8;">zero: !!int 0</span></span>
<span class="line"><span style="color:#e1e4e8;">positive: !!int 34</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">negative: !!int -12</span></span>
<span class="line"><span style="color:#24292e;">zero: !!int 0</span></span>
<span class="line"><span style="color:#24292e;">positive: !!int 34</span></span></code></pre></div></li><li><p>float</p><blockquote><p>表示实数的近似值，包括三个特殊值(正无穷大和负无穷大，以及“非数”)。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">negative: !!float -1</span></span>
<span class="line"><span style="color:#e1e4e8;">zero: !!float 0</span></span>
<span class="line"><span style="color:#e1e4e8;">positive: !!float 2.3e4</span></span>
<span class="line"><span style="color:#e1e4e8;">infinity: !!float .inf</span></span>
<span class="line"><span style="color:#e1e4e8;">not a number: !!float .nan</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">negative: !!float -1</span></span>
<span class="line"><span style="color:#24292e;">zero: !!float 0</span></span>
<span class="line"><span style="color:#24292e;">positive: !!float 2.3e4</span></span>
<span class="line"><span style="color:#24292e;">infinity: !!float .inf</span></span>
<span class="line"><span style="color:#24292e;">not a number: !!float .nan</span></span></code></pre></div></li><li><p>binary</p><blockquote><p>一个由零个或多个八位元组成的序列(8位值)。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">canonical: !!binary &quot;\\</span></span>
<span class="line"><span style="color:#e1e4e8;"> R0lGODlhDAAMAIQAAP//9/X17unp5WZmZgAAAOfn515eXvPz7Y6OjuDg4J+fn5\\</span></span>
<span class="line"><span style="color:#e1e4e8;"> OTk6enp56enmlpaWNjY6Ojo4SEhP/++f/++f/++f/++f/++f/++f/++f/++f/+\\</span></span>
<span class="line"><span style="color:#e1e4e8;"> +f/++f/++f/++f/++f/++SH+Dk1hZGUgd2l0aCBHSU1QACwAAAAADAAMAAAFLC\\</span></span>
<span class="line"><span style="color:#e1e4e8;"> AgjoEwnuNAFOhpEMTRiggcz4BNJHrv/zCFcLiwMWYNG84BwwEeECcgggoBADs=&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">generic: !binary |</span></span>
<span class="line"><span style="color:#e1e4e8;"> R0lGODlhDAAMAIQAAP//9/X17unp5WZmZgAAAOfn515eXvPz7Y6OjuDg4J+fn5</span></span>
<span class="line"><span style="color:#e1e4e8;"> OTk6enp56enmlpaWNjY6Ojo4SEhP/++f/++f/++f/++f/++f/++f/++f/++f/+</span></span>
<span class="line"><span style="color:#e1e4e8;"> +f/++f/++f/++f/++f/++SH+Dk1hZGUgd2l0aCBHSU1QACwAAAAADAAMAAAFLC</span></span>
<span class="line"><span style="color:#e1e4e8;"> AgjoEwnuNAFOhpEMTRiggcz4BNJHrv/zCFcLiwMWYNG84BwwEeECcgggoBADs=</span></span>
<span class="line"><span style="color:#e1e4e8;">description:</span></span>
<span class="line"><span style="color:#e1e4e8;"> The binary value above is a tiny arrow encoded as a gif image.</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">canonical: !!binary &quot;\\</span></span>
<span class="line"><span style="color:#24292e;"> R0lGODlhDAAMAIQAAP//9/X17unp5WZmZgAAAOfn515eXvPz7Y6OjuDg4J+fn5\\</span></span>
<span class="line"><span style="color:#24292e;"> OTk6enp56enmlpaWNjY6Ojo4SEhP/++f/++f/++f/++f/++f/++f/++f/++f/+\\</span></span>
<span class="line"><span style="color:#24292e;"> +f/++f/++f/++f/++f/++SH+Dk1hZGUgd2l0aCBHSU1QACwAAAAADAAMAAAFLC\\</span></span>
<span class="line"><span style="color:#24292e;"> AgjoEwnuNAFOhpEMTRiggcz4BNJHrv/zCFcLiwMWYNG84BwwEeECcgggoBADs=&quot;</span></span>
<span class="line"><span style="color:#24292e;">generic: !binary |</span></span>
<span class="line"><span style="color:#24292e;"> R0lGODlhDAAMAIQAAP//9/X17unp5WZmZgAAAOfn515eXvPz7Y6OjuDg4J+fn5</span></span>
<span class="line"><span style="color:#24292e;"> OTk6enp56enmlpaWNjY6Ojo4SEhP/++f/++f/++f/++f/++f/++f/++f/++f/+</span></span>
<span class="line"><span style="color:#24292e;"> +f/++f/++f/++f/++f/++SH+Dk1hZGUgd2l0aCBHSU1QACwAAAAADAAMAAAFLC</span></span>
<span class="line"><span style="color:#24292e;"> AgjoEwnuNAFOhpEMTRiggcz4BNJHrv/zCFcLiwMWYNG84BwwEeECcgggoBADs=</span></span>
<span class="line"><span style="color:#24292e;">description:</span></span>
<span class="line"><span style="color:#24292e;"> The binary value above is a tiny arrow encoded as a gif image.</span></span></code></pre></div></li><li><p>merge</p><blockquote><p>指定一个或多个要与当前映射合并的映射。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">---</span></span>
<span class="line"><span style="color:#e1e4e8;">- &amp;CENTER { x: 1, y: 2 }</span></span>
<span class="line"><span style="color:#e1e4e8;">- &amp;LEFT { x: 0, y: 2 }</span></span>
<span class="line"><span style="color:#e1e4e8;">- &amp;BIG { r: 10 }</span></span>
<span class="line"><span style="color:#e1e4e8;">- &amp;SMALL { r: 1 }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># All the following maps are equal:</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">- # Explicit keys</span></span>
<span class="line"><span style="color:#e1e4e8;">  x: 1</span></span>
<span class="line"><span style="color:#e1e4e8;">  y: 2</span></span>
<span class="line"><span style="color:#e1e4e8;">  r: 10</span></span>
<span class="line"><span style="color:#e1e4e8;">  label: center/big</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">- # Merge one map</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;&lt; : *CENTER</span></span>
<span class="line"><span style="color:#e1e4e8;">  r: 10</span></span>
<span class="line"><span style="color:#e1e4e8;">  label: center/big</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">- # Merge multiple maps</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;&lt; : [ *CENTER, *BIG ]</span></span>
<span class="line"><span style="color:#e1e4e8;">  label: center/big</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">- # Override</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;&lt; : [ *BIG, *LEFT, *SMALL ]</span></span>
<span class="line"><span style="color:#e1e4e8;">  x: 1</span></span>
<span class="line"><span style="color:#e1e4e8;">  label: center/big</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">---</span></span>
<span class="line"><span style="color:#24292e;">- &amp;CENTER { x: 1, y: 2 }</span></span>
<span class="line"><span style="color:#24292e;">- &amp;LEFT { x: 0, y: 2 }</span></span>
<span class="line"><span style="color:#24292e;">- &amp;BIG { r: 10 }</span></span>
<span class="line"><span style="color:#24292e;">- &amp;SMALL { r: 1 }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># All the following maps are equal:</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">- # Explicit keys</span></span>
<span class="line"><span style="color:#24292e;">  x: 1</span></span>
<span class="line"><span style="color:#24292e;">  y: 2</span></span>
<span class="line"><span style="color:#24292e;">  r: 10</span></span>
<span class="line"><span style="color:#24292e;">  label: center/big</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">- # Merge one map</span></span>
<span class="line"><span style="color:#24292e;">  &lt;&lt; : *CENTER</span></span>
<span class="line"><span style="color:#24292e;">  r: 10</span></span>
<span class="line"><span style="color:#24292e;">  label: center/big</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">- # Merge multiple maps</span></span>
<span class="line"><span style="color:#24292e;">  &lt;&lt; : [ *CENTER, *BIG ]</span></span>
<span class="line"><span style="color:#24292e;">  label: center/big</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">- # Override</span></span>
<span class="line"><span style="color:#24292e;">  &lt;&lt; : [ *BIG, *LEFT, *SMALL ]</span></span>
<span class="line"><span style="color:#24292e;">  x: 1</span></span>
<span class="line"><span style="color:#24292e;">  label: center/big</span></span></code></pre></div></li><li><p>timestamp</p><blockquote><p>时间</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"> 匹配:</span></span>
<span class="line"><span style="color:#e1e4e8;"> [0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9] # (ymd)</span></span>
<span class="line"><span style="color:#e1e4e8;">|[0-9][0-9][0-9][0-9] # (year)</span></span>
<span class="line"><span style="color:#e1e4e8;"> -[0-9][0-9]? # (month)</span></span>
<span class="line"><span style="color:#e1e4e8;"> -[0-9][0-9]? # (day)</span></span>
<span class="line"><span style="color:#e1e4e8;"> ([Tt]|[ \\t]+)[0-9][0-9]? # (hour)</span></span>
<span class="line"><span style="color:#e1e4e8;"> :[0-9][0-9] # (minute)</span></span>
<span class="line"><span style="color:#e1e4e8;"> :[0-9][0-9] # (second)</span></span>
<span class="line"><span style="color:#e1e4e8;"> (\\.[0-9]*)? # (fraction)</span></span>
<span class="line"><span style="color:#e1e4e8;"> (([ \\t]*)Z|[-+][0-9][0-9]?(:[0-9][0-9])?)? # (time zone)</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">canonical:        2001-12-15T02:59:43.1Z</span></span>
<span class="line"><span style="color:#e1e4e8;">valid iso8601:    2001-12-14t21:59:43.10-05:00</span></span>
<span class="line"><span style="color:#e1e4e8;">space separated:  2001-12-14 21:59:43.10 -5</span></span>
<span class="line"><span style="color:#e1e4e8;">no time zone (Z): 2001-12-15 2:59:43.10</span></span>
<span class="line"><span style="color:#e1e4e8;">date (00:00:00Z): 2002-12-14</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"> 匹配:</span></span>
<span class="line"><span style="color:#24292e;"> [0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9] # (ymd)</span></span>
<span class="line"><span style="color:#24292e;">|[0-9][0-9][0-9][0-9] # (year)</span></span>
<span class="line"><span style="color:#24292e;"> -[0-9][0-9]? # (month)</span></span>
<span class="line"><span style="color:#24292e;"> -[0-9][0-9]? # (day)</span></span>
<span class="line"><span style="color:#24292e;"> ([Tt]|[ \\t]+)[0-9][0-9]? # (hour)</span></span>
<span class="line"><span style="color:#24292e;"> :[0-9][0-9] # (minute)</span></span>
<span class="line"><span style="color:#24292e;"> :[0-9][0-9] # (second)</span></span>
<span class="line"><span style="color:#24292e;"> (\\.[0-9]*)? # (fraction)</span></span>
<span class="line"><span style="color:#24292e;"> (([ \\t]*)Z|[-+][0-9][0-9]?(:[0-9][0-9])?)? # (time zone)</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">canonical:        2001-12-15T02:59:43.1Z</span></span>
<span class="line"><span style="color:#24292e;">valid iso8601:    2001-12-14t21:59:43.10-05:00</span></span>
<span class="line"><span style="color:#24292e;">space separated:  2001-12-14 21:59:43.10 -5</span></span>
<span class="line"><span style="color:#24292e;">no time zone (Z): 2001-12-15 2:59:43.10</span></span>
<span class="line"><span style="color:#24292e;">date (00:00:00Z): 2002-12-14</span></span></code></pre></div></li></ul>`,8),o=[p];function c(t,i,r,y,d,g){return n(),a("div",null,o)}const k=s(l,[["render",c]]);export{h as __pageData,k as default};
