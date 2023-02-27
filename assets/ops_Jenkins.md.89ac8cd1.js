import{_ as s,c as e,o as a,a as n}from"./app.55d73d08.js";const A=JSON.parse('{"title":"Jenkins","description":"","frontmatter":{"title":"Jenkins"},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"流水线","slug":"流水线","link":"#流水线","children":[{"level":3,"title":"使用带密码的用户名","slug":"使用带密码的用户名","link":"#使用带密码的用户名","children":[]},{"level":3,"title":"将可变密码传递给外部shell","slug":"将可变密码传递给外部shell","link":"#将可变密码传递给外部shell","children":[]},{"level":3,"title":"将变量从shell脚本传递给jenkins","slug":"将变量从shell脚本传递给jenkins","link":"#将变量从shell脚本传递给jenkins","children":[]},{"level":3,"title":"使当前stages失败","slug":"使当前stages失败","link":"#使当前stages失败","children":[]},{"level":3,"title":"失败后继续","slug":"失败后继续","link":"#失败后继续","children":[]}]}],"relativePath":"ops/Jenkins.md","lastUpdated":1677490656000}'),l={name:"ops/Jenkins.md"},t=n(`<h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-hidden="true">#</a></h2><blockquote><p>自动化部署服务器</p><p><a href="https://www.jenkins.io/zh/" target="_blank" rel="noreferrer">官网</a></p><p><a href="https://github.com/jenkinsci/jenkins" target="_blank" rel="noreferrer">github</a></p></blockquote><h2 id="流水线" tabindex="-1">流水线 <a class="header-anchor" href="#流水线" aria-hidden="true">#</a></h2><h3 id="使用带密码的用户名" tabindex="-1">使用带密码的用户名 <a class="header-anchor" href="#使用带密码的用户名" aria-hidden="true">#</a></h3><blockquote><p><code>environment { \\COMMON_CREDS = credentials(&#39;jenkins-bitbucket-common-creds&#39;) }</code></p><p>上面会生成三个参数</p><p>$COMMON_CREDS(username:password)</p><p>$COMMON_CREDS_USR</p><p>$COMMON_CREDS_PSW</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">environment {</span></span>
<span class="line"><span style="color:#A6ACCD;">    BITBUCKET_COMMON_CREDS = credentials(&#39;jenkins-bitbucket-common-creds&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="将可变密码传递给外部shell" tabindex="-1">将可变密码传递给外部shell <a class="header-anchor" href="#将可变密码传递给外部shell" aria-hidden="true">#</a></h3><blockquote><p>设置环境变量</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">export PASS=\${PASSWORD}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="将变量从shell脚本传递给jenkins" tabindex="-1">将变量从shell脚本传递给jenkins <a class="header-anchor" href="#将变量从shell脚本传递给jenkins" aria-hidden="true">#</a></h3><blockquote><p>使用一个变量接受shell执行结果</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">def res = sh(</span></span>
<span class="line"><span style="color:#A6ACCD;">  returnStdout: true, </span></span>
<span class="line"><span style="color:#A6ACCD;">  script: &#39;pwd&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="使当前stages失败" tabindex="-1">使当前stages失败 <a class="header-anchor" href="#使当前stages失败" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">sh &#39;exit 1&#39; </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="失败后继续" tabindex="-1">失败后继续 <a class="header-anchor" href="#失败后继续" aria-hidden="true">#</a></h3><ul><li><p>shell失败</p><blockquote><p>永远返回true</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">sh &#39;cd 123 || true&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p>failFast属性</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">failFast false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li><li><p>try catch</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">script {</span></span>
<span class="line"><span style="color:#A6ACCD;">  try {</span></span>
<span class="line"><span style="color:#A6ACCD;">      sh &#39;do your stuff&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  } catch (Exception e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      sh &#39;Handle the exception!&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></li></ul>`,16),p=[t];function i(c,o,r,d,h,C){return a(),e("div",null,p)}const b=s(l,[["render",i]]);export{A as __pageData,b as default};