import{_ as e,c as t,o as a,a as c}from"./app.a840672a.js";const k=JSON.parse('{"title":"深信服easyConnect在docker中进行透明代理","description":"","frontmatter":{"title":"深信服easyConnect在docker中进行透明代理"},"headers":[{"level":3,"title":"连接","slug":"连接","link":"#连接","children":[]},{"level":3,"title":"docker启动","slug":"docker启动","link":"#docker启动","children":[{"level":4,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[]}]}],"relativePath":"ops/docker/easyconnectInit.md","lastUpdated":1678341619000}'),n={name:"ops/docker/easyconnectInit.md"},o=c(`<h3 id="连接" tabindex="-1">连接 <a class="header-anchor" href="#连接" aria-hidden="true">#</a></h3><blockquote><p><a href="https://github.com/Hagb/docker-easyconnect" target="_blank" rel="noreferrer">https://github.com/Hagb/docker-easyconnect</a></p></blockquote><h3 id="docker启动" tabindex="-1">docker启动 <a class="header-anchor" href="#docker启动" aria-hidden="true">#</a></h3><blockquote><p>启动后就可以socks5代理（可以通过插件配置），地址: 127.0.0.1, 端口: 1080</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">docker run --name ec --device /dev/net/tun --cap-add NET_ADMIN -d --restart=always -p 127.0.0.1:1080:1080 -e EC_VER=7.6.3 -e CLI_OPTS=&quot;-d 服务器地址 -u 用户名称 -p 密码&quot; hagb/docker-easyconnect:cli</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-hidden="true">#</a></h4><ul><li><p>如需要http的则需要使用privoxy进行前置代理 <a href="./../../util/privoxy.html">privoxy</a></p></li><li><p>git代理</p><p><a href="./../../util/git/git代理.html">git代理</a></p></li></ul>`,7),s=[o];function r(l,i,d,p,h,_){return a(),t("div",null,s)}const g=e(n,[["render",r]]);export{k as __pageData,g as default};
