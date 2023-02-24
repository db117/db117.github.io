import{_ as s,c as a,o as n,a as e}from"./app.3d2db0cb.js";const D=JSON.parse('{"title":"各种环境","description":"","frontmatter":{"title":"各种环境"},"headers":[{"level":3,"title":"jdk动态配置","slug":"jdk动态配置","link":"#jdk动态配置","children":[]}],"relativePath":"os/mac/环境搭建.md","lastUpdated":1677230567000}'),l={name:"os/mac/环境搭建.md"},p=e(`<h3 id="jdk动态配置" tabindex="-1">jdk动态配置 <a class="header-anchor" href="#jdk动态配置" aria-hidden="true">#</a></h3><blockquote><p>根据需要动态配置jdk</p><p>需要先把jdk文件解压到mac默认的文件夹下（/Library/Java/JavaVirtualMachines）</p><p>/usr/libexec/java_home -v &lt;版本号&gt; 是打印指定版本号绝对路径</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"># jdk设置</span></span>
<span class="line"><span style="color:#A6ACCD;"># 注意下面的引号\` （不是单引号&#39;，是Esc键下面的 与~符号同键的那个符号）  </span></span>
<span class="line"><span style="color:#A6ACCD;"># 设置 JDK 8  </span></span>
<span class="line"><span style="color:#A6ACCD;">export JAVA_8_HOME=\`/usr/libexec/java_home -v 1.8\`  </span></span>
<span class="line"><span style="color:#A6ACCD;"># 设置 JDK 11 </span></span>
<span class="line"><span style="color:#A6ACCD;">export JAVA_11_HOME=\`/usr/libexec/java_home -v 11\`</span></span>
<span class="line"><span style="color:#A6ACCD;"># 设置 JDK 15 </span></span>
<span class="line"><span style="color:#A6ACCD;">export JAVA_15_HOME=\`/usr/libexec/java_home -v 15\`</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#默认JDK 11  </span></span>
<span class="line"><span style="color:#A6ACCD;">export JAVA_HOME=$JAVA_11_HOME  </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">#alias命令动态切换JDK版本  </span></span>
<span class="line"><span style="color:#A6ACCD;">alias jdk8=&quot;export JAVA_HOME=$JAVA_8_HOME&quot;  </span></span>
<span class="line"><span style="color:#A6ACCD;">alias jdk11=&quot;export JAVA_HOME=$JAVA_11_HOME&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">alias jdk15=&quot;export JAVA_HOME=$JAVA_15_HOME&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,3),o=[p];function t(c,r,A,i,_,d){return n(),a("div",null,o)}const u=s(l,[["render",t]]);export{D as __pageData,u as default};
