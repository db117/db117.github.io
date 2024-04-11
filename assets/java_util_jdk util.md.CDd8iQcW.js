import{_ as a,c as o,o as l,a8 as p}from"./chunks/framework.DWDnyA0p.js";const k=JSON.parse('{"title":"jdk工具","description":"","frontmatter":{"title":"jdk工具"},"headers":[],"relativePath":"java/util/jdk util.md","filePath":"java/util/jdk util.md","lastUpdated":1712806971000}'),e={name:"java/util/jdk util.md"},i=p('<blockquote><p>基于 jdk11</p><p><a href="https://docs.oracle.com/en/java/javase/11/tools/tools-and-command-reference.html" target="_blank" rel="noreferrer">Tools and Commands Reference (oracle.com)</a></p></blockquote><h2 id="javac" tabindex="-1">javac <a class="header-anchor" href="#javac" aria-label="Permalink to &quot;javac&quot;">​</a></h2><blockquote><p>读取 Java 类和接口定义，并将它们编译成字节码和类文件。</p><p>还可以在Java源文件和类中处理注释。</p></blockquote><p><strong>参数</strong></p><ul><li><p>--class-path path, -classpath path, -cp path</p><blockquote><p>指定在哪里可以找到用户类文件和注释处理器。这个类路径覆盖了 CLASSPATH 环境变量中的用户类路径。</p></blockquote></li><li><p><strong>-d</strong> <strong>directory</strong></p><blockquote><p>设置类文件的输出目录。</p></blockquote></li><li><p>-encoding encoding</p><blockquote><p>指定源文件使用的字符编码,如果没有使用则使用系统默认编码</p></blockquote></li><li><p>-g</p><blockquote><p>生成所有调试信息，包括本地变量。默认情况下，只生成行号和源文件信息。</p></blockquote></li><li><p>-verbose</p><blockquote><p>输出有关编译器正在做什么的消息。消息包括有关加载的每个类和编译的每个源文件的信息。</p></blockquote></li><li><p>-source release</p><blockquote><p>指定接受的源代码版本。</p></blockquote></li><li><p>-target release</p><blockquote><p>为特定的 VM 版本生成类文件。</p></blockquote></li></ul><h2 id="javap" tabindex="-1">javap <a class="header-anchor" href="#javap" aria-label="Permalink to &quot;javap&quot;">​</a></h2><blockquote><p>反汇编一个或多个类文件。</p></blockquote><p><strong>参数</strong></p><ul><li><p>-verbose or -v</p><blockquote><p>打印有关所选类的附加信息。</p></blockquote></li><li><p>-l</p><blockquote><p>打印行和局部变量表。</p></blockquote></li><li><p>-public</p><blockquote><p>只显示公共类和成员。</p></blockquote></li><li><p>-protected</p><blockquote><p>只显示受保护的和公共的类和成员。</p></blockquote></li><li><p>-package</p><blockquote><p>显示除私有的</p></blockquote></li><li><p>-private or -p</p><blockquote><p>显示所有的类和成员</p></blockquote></li><li><p>-c</p><blockquote><p>为类中的每个方法打印反汇编代码</p></blockquote></li><li><p>-s</p><blockquote><p>打印内部类型签名。</p></blockquote></li><li><p>-sysinfo</p><blockquote><p>显示正在处理的类的系统信息(路径、大小、日期、 MD5散列)。</p></blockquote></li><li><p>-constants</p><blockquote><p>显示<code>static</code>,<code>final</code>常量‘</p></blockquote></li></ul><h2 id="javadoc" tabindex="-1">javadoc <a class="header-anchor" href="#javadoc" aria-label="Permalink to &quot;javadoc&quot;">​</a></h2><blockquote><p>使用 javadoc 工具及其选项从 Java 源文件生成 API 文档的 HTML 页面。</p></blockquote><p><strong>参数</strong></p><blockquote><p>javac 的参数一部分参数可以在 javadoc 中使用</p><ul><li><code>-bootclasspath</code></li><li><code>--class-path</code>, <code>-classpath</code>, or <code>-cp</code></li><li><code>--enable-preview</code></li><li><code>-encoding</code></li><li><code>-extdirs</code></li><li><code>--release</code></li><li><code>-source</code></li><li><code>--source-path</code> or <code>-sourcepath</code></li><li><code>--system</code></li></ul></blockquote><ul><li><p>-exclude pkglist</p><blockquote><p>排除包</p></blockquote></li><li><p>-locale name</p><blockquote><p>指定 javadoc 工具生成文档时使用的区域设置。</p></blockquote></li><li><p>-package,-private,-protected,-public</p><blockquote><p>显示指定包访问级别之上的类和成员</p></blockquote></li><li><p>-quiet</p><blockquote><p>关闭消息，以便只显示警告和错误，使其更容易查看。</p></blockquote></li><li><p>--show-members [protected|public|package|private]</p><blockquote><p>指定记录哪些成员(字段或方法)</p></blockquote></li><li><p>-author</p><blockquote><p>在生成的文档中包含@author 文本。</p></blockquote></li><li><p>-charset name</p><blockquote><p>指定此文档的 HTML 字符集。</p></blockquote></li><li><p>-d directory</p><blockquote><p>指定 javadoc 工具保存生成的 HTML 文件的目标目录。</p></blockquote></li><li><p>-docencoding name</p><blockquote><p>指定生成的 HTML 文件的编码。</p></blockquote></li><li><p>-header html-code</p><blockquote><p>指定放置在每个输出文件顶部的标题文本。</p></blockquote></li><li><p>-footer html-code</p><blockquote><p>指定放置在每个输出文件底部的页脚文本。</p></blockquote></li><li><p>-nocomment</p><blockquote><p>取消整个注释体，包括主要描述和所有标记，并只生成声明。</p></blockquote></li><li><p>-nodeprecated</p><blockquote><p>防止在文档中生成任何已弃用的 API。</p></blockquote></li><li><p>--no-frames</p><blockquote><p>禁止在生成的输出中使用帧。</p></blockquote></li><li><p>-nohelp</p><blockquote><p>在每个页面输出的顶部和底部的导航栏中省略 HELP 链接。</p></blockquote></li><li><p>-noindex</p><blockquote><p>从生成的文档中省略索引。缺省情况下生成索引。</p></blockquote></li><li><p>-nonavbar</p><blockquote><p>防止导航栏、页眉和页脚的生成，这些导航栏、页眉和页脚通常位于生成页的顶部和底部。</p></blockquote></li><li><p>-nosince</p><blockquote><p>从生成的文档中省略与@Since 标记关联的 Since 部分。</p></blockquote></li><li><p>-notimestamp</p><blockquote><p>取消时间戳，时间戳隐藏在每个页面顶部附近生成的 HTML 中的 HTML 注释中。</p></blockquote></li><li><p>-notree</p><blockquote><p>从生成的文档中省略类和接口层次结构页面</p></blockquote></li></ul><h2 id="java" tabindex="-1">java <a class="header-anchor" href="#java" aria-label="Permalink to &quot;java&quot;">​</a></h2><blockquote><p>可以使用 Java 命令启动 Java 应用程序。</p><p>具体查看jvm参数</p></blockquote><h2 id="jar" tabindex="-1">jar <a class="header-anchor" href="#jar" aria-label="Permalink to &quot;jar&quot;">​</a></h2><blockquote><p>为类和资源创建存档，并操作或从存档中恢复单个类或资源。</p></blockquote><h2 id="jlink" tabindex="-1">jlink <a class="header-anchor" href="#jlink" aria-label="Permalink to &quot;jlink&quot;">​</a></h2><h2 id="jmod" tabindex="-1">jmod <a class="header-anchor" href="#jmod" aria-label="Permalink to &quot;jmod&quot;">​</a></h2><h2 id="jdeps" tabindex="-1">jdeps <a class="header-anchor" href="#jdeps" aria-label="Permalink to &quot;jdeps&quot;">​</a></h2><h2 id="jdeprscan" tabindex="-1">jdeprscan <a class="header-anchor" href="#jdeprscan" aria-label="Permalink to &quot;jdeprscan&quot;">​</a></h2><h2 id="jshell" tabindex="-1">jshell <a class="header-anchor" href="#jshell" aria-label="Permalink to &quot;jshell&quot;">​</a></h2><h2 id="keytool" tabindex="-1">keytool <a class="header-anchor" href="#keytool" aria-label="Permalink to &quot;keytool&quot;">​</a></h2><h2 id="jarsigner" tabindex="-1">jarsigner <a class="header-anchor" href="#jarsigner" aria-label="Permalink to &quot;jarsigner&quot;">​</a></h2><h2 id="kinit" tabindex="-1">kinit <a class="header-anchor" href="#kinit" aria-label="Permalink to &quot;kinit&quot;">​</a></h2><h2 id="klist" tabindex="-1">klist <a class="header-anchor" href="#klist" aria-label="Permalink to &quot;klist&quot;">​</a></h2><h2 id="ktab" tabindex="-1">ktab <a class="header-anchor" href="#ktab" aria-label="Permalink to &quot;ktab&quot;">​</a></h2><h2 id="rmic" tabindex="-1">rmic <a class="header-anchor" href="#rmic" aria-label="Permalink to &quot;rmic&quot;">​</a></h2><h2 id="rmiregistry" tabindex="-1">rmiregistry <a class="header-anchor" href="#rmiregistry" aria-label="Permalink to &quot;rmiregistry&quot;">​</a></h2><h2 id="rmid" tabindex="-1">rmid <a class="header-anchor" href="#rmid" aria-label="Permalink to &quot;rmid&quot;">​</a></h2><h2 id="serialver" tabindex="-1">serialver <a class="header-anchor" href="#serialver" aria-label="Permalink to &quot;serialver&quot;">​</a></h2><h2 id="pack200" tabindex="-1">pack200 <a class="header-anchor" href="#pack200" aria-label="Permalink to &quot;pack200&quot;">​</a></h2><h2 id="unpack200" tabindex="-1">unpack200 <a class="header-anchor" href="#unpack200" aria-label="Permalink to &quot;unpack200&quot;">​</a></h2><h2 id="jconsole" tabindex="-1">jconsole <a class="header-anchor" href="#jconsole" aria-label="Permalink to &quot;jconsole&quot;">​</a></h2><h2 id="jps" tabindex="-1">jps <a class="header-anchor" href="#jps" aria-label="Permalink to &quot;jps&quot;">​</a></h2><blockquote><p>查看系统中运行的 java 程序</p></blockquote><p><strong>参数</strong></p><blockquote><p>-q：只输出进程 ID</p><p>-m：输出传入 main 方法的参数</p><p>-l：输出完全的包名，应用主类名，jar的完全路径名</p><p>-v：输出jvm参数</p><p>-V：输出通过flag文件传递到JVM中的参数</p></blockquote><p><strong>用例</strong></p><ol><li><p>无参数：jps</p><p>显示进程的ID 和 类的名称</p></li><li><p>jps -mlvV</p><p>显示进程ID 完全的包名，应用主类名，jar的完全路径名 jvm参数 通过flag文件传递到JVM中的参数</p></li></ol><p><strong>原理</strong></p><blockquote><p>java程序在启动以后，会在java.io.tmpdir指定的目录下，就是临时文件夹里，生成一个类似于hsperfdata_User的文件夹，这个文件夹里（在Linux中为/tmp/hsperfdata_{userName}/），有几个文件，名字就是java进程的pid，因此列出当前运行的java进程，只是把这个目录里的文件名列一下而已。 至于系统的参数什么，就可以解析这几个文件获得。</p></blockquote><h2 id="jmap" tabindex="-1">Jmap <a class="header-anchor" href="#jmap" aria-label="Permalink to &quot;Jmap&quot;">​</a></h2><p>参数</p><ul><li>option： 选项参数。</li><li>pid： 需要打印配置信息的进程ID。</li><li>executable： 产生核心dump的Java可执行文件。</li><li>core：需要打印配置信息的核心文件。</li><li>server-id 可选的唯一id，如果相同的远程主机上运行了多台调试服务器，用此选项参数标识服务器。</li><li>remote server IP or hostname 远程调试服务器的IP地址或主机名。</li></ul><p>option</p><ul><li>no option： 查看进程的内存映像信息,类似 Solaris pmap 命令。</li><li>heap： 显示Java堆详细信息</li><li>histo[:live]： 显示堆中对象的统计信息</li><li>clstats：打印类加载器信息</li><li>finalizerinfo： 显示在F-Queue队列等待Finalizer线程执行finalizer方法的对象</li><li>dump:[dump-options]：生成堆转储快照</li><li>F：当-dump没有响应时，使用-dump或者-histo参数. 在这个模式下,live子参数无效.</li><li>help：打印帮助信息</li><li>J[flag]：指定传递给运行jmap的JVM的参数</li></ul><p>用例</p><ul><li>不带参数 <ul><li>将会打印目标虚拟机中加载的每个共享对象的起始地址、映射大小以及共享对象文件的路径全称</li></ul></li><li>heap <ul><li>打印一个堆的摘要信息，包括使用的GC算法、堆配置信息和各内存区域内存使用信息</li></ul></li><li>-histo:live <ul><li>其中包括每个Java类、对象数量、内存大小(单位：字节)、完全限定的类名。打印的虚拟机内部的类名称将会带有一个’*’前缀。如果指定了live子选项，则只计算活动的对象。</li><li>num：序号 instances：实例数量 bytes：占用空间大小 class name：类名称</li></ul></li><li>-clstats <ul><li>打印Java堆内存的永久保存区域的类加载器的智能统计信息。对于每个类加载器而言，它的名称、活跃度、地址、父类加载器、它所加载的类的数量和大小都会被打印。此外，包含的字符串数量和大小也会被打印。</li></ul></li><li>-finalizerinfo <ul><li>打印等待终结的对象信息</li><li>Number of objects pending for finalization: 0 说明当前F-QUEUE队列中并没有等待Fializer线程执行final</li></ul></li><li>dump:[dump-options] <ul><li>-dump:format=b,file=heapdump.phrof</li><li>以hprof二进制格式转储Java堆到指定filename的文件中。live子选项是可选的。如果指定了live子选项，堆中只有活动的对象会被转储。</li><li>可以用<strong>jvisualvm</strong>命令工具导入该dump文件分析</li></ul></li></ul><h3 id="细节" tabindex="-1">细节 <a class="header-anchor" href="#细节" aria-label="Permalink to &quot;细节&quot;">​</a></h3><ul><li><p>Metadata does not appear to be polymorphic</p><ul><li><p>使用启动的用户进行执行</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>sudo -u 用户名</span></span></code></pre></div></li></ul></li><li><p>也可以设置内存溢出自动导出dump文件(内存很大的时候，可能会导不出来)</p><ul><li>-XX:+HeapDumpOnOutOfMemoryError</li></ul><ol start="2"><li>-XX:HeapDumpPath=./ （路径）</li></ol></li></ul><h2 id="jstack" tabindex="-1">Jstack <a class="header-anchor" href="#jstack" aria-label="Permalink to &quot;Jstack&quot;">​</a></h2><p>&quot;Thread-1&quot; 线程名 prio=5 优先级=5 tid=0x000000001fa9e000 线程id nid=0x2d64 线程对应的本地线程标识nid runnable 线程状态</p><p><strong>参数说明</strong></p><ul><li>-l 长列表. 打印关于锁的附加信息,例如属于java.util.concurrent 的 ownable synchronizers列表.</li><li>-F 当’jstack [-l] pid’没有相应的时候强制打印栈信息</li><li>-m 打印java和native c/c++框架的所有栈信息.</li><li>-h -help 打印帮助信息</li></ul><p>线程状态</p><ul><li><p><strong>NEW</strong>,未启动的。不会出现在Dump中。</p></li><li><p><strong>RUNNABLE</strong>,在虚拟机内执行的。运行中状态，可能里面还能看到locked字样，表明它获得了某把锁。</p></li><li><p><strong>BLOCKED</strong>,受阻塞并等待监视器锁。被某个锁(synchronizers)給block住了。</p></li><li><p><strong>WATING</strong>,无限期等待另一个线程执行特定操作。等待某个condition或monitor发生，一般停留在park(), wait(), sleep(),join() 等语句里。</p></li><li><p><strong>TIMED_WATING</strong>,有时限的等待另一个线程的特定操作。和WAITING的区别是wait() 等语句加上了时间限制 wait(timeout)。</p></li><li><p><strong>TERMINATED</strong>,已退出的。</p></li></ul><p><strong>调用修饰</strong></p><ul><li><p>locked &lt;地址&gt; 目标：使用synchronized申请对象锁成功,监视器的拥有者。</p></li><li><p>waiting to lock &lt;地址&gt; 目标：使用synchronized申请对象锁未成功,在迚入区等待。</p></li><li><p>waiting on &lt;地址&gt; 目标：使用synchronized申请对象锁成功后,释放锁幵在等待区等待。</p></li><li><p>parking to wait for &lt;地址&gt; 目标</p></li></ul><p><strong>线程动作</strong></p><ul><li><p>runnable:状态一般为RUNNABLE。</p></li><li><p>in Object.wait():等待区等待,状态为WAITING或TIMED_WAITING。</p></li><li><p>waiting for monitor entry:进入区等待,状态为BLOCKED。</p></li><li><p>waiting on condition:等待区等待、被park。</p></li><li><p>sleeping:休眠的线程,调用了Thread.sleep()。</p></li></ul><h3 id="jstack找出占用cpu最高的堆栈信息" tabindex="-1">jstack找出占用cpu最高的堆栈信息 <a class="header-anchor" href="#jstack找出占用cpu最高的堆栈信息" aria-label="Permalink to &quot;jstack找出占用cpu最高的堆栈信息&quot;">​</a></h3><blockquote><p>使用top找到CPU占用最高的</p><p>使用命令top -Hp ，显示你的java进程的内存情况，pid是你的java进程号，比如4977</p><p>找到内存和cpu占用最高的线程tid，比如4977</p><p>转为十六进制得到 0x1371 ,此为线程id的十六进制表示 linux中可用<code>printf &quot;%x\\n&quot; tid</code></p><p>执行 jstack 4977|grep -A 10 1371，得到线程堆栈信息中1371这个线程所在行的后面10行</p><p>查看对应的堆栈信息找出可能存在问题的代码</p></blockquote><h2 id="jinfo" tabindex="-1">Jinfo <a class="header-anchor" href="#jinfo" aria-label="Permalink to &quot;Jinfo&quot;">​</a></h2><h4 id="参数说明" tabindex="-1">参数说明 <a class="header-anchor" href="#参数说明" aria-label="Permalink to &quot;参数说明&quot;">​</a></h4><ul><li>pid 对应jvm的进程id</li><li>executable core 产生core dump文件</li><li>[server-id@]remote server IP or hostname 远程的ip或者hostname，server-id标记服务的唯一性id</li></ul><h4 id="option" tabindex="-1">option <a class="header-anchor" href="#option" aria-label="Permalink to &quot;option&quot;">​</a></h4><ul><li>no option 输出全部的参数和系统属性</li><li>-flag name 输出对应名称的参数</li><li>-flag [+|-]name 开启或者关闭对应名称的参数</li><li>-flag name=value 设定对应名称的参数</li><li>-flags 输出全部的参数</li><li>-sysprops 输出系统属性</li></ul><h2 id="jstat" tabindex="-1">Jstat <a class="header-anchor" href="#jstat" aria-label="Permalink to &quot;Jstat&quot;">​</a></h2><p>jstat(Java Virtual Machine statistics monitoring tool)——查看堆内各个部分的使用量，以及加载类的数量</p><p>命令格式：<strong>jstat</strong> [generalOption | outputOptions vmid [ interval [ s|ms ] [ count ] ] ] jstat [-命令选项] [vmid] [间隔时间(毫秒)] [查询次数]</p><p>-statOption：</p><blockquote><p>class：关于类加载器行为的统计信息</p><p>compiler：HotSpot即时编译器行为的统计信息</p><p>gc：垃圾回收堆行为的统计信息</p><p>gacapacity：统计内存三代（young、old、permanent）及他们空间信息</p><p>gccause：垃圾收集统计（与-gcutil相同）的摘要，以及最后一个和当前（如果适用）垃圾回收事件的cause</p><p>gcnew：新生代的统计信息</p><p>gcnewcapacity：新生代及其空间使用情况</p><p>gcold：老年代和永久代的统计信息</p><p>gcoldcapacity：老年代容量的使用情况</p><p>gcpermcapacity：永久代容量的使用情况</p><p>gcutil：垃圾回收统计</p><p>printcompilation：hotSpot编译器方法统计</p></blockquote><p>-h n：设置隔n行显示header</p><p>-t：第一列显示一个时间戳，当前时间与jvm启动时间的时间间隔</p><h3 id="class-类加载统计" tabindex="-1">class：类加载统计 <a class="header-anchor" href="#class-类加载统计" aria-label="Permalink to &quot;class：类加载统计&quot;">​</a></h3><blockquote><p>jstat -class pid</p><p>Loaded:加载class的数量</p><p>Bytes：所占用空间大小</p><p>Unloaded：未加载数量</p><p>Bytes:未加载占用空间</p><p>Time：花费在执行类加载和未加载操作上的时间</p></blockquote><h3 id="compiler-hotspot即时编译器行为的统计信息" tabindex="-1">compiler：HotSpot即时编译器行为的统计信息 <a class="header-anchor" href="#compiler-hotspot即时编译器行为的统计信息" aria-label="Permalink to &quot;compiler：HotSpot即时编译器行为的统计信息&quot;">​</a></h3><blockquote><p>jstat -compiler pid</p><p>​</p><p>Compiled：编译数量</p><p>Failed：失败数量</p><p>Invalid：不可用数量</p><p>Time：编译花费的时间</p><p>FailedType：最近一次编译失败的编译类型</p><p>FailedMethod：最近一次编译失败的类名和方法名</p></blockquote><h3 id="gc-垃圾回收堆行为的统计信息" tabindex="-1">gc：垃圾回收堆行为的统计信息 <a class="header-anchor" href="#gc-垃圾回收堆行为的统计信息" aria-label="Permalink to &quot;gc：垃圾回收堆行为的统计信息&quot;">​</a></h3><blockquote><p>jstat -gc pid</p></blockquote><blockquote><p>S0C：survivor 0的容量（KB）</p><p>S1C：survivor 1的容量（KB）</p><p>S0U：survivor 0已使用情况（KB）</p><p>S1U：survivor 1已使用情况（KB）</p><p>EC：Eden的空间容量（KB）</p><p>EU：Eden已使用情况（KB）</p><p>OC：老年代空间容量（KB）</p><p>OU：老年代已使用大小（KB）</p><p>MC：方法区空间容量（KB）</p><p>MU：方法区使用大小（KB）</p><p>CCSC：压缩类空间大小</p><p>CCSU：压缩类空间使用大小</p><p>YGC：新生代垃圾回收次数</p><p>YGCT：新生代垃圾回收消耗时间</p><p>FGC：full gc发生次数</p><p>FGCT：full gc消耗时间</p><p>GCT：垃圾回收消耗总时间</p></blockquote><h3 id="gacapacity-统计内存三代-young、old、permanent-及他们空间使用信息" tabindex="-1">gacapacity：统计内存三代（young、old、permanent）及他们空间使用信息 <a class="header-anchor" href="#gacapacity-统计内存三代-young、old、permanent-及他们空间使用信息" aria-label="Permalink to &quot;gacapacity：统计内存三代（young、old、permanent）及他们空间使用信息&quot;">​</a></h3><blockquote><p>jstat -gccapacity pid</p></blockquote><blockquote><p>NGCMN：新生代最小容量</p><p>NGCMX：新生代最大容量</p><p>NGC：当前新生代容量</p><p>S0C：survivor 0的容量</p><p>S1C：survivor 1的容量</p><p>EC：Eden的空间容量</p><p>OGCMN：老年代最小容量</p><p>OGCMX：老年代最大容量</p><p>OGC：当前老年代容量</p><p>OC: 当前老年代空间大小</p><p>MCMN: 永久代最小容量</p><p>MCMX：永久代最大容量</p><p>MC：当前元数据空间大小</p><p>CCSMN：最小压缩类空间大小</p><p>CCSMX：最大压缩类空间大小</p><p>CCSC：当前压缩类空间大小</p><p>YGC：年轻代gc次数</p><p>FGC：老年代GC次数</p></blockquote><h3 id="gcutil-垃圾回收统计" tabindex="-1">gcutil：垃圾回收统计 <a class="header-anchor" href="#gcutil-垃圾回收统计" aria-label="Permalink to &quot;gcutil：垃圾回收统计&quot;">​</a></h3><blockquote><p>jstat -gcutil pid 500 10</p></blockquote><blockquote><p>S0：survivor 0当前使用比例</p><p>S1：survivor 1当前使用比例</p><p>E：永久代使用比例</p><p>O：老年代使用比例</p><p>M：元数据区使用比例</p><p>CCS：压缩使用比例</p><p>YGC：新生代垃圾回收次数</p><p>FGC：老年代垃圾回收次数</p><p>FGCT：老年代垃圾回收消耗时间</p><p>GCT：垃圾回收消耗总时间</p></blockquote><h3 id="gccause-垃圾收集统计-与-gcutil相同-的摘要-以及上次和当前-如果适用-垃圾回收事件的cause" tabindex="-1">gccause：垃圾收集统计（与-gcutil相同）的摘要，以及上次和当前（如果适用）垃圾回收事件的cause <a class="header-anchor" href="#gccause-垃圾收集统计-与-gcutil相同-的摘要-以及上次和当前-如果适用-垃圾回收事件的cause" aria-label="Permalink to &quot;gccause：垃圾收集统计（与-gcutil相同）的摘要，以及上次和当前（如果适用）垃圾回收事件的cause&quot;">​</a></h3><blockquote><p>jstat -gccause pid 500 10</p></blockquote><blockquote><p>LGCC：上次垃圾回收的cause</p><p>GCC：当前垃圾回收的cause</p></blockquote><h3 id="gcnew-新生代统计" tabindex="-1">gcnew：新生代统计 <a class="header-anchor" href="#gcnew-新生代统计" aria-label="Permalink to &quot;gcnew：新生代统计&quot;">​</a></h3><blockquote><p>jstat -gcnew pid 500 10</p></blockquote><blockquote><p>S0C：survivor 0的容量大小</p><p>S1C：survivor 1的容量大小</p><p>S0U：survivor 0的使用大小</p><p>S1U：survivor 1的使用大小</p><p>TT: 对象在新生代存活的次数</p><p>MTT: 对象在新生代存活的最大次数</p><p>DSS:期望的survivor大小</p><p>EC：Eden的容量大小</p><p>EU：Eden的使用大小</p><p>YGC：新生代垃圾回收次数</p><p>YGCT：新生代垃圾回收消耗时间</p></blockquote><h3 id="gcnewcapacity-新生代空间大小统计" tabindex="-1">gcnewcapacity：新生代空间大小统计 <a class="header-anchor" href="#gcnewcapacity-新生代空间大小统计" aria-label="Permalink to &quot;gcnewcapacity：新生代空间大小统计&quot;">​</a></h3><blockquote><p>jstat -gcnewcapacity pid 500 10</p></blockquote><blockquote><p>NGCMN：新生代最小容量</p><p>NGCMX：新生代最大容量</p><p>NGC：当前新生代容量</p><p>S0CMX：最大survivor 0大小</p><p>S0C：当前survivor 0大小</p><p>S1CMX：最大survivor 1大小</p><p>S1C：当前survivor 1大小</p><p>ECMX：最大Eden区空间大小</p><p>EC：当前Eden区空间大小</p><p>YGC：新生代垃圾回收次数</p><p>FGC：老年代回收次数</p></blockquote><h3 id="gcold-老年代和永久代的统计信息" tabindex="-1">gcold：老年代和永久代的统计信息 <a class="header-anchor" href="#gcold-老年代和永久代的统计信息" aria-label="Permalink to &quot;gcold：老年代和永久代的统计信息&quot;">​</a></h3><blockquote><p>jstat -gcold pid 500 10</p></blockquote><blockquote><p>MC：方法区大小</p><p>MU：方法区使用大小</p><p>CCSC:压缩类空间大小</p><p>CCSU:压缩类空间使用大小</p><p>OC：老年代大小</p><p>OU：老年代使用大小</p><p>YGC：新生代垃圾回收次数</p><p>FGC：老年代垃圾回收次数</p><p>FGCT：老年代垃圾回收消耗时间</p><p>GCT：垃圾回收消耗总时间</p></blockquote><h3 id="gcoldcapacity-新生代及其空间使用情况" tabindex="-1">gcoldcapacity：新生代及其空间使用情况 <a class="header-anchor" href="#gcoldcapacity-新生代及其空间使用情况" aria-label="Permalink to &quot;gcoldcapacity：新生代及其空间使用情况&quot;">​</a></h3><blockquote><p>jstat -gcoldcapacity pid 500 10</p></blockquote><blockquote><p>OGCMN：老年代最小容量</p><p>OGCMX：老年代最大容量</p><p>OGC：当前老年代大小</p><p>OC：老年代大小</p><p>YGC：新生代垃圾回收次数</p><p>FGC：老年代垃圾回收次数</p><p>FGCT：老年代垃圾回收消耗时间</p><p>GCT：垃圾回收消耗总时间</p></blockquote><h3 id="gcpermcapacity-永久代容量的使用情况" tabindex="-1">gcpermcapacity：永久代容量的使用情况 <a class="header-anchor" href="#gcpermcapacity-永久代容量的使用情况" aria-label="Permalink to &quot;gcpermcapacity：永久代容量的使用情况&quot;">​</a></h3><blockquote><p>PGCMN：perm代中最小容量 (KB)</p><p>PGCMX：perm代的最大容量 (KB)</p><p>PGC：perm代当前新生成的容量 (KB)</p><p>PC：Perm(持久代)的容量 (KB)</p><p>YGC：从应用程序启动到采样时新生代中gc次数</p><p>FGC：从应用程序启动到采样时老年代(全gc)gc次数</p><p>FGCT：从应用程序启动到采样时老年代(全gc)gc所用时间(s)</p><p>GCT：从应用程序启动到采样时gc用的总时间(s)</p></blockquote><h3 id="printcompilation-hotspot编译器方法统计" tabindex="-1">printcompilation：hotSpot编译器方法统计 <a class="header-anchor" href="#printcompilation-hotspot编译器方法统计" aria-label="Permalink to &quot;printcompilation：hotSpot编译器方法统计&quot;">​</a></h3><blockquote><p>jstat -printcompilation pid 500 1</p></blockquote><blockquote><p>Compiled：最近编译方法的数量</p><p>Size：最近编译方法的字节码数量</p><p>Type：最近编译方法的编译类型</p><p>Method：方法名标识</p></blockquote>',109),t=[i];function c(r,n,u,s,d,h){return l(),o("div",null,t)}const q=a(e,[["render",c]]);export{k as __pageData,q as default};