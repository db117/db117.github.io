(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{415:function(s,t,e){"use strict";e.r(t);var a=e(26),r=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"oh-my-zsh"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#oh-my-zsh"}},[s._v("#")]),s._v(" Oh My Zsh")]),s._v(" "),e("h2",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/ohmyzsh/ohmyzsh",target:"_blank",rel:"noopener noreferrer"}},[s._v("ohmyzsh"),e("OutboundLink")],1)]),s._v(" "),e("table",[e("thead",[e("tr",[e("th",[s._v("Method")]),s._v(" "),e("th",[s._v("Command")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[e("strong",[s._v("curl")])]),s._v(" "),e("td",[e("code",[s._v('sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"')])])]),s._v(" "),e("tr",[e("td",[e("strong",[s._v("wget")])]),s._v(" "),e("td",[e("code",[s._v('sh -c "$(wget -O- https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"')])])]),s._v(" "),e("tr",[e("td",[e("strong",[s._v("fetch")])]),s._v(" "),e("td",[e("code",[s._v('sh -c "$(fetch -o - https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"')])])])])]),s._v(" "),e("h3",{attrs:{id:"配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[s._v("#")]),s._v(" 配置文件")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("vim ~/.zshrc\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"更新"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更新"}},[s._v("#")]),s._v(" 更新")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("omz update\n# 已过期\nupgrade_oh_my_zsh\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h2",{attrs:{id:"插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#插件"}},[s._v("#")]),s._v(" 插件")]),s._v(" "),e("h3",{attrs:{id:"zsh-autosuggestions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zsh-autosuggestions"}},[s._v("#")]),s._v(" zsh-autosuggestions")]),s._v(" "),e("blockquote",[e("p",[s._v("命令行提示")])]),s._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/void-linux/void-packages/blob/master/srcpkgs/zsh-autosuggestions/template",target:"_blank",rel:"noopener noreferrer"}},[s._v("zsh-autosuggestions"),e("OutboundLink")],1)]),s._v(" "),e("ol",[e("li",[e("p",[s._v("克隆仓库 "),e("code",[s._v("$ZSH_CUSTOM/plugins")]),s._v(" (默认 "),e("code",[s._v("~/.oh-my-zsh/custom/plugins")]),s._v(")")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("添加到配置文件 "),e("code",[s._v("~/.zshrc")]),s._v("):")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("plugins=(zsh-autosuggestions)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])]),s._v(" "),e("h4",{attrs:{id:"zsh-syntax-highlighting"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zsh-syntax-highlighting"}},[s._v("#")]),s._v(" zsh-syntax-highlighting")]),s._v(" "),e("blockquote",[e("p",[s._v("命令行高亮")])]),s._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/zsh-users/zsh-syntax-highlighting",target:"_blank",rel:"noopener noreferrer"}},[s._v("zsh-syntax-highlighting"),e("OutboundLink")],1)]),s._v(" "),e("ol",[e("li",[e("p",[s._v("克隆仓库到"),e("code",[s._v("$ZSH_CUSTOM/plugins")]),s._v(" (默认 "),e("code",[s._v("~/.oh-my-zsh/custom/plugins")]),s._v(")")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("添加到配置文件 "),e("code",[s._v("~/.zshrc")]),s._v("):")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("plugins=( [plugins...] zsh-syntax-highlighting)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);