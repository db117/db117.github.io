import{_ as n,o as a,c as e,k as s,Q as l}from"./chunks/framework.54cab62e.js";const f=JSON.parse('{"title":"alertmanager","description":"","frontmatter":{"title":"alertmanager"},"headers":[],"relativePath":"ops/prometheus/alertmanager.md","filePath":"ops/prometheus/alertmanager.md","lastUpdated":1697773070000}'),p={name:"ops/prometheus/alertmanager.md"},t=s("blockquote",null,[s("p",null,"Prometheus 中的报警发送给 alertmanager . 在通过分组,过滤,抑制后发送给不同的通知接收器的列表")],-1),o=s("iframe",{id:"embed_dom",name:"embed_dom",frameborder:"0",style:{display:"block",width:"725px",height:"245px"},src:"https://www.processon.com/embed/60e579a51e08530a5074c834"},null,-1),c=l(`<h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><h3 id="通用配置" tabindex="-1">通用配置 <a class="header-anchor" href="#通用配置" aria-label="Permalink to &quot;通用配置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">global:</span></span>
<span class="line"><span style="color:#e1e4e8;">  # 通用邮件通知配置</span></span>
<span class="line"><span style="color:#e1e4e8;">  # 谁发的</span></span>
<span class="line"><span style="color:#e1e4e8;">  [ smtp_from: &lt;tmpl_string&gt; ]</span></span>
<span class="line"><span style="color:#e1e4e8;">  # 服务器地址</span></span>
<span class="line"><span style="color:#e1e4e8;">  # Example: smtp.example.org:587</span></span>
<span class="line"><span style="color:#e1e4e8;">  [ smtp_smarthost: &lt;string&gt; ]</span></span>
<span class="line"><span style="color:#e1e4e8;">  # 服务器用户名</span></span>
<span class="line"><span style="color:#e1e4e8;">  [ smtp_auth_username: &lt;string&gt; ]</span></span>
<span class="line"><span style="color:#e1e4e8;">  # 服务器密码</span></span>
<span class="line"><span style="color:#e1e4e8;">  [ smtp_auth_password: &lt;secret&gt; ]</span></span>
<span class="line"><span style="color:#e1e4e8;">  # 是否使用HTTPS</span></span>
<span class="line"><span style="color:#e1e4e8;">  [ smtp_require_tls: &lt;bool&gt; | default = true ]</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  # 内置通知配置</span></span>
<span class="line"><span style="color:#e1e4e8;">  [ slack_api_url: &lt;secret&gt; ]</span></span>
<span class="line"><span style="color:#e1e4e8;">  [ slack_api_url_file: &lt;filepath&gt; ]</span></span>
<span class="line"><span style="color:#e1e4e8;">  [ victorops_api_key: &lt;secret&gt; ]</span></span>
<span class="line"><span style="color:#e1e4e8;">  [ victorops_api_url: &lt;string&gt; | default = &quot;https://alert.victorops.com/integrations/generic/20131114/alert/&quot; ]</span></span>
<span class="line"><span style="color:#e1e4e8;">  [ pagerduty_url: &lt;string&gt; | default = &quot;https://events.pagerduty.com/v2/enqueue&quot; ]</span></span>
<span class="line"><span style="color:#e1e4e8;">  [ opsgenie_api_key: &lt;secret&gt; ]</span></span>
<span class="line"><span style="color:#e1e4e8;">  [ opsgenie_api_url: &lt;string&gt; | default = &quot;https://api.opsgenie.com/&quot; ]</span></span>
<span class="line"><span style="color:#e1e4e8;">  [ wechat_api_url: &lt;string&gt; | default = &quot;https://qyapi.weixin.qq.com/cgi-bin/&quot; ]</span></span>
<span class="line"><span style="color:#e1e4e8;">  [ wechat_api_secret: &lt;secret&gt; ]</span></span>
<span class="line"><span style="color:#e1e4e8;">  [ wechat_api_corp_id: &lt;string&gt; ]</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  # http默认配置</span></span>
<span class="line"><span style="color:#e1e4e8;">  [ http_config: &lt;http_config&gt; ]</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  # 报警多久结束</span></span>
<span class="line"><span style="color:#e1e4e8;">  [ resolve_timeout: &lt;duration&gt; | default = 5m ]</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 模板文件</span></span>
<span class="line"><span style="color:#e1e4e8;">templates:</span></span>
<span class="line"><span style="color:#e1e4e8;">  [ - &lt;filepath&gt; ... ]</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 路由</span></span>
<span class="line"><span style="color:#e1e4e8;">route: &lt;route&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 通知接收器的列表</span></span>
<span class="line"><span style="color:#e1e4e8;">receivers:</span></span>
<span class="line"><span style="color:#e1e4e8;">  - &lt;receiver&gt; ...</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 一系列抑制规则</span></span>
<span class="line"><span style="color:#e1e4e8;">inhibit_rules:</span></span>
<span class="line"><span style="color:#e1e4e8;">  [ - &lt;inhibit_rule&gt; ... ]</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 静音路由的时间间隔</span></span>
<span class="line"><span style="color:#e1e4e8;">mute_time_intervals:</span></span>
<span class="line"><span style="color:#e1e4e8;">  [ - &lt;mute_time_interval&gt; ... ]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">global:</span></span>
<span class="line"><span style="color:#24292e;">  # 通用邮件通知配置</span></span>
<span class="line"><span style="color:#24292e;">  # 谁发的</span></span>
<span class="line"><span style="color:#24292e;">  [ smtp_from: &lt;tmpl_string&gt; ]</span></span>
<span class="line"><span style="color:#24292e;">  # 服务器地址</span></span>
<span class="line"><span style="color:#24292e;">  # Example: smtp.example.org:587</span></span>
<span class="line"><span style="color:#24292e;">  [ smtp_smarthost: &lt;string&gt; ]</span></span>
<span class="line"><span style="color:#24292e;">  # 服务器用户名</span></span>
<span class="line"><span style="color:#24292e;">  [ smtp_auth_username: &lt;string&gt; ]</span></span>
<span class="line"><span style="color:#24292e;">  # 服务器密码</span></span>
<span class="line"><span style="color:#24292e;">  [ smtp_auth_password: &lt;secret&gt; ]</span></span>
<span class="line"><span style="color:#24292e;">  # 是否使用HTTPS</span></span>
<span class="line"><span style="color:#24292e;">  [ smtp_require_tls: &lt;bool&gt; | default = true ]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  # 内置通知配置</span></span>
<span class="line"><span style="color:#24292e;">  [ slack_api_url: &lt;secret&gt; ]</span></span>
<span class="line"><span style="color:#24292e;">  [ slack_api_url_file: &lt;filepath&gt; ]</span></span>
<span class="line"><span style="color:#24292e;">  [ victorops_api_key: &lt;secret&gt; ]</span></span>
<span class="line"><span style="color:#24292e;">  [ victorops_api_url: &lt;string&gt; | default = &quot;https://alert.victorops.com/integrations/generic/20131114/alert/&quot; ]</span></span>
<span class="line"><span style="color:#24292e;">  [ pagerduty_url: &lt;string&gt; | default = &quot;https://events.pagerduty.com/v2/enqueue&quot; ]</span></span>
<span class="line"><span style="color:#24292e;">  [ opsgenie_api_key: &lt;secret&gt; ]</span></span>
<span class="line"><span style="color:#24292e;">  [ opsgenie_api_url: &lt;string&gt; | default = &quot;https://api.opsgenie.com/&quot; ]</span></span>
<span class="line"><span style="color:#24292e;">  [ wechat_api_url: &lt;string&gt; | default = &quot;https://qyapi.weixin.qq.com/cgi-bin/&quot; ]</span></span>
<span class="line"><span style="color:#24292e;">  [ wechat_api_secret: &lt;secret&gt; ]</span></span>
<span class="line"><span style="color:#24292e;">  [ wechat_api_corp_id: &lt;string&gt; ]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  # http默认配置</span></span>
<span class="line"><span style="color:#24292e;">  [ http_config: &lt;http_config&gt; ]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  # 报警多久结束</span></span>
<span class="line"><span style="color:#24292e;">  [ resolve_timeout: &lt;duration&gt; | default = 5m ]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 模板文件</span></span>
<span class="line"><span style="color:#24292e;">templates:</span></span>
<span class="line"><span style="color:#24292e;">  [ - &lt;filepath&gt; ... ]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 路由</span></span>
<span class="line"><span style="color:#24292e;">route: &lt;route&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 通知接收器的列表</span></span>
<span class="line"><span style="color:#24292e;">receivers:</span></span>
<span class="line"><span style="color:#24292e;">  - &lt;receiver&gt; ...</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 一系列抑制规则</span></span>
<span class="line"><span style="color:#24292e;">inhibit_rules:</span></span>
<span class="line"><span style="color:#24292e;">  [ - &lt;inhibit_rule&gt; ... ]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 静音路由的时间间隔</span></span>
<span class="line"><span style="color:#24292e;">mute_time_intervals:</span></span>
<span class="line"><span style="color:#24292e;">  [ - &lt;mute_time_interval&gt; ... ]</span></span></code></pre></div><h3 id="路由配置" tabindex="-1">路由配置 <a class="header-anchor" href="#路由配置" aria-label="Permalink to &quot;路由配置&quot;">​</a></h3><blockquote><p>可以嵌套</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 接收器</span></span>
<span class="line"><span style="color:#e1e4e8;">[ receiver: &lt;string&gt; ]</span></span>
<span class="line"><span style="color:#e1e4e8;"># 分组</span></span>
<span class="line"><span style="color:#e1e4e8;">[ group_by: &#39;[&#39; &lt;labelname&gt;, ... &#39;]&#39; ]</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 警报是否应该继续匹配后续的同级节点</span></span>
<span class="line"><span style="color:#e1e4e8;">[ continue: &lt;boolean&gt; | default = false ]</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 警报必须满足以匹配该节点的匹配器列表</span></span>
<span class="line"><span style="color:#e1e4e8;">matchers:</span></span>
<span class="line"><span style="color:#e1e4e8;">  [ - &lt;matcher&gt; ... ]</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 一个组的消息最多等待时间</span></span>
<span class="line"><span style="color:#e1e4e8;">[ group_wait: &lt;duration&gt; | default = 30s ]</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 组报警间隔时间</span></span>
<span class="line"><span style="color:#e1e4e8;">[ group_interval: &lt;duration&gt; | default = 5m ]</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 相同的报警间隔时间</span></span>
<span class="line"><span style="color:#e1e4e8;">[ repeat_interval: &lt;duration&gt; | default = 4h ]</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 子路由</span></span>
<span class="line"><span style="color:#e1e4e8;">routes:</span></span>
<span class="line"><span style="color:#e1e4e8;">  [ - &lt;route&gt; ... ]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 接收器</span></span>
<span class="line"><span style="color:#24292e;">[ receiver: &lt;string&gt; ]</span></span>
<span class="line"><span style="color:#24292e;"># 分组</span></span>
<span class="line"><span style="color:#24292e;">[ group_by: &#39;[&#39; &lt;labelname&gt;, ... &#39;]&#39; ]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 警报是否应该继续匹配后续的同级节点</span></span>
<span class="line"><span style="color:#24292e;">[ continue: &lt;boolean&gt; | default = false ]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 警报必须满足以匹配该节点的匹配器列表</span></span>
<span class="line"><span style="color:#24292e;">matchers:</span></span>
<span class="line"><span style="color:#24292e;">  [ - &lt;matcher&gt; ... ]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 一个组的消息最多等待时间</span></span>
<span class="line"><span style="color:#24292e;">[ group_wait: &lt;duration&gt; | default = 30s ]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 组报警间隔时间</span></span>
<span class="line"><span style="color:#24292e;">[ group_interval: &lt;duration&gt; | default = 5m ]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 相同的报警间隔时间</span></span>
<span class="line"><span style="color:#24292e;">[ repeat_interval: &lt;duration&gt; | default = 4h ]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 子路由</span></span>
<span class="line"><span style="color:#24292e;">routes:</span></span>
<span class="line"><span style="color:#24292e;">  [ - &lt;route&gt; ... ]</span></span></code></pre></div><h3 id="接收者配置" tabindex="-1">接收者配置 <a class="header-anchor" href="#接收者配置" aria-label="Permalink to &quot;接收者配置&quot;">​</a></h3><blockquote><p>消息接收方</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 接收者名称,会在路由中使用</span></span>
<span class="line"><span style="color:#e1e4e8;">name: &lt;string&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 各种接收者配置</span></span>
<span class="line"><span style="color:#e1e4e8;">email_configs:</span></span>
<span class="line"><span style="color:#e1e4e8;">  [ - &lt;email_config&gt;, ... ]</span></span>
<span class="line"><span style="color:#e1e4e8;">pagerduty_configs:</span></span>
<span class="line"><span style="color:#e1e4e8;">  [ - &lt;pagerduty_config&gt;, ... ]</span></span>
<span class="line"><span style="color:#e1e4e8;">pushover_configs:</span></span>
<span class="line"><span style="color:#e1e4e8;">  [ - &lt;pushover_config&gt;, ... ]</span></span>
<span class="line"><span style="color:#e1e4e8;">slack_configs:</span></span>
<span class="line"><span style="color:#e1e4e8;">  [ - &lt;slack_config&gt;, ... ]</span></span>
<span class="line"><span style="color:#e1e4e8;">opsgenie_configs:</span></span>
<span class="line"><span style="color:#e1e4e8;">  [ - &lt;opsgenie_config&gt;, ... ]</span></span>
<span class="line"><span style="color:#e1e4e8;">webhook_configs:</span></span>
<span class="line"><span style="color:#e1e4e8;">  [ - &lt;webhook_config&gt;, ... ]</span></span>
<span class="line"><span style="color:#e1e4e8;">victorops_configs:</span></span>
<span class="line"><span style="color:#e1e4e8;">  [ - &lt;victorops_config&gt;, ... ]</span></span>
<span class="line"><span style="color:#e1e4e8;">wechat_configs:</span></span>
<span class="line"><span style="color:#e1e4e8;">  [ - &lt;wechat_config&gt;, ... ]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 接收者名称,会在路由中使用</span></span>
<span class="line"><span style="color:#24292e;">name: &lt;string&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 各种接收者配置</span></span>
<span class="line"><span style="color:#24292e;">email_configs:</span></span>
<span class="line"><span style="color:#24292e;">  [ - &lt;email_config&gt;, ... ]</span></span>
<span class="line"><span style="color:#24292e;">pagerduty_configs:</span></span>
<span class="line"><span style="color:#24292e;">  [ - &lt;pagerduty_config&gt;, ... ]</span></span>
<span class="line"><span style="color:#24292e;">pushover_configs:</span></span>
<span class="line"><span style="color:#24292e;">  [ - &lt;pushover_config&gt;, ... ]</span></span>
<span class="line"><span style="color:#24292e;">slack_configs:</span></span>
<span class="line"><span style="color:#24292e;">  [ - &lt;slack_config&gt;, ... ]</span></span>
<span class="line"><span style="color:#24292e;">opsgenie_configs:</span></span>
<span class="line"><span style="color:#24292e;">  [ - &lt;opsgenie_config&gt;, ... ]</span></span>
<span class="line"><span style="color:#24292e;">webhook_configs:</span></span>
<span class="line"><span style="color:#24292e;">  [ - &lt;webhook_config&gt;, ... ]</span></span>
<span class="line"><span style="color:#24292e;">victorops_configs:</span></span>
<span class="line"><span style="color:#24292e;">  [ - &lt;victorops_config&gt;, ... ]</span></span>
<span class="line"><span style="color:#24292e;">wechat_configs:</span></span>
<span class="line"><span style="color:#24292e;">  [ - &lt;wechat_config&gt;, ... ]</span></span></code></pre></div><h4 id="email接收" tabindex="-1">email接收 <a class="header-anchor" href="#email接收" aria-label="Permalink to &quot;email接收&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">#  是否通知已解决的警报</span></span>
<span class="line"><span style="color:#e1e4e8;">[ send_resolved: &lt;boolean&gt; | default = false ]</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 收件人地址</span></span>
<span class="line"><span style="color:#e1e4e8;">to: &lt;tmpl_string&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 发件人地址</span></span>
<span class="line"><span style="color:#e1e4e8;">[ from: &lt;tmpl_string&gt; | default = global.smtp_from ]</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 服务器地址</span></span>
<span class="line"><span style="color:#e1e4e8;">[ smarthost: &lt;string&gt; | default = global.smtp_smarthost ]</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># SMTP 鉴权</span></span>
<span class="line"><span style="color:#e1e4e8;">[ auth_username: &lt;string&gt; | default = global.smtp_auth_username ]</span></span>
<span class="line"><span style="color:#e1e4e8;">[ auth_password: &lt;secret&gt; | default = global.smtp_auth_password ]</span></span>
<span class="line"><span style="color:#e1e4e8;">[ auth_secret: &lt;secret&gt; | default = global.smtp_auth_secret ]</span></span>
<span class="line"><span style="color:#e1e4e8;">[ auth_identity: &lt;string&gt; | default = global.smtp_auth_identity ]</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 是否使用HTTPS</span></span>
<span class="line"><span style="color:#e1e4e8;">[ require_tls: &lt;bool&gt; | default = global.smtp_require_tls ]</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># HTTPS配置</span></span>
<span class="line"><span style="color:#e1e4e8;">tls_config:</span></span>
<span class="line"><span style="color:#e1e4e8;">  [ &lt;tls_config&gt; ]</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 文本内容</span></span>
<span class="line"><span style="color:#e1e4e8;"># The HTML body of the email notification.</span></span>
<span class="line"><span style="color:#e1e4e8;">[ html: &lt;tmpl_string&gt; | default = &#39;{{ template &quot;email.default.html&quot; . }}&#39; ]</span></span>
<span class="line"><span style="color:#e1e4e8;"># The text body of the email notification.</span></span>
<span class="line"><span style="color:#e1e4e8;">[ text: &lt;tmpl_string&gt; ]</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 标题头</span></span>
<span class="line"><span style="color:#e1e4e8;">[ headers: { &lt;string&gt;: &lt;tmpl_string&gt;, ... } ]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">#  是否通知已解决的警报</span></span>
<span class="line"><span style="color:#24292e;">[ send_resolved: &lt;boolean&gt; | default = false ]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 收件人地址</span></span>
<span class="line"><span style="color:#24292e;">to: &lt;tmpl_string&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 发件人地址</span></span>
<span class="line"><span style="color:#24292e;">[ from: &lt;tmpl_string&gt; | default = global.smtp_from ]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 服务器地址</span></span>
<span class="line"><span style="color:#24292e;">[ smarthost: &lt;string&gt; | default = global.smtp_smarthost ]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># SMTP 鉴权</span></span>
<span class="line"><span style="color:#24292e;">[ auth_username: &lt;string&gt; | default = global.smtp_auth_username ]</span></span>
<span class="line"><span style="color:#24292e;">[ auth_password: &lt;secret&gt; | default = global.smtp_auth_password ]</span></span>
<span class="line"><span style="color:#24292e;">[ auth_secret: &lt;secret&gt; | default = global.smtp_auth_secret ]</span></span>
<span class="line"><span style="color:#24292e;">[ auth_identity: &lt;string&gt; | default = global.smtp_auth_identity ]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 是否使用HTTPS</span></span>
<span class="line"><span style="color:#24292e;">[ require_tls: &lt;bool&gt; | default = global.smtp_require_tls ]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># HTTPS配置</span></span>
<span class="line"><span style="color:#24292e;">tls_config:</span></span>
<span class="line"><span style="color:#24292e;">  [ &lt;tls_config&gt; ]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 文本内容</span></span>
<span class="line"><span style="color:#24292e;"># The HTML body of the email notification.</span></span>
<span class="line"><span style="color:#24292e;">[ html: &lt;tmpl_string&gt; | default = &#39;{{ template &quot;email.default.html&quot; . }}&#39; ]</span></span>
<span class="line"><span style="color:#24292e;"># The text body of the email notification.</span></span>
<span class="line"><span style="color:#24292e;">[ text: &lt;tmpl_string&gt; ]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 标题头</span></span>
<span class="line"><span style="color:#24292e;">[ headers: { &lt;string&gt;: &lt;tmpl_string&gt;, ... } ]</span></span></code></pre></div><h4 id="企业微信通知" tabindex="-1">企业微信通知 <a class="header-anchor" href="#企业微信通知" aria-label="Permalink to &quot;企业微信通知&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">#  是否通知已解决的警报</span></span>
<span class="line"><span style="color:#e1e4e8;">[ send_resolved: &lt;boolean&gt; | default = false ]</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># api_secret</span></span>
<span class="line"><span style="color:#e1e4e8;">[ api_secret: &lt;secret&gt; | default = global.wechat_api_secret ]</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># api_url</span></span>
<span class="line"><span style="color:#e1e4e8;">[ api_url: &lt;string&gt; | default = global.wechat_api_url ]</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 企业id</span></span>
<span class="line"><span style="color:#e1e4e8;">[ corp_id: &lt;string&gt; | default = global.wechat_api_corp_id ]</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 发送内容</span></span>
<span class="line"><span style="color:#e1e4e8;">[ message: &lt;tmpl_string&gt; | default = &#39;{{ template &quot;wechat.default.message&quot; . }}&#39; ]</span></span>
<span class="line"><span style="color:#e1e4e8;"># 消息类型</span></span>
<span class="line"><span style="color:#e1e4e8;">[ message_type: &lt;string&gt; | default = &#39;text&#39; ]</span></span>
<span class="line"><span style="color:#e1e4e8;">[ agent_id: &lt;string&gt; | default = &#39;{{ template &quot;wechat.default.agent_id&quot; . }}&#39; ]</span></span>
<span class="line"><span style="color:#e1e4e8;">[ to_user: &lt;string&gt; | default = &#39;{{ template &quot;wechat.default.to_user&quot; . }}&#39; ]</span></span>
<span class="line"><span style="color:#e1e4e8;">[ to_party: &lt;string&gt; | default = &#39;{{ template &quot;wechat.default.to_party&quot; . }}&#39; ]</span></span>
<span class="line"><span style="color:#e1e4e8;">[ to_tag: &lt;string&gt; | default = &#39;{{ template &quot;wechat.default.to_tag&quot; . }}&#39; ]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">#  是否通知已解决的警报</span></span>
<span class="line"><span style="color:#24292e;">[ send_resolved: &lt;boolean&gt; | default = false ]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># api_secret</span></span>
<span class="line"><span style="color:#24292e;">[ api_secret: &lt;secret&gt; | default = global.wechat_api_secret ]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># api_url</span></span>
<span class="line"><span style="color:#24292e;">[ api_url: &lt;string&gt; | default = global.wechat_api_url ]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 企业id</span></span>
<span class="line"><span style="color:#24292e;">[ corp_id: &lt;string&gt; | default = global.wechat_api_corp_id ]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 发送内容</span></span>
<span class="line"><span style="color:#24292e;">[ message: &lt;tmpl_string&gt; | default = &#39;{{ template &quot;wechat.default.message&quot; . }}&#39; ]</span></span>
<span class="line"><span style="color:#24292e;"># 消息类型</span></span>
<span class="line"><span style="color:#24292e;">[ message_type: &lt;string&gt; | default = &#39;text&#39; ]</span></span>
<span class="line"><span style="color:#24292e;">[ agent_id: &lt;string&gt; | default = &#39;{{ template &quot;wechat.default.agent_id&quot; . }}&#39; ]</span></span>
<span class="line"><span style="color:#24292e;">[ to_user: &lt;string&gt; | default = &#39;{{ template &quot;wechat.default.to_user&quot; . }}&#39; ]</span></span>
<span class="line"><span style="color:#24292e;">[ to_party: &lt;string&gt; | default = &#39;{{ template &quot;wechat.default.to_party&quot; . }}&#39; ]</span></span>
<span class="line"><span style="color:#24292e;">[ to_tag: &lt;string&gt; | default = &#39;{{ template &quot;wechat.default.to_tag&quot; . }}&#39; ]</span></span></code></pre></div><h4 id="http回调" tabindex="-1">http回调 <a class="header-anchor" href="#http回调" aria-label="Permalink to &quot;http回调&quot;">​</a></h4><blockquote><p>向指定的 url 发送 POST HTTP请求</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">#  是否通知已解决的警报</span></span>
<span class="line"><span style="color:#e1e4e8;">[ send_resolved: &lt;boolean&gt; | default = true ]</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 发送url</span></span>
<span class="line"><span style="color:#e1e4e8;">url: &lt;string&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># HTTP配置</span></span>
<span class="line"><span style="color:#e1e4e8;">[ http_config: &lt;http_config&gt; | default = global.http_config ]</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 单次最大消息量</span></span>
<span class="line"><span style="color:#e1e4e8;"># 默认 0 为所有</span></span>
<span class="line"><span style="color:#e1e4e8;">[ max_alerts: &lt;int&gt; | default = 0 ]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">#  是否通知已解决的警报</span></span>
<span class="line"><span style="color:#24292e;">[ send_resolved: &lt;boolean&gt; | default = true ]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 发送url</span></span>
<span class="line"><span style="color:#24292e;">url: &lt;string&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># HTTP配置</span></span>
<span class="line"><span style="color:#24292e;">[ http_config: &lt;http_config&gt; | default = global.http_config ]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 单次最大消息量</span></span>
<span class="line"><span style="color:#24292e;"># 默认 0 为所有</span></span>
<span class="line"><span style="color:#24292e;">[ max_alerts: &lt;int&gt; | default = 0 ]</span></span></code></pre></div><p>实例消息</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;version&quot;: &quot;4&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;groupKey&quot;: &lt;string&gt;,              	// 分组</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;truncatedAlerts&quot;: &lt;int&gt;,          	// 由于“max_alerts”，已截断了多少警报</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;status&quot;: &quot;&lt;resolved|firing&gt;&quot;,     	// 报警状态</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;receiver&quot;: &lt;string&gt;,              	// 接收器名称</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;groupLabels&quot;: &lt;object&gt;,						</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;commonLabels&quot;: &lt;object&gt;,						</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;commonAnnotations&quot;: &lt;object&gt;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;externalURL&quot;: &lt;string&gt;,            // 回退到 Alertmanager 的地址</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;alerts&quot;: [													// 报警列表</span></span>
<span class="line"><span style="color:#e1e4e8;">    {</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;status&quot;: &quot;&lt;resolved|firing&gt;&quot;,	// 通知状态</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;labels&quot;: &lt;object&gt;,							// 标签</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;annotations&quot;: &lt;object&gt;,				</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;startsAt&quot;: &quot;&lt;rfc3339&gt;&quot;,				// 开始时间</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;endsAt&quot;: &quot;&lt;rfc3339&gt;&quot;,					// 结束时间</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;generatorURL&quot;: &lt;string&gt;,      // identifies the entity that caused the alert</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;fingerprint&quot;: &lt;string&gt;        // fingerprint to identify the alert</span></span>
<span class="line"><span style="color:#e1e4e8;">    },</span></span>
<span class="line"><span style="color:#e1e4e8;">    ...</span></span>
<span class="line"><span style="color:#e1e4e8;">  ]</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  &quot;version&quot;: &quot;4&quot;,</span></span>
<span class="line"><span style="color:#24292e;">  &quot;groupKey&quot;: &lt;string&gt;,              	// 分组</span></span>
<span class="line"><span style="color:#24292e;">  &quot;truncatedAlerts&quot;: &lt;int&gt;,          	// 由于“max_alerts”，已截断了多少警报</span></span>
<span class="line"><span style="color:#24292e;">  &quot;status&quot;: &quot;&lt;resolved|firing&gt;&quot;,     	// 报警状态</span></span>
<span class="line"><span style="color:#24292e;">  &quot;receiver&quot;: &lt;string&gt;,              	// 接收器名称</span></span>
<span class="line"><span style="color:#24292e;">  &quot;groupLabels&quot;: &lt;object&gt;,						</span></span>
<span class="line"><span style="color:#24292e;">  &quot;commonLabels&quot;: &lt;object&gt;,						</span></span>
<span class="line"><span style="color:#24292e;">  &quot;commonAnnotations&quot;: &lt;object&gt;,</span></span>
<span class="line"><span style="color:#24292e;">  &quot;externalURL&quot;: &lt;string&gt;,            // 回退到 Alertmanager 的地址</span></span>
<span class="line"><span style="color:#24292e;">  &quot;alerts&quot;: [													// 报警列表</span></span>
<span class="line"><span style="color:#24292e;">    {</span></span>
<span class="line"><span style="color:#24292e;">      &quot;status&quot;: &quot;&lt;resolved|firing&gt;&quot;,	// 通知状态</span></span>
<span class="line"><span style="color:#24292e;">      &quot;labels&quot;: &lt;object&gt;,							// 标签</span></span>
<span class="line"><span style="color:#24292e;">      &quot;annotations&quot;: &lt;object&gt;,				</span></span>
<span class="line"><span style="color:#24292e;">      &quot;startsAt&quot;: &quot;&lt;rfc3339&gt;&quot;,				// 开始时间</span></span>
<span class="line"><span style="color:#24292e;">      &quot;endsAt&quot;: &quot;&lt;rfc3339&gt;&quot;,					// 结束时间</span></span>
<span class="line"><span style="color:#24292e;">      &quot;generatorURL&quot;: &lt;string&gt;,      // identifies the entity that caused the alert</span></span>
<span class="line"><span style="color:#24292e;">      &quot;fingerprint&quot;: &lt;string&gt;        // fingerprint to identify the alert</span></span>
<span class="line"><span style="color:#24292e;">    },</span></span>
<span class="line"><span style="color:#24292e;">    ...</span></span>
<span class="line"><span style="color:#24292e;">  ]</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div>`,18),i=[t,o,c];function r(g,y,u,d,_,h){return a(),e("div",null,i)}const q=n(p,[["render",r]]);export{f as __pageData,q as default};
