import{_ as t,c as a,j as e,a as r,o as i}from"./chunks/framework.D7KqzdP6.js";const u=JSON.parse('{"title":"常见异常","description":"","frontmatter":{"title":"常见异常"},"headers":[],"relativePath":"java/spring/error.md","filePath":"java/spring/error.md"}'),n={name:"java/spring/error.md"};function f(s,o,c,l,m,d){return i(),a("div",null,o[0]||(o[0]=[e("h4",{id:"org-springframework-core-io-buffer-databufferlimitexception-exceeded-limit-on-max-bytes-to-buffer-262144",tabindex:"-1"},[r("org.springframework.core.io.buffer.DataBufferLimitException: Exceeded limit on max bytes to buffer : 262144 "),e("a",{class:"header-anchor",href:"#org-springframework-core-io-buffer-databufferlimitexception-exceeded-limit-on-max-bytes-to-buffer-262144","aria-label":'Permalink to "org.springframework.core.io.buffer.DataBufferLimitException: Exceeded limit on max bytes to buffer : 262144"'},"​")],-1),e("blockquote",null,[e("p",null,"常见于网关操作http的body，或者数据量太大"),e("p",null,"配置参数加大缓冲区"),e("p",null,[r("默认的缓冲区为256K，可以通过配置"),e("code",null,"spring.codec.max-in-memory-size"),r("加大缓冲区")])],-1)]))}const b=t(n,[["render",f]]);export{u as __pageData,b as default};
