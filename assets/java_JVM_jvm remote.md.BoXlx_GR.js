import{_ as a,c as e,o as t,a8 as s}from"./chunks/framework.Fyff9zRu.js";const u=JSON.parse('{"title":"java开启远程访问","description":"","frontmatter":{"title":"java开启远程访问"},"headers":[],"relativePath":"java/JVM/jvm remote.md","filePath":"java/JVM/jvm remote.md","lastUpdated":1721389645000}'),n={name:"java/JVM/jvm remote.md"},o=s(`<h2 id="开启参数" tabindex="-1">开启参数 <a class="header-anchor" href="#开启参数" aria-label="Permalink to &quot;开启参数&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>-Dcom.sun.management.jmxremote </span></span>
<span class="line"><span>-Dcom.sun.management.jmxremote.port=10053 </span></span>
<span class="line"><span>-Dcom.sun.management.jmxremote.authenticate=false </span></span>
<span class="line"><span>-Dcom.sun.management.jmxremote.ssl=false</span></span></code></pre></div><h2 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h2><ul><li>这几个参数需要连在一起</li></ul>`,4),l=[o];function i(m,r,c,p,d,_){return t(),e("div",null,l)}const v=a(n,[["render",i]]);export{u as __pageData,v as default};