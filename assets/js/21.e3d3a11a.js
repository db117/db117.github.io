(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{202:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"开启宿主机的2375端口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开启宿主机的2375端口","aria-hidden":"true"}},[t._v("#")]),t._v(" 开启宿主机的2375端口")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("配置文件")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("/lib/systemd/system/docker.service\n\nExecStart=/usr/bin/dockerd -H tcp://0.0.0.0:2375 -H unix:///var/run/docker.sock \n")])])])]),t._v(" "),a("li",[a("p",[t._v("重启docker")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("systemctl daemon-reload\nsystemctl restart docker\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"临时开启远程端口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#临时开启远程端口","aria-hidden":"true"}},[t._v("#")]),t._v(" 临时开启远程端口")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sudo dockerd -H unix:///var/run/docker.sock -H tcp://0.0.0.0:2375\n")])])])])},[],!1,null,null,null);e.default=r.exports}}]);