import{_ as s,o as e,c as n,Q as a}from"./chunks/framework.54cab62e.js";const f=JSON.parse('{"title":"java 时间工具","description":"","frontmatter":{"title":"java 时间工具"},"headers":[],"relativePath":"java/util/dateUtil.md","filePath":"java/util/dateUtil.md","lastUpdated":1697773070000}'),l={name:"java/util/dateUtil.md"},p=a(`<h3 id="时间格式对照表" tabindex="-1">时间格式对照表 <a class="header-anchor" href="#时间格式对照表" aria-label="Permalink to &quot;时间格式对照表&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">	Symbol  Meaning                     Presentation      Examples</span></span>
<span class="line"><span style="color:#e1e4e8;">   ------  -------                     ------------      -------</span></span>
<span class="line"><span style="color:#e1e4e8;">    G       era                         text              AD; Anno Domini; A</span></span>
<span class="line"><span style="color:#e1e4e8;">    u       year                        year              2004; 04</span></span>
<span class="line"><span style="color:#e1e4e8;">    y       year-of-era                 year              2004; 04</span></span>
<span class="line"><span style="color:#e1e4e8;">    D       day-of-year                 number            189</span></span>
<span class="line"><span style="color:#e1e4e8;">    M/L     month-of-year               number/text       7; 07; Jul; July; J</span></span>
<span class="line"><span style="color:#e1e4e8;">    d       day-of-month                number            10</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">    Q/q     quarter-of-year             number/text       3; 03; Q3; 3rd quarter</span></span>
<span class="line"><span style="color:#e1e4e8;">    Y       week-based-year             year              1996; 96</span></span>
<span class="line"><span style="color:#e1e4e8;">    w       week-of-week-based-year     number            27</span></span>
<span class="line"><span style="color:#e1e4e8;">    W       week-of-month               number            4</span></span>
<span class="line"><span style="color:#e1e4e8;">    E       day-of-week                 text              Tue; Tuesday; T</span></span>
<span class="line"><span style="color:#e1e4e8;">    e/c     localized day-of-week       number/text       2; 02; Tue; Tuesday; T</span></span>
<span class="line"><span style="color:#e1e4e8;">    F       week-of-month               number            3</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">    a       am-pm-of-day                text              PM</span></span>
<span class="line"><span style="color:#e1e4e8;">    h       clock-hour-of-am-pm (1-12)  number            12</span></span>
<span class="line"><span style="color:#e1e4e8;">    K       hour-of-am-pm (0-11)        number            0</span></span>
<span class="line"><span style="color:#e1e4e8;">    k       clock-hour-of-am-pm (1-24)  number            0</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">    H       hour-of-day (0-23)          number            0</span></span>
<span class="line"><span style="color:#e1e4e8;">    m       minute-of-hour              number            30</span></span>
<span class="line"><span style="color:#e1e4e8;">    s       second-of-minute            number            55</span></span>
<span class="line"><span style="color:#e1e4e8;">    S       fraction-of-second          fraction          978</span></span>
<span class="line"><span style="color:#e1e4e8;">    A       milli-of-day                number            1234</span></span>
<span class="line"><span style="color:#e1e4e8;">    n       nano-of-second              number            987654321</span></span>
<span class="line"><span style="color:#e1e4e8;">    N       nano-of-day                 number            1234000000</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">    V       time-zone ID                zone-id           America/Los_Angeles; Z; -08:30</span></span>
<span class="line"><span style="color:#e1e4e8;">    z       time-zone name              zone-name         Pacific Standard Time; PST</span></span>
<span class="line"><span style="color:#e1e4e8;">    O       localized zone-offset       offset-O          GMT+8; GMT+08:00; UTC-08:00;</span></span>
<span class="line"><span style="color:#e1e4e8;">    X       zone-offset &#39;Z&#39; for zero    offset-X          Z; -08; -0830; -08:30; -083015; -08:30:15;</span></span>
<span class="line"><span style="color:#e1e4e8;">    x       zone-offset                 offset-x          +0000; -08; -0830; -08:30; -083015; -08:30:15;</span></span>
<span class="line"><span style="color:#e1e4e8;">    Z       zone-offset                 offset-Z          +0000; -0800; -08:00;</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">    p       pad next                    pad modifier      1</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;       escape for text             delimiter</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;&#39;      single quote                literal           &#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">    [       optional section start</span></span>
<span class="line"><span style="color:#e1e4e8;">    ]       optional section end</span></span>
<span class="line"><span style="color:#e1e4e8;">    #       reserved for future use</span></span>
<span class="line"><span style="color:#e1e4e8;">    {       reserved for future use</span></span>
<span class="line"><span style="color:#e1e4e8;">    }       reserved for future use</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">	Symbol  Meaning                     Presentation      Examples</span></span>
<span class="line"><span style="color:#24292e;">   ------  -------                     ------------      -------</span></span>
<span class="line"><span style="color:#24292e;">    G       era                         text              AD; Anno Domini; A</span></span>
<span class="line"><span style="color:#24292e;">    u       year                        year              2004; 04</span></span>
<span class="line"><span style="color:#24292e;">    y       year-of-era                 year              2004; 04</span></span>
<span class="line"><span style="color:#24292e;">    D       day-of-year                 number            189</span></span>
<span class="line"><span style="color:#24292e;">    M/L     month-of-year               number/text       7; 07; Jul; July; J</span></span>
<span class="line"><span style="color:#24292e;">    d       day-of-month                number            10</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">    Q/q     quarter-of-year             number/text       3; 03; Q3; 3rd quarter</span></span>
<span class="line"><span style="color:#24292e;">    Y       week-based-year             year              1996; 96</span></span>
<span class="line"><span style="color:#24292e;">    w       week-of-week-based-year     number            27</span></span>
<span class="line"><span style="color:#24292e;">    W       week-of-month               number            4</span></span>
<span class="line"><span style="color:#24292e;">    E       day-of-week                 text              Tue; Tuesday; T</span></span>
<span class="line"><span style="color:#24292e;">    e/c     localized day-of-week       number/text       2; 02; Tue; Tuesday; T</span></span>
<span class="line"><span style="color:#24292e;">    F       week-of-month               number            3</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">    a       am-pm-of-day                text              PM</span></span>
<span class="line"><span style="color:#24292e;">    h       clock-hour-of-am-pm (1-12)  number            12</span></span>
<span class="line"><span style="color:#24292e;">    K       hour-of-am-pm (0-11)        number            0</span></span>
<span class="line"><span style="color:#24292e;">    k       clock-hour-of-am-pm (1-24)  number            0</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">    H       hour-of-day (0-23)          number            0</span></span>
<span class="line"><span style="color:#24292e;">    m       minute-of-hour              number            30</span></span>
<span class="line"><span style="color:#24292e;">    s       second-of-minute            number            55</span></span>
<span class="line"><span style="color:#24292e;">    S       fraction-of-second          fraction          978</span></span>
<span class="line"><span style="color:#24292e;">    A       milli-of-day                number            1234</span></span>
<span class="line"><span style="color:#24292e;">    n       nano-of-second              number            987654321</span></span>
<span class="line"><span style="color:#24292e;">    N       nano-of-day                 number            1234000000</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">    V       time-zone ID                zone-id           America/Los_Angeles; Z; -08:30</span></span>
<span class="line"><span style="color:#24292e;">    z       time-zone name              zone-name         Pacific Standard Time; PST</span></span>
<span class="line"><span style="color:#24292e;">    O       localized zone-offset       offset-O          GMT+8; GMT+08:00; UTC-08:00;</span></span>
<span class="line"><span style="color:#24292e;">    X       zone-offset &#39;Z&#39; for zero    offset-X          Z; -08; -0830; -08:30; -083015; -08:30:15;</span></span>
<span class="line"><span style="color:#24292e;">    x       zone-offset                 offset-x          +0000; -08; -0830; -08:30; -083015; -08:30:15;</span></span>
<span class="line"><span style="color:#24292e;">    Z       zone-offset                 offset-Z          +0000; -0800; -08:00;</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">    p       pad next                    pad modifier      1</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">    &#39;       escape for text             delimiter</span></span>
<span class="line"><span style="color:#24292e;">    &#39;&#39;      single quote                literal           &#39;</span></span>
<span class="line"><span style="color:#24292e;">    [       optional section start</span></span>
<span class="line"><span style="color:#24292e;">    ]       optional section end</span></span>
<span class="line"><span style="color:#24292e;">    #       reserved for future use</span></span>
<span class="line"><span style="color:#24292e;">    {       reserved for future use</span></span>
<span class="line"><span style="color:#24292e;">    }       reserved for future use</span></span></code></pre></div><h3 id="datetimeformatter相关" tabindex="-1">DateTimeFormatter相关 <a class="header-anchor" href="#datetimeformatter相关" aria-label="Permalink to &quot;DateTimeFormatter相关&quot;">​</a></h3><p>常规使用</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">DateTimeFormatter formatter = DateTimeFormatter.ofPattern(&quot;yyyy-MM-dd HH:mm&quot;);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">DateTimeFormatter formatter = DateTimeFormatter.ofPattern(&quot;yyyy-MM-dd HH:mm&quot;);</span></span></code></pre></div><p>复杂格式实现</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 时间格式非常规</span></span>
<span class="line"><span style="color:#e1e4e8;">new DateTimeFormatterBuilder()</span></span>
<span class="line"><span style="color:#e1e4e8;">            .appendValue(YEAR, 4)</span></span>
<span class="line"><span style="color:#e1e4e8;">            .appendLiteral(&#39;0&#39;)// 针对带数字的只能用这种方式</span></span>
<span class="line"><span style="color:#e1e4e8;">            .appendValue(MONTH_OF_YEAR, 2)</span></span>
<span class="line"><span style="color:#e1e4e8;">            .toFormatter()</span></span>
<span class="line"><span style="color:#e1e4e8;">            </span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 202212 -&gt; 20221201</span></span>
<span class="line"><span style="color:#e1e4e8;">new DateTimeFormatterBuilder()</span></span>
<span class="line"><span style="color:#e1e4e8;">            .appendValue(YEAR, 4)</span></span>
<span class="line"><span style="color:#e1e4e8;">            .appendValue(MONTH_OF_YEAR, 2)</span></span>
<span class="line"><span style="color:#e1e4e8;">            .parseDefaulting(ChronoField.DAY_OF_MONTH, 1)// 需要带默认值的</span></span>
<span class="line"><span style="color:#e1e4e8;">            .toFormatter();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 时间格式非常规</span></span>
<span class="line"><span style="color:#24292e;">new DateTimeFormatterBuilder()</span></span>
<span class="line"><span style="color:#24292e;">            .appendValue(YEAR, 4)</span></span>
<span class="line"><span style="color:#24292e;">            .appendLiteral(&#39;0&#39;)// 针对带数字的只能用这种方式</span></span>
<span class="line"><span style="color:#24292e;">            .appendValue(MONTH_OF_YEAR, 2)</span></span>
<span class="line"><span style="color:#24292e;">            .toFormatter()</span></span>
<span class="line"><span style="color:#24292e;">            </span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 202212 -&gt; 20221201</span></span>
<span class="line"><span style="color:#24292e;">new DateTimeFormatterBuilder()</span></span>
<span class="line"><span style="color:#24292e;">            .appendValue(YEAR, 4)</span></span>
<span class="line"><span style="color:#24292e;">            .appendValue(MONTH_OF_YEAR, 2)</span></span>
<span class="line"><span style="color:#24292e;">            .parseDefaulting(ChronoField.DAY_OF_MONTH, 1)// 需要带默认值的</span></span>
<span class="line"><span style="color:#24292e;">            .toFormatter();</span></span></code></pre></div>`,7),o=[p];function t(r,c,i,y,d,m){return e(),n("div",null,o)}const h=s(l,[["render",t]]);export{f as __pageData,h as default};
