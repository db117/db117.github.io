import{_ as s,c as a,o as n,V as e}from"./chunks/framework.XDL3_F1u.js";const h=JSON.parse('{"title":"docker阿里云镜像安装","description":"","frontmatter":{"title":"docker阿里云镜像安装"},"headers":[],"relativePath":"ops/docker/软件安装/docker阿里云镜像安装.md","filePath":"ops/docker/软件安装/docker阿里云镜像安装.md","lastUpdated":1707061868000}'),p={name:"ops/docker/软件安装/docker阿里云镜像安装.md"},c=e(`<ul><li>配置docker阿里云yum源 (直接执行下面的命令即可)</li></ul><div class="language-cat vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cat</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>   [docker-ce-edge]</span></span>
<span class="line"><span>   name=Docker CE Edge - \\$basearch</span></span>
<span class="line"><span>   baseurl=https://mirrors.aliyun.com/docker-ce/linux/centos/7/\\$basearch/edge</span></span>
<span class="line"><span>   enabled=1</span></span>
<span class="line"><span>   gpgcheck=1</span></span>
<span class="line"><span>   gpgkey=https://mirrors.aliyun.com/docker-ce/linux/centos/gpg</span></span>
<span class="line"><span>   EOF</span></span></code></pre></div><ul><li>yum 方式安装 docker</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    yum -y install docker-ce</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    ### 查看docker版本</span></span>
<span class="line"><span>    docker --version  </span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    ### 开机启动 启动docker</span></span>
<span class="line"><span>    systemctl enable docker</span></span>
<span class="line"><span>    systemctl start docker</span></span></code></pre></div>`,4),l=[c];function t(o,i,r,d,_,k){return n(),a("div",null,l)}const m=s(p,[["render",t]]);export{h as __pageData,m as default};
