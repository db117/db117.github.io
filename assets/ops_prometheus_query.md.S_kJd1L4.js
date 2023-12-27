import{_ as a,o as s,c as n,R as e}from"./chunks/framework.H_1uJR_t.js";const v=JSON.parse('{"title":"查询语法","description":"","frontmatter":{"title":"查询语法"},"headers":[],"relativePath":"ops/prometheus/query.md","filePath":"ops/prometheus/query.md","lastUpdated":1699241780000}'),t={name:"ops/prometheus/query.md"},p=e(`<h2 id="备忘单" tabindex="-1">备忘单 <a class="header-anchor" href="#备忘单" aria-label="Permalink to &quot;备忘单&quot;">​</a></h2><h4 id="标签筛选" tabindex="-1">标签筛选 <a class="header-anchor" href="#标签筛选" aria-label="Permalink to &quot;标签筛选&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 正则匹配 lable</span></span>
<span class="line"><span>http_requests_total{env=~&quot;test|dev&quot;,method!=&quot;GET&quot;,application=&quot;app.*&quot;}</span></span>
<span class="line"><span># 不匹配某些uri</span></span>
<span class="line"><span>http_requests_total{uri!~&quot;/actuator/.*&quot;}</span></span>
<span class="line"><span># 选择所有正则匹配 jvm.* 的数据</span></span>
<span class="line"><span>{__name__=~&quot;jvm.*&quot;}</span></span></code></pre></div><h4 id="范围数据" tabindex="-1">范围数据 <a class="header-anchor" href="#范围数据" aria-label="Permalink to &quot;范围数据&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 选择过去 5 分钟内，度量指标名称为 http_requests_total， 标签为 job=&quot;prometheus&quot; 的时间序列数据</span></span>
<span class="line"><span>http_requests_total{job=&quot;prometheus&quot;}[5m]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 相对于当前时间的前 5 分钟时的时刻, 度量指标名称为 http_requests_total 的时间序列数据</span></span>
<span class="line"><span>http_requests_total offset 5m</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 相对于当前时间的前一周时，过去 5 分钟的度量指标名称为 http_requests_total 的速率</span></span>
<span class="line"><span>rate(http_requests_total[5m] offset 1w)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 指定时间戳的数据</span></span>
<span class="line"><span>http_server_requests_seconds_max @ 1679550911</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 指定时间戳筛选并统计数据</span></span>
<span class="line"><span>sum(http_server_requests_seconds_max{method=&quot;GET&quot;} @ 1679550911)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 指定时间戳时间段筛选并统计数据</span></span>
<span class="line"><span>rate(http_server_requests_seconds_max[5m] @ 1679550911)</span></span></code></pre></div><h4 id="特殊操作" tabindex="-1">特殊操作 <a class="header-anchor" href="#特殊操作" aria-label="Permalink to &quot;特殊操作&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 当某个值不支持时不为null</span></span>
<span class="line"><span>count(flink_jobmanager_job_uptime{job_name=&#39;name&#39;}) or vector(-1)</span></span></code></pre></div><h2 id="基础操作" tabindex="-1">基础操作 <a class="header-anchor" href="#基础操作" aria-label="Permalink to &quot;基础操作&quot;">​</a></h2><h3 id="数据类型" tabindex="-1">数据类型 <a class="header-anchor" href="#数据类型" aria-label="Permalink to &quot;数据类型&quot;">​</a></h3><ul><li><p><strong>Instant vector</strong></p><ul><li>一组时间序列，包含每个时间序列的单个样本，所有样本共享相同的时间戳</li><li>当前时间戳下所有不同<code>label</code>的数据</li></ul></li><li><p><strong>Range vector</strong> - a set of time series containing a range of data points over time for each time series</p><ul><li>一组时间序列，包含每个时间序列随时间变化的一系列数据点</li><li>相当于多组<strong>Instant vector</strong></li></ul></li><li><p><strong>Scalar</strong></p><ul><li><p>一个浮点数</p></li><li><p>标量浮点值可以以文字整数或浮点数的格式写入</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>[-+]?(</span></span>
<span class="line"><span>      [0-9]*\\.?[0-9]+([eE][-+]?[0-9]+)?</span></span>
<span class="line"><span>    | 0[xX][0-9a-fA-F]+</span></span>
<span class="line"><span>    | [nN][aA][nN]</span></span>
<span class="line"><span>    | [iI][nN][fF]</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span># Examples</span></span>
<span class="line"><span>23</span></span>
<span class="line"><span>-2.43</span></span>
<span class="line"><span>3.4e-9</span></span>
<span class="line"><span>0x8f</span></span>
<span class="line"><span>-Inf</span></span>
<span class="line"><span>NaN</span></span></code></pre></div></li></ul></li><li><p><strong>String</strong></p><ul><li>不支持</li></ul></li></ul><h4 id="即时矢量选择器" tabindex="-1">即时矢量选择器 <a class="header-anchor" href="#即时矢量选择器" aria-label="Permalink to &quot;即时矢量选择器&quot;">​</a></h4><blockquote><p>即时向量选择器允许在给定的时间戳(即时)选择一组时间序列和每个时间戳的单个样本值: 在最简单的形式中，只指定一个指标名称。这将生成一个即时向量，其中包含具有此度量名称的所有时间序列的元素。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>kube_pod_info{job=&quot;prometheus&quot;}</span></span>
<span class="line"><span># 选择标签 job=&quot;prometheus&quot; name=&quot;kube_pod_info&quot; 的数据</span></span></code></pre></div><p>标签匹配符：</p><ul><li>=: 精确地匹配标签给定的值</li><li>!=: 不等于给定的标签值</li><li>=~: 选择匹配正则表达式的标签(或子标签)</li><li>!~: 选择不匹配正则表达式的标签(或子标签)</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 选择了度量指标名称以jvm_开头的时间序列数据</span></span>
<span class="line"><span>{__name__ =~&quot;jvm_.*&quot;} </span></span>
<span class="line"><span></span></span>
<span class="line"><span># 选择给定环境的数据</span></span>
<span class="line"><span>jvm_classes_loaded{environment=~&quot;staging|testing|development&quot;}</span></span></code></pre></div><h4 id="范围向量选择" tabindex="-1">范围向量选择 <a class="header-anchor" href="#范围向量选择" aria-label="Permalink to &quot;范围向量选择&quot;">​</a></h4><p>时间范围</p><blockquote><ul><li><code>ms</code> - 毫秒</li><li><code>s</code> - 秒</li><li><code>m</code> - 分</li><li><code>h</code> - 时</li><li><code>d</code> - 天</li><li><code>w</code> - 周</li><li><code>y</code> -年(365天)</li></ul></blockquote><p>实例</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 选择过去 5 分钟内，度量指标名称为 http_requests_total， 标签为 job=&quot;prometheus&quot; 的时间序列数据</span></span>
<span class="line"><span>http_requests_total{job=&quot;prometheus&quot;}[5m]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 相对于当前时间的前 5 分钟时的时刻, 度量指标名称为 http_requests_total 的时间序列数据</span></span>
<span class="line"><span>http_requests_total offset 5m</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 相对于当前时间的前一周时，过去 5 分钟的度量指标名称为 http_requests_total 的速率</span></span>
<span class="line"><span>rate(http_requests_total[5m] offset 1w)</span></span></code></pre></div><h2 id="操作符" tabindex="-1">操作符 <a class="header-anchor" href="#操作符" aria-label="Permalink to &quot;操作符&quot;">​</a></h2><h3 id="数学运算符" tabindex="-1">数学运算符 <a class="header-anchor" href="#数学运算符" aria-label="Permalink to &quot;数学运算符&quot;">​</a></h3><p>支持的所有数学运算符如下所示：</p><ul><li><code>+</code>(加法)</li><li><code>-</code> (减法)</li><li><code>*</code>(乘法)</li><li><code>/</code> (除法)</li><li><code>%</code>(求余)</li><li><code>^</code> (幂运算)</li></ul><h3 id="布尔运算符" tabindex="-1">布尔运算符 <a class="header-anchor" href="#布尔运算符" aria-label="Permalink to &quot;布尔运算符&quot;">​</a></h3><p>目前，Prometheus支持以下布尔运算符如下：</p><ul><li><code>==</code> (相等)</li><li><code>!=</code> (不相等)</li><li><code>&gt;</code> (大于)</li><li><code>&lt;</code> (小于)</li><li><code>&gt;=</code> (大于等于)</li><li><code>&lt;=</code> (小于)</li></ul><h3 id="聚合函数" tabindex="-1">聚合函数 <a class="header-anchor" href="#聚合函数" aria-label="Permalink to &quot;聚合函数&quot;">​</a></h3><ul><li>sum：求和。</li><li>min：最小值。</li><li>max：最大值</li><li>avg：平均值</li><li>stddev：标准差</li><li>stdvar：方差</li><li>count：元素个数</li><li>count_values：等于某值的元素个数</li><li>bottomk：最小的 k 个元素</li><li>topk：最大的 k 个元素</li><li>quantile：分位数</li></ul><blockquote><p>可以在表达式前后添加 <code>without</code> <code>by</code></p><p>without: 删除掉某个标签后进行聚合计算</p><p>by 根据某些个标签进行聚合计算</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>http_requests_total{instance,application, group}</span></span>
<span class="line"><span># 根据 application, group 分组统计总数</span></span>
<span class="line"><span>sum without (instance) (http_requests_total)</span></span>
<span class="line"><span># 与上面相同</span></span>
<span class="line"><span>sum by (application, group) (http_requests_total)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 根据所有标签进行分组</span></span>
<span class="line"><span>sum(http_requests_total)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 得到所有实例中最大的 5 个 HTTP 请求数</span></span>
<span class="line"><span>topk(5, http_requests_total)</span></span></code></pre></div><h2 id="内置函数" tabindex="-1">内置函数 <a class="header-anchor" href="#内置函数" aria-label="Permalink to &quot;内置函数&quot;">​</a></h2><p>瞬时向量</p><ul><li><p>instant-vector abs(instant-vector)：绝对值</p></li><li><p>instant-vector sqrt(instant-vector))：平方根</p></li><li><p>instant-vector exp(instant-vector )：指数计算</p></li><li><p>instant-vector ln(instant-vector )：自然对数</p></li><li><p>instant-vector ceil(instant-vector )：向上取整</p></li><li><p>instant-vector floor(instant-vector )：向下取整</p></li><li><p>instant-vector round(instant-vector )：四舍五入取整</p></li><li><p>absent(v instant-vector):</p><blockquote><p>有值返回 空向量</p><p>没有值，则返回标签名称的时间序列 并返回值为1</p></blockquote></li><li><p>clamp(v instant-vector, min scalar, max scalar)</p><blockquote><p>使瞬时向量在设定的区间内,即小于最小值取最小值 大于最大值取最大值</p></blockquote></li><li><p>clamp_max(): 同clamp</p></li><li><p>clamp_min(): 同clamp</p></li></ul><p>范围向量</p><ul><li><p>instant-vector delta(range-vector)：计算区间向量里最大最小的差值</p></li><li><p>instant-vector increase(range-vector)：计算区间向量里最后一个值和第一个值的差值</p></li><li><p>instant-vector rate(range-vector)：计算区间向量里的平均增长率</p></li><li><p>instant-vector irate(range-vector)：计算区间向量里的瞬时增长率</p></li><li><p>instant-vector avg_over_time(range-vector)：指定间隔内所有点的平均值。</p></li><li><p>instant-vector min_over_time(range-vector)：指定间隔中所有点的最小值。</p></li><li><p>instant-vector max_over_time(range-vector)：指定间隔内所有点的最大值。</p></li><li><p>instant-vector sum_over_time(range-vector)：指定时间间隔内所有值的总和。</p></li><li><p>absent_over_time(v range-vector)</p><blockquote><p>与absent类型,不过入参是范围向量</p></blockquote></li><li><p>instant-vector changes(v range-vector): 返回这个区间向量内每个样本数据值变化的次数</p></li></ul>`,37),l=[p];function i(o,c,r,u,d,h){return s(),n("div",null,l)}const m=a(t,[["render",i]]);export{v as __pageData,m as default};
