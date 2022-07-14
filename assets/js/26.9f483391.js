(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{296:function(s,a,e){"use strict";e.r(a);var t=e(10),n=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"官方文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#官方文档"}},[s._v("#")]),s._v(" 官方文档")]),s._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/sql/sql-server/sql-docs-navigation-guide?view=sql-server-ver15",target:"_blank",rel:"noopener noreferrer"}},[s._v("SQL Server 文档导航提示 - SQL Server | Microsoft Docs"),a("OutboundLink")],1)])]),s._v(" "),a("h4",{attrs:{id:"获取前-n-条数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取前-n-条数据"}},[s._v("#")]),s._v(" 获取前 n 条数据")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("SELECT TOP(10) *  FROM table_name;  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"获取数据库名称"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取数据库名称"}},[s._v("#")]),s._v(" 获取数据库名称")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("select db_name()\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"触发器-mybatis-异常"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#触发器-mybatis-异常"}},[s._v("#")]),s._v(" 触发器 mybatis 异常")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("-- 在触发线执行 sql 前加入\nSET NOCOUNT ON;\n\n。。。。\n\n-- 在触发线执行 sql 后加入\nSET NOCOUNT OFF;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h4",{attrs:{id:"使用-transact-sql-语句在结果集内进行浏览"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-transact-sql-语句在结果集内进行浏览"}},[s._v("#")]),s._v(" 使用 Transact-SQL 语句在结果集内进行浏览")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("-- 定义字段\ndeclare @au_id char( 11 )\n\n-- 每次查询是更新最小 id\nselect @au_id = min( au_id ) from authors\nwhile @au_id is not null\n\nbegin\nselect * from authors where au_id = @au_id\nselect @au_id = min( au_id ) from authors where au_id > @au_id\nend\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h4",{attrs:{id:"使用-for-json-将查询结果格式化为-json-sql-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-for-json-将查询结果格式化为-json-sql-server"}},[s._v("#")]),s._v(" 使用 FOR JSON 将查询结果格式化为 JSON (SQL Server)")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("SELECT *\nFROM table_name  \nFOR JSON\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h4",{attrs:{id:"多行数据合成一行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多行数据合成一行"}},[s._v("#")]),s._v(" 多行数据合成一行")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("SELECT STUFF(( SELECT <拼接的字符串> FROM <表> FOR XML PATH('') ),1,1,'')\n-- 如下\nSELECT STUFF(( SELECT ','+t.cstaffname FROM #staff  t FOR XML PATH('') ),1,1,'')\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);