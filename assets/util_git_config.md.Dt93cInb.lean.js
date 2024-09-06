import{_ as s,c as n,a3 as e,o as p}from"./chunks/framework.BChxy9sN.js";const h=JSON.parse('{"title":"常见的配置","description":"","frontmatter":{"title":"常见的配置"},"headers":[],"relativePath":"util/git/config.md","filePath":"util/git/config.md"}'),l={name:"util/git/config.md"};function i(t,a,c,o,d,r){return p(),n("div",null,a[0]||(a[0]=[e(`<h2 id="配置文件" tabindex="-1">配置文件 <a class="header-anchor" href="#配置文件" aria-label="Permalink to &quot;配置文件&quot;">​</a></h2><blockquote><p>可以使用 <code>git config</code> 进行设置，也可以直接修改配置文件</p><p>使用命令行时可以指定作用域 <code>worktree, local, global, system, command</code></p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 系统配置(当前计算机)</span></span>
<span class="line"><span>/etc/gitconfig</span></span>
<span class="line"><span># 全局配置(当前登录用户)</span></span>
<span class="line"><span>~/.gitconfig</span></span>
<span class="line"><span># 工作区 (当前工作目录)</span></span>
<span class="line"><span>.git/config</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查看已有配置信息</span></span>
<span class="line"><span>git config -l</span></span>
<span class="line"><span>git config -list</span></span></code></pre></div><h2 id="基本信息" tabindex="-1">基本信息 <a class="header-anchor" href="#基本信息" aria-label="Permalink to &quot;基本信息&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 用户信息的配置</span></span>
<span class="line"><span>user.name </span></span>
<span class="line"><span>user.email</span></span>
<span class="line"><span># 文本编辑器，默认 vi 或者 vim。可以修改为 emacs 等</span></span>
<span class="line"><span>core.editor </span></span>
<span class="line"><span># 差异分析工具 可选 kdiff3、tkdiff、meld、xxdiff、emerge、vimdiff、gvimdiff、ecmerge、opendiff 等</span></span>
<span class="line"><span>merge.tool</span></span>
<span class="line"><span># diff颜色配置</span></span>
<span class="line"><span>color.diff true </span></span>
<span class="line"><span># 记住密码</span></span>
<span class="line"><span>credential.helper cache</span></span>
<span class="line"><span># 记住密码（有过期时间）</span></span>
<span class="line"><span>credential.helper &#39;cache --timeout=10000&#39;</span></span></code></pre></div><h3 id="别名" tabindex="-1">别名 <a class="header-anchor" href="#别名" aria-label="Permalink to &quot;别名&quot;">​</a></h3><blockquote><p>主要是简化操作，把一串很长的命令缩短</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 列出所有的别名</span></span>
<span class="line"><span>git config -l | grep alias | sed &#39;s/^alias\\.//g&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 简化并美化日志</span></span>
<span class="line"><span>git config --global alias.lg “log --color --graph --pretty=format:&#39;%C(bold red)%h%C(reset) - %C(bold green)(%cr)%C(bold blue)&lt;%an&gt;%C(reset) -%C(bold yellow)%d%C(reset) %s&#39; --abbrev-commit”</span></span></code></pre></div>`,8)]))}const f=s(l,[["render",i]]);export{h as __pageData,f as default};
