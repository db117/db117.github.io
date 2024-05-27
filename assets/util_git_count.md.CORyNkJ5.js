import{_ as a,c as t,o as s,a7 as e}from"./chunks/framework.CmQJvoAO.js";const b=JSON.parse('{"title":"git 常用统计","description":"","frontmatter":{"title":"git 常用统计"},"headers":[],"relativePath":"util/git/count.md","filePath":"util/git/count.md","lastUpdated":1716780643000}'),n={name:"util/git/count.md"},o=e(`<h3 id="提交数统计" tabindex="-1"><strong>提交数统计</strong> <a class="header-anchor" href="#提交数统计" aria-label="Permalink to &quot;**提交数统计**&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git log --oneline | wc -l</span></span></code></pre></div><h3 id="查看提交者排名前n位" tabindex="-1"><strong>查看提交者排名前N位</strong> <a class="header-anchor" href="#查看提交者排名前n位" aria-label="Permalink to &quot;**查看提交者排名前N位**&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git log --pretty=&#39;%aN&#39; | sort | uniq -c | sort -k1 -n -r | head -n 5</span></span></code></pre></div><h3 id="根据用户名统计" tabindex="-1"><strong>根据用户名统计</strong> <a class="header-anchor" href="#根据用户名统计" aria-label="Permalink to &quot;**根据用户名统计**&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 全部时间</span></span>
<span class="line"><span>git log --author=&quot;db117&quot; --pretty=tformat: --numstat | awk &#39;{ add += $1; subs += $2; loc += $1 - $2 } END { printf &quot;added lines: %s, removed lines: %s, total lines: %s\\n&quot;, add, subs, loc }&#39; -</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 指定时间</span></span>
<span class="line"><span>git log --author=&quot;db117&quot; --since=2022-12-01 --until=2022-12-31 --pretty=tformat: --numstat | awk &#39;{ add += $1; subs += $2; loc += $1 - $2 } END { printf &quot;added lines: %s, removed lines: %s, total lines: %s\\n&quot;, add, subs, loc }&#39;</span></span></code></pre></div><h3 id="统计所有人的代码行数" tabindex="-1">统计所有人的代码行数 <a class="header-anchor" href="#统计所有人的代码行数" aria-label="Permalink to &quot;统计所有人的代码行数&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git log --format=&#39;%aN&#39; | sort -u | while read name; do echo -en &quot;$name\\t&quot;; git log --author=&quot;$name&quot; --pretty=tformat: --numstat | awk &#39;{ add += $1; subs += $2; loc += $1 - $2 } END { printf &quot;added lines: %s, removed lines: %s, total lines: %s \\n&quot;, add, subs, loc }&#39; -; done</span></span></code></pre></div><h3 id="提交代码人数" tabindex="-1">提交代码人数 <a class="header-anchor" href="#提交代码人数" aria-label="Permalink to &quot;提交代码人数&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git log --pretty=&#39;%aN&#39; | sort -u | wc -l</span></span></code></pre></div>`,10),i=[o];function l(d,p,c,r,u,h){return s(),t("div",null,i)}const m=a(n,[["render",l]]);export{b as __pageData,m as default};
