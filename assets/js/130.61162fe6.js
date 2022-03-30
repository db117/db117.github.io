(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{533:function(a,r,e){"use strict";e.r(r);var t=e(34),s=Object(t.a)({},(function(){var a=this,r=a.$createElement,e=a._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"javaexec"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#javaexec"}},[a._v("#")]),a._v(" JavaExec")]),a._v(" "),e("blockquote",[e("p",[e("a",{attrs:{href:"https://docs.gradle.org/current/javadoc/org/gradle/api/tasks/JavaExec.html",target:"_blank",rel:"noopener noreferrer"}},[e("code",[a._v("JavaExec")]),e("OutboundLink")],1)]),a._v(" "),e("p",[a._v("就是执行java class的main方法")])]),a._v(" "),e("h3",{attrs:{id:"简单使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简单使用"}},[a._v("#")]),a._v(" 简单使用")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("plugins {\n    id 'java'\n}\n\ntask runApp(type: JavaExec) {\n  classpath = sourceSets.main.runtimeClasspath\n  mainClass = 'package.Main'\n  // main参数\n  args 'appArg1'\n}\n\n// 创建jar\njar {\n  manifest {\n    attributes('Main-Class': 'package.Main')\n  }\n}\n\ntask runExecutableJar(type: JavaExec) {\n  // 只能有一个jar存在\n  classpath = files(tasks.jar)\n\n  // main可以不定义\n\n  // main参数\n  args 'appArg1'\n}\n\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br"),e("span",{staticClass:"line-number"},[a._v("16")]),e("br"),e("span",{staticClass:"line-number"},[a._v("17")]),e("br"),e("span",{staticClass:"line-number"},[a._v("18")]),e("br"),e("span",{staticClass:"line-number"},[a._v("19")]),e("br"),e("span",{staticClass:"line-number"},[a._v("20")]),e("br"),e("span",{staticClass:"line-number"},[a._v("21")]),e("br"),e("span",{staticClass:"line-number"},[a._v("22")]),e("br"),e("span",{staticClass:"line-number"},[a._v("23")]),e("br"),e("span",{staticClass:"line-number"},[a._v("24")]),e("br"),e("span",{staticClass:"line-number"},[a._v("25")]),e("br"),e("span",{staticClass:"line-number"},[a._v("26")]),e("br"),e("span",{staticClass:"line-number"},[a._v("27")]),e("br"),e("span",{staticClass:"line-number"},[a._v("28")]),e("br")])]),e("h3",{attrs:{id:"属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#属性"}},[a._v("#")]),a._v(" 属性")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("属性")]),a._v(" "),e("th",[a._v("描述")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[e("a",{attrs:{href:"https://docs.gradle.org/current/dsl/org.gradle.api.tasks.JavaExec.html#org.gradle.api.tasks.JavaExec:allJvmArgs",target:"_blank",rel:"noopener noreferrer"}},[e("code",[a._v("allJvmArgs")]),e("OutboundLink")],1)]),a._v(" "),e("td",[a._v("用于启动进程的 JVM 的完整参数集")])]),a._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"https://docs.gradle.org/current/dsl/org.gradle.api.tasks.JavaExec.html#org.gradle.api.tasks.JavaExec:args",target:"_blank",rel:"noopener noreferrer"}},[e("code",[a._v("args")]),e("OutboundLink")],1)]),a._v(" "),e("td",[a._v("main方法参数")])]),a._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"https://docs.gradle.org/current/dsl/org.gradle.api.tasks.JavaExec.html#org.gradle.api.tasks.JavaExec:classpath",target:"_blank",rel:"noopener noreferrer"}},[e("code",[a._v("classpath")]),e("OutboundLink")],1)]),a._v(" "),e("td",[a._v("classpath")])]),a._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"https://docs.gradle.org/current/dsl/org.gradle.api.tasks.JavaExec.html#org.gradle.api.tasks.JavaExec:enableAssertions",target:"_blank",rel:"noopener noreferrer"}},[e("code",[a._v("enableAssertions")]),e("OutboundLink")],1)]),a._v(" "),e("td",[a._v("是否启用断言")])]),a._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"https://docs.gradle.org/current/dsl/org.gradle.api.tasks.JavaExec.html#org.gradle.api.tasks.JavaExec:environment",target:"_blank",rel:"noopener noreferrer"}},[e("code",[a._v("environment")]),e("OutboundLink")],1)]),a._v(" "),e("td",[a._v("环境变量")])]),a._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"https://docs.gradle.org/current/dsl/org.gradle.api.tasks.JavaExec.html#org.gradle.api.tasks.JavaExec:errorOutput",target:"_blank",rel:"noopener noreferrer"}},[e("code",[a._v("errorOutput")]),e("OutboundLink")],1)]),a._v(" "),e("td",[a._v("错误输出. 默认 "),e("code",[a._v("System.err")]),a._v(".")])]),a._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"https://docs.gradle.org/current/dsl/org.gradle.api.tasks.JavaExec.html#org.gradle.api.tasks.JavaExec:mainClass",target:"_blank",rel:"noopener noreferrer"}},[e("code",[a._v("mainClass")]),e("OutboundLink")],1)]),a._v(" "),e("td",[a._v("需要执行的类")])]),a._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"https://docs.gradle.org/current/dsl/org.gradle.api.tasks.JavaExec.html#org.gradle.api.tasks.JavaExec:maxHeapSize",target:"_blank",rel:"noopener noreferrer"}},[e("code",[a._v("maxHeapSize")]),e("OutboundLink")],1)]),a._v(" "),e("td",[a._v("最大堆大小")])]),a._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"https://docs.gradle.org/current/dsl/org.gradle.api.tasks.JavaExec.html#org.gradle.api.tasks.JavaExec:systemProperties",target:"_blank",rel:"noopener noreferrer"}},[e("code",[a._v("systemProperties")]),e("OutboundLink")],1)]),a._v(" "),e("td",[a._v("系统属性")])]),a._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"https://docs.gradle.org/current/dsl/org.gradle.api.tasks.JavaExec.html#org.gradle.api.tasks.JavaExec:workingDir",target:"_blank",rel:"noopener noreferrer"}},[e("code",[a._v("workingDir")]),e("OutboundLink")],1)]),a._v(" "),e("td",[a._v("工作目录，默认项目目录")])])])])])}),[],!1,null,null,null);r.default=s.exports}}]);