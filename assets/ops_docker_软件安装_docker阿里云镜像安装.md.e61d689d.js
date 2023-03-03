import{_ as s,c as a,o as n,a as e}from"./app.5745f82f.js";const y=JSON.parse('{"title":"docker阿里云镜像安装","description":"","frontmatter":{"title":"docker阿里云镜像安装"},"headers":[],"relativePath":"ops/docker/软件安装/docker阿里云镜像安装.md","lastUpdated":1677837613000}'),l={name:"ops/docker/软件安装/docker阿里云镜像安装.md"},p=e(`<ul><li>配置docker阿里云yum源 (直接执行下面的命令即可)</li></ul><div class="language-cat"><button title="Copy Code" class="copy"></button><span class="lang">cat</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">   [docker-ce-edge]</span></span>
<span class="line"><span style="color:#A6ACCD;">   name=Docker CE Edge - \\$basearch</span></span>
<span class="line"><span style="color:#A6ACCD;">   baseurl=https://mirrors.aliyun.com/docker-ce/linux/centos/7/\\$basearch/edge</span></span>
<span class="line"><span style="color:#A6ACCD;">   enabled=1</span></span>
<span class="line"><span style="color:#A6ACCD;">   gpgcheck=1</span></span>
<span class="line"><span style="color:#A6ACCD;">   gpgkey=https://mirrors.aliyun.com/docker-ce/linux/centos/gpg</span></span>
<span class="line"><span style="color:#A6ACCD;">   EOF</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>yum 方式安装 docker</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">    yum -y install docker-ce</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    ### 查看docker版本</span></span>
<span class="line"><span style="color:#A6ACCD;">    docker --version  </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    ### 开机启动 启动docker</span></span>
<span class="line"><span style="color:#A6ACCD;">    systemctl enable docker</span></span>
<span class="line"><span style="color:#A6ACCD;">    systemctl start docker</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,4),c=[p];function o(t,r,i,d,C,A){return n(),a("div",null,c)}const k=s(l,[["render",o]]);export{y as __pageData,k as default};
