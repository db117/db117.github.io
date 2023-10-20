import{_ as s,o as e,c as n,Q as a}from"./chunks/framework.54cab62e.js";const h=JSON.parse('{"title":"gradle","description":"","frontmatter":{"title":"gradle"},"headers":[],"relativePath":"util/gradle/index.md","filePath":"util/gradle/index.md","lastUpdated":1697773070000}'),l={name:"util/gradle/index.md"},p=a(`<h2 id="gradle" tabindex="-1">gradle <a class="header-anchor" href="#gradle" aria-label="Permalink to &quot;gradle&quot;">​</a></h2><h2 id="gradle配置国内镜像" tabindex="-1">gradle配置国内镜像 <a class="header-anchor" href="#gradle配置国内镜像" aria-label="Permalink to &quot;gradle配置国内镜像&quot;">​</a></h2><p>对所有项目生效，在\${USER_HOME}/.gradle/下创建init.gradle文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">allprojects{</span></span>
<span class="line"><span style="color:#e1e4e8;">    repositories {</span></span>
<span class="line"><span style="color:#e1e4e8;">        def ALIYUN_REPOSITORY_URL = &#39;https://maven.aliyun.com/repository/public/&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">        def ALIYUN_JCENTER_URL = &#39;https://maven.aliyun.com/repository/jcenter/&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">        def ALIYUN_GOOGLE_URL = &#39;https://maven.aliyun.com/repository/google/&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">        def ALIYUN_GRADLE_PLUGIN_URL = &#39;https://maven.aliyun.com/repository/gradle-plugin/&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">        all { ArtifactRepository repo -&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">            if(repo instanceof MavenArtifactRepository){</span></span>
<span class="line"><span style="color:#e1e4e8;">                def url = repo.url.toString()</span></span>
<span class="line"><span style="color:#e1e4e8;">                if (url.startsWith(&#39;https://repo1.maven.org/maven2/&#39;)) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                    project.logger.lifecycle &quot;Repository \${repo.url} replaced by $ALIYUN_REPOSITORY_URL.&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    remove repo</span></span>
<span class="line"><span style="color:#e1e4e8;">                }</span></span>
<span class="line"><span style="color:#e1e4e8;">                if (url.startsWith(&#39;https://repo.maven.org/maven2/&#39;)) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                    project.logger.lifecycle &quot;Repository \${repo.url} replaced by $ALIYUN_REPOSITORY_URL.&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    remove repo</span></span>
<span class="line"><span style="color:#e1e4e8;">                }</span></span>
<span class="line"><span style="color:#e1e4e8;">                if (url.startsWith(&#39;https://jcenter.bintray.com/&#39;)) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                    project.logger.lifecycle &quot;Repository \${repo.url} replaced by $ALIYUN_JCENTER_URL.&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    remove repo</span></span>
<span class="line"><span style="color:#e1e4e8;">                }</span></span>
<span class="line"><span style="color:#e1e4e8;">                if (url.startsWith(&#39;https://dl.google.com/dl/android/maven2/&#39;)) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                    project.logger.lifecycle &quot;Repository \${repo.url} replaced by $ALIYUN_GOOGLE_URL.&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    remove repo</span></span>
<span class="line"><span style="color:#e1e4e8;">                }</span></span>
<span class="line"><span style="color:#e1e4e8;">                if (url.startsWith(&#39;https://plugins.gradle.org/m2/&#39;)) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                    project.logger.lifecycle &quot;Repository \${repo.url} replaced by $ALIYUN_GRADLE_PLUGIN_URL.&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    remove repo</span></span>
<span class="line"><span style="color:#e1e4e8;">                }</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">        maven { url ALIYUN_REPOSITORY_URL }</span></span>
<span class="line"><span style="color:#e1e4e8;">        maven { url ALIYUN_JCENTER_URL }</span></span>
<span class="line"><span style="color:#e1e4e8;">        maven { url ALIYUN_GOOGLE_URL }</span></span>
<span class="line"><span style="color:#e1e4e8;">        maven { url ALIYUN_GRADLE_PLUGIN_URL }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">allprojects{</span></span>
<span class="line"><span style="color:#24292e;">    repositories {</span></span>
<span class="line"><span style="color:#24292e;">        def ALIYUN_REPOSITORY_URL = &#39;https://maven.aliyun.com/repository/public/&#39;</span></span>
<span class="line"><span style="color:#24292e;">        def ALIYUN_JCENTER_URL = &#39;https://maven.aliyun.com/repository/jcenter/&#39;</span></span>
<span class="line"><span style="color:#24292e;">        def ALIYUN_GOOGLE_URL = &#39;https://maven.aliyun.com/repository/google/&#39;</span></span>
<span class="line"><span style="color:#24292e;">        def ALIYUN_GRADLE_PLUGIN_URL = &#39;https://maven.aliyun.com/repository/gradle-plugin/&#39;</span></span>
<span class="line"><span style="color:#24292e;">        all { ArtifactRepository repo -&gt;</span></span>
<span class="line"><span style="color:#24292e;">            if(repo instanceof MavenArtifactRepository){</span></span>
<span class="line"><span style="color:#24292e;">                def url = repo.url.toString()</span></span>
<span class="line"><span style="color:#24292e;">                if (url.startsWith(&#39;https://repo1.maven.org/maven2/&#39;)) {</span></span>
<span class="line"><span style="color:#24292e;">                    project.logger.lifecycle &quot;Repository \${repo.url} replaced by $ALIYUN_REPOSITORY_URL.&quot;</span></span>
<span class="line"><span style="color:#24292e;">                    remove repo</span></span>
<span class="line"><span style="color:#24292e;">                }</span></span>
<span class="line"><span style="color:#24292e;">                if (url.startsWith(&#39;https://repo.maven.org/maven2/&#39;)) {</span></span>
<span class="line"><span style="color:#24292e;">                    project.logger.lifecycle &quot;Repository \${repo.url} replaced by $ALIYUN_REPOSITORY_URL.&quot;</span></span>
<span class="line"><span style="color:#24292e;">                    remove repo</span></span>
<span class="line"><span style="color:#24292e;">                }</span></span>
<span class="line"><span style="color:#24292e;">                if (url.startsWith(&#39;https://jcenter.bintray.com/&#39;)) {</span></span>
<span class="line"><span style="color:#24292e;">                    project.logger.lifecycle &quot;Repository \${repo.url} replaced by $ALIYUN_JCENTER_URL.&quot;</span></span>
<span class="line"><span style="color:#24292e;">                    remove repo</span></span>
<span class="line"><span style="color:#24292e;">                }</span></span>
<span class="line"><span style="color:#24292e;">                if (url.startsWith(&#39;https://dl.google.com/dl/android/maven2/&#39;)) {</span></span>
<span class="line"><span style="color:#24292e;">                    project.logger.lifecycle &quot;Repository \${repo.url} replaced by $ALIYUN_GOOGLE_URL.&quot;</span></span>
<span class="line"><span style="color:#24292e;">                    remove repo</span></span>
<span class="line"><span style="color:#24292e;">                }</span></span>
<span class="line"><span style="color:#24292e;">                if (url.startsWith(&#39;https://plugins.gradle.org/m2/&#39;)) {</span></span>
<span class="line"><span style="color:#24292e;">                    project.logger.lifecycle &quot;Repository \${repo.url} replaced by $ALIYUN_GRADLE_PLUGIN_URL.&quot;</span></span>
<span class="line"><span style="color:#24292e;">                    remove repo</span></span>
<span class="line"><span style="color:#24292e;">                }</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        maven { url ALIYUN_REPOSITORY_URL }</span></span>
<span class="line"><span style="color:#24292e;">        maven { url ALIYUN_JCENTER_URL }</span></span>
<span class="line"><span style="color:#24292e;">        maven { url ALIYUN_GOOGLE_URL }</span></span>
<span class="line"><span style="color:#24292e;">        maven { url ALIYUN_GRADLE_PLUGIN_URL }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="gradle代理" tabindex="-1">gradle代理 <a class="header-anchor" href="#gradle代理" aria-label="Permalink to &quot;gradle代理&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 构建时添加jvm参数</span></span>
<span class="line"><span style="color:#e1e4e8;"># socks</span></span>
<span class="line"><span style="color:#e1e4e8;">-DsocksProxyHost=127.0.0.1 </span></span>
<span class="line"><span style="color:#e1e4e8;">-DsocksProxyPort=7777</span></span>
<span class="line"><span style="color:#e1e4e8;"># http</span></span>
<span class="line"><span style="color:#e1e4e8;">-Dhttp.proxyPort=8080</span></span>
<span class="line"><span style="color:#e1e4e8;">-Dhttp.proxyHost=127.0.0.1</span></span>
<span class="line"><span style="color:#e1e4e8;"># https</span></span>
<span class="line"><span style="color:#e1e4e8;">-Dhttps.proxyPort=8080</span></span>
<span class="line"><span style="color:#e1e4e8;">-Dhttps.proxyHost=127.0.0.1</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 构建时添加jvm参数</span></span>
<span class="line"><span style="color:#24292e;"># socks</span></span>
<span class="line"><span style="color:#24292e;">-DsocksProxyHost=127.0.0.1 </span></span>
<span class="line"><span style="color:#24292e;">-DsocksProxyPort=7777</span></span>
<span class="line"><span style="color:#24292e;"># http</span></span>
<span class="line"><span style="color:#24292e;">-Dhttp.proxyPort=8080</span></span>
<span class="line"><span style="color:#24292e;">-Dhttp.proxyHost=127.0.0.1</span></span>
<span class="line"><span style="color:#24292e;"># https</span></span>
<span class="line"><span style="color:#24292e;">-Dhttps.proxyPort=8080</span></span>
<span class="line"><span style="color:#24292e;">-Dhttps.proxyHost=127.0.0.1</span></span></code></pre></div><h3 id="跳过测试" tabindex="-1">跳过测试 <a class="header-anchor" href="#跳过测试" aria-label="Permalink to &quot;跳过测试&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">build -x test</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">build -x test</span></span></code></pre></div><h3 id="lombok" tabindex="-1">lombok <a class="header-anchor" href="#lombok" aria-label="Permalink to &quot;lombok&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">dependencies {</span></span>
<span class="line"><span style="color:#e1e4e8;">	compileOnly &#39;org.projectlombok:lombok:1.18.20&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">	annotationProcessor &#39;org.projectlombok:lombok:1.18.20&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	testCompileOnly &#39;org.projectlombok:lombok:1.18.20&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">	testAnnotationProcessor &#39;org.projectlombok:lombok:1.18.20&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">dependencies {</span></span>
<span class="line"><span style="color:#24292e;">	compileOnly &#39;org.projectlombok:lombok:1.18.20&#39;</span></span>
<span class="line"><span style="color:#24292e;">	annotationProcessor &#39;org.projectlombok:lombok:1.18.20&#39;</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	testCompileOnly &#39;org.projectlombok:lombok:1.18.20&#39;</span></span>
<span class="line"><span style="color:#24292e;">	testAnnotationProcessor &#39;org.projectlombok:lombok:1.18.20&#39;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div>`,10),o=[p];function t(r,c,i,y,d,u){return e(),n("div",null,o)}const m=s(l,[["render",t]]);export{h as __pageData,m as default};
