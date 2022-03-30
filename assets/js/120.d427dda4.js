(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{523:function(s,n,a){"use strict";a.r(n);var e=a(34),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[a("a",{attrs:{href:"http://yaml.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官网"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/yaml/yaml",target:"_blank",rel:"noopener noreferrer"}},[s._v("github"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#格式"}},[s._v("#")]),s._v(" 格式")]),s._v(" "),a("h3",{attrs:{id:"基本格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本格式"}},[s._v("#")]),s._v(" 基本格式")]),s._v(" "),a("ol",[a("li",[s._v("yaml中允许表示三种格式，分别为常量值、对象和数组")]),s._v(" "),a("li",[s._v("大小写敏感")]),s._v(" "),a("li",[s._v("使用缩进代表层级关系")]),s._v(" "),a("li",[s._v(".缩进只能使用空格，"),a("strong",[s._v("不能使用tab键")]),s._v("，不要求空格个数，只需要相同层级左对齐（一般2或4个空格）")])]),s._v(" "),a("h3",{attrs:{id:"类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型"}},[s._v("#")]),s._v(" 类型")]),s._v(" "),a("blockquote",[a("p",[s._v("可以使用!!来定义类型")])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("map")]),s._v(" "),a("blockquote",[a("p",[s._v("key唯一")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Block style: !!map\n  Clark : Evans\n  Ingy  : döt Net\n  Oren  : Ben-Kiki\n\nFlow style: !!map { Clark: Evans, Ingy: döt Net, Oren: Ben-Kiki }\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("omap")]),s._v(" "),a("blockquote",[a("p",[s._v("键: 值对的有序序列，无重复值。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# Explicitly typed ordered map (dictionary).\nBestiary: !!omap\n  - aardvark: African pig-like ant eater. Ugly.\n  - anteater: South-American ant eater. Two species.\n  - anaconda: South-American constrictor snake. Scaly.\n  # Etc.\n# Flow style\nNumbers: !!omap [ one: 1, two: 2, three : 3 ]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("pairs")]),s._v(" "),a("blockquote",[a("p",[s._v("键: 值对的有序序列，允许重复。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# Explicitly typed pairs.\nBlock tasks: !!pairs\n  - meeting: with team.\n  - meeting: with boss.\n  - break: lunch.\n  - meeting: with client.\nFlow tasks: !!pairs [ meeting: with team, meeting: with boss ]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("set")]),s._v(" "),a("blockquote",[a("p",[s._v("非等值的无序集合。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# Explicitly typed set.\nbaseball players: !!set\n  ? Mark McGwire\n  ? Sammy Sosa\n  ? Ken Griffey\n# Flow style\nbaseball teams: !!set { Boston Red Sox, Detroit Tigers, New York Yankees }\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("seq")]),s._v(" "),a("blockquote",[a("p",[s._v("表示一个从零开始的连续整数索引的集合。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Block style: !!seq\n- Clark Evans\n- Ingy döt Net\n- Oren Ben-Kiki\n\nFlow style: !!seq [ Clark Evans, Ingy döt Net, Oren Ben-Kiki ]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("str")]),s._v(" "),a("blockquote",[a("p",[s._v("表示 Unicode 字符串,由零个或多个 Unicode 字符组成的序列。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('Block style: !!str |-\n  String: just a theory.\n\nFlow style: !!str "String: just a theory."\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("null")]),s._v(" "),a("blockquote",[a("p",[s._v("表示缺少值。")]),s._v(" "),a("p",[s._v("null | Null | NULL | ~")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("!!null null: value for null key\nkey with null value: !!null null\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("bool")]),s._v(" "),a("blockquote",[a("p",[s._v("表示一个 true/false 值")]),s._v(" "),a("p",[s._v("true | True | TRUE | false | False | FALSE")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("YAML is a superset of JSON: !!bool true\nPluto is a planet: !!bool false\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("int")]),s._v(" "),a("blockquote",[a("p",[s._v("整数")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("negative: !!int -12\nzero: !!int 0\npositive: !!int 34\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("float")]),s._v(" "),a("blockquote",[a("p",[s._v("表示实数的近似值，包括三个特殊值(正无穷大和负无穷大，以及“非数”)。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("negative: !!float -1\nzero: !!float 0\npositive: !!float 2.3e4\ninfinity: !!float .inf\nnot a number: !!float .nan\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("binary")]),s._v(" "),a("blockquote",[a("p",[s._v("一个由零个或多个八位元组成的序列(8位值)。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('canonical: !!binary "\\\n R0lGODlhDAAMAIQAAP//9/X17unp5WZmZgAAAOfn515eXvPz7Y6OjuDg4J+fn5\\\n OTk6enp56enmlpaWNjY6Ojo4SEhP/++f/++f/++f/++f/++f/++f/++f/++f/+\\\n +f/++f/++f/++f/++f/++SH+Dk1hZGUgd2l0aCBHSU1QACwAAAAADAAMAAAFLC\\\n AgjoEwnuNAFOhpEMTRiggcz4BNJHrv/zCFcLiwMWYNG84BwwEeECcgggoBADs="\ngeneric: !binary |\n R0lGODlhDAAMAIQAAP//9/X17unp5WZmZgAAAOfn515eXvPz7Y6OjuDg4J+fn5\n OTk6enp56enmlpaWNjY6Ojo4SEhP/++f/++f/++f/++f/++f/++f/++f/++f/+\n +f/++f/++f/++f/++f/++SH+Dk1hZGUgd2l0aCBHSU1QACwAAAAADAAMAAAFLC\n AgjoEwnuNAFOhpEMTRiggcz4BNJHrv/zCFcLiwMWYNG84BwwEeECcgggoBADs=\ndescription:\n The binary value above is a tiny arrow encoded as a gif image.\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("merge")]),s._v(" "),a("blockquote",[a("p",[s._v("指定一个或多个要与当前映射合并的映射。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("---\n- &CENTER { x: 1, y: 2 }\n- &LEFT { x: 0, y: 2 }\n- &BIG { r: 10 }\n- &SMALL { r: 1 }\n\n# All the following maps are equal:\n\n- # Explicit keys\n  x: 1\n  y: 2\n  r: 10\n  label: center/big\n\n- # Merge one map\n  << : *CENTER\n  r: 10\n  label: center/big\n\n- # Merge multiple maps\n  << : [ *CENTER, *BIG ]\n  label: center/big\n\n- # Override\n  << : [ *BIG, *LEFT, *SMALL ]\n  x: 1\n  label: center/big\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("timestamp")]),s._v(" "),a("blockquote",[a("p",[s._v("时间")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" 匹配:\n [0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9] # (ymd)\n|[0-9][0-9][0-9][0-9] # (year)\n -[0-9][0-9]? # (month)\n -[0-9][0-9]? # (day)\n ([Tt]|[ \\t]+)[0-9][0-9]? # (hour)\n :[0-9][0-9] # (minute)\n :[0-9][0-9] # (second)\n (\\.[0-9]*)? # (fraction)\n (([ \\t]*)Z|[-+][0-9][0-9]?(:[0-9][0-9])?)? # (time zone)\n \n \n \ncanonical:        2001-12-15T02:59:43.1Z\nvalid iso8601:    2001-12-14t21:59:43.10-05:00\nspace separated:  2001-12-14 21:59:43.10 -5\nno time zone (Z): 2001-12-15 2:59:43.10\ndate (00:00:00Z): 2002-12-14\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])])])])])}),[],!1,null,null,null);n.default=t.exports}}]);