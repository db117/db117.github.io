(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{518:function(s,a,e){"use strict";e.r(a);var t=e(34),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"需要下载软件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#需要下载软件"}},[s._v("#")]),s._v(" 需要下载软件")]),s._v(" "),e("ul",[e("li",[s._v("https://github.com/kohsuke/winsw")]),s._v(" "),e("li",[s._v("WinSW是一个可执行的二进制文件，可用于将自定义进程包装和管理为Windows服务。\n下载安装包后，您可以重命名winsw.exe为任何名称，例如myService.exe。")])]),s._v(" "),e("h2",{attrs:{id:"配置xml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置xml"}},[s._v("#")]),s._v(" 配置xml")]),s._v(" "),e("ul",[e("li",[s._v("实例为启动java -jar renren-admin.jar")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    <configuration>\n     \n     \x3c!-- 服务的ID。在Windows系统中应该是唯一的--\x3e\n     <id>scl_web</id>\n     \x3c!-- 显示服务的名称 --\x3e\n     <name>scl_web</name>\n     \x3c!-- 服务描述 --\x3e\n     <description>scl_web</description>\n     \n     \x3c!-- 应该启动的可执行文件的路径 --\x3e\n     <executable>java</executable>\n     <arguments>-jar renren-admin.jar</arguments>\n     <logmode>rotate</logmode>\n   \n   </configuration>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br")])]),e("h2",{attrs:{id:"安装服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装服务"}},[s._v("#")]),s._v(" 安装服务")]),s._v(" "),e("ul",[e("li",[s._v("myService.exe install\n"),e("ul",[e("li",[s._v("出现如下提示则成功创建服务"),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("2018-09-02 17:38:32,595 INFO  - Installing the service with id 'scl_web'\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])])]),s._v(" "),e("li",[s._v("myService.exe 为自己修改的文件名称")])]),s._v(" "),e("h2",{attrs:{id:"其他操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他操作"}},[s._v("#")]),s._v(" 其他操作")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("install")]),s._v(" "),e("p",[s._v("将服务安装到Windows服务控制器。此命令需要“ 安装指南”中描述的一些预备步骤。")])]),s._v(" "),e("li",[e("p",[s._v("uninstall")]),s._v(" "),e("p",[s._v("卸载服务。以上相反的操作。")])]),s._v(" "),e("li",[e("p",[s._v("start")]),s._v(" "),e("p",[s._v("开始服务。该服务必须已安装。")])]),s._v(" "),e("li",[e("p",[s._v("stop")]),s._v(" "),e("p",[s._v("停止服务")])]),s._v(" "),e("li",[e("p",[s._v("restart")]),s._v(" "),e("p",[s._v("重启服务。如果该服务当前未运行，则此命令的作用如下start。")])])]),s._v(" "),e("h2",{attrs:{id:"检查服务的当前状态。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#检查服务的当前状态。"}},[s._v("#")]),s._v(" 检查服务的当前状态。")]),s._v(" "),e("ul",[e("li",[s._v("status  此命令将一行打印到控制台。\n"),e("ul",[e("li",[e("p",[s._v("NonExistent")]),s._v(" "),e("p",[s._v("表示当前未安装该服务")])]),s._v(" "),e("li",[e("p",[s._v("Started")]),s._v(" "),e("p",[s._v("表示该服务当前正在运行")])]),s._v(" "),e("li",[e("p",[s._v("Stopped")]),s._v(" "),e("p",[s._v("表示该服务已安装但当前未运行。")])])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);