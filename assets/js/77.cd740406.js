(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{442:function(s,a,n){"use strict";n.r(a);var e=n(27),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"基础语法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基础语法"}},[s._v("#")]),s._v(" 基础语法")]),s._v(" "),n("h3",{attrs:{id:"字符输出"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#字符输出"}},[s._v("#")]),s._v(" 字符输出")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("变量存在，输出该变量，否则不输出\n"),n("code",[s._v("${emp.name?if_exists}")])])]),s._v(" "),n("li",[n("p",[s._v("变量存在，输出该变量，否则不输出")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("${emp.name!}\n")])])])]),s._v(" "),n("li",[n("p",[s._v("变量不存在，取默认值xxx")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('${emp.name?default("xxx")}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("变量不存在，取默认值xxx")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('${emp.name!"xxx"} \n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("对字符串进行HTML编码，对html中特殊字符进行转义")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('${"123<br>456"?html}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("使字符串第一个字母大写")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('${"str"?cap_first}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("将字符串转换成小写")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('${"Str"?lower_case}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("将字符串转换成大写")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('${"Str"?upper_case}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("去掉字符串前后的空白字符")]),s._v(" "),n("ul",[n("li",[n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('  ${"str"?trim}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])])])]),s._v(" "),n("li",[n("p",[s._v("输出hello+变量名")]),s._v(" "),n("ul",[n("li",[n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('  ${"hello${emp.name!}"}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])]),s._v(" "),n("li",[n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('  ${"hello"+emp.name!}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])])])]),s._v(" "),n("li",[n("p",[s._v("截取子串")]),s._v(" "),n("ul",[n("li",[n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('  <#assign str = "abcdefghijklmn"/>\n  // 方法1${str?substring(0,4)} // 输出abcd\n  // 方法2${str[0]}${str[4]} // 结果是ae\n  ${str[1..4]} 　　　 // 结果是bcde// 返回指定字符的索引${str?index_of("n")}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])])])])])]),s._v(" "),n("h3",{attrs:{id:"日期输出"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#日期输出"}},[s._v("#")]),s._v(" 日期输出")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("日期格式")]),s._v(" "),n("ul",[n("li",[n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("${emp.date?string('yyyy-MM-dd')}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])])])])]),s._v(" "),n("h3",{attrs:{id:"数字输出"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数字输出"}},[s._v("#")]),s._v(" 数字输出")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("${num?c}\n// 不添加逗号输出数字\n\n${emp.name?string.number} 　\t\t\t\t\t \n// 输出20\n\n${emp.name?string.currency} \t\t\t\t \n// ￥20.00\n\n${emp.name?string.percent} \t\t\t\t\t \n// 20%\n\n${1.222?int} 　　　　　　　　　　 \t\t\t\n// 将小数转为int，输出1\n\n<#setting number_format=\"percent\"/> \t\n// 设置数字默认输出方式('percent',百分比)\n\n<#assign answer=42/> 　　　　　　　　 \t\n// 声明变量 answer 42\n\n#{answer} 　　　　　　　　 \n// 输出 4,200%\n\n${answer?string} 　　　　 \n// 输出 4,200%\n\n${answer?string.number} 　　\n// 输出 42\n\n${answer?string.currency} \n// 输出 ￥42.00\n\n${answer?string.percent} 　\n// 输出 4,200%\n\n#{answer} 　　　　　　　　\n// 输出 42\n\n\n数字格式化插值可采用#{expr;format}形式来格式化数字,其中format可以是:\nmX:小数部分最小X位\nMX:小数部分最大X位\n如下面的例子:\n<#assign x=2.582/><#assign y=4/>#{x; M2} // 输出2.58\n#{y; M2} // 输出4\n#{x; m2} // 输出2.58\n#{y; m2} // 输出4.0\n#{x; m1M2} // 输出2.58\n#{x; m1M2} // 输出4.0\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br")])]),n("h3",{attrs:{id:"比较运算符"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#比较运算符"}},[s._v("#")]),s._v(" 比较运算符")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("= 或 == ：判断两个值是否相等.\n!= ：判断两个值是否不等.\n> 或 gt ：判断左边值是否大于右边值\n>= 或 gte ：判断左边值是否大于等于右边值\n< 或 lt ：判断左边值是否小于右边值\n<= 或 lte ：判断左边值是否小于等于右边值\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h3",{attrs:{id:"逻辑判断"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#逻辑判断"}},[s._v("#")]),s._v(" 逻辑判断")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<#if condition>\n...\n<#elseif condition2>\n...\n<#elseif condition3>\n...\n<#else>\n...\n</#if>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("条件可为数字，可为字符串\n<#switch value>\n <#case refValue1>\n ....\n<#break>\n<#case refValue2>\n....\n<#break>\n <#case refValueN>\n ....\n<#break>\n <#default>\n ....\n </#switch>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("h3",{attrs:{id:"空值判断"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#空值判断"}},[s._v("#")]),s._v(" 空值判断")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// 当 object 不为空时\n<#if object??>...</#if>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h3",{attrs:{id:"集合-循环"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#集合-循环"}},[s._v("#")]),s._v(" 集合 & 循环")]),s._v(" "),n("h4",{attrs:{id:"遍历集合"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#遍历集合"}},[s._v("#")]),s._v(" 遍历集合")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<#list empList! as emp>\n    ${emp.name!}\n</#list>\n\n// 等效于java for(int i=0; i <= 100; i++)\n<#list 0..100 as i> 　　\n　　${i}\n</#list>\n\n循环索引\n<#list 0..(empList!?size-1) as i>\n    ${empList[i].name!}\n</#list>\n\n循环的状态\nempList?size 　　　// 取集合的长度\nemp_index: 　　　　// int类型，当前对象的索引值\nemp_has_next:     // boolean类型，是否存在下一个对象\n\n// 使用<#break>跳出循环\n<#if emp_index = 0><#break></#if>\n\n// 集合长度判断\n<#if empList?size != 0></#if>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br")])]),n("h4",{attrs:{id:"集合"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#集合"}},[s._v("#")]),s._v(" 集合")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('// 定义一个int区间的0~100的集合，数字范围也支持反递增,如100..2\n<#assign l=0..100/>    \n\n// 截取子集合：\nempList[3..5] //返回empList集合的子集合,子集合中的元素是empList集合中的第4-6个元素\n\n// 创建集合：\n<#list ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期天"] as x>\n\n// 集合连接运算,将两个集合连接成一个新的集合\n<#list ["星期一","星期二","星期三"] + ["星期四","星期五","星期六","星期天"] as x>\n\nseq_contains：判断序列中的元素是否存在\n<#assign x = ["red", 16, "blue", "cyan"]>\n${x?seq_contains("blue")?string("yes", "no")}    // yes\n${x?seq_contains("yellow")?string("yes", "no")}  // no\n${x?seq_contains(16)?string("yes", "no")}        // yes\n${x?seq_contains("16")?string("yes", "no")}      // no\n\n// seq_index_of：第一次出现的索引\n<#assign x = ["red", 16, "blue", "cyan", "blue"]>\n${x?seq_index_of("blue")}  // 2\n\n// sort_by：排序（升序）\n<#list movies?sort_by("showtime") as movie></#list>\n\n// sort_by：排序（降序）\n<#list movies?sort_by("showtime")?reverse as movie></#list>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br")])]),n("h4",{attrs:{id:"排序"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#排序"}},[s._v("#")]),s._v(" 排序")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('排序，按元素的首字母\n<#list movies?sort as movie>\n　　<a href="${movie.url}">${movie.name}</a>\n</#list>\n\n// 若要按list中对象元素的某一属性排序的话，则用\n<#list moives?sort_by(["name"]) as movie>\n　　<a href="${movie.url}">${movie.name}</a>\n</#list>\n\n按list中对象元素的[name]属性排序的，是升序，如果需要降序的话，如下所示：\n<#list movies?sort_by(["name"])?reverse as movie>\n　　<a href="${movie.url}">${movie.name}</a>\n</#list>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("h4",{attrs:{id:"map"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#map"}},[s._v("#")]),s._v(" map")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('// 创建map\n<#assign scores = {"语文":86,"数学":78}>\n\n// Map连接运算符\n<#assign scores = {"语文":86,"数学":78} + {"数学":87,"Java":93}>\n\n// Map元素输出\nemp.name       // 全部使用点语法\nemp["name"]    // 使用方括号\n\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h3",{attrs:{id:"转义字符"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#转义字符"}},[s._v("#")]),s._v(" 转义字符")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('\\" ：双引号(u0022)\n\\\' ：单引号(u0027)\n\\\\ ：反斜杠(u005C)\n\\n ：换行(u000A)\n\\r ：回车(u000D)\n\\t ：Tab(u0009)\n\\b ：退格键(u0008)\n\\f ：Form feed(u000C)\n\\l ：<\n\\g ：>\n\\a ：&\n\\{ ：{\n\\xCode ：直接通过4位的16进制数来指定Unicode码,输出该unicode码对应的字符.\n\n如果某段文本中包含大量的特殊符号,FreeMarker提供了另一种特殊格式:\n可以在指定字符串内容的引号前增加r标记,在r标记后的文件将会直接输出.看如下代码:\n${r"${foo}"}    // 输出 ${foo}\n${r"C:/foo/bar"}    // 输出 C:/foo/bar\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("h3",{attrs:{id:"其他"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[s._v("#")]),s._v(" 其他")]),s._v(" "),n("h4",{attrs:{id:"include指令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#include指令"}},[s._v("#")]),s._v(" include指令")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('// include指令的作用类似于JSP的包含指令:\n<#include "/test.ftl" encoding="UTF-8" parse=true>\n\n// 在上面的语法格式中,两个参数的解释如下:\nencoding="GBK"  // 编码格式\nparse=true 　　 // 是否作为ftl语法解析,默认是true，false就是以文本方式引入,\n注意:在ftl文件里布尔值都是直接赋值的如parse=true,而不是parse="true"\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h4",{attrs:{id:"import指令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#import指令"}},[s._v("#")]),s._v(" import指令")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('// 类似于jsp里的import,它导入文件，然后就可以在当前文件里使用被导入文件里的宏组件\n<#import "/libs/mylib.ftl" as my>\n// 上面的代码将导入/lib/common.ftl模板文件中的所有变量,\n交将这些变量放置在一个名为com的Map对象中，\n"my"在freemarker里被称作namespace\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h4",{attrs:{id:"compress-压缩"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#compress-压缩"}},[s._v("#")]),s._v(" compress 压缩")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<#compress>\n    ...\n</#compress>\n<#t> // 去掉左右空白和回车换行\n\n<#lt>// 去掉左边空白和回车换行\n\n<#rt>// 去掉右边空白和回车换行\n\n<#nt>// 取消上面的效果\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);