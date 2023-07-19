import{_ as s,o as n,c as a,U as e}from"./chunks/framework.190aac23.js";const y=JSON.parse('{"title":"kube-prometheus","description":"","frontmatter":{"title":"kube-prometheus"},"headers":[],"relativePath":"ops/prometheus/kube-prometheus.md","filePath":"ops/prometheus/kube-prometheus.md","lastUpdated":1689760198000}'),l={name:"ops/prometheus/kube-prometheus.md"},p=e(`<blockquote><p><a href="https://github.com/prometheus-operator/kube-prometheus" target="_blank" rel="noreferrer">kube-prometheus</a></p><p>该项目使用<code>jsonnet</code>编写，上手有一定难度。</p><p>主要是在 k8s 中部署监控的一系列工具。</p><ul><li><a href="https://github.com/prometheus-operator/prometheus-operator" target="_blank" rel="noreferrer">Prometheus Operator</a></li><li>高可用 <a href="https://prometheus.io/" target="_blank" rel="noreferrer">Prometheus</a></li><li>高可用 <a href="https://github.com/prometheus/alertmanager" target="_blank" rel="noreferrer">Alertmanager</a></li><li><a href="https://github.com/prometheus/node_exporter" target="_blank" rel="noreferrer">Prometheus node-exporter</a></li><li><a href="https://github.com/DirectXMan12/k8s-prometheus-adapter" target="_blank" rel="noreferrer">Prometheus Adapter for Kubernetes Metrics APIs</a></li><li><a href="https://github.com/kubernetes/kube-state-metrics" target="_blank" rel="noreferrer">kube-state-metrics</a></li><li><a href="https://grafana.com/" target="_blank" rel="noreferrer">Grafana</a></li></ul></blockquote><h2 id="简单使用" tabindex="-1">简单使用 <a class="header-anchor" href="#简单使用" aria-label="Permalink to &quot;简单使用&quot;">​</a></h2><blockquote><p>对默认的没有特别的要求情况下可以直接使用</p></blockquote><h3 id="前置条件" tabindex="-1">前置条件 <a class="header-anchor" href="#前置条件" aria-label="Permalink to &quot;前置条件&quot;">​</a></h3><ul><li>go环境</li><li>安装jb(jsonnet-bundler) <ul><li>使用go安装<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">go get github.com/jsonnet-bundler/jsonnet-bundler/cmd/jb</span></span></code></pre></div></li><li>使用brewhome安装<div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">jsonnet-bundler</span></span></code></pre></div></li></ul></li><li>gojsontoyaml安装<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">go get github.com/brancz/gojsontoyaml</span></span></code></pre></div></li></ul><h3 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h3><ul><li><p>修改配置文件</p><blockquote><p>example.jsonnet</p></blockquote></li><li><p>生成文件</p><blockquote><p>运行<code>./build.sh example.jsonnet</code> 会在<code>manifests</code>目录生成配置文件</p></blockquote></li><li><p>格式化.jsonnet</p><blockquote><p>需要安装jsonnetfmt</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git clone git@github.com:google/go-jsonnet.git</span></span>
<span class="line"><span style="color:#A6ACCD;">  cd go-jsonnet</span></span>
<span class="line"><span style="color:#A6ACCD;">  go build ./cmd/jsonnetfmt</span></span></code></pre></div><blockquote><p>使用vsCode的<code>jsonnet Formatter</code>插件 或者使用下面代码直接格式化</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">jsonnetfmt --indent 2 --max-blank-lines 2 --sort-imports --string-style s --comment-style s -i test.jsonnet</span></span></code></pre></div></li></ul><h3 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h3><ul><li>vendor目录是jb生成的</li><li>除配置文件都是从github上面copy的不需要修改直接<code>jb update</code></li></ul><h2 id="自定义配置" tabindex="-1">自定义配置 <a class="header-anchor" href="#自定义配置" aria-label="Permalink to &quot;自定义配置&quot;">​</a></h2><blockquote><p>默认的配置,不满足的情况下。</p><p>实际上都是对生成的文件进行修改，如果不想写配置文件，可以直接对生成的文件进行修改使用。</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">local filter = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 过滤某些通知，也可以对 alertmanager-config.yaml 添加抑制配置</span></span>
<span class="line"><span style="color:#A6ACCD;">  kubernetesControlPlane+:: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    prometheusRule+: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      spec+: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        groups: std.filter(</span></span>
<span class="line"><span style="color:#A6ACCD;">          function(group)</span></span>
<span class="line"><span style="color:#A6ACCD;">            group.name != &#39;kubernetes-system-scheduler&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &amp;&amp; group.name != &#39;kubernetes-system-controller-manager&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          super.groups</span></span>
<span class="line"><span style="color:#A6ACCD;">        ),</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">local update = {</span></span>
<span class="line"><span style="color:#A6ACCD;">	// 对默认的配置进行修改</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 调整报警阈值</span></span>
<span class="line"><span style="color:#A6ACCD;">  kubernetesControlPlane+:: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    prometheusRule+: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      spec+: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        groups: std.map(</span></span>
<span class="line"><span style="color:#A6ACCD;">          function(group)</span></span>
<span class="line"><span style="color:#A6ACCD;">            if group.name == &#39;kubernetes-resources&#39; then</span></span>
<span class="line"><span style="color:#A6ACCD;">              group {</span></span>
<span class="line"><span style="color:#A6ACCD;">                rules: std.map(</span></span>
<span class="line"><span style="color:#A6ACCD;">                  function(rule)</span></span>
<span class="line"><span style="color:#A6ACCD;">                    if rule.alert == &#39;CPUThrottlingHigh&#39; then</span></span>
<span class="line"><span style="color:#A6ACCD;">                      rule {</span></span>
<span class="line"><span style="color:#A6ACCD;">                        expr: |||</span></span>
<span class="line"><span style="color:#A6ACCD;">sum(increase(container_cpu_cfs_throttled_periods_total{container!=&quot;&quot;, }[5m])) by (container, pod, namespace)</span></span>
<span class="line"><span style="color:#A6ACCD;">                            /</span></span>
<span class="line"><span style="color:#A6ACCD;">                          sum(increase(container_cpu_cfs_periods_total{}[5m])) by (container, pod, namespace)</span></span>
<span class="line"><span style="color:#A6ACCD;">                            &gt; ( 70 / 100 )</span></span>
<span class="line"><span style="color:#A6ACCD;">                        |||,</span></span>
<span class="line"><span style="color:#A6ACCD;">                      }</span></span>
<span class="line"><span style="color:#A6ACCD;">                    else</span></span>
<span class="line"><span style="color:#A6ACCD;">                      rule,</span></span>
<span class="line"><span style="color:#A6ACCD;">                  group.rules</span></span>
<span class="line"><span style="color:#A6ACCD;">                ),</span></span>
<span class="line"><span style="color:#A6ACCD;">              }</span></span>
<span class="line"><span style="color:#A6ACCD;">            else</span></span>
<span class="line"><span style="color:#A6ACCD;">              group,</span></span>
<span class="line"><span style="color:#A6ACCD;">          super.groups</span></span>
<span class="line"><span style="color:#A6ACCD;">        ),</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">local kp =</span></span>
<span class="line"><span style="color:#A6ACCD;">  (import &#39;kube-prometheus/main.libsonnet&#39;) +</span></span>
<span class="line"><span style="color:#A6ACCD;">  (import &#39;kube-prometheus/addons/all-namespaces.libsonnet&#39;) + // 监听全部命名空间</span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">    values+:: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      common+: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        namespace: &#39;monitoring&#39;,  // 工作命名空间</span></span>
<span class="line"><span style="color:#A6ACCD;">        images+: {</span></span>
<span class="line"><span style="color:#A6ACCD;">          // 替换镜像</span></span>
<span class="line"><span style="color:#A6ACCD;">          kubeStateMetrics: &#39;bitnami/kube-state-metrics:&#39; + $.values.common.versions.kubeStateMetrics,</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">      alertmanager+: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        config: importstr &#39;alertmanager-config.yaml&#39;,  // alertmanager 配置文件</span></span>
<span class="line"><span style="color:#A6ACCD;">        replicas: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">      },</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 添加储存类</span></span>
<span class="line"><span style="color:#A6ACCD;">    prometheus+:: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      prometheus+: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        spec+: {</span></span>
<span class="line"><span style="color:#A6ACCD;">          retention: &#39;30d&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          replicas: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">          storage: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            volumeClaimTemplate: {</span></span>
<span class="line"><span style="color:#A6ACCD;">              apiVersion: &#39;v1&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">              kind: &#39;PersistentVolumeClaim&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">              spec: {</span></span>
<span class="line"><span style="color:#A6ACCD;">                accessModes: [&#39;ReadWriteOnce&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">                resources: { requests: { storage: &#39;100Gi&#39; } },</span></span>
<span class="line"><span style="color:#A6ACCD;">                storageClassName: &#39;nfs-dynamic-class&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">              },</span></span>
<span class="line"><span style="color:#A6ACCD;">            },</span></span>
<span class="line"><span style="color:#A6ACCD;">          },  // storage</span></span>
<span class="line"><span style="color:#A6ACCD;">        },  // spec</span></span>
<span class="line"><span style="color:#A6ACCD;">      },  // prometheus</span></span>
<span class="line"><span style="color:#A6ACCD;">    },  // prometheus</span></span>
<span class="line"><span style="color:#A6ACCD;">  } + filter + update;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 下面的不要动</span></span>
<span class="line"><span style="color:#A6ACCD;">{ &#39;setup/0namespace-namespace&#39;: kp.kubePrometheus.namespace } +</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  [&#39;setup/prometheus-operator-&#39; + name]: kp.prometheusOperator[name]</span></span>
<span class="line"><span style="color:#A6ACCD;">  for name in std.filter((function(name) name != &#39;serviceMonitor&#39; &amp;&amp; name != &#39;prometheusRule&#39;), std.objectFields(kp.prometheusOperator))</span></span>
<span class="line"><span style="color:#A6ACCD;">} +</span></span>
<span class="line"><span style="color:#A6ACCD;">// serviceMonitor and prometheusRule are separated so that they can be created after the CRDs are ready</span></span>
<span class="line"><span style="color:#A6ACCD;">{ &#39;prometheus-operator-serviceMonitor&#39;: kp.prometheusOperator.serviceMonitor } +</span></span>
<span class="line"><span style="color:#A6ACCD;">{ &#39;prometheus-operator-prometheusRule&#39;: kp.prometheusOperator.prometheusRule } +</span></span>
<span class="line"><span style="color:#A6ACCD;">{ &#39;kube-prometheus-prometheusRule&#39;: kp.kubePrometheus.prometheusRule } +</span></span>
<span class="line"><span style="color:#A6ACCD;">{ [&#39;alertmanager-&#39; + name]: kp.alertmanager[name] for name in std.objectFields(kp.alertmanager) } +</span></span>
<span class="line"><span style="color:#A6ACCD;">{ [&#39;blackbox-exporter-&#39; + name]: kp.blackboxExporter[name] for name in std.objectFields(kp.blackboxExporter) } +</span></span>
<span class="line"><span style="color:#A6ACCD;">{ [&#39;grafana-&#39; + name]: kp.grafana[name] for name in std.objectFields(kp.grafana) } +</span></span>
<span class="line"><span style="color:#A6ACCD;">{ [&#39;kube-state-metrics-&#39; + name]: kp.kubeStateMetrics[name] for name in std.objectFields(kp.kubeStateMetrics) } +</span></span>
<span class="line"><span style="color:#A6ACCD;">{ [&#39;kubernetes-&#39; + name]: kp.kubernetesControlPlane[name] for name in std.objectFields(kp.kubernetesControlPlane) }</span></span>
<span class="line"><span style="color:#A6ACCD;">{ [&#39;node-exporter-&#39; + name]: kp.nodeExporter[name] for name in std.objectFields(kp.nodeExporter) } +</span></span>
<span class="line"><span style="color:#A6ACCD;">{ [&#39;prometheus-&#39; + name]: kp.prometheus[name] for name in std.objectFields(kp.prometheus) } +</span></span>
<span class="line"><span style="color:#A6ACCD;">{ [&#39;prometheus-adapter-&#39; + name]: kp.prometheusAdapter[name] for name in std.objectFields(kp.prometheusAdapter) }</span></span></code></pre></div>`,12),o=[p];function t(r,c,i,C,A,u){return n(),a("div",null,o)}const h=s(l,[["render",t]]);export{y as __pageData,h as default};
