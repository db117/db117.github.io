(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{303:function(t,e,v){"use strict";v.r(e);var _=v(38),a=Object(_.a)({},function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"mysql时间"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mysql时间","aria-hidden":"true"}},[t._v("#")]),t._v(" mysql时间")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("类型名称")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("日期格式")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("日期范围")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("存储需求")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("YEAR")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("YYYY")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("1901 ~ 2155")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("1 个字节")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("TIME")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("HH:MM:SS")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("-838:59:59 ~ 838:59:59")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("3 个字节")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("DATE")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("YYYY-MM-DD")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("1000-01-01 ~ 9999-12-31")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("3 个字节")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("DATETIME")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("YYYY-MM-DD HH:MM:SS")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("1000-01-01 00:00:00 ~ 9999-12-31 23:59:59")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("5-8 个字节")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("TIMESTAMP")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("YYYY-MM-DD HH:MM:SS")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("1980-01-01 00:00:01 UTC ~ 2040-01-19 03:14:07 UTC")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("4 个字节")])])])]),t._v(" "),v("h2",{attrs:{id:"year-类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#year-类型","aria-hidden":"true"}},[t._v("#")]),t._v(" YEAR 类型")]),t._v(" "),v("p",[t._v("YEAR 类型是一个单字节类型，用于表示年，在存储时只需要 1 个字节。可以使用各种格式指定 YEAR，如下所示：")]),t._v(" "),v("ul",[v("li",[t._v("以 4 位字符串或者 4 位数字格式表示的 YEAR，范围为 '1901'～'2155'。输入格式为 'YYYY' 或者 YYYY，例如，输入 '2010' 或 2010，插入数据库的值均为 2010。")]),t._v(" "),v("li",[t._v("以 2 位字符串格式表示的 YEAR，范围为 '00' 到 '99'。'00'～'69' 和 '70'～'99' 范围的值分别被转换为 2000～2069 和 1970～1999 范围的 YEAR 值。'0' 与 '00' 的作用相同。插入超过取值范围的值将被转换为 2000。")]),t._v(" "),v("li",[t._v("以 2 位数字表示的 YEAR，范围为 1～99。1～99 和 70～99 范围的值分别被转换为 2001～2069 和 1970～1999 范围的 YEAR 值。注意，在这里 0 值将被转换为 0000，而不是 2000。")])]),t._v(" "),v("blockquote",[v("p",[t._v("提示：两位整数范围与两位字符串范围稍有不同。例如，插入 3000 年，读者可能会使用数字格式的 0 表示 YEAR，实际上，插入数据库的值为 0000，而不是所希望的 3000。只有使用字符串格式的 '0' 或 '00'，才可以被正确解释为 3000，非法 YEAR值将被转换为 0000。")])]),t._v(" "),v("h2",{attrs:{id:"time-类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#time-类型","aria-hidden":"true"}},[t._v("#")]),t._v(" TIME 类型")]),t._v(" "),v("p",[t._v("TIME 类型用于只需要时间信息的值，在存储时需要 3 个字节。格式为 HH:MM:SS。HH 表示小时，MM 表示分钟，SS 表示秒。\nTIME 类型的取值范围为 -838：59：59～838：59：59，小时部分如此大的原因是 TIME 类型不仅可以用于表示一天的时间（必须小于 24 小时），还可能是某个事件过去的时间或两个事件之间的时间间隔（可大于 24 小时，或者甚至为负）。")]),t._v(" "),v("ul",[v("li",[t._v("'D HH：MM：SS' 格式的字符串。还可以使用这些“非严格”的语法：'HH：MM：SS'、'HH：MM'、'D HH' 或 'SS'。这里的 D 表示日，可以取 0～34 之间的值。在插入数据库时，D 被转换为小时保存，格式为 “D*24+HH”。")]),t._v(" "),v("li",[t._v("'HHMMSS' 格式、没有间隔符的字符串或者 HHMMSS 格式的数值，假定是有意义的时间。例如，'101112' 被理解为'10：11：12'，但是 '106112' 是不合法的（它有一个没有意义的分钟部分），在存储时将变为 00：00：00。")])]),t._v(" "),v("blockquote",[v("p",[t._v("提示：为 TIME 列分配简写值时应注意：如果没有冒号，MySQL 解释值时，假定最右边的两位表示秒。（MySQL 解释 TIME 值为过去的时间而不是当前的时间）。例如，读者可能认为 '1112' 和 1112 表示 11：12：00（即 11 点过 12 分钟），但MySQL 将它们解释为 00：11：12（即 11 分 12 秒）。同样 '12' 和 12 被解释为00：00：12。相反，TIME 值中如果使用冒号则肯定被看作当天的时间，也就是说，'11：12' 表示 11：12：00，而不是 00：11：12。")])]),t._v(" "),v("h2",{attrs:{id:"date-类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#date-类型","aria-hidden":"true"}},[t._v("#")]),t._v(" DATE 类型")]),t._v(" "),v("p",[t._v("DATE 类型用于仅需要日期值时，没有时间部分，在存储时需要 3 个字节。日期格式为 'YYYY-MM-DD'，其中 YYYY 表示年，MM 表示月，DD 表示日。\n在给 DATE 类型的字段赋值时，可以使用字符串类型或者数字类型的数据插入，只要符合 DATE 的日期格式即可。如下所示：")]),t._v(" "),v("blockquote",[v("p",[t._v("提示：MySQL 允许“不严格”语法：任何标点符号都可以用作日期部分之间的间隔符。例如，'98-11-31'、'98.11.31'、'98/11/31'和'98@11@31' 是等价的，这些值也可以正确地插入数据库。")])]),t._v(" "),v("h2",{attrs:{id:"datetime-类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#datetime-类型","aria-hidden":"true"}},[t._v("#")]),t._v(" DATETIME 类型")]),t._v(" "),v("p",[t._v("MySQL "),v("code",[t._v("DATETIME")]),t._v("存储包含"),v("a",{attrs:{href:"http://www.yiibai.com/mysql/date.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("日期"),v("OutboundLink")],1),t._v("和"),v("a",{attrs:{href:"http://www.yiibai.com/mysql/time.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("时间"),v("OutboundLink")],1),t._v("的值。 当您从"),v("code",[t._v("DATETIME")]),t._v("列"),v("a",{attrs:{href:"http://www.yiibai.com/mysql/select-statement-query-data.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("查询数据"),v("OutboundLink")],1),t._v("时，MySQL会以以下格式显示"),v("code",[t._v("DATETIME")]),t._v("值：")]),t._v(" "),v("div",{staticClass:"language-sql extra-class"},[v("pre",{pre:!0,attrs:{class:"language-sql"}},[v("code",[t._v("YYYY"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("MM"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("DD HH:MM:SS\n"),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SQL")]),t._v("\n")])])]),v("p",[t._v("默认情况下，"),v("code",[t._v("DATETIME")]),t._v("的值范围为"),v("code",[t._v("1000-01-01 00:00:00")]),t._v("至"),v("code",[t._v("9999-12-31 23:59:59")]),t._v("。")]),t._v(" "),v("p",[v("code",[t._v("DATETIME")]),t._v("值使用"),v("code",[t._v("5")]),t._v("个字节进行存储。另外，"),v("code",[t._v("DATETIME")]),t._v("值可以包括格式为"),v("code",[t._v("YYYY-MM-DD HH:MM:SS [.fraction]")]),t._v("例如："),v("code",[t._v("2017-12-20 10:01:00.999999")]),t._v("的尾数有小数秒。 当包含小数秒精度时，"),v("code",[t._v("DATETIME")]),t._v("值需要更多存储，如下表所示：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("分数秒精度")]),t._v(" "),v("th",[t._v("存储(字节)")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("0")]),t._v(" "),v("td",[t._v("0")])]),t._v(" "),v("tr",[v("td",[t._v("1，2")]),t._v(" "),v("td",[t._v("1")])]),t._v(" "),v("tr",[v("td",[t._v("3，4")]),t._v(" "),v("td",[t._v("2")])]),t._v(" "),v("tr",[v("td",[t._v("5，6")]),t._v(" "),v("td",[t._v("3")])])])]),t._v(" "),v("p",[t._v("例如，"),v("code",[t._v("2017-12-20 10:01:00.999999")]),t._v("需要"),v("code",[t._v("8")]),t._v("个字节，"),v("code",[t._v("2015-12-20 10:01:00")]),t._v("需要"),v("code",[t._v("5")]),t._v("个字节，"),v("code",[t._v("3")]),t._v("个字节为"),v("code",[t._v(".999999")]),t._v("，而"),v("code",[t._v("2017-12-20 10:01:00.9")]),t._v("只需要"),v("code",[t._v("6")]),t._v("个字节，小数秒精度为"),v("code",[t._v("1")]),t._v("字节。")]),t._v(" "),v("blockquote",[v("p",[t._v("请注意，在"),v("em",[t._v("MySQL 5.6.4")]),t._v("之前，"),v("code",[t._v("DATETIME")]),t._v("值需要"),v("code",[t._v("8")]),t._v("字节存储而不是"),v("code",[t._v("5")]),t._v("个字节。")])]),t._v(" "),v("h2",{attrs:{id:"timestamp-类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#timestamp-类型","aria-hidden":"true"}},[t._v("#")]),t._v(" TIMESTAMP 类型")]),t._v(" "),v("p",[t._v("TIMESTAMP 的显示格式与 DATETIME 相同，显示宽度固定在 19 个字符，日期格式为 YYYY-MM-DD HH：MM：SS，在存储时需要 4 个字节。但是 TIMESTAMP 列的取值范围小于 DATETIME 的取值范围，为 '1970-01-01 00：00：01'UTC～'2038-01-19 03：14：07'UTC。在插入数据时，要保证在合法的取值范围内。")]),t._v(" "),v("blockquote",[v("p",[t._v("提示：协调世界时（英：Coordinated Universal Time，法：Temps Universel Coordonné）又称为世界统一时间、世界标准时间、国际协调时间。英文（CUT）和法文（TUC）的缩写不同，作为妥协，简称 UTC。")])]),t._v(" "),v("p",[t._v("TIMESTAMP 与 DATETIME 除了存储字节和支持的范围不同外，还有一个最大的区别是：")]),t._v(" "),v("ul",[v("li",[t._v("DATETIME 在存储日期数据时，按实际输入的格式存储，即输入什么就存储什么，与时区无关；")]),t._v(" "),v("li",[t._v("而 TIMESTAMP 值的存储是以 UTC（世界标准时间）格式保存的，存储时对当前时区进行转换，检索时再转换回当前时区。即查询时，根据当前时区的不同，显示的时间值是不同的。")])]),t._v(" "),v("blockquote",[v("p",[t._v("提示：如果为一个 DATETIME 或 TIMESTAMP 对象分配一个 DATE 值，结果值的时间部分被设置为 '00：00：00'，因此 DATE 值未包含时间信息。如果为一个 DATE 对象分配一个 DATETIME 或 TIMESTAMP 值，结果值的时间部分被删除，因此DATE 值未包含时间信息。")])]),t._v(" "),v("p",[t._v("整理自:【易百教程】：https://www.yiibai.com/mysql/datetime.html")]),t._v(" "),v("p",[t._v("http://c.biancheng.net/view/2425.html")])])},[],!1,null,null,null);e.default=a.exports}}]);