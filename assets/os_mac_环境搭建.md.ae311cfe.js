import{_ as s,o as a,c as e,Q as n}from"./chunks/framework.54cab62e.js";const J=JSON.parse('{"title":"各种环境","description":"","frontmatter":{"title":"各种环境"},"headers":[],"relativePath":"os/mac/环境搭建.md","filePath":"os/mac/环境搭建.md","lastUpdated":1697773070000}'),l={name:"os/mac/环境搭建.md"},p=n(`<h3 id="jdk动态配置" tabindex="-1">jdk动态配置 <a class="header-anchor" href="#jdk动态配置" aria-label="Permalink to &quot;jdk动态配置&quot;">​</a></h3><blockquote><p>根据需要动态配置jdk</p><p>需要先把jdk文件解压到mac默认的文件夹下（/Library/Java/JavaVirtualMachines）</p><p>/usr/libexec/java_home -v &lt;版本号&gt; 是打印指定版本号绝对路径</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># jdk设置</span></span>
<span class="line"><span style="color:#e1e4e8;"># 注意下面的引号\` （不是单引号&#39;，是Esc键下面的 与~符号同键的那个符号）  </span></span>
<span class="line"><span style="color:#e1e4e8;"># 设置 JDK 8  </span></span>
<span class="line"><span style="color:#e1e4e8;">export JAVA_8_HOME=\`/usr/libexec/java_home -v 1.8\`  </span></span>
<span class="line"><span style="color:#e1e4e8;"># 设置 JDK 11 </span></span>
<span class="line"><span style="color:#e1e4e8;">export JAVA_11_HOME=\`/usr/libexec/java_home -v 11\`</span></span>
<span class="line"><span style="color:#e1e4e8;"># 设置 JDK 15 </span></span>
<span class="line"><span style="color:#e1e4e8;">export JAVA_15_HOME=\`/usr/libexec/java_home -v 15\`</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">#默认JDK 11  </span></span>
<span class="line"><span style="color:#e1e4e8;">export JAVA_HOME=$JAVA_11_HOME  </span></span>
<span class="line"><span style="color:#e1e4e8;">  </span></span>
<span class="line"><span style="color:#e1e4e8;">#alias命令动态切换JDK版本  </span></span>
<span class="line"><span style="color:#e1e4e8;">alias jdk8=&quot;export JAVA_HOME=$JAVA_8_HOME&quot;  </span></span>
<span class="line"><span style="color:#e1e4e8;">alias jdk11=&quot;export JAVA_HOME=$JAVA_11_HOME&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">alias jdk15=&quot;export JAVA_HOME=$JAVA_15_HOME&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># jdk设置</span></span>
<span class="line"><span style="color:#24292e;"># 注意下面的引号\` （不是单引号&#39;，是Esc键下面的 与~符号同键的那个符号）  </span></span>
<span class="line"><span style="color:#24292e;"># 设置 JDK 8  </span></span>
<span class="line"><span style="color:#24292e;">export JAVA_8_HOME=\`/usr/libexec/java_home -v 1.8\`  </span></span>
<span class="line"><span style="color:#24292e;"># 设置 JDK 11 </span></span>
<span class="line"><span style="color:#24292e;">export JAVA_11_HOME=\`/usr/libexec/java_home -v 11\`</span></span>
<span class="line"><span style="color:#24292e;"># 设置 JDK 15 </span></span>
<span class="line"><span style="color:#24292e;">export JAVA_15_HOME=\`/usr/libexec/java_home -v 15\`</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">#默认JDK 11  </span></span>
<span class="line"><span style="color:#24292e;">export JAVA_HOME=$JAVA_11_HOME  </span></span>
<span class="line"><span style="color:#24292e;">  </span></span>
<span class="line"><span style="color:#24292e;">#alias命令动态切换JDK版本  </span></span>
<span class="line"><span style="color:#24292e;">alias jdk8=&quot;export JAVA_HOME=$JAVA_8_HOME&quot;  </span></span>
<span class="line"><span style="color:#24292e;">alias jdk11=&quot;export JAVA_HOME=$JAVA_11_HOME&quot;</span></span>
<span class="line"><span style="color:#24292e;">alias jdk15=&quot;export JAVA_HOME=$JAVA_15_HOME&quot;</span></span></code></pre></div>`,3),o=[p];function t(c,r,i,_,A,d){return a(),e("div",null,o)}const u=s(l,[["render",t]]);export{J as __pageData,u as default};
