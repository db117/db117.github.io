import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.54cab62e.js";const S=JSON.parse('{"title":"客户端配置","description":"","frontmatter":{"title":"客户端配置"},"headers":[],"relativePath":"ops/skywalking/client-config.md","filePath":"ops/skywalking/client-config.md","lastUpdated":1697773070000}'),l={name:"ops/skywalking/client-config.md"},p=e(`<h3 id="常用设置" tabindex="-1">常用设置 <a class="header-anchor" href="#常用设置" aria-label="Permalink to &quot;常用设置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 设置Agent命名空间，它用来隔离追踪和监控数据，当两个应用使用不同的名称空间时，跨进程传播链会中断。</span></span>
<span class="line"><span style="color:#e1e4e8;">agent.namespace=\${SW_AGENT_NAMESPACE:default-namespace}</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;"># 设置服务名称，会在 Skywalking UI 上显示的名称</span></span>
<span class="line"><span style="color:#e1e4e8;">agent.service_name=\${SW_AGENT_NAME:Your_ApplicationName}</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;"># 每 3 秒采集的样本跟踪数量，如果是负数则表示 100% 采集</span></span>
<span class="line"><span style="color:#e1e4e8;">agent.sample_n_per_3_secs=\${SW_AGENT_SAMPLE:-1}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 单个 segment 最大跨度</span></span>
<span class="line"><span style="color:#e1e4e8;">agent.trace_segment_ref_limit_per_span=\${SW_TRACE_SEGMENT_LIMIT:500}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 忽略后缀</span></span>
<span class="line"><span style="color:#e1e4e8;">agent.ignore_suffix=\${SW_AGENT_IGNORE_SUFFIX:.jpg,.jpeg,.js,.css,.png,.bmp,.gif,.ico,.mp3,.mp4,.html,.svg}</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;"># 启用 Debug ，如果为 true 则将把所有检测到的类文件保存在&quot;/debug&quot;文件夹中</span></span>
<span class="line"><span style="color:#e1e4e8;"># agent.is_open_debugging_class = \${SW_AGENT_OPEN_DEBUG:true}</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;"># 后端的 collector 端口及地址</span></span>
<span class="line"><span style="color:#e1e4e8;">collector.backend_service=\${SW_AGENT_COLLECTOR_BACKEND_SERVICES:192.168.2.215:11800}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 当后端不可用时，是否继续追踪</span></span>
<span class="line"><span style="color:#e1e4e8;">agent.keep_tracing=\${SW_AGENT_KEEP_TRACING:false}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 日志级别</span></span>
<span class="line"><span style="color:#e1e4e8;">logging.level=\${SW_LOGGING_LEVEL:DEBUG}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 日志名称</span></span>
<span class="line"><span style="color:#e1e4e8;">logging.file_name=\${SW_LOGGING_FILE_NAME:skywalking-api.log}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 日志目录</span></span>
<span class="line"><span style="color:#e1e4e8;">logging.dir=\${SW_LOGGING_DIR:}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 这个配置项控制SpringMVC插件是否应该收集请求的参数</span></span>
<span class="line"><span style="color:#e1e4e8;">plugin.springmvc.collect_http_params=true</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># mysql plugin configuration</span></span>
<span class="line"><span style="color:#e1e4e8;"># 收集MySQL执行参数</span></span>
<span class="line"><span style="color:#e1e4e8;"># plugin.mysql.trace_sql_parameters=\${SW_MYSQL_TRACE_SQL_PARAMETERS:false}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 设置Agent命名空间，它用来隔离追踪和监控数据，当两个应用使用不同的名称空间时，跨进程传播链会中断。</span></span>
<span class="line"><span style="color:#24292e;">agent.namespace=\${SW_AGENT_NAMESPACE:default-namespace}</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;"># 设置服务名称，会在 Skywalking UI 上显示的名称</span></span>
<span class="line"><span style="color:#24292e;">agent.service_name=\${SW_AGENT_NAME:Your_ApplicationName}</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;"># 每 3 秒采集的样本跟踪数量，如果是负数则表示 100% 采集</span></span>
<span class="line"><span style="color:#24292e;">agent.sample_n_per_3_secs=\${SW_AGENT_SAMPLE:-1}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 单个 segment 最大跨度</span></span>
<span class="line"><span style="color:#24292e;">agent.trace_segment_ref_limit_per_span=\${SW_TRACE_SEGMENT_LIMIT:500}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 忽略后缀</span></span>
<span class="line"><span style="color:#24292e;">agent.ignore_suffix=\${SW_AGENT_IGNORE_SUFFIX:.jpg,.jpeg,.js,.css,.png,.bmp,.gif,.ico,.mp3,.mp4,.html,.svg}</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;"># 启用 Debug ，如果为 true 则将把所有检测到的类文件保存在&quot;/debug&quot;文件夹中</span></span>
<span class="line"><span style="color:#24292e;"># agent.is_open_debugging_class = \${SW_AGENT_OPEN_DEBUG:true}</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;"># 后端的 collector 端口及地址</span></span>
<span class="line"><span style="color:#24292e;">collector.backend_service=\${SW_AGENT_COLLECTOR_BACKEND_SERVICES:192.168.2.215:11800}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 当后端不可用时，是否继续追踪</span></span>
<span class="line"><span style="color:#24292e;">agent.keep_tracing=\${SW_AGENT_KEEP_TRACING:false}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 日志级别</span></span>
<span class="line"><span style="color:#24292e;">logging.level=\${SW_LOGGING_LEVEL:DEBUG}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 日志名称</span></span>
<span class="line"><span style="color:#24292e;">logging.file_name=\${SW_LOGGING_FILE_NAME:skywalking-api.log}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 日志目录</span></span>
<span class="line"><span style="color:#24292e;">logging.dir=\${SW_LOGGING_DIR:}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 这个配置项控制SpringMVC插件是否应该收集请求的参数</span></span>
<span class="line"><span style="color:#24292e;">plugin.springmvc.collect_http_params=true</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># mysql plugin configuration</span></span>
<span class="line"><span style="color:#24292e;"># 收集MySQL执行参数</span></span>
<span class="line"><span style="color:#24292e;"># plugin.mysql.trace_sql_parameters=\${SW_MYSQL_TRACE_SQL_PARAMETERS:false}</span></span></code></pre></div>`,2),c=[p];function o(t,i,r,_,g,y){return n(),a("div",null,c)}const m=s(l,[["render",o]]);export{S as __pageData,m as default};
