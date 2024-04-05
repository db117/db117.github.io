import{_ as s,c as a,o as n,a8 as p}from"./chunks/framework.n88ns4tz.js";const m=JSON.parse('{"title":"gradle","description":"","frontmatter":{"title":"gradle"},"headers":[],"relativePath":"util/gradle/index.md","filePath":"util/gradle/index.md","lastUpdated":1712323359000}'),e={name:"util/gradle/index.md"},l=p(`<h2 id="gradle" tabindex="-1">gradle <a class="header-anchor" href="#gradle" aria-label="Permalink to &quot;gradle&quot;">​</a></h2><h2 id="gradle配置国内镜像" tabindex="-1">gradle配置国内镜像 <a class="header-anchor" href="#gradle配置国内镜像" aria-label="Permalink to &quot;gradle配置国内镜像&quot;">​</a></h2><p>对所有项目生效，在\${USER_HOME}/.gradle/下创建init.gradle文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>allprojects{</span></span>
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
<span class="line"><span>}</span></span></code></pre></div><h3 id="gradle代理" tabindex="-1">gradle代理 <a class="header-anchor" href="#gradle代理" aria-label="Permalink to &quot;gradle代理&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 构建时添加jvm参数</span></span>
<span class="line"><span># socks</span></span>
<span class="line"><span>-DsocksProxyHost=127.0.0.1 </span></span>
<span class="line"><span>-DsocksProxyPort=7777</span></span>
<span class="line"><span># http</span></span>
<span class="line"><span>-Dhttp.proxyPort=8080</span></span>
<span class="line"><span>-Dhttp.proxyHost=127.0.0.1</span></span>
<span class="line"><span># https</span></span>
<span class="line"><span>-Dhttps.proxyPort=8080</span></span>
<span class="line"><span>-Dhttps.proxyHost=127.0.0.1</span></span></code></pre></div><h3 id="跳过测试" tabindex="-1">跳过测试 <a class="header-anchor" href="#跳过测试" aria-label="Permalink to &quot;跳过测试&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>build -x test</span></span></code></pre></div><h3 id="lombok" tabindex="-1">lombok <a class="header-anchor" href="#lombok" aria-label="Permalink to &quot;lombok&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>dependencies {</span></span>
<span class="line"><span>	compileOnly &#39;org.projectlombok:lombok:1.18.20&#39;</span></span>
<span class="line"><span>	annotationProcessor &#39;org.projectlombok:lombok:1.18.20&#39;</span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>	testCompileOnly &#39;org.projectlombok:lombok:1.18.20&#39;</span></span>
<span class="line"><span>	testAnnotationProcessor &#39;org.projectlombok:lombok:1.18.20&#39;</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,10),t=[l];function o(i,r,c,d,h,u){return n(),a("div",null,t)}const _=s(e,[["render",o]]);export{m as __pageData,_ as default};
