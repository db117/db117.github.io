(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{455:function(a,s,e){"use strict";e.r(s);var t=e(34),n=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h3",{attrs:{id:"常规使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常规使用"}},[a._v("#")]),a._v(" 常规使用")]),a._v(" "),e("h5",{attrs:{id:"查询出对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查询出对象"}},[a._v("#")]),a._v(" 查询出对象")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("\nList<foo> list = jdbcTemplate.query(sql,new BeanPropertyRowMapper <Foo>(Foo.class));\n\n\nList<foo> result = mock.getJdbcTemplate().query(sql,\n\t\t\t\tnew DataClassRowMapper<Foo>(Foo.class));\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br")])]),e("h5",{attrs:{id:"参数-in"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参数-in"}},[a._v("#")]),a._v(" 参数 in")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('BeanPropertySqlParameterSource params = new BeanPropertySqlParameterSource(new ParameterCollectionBean(3, 5));\nlong l = template.query("SELECT AGE FROM CUSTMR WHERE ID IN (:ids)", params, Long.class).longValue();\n\n\nMapSqlParameterSource params = new MapSqlParameterSource();\nparams.addValue("ids", Arrays.asList(3, 4));\ntemplate.queryForObject(sql, params, Integer.class);\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br")])]),e("h5",{attrs:{id:"简单对象保存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简单对象保存"}},[a._v("#")]),a._v(" 简单对象保存")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('// 会自动获取表字段\nSimpleJdbcInsert insert = new SimpleJdbcInsert(dataSource)\n\t\t\t\t.withTableName("me") // 表名称\n\t\t\t\t.usingGeneratedKeyColumns("id") // 自增\n\t\t\t\t.usingColumns("col1","col2");// 使用的字段,如设置则不会自动获取\n// 自动匹配参数并执行\ninsert.execute(new BeanPropertySqlParameterSource(new Person()));\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);