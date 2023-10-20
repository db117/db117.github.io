import{_ as s,o as a,c as e,Q as n}from"./chunks/framework.54cab62e.js";const q=JSON.parse('{"title":"filebeat相关","description":"","frontmatter":{"title":"filebeat相关"},"headers":[],"relativePath":"ops/filebeat/index.md","filePath":"ops/filebeat/index.md","lastUpdated":1697773070000}'),l={name:"ops/filebeat/index.md"},t=n(`<h3 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h3><blockquote><p>官网 <a href="https://www.elastic.co/guide/en/beats/filebeat/7.12/index.html" target="_blank" rel="noreferrer">Filebeat</a></p><p>github <a href="https://github.com/elastic/beats" target="_blank" rel="noreferrer">Beats </a></p></blockquote><h3 id="配置文件" tabindex="-1">配置文件 <a class="header-anchor" href="#配置文件" aria-label="Permalink to &quot;配置文件&quot;">​</a></h3><h4 id="刷新配置文件" tabindex="-1">刷新配置文件 <a class="header-anchor" href="#刷新配置文件" aria-label="Permalink to &quot;刷新配置文件&quot;">​</a></h4><p>这些文件包括主配置文件都需要写限<code>chmod go+w ...</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">filebeat.config.inputs:</span></span>
<span class="line"><span style="color:#e1e4e8;">  enabled: true				  </span></span>
<span class="line"><span style="color:#e1e4e8;">  path: inputs.d/*.yml		# 配置文件地址</span></span>
<span class="line"><span style="color:#e1e4e8;">  reload.enabled: true		# 开启刷新配置文件</span></span>
<span class="line"><span style="color:#e1e4e8;">  reload.period: 10s			# 刷新周期</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">filebeat.config.inputs:</span></span>
<span class="line"><span style="color:#24292e;">  enabled: true				  </span></span>
<span class="line"><span style="color:#24292e;">  path: inputs.d/*.yml		# 配置文件地址</span></span>
<span class="line"><span style="color:#24292e;">  reload.enabled: true		# 开启刷新配置文件</span></span>
<span class="line"><span style="color:#24292e;">  reload.period: 10s			# 刷新周期</span></span></code></pre></div><h4 id="聚合多行日志" tabindex="-1">聚合多行日志 <a class="header-anchor" href="#聚合多行日志" aria-label="Permalink to &quot;聚合多行日志&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"> multiline:</span></span>
<span class="line"><span style="color:#e1e4e8;">   pattern: &#39;^[0-9]{4}-[0-9]{2}-[0-9]{2}&#39;   	# 指定匹配的表达式（匹配以 2017-11-15）</span></span>
<span class="line"><span style="color:#e1e4e8;">   negate: true                                # 是否未匹配到</span></span>
<span class="line"><span style="color:#e1e4e8;">   match: after                                # 合并到上一行的末尾, 为了error等日志</span></span>
<span class="line"><span style="color:#e1e4e8;">   max_lines: 1000                             # 最大的行数</span></span>
<span class="line"><span style="color:#e1e4e8;">   timeout: 30s                                # 如果在规定的时候没有新的日志事件就不等待后面的日志</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"> multiline:</span></span>
<span class="line"><span style="color:#24292e;">   pattern: &#39;^[0-9]{4}-[0-9]{2}-[0-9]{2}&#39;   	# 指定匹配的表达式（匹配以 2017-11-15）</span></span>
<span class="line"><span style="color:#24292e;">   negate: true                                # 是否未匹配到</span></span>
<span class="line"><span style="color:#24292e;">   match: after                                # 合并到上一行的末尾, 为了error等日志</span></span>
<span class="line"><span style="color:#24292e;">   max_lines: 1000                             # 最大的行数</span></span>
<span class="line"><span style="color:#24292e;">   timeout: 30s                                # 如果在规定的时候没有新的日志事件就不等待后面的日志</span></span></code></pre></div><h4 id="提取参数" tabindex="-1">提取参数 <a class="header-anchor" href="#提取参数" aria-label="Permalink to &quot;提取参数&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">processors:</span></span>
<span class="line"><span style="color:#e1e4e8;">  - dissect:</span></span>
<span class="line"><span style="color:#e1e4e8;">      tokenizer: &quot;%{key1} %{key2} %{key3|convert_datatype}&quot;  	# 通过正则提取参数</span></span>
<span class="line"><span style="color:#e1e4e8;">      field: &quot;message&quot;																				# 提取的字段，默认“message”</span></span>
<span class="line"><span style="color:#e1e4e8;">      target_prefix: &quot;dissect&quot;																# 输出字段前缀，默认“dissect”</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">processors:</span></span>
<span class="line"><span style="color:#24292e;">  - dissect:</span></span>
<span class="line"><span style="color:#24292e;">      tokenizer: &quot;%{key1} %{key2} %{key3|convert_datatype}&quot;  	# 通过正则提取参数</span></span>
<span class="line"><span style="color:#24292e;">      field: &quot;message&quot;																				# 提取的字段，默认“message”</span></span>
<span class="line"><span style="color:#24292e;">      target_prefix: &quot;dissect&quot;																# 输出字段前缀，默认“dissect”</span></span></code></pre></div><h4 id="收集k8s日志" tabindex="-1">收集k8s日志 <a class="header-anchor" href="#收集k8s日志" aria-label="Permalink to &quot;收集k8s日志&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">		filebeat.inputs:</span></span>
<span class="line"><span style="color:#e1e4e8;">    - type: container</span></span>
<span class="line"><span style="color:#e1e4e8;">      exclude_lines: [&#39;^DBG&#39;]   #屏蔽空字符串</span></span>
<span class="line"><span style="color:#e1e4e8;">      paths:</span></span>
<span class="line"><span style="color:#e1e4e8;">        - /var/log/containers/*.log</span></span>
<span class="line"><span style="color:#e1e4e8;">      processors:</span></span>
<span class="line"><span style="color:#e1e4e8;">        - add_kubernetes_metadata:</span></span>
<span class="line"><span style="color:#e1e4e8;">            host: \${NODE_NAME}</span></span>
<span class="line"><span style="color:#e1e4e8;">            matchers:</span></span>
<span class="line"><span style="color:#e1e4e8;">            - logs_path:</span></span>
<span class="line"><span style="color:#e1e4e8;">                logs_path: &quot;/var/log/containers/&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">        # 删除一下乱七八糟的字段</span></span>
<span class="line"><span style="color:#e1e4e8;">        - drop_fields:</span></span>
<span class="line"><span style="color:#e1e4e8;">            fields: [&quot;container&quot;, &quot;ecs&quot;,&quot;beat&quot;,&quot;host&quot;,&quot;input&quot;,&quot;source&quot;,&quot;offset&quot;]</span></span>
<span class="line"><span style="color:#e1e4e8;">              </span></span>
<span class="line"><span style="color:#e1e4e8;">        # 只收集 hillinsight 命名空间下的日志</span></span>
<span class="line"><span style="color:#e1e4e8;">        - drop_event:</span></span>
<span class="line"><span style="color:#e1e4e8;">              when:</span></span>
<span class="line"><span style="color:#e1e4e8;">                not:</span></span>
<span class="line"><span style="color:#e1e4e8;">                  contains:</span></span>
<span class="line"><span style="color:#e1e4e8;">                    kubernetes.namespace: &quot;hillinsight&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">   </span></span>
<span class="line"><span style="color:#e1e4e8;">      multiline:</span></span>
<span class="line"><span style="color:#e1e4e8;">          pattern: &#39;^[0-9]{4}-[0-9]{2}-[0-9]{2}&#39;   # 指定匹配的表达式（匹配以 2017-11-15）</span></span>
<span class="line"><span style="color:#e1e4e8;">          negate: true                                # 是否未匹配到</span></span>
<span class="line"><span style="color:#e1e4e8;">          match: after                                # 合并到上一行的末尾, 为了error等日志</span></span>
<span class="line"><span style="color:#e1e4e8;">          max_lines: 1000                             # 最大的行数</span></span>
<span class="line"><span style="color:#e1e4e8;">          timeout: 30s                                # 如果在规定的时候没有新的日志事件就不等待后面的日志</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">		filebeat.inputs:</span></span>
<span class="line"><span style="color:#24292e;">    - type: container</span></span>
<span class="line"><span style="color:#24292e;">      exclude_lines: [&#39;^DBG&#39;]   #屏蔽空字符串</span></span>
<span class="line"><span style="color:#24292e;">      paths:</span></span>
<span class="line"><span style="color:#24292e;">        - /var/log/containers/*.log</span></span>
<span class="line"><span style="color:#24292e;">      processors:</span></span>
<span class="line"><span style="color:#24292e;">        - add_kubernetes_metadata:</span></span>
<span class="line"><span style="color:#24292e;">            host: \${NODE_NAME}</span></span>
<span class="line"><span style="color:#24292e;">            matchers:</span></span>
<span class="line"><span style="color:#24292e;">            - logs_path:</span></span>
<span class="line"><span style="color:#24292e;">                logs_path: &quot;/var/log/containers/&quot;</span></span>
<span class="line"><span style="color:#24292e;">        # 删除一下乱七八糟的字段</span></span>
<span class="line"><span style="color:#24292e;">        - drop_fields:</span></span>
<span class="line"><span style="color:#24292e;">            fields: [&quot;container&quot;, &quot;ecs&quot;,&quot;beat&quot;,&quot;host&quot;,&quot;input&quot;,&quot;source&quot;,&quot;offset&quot;]</span></span>
<span class="line"><span style="color:#24292e;">              </span></span>
<span class="line"><span style="color:#24292e;">        # 只收集 hillinsight 命名空间下的日志</span></span>
<span class="line"><span style="color:#24292e;">        - drop_event:</span></span>
<span class="line"><span style="color:#24292e;">              when:</span></span>
<span class="line"><span style="color:#24292e;">                not:</span></span>
<span class="line"><span style="color:#24292e;">                  contains:</span></span>
<span class="line"><span style="color:#24292e;">                    kubernetes.namespace: &quot;hillinsight&quot;</span></span>
<span class="line"><span style="color:#24292e;">   </span></span>
<span class="line"><span style="color:#24292e;">      multiline:</span></span>
<span class="line"><span style="color:#24292e;">          pattern: &#39;^[0-9]{4}-[0-9]{2}-[0-9]{2}&#39;   # 指定匹配的表达式（匹配以 2017-11-15）</span></span>
<span class="line"><span style="color:#24292e;">          negate: true                                # 是否未匹配到</span></span>
<span class="line"><span style="color:#24292e;">          match: after                                # 合并到上一行的末尾, 为了error等日志</span></span>
<span class="line"><span style="color:#24292e;">          max_lines: 1000                             # 最大的行数</span></span>
<span class="line"><span style="color:#24292e;">          timeout: 30s                                # 如果在规定的时候没有新的日志事件就不等待后面的日志</span></span></code></pre></div>`,12),p=[t];function o(c,i,r,d,u,y){return a(),e("div",null,p)}const g=s(l,[["render",o]]);export{q as __pageData,g as default};
