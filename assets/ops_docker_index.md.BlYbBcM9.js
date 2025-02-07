import{_ as a,c as n,o as e,ah as p}from"./chunks/framework.BjlmIy4T.js";const h=JSON.parse('{"title":"docker","description":"","frontmatter":{"title":"docker"},"headers":[],"relativePath":"ops/docker/index.md","filePath":"ops/docker/index.md"}'),t={name:"ops/docker/index.md"};function l(i,s,o,c,r,d){return e(),n("div",null,s[0]||(s[0]=[p(`<blockquote><p><a href="https://www.docker.com/" target="_blank" rel="noreferrer">Docker: Accelerated, Containerized Application Development</a></p></blockquote><h2 id="备忘单" tabindex="-1">备忘单 <a class="header-anchor" href="#备忘单" aria-label="Permalink to &quot;备忘单&quot;">​</a></h2><p>常规操作</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 进入容器</span></span>
<span class="line"><span>docker container exec -it 容器id bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># 当前正在运行的 Docker 容器的进程号（PID）</span></span>
<span class="line"><span>docker inspect --format &#39;{{ .State.Pid }}&#39;  4ddf4638572d</span></span></code></pre></div><p>删除容器</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 批量删除镜像或容器</span></span>
<span class="line"><span>docker rmi --force $(docker images | grep &lt;过滤&gt; | awk &#39;{print $3}&#39;)</span></span>
<span class="line"><span># 清理所有没有正在使用的镜像</span></span>
<span class="line"><span>docker system prune -a</span></span>
<span class="line"><span># 删除所有未使用的容器、网络、图像(没有tag的和未引用的)</span></span>
<span class="line"><span>docker system prune</span></span></code></pre></div><p>network 网络</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 查看</span></span>
<span class="line"><span>podman network ls</span></span>
<span class="line"><span># 创建网络</span></span>
<span class="line"><span>docker network create my_net</span></span>
<span class="line"><span># 删除网络</span></span>
<span class="line"><span>docker network rm my_net</span></span>
<span class="line"><span># 删除所有未使用的网络</span></span>
<span class="line"><span>docker network prune</span></span>
<span class="line"><span># 查看网络内部信息</span></span>
<span class="line"><span>docker network inspect my_net</span></span>
<span class="line"><span># 创建容器时指定网络</span></span>
<span class="line"><span>--network my_net </span></span>
<span class="line"><span></span></span>
<span class="line"><span># 将容器连接到网络</span></span>
<span class="line"><span>podman network connect my_net mycontainer</span></span>
<span class="line"><span># 验证</span></span>
<span class="line"><span>podman inspect --format=&#39;{{.NetworkSettings.Networks}}&#39; mycontainer</span></span></code></pre></div><p>容器开机自动启动</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 创建容器添加参数</span></span>
<span class="line"><span># no -  容器退出时，不重启容器；</span></span>
<span class="line"><span># on-failure - 只有在非0状态退出时才从新启动容器；</span></span>
<span class="line"><span># always - 无论退出状态是如何，都重启容器；</span></span>
<span class="line"><span>--restart=[no|on-failure|always]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 如果创建时未指定 --restart=always ,可通过update 命令设置</span></span>
<span class="line"><span>docker update --restart=always 容器id</span></span></code></pre></div><h3 id="查看日志-logs" tabindex="-1">查看日志 logs <a class="header-anchor" href="#查看日志-logs" aria-label="Permalink to &quot;查看日志 logs&quot;">​</a></h3><table tabindex="0"><thead><tr><th>名字</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>–details</td><td></td><td>显示提供给日志的额外细节</td></tr><tr><td>–follow或-f</td><td></td><td>按日志输出</td></tr><tr><td>–since</td><td></td><td>从某个时间开始显示，例如2013-01-02T13:23:37</td></tr><tr><td>–tail</td><td>all</td><td>从日志末尾多少行开始显示</td></tr><tr><td>–timestamps或-t</td><td></td><td>显示时间戳</td></tr><tr><td>–until</td><td></td><td>打印某个时间以前的日志，例如 2013-01-02T13:23:37</td></tr></tbody></table><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 追踪查看最后100行日志</span></span>
<span class="line"><span>docker logs -fn100 容器id</span></span></code></pre></div><h2 id="安装应用" tabindex="-1">安装应用 <a class="header-anchor" href="#安装应用" aria-label="Permalink to &quot;安装应用&quot;">​</a></h2><h3 id="mysql" tabindex="-1">mysql <a class="header-anchor" href="#mysql" aria-label="Permalink to &quot;mysql&quot;">​</a></h3><ul><li>配置 <ul><li>-p 3306:3306： <ul><li>将容器的 3306 端口映射到主机的 3306 端口。</li></ul></li><li>-v -v $PWD/conf:/etc/mysql/conf.d： <ul><li>将主机当前目录下的 conf/my.cnf 挂载到容器的 /etc/mysql/my.cnf。</li></ul></li><li>-v $PWD/logs:/logs： <ul><li>将主机当前目录下的 logs 目录挂载到容器的 /logs。</li></ul></li><li>-v $PWD/data:/var/lib/mysql ： <ul><li>将主机当前目录下的data目录挂载到容器的 /var/lib/mysql 。</li></ul></li><li>-e MYSQL_ROOT_PASSWORD=123456： <ul><li>初始化 root 用户的密码。</li></ul></li></ul></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker run -p 3306:3306  --restart=always --name mymysql -v $PWD/conf:/etc/mysql/conf.d -v $PWD/logs:/logs -v $PWD/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 -d mysql:5.7</span></span></code></pre></div><h3 id="镜像" tabindex="-1">镜像 <a class="header-anchor" href="#镜像" aria-label="Permalink to &quot;镜像&quot;">​</a></h3><p>docker desktop 配置</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;builder&quot;: {</span></span>
<span class="line"><span>    &quot;gc&quot;: {</span></span>
<span class="line"><span>      &quot;defaultKeepStorage&quot;: &quot;20GB&quot;,</span></span>
<span class="line"><span>      &quot;enabled&quot;: true</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;experimental&quot;: false,</span></span>
<span class="line"><span>  &quot;registry-mirrors&quot;: [</span></span>
<span class="line"><span>    &quot;https://registry.docker-cn.com&quot;,</span></span>
<span class="line"><span>    &quot;https://docker.mirrors.ustc.edu.cn&quot;,</span></span>
<span class="line"><span>    &quot;http://hub-mirror.c.163.com&quot;</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li><pre><code>  Docker中国区官方镜像
</code></pre><p><a href="https://registry.docker-cn.com" target="_blank" rel="noreferrer">https://registry.docker-cn.com</a></p></li><li><pre><code>  网易
</code></pre><p><a href="http://hub-mirror.c.163.com" target="_blank" rel="noreferrer">http://hub-mirror.c.163.com</a></p></li><li><pre><code>  ustc
</code></pre><p><a href="https://docker.mirrors.ustc.edu.cn" target="_blank" rel="noreferrer">https://docker.mirrors.ustc.edu.cn</a></p></li></ul>`,21)]))}const m=a(t,[["render",l]]);export{h as __pageData,m as default};
