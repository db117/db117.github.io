(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{436:function(n,e,t){"use strict";t.r(e);var a=t(25),s=Object(a.a)({},(function(){var n=this.$createElement,e=this._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[e("h3",{attrs:{id:"常用设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用设置"}},[this._v("#")]),this._v(" 常用设置")]),this._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('# 设置Agent命名空间，它用来隔离追踪和监控数据，当两个应用使用不同的名称空间时，跨进程传播链会中断。\nagent.namespace=${SW_AGENT_NAMESPACE:default-namespace}\n \n# 设置服务名称，会在 Skywalking UI 上显示的名称\nagent.service_name=${SW_AGENT_NAME:Your_ApplicationName}\n \n# 每 3秒采集的样本跟踪比例，如果是负数则表示 100%采集\nagent.sample_n_per_3_secs=${SW_AGENT_SAMPLE:-1}\n \n# 启用 Debug ，如果为 true 则将把所有检测到的类文件保存在"/debug"文件夹中\n# agent.is_open_debugging_class = ${SW_AGENT_OPEN_DEBUG:true}\n \n# 后端的 collector 端口及地址\ncollector.backend_service=${SW_AGENT_COLLECTOR_BACKEND_SERVICES:192.168.2.215:11800}\n \n# 日志级别\nlogging.level=${SW_LOGGING_LEVEL:DEBUG}\n\n# 这个配置项控制SpringMVC插件是否应该收集请求的参数\nplugin.springmvc.collect_http_params=true\n\n# mysql plugin configuration\n# 收集MySQL执行参数\n# plugin.mysql.trace_sql_parameters=${SW_MYSQL_TRACE_SQL_PARAMETERS:false}\n')])])])])}),[],!1,null,null,null);e.default=s.exports}}]);