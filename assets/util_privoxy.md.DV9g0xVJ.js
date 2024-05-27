import{_ as s,c as a,o as i,a7 as t}from"./chunks/framework.CmQJvoAO.js";const u=JSON.parse('{"title":"privoxy","description":"","frontmatter":{"title":"privoxy"},"headers":[],"relativePath":"util/privoxy.md","filePath":"util/privoxy.md","lastUpdated":1716780643000}'),e={name:"util/privoxy.md"},l=t('<h3 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h3><blockquote><p>各种代理设置</p></blockquote><h3 id="安装使用" tabindex="-1">安装使用 <a class="header-anchor" href="#安装使用" aria-label="Permalink to &quot;安装使用&quot;">​</a></h3><blockquote><p>安装</p></blockquote><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> privoxy</span></span></code></pre></div><blockquote><p>非开机启动启动</p></blockquote><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/sbin/privoxy</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/etc/privoxy/config</span></span></code></pre></div><h3 id="socks5-转-http代理" tabindex="-1">socks5 转 http代理 <a class="header-anchor" href="#socks5-转-http代理" aria-label="Permalink to &quot;socks5 转 http代理&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>forward-socks5   /     127.0.0.1:1080 .</span></span></code></pre></div><h4 id="设置开机启动" tabindex="-1">设置开机启动 <a class="header-anchor" href="#设置开机启动" aria-label="Permalink to &quot;设置开机启动&quot;">​</a></h4><blockquote><p>启动并设置开机启动</p></blockquote><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> services</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> privoxy</span></span></code></pre></div><blockquote><p>停止并取消开机启动</p></blockquote><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> services</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stop</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> privoxy</span></span></code></pre></div>',14),p=[l];function o(h,n,c,r,d,k){return i(),a("div",null,p)}const g=s(e,[["render",o]]);export{u as __pageData,g as default};
