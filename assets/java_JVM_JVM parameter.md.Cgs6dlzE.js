import{_ as t,c as a,o as s,a7 as e}from"./chunks/framework.D38zyZX2.js";const u=JSON.parse('{"title":"JVM参数","description":"","frontmatter":{"title":"JVM参数"},"headers":[],"relativePath":"java/JVM/JVM parameter.md","filePath":"java/JVM/JVM parameter.md","lastUpdated":1716896352000}'),n={name:"java/JVM/JVM parameter.md"},d=e(`<h3 id="基本参数" tabindex="-1">基本参数 <a class="header-anchor" href="#基本参数" aria-label="Permalink to &quot;基本参数&quot;">​</a></h3><table tabindex="0"><thead><tr><th><strong>参数名称</strong></th><th><strong>含义</strong></th><th><strong>默认值</strong></th><th></th></tr></thead><tbody><tr><td>-Xms</td><td>初始堆大小</td><td>内存的1/64</td><td>默认(MinHeapFreeRatio参数可以调整)空余堆内存小于40%时，JVM就会增大堆直到-Xmx的最大限制.</td></tr><tr><td>-Xmx</td><td>最大堆大小</td><td>内存的1/4</td><td>默认(MaxHeapFreeRatio参数可以调整)空余堆内存大于70%时，JVM会减少堆直到 -Xms的最小限制</td></tr><tr><td>-Xmn</td><td>年轻代大小</td><td></td><td><strong>注意</strong>：此处的大小是（eden+ 2 survivor space).与jmap -heap中显示的New gen是不同的。 整个堆大小=年轻代大小 + 年老代大小 + 持久代大小. 增大年轻代后,将会减小年老代大小.此值对系统性能影响较大,Sun官方推荐配置为整个堆的3/8</td></tr><tr><td>-XX:MetaspaceSize</td><td>元空间大小</td><td></td><td>Jdk8版本</td></tr><tr><td>-XX:MaxMetaspaceSize</td><td>最大元空间</td><td></td><td>Jdk8版本</td></tr><tr><td>-Xss</td><td>每个线程的堆栈大小</td><td></td><td>JDK5.0以后每个线程堆栈大小为1M,以前每个线程堆栈大小为256K.</td></tr><tr><td>-XX:NewRatio</td><td>年轻代(包括Eden和两个Survivor区)与年老代的比值(除去持久代)</td><td></td><td>-XX:NewRatio=4表示年轻代与年老代所占比值为1:4,年轻代占整个堆栈的1/5 Xms=Xmx并且设置了Xmn的情况下，该参数不需要进行设置。</td></tr><tr><td>-XX:SurvivorRatio</td><td>Eden区与Survivor区的大小比值</td><td></td><td>设置为8,则两个Survivor区与一个Eden区的比值为2:8,一个Survivor区占整个年轻代的1/10</td></tr><tr><td>-XX:LargePageSizeInBytes</td><td>内存页的大小不可设置过大， 会影响Perm的大小</td><td></td><td></td></tr><tr><td>-XX:+UseFastAccessorMethods</td><td>原始类型的快速优化</td><td></td><td></td></tr><tr><td>-XX:+DisableExplicitGC</td><td>关闭System.gc()</td><td></td><td>这个参数需要严格的测试</td></tr><tr><td>-XX:MaxTenuringThreshold</td><td>垃圾最大年龄</td><td></td><td>如果设置为0的话,则年轻代对象不经过Survivor区,直接进入年老代. 对于年老代比较多的应用,可以提高效率</td></tr><tr><td>-XX:+UseBiasedLocking</td><td>锁机制的性能改善</td><td></td><td></td></tr><tr><td>-XX:TLABWasteTargetPercent</td><td>TLAB占eden区的百分比</td><td>1%</td><td></td></tr><tr><td>-XX:+HeapDumpOnOutOfMemeryError</td><td>在java启动时加入，当出现内存溢出时，存储内存快照</td><td></td><td></td></tr></tbody></table><p><strong>Jdk8版本的重要特有参数</strong></p><table tabindex="0"><thead><tr><th><strong>参数名称</strong></th><th><strong>含义</strong></th><th><strong>默认值</strong></th><th></th></tr></thead><tbody><tr><td>-XX:MetaspaceSize</td><td>元空间大小</td><td></td><td>Jdk8版本</td></tr><tr><td>-XX:MaxMetaspaceSize</td><td>最大元空间</td><td></td><td>Jdk8版本</td></tr></tbody></table><h3 id="jvm日志" tabindex="-1">JVM日志 <a class="header-anchor" href="#jvm日志" aria-label="Permalink to &quot;JVM日志&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 打印GC的详细信息</span></span>
<span class="line"><span>-XX:+PrintGCDetails</span></span>
<span class="line"><span>// 打印GC的时间戳</span></span>
<span class="line"><span>-XX:+PrintGCDateStamps</span></span>
<span class="line"><span>// 在GC前后打印堆信息</span></span>
<span class="line"><span>-XX:+PrintHeapAtGC</span></span>
<span class="line"><span>// 打印Survivor区中各个年龄段的对象的分布信息</span></span>
<span class="line"><span>-XX:+PrintTenuringDistribution</span></span>
<span class="line"><span>// JVM启动时输出所有参数值，方便查看参数是否被覆盖</span></span>
<span class="line"><span>-XX:+PrintFlagsFinal</span></span>
<span class="line"><span>// 打印GC时应用程序的停止时间</span></span>
<span class="line"><span>-XX:+PrintGCApplicationStoppedTime</span></span>
<span class="line"><span>// 打印在GC期间处理引用对象的时间（仅在PrintGCDetails时启用）</span></span>
<span class="line"><span>-XX:+PrintReferenceGC</span></span></code></pre></div><h3 id="打印参数参数" tabindex="-1">打印参数参数 <a class="header-anchor" href="#打印参数参数" aria-label="Permalink to &quot;打印参数参数&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 打印最终使用的jvm参数</span></span>
<span class="line"><span>-XX:+PrintFlagsFinal</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 打印默认参数</span></span>
<span class="line"><span>-XX:+PrintFlagsInitial </span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 打印用户设置的参数</span></span>
<span class="line"><span>-XX:+PrintCommandLineFlags</span></span></code></pre></div><h3 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h3><h5 id="xx-perfdisablesharedmem" tabindex="-1">-XX:+PerfDisableSharedMem <a class="header-anchor" href="#xx-perfdisablesharedmem" aria-label="Permalink to &quot;-XX:+PerfDisableSharedMem&quot;">​</a></h5><p>该参数决定了存储PerfData的内存是不是可以被共享，也就是说不管这个参数设置没设置，jvm在启动的时候都会分配一块内存来存PerfData，只是说这个PerfData是不是其他进程可见的问题，如果设置了这个参数，说明不能被共享，此时其他进程将访问不了该内存，这样一来，譬如我们jps，jstat等都无法工作。默认这个参数是关闭的，也就是默认支持共享的方式</p><h5 id="xx-useperfdata" tabindex="-1">-XX:-UsePerfData <a class="header-anchor" href="#xx-useperfdata" aria-label="Permalink to &quot;-XX:-UsePerfData&quot;">​</a></h5><p>如果关闭了UsePerfData这个参数，那么jvm启动过程中perf memory都不会被创建，默认情况是是打开的</p><h4 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h4>`,14),r=[d];function p(i,l,o,c,h,X){return s(),a("div",null,r)}const g=t(n,[["render",p]]);export{u as __pageData,g as default};
