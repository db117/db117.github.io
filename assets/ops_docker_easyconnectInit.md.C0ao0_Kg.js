import{_ as e,c as t,o as a,a5 as o}from"./chunks/framework.CyS7wUzW.js";const k=JSON.parse('{"title":"深信服easyConnect在docker中进行透明代理","description":"","frontmatter":{"title":"深信服easyConnect在docker中进行透明代理"},"headers":[],"relativePath":"ops/docker/easyconnectInit.md","filePath":"ops/docker/easyconnectInit.md"}'),c={name:"ops/docker/easyconnectInit.md"},n=o('<h3 id="连接" tabindex="-1">连接 <a class="header-anchor" href="#连接" aria-label="Permalink to &quot;连接&quot;">​</a></h3><blockquote><p><a href="https://github.com/Hagb/docker-easyconnect" target="_blank" rel="noreferrer">https://github.com/Hagb/docker-easyconnect</a></p></blockquote><h3 id="docker启动" tabindex="-1">docker启动 <a class="header-anchor" href="#docker启动" aria-label="Permalink to &quot;docker启动&quot;">​</a></h3><blockquote><p>启动后就可以socks5代理（可以通过插件配置），地址: 127.0.0.1, 端口: 1080</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker run --name ec --device /dev/net/tun --cap-add NET_ADMIN -d --restart=always -p 127.0.0.1:1080:1080 -e EC_VER=7.6.3 -e CLI_OPTS=&quot;-d 服务器地址 -u 用户名称 -p 密码&quot; hagb/docker-easyconnect:cli</span></span></code></pre></div><h4 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h4><ul><li><p>如需要http的则需要使用privoxy进行前置代理 <a href="./../../util/privoxy.html">privoxy</a></p></li><li><p>git代理</p><p><a href="./../../util/git/git代理.html">git代理</a></p></li></ul>',7),r=[n];function s(i,d,l,p,h,u){return a(),t("div",null,r)}const b=e(c,[["render",s]]);export{k as __pageData,b as default};
