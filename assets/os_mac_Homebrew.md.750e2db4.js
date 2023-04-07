import{_ as s,c as a,o as l,U as e}from"./chunks/framework.6f6f51de.js";const u=JSON.parse('{"title":"Homebrew相关","description":"","frontmatter":{"title":"Homebrew相关"},"headers":[],"relativePath":"os/mac/Homebrew.md","lastUpdated":1680861403000}'),n={name:"os/mac/Homebrew.md"},o=e('<h3 id="安装-homebrew" tabindex="-1">安装 Homebrew <a class="header-anchor" href="#安装-homebrew" aria-label="Permalink to &quot;安装 Homebrew&quot;">​</a></h3><blockquote><p>软件包的管理器</p></blockquote><h4 id="homebrew" tabindex="-1"><a href="https://brew.sh/" target="_blank" rel="noreferrer">Homebrew</a> <a class="header-anchor" href="#homebrew" aria-label="Permalink to &quot;[Homebrew](https://brew.sh/)&quot;">​</a></h4><blockquote><p>标准安装</p></blockquote><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">/bin/bash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-c</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;$(</span><span style="color:#FFCB6B;">curl</span><span style="color:#C3E88D;"> -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh</span><span style="color:#89DDFF;">)&quot;</span></span></code></pre></div><blockquote><p>国内不翻墙安装</p></blockquote><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">/bin/zsh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-c</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;$(</span><span style="color:#FFCB6B;">curl</span><span style="color:#C3E88D;"> -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh</span><span style="color:#89DDFF;">)&quot;</span></span></code></pre></div><h3 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h3><ul><li>安装任意包</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">packageNam</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><ul><li>卸载任意包</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">uninstall</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">packageNam</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><ul><li>查询可用包</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">search</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">packageNam</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><ul><li>查看已安装包列表</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">list</span></span></code></pre></div><ul><li>升级所有包</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">upgrade</span></span></code></pre></div><ul><li>查看任意包信息</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">info</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">packageNam</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><ul><li>更新Homebrew</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">update</span></span></code></pre></div><ul><li>查看Homebrew版本</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v</span></span></code></pre></div><ul><li>Homebrew帮助信息</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-h</span></span></code></pre></div><ul><li>安装为app</li></ul><blockquote><p>其他大部分操作添加cask都可以操作app</p></blockquote><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">packageNam</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cask</span></span></code></pre></div><h3 id="服务管理" tabindex="-1">服务管理 <a class="header-anchor" href="#服务管理" aria-label="Permalink to &quot;服务管理&quot;">​</a></h3><h4 id="基本操作" tabindex="-1">基本操作 <a class="header-anchor" href="#基本操作" aria-label="Permalink to &quot;基本操作&quot;">​</a></h4><p>下面的操作以nginx为例</p><ul><li>安装</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span></span></code></pre></div><ul><li>卸载</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">uninstall</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span></span></code></pre></div><ul><li>更新</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">upgrade</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span></span></code></pre></div><ul><li>重新安装</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">reinstall</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span></span></code></pre></div><ul><li>列出当前所有的服务</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">services</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">list</span></span></code></pre></div><ul><li>运行服务而不设置开机自启动</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">services</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span></span></code></pre></div><ul><li>启动服务并注册开机自启动</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">services</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span></span></code></pre></div><ul><li>停止，并取消开机自启动</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">services</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stop</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span></span></code></pre></div><ul><li>重启，并且注册开机自启</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">services</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">restart</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span></span></code></pre></div><ul><li>清理残留的旧版本及相关日志</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">services</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cleanup</span></span></code></pre></div><h4 id="注册服务" tabindex="-1">注册服务 <a class="header-anchor" href="#注册服务" aria-label="Permalink to &quot;注册服务&quot;">​</a></h4><blockquote><p>注册开机自启后，会创建.plist文件，该文件包含版本信息、编码、安装路径、启动位置、日志路径等信息，取消自启动后会自动删除，执行 brew services list 可以看到各个服务该文件的存放位置</p></blockquote><ul><li>开机自启存放目录</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">/Library/LaunchDaemons/</span></span></code></pre></div><ul><li>用户登录后自启存放目录</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">/Library/LaunchDaemons/</span></span></code></pre></div>',58),p=[o];function t(c,r,i,C,y,h){return l(),a("div",null,p)}const d=s(n,[["render",t]]);export{u as __pageData,d as default};
