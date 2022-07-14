(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{371:function(s,n,a){"use strict";a.r(n);var t=a(10),e=Object(t.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"备忘单"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#备忘单"}},[s._v("#")]),s._v(" 备忘单")]),s._v(" "),n("h3",{attrs:{id:"权限"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#权限"}},[s._v("#")]),s._v(" 权限")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# 将文件 file1.txt 设为所有人皆可读取\nchmod ugo+r file1.txt\nchmod a+r file1.txt\nchmod 444 file1.txt\n\n# 将目前目录下的所有文件与子目录皆设为任何人可读取\nchmod -R a+r *\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h3",{attrs:{id:"进程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#进程"}},[s._v("#")]),s._v(" 进程")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('# 查看进程\n# 显示当前系统进程的列表 \nps ax\n# 显示当前系统进程详细列表以及进程用户\nps aux \n# 过滤具体进程（XXX为进程名称）\nps ax|grep XXX | grep -v grep\n\n# 获取进程id\nps -A |grep "cmdname" | grep -v grep| awk \'{print $1}\'\npgrep "cmdname"\n\n# 杀进程\nkill PID\n# 强制杀进程\nkill -9 PID \n\n# 杀掉所有匹配的进程进程\n# 先检查一下，在 kill\nps -A |grep "cmdname"| grep -v grep | awk \'{print $1}\'\nps -A |grep "cmdname"| grep -v grep | awk \'{print $1}\'| while read s;do kill $s;done\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])]),n("h3",{attrs:{id:"文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#文件"}},[s._v("#")]),s._v(" 文件")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# 批量删除空文件\nfind . -type f -empty -delete\nfind . -type f -size 0 -delete\n\n## 解压文件 #####\n# 压缩文件 file1 和目录 dir2 到 test.tar.gz\ntar -zcvf test.tar.gz file1 dir2\n# 解压 test.tar.gz（将 c 换成 x 即可）\ntar -zxvf test.tar.gz\n# 列出压缩文件的内容\ntar -ztvf test.tar.gz \n# 使用 -d 选项手动指定解压缩位置\nunzip -d /tmp/ ana.zip\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("h3",{attrs:{id:"文本浏览"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#文本浏览"}},[s._v("#")]),s._v(" 文本浏览")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# 显示文本内容\ncat <file>  \t\t\t\t\t# 一次性显示完\nhead -20 <file>\t\t\t\t# 显示开头 20 行文本\ntail -n3 <file>\t\t\t\t# 显示最后 3 行文本\ntail -n10 <file>\t\t\t# 显示最后 10 行文本，并监听文件\nsed -n '3,7p' <file>\t# 指定读取某个文件的第3-7行\nsed -n '3,$p' <file>\t# 指定读取某个文件第 3 行到最后一行，$代表最后一行\n\n\n# 浏览文本\nless -N <file> \t\t\t# 开始浏览文本\n# 搜索\n  /字符串：向下搜索\n  ?字符串：向上搜索\n  n：重复前一个搜索（与 / 或 ? 有关）\n  N：反向重复前一个搜索（与 / 或 ? 有关）\n# 向前翻页\n  y 向前滚动一行\n  u 向前滚动半页\n  b 向上翻一页\n# 向后翻页\n\t回车键 滚动一行\n\td 向后翻半页\n\t空格键 滚动一页\nh 显示帮助界面\nQ 退出less 命令\n\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br")])]),n("h4",{attrs:{id:"文本搜索"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#文本搜索"}},[s._v("#")]),s._v(" 文本搜索")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# 搜索某个文件中，包含某个关键词的内容\ngrep root /etc/passwd\n# 搜索某个文件中，以某个关键词开头的内容\ngrep ^root /etc/passwd\n# 展示匹配行的前后若干行（B：前 A：后 C： 前后）\ngrep -C1 leo passwd\n# 搜索多个文件中，包含某个关键词的内容\ngrep root /etc/passwd /etc/shadow\n# 搜索多个文件中，包含某个关键词的内容，不显示文件名称\ngrep -h root /etc/passwd /etc/shadow\n# 输出在某个文件中，包含某个关键词行的数量\ngrep -c root /etc/passwd /etc/shadow\n# 搜索某个文件中，不包含某个关键词的内容\ngrep -v nologin /etc/passwd\n# 搜索某个文件中，精准匹配到某个关键词的内容（搜索词应与整行内容完全一样才会显示，有别于一般搜索）\ngrep -x cdrom anaconda-ks.cfg\n# 搜索某个文件中，空行的数量\ngrep -c ^$ anaconda-ks.cfg \n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("h4",{attrs:{id:"文本编辑"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#文本编辑"}},[s._v("#")]),s._v(" 文本编辑")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# sed 可以接在管道上，也可以在后面指定文件\n# sed 添加 -i 可以直接修改文件\n# 删除所有行\nsed 'd'\n# 删除第2行\nsed '2d'\n# 删除第2~5行\nsed '2,5d'\n# 删除第3到最后一行，$代表最后一行\nsed '3,$d'\n# 删除空行\nsed '/^$/d'\n\n\n# 替换第二个 test 为 trial\nsed 's/test/trial/2'\n# 替换所有 test 为 trial\nsed 's/test/trial/g'\n# -n 选项会禁止 sed 输出，但 p 标记会输出修改过的行，将二者匹配使用的效果就是只输出被替换命令修改过的行\nsed -n 's/test/trial/p' \n# 将处理后的结果保存到指定文件中\nsed 's/test/trial/w test.txt' \n# 将第2到5行替换为一行字符串\"No 2~5 lines\"\nsed '2,5c No 2~5 lines'\n\n# 插入多行数据只需对要插入或附加的文本中的每一行末尾（除最后一行）添加反斜线即可\n# 在第三行插入数据，即第三行和第二行中间\nsed '3i\\\n> This is an inserted line.'\n# 在第三行追加数据，即第三行和第四行中间\nsed '3a\\\n> This is an appended line.'\n# 把第三行数据替换掉\nsed '3c\\\n> This is a changed line of text.'\n# 把 data.txt 文件内容插入到第三行后面\nsed '3r data.txt'\n# 把 data.txt 文件内容插入到数据流尾部\nsed '$r data.txt'\n# 可以添加一个完全为空的空行\nsed '4 a \\\\'\n# 可以添加两个完全为空的空行\nsed '4 a \\\\n'\n\n# 替换字符\n# 把 1 替换成 7,2 替换成 8,3 替换成 9\nsed 'y/123/789/'\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br")])]),n("h4",{attrs:{id:"文本处理-awk"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#文本处理-awk"}},[s._v("#")]),s._v(" 文本处理 awk")]),s._v(" "),n("p",[n("strong",[s._v("常用参数：")])]),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[s._v("-F")]),s._v(" "),n("th",[s._v("指定输入时用到的字段分隔符")])])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("-v")]),s._v(" "),n("td",[s._v("自定义变量")])]),s._v(" "),n("tr",[n("td",[s._v("-f")]),s._v(" "),n("td",[s._v("从脚本中读取awk命令")])]),s._v(" "),n("tr",[n("td",[s._v("-m")]),s._v(" "),n("td",[s._v("对val值设置内在限制")])])])]),s._v(" "),n("p",[s._v("内置变量：")]),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[s._v("变量名称")]),s._v(" "),n("th",[s._v("说明")])])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("ARGC")]),s._v(" "),n("td",[s._v("命令行参数个数")])]),s._v(" "),n("tr",[n("td",[s._v("ARGV")]),s._v(" "),n("td",[s._v("命令行参数排列")])]),s._v(" "),n("tr",[n("td",[s._v("ENVIRON")]),s._v(" "),n("td",[s._v("支持队列中系统环境变量的使用")])]),s._v(" "),n("tr",[n("td",[s._v("FILENAME")]),s._v(" "),n("td",[s._v("awk浏览的文件名")])]),s._v(" "),n("tr",[n("td",[s._v("FNR")]),s._v(" "),n("td",[s._v("浏览文件的记录数")])]),s._v(" "),n("tr",[n("td",[s._v("FS")]),s._v(" "),n("td",[s._v("设置输入域分隔符，等价于命令行 -F选项")])]),s._v(" "),n("tr",[n("td",[s._v("NF")]),s._v(" "),n("td",[s._v("浏览记录的域的个数")])]),s._v(" "),n("tr",[n("td",[s._v("NR")]),s._v(" "),n("td",[s._v("已读的记录数")])]),s._v(" "),n("tr",[n("td",[s._v("OFS")]),s._v(" "),n("td",[s._v("输出域分隔符")])]),s._v(" "),n("tr",[n("td",[s._v("ORS")]),s._v(" "),n("td",[s._v("输出记录分隔符")])]),s._v(" "),n("tr",[n("td",[s._v("RS")]),s._v(" "),n("td",[s._v("控制记录分隔符")])])])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# 打印内容\n# 仅显示指定文件中第1、2列的内容（默认以空格为间隔符）\nawk ' {print $1,$2} ' test.log\n# 以冒号为间隔符，仅显示指定文件中第1列的内容\nawk -F ':' '{print $1}' test.log\n# 以冒号为间隔符，显示系统中所有UID号码大于500的用户信息（第3列）\nawk -F : '$3>=500' /etc/passwd\n# 仅显示指定文件中最后一个字段的内容\nawk '{print $NF}' test.log\n# 第一列匹配 oo 的行\nawk -F ':' '$1 ~/oo/' test.txt\n\n# 处理脚本\n# 第一条命令会给字段变量 $4 赋值。第二条命令会打印整个数据字段。\nawk '{$4=\"Christine\"; print $0}' test.log\n# 累加第五列，并打印\nawk '{sum+=$5} END {print sum}'\n# 过滤第一列大于2并且第二列等于'Are'的行\nawk '$1>2 && $2==\"Are\" {print $1,$2,$3}' log.txt\n\n# 打印九九乘法表\nseq 9 | sed 'H;g' | awk -v RS='' '{for(i=1;i<=NF;i++)printf(\"%dx%d=%d%s\", i, NR, i*NR, i==NR?\"\\n\":\"\\t\")}'\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br")])]),n("h3",{attrs:{id:"字符串变量操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#字符串变量操作"}},[s._v("#")]),s._v(" 字符串变量操作")]),s._v(" "),n("blockquote",[n("p",[s._v("特殊符合使用"),n("code",[s._v("\\")]),s._v("进行转义")])]),s._v(" "),n("ul",[n("li",[s._v("替换第一个匹配到的文本"),n("code",[s._v("${<源文本>/<需要替换的文本>/<替换后的文本>}")])]),s._v(" "),n("li",[s._v("替换所有匹配的文本"),n("code",[s._v("${<源文本>//<需要替换的文本>/<替换后的文本>}")])]),s._v(" "),n("li",[s._v("删除变量中第一个匹配的字符串"),n("code",[s._v("${<源文本>/<需要删除的文本>}")])]),s._v(" "),n("li",[s._v("删除变量中所有匹配的字符串"),n("code",[s._v("${<源文本>//<需要删除的文本>}")])])]),s._v(" "),n("h3",{attrs:{id:"base64"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#base64"}},[s._v("#")]),s._v(" BASE64")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("编码\nbase64 a  > b\n\n解码\nbase -d a > b\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("hr"),s._v(" "),n("h3",{attrs:{id:"nslookup"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nslookup"}},[s._v("#")]),s._v(" nslookup")]),s._v(" "),n("h4",{attrs:{id:"安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),n("blockquote",[n("p",[s._v("Ubuntu")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("apt-get install dnsutils\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("blockquote",[n("p",[s._v("Debian")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("apt-get update\napt-get install dnsutils\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("blockquote",[n("p",[s._v("Fedora / Centos")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("yum install bind-utils\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("hr"),s._v(" "),n("h3",{attrs:{id:"文件的组织"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#文件的组织"}},[s._v("#")]),s._v(" 文件的组织")]),s._v(" "),n("p",[s._v("以下是对这些目录的解释：")]),s._v(" "),n("ul",[n("li",[n("p",[n("strong",[s._v("/bin")]),s._v("：")]),s._v(" "),n("blockquote",[n("p",[s._v("Binaries (二进制文件) 的缩写, 这个目录存放着最经常使用的命令。")])])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("/boot：")])]),s._v(" "),n("blockquote",[n("p",[s._v("这里存放的是启动 Linux 时使用的一些核 心文件，包括一些连接文件以及镜像文件。")])])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("/dev ：")])]),s._v(" "),n("blockquote",[n("p",[s._v("Device(设备) 的缩写, 该目录下存放的是 Linux 的外部设备，在 Linux 中访问设备的方式和访问文件的方式是相同的。")])])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("/etc：")])]),s._v(" "),n("blockquote",[n("p",[s._v("etc 是 Etcetera(等等) 的缩写,这个目录用来存放所有的系统管理所需要的配置文件和子目录。")])])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("/home")]),s._v("：\n用户的主目录，在 Linux 中，每个用户都有一个自己的目录，一般该目录名是以用户的账号命名的，如上图中的 alice、bob 和 eve。")])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("/lib")]),s._v("：")]),s._v(" "),n("blockquote",[n("p",[s._v("Library(库) 的缩写这个目录里存放着系统最基本的动态连接共享库，其作用类似于 Windows 里的 DLL 文件。几乎所有的应用程序都需要用到这些共享库。")])])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("/lost+found")]),s._v("：")]),s._v(" "),n("blockquote",[n("p",[s._v("这个目录一般情况下是空的，当系统非法关机后，这里就存放了一些文件。")])])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("/media")]),s._v("：")]),s._v(" "),n("blockquote",[n("p",[s._v("linux 系统会自动识别一些设备，例如U盘、光驱等等，当识别后，Linux 会把识别的设备挂载到这个目录下。")])])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("/mnt")]),s._v("：")]),s._v(" "),n("blockquote",[n("p",[s._v("系统提供该目录是为了让用户临时挂载别的文件系统的，我们可以将光驱挂载在 /mnt/ 上，然后进入该目录就可以查看光驱里的内容了。")])])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("/opt")]),s._v("：")]),s._v(" "),n("blockquote",[n("p",[s._v("optional(可选) 的缩写，这是给主机额外安装软件所摆放的目录。比如你安装一个ORACLE数据库则就可以放到这个目录下。默认是空的。")])])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("/proc")]),s._v("：")]),s._v(" "),n("blockquote",[n("p",[s._v("proc 是 Processes(进程) 的缩写，/proc 是一种伪文件系统（也即虚拟文件系统），存储的是当前内核运行状态的一系列特殊文件，这个目录是一个虚拟的目录，它是系统内存的映射，我们可以通过直接访问这个目录来获取系统信息。\n这个目录的内容不在硬盘上而是在内存里，我们也可以直接修改里面的某些文件，")])])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("/root")]),s._v("：")]),s._v(" "),n("blockquote",[n("p",[s._v("该目录为系统管理员，也称作超级权限者的用户主目录。")])])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("/sbin")]),s._v("：")]),s._v(" "),n("blockquote",[n("p",[s._v("s 就是 Super User 的意思，是 Superuser Binaries (超级用户的二进制文件) 的缩写，这里存放的是系统管理员使用的系统管理程序。")])])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("/selinux")]),s._v("：")]),s._v(" "),n("blockquote",[n("p",[s._v("这个目录是 Redhat/CentOS 所特有的目录，Selinux 是一个安全机制，类似于 windows 的防火墙，但是这套机制比较复杂，这个目录就是存放selinux相关的文件的。")])])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("/srv")]),s._v("：")]),s._v(" "),n("blockquote",[n("p",[s._v("该目录存放一些服务启动之后需要提取的数据。")])])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("/sys")]),s._v("：")]),s._v(" "),n("blockquote",[n("p",[s._v("这是 Linux2.6 内核的一个很大的变化。该目录下安装了 2.6 内核中新出现的一个文件系统 sysfs 。")]),s._v(" "),n("p",[s._v("sysfs 文件系统集成了下面3种文件系统的信息：针对进程信息的 proc 文件系统、针对设备的 devfs 文件系统以及针对伪终端的 devpts 文件系统。")]),s._v(" "),n("p",[s._v("该文件系统是内核设备树的一个直观反映。")]),s._v(" "),n("p",[s._v("当一个内核对象被创建的时候，对应的文件和目录也在内核对象子系统中被创建")])])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("/tmp")]),s._v("：")]),s._v(" "),n("blockquote",[n("p",[s._v("tmp 是 temporary(临时) 的缩写这个目录是用来存放一些临时文件的。")])])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("/usr")]),s._v("：")]),s._v(" "),n("blockquote",[n("p",[s._v("usr 是 unix shared resources(共享资源) 的缩写，这是一个非常重要的目录，用户的很多应用程序和文件都放在这个目录下，类似于 windows 下的 program files 目录。")])])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("/usr/bin：")])]),s._v(" "),n("blockquote",[n("p",[s._v("系统用户使用的应用程序。")])])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("/usr/sbin：")])]),s._v(" "),n("blockquote",[n("p",[s._v("超级用户使用的比较高级的管理程序和系统守护程序。")])])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("/usr/src：")])]),s._v(" "),n("blockquote",[n("p",[s._v("内核源代码默认的放置目录。")])])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("/var")]),s._v("：")]),s._v(" "),n("blockquote",[n("p",[s._v("var 是 variable(变量) 的缩写，这个目录中存放着在不断扩充着的东西，我们习惯将那些经常被修改的目录放在这个目录下。包括各种日志文件。")])])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("/run")]),s._v("：")]),s._v(" "),n("blockquote",[n("p",[s._v("是一个临时文件系统，存储系统启动以来的信息。当系统重启时，这个目录下的文件应该被删掉或清除。如果你的系统上有 /var/run 目录，应该让它指向 run。")])])])])])}),[],!1,null,null,null);n.default=e.exports}}]);