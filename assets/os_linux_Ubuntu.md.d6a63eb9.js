import{_ as a,c as e,C as n,U as o,o as l,D as r}from"./chunks/framework.6f6f51de.js";const _=JSON.parse('{"title":"Ubuntu相关","description":"","frontmatter":{"title":"Ubuntu相关"},"headers":[],"relativePath":"os/linux/Ubuntu.md","lastUpdated":1680861403000}'),t={name:"os/linux/Ubuntu.md"},p=o(`<h4 id="安装chrome" tabindex="-1">安装Chrome <a class="header-anchor" href="#安装chrome" aria-label="Permalink to &quot;安装Chrome&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 安装依赖</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo apt-get install libxss1 libappindicator1 libindicator7</span></span>
<span class="line"><span style="color:#A6ACCD;"># 下载安装包</span></span>
<span class="line"><span style="color:#A6ACCD;">wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb</span></span>
<span class="line"><span style="color:#A6ACCD;"># 安装</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo apt-get install -f</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo dpkg -i google-chrome-stable_current_amd64.deb</span></span></code></pre></div><p>安装完成后查询版本号</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">google-chrome --version</span></span></code></pre></div><h4 id="安装chromedriver" tabindex="-1">安装chromedriver <a class="header-anchor" href="#安装chromedriver" aria-label="Permalink to &quot;安装chromedriver&quot;">​</a></h4><p>选择需要的版本下载<a href="http://npm.taobao.org/mirrors/chromedriver/" target="_blank" rel="noreferrer">http://npm.taobao.org/mirrors/chromedriver/</a></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 解压</span></span>
<span class="line"><span style="color:#A6ACCD;">unzip chromedriver_linux64.zip</span></span>
<span class="line"><span style="color:#A6ACCD;"># 给权限</span></span>
<span class="line"><span style="color:#A6ACCD;">chmod +x chromedrive</span></span>
<span class="line"><span style="color:#A6ACCD;"># 在命令目录添加软连接</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo mv -f chromedriver /usr/local/share/chromedriver</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo ln -s /usr/local/share/chromedriver /usr/local/bin/chromedriver</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo ln -s /usr/local/share/chromedriver /usr/bin/chromedrive</span></span></code></pre></div>`,7);function c(i,d,h,m,u,C){const s=r("TOC");return l(),e("div",null,[n(s),p])}const g=a(t,[["render",c]]);export{_ as __pageData,g as default};
