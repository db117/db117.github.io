import{_ as s,o as e,c as n,Q as a}from"./chunks/framework.54cab62e.js";const h=JSON.parse('{"title":"Nginx配置","description":"","frontmatter":{},"headers":[],"relativePath":"ops/nginx/Nginx配置.md","filePath":"ops/nginx/Nginx配置.md","lastUpdated":1697773070000}'),l={name:"ops/nginx/Nginx配置.md"},t=a(`<h1 id="nginx配置" tabindex="-1">Nginx配置 <a class="header-anchor" href="#nginx配置" aria-label="Permalink to &quot;Nginx配置&quot;">​</a></h1><h2 id="核心配置" tabindex="-1">核心配置 <a class="header-anchor" href="#核心配置" aria-label="Permalink to &quot;核心配置&quot;">​</a></h2><h3 id="文件结构" tabindex="-1">文件结构 <a class="header-anchor" href="#文件结构" aria-label="Permalink to &quot;文件结构&quot;">​</a></h3><ul><li><code>main</code> 全局配置，对全局生效；</li><li><code>events</code> 配置影响 <code>Nginx</code> 服务器与用户的网络连接；</li><li><code>http</code> 配置代理，缓存，日志定义等绝大多数功能和第三方模块的配置；</li><li><code>server</code> 配置虚拟主机的相关参数，一个 <code>http</code> 块中可以有多个 <code>server</code> 块；</li><li><code>location</code> 用于配置匹配的 <code>uri</code> ；</li><li><code>upstream</code> 配置后端服务器具体地址，负载均衡配置不可或缺的部分；</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># main段配置信息</span></span>
<span class="line"><span style="color:#e1e4e8;">user  nginx;                        				# 运行用户，默认即是nginx，可以不进行设置</span></span>
<span class="line"><span style="color:#e1e4e8;">daemon off; 																# 默认是on，后台运行模式</span></span>
<span class="line"><span style="color:#e1e4e8;">worker_processes  auto;             				# Nginx 进程数，一般设置为和 CPU 核数一样</span></span>
<span class="line"><span style="color:#e1e4e8;">worker_cpu_affinity 0001 0010 0100 1000; 		# 4个物理核心，4个worker子进程复制代码</span></span>
<span class="line"><span style="color:#e1e4e8;">pid        /var/run/nginx.pid;      				# Nginx 服务启动时的 pid 存放位置</span></span>
<span class="line"><span style="color:#e1e4e8;">worker_rlimit_nofile 20480; 								# 可以理解成每个worker子进程的最大连接数量。</span></span>
<span class="line"><span style="color:#e1e4e8;">worker_priority -10; 												# 120-10=110，110就是最终的优先级</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">worker_shutdown_timeout 5s;									# 指定 worker 子进程优雅退出时的超时时间。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">error_log  /var/log/nginx/error.log warn;   # Nginx 的错误日志存放目录</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># events段配置信息</span></span>
<span class="line"><span style="color:#e1e4e8;">events {</span></span>
<span class="line"><span style="color:#e1e4e8;">    use epoll;     							# 使用epoll的I/O模型(如果你不知道Nginx该使用哪种轮询方法，会自动选择一个最适合你操作系统的)</span></span>
<span class="line"><span style="color:#e1e4e8;">    worker_connections 1024;   	# 每个进程允许最大并发数</span></span>
<span class="line"><span style="color:#e1e4e8;">    accept_mutex on;						# 是否打开负载均衡互斥锁,默认是off关闭的</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># http段配置信息</span></span>
<span class="line"><span style="color:#e1e4e8;"># 配置使用最频繁的部分，代理、缓存、日志定义等绝大多数功能和第三方模块的配置都在这里设置</span></span>
<span class="line"><span style="color:#e1e4e8;">http {</span></span>
<span class="line"><span style="color:#e1e4e8;">    # 设置日志模式</span></span>
<span class="line"><span style="color:#e1e4e8;">    log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">                      &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    access_log  /var/log/nginx/access.log  main;   # Nginx访问日志存放位置</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    sendfile            on;   # 开启高效传输模式</span></span>
<span class="line"><span style="color:#e1e4e8;">    tcp_nopush          on;   # 减少网络报文段的数量</span></span>
<span class="line"><span style="color:#e1e4e8;">    tcp_nodelay         on;</span></span>
<span class="line"><span style="color:#e1e4e8;">    keepalive_timeout   65;   # 保持连接的时间，也叫超时时间，单位秒</span></span>
<span class="line"><span style="color:#e1e4e8;">    types_hash_max_size 2048; # 散列表大小,默认1024</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    include             /etc/nginx/mime.types;      # 文件扩展名与类型映射表</span></span>
<span class="line"><span style="color:#e1e4e8;">    default_type        application/octet-stream;   # 默认文件类型</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    include /etc/nginx/conf.d/*.conf;   # 加载子配置项</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    # server段配置信息</span></span>
<span class="line"><span style="color:#e1e4e8;">    server {</span></span>
<span class="line"><span style="color:#e1e4e8;">     listen       80;       		# 配置监听的端口</span></span>
<span class="line"><span style="color:#e1e4e8;">     server_name  localhost;    # 配置的域名</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">     # location段配置信息</span></span>
<span class="line"><span style="color:#e1e4e8;">     location / {</span></span>
<span class="line"><span style="color:#e1e4e8;">      root   /usr/share/nginx/html;  	# 网站根目录</span></span>
<span class="line"><span style="color:#e1e4e8;">      index  index.html index.htm;   	# 默认首页文件</span></span>
<span class="line"><span style="color:#e1e4e8;">      deny 172.168.22.11;   					# 禁止访问的ip地址，可以为all</span></span>
<span class="line"><span style="color:#e1e4e8;">      allow 172.168.33.44；					  # 允许访问的ip地址，可以为all</span></span>
<span class="line"><span style="color:#e1e4e8;">     }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">     error_page 500 502 503 504 /50x.html;  # 默认50x对应的访问页面</span></span>
<span class="line"><span style="color:#e1e4e8;">     error_page 400 404 error.html;   			# 同上</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># main段配置信息</span></span>
<span class="line"><span style="color:#24292e;">user  nginx;                        				# 运行用户，默认即是nginx，可以不进行设置</span></span>
<span class="line"><span style="color:#24292e;">daemon off; 																# 默认是on，后台运行模式</span></span>
<span class="line"><span style="color:#24292e;">worker_processes  auto;             				# Nginx 进程数，一般设置为和 CPU 核数一样</span></span>
<span class="line"><span style="color:#24292e;">worker_cpu_affinity 0001 0010 0100 1000; 		# 4个物理核心，4个worker子进程复制代码</span></span>
<span class="line"><span style="color:#24292e;">pid        /var/run/nginx.pid;      				# Nginx 服务启动时的 pid 存放位置</span></span>
<span class="line"><span style="color:#24292e;">worker_rlimit_nofile 20480; 								# 可以理解成每个worker子进程的最大连接数量。</span></span>
<span class="line"><span style="color:#24292e;">worker_priority -10; 												# 120-10=110，110就是最终的优先级</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">worker_shutdown_timeout 5s;									# 指定 worker 子进程优雅退出时的超时时间。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">error_log  /var/log/nginx/error.log warn;   # Nginx 的错误日志存放目录</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># events段配置信息</span></span>
<span class="line"><span style="color:#24292e;">events {</span></span>
<span class="line"><span style="color:#24292e;">    use epoll;     							# 使用epoll的I/O模型(如果你不知道Nginx该使用哪种轮询方法，会自动选择一个最适合你操作系统的)</span></span>
<span class="line"><span style="color:#24292e;">    worker_connections 1024;   	# 每个进程允许最大并发数</span></span>
<span class="line"><span style="color:#24292e;">    accept_mutex on;						# 是否打开负载均衡互斥锁,默认是off关闭的</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># http段配置信息</span></span>
<span class="line"><span style="color:#24292e;"># 配置使用最频繁的部分，代理、缓存、日志定义等绝大多数功能和第三方模块的配置都在这里设置</span></span>
<span class="line"><span style="color:#24292e;">http {</span></span>
<span class="line"><span style="color:#24292e;">    # 设置日志模式</span></span>
<span class="line"><span style="color:#24292e;">    log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span></span>
<span class="line"><span style="color:#24292e;">                      &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span style="color:#24292e;">                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    access_log  /var/log/nginx/access.log  main;   # Nginx访问日志存放位置</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    sendfile            on;   # 开启高效传输模式</span></span>
<span class="line"><span style="color:#24292e;">    tcp_nopush          on;   # 减少网络报文段的数量</span></span>
<span class="line"><span style="color:#24292e;">    tcp_nodelay         on;</span></span>
<span class="line"><span style="color:#24292e;">    keepalive_timeout   65;   # 保持连接的时间，也叫超时时间，单位秒</span></span>
<span class="line"><span style="color:#24292e;">    types_hash_max_size 2048; # 散列表大小,默认1024</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    include             /etc/nginx/mime.types;      # 文件扩展名与类型映射表</span></span>
<span class="line"><span style="color:#24292e;">    default_type        application/octet-stream;   # 默认文件类型</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    include /etc/nginx/conf.d/*.conf;   # 加载子配置项</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    # server段配置信息</span></span>
<span class="line"><span style="color:#24292e;">    server {</span></span>
<span class="line"><span style="color:#24292e;">     listen       80;       		# 配置监听的端口</span></span>
<span class="line"><span style="color:#24292e;">     server_name  localhost;    # 配置的域名</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">     # location段配置信息</span></span>
<span class="line"><span style="color:#24292e;">     location / {</span></span>
<span class="line"><span style="color:#24292e;">      root   /usr/share/nginx/html;  	# 网站根目录</span></span>
<span class="line"><span style="color:#24292e;">      index  index.html index.htm;   	# 默认首页文件</span></span>
<span class="line"><span style="color:#24292e;">      deny 172.168.22.11;   					# 禁止访问的ip地址，可以为all</span></span>
<span class="line"><span style="color:#24292e;">      allow 172.168.33.44；					  # 允许访问的ip地址，可以为all</span></span>
<span class="line"><span style="color:#24292e;">     }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">     error_page 500 502 503 504 /50x.html;  # 默认50x对应的访问页面</span></span>
<span class="line"><span style="color:#24292e;">     error_page 400 404 error.html;   			# 同上</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="常用变量" tabindex="-1">常用变量 <a class="header-anchor" href="#常用变量" aria-label="Permalink to &quot;常用变量&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">变量名</th><th style="text-align:left;">含义</th></tr></thead><tbody><tr><td style="text-align:left;"><code>remote_addr</code></td><td style="text-align:left;">客户端 <code>IP</code> 地址</td></tr><tr><td style="text-align:left;"><code>remote_port</code></td><td style="text-align:left;">客户端端口</td></tr><tr><td style="text-align:left;"><code>server_addr</code></td><td style="text-align:left;">服务端 <code>IP</code> 地址</td></tr><tr><td style="text-align:left;"><code>server_port</code></td><td style="text-align:left;">服务端端口</td></tr><tr><td style="text-align:left;"><code>server_protocol</code></td><td style="text-align:left;">服务端协议</td></tr><tr><td style="text-align:left;"><code>binary_remote_addr</code></td><td style="text-align:left;">二进制格式的客户端 <code>IP</code> 地址</td></tr><tr><td style="text-align:left;"><code>connection</code></td><td style="text-align:left;"><code>TCP</code> 连接的序号，递增</td></tr><tr><td style="text-align:left;"><code>connection_request</code></td><td style="text-align:left;"><code>TCP</code> 连接当前的请求数量</td></tr><tr><td style="text-align:left;"><code>uri</code></td><td style="text-align:left;">请求的URL，不包含参数</td></tr><tr><td style="text-align:left;"><code>request_uri</code></td><td style="text-align:left;">请求的URL，包含参数</td></tr><tr><td style="text-align:left;"><code>scheme</code></td><td style="text-align:left;">协议名， <code>http</code> 或 <code>https</code></td></tr><tr><td style="text-align:left;"><code>request_method</code></td><td style="text-align:left;">请求方法</td></tr><tr><td style="text-align:left;"><code>request_length</code></td><td style="text-align:left;">全部请求的长度，包含请求行、请求头、请求体</td></tr><tr><td style="text-align:left;"><code>args</code></td><td style="text-align:left;">全部参数字符串</td></tr><tr><td style="text-align:left;"><code>arg_参数名</code></td><td style="text-align:left;">获取特定参数值</td></tr><tr><td style="text-align:left;"><code>is_args</code></td><td style="text-align:left;"><code>URL</code> 中是否有参数，有的话返回 <code>?</code> ，否则返回空</td></tr><tr><td style="text-align:left;"><code>query_string</code></td><td style="text-align:left;">与 <code>args</code> 相同</td></tr><tr><td style="text-align:left;"><code>host</code></td><td style="text-align:left;">请求信息中的 <code>Host</code> ，如果请求中没有 <code>Host</code> 行，则在请求头中找，最后使用 <code>nginx</code> 中设置的 <code>server_name</code> 。</td></tr><tr><td style="text-align:left;"><code>http_user_agent</code></td><td style="text-align:left;">用户浏览器</td></tr><tr><td style="text-align:left;"><code>http_referer</code></td><td style="text-align:left;">从哪些链接过来的请求</td></tr><tr><td style="text-align:left;"><code>http_via</code></td><td style="text-align:left;">每经过一层代理服务器，都会添加相应的信息</td></tr><tr><td style="text-align:left;"><code>http_cookie</code></td><td style="text-align:left;">获取用户 <code>cookie</code></td></tr><tr><td style="text-align:left;"><code>request_time</code></td><td style="text-align:left;">处理请求已消耗的时间</td></tr><tr><td style="text-align:left;"><code>https</code></td><td style="text-align:left;">是否开启了 <code>https</code> ，是则返回 <code>on</code> ，否则返回空</td></tr><tr><td style="text-align:left;"><code>request_filename</code></td><td style="text-align:left;">磁盘文件系统待访问文件的完整路径</td></tr><tr><td style="text-align:left;"><code>document_root</code></td><td style="text-align:left;">由 <code>URI</code> 和 <code>root/alias</code> 规则生成的文件夹路径</td></tr><tr><td style="text-align:left;"><code>limit_rate</code></td><td style="text-align:left;">返回响应时的速度上限值</td></tr></tbody></table><p>实例演示 <code>var.conf</code> ：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">server{</span></span>
<span class="line"><span style="color:#e1e4e8;"> listen 8081;</span></span>
<span class="line"><span style="color:#e1e4e8;"> server_name var.lion-test.club;</span></span>
<span class="line"><span style="color:#e1e4e8;"> root /usr/share/nginx/html;</span></span>
<span class="line"><span style="color:#e1e4e8;"> location / {</span></span>
<span class="line"><span style="color:#e1e4e8;">  return 200 &quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">remote_addr: $remote_addr</span></span>
<span class="line"><span style="color:#e1e4e8;">remote_port: $remote_port</span></span>
<span class="line"><span style="color:#e1e4e8;">server_addr: $server_addr</span></span>
<span class="line"><span style="color:#e1e4e8;">server_port: $server_port</span></span>
<span class="line"><span style="color:#e1e4e8;">server_protocol: $server_protocol</span></span>
<span class="line"><span style="color:#e1e4e8;">binary_remote_addr: $binary_remote_addr</span></span>
<span class="line"><span style="color:#e1e4e8;">connection: $connection</span></span>
<span class="line"><span style="color:#e1e4e8;">uri: $uri</span></span>
<span class="line"><span style="color:#e1e4e8;">request_uri: $request_uri</span></span>
<span class="line"><span style="color:#e1e4e8;">scheme: $scheme</span></span>
<span class="line"><span style="color:#e1e4e8;">request_method: $request_method</span></span>
<span class="line"><span style="color:#e1e4e8;">request_length: $request_length</span></span>
<span class="line"><span style="color:#e1e4e8;">args: $args</span></span>
<span class="line"><span style="color:#e1e4e8;">arg_pid: $arg_pid</span></span>
<span class="line"><span style="color:#e1e4e8;">is_args: $is_args</span></span>
<span class="line"><span style="color:#e1e4e8;">query_string: $query_string</span></span>
<span class="line"><span style="color:#e1e4e8;">host: $host</span></span>
<span class="line"><span style="color:#e1e4e8;">http_user_agent: $http_user_agent</span></span>
<span class="line"><span style="color:#e1e4e8;">http_referer: $http_referer</span></span>
<span class="line"><span style="color:#e1e4e8;">http_via: $http_via</span></span>
<span class="line"><span style="color:#e1e4e8;">request_time: $request_time</span></span>
<span class="line"><span style="color:#e1e4e8;">https: $https</span></span>
<span class="line"><span style="color:#e1e4e8;">request_filename: $request_filename</span></span>
<span class="line"><span style="color:#e1e4e8;">document_root: $document_root</span></span>
<span class="line"><span style="color:#e1e4e8;">&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;"> }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">server{</span></span>
<span class="line"><span style="color:#24292e;"> listen 8081;</span></span>
<span class="line"><span style="color:#24292e;"> server_name var.lion-test.club;</span></span>
<span class="line"><span style="color:#24292e;"> root /usr/share/nginx/html;</span></span>
<span class="line"><span style="color:#24292e;"> location / {</span></span>
<span class="line"><span style="color:#24292e;">  return 200 &quot;</span></span>
<span class="line"><span style="color:#24292e;">remote_addr: $remote_addr</span></span>
<span class="line"><span style="color:#24292e;">remote_port: $remote_port</span></span>
<span class="line"><span style="color:#24292e;">server_addr: $server_addr</span></span>
<span class="line"><span style="color:#24292e;">server_port: $server_port</span></span>
<span class="line"><span style="color:#24292e;">server_protocol: $server_protocol</span></span>
<span class="line"><span style="color:#24292e;">binary_remote_addr: $binary_remote_addr</span></span>
<span class="line"><span style="color:#24292e;">connection: $connection</span></span>
<span class="line"><span style="color:#24292e;">uri: $uri</span></span>
<span class="line"><span style="color:#24292e;">request_uri: $request_uri</span></span>
<span class="line"><span style="color:#24292e;">scheme: $scheme</span></span>
<span class="line"><span style="color:#24292e;">request_method: $request_method</span></span>
<span class="line"><span style="color:#24292e;">request_length: $request_length</span></span>
<span class="line"><span style="color:#24292e;">args: $args</span></span>
<span class="line"><span style="color:#24292e;">arg_pid: $arg_pid</span></span>
<span class="line"><span style="color:#24292e;">is_args: $is_args</span></span>
<span class="line"><span style="color:#24292e;">query_string: $query_string</span></span>
<span class="line"><span style="color:#24292e;">host: $host</span></span>
<span class="line"><span style="color:#24292e;">http_user_agent: $http_user_agent</span></span>
<span class="line"><span style="color:#24292e;">http_referer: $http_referer</span></span>
<span class="line"><span style="color:#24292e;">http_via: $http_via</span></span>
<span class="line"><span style="color:#24292e;">request_time: $request_time</span></span>
<span class="line"><span style="color:#24292e;">https: $https</span></span>
<span class="line"><span style="color:#24292e;">request_filename: $request_filename</span></span>
<span class="line"><span style="color:#24292e;">document_root: $document_root</span></span>
<span class="line"><span style="color:#24292e;">&quot;;</span></span>
<span class="line"><span style="color:#24292e;"> }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="常用配置" tabindex="-1">常用配置 <a class="header-anchor" href="#常用配置" aria-label="Permalink to &quot;常用配置&quot;">​</a></h2><h3 id="负载均衡" tabindex="-1">负载均衡 <a class="header-anchor" href="#负载均衡" aria-label="Permalink to &quot;负载均衡&quot;">​</a></h3><ul><li><p><code>server</code> 定义上游服务器地址；</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">语法：server address [parameters]</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">parameters 可选值：</span></span>
<span class="line"><span style="color:#e1e4e8;">weight=number 权重值，默认为1；</span></span>
<span class="line"><span style="color:#e1e4e8;">max_conns=number 上游服务器的最大并发连接数；</span></span>
<span class="line"><span style="color:#e1e4e8;">fail_timeout=time 服务器不可用的判定时间；</span></span>
<span class="line"><span style="color:#e1e4e8;">max_fails=numer 服务器不可用的检查次数；</span></span>
<span class="line"><span style="color:#e1e4e8;">backup 备份服务器，仅当其他服务器都不可用时才会启用；</span></span>
<span class="line"><span style="color:#e1e4e8;">down 标记服务器长期不可用，离线维护；</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">语法：server address [parameters]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">parameters 可选值：</span></span>
<span class="line"><span style="color:#24292e;">weight=number 权重值，默认为1；</span></span>
<span class="line"><span style="color:#24292e;">max_conns=number 上游服务器的最大并发连接数；</span></span>
<span class="line"><span style="color:#24292e;">fail_timeout=time 服务器不可用的判定时间；</span></span>
<span class="line"><span style="color:#24292e;">max_fails=numer 服务器不可用的检查次数；</span></span>
<span class="line"><span style="color:#24292e;">backup 备份服务器，仅当其他服务器都不可用时才会启用；</span></span>
<span class="line"><span style="color:#24292e;">down 标记服务器长期不可用，离线维护；</span></span></code></pre></div></li><li><p><code>zone</code> 定义共享内存，用于跨 <code>worker</code> 子进程；</p></li><li><p><code>keepalive</code> 对上游服务启用长连接；</p></li><li><p><code>keepalive_requests</code> 一个长连接最多请求 <code>HTTP</code> 的个数；默认1000</p></li><li><p><code>keepalive_timeout</code> 空闲情形下，一个长连接的超时时长 默认60s</p></li><li><p><code>keepalive_time</code>一个连接最长时间 默认1h</p></li></ul><p>负载均衡类型</p><ul><li><p><code>hash</code> 哈希负载均衡算法；</p></li><li><p><code>ip_hash</code> 依据 <code>IP</code> 进行哈希计算的负载均衡算法；</p></li><li><p><code>random</code> 随机负载均衡算法；</p></li><li><p><code>least_conn</code> 最少连接数负载均衡算法；</p></li><li><p><code>least_time</code> 最短响应时间负载均衡算法；</p></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">upstream dynamic {</span></span>
<span class="line"><span style="color:#e1e4e8;">		hash $request_uri;</span></span>
<span class="line"><span style="color:#e1e4e8;">		least_conn;</span></span>
<span class="line"><span style="color:#e1e4e8;">		ip_hash;</span></span>
<span class="line"><span style="color:#e1e4e8;">		least_conn;</span></span>
<span class="line"><span style="color:#e1e4e8;">		</span></span>
<span class="line"><span style="color:#e1e4e8;">		</span></span>
<span class="line"><span style="color:#e1e4e8;">    zone upstream_dynamic 64k;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    server backend1.example.com      weight=5;</span></span>
<span class="line"><span style="color:#e1e4e8;">    server backend2.example.com:8080 fail_timeout=5s slow_start=30s;</span></span>
<span class="line"><span style="color:#e1e4e8;">    server 192.0.2.1                 max_fails=3;</span></span>
<span class="line"><span style="color:#e1e4e8;">    server backend3.example.com      resolve;</span></span>
<span class="line"><span style="color:#e1e4e8;">    server backend4.example.com      service=http resolve;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    server backup1.example.com:8080  backup;</span></span>
<span class="line"><span style="color:#e1e4e8;">    server backup2.example.com:8080  backup;</span></span>
<span class="line"><span style="color:#e1e4e8;">    </span></span>
<span class="line"><span style="color:#e1e4e8;">    keepalive 32;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">upstream dynamic {</span></span>
<span class="line"><span style="color:#24292e;">		hash $request_uri;</span></span>
<span class="line"><span style="color:#24292e;">		least_conn;</span></span>
<span class="line"><span style="color:#24292e;">		ip_hash;</span></span>
<span class="line"><span style="color:#24292e;">		least_conn;</span></span>
<span class="line"><span style="color:#24292e;">		</span></span>
<span class="line"><span style="color:#24292e;">		</span></span>
<span class="line"><span style="color:#24292e;">    zone upstream_dynamic 64k;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    server backend1.example.com      weight=5;</span></span>
<span class="line"><span style="color:#24292e;">    server backend2.example.com:8080 fail_timeout=5s slow_start=30s;</span></span>
<span class="line"><span style="color:#24292e;">    server 192.0.2.1                 max_fails=3;</span></span>
<span class="line"><span style="color:#24292e;">    server backend3.example.com      resolve;</span></span>
<span class="line"><span style="color:#24292e;">    server backend4.example.com      service=http resolve;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    server backup1.example.com:8080  backup;</span></span>
<span class="line"><span style="color:#24292e;">    server backup2.example.com:8080  backup;</span></span>
<span class="line"><span style="color:#24292e;">    </span></span>
<span class="line"><span style="color:#24292e;">    keepalive 32;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="proxy-pass" tabindex="-1">proxy_pass <a class="header-anchor" href="#proxy-pass" aria-label="Permalink to &quot;proxy_pass&quot;">​</a></h3><blockquote><p>代理转发</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"> location / {</span></span>
<span class="line"><span style="color:#e1e4e8;">      proxy_set_header        X-Real-IP       $remote_addr;</span></span>
<span class="line"><span style="color:#e1e4e8;">      proxy_set_header        X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#e1e4e8;">      proxy_http_version 1.1;</span></span>
<span class="line"><span style="color:#e1e4e8;">      proxy_set_header Connection &quot;&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">      proxy_pass http://127.0.0.1:9400;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"> location / {</span></span>
<span class="line"><span style="color:#24292e;">      proxy_set_header        X-Real-IP       $remote_addr;</span></span>
<span class="line"><span style="color:#24292e;">      proxy_set_header        X-Forwarded-For $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#24292e;">      proxy_http_version 1.1;</span></span>
<span class="line"><span style="color:#24292e;">      proxy_set_header Connection &quot;&quot;;</span></span>
<span class="line"><span style="color:#24292e;">      proxy_pass http://127.0.0.1:9400;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span></code></pre></div>`,18),p=[t];function o(c,r,i,d,y,_){return e(),n("div",null,p)}const g=s(l,[["render",o]]);export{h as __pageData,g as default};
