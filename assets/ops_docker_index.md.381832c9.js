import{_ as s,o as e,c as a,Q as n}from"./chunks/framework.54cab62e.js";const u=JSON.parse('{"title":"docker","description":"","frontmatter":{"title":"docker"},"headers":[],"relativePath":"ops/docker/index.md","filePath":"ops/docker/index.md","lastUpdated":1697773070000}'),l={name:"ops/docker/index.md"},p=n(`<blockquote><p><a href="https://www.docker.com/" target="_blank" rel="noreferrer">Docker: Accelerated, Containerized Application Development</a></p></blockquote><h2 id="备忘单" tabindex="-1">备忘单 <a class="header-anchor" href="#备忘单" aria-label="Permalink to &quot;备忘单&quot;">​</a></h2><p>常规操作</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 进入容器</span></span>
<span class="line"><span style="color:#e1e4e8;">docker container exec -it 容器id bash</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 当前正在运行的 Docker 容器的进程号（PID）</span></span>
<span class="line"><span style="color:#e1e4e8;">docker inspect --format &#39;{{ .State.Pid }}&#39;  4ddf4638572d</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 进入容器</span></span>
<span class="line"><span style="color:#24292e;">docker container exec -it 容器id bash</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 当前正在运行的 Docker 容器的进程号（PID）</span></span>
<span class="line"><span style="color:#24292e;">docker inspect --format &#39;{{ .State.Pid }}&#39;  4ddf4638572d</span></span></code></pre></div><p>删除容器</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 批量删除镜像或容器</span></span>
<span class="line"><span style="color:#e1e4e8;">docker rmi --force $(docker images | grep &lt;过滤&gt; | awk &#39;{print $3}&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;"># 清理所有没有正在使用的镜像</span></span>
<span class="line"><span style="color:#e1e4e8;">docker system prune -a</span></span>
<span class="line"><span style="color:#e1e4e8;"># 删除所有未使用的容器、网络、图像(没有tag的和未引用的)</span></span>
<span class="line"><span style="color:#e1e4e8;">docker system prune</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 批量删除镜像或容器</span></span>
<span class="line"><span style="color:#24292e;">docker rmi --force $(docker images | grep &lt;过滤&gt; | awk &#39;{print $3}&#39;)</span></span>
<span class="line"><span style="color:#24292e;"># 清理所有没有正在使用的镜像</span></span>
<span class="line"><span style="color:#24292e;">docker system prune -a</span></span>
<span class="line"><span style="color:#24292e;"># 删除所有未使用的容器、网络、图像(没有tag的和未引用的)</span></span>
<span class="line"><span style="color:#24292e;">docker system prune</span></span></code></pre></div><p>network 网络</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 查看</span></span>
<span class="line"><span style="color:#e1e4e8;">podman network ls</span></span>
<span class="line"><span style="color:#e1e4e8;"># 创建网络</span></span>
<span class="line"><span style="color:#e1e4e8;">docker network create my_net</span></span>
<span class="line"><span style="color:#e1e4e8;"># 删除网络</span></span>
<span class="line"><span style="color:#e1e4e8;">docker network rm my_net</span></span>
<span class="line"><span style="color:#e1e4e8;"># 删除所有未使用的网络</span></span>
<span class="line"><span style="color:#e1e4e8;">docker network prune</span></span>
<span class="line"><span style="color:#e1e4e8;"># 查看网络内部信息</span></span>
<span class="line"><span style="color:#e1e4e8;">docker network inspect my_net</span></span>
<span class="line"><span style="color:#e1e4e8;"># 创建容器时指定网络</span></span>
<span class="line"><span style="color:#e1e4e8;">--network my_net </span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 将容器连接到网络</span></span>
<span class="line"><span style="color:#e1e4e8;">podman network connect my_net mycontainer</span></span>
<span class="line"><span style="color:#e1e4e8;"># 验证</span></span>
<span class="line"><span style="color:#e1e4e8;">podman inspect --format=&#39;{{.NetworkSettings.Networks}}&#39; mycontainer</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 查看</span></span>
<span class="line"><span style="color:#24292e;">podman network ls</span></span>
<span class="line"><span style="color:#24292e;"># 创建网络</span></span>
<span class="line"><span style="color:#24292e;">docker network create my_net</span></span>
<span class="line"><span style="color:#24292e;"># 删除网络</span></span>
<span class="line"><span style="color:#24292e;">docker network rm my_net</span></span>
<span class="line"><span style="color:#24292e;"># 删除所有未使用的网络</span></span>
<span class="line"><span style="color:#24292e;">docker network prune</span></span>
<span class="line"><span style="color:#24292e;"># 查看网络内部信息</span></span>
<span class="line"><span style="color:#24292e;">docker network inspect my_net</span></span>
<span class="line"><span style="color:#24292e;"># 创建容器时指定网络</span></span>
<span class="line"><span style="color:#24292e;">--network my_net </span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 将容器连接到网络</span></span>
<span class="line"><span style="color:#24292e;">podman network connect my_net mycontainer</span></span>
<span class="line"><span style="color:#24292e;"># 验证</span></span>
<span class="line"><span style="color:#24292e;">podman inspect --format=&#39;{{.NetworkSettings.Networks}}&#39; mycontainer</span></span></code></pre></div><p>容器开机自动启动</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 创建容器添加参数</span></span>
<span class="line"><span style="color:#e1e4e8;"># no -  容器退出时，不重启容器；</span></span>
<span class="line"><span style="color:#e1e4e8;"># on-failure - 只有在非0状态退出时才从新启动容器；</span></span>
<span class="line"><span style="color:#e1e4e8;"># always - 无论退出状态是如何，都重启容器；</span></span>
<span class="line"><span style="color:#e1e4e8;">--restart=[no|on-failure|always]</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 如果创建时未指定 --restart=always ,可通过update 命令设置</span></span>
<span class="line"><span style="color:#e1e4e8;">docker update --restart=always 容器id</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 创建容器添加参数</span></span>
<span class="line"><span style="color:#24292e;"># no -  容器退出时，不重启容器；</span></span>
<span class="line"><span style="color:#24292e;"># on-failure - 只有在非0状态退出时才从新启动容器；</span></span>
<span class="line"><span style="color:#24292e;"># always - 无论退出状态是如何，都重启容器；</span></span>
<span class="line"><span style="color:#24292e;">--restart=[no|on-failure|always]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 如果创建时未指定 --restart=always ,可通过update 命令设置</span></span>
<span class="line"><span style="color:#24292e;">docker update --restart=always 容器id</span></span></code></pre></div><h3 id="查看日志-logs" tabindex="-1">查看日志 logs <a class="header-anchor" href="#查看日志-logs" aria-label="Permalink to &quot;查看日志 logs&quot;">​</a></h3><table><thead><tr><th>名字</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>–details</td><td></td><td>显示提供给日志的额外细节</td></tr><tr><td>–follow或-f</td><td></td><td>按日志输出</td></tr><tr><td>–since</td><td></td><td>从某个时间开始显示，例如2013-01-02T13:23:37</td></tr><tr><td>–tail</td><td>all</td><td>从日志末尾多少行开始显示</td></tr><tr><td>–timestamps或-t</td><td></td><td>显示时间戳</td></tr><tr><td>–until</td><td></td><td>打印某个时间以前的日志，例如 2013-01-02T13:23:37</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 追踪查看最后100行日志</span></span>
<span class="line"><span style="color:#e1e4e8;">docker logs -fn100 容器id</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 追踪查看最后100行日志</span></span>
<span class="line"><span style="color:#24292e;">docker logs -fn100 容器id</span></span></code></pre></div><h2 id="安装应用" tabindex="-1">安装应用 <a class="header-anchor" href="#安装应用" aria-label="Permalink to &quot;安装应用&quot;">​</a></h2><h3 id="mysql" tabindex="-1">mysql <a class="header-anchor" href="#mysql" aria-label="Permalink to &quot;mysql&quot;">​</a></h3><ul><li>配置 <ul><li>-p 3306:3306： <ul><li>将容器的 3306 端口映射到主机的 3306 端口。</li></ul></li><li>-v -v $PWD/conf:/etc/mysql/conf.d： <ul><li>将主机当前目录下的 conf/my.cnf 挂载到容器的 /etc/mysql/my.cnf。</li></ul></li><li>-v $PWD/logs:/logs： <ul><li>将主机当前目录下的 logs 目录挂载到容器的 /logs。</li></ul></li><li>-v $PWD/data:/var/lib/mysql ： <ul><li>将主机当前目录下的data目录挂载到容器的 /var/lib/mysql 。</li></ul></li><li>-e MYSQL_ROOT_PASSWORD=123456： <ul><li>初始化 root 用户的密码。</li></ul></li></ul></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">docker run -p 3306:3306  --restart=always --name mymysql -v $PWD/conf:/etc/mysql/conf.d -v $PWD/logs:/logs -v $PWD/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 -d mysql:5.7</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">docker run -p 3306:3306  --restart=always --name mymysql -v $PWD/conf:/etc/mysql/conf.d -v $PWD/logs:/logs -v $PWD/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 -d mysql:5.7</span></span></code></pre></div><h3 id="镜像" tabindex="-1">镜像 <a class="header-anchor" href="#镜像" aria-label="Permalink to &quot;镜像&quot;">​</a></h3><ul><li><pre><code>  Docker中国区官方镜像
</code></pre><a href="https://registry.docker-cn.com" target="_blank" rel="noreferrer">https://registry.docker-cn.com</a></li><li><pre><code>  网易
</code></pre><a href="http://hub-mirror.c.163.com" target="_blank" rel="noreferrer">http://hub-mirror.c.163.com</a></li><li><pre><code>  ustc
</code></pre><a href="https://docker.mirrors.ustc.edu.cn" target="_blank" rel="noreferrer">https://docker.mirrors.ustc.edu.cn</a></li><li><pre><code>  中国科技大学
</code></pre><a href="https://docker.mirrors.ustc.edu.cn" target="_blank" rel="noreferrer">https://docker.mirrors.ustc.edu.cn</a></li></ul>`,19),o=[p];function t(c,r,i,d,y,k){return e(),a("div",null,o)}const m=s(l,[["render",t]]);export{u as __pageData,m as default};
