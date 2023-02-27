import{_ as s,c as n,o as a,a as p}from"./app.fc437e13.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"ops/nginx/nginx-https.md","lastUpdated":1677491985000}'),l={name:"ops/nginx/nginx-https.md"},e=p(`<h4 id="配置文件" tabindex="-1">配置文件 <a class="header-anchor" href="#配置文件" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">#user  nobody;</span></span>
<span class="line"><span style="color:#A6ACCD;">worker_processes  1;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 错误日志</span></span>
<span class="line"><span style="color:#A6ACCD;">error_log  /logs/error.log;</span></span>
<span class="line"><span style="color:#A6ACCD;">error_log  /logs/error.log  notice;</span></span>
<span class="line"><span style="color:#A6ACCD;">error_log  /logs/error.log  info;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#pid        logs/nginx.pid;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">events {</span></span>
<span class="line"><span style="color:#A6ACCD;">    worker_connections  1024;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">http {</span></span>
<span class="line"><span style="color:#A6ACCD;">    include       mime.types;</span></span>
<span class="line"><span style="color:#A6ACCD;">    default_type  application/octet-stream;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">	# 日志格式</span></span>
<span class="line"><span style="color:#A6ACCD;">    log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">                      &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">	# 访问日志</span></span>
<span class="line"><span style="color:#A6ACCD;">    access_log  /logs/access.log  main;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    sendfile        on;</span></span>
<span class="line"><span style="color:#A6ACCD;">    #tcp_nopush     on;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    #keepalive_timeout  0;</span></span>
<span class="line"><span style="color:#A6ACCD;">    keepalive_timeout  65;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    #gzip  on;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	# 80强转443 HTTPS</span></span>
<span class="line"><span style="color:#A6ACCD;">	server {</span></span>
<span class="line"><span style="color:#A6ACCD;">		listen 80;</span></span>
<span class="line"><span style="color:#A6ACCD;">		server_name *.db117.top;</span></span>
<span class="line"><span style="color:#A6ACCD;">		return 301 https://$http_host$request_uri;</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    # HTTPS server</span></span>
<span class="line"><span style="color:#A6ACCD;">    #</span></span>
<span class="line"><span style="color:#A6ACCD;">    server {</span></span>
<span class="line"><span style="color:#A6ACCD;">        listen       443 ssl;</span></span>
<span class="line"><span style="color:#A6ACCD;">        # 服务名称</span></span>
<span class="line"><span style="color:#A6ACCD;">        server_name *.db117.top;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span></span>
<span class="line"><span style="color:#A6ACCD;">		# 秘钥</span></span>
<span class="line"><span style="color:#A6ACCD;">        ssl_certificate      /ssl/fullchain.crt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        ssl_certificate_key  /ssl/private.key;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">		# 回话缓存</span></span>
<span class="line"><span style="color:#A6ACCD;">		ssl_session_cache 	 shared:SSL:10m;</span></span>
<span class="line"><span style="color:#A6ACCD;">		# 回话超时时间</span></span>
<span class="line"><span style="color:#A6ACCD;">		ssl_session_timeout 	10m;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        ssl_prefer_server_ciphers  	on;</span></span>
<span class="line"><span style="color:#A6ACCD;">		ssl_protocols TLSv1.1 TLSv1.2;</span></span>
<span class="line"><span style="color:#A6ACCD;">		ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">       location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">            proxy_pass http://homepage:8080;</span></span>
<span class="line"><span style="color:#A6ACCD;">       }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="http-转-https" tabindex="-1">http 转 https <a class="header-anchor" href="#http-转-https" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"># 80强转443 HTTPS</span></span>
<span class="line"><span style="color:#A6ACCD;">	server {</span></span>
<span class="line"><span style="color:#A6ACCD;">		listen 80;</span></span>
<span class="line"><span style="color:#A6ACCD;">		server_name *.db117.top;</span></span>
<span class="line"><span style="color:#A6ACCD;">		return 301 https://$http_host$request_uri;</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,4),t=[e];function o(c,r,C,A,i,y){return a(),n("div",null,t)}const d=s(l,[["render",o]]);export{_ as __pageData,d as default};
