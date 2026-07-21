import{gt as e,nt as t,s as n,tt as r}from"./chunks/framework.BqU7tCwc.js";var i=JSON.parse(`{"title":"Filebeat","description":"","frontmatter":{"title":"Filebeat"},"headers":[],"relativePath":"infrastructure/ops/logging/filebeat/index.md","filePath":"infrastructure/ops/logging/filebeat/index.md","lastUpdated":1784604435000}`),a={name:`infrastructure/ops/logging/filebeat/index.md`};function o(n,i,a,o,s,c){return e(),r(`div`,null,[...i[0]||=[t(`<h1 id="filebeat" tabindex="-1">Filebeat <a class="header-anchor" href="#filebeat" aria-label="Permalink to “Filebeat”">​</a></h1><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to “介绍”">​</a></h2><blockquote><p>官网 <a href="https://www.elastic.co/guide/en/beats/filebeat/7.12/index.html" target="_blank" rel="noreferrer">Filebeat</a></p><p>github <a href="https://github.com/elastic/beats" target="_blank" rel="noreferrer">Beats </a></p></blockquote><h2 id="配置文件" tabindex="-1">配置文件 <a class="header-anchor" href="#配置文件" aria-label="Permalink to “配置文件”">​</a></h2><h3 id="刷新配置文件" tabindex="-1">刷新配置文件 <a class="header-anchor" href="#刷新配置文件" aria-label="Permalink to “刷新配置文件”">​</a></h3><p>这些文件包括主配置文件都需要写限<code>chmod go+w ...</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>filebeat.config.inputs:</span></span>
<span class="line"><span>  enabled: true				  </span></span>
<span class="line"><span>  path: inputs.d/*.yml		# 配置文件地址</span></span>
<span class="line"><span>  reload.enabled: true		# 开启刷新配置文件</span></span>
<span class="line"><span>  reload.period: 10s			# 刷新周期</span></span></code></pre></div><h3 id="聚合多行日志" tabindex="-1">聚合多行日志 <a class="header-anchor" href="#聚合多行日志" aria-label="Permalink to “聚合多行日志”">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span> multiline:</span></span>
<span class="line"><span>   pattern: &#39;^[0-9]{4}-[0-9]{2}-[0-9]{2}&#39;   	# 指定匹配的表达式（匹配以 2017-11-15）</span></span>
<span class="line"><span>   negate: true                                # 是否未匹配到</span></span>
<span class="line"><span>   match: after                                # 合并到上一行的末尾, 为了error等日志</span></span>
<span class="line"><span>   max_lines: 1000                             # 最大的行数</span></span>
<span class="line"><span>   timeout: 30s                                # 如果在规定的时候没有新的日志事件就不等待后面的日志</span></span></code></pre></div><h3 id="提取参数" tabindex="-1">提取参数 <a class="header-anchor" href="#提取参数" aria-label="Permalink to “提取参数”">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>processors:</span></span>
<span class="line"><span>  - dissect:</span></span>
<span class="line"><span>      tokenizer: &quot;%{key1} %{key2} %{key3|convert_datatype}&quot;  	# 通过正则提取参数</span></span>
<span class="line"><span>      field: &quot;message&quot;																				# 提取的字段，默认“message”</span></span>
<span class="line"><span>      target_prefix: &quot;dissect&quot;																# 输出字段前缀，默认“dissect”</span></span></code></pre></div><h3 id="收集-kubernetes-日志" tabindex="-1">收集 Kubernetes 日志 <a class="header-anchor" href="#收集-kubernetes-日志" aria-label="Permalink to “收集 Kubernetes 日志”">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>		filebeat.inputs:</span></span>
<span class="line"><span>    - type: container</span></span>
<span class="line"><span>      exclude_lines: [&#39;^DBG&#39;]   #屏蔽空字符串</span></span>
<span class="line"><span>      paths:</span></span>
<span class="line"><span>        - /var/log/containers/*.log</span></span>
<span class="line"><span>      processors:</span></span>
<span class="line"><span>        - add_kubernetes_metadata:</span></span>
<span class="line"><span>            host: \${NODE_NAME}</span></span>
<span class="line"><span>            matchers:</span></span>
<span class="line"><span>            - logs_path:</span></span>
<span class="line"><span>                logs_path: &quot;/var/log/containers/&quot;</span></span>
<span class="line"><span>        # 删除一下乱七八糟的字段</span></span>
<span class="line"><span>        - drop_fields:</span></span>
<span class="line"><span>            fields: [&quot;container&quot;, &quot;ecs&quot;,&quot;beat&quot;,&quot;host&quot;,&quot;input&quot;,&quot;source&quot;,&quot;offset&quot;]</span></span>
<span class="line"><span>              </span></span>
<span class="line"><span>        # 只收集 hillinsight 命名空间下的日志</span></span>
<span class="line"><span>        - drop_event:</span></span>
<span class="line"><span>              when:</span></span>
<span class="line"><span>                not:</span></span>
<span class="line"><span>                  contains:</span></span>
<span class="line"><span>                    kubernetes.namespace: &quot;hillinsight&quot;</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>      multiline:</span></span>
<span class="line"><span>          pattern: &#39;^[0-9]{4}-[0-9]{2}-[0-9]{2}&#39;   # 指定匹配的表达式（匹配以 2017-11-15）</span></span>
<span class="line"><span>          negate: true                                # 是否未匹配到</span></span>
<span class="line"><span>          match: after                                # 合并到上一行的末尾, 为了error等日志</span></span>
<span class="line"><span>          max_lines: 1000                             # 最大的行数</span></span>
<span class="line"><span>          timeout: 30s                                # 如果在规定的时候没有新的日志事件就不等待后面的日志</span></span></code></pre></div>`,13)]])}var s=n(a,[[`render`,o]]);export{i as __pageData,s as default};