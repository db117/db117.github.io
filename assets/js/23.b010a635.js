(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{385:function(v,i,_){"use strict";_.r(i);var e=_(26),n=Object(e.a)({},(function(){var v=this,i=v.$createElement,_=v._self._c||i;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h3",{attrs:{id:"jmh基准测试"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#jmh基准测试"}},[v._v("#")]),v._v(" JMH基准测试")]),v._v(" "),_("h4",{attrs:{id:"_1-简介"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-简介"}},[v._v("#")]),v._v(" 1.简介")]),v._v(" "),_("p",[v._v("JMH，即Java Microbenchmark Harness，是专门用于代码微基准测试的工具套件。主要是基于方法层面的基准测试，精度可以达到纳秒级。当你定位到热点方法，希望进一步优化方法性能的时候，就可以使用JMH对优化的结果进行量化的分析。")]),v._v(" "),_("p",[_("a",{attrs:{href:"http://openjdk.java.net/projects/code-tools/jmh/",target:"_blank",rel:"noopener noreferrer"}},[v._v("官方网站"),_("OutboundLink")],1)]),v._v(" "),_("blockquote",[_("p",[v._v("JMH 实现了JSR269规范，即注解处理器，能在编译Java源码的时候，识别的到需要处理的注解，如@Beanmark，JMH能根据@Beanmark的配置生成一系列测试辅助类")])]),v._v(" "),_("h4",{attrs:{id:"_2-maven依赖"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-maven依赖"}},[v._v("#")]),v._v(" 2.maven依赖")]),v._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("<dependency>\n    <groupId>org.openjdk.jmh</groupId>\n    <artifactId>jmh-core</artifactId>\n    <version>[1.23,]</version>\n</dependency>\n<dependency>\n    <groupId>org.openjdk.jmh</groupId>\n    <artifactId>jmh-generator-annprocess</artifactId>\n    <version>[1.23,]</version>\n    <scope>provided</scope>\n\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br"),_("span",{staticClass:"line-number"},[v._v("3")]),_("br"),_("span",{staticClass:"line-number"},[v._v("4")]),_("br"),_("span",{staticClass:"line-number"},[v._v("5")]),_("br"),_("span",{staticClass:"line-number"},[v._v("6")]),_("br"),_("span",{staticClass:"line-number"},[v._v("7")]),_("br"),_("span",{staticClass:"line-number"},[v._v("8")]),_("br"),_("span",{staticClass:"line-number"},[v._v("9")]),_("br"),_("span",{staticClass:"line-number"},[v._v("10")]),_("br"),_("span",{staticClass:"line-number"},[v._v("11")]),_("br")])]),_("h4",{attrs:{id:"_3-注解"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-注解"}},[v._v("#")]),v._v(" 3.注解")]),v._v(" "),_("ul",[_("li",[v._v("@Benchmark\n"),_("ul",[_("li",[v._v("方法级注解，表示该方法是需要进行 benchmark 的对象，用法和 JUnit 的 @Test 类似")])])]),v._v(" "),_("li",[v._v("@BenchmarkMode\n"),_("ul",[_("li",[v._v("Throughput: 整体吞吐量，例如“1秒内可以执行多少次调用”。")]),v._v(" "),_("li",[v._v("AverageTime: 调用的平均时间，例如“每次调用平均耗时xxx毫秒”。")]),v._v(" "),_("li",[v._v("SampleTime: 随机取样，最后输出取样结果的分布，例如“99%的调用在xxx毫秒以内，99.99%的调用在xxx毫秒以内”")]),v._v(" "),_("li",[v._v("SingleShotTime: 只运行一次。往往同时把 warmup 次数设为0，用于测试冷启动时的性能。")]),v._v(" "),_("li",[v._v("All：所有模式")]),v._v(" "),_("li",[v._v("默认Throughput, ops/time")])])]),v._v(" "),_("li",[v._v("@Warmup\n"),_("ul",[_("li",[v._v("iterations：预热的次数。")]),v._v(" "),_("li",[v._v("time：每次预热的时间。")]),v._v(" "),_("li",[v._v("timeUnit：时间的单位，默认秒。")]),v._v(" "),_("li",[v._v("batchSize：批处理大小，每次操作调用几次方法。")]),v._v(" "),_("li",[v._v("默认 5次，每次10秒")])])]),v._v(" "),_("li",[v._v("@Measurement\n"),_("ul",[_("li",[v._v("iterations 进行测试的轮次")]),v._v(" "),_("li",[v._v("time 每轮进行的时长")]),v._v(" "),_("li",[v._v("timeUnit 时长单位")]),v._v(" "),_("li",[v._v("默认 5次，每次10秒")])])]),v._v(" "),_("li",[v._v("@Timeout\n"),_("ul",[_("li",[v._v("超时时间，每次运行的时间不能超过设定的时间")]),v._v(" "),_("li",[v._v("默认10分钟")])])]),v._v(" "),_("li",[v._v("@Fork\n"),_("ul",[_("li",[v._v("value：几个分叉，运行几次，默认5次")]),v._v(" "),_("li",[v._v("warmups：预热次数，默认0次")]),v._v(" "),_("li",[v._v("jvm：运行的jvm，默认当前jvm")]),v._v(" "),_("li",[v._v("jvmArgs：jvm运行main参数，没人当前main入参")])])]),v._v(" "),_("li",[v._v("@OutputTimeUnit\n"),_("ul",[_("li",[v._v("基准测试结果的时间类型")])])]),v._v(" "),_("li",[v._v("@Param\n"),_("ul",[_("li",[v._v("属性级注解，@Param 可以用来指定某项参数的多种情况。特别适合用来测试一个函数在不同的参数输入的情况下的性能。")])])]),v._v(" "),_("li",[v._v("@Setup\n"),_("ul",[_("li",[v._v("方法级注解，这个注解的作用就是我们需要在测试之前进行一些准备工作，比如对一些数据的初始化之类的。")]),v._v(" "),_("li",[v._v("Trial：在每次Benchmark的之前执行。")]),v._v(" "),_("li",[v._v("Iteration：在每次Benchmark的iteration的之前执行。")]),v._v(" "),_("li",[v._v("Invocation：每次调用Benchmark标记的方法之前都会执行。")]),v._v(" "),_("li",[v._v("类似于junit的@Before")]),v._v(" "),_("li",[v._v("使用该注解必须定义 @State注解。")])])]),v._v(" "),_("li",[v._v("@TearDown\n"),_("ul",[_("li",[v._v("方法级注解，这个注解的作用就是我们需要在测试之后进行一些结束工作，比如关闭线程池，数据库连接等的，主要用于资源的回收等。")]),v._v(" "),_("li",[v._v("Trial：在每次Benchmark的之后执行。")]),v._v(" "),_("li",[v._v("Iteration：在每次Benchmark的iteration的之后执行。")]),v._v(" "),_("li",[v._v("Invocation：每次调用Benchmark标记的方法之后都会执行。")]),v._v(" "),_("li",[v._v("类似于junit的@After")]),v._v(" "),_("li",[v._v("使用该注解必须定义 @State注解。")])])]),v._v(" "),_("li",[v._v("@State\n"),_("ul",[_("li",[v._v("当使用@Setup参数的时候，必须在类上加这个参数，不然会提示无法运行。")]),v._v(" "),_("li",[v._v("Thread: 该状态为每个线程独享。")]),v._v(" "),_("li",[v._v("Group: 该状态为同一个组里面所有线程共享。")]),v._v(" "),_("li",[v._v("Benchmark: 该状态在所有线程间共享。")])])]),v._v(" "),_("li",[v._v("@Group\n"),_("ul",[_("li",[v._v("结合@Benchmark一起使用，把多个基准方法归为一类，只能作用在"),_("strong",[v._v("方法")]),v._v("上。")]),v._v(" "),_("li",[v._v("同一个组中的所有测试设置相同的名称(否则这些测试将独立运行——没有任何警告提示！)")])])]),v._v(" "),_("li",[v._v("@GroupThreads\n"),_("ul",[_("li",[v._v("定义了多少个线程参与在组中运行基准方法。只能作用在"),_("strong",[v._v("方法")]),v._v("上。")])])]),v._v(" "),_("li",[v._v("@CompilerControl\n"),_("ul",[_("li",[v._v("DONT_INLINE：强制跳过内联")]),v._v(" "),_("li",[v._v("INLINE：强制内联")]),v._v(" "),_("li",[v._v("BREAK：插入一个调试断点")]),v._v(" "),_("li",[v._v("PRINT：打印方法被JIT编译后的机器码信息")]),v._v(" "),_("li",[v._v("EXCLUDE：从编译中排除该方法")]),v._v(" "),_("li",[v._v("COMPILE_ONLY：只编译此方法，不编译其他方法")])])])]),v._v(" "),_("h4",{attrs:{id:"_4-注意事项"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-注意事项"}},[v._v("#")]),v._v(" 4.注意事项")]),v._v(" "),_("ul",[_("li",[v._v("ERROR: org.openjdk.jmh.runner.RunnerException: ERROR: Exception while trying to acquire the JMH lock (C:\\WINDOWS/jmh.lock): 拒绝访问。, exiting. Use -Djmh.ignoreLock=true to forcefully continue.\n"),_("ul",[_("li",[v._v("这个错误是因为JMH运行需要访问系统的TMP目录，解决办法是：\n打开Run Configuration -> Environment Variables -> include system environment viables(勾选)")])])]),v._v(" "),_("li",[v._v("JMH plugin\n"),_("ul",[_("li",[v._v("idea的jmh插件，注解直接执行")])])]),v._v(" "),_("li",[v._v("避免JIT优化\n"),_("ul",[_("li",[v._v("基准测试方法一定不要返回void。")]),v._v(" "),_("li",[v._v("如果要使用void返回，可以使用 "),_("code",[v._v("Blackhole")]),v._v(" 的 "),_("code",[v._v("consume")]),v._v(" 来避免JIT的优化消除。")]),v._v(" "),_("li",[v._v("计算不要引用常量，否则会被优化到JMH的循环之外。")])])]),v._v(" "),_("li",[v._v("常量折叠（Constant Folding）\n"),_("ul",[_("li",[v._v("如果你的计算输入是可预测的，在编译器就计算出常量的计算，会被JIT优化掉")]),v._v(" "),_("li",[v._v("永远从@State实例中读取你的方法输入；")]),v._v(" "),_("li",[v._v("返回你的计算结果；")]),v._v(" "),_("li",[v._v("或者考虑使用BlackHole对象")])])]),v._v(" "),_("li",[v._v("循环处理\n"),_("ul",[_("li",[v._v("因为编译器可能会将我们的循环进行展开或者做一些其他方面的循环优化，所以JHM建议我们不要在Beanchmark中使用循环")]),v._v(" "),_("li",[v._v("可以是有@Measurement(batchSize = N)来达到效果")])])])])])}),[],!1,null,null,null);i.default=n.exports}}]);