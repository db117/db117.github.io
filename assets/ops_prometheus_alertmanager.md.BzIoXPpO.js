import{_ as n,c as p,j as s,ah as t,o as l}from"./chunks/framework.DU9RiYVn.js";const h=JSON.parse('{"title":"alertmanager","description":"","frontmatter":{"title":"alertmanager"},"headers":[],"relativePath":"ops/prometheus/alertmanager.md","filePath":"ops/prometheus/alertmanager.md"}'),e={name:"ops/prometheus/alertmanager.md"};function i(c,a,o,r,u,g){return l(),p("div",null,a[0]||(a[0]=[s("blockquote",null,[s("p",null,"Prometheus 中的报警发送给 alertmanager . 在通过分组,过滤,抑制后发送给不同的通知接收器的列表")],-1),s("iframe",{id:"embed_dom",name:"embed_dom",frameborder:"0",style:{display:"block",width:"725px",height:"245px"},src:"https://www.processon.com/embed/60e579a51e08530a5074c834"},null,-1),t(`<h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><h3 id="通用配置" tabindex="-1">通用配置 <a class="header-anchor" href="#通用配置" aria-label="Permalink to &quot;通用配置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>global:</span></span>
<span class="line"><span>  # 通用邮件通知配置</span></span>
<span class="line"><span>  # 谁发的</span></span>
<span class="line"><span>  [ smtp_from: &lt;tmpl_string&gt; ]</span></span>
<span class="line"><span>  # 服务器地址</span></span>
<span class="line"><span>  # Example: smtp.example.org:587</span></span>
<span class="line"><span>  [ smtp_smarthost: &lt;string&gt; ]</span></span>
<span class="line"><span>  # 服务器用户名</span></span>
<span class="line"><span>  [ smtp_auth_username: &lt;string&gt; ]</span></span>
<span class="line"><span>  # 服务器密码</span></span>
<span class="line"><span>  [ smtp_auth_password: &lt;secret&gt; ]</span></span>
<span class="line"><span>  # 是否使用HTTPS</span></span>
<span class="line"><span>  [ smtp_require_tls: &lt;bool&gt; | default = true ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  # 内置通知配置</span></span>
<span class="line"><span>  [ slack_api_url: &lt;secret&gt; ]</span></span>
<span class="line"><span>  [ slack_api_url_file: &lt;filepath&gt; ]</span></span>
<span class="line"><span>  [ victorops_api_key: &lt;secret&gt; ]</span></span>
<span class="line"><span>  [ victorops_api_url: &lt;string&gt; | default = &quot;https://alert.victorops.com/integrations/generic/20131114/alert/&quot; ]</span></span>
<span class="line"><span>  [ pagerduty_url: &lt;string&gt; | default = &quot;https://events.pagerduty.com/v2/enqueue&quot; ]</span></span>
<span class="line"><span>  [ opsgenie_api_key: &lt;secret&gt; ]</span></span>
<span class="line"><span>  [ opsgenie_api_url: &lt;string&gt; | default = &quot;https://api.opsgenie.com/&quot; ]</span></span>
<span class="line"><span>  [ wechat_api_url: &lt;string&gt; | default = &quot;https://qyapi.weixin.qq.com/cgi-bin/&quot; ]</span></span>
<span class="line"><span>  [ wechat_api_secret: &lt;secret&gt; ]</span></span>
<span class="line"><span>  [ wechat_api_corp_id: &lt;string&gt; ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  # http默认配置</span></span>
<span class="line"><span>  [ http_config: &lt;http_config&gt; ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  # 报警多久结束</span></span>
<span class="line"><span>  [ resolve_timeout: &lt;duration&gt; | default = 5m ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 模板文件</span></span>
<span class="line"><span>templates:</span></span>
<span class="line"><span>  [ - &lt;filepath&gt; ... ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 路由</span></span>
<span class="line"><span>route: &lt;route&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 通知接收器的列表</span></span>
<span class="line"><span>receivers:</span></span>
<span class="line"><span>  - &lt;receiver&gt; ...</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 一系列抑制规则</span></span>
<span class="line"><span>inhibit_rules:</span></span>
<span class="line"><span>  [ - &lt;inhibit_rule&gt; ... ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 静音路由的时间间隔</span></span>
<span class="line"><span>mute_time_intervals:</span></span>
<span class="line"><span>  [ - &lt;mute_time_interval&gt; ... ]</span></span></code></pre></div><h3 id="路由配置" tabindex="-1">路由配置 <a class="header-anchor" href="#路由配置" aria-label="Permalink to &quot;路由配置&quot;">​</a></h3><blockquote><p>可以嵌套</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 接收器</span></span>
<span class="line"><span>[ receiver: &lt;string&gt; ]</span></span>
<span class="line"><span># 分组</span></span>
<span class="line"><span>[ group_by: &#39;[&#39; &lt;labelname&gt;, ... &#39;]&#39; ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 警报是否应该继续匹配后续的同级节点</span></span>
<span class="line"><span>[ continue: &lt;boolean&gt; | default = false ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 警报必须满足以匹配该节点的匹配器列表</span></span>
<span class="line"><span>matchers:</span></span>
<span class="line"><span>  [ - &lt;matcher&gt; ... ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 一个组的消息最多等待时间</span></span>
<span class="line"><span>[ group_wait: &lt;duration&gt; | default = 30s ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 组报警间隔时间</span></span>
<span class="line"><span>[ group_interval: &lt;duration&gt; | default = 5m ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 相同的报警间隔时间</span></span>
<span class="line"><span>[ repeat_interval: &lt;duration&gt; | default = 4h ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 子路由</span></span>
<span class="line"><span>routes:</span></span>
<span class="line"><span>  [ - &lt;route&gt; ... ]</span></span></code></pre></div><h3 id="接收者配置" tabindex="-1">接收者配置 <a class="header-anchor" href="#接收者配置" aria-label="Permalink to &quot;接收者配置&quot;">​</a></h3><blockquote><p>消息接收方</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 接收者名称,会在路由中使用</span></span>
<span class="line"><span>name: &lt;string&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 各种接收者配置</span></span>
<span class="line"><span>email_configs:</span></span>
<span class="line"><span>  [ - &lt;email_config&gt;, ... ]</span></span>
<span class="line"><span>pagerduty_configs:</span></span>
<span class="line"><span>  [ - &lt;pagerduty_config&gt;, ... ]</span></span>
<span class="line"><span>pushover_configs:</span></span>
<span class="line"><span>  [ - &lt;pushover_config&gt;, ... ]</span></span>
<span class="line"><span>slack_configs:</span></span>
<span class="line"><span>  [ - &lt;slack_config&gt;, ... ]</span></span>
<span class="line"><span>opsgenie_configs:</span></span>
<span class="line"><span>  [ - &lt;opsgenie_config&gt;, ... ]</span></span>
<span class="line"><span>webhook_configs:</span></span>
<span class="line"><span>  [ - &lt;webhook_config&gt;, ... ]</span></span>
<span class="line"><span>victorops_configs:</span></span>
<span class="line"><span>  [ - &lt;victorops_config&gt;, ... ]</span></span>
<span class="line"><span>wechat_configs:</span></span>
<span class="line"><span>  [ - &lt;wechat_config&gt;, ... ]</span></span></code></pre></div><h4 id="email接收" tabindex="-1">email接收 <a class="header-anchor" href="#email接收" aria-label="Permalink to &quot;email接收&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#  是否通知已解决的警报</span></span>
<span class="line"><span>[ send_resolved: &lt;boolean&gt; | default = false ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 收件人地址</span></span>
<span class="line"><span>to: &lt;tmpl_string&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 发件人地址</span></span>
<span class="line"><span>[ from: &lt;tmpl_string&gt; | default = global.smtp_from ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 服务器地址</span></span>
<span class="line"><span>[ smarthost: &lt;string&gt; | default = global.smtp_smarthost ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># SMTP 鉴权</span></span>
<span class="line"><span>[ auth_username: &lt;string&gt; | default = global.smtp_auth_username ]</span></span>
<span class="line"><span>[ auth_password: &lt;secret&gt; | default = global.smtp_auth_password ]</span></span>
<span class="line"><span>[ auth_secret: &lt;secret&gt; | default = global.smtp_auth_secret ]</span></span>
<span class="line"><span>[ auth_identity: &lt;string&gt; | default = global.smtp_auth_identity ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 是否使用HTTPS</span></span>
<span class="line"><span>[ require_tls: &lt;bool&gt; | default = global.smtp_require_tls ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># HTTPS配置</span></span>
<span class="line"><span>tls_config:</span></span>
<span class="line"><span>  [ &lt;tls_config&gt; ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 文本内容</span></span>
<span class="line"><span># The HTML body of the email notification.</span></span>
<span class="line"><span>[ html: &lt;tmpl_string&gt; | default = &#39;{{ template &quot;email.default.html&quot; . }}&#39; ]</span></span>
<span class="line"><span># The text body of the email notification.</span></span>
<span class="line"><span>[ text: &lt;tmpl_string&gt; ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 标题头</span></span>
<span class="line"><span>[ headers: { &lt;string&gt;: &lt;tmpl_string&gt;, ... } ]</span></span></code></pre></div><h4 id="企业微信通知" tabindex="-1">企业微信通知 <a class="header-anchor" href="#企业微信通知" aria-label="Permalink to &quot;企业微信通知&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#  是否通知已解决的警报</span></span>
<span class="line"><span>[ send_resolved: &lt;boolean&gt; | default = false ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># api_secret</span></span>
<span class="line"><span>[ api_secret: &lt;secret&gt; | default = global.wechat_api_secret ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># api_url</span></span>
<span class="line"><span>[ api_url: &lt;string&gt; | default = global.wechat_api_url ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 企业id</span></span>
<span class="line"><span>[ corp_id: &lt;string&gt; | default = global.wechat_api_corp_id ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 发送内容</span></span>
<span class="line"><span>[ message: &lt;tmpl_string&gt; | default = &#39;{{ template &quot;wechat.default.message&quot; . }}&#39; ]</span></span>
<span class="line"><span># 消息类型</span></span>
<span class="line"><span>[ message_type: &lt;string&gt; | default = &#39;text&#39; ]</span></span>
<span class="line"><span>[ agent_id: &lt;string&gt; | default = &#39;{{ template &quot;wechat.default.agent_id&quot; . }}&#39; ]</span></span>
<span class="line"><span>[ to_user: &lt;string&gt; | default = &#39;{{ template &quot;wechat.default.to_user&quot; . }}&#39; ]</span></span>
<span class="line"><span>[ to_party: &lt;string&gt; | default = &#39;{{ template &quot;wechat.default.to_party&quot; . }}&#39; ]</span></span>
<span class="line"><span>[ to_tag: &lt;string&gt; | default = &#39;{{ template &quot;wechat.default.to_tag&quot; . }}&#39; ]</span></span></code></pre></div><h4 id="http回调" tabindex="-1">http回调 <a class="header-anchor" href="#http回调" aria-label="Permalink to &quot;http回调&quot;">​</a></h4><blockquote><p>向指定的 url 发送 POST HTTP请求</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#  是否通知已解决的警报</span></span>
<span class="line"><span>[ send_resolved: &lt;boolean&gt; | default = true ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 发送url</span></span>
<span class="line"><span>url: &lt;string&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># HTTP配置</span></span>
<span class="line"><span>[ http_config: &lt;http_config&gt; | default = global.http_config ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 单次最大消息量</span></span>
<span class="line"><span># 默认 0 为所有</span></span>
<span class="line"><span>[ max_alerts: &lt;int&gt; | default = 0 ]</span></span></code></pre></div><p>实例消息</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;version&quot;: &quot;4&quot;,</span></span>
<span class="line"><span>  &quot;groupKey&quot;: &lt;string&gt;,              	// 分组</span></span>
<span class="line"><span>  &quot;truncatedAlerts&quot;: &lt;int&gt;,          	// 由于“max_alerts”，已截断了多少警报</span></span>
<span class="line"><span>  &quot;status&quot;: &quot;&lt;resolved|firing&gt;&quot;,     	// 报警状态</span></span>
<span class="line"><span>  &quot;receiver&quot;: &lt;string&gt;,              	// 接收器名称</span></span>
<span class="line"><span>  &quot;groupLabels&quot;: &lt;object&gt;,						</span></span>
<span class="line"><span>  &quot;commonLabels&quot;: &lt;object&gt;,						</span></span>
<span class="line"><span>  &quot;commonAnnotations&quot;: &lt;object&gt;,</span></span>
<span class="line"><span>  &quot;externalURL&quot;: &lt;string&gt;,            // 回退到 Alertmanager 的地址</span></span>
<span class="line"><span>  &quot;alerts&quot;: [													// 报警列表</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      &quot;status&quot;: &quot;&lt;resolved|firing&gt;&quot;,	// 通知状态</span></span>
<span class="line"><span>      &quot;labels&quot;: &lt;object&gt;,							// 标签</span></span>
<span class="line"><span>      &quot;annotations&quot;: &lt;object&gt;,				</span></span>
<span class="line"><span>      &quot;startsAt&quot;: &quot;&lt;rfc3339&gt;&quot;,				// 开始时间</span></span>
<span class="line"><span>      &quot;endsAt&quot;: &quot;&lt;rfc3339&gt;&quot;,					// 结束时间</span></span>
<span class="line"><span>      &quot;generatorURL&quot;: &lt;string&gt;,      // identifies the entity that caused the alert</span></span>
<span class="line"><span>      &quot;fingerprint&quot;: &lt;string&gt;        // fingerprint to identify the alert</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,18)]))}const _=n(e,[["render",i]]);export{h as __pageData,_ as default};
