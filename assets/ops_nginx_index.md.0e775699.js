import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.54cab62e.js";const x=JSON.parse('{"title":"Nginx","description":"","frontmatter":{"title":"Nginx"},"headers":[],"relativePath":"ops/nginx/index.md","filePath":"ops/nginx/index.md","lastUpdated":1697773070000}'),l={name:"ops/nginx/index.md"},p=e(`<h1 id="nginx" tabindex="-1">Nginx <a class="header-anchor" href="#nginx" aria-label="Permalink to &quot;Nginx&quot;">​</a></h1><blockquote><p>[官网](<a href="http://nginx.org/" target="_blank" rel="noreferrer">nginx news</a>)</p></blockquote><h3 id="文件位置" tabindex="-1">文件位置 <a class="header-anchor" href="#文件位置" aria-label="Permalink to &quot;文件位置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># Nginx配置文件</span></span>
<span class="line"><span style="color:#e1e4e8;">/etc/nginx/nginx.conf # nginx 主配置文件</span></span>
<span class="line"><span style="color:#e1e4e8;">/etc/nginx/nginx.conf.default</span></span>
<span class="line"><span style="color:#e1e4e8;">/etc/nginx/conf.d/    # 默认会把这个目录下的都加载</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 可执行程序文件</span></span>
<span class="line"><span style="color:#e1e4e8;">/usr/bin/nginx-upgrade</span></span>
<span class="line"><span style="color:#e1e4e8;">/usr/sbin/nginx</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># nginx库文件</span></span>
<span class="line"><span style="color:#e1e4e8;">/usr/lib/systemd/system/nginx.service # 用于配置系统守护进程</span></span>
<span class="line"><span style="color:#e1e4e8;">/usr/lib64/nginx/modules # Nginx模块目录</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 帮助文档</span></span>
<span class="line"><span style="color:#e1e4e8;">/usr/share/doc/nginx</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 静态资源目录</span></span>
<span class="line"><span style="color:#e1e4e8;">/usr/share/nginx/html/404.html</span></span>
<span class="line"><span style="color:#e1e4e8;">/usr/share/nginx/html/50x.html</span></span>
<span class="line"><span style="color:#e1e4e8;">/usr/share/nginx/html/index.html</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 存放Nginx日志文件</span></span>
<span class="line"><span style="color:#e1e4e8;">/var/log/nginx</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># Nginx配置文件</span></span>
<span class="line"><span style="color:#24292e;">/etc/nginx/nginx.conf # nginx 主配置文件</span></span>
<span class="line"><span style="color:#24292e;">/etc/nginx/nginx.conf.default</span></span>
<span class="line"><span style="color:#24292e;">/etc/nginx/conf.d/    # 默认会把这个目录下的都加载</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 可执行程序文件</span></span>
<span class="line"><span style="color:#24292e;">/usr/bin/nginx-upgrade</span></span>
<span class="line"><span style="color:#24292e;">/usr/sbin/nginx</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># nginx库文件</span></span>
<span class="line"><span style="color:#24292e;">/usr/lib/systemd/system/nginx.service # 用于配置系统守护进程</span></span>
<span class="line"><span style="color:#24292e;">/usr/lib64/nginx/modules # Nginx模块目录</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 帮助文档</span></span>
<span class="line"><span style="color:#24292e;">/usr/share/doc/nginx</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 静态资源目录</span></span>
<span class="line"><span style="color:#24292e;">/usr/share/nginx/html/404.html</span></span>
<span class="line"><span style="color:#24292e;">/usr/share/nginx/html/50x.html</span></span>
<span class="line"><span style="color:#24292e;">/usr/share/nginx/html/index.html</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 存放Nginx日志文件</span></span>
<span class="line"><span style="color:#24292e;">/var/log/nginx</span></span></code></pre></div><h3 id="常用命令" tabindex="-1">常用命令 <a class="header-anchor" href="#常用命令" aria-label="Permalink to &quot;常用命令&quot;">​</a></h3><ol><li><p><code>systemctl</code> 系统命令</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 开机配置</span></span>
<span class="line"><span style="color:#e1e4e8;">systemctl enable nginx # 开机自动启动</span></span>
<span class="line"><span style="color:#e1e4e8;">systemctl disable nginx # 关闭开机自动启动</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 启动Nginx</span></span>
<span class="line"><span style="color:#e1e4e8;">systemctl start nginx # 启动Nginx成功后，可以直接访问主机IP，此时会展示Nginx默认页面</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 停止Nginx</span></span>
<span class="line"><span style="color:#e1e4e8;">systemctl stop nginx</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 重启Nginx</span></span>
<span class="line"><span style="color:#e1e4e8;">systemctl restart nginx</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 重新加载Nginx</span></span>
<span class="line"><span style="color:#e1e4e8;">systemctl reload nginx</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 查看 Nginx 运行状态</span></span>
<span class="line"><span style="color:#e1e4e8;">systemctl status nginx</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 开机配置</span></span>
<span class="line"><span style="color:#24292e;">systemctl enable nginx # 开机自动启动</span></span>
<span class="line"><span style="color:#24292e;">systemctl disable nginx # 关闭开机自动启动</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 启动Nginx</span></span>
<span class="line"><span style="color:#24292e;">systemctl start nginx # 启动Nginx成功后，可以直接访问主机IP，此时会展示Nginx默认页面</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 停止Nginx</span></span>
<span class="line"><span style="color:#24292e;">systemctl stop nginx</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 重启Nginx</span></span>
<span class="line"><span style="color:#24292e;">systemctl restart nginx</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 重新加载Nginx</span></span>
<span class="line"><span style="color:#24292e;">systemctl reload nginx</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 查看 Nginx 运行状态</span></span>
<span class="line"><span style="color:#24292e;">systemctl status nginx</span></span></code></pre></div></li><li><p>关闭进程</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">nginx -s stop # 快速关闭</span></span>
<span class="line"><span style="color:#e1e4e8;">nginx -s quit # 优雅关闭, 等待工作进程处理完成后关闭</span></span>
<span class="line"><span style="color:#e1e4e8;">systemctl stop nginx</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">nginx -s stop # 快速关闭</span></span>
<span class="line"><span style="color:#24292e;">nginx -s quit # 优雅关闭, 等待工作进程处理完成后关闭</span></span>
<span class="line"><span style="color:#24292e;">systemctl stop nginx</span></span></code></pre></div></li><li><p>检查配置文件是否有误</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">nginx –t</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">nginx –t</span></span></code></pre></div></li><li><p>重新加载配置文件</p><blockquote><p>向主进程发送信号，重新加载配置文件，热重启</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">nginx –s reload</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">nginx –s reload</span></span></code></pre></div></li><li><p>重启</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">nginx -s reopen</span></span>
<span class="line"><span style="color:#e1e4e8;">systemctl restart nginx</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">nginx -s reopen</span></span>
<span class="line"><span style="color:#24292e;">systemctl restart nginx</span></span></code></pre></div></li><li><p>指定配置文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">nginx -c file</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">nginx -c file</span></span></code></pre></div></li><li><p>查看当前 Nginx 最终的配置</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">nginx -T</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">nginx -T</span></span></code></pre></div></li></ol><h3 id="分析日志" tabindex="-1">分析日志 <a class="header-anchor" href="#分析日志" aria-label="Permalink to &quot;分析日志&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 截取日志并统计每天访问次数</span></span>
<span class="line"><span style="color:#e1e4e8;">awk &#39;{print substr($4,2,11)}&#39; access.log | sort | uniq -c</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># uv 用户（IP）访问数量</span></span>
<span class="line"><span style="color:#e1e4e8;">awk &#39;{print $1}&#39; access.log | sort | uniq | wc -l</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 分析出请求最多请求路径</span></span>
<span class="line"><span style="color:#e1e4e8;">awk &#39;{print $7}&#39; access.log | sort | uniq -c | sort -rn | head -n 3</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 截取日志并统计每天访问次数</span></span>
<span class="line"><span style="color:#24292e;">awk &#39;{print substr($4,2,11)}&#39; access.log | sort | uniq -c</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># uv 用户（IP）访问数量</span></span>
<span class="line"><span style="color:#24292e;">awk &#39;{print $1}&#39; access.log | sort | uniq | wc -l</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 分析出请求最多请求路径</span></span>
<span class="line"><span style="color:#24292e;">awk &#39;{print $7}&#39; access.log | sort | uniq -c | sort -rn | head -n 3</span></span></code></pre></div>`,8),c=[p];function o(i,t,r,g,d,y){return n(),a("div",null,c)}const u=s(l,[["render",o]]);export{x as __pageData,u as default};
