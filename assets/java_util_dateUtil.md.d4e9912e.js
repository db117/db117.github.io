import{_ as s,c as n,o as a,a as e}from"./app.3d2db0cb.js";const m=JSON.parse('{"title":"java 时间工具","description":"","frontmatter":{"title":"java 时间工具"},"headers":[{"level":3,"title":"时间格式对照表","slug":"时间格式对照表","link":"#时间格式对照表","children":[]},{"level":3,"title":"DateTimeFormatter相关","slug":"datetimeformatter相关","link":"#datetimeformatter相关","children":[]}],"relativePath":"java/util/dateUtil.md","lastUpdated":1677230567000}'),l={name:"java/util/dateUtil.md"},p=e(`<h3 id="时间格式对照表" tabindex="-1">时间格式对照表 <a class="header-anchor" href="#时间格式对照表" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">	Symbol  Meaning                     Presentation      Examples</span></span>
<span class="line"><span style="color:#A6ACCD;">   ------  -------                     ------------      -------</span></span>
<span class="line"><span style="color:#A6ACCD;">    G       era                         text              AD; Anno Domini; A</span></span>
<span class="line"><span style="color:#A6ACCD;">    u       year                        year              2004; 04</span></span>
<span class="line"><span style="color:#A6ACCD;">    y       year-of-era                 year              2004; 04</span></span>
<span class="line"><span style="color:#A6ACCD;">    D       day-of-year                 number            189</span></span>
<span class="line"><span style="color:#A6ACCD;">    M/L     month-of-year               number/text       7; 07; Jul; July; J</span></span>
<span class="line"><span style="color:#A6ACCD;">    d       day-of-month                number            10</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    Q/q     quarter-of-year             number/text       3; 03; Q3; 3rd quarter</span></span>
<span class="line"><span style="color:#A6ACCD;">    Y       week-based-year             year              1996; 96</span></span>
<span class="line"><span style="color:#A6ACCD;">    w       week-of-week-based-year     number            27</span></span>
<span class="line"><span style="color:#A6ACCD;">    W       week-of-month               number            4</span></span>
<span class="line"><span style="color:#A6ACCD;">    E       day-of-week                 text              Tue; Tuesday; T</span></span>
<span class="line"><span style="color:#A6ACCD;">    e/c     localized day-of-week       number/text       2; 02; Tue; Tuesday; T</span></span>
<span class="line"><span style="color:#A6ACCD;">    F       week-of-month               number            3</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    a       am-pm-of-day                text              PM</span></span>
<span class="line"><span style="color:#A6ACCD;">    h       clock-hour-of-am-pm (1-12)  number            12</span></span>
<span class="line"><span style="color:#A6ACCD;">    K       hour-of-am-pm (0-11)        number            0</span></span>
<span class="line"><span style="color:#A6ACCD;">    k       clock-hour-of-am-pm (1-24)  number            0</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    H       hour-of-day (0-23)          number            0</span></span>
<span class="line"><span style="color:#A6ACCD;">    m       minute-of-hour              number            30</span></span>
<span class="line"><span style="color:#A6ACCD;">    s       second-of-minute            number            55</span></span>
<span class="line"><span style="color:#A6ACCD;">    S       fraction-of-second          fraction          978</span></span>
<span class="line"><span style="color:#A6ACCD;">    A       milli-of-day                number            1234</span></span>
<span class="line"><span style="color:#A6ACCD;">    n       nano-of-second              number            987654321</span></span>
<span class="line"><span style="color:#A6ACCD;">    N       nano-of-day                 number            1234000000</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    V       time-zone ID                zone-id           America/Los_Angeles; Z; -08:30</span></span>
<span class="line"><span style="color:#A6ACCD;">    z       time-zone name              zone-name         Pacific Standard Time; PST</span></span>
<span class="line"><span style="color:#A6ACCD;">    O       localized zone-offset       offset-O          GMT+8; GMT+08:00; UTC-08:00;</span></span>
<span class="line"><span style="color:#A6ACCD;">    X       zone-offset &#39;Z&#39; for zero    offset-X          Z; -08; -0830; -08:30; -083015; -08:30:15;</span></span>
<span class="line"><span style="color:#A6ACCD;">    x       zone-offset                 offset-x          +0000; -08; -0830; -08:30; -083015; -08:30:15;</span></span>
<span class="line"><span style="color:#A6ACCD;">    Z       zone-offset                 offset-Z          +0000; -0800; -08:00;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    p       pad next                    pad modifier      1</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;       escape for text             delimiter</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;&#39;      single quote                literal           &#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    [       optional section start</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]       optional section end</span></span>
<span class="line"><span style="color:#A6ACCD;">    #       reserved for future use</span></span>
<span class="line"><span style="color:#A6ACCD;">    {       reserved for future use</span></span>
<span class="line"><span style="color:#A6ACCD;">    }       reserved for future use</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="datetimeformatter相关" tabindex="-1">DateTimeFormatter相关 <a class="header-anchor" href="#datetimeformatter相关" aria-hidden="true">#</a></h3><p>常规使用</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">DateTimeFormatter formatter = DateTimeFormatter.ofPattern(&quot;yyyy-MM-dd HH:mm&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>复杂格式实现</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">// 时间格式非常规</span></span>
<span class="line"><span style="color:#A6ACCD;">new DateTimeFormatterBuilder()</span></span>
<span class="line"><span style="color:#A6ACCD;">            .appendValue(YEAR, 4)</span></span>
<span class="line"><span style="color:#A6ACCD;">            .appendLiteral(&#39;0&#39;)// 针对带数字的只能用这种方式</span></span>
<span class="line"><span style="color:#A6ACCD;">            .appendValue(MONTH_OF_YEAR, 2)</span></span>
<span class="line"><span style="color:#A6ACCD;">            .toFormatter()</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 202212 -&gt; 20221201</span></span>
<span class="line"><span style="color:#A6ACCD;">new DateTimeFormatterBuilder()</span></span>
<span class="line"><span style="color:#A6ACCD;">            .appendValue(YEAR, 4)</span></span>
<span class="line"><span style="color:#A6ACCD;">            .appendValue(MONTH_OF_YEAR, 2)</span></span>
<span class="line"><span style="color:#A6ACCD;">            .parseDefaulting(ChronoField.DAY_OF_MONTH, 1)// 需要带默认值的</span></span>
<span class="line"><span style="color:#A6ACCD;">            .toFormatter();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,7),o=[p];function t(r,c,i,A,C,y){return a(),n("div",null,o)}const D=s(l,[["render",t]]);export{m as __pageData,D as default};
