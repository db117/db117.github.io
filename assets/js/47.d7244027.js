(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{278:function(e,t,a){"use strict";a.r(t);var s=a(38),n=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"需要下载软件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#需要下载软件","aria-hidden":"true"}},[e._v("#")]),e._v(" 需要下载软件")]),e._v(" "),a("ul",[a("li",[e._v("https://github.com/kohsuke/winsw")]),e._v(" "),a("li",[e._v("WinSW是一个可执行的二进制文件，可用于将自定义进程包装和管理为Windows服务。\n下载安装包后，您可以重命名winsw.exe为任何名称，例如myService.exe。")])]),e._v(" "),a("h2",{attrs:{id:"配置xml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置xml","aria-hidden":"true"}},[e._v("#")]),e._v(" 配置xml")]),e._v(" "),a("ul",[a("li",[e._v("实例为启动java -jar renren-admin.jar")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    <configuration>\n     \n     \x3c!-- 服务的ID。在Windows系统中应该是唯一的--\x3e\n     <id>scl_web</id>\n     \x3c!-- 显示服务的名称 --\x3e\n     <name>scl_web</name>\n     \x3c!-- 服务描述 --\x3e\n     <description>scl_web</description>\n     \n     \x3c!-- 应该启动的可执行文件的路径 --\x3e\n     <executable>java</executable>\n     <arguments>-jar renren-admin.jar</arguments>\n     <logmode>rotate</logmode>\n   \n   </configuration>\n")])])]),a("h2",{attrs:{id:"安装服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装服务","aria-hidden":"true"}},[e._v("#")]),e._v(" 安装服务")]),e._v(" "),a("ul",[a("li",[e._v("myService.exe install\n"),a("ul",[a("li",[e._v("出现如下提示则成功创建服务"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("2018-09-02 17:38:32,595 INFO  - Installing the service with id 'scl_web'\n")])])])])])]),e._v(" "),a("li",[e._v("myService.exe 为自己修改的文件名称")])]),e._v(" "),a("h2",{attrs:{id:"其他操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他操作","aria-hidden":"true"}},[e._v("#")]),e._v(" 其他操作")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("install")]),e._v(" "),a("p",[e._v("将服务安装到Windows服务控制器。此命令需要“ 安装指南”中描述的一些预备步骤。")])]),e._v(" "),a("li",[a("p",[e._v("uninstall")]),e._v(" "),a("p",[e._v("卸载服务。以上相反的操作。")])]),e._v(" "),a("li",[a("p",[e._v("start")]),e._v(" "),a("p",[e._v("开始服务。该服务必须已安装。")])]),e._v(" "),a("li",[a("p",[e._v("stop")]),e._v(" "),a("p",[e._v("停止服务")])]),e._v(" "),a("li",[a("p",[e._v("restart")]),e._v(" "),a("p",[e._v("重启服务。如果该服务当前未运行，则此命令的作用如下start。")])])]),e._v(" "),a("h2",{attrs:{id:"检查服务的当前状态。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#检查服务的当前状态。","aria-hidden":"true"}},[e._v("#")]),e._v(" 检查服务的当前状态。")]),e._v(" "),a("ul",[a("li",[e._v("status  此命令将一行打印到控制台。\n"),a("ul",[a("li",[a("p",[e._v("NonExistent")]),e._v(" "),a("p",[e._v("表示当前未安装该服务")])]),e._v(" "),a("li",[a("p",[e._v("Started")]),e._v(" "),a("p",[e._v("表示该服务当前正在运行")])]),e._v(" "),a("li",[a("p",[e._v("Stopped")]),e._v(" "),a("p",[e._v("表示该服务已安装但当前未运行。")])])])])])])},[],!1,null,null,null);t.default=n.exports}}]);