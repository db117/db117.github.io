import{_ as s,c as e,o as a,a as n}from"./app.55d73d08.js";const h=JSON.parse('{"title":"权限相关","description":"","frontmatter":{"title":"权限相关"},"headers":[{"level":2,"title":"备忘单","slug":"备忘单","link":"#备忘单","children":[{"level":3,"title":"授予权限","slug":"授予权限","link":"#授予权限","children":[]},{"level":3,"title":"回收权限","slug":"回收权限","link":"#回收权限","children":[]}]}],"relativePath":"database/sqlserver/permission.md","lastUpdated":1677490656000}'),l={name:"database/sqlserver/permission.md"},t=n(`<h2 id="备忘单" tabindex="-1">备忘单 <a class="header-anchor" href="#备忘单" aria-hidden="true">#</a></h2><h3 id="授予权限" tabindex="-1">授予权限 <a class="header-anchor" href="#授予权限" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">-- 把Student表查询权限授予userName</span></span>
<span class="line"><span style="color:#A6ACCD;">GRANT SELECT ON Student TO userName;</span></span>
<span class="line"><span style="color:#A6ACCD;">-- 把Student表全部权限授予userName</span></span>
<span class="line"><span style="color:#A6ACCD;">GRANT ALL ON Student TO userName;</span></span>
<span class="line"><span style="color:#A6ACCD;">-- 把Student表查询权限授予全部用户</span></span>
<span class="line"><span style="color:#A6ACCD;">GRANT SELECT ON Student TO PUBLIC;</span></span>
<span class="line"><span style="color:#A6ACCD;">-- 把Student表name,age,sex字段的更新权限授予userName.授予用户更新多列的权限</span></span>
<span class="line"><span style="color:#A6ACCD;">GRANT UPDATE(name,age,sex) ON  Student TO userName;</span></span>
<span class="line"><span style="color:#A6ACCD;">-- 把对表Student的INSERT权限授予userName用户，并允许他再将此权限授予其他用户.</span></span>
<span class="line"><span style="color:#A6ACCD;">GRANT INSERT  ON  Student TO userName WITH GRANT OPTION;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="回收权限" tabindex="-1">回收权限 <a class="header-anchor" href="#回收权限" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">-- 回收userName用户对Student表的查询权限</span></span>
<span class="line"><span style="color:#A6ACCD;">REVOKE SELECT ON Student FROM userName;</span></span>
<span class="line"><span style="color:#A6ACCD;">-- 级联回收user1，user2，user3用户对Student表的查询权限</span></span>
<span class="line"><span style="color:#A6ACCD;">-- 将user1的select权限回收，同时也将user2，user3的select权限回收，前提是user2，user3的select权限是user1授予的.</span></span>
<span class="line"><span style="color:#A6ACCD;">REVOKE SELECT ON Student FROM userName CASCADE;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,5),p=[t];function r(c,o,i,d,u,A){return a(),e("div",null,p)}const N=s(l,[["render",r]]);export{h as __pageData,N as default};
