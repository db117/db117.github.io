(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{354:function(v,_,t){"use strict";t.r(_);var a=t(19),i=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"jps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jps"}},[v._v("#")]),v._v(" jps")]),v._v(" "),t("h3",{attrs:{id:"参数说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参数说明"}},[v._v("#")]),v._v(" 参数说明")]),v._v(" "),t("blockquote",[t("p",[v._v("-q：只输出进程 ID\n-m：输出传入 main 方法的参数\n-l：输出完全的包名，应用主类名，jar的完全路径名\n-v：输出jvm参数\n-V：输出通过flag文件传递到JVM中的参数")])]),v._v(" "),t("h3",{attrs:{id:"用例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用例"}},[v._v("#")]),v._v(" 用例")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("无参数：jps")]),v._v(" "),t("p",[v._v("显示进程的ID 和 类的名称")])]),v._v(" "),t("li",[t("p",[v._v("jps -mlvV")]),v._v(" "),t("p",[v._v("显示进程ID\t完全的包名，应用主类名，jar的完全路径名 \tjvm参数\t通过flag文件传递到JVM中的参数")])])]),v._v(" "),t("h3",{attrs:{id:"原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[v._v("#")]),v._v(" 原理")]),v._v(" "),t("p",[v._v("java程序在启动以后，会在java.io.tmpdir指定的目录下，就是临时文件夹里，生成一个类似于hsperfdata_User的文件夹，这个文件夹里（在Linux中为/tmp/hsperfdata_{userName}/），有几个文件，名字就是java进程的pid，因此列出当前运行的java进程，只是把这个目录里的文件名列一下而已。 至于系统的参数什么，就可以解析这几个文件获得。")]),v._v(" "),t("h2",{attrs:{id:"jmap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jmap"}},[v._v("#")]),v._v(" Jmap")]),v._v(" "),t("h4",{attrs:{id:"参数："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参数："}},[v._v("#")]),v._v(" 参数：")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("option：")]),v._v(" 选项参数。")]),v._v(" "),t("li",[t("strong",[v._v("pid：")]),v._v(" 需要打印配置信息的进程ID。")]),v._v(" "),t("li",[t("strong",[v._v("executable：")]),v._v(" 产生核心dump的Java可执行文件。")]),v._v(" "),t("li",[t("strong",[v._v("core：")]),v._v(" 需要打印配置信息的核心文件。")]),v._v(" "),t("li",[t("strong",[v._v("server-id")]),v._v(" 可选的唯一id，如果相同的远程主机上运行了多台调试服务器，用此选项参数标识服务器。")]),v._v(" "),t("li",[t("strong",[v._v("remote server IP or hostname")]),v._v(" 远程调试服务器的IP地址或主机名。")])]),v._v(" "),t("h4",{attrs:{id:"option"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#option"}},[v._v("#")]),v._v(" option")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("no option：")]),v._v(" 查看进程的内存映像信息,类似 Solaris pmap 命令。")]),v._v(" "),t("li",[t("strong",[v._v("heap：")]),v._v(" 显示Java堆详细信息")]),v._v(" "),t("li",[t("strong",[v._v("histo[:live]：")]),v._v(" 显示堆中对象的统计信息")]),v._v(" "),t("li",[v._v("**clstats：**打印类加载器信息")]),v._v(" "),t("li",[t("strong",[v._v("finalizerinfo：")]),v._v(" 显示在F-Queue队列等待Finalizer线程执行finalizer方法的对象")]),v._v(" "),t("li",[v._v("**dump:"),t("dump-options",[v._v("：**生成堆转储快照")])],1),v._v(" "),t("li",[t("strong",[v._v("F：")]),v._v(" 当-dump没有响应时，使用-dump或者-histo参数. 在这个模式下,live子参数无效.")]),v._v(" "),t("li",[v._v("**help：**打印帮助信息")]),v._v(" "),t("li",[v._v("**J"),t("flag",[v._v("：**指定传递给运行jmap的JVM的参数")])],1)]),v._v(" "),t("h3",{attrs:{id:"用例-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用例-2"}},[v._v("#")]),v._v(" 用例")]),v._v(" "),t("ul",[t("li",[v._v("不带参数\n"),t("ul",[t("li",[v._v("将会打印目标虚拟机中加载的每个共享对象的起始地址、映射大小以及共享对象文件的路径全称")])])]),v._v(" "),t("li",[v._v("heap\n"),t("ul",[t("li",[v._v("打印一个堆的摘要信息，包括使用的GC算法、堆配置信息和各内存区域内存使用信息")])])]),v._v(" "),t("li",[v._v("-histo:live\n"),t("ul",[t("li",[v._v("其中包括每个Java类、对象数量、内存大小(单位：字节)、完全限定的类名。打印的虚拟机内部的类名称将会带有一个’*’前缀。如果指定了live子选项，则只计算活动的对象。")]),v._v(" "),t("li",[v._v("num：序号\ninstances：实例数量\nbytes：占用空间大小\nclass name：类名称")])])]),v._v(" "),t("li",[v._v("-clstats\n"),t("ul",[t("li",[v._v("打印Java堆内存的永久保存区域的类加载器的智能统计信息。对于每个类加载器而言，它的名称、活跃度、地址、父类加载器、它所加载的类的数量和大小都会被打印。此外，包含的字符串数量和大小也会被打印。")])])]),v._v(" "),t("li",[v._v("-finalizerinfo\n"),t("ul",[t("li",[v._v("打印等待终结的对象信息")]),v._v(" "),t("li",[v._v("Number of objects pending for finalization: 0 说明当前F-QUEUE队列中并没有等待Fializer线程执行final")])])]),v._v(" "),t("li",[v._v("dump:"),t("dump-options",[t("ul",[t("li",[v._v("-dump:format=b,file=heapdump.phrof")]),v._v(" "),t("li",[v._v("以hprof二进制格式转储Java堆到指定filename的文件中。live子选项是可选的。如果指定了live子选项，堆中只有活动的对象会被转储。")]),v._v(" "),t("li",[v._v("可以用"),t("strong",[v._v("jvisualvm")]),v._v("命令工具导入该dump文件分析")])])])],1)]),v._v(" "),t("h3",{attrs:{id:"细节"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#细节"}},[v._v("#")]),v._v(" 细节")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("Metadata does not appear to be polymorphic")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("使用启动的用户进行执行")]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("sudo -u 用户名\n")])])])])])]),v._v(" "),t("li",[t("p",[v._v("也可以设置内存溢出自动导出dump文件(内存很大的时候，可能会导不出来)")]),v._v(" "),t("ul",[t("li",[v._v("-XX:+HeapDumpOnOutOfMemoryError")])]),v._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[v._v("-XX:HeapDumpPath=./ （路径）")])])])]),v._v(" "),t("h2",{attrs:{id:"jstack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jstack"}},[v._v("#")]),v._v(" Jstack")]),v._v(" "),t("p",[v._v('"Thread-1" 线程名\nprio=5 优先级=5\ntid=0x000000001fa9e000 线程id\nnid=0x2d64 线程对应的本地线程标识nid\nrunnable 线程状态')]),v._v(" "),t("h3",{attrs:{id:"参数说明："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参数说明："}},[v._v("#")]),v._v(" 参数说明：")]),v._v(" "),t("ul",[t("li",[v._v("-l 长列表. 打印关于锁的附加信息,例如属于java.util.concurrent 的 ownable synchronizers列表.")]),v._v(" "),t("li",[v._v("-F 当’jstack [-l] pid’没有相应的时候强制打印栈信息")]),v._v(" "),t("li",[v._v("-m 打印java和native c/c++框架的所有栈信息.")]),v._v(" "),t("li",[v._v("-h | -help 打印帮助信息")])]),v._v(" "),t("h3",{attrs:{id:"线程状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#线程状态"}},[v._v("#")]),v._v(" 线程状态")]),v._v(" "),t("ul",[t("li",[t("p",[t("strong",[v._v("NEW")]),v._v(",未启动的。不会出现在Dump中。")])]),v._v(" "),t("li",[t("p",[t("strong",[v._v("RUNNABLE")]),v._v(",在虚拟机内执行的。运行中状态，可能里面还能看到locked字样，表明它获得了某把锁。")])]),v._v(" "),t("li",[t("p",[t("strong",[v._v("BLOCKED")]),v._v(",受阻塞并等待监视器锁。被某个锁(synchronizers)給block住了。")])]),v._v(" "),t("li",[t("p",[t("strong",[v._v("WATING")]),v._v(",无限期等待另一个线程执行特定操作。等待某个condition或monitor发生，一般停留在park(), wait(), sleep(),join() 等语句里。")])]),v._v(" "),t("li",[t("p",[t("strong",[v._v("TIMED_WATING")]),v._v(",有时限的等待另一个线程的特定操作。和WAITING的区别是wait() 等语句加上了时间限制 wait(timeout)。")])]),v._v(" "),t("li",[t("p",[t("strong",[v._v("TERMINATED")]),v._v(",已退出的。")])])]),v._v(" "),t("h3",{attrs:{id:"调用修饰"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#调用修饰"}},[v._v("#")]),v._v(" 调用修饰")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("locked <地址> 目标：使用synchronized申请对象锁成功,监视器的拥有者。")])]),v._v(" "),t("li",[t("p",[v._v("waiting to lock <地址> 目标：使用synchronized申请对象锁未成功,在迚入区等待。")])]),v._v(" "),t("li",[t("p",[v._v("waiting on <地址> 目标：使用synchronized申请对象锁成功后,释放锁幵在等待区等待。")])]),v._v(" "),t("li",[t("p",[v._v("parking to wait for <地址> 目标")])])]),v._v(" "),t("h3",{attrs:{id:"线程动作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#线程动作"}},[v._v("#")]),v._v(" 线程动作")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("runnable:状态一般为RUNNABLE。")])]),v._v(" "),t("li",[t("p",[v._v("in Object.wait():等待区等待,状态为WAITING或TIMED_WAITING。")])]),v._v(" "),t("li",[t("p",[v._v("waiting for monitor entry:进入区等待,状态为BLOCKED。")])]),v._v(" "),t("li",[t("p",[v._v("waiting on condition:等待区等待、被park。")])]),v._v(" "),t("li",[t("p",[v._v("sleeping:休眠的线程,调用了Thread.sleep()。")])])]),v._v(" "),t("h3",{attrs:{id:"jstack找出占用cpu最高的堆栈信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jstack找出占用cpu最高的堆栈信息"}},[v._v("#")]),v._v(" jstack找出占用cpu最高的堆栈信息")]),v._v(" "),t("blockquote",[t("p",[v._v("1，使用命令top -p  ，显示你的java进程的内存情况，pid是你的java进程号，比如4977\n2，按H，获取每个线程的内存情况\n3，找到内存和cpu占用最高的线程tid，比如4977\n4，转为十六进制得到 0x1371 ,此为线程id的十六进制表示  linux中可用"),t("code",[v._v('printf "%x\\n" tid')]),v._v("\n5，执行 jstack 4977|grep -A 10 1371，得到线程堆栈信息中1371这个线程所在行的后面10行\n6，查看对应的堆栈信息找出可能存在问题的代码")])]),v._v(" "),t("h2",{attrs:{id:"jinfo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jinfo"}},[v._v("#")]),v._v(" Jinfo")]),v._v(" "),t("h4",{attrs:{id:"参数说明-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参数说明-2"}},[v._v("#")]),v._v(" 参数说明")]),v._v(" "),t("ul",[t("li",[v._v("pid 对应jvm的进程id")]),v._v(" "),t("li",[v._v("executable core 产生core dump文件")]),v._v(" "),t("li",[v._v("[server-id@]remote server IP or hostname 远程的ip或者hostname，server-id标记服务的唯一性id")])]),v._v(" "),t("h4",{attrs:{id:"option-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#option-2"}},[v._v("#")]),v._v(" option")]),v._v(" "),t("ul",[t("li",[v._v("no option 输出全部的参数和系统属性")]),v._v(" "),t("li",[v._v("-flag name 输出对应名称的参数")]),v._v(" "),t("li",[v._v("-flag [+|-]name 开启或者关闭对应名称的参数")]),v._v(" "),t("li",[v._v("-flag name=value 设定对应名称的参数")]),v._v(" "),t("li",[v._v("-flags 输出全部的参数")]),v._v(" "),t("li",[v._v("-sysprops 输出系统属性")])]),v._v(" "),t("h2",{attrs:{id:"jstat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jstat"}},[v._v("#")]),v._v(" Jstat")]),v._v(" "),t("p",[v._v("jstat(Java Virtual Machine statistics monitoring tool)——查看堆内各个部分的使用量，以及加载类的数量")]),v._v(" "),t("p",[v._v("命令格式："),t("strong",[v._v("jstat")]),v._v(" [generalOption | outputOptions vmid [ interval [ s|ms ] [ count ] ] ]\njstat [-命令选项] [vmid] [间隔时间(毫秒)] [查询次数]")]),v._v(" "),t("p",[v._v("-statOption：")]),v._v(" "),t("blockquote",[t("p",[v._v("class：关于类加载器行为的统计信息")]),v._v(" "),t("p",[v._v("compiler：HotSpot即时编译器行为的统计信息")]),v._v(" "),t("p",[v._v("gc：垃圾回收堆行为的统计信息")]),v._v(" "),t("p",[v._v("gacapacity：统计内存三代（young、old、permanent）及他们空间信息")]),v._v(" "),t("p",[v._v("gccause：垃圾收集统计（与-gcutil相同）的摘要，以及最后一个和当前（如果适用）垃圾回收事件的cause")]),v._v(" "),t("p",[v._v("gcnew：新生代的统计信息")]),v._v(" "),t("p",[v._v("gcnewcapacity：新生代及其空间使用情况")]),v._v(" "),t("p",[v._v("gcold：老年代和永久代的统计信息")]),v._v(" "),t("p",[v._v("gcoldcapacity：老年代容量的使用情况")]),v._v(" "),t("p",[v._v("gcpermcapacity：永久代容量的使用情况")]),v._v(" "),t("p",[v._v("gcutil：垃圾回收统计")]),v._v(" "),t("p",[v._v("printcompilation：hotSpot编译器方法统计")])]),v._v(" "),t("p",[v._v("-h n：设置隔n行显示header")]),v._v(" "),t("p",[v._v("-t：第一列显示一个时间戳，当前时间与jvm启动时间的时间间隔")]),v._v(" "),t("h3",{attrs:{id:"class：类加载统计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#class：类加载统计"}},[v._v("#")]),v._v(" class：类加载统计")]),v._v(" "),t("blockquote",[t("p",[v._v("jstat -class pid")]),v._v(" "),t("p",[v._v("Loaded:加载class的数量")]),v._v(" "),t("p",[v._v("Bytes：所占用空间大小")]),v._v(" "),t("p",[v._v("Unloaded：未加载数量")]),v._v(" "),t("p",[v._v("Bytes:未加载占用空间")]),v._v(" "),t("p",[v._v("Time：花费在执行类加载和未加载操作上的时间")])]),v._v(" "),t("h3",{attrs:{id:"compiler：hotspot即时编译器行为的统计信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compiler：hotspot即时编译器行为的统计信息"}},[v._v("#")]),v._v(" compiler：HotSpot即时编译器行为的统计信息")]),v._v(" "),t("blockquote",[t("p",[v._v("jstat -compiler pid")]),v._v(" "),t("p",[v._v("​")]),v._v(" "),t("p",[v._v("Compiled：编译数量")]),v._v(" "),t("p",[v._v("Failed：失败数量")]),v._v(" "),t("p",[v._v("Invalid：不可用数量")]),v._v(" "),t("p",[v._v("Time：编译花费的时间")]),v._v(" "),t("p",[v._v("FailedType：最近一次编译失败的编译类型")]),v._v(" "),t("p",[v._v("FailedMethod：最近一次编译失败的类名和方法名")])]),v._v(" "),t("h3",{attrs:{id:"gc：垃圾回收堆行为的统计信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gc：垃圾回收堆行为的统计信息"}},[v._v("#")]),v._v(" gc：垃圾回收堆行为的统计信息")]),v._v(" "),t("blockquote",[t("p",[v._v("jstat -gc pid")])]),v._v(" "),t("blockquote",[t("p",[v._v("S0C：survivor 0的容量（KB）")]),v._v(" "),t("p",[v._v("S1C：survivor 1的容量（KB）")]),v._v(" "),t("p",[v._v("S0U：survivor 0已使用情况（KB）")]),v._v(" "),t("p",[v._v("S1U：survivor 1已使用情况（KB）")]),v._v(" "),t("p",[v._v("EC：Eden的空间容量（KB）")]),v._v(" "),t("p",[v._v("EU：Eden已使用情况（KB）")]),v._v(" "),t("p",[v._v("OC：老年代空间容量（KB）")]),v._v(" "),t("p",[v._v("OU：老年代已使用大小（KB）")]),v._v(" "),t("p",[v._v("MC：方法区空间容量（KB）")]),v._v(" "),t("p",[v._v("MU：方法区使用大小（KB）")]),v._v(" "),t("p",[v._v("CCSC：压缩类空间大小")]),v._v(" "),t("p",[v._v("CCSU：压缩类空间使用大小")]),v._v(" "),t("p",[v._v("YGC：新生代垃圾回收次数")]),v._v(" "),t("p",[v._v("YGCT：新生代垃圾回收消耗时间")]),v._v(" "),t("p",[v._v("FGC：full gc发生次数")]),v._v(" "),t("p",[v._v("FGCT：full gc消耗时间")]),v._v(" "),t("p",[v._v("GCT：垃圾回收消耗总时间")])]),v._v(" "),t("h3",{attrs:{id:"gacapacity：统计内存三代（young、old、permanent）及他们空间使用信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gacapacity：统计内存三代（young、old、permanent）及他们空间使用信息"}},[v._v("#")]),v._v(" gacapacity：统计内存三代（young、old、permanent）及他们空间使用信息")]),v._v(" "),t("blockquote",[t("p",[v._v("jstat -gccapacity pid")])]),v._v(" "),t("blockquote",[t("p",[v._v("NGCMN：新生代最小容量")]),v._v(" "),t("p",[v._v("NGCMX：新生代最大容量")]),v._v(" "),t("p",[v._v("NGC：当前新生代容量")]),v._v(" "),t("p",[v._v("S0C：survivor 0的容量")]),v._v(" "),t("p",[v._v("S1C：survivor 1的容量")]),v._v(" "),t("p",[v._v("EC：Eden的空间容量")]),v._v(" "),t("p",[v._v("OGCMN：老年代最小容量")]),v._v(" "),t("p",[v._v("OGCMX：老年代最大容量")]),v._v(" "),t("p",[v._v("OGC：当前老年代容量")]),v._v(" "),t("p",[v._v("OC: 当前老年代空间大小")]),v._v(" "),t("p",[v._v("MCMN: 永久代最小容量")]),v._v(" "),t("p",[v._v("MCMX：永久代最大容量")]),v._v(" "),t("p",[v._v("MC：当前元数据空间大小")]),v._v(" "),t("p",[v._v("CCSMN：最小压缩类空间大小")]),v._v(" "),t("p",[v._v("CCSMX：最大压缩类空间大小")]),v._v(" "),t("p",[v._v("CCSC：当前压缩类空间大小")]),v._v(" "),t("p",[v._v("YGC：年轻代gc次数")]),v._v(" "),t("p",[v._v("FGC：老年代GC次数")])]),v._v(" "),t("h3",{attrs:{id:"gcutil：垃圾回收统计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gcutil：垃圾回收统计"}},[v._v("#")]),v._v(" gcutil：垃圾回收统计")]),v._v(" "),t("blockquote",[t("p",[v._v("jstat -gcutil pid 500 10")])]),v._v(" "),t("blockquote",[t("p",[v._v("S0：survivor 0当前使用比例")]),v._v(" "),t("p",[v._v("S1：survivor 1当前使用比例")]),v._v(" "),t("p",[v._v("E：永久代使用比例")]),v._v(" "),t("p",[v._v("O：老年代使用比例")]),v._v(" "),t("p",[v._v("M：元数据区使用比例")]),v._v(" "),t("p",[v._v("CCS：压缩使用比例")]),v._v(" "),t("p",[v._v("YGC：新生代垃圾回收次数")]),v._v(" "),t("p",[v._v("FGC：老年代垃圾回收次数")]),v._v(" "),t("p",[v._v("FGCT：老年代垃圾回收消耗时间")]),v._v(" "),t("p",[v._v("GCT：垃圾回收消耗总时间")])]),v._v(" "),t("h3",{attrs:{id:"gccause：垃圾收集统计（与-gcutil相同）的摘要，以及上次和当前（如果适用）垃圾回收事件的cause"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gccause：垃圾收集统计（与-gcutil相同）的摘要，以及上次和当前（如果适用）垃圾回收事件的cause"}},[v._v("#")]),v._v(" gccause：垃圾收集统计（与-gcutil相同）的摘要，以及上次和当前（如果适用）垃圾回收事件的cause")]),v._v(" "),t("blockquote",[t("p",[v._v("jstat -gccause pid 500 10")])]),v._v(" "),t("blockquote",[t("p",[v._v("LGCC：上次垃圾回收的cause")]),v._v(" "),t("p",[v._v("GCC：当前垃圾回收的cause")])]),v._v(" "),t("h3",{attrs:{id:"gcnew：新生代统计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gcnew：新生代统计"}},[v._v("#")]),v._v(" gcnew：新生代统计")]),v._v(" "),t("blockquote",[t("p",[v._v("jstat -gcnew pid 500 10")])]),v._v(" "),t("blockquote",[t("p",[v._v("S0C：survivor 0的容量大小")]),v._v(" "),t("p",[v._v("S1C：survivor 1的容量大小")]),v._v(" "),t("p",[v._v("S0U：survivor 0的使用大小")]),v._v(" "),t("p",[v._v("S1U：survivor 1的使用大小")]),v._v(" "),t("p",[v._v("TT: 对象在新生代存活的次数")]),v._v(" "),t("p",[v._v("MTT: 对象在新生代存活的最大次数")]),v._v(" "),t("p",[v._v("DSS:期望的survivor大小")]),v._v(" "),t("p",[v._v("EC：Eden的容量大小")]),v._v(" "),t("p",[v._v("EU：Eden的使用大小")]),v._v(" "),t("p",[v._v("YGC：新生代垃圾回收次数")]),v._v(" "),t("p",[v._v("YGCT：新生代垃圾回收消耗时间")])]),v._v(" "),t("h3",{attrs:{id:"gcnewcapacity：新生代空间大小统计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gcnewcapacity：新生代空间大小统计"}},[v._v("#")]),v._v(" gcnewcapacity：新生代空间大小统计")]),v._v(" "),t("blockquote",[t("p",[v._v("jstat -gcnewcapacity pid 500 10")])]),v._v(" "),t("blockquote",[t("p",[v._v("NGCMN：新生代最小容量")]),v._v(" "),t("p",[v._v("NGCMX：新生代最大容量")]),v._v(" "),t("p",[v._v("NGC：当前新生代容量")]),v._v(" "),t("p",[v._v("S0CMX：最大survivor 0大小")]),v._v(" "),t("p",[v._v("S0C：当前survivor 0大小")]),v._v(" "),t("p",[v._v("S1CMX：最大survivor 1大小")]),v._v(" "),t("p",[v._v("S1C：当前survivor 1大小")]),v._v(" "),t("p",[v._v("ECMX：最大Eden区空间大小")]),v._v(" "),t("p",[v._v("EC：当前Eden区空间大小")]),v._v(" "),t("p",[v._v("YGC：新生代垃圾回收次数")]),v._v(" "),t("p",[v._v("FGC：老年代回收次数")])]),v._v(" "),t("h3",{attrs:{id:"gcold：老年代和永久代的统计信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gcold：老年代和永久代的统计信息"}},[v._v("#")]),v._v(" gcold：老年代和永久代的统计信息")]),v._v(" "),t("blockquote",[t("p",[v._v("jstat -gcold pid 500 10")])]),v._v(" "),t("blockquote",[t("p",[v._v("MC：方法区大小")]),v._v(" "),t("p",[v._v("MU：方法区使用大小")]),v._v(" "),t("p",[v._v("CCSC:压缩类空间大小")]),v._v(" "),t("p",[v._v("CCSU:压缩类空间使用大小")]),v._v(" "),t("p",[v._v("OC：老年代大小")]),v._v(" "),t("p",[v._v("OU：老年代使用大小")]),v._v(" "),t("p",[v._v("YGC：新生代垃圾回收次数")]),v._v(" "),t("p",[v._v("FGC：老年代垃圾回收次数")]),v._v(" "),t("p",[v._v("FGCT：老年代垃圾回收消耗时间")]),v._v(" "),t("p",[v._v("GCT：垃圾回收消耗总时间")])]),v._v(" "),t("h3",{attrs:{id:"gcoldcapacity：新生代及其空间使用情况"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gcoldcapacity：新生代及其空间使用情况"}},[v._v("#")]),v._v(" gcoldcapacity：新生代及其空间使用情况")]),v._v(" "),t("blockquote",[t("p",[v._v("jstat -gcoldcapacity pid 500 10")])]),v._v(" "),t("blockquote",[t("p",[v._v("OGCMN：老年代最小容量")]),v._v(" "),t("p",[v._v("OGCMX：老年代最大容量")]),v._v(" "),t("p",[v._v("OGC：当前老年代大小")]),v._v(" "),t("p",[v._v("OC：老年代大小")]),v._v(" "),t("p",[v._v("YGC：新生代垃圾回收次数")]),v._v(" "),t("p",[v._v("FGC：老年代垃圾回收次数")]),v._v(" "),t("p",[v._v("FGCT：老年代垃圾回收消耗时间")]),v._v(" "),t("p",[v._v("GCT：垃圾回收消耗总时间")])]),v._v(" "),t("h3",{attrs:{id:"gcpermcapacity：永久代容量的使用情况"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gcpermcapacity：永久代容量的使用情况"}},[v._v("#")]),v._v(" gcpermcapacity：永久代容量的使用情况")]),v._v(" "),t("blockquote",[t("p",[v._v("PGCMN：perm代中最小容量 (KB)")]),v._v(" "),t("p",[v._v("PGCMX：perm代的最大容量 (KB)")]),v._v(" "),t("p",[v._v("PGC：perm代当前新生成的容量 (KB)")]),v._v(" "),t("p",[v._v("PC：Perm(持久代)的容量 (KB)")]),v._v(" "),t("p",[v._v("YGC：从应用程序启动到采样时新生代中gc次数")]),v._v(" "),t("p",[v._v("FGC：从应用程序启动到采样时老年代(全gc)gc次数")]),v._v(" "),t("p",[v._v("FGCT：从应用程序启动到采样时老年代(全gc)gc所用时间(s)")]),v._v(" "),t("p",[v._v("GCT：从应用程序启动到采样时gc用的总时间(s)")])]),v._v(" "),t("h3",{attrs:{id:"printcompilation：hotspot编译器方法统计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#printcompilation：hotspot编译器方法统计"}},[v._v("#")]),v._v(" printcompilation：hotSpot编译器方法统计")]),v._v(" "),t("blockquote",[t("p",[v._v("jstat -printcompilation pid 500 1")])]),v._v(" "),t("blockquote",[t("p",[v._v("Compiled：最近编译方法的数量")]),v._v(" "),t("p",[v._v("Size：最近编译方法的字节码数量")]),v._v(" "),t("p",[v._v("Type：最近编译方法的编译类型")]),v._v(" "),t("p",[v._v("Method：方法名标识")])])])}),[],!1,null,null,null);_.default=i.exports}}]);