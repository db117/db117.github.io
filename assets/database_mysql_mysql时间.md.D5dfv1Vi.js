import{_ as e,c as a,a3 as l,o as d}from"./chunks/framework.D7KqzdP6.js";const E=JSON.parse('{"title":"mysql时间","description":"","frontmatter":{},"headers":[],"relativePath":"database/mysql/mysql时间.md","filePath":"database/mysql/mysql时间.md"}'),i={name:"database/mysql/mysql时间.md"};function r(o,t,s,n,c,h){return d(),a("div",null,t[0]||(t[0]=[l(`<h1 id="mysql时间" tabindex="-1">mysql时间 <a class="header-anchor" href="#mysql时间" aria-label="Permalink to &quot;mysql时间&quot;">​</a></h1><table tabindex="0"><thead><tr><th style="text-align:center;">类型名称</th><th style="text-align:center;">日期格式</th><th style="text-align:center;">日期范围</th><th style="text-align:center;">存储需求</th></tr></thead><tbody><tr><td style="text-align:center;">YEAR</td><td style="text-align:center;">YYYY</td><td style="text-align:center;">1901 ~ 2155</td><td style="text-align:center;">1 个字节</td></tr><tr><td style="text-align:center;">TIME</td><td style="text-align:center;">HH:MM:SS</td><td style="text-align:center;">-838:59:59 ~ 838:59:59</td><td style="text-align:center;">3 个字节</td></tr><tr><td style="text-align:center;">DATE</td><td style="text-align:center;">YYYY-MM-DD</td><td style="text-align:center;">1000-01-01 ~ 9999-12-31</td><td style="text-align:center;">3 个字节</td></tr><tr><td style="text-align:center;">DATETIME</td><td style="text-align:center;">YYYY-MM-DD HH:MM:SS</td><td style="text-align:center;">1000-01-01 00:00:00 ~ 9999-12-31 23:59:59</td><td style="text-align:center;">5-8 个字节</td></tr><tr><td style="text-align:center;">TIMESTAMP</td><td style="text-align:center;">YYYY-MM-DD HH:MM:SS</td><td style="text-align:center;">1980-01-01 00:00:01 UTC ~ 2040-01-19 03:14:07 UTC</td><td style="text-align:center;">4 个字节</td></tr></tbody></table><h2 id="year-类型" tabindex="-1">YEAR 类型 <a class="header-anchor" href="#year-类型" aria-label="Permalink to &quot;YEAR 类型&quot;">​</a></h2><p>YEAR 类型是一个单字节类型，用于表示年，在存储时只需要 1 个字节。可以使用各种格式指定 YEAR，如下所示：</p><ul><li>以 4 位字符串或者 4 位数字格式表示的 YEAR，范围为 &#39;1901&#39;～&#39;2155&#39;。输入格式为 &#39;YYYY&#39; 或者 YYYY，例如，输入 &#39;2010&#39; 或 2010，插入数据库的值均为 2010。</li><li>以 2 位字符串格式表示的 YEAR，范围为 &#39;00&#39; 到 &#39;99&#39;。&#39;00&#39;～&#39;69&#39; 和 &#39;70&#39;～&#39;99&#39; 范围的值分别被转换为 2000～2069 和 1970～1999 范围的 YEAR 值。&#39;0&#39; 与 &#39;00&#39; 的作用相同。插入超过取值范围的值将被转换为 2000。</li><li>以 2 位数字表示的 YEAR，范围为 1～99。1～99 和 70～99 范围的值分别被转换为 2001～2069 和 1970～1999 范围的 YEAR 值。注意，在这里 0 值将被转换为 0000，而不是 2000。</li></ul><blockquote><p>提示：两位整数范围与两位字符串范围稍有不同。例如，插入 3000 年，读者可能会使用数字格式的 0 表示 YEAR，实际上，插入数据库的值为 0000，而不是所希望的 3000。只有使用字符串格式的 &#39;0&#39; 或 &#39;00&#39;，才可以被正确解释为 3000，非法 YEAR值将被转换为 0000。</p></blockquote><h2 id="time-类型" tabindex="-1">TIME 类型 <a class="header-anchor" href="#time-类型" aria-label="Permalink to &quot;TIME 类型&quot;">​</a></h2><p>TIME 类型用于只需要时间信息的值，在存储时需要 3 个字节。格式为 HH:MM:SS。HH 表示小时，MM 表示分钟，SS 表示秒。 TIME 类型的取值范围为 -838：59：59～838：59：59，小时部分如此大的原因是 TIME 类型不仅可以用于表示一天的时间（必须小于 24 小时），还可能是某个事件过去的时间或两个事件之间的时间间隔（可大于 24 小时，或者甚至为负）。</p><ul><li>&#39;D HH：MM：SS&#39; 格式的字符串。还可以使用这些“非严格”的语法：&#39;HH：MM：SS&#39;、&#39;HH：MM&#39;、&#39;D HH&#39; 或 &#39;SS&#39;。这里的 D 表示日，可以取 0～34 之间的值。在插入数据库时，D 被转换为小时保存，格式为 “D*24+HH”。</li><li>&#39;HHMMSS&#39; 格式、没有间隔符的字符串或者 HHMMSS 格式的数值，假定是有意义的时间。例如，&#39;101112&#39; 被理解为&#39;10：11：12&#39;，但是 &#39;106112&#39; 是不合法的（它有一个没有意义的分钟部分），在存储时将变为 00：00：00。</li></ul><blockquote><p>提示：为 TIME 列分配简写值时应注意：如果没有冒号，MySQL 解释值时，假定最右边的两位表示秒。（MySQL 解释 TIME 值为过去的时间而不是当前的时间）。例如，读者可能认为 &#39;1112&#39; 和 1112 表示 11：12：00（即 11 点过 12 分钟），但MySQL 将它们解释为 00：11：12（即 11 分 12 秒）。同样 &#39;12&#39; 和 12 被解释为00：00：12。相反，TIME 值中如果使用冒号则肯定被看作当天的时间，也就是说，&#39;11：12&#39; 表示 11：12：00，而不是 00：11：12。</p></blockquote><h2 id="date-类型" tabindex="-1">DATE 类型 <a class="header-anchor" href="#date-类型" aria-label="Permalink to &quot;DATE 类型&quot;">​</a></h2><p>DATE 类型用于仅需要日期值时，没有时间部分，在存储时需要 3 个字节。日期格式为 &#39;YYYY-MM-DD&#39;，其中 YYYY 表示年，MM 表示月，DD 表示日。 在给 DATE 类型的字段赋值时，可以使用字符串类型或者数字类型的数据插入，只要符合 DATE 的日期格式即可。如下所示：</p><blockquote><p>提示：MySQL 允许“不严格”语法：任何标点符号都可以用作日期部分之间的间隔符。例如，&#39;98-11-31&#39;、&#39;98.11.31&#39;、&#39;98/11/31&#39;和&#39;98@11@31&#39; 是等价的，这些值也可以正确地插入数据库。</p></blockquote><h2 id="datetime-类型" tabindex="-1">DATETIME 类型 <a class="header-anchor" href="#datetime-类型" aria-label="Permalink to &quot;DATETIME 类型&quot;">​</a></h2><p>MySQL <code>DATETIME</code>存储包含<a href="http://www.yiibai.com/mysql/date.html" target="_blank" rel="noreferrer">日期</a>和<a href="http://www.yiibai.com/mysql/time.html" target="_blank" rel="noreferrer">时间</a>的值。 当您从<code>DATETIME</code>列<a href="http://www.yiibai.com/mysql/select-statement-query-data.html" target="_blank" rel="noreferrer">查询数据</a>时，MySQL会以以下格式显示<code>DATETIME</code>值：</p><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">YYYY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">MM</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">DD HH:MM:SS</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SQL</span></span></code></pre></div><p>默认情况下，<code>DATETIME</code>的值范围为<code>1000-01-01 00:00:00</code>至<code>9999-12-31 23:59:59</code>。</p><p><code>DATETIME</code>值使用<code>5</code>个字节进行存储。另外，<code>DATETIME</code>值可以包括格式为<code>YYYY-MM-DD HH:MM:SS [.fraction]</code>例如：<code>2017-12-20 10:01:00.999999</code>的尾数有小数秒。 当包含小数秒精度时，<code>DATETIME</code>值需要更多存储，如下表所示：</p><table tabindex="0"><thead><tr><th>分数秒精度</th><th>存储(字节)</th></tr></thead><tbody><tr><td>0</td><td>0</td></tr><tr><td>1，2</td><td>1</td></tr><tr><td>3，4</td><td>2</td></tr><tr><td>5，6</td><td>3</td></tr></tbody></table><p>例如，<code>2017-12-20 10:01:00.999999</code>需要<code>8</code>个字节，<code>2015-12-20 10:01:00</code>需要<code>5</code>个字节，<code>3</code>个字节为<code>.999999</code>，而<code>2017-12-20 10:01:00.9</code>只需要<code>6</code>个字节，小数秒精度为<code>1</code>字节。</p><blockquote><p>请注意，在<em>MySQL 5.6.4</em>之前，<code>DATETIME</code>值需要<code>8</code>字节存储而不是<code>5</code>个字节。</p></blockquote><h2 id="timestamp-类型" tabindex="-1">TIMESTAMP 类型 <a class="header-anchor" href="#timestamp-类型" aria-label="Permalink to &quot;TIMESTAMP 类型&quot;">​</a></h2><p>TIMESTAMP 的显示格式与 DATETIME 相同，显示宽度固定在 19 个字符，日期格式为 YYYY-MM-DD HH：MM：SS，在存储时需要 4 个字节。但是 TIMESTAMP 列的取值范围小于 DATETIME 的取值范围，为 &#39;1970-01-01 00：00：01&#39;UTC～&#39;2038-01-19 03：14：07&#39;UTC。在插入数据时，要保证在合法的取值范围内。</p><blockquote><p>提示：协调世界时（英：Coordinated Universal Time，法：Temps Universel Coordonné）又称为世界统一时间、世界标准时间、国际协调时间。英文（CUT）和法文（TUC）的缩写不同，作为妥协，简称 UTC。</p></blockquote><p>TIMESTAMP 与 DATETIME 除了存储字节和支持的范围不同外，还有一个最大的区别是：</p><ul><li>DATETIME 在存储日期数据时，按实际输入的格式存储，即输入什么就存储什么，与时区无关；</li><li>而 TIMESTAMP 值的存储是以 UTC（世界标准时间）格式保存的，存储时对当前时区进行转换，检索时再转换回当前时区。即查询时，根据当前时区的不同，显示的时间值是不同的。</li></ul><blockquote><p>提示：如果为一个 DATETIME 或 TIMESTAMP 对象分配一个 DATE 值，结果值的时间部分被设置为 &#39;00：00：00&#39;，因此 DATE 值未包含时间信息。如果为一个 DATE 对象分配一个 DATETIME 或 TIMESTAMP 值，结果值的时间部分被删除，因此DATE 值未包含时间信息。</p></blockquote><p>整理自:【易百教程】：<a href="https://www.yiibai.com/mysql/datetime.html" target="_blank" rel="noreferrer">https://www.yiibai.com/mysql/datetime.html</a></p><p><a href="http://c.biancheng.net/view/2425.html" target="_blank" rel="noreferrer">http://c.biancheng.net/view/2425.html</a></p>`,29)]))}const T=e(i,[["render",r]]);export{E as __pageData,T as default};
