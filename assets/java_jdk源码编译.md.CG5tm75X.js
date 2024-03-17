import{_ as a,c as e,o,a8 as t}from"./chunks/framework.BaglXmoE.js";const b=JSON.parse('{"title":"jdk源码编译","description":"","frontmatter":{"title":"jdk源码编译"},"headers":[],"relativePath":"java/jdk源码编译.md","filePath":"java/jdk源码编译.md","lastUpdated":1710641614000}'),i={name:"java/jdk源码编译.md"},s=t('<h3 id="下载源码" tabindex="-1">下载源码 <a class="header-anchor" href="#下载源码" aria-label="Permalink to &quot;下载源码&quot;">​</a></h3><blockquote><p>[jdk11](<a href="https://github.com/openjdk/jdk11u-dev" target="_blank" rel="noreferrer">openjdk/jdk11u-dev: https://openjdk.java.net/projects/jdk-updates/ (github.com)</a>)</p><p>[jdk](<a href="https://github.com/openjdk/jdk" target="_blank" rel="noreferrer">openjdk/jdk: JDK main-line development (github.com)</a>)</p></blockquote><h3 id="configuration" tabindex="-1">configuration <a class="header-anchor" href="#configuration" aria-label="Permalink to &quot;configuration&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>bash configure</span></span></code></pre></div><ul><li>mac需要安装 <code>Xcode</code></li><li>需要安装jdk</li></ul><h3 id="生成compilation-database" tabindex="-1">生成Compilation Database <a class="header-anchor" href="#生成compilation-database" aria-label="Permalink to &quot;生成Compilation Database&quot;">​</a></h3><blockquote><p>解决CLion找不到头文件</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>make compile-commands</span></span></code></pre></div><h3 id="编译" tabindex="-1">编译 <a class="header-anchor" href="#编译" aria-label="Permalink to &quot;编译&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>make</span></span></code></pre></div><h3 id="导入到clion" tabindex="-1">导入到CLion <a class="header-anchor" href="#导入到clion" aria-label="Permalink to &quot;导入到CLion&quot;">​</a></h3><blockquote><p>通过<code>File -&gt; Open</code>功能,选中<code>${source_root}/build/macosx-***/compile_commands.json</code>,<code>As a project</code>打开,这样就导入了Compilation Database文件,接下来CLion开始进行索引。</p><p>这时候,你会发现你是看不到源码的,所以下面需要修改项目的根目录,通过<code>Tools -&gt; Compilation Database -&gt; Change Project Root</code>功能,选中你的源码目录,也就是<code>${source_root}</code>,这样设置就可以在CLion中看到源代码啦。</p></blockquote>',12),n=[s];function c(d,l,p,r,h,u){return o(),e("div",null,n)}const m=a(i,[["render",c]]);export{b as __pageData,m as default};
