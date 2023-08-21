import{_ as s,o as a,c as n,S as t}from"./chunks/framework.1603d207.js";const m=JSON.parse('{"title":"maven","description":"","frontmatter":{"title":"maven"},"headers":[],"relativePath":"java/other/maven.md","filePath":"java/other/maven.md","lastUpdated":1692600405000}'),l={name:"java/other/maven.md"},e=t(`<h2 id="备忘单" tabindex="-1">备忘单 <a class="header-anchor" href="#备忘单" aria-label="Permalink to &quot;备忘单&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">#	打包跳过编译失败</span></span>
<span class="line"><span style="color:#A6ACCD;">mvn clean package -DskipTests --fail-never</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 编译时测试失败不阻断</span></span>
<span class="line"><span style="color:#A6ACCD;">mvn clean package -Dmaven.test.failure.ignore=true </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 打包是不编译测试代码,也不执行</span></span>
<span class="line"><span style="color:#A6ACCD;">mvn clean package -Dmaven.test.skip=true  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 编译测试类,但不运行</span></span>
<span class="line"><span style="color:#A6ACCD;">mvn clean package  -DskipTests </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 只执行当前目录的，不对子目录进行</span></span>
<span class="line"><span style="color:#A6ACCD;">mvn clean package --non-resolvable</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 指定环境</span></span>
<span class="line"><span style="color:#A6ACCD;">mvn clean package -P test</span></span></code></pre></div><p>pom配置</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;properties&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		 &lt;!--跳过checkstyle--&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;checkstyle.skip&gt;true&lt;/checkstyle.skip&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;!--使用时间--&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">         &lt;timestamp&gt;\${maven.build.timestamp}&lt;/timestamp&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;maven.build.timestamp.format&gt;yyyy-MM-dd&#39;T&#39;HH-mm-ss&lt;/maven.build.timestamp.format&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"> &lt;/properties&gt;</span></span></code></pre></div><h2 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h2><h4 id="使用maven自动将源码打包并发布" tabindex="-1">使用maven自动将源码打包并发布 <a class="header-anchor" href="#使用maven自动将源码打包并发布" aria-label="Permalink to &quot;使用maven自动将源码打包并发布&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- Source attach plugin --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;plugin&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;artifactId&gt;maven-source-plugin&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;executions&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;execution&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;id&gt;attach-sources&lt;/id&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;goals&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;goal&gt;jar&lt;/goal&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;/goals&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/execution&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/executions&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/plugin&gt;</span></span></code></pre></div><p>注意：在多项目构建中，将source-plugin置于顶层或parent的pom中并不会发挥作用，必须置于具体项目的pom中。</p><hr><h4 id="获取git信息" tabindex="-1">获取git信息 <a class="header-anchor" href="#获取git信息" aria-label="Permalink to &quot;获取git信息&quot;">​</a></h4><blockquote><p>使用插件 <a href="https://github.com/git-commit-id/git-commit-id-maven-plugin" target="_blank" rel="noreferrer">git-commit-id/git-commit-id-maven-plugin</a></p><p>5.0 开始不支持<code>jdk1.8</code>了，而且变了 <code>groupId</code>和 <code>artifactId</code>。</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;plugin&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!--                &lt;groupId&gt;pl.project13.maven&lt;/groupId&gt;--&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!--                &lt;artifactId&gt;git-commit-id-plugin&lt;/artifactId&gt;--&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;!--                &lt;version&gt;4.0.5&lt;/version&gt;--&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;groupId&gt;io.github.git-commit-id&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;artifactId&gt;git-commit-id-maven-plugin&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;version&gt;5.0.0&lt;/version&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;executions&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    &lt;execution&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        &lt;goals&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                            &lt;goal&gt;revision&lt;/goal&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        &lt;/goals&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    &lt;/execution&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;/executions&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;configuration&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    &lt;dateFormat&gt;yyyyMMdd-HHmmss&lt;/dateFormat&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    &lt;prefix&gt;git&lt;/prefix&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    &lt;verbose&gt;true&lt;/verbose&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    &lt;generateGitPropertiesFile&gt;true&lt;/generateGitPropertiesFile&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    &lt;generateGitPropertiesFilename&gt;\${project.build.outputDirectory}/git.properties</span></span>
<span class="line"><span style="color:#A6ACCD;">                    &lt;/generateGitPropertiesFilename&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;/configuration&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;/plugin&gt;</span></span></code></pre></div><p>默认的参数</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">git.tags=\${git.tags}</span></span>
<span class="line"><span style="color:#A6ACCD;">git.branch=\${git.branch}</span></span>
<span class="line"><span style="color:#A6ACCD;">git.local.branch.ahead=\${git.local.branch.ahead}</span></span>
<span class="line"><span style="color:#A6ACCD;">git.local.branch.behind=\${git.local.branch.behind}</span></span>
<span class="line"><span style="color:#A6ACCD;">git.dirty=\${git.dirty}</span></span>
<span class="line"><span style="color:#A6ACCD;">git.remote.origin.url=\${git.remote.origin.url}</span></span>
<span class="line"><span style="color:#A6ACCD;">  git.commit.id=\${git.commit.id}</span></span>
<span class="line"><span style="color:#A6ACCD;">  OR (depends on commitIdGenerationMode)</span></span>
<span class="line"><span style="color:#A6ACCD;">  git.commit.id.full=\${git.commit.id.full}</span></span>
<span class="line"><span style="color:#A6ACCD;">git.commit.id.abbrev=\${git.commit.id.abbrev}</span></span>
<span class="line"><span style="color:#A6ACCD;">git.commit.id.describe=\${git.commit.id.describe}</span></span>
<span class="line"><span style="color:#A6ACCD;">git.commit.id.describe-short=\${git.commit.id.describe-short}</span></span>
<span class="line"><span style="color:#A6ACCD;">git.commit.user.name=\${git.commit.user.name}</span></span>
<span class="line"><span style="color:#A6ACCD;">git.commit.user.email=\${git.commit.user.email}</span></span>
<span class="line"><span style="color:#A6ACCD;">git.commit.message.full=\${git.commit.message.full}</span></span>
<span class="line"><span style="color:#A6ACCD;">git.commit.message.short=\${git.commit.message.short}</span></span>
<span class="line"><span style="color:#A6ACCD;">git.commit.time=\${git.commit.time}</span></span>
<span class="line"><span style="color:#A6ACCD;">git.closest.tag.name=\${git.closest.tag.name}</span></span>
<span class="line"><span style="color:#A6ACCD;">git.closest.tag.commit.count=\${git.closest.tag.commit.count}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git.build.user.name=\${git.build.user.name}</span></span>
<span class="line"><span style="color:#A6ACCD;">git.build.user.email=\${git.build.user.email}</span></span>
<span class="line"><span style="color:#A6ACCD;">git.build.time=\${git.build.time}</span></span>
<span class="line"><span style="color:#A6ACCD;">git.build.host=\${git.build.host}</span></span>
<span class="line"><span style="color:#A6ACCD;">git.build.version=\${git.build.version}</span></span>
<span class="line"><span style="color:#A6ACCD;">git.build.number=\${git.build.number}</span></span>
<span class="line"><span style="color:#A6ACCD;">git.build.number.unique=\${git.build.number.unique}</span></span></code></pre></div><hr><h4 id="版本号范围写法" tabindex="-1">版本号范围写法 <a class="header-anchor" href="#版本号范围写法" aria-label="Permalink to &quot;版本号范围写法&quot;">​</a></h4><table><thead><tr><th>范围</th><th>意义</th></tr></thead><tbody><tr><td>1.0</td><td>x &gt;= 1.0 * 1.0 的默认 Maven 含义是所有 （，），但建议使用 1.0。显然，这不能在这里强制实施版本，因此它已被重新定义为最小版本。</td></tr><tr><td>(,1.0]</td><td>x &lt;= 1.0</td></tr><tr><td>(,1.0)</td><td>x &lt; 1.0</td></tr><tr><td>[1.0]</td><td>x = 1.0</td></tr><tr><td>[1.0,)</td><td>x &gt;= 1.0</td></tr><tr><td>(1.0,)</td><td>x &gt; 1.0</td></tr><tr><td>(1.0,2.0)</td><td>1.0 &lt; x &lt; 2.0</td></tr><tr><td>[1.0,2.0]</td><td>1.0 &lt;= x &lt;= 2.0</td></tr><tr><td>(,1.0],[1.2,)</td><td>x &lt;= 1.0 或 x &gt;= 1.2。多个集是逗号分隔的</td></tr><tr><td>(,1.1),(1.1,)</td><td>x ！ = 1.1</td></tr></tbody></table><hr><h4 id="子项目中排除掉定义在parent中的插件" tabindex="-1">子项目中排除掉定义在Parent中的插件 <a class="header-anchor" href="#子项目中排除掉定义在parent中的插件" aria-label="Permalink to &quot;子项目中排除掉定义在Parent中的插件&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;plugin&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;artifactId&gt;maven-xxx-plugin&lt;/artifactId&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;executions&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		&lt;!--加一个execution , phase设置成空--&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		&lt;execution&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">			&lt;phase/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		&lt;/execution&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		&lt;!--加一个有自己id的execution，id随便，其余可以不写--&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		&lt;execution&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">			&lt;id&gt;myid&lt;/id&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		&lt;/execution&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	&lt;/executions&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/plugin&gt;</span></span></code></pre></div><h4 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h4><h4 id="使用maven运行main-方法" tabindex="-1">使用Maven运行main 方法 <a class="header-anchor" href="#使用maven运行main-方法" aria-label="Permalink to &quot;使用Maven运行main 方法&quot;">​</a></h4><blockquote><p><a href="https://github.com/mojohaus/exec-maven-plugin" target="_blank" rel="noreferrer">mojohaus/exec-maven-plugin: Exec Maven Plugin (github.com)</a></p><p><a href="https://www.mojohaus.org/exec-maven-plugin/" target="_blank" rel="noreferrer">Exec Maven Plugin – Introduction (mojohaus.org)</a></p></blockquote>`,23),p=[e];function o(i,c,r,g,C,A){return a(),n("div",null,p)}const u=s(l,[["render",o]]);export{m as __pageData,u as default};
