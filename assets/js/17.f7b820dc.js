(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{198:function(e,t,s){"use strict";s.r(t);var n=s(0),r=Object(n.a)({},function(){var e=this.$createElement,t=this._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("ul",[t("li",[this._v("配置docker阿里云yum源 (直接执行下面的命令即可)")])]),this._v(" "),t("div",{staticClass:"language-cat >>/etc/yum.repos.d/docker.repo<<EOF extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("   [docker-ce-edge]\n   name=Docker CE Edge - \\$basearch\n   baseurl=https://mirrors.aliyun.com/docker-ce/linux/centos/7/\\$basearch/edge\n   enabled=1\n   gpgcheck=1\n   gpgkey=https://mirrors.aliyun.com/docker-ce/linux/centos/gpg\n   EOF\n")])])]),t("ul",[t("li",[this._v("yum 方式安装 docker")])]),this._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("    yum -y install docker-ce\n    \n    \n    ### 查看docker版本\n    docker --version  \n    \n    ### 开机启动 启动docker\n    systemctl enable docker\n    systemctl start docker\n")])])])])},[],!1,null,null,null);t.default=r.exports}}]);