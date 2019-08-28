(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{285:function(l,e,i){"use strict";i.r(e);var v=i(38),t=Object(v.a)({},function(){var l=this,e=l.$createElement,i=l._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[i("h2",{attrs:{id:"centos-开启dhcp服务"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#centos-开启dhcp服务","aria-hidden":"true"}},[l._v("#")]),l._v(" centos 开启DHCP服务")]),l._v(" "),i("ul",[i("li",[i("p",[l._v("vim /etc/sysconfig/network-scripts/ifcfg-ens33")]),l._v(" "),i("p",[l._v("把ONBOOT=no, 修改成ONBOOT=yes")]),l._v(" "),i("p",[l._v("service network restart")]),l._v(" "),i("p",[l._v("之后， ifconfig查看一下， 是否已经自动获取了IP地址。")])])]),l._v(" "),i("h2",{attrs:{id:"centos-7-开放防火墙端口-命令"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#centos-7-开放防火墙端口-命令","aria-hidden":"true"}},[l._v("#")]),l._v(" CentOS 7 开放防火墙端口 命令")]),l._v(" "),i("ul",[i("li",[l._v("关闭防火墙\n"),i("ul",[i("li",[l._v("systemctl stop firewalld.service\n"),i("ul",[i("li",[l._v("停止firewall")])])]),l._v(" "),i("li",[l._v("systemctl disable firewalld.service\n"),i("ul",[i("li",[l._v("禁止firewall开机启动")])])])])]),l._v(" "),i("li",[l._v("开启端口\n"),i("ul",[i("li",[l._v("firewall-cmd --zone=public --add-port=80/tcp --permanent")]),l._v(" "),i("li",[l._v("命令含义：\n"),i("ul",[i("li",[l._v("--zone #作用域")]),l._v(" "),i("li",[l._v("--add-port=80/tcp #添加端口，格式为：端口/通讯协议")]),l._v(" "),i("li",[l._v("--permanent #永久生效，没有此参数重启后失效")])])])])]),l._v(" "),i("li",[l._v("重启防火墙\n"),i("ul",[i("li",[l._v("firewall-cmd --reload")])])]),l._v(" "),i("li",[l._v("常用命令介绍\n"),i("ul",[i("li",[l._v("firewall-cmd --state\n"),i("ul",[i("li",[l._v("查看防火墙状态，是否是running")])])]),l._v(" "),i("li",[l._v("firewall-cmd --reload\n"),i("ul",[i("li",[l._v("重新载入配置，比如添加规则之后，需要执行此命令")])])]),l._v(" "),i("li",[l._v("firewall-cmd --get-zones\n"),i("ul",[i("li",[l._v("列出支持的zone")])])]),l._v(" "),i("li",[l._v("firewall-cmd --get-services\n"),i("ul",[i("li",[l._v("列出支持的服务，在列表中的服务是放行的")])])]),l._v(" "),i("li",[l._v("firewall-cmd --query-service ftp\n"),i("ul",[i("li",[l._v("查看ftp服务是否支持，返回yes或者no")])])]),l._v(" "),i("li",[l._v("firewall-cmd --add-service=ftp\n"),i("ul",[i("li",[l._v("临时开放ftp服务")])])]),l._v(" "),i("li",[l._v("firewall-cmd --add-service=ftp --permanent\n"),i("ul",[i("li",[l._v("永久开放ftp服务")])])]),l._v(" "),i("li",[l._v("firewall-cmd --remove-service=ftp --permanent\n"),i("ul",[i("li",[l._v("永久移除ftp服务")])])]),l._v(" "),i("li",[l._v("firewall-cmd --add-port=80/tcp --permanent\n"),i("ul",[i("li",[l._v("永久添加80端口")])])]),l._v(" "),i("li",[l._v("iptables -L -n\n"),i("ul",[i("li",[l._v("查看规则，这个命令是和iptables的相同的")])])]),l._v(" "),i("li",[l._v("man firewall-cmd\n"),i("ul",[i("li",[l._v("查看帮助")])])])])]),l._v(" "),i("li",[l._v("CentOS 7.0默认使用的是firewall作为防火墙，使用iptables必须重新设置一下\n"),i("ul",[i("li",[i("p",[l._v("直接关闭防火墙")])]),l._v(" "),i("li",[i("p",[l._v("systemctl stop firewalld.service")]),l._v(" "),i("ul",[i("li",[l._v("停止firewall")])])]),l._v(" "),i("li",[i("p",[l._v("systemctl disable firewalld.service")]),l._v(" "),i("ul",[i("li",[l._v("禁止firewall开机启动")])])]),l._v(" "),i("li",[i("p",[l._v("设置 iptables service")]),l._v(" "),i("ul",[i("li",[l._v("yum -y install iptables-services")])])]),l._v(" "),i("li",[i("p",[l._v("如果要修改防火墙配置，如增加防火墙端口3306")]),l._v(" "),i("ul",[i("li",[l._v("vi /etc/sysconfig/iptables")])])]),l._v(" "),i("li",[i("p",[l._v("增加规则")]),l._v(" "),i("ul",[i("li",[l._v("-A INPUT -m state --state NEW -m tcp -p tcp --dport 3306 -j ACCEPT")])])]),l._v(" "),i("li",[i("p",[l._v("保存退出后")])]),l._v(" "),i("li",[i("p",[l._v("systemctl restart iptables.service #重启防火墙使配置生效")])]),l._v(" "),i("li",[i("p",[l._v("systemctl enable iptables.service #设置防火墙开机启动")])]),l._v(" "),i("li",[i("p",[l._v("最后重启系统使设置生效即可。")])])])])]),l._v(" "),i("h2",{attrs:{id:"安装rz和sz命令"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#安装rz和sz命令","aria-hidden":"true"}},[l._v("#")]),l._v(" 安装rz和sz命令")]),l._v(" "),i("p",[l._v("yum install lrzsz")]),l._v(" "),i("h2",{attrs:{id:"centos-rpm安装警告"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#centos-rpm安装警告","aria-hidden":"true"}},[l._v("#")]),l._v(" CentOs rpm安装警告")]),l._v(" "),i("ul",[i("li",[l._v("原因：这是由于yum安装了旧版本的GPG keys造成的\n解决办法：后面加上\n--force --nodeps")])]),l._v(" "),i("h2",{attrs:{id:"新建用户并授权"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#新建用户并授权","aria-hidden":"true"}},[l._v("#")]),l._v(" 新建用户并授权")]),l._v(" "),i("ul",[i("li",[l._v("创建一个用户名为：es\n"),i("ul",[i("li",[l._v("adduser es")])])]),l._v(" "),i("li",[l._v("为这个用户初始化密码，linux会判断密码复杂度，不过可以强行忽略：\n"),i("ul",[i("li",[l._v("passwd es")])])])]),l._v(" "),i("h2",{attrs:{id:"开机启动项"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#开机启动项","aria-hidden":"true"}},[l._v("#")]),l._v(" 开机启动项")]),l._v(" "),i("ul",[i("li",[i("p",[l._v("使用 systemctl list-unit-files  查看开机启动项")])]),l._v(" "),i("li",[i("p",[l._v("systemctl is-enabled redis.service  是否开机启动")])])])])},[],!1,null,null,null);e.default=t.exports}}]);