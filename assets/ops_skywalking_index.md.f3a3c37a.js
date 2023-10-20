import{_ as s,o as a,c as n,Q as t}from"./chunks/framework.54cab62e.js";const k=JSON.parse('{"title":"skywalking","description":"","frontmatter":{"title":"skywalking"},"headers":[],"relativePath":"ops/skywalking/index.md","filePath":"ops/skywalking/index.md","lastUpdated":1697773070000}'),e={name:"ops/skywalking/index.md"},l=t(`<h2 id="skywalking" tabindex="-1">skywalking <a class="header-anchor" href="#skywalking" aria-label="Permalink to &quot;skywalking&quot;">​</a></h2><h3 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h3><blockquote><p>SkyWalking 是观察性分析平台和应用性能管理系统。</p><p>提供分布式追踪、服务网格遥测分析、度量聚合和可视化一体化解决方案.</p><p>支持Java, .Net Core, PHP, NodeJS, Golang, LUA语言探针</p><p>支持Envoy + Istio构建的Service Mesh</p><p><a href="https://github.com/apache/skywalking" target="_blank" rel="noreferrer">apache/skywalking: APM, Application Performance Monitoring System (github.com)</a></p><p><a href="https://skywalking.apache.org/" target="_blank" rel="noreferrer">Apache SkyWalking</a></p></blockquote><h4 id="特性" tabindex="-1">特性 <a class="header-anchor" href="#特性" aria-label="Permalink to &quot;特性&quot;">​</a></h4><ul><li>多种监控手段，语言探针和service mesh</li><li>多语言自动探针，Java, .Net Core, PHP, NodeJS, Golang, LUA</li><li>轻量高效，不需要大数据</li><li>模块化，UI、存储、集群管理多种机制可选</li><li>支持告警</li><li>优秀的可视化方案</li></ul><h2 id="文件下载" tabindex="-1">文件下载 <a class="header-anchor" href="#文件下载" aria-label="Permalink to &quot;文件下载&quot;">​</a></h2><p><a href="https://skywalking.apache.org/downloads/" target="_blank" rel="noreferrer">Downloads | Apache SkyWalking</a></p><h2 id="文件夹介绍" tabindex="-1">文件夹介绍 <a class="header-anchor" href="#文件夹介绍" aria-label="Permalink to &quot;文件夹介绍&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">├── README.txt</span></span>
<span class="line"><span style="color:#e1e4e8;">├── agent													java客户端收集数据使用</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── activations								激活的插件		</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── bootstrap-plugins					也是插件，如需使用copy到plugins中</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── config										各种配置文件</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── logs											执行日志</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── optional-plugins					可选插件，如需使用copy到plugins中</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── optional-reporter-plugins	可选插件，如需使用copy到plugins中</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── plugins										实际上使用的插件</span></span>
<span class="line"><span style="color:#e1e4e8;">│   └── skywalking-agent.jar			执行文件 -javaagent:/skywalking/agent/skywalking-agent.jar</span></span>
<span class="line"><span style="color:#e1e4e8;">├── bin														服务端执行脚本</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── oapService.bat						</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── oapService.sh</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── oapServiceInit.bat				初始化数据库脚本</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── oapServiceInit.sh</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── oapServiceNoInit.bat</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── oapServiceNoInit.sh</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── startup.bat								启动脚本</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── startup.sh</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── webappService.bat					ui启动脚本</span></span>
<span class="line"><span style="color:#e1e4e8;">│   └── webappService.sh</span></span>
<span class="line"><span style="color:#e1e4e8;">├── config														各种配置文件</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── alarm-settings.yml						报警配置文件</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── application.yml								主配置文件，基本上都是改这个</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── component-libraries.yml				自定义组件配置文件</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── endpoint-name-grouping.yml		</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── envoy-metrics-rules</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── fetcher-prom-rules</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── gateways.yml</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── lal</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── log-mal-rules</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── log4j2.xml										日志配置文件</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── metadata-service-mapping.yaml</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── meter-analyzer-config</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── oal														oal配置文件</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── otel-oc-rules</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── service-apdex-threshold.yml</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── ui-initialized-templates</span></span>
<span class="line"><span style="color:#e1e4e8;">│   └── zabbix-rules</span></span>
<span class="line"><span style="color:#e1e4e8;">├── config-examples</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── alarm-settings.yml</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── lal.yaml</span></span>
<span class="line"><span style="color:#e1e4e8;">│   └── log-mal.yaml</span></span>
<span class="line"><span style="color:#e1e4e8;">├── oap-libs													依赖库，如需连接mysql则添加驱动</span></span>
<span class="line"><span style="color:#e1e4e8;">├── tools</span></span>
<span class="line"><span style="color:#e1e4e8;">│   └── profile-exporter</span></span>
<span class="line"><span style="color:#e1e4e8;">└── webapp														ui文件</span></span>
<span class="line"><span style="color:#e1e4e8;">    ├── skywalking-webapp.jar					</span></span>
<span class="line"><span style="color:#e1e4e8;">    └── webapp.yml										ui配置文件</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">├── README.txt</span></span>
<span class="line"><span style="color:#24292e;">├── agent													java客户端收集数据使用</span></span>
<span class="line"><span style="color:#24292e;">│   ├── activations								激活的插件		</span></span>
<span class="line"><span style="color:#24292e;">│   ├── bootstrap-plugins					也是插件，如需使用copy到plugins中</span></span>
<span class="line"><span style="color:#24292e;">│   ├── config										各种配置文件</span></span>
<span class="line"><span style="color:#24292e;">│   ├── logs											执行日志</span></span>
<span class="line"><span style="color:#24292e;">│   ├── optional-plugins					可选插件，如需使用copy到plugins中</span></span>
<span class="line"><span style="color:#24292e;">│   ├── optional-reporter-plugins	可选插件，如需使用copy到plugins中</span></span>
<span class="line"><span style="color:#24292e;">│   ├── plugins										实际上使用的插件</span></span>
<span class="line"><span style="color:#24292e;">│   └── skywalking-agent.jar			执行文件 -javaagent:/skywalking/agent/skywalking-agent.jar</span></span>
<span class="line"><span style="color:#24292e;">├── bin														服务端执行脚本</span></span>
<span class="line"><span style="color:#24292e;">│   ├── oapService.bat						</span></span>
<span class="line"><span style="color:#24292e;">│   ├── oapService.sh</span></span>
<span class="line"><span style="color:#24292e;">│   ├── oapServiceInit.bat				初始化数据库脚本</span></span>
<span class="line"><span style="color:#24292e;">│   ├── oapServiceInit.sh</span></span>
<span class="line"><span style="color:#24292e;">│   ├── oapServiceNoInit.bat</span></span>
<span class="line"><span style="color:#24292e;">│   ├── oapServiceNoInit.sh</span></span>
<span class="line"><span style="color:#24292e;">│   ├── startup.bat								启动脚本</span></span>
<span class="line"><span style="color:#24292e;">│   ├── startup.sh</span></span>
<span class="line"><span style="color:#24292e;">│   ├── webappService.bat					ui启动脚本</span></span>
<span class="line"><span style="color:#24292e;">│   └── webappService.sh</span></span>
<span class="line"><span style="color:#24292e;">├── config														各种配置文件</span></span>
<span class="line"><span style="color:#24292e;">│   ├── alarm-settings.yml						报警配置文件</span></span>
<span class="line"><span style="color:#24292e;">│   ├── application.yml								主配置文件，基本上都是改这个</span></span>
<span class="line"><span style="color:#24292e;">│   ├── component-libraries.yml				自定义组件配置文件</span></span>
<span class="line"><span style="color:#24292e;">│   ├── endpoint-name-grouping.yml		</span></span>
<span class="line"><span style="color:#24292e;">│   ├── envoy-metrics-rules</span></span>
<span class="line"><span style="color:#24292e;">│   ├── fetcher-prom-rules</span></span>
<span class="line"><span style="color:#24292e;">│   ├── gateways.yml</span></span>
<span class="line"><span style="color:#24292e;">│   ├── lal</span></span>
<span class="line"><span style="color:#24292e;">│   ├── log-mal-rules</span></span>
<span class="line"><span style="color:#24292e;">│   ├── log4j2.xml										日志配置文件</span></span>
<span class="line"><span style="color:#24292e;">│   ├── metadata-service-mapping.yaml</span></span>
<span class="line"><span style="color:#24292e;">│   ├── meter-analyzer-config</span></span>
<span class="line"><span style="color:#24292e;">│   ├── oal														oal配置文件</span></span>
<span class="line"><span style="color:#24292e;">│   ├── otel-oc-rules</span></span>
<span class="line"><span style="color:#24292e;">│   ├── service-apdex-threshold.yml</span></span>
<span class="line"><span style="color:#24292e;">│   ├── ui-initialized-templates</span></span>
<span class="line"><span style="color:#24292e;">│   └── zabbix-rules</span></span>
<span class="line"><span style="color:#24292e;">├── config-examples</span></span>
<span class="line"><span style="color:#24292e;">│   ├── alarm-settings.yml</span></span>
<span class="line"><span style="color:#24292e;">│   ├── lal.yaml</span></span>
<span class="line"><span style="color:#24292e;">│   └── log-mal.yaml</span></span>
<span class="line"><span style="color:#24292e;">├── oap-libs													依赖库，如需连接mysql则添加驱动</span></span>
<span class="line"><span style="color:#24292e;">├── tools</span></span>
<span class="line"><span style="color:#24292e;">│   └── profile-exporter</span></span>
<span class="line"><span style="color:#24292e;">└── webapp														ui文件</span></span>
<span class="line"><span style="color:#24292e;">    ├── skywalking-webapp.jar					</span></span>
<span class="line"><span style="color:#24292e;">    └── webapp.yml										ui配置文件</span></span></code></pre></div>`,9),p=[l];function o(c,i,r,y,g,m){return a(),n("div",null,p)}const u=s(e,[["render",o]]);export{k as __pageData,u as default};
