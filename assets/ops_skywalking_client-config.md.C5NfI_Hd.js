import{_ as n,c as s,o as a,a7 as p}from"./chunks/framework.CmQJvoAO.js";const m=JSON.parse('{"title":"客户端配置","description":"","frontmatter":{"title":"客户端配置"},"headers":[],"relativePath":"ops/skywalking/client-config.md","filePath":"ops/skywalking/client-config.md","lastUpdated":1716780643000}'),e={name:"ops/skywalking/client-config.md"},l=p(`<h3 id="常用设置" tabindex="-1">常用设置 <a class="header-anchor" href="#常用设置" aria-label="Permalink to &quot;常用设置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 设置Agent命名空间，它用来隔离追踪和监控数据，当两个应用使用不同的名称空间时，跨进程传播链会中断。</span></span>
<span class="line"><span>agent.namespace=\${SW_AGENT_NAMESPACE:default-namespace}</span></span>
<span class="line"><span> </span></span>
<span class="line"><span># 设置服务名称，会在 Skywalking UI 上显示的名称</span></span>
<span class="line"><span>agent.service_name=\${SW_AGENT_NAME:Your_ApplicationName}</span></span>
<span class="line"><span> </span></span>
<span class="line"><span># 每 3 秒采集的样本跟踪数量，如果是负数则表示 100% 采集</span></span>
<span class="line"><span>agent.sample_n_per_3_secs=\${SW_AGENT_SAMPLE:-1}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 单个 segment 最大跨度</span></span>
<span class="line"><span>agent.trace_segment_ref_limit_per_span=\${SW_TRACE_SEGMENT_LIMIT:500}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 忽略后缀</span></span>
<span class="line"><span>agent.ignore_suffix=\${SW_AGENT_IGNORE_SUFFIX:.jpg,.jpeg,.js,.css,.png,.bmp,.gif,.ico,.mp3,.mp4,.html,.svg}</span></span>
<span class="line"><span> </span></span>
<span class="line"><span># 启用 Debug ，如果为 true 则将把所有检测到的类文件保存在&quot;/debug&quot;文件夹中</span></span>
<span class="line"><span># agent.is_open_debugging_class = \${SW_AGENT_OPEN_DEBUG:true}</span></span>
<span class="line"><span> </span></span>
<span class="line"><span># 后端的 collector 端口及地址</span></span>
<span class="line"><span>collector.backend_service=\${SW_AGENT_COLLECTOR_BACKEND_SERVICES:192.168.2.215:11800}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 当后端不可用时，是否继续追踪</span></span>
<span class="line"><span>agent.keep_tracing=\${SW_AGENT_KEEP_TRACING:false}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 日志级别</span></span>
<span class="line"><span>logging.level=\${SW_LOGGING_LEVEL:DEBUG}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 日志名称</span></span>
<span class="line"><span>logging.file_name=\${SW_LOGGING_FILE_NAME:skywalking-api.log}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 日志目录</span></span>
<span class="line"><span>logging.dir=\${SW_LOGGING_DIR:}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 这个配置项控制SpringMVC插件是否应该收集请求的参数</span></span>
<span class="line"><span>plugin.springmvc.collect_http_params=true</span></span>
<span class="line"><span></span></span>
<span class="line"><span># mysql plugin configuration</span></span>
<span class="line"><span># 收集MySQL执行参数</span></span>
<span class="line"><span># plugin.mysql.trace_sql_parameters=\${SW_MYSQL_TRACE_SQL_PARAMETERS:false}</span></span></code></pre></div>`,2),i=[l];function c(t,_,o,g,r,E){return a(),s("div",null,i)}const S=n(e,[["render",c]]);export{m as __pageData,S as default};
