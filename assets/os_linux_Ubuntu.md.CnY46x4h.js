import{_ as s,D as n,c as e,I as p,a5 as r,o}from"./chunks/framework.CDo-_4TQ.js";const v=JSON.parse('{"title":"Ubuntu相关","description":"","frontmatter":{"title":"Ubuntu相关"},"headers":[],"relativePath":"os/linux/Ubuntu.md","filePath":"os/linux/Ubuntu.md","lastUpdated":1721647785000}'),t={name:"os/linux/Ubuntu.md"},i=r(`<h4 id="安装chrome" tabindex="-1">安装Chrome <a class="header-anchor" href="#安装chrome" aria-label="Permalink to &quot;安装Chrome&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 安装依赖</span></span>
<span class="line"><span>sudo apt-get install libxss1 libappindicator1 libindicator7</span></span>
<span class="line"><span># 下载安装包</span></span>
<span class="line"><span>wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb</span></span>
<span class="line"><span># 安装</span></span>
<span class="line"><span>sudo apt-get install -f</span></span>
<span class="line"><span>sudo dpkg -i google-chrome-stable_current_amd64.deb</span></span></code></pre></div><p>安装完成后查询版本号</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>google-chrome --version</span></span></code></pre></div><h4 id="安装chromedriver" tabindex="-1">安装chromedriver <a class="header-anchor" href="#安装chromedriver" aria-label="Permalink to &quot;安装chromedriver&quot;">​</a></h4><p>选择需要的版本下载<a href="http://npm.taobao.org/mirrors/chromedriver/" target="_blank" rel="noreferrer">http://npm.taobao.org/mirrors/chromedriver/</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 解压</span></span>
<span class="line"><span>unzip chromedriver_linux64.zip</span></span>
<span class="line"><span># 给权限</span></span>
<span class="line"><span>chmod +x chromedrive</span></span>
<span class="line"><span># 在命令目录添加软连接</span></span>
<span class="line"><span>sudo mv -f chromedriver /usr/local/share/chromedriver</span></span>
<span class="line"><span>sudo ln -s /usr/local/share/chromedriver /usr/local/bin/chromedriver</span></span>
<span class="line"><span>sudo ln -s /usr/local/share/chromedriver /usr/bin/chromedrive</span></span></code></pre></div>`,7);function l(c,d,h,u,m,b){const a=n("TOC");return o(),e("div",null,[p(a),i])}const _=s(t,[["render",l]]);export{v as __pageData,_ as default};
