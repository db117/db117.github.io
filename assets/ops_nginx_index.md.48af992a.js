import{_ as s,o as n,c as a,V as l}from"./chunks/framework.7cbf217e.js";const y=JSON.parse('{"title":"Nginx","description":"","frontmatter":{"title":"Nginx"},"headers":[],"relativePath":"ops/nginx/index.md","filePath":"ops/nginx/index.md","lastUpdated":1684479953000}'),p={name:"ops/nginx/index.md"},e=l(`<h1 id="nginx" tabindex="-1">Nginx <a class="header-anchor" href="#nginx" aria-label="Permalink to &quot;Nginx&quot;">​</a></h1><blockquote><p>[官网](<a href="http://nginx.org/" target="_blank" rel="noreferrer">nginx news</a>)</p></blockquote><h3 id="文件位置" tabindex="-1">文件位置 <a class="header-anchor" href="#文件位置" aria-label="Permalink to &quot;文件位置&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># Nginx配置文件</span></span>
<span class="line"><span style="color:#A6ACCD;">/etc/nginx/nginx.conf # nginx 主配置文件</span></span>
<span class="line"><span style="color:#A6ACCD;">/etc/nginx/nginx.conf.default</span></span>
<span class="line"><span style="color:#A6ACCD;">/etc/nginx/conf.d/    # 默认会把这个目录下的都加载</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 可执行程序文件</span></span>
<span class="line"><span style="color:#A6ACCD;">/usr/bin/nginx-upgrade</span></span>
<span class="line"><span style="color:#A6ACCD;">/usr/sbin/nginx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># nginx库文件</span></span>
<span class="line"><span style="color:#A6ACCD;">/usr/lib/systemd/system/nginx.service # 用于配置系统守护进程</span></span>
<span class="line"><span style="color:#A6ACCD;">/usr/lib64/nginx/modules # Nginx模块目录</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 帮助文档</span></span>
<span class="line"><span style="color:#A6ACCD;">/usr/share/doc/nginx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 静态资源目录</span></span>
<span class="line"><span style="color:#A6ACCD;">/usr/share/nginx/html/404.html</span></span>
<span class="line"><span style="color:#A6ACCD;">/usr/share/nginx/html/50x.html</span></span>
<span class="line"><span style="color:#A6ACCD;">/usr/share/nginx/html/index.html</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 存放Nginx日志文件</span></span>
<span class="line"><span style="color:#A6ACCD;">/var/log/nginx</span></span></code></pre></div><h3 id="常用命令" tabindex="-1">常用命令 <a class="header-anchor" href="#常用命令" aria-label="Permalink to &quot;常用命令&quot;">​</a></h3><ol><li><p><code>systemctl</code> 系统命令</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 开机配置</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl enable nginx # 开机自动启动</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl disable nginx # 关闭开机自动启动</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 启动Nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl start nginx # 启动Nginx成功后，可以直接访问主机IP，此时会展示Nginx默认页面</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 停止Nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl stop nginx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 重启Nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl restart nginx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 重新加载Nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl reload nginx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 查看 Nginx 运行状态</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl status nginx</span></span></code></pre></div></li><li><p>关闭进程</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">nginx -s stop # 快速关闭</span></span>
<span class="line"><span style="color:#A6ACCD;">nginx -s quit # 优雅关闭, 等待工作进程处理完成后关闭</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl stop nginx</span></span></code></pre></div></li><li><p>检查配置文件是否有误</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">nginx –t</span></span></code></pre></div></li><li><p>重新加载配置文件</p><blockquote><p>向主进程发送信号，重新加载配置文件，热重启</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">nginx –s reload</span></span></code></pre></div></li><li><p>重启</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">nginx -s reopen</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl restart nginx</span></span></code></pre></div></li><li><p>指定配置文件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">nginx -c file</span></span></code></pre></div></li><li><p>查看当前 Nginx 最终的配置</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">nginx -T</span></span></code></pre></div></li></ol><h3 id="分析日志" tabindex="-1">分析日志 <a class="header-anchor" href="#分析日志" aria-label="Permalink to &quot;分析日志&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 截取日志并统计每天访问次数</span></span>
<span class="line"><span style="color:#A6ACCD;">awk &#39;{print substr($4,2,11)}&#39; access.log | sort | uniq -c</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># uv 用户（IP）访问数量</span></span>
<span class="line"><span style="color:#A6ACCD;">awk &#39;{print $1}&#39; access.log | sort | uniq | wc -l</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 分析出请求最多请求路径</span></span>
<span class="line"><span style="color:#A6ACCD;">awk &#39;{print $7}&#39; access.log | sort | uniq -c | sort -rn | head -n 3</span></span></code></pre></div>`,8),o=[e];function t(c,i,r,C,A,g){return n(),a("div",null,o)}const x=s(p,[["render",t]]);export{y as __pageData,x as default};
