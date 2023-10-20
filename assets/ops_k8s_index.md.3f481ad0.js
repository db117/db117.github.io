import{_ as s,o as a,c as n,Q as e,k as t}from"./chunks/framework.54cab62e.js";const y=JSON.parse('{"title":"k8s相关","description":"","frontmatter":{"title":"k8s相关"},"headers":[],"relativePath":"ops/k8s/index.md","filePath":"ops/k8s/index.md","lastUpdated":1697773070000}'),l={name:"ops/k8s/index.md"},r=e('<h3 id="文档" tabindex="-1">文档 <a class="header-anchor" href="#文档" aria-label="Permalink to &quot;文档&quot;">​</a></h3><p><a href="https://kubernetes.io/zh-cn/docs/home/" target="_blank" rel="noreferrer">Kubernetes 文档 | Kubernetes</a></p><p><a href="https://kubernetes.io/zh-cn/docs/reference/kubectl/cheatsheet/" target="_blank" rel="noreferrer">kubectl 备忘单 | Kubernetes</a></p><p><a href="https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands" target="_blank" rel="noreferrer">Kubectl 命令参考</a></p><p><a href="https://github.com/kubernetes" target="_blank" rel="noreferrer">Kubernetes (github.com)</a></p><h3 id="知识点思维导图" tabindex="-1">知识点思维导图 <a class="header-anchor" href="#知识点思维导图" aria-label="Permalink to &quot;知识点思维导图&quot;">​</a></h3>',6),p=t("iframe",{id:"embed_dom",name:"embed_dom",frameborder:"0",style:{display:"block",width:"525px",height:"745px"},src:"https://www.processon.com/embed/62d140ca5653bb2b401e5e8a"},null,-1),o=e(`<h3 id="服务之间访问" tabindex="-1">服务之间访问 <a class="header-anchor" href="#服务之间访问" aria-label="Permalink to &quot;服务之间访问&quot;">​</a></h3><blockquote><p>通过 <strong>&lt;服务名称&gt;.&lt;命名空间&gt;.svc.cluster.local</strong> 即可访问</p><p>​ <strong>&lt;服务名称&gt;.&lt;命名空间&gt;</strong> 也是可以访问的</p><p>同命名空间可以直接通过 <strong>&lt;服务名称&gt;</strong> 访问</p></blockquote><h3 id="secret配置tls" tabindex="-1">secret配置tls <a class="header-anchor" href="#secret配置tls" aria-label="Permalink to &quot;secret配置tls&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">apiVersion: v1</span></span>
<span class="line"><span style="color:#e1e4e8;">kind: Secret</span></span>
<span class="line"><span style="color:#e1e4e8;">metadata:</span></span>
<span class="line"><span style="color:#e1e4e8;">  name: tls-name</span></span>
<span class="line"><span style="color:#e1e4e8;">  namespace: kuboard   # 需指定命名空间，一个secret只能在一个命名空间生效</span></span>
<span class="line"><span style="color:#e1e4e8;">data:</span></span>
<span class="line"><span style="color:#e1e4e8;">	# 直接把证书，秘钥base64编码放入即可</span></span>
<span class="line"><span style="color:#e1e4e8;">  tls.crt: Base64crt</span></span>
<span class="line"><span style="color:#e1e4e8;">  tls.key: Base64key</span></span>
<span class="line"><span style="color:#e1e4e8;">type: kubernetes.io/tls</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">apiVersion: v1</span></span>
<span class="line"><span style="color:#24292e;">kind: Secret</span></span>
<span class="line"><span style="color:#24292e;">metadata:</span></span>
<span class="line"><span style="color:#24292e;">  name: tls-name</span></span>
<span class="line"><span style="color:#24292e;">  namespace: kuboard   # 需指定命名空间，一个secret只能在一个命名空间生效</span></span>
<span class="line"><span style="color:#24292e;">data:</span></span>
<span class="line"><span style="color:#24292e;">	# 直接把证书，秘钥base64编码放入即可</span></span>
<span class="line"><span style="color:#24292e;">  tls.crt: Base64crt</span></span>
<span class="line"><span style="color:#24292e;">  tls.key: Base64key</span></span>
<span class="line"><span style="color:#24292e;">type: kubernetes.io/tls</span></span></code></pre></div>`,4),c=[r,p,o];function i(d,h,_,b,k,u){return a(),n("div",null,c)}const g=s(l,[["render",i]]);export{y as __pageData,g as default};
