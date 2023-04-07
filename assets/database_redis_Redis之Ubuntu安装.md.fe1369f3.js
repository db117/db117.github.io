import{_ as e,c as s,o as a,U as t}from"./chunks/framework.6f6f51de.js";const b=JSON.parse('{"title":"Ubuntu安装Redis","description":"","frontmatter":{"title":"Ubuntu安装Redis"},"headers":[],"relativePath":"database/redis/Redis之Ubuntu安装.md","lastUpdated":1680861403000}'),r={name:"database/redis/Redis之Ubuntu安装.md"},o=t(`<h2 id="设置镜像源" tabindex="-1">设置镜像源 <a class="header-anchor" href="#设置镜像源" aria-label="Permalink to &quot;设置镜像源&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">$ echo deb http://packages.dotdeb.org wheezy all &gt;&gt; dotdeb.org.list</span></span>
<span class="line"><span style="color:#A6ACCD;">$ echo deb-src http://packages.dotdeb.org wheezy all &gt;&gt; dotdeb.org.list</span></span>
<span class="line"><span style="color:#A6ACCD;">$ sudo mv dotdeb.org.list /etc/apt/sources.list.d</span></span>
<span class="line"><span style="color:#A6ACCD;">$ wget -q -O - http://www.dotdeb.org/dotdeb.gpg | sudo apt-key add -</span></span></code></pre></div><h2 id="更新镜像源并安装" tabindex="-1">更新镜像源并安装 <a class="header-anchor" href="#更新镜像源并安装" aria-label="Permalink to &quot;更新镜像源并安装&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">$ sudo apt-get update</span></span>
<span class="line"><span style="color:#A6ACCD;">$ sudo apt-get install redis-server</span></span></code></pre></div><h2 id="运行" tabindex="-1">运行 <a class="header-anchor" href="#运行" aria-label="Permalink to &quot;运行&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">$ redis-server --daemonize yes</span></span></code></pre></div><h2 id="其他命令" tabindex="-1">其他命令 <a class="header-anchor" href="#其他命令" aria-label="Permalink to &quot;其他命令&quot;">​</a></h2><p>Usage: ./redis-server [/path/to/redis.conf] [options] ./redis-server - (read config from stdin) ./redis-server -v or --version ./redis-server -h or --help ./redis-server --test-memory &lt;megabytes&gt;</p><p>Examples: ./redis-server (run the server with default conf) ./redis-server /etc/redis/6379.conf ./redis-server --port 7777 ./redis-server --port 7777 --slaveof 127.0.0.1 8888 ./redis-server /etc/myredis.conf --loglevel verbose</p><p>Sentinel mode: ./redis-server /etc/sentinel.conf --sentinel</p>`,10),n=[o];function l(d,i,p,c,h,u){return a(),s("div",null,n)}const _=e(r,[["render",l]]);export{b as __pageData,_ as default};
