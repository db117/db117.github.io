import{_ as n,c as a,o as l,b as s,a as p}from"./app.5745f82f.js";const _=JSON.parse('{"title":"alertmanager","description":"","frontmatter":{"title":"alertmanager"},"headers":[{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[{"level":3,"title":"通用配置","slug":"通用配置","link":"#通用配置","children":[]},{"level":3,"title":"路由配置","slug":"路由配置","link":"#路由配置","children":[]},{"level":3,"title":"接收者配置","slug":"接收者配置","link":"#接收者配置","children":[]}]}],"relativePath":"ops/prometheus/alertmanager.md","lastUpdated":1677837613000}'),t={name:"ops/prometheus/alertmanager.md"},e=s("blockquote",null,[s("p",null,"Prometheus 中的报警发送给 alertmanager . 在通过分组,过滤,抑制后发送给不同的通知接收器的列表")],-1),o=s("iframe",{id:"embed_dom",name:"embed_dom",frameborder:"0",style:{display:"block",width:"725px",height:"245px"},src:"https://www.processon.com/embed/60e579a51e08530a5074c834"},null,-1),c=p(`<h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-hidden="true">#</a></h2><h3 id="通用配置" tabindex="-1">通用配置 <a class="header-anchor" href="#通用配置" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">global:</span></span>
<span class="line"><span style="color:#A6ACCD;">  # 通用邮件通知配置</span></span>
<span class="line"><span style="color:#A6ACCD;">  # 谁发的</span></span>
<span class="line"><span style="color:#A6ACCD;">  [ smtp_from: &lt;tmpl_string&gt; ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  # 服务器地址</span></span>
<span class="line"><span style="color:#A6ACCD;">  # Example: smtp.example.org:587</span></span>
<span class="line"><span style="color:#A6ACCD;">  [ smtp_smarthost: &lt;string&gt; ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  # 服务器用户名</span></span>
<span class="line"><span style="color:#A6ACCD;">  [ smtp_auth_username: &lt;string&gt; ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  # 服务器密码</span></span>
<span class="line"><span style="color:#A6ACCD;">  [ smtp_auth_password: &lt;secret&gt; ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  # 是否使用HTTPS</span></span>
<span class="line"><span style="color:#A6ACCD;">  [ smtp_require_tls: &lt;bool&gt; | default = true ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # 内置通知配置</span></span>
<span class="line"><span style="color:#A6ACCD;">  [ slack_api_url: &lt;secret&gt; ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  [ slack_api_url_file: &lt;filepath&gt; ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  [ victorops_api_key: &lt;secret&gt; ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  [ victorops_api_url: &lt;string&gt; | default = &quot;https://alert.victorops.com/integrations/generic/20131114/alert/&quot; ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  [ pagerduty_url: &lt;string&gt; | default = &quot;https://events.pagerduty.com/v2/enqueue&quot; ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  [ opsgenie_api_key: &lt;secret&gt; ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  [ opsgenie_api_url: &lt;string&gt; | default = &quot;https://api.opsgenie.com/&quot; ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  [ wechat_api_url: &lt;string&gt; | default = &quot;https://qyapi.weixin.qq.com/cgi-bin/&quot; ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  [ wechat_api_secret: &lt;secret&gt; ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  [ wechat_api_corp_id: &lt;string&gt; ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # http默认配置</span></span>
<span class="line"><span style="color:#A6ACCD;">  [ http_config: &lt;http_config&gt; ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  # 报警多久结束</span></span>
<span class="line"><span style="color:#A6ACCD;">  [ resolve_timeout: &lt;duration&gt; | default = 5m ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 模板文件</span></span>
<span class="line"><span style="color:#A6ACCD;">templates:</span></span>
<span class="line"><span style="color:#A6ACCD;">  [ - &lt;filepath&gt; ... ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 路由</span></span>
<span class="line"><span style="color:#A6ACCD;">route: &lt;route&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 通知接收器的列表</span></span>
<span class="line"><span style="color:#A6ACCD;">receivers:</span></span>
<span class="line"><span style="color:#A6ACCD;">  - &lt;receiver&gt; ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 一系列抑制规则</span></span>
<span class="line"><span style="color:#A6ACCD;">inhibit_rules:</span></span>
<span class="line"><span style="color:#A6ACCD;">  [ - &lt;inhibit_rule&gt; ... ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 静音路由的时间间隔</span></span>
<span class="line"><span style="color:#A6ACCD;">mute_time_intervals:</span></span>
<span class="line"><span style="color:#A6ACCD;">  [ - &lt;mute_time_interval&gt; ... ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="路由配置" tabindex="-1">路由配置 <a class="header-anchor" href="#路由配置" aria-hidden="true">#</a></h3><blockquote><p>可以嵌套</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"># 接收器</span></span>
<span class="line"><span style="color:#A6ACCD;">[ receiver: &lt;string&gt; ]</span></span>
<span class="line"><span style="color:#A6ACCD;"># 分组</span></span>
<span class="line"><span style="color:#A6ACCD;">[ group_by: &#39;[&#39; &lt;labelname&gt;, ... &#39;]&#39; ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 警报是否应该继续匹配后续的同级节点</span></span>
<span class="line"><span style="color:#A6ACCD;">[ continue: &lt;boolean&gt; | default = false ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 警报必须满足以匹配该节点的匹配器列表</span></span>
<span class="line"><span style="color:#A6ACCD;">matchers:</span></span>
<span class="line"><span style="color:#A6ACCD;">  [ - &lt;matcher&gt; ... ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 一个组的消息最多等待时间</span></span>
<span class="line"><span style="color:#A6ACCD;">[ group_wait: &lt;duration&gt; | default = 30s ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 组报警间隔时间</span></span>
<span class="line"><span style="color:#A6ACCD;">[ group_interval: &lt;duration&gt; | default = 5m ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 相同的报警间隔时间</span></span>
<span class="line"><span style="color:#A6ACCD;">[ repeat_interval: &lt;duration&gt; | default = 4h ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 子路由</span></span>
<span class="line"><span style="color:#A6ACCD;">routes:</span></span>
<span class="line"><span style="color:#A6ACCD;">  [ - &lt;route&gt; ... ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="接收者配置" tabindex="-1">接收者配置 <a class="header-anchor" href="#接收者配置" aria-hidden="true">#</a></h3><blockquote><p>消息接收方</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"># 接收者名称,会在路由中使用</span></span>
<span class="line"><span style="color:#A6ACCD;">name: &lt;string&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 各种接收者配置</span></span>
<span class="line"><span style="color:#A6ACCD;">email_configs:</span></span>
<span class="line"><span style="color:#A6ACCD;">  [ - &lt;email_config&gt;, ... ]</span></span>
<span class="line"><span style="color:#A6ACCD;">pagerduty_configs:</span></span>
<span class="line"><span style="color:#A6ACCD;">  [ - &lt;pagerduty_config&gt;, ... ]</span></span>
<span class="line"><span style="color:#A6ACCD;">pushover_configs:</span></span>
<span class="line"><span style="color:#A6ACCD;">  [ - &lt;pushover_config&gt;, ... ]</span></span>
<span class="line"><span style="color:#A6ACCD;">slack_configs:</span></span>
<span class="line"><span style="color:#A6ACCD;">  [ - &lt;slack_config&gt;, ... ]</span></span>
<span class="line"><span style="color:#A6ACCD;">opsgenie_configs:</span></span>
<span class="line"><span style="color:#A6ACCD;">  [ - &lt;opsgenie_config&gt;, ... ]</span></span>
<span class="line"><span style="color:#A6ACCD;">webhook_configs:</span></span>
<span class="line"><span style="color:#A6ACCD;">  [ - &lt;webhook_config&gt;, ... ]</span></span>
<span class="line"><span style="color:#A6ACCD;">victorops_configs:</span></span>
<span class="line"><span style="color:#A6ACCD;">  [ - &lt;victorops_config&gt;, ... ]</span></span>
<span class="line"><span style="color:#A6ACCD;">wechat_configs:</span></span>
<span class="line"><span style="color:#A6ACCD;">  [ - &lt;wechat_config&gt;, ... ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="email接收" tabindex="-1">email接收 <a class="header-anchor" href="#email接收" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">#  是否通知已解决的警报</span></span>
<span class="line"><span style="color:#A6ACCD;">[ send_resolved: &lt;boolean&gt; | default = false ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 收件人地址</span></span>
<span class="line"><span style="color:#A6ACCD;">to: &lt;tmpl_string&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 发件人地址</span></span>
<span class="line"><span style="color:#A6ACCD;">[ from: &lt;tmpl_string&gt; | default = global.smtp_from ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 服务器地址</span></span>
<span class="line"><span style="color:#A6ACCD;">[ smarthost: &lt;string&gt; | default = global.smtp_smarthost ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># SMTP 鉴权</span></span>
<span class="line"><span style="color:#A6ACCD;">[ auth_username: &lt;string&gt; | default = global.smtp_auth_username ]</span></span>
<span class="line"><span style="color:#A6ACCD;">[ auth_password: &lt;secret&gt; | default = global.smtp_auth_password ]</span></span>
<span class="line"><span style="color:#A6ACCD;">[ auth_secret: &lt;secret&gt; | default = global.smtp_auth_secret ]</span></span>
<span class="line"><span style="color:#A6ACCD;">[ auth_identity: &lt;string&gt; | default = global.smtp_auth_identity ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 是否使用HTTPS</span></span>
<span class="line"><span style="color:#A6ACCD;">[ require_tls: &lt;bool&gt; | default = global.smtp_require_tls ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># HTTPS配置</span></span>
<span class="line"><span style="color:#A6ACCD;">tls_config:</span></span>
<span class="line"><span style="color:#A6ACCD;">  [ &lt;tls_config&gt; ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 文本内容</span></span>
<span class="line"><span style="color:#A6ACCD;"># The HTML body of the email notification.</span></span>
<span class="line"><span style="color:#A6ACCD;">[ html: &lt;tmpl_string&gt; | default = &#39;{{ template &quot;email.default.html&quot; . }}&#39; ]</span></span>
<span class="line"><span style="color:#A6ACCD;"># The text body of the email notification.</span></span>
<span class="line"><span style="color:#A6ACCD;">[ text: &lt;tmpl_string&gt; ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 标题头</span></span>
<span class="line"><span style="color:#A6ACCD;">[ headers: { &lt;string&gt;: &lt;tmpl_string&gt;, ... } ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="企业微信通知" tabindex="-1">企业微信通知 <a class="header-anchor" href="#企业微信通知" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">#  是否通知已解决的警报</span></span>
<span class="line"><span style="color:#A6ACCD;">[ send_resolved: &lt;boolean&gt; | default = false ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># api_secret</span></span>
<span class="line"><span style="color:#A6ACCD;">[ api_secret: &lt;secret&gt; | default = global.wechat_api_secret ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># api_url</span></span>
<span class="line"><span style="color:#A6ACCD;">[ api_url: &lt;string&gt; | default = global.wechat_api_url ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 企业id</span></span>
<span class="line"><span style="color:#A6ACCD;">[ corp_id: &lt;string&gt; | default = global.wechat_api_corp_id ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 发送内容</span></span>
<span class="line"><span style="color:#A6ACCD;">[ message: &lt;tmpl_string&gt; | default = &#39;{{ template &quot;wechat.default.message&quot; . }}&#39; ]</span></span>
<span class="line"><span style="color:#A6ACCD;"># 消息类型</span></span>
<span class="line"><span style="color:#A6ACCD;">[ message_type: &lt;string&gt; | default = &#39;text&#39; ]</span></span>
<span class="line"><span style="color:#A6ACCD;">[ agent_id: &lt;string&gt; | default = &#39;{{ template &quot;wechat.default.agent_id&quot; . }}&#39; ]</span></span>
<span class="line"><span style="color:#A6ACCD;">[ to_user: &lt;string&gt; | default = &#39;{{ template &quot;wechat.default.to_user&quot; . }}&#39; ]</span></span>
<span class="line"><span style="color:#A6ACCD;">[ to_party: &lt;string&gt; | default = &#39;{{ template &quot;wechat.default.to_party&quot; . }}&#39; ]</span></span>
<span class="line"><span style="color:#A6ACCD;">[ to_tag: &lt;string&gt; | default = &#39;{{ template &quot;wechat.default.to_tag&quot; . }}&#39; ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="http回调" tabindex="-1">http回调 <a class="header-anchor" href="#http回调" aria-hidden="true">#</a></h4><blockquote><p>向指定的 url 发送 POST HTTP请求</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">#  是否通知已解决的警报</span></span>
<span class="line"><span style="color:#A6ACCD;">[ send_resolved: &lt;boolean&gt; | default = true ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 发送url</span></span>
<span class="line"><span style="color:#A6ACCD;">url: &lt;string&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># HTTP配置</span></span>
<span class="line"><span style="color:#A6ACCD;">[ http_config: &lt;http_config&gt; | default = global.http_config ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 单次最大消息量</span></span>
<span class="line"><span style="color:#A6ACCD;"># 默认 0 为所有</span></span>
<span class="line"><span style="color:#A6ACCD;">[ max_alerts: &lt;int&gt; | default = 0 ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>实例消息</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;version&quot;: &quot;4&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;groupKey&quot;: &lt;string&gt;,              	// 分组</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;truncatedAlerts&quot;: &lt;int&gt;,          	// 由于“max_alerts”，已截断了多少警报</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;status&quot;: &quot;&lt;resolved|firing&gt;&quot;,     	// 报警状态</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;receiver&quot;: &lt;string&gt;,              	// 接收器名称</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;groupLabels&quot;: &lt;object&gt;,						</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;commonLabels&quot;: &lt;object&gt;,						</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;commonAnnotations&quot;: &lt;object&gt;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;externalURL&quot;: &lt;string&gt;,            // 回退到 Alertmanager 的地址</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;alerts&quot;: [													// 报警列表</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;status&quot;: &quot;&lt;resolved|firing&gt;&quot;,	// 通知状态</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;labels&quot;: &lt;object&gt;,							// 标签</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;annotations&quot;: &lt;object&gt;,				</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;startsAt&quot;: &quot;&lt;rfc3339&gt;&quot;,				// 开始时间</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;endsAt&quot;: &quot;&lt;rfc3339&gt;&quot;,					// 结束时间</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;generatorURL&quot;: &lt;string&gt;,      // identifies the entity that caused the alert</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;fingerprint&quot;: &lt;string&gt;        // fingerprint to identify the alert</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,18),i=[e,o,c];function r(C,A,y,g,u,D){return l(),a("div",null,i)}const h=n(t,[["render",r]]);export{_ as __pageData,h as default};
