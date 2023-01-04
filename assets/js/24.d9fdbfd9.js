(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{300:function(s,a,e){"use strict";e.r(a);var t=e(10),n=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"执行状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行状态"}},[s._v("#")]),s._v(" 执行状态")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("查询正在执行的 SQL")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("SELECT\n    procpid,\n    start,\n    now() - start AS lap,\n    current_query\nFROM\n    (SELECT\n         backendid,\n         pg_stat_get_backend_pid(S.backendid) AS procpid,\n         pg_stat_get_backend_activity_start(S.backendid) AS start,\n         pg_stat_get_backend_activity(S.backendid) AS current_query\n     FROM\n         (SELECT pg_stat_get_backend_idset() AS backendid) AS S\n    ) AS S\nwhere start is not null\nORDER BY\n    lap DESC;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("结束正在进行的查询")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("select pg_cancel_backend(pid);\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("结束正在执行操作(修改修改数据库操作)")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("select pg_terminate_backend(pid)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("查询最耗时的SQL")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("select * from pg_stat_statements order by total_time desc limit 5;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("查询使用Buffer次数最多的SQL")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("select * from pg_stat_statements order by shared_blks_hit+shared_blks_read desc limit 5;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])]),s._v(" "),a("h3",{attrs:{id:"explain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#explain"}},[s._v("#")]),s._v(" EXPLAIN")]),s._v(" "),a("h4",{attrs:{id:"属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#属性"}},[s._v("#")]),s._v(" 属性")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("ANALYZE")]),s._v(" [ boolean ]   : 是否真正执行 该选项默认为FALSE。")]),s._v(" "),a("li",[a("code",[s._v("VERBOSE")]),s._v(" [ boolean ]   : 计划中每个节点输出的各个列，如果触发器被触发，还会输出触发器的名称。该选项默认为FALSE。")]),s._v(" "),a("li",[a("code",[s._v("COSTS")]),s._v(" [ boolean ]   : 选项显示每个计划节点的启动成本和总成本，以及估计行数和每行宽度。该选项默认是TRUE。")]),s._v(" "),a("li",[a("code",[s._v("BUFFERS")]),s._v(" [ boolean ]   : 选项显示关于缓存区的信息。该选项只能与ANALYZE参数一起使用。该选项默认为FALSE。")]),s._v(" "),a("li",[a("code",[s._v("TIMING")]),s._v(" [ boolean ]   : 记录每一步的时间 默认是TRUE。")]),s._v(" "),a("li",[a("code",[s._v("FORMAT")]),s._v(" { TEXT | XML | JSON | YAML }  : 输出格式,默认 text")])]),s._v(" "),a("h4",{attrs:{id:"结果分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结果分析"}},[s._v("#")]),s._v(" 结果分析")]),s._v(" "),a("p",[s._v("扫描类型")]),s._v(" "),a("ul",[a("li",[s._v("全表扫描 (seq scan)")]),s._v(" "),a("li",[s._v("索引扫描(Index Scan)")]),s._v(" "),a("li",[s._v("位图扫描(Bitmap)")])]),s._v(" "),a("p",[s._v("表关联")]),s._v(" "),a("ul",[a("li",[s._v("Nestloop join\n"),a("ul",[a("li",[s._v("循环第一张表,去第二张表查询数据")]),s._v(" "),a("li",[s._v("小表驱动大表,大表最好有索引")])])]),s._v(" "),a("li",[s._v("Hash join\n"),a("ul",[a("li",[s._v("对一张表建立 hash ,然后扫描另一张表")])])]),s._v(" "),a("li",[s._v("Merge Join\n"),a("ul",[a("li",[s._v("对两张表进行排序,然后合并")])])])]),s._v(" "),a("h4",{attrs:{id:"小技巧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小技巧"}},[s._v("#")]),s._v(" 小技巧")]),s._v(" "),a("p",[s._v("对于分析插入更新的语句，我们我们是可以把ANALYZE放到事物里面的，分析后之后回滚")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("BEGIN;\nEXPLAIN ANALYZE ...;\nROLLBACK;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);