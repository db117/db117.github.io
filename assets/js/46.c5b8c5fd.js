(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{248:function(l,v,_){"use strict";_.r(v);var i=_(0),t=Object(i.a)({},(function(){var l=this,v=l.$createElement,_=l._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[_("h2",{attrs:{id:"命令历史"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#命令历史"}},[l._v("#")]),l._v(" 命令历史")]),l._v(" "),_("p",[l._v("以:和/开头的命令都有历史纪录，可以首先键入:或/然后按上下箭头来选择某个历史命令。")]),l._v(" "),_("h2",{attrs:{id:"启动vim"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#启动vim"}},[l._v("#")]),l._v(" 启动vim")]),l._v(" "),_("ul",[_("li",[l._v("在命令行窗口中输入以下命令即可\n"),_("ul",[_("li",[l._v("vim 直接启动vim")]),l._v(" "),_("li",[l._v("vim filename 打开vim并创建名为filename的文件")])])])]),l._v(" "),_("h2",{attrs:{id:"文件命令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#文件命令"}},[l._v("#")]),l._v(" 文件命令")]),l._v(" "),_("ul",[_("li",[l._v("打开单个文件\n"),_("ul",[_("li",[l._v("vim file")])])]),l._v(" "),_("li",[l._v("同时打开多个文件\n"),_("ul",[_("li",[l._v("vim file1 file2 file3 ...")])])]),l._v(" "),_("li",[l._v("在vim窗口中打开一个新文件\n"),_("ul",[_("li",[l._v(":open file")])])]),l._v(" "),_("li",[l._v("在新窗口中打开文件\n"),_("ul",[_("li",[l._v(":split file")])])]),l._v(" "),_("li",[l._v("切换到下一个文件\n"),_("ul",[_("li",[l._v(":bn")])])]),l._v(" "),_("li",[l._v("切换到上一个文件\n"),_("ul",[_("li",[l._v(":bp")])])]),l._v(" "),_("li",[l._v("查看当前打开的文件列表，当前正在编辑的文件会用[]括起来。\n"),_("ul",[_("li",[l._v(":args")])])]),l._v(" "),_("li",[l._v("打开远程文件，比如ftp或者share folder\n"),_("ul",[_("li",[l._v(":e ftp://192.168.10.76/abc.txt")]),l._v(" "),_("li",[l._v(":e \\qadrive\test.txt")])])])]),l._v(" "),_("h2",{attrs:{id:"vim的模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vim的模式"}},[l._v("#")]),l._v(" vim的模式")]),l._v(" "),_("ul",[_("li",[l._v("正常模式（按Esc或Ctrl+[进入） 左下角显示文件名或为空")]),l._v(" "),_("li",[l._v("插入模式（按i键进入） 左下角显示--INSERT--")]),l._v(" "),_("li",[l._v("可视模式（不知道如何进入） 左下角显示--VISUAL--")])]),l._v(" "),_("h2",{attrs:{id:"导航命令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#导航命令"}},[l._v("#")]),l._v(" 导航命令")]),l._v(" "),_("p",[l._v("% 括号匹配")]),l._v(" "),_("h2",{attrs:{id:"插入命令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#插入命令"}},[l._v("#")]),l._v(" 插入命令")]),l._v(" "),_("ul",[_("li",[l._v("i 在当前位置生前插入")]),l._v(" "),_("li",[l._v("I 在当前行首插入")]),l._v(" "),_("li",[l._v("a 在当前位置后插入")]),l._v(" "),_("li",[l._v("A 在当前行尾插入")]),l._v(" "),_("li",[l._v("o 在当前行之后插入一行")]),l._v(" "),_("li",[l._v("O 在当前行之前插入一行")])]),l._v(" "),_("h2",{attrs:{id:"查找命令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#查找命令"}},[l._v("#")]),l._v(" 查找命令")]),l._v(" "),_("ul",[_("li",[l._v("vim中有一些特殊字符在查找时需要转义\n"),_("ul",[_("li",[l._v(".*[]^%/?~$")])])]),l._v(" "),_("li",[l._v("/text\n"),_("ul",[_("li",[l._v("查找text，按n健查找下一个，按N健查找前一个。")])])]),l._v(" "),_("li",[l._v("?text\n"),_("ul",[_("li",[l._v("查找text，反向查找，按n健查找下一个，按N健查找前一个。")])])]),l._v(" "),_("li",[l._v(":set ignorecase\n"),_("ul",[_("li",[l._v("忽略大小写的查找")])])]),l._v(" "),_("li",[l._v(":set noignorecase\n"),_("ul",[_("li",[l._v("不忽略大小写的查找")])])]),l._v(" "),_("li",[l._v("查找很长的词，如果一个词很长，键入麻烦，可以将光标移动到该词上，按*或#键即可以该单词进行搜索，相当于/搜索。而#命令相当于?搜索。")]),l._v(" "),_("li",[l._v(":set hlsearch\n"),_("ul",[_("li",[l._v("高亮搜索结果，所有结果都高亮显示，而不是只显示一个匹配。")])])]),l._v(" "),_("li",[l._v(":set nohlsearch\n"),_("ul",[_("li",[l._v("关闭高亮搜索显示")])])]),l._v(" "),_("li",[l._v(":nohlsearch\n"),_("ul",[_("li",[l._v("关闭当前的高亮显示，如果再次搜索或者按下n或N键，则会再次高亮。")])])]),l._v(" "),_("li",[l._v(":set incsearch\n"),_("ul",[_("li",[l._v("逐步搜索模式，对当前键入的字符进行搜索而不必等待键入完成。")])])]),l._v(" "),_("li",[l._v(":set wrapscan\n"),_("ul",[_("li",[l._v("重新搜索，在搜索到文件头或尾时，返回继续搜索，默认开启。")])])])]),l._v(" "),_("h2",{attrs:{id:"替换命令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#替换命令"}},[l._v("#")]),l._v(" 替换命令")]),l._v(" "),_("ul",[_("li",[l._v("ra\n"),_("ul",[_("li",[l._v("将当前字符替换为a，当期字符即光标所在字符。")])])]),l._v(" "),_("li",[l._v("s/old/new/\n"),_("ul",[_("li",[l._v("用old替换new，替换当前行的第一个匹配")])])]),l._v(" "),_("li",[l._v("s/old/new/g\n"),_("ul",[_("li",[l._v("用old替换new，替换当前行的所有匹配")])])]),l._v(" "),_("li",[l._v("%s/old/new/\n"),_("ul",[_("li",[l._v("用old替换new，替换所有行的第一个匹配")])])]),l._v(" "),_("li",[l._v("%s/old/new/g\n"),_("ul",[_("li",[l._v("用old替换new，替换整个文件的所有匹配")])])]),l._v(" "),_("li",[l._v(":10,20 s/^/    /g\n"),_("ul",[_("li",[l._v("在第10行知第20行每行前面加四个空格，用于缩进。")])])]),l._v(" "),_("li",[l._v("ddp\n"),_("ul",[_("li",[l._v("交换光标所在行和其下紧邻的一行。")])])])]),l._v(" "),_("h2",{attrs:{id:"移动命令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#移动命令"}},[l._v("#")]),l._v(" 移动命令")]),l._v(" "),_("ul",[_("li",[l._v("h\n"),_("ul",[_("li",[l._v("左移一个字符")])])]),l._v(" "),_("li",[l._v("l\n"),_("ul",[_("li",[l._v("右移一个字符，这个命令很少用，一般用w代替。")])])]),l._v(" "),_("li",[l._v("k\n"),_("ul",[_("li",[l._v("上移一个字符")])])]),l._v(" "),_("li",[l._v("j\n"),_("ul",[_("li",[l._v("下移一个字符")])])]),l._v(" "),_("li",[l._v("以上四个命令可以配合数字使用，比如20j就是向下移动20行，5h就是向左移动5个字符，在Vim中，很多命令都可以配合数字使用，比如删除10个字符10x，在当前位置后插入3个！，3a！"),_("Esc",[l._v("，这里的Esc是必须的，否则命令不生效。")])],1),l._v(" "),_("li",[l._v("w\n"),_("ul",[_("li",[l._v("向前移动一个单词（光标停在单词首部），如果已到行尾，则转至下一行行首。此命令快，可以代替l命令。")])])]),l._v(" "),_("li",[l._v("b\n"),_("ul",[_("li",[l._v("向后移动一个单词 2b 向后移动2个单词")])])]),l._v(" "),_("li",[l._v("e，\n"),_("ul",[_("li",[l._v("同w，只不过是光标停在单词尾部")])])]),l._v(" "),_("li",[l._v("ge，\n"),_("ul",[_("li",[l._v("同b，光标停在单词尾部。")])])]),l._v(" "),_("li",[l._v("^\n"),_("ul",[_("li",[l._v("移动到本行第一个非空白字符上。")])])]),l._v(" "),_("li",[l._v("0\n"),_("ul",[_("li",[l._v("（数字0）移动到本行第一个字符上，")])])]),l._v(" "),_("li",[l._v("$\n"),_("ul",[_("li",[l._v("移动到行尾 3$ 移动到下面3行的行尾")])])]),l._v(" "),_("li",[l._v("gg\n"),_("ul",[_("li",[l._v("移动到文件头。 = [[")])])]),l._v(" "),_("li",[l._v("G\n"),_("ul",[_("li",[l._v("（shift + g） 移动到文件尾。 = ]]")])])]),l._v(" "),_("li",[l._v("f\n"),_("ul",[_("li",[l._v("（find）命令也可以用于移动，fx将找到光标后第一个为x的字符，3fd将找到第三个为d的字符。")])])]),l._v(" "),_("li",[l._v("F\n"),_("ul",[_("li",[l._v("同f，反向查找。")])])]),l._v(" "),_("li",[l._v("跳到指定行，冒号+行号，回车，比如跳到240行就是 :240回车。另一个方法是行号+G，比如230G跳到230行。")]),l._v(" "),_("li",[l._v("Ctrl + e\n"),_("ul",[_("li",[l._v("向下滚动一行")])])]),l._v(" "),_("li",[l._v("Ctrl + y\n"),_("ul",[_("li",[l._v("向上滚动一行")])])]),l._v(" "),_("li",[l._v("Ctrl + d\n"),_("ul",[_("li",[l._v("向下滚动半屏")])])]),l._v(" "),_("li",[l._v("Ctrl + u\n"),_("ul",[_("li",[l._v("向上滚动半屏")])])]),l._v(" "),_("li",[l._v("Ctrl + f11\n"),_("ul",[_("li",[l._v("向下滚动一屏")])])]),l._v(" "),_("li",[l._v("Ctrl + b\n"),_("ul",[_("li",[l._v("向上滚动一屏")])])])]),l._v(" "),_("h2",{attrs:{id:"撤销和重做"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#撤销和重做"}},[l._v("#")]),l._v(" 撤销和重做")]),l._v(" "),_("ul",[_("li",[l._v("u\n"),_("ul",[_("li",[l._v("撤销（Undo）")])])]),l._v(" "),_("li",[l._v("U\n"),_("ul",[_("li",[l._v("撤销对整行的操作")])])]),l._v(" "),_("li",[l._v("Ctrl + r\n"),_("ul",[_("li",[l._v("重做（Redo），即撤销的撤销。")])])])]),l._v(" "),_("h2",{attrs:{id:"删除命令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#删除命令"}},[l._v("#")]),l._v(" 删除命令")]),l._v(" "),_("ul",[_("li",[l._v("x\n"),_("ul",[_("li",[l._v("删除当前字符")])])]),l._v(" "),_("li",[l._v("3x\n"),_("ul",[_("li",[l._v("删除当前光标开始向后三个字符")])])]),l._v(" "),_("li",[l._v("X\n"),_("ul",[_("li",[l._v("删除当前字符的前一个字符。X=dh")])])]),l._v(" "),_("li",[l._v("dl\n"),_("ul",[_("li",[l._v("删除当前字符， dl=x")])])]),l._v(" "),_("li",[l._v("dh\n"),_("ul",[_("li",[l._v("删除前一个字符")])])]),l._v(" "),_("li",[l._v("dd\n"),_("ul",[_("li",[l._v("删除当前行")])])]),l._v(" "),_("li",[l._v("dj\n"),_("ul",[_("li",[l._v("删除上一行")])])]),l._v(" "),_("li",[l._v("dk\n"),_("ul",[_("li",[l._v("删除下一行")])])]),l._v(" "),_("li",[l._v("10d\n"),_("ul",[_("li",[l._v("删除当前行开始的10行。")])])]),l._v(" "),_("li",[l._v("D\n"),_("ul",[_("li",[l._v("删除当前字符至行尾。D=d$")])])]),l._v(" "),_("li",[l._v("d$\n"),_("ul",[_("li",[l._v("删除当前字符之后的所有字符（本行）")])])]),l._v(" "),_("li",[l._v("kdgg\n"),_("ul",[_("li",[l._v("删除当前行之前所有行（不包括当前行）")])])]),l._v(" "),_("li",[l._v("jdG（jd shift + g）\n"),_("ul",[_("li",[l._v("删除当前行之后所有行（不包括当前行）")])])]),l._v(" "),_("li",[l._v(":1,10d\n"),_("ul",[_("li",[l._v("删除1-10行")])])]),l._v(" "),_("li",[l._v(":11,$d\n"),_("ul",[_("li",[l._v("删除11行及以后所有的行")])])]),l._v(" "),_("li",[l._v(":1,$d\n"),_("ul",[_("li",[l._v("删除所有行")])])]),l._v(" "),_("li",[l._v("J(shift + j)\n"),_("ul",[_("li",[l._v("删除两行之间的空行，实际上是合并两行。")])])])]),l._v(" "),_("h2",{attrs:{id:"拷贝和粘贴"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#拷贝和粘贴"}},[l._v("#")]),l._v(" 拷贝和粘贴")]),l._v(" "),_("ul",[_("li",[l._v("yy\n"),_("ul",[_("li",[l._v("拷贝当前行")])])]),l._v(" "),_("li",[l._v("nyy\n"),_("ul",[_("li",[l._v("拷贝当前后开始的n行，比如2yy拷贝当前行及其下一行。")])])]),l._v(" "),_("li",[l._v("p\n"),_("ul",[_("li",[l._v("在当前光标后粘贴,如果之前使用了yy命令来复制一行，那么就在当前行的下一行粘贴。")])])]),l._v(" "),_("li",[l._v("shift+p\n"),_("ul",[_("li",[l._v("在当前行前粘贴")])])]),l._v(" "),_("li",[l._v(":1,10 co 20\n"),_("ul",[_("li",[l._v("将1-10行插入到第20行之后。")])])]),l._v(" "),_("li",[l._v(":1,$ co $\n"),_("ul",[_("li",[l._v("将整个文件复制一份并添加到文件尾部。")])])]),l._v(" "),_("li",[l._v("正常模式下按v（逐字）或V（逐行）进入可视模式，然后用jklh命令移动即可选择某些行或字符，再按y即可复制")]),l._v(" "),_("li",[l._v("ddp\n"),_("ul",[_("li",[l._v("交换当前行和其下一行")])])]),l._v(" "),_("li",[l._v("xp\n"),_("ul",[_("li",[l._v("交换当前字符和其后一个字符")])])])]),l._v(" "),_("h2",{attrs:{id:"剪切命令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#剪切命令"}},[l._v("#")]),l._v(" 剪切命令")]),l._v(" "),_("p",[l._v("正常模式下按v（逐字）或V（逐行）进入可视模式，然后用jklh命令移动即可选择某些行或字符，再按d即可剪切\nndd 剪切当前行之后的n行。利用p命令可以对剪切的内容进行粘贴")]),l._v(" "),_("ul",[_("li",[l._v(":1,10d 将1-10行剪切。利用p命令可将剪切后的内容进行粘贴。")]),l._v(" "),_("li",[l._v(":1, 10 m 20 将第1-10行移动到第20行之后。")])]),l._v(" "),_("h2",{attrs:{id:"退出命令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#退出命令"}},[l._v("#")]),l._v(" 退出命令")]),l._v(" "),_("ul",[_("li",[l._v(":wq\n"),_("ul",[_("li",[l._v("保存并退出")])])]),l._v(" "),_("li",[l._v("ZZ\n"),_("ul",[_("li",[l._v("保存并退出")])])]),l._v(" "),_("li",[l._v(":q!\n"),_("ul",[_("li",[l._v("强制退出并忽略所有更改")])])]),l._v(" "),_("li",[l._v(":e!\n"),_("ul",[_("li",[l._v("放弃所有修改，并打开原来文件。")])])])]),l._v(" "),_("h2",{attrs:{id:"窗口命令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#窗口命令"}},[l._v("#")]),l._v(" 窗口命令")]),l._v(" "),_("ul",[_("li",[l._v(":split或new\n"),_("ul",[_("li",[l._v("打开一个新窗口，光标停在顶层的窗口上")])])]),l._v(" "),_("li",[l._v(":split file或:new file\n"),_("ul",[_("li",[l._v("用新窗口打开文件")])])]),l._v(" "),_("li",[l._v("split\n"),_("ul",[_("li",[l._v("打开的窗口都是横向的，使用vsplit可以纵向打开窗口。")])])]),l._v(" "),_("li",[l._v("Ctrl+ww\n"),_("ul",[_("li",[l._v("移动到下一个窗口")])])]),l._v(" "),_("li",[l._v("Ctrl+wj\n"),_("ul",[_("li",[l._v("移动到下方的窗口")])])]),l._v(" "),_("li",[l._v("Ctrl+wk\n"),_("ul",[_("li",[l._v("移动到上方的窗口")])])])]),l._v(" "),_("h2",{attrs:{id:"关闭窗口"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#关闭窗口"}},[l._v("#")]),l._v(" 关闭窗口")]),l._v(" "),_("ul",[_("li",[l._v(":close\n"),_("ul",[_("li",[l._v("最后一个窗口不能使用此命令，可以防止意外退出vim。")])])]),l._v(" "),_("li",[l._v(":q\n"),_("ul",[_("li",[l._v("如果是最后一个被关闭的窗口，那么将退出vim。")])])]),l._v(" "),_("li",[l._v("ZZ\n"),_("ul",[_("li",[l._v("保存并退出。")])])]),l._v(" "),_("li",[l._v(":only\n"),_("ul",[_("li",[l._v("关闭所有窗口，只保留当前窗口")])])]),l._v(" "),_("li",[l._v(":q!\n"),_("ul",[_("li",[l._v("放弃保存,并退出")])])]),l._v(" "),_("li",[l._v(": w filename\n"),_("ul",[_("li",[l._v("（输入 「w filename」将文章以指定的文件名filename保存）\n: wq")]),l._v(" "),_("li",[l._v("(输入「wq」，存盘并退出vi)")])])])]),l._v(" "),_("h2",{attrs:{id:"录制宏"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#录制宏"}},[l._v("#")]),l._v(" 录制宏")]),l._v(" "),_("p",[l._v("按q键加任意字母开始录制，再按q键结束录制（这意味着vim中的宏不可嵌套），使用的时候@加宏名，比如qa。。。q录制名为a的宏，@a使用这个宏。")]),l._v(" "),_("h2",{attrs:{id:"执行shell命令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#执行shell命令"}},[l._v("#")]),l._v(" 执行shell命令")]),l._v(" "),_("ul",[_("li",[l._v(":!command")]),l._v(" "),_("li",[l._v(":!ls\n"),_("ul",[_("li",[l._v("列出当前目录下文件")])])]),l._v(" "),_("li",[l._v(":!perl -c script.pl\n"),_("ul",[_("li",[l._v("检查perl脚本语法，可以不用退出vim，非常方便。")])])]),l._v(" "),_("li",[l._v(":!perl script.pl\n"),_("ul",[_("li",[l._v("执行perl脚本，可以不用退出vim，非常方便。")])])]),l._v(" "),_("li",[l._v(":suspend或Ctrl - Z\n"),_("ul",[_("li",[l._v("挂起vim，回到shell，按fg可以返回vim。")])])])]),l._v(" "),_("h2",{attrs:{id:"注释命令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#注释命令"}},[l._v("#")]),l._v(" 注释命令")]),l._v(" "),_("ul",[_("li",[l._v("perl程序中#开始的行为注释，所以要注释某些行，只需在行首加入#")]),l._v(" "),_("li",[l._v("3,5 s/^/#/g\n"),_("ul",[_("li",[l._v("注释第3-5行")])])]),l._v(" "),_("li",[l._v("3,5 s/^#//g\n"),_("ul",[_("li",[l._v("解除3-5行的注释")])])]),l._v(" "),_("li",[l._v("1,$ s/^/#/g\n"),_("ul",[_("li",[l._v("注释整个文档。")])])]),l._v(" "),_("li",[l._v(":%s/^/#/g\n"),_("ul",[_("li",[l._v("注释整个文档，此法更快。")])])])]),l._v(" "),_("h2",{attrs:{id:"帮助命令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#帮助命令"}},[l._v("#")]),l._v(" 帮助命令")]),l._v(" "),_("ul",[_("li",[l._v(":help or F1\n"),_("ul",[_("li",[l._v("显示整个帮助")])])]),l._v(" "),_("li",[l._v(":help xxx\n"),_("ul",[_("li",[l._v("显示xxx的帮助，比如 :help i, :help CTRL-[（即Ctrl+[的帮助）。")])])]),l._v(" "),_("li",[l._v(":help 'number'\n"),_("ul",[_("li",[l._v("Vim选项的帮助用单引号括起")])])]),l._v(" "),_("li",[l._v(":help "),_("Esc",[_("ul",[_("li",[l._v("特殊键的帮助用<>扩起")])])])],1),l._v(" "),_("li",[l._v(":help -t\n"),_("ul",[_("li",[l._v("Vim启动参数的帮助用-")])])]),l._v(" "),_("li",[l._v("：help i_"),_("Esc",[_("ul",[_("li",[l._v("插入模式下Esc的帮助，某个模式下的帮助用模式_主题的模式")])])])],1),l._v(" "),_("li",[l._v("帮助文件中位于||之间的内容是超链接，可以用Ctrl+]进入链接，Ctrl+o（Ctrl + t）返回")])]),l._v(" "),_("h2",{attrs:{id:"其他非编辑命令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#其他非编辑命令"}},[l._v("#")]),l._v(" 其他非编辑命令")]),l._v(" "),_("ul",[_("li",[l._v(".\n"),_("ul",[_("li",[l._v("重复前一次命令")])])]),l._v(" "),_("li",[l._v(":set ruler?\n"),_("ul",[_("li",[l._v("查看是否设置了ruler，在.vimrc中，使用set命令设制的选项都可以通过这个命令查看")])])]),l._v(" "),_("li",[l._v(":scriptnames\n"),_("ul",[_("li",[l._v("查看vim脚本文件的位置，比如.vimrc文件，语法文件及plugin等。")])])]),l._v(" "),_("li",[l._v(":set list\n"),_("ul",[_("li",[l._v("显示非打印字符，如tab，空格，行尾等。如果tab无法显示，请确定用set lcs=tab:>-命令设置了.vimrc文件，并确保你的文件中的确有tab，如果开启了expendtab，那么tab将被扩展为空格。")])])])])])}),[],!1,null,null,null);v.default=t.exports}}]);