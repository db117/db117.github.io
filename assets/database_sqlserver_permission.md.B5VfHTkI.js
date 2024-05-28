import{_ as s,c as a,o as e,a7 as n}from"./chunks/framework.Sxn4jSlr.js";const N=JSON.parse('{"title":"权限相关","description":"","frontmatter":{"title":"权限相关"},"headers":[],"relativePath":"database/sqlserver/permission.md","filePath":"database/sqlserver/permission.md","lastUpdated":1716896352000}'),t={name:"database/sqlserver/permission.md"},p=n(`<h2 id="备忘单" tabindex="-1">备忘单 <a class="header-anchor" href="#备忘单" aria-label="Permalink to &quot;备忘单&quot;">​</a></h2><h3 id="授予权限" tabindex="-1">授予权限 <a class="header-anchor" href="#授予权限" aria-label="Permalink to &quot;授予权限&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>-- 把Student表查询权限授予userName</span></span>
<span class="line"><span>GRANT SELECT ON Student TO userName;</span></span>
<span class="line"><span>-- 把Student表全部权限授予userName</span></span>
<span class="line"><span>GRANT ALL ON Student TO userName;</span></span>
<span class="line"><span>-- 把Student表查询权限授予全部用户</span></span>
<span class="line"><span>GRANT SELECT ON Student TO PUBLIC;</span></span>
<span class="line"><span>-- 把Student表name,age,sex字段的更新权限授予userName.授予用户更新多列的权限</span></span>
<span class="line"><span>GRANT UPDATE(name,age,sex) ON  Student TO userName;</span></span>
<span class="line"><span>-- 把对表Student的INSERT权限授予userName用户，并允许他再将此权限授予其他用户.</span></span>
<span class="line"><span>GRANT INSERT  ON  Student TO userName WITH GRANT OPTION;</span></span></code></pre></div><h3 id="回收权限" tabindex="-1">回收权限 <a class="header-anchor" href="#回收权限" aria-label="Permalink to &quot;回收权限&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>-- 回收userName用户对Student表的查询权限</span></span>
<span class="line"><span>REVOKE SELECT ON Student FROM userName;</span></span>
<span class="line"><span>-- 级联回收user1，user2，user3用户对Student表的查询权限</span></span>
<span class="line"><span>-- 将user1的select权限回收，同时也将user2，user3的select权限回收，前提是user2，user3的select权限是user1授予的.</span></span>
<span class="line"><span>REVOKE SELECT ON Student FROM userName CASCADE;</span></span></code></pre></div>`,5),l=[p];function i(r,c,d,u,o,h){return e(),a("div",null,l)}const _=s(t,[["render",i]]);export{N as __pageData,_ as default};
