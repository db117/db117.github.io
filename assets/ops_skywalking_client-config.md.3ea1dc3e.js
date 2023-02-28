import{_ as s,c as n,o as a,a as l}from"./app.409a788d.js";const y=JSON.parse('{"title":"客户端配置","description":"","frontmatter":{"title":"客户端配置"},"headers":[{"level":3,"title":"常用设置","slug":"常用设置","link":"#常用设置","children":[]}],"relativePath":"ops/skywalking/client-config.md","lastUpdated":1677578323000}'),p={name:"ops/skywalking/client-config.md"},e=l(`<h3 id="常用设置" tabindex="-1">常用设置 <a class="header-anchor" href="#常用设置" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"># 设置Agent命名空间，它用来隔离追踪和监控数据，当两个应用使用不同的名称空间时，跨进程传播链会中断。</span></span>
<span class="line"><span style="color:#A6ACCD;">agent.namespace=\${SW_AGENT_NAMESPACE:default-namespace}</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"># 设置服务名称，会在 Skywalking UI 上显示的名称</span></span>
<span class="line"><span style="color:#A6ACCD;">agent.service_name=\${SW_AGENT_NAME:Your_ApplicationName}</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"># 每 3 秒采集的样本跟踪数量，如果是负数则表示 100% 采集</span></span>
<span class="line"><span style="color:#A6ACCD;">agent.sample_n_per_3_secs=\${SW_AGENT_SAMPLE:-1}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 单个 segment 最大跨度</span></span>
<span class="line"><span style="color:#A6ACCD;">agent.trace_segment_ref_limit_per_span=\${SW_TRACE_SEGMENT_LIMIT:500}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 忽略后缀</span></span>
<span class="line"><span style="color:#A6ACCD;">agent.ignore_suffix=\${SW_AGENT_IGNORE_SUFFIX:.jpg,.jpeg,.js,.css,.png,.bmp,.gif,.ico,.mp3,.mp4,.html,.svg}</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"># 启用 Debug ，如果为 true 则将把所有检测到的类文件保存在&quot;/debug&quot;文件夹中</span></span>
<span class="line"><span style="color:#A6ACCD;"># agent.is_open_debugging_class = \${SW_AGENT_OPEN_DEBUG:true}</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;"># 后端的 collector 端口及地址</span></span>
<span class="line"><span style="color:#A6ACCD;">collector.backend_service=\${SW_AGENT_COLLECTOR_BACKEND_SERVICES:192.168.2.215:11800}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 当后端不可用时，是否继续追踪</span></span>
<span class="line"><span style="color:#A6ACCD;">agent.keep_tracing=\${SW_AGENT_KEEP_TRACING:false}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 日志级别</span></span>
<span class="line"><span style="color:#A6ACCD;">logging.level=\${SW_LOGGING_LEVEL:DEBUG}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 日志名称</span></span>
<span class="line"><span style="color:#A6ACCD;">logging.file_name=\${SW_LOGGING_FILE_NAME:skywalking-api.log}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 日志目录</span></span>
<span class="line"><span style="color:#A6ACCD;">logging.dir=\${SW_LOGGING_DIR:}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 这个配置项控制SpringMVC插件是否应该收集请求的参数</span></span>
<span class="line"><span style="color:#A6ACCD;">plugin.springmvc.collect_http_params=true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># mysql plugin configuration</span></span>
<span class="line"><span style="color:#A6ACCD;"># 收集MySQL执行参数</span></span>
<span class="line"><span style="color:#A6ACCD;"># plugin.mysql.trace_sql_parameters=\${SW_MYSQL_TRACE_SQL_PARAMETERS:false}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,2),c=[e];function o(t,i,A,C,r,_){return a(),n("div",null,c)}const D=s(p,[["render",o]]);export{y as __pageData,D as default};
