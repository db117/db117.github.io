(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{199:function(e,r,t){"use strict";t.r(r);var a=t(0),s=Object(a.a)({},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"rpm离线安装docker17-12"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rpm离线安装docker17-12","aria-hidden":"true"}},[e._v("#")]),e._v(" rpm离线安装docker17.12")]),e._v(" "),t("h2",{attrs:{id:"下载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载","aria-hidden":"true"}},[e._v("#")]),e._v(" 下载")]),e._v(" "),t("ul",[t("li",[e._v("在https://download.docker.com/linux/centos/7/x86_64/stable/Packages/下载docker-ce-17.12.0.ce-1.el7.centos.x86_64.rpm")])]),e._v(" "),t("h2",{attrs:{id:"下载9个依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载9个依赖","aria-hidden":"true"}},[e._v("#")]),e._v(" 下载9个依赖")]),e._v(" "),t("ul",[t("li",[e._v("在http://mirrors.163.com/centos/7/os/x86_64/Packages/下载8个依赖")]),e._v(" "),t("li",[e._v("audit-libs-python-2.7.6-3.el7.x86_64.rpm")]),e._v(" "),t("li",[e._v("checkpolicy-2.5-4.el7.x86_64.rpm")]),e._v(" "),t("li",[e._v("libcgroup-0.41-13.el7.x86_64.rpm")]),e._v(" "),t("li",[e._v("libseccomp-2.3.1-3.el7.x86_64.rpm")]),e._v(" "),t("li",[e._v("libsemanage-python-2.5-8.el7.x86_64.rpm")]),e._v(" "),t("li",[e._v("policycoreutils-python-2.5-17.1.el7.x86_64.rpm")]),e._v(" "),t("li",[e._v("python-IPy-0.75-6.el7.noarch.rpm")]),e._v(" "),t("li",[e._v("setools-libs-3.3.8-1.1.el7.x86_64.rpm")]),e._v(" "),t("li",[e._v("在http://rpm.pbone.net/index.php3?stat=3&limit=1&srodzaj=1&dl=40&search=container-selinux&field[]=1&field[]=2下载container-selinux-2.9-4.el7.noarch.rpm")]),e._v(" "),t("li",[e._v("下载链接：ftp://mirror.switch.ch/pool/4/mirror/scientificlinux/7x/external_products/extras/x86_64/container-selinux-2.9-4.el7.noarch.rpm")])]),e._v(" "),t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[e._v("#")]),e._v(" 安装")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("将8个依赖复制到服务器上如：/root/docker/")])]),e._v(" "),t("li",[t("p",[e._v("将docker-ce-17.12.0.ce-1.el7.centos.x86_64.rpm和container-selinux-2.9-4.el7.noarch.rpm复制到/root/docker/rpm/")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("rpm -ivh /root/docker/*.rpm  --force --nodeps\n\nrpm -ivh /root/docker/rpm/container-selinux-2.9-4.el7.noarch.rpm  --force --nodeps\n\nrpm -ivh /root/docker/rpm/docker-ce-17.12.0.ce-1.el7.centos.x86_64.rpm  --force --nodeps\n")])])])])]),e._v(" "),t("h2",{attrs:{id:"启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动","aria-hidden":"true"}},[e._v("#")]),e._v(" 启动")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("service docker start\n\ndocker -v\n")])])]),t("h2",{attrs:{id:"无网络环境下使用docker加载镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#无网络环境下使用docker加载镜像","aria-hidden":"true"}},[e._v("#")]),e._v(" 无网络环境下使用docker加载镜像")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("先从一个有网络的电脑下载docker镜像")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("docker pull centos\n")])])])]),e._v(" "),t("li",[t("p",[e._v("保存镜像到本地文件")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("docker save -o centos_image.docker centos\n")])])])]),e._v(" "),t("li",[t("p",[e._v("把镜像拷贝到无网络的电脑，然后通过docker加载镜像即可。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("docker load -i centos_image.docker\n")])])])])])])},[],!1,null,null,null);r.default=s.exports}}]);