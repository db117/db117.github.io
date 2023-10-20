import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.54cab62e.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"ops/nginx/nginx-https.md","filePath":"ops/nginx/nginx-https.md","lastUpdated":1697773070000}'),l={name:"ops/nginx/nginx-https.md"},p=e(`<h4 id="配置文件" tabindex="-1">配置文件 <a class="header-anchor" href="#配置文件" aria-label="Permalink to &quot;配置文件&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">#user  nobody;</span></span>
<span class="line"><span style="color:#e1e4e8;">worker_processes  1;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 错误日志</span></span>
<span class="line"><span style="color:#e1e4e8;">error_log  /logs/error.log;</span></span>
<span class="line"><span style="color:#e1e4e8;">error_log  /logs/error.log  notice;</span></span>
<span class="line"><span style="color:#e1e4e8;">error_log  /logs/error.log  info;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">#pid        logs/nginx.pid;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">events {</span></span>
<span class="line"><span style="color:#e1e4e8;">    worker_connections  1024;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">http {</span></span>
<span class="line"><span style="color:#e1e4e8;">    include       mime.types;</span></span>
<span class="line"><span style="color:#e1e4e8;">    default_type  application/octet-stream;</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	# 日志格式</span></span>
<span class="line"><span style="color:#e1e4e8;">    log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">                      &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">	# 访问日志</span></span>
<span class="line"><span style="color:#e1e4e8;">    access_log  /logs/access.log  main;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    sendfile        on;</span></span>
<span class="line"><span style="color:#e1e4e8;">    #tcp_nopush     on;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    #keepalive_timeout  0;</span></span>
<span class="line"><span style="color:#e1e4e8;">    keepalive_timeout  65;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    #gzip  on;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	# 80强转443 HTTPS</span></span>
<span class="line"><span style="color:#e1e4e8;">	server {</span></span>
<span class="line"><span style="color:#e1e4e8;">		listen 80;</span></span>
<span class="line"><span style="color:#e1e4e8;">		server_name *.db117.top;</span></span>
<span class="line"><span style="color:#e1e4e8;">		return 301 https://$http_host$request_uri;</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    # HTTPS server</span></span>
<span class="line"><span style="color:#e1e4e8;">    #</span></span>
<span class="line"><span style="color:#e1e4e8;">    server {</span></span>
<span class="line"><span style="color:#e1e4e8;">        listen       443 ssl;</span></span>
<span class="line"><span style="color:#e1e4e8;">        # 服务名称</span></span>
<span class="line"><span style="color:#e1e4e8;">        server_name *.db117.top;</span></span>
<span class="line"><span style="color:#e1e4e8;">		</span></span>
<span class="line"><span style="color:#e1e4e8;">		# 秘钥</span></span>
<span class="line"><span style="color:#e1e4e8;">        ssl_certificate      /ssl/fullchain.crt;</span></span>
<span class="line"><span style="color:#e1e4e8;">        ssl_certificate_key  /ssl/private.key;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">		# 回话缓存</span></span>
<span class="line"><span style="color:#e1e4e8;">		ssl_session_cache 	 shared:SSL:10m;</span></span>
<span class="line"><span style="color:#e1e4e8;">		# 回话超时时间</span></span>
<span class="line"><span style="color:#e1e4e8;">		ssl_session_timeout 	10m;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        ssl_prefer_server_ciphers  	on;</span></span>
<span class="line"><span style="color:#e1e4e8;">		ssl_protocols TLSv1.1 TLSv1.2;</span></span>
<span class="line"><span style="color:#e1e4e8;">		ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">       location / {</span></span>
<span class="line"><span style="color:#e1e4e8;">            proxy_pass http://homepage:8080;</span></span>
<span class="line"><span style="color:#e1e4e8;">       }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">#user  nobody;</span></span>
<span class="line"><span style="color:#24292e;">worker_processes  1;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 错误日志</span></span>
<span class="line"><span style="color:#24292e;">error_log  /logs/error.log;</span></span>
<span class="line"><span style="color:#24292e;">error_log  /logs/error.log  notice;</span></span>
<span class="line"><span style="color:#24292e;">error_log  /logs/error.log  info;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">#pid        logs/nginx.pid;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">events {</span></span>
<span class="line"><span style="color:#24292e;">    worker_connections  1024;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">http {</span></span>
<span class="line"><span style="color:#24292e;">    include       mime.types;</span></span>
<span class="line"><span style="color:#24292e;">    default_type  application/octet-stream;</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	# 日志格式</span></span>
<span class="line"><span style="color:#24292e;">    log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span></span>
<span class="line"><span style="color:#24292e;">                      &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span style="color:#24292e;">                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span></span>
<span class="line"><span style="color:#24292e;">	# 访问日志</span></span>
<span class="line"><span style="color:#24292e;">    access_log  /logs/access.log  main;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    sendfile        on;</span></span>
<span class="line"><span style="color:#24292e;">    #tcp_nopush     on;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    #keepalive_timeout  0;</span></span>
<span class="line"><span style="color:#24292e;">    keepalive_timeout  65;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    #gzip  on;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	# 80强转443 HTTPS</span></span>
<span class="line"><span style="color:#24292e;">	server {</span></span>
<span class="line"><span style="color:#24292e;">		listen 80;</span></span>
<span class="line"><span style="color:#24292e;">		server_name *.db117.top;</span></span>
<span class="line"><span style="color:#24292e;">		return 301 https://$http_host$request_uri;</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    # HTTPS server</span></span>
<span class="line"><span style="color:#24292e;">    #</span></span>
<span class="line"><span style="color:#24292e;">    server {</span></span>
<span class="line"><span style="color:#24292e;">        listen       443 ssl;</span></span>
<span class="line"><span style="color:#24292e;">        # 服务名称</span></span>
<span class="line"><span style="color:#24292e;">        server_name *.db117.top;</span></span>
<span class="line"><span style="color:#24292e;">		</span></span>
<span class="line"><span style="color:#24292e;">		# 秘钥</span></span>
<span class="line"><span style="color:#24292e;">        ssl_certificate      /ssl/fullchain.crt;</span></span>
<span class="line"><span style="color:#24292e;">        ssl_certificate_key  /ssl/private.key;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">		# 回话缓存</span></span>
<span class="line"><span style="color:#24292e;">		ssl_session_cache 	 shared:SSL:10m;</span></span>
<span class="line"><span style="color:#24292e;">		# 回话超时时间</span></span>
<span class="line"><span style="color:#24292e;">		ssl_session_timeout 	10m;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        ssl_prefer_server_ciphers  	on;</span></span>
<span class="line"><span style="color:#24292e;">		ssl_protocols TLSv1.1 TLSv1.2;</span></span>
<span class="line"><span style="color:#24292e;">		ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">       location / {</span></span>
<span class="line"><span style="color:#24292e;">            proxy_pass http://homepage:8080;</span></span>
<span class="line"><span style="color:#24292e;">       }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h4 id="http-转-https" tabindex="-1">http 转 https <a class="header-anchor" href="#http-转-https" aria-label="Permalink to &quot;http 转 https&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 80强转443 HTTPS</span></span>
<span class="line"><span style="color:#e1e4e8;">	server {</span></span>
<span class="line"><span style="color:#e1e4e8;">		listen 80;</span></span>
<span class="line"><span style="color:#e1e4e8;">		server_name *.db117.top;</span></span>
<span class="line"><span style="color:#e1e4e8;">		return 301 https://$http_host$request_uri;</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 80强转443 HTTPS</span></span>
<span class="line"><span style="color:#24292e;">	server {</span></span>
<span class="line"><span style="color:#24292e;">		listen 80;</span></span>
<span class="line"><span style="color:#24292e;">		server_name *.db117.top;</span></span>
<span class="line"><span style="color:#24292e;">		return 301 https://$http_host$request_uri;</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span></code></pre></div>`,4),o=[p];function t(c,r,i,y,_,h){return n(),a("div",null,o)}const g=s(l,[["render",t]]);export{u as __pageData,g as default};
