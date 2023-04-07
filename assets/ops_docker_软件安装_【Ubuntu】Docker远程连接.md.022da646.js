import{_ as s,c as a,o as e,U as t}from"./chunks/framework.6f6f51de.js";const k=JSON.parse('{"title":"【Ubuntu】Docker远程连接","description":"","frontmatter":{"title":"【Ubuntu】Docker远程连接"},"headers":[],"relativePath":"ops/docker/软件安装/【Ubuntu】Docker远程连接.md","lastUpdated":1680861403000}'),n={name:"ops/docker/软件安装/【Ubuntu】Docker远程连接.md"},o=t(`<h2 id="开启宿主机的2375端口" tabindex="-1">开启宿主机的2375端口 <a class="header-anchor" href="#开启宿主机的2375端口" aria-label="Permalink to &quot;开启宿主机的2375端口&quot;">​</a></h2><ul><li><p>配置文件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">/lib/systemd/system/docker.service</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">ExecStart=/usr/bin/dockerd -H tcp://0.0.0.0:2375 -H unix:///var/run/docker.sock</span></span></code></pre></div></li><li><p>重启docker</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">systemctl daemon-reload</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl restart docker</span></span></code></pre></div></li></ul><h2 id="临时开启远程端口" tabindex="-1">临时开启远程端口 <a class="header-anchor" href="#临时开启远程端口" aria-label="Permalink to &quot;临时开启远程端口&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sudo dockerd -H unix:///var/run/docker.sock -H tcp://0.0.0.0:2375</span></span></code></pre></div>`,4),l=[o];function c(r,p,i,d,u,_){return e(),a("div",null,l)}const m=s(n,[["render",c]]);export{k as __pageData,m as default};
