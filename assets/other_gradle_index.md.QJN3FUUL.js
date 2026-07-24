import{gt as e,nt as t,s as n,tt as r}from"./chunks/framework.BqU7tCwc.js";var i=JSON.parse(`{"title":"gradle","description":"","frontmatter":{"title":"gradle"},"headers":[],"relativePath":"other/gradle/index.md","filePath":"other/gradle/index.md","lastUpdated":1784887501000}`),a={name:`other/gradle/index.md`};function o(n,i,a,o,s,c){return e(),r(`div`,null,[...i[0]||=[t(`<h2 id="gradle" tabindex="-1">gradle <a class="header-anchor" href="#gradle" aria-label="Permalink to “gradle”">​</a></h2><h2 id="gradle配置国内镜像" tabindex="-1">gradle配置国内镜像 <a class="header-anchor" href="#gradle配置国内镜像" aria-label="Permalink to “gradle配置国内镜像”">​</a></h2><blockquote><p>对于 gradle 的配置文件。</p><p>gradle-wrapper.properties</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>distributionUrl=https\\://mirrors.cloud.tencent.com/gradle/gradle-8.8-bin.zip</span></span></code></pre></div><p>对所有项目生效，在\${USER_HOME}/.gradle/下创建init.gradle文件</p><p><a href="https://docs.gradle.org/current/userguide/init_scripts.html#sec:using_an_init_script" target="_blank" rel="noreferrer">https://docs.gradle.org/current/userguide/init_scripts.html#sec:using_an_init_script</a></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>allprojects{</span></span>
<span class="line"><span>    repositories {</span></span>
<span class="line"><span>        def ALIYUN_REPOSITORY_URL = &#39;https://maven.aliyun.com/repository/public/&#39;</span></span>
<span class="line"><span>        def ALIYUN_JCENTER_URL = &#39;https://maven.aliyun.com/repository/jcenter/&#39;</span></span>
<span class="line"><span>        def ALIYUN_GOOGLE_URL = &#39;https://maven.aliyun.com/repository/google/&#39;</span></span>
<span class="line"><span>        def ALIYUN_GRADLE_PLUGIN_URL = &#39;https://maven.aliyun.com/repository/gradle-plugin/&#39;</span></span>
<span class="line"><span>        all { ArtifactRepository repo -&gt;</span></span>
<span class="line"><span>            if(repo instanceof MavenArtifactRepository){</span></span>
<span class="line"><span>                def url = repo.url.toString()</span></span>
<span class="line"><span>                if (url.startsWith(&#39;https://repo1.maven.org/maven2/&#39;)) {</span></span>
<span class="line"><span>                    project.logger.lifecycle &quot;Repository \${repo.url} replaced by $ALIYUN_REPOSITORY_URL.&quot;</span></span>
<span class="line"><span>                    remove repo</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                if (url.startsWith(&#39;https://repo.maven.org/maven2/&#39;)) {</span></span>
<span class="line"><span>                    project.logger.lifecycle &quot;Repository \${repo.url} replaced by $ALIYUN_REPOSITORY_URL.&quot;</span></span>
<span class="line"><span>                    remove repo</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                if (url.startsWith(&#39;https://jcenter.bintray.com/&#39;)) {</span></span>
<span class="line"><span>                    project.logger.lifecycle &quot;Repository \${repo.url} replaced by $ALIYUN_JCENTER_URL.&quot;</span></span>
<span class="line"><span>                    remove repo</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                if (url.startsWith(&#39;https://dl.google.com/dl/android/maven2/&#39;)) {</span></span>
<span class="line"><span>                    project.logger.lifecycle &quot;Repository \${repo.url} replaced by $ALIYUN_GOOGLE_URL.&quot;</span></span>
<span class="line"><span>                    remove repo</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                if (url.startsWith(&#39;https://plugins.gradle.org/m2/&#39;)) {</span></span>
<span class="line"><span>                    project.logger.lifecycle &quot;Repository \${repo.url} replaced by $ALIYUN_GRADLE_PLUGIN_URL.&quot;</span></span>
<span class="line"><span>                    remove repo</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        maven { url ALIYUN_REPOSITORY_URL }</span></span>
<span class="line"><span>        maven { url ALIYUN_JCENTER_URL }</span></span>
<span class="line"><span>        maven { url ALIYUN_GOOGLE_URL }</span></span>
<span class="line"><span>        maven { url ALIYUN_GRADLE_PLUGIN_URL }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="gradle代理" tabindex="-1">gradle代理 <a class="header-anchor" href="#gradle代理" aria-label="Permalink to “gradle代理”">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 构建时添加jvm参数</span></span>
<span class="line"><span># socks</span></span>
<span class="line"><span>-DsocksProxyHost=127.0.0.1 </span></span>
<span class="line"><span>-DsocksProxyPort=7777</span></span>
<span class="line"><span># http</span></span>
<span class="line"><span>-Dhttp.proxyPort=8080</span></span>
<span class="line"><span>-Dhttp.proxyHost=127.0.0.1</span></span>
<span class="line"><span># https</span></span>
<span class="line"><span>-Dhttps.proxyPort=8080</span></span>
<span class="line"><span>-Dhttps.proxyHost=127.0.0.1</span></span></code></pre></div><h3 id="跳过测试" tabindex="-1">跳过测试 <a class="header-anchor" href="#跳过测试" aria-label="Permalink to “跳过测试”">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>build -x test</span></span></code></pre></div><h3 id="跳过失败" tabindex="-1">跳过失败 <a class="header-anchor" href="#跳过失败" aria-label="Permalink to “跳过失败”">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>build --continue</span></span></code></pre></div>`,13)]])}var s=n(a,[[`render`,o]]);export{i as __pageData,s as default};