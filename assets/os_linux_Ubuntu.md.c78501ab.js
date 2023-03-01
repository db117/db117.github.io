import{_ as a,c as n,e,a as l,o,r}from"./app.bab73cad.js";const _=JSON.parse('{"title":"Ubuntu相关","description":"","frontmatter":{"title":"Ubuntu相关"},"headers":[],"relativePath":"os/linux/Ubuntu.md","lastUpdated":1677655177000}'),p={name:"os/linux/Ubuntu.md"},t=l(`<h4 id="安装chrome" tabindex="-1">安装Chrome <a class="header-anchor" href="#安装chrome" aria-hidden="true">#</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"># 安装依赖</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo apt-get install libxss1 libappindicator1 libindicator7</span></span>
<span class="line"><span style="color:#A6ACCD;"># 下载安装包</span></span>
<span class="line"><span style="color:#A6ACCD;">wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb</span></span>
<span class="line"><span style="color:#A6ACCD;"># 安装</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo apt-get install -f</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo dpkg -i google-chrome-stable_current_amd64.deb</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>安装完成后查询版本号</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">google-chrome --version</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="安装chromedriver" tabindex="-1">安装chromedriver <a class="header-anchor" href="#安装chromedriver" aria-hidden="true">#</a></h4><p>选择需要的版本下载<a href="http://npm.taobao.org/mirrors/chromedriver/" target="_blank" rel="noreferrer">http://npm.taobao.org/mirrors/chromedriver/</a></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"># 解压</span></span>
<span class="line"><span style="color:#A6ACCD;">unzip chromedriver_linux64.zip</span></span>
<span class="line"><span style="color:#A6ACCD;"># 给权限</span></span>
<span class="line"><span style="color:#A6ACCD;">chmod +x chromedrive</span></span>
<span class="line"><span style="color:#A6ACCD;"># 在命令目录添加软连接</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo mv -f chromedriver /usr/local/share/chromedriver</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo ln -s /usr/local/share/chromedriver /usr/local/bin/chromedriver</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo ln -s /usr/local/share/chromedriver /usr/bin/chromedrive</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,7);function c(i,d,h,C,m,u){const s=r("TOC");return o(),n("div",null,[e(s),t])}const b=a(p,[["render",c]]);export{_ as __pageData,b as default};
