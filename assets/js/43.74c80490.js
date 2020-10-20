(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{394:function(t,a,e){"use strict";e.r(a);var n=e(25),v=Object(n.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h4",{attrs:{id:"使用maven自动将源码打包并发布"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用maven自动将源码打包并发布"}},[t._v("#")]),t._v(" 使用maven自动将源码打包并发布")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("\x3c!-- Source attach plugin --\x3e\n<plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-source-plugin</artifactId>\n    <executions>\n        <execution>\n            <id>attach-sources</id>\n            <goals>\n                <goal>jar</goal>\n            </goals>\n        </execution>\n    </executions>\n</plugin>\n")])])]),e("p",[t._v("注意：在多项目构建中，将source-plugin置于顶层或parent的pom中并不会发挥作用，必须置于具体项目的pom中。")]),t._v(" "),e("h4",{attrs:{id:"编译时测试失败不阻断"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编译时测试失败不阻断"}},[t._v("#")]),t._v(" 编译时测试失败不阻断")]),t._v(" "),e("p",[t._v("-Dmaven.test.failure.ignore=true")]),t._v(" "),e("h4",{attrs:{id:"打包是不编译测试代码-也不执行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#打包是不编译测试代码-也不执行"}},[t._v("#")]),t._v(" 打包是不编译测试代码,也不执行")]),t._v(" "),e("p",[t._v("-Dmaven.test.skip=true")]),t._v(" "),e("h4",{attrs:{id:"编译测试类-但不运行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编译测试类-但不运行"}},[t._v("#")]),t._v(" 编译测试类,但不运行")]),t._v(" "),e("p",[t._v("-DskipTests")]),t._v(" "),e("h4",{attrs:{id:"版本号范围写法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#版本号范围写法"}},[t._v("#")]),t._v(" 版本号范围写法")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("范围")]),t._v(" "),e("th",[t._v("意义")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("1.0")]),t._v(" "),e("td",[t._v("x >= 1.0 * 1.0 的默认 Maven 含义是所有 （，），但建议使用 1.0。显然，这不能在这里强制实施版本，因此它已被重新定义为最小版本。")])]),t._v(" "),e("tr",[e("td",[t._v("(,1.0]")]),t._v(" "),e("td",[t._v("x <= 1.0")])]),t._v(" "),e("tr",[e("td",[t._v("(,1.0)")]),t._v(" "),e("td",[t._v("x < 1.0")])]),t._v(" "),e("tr",[e("td",[t._v("[1.0]")]),t._v(" "),e("td",[t._v("x = 1.0")])]),t._v(" "),e("tr",[e("td",[t._v("[1.0,)")]),t._v(" "),e("td",[t._v("x >= 1.0")])]),t._v(" "),e("tr",[e("td",[t._v("(1.0,)")]),t._v(" "),e("td",[t._v("x > 1.0")])]),t._v(" "),e("tr",[e("td",[t._v("(1.0,2.0)")]),t._v(" "),e("td",[t._v("1.0 < x < 2.0")])]),t._v(" "),e("tr",[e("td",[t._v("[1.0,2.0]")]),t._v(" "),e("td",[t._v("1.0 <= x <= 2.0")])]),t._v(" "),e("tr",[e("td",[t._v("(,1.0],[1.2,)")]),t._v(" "),e("td",[t._v("x <= 1.0 或 x >= 1.2。多个集是逗号分隔的")])]),t._v(" "),e("tr",[e("td",[t._v("(,1.1),(1.1,)")]),t._v(" "),e("td",[t._v("x ！ = 1.1")])])])]),t._v(" "),e("h4",{attrs:{id:"不进行递归执行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#不进行递归执行"}},[t._v("#")]),t._v(" 不进行递归执行")]),t._v(" "),e("p",[t._v("--non-resolvable  只执行当前目录的，不对子目录进行")]),t._v(" "),e("h4",{attrs:{id:"子项目中排除掉定义在parent中的插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#子项目中排除掉定义在parent中的插件"}},[t._v("#")]),t._v(" 子项目中排除掉定义在Parent中的插件")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("<plugin>\n\t<groupId>org.apache.maven.plugins</groupId>\n\t<artifactId>maven-xxx-plugin</artifactId>\n\t<executions>\n\t\t\x3c!--加一个execution , phase设置成空--\x3e\n\t\t<execution>\n\t\t\t<phase/>\n\t\t</execution>\n\t\t\x3c!--加一个有自己id的execution，id随便，其余可以不写--\x3e\n\t\t<execution>\n\t\t\t<id>myid</id>\n\t\t</execution>\n\t</executions>\n</plugin>\n")])])])])}),[],!1,null,null,null);a.default=v.exports}}]);