import{_ as l,c as e,a3 as a,o as t}from"./chunks/framework.D7KqzdP6.js";const p=JSON.parse('{"title":"UI详情","description":"","frontmatter":{"title":"UI详情"},"headers":[],"relativePath":"ops/skywalking/ui.md","filePath":"ops/skywalking/ui.md"}'),n={name:"ops/skywalking/ui.md"};function r(s,i,o,c,u,d){return t(),e("div",null,i[0]||(i[0]=[a('<h3 id="栏目" tabindex="-1">栏目 <a class="header-anchor" href="#栏目" aria-label="Permalink to &quot;栏目&quot;">​</a></h3><ul><li>仪表盘：查看被监控服务的运行状态</li><li>拓扑图：以拓扑图的方式展现服务直接的关系，并以此为入口查看相关信息</li><li>追踪：以接口列表的方式展现，追踪接口内部调用过程</li><li>性能剖析：单独端点进行采样分析，并可查看堆栈信息</li><li>告警：触发告警的告警列表，包括实例，请求超时等。</li><li>自动刷新：刷新当前数据内容</li></ul><h3 id="仪表盘" tabindex="-1">仪表盘 <a class="header-anchor" href="#仪表盘" aria-label="Permalink to &quot;仪表盘&quot;">​</a></h3><h4 id="控制栏" tabindex="-1">控制栏 <a class="header-anchor" href="#控制栏" aria-label="Permalink to &quot;控制栏&quot;">​</a></h4><ul><li>第一栏：不同内容主题的监控面板，应用/数据库/容器等</li><li>第二栏：操作，包括编辑/导出当前数据/倒入展示数据/不同服务端点筛选展示</li><li>第三栏：不同纬度展示，服务/实例/端点</li></ul><h4 id="应用" tabindex="-1">应用 <a class="header-anchor" href="#应用" aria-label="Permalink to &quot;应用&quot;">​</a></h4><h5 id="global全局维度" tabindex="-1">Global全局维度 <a class="header-anchor" href="#global全局维度" aria-label="Permalink to &quot;Global全局维度&quot;">​</a></h5><ul><li><p>Services load：服务每分钟请求数</p></li><li><p>Slow Services：慢响应服务，单位ms</p></li><li><p>Un-Health services(Apdex):Apdex性能指标，1为满分。</p></li><li><p>Global Response Latency：百分比响应延时，不同百分比的延时时间，单位ms</p></li><li><p>Global Heatmap：服务响应时间热力分布图，根据时间段内不同响应时间的数量显示颜色深度</p></li></ul><h5 id="service服务维度" tabindex="-1">Service服务维度 <a class="header-anchor" href="#service服务维度" aria-label="Permalink to &quot;Service服务维度&quot;">​</a></h5><ul><li>Service Apdex（数字）:当前服务的评分</li><li>Service Apdex（折线图）：不同时间的Apdex评分</li><li>Successful Rate（数字）：请求成功率</li><li>Successful Rate（折线图）：不同时间的请求成功率</li><li>Servce Load（数字）：每分钟请求数</li><li>Servce Load（折线图）：不同时间的每分钟请求数</li><li>Service Avg Response Times：平均响应延时，单位ms</li><li>Global Response Time Percentile：百分比响应延时</li><li>Servce Instances Load：每个服务实例的每分钟请求数</li><li>Show Service Instance：每个服务实例的最大延时</li><li>Service Instance Successful Rate：每个服务实例的请求成功率</li></ul><h5 id="instance实例维度" tabindex="-1">Instance实例维度 <a class="header-anchor" href="#instance实例维度" aria-label="Permalink to &quot;Instance实例维度&quot;">​</a></h5><ul><li>Service Instance Load：当前实例的每分钟请求数</li><li>Service Instance Successful Rate：当前实例的请求成功率</li><li>Service Instance Latency：当前实例的响应延时</li><li>JVM CPU:jvm占用CPU的百分比</li><li>JVM Memory：JVM内存占用大小，单位m</li><li>JVM GC Time：JVM垃圾回收时间，包含YGC和OGC</li><li>JVM GC Count：JVM垃圾回收次数，包含YGC和OGC</li></ul><h5 id="endpoint端点-api-维度" tabindex="-1">Endpoint端点（API）维度 <a class="header-anchor" href="#endpoint端点-api-维度" aria-label="Permalink to &quot;Endpoint端点（API）维度&quot;">​</a></h5><ul><li>Endpoint Load in Current Service：每个端点的每分钟请求数</li><li>Slow Endpoints in Current Service：每个端点的最慢请求时间，单位ms</li><li>Successful Rate in Current Service：每个端点的请求成功率</li><li>Endpoint Load：当前端点每个时间段的请求数据</li><li>Endpoint Avg Response Time：当前端点每个时间段的请求行响应时间</li><li>Endpoint Response Time Percentile：当前端点每个时间段的响应时间占比</li><li>Endpoint Successful Rate：当前端点每个时间段的请求成功率</li></ul><h4 id="数据库" tabindex="-1">数据库 <a class="header-anchor" href="#数据库" aria-label="Permalink to &quot;数据库&quot;">​</a></h4><ul><li>Database Avg Response Time：数据库平均响应时间</li><li>Database Access Successful Rate：数据库请求成功率</li><li>Database Traffic：数据库吞吐量</li><li>Database Access Latency Percentile：数据库访问延迟百分比</li><li>Slow Statements：慢sql展示</li><li>All Database Loads：所有数据库请求量</li><li>Un-Health Databases (Successful Rate)：数据库请求成功率</li></ul><h3 id="拓扑图" tabindex="-1">拓扑图 <a class="header-anchor" href="#拓扑图" aria-label="Permalink to &quot;拓扑图&quot;">​</a></h3><h3 id="追踪" tabindex="-1">追踪 <a class="header-anchor" href="#追踪" aria-label="Permalink to &quot;追踪&quot;">​</a></h3><ul><li>左侧：api接口列表，红色-异常请求，蓝色-正常请求</li><li>右侧：api追踪列表，api请求连接各端点的先后顺序和时间</li><li>点开可以查看详情</li></ul><h3 id="性能剖析" tabindex="-1">性能剖析 <a class="header-anchor" href="#性能剖析" aria-label="Permalink to &quot;性能剖析&quot;">​</a></h3><h5 id="新建任务" tabindex="-1">新建任务 <a class="header-anchor" href="#新建任务" aria-label="Permalink to &quot;新建任务&quot;">​</a></h5><ul><li>服务：需要分析的服务</li><li>端点名称：追踪里面看到的名称</li><li>监控数据：开始监控的时间</li><li>监控持续时间</li><li>起始监控时间：小于监控间隔无效</li><li>监控间隔：小于间隔的请求不能获取堆栈</li><li>最大采样</li></ul><h3 id="告警" tabindex="-1">告警 <a class="header-anchor" href="#告警" aria-label="Permalink to &quot;告警&quot;">​</a></h3><ul><li>不同维度告警列表，可分为服务、端点和实例。</li></ul>',24)]))}const b=l(n,[["render",r]]);export{p as __pageData,b as default};
