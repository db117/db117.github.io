(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{481:function(s,e,a){"use strict";a.r(e);var t=a(34),n=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"linux安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux安装"}},[s._v("#")]),s._v(" linux安装")]),s._v(" "),a("ul",[a("li",[s._v("下载\n"),a("ul",[a("li",[s._v("最新版本")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("指定版本")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("curl -LO https://dl.k8s.io/release/v1.20.0/bin/linux/amd64/kubectl\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[s._v("安装"),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("  sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[s._v("配置")])]),s._v(" "),a("blockquote",[a("p",[s._v("配置文件位置 ~/kube/config")])]),s._v(" "),a("hr"),s._v(" "),a("h2",{attrs:{id:"kubectl-自动补全"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kubectl-自动补全"}},[s._v("#")]),s._v(" Kubectl 自动补全")]),s._v(" "),a("h3",{attrs:{id:"bash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bash"}},[s._v("#")]),s._v(" BASH")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("kubectl completion "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在 bash 中设置当前 shell 的自动补全，要先安装 bash-completion 包。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"source <(kubectl completion bash)"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.bashrc "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在您的 bash shell 中永久的添加自动补全")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("您还可以为 "),a("code",[s._v("kubectl")]),s._v(" 使用一个速记别名，该别名也可以与 completion 一起使用：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("k")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kubectl\ncomplete -F __start_kubectl k\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"zsh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zsh"}},[s._v("#")]),s._v(" ZSH")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("kubectl completion "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("zsh")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在 zsh 中设置当前 shell 的自动补全")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"[[ '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$commands")]),s._v('[kubectl] ]] && source <(kubectl completion zsh)"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.zshrc "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在您的 zsh shell 中永久的添加自动补全")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("hr"),s._v(" "),a("h2",{attrs:{id:"常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),a("h3",{attrs:{id:"secret"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#secret"}},[s._v("#")]),s._v(" Secret")]),s._v(" "),a("blockquote",[a("p",[s._v("创建docker访问secret\n需要在Deployment中指定")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("kubectl create secret docker-registry my-secret --docker-server=DOCKER_REGISTRY_SERVER --docker-username=DOCKER_USER --docker-password=DOCKER_PASSWORD --docker-email=DOCKER_EMAIL\n")])])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("spec:\n  imagePullSecrets:\n  - name: my-secret\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"污点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#污点"}},[s._v("#")]),s._v(" 污点")]),s._v(" "),a("ul",[a("li",[a("p",[a("strong",[s._v("打上污点")])]),s._v(" "),a("blockquote",[a("p",[s._v("NoSchedule:"),a("a",{attrs:{href:"https://www.iyunw.cn/archives/tag/k8s/",target:"_blank",rel:"noopener noreferrer"}},[s._v("K8S"),a("OutboundLink")],1),s._v("node添加这个effecf类型污点，新的不能容忍的pod不能再调度过来，但是老的运行在node上不受影响")]),s._v(" "),a("p",[s._v("NoExecute：K8Snode添加这个effecf类型污点，新的不能容忍的pod不能调度过来，老的pod也会被驱逐")]),s._v(" "),a("p",[s._v("PreferNoSchedule：pod会尝试将pod分配到该节点")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("kubectl taint nodes node1 key=value:NoSchedule\n\nkubectl taint nodes node1 key=value:NoExecute\n\nkubectl taint nodes node1 key=value:PreferNoSchedule\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("删除污点")])]),s._v(" "),a("ul",[a("li",[a("blockquote",[a("p",[s._v("加上[-]")])])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("  kubectl taint nodes node1 key=value:NoSchedule-\n\n  kubectl taint nodes node1 key=value:NoExecute-\n\n  kubectl taint nodes node1 key=value:PreferNoSchedule-\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h5",{attrs:{id:"pod设置容忍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pod设置容忍"}},[s._v("#")]),s._v(" "),a("strong",[s._v("pod设置容忍")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('tolerations:  #containers同级\n    - key: "key1"          #能容忍的污点key\n      operator: "Equal"    #Equal等于表示key=value ， Exists不等于，表示当值不等于下面value正常\n      value: "value1"      #值\n      effect: "NoExecute"  #effect策略，见上面\n      tolerationSeconds: 3600  #原始的pod多久驱逐，注意只有effect: "NoExecute"才能设置，不然报错\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);