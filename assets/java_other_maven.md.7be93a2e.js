import{_ as a,c as s,o as n,a as t}from"./app.bab73cad.js";const h=JSON.parse('{"title":"maven","description":"","frontmatter":{"title":"maven"},"headers":[{"level":2,"title":"备忘单","slug":"备忘单","link":"#备忘单","children":[]},{"level":2,"title":"其他","slug":"其他","link":"#其他","children":[]}],"relativePath":"java/other/maven.md","lastUpdated":1677655177000}'),e={name:"java/other/maven.md"},l=t(`<h2 id="备忘单" tabindex="-1">备忘单 <a class="header-anchor" href="#备忘单" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">#	打包跳过编译失败</span></span>
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
<span class="line"><span style="color:#A6ACCD;">mvn clean package -P test</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-hidden="true">#</a></h2><h4 id="使用maven自动将源码打包并发布" tabindex="-1">使用maven自动将源码打包并发布 <a class="header-anchor" href="#使用maven自动将源码打包并发布" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">&lt;!-- Source attach plugin --&gt;</span></span>
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
<span class="line"><span style="color:#A6ACCD;">&lt;/plugin&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>注意：在多项目构建中，将source-plugin置于顶层或parent的pom中并不会发挥作用，必须置于具体项目的pom中。</p><h4 id="版本号范围写法" tabindex="-1">版本号范围写法 <a class="header-anchor" href="#版本号范围写法" aria-hidden="true">#</a></h4><table><thead><tr><th>范围</th><th>意义</th></tr></thead><tbody><tr><td>1.0</td><td>x &gt;= 1.0 * 1.0 的默认 Maven 含义是所有 （，），但建议使用 1.0。显然，这不能在这里强制实施版本，因此它已被重新定义为最小版本。</td></tr><tr><td>(,1.0]</td><td>x &lt;= 1.0</td></tr><tr><td>(,1.0)</td><td>x &lt; 1.0</td></tr><tr><td>[1.0]</td><td>x = 1.0</td></tr><tr><td>[1.0,)</td><td>x &gt;= 1.0</td></tr><tr><td>(1.0,)</td><td>x &gt; 1.0</td></tr><tr><td>(1.0,2.0)</td><td>1.0 &lt; x &lt; 2.0</td></tr><tr><td>[1.0,2.0]</td><td>1.0 &lt;= x &lt;= 2.0</td></tr><tr><td>(,1.0],[1.2,)</td><td>x &lt;= 1.0 或 x &gt;= 1.2。多个集是逗号分隔的</td></tr><tr><td>(,1.1),(1.1,)</td><td>x ！ = 1.1</td></tr></tbody></table><h4 id="子项目中排除掉定义在parent中的插件" tabindex="-1">子项目中排除掉定义在Parent中的插件 <a class="header-anchor" href="#子项目中排除掉定义在parent中的插件" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">&lt;plugin&gt;</span></span>
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
<span class="line"><span style="color:#A6ACCD;">&lt;/plugin&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="跳过checkstyle" tabindex="-1">跳过checkstyle <a class="header-anchor" href="#跳过checkstyle" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"> &lt;properties&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;checkstyle.skip&gt;true&lt;/checkstyle.skip&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"> &lt;/properties&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="使用maven运行main-方法" tabindex="-1">使用Maven运行main 方法 <a class="header-anchor" href="#使用maven运行main-方法" aria-hidden="true">#</a></h4><blockquote><p><a href="https://github.com/mojohaus/exec-maven-plugin" target="_blank" rel="noreferrer">mojohaus/exec-maven-plugin: Exec Maven Plugin (github.com)</a></p><p><a href="https://www.mojohaus.org/exec-maven-plugin/" target="_blank" rel="noreferrer">Exec Maven Plugin – Introduction (mojohaus.org)</a></p></blockquote>`,14),p=[l];function c(o,r,i,d,C,A){return n(),s("div",null,p)}const u=a(e,[["render",c]]);export{h as __pageData,u as default};
