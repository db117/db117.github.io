(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{467:function(t,e,l){"use strict";l.r(e);var a=l(34),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h4",{attrs:{id:"查看某个进程的pid"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#查看某个进程的pid"}},[t._v("#")]),t._v(" 查看某个进程的PID")]),t._v(" "),l("p",[t._v("如查看java的进程的pid，"),l("code",[t._v("ps -ef | grep java")]),t._v(":")]),t._v(" "),l("div",{staticClass:"language- line-numbers-mode"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v("[root@localhost ~]# ps -ef | grep java\nroot     124146   1984  0 09:13 pts/0    00:00:06 java -jar arthas-demo.jar\nroot     125210  98378  0 10:07 pts/1    00:00:00 grep --color=auto java\n")])]),t._v(" "),l("div",{staticClass:"line-numbers-wrapper"},[l("span",{staticClass:"line-number"},[t._v("1")]),l("br"),l("span",{staticClass:"line-number"},[t._v("2")]),l("br"),l("span",{staticClass:"line-number"},[t._v("3")]),l("br")])]),l("h4",{attrs:{id:"查看特定进程的数量"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#查看特定进程的数量"}},[t._v("#")]),t._v(" 查看特定进程的数量")]),t._v(" "),l("p",[t._v("如查看java进程的数量,"),l("code",[t._v("ps -ef | grep java| wc -l")]),t._v("：")]),t._v(" "),l("div",{staticClass:"language- line-numbers-mode"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v("[root@localhost ~]# ps -ef | grep java| wc -l\n2\n")])]),t._v(" "),l("div",{staticClass:"line-numbers-wrapper"},[l("span",{staticClass:"line-number"},[t._v("1")]),l("br"),l("span",{staticClass:"line-number"},[t._v("2")]),l("br")])]),l("h4",{attrs:{id:"查看线程是否存在死锁"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#查看线程是否存在死锁"}},[t._v("#")]),t._v(" 查看线程是否存在死锁")]),t._v(" "),l("p",[t._v("查看线程是否存在死锁，"),l("code",[t._v("jstack -l pid")]),t._v("：")]),t._v(" "),l("div",{staticClass:"language- line-numbers-mode"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v('[root@localhost ~]# jstack -l 124146\n2020-05-02 10:13:38\nFull thread dump OpenJDK 64-Bit Server VM (25.252-b09 mixed mode):\n\n"C1 CompilerThread1" #6 daemon prio=9 os_prio=0 tid=0x00007f27f013c000 nid=0x1e4f9 waiting on condition [0x0000000000000000]\n   java.lang.Thread.State: RUNNABLE\n\n   Locked ownable synchronizers:\n        - None\n\n"C2 CompilerThread0" #5 daemon prio=9 os_prio=0 tid=0x00007f27f012d000 nid=0x1e4f8 waiting on condition [0x0000000000000000]\n   java.lang.Thread.State: RUNNABLE\n\n   Locked ownable synchronizers:\n        - None\n\n"main" #1 prio=5 os_prio=0 tid=0x00007f27f004b800 nid=0x1e4f3 waiting on condition [0x00007f27f7274000]\n   java.lang.Thread.State: TIMED_WAITING (sleeping)\n        at java.lang.Thread.sleep(Native Method)\n        at java.lang.Thread.sleep(Thread.java:340)\n        at java.util.concurrent.TimeUnit.sleep(TimeUnit.java:386)\n        at demo.MathGame.main(MathGame.java:17)\n\n   Locked ownable synchronizers:\n        - None\n...\n')])]),t._v(" "),l("div",{staticClass:"line-numbers-wrapper"},[l("span",{staticClass:"line-number"},[t._v("1")]),l("br"),l("span",{staticClass:"line-number"},[t._v("2")]),l("br"),l("span",{staticClass:"line-number"},[t._v("3")]),l("br"),l("span",{staticClass:"line-number"},[t._v("4")]),l("br"),l("span",{staticClass:"line-number"},[t._v("5")]),l("br"),l("span",{staticClass:"line-number"},[t._v("6")]),l("br"),l("span",{staticClass:"line-number"},[t._v("7")]),l("br"),l("span",{staticClass:"line-number"},[t._v("8")]),l("br"),l("span",{staticClass:"line-number"},[t._v("9")]),l("br"),l("span",{staticClass:"line-number"},[t._v("10")]),l("br"),l("span",{staticClass:"line-number"},[t._v("11")]),l("br"),l("span",{staticClass:"line-number"},[t._v("12")]),l("br"),l("span",{staticClass:"line-number"},[t._v("13")]),l("br"),l("span",{staticClass:"line-number"},[t._v("14")]),l("br"),l("span",{staticClass:"line-number"},[t._v("15")]),l("br"),l("span",{staticClass:"line-number"},[t._v("16")]),l("br"),l("span",{staticClass:"line-number"},[t._v("17")]),l("br"),l("span",{staticClass:"line-number"},[t._v("18")]),l("br"),l("span",{staticClass:"line-number"},[t._v("19")]),l("br"),l("span",{staticClass:"line-number"},[t._v("20")]),l("br"),l("span",{staticClass:"line-number"},[t._v("21")]),l("br"),l("span",{staticClass:"line-number"},[t._v("22")]),l("br"),l("span",{staticClass:"line-number"},[t._v("23")]),l("br"),l("span",{staticClass:"line-number"},[t._v("24")]),l("br"),l("span",{staticClass:"line-number"},[t._v("25")]),l("br"),l("span",{staticClass:"line-number"},[t._v("26")]),l("br")])]),l("h4",{attrs:{id:"查看某个进程的线程数"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#查看某个进程的线程数"}},[t._v("#")]),t._v(" 查看某个进程的线程数")]),t._v(" "),l("p",[l("code",[t._v("ps -efL | grep [PID] | wc -l")]),t._v("，如：")]),t._v(" "),l("div",{staticClass:"language- line-numbers-mode"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v("[root@localhost ~]# ps -efL | grep 124146 | wc -l\n12\n")])]),t._v(" "),l("div",{staticClass:"line-numbers-wrapper"},[l("span",{staticClass:"line-number"},[t._v("1")]),l("br"),l("span",{staticClass:"line-number"},[t._v("2")]),l("br")])]),l("p",[t._v("查看具体有哪些线程用"),l("code",[t._v("ps -Lp [pid] cu")]),t._v(":")]),t._v(" "),l("div",{staticClass:"language- line-numbers-mode"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v("[root@localhost ~]# ps -Lp 124146 cu\nUSER        PID    LWP %CPU NLWP %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND\nroot     124146 124146  0.0   11  2.5 2489116 35724 pts/0   Sl+  09:13   0:00 java\nroot     124146 124147  0.0   11  2.5 2489116 35724 pts/0   Sl+  09:13   0:01 java\nroot     124146 124148  0.0   11  2.5 2489116 35724 pts/0   Sl+  09:13   0:00 VM Thread\nroot     124146 124149  0.0   11  2.5 2489116 35724 pts/0   Sl+  09:13   0:00 Reference Handl\nroot     124146 124150  0.0   11  2.5 2489116 35724 pts/0   Sl+  09:13   0:00 Finalizer\nroot     124146 124151  0.0   11  2.5 2489116 35724 pts/0   Sl+  09:13   0:00 Signal Dispatch\nroot     124146 124152  0.0   11  2.5 2489116 35724 pts/0   Sl+  09:13   0:00 C2 CompilerThre\nroot     124146 124153  0.0   11  2.5 2489116 35724 pts/0   Sl+  09:13   0:00 C1 CompilerThre\nroot     124146 124154  0.0   11  2.5 2489116 35724 pts/0   Sl+  09:13   0:00 Service Thread\nroot     124146 124155  0.1   11  2.5 2489116 35724 pts/0   Sl+  09:13   0:05 VM Periodic Tas\nroot     124146 125362  0.0   11  2.5 2489116 35724 pts/0   Sl+  10:13   0:00 Attach Listener\n")])]),t._v(" "),l("div",{staticClass:"line-numbers-wrapper"},[l("span",{staticClass:"line-number"},[t._v("1")]),l("br"),l("span",{staticClass:"line-number"},[t._v("2")]),l("br"),l("span",{staticClass:"line-number"},[t._v("3")]),l("br"),l("span",{staticClass:"line-number"},[t._v("4")]),l("br"),l("span",{staticClass:"line-number"},[t._v("5")]),l("br"),l("span",{staticClass:"line-number"},[t._v("6")]),l("br"),l("span",{staticClass:"line-number"},[t._v("7")]),l("br"),l("span",{staticClass:"line-number"},[t._v("8")]),l("br"),l("span",{staticClass:"line-number"},[t._v("9")]),l("br"),l("span",{staticClass:"line-number"},[t._v("10")]),l("br"),l("span",{staticClass:"line-number"},[t._v("11")]),l("br"),l("span",{staticClass:"line-number"},[t._v("12")]),l("br"),l("span",{staticClass:"line-number"},[t._v("13")]),l("br")])]),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("类别")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("监控命令")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("描述")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("内存瓶颈")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("free")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("查看内存使用")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("vmstat 3(间隔时间) 100(监控次数)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("查看swap in/out详细定位是否存在性能瓶颈")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("推荐使用")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("sar -r 3")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("和free命令类似，查看内存的使用情况，但是不包含swap的情况")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("cpu瓶颈")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("top -H")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("按照cpu消耗高低进行排序")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("ps -Lp 进程号 cu")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("查看某个进程的cpu消耗排序")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("cat /proc/cpuinfo |grep 'processor'|wc -l")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("查看cpu核数")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("top")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("查看cpu总体消耗，包括分项消耗如user,system,idle,nice等消耗")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("top 然后shift+h:显示java线程，然后shift+M:按照内存使用进行排序；shift+P:按照cpu时间排序;shift+T:按照cpu累计使用时间排序多核cpu，按“1”进入top视图")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("专项性能排查，多核CPU主要看CUP各个内核的负载情况")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("sar -u 3(间隔时间)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("查看cpu总体消耗占比")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("sar -q")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("查看cpu load")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v('top -b -n 1 | awk \'{if (NR<=7)print;else if($8=="D"){print;count++}}END{print "Total status D:"count}\'')]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("计算在cpu load里面的uninterruptedsleep的任务数量 uninterruptedsleep的任务会被计入cpu load，如磁盘堵塞")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("网络瓶颈")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("cat /var/log/messages")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("查看内核日志，查看是否丢包")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("watch more /proc/net/dev")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("用于定位丢包，错包情况，以便看网络瓶颈")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("重点关注drop(包被丢弃)和网络包传送的总量，不要超过网络上限")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("sar -n SOCK")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("查看网络流量")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("netstat -na|grep ESTABLISHED|wc -l")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("查看tcp连接成功状态的数量")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("此命令特别消耗cpu，不适合进行长时间监控数据收集")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("netstat -na|awk'{print $6}'|sort |uniq -c |sort -nr")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("看tcp各个状态数量")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("netstat -i")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("查看网络错误")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("ss state ESTABLISHED| wc -l")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("更高效地统计tcp连接状态为ESTABLISHED的数量")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("cat /proc/net/snmp")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("查看和分析240秒内网络包量，流量，错包，丢包")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("用于计算重传率"),l("code",[t._v("tcpetr=RetransSegs/OutSegs")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("ping $ip")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("测试网络性能")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("traceroute $ip")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("查看路由经过的地址")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("常用于定位网络在各个路由区段的耗时")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("dig $域名")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("查看域名解析地址")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("dmesg")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("查看系统内核日志")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("磁盘瓶颈")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("iostat -x -k -d 1")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("详细列出磁盘的读写情况")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("当看到I/O等待时间所占CPU时间的比重很高的时候，首先要检查的就是机器是否正在大量使用交换空间，同时关注iowait占比cpu的消耗是否很大，如果大说明磁盘存在大的瓶颈，同时关注await，表示磁盘的响应时间以便小于5ms")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("iostat -x")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("查看系统各个磁盘的读写性能")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("重点关注await和iowait的cpu占比")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("iotop")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("查看哪个进程在大量读取IO")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("一般先通过iostat查看是否存在io瓶颈，再定位哪个进程在大量读取IO")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("df -hl")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("查看磁盘剩余空间")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("du -sh")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("查看磁盘使用了多少空间")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("应用瓶颈")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("ps -ef")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("grep java")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("查看某个进程的id号")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("ps -ef | grep httpd| wc -l")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("查看特定进程的数量")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("cat *** .log | grep *** Exception| wc -l")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("统计日志文件中包含特定异常数量")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("jstack -l pid")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("用于查看线程是否存在死锁")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("awk'{print $8}' 2017-05-22-access_log|egrep '301|302'| wc -l")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("统计log中301、302状态码的行数，$8表示第八列是状态码，可以根据实际情况更改")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("常用于应用故障定位")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("grep 'wholesaleProductDetailNew' cookie_log | awk '{if($10==\"200\")}'print}'")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("awk 'print $12' | more")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("打印包含特定数据的12列数据")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("grep \"2017:05:22\" cookielog | awk '($12>0.3){print 8}' | sort > 目录地址")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("对apache或者nginx访问log进行响应时间排序，$12表示cookie log中的12列表示响应时间 用于排查是否是由于是某些访问超长造成整体的RT变长")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("grep -v 'HTTP/1.1\" 200'")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("取出非200响应码的URL")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v('pgm -A -f $应用集群名称 "grep "\'301\' log文件地址 | wc -l"')]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("查看整个集群的log中301状态码的数量")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("ps -efL | grep [PID] | wc -l")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("查看某个进程创建的线程数")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v('find / -type f -name " * .log" | xargs grep "ERROR"')]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("统计所有的log文件中，包含Error字符的行")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("这个在排查问题过程中比较有用")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("jstat -gc [pid]")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("查看gc情况")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("jstat -gcnew [pid]")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("查看young区的内存使用情况，包括MTT(最大交互次数就被交换到old区)，TT是目前已经交换的次数")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("jstat -gcold")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("查看old区的内存使用情况")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("jmap -J-d64 -dump:format=b,file=dump.bin PID")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("dump出内存快照")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-J-d64防止jmap导致虚拟机crash(jdk6有bug)")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-XX:+HeapDumpOnOutOfMemeryError")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("在java启动时加入，当出现内存溢出时，存储内存快照")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("jmap -histo [pid]")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("按照对象内存大小排序")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("注意会导致full gc")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("gcore [pid]")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("导出完成的内存快照")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("通常和"),l("code",[t._v("jmap -permstat /opt/ ** /java gcore.bin")]),t._v("一起使用，将core dump转换成heap dump")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-XX:HeapDumpPath=/home/logs -Xloggc:/home/log/gc.log -XX:+PrintGCDetails -XX:+PrintGCDateStamps")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("在Java启动参数中加入，打印gc日志")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-server -Xms4000m -Xmx4000m -Xmn1500m -Xss256k -XX:PermSize=340m -XX:MaxPermSize=340m -XX:+UseConcMarkSweepGC")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("调整JVM堆大小")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("xss是栈大小")])])])])])}),[],!1,null,null,null);e.default=i.exports}}]);