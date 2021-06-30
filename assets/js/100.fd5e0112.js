(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{465:function(n,s,a){"use strict";a.r(s);var e=a(27),t=Object(e.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"编译与安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译与安装"}},[n._v("#")]),n._v(" 编译与安装")]),n._v(" "),a("h2",{attrs:{id:"安装环境准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装环境准备"}},[n._v("#")]),n._v(" 安装环境准备")]),n._v(" "),a("p",[a("strong",[n._v("（1）linux 内核2.6及以上版本:")]),n._v("\n只有2.6之后才支持epool ，在此之前使用select或pool多路复用的IO模型，无法解决高并发压力的问题。通过命令uname -a 即可查看。")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("#查看 linux 内核\nuname -a  \n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br")])]),a("p",[a("strong",[n._v("（2）GCC编译器")]),n._v("\nGCC（GNU Compiler Collection）可用来编译C语言程序。Nginx不会直接提供二进制可执行程序,只能下载源码进行编译。\n"),a("strong",[n._v("（3）PCRE库")]),n._v("\nPCRE（Perl Compatible Regular Expressions，Perl兼容正则表达式）是由Philip Hazel开发的函数库，目前为很多软件所使用，该库支持正则表达式。\n"),a("strong",[n._v("（4）zlib库")]),n._v("\nzlib库用于对HTTP包的内容做gzip格式的压缩，如果我们在nginx.conf里配置了gzip on，并指定对于某些类型（content-type）的HTTP响应使用gzip来进行压缩以减少网络传输量。\n"),a("strong",[n._v("（5）OpenSSL开发库")]),n._v("\n如果我们的服务器不只是要支持HTTP，还需要在更安全的SSL协议上传输HTTP，那么就需要拥有OpenSSL了。另外，如果我们想使用MD5、SHA1等散列函数，那么也需要安装它。\n上面几个库都是Nginx 基础功能所必需的，为简单起见我们可以通过yum 命令统一安装。")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("#yum 安装nginx 环境\nyum -y install make zlib zlib-devel gcc-c++ libtool openssl openssl-devel pcre pcre-devel\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br")])]),a("h3",{attrs:{id:"源码获取"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#源码获取"}},[n._v("#")]),n._v(" 源码获取：")]),n._v(" "),a("p",[n._v("nginx 下载页：http://nginx.org/en/download.html 。")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("# 下载nginx 最新稳定版本\nwget http://nginx.org/download/nginx-1.14.0.tar.gz\n#解压\ntar -zxvf nginx-1.14.0.tar.gz\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br")])]),a("p",[n._v("最简单的安装：")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("# 全部采用默认安装\n./configure & make & make install  \nmake   & make install \n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br")])]),a("p",[n._v("执行完成之后 nginx 运行文件 就会被安装在 /usr/local/nginx 下。")]),n._v(" "),a("p",[n._v("基于参数构建")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("./configure    \n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br")])]),a("h3",{attrs:{id:"模块更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块更新"}},[n._v("#")]),n._v(" 模块更新：")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("# 添加状态查查看模块\n./configure --with-http_stub_status_module \n# 重新创建主文件\nmake\n# 将新生成的nginx 文件覆盖 旧文件。\ncp objs/nginx /usr/local/nginx/sbin/\n# 查看是否更新成功 显示了 configure 构建参数表示成功\n/usr/local/nginx/sbin/nginx -V\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);