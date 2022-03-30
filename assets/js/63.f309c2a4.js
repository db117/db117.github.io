(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{469:function(s,e,a){"use strict";a.r(e);var t=a(34),n=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),a("blockquote",[a("p",[s._v("自动化部署服务器")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.jenkins.io/zh/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官网"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/jenkinsci/jenkins",target:"_blank",rel:"noopener noreferrer"}},[s._v("github"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"流水线"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#流水线"}},[s._v("#")]),s._v(" 流水线")]),s._v(" "),a("h3",{attrs:{id:"使用带密码的用户名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用带密码的用户名"}},[s._v("#")]),s._v(" 使用带密码的用户名")]),s._v(" "),a("blockquote",[a("p",[a("code",[s._v("environment { \\COMMON_CREDS = credentials('jenkins-bitbucket-common-creds') }")])]),s._v(" "),a("p",[s._v("上面会生成三个参数")]),s._v(" "),a("p",[s._v("$COMMON_CREDS(username:password)")]),s._v(" "),a("p",[s._v("$COMMON_CREDS_USR")]),s._v(" "),a("p",[s._v("$COMMON_CREDS_PSW")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("environment {\n    BITBUCKET_COMMON_CREDS = credentials('jenkins-bitbucket-common-creds')\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"将可变密码传递给外部shell"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#将可变密码传递给外部shell"}},[s._v("#")]),s._v(" 将可变密码传递给外部shell")]),s._v(" "),a("blockquote",[a("p",[s._v("设置环境变量")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("export PASS=${PASSWORD}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"将变量从shell脚本传递给jenkins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#将变量从shell脚本传递给jenkins"}},[s._v("#")]),s._v(" 将变量从shell脚本传递给jenkins")]),s._v(" "),a("blockquote",[a("p",[s._v("使用一个变量接受shell执行结果")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("def res = sh(\n  returnStdout: true, \n  script: 'pwd'\n)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"使当前stages失败"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使当前stages失败"}},[s._v("#")]),s._v(" 使当前stages失败")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sh 'exit 1' \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"失败后继续"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#失败后继续"}},[s._v("#")]),s._v(" 失败后继续")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("shell失败")]),s._v(" "),a("blockquote",[a("p",[s._v("永远返回true")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sh 'cd 123 || true'\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("failFast属性")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("failFast false\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("try catch")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("script {\n  try {\n      sh 'do your stuff'\n  } catch (Exception e) {\n      sh 'Handle the exception!'\n  }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);