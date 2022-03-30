(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{491:function(s,n,a){"use strict";a.r(n);var t=a(34),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("blockquote",[a("p",[s._v("Prometheus 中的报警发送给 alertmanager . 在通过分组,过滤,抑制后发送给不同的通知接收器的列表")])]),s._v(" "),a("iframe",{staticStyle:{display:"block",width:"725px",height:"245px"},attrs:{id:"embed_dom",name:"embed_dom",frameborder:"0",src:"https://www.processon.com/embed/60e579a51e08530a5074c834"}}),s._v(" "),a("h2",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),a("h3",{attrs:{id:"通用配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通用配置"}},[s._v("#")]),s._v(" 通用配置")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('global:\n  # 通用邮件通知配置\n  # 谁发的\n  [ smtp_from: <tmpl_string> ]\n  # 服务器地址\n  # Example: smtp.example.org:587\n  [ smtp_smarthost: <string> ]\n  # 服务器用户名\n  [ smtp_auth_username: <string> ]\n  # 服务器密码\n  [ smtp_auth_password: <secret> ]\n  # 是否使用HTTPS\n  [ smtp_require_tls: <bool> | default = true ]\n\n  # 内置通知配置\n  [ slack_api_url: <secret> ]\n  [ slack_api_url_file: <filepath> ]\n  [ victorops_api_key: <secret> ]\n  [ victorops_api_url: <string> | default = "https://alert.victorops.com/integrations/generic/20131114/alert/" ]\n  [ pagerduty_url: <string> | default = "https://events.pagerduty.com/v2/enqueue" ]\n  [ opsgenie_api_key: <secret> ]\n  [ opsgenie_api_url: <string> | default = "https://api.opsgenie.com/" ]\n  [ wechat_api_url: <string> | default = "https://qyapi.weixin.qq.com/cgi-bin/" ]\n  [ wechat_api_secret: <secret> ]\n  [ wechat_api_corp_id: <string> ]\n\n  # http默认配置\n  [ http_config: <http_config> ]\n\n  # 报警多久结束\n  [ resolve_timeout: <duration> | default = 5m ]\n\n# 模板文件\ntemplates:\n  [ - <filepath> ... ]\n\n# 路由\nroute: <route>\n\n# 通知接收器的列表\nreceivers:\n  - <receiver> ...\n\n# 一系列抑制规则\ninhibit_rules:\n  [ - <inhibit_rule> ... ]\n\n# 静音路由的时间间隔\nmute_time_intervals:\n  [ - <mute_time_interval> ... ]\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br")])]),a("h3",{attrs:{id:"路由配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由配置"}},[s._v("#")]),s._v(" 路由配置")]),s._v(" "),a("blockquote",[a("p",[s._v("可以嵌套")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 接收器\n[ receiver: <string> ]\n# 分组\n[ group_by: '[' <labelname>, ... ']' ]\n\n# 警报是否应该继续匹配后续的同级节点\n[ continue: <boolean> | default = false ]\n\n# 警报必须满足以匹配该节点的匹配器列表\nmatchers:\n  [ - <matcher> ... ]\n\n# 一个组的消息最多等待时间\n[ group_wait: <duration> | default = 30s ]\n\n# 组报警间隔时间\n[ group_interval: <duration> | default = 5m ]\n\n# 相同的报警间隔时间\n[ repeat_interval: <duration> | default = 4h ]\n\n# 子路由\nroutes:\n  [ - <route> ... ]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("h3",{attrs:{id:"接收者配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接收者配置"}},[s._v("#")]),s._v(" 接收者配置")]),s._v(" "),a("blockquote",[a("p",[s._v("消息接收方")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 接收者名称,会在路由中使用\nname: <string>\n\n# 各种接收者配置\nemail_configs:\n  [ - <email_config>, ... ]\npagerduty_configs:\n  [ - <pagerduty_config>, ... ]\npushover_configs:\n  [ - <pushover_config>, ... ]\nslack_configs:\n  [ - <slack_config>, ... ]\nopsgenie_configs:\n  [ - <opsgenie_config>, ... ]\nwebhook_configs:\n  [ - <webhook_config>, ... ]\nvictorops_configs:\n  [ - <victorops_config>, ... ]\nwechat_configs:\n  [ - <wechat_config>, ... ]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("h4",{attrs:{id:"email接收"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#email接收"}},[s._v("#")]),s._v(" email接收")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#  是否通知已解决的警报\n[ send_resolved: <boolean> | default = false ]\n\n# 收件人地址\nto: <tmpl_string>\n\n# 发件人地址\n[ from: <tmpl_string> | default = global.smtp_from ]\n\n# 服务器地址\n[ smarthost: <string> | default = global.smtp_smarthost ]\n\n# SMTP 鉴权\n[ auth_username: <string> | default = global.smtp_auth_username ]\n[ auth_password: <secret> | default = global.smtp_auth_password ]\n[ auth_secret: <secret> | default = global.smtp_auth_secret ]\n[ auth_identity: <string> | default = global.smtp_auth_identity ]\n\n# 是否使用HTTPS\n[ require_tls: <bool> | default = global.smtp_require_tls ]\n\n# HTTPS配置\ntls_config:\n  [ <tls_config> ]\n\n# 文本内容\n# The HTML body of the email notification.\n[ html: <tmpl_string> | default = '{{ template \"email.default.html\" . }}' ]\n# The text body of the email notification.\n[ text: <tmpl_string> ]\n\n# 标题头\n[ headers: { <string>: <tmpl_string>, ... } ]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br")])]),a("h4",{attrs:{id:"企业微信通知"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#企业微信通知"}},[s._v("#")]),s._v(" 企业微信通知")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#  是否通知已解决的警报\n[ send_resolved: <boolean> | default = false ]\n\n# api_secret\n[ api_secret: <secret> | default = global.wechat_api_secret ]\n\n# api_url\n[ api_url: <string> | default = global.wechat_api_url ]\n\n# 企业id\n[ corp_id: <string> | default = global.wechat_api_corp_id ]\n\n# 发送内容\n[ message: <tmpl_string> | default = '{{ template \"wechat.default.message\" . }}' ]\n# 消息类型\n[ message_type: <string> | default = 'text' ]\n[ agent_id: <string> | default = '{{ template \"wechat.default.agent_id\" . }}' ]\n[ to_user: <string> | default = '{{ template \"wechat.default.to_user\" . }}' ]\n[ to_party: <string> | default = '{{ template \"wechat.default.to_party\" . }}' ]\n[ to_tag: <string> | default = '{{ template \"wechat.default.to_tag\" . }}' ]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("h4",{attrs:{id:"http回调"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http回调"}},[s._v("#")]),s._v(" http回调")]),s._v(" "),a("blockquote",[a("p",[s._v("向指定的 url 发送 POST HTTP请求")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#  是否通知已解决的警报\n[ send_resolved: <boolean> | default = true ]\n\n# 发送url\nurl: <string>\n\n# HTTP配置\n[ http_config: <http_config> | default = global.http_config ]\n\n# 单次最大消息量\n# 默认 0 为所有\n[ max_alerts: <int> | default = 0 ]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("实例消息")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('{\n  "version": "4",\n  "groupKey": <string>,              \t// 分组\n  "truncatedAlerts": <int>,          \t// 由于“max_alerts”，已截断了多少警报\n  "status": "<resolved|firing>",     \t// 报警状态\n  "receiver": <string>,              \t// 接收器名称\n  "groupLabels": <object>,\t\t\t\t\t\t\n  "commonLabels": <object>,\t\t\t\t\t\t\n  "commonAnnotations": <object>,\n  "externalURL": <string>,            // 回退到 Alertmanager 的地址\n  "alerts": [\t\t\t\t\t\t\t\t\t\t\t\t\t// 报警列表\n    {\n      "status": "<resolved|firing>",\t// 通知状态\n      "labels": <object>,\t\t\t\t\t\t\t// 标签\n      "annotations": <object>,\t\t\t\t\n      "startsAt": "<rfc3339>",\t\t\t\t// 开始时间\n      "endsAt": "<rfc3339>",\t\t\t\t\t// 结束时间\n      "generatorURL": <string>,      // identifies the entity that caused the alert\n      "fingerprint": <string>        // fingerprint to identify the alert\n    },\n    ...\n  ]\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);