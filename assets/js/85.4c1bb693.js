(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{455:function(e,t,a){"use strict";a.r(t);var n=a(26),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h3",{attrs:{id:"删除字段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除字段"}},[e._v("#")]),e._v(" 删除字段")]),e._v(" "),a("blockquote",[a("p",[e._v("在任意插件中添加")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('# 删除字段\n        remove_field => ["host","agent","ecs","tags","fields","@version","stream","log","input"]\n        remove_field => [ "[kubernetes][namespace_uid]"]\n        remove_field => [ "[kubernetes][node][labels]"]\n        remove_field => [ "[kubernetes][node][uid]" ]\n        remove_field => [ "[kubernetes][pod][uid]" ]\n')])])]),a("h3",{attrs:{id:"判断"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#判断"}},[e._v("#")]),e._v(" 判断")]),e._v(" "),a("blockquote",[a("p",[e._v("嵌套判断,取值使用[1][2]")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('\t\tif [kubernetes][labels][profile] {\n        mutate { add_field => { "[@metadata][profile]" => "%{[kubernetes][labels][profile]}" } }\n    }else {\n        mutate { add_field => { "[@metadata][profile]" => "unknownProfile" } }\n    }\n\n')])])]),a("p",[a("a",{attrs:{href:"https://www.elastic.co/guide/en/logstash/6.7/event-dependent-configuration.html#conditionals",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方文档"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=s.exports}}]);