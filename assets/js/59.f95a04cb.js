(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{383:function(t,a,e){"use strict";e.r(a);var r=e(19),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"使用准备"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用准备"}},[t._v("#")]),t._v(" 使用准备")]),t._v(" "),e("ol",[e("li",[t._v("Travis CI 只支持 Github，不支持其他代码托管服务\n"),e("ol",[e("li",[t._v("拥有 GitHub 帐号")]),t._v(" "),e("li",[t._v("该帐号下面有一个项目")]),t._v(" "),e("li",[t._v("该项目里面有可运行的代码")])])]),t._v(" "),e("li",[t._v("访问官方网站 "),e("a",{attrs:{href:"https://travis-ci.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("travis"),e("OutboundLink")],1),t._v("，使用 Github 账户登入 Travis CI。")]),t._v(" "),e("li",[t._v("Travis 会列出 Github 上面你的所有仓库，以及你所属于的组织。此时，选择你需要 Travis 帮你构建的仓库，打开仓库旁边的开关。一旦激活了一个仓库，Travis 会监听这个仓库的所有变化")])]),t._v(" "),e("h2",{attrs:{id:"配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),e("p",[t._v("Travis 要求项目的根目录下面，必须有一个"),e("code",[t._v(".travis.yml")]),t._v("文件。这是配置文件，指定了 Travis 的行为。该文件必须保存在 Github 仓库里面，一旦代码仓库有新的 Commit，Travis 就会去找这个文件，执行里面的命令。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("language: node_js\nnode_js:\n  - lts/*\nscript:\n  - npm run docs:build\n  - npm run cname\ndeploy:\n  provider: pages\n  # Git项目\n  repo: db117/db117.github.io\n  # 不清理编译文件\n  skip-cleanup: true\n  # 目录\n  local_dir: docs/.vuepress/dist\n  # token\n  github-token: $github\n  keep-history: true\n  # 用token的邮箱用户名提交\n  committer_from_gh: true\n  # 目标分支\n  target_branch: master\n")])])]),e("h2",{attrs:{id:"使用技巧"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用技巧"}},[t._v("#")]),t._v(" 使用技巧")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("环境变量")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v(".travis.yml")]),t._v("的"),e("code",[t._v("env")]),t._v("字段可以定义环境变量。然后，脚本内部就使用这些变量了。")])]),t._v(" "),e("li",[e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('env:\n  - DB=postgres\n  - SH=bash\n  - PACKAGE_VERSION="1.0.*"\n')])])])]),t._v(" "),e("li",[e("p",[t._v("有些环境变量（比如用户名和密码）不能公开，这时可以通过 Travis 网站，写在每个仓库的设置页里面，Travis 会自动把它们加入环境变量。这样一来，脚本内部依然可以使用这些环境变量，但是只有管理员才能看到变量的值。具体操作请看"),e("a",{attrs:{href:"https://docs.travis-ci.com/user/environment-variables",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("在使用时用$+变量名")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("github-token: $github\n")])])])])])])])])])])}),[],!1,null,null,null);a.default=s.exports}}]);