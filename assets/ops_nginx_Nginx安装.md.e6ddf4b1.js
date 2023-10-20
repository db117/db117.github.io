import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.54cab62e.js";const y=JSON.parse('{"title":"编译与安装","description":"","frontmatter":{},"headers":[],"relativePath":"ops/nginx/Nginx安装.md","filePath":"ops/nginx/Nginx安装.md","lastUpdated":1697773070000}'),l={name:"ops/nginx/Nginx安装.md"},p=e(`<h1 id="编译与安装" tabindex="-1">编译与安装 <a class="header-anchor" href="#编译与安装" aria-label="Permalink to &quot;编译与安装&quot;">​</a></h1><h2 id="安装环境准备" tabindex="-1">安装环境准备 <a class="header-anchor" href="#安装环境准备" aria-label="Permalink to &quot;安装环境准备&quot;">​</a></h2><p><strong>（1）linux 内核2.6及以上版本:</strong> 只有2.6之后才支持epool ，在此之前使用select或pool多路复用的IO模型，无法解决高并发压力的问题。通过命令uname -a 即可查看。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">#查看 linux 内核</span></span>
<span class="line"><span style="color:#e1e4e8;">uname -a</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">#查看 linux 内核</span></span>
<span class="line"><span style="color:#24292e;">uname -a</span></span></code></pre></div><p><strong>（2）GCC编译器</strong> GCC（GNU Compiler Collection）可用来编译C语言程序。Nginx不会直接提供二进制可执行程序,只能下载源码进行编译。 <strong>（3）PCRE库</strong> PCRE（Perl Compatible Regular Expressions，Perl兼容正则表达式）是由Philip Hazel开发的函数库，目前为很多软件所使用，该库支持正则表达式。 <strong>（4）zlib库</strong> zlib库用于对HTTP包的内容做gzip格式的压缩，如果我们在nginx.conf里配置了gzip on，并指定对于某些类型（content-type）的HTTP响应使用gzip来进行压缩以减少网络传输量。 <strong>（5）OpenSSL开发库</strong> 如果我们的服务器不只是要支持HTTP，还需要在更安全的SSL协议上传输HTTP，那么就需要拥有OpenSSL了。另外，如果我们想使用MD5、SHA1等散列函数，那么也需要安装它。 上面几个库都是Nginx 基础功能所必需的，为简单起见我们可以通过yum 命令统一安装。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">#yum 安装nginx 环境</span></span>
<span class="line"><span style="color:#e1e4e8;">yum -y install make zlib zlib-devel gcc-c++ libtool openssl openssl-devel pcre pcre-devel</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">#yum 安装nginx 环境</span></span>
<span class="line"><span style="color:#24292e;">yum -y install make zlib zlib-devel gcc-c++ libtool openssl openssl-devel pcre pcre-devel</span></span></code></pre></div><h3 id="源码获取" tabindex="-1">源码获取： <a class="header-anchor" href="#源码获取" aria-label="Permalink to &quot;源码获取：&quot;">​</a></h3><p>nginx 下载页：<a href="http://nginx.org/en/download.html" target="_blank" rel="noreferrer">http://nginx.org/en/download.html</a> 。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 下载nginx 最新稳定版本</span></span>
<span class="line"><span style="color:#e1e4e8;">wget http://nginx.org/download/nginx-1.14.0.tar.gz</span></span>
<span class="line"><span style="color:#e1e4e8;">#解压</span></span>
<span class="line"><span style="color:#e1e4e8;">tar -zxvf nginx-1.14.0.tar.gz</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 下载nginx 最新稳定版本</span></span>
<span class="line"><span style="color:#24292e;">wget http://nginx.org/download/nginx-1.14.0.tar.gz</span></span>
<span class="line"><span style="color:#24292e;">#解压</span></span>
<span class="line"><span style="color:#24292e;">tar -zxvf nginx-1.14.0.tar.gz</span></span></code></pre></div><p>最简单的安装：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 全部采用默认安装</span></span>
<span class="line"><span style="color:#e1e4e8;">./configure &amp; make &amp; make install  </span></span>
<span class="line"><span style="color:#e1e4e8;">make   &amp; make install</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 全部采用默认安装</span></span>
<span class="line"><span style="color:#24292e;">./configure &amp; make &amp; make install  </span></span>
<span class="line"><span style="color:#24292e;">make   &amp; make install</span></span></code></pre></div><p>执行完成之后 nginx 运行文件 就会被安装在 /usr/local/nginx 下。</p><p>基于参数构建</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">./configure</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">./configure</span></span></code></pre></div><h3 id="模块更新" tabindex="-1">模块更新： <a class="header-anchor" href="#模块更新" aria-label="Permalink to &quot;模块更新：&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 添加状态查查看模块</span></span>
<span class="line"><span style="color:#e1e4e8;">./configure --with-http_stub_status_module </span></span>
<span class="line"><span style="color:#e1e4e8;"># 重新创建主文件</span></span>
<span class="line"><span style="color:#e1e4e8;">make</span></span>
<span class="line"><span style="color:#e1e4e8;"># 将新生成的nginx 文件覆盖 旧文件。</span></span>
<span class="line"><span style="color:#e1e4e8;">cp objs/nginx /usr/local/nginx/sbin/</span></span>
<span class="line"><span style="color:#e1e4e8;"># 查看是否更新成功 显示了 configure 构建参数表示成功</span></span>
<span class="line"><span style="color:#e1e4e8;">/usr/local/nginx/sbin/nginx -V</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 添加状态查查看模块</span></span>
<span class="line"><span style="color:#24292e;">./configure --with-http_stub_status_module </span></span>
<span class="line"><span style="color:#24292e;"># 重新创建主文件</span></span>
<span class="line"><span style="color:#24292e;">make</span></span>
<span class="line"><span style="color:#24292e;"># 将新生成的nginx 文件覆盖 旧文件。</span></span>
<span class="line"><span style="color:#24292e;">cp objs/nginx /usr/local/nginx/sbin/</span></span>
<span class="line"><span style="color:#24292e;"># 查看是否更新成功 显示了 configure 构建参数表示成功</span></span>
<span class="line"><span style="color:#24292e;">/usr/local/nginx/sbin/nginx -V</span></span></code></pre></div>`,16),o=[p];function t(i,c,r,d,g,h){return n(),a("div",null,o)}const m=s(l,[["render",t]]);export{y as __pageData,m as default};
