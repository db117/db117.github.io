import{_ as s,c as n,o as a,a8 as p}from"./chunks/framework.BaglXmoE.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"ops/nginx/nginx-https.md","filePath":"ops/nginx/nginx-https.md","lastUpdated":1710853433000}'),e={name:"ops/nginx/nginx-https.md"},l=p(`<h4 id="配置文件" tabindex="-1">配置文件 <a class="header-anchor" href="#配置文件" aria-label="Permalink to &quot;配置文件&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>#user  nobody;</span></span>
<span class="line"><span>worker_processes  1;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 错误日志</span></span>
<span class="line"><span>error_log  /logs/error.log;</span></span>
<span class="line"><span>error_log  /logs/error.log  notice;</span></span>
<span class="line"><span>error_log  /logs/error.log  info;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#pid        logs/nginx.pid;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>events {</span></span>
<span class="line"><span>    worker_connections  1024;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>http {</span></span>
<span class="line"><span>    include       mime.types;</span></span>
<span class="line"><span>    default_type  application/octet-stream;</span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>	# 日志格式</span></span>
<span class="line"><span>    log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span></span>
<span class="line"><span>                      &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span>                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span></span>
<span class="line"><span>	# 访问日志</span></span>
<span class="line"><span>    access_log  /logs/access.log  main;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    sendfile        on;</span></span>
<span class="line"><span>    #tcp_nopush     on;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #keepalive_timeout  0;</span></span>
<span class="line"><span>    keepalive_timeout  65;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    #gzip  on;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	# 80强转443 HTTPS</span></span>
<span class="line"><span>	server {</span></span>
<span class="line"><span>		listen 80;</span></span>
<span class="line"><span>		server_name *.db117.top;</span></span>
<span class="line"><span>		return 301 https://$http_host$request_uri;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # HTTPS server</span></span>
<span class="line"><span>    #</span></span>
<span class="line"><span>    server {</span></span>
<span class="line"><span>        listen       443 ssl;</span></span>
<span class="line"><span>        # 服务名称</span></span>
<span class="line"><span>        server_name *.db117.top;</span></span>
<span class="line"><span>		</span></span>
<span class="line"><span>		# 秘钥</span></span>
<span class="line"><span>        ssl_certificate      /ssl/fullchain.crt;</span></span>
<span class="line"><span>        ssl_certificate_key  /ssl/private.key;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		# 回话缓存</span></span>
<span class="line"><span>		ssl_session_cache 	 shared:SSL:10m;</span></span>
<span class="line"><span>		# 回话超时时间</span></span>
<span class="line"><span>		ssl_session_timeout 	10m;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ssl_prefer_server_ciphers  	on;</span></span>
<span class="line"><span>		ssl_protocols TLSv1.1 TLSv1.2;</span></span>
<span class="line"><span>		ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>       location / {</span></span>
<span class="line"><span>            proxy_pass http://homepage:8080;</span></span>
<span class="line"><span>       }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div><h4 id="http-转-https" tabindex="-1">http 转 https <a class="header-anchor" href="#http-转-https" aria-label="Permalink to &quot;http 转 https&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 80强转443 HTTPS</span></span>
<span class="line"><span>	server {</span></span>
<span class="line"><span>		listen 80;</span></span>
<span class="line"><span>		server_name *.db117.top;</span></span>
<span class="line"><span>		return 301 https://$http_host$request_uri;</span></span>
<span class="line"><span>	}</span></span></code></pre></div>`,4),t=[l];function i(c,o,r,_,h,d){return a(),n("div",null,t)}const m=s(e,[["render",i]]);export{g as __pageData,m as default};