import{_ as s,c as e,o as a,a as n}from"./app.3d2db0cb.js";const A=JSON.parse('{"title":"alpine","description":"","frontmatter":{"title":"alpine"},"headers":[{"level":2,"title":"网络工具","slug":"网络工具","link":"#网络工具","children":[]}],"relativePath":"os/linux/alpine.md","lastUpdated":1677230567000}'),l={name:"os/linux/alpine.md"},o=n(`<h1 id="alpine" tabindex="-1">Alpine <a class="header-anchor" href="#alpine" aria-hidden="true">#</a></h1><h2 id="网络工具" tabindex="-1">网络工具 <a class="header-anchor" href="#网络工具" aria-hidden="true">#</a></h2><ul><li>telnet：<code>busybox-extras</code></li><li>net-tools: <code>net-tools</code></li><li>tcpdump: <code>tcpdump</code></li><li>wget: <code>wget</code></li><li>dig nslookup: <code>bind-tools</code></li><li>curl: <code>curl</code></li><li>nmap: <code>nmap</code></li><li>wget ifconfig nc traceroute.. : <code>busybox</code></li><li>ssh: <code>openssh-client</code></li><li>ss iptables: <code>iproute2</code></li><li>ethtool: <code>ethtool</code></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">apk add --no-cache --virtual .persistent-deps \\</span></span>
<span class="line"><span style="color:#A6ACCD;">                curl \\</span></span>
<span class="line"><span style="color:#A6ACCD;">		            tcpdump \\</span></span>
<span class="line"><span style="color:#A6ACCD;">                iproute2 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">                bind-tools \\</span></span>
<span class="line"><span style="color:#A6ACCD;">                ethtool \\</span></span>
<span class="line"><span style="color:#A6ACCD;">                busybox-extras \\</span></span>
<span class="line"><span style="color:#A6ACCD;">                libressl \\</span></span>
<span class="line"><span style="color:#A6ACCD;">                openssh-client \\</span></span>
<span class="line"><span style="color:#A6ACCD;">		            busybox</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,4),t=[o];function c(i,p,d,r,u,h){return a(),e("div",null,t)}const C=s(l,[["render",c]]);export{A as __pageData,C as default};
