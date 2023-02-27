import{_ as s,c as a,o as n,a as e}from"./app.55d73d08.js";const u=JSON.parse('{"title":"filebeat相关","description":"","frontmatter":{"title":"filebeat相关"},"headers":[{"level":3,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":3,"title":"配置文件","slug":"配置文件","link":"#配置文件","children":[]}],"relativePath":"ops/filebeat/README.md","lastUpdated":1677490656000}'),l={name:"ops/filebeat/README.md"},t=e(`<h3 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-hidden="true">#</a></h3><blockquote><p>官网 <a href="https://www.elastic.co/guide/en/beats/filebeat/7.12/index.html" target="_blank" rel="noreferrer">Filebeat</a></p><p>github <a href="https://github.com/elastic/beats" target="_blank" rel="noreferrer">Beats </a></p></blockquote><h3 id="配置文件" tabindex="-1">配置文件 <a class="header-anchor" href="#配置文件" aria-hidden="true">#</a></h3><h4 id="刷新配置文件" tabindex="-1">刷新配置文件 <a class="header-anchor" href="#刷新配置文件" aria-hidden="true">#</a></h4><p>这些文件包括主配置文件都需要写限<code>chmod go+w ...</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">filebeat.config.inputs:</span></span>
<span class="line"><span style="color:#A6ACCD;">  enabled: true				  </span></span>
<span class="line"><span style="color:#A6ACCD;">  path: inputs.d/*.yml		# 配置文件地址</span></span>
<span class="line"><span style="color:#A6ACCD;">  reload.enabled: true		# 开启刷新配置文件</span></span>
<span class="line"><span style="color:#A6ACCD;">  reload.period: 10s			# 刷新周期</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="聚合多行日志" tabindex="-1">聚合多行日志 <a class="header-anchor" href="#聚合多行日志" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"> multiline:</span></span>
<span class="line"><span style="color:#A6ACCD;">   pattern: &#39;^[0-9]{4}-[0-9]{2}-[0-9]{2}&#39;   	# 指定匹配的表达式（匹配以 2017-11-15）</span></span>
<span class="line"><span style="color:#A6ACCD;">   negate: true                                # 是否未匹配到</span></span>
<span class="line"><span style="color:#A6ACCD;">   match: after                                # 合并到上一行的末尾, 为了error等日志</span></span>
<span class="line"><span style="color:#A6ACCD;">   max_lines: 1000                             # 最大的行数</span></span>
<span class="line"><span style="color:#A6ACCD;">   timeout: 30s                                # 如果在规定的时候没有新的日志事件就不等待后面的日志</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="提取参数" tabindex="-1">提取参数 <a class="header-anchor" href="#提取参数" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">processors:</span></span>
<span class="line"><span style="color:#A6ACCD;">  - dissect:</span></span>
<span class="line"><span style="color:#A6ACCD;">      tokenizer: &quot;%{key1} %{key2} %{key3|convert_datatype}&quot;  	# 通过正则提取参数</span></span>
<span class="line"><span style="color:#A6ACCD;">      field: &quot;message&quot;																				# 提取的字段，默认“message”</span></span>
<span class="line"><span style="color:#A6ACCD;">      target_prefix: &quot;dissect&quot;																# 输出字段前缀，默认“dissect”</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="收集k8s日志" tabindex="-1">收集k8s日志 <a class="header-anchor" href="#收集k8s日志" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">		filebeat.inputs:</span></span>
<span class="line"><span style="color:#A6ACCD;">    - type: container</span></span>
<span class="line"><span style="color:#A6ACCD;">      exclude_lines: [&#39;^DBG&#39;]   #屏蔽空字符串</span></span>
<span class="line"><span style="color:#A6ACCD;">      paths:</span></span>
<span class="line"><span style="color:#A6ACCD;">        - /var/log/containers/*.log</span></span>
<span class="line"><span style="color:#A6ACCD;">      processors:</span></span>
<span class="line"><span style="color:#A6ACCD;">        - add_kubernetes_metadata:</span></span>
<span class="line"><span style="color:#A6ACCD;">            host: \${NODE_NAME}</span></span>
<span class="line"><span style="color:#A6ACCD;">            matchers:</span></span>
<span class="line"><span style="color:#A6ACCD;">            - logs_path:</span></span>
<span class="line"><span style="color:#A6ACCD;">                logs_path: &quot;/var/log/containers/&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        # 删除一下乱七八糟的字段</span></span>
<span class="line"><span style="color:#A6ACCD;">        - drop_fields:</span></span>
<span class="line"><span style="color:#A6ACCD;">            fields: [&quot;container&quot;, &quot;ecs&quot;,&quot;beat&quot;,&quot;host&quot;,&quot;input&quot;,&quot;source&quot;,&quot;offset&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span></span>
<span class="line"><span style="color:#A6ACCD;">        # 只收集 hillinsight 命名空间下的日志</span></span>
<span class="line"><span style="color:#A6ACCD;">        - drop_event:</span></span>
<span class="line"><span style="color:#A6ACCD;">              when:</span></span>
<span class="line"><span style="color:#A6ACCD;">                not:</span></span>
<span class="line"><span style="color:#A6ACCD;">                  contains:</span></span>
<span class="line"><span style="color:#A6ACCD;">                    kubernetes.namespace: &quot;hillinsight&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span></span>
<span class="line"><span style="color:#A6ACCD;">      multiline:</span></span>
<span class="line"><span style="color:#A6ACCD;">          pattern: &#39;^[0-9]{4}-[0-9]{2}-[0-9]{2}&#39;   # 指定匹配的表达式（匹配以 2017-11-15）</span></span>
<span class="line"><span style="color:#A6ACCD;">          negate: true                                # 是否未匹配到</span></span>
<span class="line"><span style="color:#A6ACCD;">          match: after                                # 合并到上一行的末尾, 为了error等日志</span></span>
<span class="line"><span style="color:#A6ACCD;">          max_lines: 1000                             # 最大的行数</span></span>
<span class="line"><span style="color:#A6ACCD;">          timeout: 30s                                # 如果在规定的时候没有新的日志事件就不等待后面的日志</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,12),p=[t];function o(c,i,r,C,A,d){return n(),a("div",null,p)}const y=s(l,[["render",o]]);export{u as __pageData,y as default};
