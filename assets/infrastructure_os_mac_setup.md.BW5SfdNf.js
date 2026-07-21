import{gt as e,nt as t,s as n,tt as r}from"./chunks/framework.BqU7tCwc.js";var i=JSON.parse(`{"title":"各种环境","description":"","frontmatter":{"title":"各种环境"},"headers":[],"relativePath":"infrastructure/os/mac/setup.md","filePath":"infrastructure/os/mac/setup.md","lastUpdated":1784620663000}`),a={name:`infrastructure/os/mac/setup.md`};function o(n,i,a,o,s,c){return e(),r(`div`,null,[...i[0]||=[t(`<h3 id="jdk动态配置" tabindex="-1">jdk动态配置 <a class="header-anchor" href="#jdk动态配置" aria-label="Permalink to “jdk动态配置”">​</a></h3><blockquote><p>根据需要动态配置jdk</p><p>需要先把jdk文件解压到mac默认的文件夹下（/Library/Java/JavaVirtualMachines）</p><p>/usr/libexec/java_home -v &lt;版本号&gt; 是打印指定版本号绝对路径</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># jdk设置</span></span>
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
<span class="line"><span>alias jdk15=&quot;export JAVA_HOME=$JAVA_15_HOME&quot;</span></span></code></pre></div>`,3)]])}var s=n(a,[[`render`,o]]);export{i as __pageData,s as default};