(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{373:function(n,s,a){"use strict";a.r(s);var e=a(26),t=Object(e.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h2",{attrs:{id:"排列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#排列"}},[n._v("#")]),n._v(" 排列")]),n._v(" "),a("blockquote",[a("p",[n._v("所谓排列组合，排列在组合之前，咱们要聊的第一个概念是“排列”，排列的英文是 Permutation 或者 Arrangement，因此在数学符号中，用 P 或者 A 表示都可以，二者意思完全一样。")]),n._v(" "),a("p",[n._v("我们常见的 P 右边会跟两个数字（或字母），右下角的数字 n 表示总数，右上角的数字 m 表示抽出的个数。整个符号的意思是“从 n 个人中，"),a("strong",[n._v("有顺序地")]),n._v("抽出 m 个人的抽法数”，可以读作“P n 抽 m”。")])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v(" m    n!\nP = ------ = n(n-1)(n-2)....(n-m+1)\n n   (n-m)!\n \n 从大的数字开始往小乘，乘“小的数字那么多”个\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br")])]),a("h2",{attrs:{id:"组合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组合"}},[n._v("#")]),n._v(" 组合")]),n._v(" "),a("blockquote",[a("p",[n._v("组合的英文是 Combination，因此在数学符号中用 C 表示")]),n._v(" "),a("p",[n._v("C 右边会跟两个数字（或字母），右下角的数字 n 表示总数，右上角的数字 m 表示抽出的个数。整个符号的意思是“从 n 个人中，"),a("strong",[n._v("不计顺序地")]),n._v("抽出 m 个人的抽法数”，可以读作“C n 抽 m”。")])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v(" m      n!         n(n-1)(n-2)....(n-m+1)\nC  = --------- = --------------------------\n n    (n-m)!m!       m(m-1)(m-2)....1\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br")])]),a("blockquote",[a("p",[n._v("从大的数字开始往小乘，乘“小的数字那么多”个，再除以“小的数字开始往小乘，乘小的数字那么多个”")])]),n._v(" "),a("h3",{attrs:{id:"组合公式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组合公式"}},[n._v("#")]),n._v(" 组合公式")]),n._v(" "),a("blockquote",[a("p",[n._v("反选")])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v(" m    n-m\nC =  C \n n    n\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br")])]),a("blockquote",[a("p",[n._v("组合相加")]),n._v(" "),a("p",[n._v("简单可以理解为"),a("strong",[n._v("上面的数字取大的，底下的数字加一。")])])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v(" m-1     n-m     m\nC    +  C    = C \n n       n       n+1\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br")])]),a("blockquote",[a("p",[n._v('"底下相同的”组合数相加')])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v(" 0       1      2         n     n\nC    +  C   +  C  ...  + C   = 2\n n       n      n         n\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br")])]),a("blockquote",[a("p",[n._v("“上面相同的”组合数相加")]),n._v(" "),a("p",[n._v("记忆方法:和为上面下面都加一")])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v(" r       r      r         r     r+1\nC    +  C   +  C  ...  + C   = C\n r       r+1    r+2       n     n+1\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);