import{_ as t,o as e,c as l,V as d}from"./chunks/framework.7cbf217e.js";const p=JSON.parse('{"title":"spring-webflux","description":"","frontmatter":{"title":"spring-webflux"},"headers":[],"relativePath":"java/spring/spring-webflux.md","filePath":"java/spring/spring-webflux.md","lastUpdated":1684479953000}'),a={name:"java/spring/spring-webflux.md"},n=d('<blockquote><p>非阻塞，反应式web。</p></blockquote><h3 id="主要组件" tabindex="-1">主要组件 <a class="header-anchor" href="#主要组件" aria-label="Permalink to &quot;主要组件&quot;">​</a></h3><blockquote><p>主要的配置类型，可在spring容器中获取。</p></blockquote><table><thead><tr><th style="text-align:left;">Bean name</th><th style="text-align:left;">Bean type</th><th style="text-align:left;">Count</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">&lt;any&gt;</td><td style="text-align:left;"><code>WebExceptionHandler</code></td><td style="text-align:left;">0..N</td><td style="text-align:left;">异常处理</td></tr><tr><td style="text-align:left;">&lt;any&gt;</td><td style="text-align:left;"><code>WebFilter</code></td><td style="text-align:left;">0..N</td><td style="text-align:left;">过滤器，形成调用链</td></tr><tr><td style="text-align:left;"><code>webHandler</code></td><td style="text-align:left;"><code>WebHandler</code></td><td style="text-align:left;">1</td><td style="text-align:left;">核心，用来处理请求</td></tr><tr><td style="text-align:left;"><code>webSessionManager</code></td><td style="text-align:left;"><code>WebSessionManager</code></td><td style="text-align:left;">0..1</td><td style="text-align:left;">WebSession</td></tr><tr><td style="text-align:left;"><code>serverCodecConfigurer</code></td><td style="text-align:left;"><code>ServerCodecConfigurer</code></td><td style="text-align:left;">0..1</td><td style="text-align:left;">请求数据编码，默认<code>ServerCodecConfigurer.create()</code></td></tr><tr><td style="text-align:left;"><code>forwardedHeaderTransformer</code></td><td style="text-align:left;"><code>ForwardedHeaderTransformer</code></td><td style="text-align:left;">0..1</td><td style="text-align:left;">通过请求头进行转发，默认没有</td></tr></tbody></table>',4),r=[n];function o(s,i,c,f,g,x){return e(),l("div",null,r)}const _=t(a,[["render",o]]);export{p as __pageData,_ as default};
