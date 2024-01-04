import{_ as s,c as n,o as a,U as e}from"./chunks/framework.L6XTt9Gt.js";const b=JSON.parse('{"title":"kube-prometheus","description":"","frontmatter":{"title":"kube-prometheus"},"headers":[],"relativePath":"ops/prometheus/kube-prometheus.md","filePath":"ops/prometheus/kube-prometheus.md","lastUpdated":1704353670000}'),p={name:"ops/prometheus/kube-prometheus.md"},l=e(`<blockquote><p><a href="https://github.com/prometheus-operator/kube-prometheus" target="_blank" rel="noreferrer">kube-prometheus</a></p><p>该项目使用<code>jsonnet</code>编写，上手有一定难度。</p><p>主要是在 k8s 中部署监控的一系列工具。</p><ul><li><a href="https://github.com/prometheus-operator/prometheus-operator" target="_blank" rel="noreferrer">Prometheus Operator</a></li><li>高可用 <a href="https://prometheus.io/" target="_blank" rel="noreferrer">Prometheus</a></li><li>高可用 <a href="https://github.com/prometheus/alertmanager" target="_blank" rel="noreferrer">Alertmanager</a></li><li><a href="https://github.com/prometheus/node_exporter" target="_blank" rel="noreferrer">Prometheus node-exporter</a></li><li><a href="https://github.com/DirectXMan12/k8s-prometheus-adapter" target="_blank" rel="noreferrer">Prometheus Adapter for Kubernetes Metrics APIs</a></li><li><a href="https://github.com/kubernetes/kube-state-metrics" target="_blank" rel="noreferrer">kube-state-metrics</a></li><li><a href="https://grafana.com/" target="_blank" rel="noreferrer">Grafana</a></li></ul></blockquote><h2 id="简单使用" tabindex="-1">简单使用 <a class="header-anchor" href="#简单使用" aria-label="Permalink to &quot;简单使用&quot;">​</a></h2><blockquote><p>对默认的没有特别的要求情况下可以直接使用</p></blockquote><h3 id="前置条件" tabindex="-1">前置条件 <a class="header-anchor" href="#前置条件" aria-label="Permalink to &quot;前置条件&quot;">​</a></h3><ul><li>go环境</li><li>安装jb(jsonnet-bundler) <ul><li>使用go安装<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>go get github.com/jsonnet-bundler/jsonnet-bundler/cmd/jb</span></span></code></pre></div></li><li>使用brewhome安装<div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> jsonnet-bundler</span></span></code></pre></div></li></ul></li><li>gojsontoyaml安装<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>go get github.com/brancz/gojsontoyaml</span></span></code></pre></div></li></ul><h3 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h3><ul><li><p>修改配置文件</p><blockquote><p>example.jsonnet</p></blockquote></li><li><p>生成文件</p><blockquote><p>运行<code>./build.sh example.jsonnet</code> 会在<code>manifests</code>目录生成配置文件</p></blockquote></li><li><p>格式化.jsonnet</p><blockquote><p>需要安装jsonnetfmt</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>  git clone git@github.com:google/go-jsonnet.git</span></span>
<span class="line"><span>  cd go-jsonnet</span></span>
<span class="line"><span>  go build ./cmd/jsonnetfmt</span></span></code></pre></div><blockquote><p>使用vsCode的<code>jsonnet Formatter</code>插件 或者使用下面代码直接格式化</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span> jsonnetfmt --indent 2 --max-blank-lines 2 --sort-imports --string-style s --comment-style s -i test.jsonnet</span></span></code></pre></div></li></ul><h3 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h3><ul><li>vendor目录是jb生成的</li><li>除配置文件都是从github上面copy的不需要修改直接<code>jb update</code></li></ul><h2 id="自定义配置" tabindex="-1">自定义配置 <a class="header-anchor" href="#自定义配置" aria-label="Permalink to &quot;自定义配置&quot;">​</a></h2><blockquote><p>默认的配置,不满足的情况下。</p><p>实际上都是对生成的文件进行修改，如果不想写配置文件，可以直接对生成的文件进行修改使用。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>local filter = {</span></span>
<span class="line"><span>  // 过滤某些通知，也可以对 alertmanager-config.yaml 添加抑制配置</span></span>
<span class="line"><span>  kubernetesControlPlane+:: {</span></span>
<span class="line"><span>    prometheusRule+: {</span></span>
<span class="line"><span>      spec+: {</span></span>
<span class="line"><span>        groups: std.filter(</span></span>
<span class="line"><span>          function(group)</span></span>
<span class="line"><span>            group.name != &#39;kubernetes-system-scheduler&#39;</span></span>
<span class="line"><span>            &amp;&amp; group.name != &#39;kubernetes-system-controller-manager&#39;,</span></span>
<span class="line"><span>          super.groups</span></span>
<span class="line"><span>        ),</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>local update = {</span></span>
<span class="line"><span>	// 对默认的配置进行修改</span></span>
<span class="line"><span>  // 调整报警阈值</span></span>
<span class="line"><span>  kubernetesControlPlane+:: {</span></span>
<span class="line"><span>    prometheusRule+: {</span></span>
<span class="line"><span>      spec+: {</span></span>
<span class="line"><span>        groups: std.map(</span></span>
<span class="line"><span>          function(group)</span></span>
<span class="line"><span>            if group.name == &#39;kubernetes-resources&#39; then</span></span>
<span class="line"><span>              group {</span></span>
<span class="line"><span>                rules: std.map(</span></span>
<span class="line"><span>                  function(rule)</span></span>
<span class="line"><span>                    if rule.alert == &#39;CPUThrottlingHigh&#39; then</span></span>
<span class="line"><span>                      rule {</span></span>
<span class="line"><span>                        expr: |||</span></span>
<span class="line"><span>sum(increase(container_cpu_cfs_throttled_periods_total{container!=&quot;&quot;, }[5m])) by (container, pod, namespace)</span></span>
<span class="line"><span>                            /</span></span>
<span class="line"><span>                          sum(increase(container_cpu_cfs_periods_total{}[5m])) by (container, pod, namespace)</span></span>
<span class="line"><span>                            &gt; ( 70 / 100 )</span></span>
<span class="line"><span>                        |||,</span></span>
<span class="line"><span>                      }</span></span>
<span class="line"><span>                    else</span></span>
<span class="line"><span>                      rule,</span></span>
<span class="line"><span>                  group.rules</span></span>
<span class="line"><span>                ),</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span>            else</span></span>
<span class="line"><span>              group,</span></span>
<span class="line"><span>          super.groups</span></span>
<span class="line"><span>        ),</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>local kp =</span></span>
<span class="line"><span>  (import &#39;kube-prometheus/main.libsonnet&#39;) +</span></span>
<span class="line"><span>  (import &#39;kube-prometheus/addons/all-namespaces.libsonnet&#39;) + // 监听全部命名空间</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    values+:: {</span></span>
<span class="line"><span>      common+: {</span></span>
<span class="line"><span>        namespace: &#39;monitoring&#39;,  // 工作命名空间</span></span>
<span class="line"><span>        images+: {</span></span>
<span class="line"><span>          // 替换镜像</span></span>
<span class="line"><span>          kubeStateMetrics: &#39;bitnami/kube-state-metrics:&#39; + $.values.common.versions.kubeStateMetrics,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      alertmanager+: {</span></span>
<span class="line"><span>        config: importstr &#39;alertmanager-config.yaml&#39;,  // alertmanager 配置文件</span></span>
<span class="line"><span>        replicas: 1,</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    // 添加储存类</span></span>
<span class="line"><span>    prometheus+:: {</span></span>
<span class="line"><span>      prometheus+: {</span></span>
<span class="line"><span>        spec+: {</span></span>
<span class="line"><span>          retention: &#39;30d&#39;,</span></span>
<span class="line"><span>          replicas: 1,</span></span>
<span class="line"><span>          storage: {</span></span>
<span class="line"><span>            volumeClaimTemplate: {</span></span>
<span class="line"><span>              apiVersion: &#39;v1&#39;,</span></span>
<span class="line"><span>              kind: &#39;PersistentVolumeClaim&#39;,</span></span>
<span class="line"><span>              spec: {</span></span>
<span class="line"><span>                accessModes: [&#39;ReadWriteOnce&#39;],</span></span>
<span class="line"><span>                resources: { requests: { storage: &#39;100Gi&#39; } },</span></span>
<span class="line"><span>                storageClassName: &#39;nfs-dynamic-class&#39;,</span></span>
<span class="line"><span>              },</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>          },  // storage</span></span>
<span class="line"><span>        },  // spec</span></span>
<span class="line"><span>      },  // prometheus</span></span>
<span class="line"><span>    },  // prometheus</span></span>
<span class="line"><span>  } + filter + update;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 下面的不要动</span></span>
<span class="line"><span>{ &#39;setup/0namespace-namespace&#39;: kp.kubePrometheus.namespace } +</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  [&#39;setup/prometheus-operator-&#39; + name]: kp.prometheusOperator[name]</span></span>
<span class="line"><span>  for name in std.filter((function(name) name != &#39;serviceMonitor&#39; &amp;&amp; name != &#39;prometheusRule&#39;), std.objectFields(kp.prometheusOperator))</span></span>
<span class="line"><span>} +</span></span>
<span class="line"><span>// serviceMonitor and prometheusRule are separated so that they can be created after the CRDs are ready</span></span>
<span class="line"><span>{ &#39;prometheus-operator-serviceMonitor&#39;: kp.prometheusOperator.serviceMonitor } +</span></span>
<span class="line"><span>{ &#39;prometheus-operator-prometheusRule&#39;: kp.prometheusOperator.prometheusRule } +</span></span>
<span class="line"><span>{ &#39;kube-prometheus-prometheusRule&#39;: kp.kubePrometheus.prometheusRule } +</span></span>
<span class="line"><span>{ [&#39;alertmanager-&#39; + name]: kp.alertmanager[name] for name in std.objectFields(kp.alertmanager) } +</span></span>
<span class="line"><span>{ [&#39;blackbox-exporter-&#39; + name]: kp.blackboxExporter[name] for name in std.objectFields(kp.blackboxExporter) } +</span></span>
<span class="line"><span>{ [&#39;grafana-&#39; + name]: kp.grafana[name] for name in std.objectFields(kp.grafana) } +</span></span>
<span class="line"><span>{ [&#39;kube-state-metrics-&#39; + name]: kp.kubeStateMetrics[name] for name in std.objectFields(kp.kubeStateMetrics) } +</span></span>
<span class="line"><span>{ [&#39;kubernetes-&#39; + name]: kp.kubernetesControlPlane[name] for name in std.objectFields(kp.kubernetesControlPlane) }</span></span>
<span class="line"><span>{ [&#39;node-exporter-&#39; + name]: kp.nodeExporter[name] for name in std.objectFields(kp.nodeExporter) } +</span></span>
<span class="line"><span>{ [&#39;prometheus-&#39; + name]: kp.prometheus[name] for name in std.objectFields(kp.prometheus) } +</span></span>
<span class="line"><span>{ [&#39;prometheus-adapter-&#39; + name]: kp.prometheusAdapter[name] for name in std.objectFields(kp.prometheusAdapter) }</span></span></code></pre></div>`,12),t=[l];function o(i,r,c,u,m,h){return a(),n("div",null,t)}const k=s(p,[["render",o]]);export{b as __pageData,k as default};
