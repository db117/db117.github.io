import{_ as s,c as n,ah as t,o as e}from"./chunks/framework.QVDyGnW_.js";const h=JSON.parse('{"title":"prometheus","description":"","frontmatter":{"title":"prometheus"},"headers":[],"relativePath":"ops/prometheus/index.md","filePath":"ops/prometheus/index.md"}'),l={name:"ops/prometheus/index.md"};function p(i,a,r,c,o,d){return e(),n("div",null,a[0]||(a[0]=[t(`<h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><blockquote><p><a href="https://prometheus.io/" target="_blank" rel="noreferrer">官网</a></p><p><a href="https://github.com/prometheus" target="_blank" rel="noreferrer">Prometheus (github.com)</a></p><p>基于时序数据库的开源监控告警系统</p></blockquote><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><blockquote><p>官方配置文档 <a href="https://prometheus.io/docs/prometheus/latest/configuration/configuration/" target="_blank" rel="noreferrer">Configuration | Prometheus</a></p><p>下面记录一下经常修改的配置文件</p></blockquote><h3 id="启动配置" tabindex="-1">启动配置 <a class="header-anchor" href="#启动配置" aria-label="Permalink to &quot;启动配置&quot;">​</a></h3><ul><li><code>--web.external-url=prometheus</code><ul><li>指定访问路径前缀，在需要挂在某个域名的路径下并代理的情况下使用</li></ul></li></ul><h3 id="通用" tabindex="-1">通用 <a class="header-anchor" href="#通用" aria-label="Permalink to &quot;通用&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>global:</span></span>
<span class="line"><span>  # 抓取周期</span></span>
<span class="line"><span>  [ scrape_interval: &lt;duration&gt; | default = 1m ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  # 超时时间</span></span>
<span class="line"><span>  [ scrape_timeout: &lt;duration&gt; | default = 10s ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  # 评估报警规则周期</span></span>
<span class="line"><span>  [ evaluation_interval: &lt;duration&gt; | default = 1m ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  # 记录 PromQL 查询的文件</span></span>
<span class="line"><span>  # 重新加载配置将重新打开文件</span></span>
<span class="line"><span>  [ query_log_file: &lt;string&gt; ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 报警配置文件</span></span>
<span class="line"><span>rule_files:</span></span>
<span class="line"><span>  [ - &lt;filepath_glob&gt; ... ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 抓取配置</span></span>
<span class="line"><span>scrape_configs:</span></span>
<span class="line"><span>  [ - &lt;scrape_config&gt; ... ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 报警相关配置</span></span>
<span class="line"><span>alerting:</span></span>
<span class="line"><span>  alert_relabel_configs:</span></span>
<span class="line"><span>    [ - &lt;relabel_config&gt; ... ]</span></span>
<span class="line"><span>  alertmanagers:</span></span>
<span class="line"><span>    [ - &lt;alertmanager_config&gt; ... ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 抓取配置文件,主要用于抓取目标鉴权</span></span>
<span class="line"><span>remote_read:</span></span>
<span class="line"><span>  [ - &lt;remote_read&gt; ... ]</span></span></code></pre></div><h4 id="抓取配置-scrape-config" tabindex="-1">抓取配置<code>&lt;scrape_config&gt;</code> <a class="header-anchor" href="#抓取配置-scrape-config" aria-label="Permalink to &quot;抓取配置\`&lt;scrape_config&gt;\`&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 作业名称.</span></span>
<span class="line"><span>job_name: &lt;job_name&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 抓取周期,默认使用通用配置</span></span>
<span class="line"><span>[ scrape_interval: &lt;duration&gt; | default = &lt;global_config.scrape_interval&gt; ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 超时时间,默认使用通用配置</span></span>
<span class="line"><span>[ scrape_timeout: &lt;duration&gt; | default = &lt;global_config.scrape_timeout&gt; ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 从目标获取度量的 HTTP 资源路径</span></span>
<span class="line"><span>[ metrics_path: &lt;path&gt; | default = /metrics ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 配置用于请求的协议方案[https|http]</span></span>
<span class="line"><span>[ scheme: &lt;scheme&gt; | default = http ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 请求参数</span></span>
<span class="line"><span>params:</span></span>
<span class="line"><span>  [ &lt;string&gt;: [&lt;string&gt;, ...] ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 鉴权信息</span></span>
<span class="line"><span>basic_auth:</span></span>
<span class="line"><span>  [ username: &lt;string&gt; ]</span></span>
<span class="line"><span>  [ password: &lt;secret&gt; ]</span></span>
<span class="line"><span>  [ password_file: &lt;string&gt; ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 鉴权信息</span></span>
<span class="line"><span>authorization:</span></span>
<span class="line"><span>  # 设置鉴权方式</span></span>
<span class="line"><span>  [ type: &lt;string&gt; | default: Bearer ]</span></span>
<span class="line"><span>  [ credentials: &lt;secret&gt; ]</span></span>
<span class="line"><span>  [ credentials_file: &lt;filename&gt; ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Optional OAuth 2.0 configuration.</span></span>
<span class="line"><span># Cannot be used at the same time as basic_auth or authorization.</span></span>
<span class="line"><span>oauth2:</span></span>
<span class="line"><span>  [ &lt;oauth2&gt; ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 是否从定向</span></span>
<span class="line"><span>[ follow_redirects: &lt;bool&gt; | default = true ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 代理地址</span></span>
<span class="line"><span>[ proxy_url: &lt;string&gt; ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 列出此作业的标记为静态配置的目标</span></span>
<span class="line"><span>static_configs:</span></span>
<span class="line"><span>  # 获取目标</span></span>
<span class="line"><span>  targets:</span></span>
<span class="line"><span>    [ - &#39;&lt;host&gt;&#39; ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  # label过滤</span></span>
<span class="line"><span>  labels:</span></span>
<span class="line"><span>    [ &lt;labelname&gt;: &lt;labelvalue&gt; ... ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 修改标签</span></span>
<span class="line"><span>relabel_configs:</span></span>
<span class="line"><span>  [ - &lt;relabel_config&gt; ... ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># List of metric relabel configurations.</span></span>
<span class="line"><span>metric_relabel_configs:</span></span>
<span class="line"><span>  [ - &lt;relabel_config&gt; ... ]</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span># 动态发现 eureka 中的服务</span></span>
<span class="line"><span>eureka_sd_configs:</span></span>
<span class="line"><span>  [ - &lt;eureka_sd_config&gt; ... ]</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span># 通过 http 接口动态发现的服务</span></span>
<span class="line"><span>http_sd_configs:</span></span>
<span class="line"><span>  [ - &lt;http_sd_config&gt; ... ]</span></span></code></pre></div><h3 id="rules" tabindex="-1">rules <a class="header-anchor" href="#rules" aria-label="Permalink to &quot;rules&quot;">​</a></h3><blockquote><p>记录规则,可以预先计算经常需要或计算量大的表达式，并将其结果保存为一组新的时间序列</p><p>警报规则允许您基于 Prometheus 表达式语言表达式定义警报条件，并向外部服务发送有关发射警报的通知。每当警报表达式在给定时间点产生一个或多个向量元素时，警报对这些元素的标签集计为活动的。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>groups: #  分组</span></span>
<span class="line"><span>  - name: example # 组名</span></span>
<span class="line"><span>    rules:</span></span>
<span class="line"><span>    - record: job:http_inprogress_requests:sum  # 记录规则名称</span></span>
<span class="line"><span>      expr: sum by (job) (http_inprogress_requests)  # 规则</span></span>
<span class="line"><span>      labels:  # 添加或覆盖标签</span></span>
<span class="line"><span>  			[ &lt;labelname&gt;: &lt;labelvalue&gt; ]</span></span>
<span class="line"><span>  			</span></span>
<span class="line"><span>    - alert: HighRequestLatency # 报警规则名称</span></span>
<span class="line"><span>      expr: job:request_latency_seconds:mean5m{job=&quot;myjob&quot;} &gt; 0.5 # 规则</span></span>
<span class="line"><span>      for: 10m  # 持续时间</span></span>
<span class="line"><span>      labels:   # 添加或覆盖标签</span></span>
<span class="line"><span>        severity: page</span></span>
<span class="line"><span>      annotations:	# 描述信息,可以使用模板</span></span>
<span class="line"><span>        summary: High request latency</span></span>
<span class="line"><span>        # $value为当前记录数值</span></span>
<span class="line"><span>        # $labels.instance 为名称为instance的labels</span></span>
<span class="line"><span>        description: &quot;{{ $labels.instance }}请求延迟的中位数大于1秒(当前值 {{ $value }}s)&quot;</span></span></code></pre></div><h3 id="模板" tabindex="-1">模板 <a class="header-anchor" href="#模板" aria-label="Permalink to &quot;模板&quot;">​</a></h3><blockquote><p>Prometheus 模板语言是基于 Go 模板系统的</p></blockquote><h4 id="数据格式" tabindex="-1">数据格式 <a class="header-anchor" href="#数据格式" aria-label="Permalink to &quot;数据格式&quot;">​</a></h4><blockquote><p>样本的度量名称保存在Labels中的<code>__name__</code>中</p><p>名称都以<code>_</code>进行分割</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>type sample struct {</span></span>
<span class="line"><span>        Labels map[string]string</span></span>
<span class="line"><span>        Value  float64</span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h4><p>查询</p><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">参数</th><th style="text-align:left;">返回值</th><th style="text-align:left;">注释</th></tr></thead><tbody><tr><td style="text-align:left;">query</td><td style="text-align:left;">query string</td><td style="text-align:left;">[]sample</td><td style="text-align:left;">查询数据库，不支持返回范围向量。</td></tr><tr><td style="text-align:left;">first</td><td style="text-align:left;">[]sample</td><td style="text-align:left;">sample</td><td style="text-align:left;">相当于数组第一个对象</td></tr><tr><td style="text-align:left;">label</td><td style="text-align:left;">label, sample</td><td style="text-align:left;">string</td><td style="text-align:left;">相当于 <code>index sample.Labels label</code></td></tr><tr><td style="text-align:left;">value</td><td style="text-align:left;">sample</td><td style="text-align:left;">float64</td><td style="text-align:left;">相当于<code>sample.Value</code></td></tr><tr><td style="text-align:left;">sortByLabel</td><td style="text-align:left;">label, []samples</td><td style="text-align:left;">[]sample</td><td style="text-align:left;">通过给定标签对样品进行排序。</td></tr></tbody></table><p>格式化数字</p><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">参数</th><th style="text-align:left;">返回值</th><th style="text-align:left;">注释</th></tr></thead><tbody><tr><td style="text-align:left;">humanize</td><td style="text-align:left;">number or string</td><td style="text-align:left;">string</td><td style="text-align:left;">使用公制前缀将数字转换为更易读的格式。</td></tr><tr><td style="text-align:left;">humanize1024</td><td style="text-align:left;">number or string</td><td style="text-align:left;">string</td><td style="text-align:left;">使用1024而不是1000的基础</td></tr><tr><td style="text-align:left;">humanizeDuration</td><td style="text-align:left;">number or string</td><td style="text-align:left;">string</td><td style="text-align:left;">将持续时间(秒)转换为更易读的格式。</td></tr><tr><td style="text-align:left;">humanizePercentage</td><td style="text-align:left;">number or string</td><td style="text-align:left;">string</td><td style="text-align:left;">转换为百分比</td></tr><tr><td style="text-align:left;">humanizeTimestamp</td><td style="text-align:left;">number or string</td><td style="text-align:left;">string</td><td style="text-align:left;">将 Unix 时间戳(秒)转换为更易读的格式。</td></tr></tbody></table><h3 id="字符串" tabindex="-1">字符串 <a class="header-anchor" href="#字符串" aria-label="Permalink to &quot;字符串&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">参数</th><th style="text-align:left;">返回值</th><th style="text-align:left;">注释</th></tr></thead><tbody><tr><td style="text-align:left;">title</td><td style="text-align:left;">string</td><td style="text-align:left;">string</td><td style="text-align:left;"><a href="https://golang.org/pkg/strings/#Title" target="_blank" rel="noreferrer">strings.Title</a>, 每个单词的首字母大写。</td></tr><tr><td style="text-align:left;">toUpper</td><td style="text-align:left;">string</td><td style="text-align:left;">string</td><td style="text-align:left;"><a href="https://golang.org/pkg/strings/#ToUpper" target="_blank" rel="noreferrer">strings.ToUpper</a>, 将所有字符转换为大写。</td></tr><tr><td style="text-align:left;">toLower</td><td style="text-align:left;">string</td><td style="text-align:left;">string</td><td style="text-align:left;"><a href="https://golang.org/pkg/strings/#ToLower" target="_blank" rel="noreferrer">strings.ToLower</a>, 将所有字符转换为小写。</td></tr><tr><td style="text-align:left;">match</td><td style="text-align:left;">pattern, text</td><td style="text-align:left;">boolean</td><td style="text-align:left;"><a href="https://golang.org/pkg/regexp/#MatchString" target="_blank" rel="noreferrer">regexp.MatchString</a> regexp 匹配</td></tr><tr><td style="text-align:left;">reReplaceAll</td><td style="text-align:left;">pattern, replacement, text</td><td style="text-align:left;">string</td><td style="text-align:left;"><a href="https://golang.org/pkg/regexp/#Regexp.ReplaceAllString" target="_blank" rel="noreferrer">Regexp.ReplaceAllString</a> 匹配替换</td></tr></tbody></table><h4 id="迭代" tabindex="-1">迭代 <a class="header-anchor" href="#迭代" aria-label="Permalink to &quot;迭代&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 查询up 并循环输出数值</span></span>
<span class="line"><span>{{ range query &quot;up&quot; }}</span></span>
<span class="line"><span>  {{ .Labels.instance }} {{ .Value }}</span></span>
<span class="line"><span>{{ end }}</span></span></code></pre></div><h4 id="管道" tabindex="-1">管道 <a class="header-anchor" href="#管道" aria-label="Permalink to &quot;管道&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 查询第一个值并格式化</span></span>
<span class="line"><span>{{ with query &quot;some_metric{instance=&#39;someinstance&#39;}&quot; }}</span></span>
<span class="line"><span>  {{ . | first | value | humanize }}</span></span>
<span class="line"><span>{{ end }}</span></span></code></pre></div>`,29)]))}const u=s(l,[["render",p]]);export{h as __pageData,u as default};
