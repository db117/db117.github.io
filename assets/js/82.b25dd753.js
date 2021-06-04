(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{445:function(s,a,t){"use strict";t.r(a);var e=t(26),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[s._v("#")]),s._v(" docker")]),s._v(" "),t("h2",{attrs:{id:"常用操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用操作"}},[s._v("#")]),s._v(" 常用操作")]),s._v(" "),t("h3",{attrs:{id:"进入容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进入容器"}},[s._v("#")]),s._v(" 进入容器")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("docker container exec -it 容器id bash\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"批量删除镜像或容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#批量删除镜像或容器"}},[s._v("#")]),s._v(" 批量删除镜像或容器")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("docker rmi --force $(docker images | grep <过滤> | awk '{print $3}')\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"清理镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#清理镜像"}},[s._v("#")]),s._v(" 清理镜像")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("# 清理所有没有正在使用的镜像\ndocker system prune -a\n# 删除所有未使用的容器、网络、图像(没有tag的和未引用的)\ndocker system prune\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"容器开机自动启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#容器开机自动启动"}},[s._v("#")]),s._v(" 容器开机自动启动")]),s._v(" "),t("blockquote",[t("p",[s._v("--restart具体参数值详细信息：")])]),s._v(" "),t("ul",[t("li",[s._v("no -  容器退出时，不重启容器；")]),s._v(" "),t("li",[s._v("on-failure - 只有在非0状态退出时才从新启动容器；")]),s._v(" "),t("li",[s._v("always - 无论退出状态是如何，都重启容器；")])]),s._v(" "),t("blockquote",[t("p",[s._v("如果创建时未指定 --restart=always ,可通过update 命令设置")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("docker update --restart=always 容器id\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"查看日志-logs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看日志-logs"}},[s._v("#")]),s._v(" 查看日志 logs")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("名字")]),s._v(" "),t("th",[s._v("默认值")]),s._v(" "),t("th",[s._v("描述")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("–details")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("显示提供给日志的额外细节")])]),s._v(" "),t("tr",[t("td",[s._v("–follow或-f")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("按日志输出")])]),s._v(" "),t("tr",[t("td",[s._v("–since")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("从某个时间开始显示，例如2013-01-02T13:23:37")])]),s._v(" "),t("tr",[t("td",[s._v("–tail")]),s._v(" "),t("td",[s._v("all")]),s._v(" "),t("td",[s._v("从日志末尾多少行开始显示")])]),s._v(" "),t("tr",[t("td",[s._v("–timestamps或-t")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("显示时间戳")])]),s._v(" "),t("tr",[t("td",[s._v("–until")]),s._v(" "),t("td"),s._v(" "),t("td",[s._v("打印某个时间以前的日志，例如 2013-01-02T13:23:37")])])])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("# 追踪查看最后100行日志\ndocker logs -fn100 容器id\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"安装应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装应用"}},[s._v("#")]),s._v(" 安装应用")]),s._v(" "),t("h3",{attrs:{id:"mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[s._v("#")]),s._v(" mysql")]),s._v(" "),t("ul",[t("li",[s._v("配置\n"),t("ul",[t("li",[s._v("-p 3306:3306：\n"),t("ul",[t("li",[s._v("将容器的 3306 端口映射到主机的 3306 端口。")])])]),s._v(" "),t("li",[s._v("-v -v $PWD/conf:/etc/mysql/conf.d：\n"),t("ul",[t("li",[s._v("将主机当前目录下的 conf/my.cnf 挂载到容器的 /etc/mysql/my.cnf。")])])]),s._v(" "),t("li",[s._v("-v $PWD/logs:/logs：\n"),t("ul",[t("li",[s._v("将主机当前目录下的 logs 目录挂载到容器的 /logs。")])])]),s._v(" "),t("li",[s._v("-v $PWD/data:/var/lib/mysql ：\n"),t("ul",[t("li",[s._v("将主机当前目录下的data目录挂载到容器的 /var/lib/mysql 。")])])]),s._v(" "),t("li",[s._v("-e MYSQL_ROOT_PASSWORD=123456：\n"),t("ul",[t("li",[s._v("初始化 root 用户的密码。")])])])])])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("docker run -p 3306:3306  --restart=always --name mymysql -v $PWD/conf:/etc/mysql/conf.d -v $PWD/logs:/logs -v $PWD/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 -d mysql:5.7\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#镜像"}},[s._v("#")]),s._v(" 镜像")]),s._v(" "),t("ul",[t("li",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("  Docker中国区官方镜像\n")])])]),s._v("https://registry.docker-cn.com")]),s._v(" "),t("li",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("  网易\n")])])]),s._v("http://hub-mirror.c.163.com")]),s._v(" "),t("li",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("  ustc\n")])])]),s._v("https://docker.mirrors.ustc.edu.cn")]),s._v(" "),t("li",[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("  中国科技大学\n")])])]),s._v("https://docker.mirrors.ustc.edu.cn")])]),s._v(" "),t("h2",{attrs:{id:"network-网络"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#network-网络"}},[s._v("#")]),s._v(" network 网络")]),s._v(" "),t("p",[s._v("创建网络")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("docker network create my_net\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("创建容器时指定网络")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("--network my_net \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("创建容器时设置别名")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("--network-alias nginx\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("查看网络内部信息")]),s._v(" "),t("p",[s._v("docker network inspect my_net")])])}),[],!1,null,null,null);a.default=r.exports}}]);