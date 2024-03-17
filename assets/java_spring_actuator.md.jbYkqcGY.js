import{_ as a,c as e,o as t,a8 as s}from"./chunks/framework.BaglXmoE.js";const g=JSON.parse('{"title":"Spring Boot - Actuator","description":"","frontmatter":{"title":"Spring Boot - Actuator"},"headers":[],"relativePath":"java/spring/actuator.md","filePath":"java/spring/actuator.md","lastUpdated":1710641614000}'),n={name:"java/spring/actuator.md"},o=s(`<h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><blockquote><p>spring-boot 子项目</p><p>使用 HTTP 端点或 JMX 来管理和监视应用程序。审计、健康状况和度量标准收集也可以自动应用于您的应用程序。</p><p><a href="https://docs.spring.io/spring-boot/docs/current/reference/html/actuator.html#actuator" target="_blank" rel="noreferrer">Spring Boot Actuator: Production-ready Features</a></p><p><a href="https://micrometer.io/" target="_blank" rel="noreferrer">Micrometer Application Monitoring</a></p><p><a href="https://github.com/micrometer-metrics/micrometer" target="_blank" rel="noreferrer">micrometer-metrics/micrometer: An application metrics facade for the most popular monitoring tools. Think SLF4J, but for metrics. (github.com)</a></p></blockquote><h2 id="默认接口" tabindex="-1">默认接口 <a class="header-anchor" href="#默认接口" aria-label="Permalink to &quot;默认接口&quot;">​</a></h2><h3 id="spring-boot" tabindex="-1">Spring-boot <a class="header-anchor" href="#spring-boot" aria-label="Permalink to &quot;Spring-boot&quot;">​</a></h3><blockquote><p>url/actuator/+具体接口</p><p>直接调用<code>url/actuator</code>会展示可用接口</p></blockquote><ul><li>beans ：显示所有 bean</li><li>conditions ：显示所有condition</li><li>configprops : 显示所有<code>@ConfigurationProperties</code></li><li>env : 显示所有ConfigurableEnvironment</li><li>health : 监控接口</li><li>info ：应用信息</li><li>metrics ：所有生效的统计指标</li><li>mappings ： 显示所有的<code>@RequestMapping</code></li><li>scheduledtasks ： 显示所有的<code>@Scheduled</code></li><li>threaddump : dump 当前线程</li><li>[POST]shutdown ： 关闭应用</li></ul><h3 id="spring-cloud-gateway" tabindex="-1">spring-cloud-gateway <a class="header-anchor" href="#spring-cloud-gateway" aria-label="Permalink to &quot;spring-cloud-gateway&quot;">​</a></h3><blockquote><p>url/actuator/gateway/+具体接口</p><p>直接调用<code>url/actuator/gateway</code>会显示所有接口</p></blockquote><ul><li>routes : 路由</li><li>globalfilters ：GlobalFilter</li><li>routefilters ：GatewayFilter</li><li>refresh : 清除路由器缓存</li><li>[GET] routes/{id} : 通过路由 id 获取路由详细信息</li><li>[POST] routes/{id_route_to_create} : 创建路由</li><li>[DELETE] routes/{id_route_to_delete} : 删除路由</li></ul><h2 id="常用接口" tabindex="-1">常用接口 <a class="header-anchor" href="#常用接口" aria-label="Permalink to &quot;常用接口&quot;">​</a></h2><h3 id="kubernetes-probes" tabindex="-1">Kubernetes Probes <a class="header-anchor" href="#kubernetes-probes" aria-label="Permalink to &quot;Kubernetes Probes&quot;">​</a></h3><blockquote><p>k8s 心跳,就绪接口</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>livenessProbe:</span></span>
<span class="line"><span>  httpGet:</span></span>
<span class="line"><span>    path: /actuator/health/liveness</span></span>
<span class="line"><span>    port: &lt;actuator-port&gt;</span></span>
<span class="line"><span>  failureThreshold: ...</span></span>
<span class="line"><span>  periodSeconds: ...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>readinessProbe:</span></span>
<span class="line"><span>  httpGet:</span></span>
<span class="line"><span>    path: /actuator/health/readiness</span></span>
<span class="line"><span>    port: &lt;actuator-port&gt;</span></span>
<span class="line"><span>  failureThreshold: ...</span></span>
<span class="line"><span>  periodSeconds: ...</span></span></code></pre></div><h2 id="常用配置" tabindex="-1">常用配置 <a class="header-anchor" href="#常用配置" aria-label="Permalink to &quot;常用配置&quot;">​</a></h2><h3 id="自定义标签" tabindex="-1">自定义标签 <a class="header-anchor" href="#自定义标签" aria-label="Permalink to &quot;自定义标签&quot;">​</a></h3><blockquote><p>获取指标时,添加标签</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>management:</span></span>
<span class="line"><span>  metrics:</span></span>
<span class="line"><span>    tags:</span></span>
<span class="line"><span>      app: &quot;appname&quot;</span></span>
<span class="line"><span>      profile: &quot;prod&quot;</span></span></code></pre></div>`,17),r=[o];function i(l,p,c,u,d,h){return t(),e("div",null,r)}const m=a(n,[["render",i]]);export{g as __pageData,m as default};
