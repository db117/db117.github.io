(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{459:function(t,s,n){"use strict";n.r(s);var a=n(27),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"limitrange"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#limitrange"}},[t._v("#")]),t._v(" LimitRange")]),t._v(" "),n("blockquote",[n("p",[t._v("设置命名空间中资源的使用限制")]),t._v(" "),n("p",[t._v("LimitRange 类型为 Pod 中，不能设置 Default。")]),t._v(" "),n("p",[t._v("1cpu=1000m,最小单位为100M")]),t._v(" "),n("p",[t._v("内存在使用中超过限制,会被kill掉 重启")])]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("apiVersion: v1\nkind: LimitRange\nmetadata:\n  name: limit-test\nspec:\n  limits:\n    - type: Pod        \t# 对Pod中所有容器资源总和进行限制\n      max:\t\t\t\t\t\t\t#  Pod 中所有容器的 Limits 值总和的上限\n        cpu: 4000m\n        memory: 2048Mi \n      min:\t\t\t\t\t\t\t# Pod 中所有容器的 Requests 值总和的下限。\n        cpu: 10m\n        memory: 128Mi \n      maxLimitRequestRatio: \n# Pod 中全部容器设置 Limits 总和与 Requests 总和的比例的值\n# 不能超过 maxLimitRequestRatio 参数设置的值，\n# 即 (All Container Limits)/(All Container Requests) ≤ maxLimitRequestRatio\n        cpu: 5\n        memory: 5\n    - type: Container  \t# 对Pod中所有容器资源进行限制\n      max:\t\t\t\t\t\t\t#  Pod 中所有容器的 Requests 值下限\n        cpu: 2000m\n        memory: 1024Mi\n      min:\t\t\t\t\t\t\t#  Pod 中所有容器的 Requests 值下限\n        cpu: 10m\n        memory: 128Mi \n      maxLimitRequestRatio:  \t# Pod 中的容器设置 Limits 与 Requests 的比例的值不能超过 \n      \t\t\t\t\t\t\t\t\t\t\t\t# maxLimitRequestRatio 参数设置的值，\n      \t\t\t\t\t\t\t\t\t\t\t\t# 即 Limits/Requests ≤ maxLimitRequestRatio\n        cpu: 5\n        memory: 5\n      default:\t\t\t\t\t\t\t\t# Pod 中容器未指定 Limits 时，将此值设置为默认值。\n        cpu: 1000m\n        memory: 512Mi\n      defaultRequest:\t\t\t\t\t# Pod 中容器未指定 Requests 是，将此值设置为默认值。\n        cpu: 500m\n        memory: 256Mi\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br"),n("span",{staticClass:"line-number"},[t._v("32")]),n("br"),n("span",{staticClass:"line-number"},[t._v("33")]),n("br"),n("span",{staticClass:"line-number"},[t._v("34")]),n("br"),n("span",{staticClass:"line-number"},[t._v("35")]),n("br"),n("span",{staticClass:"line-number"},[t._v("36")]),n("br"),n("span",{staticClass:"line-number"},[t._v("37")]),n("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);