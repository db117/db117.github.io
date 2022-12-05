(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{402:function(v,_,d){"use strict";d.r(_);var e=d(10),a=Object(e.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"正则规则"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#正则规则"}},[v._v("#")]),v._v(" 正则规则")]),v._v(" "),_("h3",{attrs:{id:"正则替换字符串"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#正则替换字符串"}},[v._v("#")]),v._v(" 正则替换字符串")]),v._v(" "),_("blockquote",[_("p",[v._v("使用括号记住配置，并回调使用。通过$1,$2...调用。")])]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v('var re = /(\\w+)\\s(\\w+)/;\nvar str = "abc def";\nvar newstr = str.replace(re, "$2-$1");\n// def-abc\n')])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br"),_("span",{staticClass:"line-number"},[v._v("3")]),_("br"),_("span",{staticClass:"line-number"},[v._v("4")]),_("br")])]),_("h2",{attrs:{id:"常用正则表达式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#常用正则表达式"}},[v._v("#")]),v._v(" 常用正则表达式")]),v._v(" "),_("h3",{attrs:{id:"数字类型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数字类型"}},[v._v("#")]),v._v(" 数字类型")]),v._v(" "),_("ol",[_("li",[v._v("数字："),_("code",[v._v("^[0-9]*$")])]),v._v(" "),_("li",[v._v("n位的数字："),_("code",[v._v("^\\d{n}$")])]),v._v(" "),_("li",[v._v("至少n位的数字："),_("code",[v._v("^\\d{n,}$")])]),v._v(" "),_("li",[v._v("m-n位的数字："),_("code",[v._v("^\\d{m,n}$")])]),v._v(" "),_("li",[v._v("零和非零开头的数字："),_("code",[v._v("^(0|[1-9][0-9]*)$")])]),v._v(" "),_("li",[v._v("非零开头的最多带两位小数的数字："),_("code",[v._v("^([1-9][0-9]*)+(.[0-9]{1,2})?$")])]),v._v(" "),_("li",[v._v("带1-2位小数的正数或负数："),_("code",[v._v("^(\\-)?\\d+(\\.\\d{1,2})?$")])]),v._v(" "),_("li",[v._v("正数、负数、和小数："),_("code",[v._v("^(\\-|\\+)?\\d+(\\.\\d+)?$")])]),v._v(" "),_("li",[v._v("有两位小数的正实数："),_("code",[v._v("^[0-9]+(.[0-9]{2})?$")])]),v._v(" "),_("li",[v._v("非零的正整数："),_("code",[v._v("^[1-9]\\d*$ 或 ^([1-9][0-9]*){1,3}$ 或 ^\\+?[1-9][0-9]*$")])]),v._v(" "),_("li",[v._v("非零的负整数："),_("code",[v._v('^\\-[1-9][]0-9"*$ 或 ^-[1-9]\\d*$')])]),v._v(" "),_("li",[v._v("非负整数："),_("code",[v._v("^\\d+$ 或 ^[1-9]\\d*|0$")])]),v._v(" "),_("li",[v._v("非正整数："),_("code",[v._v("^-[1-9]\\d*|0$ 或 ^((-\\d+)|(0+))$")])]),v._v(" "),_("li",[v._v("非负浮点数："),_("code",[v._v("^\\d+(\\.\\d+)?$ 或 ^[1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*|0?\\.0+|0$")])]),v._v(" "),_("li",[v._v("非正浮点数："),_("code",[v._v("^((-\\d+(\\.\\d+)?)|(0+(\\.0+)?))$ 或 ^(-([1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*))|0?\\.0+|0$")])]),v._v(" "),_("li",[v._v("正浮点数："),_("code",[v._v("^[1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*$ 或 ^(([0-9]+\\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\\.[0-9]+)|([0-9]*[1-9][0-9]*))$")])]),v._v(" "),_("li",[v._v("浮点数："),_("code",[v._v("^(-?\\d+)(\\.\\d+)?$ 或 ^-?([1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*|0?\\.0+|0)$")])])]),v._v(" "),_("h3",{attrs:{id:"字符类型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#字符类型"}},[v._v("#")]),v._v(" 字符类型")]),v._v(" "),_("ol",[_("li",[v._v("汉字："),_("code",[v._v("^[\\u4e00-\\u9fa5]{0,}$")])]),v._v(" "),_("li",[v._v("英文和数字："),_("code",[v._v("^[A-Za-z0-9]+$ 或 ^[A-Za-z0-9]{4,40}$")])]),v._v(" "),_("li",[v._v("长度为3-20的所有字符："),_("code",[v._v("^.{3,20}$")])]),v._v(" "),_("li",[v._v("由26个英文字母组成的字符串："),_("code",[v._v("^[A-Za-z]+$")])]),v._v(" "),_("li",[v._v("由26个大写英文字母组成的字符串："),_("code",[v._v("^[A-Z]+$")])]),v._v(" "),_("li",[v._v("由26个小写英文字母组成的字符串："),_("code",[v._v("^[a-z]+$")])]),v._v(" "),_("li",[v._v("由数字和26个英文字母组成的字符串："),_("code",[v._v("^[A-Za-z0-9]+$")])]),v._v(" "),_("li",[v._v("由数字、26个英文字母或者下划线组成的字符串："),_("code",[v._v("^\\w+$ 或 ^\\w{3,20}")])]),v._v(" "),_("li",[v._v("中文、英文、数字包括下划线："),_("code",[v._v("^[\\u4E00-\\u9FA5A-Za-z0-9_]+$")])]),v._v(" "),_("li",[v._v("中文、英文、数字但不包括下划线等符号："),_("code",[v._v("^[\\u4E00-\\u9FA5A-Za-z0-9]+$ 或 ^[\\u4E00-\\u9FA5A-Za-z0-9]{2,20}$")])]),v._v(" "),_("li",[v._v("可以输入含有"),_("code",[v._v("^%&',;=?$\\\"")]),v._v("等字符："),_("code",[v._v("[^%&',;=?$\\x22]+")])]),v._v(" "),_("li",[v._v("禁止输入含有~的字符"),_("code",[v._v("[^~\\x22]+")])])]),v._v(" "),_("h2",{attrs:{id:"其他类型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#其他类型"}},[v._v("#")]),v._v(" 其他类型")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("匹配一行"),_("code",[v._v("[^\\n]*search[^\\n]*\\n?")])])]),v._v(" "),_("li",[_("p",[v._v("Email地址："),_("code",[v._v("^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$")])])]),v._v(" "),_("li",[_("p",[v._v("手机号码："),_("code",[v._v("^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\\d{8}$")])])]),v._v(" "),_("li",[_("p",[v._v("短身份证号码(数字、字母x结尾)："),_("code",[v._v("^([0-9]){7,18}(x|X)?$ 或 ^\\d{8,18}|[0-9x]{8,18}|[0-9X]{8,18}?$")])])]),v._v(" "),_("li",[_("p",[v._v("一年的12个月(01～09和1～12)："),_("code",[v._v("^(0?[1-9]|1[0-2])$")])])]),v._v(" "),_("li",[_("p",[v._v("一个月的31天(01～09和1～31)："),_("code",[v._v("^((0?[1-9])|((1|2)[0-9])|30|31)$")])])]),v._v(" "),_("li",[_("p",[v._v("xml文件："),_("code",[v._v("^([a-zA-Z]+-?)+[a-zA-Z0-9]+\\\\.[x|X][m|M][l|L]$")])])]),v._v(" "),_("li",[_("p",[v._v("中文字符的正则表达式："),_("code",[v._v("[\\u4e00-\\u9fa5]")])])]),v._v(" "),_("li",[_("p",[v._v("双字节字符："),_("code",[v._v("[^\\x00-\\xff]")]),v._v(" (包括汉字在内，可以用来计算字符串的长度(一个双字节字符长度计2，ASCII字符计1))")])]),v._v(" "),_("li",[_("p",[v._v("空白行的正则表达式："),_("code",[v._v("\\n\\s*\\r")]),v._v(" (可以用来"),_("strong",[v._v("删除空白行")]),v._v(")")])]),v._v(" "),_("li",[_("p",[v._v("首尾空白字符的正则表达式："),_("code",[v._v("^\\s*|\\s*$或(^\\s*)|(\\s*$)")]),v._v(" (可以用来"),_("strong",[v._v("删除行首行尾的空白字符")]),v._v("(包括空格、制表符、换页符等等))")])]),v._v(" "),_("li",[_("p",[v._v("IP地址："),_("code",[v._v("\\d+\\.\\d+\\.\\d+\\.\\d+")]),v._v(" (提取IP地址时有用)")])]),v._v(" "),_("li",[_("p",[v._v("IP地址："),_("code",[v._v("((?:(?:25[0-5]|2[0-4]\\\\d|[01]?\\\\d?\\\\d)\\\\.){3}(?:25[0-5]|2[0-4]\\\\d|[01]?\\\\d?\\\\d))")])])]),v._v(" "),_("li",[_("p",[v._v("校验IP-v6地址:"),_("code",[v._v("(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))")])])]),v._v(" "),_("li",[_("p",[v._v("子网掩码："),_("code",[v._v("((?:(?:25[0-5]|2[0-4]\\\\d|[01]?\\\\d?\\\\d)\\\\.){3}(?:25[0-5]|2[0-4]\\\\d|[01]?\\\\d?\\\\d))")])])]),v._v(" "),_("li",[_("p",[v._v("校验日期:"),_("code",[v._v("^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$")]),v._v("(“yyyy-mm-dd“ 格式的日期校验，已考虑"),_("strong",[v._v("平闰年")]),v._v("。)")])]),v._v(" "),_("li",[_("p",[v._v("抽取注释："),_("code",[v._v("\x3c!--(.*?)--\x3e")])])]),v._v(" "),_("li",[_("p",[v._v("查找CSS属性:"),_("code",[v._v("^\\\\s*[a-zA-Z\\\\-]+\\\\s*[:]{1}\\\\s[a-zA-Z0-9\\\\s.#]+[;]{1}")])])]),v._v(" "),_("li",[_("p",[v._v("提取页面超链接:"),_("code",[v._v('(<a\\\\s*(?!.*\\\\brel=)[^>]*)(href="https?:\\\\/\\\\/)((?!(?:(?:www\\\\.)?\'.implode(\'|(?:www\\\\.)?\', $follow_list).\'))[^" rel="external nofollow" ]+)"((?!.*\\\\brel=)[^>]*)(?:[^>]*)>')])])]),v._v(" "),_("li",[_("p",[v._v("提取网页图片:"),_("code",[v._v("\\\\< *[img][^\\\\\\\\>]*[src] *= *[\\\\\"\\\\']{0,1}([^\\\\\"\\\\'\\\\ >]*)")])])]),v._v(" "),_("li",[_("p",[v._v("提取网页颜色代码:"),_("code",[v._v("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$")])])]),v._v(" "),_("li",[_("p",[v._v("文件扩展名效验:"),_("code",[v._v('^([a-zA-Z]\\\\:|\\\\\\\\)\\\\\\\\([^\\\\\\\\]+\\\\\\\\)*[^\\\\/:*?"<>|]+\\\\.txt(l)?$')])])])])])}),[],!1,null,null,null);_.default=a.exports}}]);