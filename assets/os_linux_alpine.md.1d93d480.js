import{_ as s,o as e,c as a,Q as n}from"./chunks/framework.54cab62e.js";const _=JSON.parse('{"title":"alpine","description":"","frontmatter":{"title":"alpine"},"headers":[],"relativePath":"os/linux/alpine.md","filePath":"os/linux/alpine.md","lastUpdated":1697773070000}'),l={name:"os/linux/alpine.md"},o=n(`<h1 id="alpine" tabindex="-1">Alpine <a class="header-anchor" href="#alpine" aria-label="Permalink to &quot;Alpine&quot;">​</a></h1><h2 id="网络工具" tabindex="-1">网络工具 <a class="header-anchor" href="#网络工具" aria-label="Permalink to &quot;网络工具&quot;">​</a></h2><ul><li>telnet：<code>busybox-extras</code></li><li>net-tools: <code>net-tools</code></li><li>tcpdump: <code>tcpdump</code></li><li>wget: <code>wget</code></li><li>dig nslookup: <code>bind-tools</code></li><li>curl: <code>curl</code></li><li>nmap: <code>nmap</code></li><li>wget ifconfig nc traceroute.. : <code>busybox</code></li><li>ssh: <code>openssh-client</code></li><li>ss iptables: <code>iproute2</code></li><li>ethtool: <code>ethtool</code></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">apk add --no-cache --virtual .persistent-deps \\</span></span>
<span class="line"><span style="color:#e1e4e8;">                curl \\</span></span>
<span class="line"><span style="color:#e1e4e8;">		            tcpdump \\</span></span>
<span class="line"><span style="color:#e1e4e8;">                iproute2 \\</span></span>
<span class="line"><span style="color:#e1e4e8;">                bind-tools \\</span></span>
<span class="line"><span style="color:#e1e4e8;">                ethtool \\</span></span>
<span class="line"><span style="color:#e1e4e8;">                busybox-extras \\</span></span>
<span class="line"><span style="color:#e1e4e8;">                libressl \\</span></span>
<span class="line"><span style="color:#e1e4e8;">                openssh-client \\</span></span>
<span class="line"><span style="color:#e1e4e8;">		            busybox</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">apk add --no-cache --virtual .persistent-deps \\</span></span>
<span class="line"><span style="color:#24292e;">                curl \\</span></span>
<span class="line"><span style="color:#24292e;">		            tcpdump \\</span></span>
<span class="line"><span style="color:#24292e;">                iproute2 \\</span></span>
<span class="line"><span style="color:#24292e;">                bind-tools \\</span></span>
<span class="line"><span style="color:#24292e;">                ethtool \\</span></span>
<span class="line"><span style="color:#24292e;">                busybox-extras \\</span></span>
<span class="line"><span style="color:#24292e;">                libressl \\</span></span>
<span class="line"><span style="color:#24292e;">                openssh-client \\</span></span>
<span class="line"><span style="color:#24292e;">		            busybox</span></span></code></pre></div>`,4),p=[o];function t(c,i,r,d,u,h){return e(),a("div",null,p)}const b=s(l,[["render",t]]);export{_ as __pageData,b as default};
