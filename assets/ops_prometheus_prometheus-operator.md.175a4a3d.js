import{_ as s,o as e,c as n,Q as a}from"./chunks/framework.54cab62e.js";const h=JSON.parse('{"title":"prometheus-operator","description":"","frontmatter":{"title":"prometheus-operator"},"headers":[],"relativePath":"ops/prometheus/prometheus-operator.md","filePath":"ops/prometheus/prometheus-operator.md","lastUpdated":1697773070000}'),t={name:"ops/prometheus/prometheus-operator.md"},l=a(`<h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><blockquote><p><a href="https://github.com/prometheus-operator/kube-prometheus" target="_blank" rel="noreferrer">prometheus-operator/kube-prometheus: Use Prometheus to monitor Kubernetes and applications running on Kubernetes (github.com)</a></p><p>通过自定义资源来配置管理各种组件</p><p>通过各种 <code>config-reloader</code> 来修改各种配置</p></blockquote><p><strong>自定义资源</strong></p><ul><li><strong><code>Prometheus</code></strong>, 定义了一个Prometheus deployment。</li><li><strong><code>Alertmanager</code></strong>,定义了一个 Alertmanager deployment.</li><li><strong><code>ThanosRuler</code></strong>, 定义了一个 Thanos Ruler deployment.</li><li><strong><code>ServiceMonitor</code></strong>,定义一组<code>service</code>端点，prometheus 主动会拉取数据</li><li><strong><code>PodMonitor</code></strong>, 定义一组<code>pod</code>端点，prometheus 主动会拉取数据</li><li><strong><code>Probe</code></strong>, 支持对<code>ingress</code>静态url进行数据拉取</li><li><strong><code>PrometheusRule</code></strong>, 定义<code>rule</code>规则</li><li><strong><code>AlertmanagerConfig</code></strong>, 定义报警规则</li></ul><h2 id="简单使用" tabindex="-1">简单使用 <a class="header-anchor" href="#简单使用" aria-label="Permalink to &quot;简单使用&quot;">​</a></h2><p>可直接 clone 项目使用</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 先创建命名空间，已经自定义资源。然后在创建一系列资源</span></span>
<span class="line"><span style="color:#e1e4e8;">kubectl create -f manifests/setup</span></span>
<span class="line"><span style="color:#e1e4e8;">until kubectl get servicemonitors --all-namespaces ; do date; sleep 1; echo &quot;&quot;; done</span></span>
<span class="line"><span style="color:#e1e4e8;">kubectl create -f manifests/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 先创建命名空间，已经自定义资源。然后在创建一系列资源</span></span>
<span class="line"><span style="color:#24292e;">kubectl create -f manifests/setup</span></span>
<span class="line"><span style="color:#24292e;">until kubectl get servicemonitors --all-namespaces ; do date; sleep 1; echo &quot;&quot;; done</span></span>
<span class="line"><span style="color:#24292e;">kubectl create -f manifests/</span></span></code></pre></div><p>全部删除</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">kubectl delete --ignore-not-found=true -f manifests/ -f manifests/setup</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">kubectl delete --ignore-not-found=true -f manifests/ -f manifests/setup</span></span></code></pre></div><p>需要自己来添加 ingress 来访问service</p><ul><li>告警服务 <code>alertmanager-main:9093</code></li><li>prometheus <code>prometheus-k8s:9090</code></li><li>Grafana <code>grafana:3000</code></li></ul><p>默认是没有配置报警接收器，需要修改配置。详情见后面。</p><h2 id="普通使用" tabindex="-1">普通使用 <a class="header-anchor" href="#普通使用" aria-label="Permalink to &quot;普通使用&quot;">​</a></h2><blockquote><p>通过自定义的<code>k8s</code>组件对各种服务进行动态配置</p><p>可以通过简单的k8s自定义资源对整个监控系统进行配置</p></blockquote><ul><li><p>ServiceMonitor</p><blockquote><p>选择一部分 <code>service</code>来生成 <code>target</code>配置。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">apiVersion: monitoring.coreos.com/v1</span></span>
<span class="line"><span style="color:#e1e4e8;">kind: ServiceMonitor</span></span>
<span class="line"><span style="color:#e1e4e8;">metadata:</span></span>
<span class="line"><span style="color:#e1e4e8;">  labels:</span></span>
<span class="line"><span style="color:#e1e4e8;">    app.kubernetes.io/name: backend</span></span>
<span class="line"><span style="color:#e1e4e8;">  name: backend</span></span>
<span class="line"><span style="color:#e1e4e8;">  namespace: hillinsight</span></span>
<span class="line"><span style="color:#e1e4e8;">spec:</span></span>
<span class="line"><span style="color:#e1e4e8;">  endpoints:											# 定义一组端点</span></span>
<span class="line"><span style="color:#e1e4e8;">    - interval: 10s 							# 拉取周期</span></span>
<span class="line"><span style="color:#e1e4e8;">      path: /actuator/prometheus  # 路径</span></span>
<span class="line"><span style="color:#e1e4e8;">      port: backend-port   				# 端口</span></span>
<span class="line"><span style="color:#e1e4e8;">      scheme: http  							# 请求方式</span></span>
<span class="line"><span style="color:#e1e4e8;">      basicAuth: ***  						# 认证</span></span>
<span class="line"><span style="color:#e1e4e8;">      bearerTokenFile: 						# 权限认证</span></span>
<span class="line"><span style="color:#e1e4e8;">      metricRelabelings:  				# 指标处理</span></span>
<span class="line"><span style="color:#e1e4e8;">  jobLabel: backend								# 对拉取的数据添加 label</span></span>
<span class="line"><span style="color:#e1e4e8;">  namespaceSelector: 							# 命名空间选择</span></span>
<span class="line"><span style="color:#e1e4e8;">    matchNames:</span></span>
<span class="line"><span style="color:#e1e4e8;">      - test</span></span>
<span class="line"><span style="color:#e1e4e8;">  selector:  											# 选择服务</span></span>
<span class="line"><span style="color:#e1e4e8;">    matchLabels:</span></span>
<span class="line"><span style="color:#e1e4e8;">      prometheus: backend</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">apiVersion: monitoring.coreos.com/v1</span></span>
<span class="line"><span style="color:#24292e;">kind: ServiceMonitor</span></span>
<span class="line"><span style="color:#24292e;">metadata:</span></span>
<span class="line"><span style="color:#24292e;">  labels:</span></span>
<span class="line"><span style="color:#24292e;">    app.kubernetes.io/name: backend</span></span>
<span class="line"><span style="color:#24292e;">  name: backend</span></span>
<span class="line"><span style="color:#24292e;">  namespace: hillinsight</span></span>
<span class="line"><span style="color:#24292e;">spec:</span></span>
<span class="line"><span style="color:#24292e;">  endpoints:											# 定义一组端点</span></span>
<span class="line"><span style="color:#24292e;">    - interval: 10s 							# 拉取周期</span></span>
<span class="line"><span style="color:#24292e;">      path: /actuator/prometheus  # 路径</span></span>
<span class="line"><span style="color:#24292e;">      port: backend-port   				# 端口</span></span>
<span class="line"><span style="color:#24292e;">      scheme: http  							# 请求方式</span></span>
<span class="line"><span style="color:#24292e;">      basicAuth: ***  						# 认证</span></span>
<span class="line"><span style="color:#24292e;">      bearerTokenFile: 						# 权限认证</span></span>
<span class="line"><span style="color:#24292e;">      metricRelabelings:  				# 指标处理</span></span>
<span class="line"><span style="color:#24292e;">  jobLabel: backend								# 对拉取的数据添加 label</span></span>
<span class="line"><span style="color:#24292e;">  namespaceSelector: 							# 命名空间选择</span></span>
<span class="line"><span style="color:#24292e;">    matchNames:</span></span>
<span class="line"><span style="color:#24292e;">      - test</span></span>
<span class="line"><span style="color:#24292e;">  selector:  											# 选择服务</span></span>
<span class="line"><span style="color:#24292e;">    matchLabels:</span></span>
<span class="line"><span style="color:#24292e;">      prometheus: backend</span></span></code></pre></div></li><li><p>PodMonitor</p><blockquote><p>选择一部分 <code>pod</code>来生成 <code>target</code>配置。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">apiVersion: monitoring.coreos.com/v1</span></span>
<span class="line"><span style="color:#e1e4e8;">kind: PodMonitor</span></span>
<span class="line"><span style="color:#e1e4e8;">metadata:</span></span>
<span class="line"><span style="color:#e1e4e8;">  labels:</span></span>
<span class="line"><span style="color:#e1e4e8;">    app.kubernetes.io/name: backend</span></span>
<span class="line"><span style="color:#e1e4e8;">  name: backend</span></span>
<span class="line"><span style="color:#e1e4e8;">  namespace: hillinsight</span></span>
<span class="line"><span style="color:#e1e4e8;">spec:</span></span>
<span class="line"><span style="color:#e1e4e8;">  podMetricsEndpoints:						# 定义一组端点</span></span>
<span class="line"><span style="color:#e1e4e8;">    - interval: 10s 							# 拉取周期</span></span>
<span class="line"><span style="color:#e1e4e8;">      path: /actuator/prometheus  # 路径</span></span>
<span class="line"><span style="color:#e1e4e8;">      port: backend-port   				# 端口</span></span>
<span class="line"><span style="color:#e1e4e8;">      scheme: http  							# 请求方式</span></span>
<span class="line"><span style="color:#e1e4e8;">      basicAuth: ***  						# 认证</span></span>
<span class="line"><span style="color:#e1e4e8;">      bearerTokenFile: 						# 权限认证</span></span>
<span class="line"><span style="color:#e1e4e8;">      metricRelabelings:  				# 指标处理</span></span>
<span class="line"><span style="color:#e1e4e8;">  jobLabel: backend								# 对拉取的数据添加 label</span></span>
<span class="line"><span style="color:#e1e4e8;">  namespaceSelector: 							# 命名空间选择</span></span>
<span class="line"><span style="color:#e1e4e8;">    matchNames:</span></span>
<span class="line"><span style="color:#e1e4e8;">      - test</span></span>
<span class="line"><span style="color:#e1e4e8;">  selector:  											# 选择 pod</span></span>
<span class="line"><span style="color:#e1e4e8;">    matchLabels:</span></span>
<span class="line"><span style="color:#e1e4e8;">      prometheus: backend</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">apiVersion: monitoring.coreos.com/v1</span></span>
<span class="line"><span style="color:#24292e;">kind: PodMonitor</span></span>
<span class="line"><span style="color:#24292e;">metadata:</span></span>
<span class="line"><span style="color:#24292e;">  labels:</span></span>
<span class="line"><span style="color:#24292e;">    app.kubernetes.io/name: backend</span></span>
<span class="line"><span style="color:#24292e;">  name: backend</span></span>
<span class="line"><span style="color:#24292e;">  namespace: hillinsight</span></span>
<span class="line"><span style="color:#24292e;">spec:</span></span>
<span class="line"><span style="color:#24292e;">  podMetricsEndpoints:						# 定义一组端点</span></span>
<span class="line"><span style="color:#24292e;">    - interval: 10s 							# 拉取周期</span></span>
<span class="line"><span style="color:#24292e;">      path: /actuator/prometheus  # 路径</span></span>
<span class="line"><span style="color:#24292e;">      port: backend-port   				# 端口</span></span>
<span class="line"><span style="color:#24292e;">      scheme: http  							# 请求方式</span></span>
<span class="line"><span style="color:#24292e;">      basicAuth: ***  						# 认证</span></span>
<span class="line"><span style="color:#24292e;">      bearerTokenFile: 						# 权限认证</span></span>
<span class="line"><span style="color:#24292e;">      metricRelabelings:  				# 指标处理</span></span>
<span class="line"><span style="color:#24292e;">  jobLabel: backend								# 对拉取的数据添加 label</span></span>
<span class="line"><span style="color:#24292e;">  namespaceSelector: 							# 命名空间选择</span></span>
<span class="line"><span style="color:#24292e;">    matchNames:</span></span>
<span class="line"><span style="color:#24292e;">      - test</span></span>
<span class="line"><span style="color:#24292e;">  selector:  											# 选择 pod</span></span>
<span class="line"><span style="color:#24292e;">    matchLabels:</span></span>
<span class="line"><span style="color:#24292e;">      prometheus: backend</span></span></code></pre></div></li><li><p>PrometheusRule</p><blockquote><p>添加 <code>Prometheus</code>的报警规则</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">apiVersion: monitoring.coreos.com/v1</span></span>
<span class="line"><span style="color:#e1e4e8;">kind: PrometheusRule</span></span>
<span class="line"><span style="color:#e1e4e8;">metadata:</span></span>
<span class="line"><span style="color:#e1e4e8;">  annotations: {}</span></span>
<span class="line"><span style="color:#e1e4e8;">  labels:</span></span>
<span class="line"><span style="color:#e1e4e8;">    prometheus: k8s</span></span>
<span class="line"><span style="color:#e1e4e8;">  name: main-rules</span></span>
<span class="line"><span style="color:#e1e4e8;">  namespace: monitoring</span></span>
<span class="line"><span style="color:#e1e4e8;">spec:</span></span>
<span class="line"><span style="color:#e1e4e8;">  groups:</span></span>
<span class="line"><span style="color:#e1e4e8;">    - name: groupName  				# 分组名称</span></span>
<span class="line"><span style="color:#e1e4e8;">      rules:</span></span>
<span class="line"><span style="color:#e1e4e8;">        - alert: alertName  	# 报警名称</span></span>
<span class="line"><span style="color:#e1e4e8;">          annotations:</span></span>
<span class="line"><span style="color:#e1e4e8;">            description: desc # 详情</span></span>
<span class="line"><span style="color:#e1e4e8;">            runbook_url: url  # 点击后访问的地址</span></span>
<span class="line"><span style="color:#e1e4e8;">            summary: test  		# 概要</span></span>
<span class="line"><span style="color:#e1e4e8;">          expr: 							# 规则表达式</span></span>
<span class="line"><span style="color:#e1e4e8;">          for: 10m  					# 持续时间，满足后才报警</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">apiVersion: monitoring.coreos.com/v1</span></span>
<span class="line"><span style="color:#24292e;">kind: PrometheusRule</span></span>
<span class="line"><span style="color:#24292e;">metadata:</span></span>
<span class="line"><span style="color:#24292e;">  annotations: {}</span></span>
<span class="line"><span style="color:#24292e;">  labels:</span></span>
<span class="line"><span style="color:#24292e;">    prometheus: k8s</span></span>
<span class="line"><span style="color:#24292e;">  name: main-rules</span></span>
<span class="line"><span style="color:#24292e;">  namespace: monitoring</span></span>
<span class="line"><span style="color:#24292e;">spec:</span></span>
<span class="line"><span style="color:#24292e;">  groups:</span></span>
<span class="line"><span style="color:#24292e;">    - name: groupName  				# 分组名称</span></span>
<span class="line"><span style="color:#24292e;">      rules:</span></span>
<span class="line"><span style="color:#24292e;">        - alert: alertName  	# 报警名称</span></span>
<span class="line"><span style="color:#24292e;">          annotations:</span></span>
<span class="line"><span style="color:#24292e;">            description: desc # 详情</span></span>
<span class="line"><span style="color:#24292e;">            runbook_url: url  # 点击后访问的地址</span></span>
<span class="line"><span style="color:#24292e;">            summary: test  		# 概要</span></span>
<span class="line"><span style="color:#24292e;">          expr: 							# 规则表达式</span></span>
<span class="line"><span style="color:#24292e;">          for: 10m  					# 持续时间，满足后才报警</span></span></code></pre></div></li><li><p>AlertmanagerConfig</p><blockquote><p>修改通知规则，<code>Prometheus</code>生成报警后，发送到 <code>Alertmanager</code>。进行分组，抑制，通知。</p><p>简单使用，不建议使用。<code>kube-prometheus</code>中并没有添加支持。</p><p>如需修改可以直接修改 <code>alertmanager-main</code>Secret</p></blockquote></li></ul>`,15),p=[l];function o(c,r,i,d,u,m){return e(),n("div",null,p)}const b=s(t,[["render",o]]);export{h as __pageData,b as default};
