import{_ as a,o as s,c as n,R as p}from"./chunks/framework.H_1uJR_t.js";const h=JSON.parse('{"title":"各种环境","description":"","frontmatter":{"title":"各种环境"},"headers":[],"relativePath":"os/mac/环境搭建.md","filePath":"os/mac/环境搭建.md","lastUpdated":1699241780000}'),e={name:"os/mac/环境搭建.md"},t=p(`<h3 id="jdk动态配置" tabindex="-1">jdk动态配置 <a class="header-anchor" href="#jdk动态配置" aria-label="Permalink to &quot;jdk动态配置&quot;">​</a></h3><blockquote><p>根据需要动态配置jdk</p><p>需要先把jdk文件解压到mac默认的文件夹下（/Library/Java/JavaVirtualMachines）</p><p>/usr/libexec/java_home -v &lt;版本号&gt; 是打印指定版本号绝对路径</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># jdk设置</span></span>
<span class="line"><span># 注意下面的引号\` （不是单引号&#39;，是Esc键下面的 与~符号同键的那个符号）  </span></span>
<span class="line"><span># 设置 JDK 8  </span></span>
<span class="line"><span>export JAVA_8_HOME=\`/usr/libexec/java_home -v 1.8\`  </span></span>
<span class="line"><span># 设置 JDK 11 </span></span>
<span class="line"><span>export JAVA_11_HOME=\`/usr/libexec/java_home -v 11\`</span></span>
<span class="line"><span># 设置 JDK 15 </span></span>
<span class="line"><span>export JAVA_15_HOME=\`/usr/libexec/java_home -v 15\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#默认JDK 11  </span></span>
<span class="line"><span>export JAVA_HOME=$JAVA_11_HOME  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>#alias命令动态切换JDK版本  </span></span>
<span class="line"><span>alias jdk8=&quot;export JAVA_HOME=$JAVA_8_HOME&quot;  </span></span>
<span class="line"><span>alias jdk11=&quot;export JAVA_HOME=$JAVA_11_HOME&quot;</span></span>
<span class="line"><span>alias jdk15=&quot;export JAVA_HOME=$JAVA_15_HOME&quot;</span></span></code></pre></div>`,3),l=[t];function o(c,i,_,r,d,u){return s(),n("div",null,l)}const m=a(e,[["render",o]]);export{h as __pageData,m as default};
