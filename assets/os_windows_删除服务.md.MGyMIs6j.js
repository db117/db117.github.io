import{_ as e,c as a,o as t,a5 as o}from"./chunks/framework.CyS7wUzW.js";const m=JSON.parse('{"title":"删除服务","description":"","frontmatter":{},"headers":[],"relativePath":"os/windows/删除服务.md","filePath":"os/windows/删除服务.md"}'),s={name:"os/windows/删除服务.md"},r=o('<h1 id="删除服务" tabindex="-1">删除服务 <a class="header-anchor" href="#删除服务" aria-label="Permalink to &quot;删除服务&quot;">​</a></h1><h2 id="sc命令" tabindex="-1">sc命令 <a class="header-anchor" href="#sc命令" aria-label="Permalink to &quot;sc命令&quot;">​</a></h2><p>sc delete &quot;服务名&quot; (如果服务名中间有空格，就需要前后加引号）</p><h2 id="直接进行注册表编辑" tabindex="-1">直接进行注册表编辑 <a class="header-anchor" href="#直接进行注册表编辑" aria-label="Permalink to &quot;直接进行注册表编辑&quot;">​</a></h2><p>打开注册表编辑器，找到下面的键值： <code>HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services</code> 一般服务会以相同的名字在这里显示一个主健，直接删除相关的键值便可。</p>',5),c=[r];function _(n,i,d,l,h,p){return t(),a("div",null,c)}const f=e(s,[["render",_]]);export{m as __pageData,f as default};
