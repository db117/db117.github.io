(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{393:function(t,a,v){"use strict";v.r(a);var e=v(25),_=Object(e.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h4",{attrs:{id:"使用maven自动将源码打包并发布"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#使用maven自动将源码打包并发布"}},[t._v("#")]),t._v(" 使用maven自动将源码打包并发布")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("\x3c!-- Source attach plugin --\x3e\n<plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-source-plugin</artifactId>\n    <executions>\n        <execution>\n            <id>attach-sources</id>\n            <goals>\n                <goal>jar</goal>\n            </goals>\n        </execution>\n    </executions>\n</plugin>\n")])])]),v("p",[t._v("注意：在多项目构建中，将source-plugin置于顶层或parent的pom中并不会发挥作用，必须置于具体项目的pom中。")]),t._v(" "),v("h4",{attrs:{id:"编译时测试失败不阻断"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#编译时测试失败不阻断"}},[t._v("#")]),t._v(" 编译时测试失败不阻断")]),t._v(" "),v("p",[t._v("-Dmaven.test.failure.ignore=true")]),t._v(" "),v("h4",{attrs:{id:"打包是不编译测试代码-也不执行"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#打包是不编译测试代码-也不执行"}},[t._v("#")]),t._v(" 打包是不编译测试代码,也不执行")]),t._v(" "),v("p",[t._v("-Dmaven.test.skip=true")]),t._v(" "),v("h4",{attrs:{id:"编译测试类-但不运行"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#编译测试类-但不运行"}},[t._v("#")]),t._v(" 编译测试类,但不运行")]),t._v(" "),v("p",[t._v("-DskipTests")]),t._v(" "),v("h4",{attrs:{id:"版本号范围写法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#版本号范围写法"}},[t._v("#")]),t._v(" 版本号范围写法")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("范围")]),t._v(" "),v("th",[t._v("意义")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("1.0")]),t._v(" "),v("td",[t._v("x >= 1.0 * 1.0 的默认 Maven 含义是所有 （，），但建议使用 1.0。显然，这不能在这里强制实施版本，因此它已被重新定义为最小版本。")])]),t._v(" "),v("tr",[v("td",[t._v("(,1.0]")]),t._v(" "),v("td",[t._v("x <= 1.0")])]),t._v(" "),v("tr",[v("td",[t._v("(,1.0)")]),t._v(" "),v("td",[t._v("x < 1.0")])]),t._v(" "),v("tr",[v("td",[t._v("[1.0]")]),t._v(" "),v("td",[t._v("x = 1.0")])]),t._v(" "),v("tr",[v("td",[t._v("[1.0,)")]),t._v(" "),v("td",[t._v("x >= 1.0")])]),t._v(" "),v("tr",[v("td",[t._v("(1.0,)")]),t._v(" "),v("td",[t._v("x > 1.0")])]),t._v(" "),v("tr",[v("td",[t._v("(1.0,2.0)")]),t._v(" "),v("td",[t._v("1.0 < x < 2.0")])]),t._v(" "),v("tr",[v("td",[t._v("[1.0,2.0]")]),t._v(" "),v("td",[t._v("1.0 <= x <= 2.0")])]),t._v(" "),v("tr",[v("td",[t._v("(,1.0],[1.2,)")]),t._v(" "),v("td",[t._v("x <= 1.0 或 x >= 1.2。多个集是逗号分隔的")])]),t._v(" "),v("tr",[v("td",[t._v("(,1.1),(1.1,)")]),t._v(" "),v("td",[t._v("x ！ = 1.1")])])])]),t._v(" "),v("h4",{attrs:{id:"不进行递归执行"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#不进行递归执行"}},[t._v("#")]),t._v(" 不进行递归执行")]),t._v(" "),v("p",[t._v("--non-resolvable  只执行当前目录的，不对子目录进行")])])}),[],!1,null,null,null);a.default=_.exports}}]);