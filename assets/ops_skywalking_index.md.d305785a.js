import{_ as s,c as a,o as n,a as t}from"./app.5745f82f.js";const h=JSON.parse('{"title":"skywalking","description":"","frontmatter":{"title":"skywalking"},"headers":[{"level":2,"title":"skywalking","slug":"skywalking","link":"#skywalking","children":[{"level":3,"title":"简介","slug":"简介","link":"#简介","children":[]}]},{"level":2,"title":"文件下载","slug":"文件下载","link":"#文件下载","children":[]},{"level":2,"title":"文件夹介绍","slug":"文件夹介绍","link":"#文件夹介绍","children":[]}],"relativePath":"ops/skywalking/index.md","lastUpdated":1677837613000}'),l={name:"ops/skywalking/index.md"},e=t(`<h2 id="skywalking" tabindex="-1">skywalking <a class="header-anchor" href="#skywalking" aria-hidden="true">#</a></h2><h3 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-hidden="true">#</a></h3><blockquote><p>SkyWalking 是观察性分析平台和应用性能管理系统。</p><p>提供分布式追踪、服务网格遥测分析、度量聚合和可视化一体化解决方案.</p><p>支持Java, .Net Core, PHP, NodeJS, Golang, LUA语言探针</p><p>支持Envoy + Istio构建的Service Mesh</p><p><a href="https://github.com/apache/skywalking" target="_blank" rel="noreferrer">apache/skywalking: APM, Application Performance Monitoring System (github.com)</a></p><p><a href="https://skywalking.apache.org/" target="_blank" rel="noreferrer">Apache SkyWalking</a></p></blockquote><h4 id="特性" tabindex="-1">特性 <a class="header-anchor" href="#特性" aria-hidden="true">#</a></h4><ul><li>多种监控手段，语言探针和service mesh</li><li>多语言自动探针，Java, .Net Core, PHP, NodeJS, Golang, LUA</li><li>轻量高效，不需要大数据</li><li>模块化，UI、存储、集群管理多种机制可选</li><li>支持告警</li><li>优秀的可视化方案</li></ul><h2 id="文件下载" tabindex="-1">文件下载 <a class="header-anchor" href="#文件下载" aria-hidden="true">#</a></h2><p><a href="https://skywalking.apache.org/downloads/" target="_blank" rel="noreferrer">Downloads | Apache SkyWalking</a></p><h2 id="文件夹介绍" tabindex="-1">文件夹介绍 <a class="header-anchor" href="#文件夹介绍" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">├── README.txt</span></span>
<span class="line"><span style="color:#A6ACCD;">├── agent													java客户端收集数据使用</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── activations								激活的插件		</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── bootstrap-plugins					也是插件，如需使用copy到plugins中</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── config										各种配置文件</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── logs											执行日志</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── optional-plugins					可选插件，如需使用copy到plugins中</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── optional-reporter-plugins	可选插件，如需使用copy到plugins中</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── plugins										实际上使用的插件</span></span>
<span class="line"><span style="color:#A6ACCD;">│   └── skywalking-agent.jar			执行文件 -javaagent:/skywalking/agent/skywalking-agent.jar</span></span>
<span class="line"><span style="color:#A6ACCD;">├── bin														服务端执行脚本</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── oapService.bat						</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── oapService.sh</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── oapServiceInit.bat				初始化数据库脚本</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── oapServiceInit.sh</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── oapServiceNoInit.bat</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── oapServiceNoInit.sh</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── startup.bat								启动脚本</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── startup.sh</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── webappService.bat					ui启动脚本</span></span>
<span class="line"><span style="color:#A6ACCD;">│   └── webappService.sh</span></span>
<span class="line"><span style="color:#A6ACCD;">├── config														各种配置文件</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── alarm-settings.yml						报警配置文件</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── application.yml								主配置文件，基本上都是改这个</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── component-libraries.yml				自定义组件配置文件</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── endpoint-name-grouping.yml		</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── envoy-metrics-rules</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── fetcher-prom-rules</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── gateways.yml</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── lal</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── log-mal-rules</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── log4j2.xml										日志配置文件</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── metadata-service-mapping.yaml</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── meter-analyzer-config</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── oal														oal配置文件</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── otel-oc-rules</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── service-apdex-threshold.yml</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── ui-initialized-templates</span></span>
<span class="line"><span style="color:#A6ACCD;">│   └── zabbix-rules</span></span>
<span class="line"><span style="color:#A6ACCD;">├── config-examples</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── alarm-settings.yml</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── lal.yaml</span></span>
<span class="line"><span style="color:#A6ACCD;">│   └── log-mal.yaml</span></span>
<span class="line"><span style="color:#A6ACCD;">├── oap-libs													依赖库，如需连接mysql则添加驱动</span></span>
<span class="line"><span style="color:#A6ACCD;">├── tools</span></span>
<span class="line"><span style="color:#A6ACCD;">│   └── profile-exporter</span></span>
<span class="line"><span style="color:#A6ACCD;">└── webapp														ui文件</span></span>
<span class="line"><span style="color:#A6ACCD;">    ├── skywalking-webapp.jar					</span></span>
<span class="line"><span style="color:#A6ACCD;">    └── webapp.yml										ui配置文件</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,9),p=[e];function o(i,c,r,A,C,y){return n(),a("div",null,p)}const d=s(l,[["render",o]]);export{h as __pageData,d as default};
