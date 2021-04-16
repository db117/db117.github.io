(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{415:function(v,_,l){"use strict";l.r(_);var i=l(26),e=Object(i.a)({},(function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[l("h1",{attrs:{id:"基本命令"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#基本命令"}},[v._v("#")]),v._v(" 基本命令")]),v._v(" "),l("h3",{attrs:{id:"date-选项-参数"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#date-选项-参数"}},[v._v("#")]),v._v(" date(选项)(参数)")]),v._v(" "),l("ul",[l("li",[v._v("显示或设置系统时间与日期。很多shell脚本里面需要打印不同格式的时间或日期，\n以及要根据时间和日期执行操作。延时通常用于脚本执行过程中提供一段等待的时间。\n日期可以以多种格式去打印，也可以使用命令设置固定的格式。在类UNIX系统中，\n日期被存储为一个整数，其大小为自世界标准时间（UTC）1970年1月1日0时0分0秒起流逝的秒数。")]),v._v(" "),l("li",[v._v("选项\n"),l("ul",[l("li",[v._v("-d<字符串>：显示字符串所指的日期与时间。字符串前后必须加上双引号；")]),v._v(" "),l("li",[v._v("-s<字符串>：根据字符串来设置日期与时间。字符串前后必须加上双引号；")]),v._v(" "),l("li",[v._v("-u：显示GMT；")]),v._v(" "),l("li",[v._v("--help：在线帮助；")]),v._v(" "),l("li",[v._v("--version：显示版本信息。")])])]),v._v(" "),l("li",[v._v("<+时间日期格式>：指定显示时使用的日期时间格式。")]),v._v(" "),l("li",[v._v("日期格式字符串列表\n"),l("ul",[l("li",[v._v("%H 小时，24小时制（00~23）")]),v._v(" "),l("li",[v._v("%I 小时，12小时制（01~12）")]),v._v(" "),l("li",[v._v("%k 小时，24小时制（0~23）")]),v._v(" "),l("li",[v._v("%l 小时，12小时制（1~12）")]),v._v(" "),l("li",[v._v("%M 分钟（00~59）")]),v._v(" "),l("li",[v._v("%p 显示出AM或PM")]),v._v(" "),l("li",[v._v("%r 显示时间，12小时制（hh:mm:ss %p）")]),v._v(" "),l("li",[v._v("%s 从1970年1月1日00:00:00到目前经历的秒数")]),v._v(" "),l("li",[v._v("%S 显示秒（00~59）")]),v._v(" "),l("li",[v._v("%T 显示时间，24小时制（hh:mm:ss）")]),v._v(" "),l("li",[v._v("%X 显示时间的格式（%H:%M:%S）")]),v._v(" "),l("li",[v._v("%Z 显示时区，日期域（CST）")]),v._v(" "),l("li",[v._v("%a 星期的简称（Sun~Sat）")]),v._v(" "),l("li",[v._v("%A 星期的全称（Sunday~Saturday）")]),v._v(" "),l("li",[v._v("%h,%b 月的简称（Jan~Dec）")]),v._v(" "),l("li",[v._v("%B 月的全称（January~December）")]),v._v(" "),l("li",[v._v("%c 日期和时间（Tue Nov 20 14:12:58 2012）")]),v._v(" "),l("li",[v._v("%d 一个月的第几天（01~31）")]),v._v(" "),l("li",[v._v("%x,%D 日期（mm/dd/yy）")]),v._v(" "),l("li",[v._v("%j 一年的第几天（001~366）")]),v._v(" "),l("li",[v._v("%m 月份（01~12）")]),v._v(" "),l("li",[v._v("%w 一个星期的第几天（0代表星期天）")]),v._v(" "),l("li",[v._v("%W 一年的第几个星期（00~53，星期一为第一天）")]),v._v(" "),l("li",[v._v("%y 年的最后两个数字（1999则是99）")])])])]),v._v(" "),l("h3",{attrs:{id:"rpm-选项-参数"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#rpm-选项-参数"}},[v._v("#")]),v._v(" rpm(选项)(参数)")]),v._v(" "),l("ul",[l("li",[v._v("RPM软件包的管理工具。rpm原本是Red Hat Linux发行版专门用来管理Linux各项套件的程序，\n由于它遵循GPL规则且功能强大方便，因而广受欢迎。逐渐受到其他发行版的采用。RPM套件管理方式的出现\n，让Linux易于安装，升级，间接提升了Linux的适用度。")]),v._v(" "),l("li",[v._v("选项\n"),l("ul",[l("li",[v._v("-a：查询所有套件；")]),v._v(" "),l("li",[v._v("-b<完成阶段><套件档>+或-t <完成阶段><套件档>+：设置包装套件的完成阶段，并指定套件档的文件名称；")]),v._v(" "),l("li",[v._v('-c：只列出组态配置文件，本参数需配合"-l"参数使用；')]),v._v(" "),l("li",[v._v('-d：只列出文本文件，本参数需配合"-l"参数使用；')]),v._v(" "),l("li",[v._v("-e<套件档>或--erase<套件档>：删除指定的套件；")]),v._v(" "),l("li",[v._v("-f<文件>+：查询拥有指定文件的套件；")]),v._v(" "),l("li",[v._v("-h或--hash：套件安装时列出标记；")]),v._v(" "),l("li",[v._v("-i：显示套件的相关信息；")]),v._v(" "),l("li",[v._v("-i<套件档>或--install<套件档>：安装指定的套件档；")]),v._v(" "),l("li",[v._v("-l：显示套件的文件列表；")]),v._v(" "),l("li",[v._v("-p<套件档>+：查询指定的RPM套件档；")]),v._v(" "),l("li",[v._v("-q：使用询问模式，当遇到任何问题时，rpm指令会先询问用户；")]),v._v(" "),l("li",[v._v("-R：显示套件的关联性信息；")]),v._v(" "),l("li",[v._v('-s：显示文件状态，本参数需配合"-l"参数使用；')]),v._v(" "),l("li",[v._v("-U<套件档>或--upgrade<套件档>：升级指定的套件档；")]),v._v(" "),l("li",[v._v("-v：显示指令执行过程；")]),v._v(" "),l("li",[v._v("-vv：详细显示指令执行过程，便于排错。")])])])]),v._v(" "),l("h2",{attrs:{id:"文件目录操作"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#文件目录操作"}},[v._v("#")]),v._v(" 文件目录操作")]),v._v(" "),l("h3",{attrs:{id:"pwd"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#pwd"}},[v._v("#")]),v._v(" pwd")]),v._v(" "),l("ul",[l("li",[v._v("以绝对路径的方式显示用户当前工作目录。命令将当前目录的全路径名称\n（从根目录）写入标准输出。全部目录使用/分隔。第一个/表示根目录，\n最后一个目录是当前目录。执行pwd命令可立刻得知您目前所在的工作目录的绝对路径名称。")])]),v._v(" "),l("h3",{attrs:{id:"cp-选项-参数"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#cp-选项-参数"}},[v._v("#")]),v._v(" cp(选项)(参数)")]),v._v(" "),l("ul",[l("li",[v._v("用来将一个或多个源文件或者目录复制到指定的目的文件或目录。\n它可以将单个源文件复制成一个指定文件名的具体的文件或一个已经存在的目录下。\ncp命令还支持同时复制多个文件，当一次复制多个文件时，\n目标文件参数必须是一个已经存在的目录，否则将出现错误。")]),v._v(" "),l("li",[v._v('-a：此参数的效果和同时指定"-dpR"参数相同；')]),v._v(" "),l("li",[v._v("-d：当复制符号连接时，把目标文件或目录也建立为符号连接，并指向与源文件或目录连接的原始文件或目录；")]),v._v(" "),l("li",[v._v("-f：强行复制文件或目录，不论目标文件或目录是否已存在；")]),v._v(" "),l("li",[v._v("-i：覆盖既有文件之前先询问用户；")]),v._v(" "),l("li",[v._v("-l：对源文件建立硬连接，而非复制文件；")]),v._v(" "),l("li",[v._v("-p：保留源文件或目录的属性；")]),v._v(" "),l("li",[v._v("-R/r：递归处理，将指定目录下的所有文件与子目录一并处理；")]),v._v(" "),l("li",[v._v("-s：对源文件建立符号连接，而非复制文件；")]),v._v(" "),l("li",[v._v("-u：使用这项参数后只会在源文件的更改时间较目标文件更新时或是名称相互对应的目标文件并不存在时，才复制文件；")]),v._v(" "),l("li",[v._v("-S：在备份文件时，用指定的后缀“SUFFIX”代替文件的默认后缀；")]),v._v(" "),l("li",[v._v("-b：覆盖已存在的文件目标前将目标文件备份；")]),v._v(" "),l("li",[v._v("-v：详细显示命令执行的操作。")])]),v._v(" "),l("h3",{attrs:{id:"find-选项-参数"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#find-选项-参数"}},[v._v("#")]),v._v(" find(选项)(参数)")]),v._v(" "),l("ul",[l("li",[v._v("用来在指定目录下查找文件。任何位于参数之前的字符串都将被视为欲查找的目录名。如果使用该命令时，\n不设置任何参数，则find命令将在当前目录下查找子目录与文件。并且将查找到的子目录和文件全部进行显示。")]),v._v(" "),l("li",[v._v("选项\n"),l("ul",[l("li",[v._v("-amin<分钟>：查找在指定时间曾被存取过的文件或目录，单位以分钟计算；")]),v._v(" "),l("li",[v._v("-anewer<参考文件或目录>：查找其存取时间较指定文件或目录的存取时间更接近现在的文件或目录；")]),v._v(" "),l("li",[v._v("-atime<24小时数>：查找在指定时间曾被存取过的文件或目录，单位以24小时计算；")]),v._v(" "),l("li",[v._v("-cmin<分钟>：查找在指定时间之时被更改过的文件或目录；")]),v._v(" "),l("li",[v._v("-cnewer<参考文件或目录>查找其更改时间较指定文件或目录的更改时间更接近现在的文件或目录；")]),v._v(" "),l("li",[v._v("-ctime<24小时数>：查找在指定时间之时被更改的文件或目录，单位以24小时计算；")]),v._v(" "),l("li",[v._v("-daystart：从本日开始计算时间；")]),v._v(" "),l("li",[v._v("-depth：从指定目录下最深层的子目录开始查找；")]),v._v(" "),l("li",[v._v("-expty：寻找文件大小为0 Byte的文件，或目录下没有任何子目录或文件的空目录；")]),v._v(" "),l("li",[v._v("-exec<执行指令>：假设find指令的回传值为True，就执行该指令；")]),v._v(" "),l("li",[v._v("-false：将find指令的回传值皆设为False；")]),v._v(" "),l("li",[v._v("-fls<列表文件>：此参数的效果和指定“-ls”参数类似，但会把结果保存为指定的列表文件；")]),v._v(" "),l("li",[v._v("-follow：排除符号连接；")]),v._v(" "),l("li",[v._v("-fprint<列表文件>：此参数的效果和指定“-print”参数类似，但会把结果保存成指定的列表文件；")]),v._v(" "),l("li",[v._v("-fprint0<列表文件>：此参数的效果和指定“-print0”参数类似，但会把结果保存成指定的列表文件；")]),v._v(" "),l("li",[v._v("-fprintf<列表文件><输出格式>：此参数的效果和指定“-printf”参数类似，但会把结果保存成指定的列表文件；")]),v._v(" "),l("li",[v._v("-fstype<文件系统类型>：只寻找该文件系统类型下的文件或目录；")]),v._v(" "),l("li",[v._v("-gid<群组识别码>：查找符合指定之群组识别码的文件或目录；")]),v._v(" "),l("li",[v._v("-group<群组名称>：查找符合指定之群组名称的文件或目录；")]),v._v(" "),l("li",[v._v("-help或——help：在线帮助；")]),v._v(" "),l("li",[v._v("-ilname<范本样式>：此参数的效果和指定“-lname”参数类似，但忽略字符大小写的差别；")]),v._v(" "),l("li",[v._v("-iname<范本样式>：此参数的效果和指定“-name”参数类似，但忽略字符大小写的差别；")]),v._v(" "),l("li",[v._v("-inum<inode编号>：查找符合指定的inode编号的文件或目录；")]),v._v(" "),l("li",[v._v("-ipath<范本样式>：此参数的效果和指定“-path”参数类似，但忽略字符大小写的差别；")]),v._v(" "),l("li",[v._v("-iregex<范本样式>：此参数的效果和指定“-regexe”参数类似，但忽略字符大小写的差别；")]),v._v(" "),l("li",[v._v("-links<连接数目>：查找符合指定的硬连接数目的文件或目录；")]),v._v(" "),l("li",[v._v("-iname<范本样式>：指定字符串作为寻找符号连接的范本样式；")]),v._v(" "),l("li",[v._v("-ls：假设find指令的回传值为Ture，就将文件或目录名称列出到标准输出；")]),v._v(" "),l("li",[v._v("-maxdepth<目录层级>：设置最大目录层级；")]),v._v(" "),l("li",[v._v("-mindepth<目录层级>：设置最小目录层级；")]),v._v(" "),l("li",[v._v("-mmin<分钟>：查找在指定时间曾被更改过的文件或目录，单位以分钟计算；")]),v._v(" "),l("li",[v._v("-mount：此参数的效果和指定“-xdev”相同；")]),v._v(" "),l("li",[v._v("-mtime<24小时数>：查找在指定时间曾被更改过的文件或目录，单位以24小时计算；")]),v._v(" "),l("li",[v._v("-name<范本样式>：指定字符串作为寻找文件或目录的范本样式；")]),v._v(" "),l("li",[v._v("-newer<参考文件或目录>：查找其更改时间较指定文件或目录的更改时间更接近现在的文件或目录；")]),v._v(" "),l("li",[v._v("-nogroup：找出不属于本地主机群组识别码的文件或目录；")]),v._v(" "),l("li",[v._v("-noleaf：不去考虑目录至少需拥有两个硬连接存在；")]),v._v(" "),l("li",[v._v("-nouser：找出不属于本地主机用户识别码的文件或目录；")]),v._v(" "),l("li",[v._v("-ok<执行指令>：此参数的效果和指定“-exec”类似，但在执行指令之前会先询问用户，若回答“y”或“Y”，则放弃执行命令；")]),v._v(" "),l("li",[v._v("-path<范本样式>：指定字符串作为寻找目录的范本样式；")]),v._v(" "),l("li",[v._v("-perm<权限数值>：查找符合指定的权限数值的文件或目录；")]),v._v(" "),l("li",[v._v("-print：假设find指令的回传值为Ture，就将文件或目录名称列出到标准输出。格式为每列一个名称，每个名称前皆有“./”字符串；")]),v._v(" "),l("li",[v._v("-print0：假设find指令的回传值为Ture，就将文件或目录名称列出到标准输出。格式为全部的名称皆在同一行；")]),v._v(" "),l("li",[v._v("-printf<输出格式>：假设find指令的回传值为Ture，就将文件或目录名称列出到标准输出。格式可以自行指定；")]),v._v(" "),l("li",[v._v("-prune：不寻找字符串作为寻找文件或目录的范本样式;")]),v._v(" "),l("li",[v._v("-regex<范本样式>：指定字符串作为寻找文件或目录的范本样式；")]),v._v(" "),l("li",[v._v("-size<文件大小>：查找符合指定的文件大小的文件；")]),v._v(" "),l("li",[v._v("-true：将find指令的回传值皆设为True；")]),v._v(" "),l("li",[v._v("-typ<文件类型>：只寻找符合指定的文件类型的文件；")]),v._v(" "),l("li",[v._v("-uid<用户识别码>：查找符合指定的用户识别码的文件或目录；")]),v._v(" "),l("li",[v._v("-used<日数>：查找文件或目录被更改之后在指定时间曾被存取过的文件或目录，单位以日计算；")]),v._v(" "),l("li",[v._v("-user<拥有者名称>：查找符和指定的拥有者名称的文件或目录；")]),v._v(" "),l("li",[v._v("-version或——version：显示版本信息；")]),v._v(" "),l("li",[v._v("-xdev：将范围局限在先行的文件系统中；")]),v._v(" "),l("li",[v._v("-xtype<文件类型>：此参数的效果和指定“-type”参数类似，差别在于它针对符号连接检查。")])])])]),v._v(" "),l("h3",{attrs:{id:"ln-选项-参数"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#ln-选项-参数"}},[v._v("#")]),v._v(" ln(选项)(参数)")]),v._v(" "),l("ul",[l("li",[v._v('用来为文件创件连接，连接类型分为硬连接和符号连接两种，默认的连接类型是硬连接。如果要创建符号连接必须使用"-s"选项')]),v._v(" "),l("li",[v._v("符号链接文件不是一个独立的文件，它的许多属性依赖于源文件，所以给符号链接文件设置存取权限是没有意义的")]),v._v(" "),l("li",[v._v("参数\n"),l("ul",[l("li",[v._v("源文件：指定连接的源文件。如果使用-s选项创建符号连接，则“源文件”可以是文件或者目录。创建硬连接时，则“源文件”参数只能是文件；")]),v._v(" "),l("li",[v._v("目标文件：指定源文件的目标连接文件。")])])]),v._v(" "),l("li",[v._v("选项\n"),l("ul",[l("li",[v._v("-b或--backup：删除，覆盖目标文件之前的备份；")]),v._v(" "),l("li",[v._v("-d或-F或——directory：建立目录的硬连接；")]),v._v(" "),l("li",[v._v("-f或——force：强行建立文件或目录的连接，不论文件或目录是否存在；")]),v._v(" "),l("li",[v._v("-i或——interactive：覆盖既有文件之前先询问用户；")]),v._v(" "),l("li",[v._v("-n或--no-dereference：把符号连接的目的目录视为一般文件；")]),v._v(" "),l("li",[v._v("-s或——symbolic：对源文件建立符号连接，而非硬连接；")]),v._v(" "),l("li",[v._v('-S<字尾备份字符串>或--suffix=<字尾备份字符串>：用"-b"参数备份目标文件后，备份文件的字尾会被加上一个备份字符串，预设的备份字符串是符号“~”，用户可通过“-S”参数来改变它；')]),v._v(" "),l("li",[v._v("-v或——verbose：显示指令执行过程；")]),v._v(" "),l("li",[v._v("-V<备份方式>或--version-control=<备份方式>：用“-b”参数备份目标文件后，备份文件的字尾会被加上一个备份字符串，这个字符串不仅可用“-S”参数变更，当使用“-V”参数<备份方式>指定不同备份方式时，也会产生不同字尾的备份字符串；")]),v._v(" "),l("li",[v._v("--help：在线帮助；")]),v._v(" "),l("li",[v._v("--version：显示版本信息。")])])])]),v._v(" "),l("h3",{attrs:{id:"touch-选项-参数"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#touch-选项-参数"}},[v._v("#")]),v._v(" touch(选项)(参数)")]),v._v(" "),l("ul",[l("li",[v._v("用于把已存在文件的时间标签更新为系统当前的时间（默认方式），它们的数据将原封不动地保留下来")]),v._v(" "),l("li",[v._v("是用来创建新的空文件")]),v._v(" "),l("li",[v._v("选项\n"),l("ul",[l("li",[v._v("-a：或--time=atime或--time=access或--time=use  只更改存取时间；")]),v._v(" "),l("li",[v._v("-c：或--no-create  不建立任何文件；")]),v._v(" "),l("li",[v._v("-d：<时间日期> 使用指定的日期时间，而非现在的时间；")]),v._v(" "),l("li",[v._v("-f：此参数将忽略不予处理，仅负责解决BSD版本touch指令的兼容性问题；")]),v._v(" "),l("li",[v._v("-m：或--time=mtime或--time=modify  只更该变动时间；")]),v._v(" "),l("li",[v._v("-r：<参考文件或目录>  把指定文件或目录的日期时间，统统设成和参考文件或目录的日期时间相同；")]),v._v(" "),l("li",[v._v("-t：<日期时间>  使用指定的日期时间，而非现在的时间；")]),v._v(" "),l("li",[v._v("--help：在线帮助；")]),v._v(" "),l("li",[v._v("--version：显示版本信息。")])])])]),v._v(" "),l("h3",{attrs:{id:"cat-选项-参数"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#cat-选项-参数"}},[v._v("#")]),v._v(" cat(选项)(参数)")]),v._v(" "),l("ul",[l("li",[v._v("连接文件并打印到标准输出设备上，cat经常用来显示文件的内容，类似于下的type命令。")]),v._v(" "),l("li",[v._v("当文件较大时，文本在屏幕上迅速闪过（滚屏），用户往往看不清所显示的内容。因此，\n一般用more等命令分屏显示。为了控制滚屏，可以按Ctrl+S键，停止滚屏；按Ctrl+Q键可以恢复滚屏。\n按Ctrl+C（中断）键可以终止该命令的执行，并且返回Shell提示符状态。")]),v._v(" "),l("li",[v._v("选项\n"),l("ul",[l("li",[v._v("-n或-number：有1开始对所有输出的行数编号；")]),v._v(" "),l("li",[v._v("-b或--number-nonblank：和-n相似，只不过对于空白行不编号；")]),v._v(" "),l("li",[v._v("-s或--squeeze-blank：当遇到有连续两行以上的空白行，就代换为一行的空白行；")]),v._v(" "),l("li",[v._v("-A：显示不可打印字符，行尾显示“$”；")]),v._v(" "),l("li",[v._v('-e：等价于"-vE"选项；')]),v._v(" "),l("li",[v._v('-t：等价于"-vT"选项；')])])])]),v._v(" "),l("h3",{attrs:{id:"cut-选项-参数"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#cut-选项-参数"}},[v._v("#")]),v._v(" cut(选项)(参数)")]),v._v(" "),l("ul",[l("li",[v._v("用来显示行中的指定部分，删除文件中指定字段。cut经常用来显示文件的内容，类似于下的type命令")]),v._v(" "),l("li",[v._v("用来显示文件的内容，它依次读取由参数file所指 明的文件，将它们的内容输出到标准输出上；")]),v._v(" "),l("li",[v._v("连接两个或多个文件，如cut fl f2 > f3将把文件fl和几的内容合并起来，然后通过输出重定向符“>”的作用，将它们放入文件f3中。")]),v._v(" "),l("li",[v._v("当文件较大时，文本在屏幕上迅速闪过（滚屏），用户往往看不清所显示的内容。\n因此，一般用more等命令分屏显示。为了控制滚屏，可以按Ctrl+S键，停止滚屏；\n按Ctrl+Q键可以恢复滚屏。按Ctrl+C（中断）键可以终止该命令的执行，并且返回Shell提示符状态")]),v._v(" "),l("li",[v._v("选项\n"),l("ul",[l("li",[v._v("-b：仅显示行中指定直接范围的内容；")]),v._v(" "),l("li",[v._v("-c：仅显示行中指定范围的字符；")]),v._v(" "),l("li",[v._v("-d：指定字段的分隔符，默认的字段分隔符为“TAB”；")]),v._v(" "),l("li",[v._v("-f：显示指定字段的内容；")]),v._v(" "),l("li",[v._v("-n：与“-b”选项连用，不分割多字节字符；")]),v._v(" "),l("li",[v._v("--complement：补足被选择的字节、字符或字段；")]),v._v(" "),l("li",[v._v("--out-delimiter=<字段分隔符>：指定输出内容是的字段分割符；")]),v._v(" "),l("li",[v._v("--help：显示指令的帮助信息；")]),v._v(" "),l("li",[v._v("--version：显示指令的版本信息。")])])])]),v._v(" "),l("h3",{attrs:{id:"more-语法-参数"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#more-语法-参数"}},[v._v("#")]),v._v(" more(语法)(参数)")]),v._v(" "),l("ul",[l("li",[v._v("一个基于vi编辑器文本过滤器，它以全屏幕的方式按页显示文本文件的内容，\n支持vi中的关键字定位操作。more名单中内置了若干快捷键，\n常用的有H（获得帮助信息），Enter（向下翻滚一行），空格（向下滚动一屏），Q（退出命令）")]),v._v(" "),l("li",[v._v("该命令一次显示一屏文本，满屏后停下来，并且在屏幕的底部出现一个提示信息，给出至今己显示的该文件的百分比：\n--More--（XX%）可以用下列不同的方法对提示做出回答：\n"),l("ul",[l("li",[v._v("按Space键：显示文本的下一屏内容。")]),v._v(" "),l("li",[v._v("按Enter键：只显示文本的下一行内容。")]),v._v(" "),l("li",[v._v("按斜线符|：接着输入一个模式，可以在文本中寻找下一个相匹配的模式。")]),v._v(" "),l("li",[v._v("按H键：显示帮助屏，该屏上有相关的帮助信息。")]),v._v(" "),l("li",[v._v("按B键：显示上一屏内容。")]),v._v(" "),l("li",[v._v("按Q键：退出rnore命令。")])])]),v._v(" "),l("li",[v._v("选项\n"),l("ul",[l("li",[v._v("-<数字>：指定每屏显示的行数；")]),v._v(" "),l("li",[v._v("-d：显示“[press space to continue,'q' to quit.]”和“[Press 'h' for instructions]”；")]),v._v(" "),l("li",[v._v("-c：不进行滚屏操作。每次刷新这个屏幕；")]),v._v(" "),l("li",[v._v("-s：将多个空行压缩成一行显示；")]),v._v(" "),l("li",[v._v("-u：禁止下划线；")]),v._v(" "),l("li",[v._v("+<数字>：从指定数字的行开始显示。")])])])]),v._v(" "),l("h3",{attrs:{id:"tail-选项-参数"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#tail-选项-参数"}},[v._v("#")]),v._v(" tail(选项)(参数)")]),v._v(" "),l("ul",[l("li",[v._v("用于输入文件中的尾部内容。tail命令默认在屏幕上显示指定文件的末尾10行。如果给定的文件不止一个，\n则在显示的每个文件前面加一个文件名标题。如果没有指定文件或者文件名为“-”，则读取标准输入。")]),v._v(" "),l("li",[v._v("如果表示字节或行数的N值之前有一个”+”号，则从文件开头的第N项开始显示，而不是显示文件的最后N项。\nN值后面可以有后缀：b表示512，k表示1024，m表示1 048576(1M)。")]),v._v(" "),l("li",[v._v("选项\n"),l("ul",[l("li",[v._v("--retry：即是在tail命令启动时，文件不可访问或者文件稍后变得不可访问，都始终尝试打开文件。使用此选项时需要与选项“——follow=name”连用；")]),v._v(" "),l("li",[v._v("-c"),l("N",[v._v("或——bytes="),l("N",[v._v("：输出文件尾部的N（N为整数）个字节内容；")])],1)],1),v._v(" "),l("li",[v._v("-f<name/descriptor>或；--follow"),l("nameldescript",[v._v("：显示文件最新追加的内容。“name”表示以文件名的方式监视文件的变化。“-f”与“-fdescriptor”等效；")])],1),v._v(" "),l("li",[v._v('-F：与选项“-follow=name”和“--retry"连用时功能相同；')]),v._v(" "),l("li",[v._v("-n"),l("N",[v._v("或——line="),l("N",[v._v("：输出文件的尾部N（N位数字）行内容。")])],1)],1),v._v(" "),l("li",[v._v("--pid=<进程号>：与“-f”选项连用，当指定的进程号的进程终止后，自动退出tail命令；")]),v._v(" "),l("li",[v._v("-q或——quiet或——silent：当有多个文件参数时，不输出各个文件名；")]),v._v(" "),l("li",[v._v("-s<秒数>或——sleep-interal=<秒数>：与“-f”选项连用，指定监视文件变化时间隔的秒数；")]),v._v(" "),l("li",[v._v("-v或——verbose：当有多个文件参数时，总是输出各个文件名；")]),v._v(" "),l("li",[v._v("--help：显示指令的帮助信息；")]),v._v(" "),l("li",[v._v("--version：显示指令的版本信息。")])])])]),v._v(" "),l("h3",{attrs:{id:"less-选项-参数"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#less-选项-参数"}},[v._v("#")]),v._v(" less(选项)(参数)")]),v._v(" "),l("ul",[l("li",[v._v("作用与more十分相似，都可以用来浏览文字档案的内容，不同的是less命令允许用户向前或向后浏览文件，\n而more命令只能向前浏览。用less命令显示文件时，用PageUp键向上翻页，用PageDown键向下翻页。要退出less程序，应按Q键")]),v._v(" "),l("li",[v._v("选项\n"),l("ul",[l("li",[v._v("-e：文件内容显示完毕后，自动退出；")]),v._v(" "),l("li",[v._v("-f：强制显示文件；")]),v._v(" "),l("li",[v._v("-g：不加亮显示搜索到的所有关键词，仅显示当前显示的关键字，以提高显示速度；")]),v._v(" "),l("li",[v._v("-l：搜索时忽略大小写的差异；")]),v._v(" "),l("li",[v._v("-N：每一行行首显示行号；")]),v._v(" "),l("li",[v._v("-s：将连续多个空行压缩成一行显示；")]),v._v(" "),l("li",[v._v("-S：在单行显示较长的内容，而不换行显示；")]),v._v(" "),l("li",[v._v("-x<数字>：将TAB字符显示为指定个数的空格字符")])])])]),v._v(" "),l("h3",{attrs:{id:"od-选项-参数"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#od-选项-参数"}},[v._v("#")]),v._v(" od(选项)(参数)")]),v._v(" "),l("ul",[l("li",[v._v("用于输出文件的八进制、十六进制或其它格式编码的字节，通常用于显示或查看文件中不能直接显示在终端的字符")]),v._v(" "),l("li",[v._v("常见的文件为文本文件和二进制文件。此命令主要用来查看保存在二进制文件中的值。\n比如，程序可能输出大量的数据记录，每个数据是一个单精度浮点数。这些数据记录存放在一个文件中\n，如果想查看下这个数据，这时候od命令就派上用场了。在我看来，od命令主要用来格式化输出文件数据，\n即对文件中的数据进行无二义性的解释。不管是IEEE754格式的浮点数还是ASCII码，od命令都能按照需求输出它们的值")]),v._v(" "),l("li",[v._v("选项\n"),l("ul",[l("li",[v._v("-a：此参数的效果和同时指定“-ta”参数相同；")]),v._v(" "),l("li",[v._v("-A：<字码基数>：选择以何种基数计算字码；")]),v._v(" "),l("li",[v._v("-b：此参数的效果和同时指定“-toC”参数相同；")]),v._v(" "),l("li",[v._v("-c：此参数的效果和同时指定“-tC”参数相同；")]),v._v(" "),l("li",[v._v("-d：此参数的效果和同时指定“-tu2”参数相同；")]),v._v(" "),l("li",[v._v("-f：此参数的效果和同时指定“-tfF”参数相同；")]),v._v(" "),l("li",[v._v("-h：此参数的效果和同时指定“-tx2”参数相同；")]),v._v(" "),l("li",[v._v("-i：此参数的效果和同时指定“-td2”参数相同；")]),v._v(" "),l("li",[v._v("-j<字符数目>或--skip-bytes=<字符数目>：略过设置的字符数目；")]),v._v(" "),l("li",[v._v("-l：此参数的效果和同时指定“-td4”参数相同；")]),v._v(" "),l("li",[v._v("-N<字符数目>或--read-bytes=<字符数目>：到设置的字符树目为止；")]),v._v(" "),l("li",[v._v("-o：此参数的效果和同时指定“-to2”参数相同；")]),v._v(" "),l("li",[v._v("-s<字符串字符数>或--strings=<字符串字符数>：只显示符合指定的字符数目的字符串；")]),v._v(" "),l("li",[v._v("-t<输出格式>或--format=<输出格式>：设置输出格式；")]),v._v(" "),l("li",[v._v("-v或--output-duplicates：输出时不省略重复的数据；")]),v._v(" "),l("li",[v._v("-w<每列字符数>或--width=<每列字符数>：设置每列的最大字符数；")]),v._v(" "),l("li",[v._v("-x：此参数的效果和同时指定“-h”参数相同；")]),v._v(" "),l("li",[v._v("--help：在线帮助；")]),v._v(" "),l("li",[v._v("--version：显示版本信息。")])])])]),v._v(" "),l("h3",{attrs:{id:"head-选项-参数"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#head-选项-参数"}},[v._v("#")]),v._v(" head(选项)(参数)")]),v._v(" "),l("ul",[l("li",[v._v("用于显示文件的开头的内容。在默认情况下，head命令显示文件的头10行内容。")]),v._v(" "),l("li",[v._v("选项\n"),l("ul",[l("li",[v._v("-n<数字>：指定显示头部内容的行数；")]),v._v(" "),l("li",[v._v("-c<字符数>：指定显示头部内容的字符数；")]),v._v(" "),l("li",[v._v("-v：总是显示文件名的头信息；")]),v._v(" "),l("li",[v._v("-q：不显示文件名的头信息。")])])])]),v._v(" "),l("h2",{attrs:{id:"hexdump-选项-文件"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#hexdump-选项-文件"}},[v._v("#")]),v._v(" hexdump[选项] [文件]...")]),v._v(" "),l("ul",[l("li",[v._v("一般用来查看“二进制”文件的十六进制编码，但实际上它能查看任何文件，而不只限于二进制文件。")]),v._v(" "),l("li",[v._v("选项\n"),l("ul",[l("li",[v._v("-n length 只格式化输入文件的前length个字节。")]),v._v(" "),l("li",[v._v("-C 输出规范的十六进制和ASCII码。")]),v._v(" "),l("li",[v._v("-b 单字节八进制显示。")]),v._v(" "),l("li",[v._v("-c 单字节字符显示。")]),v._v(" "),l("li",[v._v("-d 双字节十进制显示。")]),v._v(" "),l("li",[v._v("-o 双字节八进制显示。")]),v._v(" "),l("li",[v._v("-x 双字节十六进制显示。")]),v._v(" "),l("li",[v._v("-s 从偏移量开始输出。")]),v._v(" "),l("li",[v._v('-e 指定格式字符串，格式字符串包含在一对单引号中，格式字符串形如：\'a/b "format1" "format2"\'。')])])])]),v._v(" "),l("h2",{attrs:{id:"硬件·内核·shell·监测"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#硬件·内核·shell·监测"}},[v._v("#")]),v._v(" 硬件·内核·Shell·监测")]),v._v(" "),l("h3",{attrs:{id:"type-选项-参数"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#type-选项-参数"}},[v._v("#")]),v._v(" type(选项)(参数)")]),v._v(" "),l("ul",[l("li",[v._v("用来显示指定命令的类型，判断给出的指令是内部指令还是外部指令。")]),v._v(" "),l("li",[v._v("命令类型\n"),l("ul",[l("li",[v._v("alias：别名。")]),v._v(" "),l("li",[v._v("keyword：关键字，Shell保留字。")]),v._v(" "),l("li",[v._v("function：函数，Shell函数。")]),v._v(" "),l("li",[v._v("builtin：内建命令，Shell内建命令。")]),v._v(" "),l("li",[v._v("file：文件，磁盘文件，外部命令。")]),v._v(" "),l("li",[v._v("unfound：没有找到。")])])]),v._v(" "),l("li",[v._v("选项\n"),l("ul",[l("li",[v._v("-t：输出“file”、“alias”或者“builtin”，分别表示给定的指令为“外部指令”、“命令别名”或者“内部指令”；")]),v._v(" "),l("li",[v._v("-p：如果给出的指令为外部指令，则显示其绝对路径；")]),v._v(" "),l("li",[v._v("-a：在环境变量“PATH”指定的路径中，显示给定指令的信息，包括命令别名。")])])])])])}),[],!1,null,null,null);_.default=e.exports}}]);