import{_ as s,c as a,o as e,a as l}from"./app.3d2db0cb.js";const y=JSON.parse('{"title":"Kubectl常用","description":"","frontmatter":{"title":"Kubectl常用"},"headers":[{"level":2,"title":"linux安装","slug":"linux安装","link":"#linux安装","children":[]},{"level":2,"title":"Kubectl 自动补全","slug":"kubectl-自动补全","link":"#kubectl-自动补全","children":[{"level":3,"title":"BASH","slug":"bash","link":"#bash","children":[]},{"level":3,"title":"ZSH","slug":"zsh","link":"#zsh","children":[]}]},{"level":2,"title":"常用命令","slug":"常用命令","link":"#常用命令","children":[{"level":3,"title":"Secret","slug":"secret","link":"#secret","children":[]},{"level":3,"title":"污点","slug":"污点","link":"#污点","children":[]}]}],"relativePath":"ops/k8s/Kubectl.md","lastUpdated":1677230567000}'),n={name:"ops/k8s/Kubectl.md"},t=l(`<h2 id="linux安装" tabindex="-1">linux安装 <a class="header-anchor" href="#linux安装" aria-hidden="true">#</a></h2><ul><li>下载 <ul><li>最新版本</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">curl -LO &quot;https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>指定版本</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">curl -LO https://dl.k8s.io/release/v1.20.0/bin/linux/amd64/kubectl</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li>安装<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">  sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li>配置</li></ul><blockquote><p>配置文件位置 ~/kube/config</p></blockquote><hr><h2 id="kubectl-自动补全" tabindex="-1">Kubectl 自动补全 <a class="header-anchor" href="#kubectl-自动补全" aria-hidden="true">#</a></h2><h3 id="bash" tabindex="-1">BASH <a class="header-anchor" href="#bash" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">source</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;(</span><span style="color:#FFCB6B;">kubectl</span><span style="color:#C3E88D;"> completion bash</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 在 bash 中设置当前 shell 的自动补全，要先安装 bash-completion 包。</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">source &lt;(kubectl completion bash)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/.bashrc</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 在您的 bash shell 中永久的添加自动补全</span></span>
<span class="line"></span></code></pre></div><p>您还可以为 <code>kubectl</code> 使用一个速记别名，该别名也可以与 completion 一起使用：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">alias</span><span style="color:#A6ACCD;"> k</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">kubectl</span></span>
<span class="line"><span style="color:#FFCB6B;">complete</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-F</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">__start_kubectl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">k</span></span>
<span class="line"></span></code></pre></div><h3 id="zsh" tabindex="-1">ZSH <a class="header-anchor" href="#zsh" aria-hidden="true">#</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">source</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;(</span><span style="color:#FFCB6B;">kubectl</span><span style="color:#C3E88D;"> completion zsh</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 在 zsh 中设置当前 shell 的自动补全</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[[ </span><span style="color:#A6ACCD;">$commands</span><span style="color:#C3E88D;">[kubectl] ]] &amp;&amp; source &lt;(kubectl completion zsh)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/.zshrc</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 在您的 zsh shell 中永久的添加自动补全</span></span>
<span class="line"></span></code></pre></div><hr><h2 id="常用命令" tabindex="-1">常用命令 <a class="header-anchor" href="#常用命令" aria-hidden="true">#</a></h2><h3 id="secret" tabindex="-1">Secret <a class="header-anchor" href="#secret" aria-hidden="true">#</a></h3><blockquote><p>创建docker访问secret 需要在Deployment中指定</p></blockquote><pre><code>kubectl create secret docker-registry my-secret --docker-server=DOCKER_REGISTRY_SERVER --docker-username=DOCKER_USER --docker-password=DOCKER_PASSWORD --docker-email=DOCKER_EMAIL
</code></pre><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">spec:</span></span>
<span class="line"><span style="color:#A6ACCD;">  imagePullSecrets:</span></span>
<span class="line"><span style="color:#A6ACCD;">  - name: my-secret</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="污点" tabindex="-1">污点 <a class="header-anchor" href="#污点" aria-hidden="true">#</a></h3><ul><li><p><strong>打上污点</strong></p><blockquote><p>NoSchedule:<a href="https://www.iyunw.cn/archives/tag/k8s/" target="_blank" rel="noreferrer">K8S</a>node添加这个effecf类型污点，新的不能容忍的pod不能再调度过来，但是老的运行在node上不受影响</p><p>NoExecute：K8Snode添加这个effecf类型污点，新的不能容忍的pod不能调度过来，老的pod也会被驱逐</p><p>PreferNoSchedule：pod会尝试将pod分配到该节点</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">kubectl taint nodes node1 key=value:NoSchedule</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">kubectl taint nodes node1 key=value:NoExecute</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">kubectl taint nodes node1 key=value:PreferNoSchedule</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p><strong>删除污点</strong></p><ul><li><blockquote><p>加上[-]</p></blockquote></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">  kubectl taint nodes node1 key=value:NoSchedule-</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  kubectl taint nodes node1 key=value:NoExecute-</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  kubectl taint nodes node1 key=value:PreferNoSchedule-</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h5 id="pod设置容忍" tabindex="-1"><strong>pod设置容忍</strong> <a class="header-anchor" href="#pod设置容忍" aria-hidden="true">#</a></h5><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">tolerations:  #containers同级</span></span>
<span class="line"><span style="color:#A6ACCD;">    - key: &quot;key1&quot;          #能容忍的污点key</span></span>
<span class="line"><span style="color:#A6ACCD;">      operator: &quot;Equal&quot;    #Equal等于表示key=value ， Exists不等于，表示当值不等于下面value正常</span></span>
<span class="line"><span style="color:#A6ACCD;">      value: &quot;value1&quot;      #值</span></span>
<span class="line"><span style="color:#A6ACCD;">      effect: &quot;NoExecute&quot;  #effect策略，见上面</span></span>
<span class="line"><span style="color:#A6ACCD;">      tolerationSeconds: 3600  #原始的pod多久驱逐，注意只有effect: &quot;NoExecute&quot;才能设置，不然报错</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li></ul>`,19),o=[t];function p(c,i,r,d,u,h){return e(),a("div",null,o)}const A=s(n,[["render",p]]);export{y as __pageData,A as default};
