import{_ as s,c as a,o as n,a as l}from"./app.3d2db0cb.js";const y=JSON.parse('{"title":"supervisord使用","description":"","frontmatter":{"title":"supervisord使用"},"headers":[{"level":3,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":3,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":3,"title":"命令","slug":"命令","link":"#命令","children":[]},{"level":3,"title":"配置文件","slug":"配置文件","link":"#配置文件","children":[]}],"relativePath":"ops/supervisord.md","lastUpdated":1677230567000}'),p={name:"ops/supervisord.md"},e=l(`<h3 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-hidden="true">#</a></h3><p><a href="https://github.com/Supervisor/supervisor" target="_blank" rel="noreferrer">GitHub</a></p><p><a href="https://pypi.org/project/supervisor/" target="_blank" rel="noreferrer">pypi</a></p><p><a href="http://supervisord.org/index.html" target="_blank" rel="noreferrer">官网</a></p><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-hidden="true">#</a></h3><blockquote><p>安装</p></blockquote><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># pip</span></span>
<span class="line"><span style="color:#FFCB6B;">pip</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">supervisor</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># centos</span></span>
<span class="line"><span style="color:#FFCB6B;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">supervisor</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">–y</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># mac</span></span>
<span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">supervisor</span></span>
<span class="line"></span></code></pre></div><blockquote><p>配置文件</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">../etc/supervisord.conf (相对于可执行文件)</span></span>
<span class="line"><span style="color:#A6ACCD;">../supervisord.conf (相对于可执行文件)</span></span>
<span class="line"><span style="color:#A6ACCD;">$pwd/supervisord.conf</span></span>
<span class="line"><span style="color:#A6ACCD;">$pwd/etc/supervisord.conf</span></span>
<span class="line"><span style="color:#A6ACCD;">/etc/supervisord.conf</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="命令" tabindex="-1">命令 <a class="header-anchor" href="#命令" aria-hidden="true">#</a></h3><ul><li><p>查看所有进程的状态</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">supervisorctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">status</span></span>
<span class="line"></span></code></pre></div><blockquote><p>服务名称</p><p>运行状态:RUNNING(运行中),FATAL(运行失败),STARTING(启动中),STOPED(已停止)</p><p>进程号</p><p>已经运行时间</p></blockquote></li><li><p>查看单个任务状态</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">supervisorctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">status</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">服务名</span><span style="color:#A6ACCD;">称</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></li><li><p>关闭任务</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">supervisorctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stop</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">服务名</span><span style="color:#A6ACCD;">称</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></li><li><p>启动任务</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">supervisorctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">服务名</span><span style="color:#A6ACCD;">称</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></li><li><p>重启任务</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">supervisorctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">restart</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">服务名</span><span style="color:#A6ACCD;">称</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div></li><li><p>更新任务</p></li><li><blockquote><p>重新加载 config 并根据需要添加/删除，然后重新启动受影响的程序</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">supervisorctl update &lt;服务名称&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p>获取pid</p><blockquote><p>获取某个任务pid</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">supervisorctl pid &lt;服务名称&gt; </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>获取所有任务pid</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">supervisorctl pid</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>获取任务包括子进程pid</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">supervisorctl pid all</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p>重载修改、新添加的配置文件</p><blockquote><p>有时候只改动了某个配置文件，只想重载这个配置文件然后重启，不影响其他配置文件</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">supervisorctl update</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>新添加了一个配置文件，此时update命令没用了，要用reread命令。然后再update重启</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">supervisorctl reread</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li></ul><h3 id="配置文件" tabindex="-1">配置文件 <a class="header-anchor" href="#配置文件" aria-hidden="true">#</a></h3><blockquote><p>supervisor.conf</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">[unix_http_server]</span></span>
<span class="line"><span style="color:#A6ACCD;">file=/tmp/supervisor.sock   #UNIX socket 文件，supervisorctl 会使用</span></span>
<span class="line"><span style="color:#A6ACCD;">#chmod=0700                 #socket文件的mode，默认是0700</span></span>
<span class="line"><span style="color:#A6ACCD;">#chown=nobody:nogroup       #socket文件的owner，格式：uid:gid</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">#[inet_http_server]         #HTTP服务器，提供web管理界面</span></span>
<span class="line"><span style="color:#A6ACCD;">#port=127.0.0.1:9001        #Web管理后台运行的IP和端口，如果开放到公网，需要注意安全性</span></span>
<span class="line"><span style="color:#A6ACCD;">#username=user              #登录管理后台的用户名</span></span>
<span class="line"><span style="color:#A6ACCD;">#password=123               #登录管理后台的密码</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">[supervisord]</span></span>
<span class="line"><span style="color:#A6ACCD;">logfile=/tmp/supervisord.log #日志文件，默认是 $CWD/supervisord.log</span></span>
<span class="line"><span style="color:#A6ACCD;">logfile_maxbytes=50MB        #日志文件大小，超出会rotate，默认 50MB，如果设成0，表示不限制大小</span></span>
<span class="line"><span style="color:#A6ACCD;">logfile_backups=10           #日志文件保留备份数量默认10，设为0表示不备份</span></span>
<span class="line"><span style="color:#A6ACCD;">loglevel=info                #日志级别，默认info，其它: debug,warn,trace</span></span>
<span class="line"><span style="color:#A6ACCD;">pidfile=/tmp/supervisord.pid #pid 文件</span></span>
<span class="line"><span style="color:#A6ACCD;">nodaemon=false               #是否在前台启动，默认是false，即以 daemon 的方式启动</span></span>
<span class="line"><span style="color:#A6ACCD;">minfds=1024                  #可以打开的文件描述符的最小值，默认 1024</span></span>
<span class="line"><span style="color:#A6ACCD;">minprocs=200                 #可以打开的进程数的最小值，默认 200</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">[supervisorctl]</span></span>
<span class="line"><span style="color:#A6ACCD;">serverurl=unix:///tmp/supervisor.sock #通过UNIX socket连接supervisord，路径与unix_http_server部分的file一致</span></span>
<span class="line"><span style="color:#A6ACCD;">#serverurl=http://127.0.0.1:9001 # 通过HTTP的方式连接supervisord</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">#[program:xx]是被管理的进程配置参数，xx是进程的名称</span></span>
<span class="line"><span style="color:#A6ACCD;">[program:xx]</span></span>
<span class="line"><span style="color:#A6ACCD;">command=/opt/apache-tomcat-8.0.35/bin/catalina.sh run  # 程序启动命令</span></span>
<span class="line"><span style="color:#A6ACCD;">autostart=true       # 在supervisord启动的时候也自动启动</span></span>
<span class="line"><span style="color:#A6ACCD;">startsecs=10         # 启动10秒后没有异常退出，就表示进程正常启动了，默认为1秒</span></span>
<span class="line"><span style="color:#A6ACCD;">autorestart=true     # 程序退出后自动重启,可选值：[unexpected,true,false]，默认为unexpected，表示进程意外杀死后才重启</span></span>
<span class="line"><span style="color:#A6ACCD;">startretries=3       # 启动失败自动重试次数，默认是3</span></span>
<span class="line"><span style="color:#A6ACCD;">user=tomcat          # 用哪个用户启动进程，默认是root</span></span>
<span class="line"><span style="color:#A6ACCD;">priority=999         # 进程启动优先级，默认999，值小的优先启动</span></span>
<span class="line"><span style="color:#A6ACCD;">redirect_stderr=true # 把stderr重定向到stdout，默认false</span></span>
<span class="line"><span style="color:#A6ACCD;">stdout_logfile_maxbytes=20MB  # stdout 日志文件大小，默认50MB</span></span>
<span class="line"><span style="color:#A6ACCD;">stdout_logfile_backups = 20   # stdout 日志文件备份数，默认是10</span></span>
<span class="line"><span style="color:#A6ACCD;"># stdout 日志文件，需要注意当指定目录不存在时无法正常启动，所以需要手动创建目录（supervisord 会自动创建日志文件）</span></span>
<span class="line"><span style="color:#A6ACCD;">stdout_logfile=/opt/apache-tomcat-8.0.35/logs/catalina.out</span></span>
<span class="line"><span style="color:#A6ACCD;">stopasgroup=false     #默认为false,进程被杀死时，是否向这个进程组发送stop信号，包括子进程</span></span>
<span class="line"><span style="color:#A6ACCD;">killasgroup=false     #默认为false，向进程组发送kill信号，包括子进程</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">#包含其它配置文件</span></span>
<span class="line"><span style="color:#A6ACCD;">[include]</span></span>
<span class="line"><span style="color:#A6ACCD;">files = relative/directory/*.ini    #可以指定一个或多个以.ini结束的配置文件</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,14),o=[e];function t(c,r,i,C,d,A){return n(),a("div",null,o)}const D=s(p,[["render",t]]);export{y as __pageData,D as default};
