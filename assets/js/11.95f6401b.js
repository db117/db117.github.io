(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{370:function(t,s,a){"use strict";a.r(s);var l=a(25),i=Object(l.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"windows解压安装-5-7-8-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows解压安装-5-7-8-0"}},[t._v("#")]),t._v(" Windows解压安装（5.7，8.0）")]),t._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("ul",[a("li",[t._v("下载mysql\n"),a("ul",[a("li",[t._v("进入官网：https://www.mysql.com/\n单击【Downloads】选项卡\n最下面有个【 MySQL Community Edition  (GPL)】，单击【Community (GPL) Downloads »】\n单击【MySQL Community Server (GPL)】下的【DOWNLOAD】\n在弹出的页面上下载【Windows (x86, 64-bit), ZIP Archive】")])])]),t._v(" "),a("li",[t._v("安装mysql\n压缩包相当于免安装文件，要想使用它，需要配置正确，并通过服务来启动数据库服务。")]),t._v(" "),a("li",[t._v("把压缩包解压到你喜欢的位置\n本示例解压到：D:\\mysql-5.7.13-winx64，文件夹下")])]),t._v(" "),a("h2",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("创建my.ini文件，内容如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[mysql]\n# 设置mysql客户端默认字符集\ndefault-character-set=utf8mb4 \n[mysqld]\n#设置3306端口\nport = 3306 \n# 设置mysql的安装目录\nbasedir=C:\\mysql-5.7.12-winx64\n# 设置mysql数据库的数据的存放目录\ndatadir=C:\\mysql-5.7.12-winx64\\data\n# 允许最大连接数\nmax_connections=200\n# 服务端使用的字符集默认为8比特编码的latin1字符集\ncharacter-set-server=utf8mb4\n# 创建新表时将使用的默认存储引擎\ndefault-storage-engine=INNODB\n[client]\ndefault-character-set = utf8mb4\n")])])]),a("ul",[a("li",[t._v("注意，basedir和datadir是必须要配置的，basedir就是你解压的目录。官方文档上说，如果你喜欢用反斜杠，则要用双反斜杠，斜杠的话就不用这样。即：D:\\mysql-5.7.13-winx64\\ 或：D:/mysql-5.7.13-winx64/\n由于本人喜欢把数据库的数据文件独立出来，所以就把datadir配置到其它地方，方便管理。另外，创建该目录。")])])]),t._v(" "),a("li",[a("p",[t._v("配置环境变量")]),t._v(" "),a("ul",[a("li",[t._v("添加一个名叫 MYSQL_HOME 的变量。")]),t._v(" "),a("li",[t._v("修改Path变量，在末尾添加 %MYSQL_HOME%\\bin")])])])]),t._v(" "),a("h2",{attrs:{id:"安装服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装服务"}},[t._v("#")]),t._v(" 安装服务")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("安装mysql服务")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("以管理员身份运行cmd，进入mysql的bin目录。")])]),t._v(" "),a("li",[a("p",[t._v("初始化数据库文件")])]),t._v(" "),a("li",[a("p",[t._v("mysqld  --initialize")])]),t._v(" "),a("li",[a("p",[t._v("初始化成功后，会在datadir目录下生成一些文件，其中，xxx.err文件里说明了root账户的临时密码。那行大概长这样：")])]),t._v(" "),a("li",[a("p",[t._v("2016-07-24T05:19:20.152135Z 1 [Note] A temporary password is generated for root@localhost: bL2uuwuf0H(X")]),t._v(" "),a("p",[t._v("即密码是：bL2uuwuf0H(X")])])])]),t._v(" "),a("li",[a("p",[t._v("注册mysql服务")]),t._v(" "),a("ul",[a("li",[t._v("mysqld -install MySQL")])])]),t._v(" "),a("li",[a("p",[t._v("启动mysql服务")]),t._v(" "),a("ul",[a("li",[t._v("net start MySQL")])])])]),t._v(" "),a("h2",{attrs:{id:"修改root密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改root密码"}},[t._v("#")]),t._v(" 修改root密码")]),t._v(" "),a("ul",[a("li",[t._v("修改root密码\n"),a("ul",[a("li",[a("p",[t._v("输入以下命令，回车，然后输入上面的默认密码：")])]),t._v(" "),a("li",[a("p",[t._v("mysql -u root -p")])]),t._v(" "),a("li",[a("p",[t._v("进入MySQL命令行模式后，输入如下命令，命令中的 new_password 为root账号的新密码，请修改它。")])]),t._v(" "),a("li",[a("p",[t._v("ALTER USER 'root'@'localhost' IDENTIFIED BY 'new_password';")])])])])])])}),[],!1,null,null,null);s.default=i.exports}}]);