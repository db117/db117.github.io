(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{351:function(s,e,a){"use strict";a.r(e);var t=a(10),n=Object(t.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"linux安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux安装"}},[s._v("#")]),s._v(" linux安装")]),s._v(" "),e("ul",[e("li",[s._v("下载\n"),e("ul",[e("li",[s._v("最新版本")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("指定版本")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("curl -LO https://dl.k8s.io/release/v1.20.0/bin/linux/amd64/kubectl\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[s._v("安装"),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("  sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[s._v("配置")])]),s._v(" "),e("blockquote",[e("p",[s._v("配置文件位置 ~/kube/config")])]),s._v(" "),e("hr"),s._v(" "),e("h2",{attrs:{id:"kubectl-自动补全"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kubectl-自动补全"}},[s._v("#")]),s._v(" Kubectl 自动补全")]),s._v(" "),e("h3",{attrs:{id:"bash"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bash"}},[s._v("#")]),s._v(" BASH")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("kubectl completion "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在 bash 中设置当前 shell 的自动补全，要先安装 bash-completion 包。")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"source <(kubectl completion bash)"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.bashrc "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在您的 bash shell 中永久的添加自动补全")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("您还可以为 "),e("code",[s._v("kubectl")]),s._v(" 使用一个速记别名，该别名也可以与 completion 一起使用：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("k")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kubectl\ncomplete "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-F")]),s._v(" __start_kubectl k\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h3",{attrs:{id:"zsh"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#zsh"}},[s._v("#")]),s._v(" ZSH")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("kubectl completion "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("zsh")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在 zsh 中设置当前 shell 的自动补全")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"[[ '),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$commands")]),s._v('[kubectl] ]] && source <(kubectl completion zsh)"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.zshrc "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在您的 zsh shell 中永久的添加自动补全")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("hr"),s._v(" "),e("h2",{attrs:{id:"常用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),e("h3",{attrs:{id:"secret"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#secret"}},[s._v("#")]),s._v(" Secret")]),s._v(" "),e("blockquote",[e("p",[s._v("创建docker访问secret\n需要在Deployment中指定")])]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("kubectl create secret docker-registry my-secret --docker-server=DOCKER_REGISTRY_SERVER --docker-username=DOCKER_USER --docker-password=DOCKER_PASSWORD --docker-email=DOCKER_EMAIL\n")])])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("spec:\n  imagePullSecrets:\n  - name: my-secret\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h3",{attrs:{id:"污点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#污点"}},[s._v("#")]),s._v(" 污点")]),s._v(" "),e("ul",[e("li",[e("p",[e("strong",[s._v("打上污点")])]),s._v(" "),e("blockquote",[e("p",[s._v("NoSchedule:"),e("a",{attrs:{href:"https://www.iyunw.cn/archives/tag/k8s/",target:"_blank",rel:"noopener noreferrer"}},[s._v("K8S"),e("OutboundLink")],1),s._v("node添加这个effecf类型污点，新的不能容忍的pod不能再调度过来，但是老的运行在node上不受影响")]),s._v(" "),e("p",[s._v("NoExecute：K8Snode添加这个effecf类型污点，新的不能容忍的pod不能调度过来，老的pod也会被驱逐")]),s._v(" "),e("p",[s._v("PreferNoSchedule：pod会尝试将pod分配到该节点")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("kubectl taint nodes node1 key=value:NoSchedule\n\nkubectl taint nodes node1 key=value:NoExecute\n\nkubectl taint nodes node1 key=value:PreferNoSchedule\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])])]),s._v(" "),e("li",[e("p",[e("strong",[s._v("删除污点")])]),s._v(" "),e("ul",[e("li",[e("blockquote",[e("p",[s._v("加上[-]")])])])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("  kubectl taint nodes node1 key=value:NoSchedule-\n\n  kubectl taint nodes node1 key=value:NoExecute-\n\n  kubectl taint nodes node1 key=value:PreferNoSchedule-\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h5",{attrs:{id:"pod设置容忍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pod设置容忍"}},[s._v("#")]),s._v(" "),e("strong",[s._v("pod设置容忍")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('tolerations:  #containers同级\n    - key: "key1"          #能容忍的污点key\n      operator: "Equal"    #Equal等于表示key=value ， Exists不等于，表示当值不等于下面value正常\n      value: "value1"      #值\n      effect: "NoExecute"  #effect策略，见上面\n      tolerationSeconds: 3600  #原始的pod多久驱逐，注意只有effect: "NoExecute"才能设置，不然报错\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);