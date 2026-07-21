import{_ as s,o as n,c as p,ah as e}from"./chunks/framework.BM5zFche.js";const k=JSON.parse('{"title":"","description":"","frontmatter":{"0":"t","1":"i","2":"t","3":"l","4":"e","5":":","6":"常","7":"用","8":"软","9":"件"},"headers":[],"relativePath":"infrastructure/os/soft.md","filePath":"infrastructure/os/soft.md","lastUpdated":1784602594000}'),l={name:"infrastructure/os/soft.md"};function t(i,a,c,r,o,d){return n(),p("div",null,[...a[0]||(a[0]=[e(`<h4 id="sdkman" tabindex="-1">sdkman <a class="header-anchor" href="#sdkman" aria-label="Permalink to &quot;sdkman&quot;">​</a></h4><blockquote><p><a href="https://github.com/sdkman/sdkman-cli" target="_blank" rel="noreferrer">https://github.com/sdkman/sdkman-cli</a></p><p><a href="https://sdkman.io/" target="_blank" rel="noreferrer">https://sdkman.io/</a></p><p>一个开发工具管理</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 安装</span></span>
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
<span class="line"><span>sdk current</span></span></code></pre></div>`,3)])])}const h=s(l,[["render",t]]);export{k as __pageData,h as default};
