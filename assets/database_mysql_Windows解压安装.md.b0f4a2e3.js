import{_ as s,c as l,o as a,a as n}from"./app.3d2db0cb.js";const m=JSON.parse('{"title":"Windows解压安装","description":"","frontmatter":{"title":"Windows解压安装"},"headers":[{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"安装服务","slug":"安装服务","link":"#安装服务","children":[]},{"level":2,"title":"修改root密码","slug":"修改root密码","link":"#修改root密码","children":[]}],"relativePath":"database/mysql/Windows解压安装.md","lastUpdated":1677230567000}'),e={name:"database/mysql/Windows解压安装.md"},i=n(`<h1 id="windows解压安装-5-7-8-0" tabindex="-1">Windows解压安装（5.7，8.0） <a class="header-anchor" href="#windows解压安装-5-7-8-0" aria-hidden="true">#</a></h1><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-hidden="true">#</a></h2><ul><li>下载mysql <ul><li>进入官网：<a href="https://www.mysql.com/" target="_blank" rel="noreferrer">https://www.mysql.com/</a> 单击【Downloads】选项卡 最下面有个【 MySQL Community Edition (GPL)】，单击【Community (GPL) Downloads »】 单击【MySQL Community Server (GPL)】下的【DOWNLOAD】 在弹出的页面上下载【Windows (x86, 64-bit), ZIP Archive】</li></ul></li><li>安装mysql 压缩包相当于免安装文件，要想使用它，需要配置正确，并通过服务来启动数据库服务。</li><li>把压缩包解压到你喜欢的位置 本示例解压到：D:\\mysql-5.7.13-winx64，文件夹下</li></ul><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-hidden="true">#</a></h2><ul><li><p>创建my.ini文件，内容如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">[mysql]</span></span>
<span class="line"><span style="color:#A6ACCD;"># 设置mysql客户端默认字符集</span></span>
<span class="line"><span style="color:#A6ACCD;">default-character-set=utf8mb4 </span></span>
<span class="line"><span style="color:#A6ACCD;">[mysqld]</span></span>
<span class="line"><span style="color:#A6ACCD;">#设置3306端口</span></span>
<span class="line"><span style="color:#A6ACCD;">port = 3306 </span></span>
<span class="line"><span style="color:#A6ACCD;"># 设置mysql的安装目录</span></span>
<span class="line"><span style="color:#A6ACCD;">basedir=C:\\mysql-5.7.12-winx64</span></span>
<span class="line"><span style="color:#A6ACCD;"># 设置mysql数据库的数据的存放目录</span></span>
<span class="line"><span style="color:#A6ACCD;">datadir=C:\\mysql-5.7.12-winx64\\data</span></span>
<span class="line"><span style="color:#A6ACCD;"># 允许最大连接数</span></span>
<span class="line"><span style="color:#A6ACCD;">max_connections=200</span></span>
<span class="line"><span style="color:#A6ACCD;"># 服务端使用的字符集默认为8比特编码的latin1字符集</span></span>
<span class="line"><span style="color:#A6ACCD;">character-set-server=utf8mb4</span></span>
<span class="line"><span style="color:#A6ACCD;"># 创建新表时将使用的默认存储引擎</span></span>
<span class="line"><span style="color:#A6ACCD;">default-storage-engine=INNODB</span></span>
<span class="line"><span style="color:#A6ACCD;">[client]</span></span>
<span class="line"><span style="color:#A6ACCD;">default-character-set = utf8mb4</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>注意，basedir和datadir是必须要配置的，basedir就是你解压的目录。官方文档上说，如果你喜欢用反斜杠，则要用双反斜杠，斜杠的话就不用这样。即：D:\\mysql-5.7.13-winx64\\ 或：D:/mysql-5.7.13-winx64/ 由于本人喜欢把数据库的数据文件独立出来，所以就把datadir配置到其它地方，方便管理。另外，创建该目录。</li></ul></li><li><p>配置环境变量</p><ul><li>添加一个名叫 MYSQL_HOME 的变量。</li><li>修改Path变量，在末尾添加 %MYSQL_HOME%\\bin</li></ul></li></ul><h2 id="安装服务" tabindex="-1">安装服务 <a class="header-anchor" href="#安装服务" aria-hidden="true">#</a></h2><ul><li><p>安装mysql服务</p><ul><li><p>以管理员身份运行cmd，进入mysql的bin目录。</p></li><li><p>初始化数据库文件</p></li><li><p>mysqld --initialize</p></li><li><p>初始化成功后，会在datadir目录下生成一些文件，其中，xxx.err文件里说明了root账户的临时密码。那行大概长这样：</p></li><li><p>2016-07-24T05:19:20.152135Z 1 [Note] A temporary password is generated for root@localhost: bL2uuwuf0H(X</p><p>即密码是：bL2uuwuf0H(X</p></li></ul></li><li><p>注册mysql服务</p><ul><li>mysqld -install MySQL</li></ul></li><li><p>启动mysql服务</p><ul><li>net start MySQL</li></ul></li></ul><h2 id="修改root密码" tabindex="-1">修改root密码 <a class="header-anchor" href="#修改root密码" aria-hidden="true">#</a></h2><ul><li>修改root密码 <ul><li><p>输入以下命令，回车，然后输入上面的默认密码：</p></li><li><p>mysql -u root -p</p></li><li><p>进入MySQL命令行模式后，输入如下命令，命令中的 new_password 为root账号的新密码，请修改它。</p></li><li><p>ALTER USER &#39;root&#39;@&#39;localhost&#39; IDENTIFIED BY &#39;new_password&#39;;</p></li></ul></li></ul>`,9),t=[i];function p(o,r,c,d,u,y){return a(),l("div",null,t)}const C=s(e,[["render",p]]);export{m as __pageData,C as default};
