(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{365:function(n,s,a){"use strict";a.r(s);var e=a(10),t=Object(e.a)({},(function(){var n=this,s=n._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h3",{attrs:{id:"常用设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用设置"}},[n._v("#")]),n._v(" 常用设置")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v('# 设置Agent命名空间，它用来隔离追踪和监控数据，当两个应用使用不同的名称空间时，跨进程传播链会中断。\nagent.namespace=${SW_AGENT_NAMESPACE:default-namespace}\n \n# 设置服务名称，会在 Skywalking UI 上显示的名称\nagent.service_name=${SW_AGENT_NAME:Your_ApplicationName}\n \n# 每 3 秒采集的样本跟踪数量，如果是负数则表示 100% 采集\nagent.sample_n_per_3_secs=${SW_AGENT_SAMPLE:-1}\n\n# 单个 segment 最大跨度\nagent.trace_segment_ref_limit_per_span=${SW_TRACE_SEGMENT_LIMIT:500}\n\n# 忽略后缀\nagent.ignore_suffix=${SW_AGENT_IGNORE_SUFFIX:.jpg,.jpeg,.js,.css,.png,.bmp,.gif,.ico,.mp3,.mp4,.html,.svg}\n \n# 启用 Debug ，如果为 true 则将把所有检测到的类文件保存在"/debug"文件夹中\n# agent.is_open_debugging_class = ${SW_AGENT_OPEN_DEBUG:true}\n \n# 后端的 collector 端口及地址\ncollector.backend_service=${SW_AGENT_COLLECTOR_BACKEND_SERVICES:192.168.2.215:11800}\n\n# 当后端不可用时，是否继续追踪\nagent.keep_tracing=${SW_AGENT_KEEP_TRACING:false}\n\n# 日志级别\nlogging.level=${SW_LOGGING_LEVEL:DEBUG}\n\n# 日志名称\nlogging.file_name=${SW_LOGGING_FILE_NAME:skywalking-api.log}\n\n# 日志目录\nlogging.dir=${SW_LOGGING_DIR:}\n\n# 这个配置项控制SpringMVC插件是否应该收集请求的参数\nplugin.springmvc.collect_http_params=true\n\n# mysql plugin configuration\n# 收集MySQL执行参数\n# plugin.mysql.trace_sql_parameters=${SW_MYSQL_TRACE_SQL_PARAMETERS:false}\n')])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br"),s("span",{staticClass:"line-number"},[n._v("30")]),s("br"),s("span",{staticClass:"line-number"},[n._v("31")]),s("br"),s("span",{staticClass:"line-number"},[n._v("32")]),s("br"),s("span",{staticClass:"line-number"},[n._v("33")]),s("br"),s("span",{staticClass:"line-number"},[n._v("34")]),s("br"),s("span",{staticClass:"line-number"},[n._v("35")]),s("br"),s("span",{staticClass:"line-number"},[n._v("36")]),s("br"),s("span",{staticClass:"line-number"},[n._v("37")]),s("br"),s("span",{staticClass:"line-number"},[n._v("38")]),s("br"),s("span",{staticClass:"line-number"},[n._v("39")]),s("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);