import{_ as t,c as o,o as a,b as e,d as r}from"./app.3d2db0cb.js";const x=JSON.parse('{"title":"常见异常","description":"","frontmatter":{"title":"常见异常"},"headers":[],"relativePath":"java/spring/error.md","lastUpdated":1677230567000}'),i={name:"java/spring/error.md"},n=e("h4",{id:"org-springframework-core-io-buffer-databufferlimitexception-exceeded-limit-on-max-bytes-to-buffer-262144",tabindex:"-1"},[r("org.springframework.core.io.buffer.DataBufferLimitException: Exceeded limit on max bytes to buffer : 262144 "),e("a",{class:"header-anchor",href:"#org-springframework-core-io-buffer-databufferlimitexception-exceeded-limit-on-max-bytes-to-buffer-262144","aria-hidden":"true"},"#")],-1),s=e("blockquote",null,[e("p",null,"常见于网关操作http的body，或者数据量太大"),e("p",null,"配置参数加大缓冲区"),e("p",null,[r("默认的缓冲区为256K，可以通过配置"),e("code",null,"spring.codec.max-in-memory-size"),r("加大缓冲区")])],-1),c=[n,s];function d(f,l,p,m,u,_){return a(),o("div",null,c)}const h=t(i,[["render",d]]);export{x as __pageData,h as default};
