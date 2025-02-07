import{_ as a,c as s,o as r,ah as o}from"./chunks/framework.BjlmIy4T.js";const m=JSON.parse('{"title":"离线安装docker","description":"","frontmatter":{"title":"离线安装docker"},"headers":[],"relativePath":"ops/docker/软件安装/rpm离线安装docker.md","filePath":"ops/docker/软件安装/rpm离线安装docker.md"}'),n={name:"ops/docker/软件安装/rpm离线安装docker.md"};function l(i,e,t,p,c,d){return r(),s("div",null,e[0]||(e[0]=[o(`<h1 id="rpm离线安装docker17-12" tabindex="-1">rpm离线安装docker17.12 <a class="header-anchor" href="#rpm离线安装docker17-12" aria-label="Permalink to &quot;rpm离线安装docker17.12&quot;">​</a></h1><h2 id="下载" tabindex="-1">下载 <a class="header-anchor" href="#下载" aria-label="Permalink to &quot;下载&quot;">​</a></h2><ul><li>在<a href="https://download.docker.com/linux/centos/7/x86_64/stable/Packages/%E4%B8%8B%E8%BD%BDdocker-ce-17.12.0.ce-1.el7.centos.x86_64.rpm" target="_blank" rel="noreferrer">https://download.docker.com/linux/centos/7/x86_64/stable/Packages/下载docker-ce-17.12.0.ce-1.el7.centos.x86_64.rpm</a></li></ul><h2 id="下载9个依赖" tabindex="-1">下载9个依赖 <a class="header-anchor" href="#下载9个依赖" aria-label="Permalink to &quot;下载9个依赖&quot;">​</a></h2><ul><li>在<a href="http://mirrors.163.com/centos/7/os/x86_64/Packages/%E4%B8%8B%E8%BD%BD8%E4%B8%AA%E4%BE%9D%E8%B5%96" target="_blank" rel="noreferrer">http://mirrors.163.com/centos/7/os/x86_64/Packages/下载8个依赖</a></li><li>audit-libs-python-2.7.6-3.el7.x86_64.rpm</li><li>checkpolicy-2.5-4.el7.x86_64.rpm</li><li>libcgroup-0.41-13.el7.x86_64.rpm</li><li>libseccomp-2.3.1-3.el7.x86_64.rpm</li><li>libsemanage-python-2.5-8.el7.x86_64.rpm</li><li>policycoreutils-python-2.5-17.1.el7.x86_64.rpm</li><li>python-IPy-0.75-6.el7.noarch.rpm</li><li>setools-libs-3.3.8-1.1.el7.x86_64.rpm</li><li>在<a href="http://rpm.pbone.net/index.php3?stat=3&amp;limit=1&amp;srodzaj=1&amp;dl=40&amp;search=container-selinux&amp;field%5B%5D=1&amp;field%5B%5D=2%E4%B8%8B%E8%BD%BDcontainer-selinux-2.9-4.el7.noarch.rpm" target="_blank" rel="noreferrer">http://rpm.pbone.net/index.php3?stat=3&amp;limit=1&amp;srodzaj=1&amp;dl=40&amp;search=container-selinux&amp;field[]=1&amp;field[]=2下载container-selinux-2.9-4.el7.noarch.rpm</a></li><li>下载链接：<a href="ftp://mirror.switch.ch/pool/4/mirror/scientificlinux/7x/external_products/extras/x86_64/container-selinux-2.9-4.el7.noarch.rpm" target="_blank" rel="noreferrer">ftp://mirror.switch.ch/pool/4/mirror/scientificlinux/7x/external_products/extras/x86_64/container-selinux-2.9-4.el7.noarch.rpm</a></li></ul><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><ul><li><p>将8个依赖复制到服务器上如：/root/docker/</p></li><li><p>将docker-ce-17.12.0.ce-1.el7.centos.x86_64.rpm和container-selinux-2.9-4.el7.noarch.rpm复制到/root/docker/rpm/</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>rpm -ivh /root/docker/*.rpm  --force --nodeps</span></span>
<span class="line"><span></span></span>
<span class="line"><span>rpm -ivh /root/docker/rpm/container-selinux-2.9-4.el7.noarch.rpm  --force --nodeps</span></span>
<span class="line"><span></span></span>
<span class="line"><span>rpm -ivh /root/docker/rpm/docker-ce-17.12.0.ce-1.el7.centos.x86_64.rpm  --force --nodeps</span></span></code></pre></div></li></ul><h2 id="启动" tabindex="-1">启动 <a class="header-anchor" href="#启动" aria-label="Permalink to &quot;启动&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>service docker start</span></span>
<span class="line"><span></span></span>
<span class="line"><span>docker -v</span></span></code></pre></div><h2 id="无网络环境下使用docker加载镜像" tabindex="-1">无网络环境下使用docker加载镜像 <a class="header-anchor" href="#无网络环境下使用docker加载镜像" aria-label="Permalink to &quot;无网络环境下使用docker加载镜像&quot;">​</a></h2><ul><li><p>先从一个有网络的电脑下载docker镜像</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker pull centos</span></span></code></pre></div></li><li><p>保存镜像到本地文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker save -o centos_image.docker centos</span></span></code></pre></div></li><li><p>把镜像拷贝到无网络的电脑，然后通过docker加载镜像即可。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker load -i centos_image.docker</span></span></code></pre></div></li></ul>`,11)]))}const k=a(n,[["render",l]]);export{m as __pageData,k as default};
