(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{413:function(s,e,t){"use strict";t.r(e);var a=t(26),r=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"开启宿主机的2375端口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开启宿主机的2375端口"}},[s._v("#")]),s._v(" 开启宿主机的2375端口")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("配置文件")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("/lib/systemd/system/docker.service\n\nExecStart=/usr/bin/dockerd -H tcp://0.0.0.0:2375 -H unix:///var/run/docker.sock \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("重启docker")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("systemctl daemon-reload\nsystemctl restart docker\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])])]),s._v(" "),t("h2",{attrs:{id:"临时开启远程端口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#临时开启远程端口"}},[s._v("#")]),s._v(" 临时开启远程端口")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sudo dockerd -H unix:///var/run/docker.sock -H tcp://0.0.0.0:2375\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);e.default=r.exports}}]);