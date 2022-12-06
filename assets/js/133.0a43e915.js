(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{406:function(s,a,t){"use strict";t.r(a);var e=t(10),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"提交数统计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提交数统计"}},[s._v("#")]),s._v(" "),a("strong",[s._v("提交数统计")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("git log --oneline | wc -l\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"查看提交者排名前n位"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看提交者排名前n位"}},[s._v("#")]),s._v(" "),a("strong",[s._v("查看提交者排名前N位")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("git log --pretty='%aN' | sort | uniq -c | sort -k1 -n -r | head -n 5\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"根据用户名统计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#根据用户名统计"}},[s._v("#")]),s._v(" "),a("strong",[s._v("根据用户名统计")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('# 全部时间\ngit log --author="db117" --pretty=tformat: --numstat | awk \'{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s, removed lines: %s, total lines: %s\\n", add, subs, loc }\' -\n\n# 指定时间\ngit log --author="db117" --since=2022-12-01 --until=2022-12-31 --pretty=tformat: --numstat | awk \'{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s, removed lines: %s, total lines: %s\\n", add, subs, loc }\' \n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"统计所有人的代码行数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#统计所有人的代码行数"}},[s._v("#")]),s._v(" 统计所有人的代码行数")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('git log --format=\'%aN\' | sort -u | while read name; do echo -en "$name\\t"; git log --author="$name" --pretty=tformat: --numstat | awk \'{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s, removed lines: %s, total lines: %s \\n", add, subs, loc }\' -; done\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"提交代码人数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提交代码人数"}},[s._v("#")]),s._v(" 提交代码人数")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("git log --pretty='%aN' | sort -u | wc -l\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);