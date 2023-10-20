import{_ as s,o as a,c as e,Q as l}from"./chunks/framework.54cab62e.js";const m=JSON.parse('{"title":"制作win服务","description":"","frontmatter":{"title":"制作win服务"},"headers":[],"relativePath":"os/windows/winServer.md","filePath":"os/windows/winServer.md","lastUpdated":1697773070000}'),n={name:"os/windows/winServer.md"},t=l(`<h2 id="需要下载软件" tabindex="-1">需要下载软件 <a class="header-anchor" href="#需要下载软件" aria-label="Permalink to &quot;需要下载软件&quot;">​</a></h2><ul><li><a href="https://github.com/kohsuke/winsw" target="_blank" rel="noreferrer">https://github.com/kohsuke/winsw</a></li><li>WinSW是一个可执行的二进制文件，可用于将自定义进程包装和管理为Windows服务。 下载安装包后，您可以重命名winsw.exe为任何名称，例如myService.exe。</li></ul><h2 id="配置xml" tabindex="-1">配置xml <a class="header-anchor" href="#配置xml" aria-label="Permalink to &quot;配置xml&quot;">​</a></h2><ul><li>实例为启动java -jar renren-admin.jar</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">    &lt;configuration&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">     </span></span>
<span class="line"><span style="color:#e1e4e8;">     &lt;!-- 服务的ID。在Windows系统中应该是唯一的--&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">     &lt;id&gt;scl_web&lt;/id&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">     &lt;!-- 显示服务的名称 --&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">     &lt;name&gt;scl_web&lt;/name&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">     &lt;!-- 服务描述 --&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">     &lt;description&gt;scl_web&lt;/description&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">     </span></span>
<span class="line"><span style="color:#e1e4e8;">     &lt;!-- 应该启动的可执行文件的路径 --&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">     &lt;executable&gt;java&lt;/executable&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">     &lt;arguments&gt;-jar renren-admin.jar&lt;/arguments&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">     &lt;logmode&gt;rotate&lt;/logmode&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">   </span></span>
<span class="line"><span style="color:#e1e4e8;">   &lt;/configuration&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">    &lt;configuration&gt;</span></span>
<span class="line"><span style="color:#24292e;">     </span></span>
<span class="line"><span style="color:#24292e;">     &lt;!-- 服务的ID。在Windows系统中应该是唯一的--&gt;</span></span>
<span class="line"><span style="color:#24292e;">     &lt;id&gt;scl_web&lt;/id&gt;</span></span>
<span class="line"><span style="color:#24292e;">     &lt;!-- 显示服务的名称 --&gt;</span></span>
<span class="line"><span style="color:#24292e;">     &lt;name&gt;scl_web&lt;/name&gt;</span></span>
<span class="line"><span style="color:#24292e;">     &lt;!-- 服务描述 --&gt;</span></span>
<span class="line"><span style="color:#24292e;">     &lt;description&gt;scl_web&lt;/description&gt;</span></span>
<span class="line"><span style="color:#24292e;">     </span></span>
<span class="line"><span style="color:#24292e;">     &lt;!-- 应该启动的可执行文件的路径 --&gt;</span></span>
<span class="line"><span style="color:#24292e;">     &lt;executable&gt;java&lt;/executable&gt;</span></span>
<span class="line"><span style="color:#24292e;">     &lt;arguments&gt;-jar renren-admin.jar&lt;/arguments&gt;</span></span>
<span class="line"><span style="color:#24292e;">     &lt;logmode&gt;rotate&lt;/logmode&gt;</span></span>
<span class="line"><span style="color:#24292e;">   </span></span>
<span class="line"><span style="color:#24292e;">   &lt;/configuration&gt;</span></span></code></pre></div><h2 id="安装服务" tabindex="-1">安装服务 <a class="header-anchor" href="#安装服务" aria-label="Permalink to &quot;安装服务&quot;">​</a></h2><ul><li>myService.exe install <ul><li>出现如下提示则成功创建服务<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">2018-09-02 17:38:32,595 INFO  - Installing the service with id &#39;scl_web&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">2018-09-02 17:38:32,595 INFO  - Installing the service with id &#39;scl_web&#39;</span></span></code></pre></div></li></ul></li><li>myService.exe 为自己修改的文件名称</li></ul><h2 id="其他操作" tabindex="-1">其他操作 <a class="header-anchor" href="#其他操作" aria-label="Permalink to &quot;其他操作&quot;">​</a></h2><ul><li><p>install</p><p>将服务安装到Windows服务控制器。此命令需要“ 安装指南”中描述的一些预备步骤。</p></li><li><p>uninstall</p><p>卸载服务。以上相反的操作。</p></li><li><p>start</p><p>开始服务。该服务必须已安装。</p></li><li><p>stop</p><p>停止服务</p></li><li><p>restart</p><p>重启服务。如果该服务当前未运行，则此命令的作用如下start。</p></li></ul><h2 id="检查服务的当前状态。" tabindex="-1">检查服务的当前状态。 <a class="header-anchor" href="#检查服务的当前状态。" aria-label="Permalink to &quot;检查服务的当前状态。&quot;">​</a></h2><ul><li>status 此命令将一行打印到控制台。 <ul><li><p>NonExistent</p><p>表示当前未安装该服务</p></li><li><p>Started</p><p>表示该服务当前正在运行</p></li><li><p>Stopped</p><p>表示该服务已安装但当前未运行。</p></li></ul></li></ul>`,11),p=[t];function i(o,c,r,d,g,u){return a(),e("div",null,p)}const y=s(n,[["render",i]]);export{m as __pageData,y as default};
