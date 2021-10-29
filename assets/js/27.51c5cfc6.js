(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{413:function(v,_,e){"use strict";e.r(_);var a=e(31),t=Object(a.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h2",{attrs:{id:"对象内存分配"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#对象内存分配"}},[v._v("#")]),v._v(" 对象内存分配")]),v._v(" "),e("p",[e("strong",[v._v("对象内存分配流程图")])]),v._v(" "),e("p",[e("img",{attrs:{src:"/img/%E5%AF%B9%E8%B1%A1%E5%88%86%E9%85%8D%E6%B5%81%E7%A8%8B%E5%9B%BE.png",alt:"对象分配流程图"}})]),v._v(" "),e("h3",{attrs:{id:"逃逸分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#逃逸分析"}},[v._v("#")]),v._v(" 逃逸分析")]),v._v(" "),e("blockquote",[e("p",[v._v("就是分析对象动态作用域，当一个对象在方法中被定义后，它可能被外部方法所引用，例如作为调用参数传递到其他地方中。")])]),v._v(" "),e("p",[e("strong",[v._v("对象栈上分配")])]),v._v(" "),e("p",[v._v("我们通过JVM内存分配可以知道JAVA中的对象都是在堆上进行分配，当对象没有被引用的时候，需要依靠GC进行回收内存，如果对象数量较多的时候，会给GC带来较大压力，也间接影响了应用的性能。为了减少临时对象在堆内分配的数量，JVM通过"),e("strong",[v._v("逃逸分析")]),v._v("确定该对象不会被外部访问。如果不会逃逸可以将该对象在"),e("strong",[v._v("栈上分配")]),v._v("内存，这样该对象所占用的内存空间就可以随栈帧出栈而销毁，就减轻了垃圾回收的压力。")]),v._v(" "),e("p",[v._v("**标量替换：**通过逃逸分析确定该对象不会被外部访问，并且对象可以被进一步分解时，"),e("strong",[v._v("JVM不会创建该对象")]),v._v("，而是将该对象成员变量分解若干个被这个方法使用的成员变量所代替，这些代替的成员变量在栈帧或寄存器上分配空间，这样就不会因为没有一大块连续空间导致对象内存不够分配。开启标量替换参数(-XX:+EliminateAllocations)，"),e("strong",[v._v("JDK7之后默认开启")]),v._v("。")]),v._v(" "),e("p",[v._v("**标量与聚合量：**标量即不可被进一步分解的量，而JAVA的基本数据类型就是标量（如：int，long等基本数据类型以及reference类型等），标量的对立就是可以被进一步分解的量，而这种量称之为聚合量。而在JAVA中对象就是可以被进一步分解的聚合量。")]),v._v(" "),e("h3",{attrs:{id:"对象在eden区分配"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#对象在eden区分配"}},[v._v("#")]),v._v(" 对象在Eden区分配")]),v._v(" "),e("blockquote",[e("p",[v._v("大多数情况下，对象在新生代中 Eden 区分配。当 Eden 区没有足够空间进行分配时，虚拟机将发起一次Minor GC。")])]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("Minor GC/Young GC")]),v._v("：指发生新生代的的垃圾收集动作，Minor GC非常频繁，回收速度一般也比较快。")]),v._v(" "),e("li",[e("strong",[v._v("Major GC/Full GC")]),v._v("：一般会回收老年代 ，年轻代，方法区的垃圾，Major GC的速度一般会比Minor GC的慢10倍以上。")])]),v._v(" "),e("p",[e("strong",[v._v("Eden与Survivor区默认8:1:1")])]),v._v(" "),e("p",[v._v("大量的对象被分配在eden区，eden区满了后会触发minor gc，可能会有99%以上的对象成为垃圾被回收掉，剩余存活的对象会被挪到为空的那块survivor区，下一次eden区满了后又会触发minor gc，把eden区和survivor区垃圾对象回收，把剩余存活的对象一次性挪动到另外一块为空的survivor区，因为新生代的对象都是朝生夕死的，存活时间很短，所以JVM默认的8:1:1的比例是很合适的，"),e("strong",[v._v("让eden区尽量的大，survivor区够用即可，")])]),v._v(" "),e("p",[v._v("JVM默认有这个参数**-XX:+UseAdaptiveSizePolicy(默认开启)**，会导致这个8:1:1比例自动变化，如果不想这个比例有变化可以设置参数-XX:-UseAdaptiveSizePolicy")]),v._v(" "),e("p",[e("strong",[v._v("大对象直接进入老年代")])]),v._v(" "),e("p",[v._v("大对象就是需要大量连续内存空间的对象（比如：字符串、数组）。JVM参数 "),e("strong",[v._v("-XX:PretenureSizeThreshold")]),v._v(" 可以设置大对象的大小，如果对象超过设置大小会直接进入老年代，不会进入年轻代，"),e("strong",[v._v("这个参数只在 Serial 和ParNew两个收集器下有效")]),v._v("。")]),v._v(" "),e("p",[e("strong",[v._v("长期存活的对象将进入老年代")])]),v._v(" "),e("p",[v._v("既然虚拟机采用了分代收集的思想来管理内存，那么内存回收时就必须能识别哪些对象应放在新生代，哪些对象应放在老年代中。为了做到这一点，虚拟机给每个对象一个对象年龄（Age）计数器。")]),v._v(" "),e("p",[v._v("如果对象在 Eden 出生并经过第一次 Minor GC 后仍然能够存活，并且能被 Survivor 容纳的话，将被移动到 Survivor 空间中，并将对象年龄设为1。对象在 Survivor 中每熬过一次 MinorGC，年龄就增加1岁，当它的年龄增加到一定程度（"),e("strong",[v._v("默认为15岁")]),v._v("，CMS收集器默认6岁，不同的垃圾收集器会略微有点不同），就会被晋升到老年代中。对象晋升到老年代的年龄阈值，可以通过参数 "),e("strong",[v._v("-XX:MaxTenuringThreshold")]),v._v(" 来设置。")]),v._v(" "),e("p",[e("strong",[v._v("对象动态年龄判断")])]),v._v(" "),e("p",[v._v("当前放对象的Survivor区域里(其中一块区域，放对象的那块s区)，一批对象的总大小大于这块Survivor区域内存大小的50%(-XX:TargetSurvivorRatio可以指定)，那么此时"),e("strong",[v._v("大于等于")]),v._v("这批对象年龄最大值的对象，就可以直接进入老年代了，例如Survivor区域里现在有一批对象，年龄1+年龄2+年龄n的多个年龄对象总和超过了Survivor区域的50%，此时就会把年龄n(含)以上的对象都放入老年代。这个规则其实是希望那些可能是长期存活的对象，尽早进入老年代。"),e("strong",[v._v("对象动态年龄判断机制一般是在minor gc之后触发的。")])]),v._v(" "),e("p",[e("strong",[v._v("老年代空间分配担保机制")])]),v._v(" "),e("p",[v._v("年轻代每次"),e("strong",[v._v("minor gc")]),v._v("之前JVM都会计算下老年代"),e("strong",[v._v("剩余可用空间")]),v._v("，如果这个可用空间小于年轻代里现有的所有对象大小之和("),e("strong",[v._v("包括垃圾对象")]),v._v(")就会看一个“-XX:-HandlePromotionFailure”(jdk1.8默认就设置了)的参数是否设置了。如果有这个参数，就会看看老年代的可用内存大小，是否大于之前每一次minor gc后进入老年代的对象的"),e("strong",[v._v("平均大小")]),v._v("。")]),v._v(" "),e("p",[v._v('如果上一步结果是小于或者之前说的参数没有设置，那么就会触发一次Full gc，对老年代和年轻代一起回收一次垃圾，如果回收完还是没有足够空间存放新的对象就会发生"OOM"')]),v._v(" "),e("p",[v._v("当然，如果minor gc之后剩余存活的需要挪动到老年代的对象大小还是大于老年代可用空间，那么也会触发full gc，full gc完之后如果还是没有空间放minor gc之后的存活对象，则也会发生“OOM”")]),v._v(" "),e("h3",{attrs:{id:"对象内存回收"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#对象内存回收"}},[v._v("#")]),v._v(" 对象内存回收")]),v._v(" "),e("blockquote",[e("p",[v._v("堆中几乎放着所有的对象实例，对堆垃圾回收前的第一步就是要判断哪些对象已经死亡（即不能再被任何途径使用的对象）。")])]),v._v(" "),e("p",[e("strong",[v._v("引用计数法")])]),v._v(" "),e("p",[v._v("给对象中添加一个引用计数器，每当有一个地方引用它，计数器就加1；当引用失效，计数器就减1；任何时候计数器为0的对象就是不可能再被使用的。")]),v._v(" "),e("p",[e("strong",[v._v("可达性分析算法")])]),v._v(" "),e("p",[v._v("将**“GC Roots”** 对象作为起点，从这些节点开始向下搜索引用的对象，找到的对象都标记为"),e("strong",[v._v("非垃圾对象")]),v._v("，其余未标记的对象都是垃圾对象")]),v._v(" "),e("p",[e("strong",[v._v("GC Roots")]),v._v("根节点：线程栈的本地变量、静态变量、本地方法栈的变量等等")]),v._v(" "),e("h3",{attrs:{id:"常见引用类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常见引用类型"}},[v._v("#")]),v._v(" 常见引用类型")]),v._v(" "),e("blockquote",[e("p",[v._v("java的引用类型一般分为四种："),e("strong",[v._v("强引用")]),v._v("、"),e("strong",[v._v("软引用")]),v._v("、弱引用、虚引用")])]),v._v(" "),e("p",[e("strong",[v._v("强引用")]),v._v("：普通的变量引用")]),v._v(" "),e("p",[e("strong",[v._v("软引用")]),v._v("：将对象用SoftReference软引用类型的对象包裹，正常情况不会被回收，但是GC做完后发现释放不出空间存放新的对象，则会把这些软引用的对象回收掉。"),e("strong",[v._v("软引用可用来实现内存敏感的高速缓存。")])]),v._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("public static SoftReference<User> user = new SoftReference<User>(new User());    \n")])]),v._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[v._v("1")]),e("br")])]),e("p",[e("strong",[v._v("弱引用")]),v._v("：将对象用WeakReference软引用类型的对象包裹，弱引用跟没引用差不多，"),e("strong",[v._v("GC会直接回收掉")]),v._v("，很少用")]),v._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("public static WeakReference<User> user = new WeakReference<User>(new User()); \n")])]),v._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[v._v("1")]),e("br")])]),e("p",[v._v("**虚引用：**虚引用也称为幽灵引用或者幻影引用，它是最弱的一种引用关系，几乎不用")]),v._v(" "),e("h3",{attrs:{id:"finalize"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#finalize"}},[v._v("#")]),v._v(" finalize")]),v._v(" "),e("blockquote",[e("p",[v._v("finalize()方法最终判定对象是否存活")]),v._v(" "),e("p",[v._v("即使在可达性分析算法中不可达的对象，也并非是“非死不可”的，这时候它们暂时处于“缓刑”阶段，要真正宣告一个对象死亡，至少要经历再次标记过程。")])]),v._v(" "),e("p",[e("strong",[v._v("标记的前提是对象在进行可达性分析后发现没有与GC Roots相连接的引用链。")])]),v._v(" "),e("ol",[e("li",[v._v("第一次标记并进行一次筛选。")])]),v._v(" "),e("p",[v._v("筛选的条件是此对象是否有必要执行finalize()方法。")]),v._v(" "),e("p",[v._v("当对象没有覆盖finalize方法，对象将直接被回收。")]),v._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[v._v("第二次标记")])]),v._v(" "),e("p",[v._v("如果这个对象覆盖了finalize方法，finalize方法是对象脱逃死亡命运的最后一次机会，如果对象要在finalize()中成功拯救自己，只要重新与引用链上的任何的一个对象建立关联即可，譬如把自己赋值给某个类变量或对象的成员变量，那在第二次标记时它将移除出“即将回收”的集合。如果对象这时候还没逃脱，那基本上它就真的被回收了。")]),v._v(" "),e("p",[v._v("注意：一个对象的finalize()方法"),e("strong",[v._v("只会被执行一次")]),v._v("，也就是说通过调用finalize方法自我救命的机会就一次。")]),v._v(" "),e("h3",{attrs:{id:"如何判断一个类是无用的类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何判断一个类是无用的类"}},[v._v("#")]),v._v(" 如何判断一个类是无用的类")]),v._v(" "),e("blockquote",[e("p",[v._v("方法区主要回收的是无用的类，那么如何判断一个类是无用的类呢？")])]),v._v(" "),e("p",[v._v("类需要同时满足下面3个条件才能算是 "),e("strong",[v._v("“无用的类”")]),v._v(" ：")]),v._v(" "),e("ul",[e("li",[v._v("该类所有的对象实例都已经被回收，也就是 Java 堆中不存在该类的任何实例。")]),v._v(" "),e("li",[v._v("加载该类的 ClassLoader 已经被回收。")]),v._v(" "),e("li",[v._v("该类对应的 java.lang.Class 对象没有在任何地方被引用，无法在任何地方通过反射访问该类的方法。")])]),v._v(" "),e("h2",{attrs:{id:"垃圾收集算法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#垃圾收集算法"}},[v._v("#")]),v._v(" 垃圾收集算法")]),v._v(" "),e("h3",{attrs:{id:"分代收集理论"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分代收集理论"}},[v._v("#")]),v._v(" 分代收集理论")]),v._v(" "),e("p",[v._v("当前虚拟机的垃圾收集都采用分代收集算法，这种算法没有什么新的思想，只是根据对象存活周期的不同将内存分为几块。一般将java堆分为新生代和老年代，这样我们就可以根据各个年代的特点选择合适的垃圾收集算法。")]),v._v(" "),e("p",[v._v("比如在新生代中，每次收集都会有大量对象(近99%)死去，所以可以选择复制算法，只需要付出少量对象的复制成本就可以完成每次垃圾收集。而老年代的对象存活几率是比较高的，而且没有额外的空间对它进行分配担保，所以我们必须选择“标记-清除”或“标记-整理”算法进行垃圾收集。注意，“标记-清除”或“标记-整理”算法会比复制算法慢10倍以上。")]),v._v(" "),e("h3",{attrs:{id:"标记-复制算法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#标记-复制算法"}},[v._v("#")]),v._v(" 标记-复制算法")]),v._v(" "),e("p",[v._v("为了解决效率问题，“复制”收集算法出现了。它可以将内存分为大小相同的两块，每次使用其中的一块。当这一块的内存使用完后，就将还存活的对象复制到另一块去，然后再把使用的空间一次清理掉。这样就使每次的内存回收都是对内存区间的一半进行回收。")]),v._v(" "),e("h3",{attrs:{id:"标记-清除算法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#标记-清除算法"}},[v._v("#")]),v._v(" "),e("strong",[v._v("标记-清除算法")])]),v._v(" "),e("p",[v._v("算法分为“标记”和“清除”阶段：标记存活的对象， 统一回收所有未被标记的对象(一般选择这种)；也可以反过来，标记出所有需要回收的对象，在标记完成后统一回收所有被标记的对象 。它是最基础的收集算法，比较简单，但是会带来两个明显的问题：")]),v._v(" "),e("ol",[e("li",[e("strong",[v._v("效率问题  (如果需要标记的对象太多，效率不高)")])]),v._v(" "),e("li",[e("strong",[v._v("空间问题（标记清除后会产生大量不连续的碎片）")])])]),v._v(" "),e("h3",{attrs:{id:"标记-整理算法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#标记-整理算法"}},[v._v("#")]),v._v(" 标记-整理算法")]),v._v(" "),e("p",[v._v("根据老年代的特点特出的一种标记算法，标记过程仍然与“标记-清除”算法一样，但后续步骤不是直接对可回收对象回收，而是让所有存活的对象向一端移动，然后直接清理掉端边界以外的内存。")]),v._v(" "),e("h2",{attrs:{id:"垃圾收集器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#垃圾收集器"}},[v._v("#")]),v._v(" 垃圾收集器")]),v._v(" "),e("blockquote",[e("p",[v._v("如果说收集算法是内存回收的方法论，那么垃圾收集器就是内存回收的具体实现。")])]),v._v(" "),e("blockquote",[e("p",[v._v("虽然我们对各个收集器进行比较，但并非为了挑选出一个最好的收集器。因为直到现在为止还没有最好的垃圾收集器出现，更加没有万能的垃圾收集器，"),e("strong",[v._v("我们能做的就是根据具体应用场景选择适合自己的垃圾收集器")]),v._v("。")])]),v._v(" "),e("h3",{attrs:{id:"serial收集器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#serial收集器"}},[v._v("#")]),v._v(" Serial收集器")]),v._v(" "),e("blockquote",[e("p",[v._v("年轻代:"),e("code",[v._v("-XX:+UseSerialGC")]),v._v(" 老年代: "),e("code",[v._v("-XX:+UseSerialOldGC")])])]),v._v(" "),e("p",[v._v("Serial（串行）收集器是最基本、历史最悠久的垃圾收集器了。大家看名字就知道这个收集器是一个单线程收集器了。它的 "),e("strong",[v._v("“单线程”")]),v._v(" 的意义不仅仅意味着它只会使用一条垃圾收集线程去完成垃圾收集工作，更重要的是它在进行垃圾收集工作的时候必须暂停其他所有的工作线程（ "),e("strong",[v._v('"Stop The World"')]),v._v(" ），直到它收集结束。")]),v._v(" "),e("p",[e("strong",[v._v("新生代采用复制算法，老年代采用标记-整理算法。")])]),v._v(" "),e("p",[v._v("但是Serial收集器有没有优于其他垃圾收集器的地方呢？当然有，它"),e("strong",[v._v("简单而高效（与其他收集器的单线程相比）")]),v._v("。Serial收集器由于没有线程交互的开销，自然可以获得很高的单线程收集效率。")]),v._v(" "),e("p",[e("strong",[v._v("Serial Old收集器是Serial收集器的老年代版本")]),v._v("，它同样是一个单线程收集器。它主要有两大用途：一种用途是在JDK1.5以及以前的版本中与Parallel Scavenge收集器搭配使用，"),e("strong",[v._v("另一种用途是作为CMS收集器的后备方案")]),v._v("。")]),v._v(" "),e("h3",{attrs:{id:"parallel-scavenge收集器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parallel-scavenge收集器"}},[v._v("#")]),v._v(" Parallel Scavenge收集器")]),v._v(" "),e("blockquote",[e("p",[e("strong",[v._v("Parallel")]),v._v("收集器其实"),e("strong",[v._v("就是Serial收集器的多线程版本")]),v._v("，除了使用多线程进行垃圾收集外，其余行为（控制参数、收集算法、回收策略等等）和Serial收集器类似。默认的收集线程数跟cpu核数相同，当然也可以用参数(-XX:ParallelGCThreads)指定收集线程数，但是一般不推荐修改。")]),v._v(" "),e("p",[v._v("年轻代:"),e("code",[v._v("-XX:+UseParallelGC")]),v._v(" 老年代: "),e("code",[v._v("-XX:+UseParallelOldGC")])])]),v._v(" "),e("p",[e("strong",[v._v("Parallel Scavenge收集器关注点是吞吐量（高效率的利用CPU）。CMS等垃圾收集器的关注点更多的是用户线程的停顿时间（提高用户体验）。所谓吞吐量就是CPU中用于运行用户代码的时间与CPU总消耗时间的比值。")]),v._v(" Parallel Scavenge收集器提供了很多参数供用户找到最合适的停顿时间或最大吞吐量，如果对于收集器运作不太了解的话，可以选择把内存管理优化交给虚拟机去完成也是一个不错的选择。")]),v._v(" "),e("p",[e("strong",[v._v("新生代采用复制算法，老年代采用标记-整理算法。")])]),v._v(" "),e("p",[e("strong",[v._v("Parallel Old收集器是Parallel Scavenge收集器的老年代版本")]),v._v("。使用多线程和“标记-整理”算法。在注重吞吐量以及CPU资源的场合，都可以优先考虑 Parallel Scavenge收集器和Parallel Old收集器("),e("strong",[v._v("JDK8默认的新生代和老年代收集器")]),v._v(")。")]),v._v(" "),e("h3",{attrs:{id:"parnew收集器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parnew收集器"}},[v._v("#")]),v._v(" ParNew收集器")]),v._v(" "),e("blockquote",[e("p",[v._v("ParNew收集器其实"),e("strong",[v._v("跟Parallel收集器很类似")]),v._v("，区别主要在于它可以和CMS收集器配合使用。")]),v._v(" "),e("p",[e("code",[v._v("-XX:+UseParNewGC")])])]),v._v(" "),e("p",[v._v("它是许多运行在Server模式下的虚拟机的首要选择，除了Serial收集器外，只有它能与CMS收集器配合工作。")]),v._v(" "),e("h3",{attrs:{id:"cms收集器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cms收集器"}},[v._v("#")]),v._v(" CMS收集器")]),v._v(" "),e("blockquote",[e("p",[v._v("CMS（Concurrent Mark Sweep）收集器是一种以获取最短回收停顿时间为目标的收集器。它非常符合在注重用户体验的应用上使用，它是HotSpot虚拟机第一款真正意义上的并发收集器，它第一次实现了让垃圾收集线程与用户线程（基本上）同时工作。")])]),v._v(" "),e("p",[e("img",{attrs:{src:"/img/cms%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8%E6%B5%81%E7%A8%8B%E5%9B%BE.jpeg",alt:"cms垃圾收集器流程图"}})]),v._v(" "),e("h4",{attrs:{id:"工作流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#工作流程"}},[v._v("#")]),v._v(" 工作流程")]),v._v(" "),e("blockquote",[e("p",[v._v("从名字中的"),e("strong",[v._v("Mark Sweep")]),v._v("这两个词可以看出，CMS收集器是一种 "),e("strong",[v._v("“标记-清除”算法")]),v._v("实现的，它的运作过程相比于前面几种垃圾收集器来说更加复杂一些。整个过程分为四个步骤：")])]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("初始标记：")]),v._v(" 暂停所有的其他线程(STW)，并记录下gc roots"),e("strong",[v._v("直接能引用的对象")]),v._v("，"),e("strong",[v._v("速度很快")]),v._v("。")]),v._v(" "),e("li",[e("strong",[v._v("并发标记：")]),v._v(" 并发标记阶段就是从GC Roots的直接关联对象开始遍历整个对象图的过程， 这个过程耗时较长但是不需要停顿用户线程， 可以与垃圾收集线程一起并发运行。因为用户程序继续运行，可能会有导致已经标记过的对象状态发生改变。")]),v._v(" "),e("li",[e("strong",[v._v("重新标记：")]),v._v(" 重新标记阶段就是为了修正并发标记期间因为用户程序继续运行而导致标记产生变动的那一部分对象的标记记录，这个阶段的停顿时间一般会比初始标记阶段的时间稍长，远远比并发标记阶段时间短")]),v._v(" "),e("li",[e("strong",[v._v("并发清理：")]),v._v(" 开启用户线程，同时GC线程开始对未标记的区域做清扫。这个阶段如果有"),e("strong",[v._v("新增对象不做任何处理")])]),v._v(" "),e("li",[e("strong",[v._v("并发重置：")]),v._v(" 重置本次GC过程中的标记数据。")])]),v._v(" "),e("p",[v._v("从它的名字就可以看出它是一款优秀的垃圾收集器，主要优点："),e("strong",[v._v("并发收集、低停顿")]),v._v("。但是它有下面几个明显的缺点：")]),v._v(" "),e("ul",[e("li",[v._v("对CPU资源敏感（会和服务抢资源）；")]),v._v(" "),e("li",[v._v("无法处理"),e("strong",[v._v("浮动垃圾")]),v._v("(在并发标记和并发清理阶段又产生垃圾，这种浮动垃圾只能等到下一次gc再清理了)；")]),v._v(" "),e("li",[v._v("它使用的回收算法-"),e("strong",[v._v("“标记-清除”算法")]),v._v("会导致收集结束时会有"),e("strong",[v._v("大量空间碎片")]),v._v("产生，当然通过参数-XX:+UseCMSCompactAtFullCollection可以让jvm在执行完标记清除后再做整理")]),v._v(" "),e("li",[v._v("执行过程中的不确定性，会存在上一次垃圾回收还没执行完，然后垃圾回收又被触发的情况，"),e("strong",[v._v("特别是在并发标记和并发清理阶段会出现")]),v._v('，一边回收，系统一边运行，也许没回收完就再次触发full gc，也就是"'),e("strong",[v._v("concurrent mode failure")]),v._v('"，'),e("strong",[v._v("此时会进入stop the world，用serial old垃圾收集器来回收")])])]),v._v(" "),e("h4",{attrs:{id:"cms的相关核心参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cms的相关核心参数"}},[v._v("#")]),v._v(" CMS的相关核心参数")]),v._v(" "),e("ol",[e("li",[e("p",[v._v("-XX:+UseConcMarkSweepGC")]),v._v(" "),e("blockquote",[e("p",[v._v("启用cms")])])]),v._v(" "),e("li",[e("p",[v._v("-XX:ConcGCThreads")]),v._v(" "),e("blockquote",[e("p",[v._v("并发的GC线程数")])])]),v._v(" "),e("li",[e("p",[v._v("-XX:+UseCMSCompactAtFullCollection")]),v._v(" "),e("blockquote",[e("p",[v._v("FullGC之后做压缩整理（减少碎片）")])])]),v._v(" "),e("li",[e("p",[v._v("-XX:CMSFullGCsBeforeCompaction")]),v._v(" "),e("blockquote",[e("p",[v._v("多少次FullGC之后压缩一次，默认是0，代表每次FullGC后都会压缩一次")])])]),v._v(" "),e("li",[e("p",[v._v("-XX:CMSInitiatingOccupancyFraction")]),v._v(" "),e("blockquote",[e("p",[v._v("当老年代使用达到该比例时会触发FullGC（默认是92，这是百分比）")])])]),v._v(" "),e("li",[e("p",[v._v("-XX:+UseCMSInitiatingOccupancyOnly")]),v._v(" "),e("blockquote",[e("p",[v._v("只使用设定的回收阈值(-XX:CMSInitiatingOccupancyFraction设定的值)，如果不指定，JVM仅在第一次使用设定值，后续则会自动调整")])])]),v._v(" "),e("li",[e("p",[v._v("-XX:+CMSScavengeBeforeRemark")]),v._v(" "),e("blockquote",[e("p",[v._v("在CMS GC前启动一次minor gc，降低CMS GC标记阶段("),e("strong",[v._v("也会对年轻代一起做标记，如果在minor gc就干掉了很多对垃圾对象，标记阶段就会减少一些标记时间")]),v._v(")时的开销，一般CMS的GC耗时 80%都在标记阶段")])])]),v._v(" "),e("li",[e("p",[v._v("-XX:+CMSParallellnitialMarkEnabled")]),v._v(" "),e("blockquote",[e("p",[v._v("表示在初始标记的时候多线程执行，缩短STW")])])]),v._v(" "),e("li",[e("p",[v._v("-XX:+CMSParallelRemarkEnabled")]),v._v(" "),e("blockquote",[e("p",[v._v("在重新标记的时候多线程执行，缩短STW;")])])])]),v._v(" "),e("h3",{attrs:{id:"g1收集器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#g1收集器"}},[v._v("#")]),v._v(" G1收集器")]),v._v(" "),e("blockquote",[e("p",[v._v("G1 (Garbage-First)是一款面向服务器的垃圾收集器,主要针对配备多颗处理器及大容量内存的机器. 以极高概率满足GC停顿时间要求的同时,还具备高吞吐量性能特征.")])]),v._v(" "),e("h4",{attrs:{id:"region"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#region"}},[v._v("#")]),v._v(" Region")]),v._v(" "),e("blockquote",[e("p",[v._v("G1将Java堆划分为多个大小相等的独立区域（Region），JVM目标是不超过2048个Region(JVM源码里TARGET_REGION_NUMBER 定义)，实际可以超过该值，但是不推荐。")])]),v._v(" "),e("p",[v._v('一般Region大小等于堆大小除以2048，比如堆大小为4096M，则Region大小为2M，当然也可以用参数"'),e("strong",[v._v("-XX:G1HeapRegionSize")]),v._v('"手动指定Region大小，但是推荐默认的计算方式。')]),v._v(" "),e("h4",{attrs:{id:"分代"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分代"}},[v._v("#")]),v._v(" 分代")]),v._v(" "),e("blockquote",[e("p",[v._v("G1保留了年轻代和老年代的概念，但不再是物理隔阂了，它们都是（可以不连续）Region的集合。")])]),v._v(" "),e("p",[v._v("默认年轻代对堆内存的占比是5%，如果堆大小为4096M，那么年轻代占据200MB左右的内存，对应大概是100个Region，可以通过“-XX:G1NewSizePercent”设置新生代初始占比，在系统运行中，JVM会不停的给年轻代增加更多的Region，但是最多新生代的占比不会超过60%，可以通过“-XX:G1MaxNewSizePercent”调整。年轻代中的Eden和Survivor对应的region也跟之前一样，默认8:1:1，假设年轻代现在有1000个region，eden区对应800个，s0对应100个，s1对应100个。\n一个Region可能之前是年轻代，如果Region进行了垃圾回收，之后可能又会变成老年代，也就是说Region的区域功能可能会动态变化。")]),v._v(" "),e("h4",{attrs:{id:"humongous"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#humongous"}},[v._v("#")]),v._v(" Humongous")]),v._v(" "),e("blockquote",[e("p",[v._v("Humongous区专门存放短期巨型对象，不用直接进老年代，可以节约老年代的空间，避免因为老年代空间不够的GC开销。\nFull GC的时候除了收集年轻代和老年代之外，也会将Humongous区一并回收。")])]),v._v(" "),e("p",[v._v("G1垃圾收集器对于对象什么时候会转移到老年代跟之前原则一样，唯一不同的是对大对象的处理，G1有专门分配大对象的Region叫Humongous区，而不是让大对象直接进入老年代的Region中。在G1中，大对象的判定规则就是一个大对象超过了一个Region大小的50%，比如按照上面算的，每个Region是2M，只要一个大对象超过了1M，就会被放入Humongous中，而且一个大对象如果太大，可能会横跨多个Region来存放。")]),v._v(" "),e("h4",{attrs:{id:"执行流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#执行流程"}},[v._v("#")]),v._v(" 执行流程")]),v._v(" "),e("p",[v._v("G1收集器一次GC(主要值Mixed GC)的运作过程大致分为以下几个步骤：")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("初始标记（initial mark，STW）")]),v._v(" "),e("blockquote",[e("p",[v._v("暂停所有的其他线程，并记录下gc roots直接能引用的对象，速度很快")])])]),v._v(" "),e("li",[e("p",[v._v("并发标记（Concurrent Marking)")]),v._v(" "),e("blockquote",[e("p",[v._v("同CMS的并发标记一样")])])]),v._v(" "),e("li",[e("p",[v._v("最终标记（Remark，STW)")]),v._v(" "),e("blockquote",[e("p",[v._v("同CMS的重新标记")])])]),v._v(" "),e("li",[e("p",[v._v("筛选回收（Cleanup，STW）")]),v._v(" "),e("blockquote",[e("p",[v._v("筛选回收阶段首先对各个Region的回收价值和成本进行排序，根据用户所期望的GC停顿STW时间(可以用JVM参数 -XX:MaxGCPauseMillis指定)来制定回收计划，比如说老年代此时有1000个Region都满了，但是因为根据预期停顿时间，本次垃圾回收可能只能停顿200毫秒，那么通过之前回收成本计算得知，可能回收其中800个Region刚好需要200ms，那么就只会回收800个Region(Collection Set，要回收的集合)，尽量把GC导致的停顿时间控制在我们指定的范围内。这个阶段其实也可以做到与用户程序一起并发执行，但是因为只回收一部分Region，时间是用户可控制的，而且停顿用户线程将大幅提高收集效率。不管是年轻代或是老年代，回收算法主要用的是复制算法，将一个region中的存活对象复制到另一个region中，这种不会像CMS那样回收完因为有很多内存碎片还需要整理一次，G1采用复制算法回收几乎不会有太多内存碎片。(注意：CMS回收阶段是跟用户线程一起并发执行的，G1因为内部实现太复杂暂时没实现并发回收，不过到了ZGC，Shenandoah就实现了并发收集，Shenandoah可以看成是G1的升级版本)")])])])]),v._v(" "),e("p",[v._v("G1收集器在后台维护了一个优先列表，每次根据允许的收集时间，优先选择回收价值最大的Region(这也就是它的名字Garbage-First的由来)，比如一个Region花200ms能回收10M垃圾，另外一个Region花50ms能回收20M垃圾，在回收时间有限情况下，G1当然会优先选择后面这个Region回收。这种使用Region划分内存空间以及有优先级的区域回收方式，保证了G1收集器在有限时间内可以尽可能高的收集效率。")]),v._v(" "),e("h4",{attrs:{id:"特点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[v._v("#")]),v._v(" 特点")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("并行与并发")]),v._v(" "),e("blockquote",[e("p",[v._v("G1能充分利用CPU、多核环境下的硬件优势，使用多个CPU（CPU或者CPU核心）来缩短Stop-The-World停顿时间。部分其他收集器原本需要停顿Java线程来执行GC动作，G1收集器仍然可以通过并发的方式让java程序继续执行。")])])]),v._v(" "),e("li",[e("p",[v._v("分代收集")]),v._v(" "),e("blockquote",[e("p",[v._v("虽然G1可以不需要其他收集器配合就能独立管理整个GC堆，但是还是保留了分代的概念。")])])]),v._v(" "),e("li",[e("p",[v._v("空间整合")]),v._v(" "),e("blockquote",[e("p",[v._v("与CMS的“标记--清理”算法不同，G1从整体来看是基于“标记整理”算法实现的收集器；从局部上来看是基于“复制”算法实现的。")])])]),v._v(" "),e("li",[e("p",[v._v("可预测的停顿")]),v._v(" "),e("blockquote",[e("p",[v._v('这是G1相对于CMS的另一个大优势，降低停顿时间是G1 和 CMS 共同的关注点，但G1 除了追求低停顿外，还能建立可预测的停顿时间模型，能让使用者明确指定在一个长度为M毫秒的时间片段(通过参数"-XX:MaxGCPauseMillis"指定)内完成垃圾收集。')])])])]),v._v(" "),e("p",[v._v("毫无疑问， 可以由用户指定期望的停顿时间是G1收集器很强大的一个功能， 设置不同的期望停顿时间， 可使得G1在不同应用场景中取得关注吞吐量和关注延迟之间的最佳平衡。 不过， 这里设置的“期望值”必须是符合实际的， 不能异想天开， 毕竟G1是要冻结用户线程来复制对象的， 这个停顿时间再怎么低也得有个限度。 它默认的停顿目标为两百毫秒， 一般来说， 回收阶段占到几十到一百甚至接近两百毫秒都很正常， 但如果我们把停顿时间调得非常低， 譬如设置为二十毫秒， 很可能出现的结果就是由于停顿目标时间太短， 导致每次选出来的回收集只占堆内存很小的一部分， 收集器收集的速度逐渐跟不上分配器分配的速度， 导致垃圾慢慢堆积。 很可能一开始收集器还能从空闲的堆内存中获得一些喘息的时间， 但应用运行时间一长就不行了， 最终占满堆引发Full GC反而降低性能， 所以通常把期望停顿时间设置为一两百毫秒或者两三百毫秒会是比较合理的。")]),v._v(" "),e("h4",{attrs:{id:"g1垃圾收集分类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#g1垃圾收集分类"}},[v._v("#")]),v._v(" G1垃圾收集分类")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("YoungGC")]),v._v(" "),e("blockquote",[e("p",[v._v("YoungGC并不是说现有的Eden区放满了就会马上触发，G1会计算下现在Eden区回收大概要多久时间，如果回收时间远远小于参数 -XX:MaxGCPauseMills 设定的值，那么增加年轻代的region，继续给新对象存放，不会马上做Young GC，直到下一次Eden区放满，G1计算回收时间接近参数 -XX:MaxGCPauseMills 设定的值，那么就会触发Young GC")])])]),v._v(" "),e("li",[e("p",[v._v("MixedGC")]),v._v(" "),e("blockquote",[e("p",[v._v("不是FullGC，老年代的堆占有率达到参数(-XX:InitiatingHeapOccupancyPercent)设定的值则触发，回收所有的Young和部分Old(根据期望的GC停顿时间确定old区垃圾收集的优先顺序)以及大对象区，正常情况G1的垃圾收集是先做MixedGC，主要使用复制算法，需要把各个region中存活的对象拷贝到别的region里去，拷贝过程中如果发现没有足够的空region能够承载拷贝对象就会触发一次Full GC")])])]),v._v(" "),e("li",[e("p",[v._v("Full GC")]),v._v(" "),e("blockquote",[e("p",[v._v("停止系统程序，然后采用单线程进行标记、清理和压缩整理，好空闲出来一批Region来供下一次MixedGC使用，这个过程是非常耗时的。(Shenandoah优化成多线程收集了)")])])])]),v._v(" "),e("h4",{attrs:{id:"g1收集器参数设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#g1收集器参数设置"}},[v._v("#")]),v._v(" G1收集器参数设置")]),v._v(" "),e("ol",[e("li",[v._v("-XX:+UseG1GC")])]),v._v(" "),e("blockquote",[e("p",[v._v("JDK9 之前手动启用 G1")])]),v._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[v._v("-XX:ParallelGCThreads")])]),v._v(" "),e("blockquote",[e("p",[v._v("指定GC工作的线程数量")])]),v._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[v._v("-XX:G1HeapRegionSize")])]),v._v(" "),e("blockquote",[e("p",[v._v("指定分区大小(1MB~32MB，且必须是2的N次幂)，默认将整堆划分为2048个分区")])]),v._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[v._v("-XX:MaxGCPauseMillis")])]),v._v(" "),e("blockquote",[e("p",[v._v("预期的最大 GC 停顿时间；不宜过小，避免每次回收内存少而导致频繁 GC(默认200ms)")])]),v._v(" "),e("ol",{attrs:{start:"5"}},[e("li",[v._v("-XX:G1NewSizePercent")])]),v._v(" "),e("blockquote",[e("p",[v._v("新生代内存初始空间(默认整堆5%，值配置整数，默认就是百分比)")])]),v._v(" "),e("ol",{attrs:{start:"6"}},[e("li",[v._v("-XX:G1MaxNewSizePercent")])]),v._v(" "),e("blockquote",[e("p",[v._v("新生代内存最大空间")])]),v._v(" "),e("ol",{attrs:{start:"7"}},[e("li",[v._v("-XX:TargetSurvivorRatio")])]),v._v(" "),e("blockquote",[e("p",[v._v("Survivor区的填充容量(默认50%)，Survivor区域里的一批对象(年龄1+年龄2+年龄n的多个年龄对象)总和超过了Survivor区域的50%，此时就会把年龄n(含)以上的对象都放入老年代")])]),v._v(" "),e("ol",{attrs:{start:"8"}},[e("li",[v._v("-XX:MaxTenuringThreshold")])]),v._v(" "),e("blockquote",[e("p",[v._v("最大年龄阈值(默认15)")])]),v._v(" "),e("ol",{attrs:{start:"9"}},[e("li",[v._v("-XX:InitiatingHeapOccupancyPercent")])]),v._v(" "),e("blockquote",[e("p",[v._v("老年代占用空间达到整堆内存阈值(默认45%)，则执行新生代和老年代的混合收集(MixedGC)，比如我们之前说的堆默认有2048个region，如果有接近1000个region都是老年代的region，则可能就要触发MixedGC了")])]),v._v(" "),e("ol",{attrs:{start:"10"}},[e("li",[v._v("-XX:G1MixedGCLiveThresholdPercent(默认85%)")])]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[v._v("> region中的存活对象低于这个值时才会回收该region，如果超过这个值，存活对象过多，回收的的意义不大。\n")])])]),e("ol",{attrs:{start:"11"}},[e("li",[v._v("-XX:G1MixedGCCountTarget")])]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[v._v("> 一次回收过程中指定做几次筛选回收(默认8次)，在最后一个筛选回收阶段可以回收一会，然后暂停回收，恢复系统运行，一会再开始回收，这样可以让系统不至于单次停顿时间过长。 \n")])])]),e("ol",{attrs:{start:"12"}},[e("li",[v._v("-XX:G1HeapWastePercent(默认5%)")])]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[v._v("> gc过程中空出来的region是否充足阈值，在混合回收的时候，对Region回收都是基于复制算法进行的，都是把要回收的Region里的存活对象放入其他Region，然后这个Region中的垃圾对象全部清理掉，这样的话在回收过程就会不断空出来新的Region，一旦空闲出来的Region数量达到了堆内存的5%，此时就会立即停止混合回收，意味着本次混合回收就结束了。\n")])])]),e("h4",{attrs:{id:"g1垃圾收集器优化建议"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#g1垃圾收集器优化建议"}},[v._v("#")]),v._v(" G1垃圾收集器优化建议")]),v._v(" "),e("p",[v._v("假设参数 -XX:MaxGCPauseMills 设置的值很大，导致系统运行很久，年轻代可能都占用了堆内存的60%了，此时才触发年轻代gc。\n那么存活下来的对象可能就会很多，此时就会导致Survivor区域放不下那么多的对象，就会进入老年代中。\n或者是你年轻代gc过后，存活下来的对象过多，导致进入Survivor区域后触发了动态年龄判定规则，达到了Survivor区域的50%，也会快速导致一些对象进入老年代中。\n所以这里核心还是在于调节 -XX:MaxGCPauseMills 这个参数的值，在保证他的年轻代gc别太频繁的同时，还得考虑每次gc过后的存活对象有多少,避免存活对象太多快速进入老年代，频繁触发mixed gc.")]),v._v(" "),e("h4",{attrs:{id:"什么场景适合使用g1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么场景适合使用g1"}},[v._v("#")]),v._v(" 什么场景适合使用G1")]),v._v(" "),e("ol",[e("li",[v._v("50%以上的堆被存活对象占用")]),v._v(" "),e("li",[v._v("对象分配和晋升的速度变化非常大")]),v._v(" "),e("li",[v._v("垃圾回收时间特别长，超过1秒")]),v._v(" "),e("li",[v._v("8GB以上的堆内存(建议值)")]),v._v(" "),e("li",[v._v("停顿时间是500ms以内")])]),v._v(" "),e("h2",{attrs:{id:"其他"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[v._v("#")]),v._v(" 其他")]),v._v(" "),e("h3",{attrs:{id:"如何选择垃圾收集器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何选择垃圾收集器"}},[v._v("#")]),v._v(" 如何选择垃圾收集器")]),v._v(" "),e("ol",[e("li",[v._v("优先调整堆的大小让服务器自己来选择")]),v._v(" "),e("li",[v._v("如果内存小于100M，使用串行收集器")]),v._v(" "),e("li",[v._v("如果是单核，并且没有停顿时间的要求，串行或JVM自己选择")]),v._v(" "),e("li",[v._v("如果允许停顿时间超过1秒，选择并行或者JVM自己选")]),v._v(" "),e("li",[v._v("如果响应时间最重要，并且不能超过1秒，使用并发收集器")]),v._v(" "),e("li",[e("strong",[v._v("4G以下可以用parallel，4-8G可以用ParNew+CMS，8G以上可以用G1，几百G以上用ZGC")])])]),v._v(" "),e("p",[e("strong",[v._v("JDK 1.8默认使用 Parallel(年轻代和老年代都是)")])]),v._v(" "),e("p",[e("strong",[v._v("JDK 1.9+默认使用 G1")])]),v._v(" "),e("h3",{attrs:{id:"安全点与安全区域"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安全点与安全区域"}},[v._v("#")]),v._v(" 安全点与安全区域")]),v._v(" "),e("blockquote",[e("p",[e("strong",[v._v("安全点")]),v._v("就是指代码中一些特定的位置,当线程运行到这些位置时它的状态是确定的,这样JVM就可以安全的进行一些操作,比如GC等，所以GC不是想什么时候做就立即触发的，是需要等待所有线程运行到安全点后才能触发。")])]),v._v(" "),e("p",[v._v("这些特定的安全点位置主要有以下几种:")]),v._v(" "),e("ol",[e("li",[v._v("方法返回之前")]),v._v(" "),e("li",[v._v("调用某个方法之后")]),v._v(" "),e("li",[v._v("抛出异常的位置")]),v._v(" "),e("li",[v._v("循环的末尾")])]),v._v(" "),e("p",[v._v("大体实现思想是当垃圾收集需要中断线程的时候， 不直接对线程操作， 仅仅简单地设置一个标志位， 各个线程执行过程时会不停地主动去轮询这个标志， 一旦发现中断标志为真时就自己在最近的安全点上主动中断挂起。 轮询标志的地方和安全点是重合的。")]),v._v(" "),e("p",[e("strong",[v._v("安全区域又是什么？")])]),v._v(" "),e("p",[v._v("Safe Point 是对正在执行的线程设定的。")]),v._v(" "),e("p",[v._v("如果一个线程处于 Sleep 或中断状态，它就不能响应 JVM 的中断请求，再运行到 Safe Point 上。")]),v._v(" "),e("p",[v._v("因此 JVM 引入了 Safe Region。")]),v._v(" "),e("p",[v._v("Safe Region 是指在一段代码片段中，"),e("strong",[v._v("引用关系不会发生变化")]),v._v("。在这个区域内的任意地方开始 GC 都是安全的。")])])}),[],!1,null,null,null);_.default=t.exports}}]);