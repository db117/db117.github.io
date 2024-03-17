import{_ as s,c as a,o as e,a8 as i}from"./chunks/framework.BaglXmoE.js";const b=JSON.parse('{"title":"Kubectl常用","description":"","frontmatter":{"title":"Kubectl常用"},"headers":[],"relativePath":"ops/k8s/Kubectl.md","filePath":"ops/k8s/Kubectl.md","lastUpdated":1710641614000}'),t={name:"ops/k8s/Kubectl.md"},l=i(`<h2 id="linux安装" tabindex="-1">linux安装 <a class="header-anchor" href="#linux安装" aria-label="Permalink to &quot;linux安装&quot;">​</a></h2><ul><li>下载 <ul><li>最新版本</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>curl -LO &quot;https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl&quot;</span></span></code></pre></div><ul><li>指定版本</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>curl -LO https://dl.k8s.io/release/v1.20.0/bin/linux/amd64/kubectl</span></span></code></pre></div></li><li>安装<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>  sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl</span></span></code></pre></div></li><li>配置</li></ul><blockquote><p>配置文件位置 ~/kube/config</p></blockquote><hr><h2 id="kubectl-自动补全" tabindex="-1">Kubectl 自动补全 <a class="header-anchor" href="#kubectl-自动补全" aria-label="Permalink to &quot;Kubectl 自动补全&quot;">​</a></h2><h3 id="bash" tabindex="-1">BASH <a class="header-anchor" href="#bash" aria-label="Permalink to &quot;BASH&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">source</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">kubectl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> completion bash)</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 在 bash 中设置当前 shell 的自动补全，要先安装 bash-completion 包。</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;source &lt;(kubectl completion bash)&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.bashrc</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 在您的 bash shell 中永久的添加自动补全</span></span></code></pre></div><p>您还可以为 <code>kubectl</code> 使用一个速记别名，该别名也可以与 completion 一起使用：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">alias</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> k</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">kubectl</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">complete</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -F</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> __start_kubectl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> k</span></span></code></pre></div><h3 id="zsh" tabindex="-1">ZSH <a class="header-anchor" href="#zsh" aria-label="Permalink to &quot;ZSH&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">source</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">kubectl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> completion zsh)</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 在 zsh 中设置当前 shell 的自动补全</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;[[ </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$commands</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">[kubectl] ]] &amp;&amp; source &lt;(kubectl completion zsh)&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.zshrc</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 在您的 zsh shell 中永久的添加自动补全</span></span></code></pre></div><hr><h2 id="常用命令" tabindex="-1">常用命令 <a class="header-anchor" href="#常用命令" aria-label="Permalink to &quot;常用命令&quot;">​</a></h2><h3 id="secret" tabindex="-1">Secret <a class="header-anchor" href="#secret" aria-label="Permalink to &quot;Secret&quot;">​</a></h3><blockquote><p>创建docker访问secret 需要在Deployment中指定</p></blockquote><pre><code>kubectl create secret docker-registry my-secret --docker-server=DOCKER_REGISTRY_SERVER --docker-username=DOCKER_USER --docker-password=DOCKER_PASSWORD --docker-email=DOCKER_EMAIL
</code></pre><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>spec:</span></span>
<span class="line"><span>  imagePullSecrets:</span></span>
<span class="line"><span>  - name: my-secret</span></span></code></pre></div><h3 id="污点" tabindex="-1">污点 <a class="header-anchor" href="#污点" aria-label="Permalink to &quot;污点&quot;">​</a></h3><ul><li><p><strong>打上污点</strong></p><blockquote><p>NoSchedule:<a href="https://www.iyunw.cn/archives/tag/k8s/" target="_blank" rel="noreferrer">K8S</a>node添加这个effecf类型污点，新的不能容忍的pod不能再调度过来，但是老的运行在node上不受影响</p><p>NoExecute：K8Snode添加这个effecf类型污点，新的不能容忍的pod不能调度过来，老的pod也会被驱逐</p><p>PreferNoSchedule：pod会尝试将pod分配到该节点</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>kubectl taint nodes node1 key=value:NoSchedule</span></span>
<span class="line"><span></span></span>
<span class="line"><span>kubectl taint nodes node1 key=value:NoExecute</span></span>
<span class="line"><span></span></span>
<span class="line"><span>kubectl taint nodes node1 key=value:PreferNoSchedule</span></span></code></pre></div></li><li><p><strong>删除污点</strong></p><ul><li><blockquote><p>加上[-]</p></blockquote></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>  kubectl taint nodes node1 key=value:NoSchedule-</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  kubectl taint nodes node1 key=value:NoExecute-</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  kubectl taint nodes node1 key=value:PreferNoSchedule-</span></span></code></pre></div><h5 id="pod设置容忍" tabindex="-1"><strong>pod设置容忍</strong> <a class="header-anchor" href="#pod设置容忍" aria-label="Permalink to &quot;**pod设置容忍**&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>tolerations:  #containers同级</span></span>
<span class="line"><span>    - key: &quot;key1&quot;          #能容忍的污点key</span></span>
<span class="line"><span>      operator: &quot;Equal&quot;    #Equal等于表示key=value ， Exists不等于，表示当值不等于下面value正常</span></span>
<span class="line"><span>      value: &quot;value1&quot;      #值</span></span>
<span class="line"><span>      effect: &quot;NoExecute&quot;  #effect策略，见上面</span></span>
<span class="line"><span>      tolerationSeconds: 3600  #原始的pod多久驱逐，注意只有effect: &quot;NoExecute&quot;才能设置，不然报错</span></span></code></pre></div></li></ul>`,19),n=[l];function p(o,h,c,d,k,r){return e(),a("div",null,n)}const g=s(t,[["render",p]]);export{b as __pageData,g as default};
