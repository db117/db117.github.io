import{gt as e,nt as t,s as n,tt as r}from"./chunks/framework.BqU7tCwc.js";var i=JSON.parse(`{"title":"","description":"","frontmatter":{"0":"t","1":"i","2":"t","3":"l","4":"e","5":":","6":"常","7":"用","8":"软","9":"件"},"headers":[],"relativePath":"infrastructure/os/soft.md","filePath":"infrastructure/os/soft.md","lastUpdated":1784882697000}`),a={name:`infrastructure/os/soft.md`};function o(n,i,a,o,s,c){return e(),r(`div`,null,[...i[0]||=[t(`<h4 id="sdkman" tabindex="-1">sdkman <a class="header-anchor" href="#sdkman" aria-label="Permalink to “sdkman”">​</a></h4><blockquote><p><a href="https://github.com/sdkman/sdkman-cli" target="_blank" rel="noreferrer">https://github.com/sdkman/sdkman-cli</a></p><p><a href="https://sdkman.io/" target="_blank" rel="noreferrer">https://sdkman.io/</a></p><p>一个开发工具管理</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 安装</span></span>
<span class="line"><span>curl -s &quot;https://get.sdkman.io&quot; | bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查看所有可以用的工具</span></span>
<span class="line"><span>sdk list</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 切换使用的版本</span></span>
<span class="line"><span>sdk use java 21.0.7-oracle</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查看所有的 java 版本</span></span>
<span class="line"><span>sdk list java</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 安装 java ,可以通过 tab 显示出所有可以使用的版本</span></span>
<span class="line"><span>sdk install java</span></span>
<span class="line"><span># 安装知道版本的 java</span></span>
<span class="line"><span>sdk install java 21.0.7-oracle</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 安装本地的 java</span></span>
<span class="line"><span>sdk install java 17-zulu /Library/Java/JavaVirtualMachines/zulu-17.jdk/Contents/Home</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 卸载</span></span>
<span class="line"><span>sdk uninstall java 17-zulu</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查看当前使用的版本</span></span>
<span class="line"><span>sdk current</span></span></code></pre></div>`,3)]])}var s=n(a,[[`render`,o]]);export{i as __pageData,s as default};