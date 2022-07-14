(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{336:function(s,a,n){"use strict";n.r(a);var t=n(10),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("blockquote",[a("p",[a("a",{attrs:{href:"https://arthas.aliyun.com/zh-cn/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Arthas 应用诊断利器 (aliyun.com)"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/alibaba/arthas",target:"_blank",rel:"noopener noreferrer"}},[s._v("alibaba/arthas: Alibaba Java Diagnostic Tool Arthas/Alibaba Java诊断利器Arthas (github.com)"),a("OutboundLink")],1)])]),s._v(" "),a("h3",{attrs:{id:"备忘单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#备忘单"}},[s._v("#")]),s._v(" 备忘单")]),s._v(" "),a("h4",{attrs:{id:"基础命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础命令"}},[s._v("#")]),s._v(" 基础命令")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 启动\ncurl -O https://arthas.aliyun.com/arthas-boot.jar\njava -jar arthas-boot.jar\n\n# 仪表板\ndashboard\n\n# 反编译\njad demo.MathGame\n\n# 通过watch命令来查看demo.MathGame#primeFactors函数的返回值\nwatch demo.MathGame primeFactors returnObj\n\n# 退出\nquit\nexit\n# 完全退出arthas\nstop\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("h4",{attrs:{id:"jvm相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jvm相关"}},[s._v("#")]),s._v(" jvm相关")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 线程相关\n# 当前最忙的前N个线程并打印堆栈\nthread -n 3\n# 当前阻塞其他线程的线程\nthread -b\n# 统计最近1000ms内的线程CPU时间\nthread -i 1000\n# 列出1000ms内最忙的3个线程栈\nthread -n 3 -i 1000\n# 查看指定状态的线程\nthread --state WAITING\n\n# 查看当前JVM信息\njvm\n# 查看当前JVM的系统属性\nsysprop\n# 查看单个属性\nsysprop user.country\n# 修改单个属性\nsysprop user.country CN\n# 查看当前JVM的环境属性\nsysenv\n# 查看单个环境变量\nsysenv JAVA_HOME\n\n# 查看VM诊断相关的参数\nvmoption\n# 查看指定的option\nvmoption PrintGC\n# 更新指定的option\nvmoption PrintGC true\n\n# dump到指定文件\nheapdump /tmp/dump.hprof\n# 只dump live对象\nheapdump --live /tmp/dump.hprof\n\n# 强制GC\nvmtool --action forceGc\n# 查看前 10 个 String 对象实例\nvmtool --action getInstances --className java.lang.String --limit 10\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br")])]),a("h4",{attrs:{id:"class-classloader相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#class-classloader相关"}},[s._v("#")]),s._v(" class/classloader相关")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("234# 模糊搜索\nsc demo.*\n# 打印类的详细信息\nsc -d demo.MathGame\n# 打印出类的Field信息\nsc -d -f demo.MathGame\n# 查看已加载类的方法信息\nsm java.lang.String\n# 查看指定方法详情\nsm -d java.lang.String toString\n\n# 反编译指定的类\njad java.lang.String\n# 反编译指定的函数\njad java.lang.String toString\n\n# 替换正在运行的类\n# 反编译需要修改的类\njad --source-only com.example.demo.arthas.user.UserController > /tmp/UserController.java\n# 编译修改完的类\nmc /tmp/UserController.java -d /tmp\n# 替换掉\nretransform /tmp/com/example/demo/arthas/user/UserController.class\n# 消除 retransform 的影响\nretransform -l \t\t\t\t\t# 查看已经修改过的\nretransform -d 1 \t\t\t\t# 删除指定的\nretransform --deleteAll\t# 删除所有的\n\n# 按类加载类型查看统计信息\nclassloader\n# 按类加载实例查看统计信息\nclassloader -l\n# 查看ClassLoader的继承树\nclassloader -t\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br")])]),a("h4",{attrs:{id:"监控相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#监控相关"}},[s._v("#")]),s._v(" 监控相关")]),s._v(" "),a("blockquote",[a("p",[s._v("请注意，这些命令，都通过字节码增强技术来实现的，会在指定类的方法中插入一些切面来实现数据统计和观测，因此在线上、预发使用时，请尽量明确需要观测的类、方法以及条件，诊断结束要执行 "),a("code",[s._v("stop")]),s._v(" 或将增强过的类执行 "),a("code",[s._v("reset")]),s._v(" 命令")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 监控方法执行情况\n# 每 5 秒统计一次指定方法执行情况\nmonitor -c 5 demo.MathGame primeFactors\n# 计算条件表达式过滤统计结果(方法执行完毕之后)\nmonitor -c 5 demo.MathGame primeFactors \"params[0] <= 2\"\n# 计算条件表达式过滤统计结果(方法执行完毕之前)\nmonitor -b -c 5 com.test.testes.MathGame primeFactors \"params[0] <= 2\"\n\n# 函数执行情况\n# 观察函数调用返回时的参数、this对象和返回值，遍历深度 2\nwatch demo.MathGame primeFactors -x 2\n# 观察函数调用入口的参数和返回值\nwatch demo.MathGame primeFactors \"{params,returnObj}\" -x 2 -b\n# 同时观察函数调用前和函数返回后 2 次\nwatch demo.MathGame primeFactors \"{params,target,returnObj}\" -x 2 -b -s -n 2\n# 观察异常信息\nwatch demo.MathGame primeFactors \"{params[0],throwExp}\" -e -x 2\n# 按照耗时进行过滤\nwatch demo.MathGame primeFactors '{params, returnObj}' '#cost>200' -x 2\n# 观察当前对象中的属性\nwatch demo.MathGame primeFactors 'target.illegalArgumentCount'\n\n# 追踪方法执行，并限制捕捉次数\ntrace demo.MathGame run -n 1\n# 包含jdk的函数\ntrace --skipJDKMethod false demo.MathGame run\n# 据调用耗时过滤\ntrace demo.MathGame run '#cost > 10'\n\n\n# 输出当前方法被调用的调用路径\nstack demo.MathGame primeFactors\n# 据条件表达式来过滤\nstack demo.MathGame primeFactors 'params[0]<0' -n 2\n# 据执行时间来过滤\nstack demo.MathGame primeFactors '#cost>5'\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br")])]),a("h4",{attrs:{id:"ognl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ognl"}},[s._v("#")]),s._v(" ognl")]),s._v(" "),a("p",[s._v("可以在表达式中直接使用")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("变量名")]),s._v(" "),a("th",[s._v("变量解释")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("loader")]),s._v(" "),a("td",[s._v("本次调用类所在的 ClassLoader")])]),s._v(" "),a("tr",[a("td",[s._v("clazz")]),s._v(" "),a("td",[s._v("本次调用类的 Class 引用")])]),s._v(" "),a("tr",[a("td",[s._v("method")]),s._v(" "),a("td",[s._v("本次调用方法反射引用")])]),s._v(" "),a("tr",[a("td",[s._v("target")]),s._v(" "),a("td",[s._v("本次调用类的实例")])]),s._v(" "),a("tr",[a("td",[s._v("params")]),s._v(" "),a("td",[s._v("本次调用参数列表，这是一个数组，如果方法是无参方法则为空数组")])]),s._v(" "),a("tr",[a("td",[s._v("returnObj")]),s._v(" "),a("td",[s._v("本次调用返回的对象。当且仅当 "),a("code",[s._v("isReturn==true")]),s._v(" 成立时候有效，表明方法调用是以正常返回的方式结束。如果当前方法无返回值 "),a("code",[s._v("void")]),s._v("，则值为 null")])]),s._v(" "),a("tr",[a("td",[s._v("throwExp")]),s._v(" "),a("td",[s._v("本次调用抛出的异常。当且仅当 "),a("code",[s._v("isThrow==true")]),s._v(" 成立时有效，表明方法调用是以抛出异常的方式结束。")])]),s._v(" "),a("tr",[a("td",[s._v("isBefore")]),s._v(" "),a("td",[s._v("辅助判断标记，当前的通知节点有可能是在方法一开始就通知，此时 "),a("code",[s._v("isBefore==true")]),s._v(" 成立，同时 "),a("code",[s._v("isThrow==false")]),s._v(" 和 "),a("code",[s._v("isReturn==false")]),s._v("，因为在方法刚开始时，还无法确定方法调用将会如何结束。")])]),s._v(" "),a("tr",[a("td",[s._v("isThrow")]),s._v(" "),a("td",[s._v("辅助判断标记，当前的方法调用以抛异常的形式结束。")])]),s._v(" "),a("tr",[a("td",[s._v("isReturn")]),s._v(" "),a("td",[s._v("辅助判断标记，当前的方法调用以正常返回的形式结束。")])])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);