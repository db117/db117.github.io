(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{224:function(e,a,i){"use strict";i.r(a);var s=i(0),l=Object(s.a)({},(function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h2",{attrs:{id:"在线安装"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#在线安装"}},[e._v("#")]),e._v(" 在线安装")]),e._v(" "),i("ul",[i("li",[e._v("用MySQL数据库安装存储库(数据库另装)\n"),i("ul",[i("li",[e._v("rpm -i http://repo.zabbix.com/zabbix/3.4/rhel/7/x86_64/zabbix-release-3.4-2.el7.noarch.rpm")])])]),e._v(" "),i("li",[e._v("安装ZabBix服务器，前端，代理\n"),i("ul",[i("li",[e._v("yum install zabbix-server-mysql zabbix-web-mysql zabbix-agent")])])]),e._v(" "),i("li",[e._v("创建初始数据库\n"),i("ul",[i("li",[e._v("mysql -uroot -p")]),e._v(" "),i("li",[e._v("password")]),e._v(" "),i("li",[e._v("mysql> create database zabbix character set utf8 collate utf8_bin;")]),e._v(" "),i("li",[e._v("mysql> grant all privileges on zabbix.* to zabbix@localhost identified by 'password';")]),e._v(" "),i("li",[e._v("mysql> quit;")])])]),e._v(" "),i("li",[e._v("导入初始模式和数据。将提示您输入新创建的密码。\n"),i("ul",[i("li",[e._v("zcat /usr/share/doc/zabbix-server-mysql*/create.sql.gz | mysql -uzabbix -p zabbix")])])]),e._v(" "),i("li",[e._v("为ZabBIX服务器配置数据库\n"),i("ul",[i("li",[e._v("编辑文件    vim /etc/zabbix/zabbix_server.conf\n"),i("ul",[i("li",[e._v("DBPassword=password")])])])])]),e._v(" "),i("li",[e._v("为ZabBIX前端配置PHP\n"),i("ul",[i("li",[e._v("编辑文件    vim /etc/httpd/conf.d/zabbix.conf\n"),i("ul",[i("li",[e._v("php_value date.timezone Asia/Shanghai")])])])])]),e._v(" "),i("li",[e._v("启动ZabBIX服务器和代理进程\n"),i("ul",[i("li",[e._v("systemctl restart zabbix-server zabbix-agent httpd")]),e._v(" "),i("li",[e._v("systemctl enable zabbix-server zabbix-agent httpd")])])]),e._v(" "),i("li",[e._v("然后就可以访问了ip/zabbix\n"),i("ul",[i("li",[e._v("默认帐号密码Admin/zabbix")])])])]),e._v(" "),i("h2",{attrs:{id:"修改为中文"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#修改为中文"}},[e._v("#")]),e._v(" 修改为中文")]),e._v(" "),i("ul",[i("li",[e._v("打开Zabbix界面，Administrator-Users 选择语言-Chinese(zh_CN)-update")]),e._v(" "),i("li",[e._v("解决乱码\n"),i("ul",[i("li",[i("p",[e._v("从Window服务器找到相应的字休复制到zabbix Server服务器上：")]),e._v(" "),i("p",[e._v("控制面板--\x3e字体--\x3e选择一种中文字库例如“楷体”（simkai.ttf）")])]),e._v(" "),i("li",[i("p",[e._v("将我们选择的字体文件上传到zabbix web服务，cd /usr/share/zabbix/fonts目录下（rpm安装目录）")])]),e._v(" "),i("li",[i("p",[e._v("修改此vim /usr/share/zabbix/include/defines.inc.php文件中字体的配置，\n将里面关于字体设置从graphfont替换成simkai")]),e._v(" "),i("ul",[i("li",[e._v("define('ZBX_GRAPH_FONT_NAME',           'simkai'); // font file name")])])])])])]),e._v(" "),i("h2",{attrs:{id:"关闭selinux"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#关闭selinux"}},[e._v("#")]),e._v(" 关闭selinux")]),e._v(" "),i("ul",[i("li",[e._v("vim /etc/selinux/config\n"),i("ul",[i("li",[e._v("SELINUX=disabled")])])]),e._v(" "),i("li",[e._v("setenforce 0")]),e._v(" "),i("li",[e._v("getenforce")])]),e._v(" "),i("h2",{attrs:{id:"docker搭建zabbix"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#docker搭建zabbix"}},[e._v("#")]),e._v(" docker搭建zabbix")]),e._v(" "),i("p",[e._v("本次使用docker搭建zabbix的组合是mysql+docker+zabix-server")]),e._v(" "),i("ul",[i("li",[e._v("先安装数据库mysql")])]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v('    docker run --name zabbix-mysql-server --hostname zabbix-mysql-server \\\n    -e MYSQL_ROOT_PASSWORD="123456" \\\n    -e MYSQL_USER="zabbix" \\\n    -e MYSQL_PASSWORD="123456" \\\n    -e MYSQL_DATABASE="zabbix" \\\n    -p 3306:3306 \\\n    -d mysql:5.7.22 \\\n    --character-set-server=utf8 --collation-server=utf8_bin\n')])])]),i("ul",[i("li",[e._v("创建zabbix-server")])]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v('    docker run  --name zabbix-server-mysql --hostname zabbix-server-mysql \\\n    --link zabbix-mysql-server:mysql \\\n    -e DB_SERVER_HOST="mysql" \\\n    -e MYSQL_USER="zabbix" \\\n    -e MYSQL_DATABASE="zabbix" \\\n    -e MYSQL_PASSWORD="123456" \\\n    -v /etc/localtime:/etc/localtime:ro \\\n    -v /data/docker/zabbix/alertscripts:/usr/lib/zabbix/alertscripts \\\n    -v /data/docker/zabbix/externalscripts:/usr/lib/zabbix/externalscripts \\\n    -p 10051:10051 \\\n    -d zabbix/zabbix-server-mysql \\\n    \n')])])]),i("ul",[i("li",[e._v("最后web-nginx")])]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v('    docker run --name zabbix-web-nginx-mysql --hostname zabbix-web-nginx-mysql \\\n    --link zabbix-mysql-server:mysql \\\n    --link zabbix-server-mysql:zabbix-server \\\n    -e DB_SERVER_HOST="mysql" \\\n    -e MYSQL_USER="zabbix" \\\n    -e MYSQL_PASSWORD="123456" \\\n    -e MYSQL_DATABASE="zabbix" \\\n    -e ZBX_SERVER_HOST="zabbix-server" \\\n    -e PHP_TZ="Asia/Shanghai" \\\n    -p 8000:80 \\\n    -p 8443:443 \\\n    -d \\\n    zabbix/zabbix-web-nginx-mysql\n')])])]),i("ul",[i("li",[e._v("登录访问测试")])]),e._v(" "),i("p",[e._v("浏览器访问ip:8000查看\n默认登录\nusername:Admin\npassword:zabbix\n这里说明下，mysql没做数据卷的映射，nginx也没做数据卷的映射，在实际生产环境下，最好做数据映射。防止数据丢失。")]),e._v(" "),i("ul",[i("li",[e._v("docker-zabbbix-agent的安装以及链接zabbix-server")])]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("docker run --name zabbix-agent --link zabbix-server-mysql:zabbix-server -d zabbix/zabbix-agent:latest\n")])])]),e._v('" -e ZBX_SERVER_HOST="192.168.1.109" -e ZBX_SERVER_PORT=10051 -d zabbix/zabbix-agent:3.2.5 extra-class">'),i("pre",{pre:!0,attrs:{class:"language-docker"}},[i("code")]),e._v(" "),i("p",[e._v("最后需要在web端将，zabbix-agent添加到zabbix-server的host列表里面。")])])}),[],!1,null,null,null);a.default=l.exports}}]);