import{_ as a,o as e,c as s,Q as n}from"./chunks/framework.54cab62e.js";const b=JSON.parse('{"title":"git","description":"","frontmatter":{"title":"git"},"headers":[],"relativePath":"util/git/index.md","filePath":"util/git/index.md","lastUpdated":1697773070000}'),t={name:"util/git/index.md"},l=n(`<h3 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h3><blockquote><p><a href="http://git-scm.com/" target="_blank" rel="noreferrer">Git (git-scm.com)</a></p></blockquote><h3 id="git记住密码" tabindex="-1">git记住密码 <a class="header-anchor" href="#git记住密码" aria-label="Permalink to &quot;git记住密码&quot;">​</a></h3><blockquote><p>~/.gitconfig 文件中添加或修改</p></blockquote><div class="language-gitconfig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">gitconfig</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[credential] </span></span>
<span class="line"><span style="color:#e1e4e8;">helper = store</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[credential] </span></span>
<span class="line"><span style="color:#24292e;">helper = store</span></span></code></pre></div><hr><h3 id="解决git中fatal-refusing-to-merge-unrelated-histories" tabindex="-1">解决Git中fatal: refusing to merge unrelated histories <a class="header-anchor" href="#解决git中fatal-refusing-to-merge-unrelated-histories" aria-label="Permalink to &quot;解决Git中fatal: refusing to merge unrelated histories&quot;">​</a></h3><blockquote><p>在你操作命令后面加<code>--allow-unrelated-histories</code> 例如： <code>git merge master --allow-unrelated-histories</code> push,pull同理</p></blockquote><hr><h3 id="windows下git报错-warning-clone-succeeded-but-checkout-failed" tabindex="-1">windows下git报错 warning: Clone succeeded, but checkout failed. <a class="header-anchor" href="#windows下git报错-warning-clone-succeeded-but-checkout-failed" aria-label="Permalink to &quot;windows下git报错 warning: Clone succeeded, but checkout failed.&quot;">​</a></h3><blockquote><p><code>git config core.longpaths true</code> Git的文件名限制为4096个字符，但在Windows上使用msys编译Git时除外。它使用Windows API的较早版本，文件名限制为260个字符。 （对所有项目都避免--system或--global标记）</p></blockquote><hr><h3 id="批量pull脚本" tabindex="-1">批量pull脚本 <a class="header-anchor" href="#批量pull脚本" aria-label="Permalink to &quot;批量pull脚本&quot;">​</a></h3><blockquote><p>批量拉取当前目录下的所有git项目</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">find . -maxdepth 1 -type d -exec sh -c &#39;(cd {} &amp;&amp; pwd &amp;&amp; git pull)&#39; &#39;;&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">find . -maxdepth 1 -type d -exec sh -c &#39;(cd {} &amp;&amp; pwd &amp;&amp; git pull)&#39; &#39;;&#39;</span></span></code></pre></div><h3 id="当前分支最新的commitid" tabindex="-1">当前分支最新的commitid <a class="header-anchor" href="#当前分支最新的commitid" aria-label="Permalink to &quot;当前分支最新的commitid&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">git rev-parse HEAD</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">git rev-parse HEAD</span></span></code></pre></div><h3 id="查看拥有某个commitid的分支" tabindex="-1">查看拥有某个commitId的分支 <a class="header-anchor" href="#查看拥有某个commitid的分支" aria-label="Permalink to &quot;查看拥有某个commitId的分支&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">git branch --contains $COMMIT_ID</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">git branch --contains $COMMIT_ID</span></span></code></pre></div><hr><h3 id="git-对比两个分支差异" tabindex="-1">git 对比两个分支差异 <a class="header-anchor" href="#git-对比两个分支差异" aria-label="Permalink to &quot;git 对比两个分支差异&quot;">​</a></h3><h4 id="显示出branch1和branch2中差异的部分" tabindex="-1">显示出branch1和branch2中差异的部分 <a class="header-anchor" href="#显示出branch1和branch2中差异的部分" aria-label="Permalink to &quot;显示出branch1和branch2中差异的部分&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">git diff branch1 branch2 --stat</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#24292e;">git diff branch1 branch2 --stat</span></span></code></pre></div><h4 id="显示指定文件的详细差异" tabindex="-1">显示指定文件的详细差异 <a class="header-anchor" href="#显示指定文件的详细差异" aria-label="Permalink to &quot;显示指定文件的详细差异&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">git diff branch1 branch2 具体文件路径</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#24292e;">git diff branch1 branch2 具体文件路径</span></span></code></pre></div><h4 id="显示出所有有差异的文件的详细差异" tabindex="-1">显示出所有有差异的文件的详细差异 <a class="header-anchor" href="#显示出所有有差异的文件的详细差异" aria-label="Permalink to &quot;显示出所有有差异的文件的详细差异&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">git diff branch1 branch2</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#24292e;">git diff branch1 branch2</span></span></code></pre></div><h4 id="查看branch1分支有-而branch2中没有的log" tabindex="-1">查看branch1分支有，而branch2中没有的log <a class="header-anchor" href="#查看branch1分支有-而branch2中没有的log" aria-label="Permalink to &quot;查看branch1分支有，而branch2中没有的log&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">git log branch1 ^branch2</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">git log branch1 ^branch2</span></span></code></pre></div><h4 id="查看branch2中比branch1中多提交了哪些内容" tabindex="-1">查看branch2中比branch1中多提交了哪些内容 <a class="header-anchor" href="#查看branch2中比branch1中多提交了哪些内容" aria-label="Permalink to &quot;查看branch2中比branch1中多提交了哪些内容&quot;">​</a></h4><p><code>git log branch1..branch2</code><strong>注意，列出来的是两个点后边（此处即dev）多提交的内容。</strong></p><h4 id="不知道谁提交的多谁提交的少-单纯想知道有什么不一样" tabindex="-1">不知道谁提交的多谁提交的少，单纯想知道有什么不一样 <a class="header-anchor" href="#不知道谁提交的多谁提交的少-单纯想知道有什么不一样" aria-label="Permalink to &quot;不知道谁提交的多谁提交的少，单纯想知道有什么不一样&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">git log branch1...branch2</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">git log branch1...branch2</span></span></code></pre></div><h3 id="按照时间来列出两个-commit-id-之间的相差数" tabindex="-1">按照时间来列出两个 commit id 之间的相差数 <a class="header-anchor" href="#按照时间来列出两个-commit-id-之间的相差数" aria-label="Permalink to &quot;按照时间来列出两个 commit id 之间的相差数&quot;">​</a></h3><blockquote><p>git rev-list: Lists commit objects in reverse chronological order（按时间逆向列出 commit 对象的顺序）</p><p>所谓时间逆向：第一个 commit id 提交的时间比第二个 commit id 早</p></blockquote><p>找commit-id-1之间的commit-id-2</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">git rev-list &lt;commit-id-1&gt;..&lt;commit-id-2&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">git rev-list &lt;commit-id-1&gt;..&lt;commit-id-2&gt;</span></span></code></pre></div><p>利用这个我们可以对比两个 commit id 谁比较新：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">git rev-list &lt;commit-id-1&gt;..&lt;commit-id-2&gt; --count</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">git rev-list &lt;commit-id-1&gt;..&lt;commit-id-2&gt; --count</span></span></code></pre></div><p>如果结果大于 0：commit-id-2 比 commit-id-1 新</p><hr><h3 id="修改-commit-信息" tabindex="-1">修改 commit 信息 <a class="header-anchor" href="#修改-commit-信息" aria-label="Permalink to &quot;修改 commit 信息&quot;">​</a></h3><h4 id="最后一次提交时间" tabindex="-1">最后一次提交时间 <a class="header-anchor" href="#最后一次提交时间" aria-label="Permalink to &quot;最后一次提交时间&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">GIT_COMMITTER_DATE=&quot;2021-12-12T12:27:07&quot; git commit --amend --date=&quot;2021-12-12T12:27:07&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">GIT_COMMITTER_DATE=&quot;2021-12-12T12:27:07&quot; git commit --amend --date=&quot;2021-12-12T12:27:07&quot;</span></span></code></pre></div><h3 id="git-tag不能显示所有tags" tabindex="-1">git tag不能显示所有tags <a class="header-anchor" href="#git-tag不能显示所有tags" aria-label="Permalink to &quot;git tag不能显示所有tags&quot;">​</a></h3><p>git pull不能默认将所有的tags拉下来。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">git fetch --tags</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">git fetch --tags</span></span></code></pre></div><h4 id="提示安全目录问题" tabindex="-1">提示安全目录问题 <a class="header-anchor" href="#提示安全目录问题" aria-label="Permalink to &quot;提示安全目录问题&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">git config --global --add safe.directory &quot;*&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">git config --global --add safe.directory &quot;*&quot;</span></span></code></pre></div><h4 id="修改已提交的邮箱" tabindex="-1">修改已提交的邮箱 <a class="header-anchor" href="#修改已提交的邮箱" aria-label="Permalink to &quot;修改已提交的邮箱&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 过滤并修改</span></span>
<span class="line"><span style="color:#e1e4e8;">git filter-branch -f --env-filter &#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">OLD_EMAIL=&quot;your-old-email@example.com&quot; </span></span>
<span class="line"><span style="color:#e1e4e8;">CORRECT_NAME=&quot;Your Correct Name&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">CORRECT_EMAIL=your-correct-email@example.com</span></span>
<span class="line"><span style="color:#e1e4e8;">if [ &quot;$GIT_COMMITTER_EMAIL&quot; = &quot;$OLD_EMAIL&quot; ]</span></span>
<span class="line"><span style="color:#e1e4e8;">then</span></span>
<span class="line"><span style="color:#e1e4e8;">    export GIT_COMMITTER_NAME=&quot;$CORRECT_NAME&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">    export GIT_COMMITTER_EMAIL=&quot;$CORRECT_EMAIL&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">fi</span></span>
<span class="line"><span style="color:#e1e4e8;">if [ &quot;$GIT_AUTHOR_EMAIL&quot; = &quot;$OLD_EMAIL&quot; ]</span></span>
<span class="line"><span style="color:#e1e4e8;">then</span></span>
<span class="line"><span style="color:#e1e4e8;">    export GIT_AUTHOR_NAME=&quot;$CORRECT_NAME&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">    export GIT_AUTHOR_EMAIL=&quot;$CORRECT_EMAIL&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">fi</span></span>
<span class="line"><span style="color:#e1e4e8;">&#39; --tag-name-filter cat -- --branches --tags</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 强制推送</span></span>
<span class="line"><span style="color:#e1e4e8;">git push origin --force --all</span></span>
<span class="line"><span style="color:#e1e4e8;">git push origin --force --tags</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 过滤并修改</span></span>
<span class="line"><span style="color:#24292e;">git filter-branch -f --env-filter &#39;</span></span>
<span class="line"><span style="color:#24292e;">OLD_EMAIL=&quot;your-old-email@example.com&quot; </span></span>
<span class="line"><span style="color:#24292e;">CORRECT_NAME=&quot;Your Correct Name&quot;</span></span>
<span class="line"><span style="color:#24292e;">CORRECT_EMAIL=your-correct-email@example.com</span></span>
<span class="line"><span style="color:#24292e;">if [ &quot;$GIT_COMMITTER_EMAIL&quot; = &quot;$OLD_EMAIL&quot; ]</span></span>
<span class="line"><span style="color:#24292e;">then</span></span>
<span class="line"><span style="color:#24292e;">    export GIT_COMMITTER_NAME=&quot;$CORRECT_NAME&quot;</span></span>
<span class="line"><span style="color:#24292e;">    export GIT_COMMITTER_EMAIL=&quot;$CORRECT_EMAIL&quot;</span></span>
<span class="line"><span style="color:#24292e;">fi</span></span>
<span class="line"><span style="color:#24292e;">if [ &quot;$GIT_AUTHOR_EMAIL&quot; = &quot;$OLD_EMAIL&quot; ]</span></span>
<span class="line"><span style="color:#24292e;">then</span></span>
<span class="line"><span style="color:#24292e;">    export GIT_AUTHOR_NAME=&quot;$CORRECT_NAME&quot;</span></span>
<span class="line"><span style="color:#24292e;">    export GIT_AUTHOR_EMAIL=&quot;$CORRECT_EMAIL&quot;</span></span>
<span class="line"><span style="color:#24292e;">fi</span></span>
<span class="line"><span style="color:#24292e;">&#39; --tag-name-filter cat -- --branches --tags</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 强制推送</span></span>
<span class="line"><span style="color:#24292e;">git push origin --force --all</span></span>
<span class="line"><span style="color:#24292e;">git push origin --force --tags</span></span></code></pre></div>`,51),o=[l];function i(c,p,r,d,h,g){return e(),s("div",null,o)}const m=a(t,[["render",i]]);export{b as __pageData,m as default};
