(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{372:function(e,t,a){"use strict";a.r(t);var i=a(26),_=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"insert-ignore-into"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#insert-ignore-into"}},[e._v("#")]),e._v(" insert ignore into")]),e._v(" "),a("h3",{attrs:{id:"作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用"}},[e._v("#")]),e._v(" 作用")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("insert ignore")]),e._v(" 会根据主键或者唯一键判断，忽略数据库中已经存在的数据")]),e._v(" "),a("li",[e._v("若数据库没有该条数据，就插入为新的数据，跟普通的 "),a("code",[e._v("insert into")]),e._v(" 一样")]),e._v(" "),a("li",[e._v("若数据库有该条数据，就忽略这条插入语句，不执行插入操作。")])]),e._v(" "),a("h3",{attrs:{id:"主键冲突情况"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主键冲突情况"}},[e._v("#")]),e._v(" 主键冲突情况")]),e._v(" "),a("ol",[a("li",[a("h4",{attrs:{id:"同时向表中插入两条包含主键的数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同时向表中插入两条包含主键的数据"}},[e._v("#")]),e._v(" 同时向表中插入两条包含主键的数据")]),e._v(" "),a("blockquote",[a("p",[e._v("insert ignore into 与普通 insert into 的使用方法几乎完全一样\n插入时要么指定插入的具体列，要么不指定列名插入全部列值，要么对字段加有默认值\n否则会报错：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ERROR 1136 (21S01): Column count doesn't match value count at row 1\n   或 ERROR 1364 (HY000): Field 'title' doesn't have a default value\n")])])])])])]),e._v(" "),a("h3",{attrs:{id:"唯一键冲突情况"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#唯一键冲突情况"}},[e._v("#")]),e._v(" 唯一键冲突情况")]),e._v(" "),a("p",[e._v("​\t数据不会发生变化但是自增主键会加1")]),e._v(" "),a("h2",{attrs:{id:"insert-into-on-duplicate-key-update"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#insert-into-on-duplicate-key-update"}},[e._v("#")]),e._v(" insert into ... on duplicate key update")]),e._v(" "),a("h3",{attrs:{id:"作用-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用-2"}},[e._v("#")]),e._v(" 作用")]),e._v(" "),a("ul",[a("li",[e._v("在"),a("code",[e._v("insert into")]),e._v("语句末尾指定"),a("code",[e._v("on duplicate key update")]),e._v("，会根据主键或者唯一键判断：\n"),a("ul",[a("li",[e._v("若数据库有该条数据，则直接更新原数据，相当于 "),a("code",[e._v("update")])]),e._v(" "),a("li",[e._v("若数据库没有该条数据，则插入为新的数据，跟普通的 "),a("code",[e._v("insert into")]),e._v(" 一样")])])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("insert into table_name(field_name...) values (value...), (value...) on duplicate key update field_name=values(field_name), field_name=field_name;\n")])])]),a("ol",[a("li",[a("p",[e._v("与普通"),a("code",[e._v("insert into")]),e._v("的使用语法差别不大，只是语句结尾有所区别")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("field_name=values(field_name)")])]),e._v(" "),a("p",[a("strong",[e._v("使用的是插入的字段值")])]),e._v(" "),a("p",[e._v("表示当存在主键或唯一键冲突时，使用插入语句中对应的 emp_no 和 title 值替换原数据")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("field_name=field_name")])]),e._v(" "),a("p",[a("strong",[e._v("使用的是原的字段值")])]),e._v(" "),a("p",[e._v('同时，还可以通过运算表达式来指定字段值，如：field_name=field_name+1, field_name=field_name+"test"')])]),e._v(" "),a("li",[a("p",[a("code",[e._v("field_name=value")])]),e._v(" "),a("p",[e._v("直接设置值")])]),e._v(" "),a("li",[a("p",[e._v("为设置更新字段不进行更新")])]),e._v(" "),a("li",[a("p",[e._v("如果是插入操作，受到影响行的值为1；如果更新操作，受到影响行的值为2；如果更新的数据和已有的数据一样")])])]),e._v(" "),a("h2",{attrs:{id:"replace-into"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#replace-into"}},[e._v("#")]),e._v(" replace into")]),e._v(" "),a("h3",{attrs:{id:"作用-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用-3"}},[e._v("#")]),e._v(" 作用")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("replace into")]),e._v(" 会根据主键或者唯一键判断：")]),e._v(" "),a("li",[e._v("若表中已存在该数据，则先删除此行数据，然后插入新的数据，相当于 "),a("code",[e._v("delete + insert")])]),e._v(" "),a("li",[e._v("若表中不存在该数据，则直接插入新数据，跟普通的 "),a("code",[e._v("insert into")]),e._v(" 一样")]),e._v(" "),a("li",[e._v("在存在多个唯一索引,或者高并发情况下不建议使用(可能发生死锁)")])])])}),[],!1,null,null,null);t.default=_.exports}}]);