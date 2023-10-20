import{_ as s,o as e,c as a,Q as n}from"./chunks/framework.54cab62e.js";const u=JSON.parse('{"title":"服务配置","description":"","frontmatter":{"title":"服务配置"},"headers":[],"relativePath":"ops/skywalking/server-config.md","filePath":"ops/skywalking/server-config.md","lastUpdated":1697773070000}'),l={name:"ops/skywalking/server-config.md"},o=n(`<h3 id="常用配置" tabindex="-1">常用配置 <a class="header-anchor" href="#常用配置" aria-label="Permalink to &quot;常用配置&quot;">​</a></h3><h3 id="application-yml" tabindex="-1">application.yml <a class="header-anchor" href="#application-yml" aria-label="Permalink to &quot;application.yml&quot;">​</a></h3><blockquote><p>服务端核心配置类</p><p>这个设置文件背后的核心概念是，Skywalking的Collector基于纯模块化设计。 最终用户可以根据自己的需求切换或组装收集器功能。</p></blockquote><h4 id="核心配置" tabindex="-1">核心配置 <a class="header-anchor" href="#核心配置" aria-label="Permalink to &quot;核心配置&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">core:</span></span>
<span class="line"><span style="color:#e1e4e8;">  selector: \${SW_CORE:default}</span></span>
<span class="line"><span style="color:#e1e4e8;">  default:</span></span>
<span class="line"><span style="color:#e1e4e8;">    # rest请求配置</span></span>
<span class="line"><span style="color:#e1e4e8;">    restHost: \${SW_CORE_REST_HOST:0.0.0.0}</span></span>
<span class="line"><span style="color:#e1e4e8;">    restPort: \${SW_CORE_REST_PORT:12800}</span></span>
<span class="line"><span style="color:#e1e4e8;">    restContextPath: \${SW_CORE_REST_CONTEXT_PATH:/}</span></span>
<span class="line"><span style="color:#e1e4e8;">    restMinThreads: \${SW_CORE_REST_JETTY_MIN_THREADS:1}</span></span>
<span class="line"><span style="color:#e1e4e8;">    restMaxThreads: \${SW_CORE_REST_JETTY_MAX_THREADS:200}</span></span>
<span class="line"><span style="color:#e1e4e8;">    restIdleTimeOut: \${SW_CORE_REST_JETTY_IDLE_TIMEOUT:30000}</span></span>
<span class="line"><span style="color:#e1e4e8;">    restAcceptorPriorityDelta: \${SW_CORE_REST_JETTY_DELTA:0}</span></span>
<span class="line"><span style="color:#e1e4e8;">    restAcceptQueueSize: \${SW_CORE_REST_JETTY_QUEUE_SIZE:0}</span></span>
<span class="line"><span style="color:#e1e4e8;">    # gRPC配置</span></span>
<span class="line"><span style="color:#e1e4e8;">    gRPCHost: \${SW_CORE_GRPC_HOST:0.0.0.0}</span></span>
<span class="line"><span style="color:#e1e4e8;">    gRPCPort: \${SW_CORE_GRPC_PORT:11800}</span></span>
<span class="line"><span style="color:#e1e4e8;">    gRPCSslEnabled: \${SW_CORE_GRPC_SSL_ENABLED:false}</span></span>
<span class="line"><span style="color:#e1e4e8;">    gRPCSslKeyPath: \${SW_CORE_GRPC_SSL_KEY_PATH:&quot;&quot;}</span></span>
<span class="line"><span style="color:#e1e4e8;">    gRPCSslCertChainPath: \${SW_CORE_GRPC_SSL_CERT_CHAIN_PATH:&quot;&quot;}</span></span>
<span class="line"><span style="color:#e1e4e8;">    gRPCSslTrustedCAPath: \${SW_CORE_GRPC_SSL_TRUSTED_CA_PATH:&quot;&quot;}</span></span>
<span class="line"><span style="color:#e1e4e8;">    # 追踪记录保存时间</span></span>
<span class="line"><span style="color:#e1e4e8;">    recordDataTTL: \${SW_CORE_RECORD_DATA_TTL:3} # Unit is day</span></span>
<span class="line"><span style="color:#e1e4e8;">    # 指标保存时间</span></span>
<span class="line"><span style="color:#e1e4e8;">    metricsDataTTL: \${SW_CORE_METRICS_DATA_TTL:7} # Unit is day</span></span>
<span class="line"><span style="color:#e1e4e8;">		# top的计算周期（最慢sql，最慢断点等）</span></span>
<span class="line"><span style="color:#e1e4e8;">    topNReportPeriod: \${SW_CORE_TOPN_REPORT_PERIOD:10} # top_n record worker report cycle, unit is minute</span></span>
<span class="line"><span style="color:#e1e4e8;">    # Extra model column are the column defined by in the codes, These columns of model are not required logically in aggregation or further query,</span></span>
<span class="line"><span style="color:#e1e4e8;">    # and it will cause more load for memory, network of OAP and storage.</span></span>
<span class="line"><span style="color:#e1e4e8;">    # But, being activated, user could see the name in the storage entities, which make users easier to use 3rd party tool, such as Kibana-&gt;ES, to query the data by themselves.</span></span>
<span class="line"><span style="color:#e1e4e8;">    # 是否开启第三方访问</span></span>
<span class="line"><span style="color:#e1e4e8;">    activeExtraModelColumns: \${SW_CORE_ACTIVE_EXTRA_MODEL_COLUMNS:false}</span></span>
<span class="line"><span style="color:#e1e4e8;">    </span></span>
<span class="line"><span style="color:#e1e4e8;">    # 限制名字的长度</span></span>
<span class="line"><span style="color:#e1e4e8;">    # The max length of service + instance names should be less than 200</span></span>
<span class="line"><span style="color:#e1e4e8;">    serviceNameMaxLength: \${SW_SERVICE_NAME_MAX_LENGTH:70}</span></span>
<span class="line"><span style="color:#e1e4e8;">    instanceNameMaxLength: \${SW_INSTANCE_NAME_MAX_LENGTH:70}</span></span>
<span class="line"><span style="color:#e1e4e8;">    # The max length of service + endpoint names should be less than 240</span></span>
<span class="line"><span style="color:#e1e4e8;">    endpointNameMaxLength: \${SW_ENDPOINT_NAME_MAX_LENGTH:150}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">core:</span></span>
<span class="line"><span style="color:#24292e;">  selector: \${SW_CORE:default}</span></span>
<span class="line"><span style="color:#24292e;">  default:</span></span>
<span class="line"><span style="color:#24292e;">    # rest请求配置</span></span>
<span class="line"><span style="color:#24292e;">    restHost: \${SW_CORE_REST_HOST:0.0.0.0}</span></span>
<span class="line"><span style="color:#24292e;">    restPort: \${SW_CORE_REST_PORT:12800}</span></span>
<span class="line"><span style="color:#24292e;">    restContextPath: \${SW_CORE_REST_CONTEXT_PATH:/}</span></span>
<span class="line"><span style="color:#24292e;">    restMinThreads: \${SW_CORE_REST_JETTY_MIN_THREADS:1}</span></span>
<span class="line"><span style="color:#24292e;">    restMaxThreads: \${SW_CORE_REST_JETTY_MAX_THREADS:200}</span></span>
<span class="line"><span style="color:#24292e;">    restIdleTimeOut: \${SW_CORE_REST_JETTY_IDLE_TIMEOUT:30000}</span></span>
<span class="line"><span style="color:#24292e;">    restAcceptorPriorityDelta: \${SW_CORE_REST_JETTY_DELTA:0}</span></span>
<span class="line"><span style="color:#24292e;">    restAcceptQueueSize: \${SW_CORE_REST_JETTY_QUEUE_SIZE:0}</span></span>
<span class="line"><span style="color:#24292e;">    # gRPC配置</span></span>
<span class="line"><span style="color:#24292e;">    gRPCHost: \${SW_CORE_GRPC_HOST:0.0.0.0}</span></span>
<span class="line"><span style="color:#24292e;">    gRPCPort: \${SW_CORE_GRPC_PORT:11800}</span></span>
<span class="line"><span style="color:#24292e;">    gRPCSslEnabled: \${SW_CORE_GRPC_SSL_ENABLED:false}</span></span>
<span class="line"><span style="color:#24292e;">    gRPCSslKeyPath: \${SW_CORE_GRPC_SSL_KEY_PATH:&quot;&quot;}</span></span>
<span class="line"><span style="color:#24292e;">    gRPCSslCertChainPath: \${SW_CORE_GRPC_SSL_CERT_CHAIN_PATH:&quot;&quot;}</span></span>
<span class="line"><span style="color:#24292e;">    gRPCSslTrustedCAPath: \${SW_CORE_GRPC_SSL_TRUSTED_CA_PATH:&quot;&quot;}</span></span>
<span class="line"><span style="color:#24292e;">    # 追踪记录保存时间</span></span>
<span class="line"><span style="color:#24292e;">    recordDataTTL: \${SW_CORE_RECORD_DATA_TTL:3} # Unit is day</span></span>
<span class="line"><span style="color:#24292e;">    # 指标保存时间</span></span>
<span class="line"><span style="color:#24292e;">    metricsDataTTL: \${SW_CORE_METRICS_DATA_TTL:7} # Unit is day</span></span>
<span class="line"><span style="color:#24292e;">		# top的计算周期（最慢sql，最慢断点等）</span></span>
<span class="line"><span style="color:#24292e;">    topNReportPeriod: \${SW_CORE_TOPN_REPORT_PERIOD:10} # top_n record worker report cycle, unit is minute</span></span>
<span class="line"><span style="color:#24292e;">    # Extra model column are the column defined by in the codes, These columns of model are not required logically in aggregation or further query,</span></span>
<span class="line"><span style="color:#24292e;">    # and it will cause more load for memory, network of OAP and storage.</span></span>
<span class="line"><span style="color:#24292e;">    # But, being activated, user could see the name in the storage entities, which make users easier to use 3rd party tool, such as Kibana-&gt;ES, to query the data by themselves.</span></span>
<span class="line"><span style="color:#24292e;">    # 是否开启第三方访问</span></span>
<span class="line"><span style="color:#24292e;">    activeExtraModelColumns: \${SW_CORE_ACTIVE_EXTRA_MODEL_COLUMNS:false}</span></span>
<span class="line"><span style="color:#24292e;">    </span></span>
<span class="line"><span style="color:#24292e;">    # 限制名字的长度</span></span>
<span class="line"><span style="color:#24292e;">    # The max length of service + instance names should be less than 200</span></span>
<span class="line"><span style="color:#24292e;">    serviceNameMaxLength: \${SW_SERVICE_NAME_MAX_LENGTH:70}</span></span>
<span class="line"><span style="color:#24292e;">    instanceNameMaxLength: \${SW_INSTANCE_NAME_MAX_LENGTH:70}</span></span>
<span class="line"><span style="color:#24292e;">    # The max length of service + endpoint names should be less than 240</span></span>
<span class="line"><span style="color:#24292e;">    endpointNameMaxLength: \${SW_ENDPOINT_NAME_MAX_LENGTH:150}</span></span></code></pre></div><h4 id="存储" tabindex="-1">存储 <a class="header-anchor" href="#存储" aria-label="Permalink to &quot;存储&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">storage:</span></span>
<span class="line"><span style="color:#e1e4e8;"># 选择存储方式，默认是H2（内存数据库），支持mysql，elasticsearch，influxdb</span></span>
<span class="line"><span style="color:#e1e4e8;">  selector: \${SW_STORAGE:mysql}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">storage:</span></span>
<span class="line"><span style="color:#24292e;"># 选择存储方式，默认是H2（内存数据库），支持mysql，elasticsearch，influxdb</span></span>
<span class="line"><span style="color:#24292e;">  selector: \${SW_STORAGE:mysql}</span></span></code></pre></div><h4 id="客户端分析配置" tabindex="-1">客户端分析配置 <a class="header-anchor" href="#客户端分析配置" aria-label="Permalink to &quot;客户端分析配置&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">agent-analyzer:</span></span>
<span class="line"><span style="color:#e1e4e8;">  selector: \${SW_AGENT_ANALYZER:default}</span></span>
<span class="line"><span style="color:#e1e4e8;">  default:</span></span>
<span class="line"><span style="color:#e1e4e8;">    # 采样率，默认10000及100% （配置的数值/10000）  </span></span>
<span class="line"><span style="color:#e1e4e8;">    sampleRate: \${SW_TRACE_SAMPLE_RATE:10000} # The sample rate precision is 1/10000. 10000 means 100% sample in      default.</span></span>
<span class="line"><span style="color:#e1e4e8;">    </span></span>
<span class="line"><span style="color:#e1e4e8;">    # 慢sql分析 </span></span>
<span class="line"><span style="color:#e1e4e8;">    slowDBAccessThreshold: \${SW_SLOW_DB_THRESHOLD:default:200,mongodb:100} # The slow database access thresholds. Unit ms.</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">agent-analyzer:</span></span>
<span class="line"><span style="color:#24292e;">  selector: \${SW_AGENT_ANALYZER:default}</span></span>
<span class="line"><span style="color:#24292e;">  default:</span></span>
<span class="line"><span style="color:#24292e;">    # 采样率，默认10000及100% （配置的数值/10000）  </span></span>
<span class="line"><span style="color:#24292e;">    sampleRate: \${SW_TRACE_SAMPLE_RATE:10000} # The sample rate precision is 1/10000. 10000 means 100% sample in      default.</span></span>
<span class="line"><span style="color:#24292e;">    </span></span>
<span class="line"><span style="color:#24292e;">    # 慢sql分析 </span></span>
<span class="line"><span style="color:#24292e;">    slowDBAccessThreshold: \${SW_SLOW_DB_THRESHOLD:default:200,mongodb:100} # The slow database access thresholds. Unit ms.</span></span></code></pre></div><h4 id="动态配置" tabindex="-1">动态配置 <a class="header-anchor" href="#动态配置" aria-label="Permalink to &quot;动态配置&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">configuration:</span></span>
<span class="line"><span style="color:#e1e4e8;">  # 选择配置服务，支持grpc，Apollo，zookeeper，etcd，consul，k8s-configmap，nacos</span></span>
<span class="line"><span style="color:#e1e4e8;">  selector: \${SW_CONFIGURATION:none}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">configuration:</span></span>
<span class="line"><span style="color:#24292e;">  # 选择配置服务，支持grpc，Apollo，zookeeper，etcd，consul，k8s-configmap，nacos</span></span>
<span class="line"><span style="color:#24292e;">  selector: \${SW_CONFIGURATION:none}</span></span></code></pre></div><h3 id="alarm-settings-yml" tabindex="-1">alarm-settings.yml <a class="header-anchor" href="#alarm-settings-yml" aria-label="Permalink to &quot;alarm-settings.yml&quot;">​</a></h3><blockquote><p>告警的核心由一组规则驱动</p><p>告警规则的定义分为三部分。</p><ol><li>告警规则。它们定义了应该如何触发度量警报，应该考虑什么条件。</li><li>[网络钩子](#Webhook}。当警告触发时，哪些服务终端需要被告知。</li><li><a href="https://github.com/SkyAPM/document-cn-translation-of-skywalking/blob/master/docs/zh/8.0.0/setup/backend/backend-alarm.md#gRPCHook" target="_blank" rel="noreferrer">gRPC钩子</a>. 远程gRPC方法的主机和端口，告警触发后调用.</li></ol></blockquote><h5 id="告警规则" tabindex="-1">告警规则 <a class="header-anchor" href="#告警规则" aria-label="Permalink to &quot;告警规则&quot;">​</a></h5><p>告警规则配置项的说明：</p><ul><li>Rule name：规则名称，也是在告警信息中显示的唯一名称。必须以<code>_rule</code>结尾，前缀可自定义</li><li>Metrics name：度量名称，取值为oal脚本中的度量名，目前只支持<code>long</code>、<code>double</code>和<code>int</code>类型。详见<a href="https://github.com/apache/skywalking/blob/master/docs/en/guides/backend-oal-scripts.md" target="_blank" rel="noreferrer">Official OAL script</a></li><li>Include names：该规则作用于哪些实体名称，比如服务名，终端名（可选，默认为全部）</li><li>Exclude names：该规则作不用于哪些实体名称，比如服务名，终端名（可选，默认为空）</li><li>Threshold：阈值</li><li>OP： 操作符，目前支持 <code>&gt;</code>、<code>&lt;</code>、<code>=</code></li><li>Period：多久告警规则需要被核实一下。这是一个时间窗口，与后端部署环境时间相匹配</li><li>Count：在一个Period窗口中，如果values超过Threshold值（按op），达到Count值，需要发送警报</li><li>Silence period：在时间N中触发报警后，在TN -&gt; TN + period这个阶段不告警。 默认情况下，它和Period一样，这意味着相同的告警（在同一个Metrics name拥有相同的Id）在同一个Period内只会触发一次</li><li>message：告警消息</li></ul><h5 id="网络钩子" tabindex="-1">网络钩子 <a class="header-anchor" href="#网络钩子" aria-label="Permalink to &quot;网络钩子&quot;">​</a></h5><p>发送字段说明：</p><ul><li>scopeId、scope：所有可用的 Scope 详见 <code>org.apache.skywalking.oap.server.core.source.DefaultScopeDefine</code></li><li>name：目标 Scope 的实体名称</li><li>id0：Scope 实体的 ID</li><li>id1：保留字段，目前暂未使用</li><li>ruleName：告警规则名称</li><li>alarmMessage：告警消息内容</li><li>startTime：告警时间，格式为时间戳</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 网络钩子，告警时触发</span></span>
<span class="line"><span style="color:#e1e4e8;">webhooks:</span></span>
<span class="line"><span style="color:#e1e4e8;">#  - http://127.0.0.1/notify/</span></span>
<span class="line"><span style="color:#e1e4e8;">#  - http://127.0.0.1/go-wechat/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 网络钩子，告警时触发</span></span>
<span class="line"><span style="color:#24292e;">webhooks:</span></span>
<span class="line"><span style="color:#24292e;">#  - http://127.0.0.1/notify/</span></span>
<span class="line"><span style="color:#24292e;">#  - http://127.0.0.1/go-wechat/</span></span></code></pre></div><h3 id="component-libraries-yml" tabindex="-1">component-libraries.yml <a class="header-anchor" href="#component-libraries-yml" aria-label="Permalink to &quot;component-libraries.yml&quot;">​</a></h3><blockquote><p>定义被监控应用程序中使用的所有组件库的名称和id。</p><p>二次开发，或者开发插件时使用</p><p>id必须唯一</p></blockquote><h3 id="endpoint-name-grouping-yml" tabindex="-1">endpoint-name-grouping.yml <a class="header-anchor" href="#endpoint-name-grouping-yml" aria-label="Permalink to &quot;endpoint-name-grouping.yml&quot;">​</a></h3><blockquote><p>这个分组文件提供了基于正则表达式的定义功能，可以通过更好的和将这些端点合并到一个组中 更有意义的聚合度量。</p></blockquote><h3 id="service-apdex-threshold-yml" tabindex="-1">service-apdex-threshold.yml <a class="header-anchor" href="#service-apdex-threshold-yml" aria-label="Permalink to &quot;service-apdex-threshold.yml&quot;">​</a></h3><blockquote><p>应用性能指数(APDEX)是基于设置阈值的响应时间度量。它表示令人满意与不满意的响应时间比率。响应时间是指从一个请求到返回的完整请求。</p></blockquote>`,26),p=[o];function t(c,i,r,d,_,h){return e(),a("div",null,p)}const T=s(l,[["render",t]]);export{u as __pageData,T as default};
