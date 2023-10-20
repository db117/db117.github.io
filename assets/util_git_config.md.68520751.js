import{_ as s,o as e,c as a,Q as n}from"./chunks/framework.54cab62e.js";const h=JSON.parse('{"title":"常见的配置","description":"","frontmatter":{"title":"常见的配置"},"headers":[],"relativePath":"util/git/config.md","filePath":"util/git/config.md","lastUpdated":1697773070000}'),l={name:"util/git/config.md"},p=n(`<h2 id="配置文件" tabindex="-1">配置文件 <a class="header-anchor" href="#配置文件" aria-label="Permalink to &quot;配置文件&quot;">​</a></h2><blockquote><p>可以使用 <code>git config</code> 进行设置，也可以直接修改配置文件</p><p>使用命令行时可以指定作用域 <code>worktree, local, global, system, command</code></p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 系统配置(当前计算机)</span></span>
<span class="line"><span style="color:#e1e4e8;">/etc/gitconfig</span></span>
<span class="line"><span style="color:#e1e4e8;"># 全局配置(当前登录用户)</span></span>
<span class="line"><span style="color:#e1e4e8;">~/.gitconfig</span></span>
<span class="line"><span style="color:#e1e4e8;"># 工作区 (当前工作目录)</span></span>
<span class="line"><span style="color:#e1e4e8;">.git/config</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 查看已有配置信息</span></span>
<span class="line"><span style="color:#e1e4e8;">git config -l</span></span>
<span class="line"><span style="color:#e1e4e8;">git config -list</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 系统配置(当前计算机)</span></span>
<span class="line"><span style="color:#24292e;">/etc/gitconfig</span></span>
<span class="line"><span style="color:#24292e;"># 全局配置(当前登录用户)</span></span>
<span class="line"><span style="color:#24292e;">~/.gitconfig</span></span>
<span class="line"><span style="color:#24292e;"># 工作区 (当前工作目录)</span></span>
<span class="line"><span style="color:#24292e;">.git/config</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 查看已有配置信息</span></span>
<span class="line"><span style="color:#24292e;">git config -l</span></span>
<span class="line"><span style="color:#24292e;">git config -list</span></span></code></pre></div><h2 id="基本信息" tabindex="-1">基本信息 <a class="header-anchor" href="#基本信息" aria-label="Permalink to &quot;基本信息&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 用户信息的配置</span></span>
<span class="line"><span style="color:#e1e4e8;">user.name </span></span>
<span class="line"><span style="color:#e1e4e8;">user.email</span></span>
<span class="line"><span style="color:#e1e4e8;"># 文本编辑器，默认 vi 或者 vim。可以修改为 emacs 等</span></span>
<span class="line"><span style="color:#e1e4e8;">core.editor </span></span>
<span class="line"><span style="color:#e1e4e8;"># 差异分析工具 可选 kdiff3、tkdiff、meld、xxdiff、emerge、vimdiff、gvimdiff、ecmerge、opendiff 等</span></span>
<span class="line"><span style="color:#e1e4e8;">merge.tool</span></span>
<span class="line"><span style="color:#e1e4e8;"># diff颜色配置</span></span>
<span class="line"><span style="color:#e1e4e8;">color.diff true </span></span>
<span class="line"><span style="color:#e1e4e8;"># 记住密码</span></span>
<span class="line"><span style="color:#e1e4e8;">credential.helper cache</span></span>
<span class="line"><span style="color:#e1e4e8;"># 记住密码（有过期时间）</span></span>
<span class="line"><span style="color:#e1e4e8;">credential.helper &#39;cache --timeout=10000&#39;</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#24292e;"># 用户信息的配置</span></span>
<span class="line"><span style="color:#24292e;">user.name </span></span>
<span class="line"><span style="color:#24292e;">user.email</span></span>
<span class="line"><span style="color:#24292e;"># 文本编辑器，默认 vi 或者 vim。可以修改为 emacs 等</span></span>
<span class="line"><span style="color:#24292e;">core.editor </span></span>
<span class="line"><span style="color:#24292e;"># 差异分析工具 可选 kdiff3、tkdiff、meld、xxdiff、emerge、vimdiff、gvimdiff、ecmerge、opendiff 等</span></span>
<span class="line"><span style="color:#24292e;">merge.tool</span></span>
<span class="line"><span style="color:#24292e;"># diff颜色配置</span></span>
<span class="line"><span style="color:#24292e;">color.diff true </span></span>
<span class="line"><span style="color:#24292e;"># 记住密码</span></span>
<span class="line"><span style="color:#24292e;">credential.helper cache</span></span>
<span class="line"><span style="color:#24292e;"># 记住密码（有过期时间）</span></span>
<span class="line"><span style="color:#24292e;">credential.helper &#39;cache --timeout=10000&#39;</span></span></code></pre></div><h3 id="别名" tabindex="-1">别名 <a class="header-anchor" href="#别名" aria-label="Permalink to &quot;别名&quot;">​</a></h3><blockquote><p>主要是简化操作，把一串很长的命令缩短</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 列出所有的别名</span></span>
<span class="line"><span style="color:#e1e4e8;">git config -l | grep alias | sed &#39;s/^alias\\.//g&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 简化并美化日志</span></span>
<span class="line"><span style="color:#e1e4e8;">git config --global alias.lg “log --color --graph --pretty=format:&#39;%C(bold red)%h%C(reset) - %C(bold green)(%cr)%C(bold blue)&lt;%an&gt;%C(reset) -%C(bold yellow)%d%C(reset) %s&#39; --abbrev-commit”</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 列出所有的别名</span></span>
<span class="line"><span style="color:#24292e;">git config -l | grep alias | sed &#39;s/^alias\\.//g&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 简化并美化日志</span></span>
<span class="line"><span style="color:#24292e;">git config --global alias.lg “log --color --graph --pretty=format:&#39;%C(bold red)%h%C(reset) - %C(bold green)(%cr)%C(bold blue)&lt;%an&gt;%C(reset) -%C(bold yellow)%d%C(reset) %s&#39; --abbrev-commit”</span></span></code></pre></div>`,8),o=[p];function c(t,i,r,d,g,f){return e(),a("div",null,o)}const m=s(l,[["render",c]]);export{h as __pageData,m as default};
