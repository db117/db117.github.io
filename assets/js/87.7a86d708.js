(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{363:function(e,s,t){"use strict";t.r(s);var a=t(10),n=Object(a.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h3",{attrs:{id:"删除字段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除字段"}},[e._v("#")]),e._v(" 删除字段")]),e._v(" "),s("blockquote",[s("p",[e._v("在任意插件中添加")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('# 删除字段\n        remove_field => ["host","agent","ecs","tags","fields","@version","stream","log","input"]\n        remove_field => [ "[kubernetes][namespace_uid]"]\n        remove_field => [ "[kubernetes][node][labels]"]\n        remove_field => [ "[kubernetes][node][uid]" ]\n        remove_field => [ "[kubernetes][pod][uid]" ]\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])]),s("h3",{attrs:{id:"判断"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#判断"}},[e._v("#")]),e._v(" 判断")]),e._v(" "),s("blockquote",[s("p",[e._v("嵌套判断,取值使用[1][2]")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('\t\tif [kubernetes][labels][profile] {\n        mutate { add_field => { "[@metadata][profile]" => "%{[kubernetes][labels][profile]}" } }\n    }else {\n        mutate { add_field => { "[@metadata][profile]" => "unknownProfile" } }\n    }\n\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])]),s("p",[s("a",{attrs:{href:"https://www.elastic.co/guide/en/logstash/6.7/event-dependent-configuration.html#conditionals",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方文档"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);