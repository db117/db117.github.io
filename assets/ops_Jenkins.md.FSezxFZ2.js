import{_ as a,o as s,c as e,R as n}from"./chunks/framework.H_1uJR_t.js";const k=JSON.parse('{"title":"Jenkins","description":"","frontmatter":{"title":"Jenkins"},"headers":[],"relativePath":"ops/Jenkins.md","filePath":"ops/Jenkins.md","lastUpdated":1699241780000}'),t={name:"ops/Jenkins.md"},p=n(`<h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><blockquote><p>自动化部署服务器</p><p><a href="https://www.jenkins.io/zh/" target="_blank" rel="noreferrer">官网</a></p><p><a href="https://github.com/jenkinsci/jenkins" target="_blank" rel="noreferrer">github</a></p></blockquote><h2 id="流水线" tabindex="-1">流水线 <a class="header-anchor" href="#流水线" aria-label="Permalink to &quot;流水线&quot;">​</a></h2><h3 id="使用带密码的用户名" tabindex="-1">使用带密码的用户名 <a class="header-anchor" href="#使用带密码的用户名" aria-label="Permalink to &quot;使用带密码的用户名&quot;">​</a></h3><blockquote><p><code>environment { \\COMMON_CREDS = credentials(&#39;jenkins-bitbucket-common-creds&#39;) }</code></p><p>上面会生成三个参数</p><p>$COMMON_CREDS(username:password)</p><p>$COMMON_CREDS_USR</p><p>$COMMON_CREDS_PSW</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>environment {</span></span>
<span class="line"><span>    BITBUCKET_COMMON_CREDS = credentials(&#39;jenkins-bitbucket-common-creds&#39;)</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="将可变密码传递给外部shell" tabindex="-1">将可变密码传递给外部shell <a class="header-anchor" href="#将可变密码传递给外部shell" aria-label="Permalink to &quot;将可变密码传递给外部shell&quot;">​</a></h3><blockquote><p>设置环境变量</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>export PASS=\${PASSWORD}</span></span></code></pre></div><h3 id="将变量从shell脚本传递给jenkins" tabindex="-1">将变量从shell脚本传递给jenkins <a class="header-anchor" href="#将变量从shell脚本传递给jenkins" aria-label="Permalink to &quot;将变量从shell脚本传递给jenkins&quot;">​</a></h3><blockquote><p>使用一个变量接受shell执行结果</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>def res = sh(</span></span>
<span class="line"><span>  returnStdout: true, </span></span>
<span class="line"><span>  script: &#39;pwd&#39;</span></span>
<span class="line"><span>)</span></span></code></pre></div><h3 id="使当前stages失败" tabindex="-1">使当前stages失败 <a class="header-anchor" href="#使当前stages失败" aria-label="Permalink to &quot;使当前stages失败&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>sh &#39;exit 1&#39;</span></span></code></pre></div><h3 id="失败后继续" tabindex="-1">失败后继续 <a class="header-anchor" href="#失败后继续" aria-label="Permalink to &quot;失败后继续&quot;">​</a></h3><ul><li><p>shell失败</p><blockquote><p>永远返回true</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>sh &#39;cd 123 || true&#39;</span></span></code></pre></div></li><li><p>failFast属性</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>failFast false</span></span></code></pre></div></li><li><p>try catch</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>script {</span></span>
<span class="line"><span>  try {</span></span>
<span class="line"><span>      sh &#39;do your stuff&#39;</span></span>
<span class="line"><span>  } catch (Exception e) {</span></span>
<span class="line"><span>      sh &#39;Handle the exception!&#39;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div></li></ul>`,16),l=[p];function i(o,c,h,r,d,u){return s(),e("div",null,l)}const g=a(t,[["render",i]]);export{k as __pageData,g as default};
