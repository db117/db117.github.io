import{_ as s,c as n,o as a,a8 as p}from"./chunks/framework.n88ns4tz.js";const x=JSON.parse('{"title":"Nginx","description":"","frontmatter":{"title":"Nginx"},"headers":[],"relativePath":"ops/nginx/index.md","filePath":"ops/nginx/index.md","lastUpdated":1712286953000}'),e={name:"ops/nginx/index.md"},i=p(`<h1 id="nginx" tabindex="-1">Nginx <a class="header-anchor" href="#nginx" aria-label="Permalink to &quot;Nginx&quot;">​</a></h1><blockquote><p>[官网](<a href="http://nginx.org/" target="_blank" rel="noreferrer">nginx news</a>)</p></blockquote><h3 id="文件位置" tabindex="-1">文件位置 <a class="header-anchor" href="#文件位置" aria-label="Permalink to &quot;文件位置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># Nginx配置文件</span></span>
<span class="line"><span>/etc/nginx/nginx.conf # nginx 主配置文件</span></span>
<span class="line"><span>/etc/nginx/nginx.conf.default</span></span>
<span class="line"><span>/etc/nginx/conf.d/    # 默认会把这个目录下的都加载</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 可执行程序文件</span></span>
<span class="line"><span>/usr/bin/nginx-upgrade</span></span>
<span class="line"><span>/usr/sbin/nginx</span></span>
<span class="line"><span></span></span>
<span class="line"><span># nginx库文件</span></span>
<span class="line"><span>/usr/lib/systemd/system/nginx.service # 用于配置系统守护进程</span></span>
<span class="line"><span>/usr/lib64/nginx/modules # Nginx模块目录</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 帮助文档</span></span>
<span class="line"><span>/usr/share/doc/nginx</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 静态资源目录</span></span>
<span class="line"><span>/usr/share/nginx/html/404.html</span></span>
<span class="line"><span>/usr/share/nginx/html/50x.html</span></span>
<span class="line"><span>/usr/share/nginx/html/index.html</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 存放Nginx日志文件</span></span>
<span class="line"><span>/var/log/nginx</span></span></code></pre></div><h3 id="常用命令" tabindex="-1">常用命令 <a class="header-anchor" href="#常用命令" aria-label="Permalink to &quot;常用命令&quot;">​</a></h3><ol><li><p><code>systemctl</code> 系统命令</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 开机配置</span></span>
<span class="line"><span>systemctl enable nginx # 开机自动启动</span></span>
<span class="line"><span>systemctl disable nginx # 关闭开机自动启动</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 启动Nginx</span></span>
<span class="line"><span>systemctl start nginx # 启动Nginx成功后，可以直接访问主机IP，此时会展示Nginx默认页面</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 停止Nginx</span></span>
<span class="line"><span>systemctl stop nginx</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 重启Nginx</span></span>
<span class="line"><span>systemctl restart nginx</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 重新加载Nginx</span></span>
<span class="line"><span>systemctl reload nginx</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查看 Nginx 运行状态</span></span>
<span class="line"><span>systemctl status nginx</span></span></code></pre></div></li><li><p>关闭进程</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>nginx -s stop # 快速关闭</span></span>
<span class="line"><span>nginx -s quit # 优雅关闭, 等待工作进程处理完成后关闭</span></span>
<span class="line"><span>systemctl stop nginx</span></span></code></pre></div></li><li><p>检查配置文件是否有误</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>nginx –t</span></span></code></pre></div></li><li><p>重新加载配置文件</p><blockquote><p>向主进程发送信号，重新加载配置文件，热重启</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>nginx –s reload</span></span></code></pre></div></li><li><p>重启</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>nginx -s reopen</span></span>
<span class="line"><span>systemctl restart nginx</span></span></code></pre></div></li><li><p>指定配置文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>nginx -c file</span></span></code></pre></div></li><li><p>查看当前 Nginx 最终的配置</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>nginx -T</span></span></code></pre></div></li></ol><h3 id="分析日志" tabindex="-1">分析日志 <a class="header-anchor" href="#分析日志" aria-label="Permalink to &quot;分析日志&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 截取日志并统计每天访问次数</span></span>
<span class="line"><span>awk &#39;{print substr($4,2,11)}&#39; access.log | sort | uniq -c</span></span>
<span class="line"><span></span></span>
<span class="line"><span># uv 用户（IP）访问数量</span></span>
<span class="line"><span>awk &#39;{print $1}&#39; access.log | sort | uniq | wc -l</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 分析出请求最多请求路径</span></span>
<span class="line"><span>awk &#39;{print $7}&#39; access.log | sort | uniq -c | sort -rn | head -n 3</span></span></code></pre></div>`,8),l=[i];function t(c,o,d,g,r,h){return a(),n("div",null,l)}const b=s(e,[["render",t]]);export{x as __pageData,b as default};
