import{_ as n,o as a,c as e,Q as s,k as l}from"./chunks/framework.54cab62e.js";const v=JSON.parse('{"title":"源码分析","description":"","frontmatter":{"title":"源码分析"},"headers":[],"relativePath":"ops/skywalking/source-code.md","filePath":"ops/skywalking/source-code.md","lastUpdated":1697773070000}'),p={name:"ops/skywalking/source-code.md"},t=s(`<h3 id="oap-server" tabindex="-1">oap server <a class="header-anchor" href="#oap-server" aria-label="Permalink to &quot;oap server&quot;">​</a></h3><blockquote><p><a href="https://github.com/apache/skywalking" target="_blank" rel="noreferrer">apache/skywalking: APM, Application Performance Monitoring System (github.com)</a></p><p><a href="https://skywalking.apache.org/" target="_blank" rel="noreferrer">Apache SkyWalking</a></p><p>服务端主流程源码分析。</p></blockquote><h4 id="目录结构" tabindex="-1">目录结构 <a class="header-anchor" href="#目录结构" aria-label="Permalink to &quot;目录结构&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">oap-server</span></span>
<span class="line"><span style="color:#e1e4e8;">├── analyzer									数据分析模块</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── agent-analyzer				分析客户端发送的jvm，指标，trace 数据</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── event-analyzer				分析事件</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── log-analyzer					分析日志</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── meter-analyzer				分析特定指标</span></span>
<span class="line"><span style="color:#e1e4e8;">│   └── pom.xml</span></span>
<span class="line"><span style="color:#e1e4e8;">├── exporter</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── pom.xml</span></span>
<span class="line"><span style="color:#e1e4e8;">│   └── src</span></span>
<span class="line"><span style="color:#e1e4e8;">├── microbench								基准测试</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── pom.xml</span></span>
<span class="line"><span style="color:#e1e4e8;">│   └── src</span></span>
<span class="line"><span style="color:#e1e4e8;">├── oal-grammar								oal 相关</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── pom.xml</span></span>
<span class="line"><span style="color:#e1e4e8;">│   └── src</span></span>
<span class="line"><span style="color:#e1e4e8;">├── oal-rt</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── pom.xml</span></span>
<span class="line"><span style="color:#e1e4e8;">│   └── src</span></span>
<span class="line"><span style="color:#e1e4e8;">├── pom.xml</span></span>
<span class="line"><span style="color:#e1e4e8;">├── server-alarm-plugin				告警插件</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── pom.xml</span></span>
<span class="line"><span style="color:#e1e4e8;">│   └── src</span></span>
<span class="line"><span style="color:#e1e4e8;">├── server-cluster-plugin			集群相关</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── cluster-consul-plugin</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── cluster-etcd-plugin</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── cluster-kubernetes-plugin</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── cluster-nacos-plugin</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── cluster-standalone-plugin</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── cluster-zookeeper-plugin</span></span>
<span class="line"><span style="color:#e1e4e8;">│   └── pom.xml</span></span>
<span class="line"><span style="color:#e1e4e8;">├── server-configuration			动态配置相关</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── configuration-api</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── configuration-apollo</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── configuration-consul</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── configuration-etcd</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── configuration-k8s-configmap</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── configuration-nacos</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── configuration-zookeeper</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── grpc-configuration-sync</span></span>
<span class="line"><span style="color:#e1e4e8;">│   └── pom.xml</span></span>
<span class="line"><span style="color:#e1e4e8;">├── server-core								核心模块</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── pom.xml</span></span>
<span class="line"><span style="color:#e1e4e8;">│   └── src</span></span>
<span class="line"><span style="color:#e1e4e8;">├── server-fetcher-plugin			数据接收模块，可以从别的地方获取数据</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── kafka-fetcher-plugin</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── pom.xml</span></span>
<span class="line"><span style="color:#e1e4e8;">│   └── prometheus-fetcher-plugin</span></span>
<span class="line"><span style="color:#e1e4e8;">├── server-health-checker			健康检查</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── pom.xml</span></span>
<span class="line"><span style="color:#e1e4e8;">│   └── src</span></span>
<span class="line"><span style="color:#e1e4e8;">├── server-library						</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── library-client									各种客户端</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── library-datacarrier-queue				一个数据队列</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── library-elasticsearch-client		es 客户端</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── library-module									module 核心模块</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── library-server									jetty 服务，grpc 服务</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── library-util										各种工具类</span></span>
<span class="line"><span style="color:#e1e4e8;">│   └── pom.xml</span></span>
<span class="line"><span style="color:#e1e4e8;">├── server-query-plugin</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── pom.xml</span></span>
<span class="line"><span style="color:#e1e4e8;">│   └── query-graphql-plugin						前端 ui graphql查询接口</span></span>
<span class="line"><span style="color:#e1e4e8;">├── server-receiver-plugin							各种接收数据</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── configuration-discovery-receiver-plugin</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── envoy-metrics-receiver-plugin</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── otel-receiver-plugin</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── pom.xml</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── receiver-proto</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── skywalking-browser-receiver-plugin</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── skywalking-clr-receiver-plugin</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── skywalking-ebpf-receiver-plugin</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── skywalking-event-receiver-plugin</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── skywalking-jvm-receiver-plugin</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── skywalking-log-recevier-plugin</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── skywalking-management-receiver-plugin</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── skywalking-mesh-receiver-plugin</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── skywalking-meter-receiver-plugin</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── skywalking-profile-receiver-plugin</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── skywalking-sharing-server-plugin</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── skywalking-trace-receiver-plugin</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── skywalking-zabbix-receiver-plugin</span></span>
<span class="line"><span style="color:#e1e4e8;">│   └── zipkin-receiver-plugin</span></span>
<span class="line"><span style="color:#e1e4e8;">├── server-starter										启动类</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── pom.xml</span></span>
<span class="line"><span style="color:#e1e4e8;">│   └── src</span></span>
<span class="line"><span style="color:#e1e4e8;">├── server-storage-plugin							数据存储模块</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── pom.xml</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── storage-elasticsearch-plugin</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── storage-influxdb-plugin</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── storage-iotdb-plugin</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── storage-jdbc-hikaricp-plugin</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── storage-tidb-plugin</span></span>
<span class="line"><span style="color:#e1e4e8;">│   └── storage-zipkin-elasticsearch-plugin</span></span>
<span class="line"><span style="color:#e1e4e8;">├── server-telemetry</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── pom.xml</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── telemetry-api</span></span>
<span class="line"><span style="color:#e1e4e8;">│   └── telemetry-prometheus</span></span>
<span class="line"><span style="color:#e1e4e8;">├── server-testing</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── pom.xml</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── server-testing.iml</span></span>
<span class="line"><span style="color:#e1e4e8;">│   └── src</span></span>
<span class="line"><span style="color:#e1e4e8;">└── server-tools</span></span>
<span class="line"><span style="color:#e1e4e8;">    ├── pom.xml</span></span>
<span class="line"><span style="color:#e1e4e8;">    └── profile-exporter</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">oap-server</span></span>
<span class="line"><span style="color:#24292e;">├── analyzer									数据分析模块</span></span>
<span class="line"><span style="color:#24292e;">│   ├── agent-analyzer				分析客户端发送的jvm，指标，trace 数据</span></span>
<span class="line"><span style="color:#24292e;">│   ├── event-analyzer				分析事件</span></span>
<span class="line"><span style="color:#24292e;">│   ├── log-analyzer					分析日志</span></span>
<span class="line"><span style="color:#24292e;">│   ├── meter-analyzer				分析特定指标</span></span>
<span class="line"><span style="color:#24292e;">│   └── pom.xml</span></span>
<span class="line"><span style="color:#24292e;">├── exporter</span></span>
<span class="line"><span style="color:#24292e;">│   ├── pom.xml</span></span>
<span class="line"><span style="color:#24292e;">│   └── src</span></span>
<span class="line"><span style="color:#24292e;">├── microbench								基准测试</span></span>
<span class="line"><span style="color:#24292e;">│   ├── pom.xml</span></span>
<span class="line"><span style="color:#24292e;">│   └── src</span></span>
<span class="line"><span style="color:#24292e;">├── oal-grammar								oal 相关</span></span>
<span class="line"><span style="color:#24292e;">│   ├── pom.xml</span></span>
<span class="line"><span style="color:#24292e;">│   └── src</span></span>
<span class="line"><span style="color:#24292e;">├── oal-rt</span></span>
<span class="line"><span style="color:#24292e;">│   ├── pom.xml</span></span>
<span class="line"><span style="color:#24292e;">│   └── src</span></span>
<span class="line"><span style="color:#24292e;">├── pom.xml</span></span>
<span class="line"><span style="color:#24292e;">├── server-alarm-plugin				告警插件</span></span>
<span class="line"><span style="color:#24292e;">│   ├── pom.xml</span></span>
<span class="line"><span style="color:#24292e;">│   └── src</span></span>
<span class="line"><span style="color:#24292e;">├── server-cluster-plugin			集群相关</span></span>
<span class="line"><span style="color:#24292e;">│   ├── cluster-consul-plugin</span></span>
<span class="line"><span style="color:#24292e;">│   ├── cluster-etcd-plugin</span></span>
<span class="line"><span style="color:#24292e;">│   ├── cluster-kubernetes-plugin</span></span>
<span class="line"><span style="color:#24292e;">│   ├── cluster-nacos-plugin</span></span>
<span class="line"><span style="color:#24292e;">│   ├── cluster-standalone-plugin</span></span>
<span class="line"><span style="color:#24292e;">│   ├── cluster-zookeeper-plugin</span></span>
<span class="line"><span style="color:#24292e;">│   └── pom.xml</span></span>
<span class="line"><span style="color:#24292e;">├── server-configuration			动态配置相关</span></span>
<span class="line"><span style="color:#24292e;">│   ├── configuration-api</span></span>
<span class="line"><span style="color:#24292e;">│   ├── configuration-apollo</span></span>
<span class="line"><span style="color:#24292e;">│   ├── configuration-consul</span></span>
<span class="line"><span style="color:#24292e;">│   ├── configuration-etcd</span></span>
<span class="line"><span style="color:#24292e;">│   ├── configuration-k8s-configmap</span></span>
<span class="line"><span style="color:#24292e;">│   ├── configuration-nacos</span></span>
<span class="line"><span style="color:#24292e;">│   ├── configuration-zookeeper</span></span>
<span class="line"><span style="color:#24292e;">│   ├── grpc-configuration-sync</span></span>
<span class="line"><span style="color:#24292e;">│   └── pom.xml</span></span>
<span class="line"><span style="color:#24292e;">├── server-core								核心模块</span></span>
<span class="line"><span style="color:#24292e;">│   ├── pom.xml</span></span>
<span class="line"><span style="color:#24292e;">│   └── src</span></span>
<span class="line"><span style="color:#24292e;">├── server-fetcher-plugin			数据接收模块，可以从别的地方获取数据</span></span>
<span class="line"><span style="color:#24292e;">│   ├── kafka-fetcher-plugin</span></span>
<span class="line"><span style="color:#24292e;">│   ├── pom.xml</span></span>
<span class="line"><span style="color:#24292e;">│   └── prometheus-fetcher-plugin</span></span>
<span class="line"><span style="color:#24292e;">├── server-health-checker			健康检查</span></span>
<span class="line"><span style="color:#24292e;">│   ├── pom.xml</span></span>
<span class="line"><span style="color:#24292e;">│   └── src</span></span>
<span class="line"><span style="color:#24292e;">├── server-library						</span></span>
<span class="line"><span style="color:#24292e;">│   ├── library-client									各种客户端</span></span>
<span class="line"><span style="color:#24292e;">│   ├── library-datacarrier-queue				一个数据队列</span></span>
<span class="line"><span style="color:#24292e;">│   ├── library-elasticsearch-client		es 客户端</span></span>
<span class="line"><span style="color:#24292e;">│   ├── library-module									module 核心模块</span></span>
<span class="line"><span style="color:#24292e;">│   ├── library-server									jetty 服务，grpc 服务</span></span>
<span class="line"><span style="color:#24292e;">│   ├── library-util										各种工具类</span></span>
<span class="line"><span style="color:#24292e;">│   └── pom.xml</span></span>
<span class="line"><span style="color:#24292e;">├── server-query-plugin</span></span>
<span class="line"><span style="color:#24292e;">│   ├── pom.xml</span></span>
<span class="line"><span style="color:#24292e;">│   └── query-graphql-plugin						前端 ui graphql查询接口</span></span>
<span class="line"><span style="color:#24292e;">├── server-receiver-plugin							各种接收数据</span></span>
<span class="line"><span style="color:#24292e;">│   ├── configuration-discovery-receiver-plugin</span></span>
<span class="line"><span style="color:#24292e;">│   ├── envoy-metrics-receiver-plugin</span></span>
<span class="line"><span style="color:#24292e;">│   ├── otel-receiver-plugin</span></span>
<span class="line"><span style="color:#24292e;">│   ├── pom.xml</span></span>
<span class="line"><span style="color:#24292e;">│   ├── receiver-proto</span></span>
<span class="line"><span style="color:#24292e;">│   ├── skywalking-browser-receiver-plugin</span></span>
<span class="line"><span style="color:#24292e;">│   ├── skywalking-clr-receiver-plugin</span></span>
<span class="line"><span style="color:#24292e;">│   ├── skywalking-ebpf-receiver-plugin</span></span>
<span class="line"><span style="color:#24292e;">│   ├── skywalking-event-receiver-plugin</span></span>
<span class="line"><span style="color:#24292e;">│   ├── skywalking-jvm-receiver-plugin</span></span>
<span class="line"><span style="color:#24292e;">│   ├── skywalking-log-recevier-plugin</span></span>
<span class="line"><span style="color:#24292e;">│   ├── skywalking-management-receiver-plugin</span></span>
<span class="line"><span style="color:#24292e;">│   ├── skywalking-mesh-receiver-plugin</span></span>
<span class="line"><span style="color:#24292e;">│   ├── skywalking-meter-receiver-plugin</span></span>
<span class="line"><span style="color:#24292e;">│   ├── skywalking-profile-receiver-plugin</span></span>
<span class="line"><span style="color:#24292e;">│   ├── skywalking-sharing-server-plugin</span></span>
<span class="line"><span style="color:#24292e;">│   ├── skywalking-trace-receiver-plugin</span></span>
<span class="line"><span style="color:#24292e;">│   ├── skywalking-zabbix-receiver-plugin</span></span>
<span class="line"><span style="color:#24292e;">│   └── zipkin-receiver-plugin</span></span>
<span class="line"><span style="color:#24292e;">├── server-starter										启动类</span></span>
<span class="line"><span style="color:#24292e;">│   ├── pom.xml</span></span>
<span class="line"><span style="color:#24292e;">│   └── src</span></span>
<span class="line"><span style="color:#24292e;">├── server-storage-plugin							数据存储模块</span></span>
<span class="line"><span style="color:#24292e;">│   ├── pom.xml</span></span>
<span class="line"><span style="color:#24292e;">│   ├── storage-elasticsearch-plugin</span></span>
<span class="line"><span style="color:#24292e;">│   ├── storage-influxdb-plugin</span></span>
<span class="line"><span style="color:#24292e;">│   ├── storage-iotdb-plugin</span></span>
<span class="line"><span style="color:#24292e;">│   ├── storage-jdbc-hikaricp-plugin</span></span>
<span class="line"><span style="color:#24292e;">│   ├── storage-tidb-plugin</span></span>
<span class="line"><span style="color:#24292e;">│   └── storage-zipkin-elasticsearch-plugin</span></span>
<span class="line"><span style="color:#24292e;">├── server-telemetry</span></span>
<span class="line"><span style="color:#24292e;">│   ├── pom.xml</span></span>
<span class="line"><span style="color:#24292e;">│   ├── telemetry-api</span></span>
<span class="line"><span style="color:#24292e;">│   └── telemetry-prometheus</span></span>
<span class="line"><span style="color:#24292e;">├── server-testing</span></span>
<span class="line"><span style="color:#24292e;">│   ├── pom.xml</span></span>
<span class="line"><span style="color:#24292e;">│   ├── server-testing.iml</span></span>
<span class="line"><span style="color:#24292e;">│   └── src</span></span>
<span class="line"><span style="color:#24292e;">└── server-tools</span></span>
<span class="line"><span style="color:#24292e;">    ├── pom.xml</span></span>
<span class="line"><span style="color:#24292e;">    └── profile-exporter</span></span></code></pre></div><h5 id="主要类以及接口" tabindex="-1">主要类以及接口 <a class="header-anchor" href="#主要类以及接口" aria-label="Permalink to &quot;主要类以及接口&quot;">​</a></h5><ul><li>OAPServerStartUp：启动类</li><li>ApplicationConfigLoader：加载配置</li><li>ModuleManager：加载各种模块</li><li>ModuleProvider：提供服务类，主要通过 <code>prepare</code>，<code>start</code>，<code>notifyAfterCompleted</code>实现各种个功能</li><li>ModuleConfig：各种插件配置类</li><li>ISource：数据对象</li><li>GRPCHandlerRegister：GRPC 处理器注册</li><li>JettyHandlerRegister：jetty 处理器注册</li></ul><h3 id="java-agent" tabindex="-1">Java agent <a class="header-anchor" href="#java-agent" aria-label="Permalink to &quot;Java agent&quot;">​</a></h3><blockquote><p>Java 客户端,搜集各种数据发送到服务端。</p><p><a href="https://github.com/apache/skywalking-java" target="_blank" rel="noreferrer">apache/skywalking-java: The Java agent for Apache SkyWalking (github.com)</a></p></blockquote><h4 id="目录结构-1" tabindex="-1">目录结构 <a class="header-anchor" href="#目录结构-1" aria-label="Permalink to &quot;目录结构&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">.</span></span>
<span class="line"><span style="color:#e1e4e8;">├── apm-application-toolkit  				一些工具类，仅仅是接口，具体实现在 apm-toolkit-activation 中</span></span>
<span class="line"><span style="color:#e1e4e8;">├── apm-protocol										Protocol协议定义了各种数据格式，以及通信格式等</span></span>
<span class="line"><span style="color:#e1e4e8;">├── apm-sniffer											核心代码</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── apm-agent										插件入口</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── apm-agent-core							核心代码</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── apm-sdk-plugin							所有插件的父项目，以及大部分插件</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── apm-test-tools							</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── apm-toolkit-activation			apm-application-toolkit 的具体实现</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── bootstrap-plugins</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── config</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── optional-plugins</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── optional-reporter-plugins</span></span>
<span class="line"><span style="color:#e1e4e8;">├── changes													变更记录</span></span>
<span class="line"><span style="color:#e1e4e8;">├── docs														文档</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.</span></span>
<span class="line"><span style="color:#24292e;">├── apm-application-toolkit  				一些工具类，仅仅是接口，具体实现在 apm-toolkit-activation 中</span></span>
<span class="line"><span style="color:#24292e;">├── apm-protocol										Protocol协议定义了各种数据格式，以及通信格式等</span></span>
<span class="line"><span style="color:#24292e;">├── apm-sniffer											核心代码</span></span>
<span class="line"><span style="color:#24292e;">│   ├── apm-agent										插件入口</span></span>
<span class="line"><span style="color:#24292e;">│   ├── apm-agent-core							核心代码</span></span>
<span class="line"><span style="color:#24292e;">│   ├── apm-sdk-plugin							所有插件的父项目，以及大部分插件</span></span>
<span class="line"><span style="color:#24292e;">│   ├── apm-test-tools							</span></span>
<span class="line"><span style="color:#24292e;">│   ├── apm-toolkit-activation			apm-application-toolkit 的具体实现</span></span>
<span class="line"><span style="color:#24292e;">│   ├── bootstrap-plugins</span></span>
<span class="line"><span style="color:#24292e;">│   ├── config</span></span>
<span class="line"><span style="color:#24292e;">│   ├── optional-plugins</span></span>
<span class="line"><span style="color:#24292e;">│   ├── optional-reporter-plugins</span></span>
<span class="line"><span style="color:#24292e;">├── changes													变更记录</span></span>
<span class="line"><span style="color:#24292e;">├── docs														文档</span></span></code></pre></div><h4 id="流程图" tabindex="-1">流程图 <a class="header-anchor" href="#流程图" aria-label="Permalink to &quot;流程图&quot;">​</a></h4>`,11),o=l("iframe",{id:"embed_dom",name:"embed_dom",frameborder:"0",style:{display:"block",width:"725px",height:"245px"},src:"https://www.processon.com/embed/621347b66376897c8c8308a3"},null,-1),c=s('<h4 id="主要类" tabindex="-1">主要类 <a class="header-anchor" href="#主要类" aria-label="Permalink to &quot;主要类&quot;">​</a></h4><ul><li>SkyWalkingAgent：启动类</li><li>Config：所有配置都在这个类中。</li><li>BootService：所有服务的顶级接口</li><li>TracingContext：核心类，主要用来创建 span</li><li>GlobalIdGenerator：生成 <code>traceId</code> ，第一部分为<code>实例 id</code>，第二部分为<code>线程 id</code>，第三部分为时间戳（毫秒）+当前线程中的序列号[0,9999]</li><li>AbstractSpan：各种插件使用</li></ul><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h2>',3),r=[t,o,c];function i(y,g,u,m,k,d){return a(),e("div",null,r)}const b=n(p,[["render",i]]);export{v as __pageData,b as default};
