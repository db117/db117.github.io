import{_ as s,o as l,c as a,Q as e}from"./chunks/framework.54cab62e.js";const _=JSON.parse('{"title":"在线yum安装","description":"","frontmatter":{"title":"在线yum安装"},"headers":[],"relativePath":"database/mysql/在线yum安装.md","filePath":"database/mysql/在线yum安装.md","lastUpdated":1697773070000}'),n={name:"database/mysql/在线yum安装.md"},p=e(`<h1 id="在线yum安装" tabindex="-1">在线yum安装 <a class="header-anchor" href="#在线yum安装" aria-label="Permalink to &quot;在线yum安装&quot;">​</a></h1><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><ul><li><p>下载mysql源安装包</p><ul><li>wget <a href="http://dev.mysql.com/get/mysql57-community-release-el7-8.noarch.rpm" target="_blank" rel="noreferrer">http://dev.mysql.com/get/mysql57-community-release-el7-8.noarch.rpm</a></li><li>yum localinstall mysql57-community-release-el7-8.noarch.rpm</li></ul></li><li><p>检查mysql源是否安装成功</p><ul><li>检查mysql源是否安装成功</li><li>可以修改vim /etc/yum.repos.d/mysql-community.repo源，改变默认安装的mysql版本。比如要安装5.6版本， 将5.7源的enabled=1改成enabled=0。然后再将5.6源的enabled=0改成enabled=1即可</li></ul></li><li><p>安装MySQL</p><ul><li>yum install mysql-community-server</li></ul></li></ul><h2 id="启动" tabindex="-1">启动 <a class="header-anchor" href="#启动" aria-label="Permalink to &quot;启动&quot;">​</a></h2><ul><li><p>启动MySQL服务</p><ul><li>systemctl start mysqld</li></ul></li><li><p>开机启动</p><ul><li>systemctl enable mysqld</li><li>systemctl daemon-reload</li></ul></li></ul><h2 id="密码访问" tabindex="-1">密码访问 <a class="header-anchor" href="#密码访问" aria-label="Permalink to &quot;密码访问&quot;">​</a></h2><ul><li><p>修改密码策略</p><ul><li>在vim /etc/my.cnf文件添加validate_password_policy配置，指定密码策略</li><li>选择0（LOW），1（MEDIUM），2（STRONG）其中一种，选择2需要提供密码字典文件 <ul><li>validate_password_policy=0</li></ul></li><li>如果不需要密码策略，添加my.cnf文件中添加如下配置禁用即可： <ul><li>validate_password = off</li></ul></li></ul></li><li><p>修改root本地登录密码</p><ul><li>mysql安装完成之后，在/var/log/mysqld.log文件中给root生成了一个默认密码。 通过下面的方式找到root默认密码，然后登录mysql进行修改 <ul><li>grep &#39;temporary password&#39; /var/log/mysqld.log</li><li>mysql -uroot -p</li><li>ALTER USER &#39;root&#39;@&#39;localhost&#39; IDENTIFIED BY &#39;password&#39;;</li><li>或者set password for &#39;root&#39;@&#39;localhost&#39;=password(&#39;password&#39;);</li></ul></li></ul></li><li><p>添加远程登录用户</p><ul><li>GRANT ALL PRIVILEGES ON <em>.</em> TO &#39;root&#39;@&#39;%&#39; IDENTIFIED BY &#39;root&#39; WITH GRANT OPTION;</li></ul></li></ul><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">#不需要密码策略</span></span>
<span class="line"><span style="color:#e1e4e8;">validate_password = off  </span></span>
<span class="line"><span style="color:#e1e4e8;">#默认编码       </span></span>
<span class="line"><span style="color:#e1e4e8;">character_set_server=utf8      </span></span>
<span class="line"><span style="color:#e1e4e8;">#连接编码 </span></span>
<span class="line"><span style="color:#e1e4e8;">init_connect=&#39;SET NAMES utf8&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">#忽略大小写(Linux)   </span></span>
<span class="line"><span style="color:#e1e4e8;">lower_case_table_names=1 </span></span>
<span class="line"><span style="color:#e1e4e8;">#最大连接量       </span></span>
<span class="line"><span style="color:#e1e4e8;">max_allowed_packet=50m  </span></span>
<span class="line"><span style="color:#e1e4e8;">#分布式下id        </span></span>
<span class="line"><span style="color:#e1e4e8;">server-id=1     </span></span>
<span class="line"><span style="color:#e1e4e8;">#开启binglog                </span></span>
<span class="line"><span style="color:#e1e4e8;">log-bin=mysql-bin   </span></span>
<span class="line"><span style="color:#e1e4e8;">#binglog格式            </span></span>
<span class="line"><span style="color:#e1e4e8;">binlog_format=MIXED</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">#不需要密码策略</span></span>
<span class="line"><span style="color:#24292e;">validate_password = off  </span></span>
<span class="line"><span style="color:#24292e;">#默认编码       </span></span>
<span class="line"><span style="color:#24292e;">character_set_server=utf8      </span></span>
<span class="line"><span style="color:#24292e;">#连接编码 </span></span>
<span class="line"><span style="color:#24292e;">init_connect=&#39;SET NAMES utf8&#39;</span></span>
<span class="line"><span style="color:#24292e;">#忽略大小写(Linux)   </span></span>
<span class="line"><span style="color:#24292e;">lower_case_table_names=1 </span></span>
<span class="line"><span style="color:#24292e;">#最大连接量       </span></span>
<span class="line"><span style="color:#24292e;">max_allowed_packet=50m  </span></span>
<span class="line"><span style="color:#24292e;">#分布式下id        </span></span>
<span class="line"><span style="color:#24292e;">server-id=1     </span></span>
<span class="line"><span style="color:#24292e;">#开启binglog                </span></span>
<span class="line"><span style="color:#24292e;">log-bin=mysql-bin   </span></span>
<span class="line"><span style="color:#24292e;">#binglog格式            </span></span>
<span class="line"><span style="color:#24292e;">binlog_format=MIXED</span></span></code></pre></div>`,9),o=[p];function i(t,r,c,m,y,d){return l(),a("div",null,o)}const h=s(n,[["render",i]]);export{_ as __pageData,h as default};
