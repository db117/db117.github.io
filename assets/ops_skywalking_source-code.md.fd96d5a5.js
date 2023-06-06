import{_ as n,o as a,c as l,V as s,z as e}from"./chunks/framework.7cbf217e.js";const d=JSON.parse('{"title":"源码分析","description":"","frontmatter":{"title":"源码分析"},"headers":[],"relativePath":"ops/skywalking/source-code.md","filePath":"ops/skywalking/source-code.md","lastUpdated":1686036827000}'),p={name:"ops/skywalking/source-code.md"},t=s(`<h3 id="oap-server" tabindex="-1">oap server <a class="header-anchor" href="#oap-server" aria-label="Permalink to &quot;oap server&quot;">​</a></h3><blockquote><p><a href="https://github.com/apache/skywalking" target="_blank" rel="noreferrer">apache/skywalking: APM, Application Performance Monitoring System (github.com)</a></p><p><a href="https://skywalking.apache.org/" target="_blank" rel="noreferrer">Apache SkyWalking</a></p><p>服务端主流程源码分析。</p></blockquote><h4 id="目录结构" tabindex="-1">目录结构 <a class="header-anchor" href="#目录结构" aria-label="Permalink to &quot;目录结构&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">oap-server</span></span>
<span class="line"><span style="color:#A6ACCD;">├── analyzer									数据分析模块</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── agent-analyzer				分析客户端发送的jvm，指标，trace 数据</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── event-analyzer				分析事件</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── log-analyzer					分析日志</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── meter-analyzer				分析特定指标</span></span>
<span class="line"><span style="color:#A6ACCD;">│   └── pom.xml</span></span>
<span class="line"><span style="color:#A6ACCD;">├── exporter</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── pom.xml</span></span>
<span class="line"><span style="color:#A6ACCD;">│   └── src</span></span>
<span class="line"><span style="color:#A6ACCD;">├── microbench								基准测试</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── pom.xml</span></span>
<span class="line"><span style="color:#A6ACCD;">│   └── src</span></span>
<span class="line"><span style="color:#A6ACCD;">├── oal-grammar								oal 相关</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── pom.xml</span></span>
<span class="line"><span style="color:#A6ACCD;">│   └── src</span></span>
<span class="line"><span style="color:#A6ACCD;">├── oal-rt</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── pom.xml</span></span>
<span class="line"><span style="color:#A6ACCD;">│   └── src</span></span>
<span class="line"><span style="color:#A6ACCD;">├── pom.xml</span></span>
<span class="line"><span style="color:#A6ACCD;">├── server-alarm-plugin				告警插件</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── pom.xml</span></span>
<span class="line"><span style="color:#A6ACCD;">│   └── src</span></span>
<span class="line"><span style="color:#A6ACCD;">├── server-cluster-plugin			集群相关</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── cluster-consul-plugin</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── cluster-etcd-plugin</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── cluster-kubernetes-plugin</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── cluster-nacos-plugin</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── cluster-standalone-plugin</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── cluster-zookeeper-plugin</span></span>
<span class="line"><span style="color:#A6ACCD;">│   └── pom.xml</span></span>
<span class="line"><span style="color:#A6ACCD;">├── server-configuration			动态配置相关</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── configuration-api</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── configuration-apollo</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── configuration-consul</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── configuration-etcd</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── configuration-k8s-configmap</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── configuration-nacos</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── configuration-zookeeper</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── grpc-configuration-sync</span></span>
<span class="line"><span style="color:#A6ACCD;">│   └── pom.xml</span></span>
<span class="line"><span style="color:#A6ACCD;">├── server-core								核心模块</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── pom.xml</span></span>
<span class="line"><span style="color:#A6ACCD;">│   └── src</span></span>
<span class="line"><span style="color:#A6ACCD;">├── server-fetcher-plugin			数据接收模块，可以从别的地方获取数据</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── kafka-fetcher-plugin</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── pom.xml</span></span>
<span class="line"><span style="color:#A6ACCD;">│   └── prometheus-fetcher-plugin</span></span>
<span class="line"><span style="color:#A6ACCD;">├── server-health-checker			健康检查</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── pom.xml</span></span>
<span class="line"><span style="color:#A6ACCD;">│   └── src</span></span>
<span class="line"><span style="color:#A6ACCD;">├── server-library						</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── library-client									各种客户端</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── library-datacarrier-queue				一个数据队列</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── library-elasticsearch-client		es 客户端</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── library-module									module 核心模块</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── library-server									jetty 服务，grpc 服务</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── library-util										各种工具类</span></span>
<span class="line"><span style="color:#A6ACCD;">│   └── pom.xml</span></span>
<span class="line"><span style="color:#A6ACCD;">├── server-query-plugin</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── pom.xml</span></span>
<span class="line"><span style="color:#A6ACCD;">│   └── query-graphql-plugin						前端 ui graphql查询接口</span></span>
<span class="line"><span style="color:#A6ACCD;">├── server-receiver-plugin							各种接收数据</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── configuration-discovery-receiver-plugin</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── envoy-metrics-receiver-plugin</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── otel-receiver-plugin</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── pom.xml</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── receiver-proto</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── skywalking-browser-receiver-plugin</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── skywalking-clr-receiver-plugin</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── skywalking-ebpf-receiver-plugin</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── skywalking-event-receiver-plugin</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── skywalking-jvm-receiver-plugin</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── skywalking-log-recevier-plugin</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── skywalking-management-receiver-plugin</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── skywalking-mesh-receiver-plugin</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── skywalking-meter-receiver-plugin</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── skywalking-profile-receiver-plugin</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── skywalking-sharing-server-plugin</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── skywalking-trace-receiver-plugin</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── skywalking-zabbix-receiver-plugin</span></span>
<span class="line"><span style="color:#A6ACCD;">│   └── zipkin-receiver-plugin</span></span>
<span class="line"><span style="color:#A6ACCD;">├── server-starter										启动类</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── pom.xml</span></span>
<span class="line"><span style="color:#A6ACCD;">│   └── src</span></span>
<span class="line"><span style="color:#A6ACCD;">├── server-storage-plugin							数据存储模块</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── pom.xml</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── storage-elasticsearch-plugin</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── storage-influxdb-plugin</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── storage-iotdb-plugin</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── storage-jdbc-hikaricp-plugin</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── storage-tidb-plugin</span></span>
<span class="line"><span style="color:#A6ACCD;">│   └── storage-zipkin-elasticsearch-plugin</span></span>
<span class="line"><span style="color:#A6ACCD;">├── server-telemetry</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── pom.xml</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── telemetry-api</span></span>
<span class="line"><span style="color:#A6ACCD;">│   └── telemetry-prometheus</span></span>
<span class="line"><span style="color:#A6ACCD;">├── server-testing</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── pom.xml</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── server-testing.iml</span></span>
<span class="line"><span style="color:#A6ACCD;">│   └── src</span></span>
<span class="line"><span style="color:#A6ACCD;">└── server-tools</span></span>
<span class="line"><span style="color:#A6ACCD;">    ├── pom.xml</span></span>
<span class="line"><span style="color:#A6ACCD;">    └── profile-exporter</span></span></code></pre></div><h5 id="主要类以及接口" tabindex="-1">主要类以及接口 <a class="header-anchor" href="#主要类以及接口" aria-label="Permalink to &quot;主要类以及接口&quot;">​</a></h5><ul><li>OAPServerStartUp：启动类</li><li>ApplicationConfigLoader：加载配置</li><li>ModuleManager：加载各种模块</li><li>ModuleProvider：提供服务类，主要通过 <code>prepare</code>，<code>start</code>，<code>notifyAfterCompleted</code>实现各种个功能</li><li>ModuleConfig：各种插件配置类</li><li>ISource：数据对象</li><li>GRPCHandlerRegister：GRPC 处理器注册</li><li>JettyHandlerRegister：jetty 处理器注册</li></ul><h3 id="java-agent" tabindex="-1">Java agent <a class="header-anchor" href="#java-agent" aria-label="Permalink to &quot;Java agent&quot;">​</a></h3><blockquote><p>Java 客户端,搜集各种数据发送到服务端。</p><p><a href="https://github.com/apache/skywalking-java" target="_blank" rel="noreferrer">apache/skywalking-java: The Java agent for Apache SkyWalking (github.com)</a></p></blockquote><h4 id="目录结构-1" tabindex="-1">目录结构 <a class="header-anchor" href="#目录结构-1" aria-label="Permalink to &quot;目录结构&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">├── apm-application-toolkit  				一些工具类，仅仅是接口，具体实现在 apm-toolkit-activation 中</span></span>
<span class="line"><span style="color:#A6ACCD;">├── apm-protocol										Protocol协议定义了各种数据格式，以及通信格式等</span></span>
<span class="line"><span style="color:#A6ACCD;">├── apm-sniffer											核心代码</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── apm-agent										插件入口</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── apm-agent-core							核心代码</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── apm-sdk-plugin							所有插件的父项目，以及大部分插件</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── apm-test-tools							</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── apm-toolkit-activation			apm-application-toolkit 的具体实现</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── bootstrap-plugins</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── config</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── optional-plugins</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── optional-reporter-plugins</span></span>
<span class="line"><span style="color:#A6ACCD;">├── changes													变更记录</span></span>
<span class="line"><span style="color:#A6ACCD;">├── docs														文档</span></span></code></pre></div><h4 id="流程图" tabindex="-1">流程图 <a class="header-anchor" href="#流程图" aria-label="Permalink to &quot;流程图&quot;">​</a></h4>`,11),o=e("iframe",{id:"embed_dom",name:"embed_dom",frameborder:"0",style:{display:"block",width:"725px",height:"245px"},src:"https://www.processon.com/embed/621347b66376897c8c8308a3"},null,-1),r=s('<h4 id="主要类" tabindex="-1">主要类 <a class="header-anchor" href="#主要类" aria-label="Permalink to &quot;主要类&quot;">​</a></h4><ul><li>SkyWalkingAgent：启动类</li><li>Config：所有配置都在这个类中。</li><li>BootService：所有服务的顶级接口</li><li>TracingContext：核心类，主要用来创建 span</li><li>GlobalIdGenerator：生成 <code>traceId</code> ，第一部分为<code>实例 id</code>，第二部分为<code>线程 id</code>，第三部分为时间戳（毫秒）+当前线程中的序列号[0,9999]</li><li>AbstractSpan：各种插件使用</li></ul><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h2>',3),c=[t,o,r];function i(C,A,y,g,D,u){return a(),l("div",null,c)}const h=n(p,[["render",i]]);export{d as __pageData,h as default};
