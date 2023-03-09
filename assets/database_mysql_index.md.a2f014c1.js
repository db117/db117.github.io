import{_ as e,c as l,o as a,a as o}from"./app.a840672a.js";const h=JSON.parse('{"title":"mysql","description":"","frontmatter":{"title":"mysql"},"headers":[{"level":2,"title":"mysql","slug":"mysql","link":"#mysql","children":[{"level":4,"title":"MySQL 8.0 Public Key Retrieval is not allowed","slug":"mysql-8-0-public-key-retrieval-is-not-allowed","link":"#mysql-8-0-public-key-retrieval-is-not-allowed","children":[]},{"level":4,"title":"Communications link failure、No appropriate protocol Mysql连接失败解决方法","slug":"communications-link-failure、no-appropriate-protocol-mysql连接失败解决方法","link":"#communications-link-failure、no-appropriate-protocol-mysql连接失败解决方法","children":[]},{"level":4,"title":"order by 主键","slug":"order-by-主键","link":"#order-by-主键","children":[]}]}],"relativePath":"database/mysql/index.md","lastUpdated":1678341619000}'),r={name:"database/mysql/index.md"},i=o('<h2 id="mysql" tabindex="-1">mysql <a class="header-anchor" href="#mysql" aria-hidden="true">#</a></h2><h4 id="mysql-8-0-public-key-retrieval-is-not-allowed" tabindex="-1">MySQL 8.0 Public Key Retrieval is not allowed <a class="header-anchor" href="#mysql-8-0-public-key-retrieval-is-not-allowed" aria-hidden="true">#</a></h4><blockquote><p>最简单的解决方法是在连接后面添加 <code>allowPublicKeyRetrieval=true</code></p></blockquote><h4 id="communications-link-failure、no-appropriate-protocol-mysql连接失败解决方法" tabindex="-1">Communications link failure、No appropriate protocol Mysql连接失败解决方法 <a class="header-anchor" href="#communications-link-failure、no-appropriate-protocol-mysql连接失败解决方法" aria-hidden="true">#</a></h4><blockquote><p>基本上是因为http ssl问题</p></blockquote><ul><li>url 数据源后面添加 <code>useSSL=false</code>关闭ssl</li><li>升级jdk版本</li></ul><h4 id="order-by-主键" tabindex="-1">order by 主键 <a class="header-anchor" href="#order-by-主键" aria-hidden="true">#</a></h4><blockquote><p>当 order by 只有主键时，可以在 select 中出现所有字段。</p><p><a href="https://dev.mysql.com/doc/refman/5.7/en/group-by-handling.html" target="_blank" rel="noreferrer">MySQL :: MySQL 5.7 Reference Manual :: 12.20.3 MySQL Handling of GROUP BY</a></p></blockquote>',8),t=[i];function n(s,c,d,p,u,m){return a(),l("div",null,t)}const b=e(r,[["render",n]]);export{h as __pageData,b as default};
