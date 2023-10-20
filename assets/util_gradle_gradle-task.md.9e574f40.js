import{_ as a,o as s,c as e,Q as n}from"./chunks/framework.54cab62e.js";const k=JSON.parse('{"title":"gradle-task","description":"","frontmatter":{"title":"gradle-task"},"headers":[],"relativePath":"util/gradle/gradle-task.md","filePath":"util/gradle/gradle-task.md","lastUpdated":1697773070000}'),l={name:"util/gradle/gradle-task.md"},r=n(`<h2 id="javaexec" tabindex="-1">JavaExec <a class="header-anchor" href="#javaexec" aria-label="Permalink to &quot;JavaExec&quot;">​</a></h2><blockquote><p><a href="https://docs.gradle.org/current/javadoc/org/gradle/api/tasks/JavaExec.html" target="_blank" rel="noreferrer"><code>JavaExec</code></a></p><p>就是执行java class的main方法</p></blockquote><h3 id="简单使用" tabindex="-1">简单使用 <a class="header-anchor" href="#简单使用" aria-label="Permalink to &quot;简单使用&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">plugins {</span></span>
<span class="line"><span style="color:#e1e4e8;">    id &#39;java&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">task runApp(type: JavaExec) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  classpath = sourceSets.main.runtimeClasspath</span></span>
<span class="line"><span style="color:#e1e4e8;">  mainClass = &#39;package.Main&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">  // main参数</span></span>
<span class="line"><span style="color:#e1e4e8;">  args &#39;appArg1&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 创建jar</span></span>
<span class="line"><span style="color:#e1e4e8;">jar {</span></span>
<span class="line"><span style="color:#e1e4e8;">  manifest {</span></span>
<span class="line"><span style="color:#e1e4e8;">    attributes(&#39;Main-Class&#39;: &#39;package.Main&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">task runExecutableJar(type: JavaExec) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  // 只能有一个jar存在</span></span>
<span class="line"><span style="color:#e1e4e8;">  classpath = files(tasks.jar)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  // main可以不定义</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  // main参数</span></span>
<span class="line"><span style="color:#e1e4e8;">  args &#39;appArg1&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">plugins {</span></span>
<span class="line"><span style="color:#24292e;">    id &#39;java&#39;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">task runApp(type: JavaExec) {</span></span>
<span class="line"><span style="color:#24292e;">  classpath = sourceSets.main.runtimeClasspath</span></span>
<span class="line"><span style="color:#24292e;">  mainClass = &#39;package.Main&#39;</span></span>
<span class="line"><span style="color:#24292e;">  // main参数</span></span>
<span class="line"><span style="color:#24292e;">  args &#39;appArg1&#39;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 创建jar</span></span>
<span class="line"><span style="color:#24292e;">jar {</span></span>
<span class="line"><span style="color:#24292e;">  manifest {</span></span>
<span class="line"><span style="color:#24292e;">    attributes(&#39;Main-Class&#39;: &#39;package.Main&#39;)</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">task runExecutableJar(type: JavaExec) {</span></span>
<span class="line"><span style="color:#24292e;">  // 只能有一个jar存在</span></span>
<span class="line"><span style="color:#24292e;">  classpath = files(tasks.jar)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  // main可以不定义</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  // main参数</span></span>
<span class="line"><span style="color:#24292e;">  args &#39;appArg1&#39;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h3><table><thead><tr><th>属性</th><th>描述</th></tr></thead><tbody><tr><td><a href="https://docs.gradle.org/current/dsl/org.gradle.api.tasks.JavaExec.html#org.gradle.api.tasks.JavaExec:allJvmArgs" target="_blank" rel="noreferrer"><code>allJvmArgs</code></a></td><td>用于启动进程的 JVM 的完整参数集</td></tr><tr><td><a href="https://docs.gradle.org/current/dsl/org.gradle.api.tasks.JavaExec.html#org.gradle.api.tasks.JavaExec:args" target="_blank" rel="noreferrer"><code>args</code></a></td><td>main方法参数</td></tr><tr><td><a href="https://docs.gradle.org/current/dsl/org.gradle.api.tasks.JavaExec.html#org.gradle.api.tasks.JavaExec:classpath" target="_blank" rel="noreferrer"><code>classpath</code></a></td><td>classpath</td></tr><tr><td><a href="https://docs.gradle.org/current/dsl/org.gradle.api.tasks.JavaExec.html#org.gradle.api.tasks.JavaExec:enableAssertions" target="_blank" rel="noreferrer"><code>enableAssertions</code></a></td><td>是否启用断言</td></tr><tr><td><a href="https://docs.gradle.org/current/dsl/org.gradle.api.tasks.JavaExec.html#org.gradle.api.tasks.JavaExec:environment" target="_blank" rel="noreferrer"><code>environment</code></a></td><td>环境变量</td></tr><tr><td><a href="https://docs.gradle.org/current/dsl/org.gradle.api.tasks.JavaExec.html#org.gradle.api.tasks.JavaExec:errorOutput" target="_blank" rel="noreferrer"><code>errorOutput</code></a></td><td>错误输出. 默认 <code>System.err</code>.</td></tr><tr><td><a href="https://docs.gradle.org/current/dsl/org.gradle.api.tasks.JavaExec.html#org.gradle.api.tasks.JavaExec:mainClass" target="_blank" rel="noreferrer"><code>mainClass</code></a></td><td>需要执行的类</td></tr><tr><td><a href="https://docs.gradle.org/current/dsl/org.gradle.api.tasks.JavaExec.html#org.gradle.api.tasks.JavaExec:maxHeapSize" target="_blank" rel="noreferrer"><code>maxHeapSize</code></a></td><td>最大堆大小</td></tr><tr><td><a href="https://docs.gradle.org/current/dsl/org.gradle.api.tasks.JavaExec.html#org.gradle.api.tasks.JavaExec:systemProperties" target="_blank" rel="noreferrer"><code>systemProperties</code></a></td><td>系统属性</td></tr><tr><td><a href="https://docs.gradle.org/current/dsl/org.gradle.api.tasks.JavaExec.html#org.gradle.api.tasks.JavaExec:workingDir" target="_blank" rel="noreferrer"><code>workingDir</code></a></td><td>工作目录，默认项目目录</td></tr></tbody></table>`,6),t=[r];function p(o,c,d,i,g,h){return s(),e("div",null,t)}const m=a(l,[["render",p]]);export{k as __pageData,m as default};
