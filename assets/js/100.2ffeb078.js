(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{530:function(s,n,a){"use strict";a.r(n);var t=a(35),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"备忘单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#备忘单"}},[s._v("#")]),s._v(" 备忘单")]),s._v(" "),a("h3",{attrs:{id:"权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#权限"}},[s._v("#")]),s._v(" 权限")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 将文件 file1.txt 设为所有人皆可读取\nchmod ugo+r file1.txt\nchmod a+r file1.txt\nchmod 444 file1.txt\n\n# 将目前目录下的所有文件与子目录皆设为任何人可读取\nchmod -R a+r *\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"进程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进程"}},[s._v("#")]),s._v(" 进程")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('# 查看进程\n# 显示当前系统进程的列表 \nps ax\n# 显示当前系统进程详细列表以及进程用户\nps aux \n# 过滤具体进程（XXX为进程名称）\nps ax|grep XXX | grep -v grep\n\n# 获取进程id\nps -A |grep "cmdname" | grep -v grep| awk \'{print $1}\'\npgrep "cmdname"\n\n# 杀进程\nkill PID\n# 强制杀进程\nkill -9 PID \n\n# 杀掉所有匹配的进程进程\n# 先检查一下，在 kill\nps -A |grep "cmdname"| grep -v grep | awk \'{print $1}\'\nps -A |grep "cmdname"| grep -v grep | awk \'{print $1}\'| while read s;do kill $s;done\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("h3",{attrs:{id:"文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件"}},[s._v("#")]),s._v(" 文件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 批量删除空文件\nfind . -type f -empty -delete\nfind . -type f -size 0 -delete\n\n## 解压文件 #####\n# 压缩文件 file1 和目录 dir2 到 test.tar.gz\ntar -zcvf test.tar.gz file1 dir2\n# 解压 test.tar.gz（将 c 换成 x 即可）\ntar -zxvf test.tar.gz\n# 列出压缩文件的内容\ntar -ztvf test.tar.gz \n# 使用 -d 选项手动指定解压缩位置\nunzip -d /tmp/ ana.zip\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h3",{attrs:{id:"文本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文本"}},[s._v("#")]),s._v(" 文本")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 显示文本内容\ncat <file>  \t\t\t\t# 一次性显示完\nhead -20 <file>\t\t\t# 显示开头 20 行文本\ntail -n3 <file>\t\t\t# 显示最后 3 行文本\ntail -n10 <file>\t\t# 显示最后 10 行文本，并监听文件\n\n# 浏览文本\nless -N <file> \t\t\t# 开始浏览文本\n# 搜索\n  /字符串：向下搜索\n  ?字符串：向上搜索\n  n：重复前一个搜索（与 / 或 ? 有关）\n  N：反向重复前一个搜索（与 / 或 ? 有关）\n# 向前翻页\n  y 向前滚动一行\n  u 向前滚动半页\n  b 向上翻一页\n# 向后翻页\n\t回车键 滚动一行\n\td 向后翻半页\n\t空格键 滚动一页\nh 显示帮助界面\nQ 退出less 命令\n\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("h3",{attrs:{id:"字符串变量操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符串变量操作"}},[s._v("#")]),s._v(" 字符串变量操作")]),s._v(" "),a("blockquote",[a("p",[s._v("特殊符合使用"),a("code",[s._v("\\")]),s._v("进行转义")])]),s._v(" "),a("ul",[a("li",[s._v("替换第一个匹配到的文本"),a("code",[s._v("${<源文本>/<需要替换的文本>/<替换后的文本>}")])]),s._v(" "),a("li",[s._v("替换所有匹配的文本"),a("code",[s._v("${<源文本>//<需要替换的文本>/<替换后的文本>}")])]),s._v(" "),a("li",[s._v("删除变量中第一个匹配的字符串"),a("code",[s._v("${<源文本>/<需要删除的文本>}")])]),s._v(" "),a("li",[s._v("删除变量中所有匹配的字符串"),a("code",[s._v("${<源文本>//<需要删除的文本>}")])])]),s._v(" "),a("h3",{attrs:{id:"base64"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#base64"}},[s._v("#")]),s._v(" BASE64")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("编码\nbase64 a  > b\n\n解码\nbase -d a > b\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("hr"),s._v(" "),a("h3",{attrs:{id:"nslookup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nslookup"}},[s._v("#")]),s._v(" nslookup")]),s._v(" "),a("h4",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("blockquote",[a("p",[s._v("Ubuntu")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("apt-get install dnsutils\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("blockquote",[a("p",[s._v("Debian")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("apt-get update\napt-get install dnsutils\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("blockquote",[a("p",[s._v("Fedora / Centos")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("yum install bind-utils\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("hr"),s._v(" "),a("h3",{attrs:{id:"文件的组织"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件的组织"}},[s._v("#")]),s._v(" 文件的组织")]),s._v(" "),a("p",[s._v("以下是对这些目录的解释：")]),s._v(" "),a("ul",[a("li",[a("p",[a("strong",[s._v("/bin")]),s._v("：")]),s._v(" "),a("blockquote",[a("p",[s._v("Binaries (二进制文件) 的缩写, 这个目录存放着最经常使用的命令。")])])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("/boot：")])]),s._v(" "),a("blockquote",[a("p",[s._v("这里存放的是启动 Linux 时使用的一些核 心文件，包括一些连接文件以及镜像文件。")])])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("/dev ：")])]),s._v(" "),a("blockquote",[a("p",[s._v("Device(设备) 的缩写, 该目录下存放的是 Linux 的外部设备，在 Linux 中访问设备的方式和访问文件的方式是相同的。")])])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("/etc：")])]),s._v(" "),a("blockquote",[a("p",[s._v("etc 是 Etcetera(等等) 的缩写,这个目录用来存放所有的系统管理所需要的配置文件和子目录。")])])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("/home")]),s._v("：\n用户的主目录，在 Linux 中，每个用户都有一个自己的目录，一般该目录名是以用户的账号命名的，如上图中的 alice、bob 和 eve。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("/lib")]),s._v("：")]),s._v(" "),a("blockquote",[a("p",[s._v("Library(库) 的缩写这个目录里存放着系统最基本的动态连接共享库，其作用类似于 Windows 里的 DLL 文件。几乎所有的应用程序都需要用到这些共享库。")])])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("/lost+found")]),s._v("：")]),s._v(" "),a("blockquote",[a("p",[s._v("这个目录一般情况下是空的，当系统非法关机后，这里就存放了一些文件。")])])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("/media")]),s._v("：")]),s._v(" "),a("blockquote",[a("p",[s._v("linux 系统会自动识别一些设备，例如U盘、光驱等等，当识别后，Linux 会把识别的设备挂载到这个目录下。")])])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("/mnt")]),s._v("：")]),s._v(" "),a("blockquote",[a("p",[s._v("系统提供该目录是为了让用户临时挂载别的文件系统的，我们可以将光驱挂载在 /mnt/ 上，然后进入该目录就可以查看光驱里的内容了。")])])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("/opt")]),s._v("：")]),s._v(" "),a("blockquote",[a("p",[s._v("optional(可选) 的缩写，这是给主机额外安装软件所摆放的目录。比如你安装一个ORACLE数据库则就可以放到这个目录下。默认是空的。")])])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("/proc")]),s._v("：")]),s._v(" "),a("blockquote",[a("p",[s._v("proc 是 Processes(进程) 的缩写，/proc 是一种伪文件系统（也即虚拟文件系统），存储的是当前内核运行状态的一系列特殊文件，这个目录是一个虚拟的目录，它是系统内存的映射，我们可以通过直接访问这个目录来获取系统信息。\n这个目录的内容不在硬盘上而是在内存里，我们也可以直接修改里面的某些文件，")])])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("/root")]),s._v("：")]),s._v(" "),a("blockquote",[a("p",[s._v("该目录为系统管理员，也称作超级权限者的用户主目录。")])])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("/sbin")]),s._v("：")]),s._v(" "),a("blockquote",[a("p",[s._v("s 就是 Super User 的意思，是 Superuser Binaries (超级用户的二进制文件) 的缩写，这里存放的是系统管理员使用的系统管理程序。")])])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("/selinux")]),s._v("：")]),s._v(" "),a("blockquote",[a("p",[s._v("这个目录是 Redhat/CentOS 所特有的目录，Selinux 是一个安全机制，类似于 windows 的防火墙，但是这套机制比较复杂，这个目录就是存放selinux相关的文件的。")])])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("/srv")]),s._v("：")]),s._v(" "),a("blockquote",[a("p",[s._v("该目录存放一些服务启动之后需要提取的数据。")])])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("/sys")]),s._v("：")]),s._v(" "),a("blockquote",[a("p",[s._v("这是 Linux2.6 内核的一个很大的变化。该目录下安装了 2.6 内核中新出现的一个文件系统 sysfs 。")]),s._v(" "),a("p",[s._v("sysfs 文件系统集成了下面3种文件系统的信息：针对进程信息的 proc 文件系统、针对设备的 devfs 文件系统以及针对伪终端的 devpts 文件系统。")]),s._v(" "),a("p",[s._v("该文件系统是内核设备树的一个直观反映。")]),s._v(" "),a("p",[s._v("当一个内核对象被创建的时候，对应的文件和目录也在内核对象子系统中被创建")])])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("/tmp")]),s._v("：")]),s._v(" "),a("blockquote",[a("p",[s._v("tmp 是 temporary(临时) 的缩写这个目录是用来存放一些临时文件的。")])])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("/usr")]),s._v("：")]),s._v(" "),a("blockquote",[a("p",[s._v("usr 是 unix shared resources(共享资源) 的缩写，这是一个非常重要的目录，用户的很多应用程序和文件都放在这个目录下，类似于 windows 下的 program files 目录。")])])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("/usr/bin：")])]),s._v(" "),a("blockquote",[a("p",[s._v("系统用户使用的应用程序。")])])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("/usr/sbin：")])]),s._v(" "),a("blockquote",[a("p",[s._v("超级用户使用的比较高级的管理程序和系统守护程序。")])])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("/usr/src：")])]),s._v(" "),a("blockquote",[a("p",[s._v("内核源代码默认的放置目录。")])])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("/var")]),s._v("：")]),s._v(" "),a("blockquote",[a("p",[s._v("var 是 variable(变量) 的缩写，这个目录中存放着在不断扩充着的东西，我们习惯将那些经常被修改的目录放在这个目录下。包括各种日志文件。")])])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("/run")]),s._v("：")]),s._v(" "),a("blockquote",[a("p",[s._v("是一个临时文件系统，存储系统启动以来的信息。当系统重启时，这个目录下的文件应该被删掉或清除。如果你的系统上有 /var/run 目录，应该让它指向 run。")])])])])])}),[],!1,null,null,null);n.default=e.exports}}]);