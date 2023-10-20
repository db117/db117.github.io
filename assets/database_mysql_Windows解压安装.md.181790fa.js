import{_ as s,o as a,c as l,Q as n}from"./chunks/framework.54cab62e.js";const h=JSON.parse('{"title":"Windows解压安装","description":"","frontmatter":{"title":"Windows解压安装"},"headers":[],"relativePath":"database/mysql/Windows解压安装.md","filePath":"database/mysql/Windows解压安装.md","lastUpdated":1697773070000}'),e={name:"database/mysql/Windows解压安装.md"},p=n(`<h1 id="windows解压安装-5-7-8-0" tabindex="-1">Windows解压安装（5.7，8.0） <a class="header-anchor" href="#windows解压安装-5-7-8-0" aria-label="Permalink to &quot;Windows解压安装（5.7，8.0）&quot;">​</a></h1><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><ul><li>下载mysql <ul><li>进入官网：<a href="https://www.mysql.com/" target="_blank" rel="noreferrer">https://www.mysql.com/</a> 单击【Downloads】选项卡 最下面有个【 MySQL Community Edition (GPL)】，单击【Community (GPL) Downloads »】 单击【MySQL Community Server (GPL)】下的【DOWNLOAD】 在弹出的页面上下载【Windows (x86, 64-bit), ZIP Archive】</li></ul></li><li>安装mysql 压缩包相当于免安装文件，要想使用它，需要配置正确，并通过服务来启动数据库服务。</li><li>把压缩包解压到你喜欢的位置 本示例解压到：D:\\mysql-5.7.13-winx64，文件夹下</li></ul><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><ul><li><p>创建my.ini文件，内容如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[mysql]</span></span>
<span class="line"><span style="color:#e1e4e8;"># 设置mysql客户端默认字符集</span></span>
<span class="line"><span style="color:#e1e4e8;">default-character-set=utf8mb4 </span></span>
<span class="line"><span style="color:#e1e4e8;">[mysqld]</span></span>
<span class="line"><span style="color:#e1e4e8;">#设置3306端口</span></span>
<span class="line"><span style="color:#e1e4e8;">port = 3306 </span></span>
<span class="line"><span style="color:#e1e4e8;"># 设置mysql的安装目录</span></span>
<span class="line"><span style="color:#e1e4e8;">basedir=C:\\mysql-5.7.12-winx64</span></span>
<span class="line"><span style="color:#e1e4e8;"># 设置mysql数据库的数据的存放目录</span></span>
<span class="line"><span style="color:#e1e4e8;">datadir=C:\\mysql-5.7.12-winx64\\data</span></span>
<span class="line"><span style="color:#e1e4e8;"># 允许最大连接数</span></span>
<span class="line"><span style="color:#e1e4e8;">max_connections=200</span></span>
<span class="line"><span style="color:#e1e4e8;"># 服务端使用的字符集默认为8比特编码的latin1字符集</span></span>
<span class="line"><span style="color:#e1e4e8;">character-set-server=utf8mb4</span></span>
<span class="line"><span style="color:#e1e4e8;"># 创建新表时将使用的默认存储引擎</span></span>
<span class="line"><span style="color:#e1e4e8;">default-storage-engine=INNODB</span></span>
<span class="line"><span style="color:#e1e4e8;">[client]</span></span>
<span class="line"><span style="color:#e1e4e8;">default-character-set = utf8mb4</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[mysql]</span></span>
<span class="line"><span style="color:#24292e;"># 设置mysql客户端默认字符集</span></span>
<span class="line"><span style="color:#24292e;">default-character-set=utf8mb4 </span></span>
<span class="line"><span style="color:#24292e;">[mysqld]</span></span>
<span class="line"><span style="color:#24292e;">#设置3306端口</span></span>
<span class="line"><span style="color:#24292e;">port = 3306 </span></span>
<span class="line"><span style="color:#24292e;"># 设置mysql的安装目录</span></span>
<span class="line"><span style="color:#24292e;">basedir=C:\\mysql-5.7.12-winx64</span></span>
<span class="line"><span style="color:#24292e;"># 设置mysql数据库的数据的存放目录</span></span>
<span class="line"><span style="color:#24292e;">datadir=C:\\mysql-5.7.12-winx64\\data</span></span>
<span class="line"><span style="color:#24292e;"># 允许最大连接数</span></span>
<span class="line"><span style="color:#24292e;">max_connections=200</span></span>
<span class="line"><span style="color:#24292e;"># 服务端使用的字符集默认为8比特编码的latin1字符集</span></span>
<span class="line"><span style="color:#24292e;">character-set-server=utf8mb4</span></span>
<span class="line"><span style="color:#24292e;"># 创建新表时将使用的默认存储引擎</span></span>
<span class="line"><span style="color:#24292e;">default-storage-engine=INNODB</span></span>
<span class="line"><span style="color:#24292e;">[client]</span></span>
<span class="line"><span style="color:#24292e;">default-character-set = utf8mb4</span></span></code></pre></div><ul><li>注意，basedir和datadir是必须要配置的，basedir就是你解压的目录。官方文档上说，如果你喜欢用反斜杠，则要用双反斜杠，斜杠的话就不用这样。即：D:\\mysql-5.7.13-winx64\\ 或：D:/mysql-5.7.13-winx64/ 由于本人喜欢把数据库的数据文件独立出来，所以就把datadir配置到其它地方，方便管理。另外，创建该目录。</li></ul></li><li><p>配置环境变量</p><ul><li>添加一个名叫 MYSQL_HOME 的变量。</li><li>修改Path变量，在末尾添加 %MYSQL_HOME%\\bin</li></ul></li></ul><h2 id="安装服务" tabindex="-1">安装服务 <a class="header-anchor" href="#安装服务" aria-label="Permalink to &quot;安装服务&quot;">​</a></h2><ul><li><p>安装mysql服务</p><ul><li><p>以管理员身份运行cmd，进入mysql的bin目录。</p></li><li><p>初始化数据库文件</p></li><li><p>mysqld --initialize</p></li><li><p>初始化成功后，会在datadir目录下生成一些文件，其中，xxx.err文件里说明了root账户的临时密码。那行大概长这样：</p></li><li><p>2016-07-24T05:19:20.152135Z 1 [Note] A temporary password is generated for root@localhost: bL2uuwuf0H(X</p><p>即密码是：bL2uuwuf0H(X</p></li></ul></li><li><p>注册mysql服务</p><ul><li>mysqld -install MySQL</li></ul></li><li><p>启动mysql服务</p><ul><li>net start MySQL</li></ul></li></ul><h2 id="修改root密码" tabindex="-1">修改root密码 <a class="header-anchor" href="#修改root密码" aria-label="Permalink to &quot;修改root密码&quot;">​</a></h2><ul><li>修改root密码 <ul><li><p>输入以下命令，回车，然后输入上面的默认密码：</p></li><li><p>mysql -u root -p</p></li><li><p>进入MySQL命令行模式后，输入如下命令，命令中的 new_password 为root账号的新密码，请修改它。</p></li><li><p>ALTER USER &#39;root&#39;@&#39;localhost&#39; IDENTIFIED BY &#39;new_password&#39;;</p></li></ul></li></ul>`,9),o=[p];function i(t,r,c,d,y,m){return a(),l("div",null,o)}const q=s(e,[["render",i]]);export{h as __pageData,q as default};
