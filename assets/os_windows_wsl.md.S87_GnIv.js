import{_ as s,c as a,o as n,a5 as e}from"./chunks/framework.BX4HWtES.js";const g=JSON.parse('{"title":"wsl","description":"","frontmatter":{"title":"wsl"},"headers":[],"relativePath":"os/windows/wsl.md","filePath":"os/windows/wsl.md","lastUpdated":1721877623000}'),p={name:"os/windows/wsl.md"},l=e(`<h4 id="wsl2-参考的对象类型不支持尝试的操作" tabindex="-1">WSL2 参考的对象类型不支持尝试的操作 <a class="header-anchor" href="#wsl2-参考的对象类型不支持尝试的操作" aria-label="Permalink to &quot;WSL2  参考的对象类型不支持尝试的操作&quot;">​</a></h4><p>在管理员模式下运行命令后重启即可</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>netsh winsock reset</span></span></code></pre></div><p>在windows资源管理器打开wsl文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>cd /home</span></span>
<span class="line"><span>explorer.exe .</span></span></code></pre></div><h3 id="wsl2-配置文件" tabindex="-1">wsl2 配置文件 <a class="header-anchor" href="#wsl2-配置文件" aria-label="Permalink to &quot;wsl2 配置文件&quot;">​</a></h3><blockquote><p><a href="https://learn.microsoft.com/en-us/windows/wsl/wsl-config#wslconfig" target="_blank" rel="noreferrer">Advanced settings configuration in WSL | Microsoft Learn</a></p></blockquote><p>路径位置<code>C:\\Users\\&lt;UserName&gt;\\.wslconfig</code>，如果找不到也可以在<code>Win+R</code>，然后输入<code>%userprofile%</code>回车即可</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># Settings apply across all Linux distros running on WSL 2</span></span>
<span class="line"><span>[wsl2]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 限制内存</span></span>
<span class="line"><span>memory=4GB </span></span>
<span class="line"><span></span></span>
<span class="line"><span># 限制 CPU</span></span>
<span class="line"><span>processors=2</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 设置交换区大小，默认可用内存的 25%</span></span>
<span class="line"><span>swap=8GB</span></span>
<span class="line"><span></span></span>
<span class="line"><span># swapfile 文件路径, 默认 %USERPROFILE%\\AppData\\Local\\Temp\\swap.vhdx</span></span>
<span class="line"><span>swapfile=C:\\\\temp\\\\wsl-swap.vhdx</span></span></code></pre></div>`,9),t=[l];function i(o,c,d,r,h,w){return n(),a("div",null,t)}const _=s(p,[["render",i]]);export{g as __pageData,_ as default};
