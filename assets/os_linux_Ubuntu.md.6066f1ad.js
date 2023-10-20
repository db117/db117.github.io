import{_ as e,C as a,o as n,c as l,H as o,Q as p}from"./chunks/framework.54cab62e.js";const b=JSON.parse('{"title":"Ubuntu相关","description":"","frontmatter":{"title":"Ubuntu相关"},"headers":[],"relativePath":"os/linux/Ubuntu.md","filePath":"os/linux/Ubuntu.md","lastUpdated":1697773070000}'),r={name:"os/linux/Ubuntu.md"},c=p(`<h4 id="安装chrome" tabindex="-1">安装Chrome <a class="header-anchor" href="#安装chrome" aria-label="Permalink to &quot;安装Chrome&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 安装依赖</span></span>
<span class="line"><span style="color:#e1e4e8;">sudo apt-get install libxss1 libappindicator1 libindicator7</span></span>
<span class="line"><span style="color:#e1e4e8;"># 下载安装包</span></span>
<span class="line"><span style="color:#e1e4e8;">wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb</span></span>
<span class="line"><span style="color:#e1e4e8;"># 安装</span></span>
<span class="line"><span style="color:#e1e4e8;">sudo apt-get install -f</span></span>
<span class="line"><span style="color:#e1e4e8;">sudo dpkg -i google-chrome-stable_current_amd64.deb</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 安装依赖</span></span>
<span class="line"><span style="color:#24292e;">sudo apt-get install libxss1 libappindicator1 libindicator7</span></span>
<span class="line"><span style="color:#24292e;"># 下载安装包</span></span>
<span class="line"><span style="color:#24292e;">wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb</span></span>
<span class="line"><span style="color:#24292e;"># 安装</span></span>
<span class="line"><span style="color:#24292e;">sudo apt-get install -f</span></span>
<span class="line"><span style="color:#24292e;">sudo dpkg -i google-chrome-stable_current_amd64.deb</span></span></code></pre></div><p>安装完成后查询版本号</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">google-chrome --version</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">google-chrome --version</span></span></code></pre></div><h4 id="安装chromedriver" tabindex="-1">安装chromedriver <a class="header-anchor" href="#安装chromedriver" aria-label="Permalink to &quot;安装chromedriver&quot;">​</a></h4><p>选择需要的版本下载<a href="http://npm.taobao.org/mirrors/chromedriver/" target="_blank" rel="noreferrer">http://npm.taobao.org/mirrors/chromedriver/</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 解压</span></span>
<span class="line"><span style="color:#e1e4e8;">unzip chromedriver_linux64.zip</span></span>
<span class="line"><span style="color:#e1e4e8;"># 给权限</span></span>
<span class="line"><span style="color:#e1e4e8;">chmod +x chromedrive</span></span>
<span class="line"><span style="color:#e1e4e8;"># 在命令目录添加软连接</span></span>
<span class="line"><span style="color:#e1e4e8;">sudo mv -f chromedriver /usr/local/share/chromedriver</span></span>
<span class="line"><span style="color:#e1e4e8;">sudo ln -s /usr/local/share/chromedriver /usr/local/bin/chromedriver</span></span>
<span class="line"><span style="color:#e1e4e8;">sudo ln -s /usr/local/share/chromedriver /usr/bin/chromedrive</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 解压</span></span>
<span class="line"><span style="color:#24292e;">unzip chromedriver_linux64.zip</span></span>
<span class="line"><span style="color:#24292e;"># 给权限</span></span>
<span class="line"><span style="color:#24292e;">chmod +x chromedrive</span></span>
<span class="line"><span style="color:#24292e;"># 在命令目录添加软连接</span></span>
<span class="line"><span style="color:#24292e;">sudo mv -f chromedriver /usr/local/share/chromedriver</span></span>
<span class="line"><span style="color:#24292e;">sudo ln -s /usr/local/share/chromedriver /usr/local/bin/chromedriver</span></span>
<span class="line"><span style="color:#24292e;">sudo ln -s /usr/local/share/chromedriver /usr/bin/chromedrive</span></span></code></pre></div>`,7);function t(i,d,h,u,m,g){const s=a("TOC");return n(),l("div",null,[o(s),c])}const y=e(r,[["render",t]]);export{b as __pageData,y as default};
