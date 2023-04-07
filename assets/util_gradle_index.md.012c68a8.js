import{_ as s,c as a,o as n,U as l}from"./chunks/framework.6f6f51de.js";const m=JSON.parse('{"title":"gradle","description":"","frontmatter":{"title":"gradle"},"headers":[],"relativePath":"util/gradle/index.md","lastUpdated":1680861403000}'),e={name:"util/gradle/index.md"},o=l(`<h2 id="gradle" tabindex="-1">gradle <a class="header-anchor" href="#gradle" aria-label="Permalink to &quot;gradle&quot;">​</a></h2><h3 id="gradle代理" tabindex="-1">gradle代理 <a class="header-anchor" href="#gradle代理" aria-label="Permalink to &quot;gradle代理&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 构建时添加jvm参数</span></span>
<span class="line"><span style="color:#A6ACCD;"># socks</span></span>
<span class="line"><span style="color:#A6ACCD;">-DsocksProxyHost=127.0.0.1 </span></span>
<span class="line"><span style="color:#A6ACCD;">-DsocksProxyPort=7777</span></span>
<span class="line"><span style="color:#A6ACCD;"># http</span></span>
<span class="line"><span style="color:#A6ACCD;">-Dhttp.proxyPort=8080</span></span>
<span class="line"><span style="color:#A6ACCD;">-Dhttp.proxyHost=127.0.0.1</span></span>
<span class="line"><span style="color:#A6ACCD;"># https</span></span>
<span class="line"><span style="color:#A6ACCD;">-Dhttps.proxyPort=8080</span></span>
<span class="line"><span style="color:#A6ACCD;">-Dhttps.proxyHost=127.0.0.1</span></span></code></pre></div><h3 id="跳过测试" tabindex="-1">跳过测试 <a class="header-anchor" href="#跳过测试" aria-label="Permalink to &quot;跳过测试&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">build -x test</span></span></code></pre></div><h3 id="lombok" tabindex="-1">lombok <a class="header-anchor" href="#lombok" aria-label="Permalink to &quot;lombok&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">dependencies {</span></span>
<span class="line"><span style="color:#A6ACCD;">	compileOnly &#39;org.projectlombok:lombok:1.18.20&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">	annotationProcessor &#39;org.projectlombok:lombok:1.18.20&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">	testCompileOnly &#39;org.projectlombok:lombok:1.18.20&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">	testAnnotationProcessor &#39;org.projectlombok:lombok:1.18.20&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div>`,7),t=[o];function p(r,c,i,d,C,h){return n(),a("div",null,t)}const y=s(e,[["render",p]]);export{m as __pageData,y as default};
