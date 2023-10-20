import{_ as s,o as e,c as n,Q as a}from"./chunks/framework.54cab62e.js";const g=JSON.parse('{"title":"docker阿里云镜像安装","description":"","frontmatter":{"title":"docker阿里云镜像安装"},"headers":[],"relativePath":"ops/docker/软件安装/docker阿里云镜像安装.md","filePath":"ops/docker/软件安装/docker阿里云镜像安装.md","lastUpdated":1697773070000}'),l={name:"ops/docker/软件安装/docker阿里云镜像安装.md"},p=a(`<ul><li>配置docker阿里云yum源 (直接执行下面的命令即可)</li></ul><div class="language-cat vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cat</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">   [docker-ce-edge]</span></span>
<span class="line"><span style="color:#e1e4e8;">   name=Docker CE Edge - \\$basearch</span></span>
<span class="line"><span style="color:#e1e4e8;">   baseurl=https://mirrors.aliyun.com/docker-ce/linux/centos/7/\\$basearch/edge</span></span>
<span class="line"><span style="color:#e1e4e8;">   enabled=1</span></span>
<span class="line"><span style="color:#e1e4e8;">   gpgcheck=1</span></span>
<span class="line"><span style="color:#e1e4e8;">   gpgkey=https://mirrors.aliyun.com/docker-ce/linux/centos/gpg</span></span>
<span class="line"><span style="color:#e1e4e8;">   EOF</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">   [docker-ce-edge]</span></span>
<span class="line"><span style="color:#24292e;">   name=Docker CE Edge - \\$basearch</span></span>
<span class="line"><span style="color:#24292e;">   baseurl=https://mirrors.aliyun.com/docker-ce/linux/centos/7/\\$basearch/edge</span></span>
<span class="line"><span style="color:#24292e;">   enabled=1</span></span>
<span class="line"><span style="color:#24292e;">   gpgcheck=1</span></span>
<span class="line"><span style="color:#24292e;">   gpgkey=https://mirrors.aliyun.com/docker-ce/linux/centos/gpg</span></span>
<span class="line"><span style="color:#24292e;">   EOF</span></span></code></pre></div><ul><li>yum 方式安装 docker</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">    yum -y install docker-ce</span></span>
<span class="line"><span style="color:#e1e4e8;">    </span></span>
<span class="line"><span style="color:#e1e4e8;">    </span></span>
<span class="line"><span style="color:#e1e4e8;">    ### 查看docker版本</span></span>
<span class="line"><span style="color:#e1e4e8;">    docker --version  </span></span>
<span class="line"><span style="color:#e1e4e8;">    </span></span>
<span class="line"><span style="color:#e1e4e8;">    ### 开机启动 启动docker</span></span>
<span class="line"><span style="color:#e1e4e8;">    systemctl enable docker</span></span>
<span class="line"><span style="color:#e1e4e8;">    systemctl start docker</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">    yum -y install docker-ce</span></span>
<span class="line"><span style="color:#24292e;">    </span></span>
<span class="line"><span style="color:#24292e;">    </span></span>
<span class="line"><span style="color:#24292e;">    ### 查看docker版本</span></span>
<span class="line"><span style="color:#24292e;">    docker --version  </span></span>
<span class="line"><span style="color:#24292e;">    </span></span>
<span class="line"><span style="color:#24292e;">    ### 开机启动 启动docker</span></span>
<span class="line"><span style="color:#24292e;">    systemctl enable docker</span></span>
<span class="line"><span style="color:#24292e;">    systemctl start docker</span></span></code></pre></div>`,4),c=[p];function o(t,r,i,d,y,k){return e(),n("div",null,c)}const u=s(l,[["render",o]]);export{g as __pageData,u as default};
