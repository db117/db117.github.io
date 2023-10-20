import{_ as s,o as a,c as e,Q as n}from"./chunks/framework.54cab62e.js";const g=JSON.parse('{"title":"Travis自动持续集成","description":"","frontmatter":{"title":"Travis自动持续集成"},"headers":[],"relativePath":"other/Travis自动持续集成.md","filePath":"other/Travis自动持续集成.md","lastUpdated":1697773070000}'),l={name:"other/Travis自动持续集成.md"},p=n(`<h4 id="使用准备" tabindex="-1">使用准备 <a class="header-anchor" href="#使用准备" aria-label="Permalink to &quot;使用准备&quot;">​</a></h4><ol><li>Travis CI 只支持 Github，不支持其他代码托管服务 <ol><li>拥有 GitHub 帐号</li><li>该帐号下面有一个项目</li><li>该项目里面有可运行的代码</li></ol></li><li>访问官方网站 <a href="https://travis-ci.org/" target="_blank" rel="noreferrer">travis</a>，使用 Github 账户登入 Travis CI。</li><li>Travis 会列出 Github 上面你的所有仓库，以及你所属于的组织。此时，选择你需要 Travis 帮你构建的仓库，打开仓库旁边的开关。一旦激活了一个仓库，Travis 会监听这个仓库的所有变化</li></ol><h4 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h4><p>Travis 要求项目的根目录下面，必须有一个<code>.travis.yml</code>文件。这是配置文件，指定了 Travis 的行为。该文件必须保存在 Github 仓库里面，一旦代码仓库有新的 Commit，Travis 就会去找这个文件，执行里面的命令。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">language: node_js</span></span>
<span class="line"><span style="color:#e1e4e8;">node_js:</span></span>
<span class="line"><span style="color:#e1e4e8;">  - lts/*</span></span>
<span class="line"><span style="color:#e1e4e8;">script:</span></span>
<span class="line"><span style="color:#e1e4e8;">  - npm run docs:build</span></span>
<span class="line"><span style="color:#e1e4e8;">  - npm run cname</span></span>
<span class="line"><span style="color:#e1e4e8;">deploy:</span></span>
<span class="line"><span style="color:#e1e4e8;">  provider: pages</span></span>
<span class="line"><span style="color:#e1e4e8;">  # Git项目</span></span>
<span class="line"><span style="color:#e1e4e8;">  repo: db117/db117.github.io</span></span>
<span class="line"><span style="color:#e1e4e8;">  # 不清理编译文件</span></span>
<span class="line"><span style="color:#e1e4e8;">  skip-cleanup: true</span></span>
<span class="line"><span style="color:#e1e4e8;">  # 目录</span></span>
<span class="line"><span style="color:#e1e4e8;">  local_dir: docs/.vuepress/dist</span></span>
<span class="line"><span style="color:#e1e4e8;">  # token</span></span>
<span class="line"><span style="color:#e1e4e8;">  github-token: $github</span></span>
<span class="line"><span style="color:#e1e4e8;">  keep-history: true</span></span>
<span class="line"><span style="color:#e1e4e8;">  # 用token的邮箱用户名提交</span></span>
<span class="line"><span style="color:#e1e4e8;">  committer_from_gh: true</span></span>
<span class="line"><span style="color:#e1e4e8;">  # 目标分支</span></span>
<span class="line"><span style="color:#e1e4e8;">  target_branch: master</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">language: node_js</span></span>
<span class="line"><span style="color:#24292e;">node_js:</span></span>
<span class="line"><span style="color:#24292e;">  - lts/*</span></span>
<span class="line"><span style="color:#24292e;">script:</span></span>
<span class="line"><span style="color:#24292e;">  - npm run docs:build</span></span>
<span class="line"><span style="color:#24292e;">  - npm run cname</span></span>
<span class="line"><span style="color:#24292e;">deploy:</span></span>
<span class="line"><span style="color:#24292e;">  provider: pages</span></span>
<span class="line"><span style="color:#24292e;">  # Git项目</span></span>
<span class="line"><span style="color:#24292e;">  repo: db117/db117.github.io</span></span>
<span class="line"><span style="color:#24292e;">  # 不清理编译文件</span></span>
<span class="line"><span style="color:#24292e;">  skip-cleanup: true</span></span>
<span class="line"><span style="color:#24292e;">  # 目录</span></span>
<span class="line"><span style="color:#24292e;">  local_dir: docs/.vuepress/dist</span></span>
<span class="line"><span style="color:#24292e;">  # token</span></span>
<span class="line"><span style="color:#24292e;">  github-token: $github</span></span>
<span class="line"><span style="color:#24292e;">  keep-history: true</span></span>
<span class="line"><span style="color:#24292e;">  # 用token的邮箱用户名提交</span></span>
<span class="line"><span style="color:#24292e;">  committer_from_gh: true</span></span>
<span class="line"><span style="color:#24292e;">  # 目标分支</span></span>
<span class="line"><span style="color:#24292e;">  target_branch: master</span></span></code></pre></div><h4 id="使用技巧" tabindex="-1">使用技巧 <a class="header-anchor" href="#使用技巧" aria-label="Permalink to &quot;使用技巧&quot;">​</a></h4><ul><li><p>环境变量</p><ul><li><p><code>.travis.yml</code>的<code>env</code>字段可以定义环境变量。然后，脚本内部就使用这些变量了。</p></li><li><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">env:</span></span>
<span class="line"><span style="color:#e1e4e8;">  - DB=postgres</span></span>
<span class="line"><span style="color:#e1e4e8;">  - SH=bash</span></span>
<span class="line"><span style="color:#e1e4e8;">  - PACKAGE_VERSION=&quot;1.0.*&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">env:</span></span>
<span class="line"><span style="color:#24292e;">  - DB=postgres</span></span>
<span class="line"><span style="color:#24292e;">  - SH=bash</span></span>
<span class="line"><span style="color:#24292e;">  - PACKAGE_VERSION=&quot;1.0.*&quot;</span></span></code></pre></div></li><li><p>有些环境变量（比如用户名和密码）不能公开，这时可以通过 Travis 网站，写在每个仓库的设置页里面，Travis 会自动把它们加入环境变量。这样一来，脚本内部依然可以使用这些环境变量，但是只有管理员才能看到变量的值。具体操作请看<a href="https://docs.travis-ci.com/user/environment-variables" target="_blank" rel="noreferrer">官方文档</a>。</p><ul><li><p>在使用时用$+变量名</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">github-token: $github</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">github-token: $github</span></span></code></pre></div></li></ul></li></ul></li></ul><h4 id="使用travis-client" tabindex="-1">使用Travis Client <a class="header-anchor" href="#使用travis-client" aria-label="Permalink to &quot;使用Travis Client&quot;">​</a></h4><p><a href="https://github.com/travis-ci/travis.rb" target="_blank" rel="noreferrer">文档</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 安装ruby等依赖</span></span>
<span class="line"><span style="color:#e1e4e8;">sudo apt-get install ruby-dev libffi-dev make gcc -y</span></span>
<span class="line"><span style="color:#e1e4e8;"># 安装Travis</span></span>
<span class="line"><span style="color:#e1e4e8;">sudo gem install travis</span></span>
<span class="line"><span style="color:#e1e4e8;"># 查看是否安装成功</span></span>
<span class="line"><span style="color:#e1e4e8;">travis version</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 安装ruby等依赖</span></span>
<span class="line"><span style="color:#24292e;">sudo apt-get install ruby-dev libffi-dev make gcc -y</span></span>
<span class="line"><span style="color:#24292e;"># 安装Travis</span></span>
<span class="line"><span style="color:#24292e;">sudo gem install travis</span></span>
<span class="line"><span style="color:#24292e;"># 查看是否安装成功</span></span>
<span class="line"><span style="color:#24292e;">travis version</span></span></code></pre></div><h4 id="添加ssh" tabindex="-1">添加ssh <a class="header-anchor" href="#添加ssh" aria-label="Permalink to &quot;添加ssh&quot;">​</a></h4><ul><li><p>生成秘钥</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">ssh-keygen -t rsa -b 4096 -C &quot;&lt;your_email&gt;&quot; -f &lt;key_name&gt; -N &#39;&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">ssh-keygen -t rsa -b 4096 -C &quot;&lt;your_email&gt;&quot; -f &lt;key_name&gt; -N &#39;&#39;</span></span></code></pre></div></li><li><p>把公钥放在需要的地方</p></li><li><p>使用Travis client加密私钥</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">travis encrypt-file &lt;key_name&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">找到输出的类似的,放到配置文件中</span></span>
<span class="line"><span style="color:#e1e4e8;">openssl aes-256-cbc -K $encrypted_XXXXXXXXXXXX_key -iv     $encrypted_XXXXXXXXXXXX_iv -in &lt;key_name&gt;.enc -out &lt;key_name&gt; -d</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">travis encrypt-file &lt;key_name&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">找到输出的类似的,放到配置文件中</span></span>
<span class="line"><span style="color:#24292e;">openssl aes-256-cbc -K $encrypted_XXXXXXXXXXXX_key -iv     $encrypted_XXXXXXXXXXXX_iv -in &lt;key_name&gt;.enc -out &lt;key_name&gt; -d</span></span></code></pre></div></li><li><p>修改.travis配置文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">before_install:</span></span>
<span class="line"><span style="color:#e1e4e8;">- openssl aes-256-cbc -K $encrypted_**********_key -iv $encrypted_********_iv</span></span>
<span class="line"><span style="color:#e1e4e8;">  -in .travis/&lt;key_name&gt;.enc -out ~/.ssh/&lt;key_name&gt; -d</span></span>
<span class="line"><span style="color:#e1e4e8;">- chmod 600 ~/.ssh/&lt;key_name&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">- eval $(ssh-agent)</span></span>
<span class="line"><span style="color:#e1e4e8;">- ssh-add ~/.ssh/&lt;key_name&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">before_install:</span></span>
<span class="line"><span style="color:#24292e;">- openssl aes-256-cbc -K $encrypted_**********_key -iv $encrypted_********_iv</span></span>
<span class="line"><span style="color:#24292e;">  -in .travis/&lt;key_name&gt;.enc -out ~/.ssh/&lt;key_name&gt; -d</span></span>
<span class="line"><span style="color:#24292e;">- chmod 600 ~/.ssh/&lt;key_name&gt;</span></span>
<span class="line"><span style="color:#24292e;">- eval $(ssh-agent)</span></span>
<span class="line"><span style="color:#24292e;">- ssh-add ~/.ssh/&lt;key_name&gt;</span></span></code></pre></div></li></ul><h1 id="最后添加" tabindex="-1">最后添加 <a class="header-anchor" href="#最后添加" aria-label="Permalink to &quot;最后添加&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">addons:</span></span>
<span class="line"><span style="color:#e1e4e8;">  ssh_known_hosts:</span></span>
<span class="line"><span style="color:#e1e4e8;">  - github.com</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">addons:</span></span>
<span class="line"><span style="color:#24292e;">  ssh_known_hosts:</span></span>
<span class="line"><span style="color:#24292e;">  - github.com</span></span></code></pre></div>`,14),t=[p];function o(c,i,r,d,y,h){return a(),e("div",null,t)}const v=s(l,[["render",o]]);export{g as __pageData,v as default};
