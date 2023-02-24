import{_ as s,c as a,o as l,a as e}from"./app.3d2db0cb.js";const A=JSON.parse('{"title":"zabbix","description":"","frontmatter":{"title":"zabbix"},"headers":[{"level":2,"title":"在线安装","slug":"在线安装","link":"#在线安装","children":[]},{"level":2,"title":"修改为中文","slug":"修改为中文","link":"#修改为中文","children":[]},{"level":2,"title":"关闭selinux","slug":"关闭selinux","link":"#关闭selinux","children":[]},{"level":2,"title":"docker搭建zabbix","slug":"docker搭建zabbix","link":"#docker搭建zabbix","children":[]}],"relativePath":"ops/docker/zabbix.md","lastUpdated":1677230567000}'),n={name:"ops/docker/zabbix.md"},i=e(`<h2 id="在线安装" tabindex="-1">在线安装 <a class="header-anchor" href="#在线安装" aria-hidden="true">#</a></h2><ul><li>用MySQL数据库安装存储库(数据库另装) <ul><li>rpm -i <a href="http://repo.zabbix.com/zabbix/3.4/rhel/7/x86_64/zabbix-release-3.4-2.el7.noarch.rpm" target="_blank" rel="noreferrer">http://repo.zabbix.com/zabbix/3.4/rhel/7/x86_64/zabbix-release-3.4-2.el7.noarch.rpm</a></li></ul></li><li>安装ZabBix服务器，前端，代理 <ul><li>yum install zabbix-server-mysql zabbix-web-mysql zabbix-agent</li></ul></li><li>创建初始数据库 <ul><li>mysql -uroot -p</li><li>password</li><li>mysql&gt; create database zabbix character set utf8 collate utf8_bin;</li><li>mysql&gt; grant all privileges on zabbix.* to zabbix@localhost identified by &#39;password&#39;;</li><li>mysql&gt; quit;</li></ul></li><li>导入初始模式和数据。将提示您输入新创建的密码。 <ul><li>zcat /usr/share/doc/zabbix-server-mysql*/create.sql.gz | mysql -uzabbix -p zabbix</li></ul></li><li>为ZabBIX服务器配置数据库 <ul><li>编辑文件 vim /etc/zabbix/zabbix_server.conf <ul><li>DBPassword=password</li></ul></li></ul></li><li>为ZabBIX前端配置PHP <ul><li>编辑文件 vim /etc/httpd/conf.d/zabbix.conf <ul><li>php_value date.timezone Asia/Shanghai</li></ul></li></ul></li><li>启动ZabBIX服务器和代理进程 <ul><li>systemctl restart zabbix-server zabbix-agent httpd</li><li>systemctl enable zabbix-server zabbix-agent httpd</li></ul></li><li>然后就可以访问了ip/zabbix <ul><li>默认帐号密码Admin/zabbix</li></ul></li></ul><h2 id="修改为中文" tabindex="-1">修改为中文 <a class="header-anchor" href="#修改为中文" aria-hidden="true">#</a></h2><ul><li>打开Zabbix界面，Administrator-Users 选择语言-Chinese(zh_CN)-update</li><li>解决乱码 <ul><li><p>从Window服务器找到相应的字休复制到zabbix Server服务器上：</p><p>控制面板--&gt;字体--&gt;选择一种中文字库例如“楷体”（simkai.ttf）</p></li><li><p>将我们选择的字体文件上传到zabbix web服务，cd /usr/share/zabbix/fonts目录下（rpm安装目录）</p></li><li><p>修改此vim /usr/share/zabbix/include/defines.inc.php文件中字体的配置， 将里面关于字体设置从graphfont替换成simkai</p><ul><li>define(&#39;ZBX_GRAPH_FONT_NAME&#39;, &#39;simkai&#39;); // font file name</li></ul></li></ul></li></ul><h2 id="关闭selinux" tabindex="-1">关闭selinux <a class="header-anchor" href="#关闭selinux" aria-hidden="true">#</a></h2><ul><li>vim /etc/selinux/config <ul><li>SELINUX=disabled</li></ul></li><li>setenforce 0</li><li>getenforce</li></ul><h2 id="docker搭建zabbix" tabindex="-1">docker搭建zabbix <a class="header-anchor" href="#docker搭建zabbix" aria-hidden="true">#</a></h2><p>本次使用docker搭建zabbix的组合是mysql+docker+zabix-server</p><ul><li>先安装数据库mysql</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">    docker run --name zabbix-mysql-server --hostname zabbix-mysql-server \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    -e MYSQL_ROOT_PASSWORD=&quot;123456&quot; \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    -e MYSQL_USER=&quot;zabbix&quot; \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    -e MYSQL_PASSWORD=&quot;123456&quot; \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    -e MYSQL_DATABASE=&quot;zabbix&quot; \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    -p 3306:3306 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    -d mysql:5.7.22 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    --character-set-server=utf8 --collation-server=utf8_bin</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>创建zabbix-server</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">    docker run  --name zabbix-server-mysql --hostname zabbix-server-mysql \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    --link zabbix-mysql-server:mysql \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    -e DB_SERVER_HOST=&quot;mysql&quot; \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    -e MYSQL_USER=&quot;zabbix&quot; \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    -e MYSQL_DATABASE=&quot;zabbix&quot; \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    -e MYSQL_PASSWORD=&quot;123456&quot; \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    -v /etc/localtime:/etc/localtime:ro \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    -v /data/docker/zabbix/alertscripts:/usr/lib/zabbix/alertscripts \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    -v /data/docker/zabbix/externalscripts:/usr/lib/zabbix/externalscripts \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    -p 10051:10051 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    -d zabbix/zabbix-server-mysql \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>最后web-nginx</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">    docker run --name zabbix-web-nginx-mysql --hostname zabbix-web-nginx-mysql \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    --link zabbix-mysql-server:mysql \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    --link zabbix-server-mysql:zabbix-server \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    -e DB_SERVER_HOST=&quot;mysql&quot; \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    -e MYSQL_USER=&quot;zabbix&quot; \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    -e MYSQL_PASSWORD=&quot;123456&quot; \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    -e MYSQL_DATABASE=&quot;zabbix&quot; \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    -e ZBX_SERVER_HOST=&quot;zabbix-server&quot; \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    -e PHP_TZ=&quot;Asia/Shanghai&quot; \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    -p 8000:80 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    -p 8443:443 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    -d \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    zabbix/zabbix-web-nginx-mysql</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>登录访问测试</li></ul><p>浏览器访问ip:8000查看 默认登录 username:Admin password:zabbix 这里说明下，mysql没做数据卷的映射，nginx也没做数据卷的映射，在实际生产环境下，最好做数据映射。防止数据丢失。</p><ul><li>docker-zabbbix-agent的安装以及链接zabbix-server</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">docker run --name zabbix-agent --link zabbix-server-mysql:zabbix-server -d zabbix/zabbix-agent:latest</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-docker"><button title="Copy Code" class="copy"></button><span class="lang">docker</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"></span></code></pre></div><p>最后需要在web端将，zabbix-agent添加到zabbix-server的host列表里面。</p>`,20),t=[i];function p(o,r,c,b,u,d){return l(),a("div",null,t)}const C=s(n,[["render",p]]);export{A as __pageData,C as default};
