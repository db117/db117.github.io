import{_ as a,c as n,a3 as e,o as t}from"./chunks/framework.BChxy9sN.js";const k=JSON.parse('{"title":"k8s相关","description":"","frontmatter":{"title":"k8s相关"},"headers":[],"relativePath":"ops/k8s/index.md","filePath":"ops/k8s/index.md"}'),p={name:"ops/k8s/index.md"};function l(o,s,i,r,c,d){return t(),n("div",null,s[0]||(s[0]=[e(`<h3 id="服务之间访问" tabindex="-1">服务之间访问 <a class="header-anchor" href="#服务之间访问" aria-label="Permalink to &quot;服务之间访问&quot;">​</a></h3><blockquote><p>通过 <strong>&lt;服务名称&gt;.&lt;命名空间&gt;.svc.cluster.local</strong> 即可访问</p><p>​ <strong>&lt;服务名称&gt;.&lt;命名空间&gt;</strong> 也是可以访问的</p><p>同命名空间可以直接通过 <strong>&lt;服务名称&gt;</strong> 访问</p></blockquote><h3 id="secret配置tls" tabindex="-1">secret配置tls <a class="header-anchor" href="#secret配置tls" aria-label="Permalink to &quot;secret配置tls&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>apiVersion: v1</span></span>
<span class="line"><span>kind: Secret</span></span>
<span class="line"><span>metadata:</span></span>
<span class="line"><span>  name: tls-name</span></span>
<span class="line"><span>  namespace: kuboard   # 需指定命名空间，一个secret只能在一个命名空间生效</span></span>
<span class="line"><span>data:</span></span>
<span class="line"><span>	# 直接把证书，秘钥base64编码放入即可</span></span>
<span class="line"><span>  tls.crt: Base64crt</span></span>
<span class="line"><span>  tls.key: Base64key</span></span>
<span class="line"><span>type: kubernetes.io/tls</span></span></code></pre></div>`,4)]))}const u=a(p,[["render",l]]);export{k as __pageData,u as default};
